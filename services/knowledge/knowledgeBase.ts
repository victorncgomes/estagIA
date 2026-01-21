/**
 * estagIA - Knowledge Base (Sistema RAG)
 * Armazena e busca conteúdo para alimentar a IA
 * @version 0.1.1
 */

import { KnowledgeDocument, DocumentChunk, SearchResult, RAGConfig } from '../ai/types';

// Configuração padrão do RAG
const DEFAULT_RAG_CONFIG: RAGConfig = {
    maxResults: 5,
    minScore: 0.3,
    includeMetadata: true,
    chunkSize: 1000,
    chunkOverlap: 200,
};

// Armazenamento em memória (localStorage para persistência)
const STORAGE_KEY = 'estagia_knowledge_base';

/**
 * Carregar documentos do localStorage
 */
function loadDocuments(): Map<string, KnowledgeDocument> {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return new Map();

    try {
        const parsed = JSON.parse(stored);
        const map = new Map<string, KnowledgeDocument>();

        for (const doc of parsed) {
            // Converter strings de volta para Date
            doc.createdAt = new Date(doc.createdAt);
            doc.updatedAt = new Date(doc.updatedAt);
            map.set(doc.id, doc);
        }

        return map;
    } catch {
        return new Map();
    }
}

/**
 * Salvar documentos no localStorage
 */
function saveDocuments(docs: Map<string, KnowledgeDocument>): void {
    const array = Array.from(docs.values());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
}

// Documentos carregados em memória
let documents = loadDocuments();

/**
 * Gerar ID único
 */
function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

/**
 * Dividir texto em chunks
 */
function chunkText(text: string, config: RAGConfig = DEFAULT_RAG_CONFIG): string[] {
    const chunks: string[] = [];
    const { chunkSize, chunkOverlap } = config;

    for (let i = 0; i < text.length; i += chunkSize - chunkOverlap) {
        const chunk = text.slice(i, i + chunkSize);
        if (chunk.trim()) {
            chunks.push(chunk.trim());
        }
    }

    return chunks;
}

/**
 * Calcular similaridade simples entre textos (TF-IDF simplificado)
 */
function calculateSimilarity(query: string, text: string): number {
    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const textWords = text.toLowerCase().split(/\s+/);

    if (queryWords.length === 0) return 0;

    let matches = 0;
    for (const word of queryWords) {
        if (textWords.some(tw => tw.includes(word) || word.includes(tw))) {
            matches++;
        }
    }

    return matches / queryWords.length;
}

/**
 * Extrair highlights (trechos relevantes)
 */
function extractHighlights(query: string, text: string, maxHighlights = 3): string[] {
    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const sentences = text.split(/[.!?]\s+/);

    const scored = sentences.map(sentence => ({
        sentence,
        score: calculateSimilarity(query, sentence),
    }));

    return scored
        .filter(s => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, maxHighlights)
        .map(s => s.sentence.substring(0, 200) + (s.sentence.length > 200 ? '...' : ''));
}

// ===========================================
// API PÚBLICA
// ===========================================

/**
 * Adicionar documento à Knowledge Base
 */
export function addDocument(
    doc: Omit<KnowledgeDocument, 'id' | 'createdAt' | 'updatedAt'>
): KnowledgeDocument {
    const now = new Date();
    const newDoc: KnowledgeDocument = {
        ...doc,
        id: generateId(),
        createdAt: now,
        updatedAt: now,
    };

    documents.set(newDoc.id, newDoc);
    saveDocuments(documents);

    return newDoc;
}

/**
 * Atualizar documento
 */
export function updateDocument(
    id: string,
    updates: Partial<Omit<KnowledgeDocument, 'id' | 'createdAt'>>
): KnowledgeDocument | null {
    const doc = documents.get(id);
    if (!doc) return null;

    const updated: KnowledgeDocument = {
        ...doc,
        ...updates,
        updatedAt: new Date(),
    };

    documents.set(id, updated);
    saveDocuments(documents);

    return updated;
}

/**
 * Remover documento
 */
export function removeDocument(id: string): boolean {
    const result = documents.delete(id);
    if (result) {
        saveDocuments(documents);
    }
    return result;
}

/**
 * Obter documento por ID
 */
export function getDocument(id: string): KnowledgeDocument | undefined {
    return documents.get(id);
}

