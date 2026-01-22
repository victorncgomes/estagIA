/**
 * Feedback Workflow - Processamento de feedback do usuário
 * 
 * Quando o usuário dá 👍 ou 👎, este workflow:
 * 1. Salva o feedback no Supabase
 * 2. Identifica as fontes usadas na decisão
 * 3. Propaga pesos para o Memgraph (REFORCA/ENFRAQUECE)
 * 4. Atualiza scores no ChromaDB
 */

import { StateGraph, END, START } from '@langchain/langgraph';
import { RunnableConfig } from '@langchain/core/runnables';
import { memgraph } from '../graph/memgraphClient';
import { chromadb } from '../vector/chromaClient';
import { feedbackStore, Feedback, SourceReference } from '../feedback/feedbackStore';

// ====================
// TIPOS E INTERFACES
// ====================

/**
 * Estado do workflow de feedback
 */
export interface FeedbackState {
    // Entrada
    decisionId: string;
    userId?: string;
    rating: 1 | -1; // 👍 = 1, 👎 = -1
    materia: string;
    sourcesUsed: SourceReference[];

    // Processamento
    feedbackId?: string;
    graphUpdated: boolean;
    vectorUpdated: boolean;

    // Saída
    success: boolean;
    message: string;
    errors: string[];
}

// ====================
// NÓS DO WORKFLOW
// ====================

/**
 * Nó 1: Salvar Feedback
 * Persiste o feedback no Supabase
 */
async function saveFeedbackNode(
    state: FeedbackState,
    _config?: RunnableConfig
): Promise<Partial<FeedbackState>> {
    console.log('[Feedback] Salvando feedback:', state.rating === 1 ? '👍' : '👎');

    try {
        const feedback: Feedback = {
            decisionId: state.decisionId,
            userId: state.userId,
            rating: state.rating,
            materia: state.materia,
            sourcesUsed: state.sourcesUsed,
        };

        const feedbackId = await feedbackStore.saveFeedback(feedback);

        console.log(`[Feedback] Salvo com ID: ${feedbackId}`);

        return {
            feedbackId,
        };
    } catch (error) {
        console.error('[Feedback] Erro ao salvar:', error);
        return {
            errors: [...(state.errors || []), `Save error: ${error}`],
        };
    }
}

/**
 * Nó 2: Propagar para Knowledge Graph
 * Cria relacionamentos REFORCA ou ENFRAQUECE no Memgraph
 */
async function propagateToGraphNode(
    state: FeedbackState,
    _config?: RunnableConfig
): Promise<Partial<FeedbackState>> {
    console.log('[Feedback] Propagando para Knowledge Graph...');

    if (!state.feedbackId) {
        return { graphUpdated: false };
    }

    try {
        const relType = state.rating === 1 ? 'REFORCA' : 'ENFRAQUECE';
        const peso = state.rating === 1 ? 0.1 : -0.1;

        // Para cada fonte usada, criar relacionamento de feedback
        for (const source of state.sourcesUsed) {
            const nodeLabel = getNodeLabelForSource(source.type);

            // Primeiro, cria nó de feedback se não existir
            await memgraph.mergeNode('Feedback', { id: state.feedbackId }, {
                rating: state.rating,
                materia: state.materia,
                createdAt: new Date().toISOString(),
            });

            // Cria relacionamento de feedback para a fonte
            const cypher = `
        MATCH (f:Feedback {id: $feedbackId})
        MATCH (s:${nodeLabel} {id: $sourceId})
        MERGE (f)-[r:${relType}]->(s)
        SET r.peso = COALESCE(r.peso, 0) + $peso
      `;

            await memgraph.query(cypher, {
                feedbackId: state.feedbackId,
                sourceId: source.id,
                peso,
            });

            console.log(`[Feedback] ${relType} criado para ${source.id}`);
        }

        return { graphUpdated: true };
    } catch (error) {
        console.error('[Feedback] Erro ao propagar para grafo:', error);
        return {
            graphUpdated: false,
            errors: [...(state.errors || []), `Graph error: ${error}`],
        };
    }
}

/**
 * Nó 3: Atualizar Vector Store
 * Ajusta scores de relevância no ChromaDB
 */
async function updateVectorScoresNode(
    state: FeedbackState,
    _config?: RunnableConfig
): Promise<Partial<FeedbackState>> {
    console.log('[Feedback] Atualizando scores no Vector Store...');

    try {
        for (const source of state.sourcesUsed) {
            if (source.type === 'doutrina') {
                await chromadb.updateScore('doutrina', source.id, state.rating);
            } else if (source.type === 'jurisprudencia') {
                await chromadb.updateScore('jurisprudencia', source.id, state.rating);
            }
        }

        console.log('[Feedback] Scores atualizados');

        return { vectorUpdated: true };
    } catch (error) {
        console.error('[Feedback] Erro ao atualizar vector store:', error);
        return {
            vectorUpdated: false,
            errors: [...(state.errors || []), `Vector error: ${error}`],
        };
    }
}

