/**
 * RAG Workflow - Orquestração LangGraph para decisões judiciais
 * 
 * Coordena queries no Knowledge Graph (Memgraph) e Vector Store (ChromaDB)
 * para gerar decisões fundamentadas com citações precisas.
 */

import { StateGraph, END, START } from '@langchain/langgraph';
import { RunnableConfig } from '@langchain/core/runnables';
import { memgraph } from '../graph/memgraphClient';
import { chromadb, SearchResult } from '../vector/chromaClient';
import { embeddingService } from '../vector/embeddings';

// ====================
// TIPOS E INTERFACES
// ====================

/**
 * Contexto recuperado do Knowledge Graph
 */
export interface GraphContext {
    type: 'lei' | 'artigo' | 'sumula' | 'conflito';
    id: string;
    texto: string;
    relevancia: number;
    metadata: {
        nome?: string;
        numero?: string;
        tribunal?: string;
        dataVigencia?: string;
        status?: string;
        conflitoCom?: string[];
        resolucao?: string;
    };
}

/**
 * Contexto recuperado do Vector Store
 */
export interface VectorContext {
    type: 'doutrina' | 'jurisprudencia';
    id: string;
    texto: string;
    score: number;
    citacaoABNT: string;
    metadata: {
        autor?: string;
        titulo?: string;
        pagina?: number;
        tribunal?: string;
        numeroProcesso?: string;
    };
}

/**
 * Citação formatada para a decisão final
 */
export interface Citation {
    tipo: 'doutrina' | 'jurisprudencia' | 'legislacao' | 'sumula';
    textoOriginal: string;
    citacaoABNT: string;
    relevancia: number;
}

/**
 * Estado do workflow RAG
 */
export interface RAGState {
    // Entrada
    query: string;
    materia: string;

    // Contexto recuperado
    graphContext: GraphContext[];
    vectorContext: VectorContext[];

    // Processamento
    contextPrompt: string;

    // Saída
    response: string;
    citations: Citation[];

    // Metadados
    modelUsed: string;
    processingTimeMs: number;
    errors: string[];
}

// ====================
// NÓS DO WORKFLOW
// ====================

/**
 * Nó 1: Parse da Query
 * Extrai informações relevantes da query do usuário
 */
async function parseQueryNode(
    state: RAGState,
    _config?: RunnableConfig
): Promise<Partial<RAGState>> {
    console.log('[RAG] Parsing query:', state.query?.substring(0, 50));

    // Por enquanto, apenas passa adiante
    // TODO: Extrair entidades jurídicas da query (leis mencionadas, temas, etc)

    return {
        errors: [],
    };
}

/**
 * Nó 2: Query no Knowledge Graph
 * Busca leis, artigos, súmulas e conflitos relevantes
 */
