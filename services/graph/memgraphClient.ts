/**
 * estagIA - Memgraph Graph Database Client
 * Busca por relacionamentos em grafo (Lei→Revoga→Lei, Súmula→Interpreta→Artigo)
 * 
 * @version 1.0.0
 */

import neo4j, { Driver, Session } from 'neo4j-driver';

// Configuração do driver
const MEMGRAPH_URI = process.env.MEMGRAPH_URI || 'bolt://localhost:3108';
const MEMGRAPH_USER = process.env.MEMGRAPH_USER || '';
const MEMGRAPH_PASSWORD = process.env.MEMGRAPH_PASSWORD || '';

let driver: Driver | null = null;

/**
 * Inicializa o driver Memgraph
 */
export async function initMemgraphClient(): Promise<boolean> {
    try {
        driver = neo4j.driver(
            MEMGRAPH_URI,
            neo4j.auth.basic(MEMGRAPH_USER, MEMGRAPH_PASSWORD)
        );

        // Verificar conectividade
        const session = driver.session();
        await session.run('RETURN 1');
        await session.close();

        console.log('[Memgraph] Conectado com sucesso');
        return true;
    } catch (error) {
        console.error('[Memgraph] Falha na conexão:', error);
        return false;
    }
}

/**
 * Obtém uma sessão do driver
 */
function getSession(): Session | null {
    if (!driver) {
        console.warn('[Memgraph] Driver não inicializado');
        return null;
    }
    return driver.session();
}

/**
 * Busca leis relacionadas a uma lei específica
 */
export async function findRelatedLaws(lawId: string): Promise<Array<{
    id: string;
    nome: string;
    relacao: string;
}>> {
    const session = getSession();
    if (!session) return [];

    try {
        const result = await session.run(`
            MATCH (l:Lei {id: $id})-[r]->(related:Lei)
            RETURN related.id AS id, related.nome AS nome, type(r) AS relacao
            UNION
            MATCH (l:Lei {id: $id})<-[r]-(related:Lei)
            RETURN related.id AS id, related.nome AS nome, type(r) AS relacao
        `, { id: lawId });

        return result.records.map(record => ({
            id: record.get('id'),
            nome: record.get('nome'),
            relacao: record.get('relacao'),
        }));
    } catch (error) {
        console.error('[Memgraph] Erro ao buscar leis relacionadas:', error);
        return [];
    } finally {
        await session.close();
    }
}

/**
 * Busca súmulas que interpretam um artigo específico
 */
export async function findSumulasByArtigo(artigo: string): Promise<Array<{
    id: string;
    sumula: string;
    tribunal: string;
    texto: string;
}>> {
    const session = getSession();
    if (!session) return [];

    try {
        const result = await session.run(`
            MATCH (s:Sumula)-[:INTERPRETA]->(a:Artigo {numero: $artigo})
            RETURN s.id AS id, s.numero AS sumula, s.tribunal AS tribunal, s.texto AS texto
        `, { artigo });

        return result.records.map(record => ({
            id: record.get('id'),
            sumula: record.get('sumula'),
            tribunal: record.get('tribunal'),
            texto: record.get('texto'),
        }));
    } catch (error) {
        console.error('[Memgraph] Erro ao buscar súmulas:', error);
        return [];
    } finally {
        await session.close();
    }
}

/**
 * Busca caminho entre dois conceitos jurídicos
 */
export async function findPath(
    startNode: string,
    endNode: string,
    maxHops: number = 3
): Promise<Array<{ node: string; relation: string }>> {
    const session = getSession();
    if (!session) return [];

    try {
        const result = await session.run(`
            MATCH path = shortestPath((a {id: $start})-[*1..${maxHops}]-(b {id: $end}))
            RETURN nodes(path) AS nodes, relationships(path) AS rels
        `, { start: startNode, end: endNode });

        if (result.records.length === 0) return [];

        const record = result.records[0];
        const nodes = record.get('nodes');
        const rels = record.get('rels');

        const path: Array<{ node: string; relation: string }> = [];
        for (let i = 0; i < nodes.length; i++) {
            path.push({
                node: nodes[i].properties.id || nodes[i].properties.nome,
                relation: rels[i] ? rels[i].type : '',
            });
        }

        return path;
    } catch (error) {
        console.error('[Memgraph] Erro ao buscar caminho:', error);
        return [];
    } finally {
        await session.close();
    }
}

/**
 * Cria nós e relacionamentos no grafo
 */
export async function createRelationship(
    fromId: string,
    fromType: string,
    toId: string,
    toType: string,
    relationType: string
): Promise<boolean> {
    const session = getSession();
    if (!session) return false;

    try {
        await session.run(`
            MERGE (a:${fromType} {id: $fromId})
            MERGE (b:${toType} {id: $toId})
            MERGE (a)-[:${relationType}]->(b)
        `, { fromId, toId });

        return true;
    } catch (error) {
        console.error('[Memgraph] Erro ao criar relacionamento:', error);
        return false;
    } finally {
        await session.close();
    }
}

/**
 * Verifica se Memgraph está disponível
 */
export async function isMemgraphAvailable(): Promise<boolean> {
    try {
        if (!driver) {
            return await initMemgraphClient();
        }
        const session = driver.session();
        await session.run('RETURN 1');
        await session.close();
        return true;
    } catch {
        return false;
    }
}

/**
 * Fecha o driver
 */
export async function closeDriver(): Promise<void> {
    if (driver) {
        await driver.close();
        driver = null;
    }
}

export default {
    initMemgraphClient,
    findRelatedLaws,
    findSumulasByArtigo,
    findPath,
    createRelationship,
    isMemgraphAvailable,
    closeDriver,
};
