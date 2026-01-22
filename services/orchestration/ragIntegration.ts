/**
 * RAG Integration - Integração do RAG Híbrido com o Pipeline
 * 
 * Fornece contexto enriquecido ao pipeline principal usando:
 * - ChromaDB para busca semântica vetorial (embeddings)
 * - Memgraph para busca em grafo (relacionamentos)
 * - Backend Proxy para busca por keyword (fallback)
 * 
 * @version 0.3.0
 */

import { searchSimilar, isChromaAvailable } from '../vector/chromaClient';
import { getEmbedding } from '../vector/embeddings';
import { findRelatedLaws, findSumulasByArtigo, isMemgraphAvailable } from '../graph/memgraphClient';

// URL do backend proxy (fallback)
const BACKEND_URL = 'http://localhost:3508';

// Flags de disponibilidade
let ragAvailable = false;
let chromaAvailable = false;
let memgraphAvailable = false;
let lastCheck = 0;

/**
 * Contexto enriquecido pelo RAG
 */
export interface RAGContext {
    /** Modelos de decisão do magistrado */
    modelos?: Array<{
        nome: string;
        arquivo: string;
        categoria: string;
        agrupador?: string;
        tipo?: string;
        path?: string;
        relevancia?: number;
        trecho?: string; // Conteúdo extraído (até 2000 chars)
    }>;

    /** Legislação relevante encontrada */
    legislacao: Array<{
        id: string;
        apelido: string;
        titulo: string;
        relevancia: number;
        trecho?: string;
    }>;

    /** Doutrina relevante encontrada */
    doutrina: Array<{
        titulo: string;
        autor: string;
        citacao: string;
        trecho: string;
        relevancia: number;
    }>;

    /** Jurisprudência relevante encontrada */
    jurisprudencia: Array<{
        tribunal: string;
        tipo: string;
        numero?: string;
        ementa: string;
        relevancia: number;
    }>;

    /** Conflitos normativos detectados */
    conflitos: Array<{
        leiA: string;
        leiB: string;
        tipo: string;
        resolucao?: string;
    }>;

    /** Tempo de execução das consultas */
    tempoExecucao: number;

    /** Nível de profundidade usado na busca */
    nivel?: number;
}

/**
 * Verifica se os serviços RAG estão disponíveis
 * Agora checa via backend proxy
 */
export async function checkRAGAvailability(): Promise<boolean> {
    // Cache: não checar mais de 1x por 10 segundos
    const now = Date.now();
    if (now - lastCheck < 10000) {
        return ragAvailable;
    }
    lastCheck = now;

    try {
        const response = await fetch(`${BACKEND_URL}/api/health`, {
            method: 'GET',
            signal: AbortSignal.timeout(3000), // Timeout de 3s
        });

        if (response.ok) {
            ragAvailable = true;
            return true;
        }
    } catch {
        ragAvailable = false;
    }

    return false;
}

/**
 * Busca contexto enriquecido para a matéria selecionada via backend
 * O nível determina quais fontes são consultadas (cumulativo):
 * 1: Nenhuma (telegráfico)
 * 2: + Modelos
 * 3: + Legislação + Jurisprudência  
 * 4: + Doutrina
 */