/**
 * Nó 4: Finalizar
 * Consolida resultado do workflow
 */
async function finalizeNode(
    state: FeedbackState,
    _config?: RunnableConfig
): Promise<Partial<FeedbackState>> {
    const hasErrors = state.errors && state.errors.length > 0;
    const success = !hasErrors && state.graphUpdated && state.vectorUpdated;

    let message: string;
    if (success) {
        message = 'Feedback processado com sucesso';
    } else if (state.feedbackId) {
        message = 'Feedback salvo, mas houve erros na propagação';
    } else {
        message = 'Erro ao processar feedback';
    }

    console.log(`[Feedback] Finalizado: ${message}`);

    return {
        success,
        message,
    };
}

// ====================
// FUNÇÕES AUXILIARES
// ====================

/**
 * Mapeia tipo de fonte para label de nó no Memgraph
 */
function getNodeLabelForSource(type: SourceReference['type']): string {
    switch (type) {
        case 'doutrina':
            return 'Chunk';
        case 'jurisprudencia':
            return 'Julgado';
        case 'legislacao':
            return 'Artigo';
        case 'modelo':
            return 'Modelo';
        default:
            return 'Chunk';
    }
}

// ====================
// MONTAGEM DO WORKFLOW
// ====================

/**
 * Cria e configura o StateGraph de feedback
 */
function createFeedbackWorkflow() {
    const workflow = new StateGraph<FeedbackState>({
        channels: {
            decisionId: { value: (x: string, y: string) => y ?? x, default: () => '' },
            userId: { value: (x: string | undefined, y: string | undefined) => y ?? x, default: () => undefined },
            rating: { value: (x: 1 | -1, y: 1 | -1) => y ?? x, default: () => 1 as const },
            materia: { value: (x: string, y: string) => y ?? x, default: () => '' },
            sourcesUsed: {
                value: (x: SourceReference[], y: SourceReference[]) => y ?? x,
                default: () => []
            },
            feedbackId: {
                value: (x: string | undefined, y: string | undefined) => y ?? x,
                default: () => undefined
            },
            graphUpdated: { value: (x: boolean, y: boolean) => y ?? x, default: () => false },
            vectorUpdated: { value: (x: boolean, y: boolean) => y ?? x, default: () => false },
            success: { value: (x: boolean, y: boolean) => y ?? x, default: () => false },
            message: { value: (x: string, y: string) => y ?? x, default: () => '' },
            errors: {
                value: (x: string[], y: string[]) => [...(x || []), ...(y || [])],
                default: () => []
            },
        },
    });

    // Adiciona nós
    workflow.addNode('saveFeedback', saveFeedbackNode);
    workflow.addNode('propagateToGraph', propagateToGraphNode);
    workflow.addNode('updateVectorScores', updateVectorScoresNode);
    workflow.addNode('finalize', finalizeNode);

    // Define edges
    workflow.addEdge(START, 'saveFeedback');
    workflow.addEdge('saveFeedback', 'propagateToGraph');
    workflow.addEdge('saveFeedback', 'updateVectorScores'); // Paralelo
    workflow.addEdge('propagateToGraph', 'finalize');
    workflow.addEdge('updateVectorScores', 'finalize');
    workflow.addEdge('finalize', END);

    return workflow.compile();
}

// ====================
// EXPORTAÇÕES
// ====================

/**
 * Aplicação de Feedback compilada
 */
export const feedbackApp = createFeedbackWorkflow();

/**
 * Função de conveniência para processar feedback
 */
export async function processFeedback(
    decisionId: string,
    rating: 1 | -1,
    materia: string,
    sourcesUsed: SourceReference[],
    userId?: string
): Promise<FeedbackState> {
    const result = await feedbackApp.invoke({
        decisionId,
        userId,
        rating,
        materia,
        sourcesUsed,
        graphUpdated: false,
        vectorUpdated: false,
        success: false,
        message: '',
        errors: [],
    });

    return result;
}

/**
 * Shortcut para feedback positivo
 */
export async function thumbsUp(
    decisionId: string,
    materia: string,
    sourcesUsed: SourceReference[],
    userId?: string
): Promise<FeedbackState> {
    return processFeedback(decisionId, 1, materia, sourcesUsed, userId);
}

/**
 * Shortcut para feedback negativo
 */
export async function thumbsDown(
    decisionId: string,
    materia: string,
    sourcesUsed: SourceReference[],
    userId?: string
): Promise<FeedbackState> {
    return processFeedback(decisionId, -1, materia, sourcesUsed, userId);
}