async function queryGraphNode(
    state: RAGState,
    _config?: RunnableConfig
): Promise<Partial<RAGState>> {
    console.log('[RAG] Querying Knowledge Graph para matéria:', state.materia);

    const graphContext: GraphContext[] = [];

    try {
        // Query 1: Buscar leis relacionadas à matéria
        const leisQuery = `
      MATCH (m:Materia {nome: $materia})<-[:ABORDA]-(d:Doutrina)
      OPTIONAL MATCH (d)-[:COMENTA]->(a:Artigo)<-[:CONTEM]-(l:Lei)
      RETURN DISTINCT l.id AS leiId, l.nome AS leiNome, l.sigla AS sigla, 
             a.id AS artigoId, a.texto AS artigoTexto, a.numero AS artigoNumero
      LIMIT 10
    `;

        const leisResult = await memgraph.query(leisQuery, { materia: state.materia });

        for (const row of leisResult) {
            if (row.leiId) {
                graphContext.push({
                    type: 'lei',
                    id: row.leiId as string,
                    texto: `${row.sigla || row.leiNome}`,
                    relevancia: 0.9,
                    metadata: {
                        nome: row.leiNome as string,
                    },
                });
            }

            if (row.artigoId && row.artigoTexto) {
                graphContext.push({
                    type: 'artigo',
                    id: row.artigoId as string,
                    texto: row.artigoTexto as string,
                    relevancia: 0.85,
                    metadata: {
                        numero: row.artigoNumero as string,
                    },
                });
            }
        }

        // Query 2: Buscar súmulas relevantes
        const sumulasQuery = `
      MATCH (m:Materia {nome: $materia})<-[:ABORDA]-(s:Sumula)
      OPTIONAL MATCH (s)-[:EMITIDA_POR]->(t:Tribunal)
      RETURN s.id AS id, s.texto AS texto, s.numero AS numero, t.sigla AS tribunal
      LIMIT 5
    `;

        const sumulasResult = await memgraph.query(sumulasQuery, { materia: state.materia });

        for (const row of sumulasResult) {
            if (row.id) {
                graphContext.push({
                    type: 'sumula',
                    id: row.id as string,
                    texto: row.texto as string,
                    relevancia: 0.95,
                    metadata: {
                        numero: row.numero as string,
                        tribunal: row.tribunal as string,
                    },
                });
            }
        }

        // Query 3: Buscar conflitos legais
        const conflitosQuery = `
      MATCH (l1:Lei)-[c:CONFLITA_COM]->(l2:Lei)
      WHERE l1.status = 'vigente' OR l2.status = 'vigente'
      RETURN l1.id AS lei1Id, l1.nome AS lei1Nome, 
             l2.id AS lei2Id, l2.nome AS lei2Nome,
             c.resolucao AS resolucao
      LIMIT 5
    `;

        const conflitosResult = await memgraph.query(conflitosQuery, {});

        for (const row of conflitosResult) {
            if (row.lei1Id && row.lei2Id) {
                graphContext.push({
                    type: 'conflito',
                    id: `conflito_${row.lei1Id}_${row.lei2Id}`,
                    texto: `Conflito entre ${row.lei1Nome} e ${row.lei2Nome}`,
                    relevancia: 0.8,
                    metadata: {
                        conflitoCom: [row.lei2Nome as string],
                        resolucao: row.resolucao as string,
                    },
                });
            }
        }

    } catch (error) {
        console.error('[RAG] Erro no Knowledge Graph:', error);
        return {
            graphContext: [],
            errors: [...(state.errors || []), `Graph error: ${error}`],
        };
    }

    console.log(`[RAG] Encontrados ${graphContext.length} itens no grafo`);

    return {
        graphContext,
    };
}

/**
 * Nó 3: Query no Vector Store
 * Busca trechos de doutrina e jurisprudência similares
 */
async function queryVectorsNode(
    state: RAGState,
    _config?: RunnableConfig
): Promise<Partial<RAGState>> {
    console.log('[RAG] Querying Vector Store para:', state.query?.substring(0, 50));

    const vectorContext: VectorContext[] = [];

    try {
        // Gera embedding da query
        const queryEmbedding = await embeddingService.generateEmbedding(state.query);

        // Busca doutrina
        const doutrinaResults = await chromadb.searchByEmbedding(
            'doutrina',
            queryEmbedding,
            5,
            state.materia ? { materia: state.materia } : undefined
        );

        for (const result of doutrinaResults) {
            vectorContext.push({
                type: 'doutrina',
                id: result.id,
                texto: result.content,
                score: result.score,
                citacaoABNT: result.metadata.citacaoABNT || 'Referência não disponível',
                metadata: {
                    autor: result.metadata.autor,
                    titulo: result.metadata.titulo,
                    pagina: result.metadata.pagina,
                },
            });
        }

        // Busca jurisprudência
        const jurisprudenciaResults = await chromadb.searchByEmbedding(
            'jurisprudencia',
            queryEmbedding,
            3
        );

        for (const result of jurisprudenciaResults) {
            vectorContext.push({
                type: 'jurisprudencia',
                id: result.id,
                texto: result.content,
                score: result.score,
                citacaoABNT: result.metadata.citacaoABNT || '',
                metadata: {
                    tribunal: result.metadata.tribunal,
                    numeroProcesso: result.metadata.titulo,
                },
            });
        }

    } catch (error) {
        console.error('[RAG] Erro no Vector Store:', error);
        return {
            vectorContext: [],
            errors: [...(state.errors || []), `Vector error: ${error}`],
        };
    }

    console.log(`[RAG] Encontrados ${vectorContext.length} itens no vector store`);

    return {
        vectorContext,
    };
}

