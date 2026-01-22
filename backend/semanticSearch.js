/**
 * estagIA - RAG Híbrido Local (Sem Docker)
 * 
 * Busca semântica usando embeddings calculados em memória
 * Fallback para busca por keyword quando embeddings indisponíveis
 * 
 * @version 1.0.0
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const EMBEDDING_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent';

// Cache de embeddings para modelos (carregado uma vez)
let modelosEmbeddingsCache = null;

/**
 * Gera embedding para um texto usando Gemini
 */
async function getEmbedding(text) {
    if (!GEMINI_API_KEY || !text || text.trim().length < 10) {
        return null;
    }

    try {
        const response = await fetch(`${EMBEDDING_ENDPOINT}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'models/text-embedding-004',
                content: { parts: [{ text: text.slice(0, 2000) }] }
            })
        });

        if (!response.ok) {
            console.error('[Embedding] Erro:', response.status);
            return null;
        }

        const data = await response.json();
        return data.embedding?.values || null;
    } catch (error) {
        console.error('[Embedding] Erro:', error.message);
        return null;
    }
}

/**
 * Calcula similaridade de cosseno entre dois vetores
 */
function cosineSimilarity(a, b) {
    if (!a || !b || a.length !== b.length) return 0;

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    const denominator = Math.sqrt(normA) * Math.sqrt(normB);
    return denominator === 0 ? 0 : dotProduct / denominator;
}

/**
 * Busca semântica em modelos usando embeddings
 */
async function searchModelosSemantic(query, modelos, categoria, topK = 5) {
    // Gerar embedding da query
    const queryEmbedding = await getEmbedding(query);

    if (!queryEmbedding) {
        console.log('[RAG] Embedding indisponível, usando busca por keyword');
        return null; // Fallback para keyword
    }

    console.log('[RAG] Usando busca semântica com embeddings');

    // Filtrar por categoria se especificada
    let modelosFiltrados = categoria
        ? modelos.filter(m => m.categoria === categoria || m.agrupador === categoria)
        : modelos;

    // Calcular similaridade para cada modelo
    const results = [];

    for (const modelo of modelosFiltrados) {
        // Gerar embedding do modelo (nome + trecho)
        const modeloTexto = `${modelo.nome} ${modelo.trecho || ''}`.slice(0, 1500);
        const modeloEmbedding = await getEmbedding(modeloTexto);

        if (modeloEmbedding) {
            const similarity = cosineSimilarity(queryEmbedding, modeloEmbedding);
            results.push({
                ...modelo,
                relevancia: Math.round(similarity * 100),
                metodo: 'semantic'
            });
        }
    }

    // Ordenar por similaridade e retornar top K
    return results
        .sort((a, b) => b.relevancia - a.relevancia)
        .slice(0, topK);
}

/**
 * Busca híbrida: semântica + keyword
 * Tenta semântica primeiro, fallback para keyword
 */
async function searchHibrido(query, modelos, categoria, orientacoes, topK = 5) {
    // Tentar busca semântica primeiro
    const semanticResults = await searchModelosSemantic(query, modelos, categoria, topK);

    if (semanticResults && semanticResults.length > 0) {
        return semanticResults;
    }

    // Fallback: busca por keyword (código existente no server.js)
    console.log('[RAG] Fallback para busca por keyword');
    return null; // Indica que deve usar busca por keyword
}

module.exports = {
    getEmbedding,
    cosineSimilarity,
    searchModelosSemantic,
    searchHibrido
};
