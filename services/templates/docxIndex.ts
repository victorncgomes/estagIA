/**
 * Serviço de Indexação de Modelos de Decisão em Arquivos DOC/DOCX
 * 
 * Este módulo permite buscar e referenciar modelos de decisão
 * armazenados em arquivos DOC/DOCX na pasta knowledge/decisoes/
 */

import { Modelo, Agrupador, TipoDocumento, Magistrado } from './types';

export interface ModeloDocx {
    arquivo: string;
    nome: string;
    agrupador: Agrupador;
    tipo: TipoDocumento;
    formato: 'docx' | 'odt' | 'pdf';
    categoria: string;
    path: string;
}

export interface CategoriaDocx {
    path: string;
    totalArquivos: number;
    modelos: Omit<ModeloDocx, 'categoria' | 'path'>[];
}

export interface IndiceDocx {
    version: string;
    lastUpdated: string;
    description: string;
    totalModelos: number;
    categorias: Record<string, CategoriaDocx>;
}

// Caminho base para os arquivos de modelos
const KNOWLEDGE_BASE_PATH = 'knowledge/decisoes';

/**
 * Carrega o índice JSON dos modelos DOCX
 * Em ambiente Node.js, usar fs para ler o arquivo
 * Em ambiente browser, retornar índice inline
 */
export function getIndiceDocx(): IndiceDocx {
    // Índice inline para uso em browser
    // Em produção, isso seria carregado do arquivo index.json
    return {
        version: '1.0.0',
        lastUpdated: '2026-01-20T20:20:00-03:00',
        description: 'Índice de modelos de decisão em arquivos DOC/DOCX/ODT',
        totalModelos: 123,
        categorias: {
            decisoesvrep: {
                path: `${KNOWLEDGE_BASE_PATH}/decisoesvrep`,
                totalArquivos: 82,
                modelos: []
            },
            indulto: {
                path: `${KNOWLEDGE_BASE_PATH}/indulto`,
                totalArquivos: 12,
                modelos: []
            },
            remicao: {
                path: `${KNOWLEDGE_BASE_PATH}/remicao`,
                totalArquivos: 21,
                modelos: []
            },
            retificacao: {
                path: `${KNOWLEDGE_BASE_PATH}/retificacao`,
                totalArquivos: 8,
                modelos: []
            }
        }
    };
}

/**
 * Lista todos os modelos DOCX disponíveis
 */
export function listarModelosDocx(): ModeloDocx[] {
    const indice = getIndiceDocx();
    const modelos: ModeloDocx[] = [];

    for (const [categoria, dados] of Object.entries(indice.categorias)) {
        for (const modelo of dados.modelos) {
            modelos.push({
                ...modelo,
                categoria,
                path: `${dados.path}/${modelo.arquivo}`
            });
        }
    }

    return modelos;
}

/**
 * Busca modelos DOCX por termo no nome
 */
export function buscarModelosDocxPorTermo(termo: string): ModeloDocx[] {
    const termoLower = termo.toLowerCase();
    return listarModelosDocx().filter(
        modelo => modelo.nome.toLowerCase().includes(termoLower)
    );
}

/**
 * Busca modelos DOCX por agrupador
 */
export function buscarModelosDocxPorAgrupador(agrupador: Agrupador): ModeloDocx[] {
    return listarModelosDocx().filter(
        modelo => modelo.agrupador === agrupador
    );
}

/**
 * Retorna o caminho completo para um arquivo de modelo
 */
export function getModeloDocxPath(categoria: string, arquivo: string): string {
    return `${KNOWLEDGE_BASE_PATH}/${categoria}/${arquivo}`;
}

/**
 * Estatísticas dos modelos DOCX
 */
export function getEstatisticasDocx(): {
    totalModelos: number;
    porCategoria: Record<string, number>;
    porAgrupador: Record<string, number>;
    porFormato: Record<string, number>;
} {
    const indice = getIndiceDocx();
    const modelos = listarModelosDocx();

    const porAgrupador: Record<string, number> = {};
    const porFormato: Record<string, number> = {};

    for (const modelo of modelos) {
        porAgrupador[modelo.agrupador] = (porAgrupador[modelo.agrupador] || 0) + 1;
        porFormato[modelo.formato] = (porFormato[modelo.formato] || 0) + 1;
    }

    return {
        totalModelos: indice.totalModelos,
        porCategoria: Object.fromEntries(
            Object.entries(indice.categorias).map(([k, v]) => [k, v.totalArquivos])
        ),
        porAgrupador,
        porFormato
    };
}