/**
 * Nó 4: Construção do Contexto
 * Monta o prompt de contexto para a IA
 */
async function buildContextNode(
    state: RAGState,
    _config?: RunnableConfig
): Promise<Partial<RAGState>> {
    console.log('[RAG] Construindo contexto...');

    const sections: string[] = [];

    // Seção de Legislação
    const leis = state.graphContext.filter(g => g.type === 'lei' || g.type === 'artigo');
    if (leis.length > 0) {
        sections.push('## LEGISLAÇÃO APLICÁVEL');
        for (const lei of leis) {
            sections.push(`- ${lei.texto}`);
        }
    }

    // Seção de Súmulas
    const sumulas = state.graphContext.filter(g => g.type === 'sumula');
    if (sumulas.length > 0) {
        sections.push('\n## SÚMULAS RELEVANTES');
        for (const sumula of sumulas) {
            const tribunal = sumula.metadata.tribunal || 'STJ';
            sections.push(`- Súmula ${sumula.metadata.numero} do ${tribunal}: "${sumula.texto}"`);
        }
    }

    // Seção de Conflitos
    const conflitos = state.graphContext.filter(g => g.type === 'conflito');
    if (conflitos.length > 0) {
        sections.push('\n## ⚠️ CONFLITOS NORMATIVOS');
        for (const conflito of conflitos) {
            sections.push(`- ${conflito.texto}`);
            if (conflito.metadata.resolucao) {
                sections.push(`  Resolução: ${conflito.metadata.resolucao}`);
            }
        }
    }

    // Seção de Doutrina
    const doutrina = state.vectorContext.filter(v => v.type === 'doutrina');
    if (doutrina.length > 0) {
        sections.push('\n## DOUTRINA');
        for (const d of doutrina.slice(0, 3)) {
            sections.push(`### ${d.metadata.autor || 'Autor'}`);
            sections.push(`> "${d.texto.substring(0, 500)}${d.texto.length > 500 ? '...' : ''}"`);
            sections.push(`Fonte: ${d.citacaoABNT}`);
        }
    }

    // Seção de Jurisprudência
    const jurisprudencia = state.vectorContext.filter(v => v.type === 'jurisprudencia');
    if (jurisprudencia.length > 0) {
        sections.push('\n## JURISPRUDÊNCIA');
        for (const j of jurisprudencia.slice(0, 2)) {
            const tribunal = j.metadata.tribunal || 'TJRN';
            sections.push(`### ${tribunal}`);
            sections.push(`> "${j.texto.substring(0, 400)}${j.texto.length > 400 ? '...' : ''}"`);
        }
    }

    const contextPrompt = sections.join('\n');

    console.log(`[RAG] Contexto construído: ${contextPrompt.length} caracteres`);

    return {
        contextPrompt,
    };
}

/**
 * Nó 5: Extração de Citações
 * Formata citações para a resposta final
 */