export async function getEnrichedContext(
    materia: string,
    textoBase: string,
    nivel: number = 3,
    orientacoes?: string
): Promise<RAGContext | null> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/rag`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                materia,
                texto: textoBase,
                nivel,
                orientacoes: orientacoes || textoBase, // Usa orientações ou texto base
            }),
            signal: AbortSignal.timeout(10000), // Timeout de 10s
        });

        if (!response.ok) {
            console.warn('RAG endpoint error:', response.status);
            return null;
        }

        const data = await response.json();

        // Converter formato do backend para o formato esperado
        return {
            legislacao: (data.legislacao || []).map((l: any) => ({
                id: l.id || '',
                apelido: l.apelido || '',
                titulo: l.titulo || '',
                relevancia: 1,
            })),
            doutrina: (data.doutrina || []).map((d: any) => ({
                titulo: d.titulo || '',
                autor: d.autor || '',
                citacao: d.citacao || '',
                trecho: '',
                relevancia: 1,
            })),
            jurisprudencia: (data.jurisprudencia || []).map((j: any) => ({
                tribunal: j.tribunal || '',
                tipo: j.tipo || '',
                numero: j.numero || '',
                ementa: j.ementa || '',
                relevancia: 1,
            })),
            conflitos: [],
            tempoExecucao: data.tempoExecucao || 0,
            nivel: data.nivel || nivel,
            modelos: (data.modelos || []).map((m: any) => ({
                nome: m.nome || m.arquivo || '',
                arquivo: m.arquivo || '',
                categoria: m.categoria || '',
                agrupador: m.agrupador || '',
                tipo: m.tipo || 'decisao',
                path: m.path || '',
                relevancia: m.relevancia || 1,
                trecho: m.trecho || '', // Conteúdo extraído (até 2000 chars)
            })),
        };
    } catch (error) {
        console.warn('RAG fetch error:', error);
        return null;
    }
}

/**
 * Formata o contexto RAG como texto para inclusão no prompt
 */
export function formatRAGContext(context: RAGContext): string {
    const sections: string[] = [];

    // Modelos de decisão com conteúdo
    if (context.modelos && context.modelos.length > 0) {
        const modelosComTrecho = context.modelos.filter(m => (m as any).trecho);
        const modelosSemTrecho = context.modelos.filter(m => !(m as any).trecho);

        if (modelosComTrecho.length > 0) {
            sections.push(`## MODELOS DE DECISÃO DO MAGISTRADO (REFERÊNCIA DE ESTILO)
IMPORTANTE: Use estes modelos como referência para estrutura, linguagem e estilo. NÃO copie literalmente, apenas inspire-se no formato.

${modelosComTrecho.map(m =>
                `### ${m.nome} (${m.categoria})
\`\`\`
${(m as any).trecho}
\`\`\`
`
            ).join('\n')}`);
        }

        if (modelosSemTrecho.length > 0) {
            sections.push(`## Outros modelos relevantes (apenas referência de nome):
${modelosSemTrecho.map(m => `- ${m.nome}`).join('\n')}`);
        }
    }

    // Legislação
    if (context.legislacao.length > 0) {
        sections.push(`## LEGISLAÇÃO RELEVANTE (via Knowledge Graph)\n${context.legislacao.map(l => `- ${l.apelido}: ${l.titulo}`).join('\n')
            }`);
    }

    // Conflitos
    if (context.conflitos.length > 0) {
        sections.push(`## CONFLITOS NORMATIVOS DETECTADOS\n${context.conflitos.map(c => `- ${c.leiA} × ${c.leiB}: ${c.tipo}${c.resolucao ? ` → ${c.resolucao}` : ''}`).join('\n')
            }`);
    }

    // Doutrina
    if (context.doutrina.length > 0) {
        sections.push(`## DOUTRINA RELEVANTE\n${context.doutrina.map(d =>
            `### ${d.titulo} (${d.autor})\n${d.trecho}...\n*Citação: ${d.citacao}*`
        ).join('\n\n')
            }`);
    }

    // Jurisprudência
    if (context.jurisprudencia.length > 0) {
        sections.push(`## JURISPRUDÊNCIA RELEVANTE\n${context.jurisprudencia.map(j =>
            `### ${j.tribunal} - ${j.tipo}${j.numero ? ` ${j.numero}` : ''}\n${j.ementa}...`
        ).join('\n\n')
            }`);
    }

    if (sections.length === 0) {
        return '';
    }

    return `\n\n# CONTEXTO ENRIQUECIDO (RAG)\n*Tempo de consulta: ${context.tempoExecucao}ms*\n\n${sections.join('\n\n---\n\n')}`;
}

/**
 * Gera citações formatadas a partir do contexto RAG
 */
export function generateCitations(context: RAGContext): string[] {
    const citations: string[] = [];

    // Citações de legislação
    for (const lei of context.legislacao) {
        citations.push(`${lei.apelido} (${lei.titulo})`);
    }

    // Citações de doutrina (ABNT)
    for (const d of context.doutrina) {
        if (d.citacao) {
            citations.push(d.citacao);
        }
    }

    // Citações de jurisprudência
    for (const j of context.jurisprudencia) {
        if (j.numero) {
            citations.push(`${j.tribunal}, ${j.tipo} ${j.numero}`);
        }
    }

    return citations;
}

/**
 * Status atual do RAG
 */
export function getRAGStatus(): {
    available: boolean;
    services: { memgraph: boolean; chromadb: boolean };
} {
    return {
        available: ragAvailable,
        services: {
            memgraph: ragAvailable,
            chromadb: ragAvailable,
        },
    };
}