/**
 * Listar todos os documentos
 */
export function listDocuments(filters?: {
    type?: KnowledgeDocument['type'];
    materia?: string;
    tags?: string[];
}): KnowledgeDocument[] {
    let result = Array.from(documents.values());

    if (filters) {
        if (filters.type) {
            result = result.filter(d => d.type === filters.type);
        }
        if (filters.materia) {
            result = result.filter(d => d.materia === filters.materia);
        }
        if (filters.tags && filters.tags.length > 0) {
            result = result.filter(d =>
                filters.tags!.some(tag => d.tags.includes(tag))
            );
        }
    }

    return result.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
}

/**
 * Buscar documentos relevantes (RAG)
 */
export function searchDocuments(
    query: string,
    config: Partial<RAGConfig> = {}
): SearchResult[] {
    const cfg = { ...DEFAULT_RAG_CONFIG, ...config };
    const results: SearchResult[] = [];

    for (const doc of documents.values()) {
        const score = calculateSimilarity(query, doc.content);

        if (score >= cfg.minScore) {
            results.push({
                document: doc,
                score,
                highlights: extractHighlights(query, doc.content),
            });
        }
    }

    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, cfg.maxResults);
}

/**
 * Buscar por matéria específica
 */
export function searchByMateria(
    query: string,
    materia: string,
    config: Partial<RAGConfig> = {}
): SearchResult[] {
    const cfg = { ...DEFAULT_RAG_CONFIG, ...config };
    const results: SearchResult[] = [];

    for (const doc of documents.values()) {
        // Filtrar por matéria primeiro
        if (doc.materia && doc.materia !== materia) continue;

        const score = calculateSimilarity(query, doc.content);

        if (score >= cfg.minScore) {
            results.push({
                document: doc,
                score,
                highlights: extractHighlights(query, doc.content),
            });
        }
    }

    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, cfg.maxResults);
}

/**
 * Construir contexto para IA a partir dos resultados
 */
export function buildContext(results: SearchResult[]): string {
    if (results.length === 0) {
        return 'NENHUM DOCUMENTO RELEVANTE ENCONTRADO NA BASE DE CONHECIMENTO.';
    }

    let context = '=== DOCUMENTOS DA BASE DE CONHECIMENTO ===\n\n';

    for (let i = 0; i < results.length; i++) {
        const { document, score, highlights } = results[i];

        context += `--- DOCUMENTO ${i + 1} ---\n`;
        context += `Título: ${document.title}\n`;
        context += `Tipo: ${document.type}\n`;
        context += `Relevância: ${(score * 100).toFixed(0)}%\n`;
        if (document.materia) {
            context += `Matéria: ${document.materia}\n`;
        }
        context += `\nConteúdo:\n${document.content}\n\n`;
    }

    context += '=== FIM DOS DOCUMENTOS ===\n\n';
    context += 'INSTRUÇÃO: Use ESTRITAMENTE os documentos acima como fonte. ';
    context += 'NÃO invente informações que não estejam nos documentos.';

    return context;
}

/**
 * Estatísticas da Knowledge Base
 */
export function getStats(): {
    totalDocuments: number;
    byType: Record<string, number>;
    byMateria: Record<string, number>;
    totalChars: number;
} {
    const byType: Record<string, number> = {};
    const byMateria: Record<string, number> = {};
    let totalChars = 0;

    for (const doc of documents.values()) {
        byType[doc.type] = (byType[doc.type] || 0) + 1;
        if (doc.materia) {
            byMateria[doc.materia] = (byMateria[doc.materia] || 0) + 1;
        }
        totalChars += doc.content.length;
    }

    return {
        totalDocuments: documents.size,
        byType,
        byMateria,
        totalChars,
    };
}

/**
 * Limpar toda a Knowledge Base
 */
export function clearAll(): void {
    documents.clear();
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * Importar documentos em lote
 */
export function importDocuments(
    docs: Omit<KnowledgeDocument, 'id' | 'createdAt' | 'updatedAt'>[]
): number {
    let count = 0;
    for (const doc of docs) {
        addDocument(doc);
        count++;
    }
    return count;
}

/**
 * Exportar todos os documentos
 */
export function exportDocuments(): KnowledgeDocument[] {
    return Array.from(documents.values());
}