async function extractCitationsNode(
    state: RAGState,
    _config?: RunnableConfig
): Promise<Partial<RAGState>> {
    console.log('[RAG] Extraindo citações...');

    const citations: Citation[] = [];

    // Citações de doutrina
    for (const d of state.vectorContext.filter(v => v.type === 'doutrina')) {
        citations.push({
            tipo: 'doutrina',
            textoOriginal: d.texto.substring(0, 200),
            citacaoABNT: d.citacaoABNT,
            relevancia: d.score,
        });
    }

    // Citações de jurisprudência
    for (const j of state.vectorContext.filter(v => v.type === 'jurisprudencia')) {
        citations.push({
            tipo: 'jurisprudencia',
            textoOriginal: j.texto.substring(0, 200),
            citacaoABNT: j.citacaoABNT || `${j.metadata.tribunal}, ${j.metadata.numeroProcesso}`,
            relevancia: j.score,
        });
    }

    // Citações de súmulas
    for (const s of state.graphContext.filter(g => g.type === 'sumula')) {
        citations.push({
            tipo: 'sumula',
            textoOriginal: s.texto,
            citacaoABNT: `Súmula ${s.metadata.numero} do ${s.metadata.tribunal || 'STJ'}`,
            relevancia: s.relevancia,
        });
    }

    // Ordena por relevância
    citations.sort((a, b) => b.relevancia - a.relevancia);

    console.log(`[RAG] ${citations.length} citações extraídas`);

    return {
        citations,
    };
}

// ====================
// MONTAGEM DO WORKFLOW
// ====================

/**
 * Cria e configura o StateGraph do LangGraph
 */
function createRAGWorkflow() {
    const workflow = new StateGraph<RAGState>({
        channels: {
            query: { value: (x: string, y: string) => y ?? x, default: () => '' },
            materia: { value: (x: string, y: string) => y ?? x, default: () => '' },
            graphContext: { value: (x: GraphContext[], y: GraphContext[]) => y ?? x, default: () => [] },
            vectorContext: { value: (x: VectorContext[], y: VectorContext[]) => y ?? x, default: () => [] },
            contextPrompt: { value: (x: string, y: string) => y ?? x, default: () => '' },
            response: { value: (x: string, y: string) => y ?? x, default: () => '' },
            citations: { value: (x: Citation[], y: Citation[]) => y ?? x, default: () => [] },
            modelUsed: { value: (x: string, y: string) => y ?? x, default: () => 'gemini-2.0-flash' },
            processingTimeMs: { value: (x: number, y: number) => y ?? x, default: () => 0 },
            errors: { value: (x: string[], y: string[]) => [...(x || []), ...(y || [])], default: () => [] },
        },
    });

    // Adiciona nós
    workflow.addNode('parseQuery', parseQueryNode);
    workflow.addNode('queryGraph', queryGraphNode);
    workflow.addNode('queryVectors', queryVectorsNode);
    workflow.addNode('buildContext', buildContextNode);
    workflow.addNode('extractCitations', extractCitationsNode);

    // Define edges
    workflow.addEdge(START, 'parseQuery');
    workflow.addEdge('parseQuery', 'queryGraph');
    workflow.addEdge('parseQuery', 'queryVectors'); // Paralelo
    workflow.addEdge('queryGraph', 'buildContext');
    workflow.addEdge('queryVectors', 'buildContext');
    workflow.addEdge('buildContext', 'extractCitations');
    workflow.addEdge('extractCitations', END);

    return workflow.compile();
}

// ====================
// EXPORTAÇÕES
// ====================

/**
 * Aplicação RAG compilada
 */
export const ragApp = createRAGWorkflow();

/**
 * Função de conveniência para invocar o RAG
 */
export async function invokeRAG(
    query: string,
    materia: string
): Promise<RAGState> {
    const startTime = Date.now();

    const result = await ragApp.invoke({
        query,
        materia,
        graphContext: [],
        vectorContext: [],
        contextPrompt: '',
        response: '',
        citations: [],
        modelUsed: 'gemini-2.0-flash',
        processingTimeMs: 0,
        errors: [],
    });

    result.processingTimeMs = Date.now() - startTime;

    return result;
}

/**
 * Obtém apenas o contexto (sem gerar resposta)
 * Útil para injetar no pipeline existente
 */
export async function getRAGContext(
    query: string,
    materia: string
): Promise<{ context: string; citations: Citation[] }> {
    const result = await invokeRAG(query, materia);

    return {
        context: result.contextPrompt,
        citations: result.citations,
    };
}
