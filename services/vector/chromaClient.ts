/**
 * estagIA - ChromaDB Vector Store Client
 * Busca semântica real usando embeddings do Gemini
 * 
 * @version 1.0.0
 */

import { ChromaClient, Collection } from 'chromadb';

// Configuração do cliente
const CHROMA_URL = process.env.CHROMA_URL || 'http://localhost:3408';

let client: ChromaClient | null = null;
let collections: Map<string, Collection> = new Map();

/**
 * Inicializa o cliente ChromaDB
 */
export async function initChromaClient(): Promise<boolean> {
    try {
        client = new ChromaClient({ path: CHROMA_URL });

        // Verificar heartbeat
        const heartbeat = await client.heartbeat();
        console.log(`[ChromaDB] Conectado - Heartbeat: ${heartbeat}`);

        return true;
    } catch (error) {
        console.error('[ChromaDB] Falha na conexão:', error);
        return false;
    }
}

/**
 * Obtém ou cria uma collection
 */
export async function getCollection(name: string): Promise<Collection | null> {
    if (!client) {
        const connected = await initChromaClient();
        if (!connected) return null;
    }

    if (collections.has(name)) {
        return collections.get(name)!;
    }

    try {
        const collection = await client!.getOrCreateCollection({
            name,
            metadata: { 'hnsw:space': 'cosine' }
        });
        collections.set(name, collection);
        return collection;
    } catch (error) {
        console.error(`[ChromaDB] Erro ao obter collection ${name}:`, error);
        return null;
    }
}

/**
 * Busca semântica por similaridade de embeddings
 */
export async function searchSimilar(
    collectionName: string,
    queryEmbedding: number[],
    nResults: number = 5,
    where?: Record<string, string>
): Promise<Array<{
    id: string;
    document: string;
    metadata: Record<string, unknown>;
    distance: number;
}>> {
    const collection = await getCollection(collectionName);
    if (!collection) {
        console.warn('[ChromaDB] Collection não disponível, retornando vazio');
        return [];
    }

    try {
        const results = await collection.query({
            queryEmbeddings: [queryEmbedding],
            nResults,
            where,
        });

        if (!results.ids[0]) return [];

        return results.ids[0].map((id, i) => ({
            id,
            document: results.documents[0]?.[i] || '',
            metadata: results.metadatas[0]?.[i] || {},
            distance: results.distances?.[0]?.[i] || 0,
        }));
    } catch (error) {
        console.error('[ChromaDB] Erro na busca:', error);
        return [];
    }
}

/**
 * Adiciona documentos à collection
 */
export async function addDocuments(
    collectionName: string,
    documents: Array<{
        id: string;
        content: string;
        embedding: number[];
        metadata?: Record<string, string>;
    }>
): Promise<boolean> {
    const collection = await getCollection(collectionName);
    if (!collection) return false;

    try {
        await collection.add({
            ids: documents.map(d => d.id),
            embeddings: documents.map(d => d.embedding),
            documents: documents.map(d => d.content),
            metadatas: documents.map(d => d.metadata || {}),
        });

        console.log(`[ChromaDB] Adicionados ${documents.length} documentos a ${collectionName}`);
        return true;
    } catch (error) {
        console.error('[ChromaDB] Erro ao adicionar documentos:', error);
        return false;
    }
}

/**
 * Verifica se ChromaDB está disponível
 */
export async function isChromaAvailable(): Promise<boolean> {
    try {
        if (!client) {
            client = new ChromaClient({ path: CHROMA_URL });
        }
        await client.heartbeat();
        return true;
    } catch {
        return false;
    }
}

export default {
    initChromaClient,
    getCollection,
    searchSimilar,
    addDocuments,
    isChromaAvailable,
};
