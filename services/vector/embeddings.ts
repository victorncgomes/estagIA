/**
 * estagIA - Embeddings Service
 * Gera embeddings usando Google Gemini text-embedding-004
 * 
 * @version 1.0.0
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const EMBEDDING_MODEL = 'text-embedding-004';
const EMBEDDING_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent`;

// Cache de embeddings para evitar chamadas duplicadas
const embeddingCache = new Map<string, number[]>();

/**
 * Gera embedding para um texto usando Gemini
 */
export async function getEmbedding(text: string): Promise<number[]> {
    // Verificar cache
    const cacheKey = text.slice(0, 100); // Usa primeiros 100 chars como chave
    if (embeddingCache.has(cacheKey)) {
        return embeddingCache.get(cacheKey)!;
    }

    try {
        const response = await fetch(`${EMBEDDING_ENDPOINT}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: `models/${EMBEDDING_MODEL}`,
                content: { parts: [{ text }] }
            })
        });

        if (!response.ok) {
            throw new Error(`Embedding API error: ${response.status}`);
        }

        const data = await response.json();
        const embedding = data.embedding?.values || [];

        // Cachear resultado
        embeddingCache.set(cacheKey, embedding);

        return embedding;
    } catch (error) {
        console.error('[Embeddings] Erro ao gerar embedding:', error);
        return [];
    }
}

/**
 * Gera embeddings para múltiplos textos em batch
 */
export async function getEmbeddingsBatch(
    texts: string[],
    batchSize: number = 10
): Promise<number[][]> {
    const results: number[][] = [];

    for (let i = 0; i < texts.length; i += batchSize) {
        const batch = texts.slice(i, i + batchSize);
        const batchResults = await Promise.all(
            batch.map(text => getEmbedding(text))
        );
        results.push(...batchResults);

        // Rate limiting: aguardar 100ms entre batches
        if (i + batchSize < texts.length) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    return results;
}

/**
 * Calcula similaridade de cosseno entre dois embeddings
 */
export function cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length || a.length === 0) return 0;

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
 * Limpa o cache de embeddings
 */
export function clearEmbeddingCache(): void {
    embeddingCache.clear();
}

export default {
    getEmbedding,
    getEmbeddingsBatch,
    cosineSimilarity,
    clearEmbeddingCache,
};
