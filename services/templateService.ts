/**
 * Template Service - Serviço Unificado de Modelos de Decisão
 * Acesso a todos os modelos indexados (SEEU + DOCX + OLD)
 * 
 * @version 1.0.0
 */

// Tipos
export interface ModeloTemplate {
    id: string;
    nome: string;
    tipoDocumento: 'decisao' | 'despacho' | 'sentenca';
    magistrado: string;
    agrupador: string;
    fonteOriginal: string;
    dataExtracao: string;
    conteudo: string;
}

export interface AgrupadorStats {
    nome: string;
    total: number;
    porTipo: {
        decisao: number;
        despacho: number;
        sentenca: number;
    };
    porFonte: {
        SEEU: number;
        DOCX: number;
        OLD: number;
    };
}

export interface TemplateStats {
    total: number;
    porTipo: {
        decisao: number;
        despacho: number;
        sentenca: number;
    };
    porFonte: {
        SEEU: number;
        DOCX: number;
        OLD: number;
    };
    porAgrupador: AgrupadorStats[];
}

// Lista de todos os agrupadores disponíveis
export const AGRUPADORES = [
    { id: 'progressao', nome: 'Progressão de Regime', icon: '📈' },
    { id: 'regressao', nome: 'Regressão de Regime', icon: '📉' },
    { id: 'agravo', nome: 'Agravo em Execução', icon: '⚖️' },
    { id: 'retificacao', nome: 'Retificação de Guia', icon: '📝' },
    { id: 'unificacao', nome: 'Unificação de Penas', icon: '🔗' },
    { id: 'prescricao', nome: 'Prescrição', icon: '⏰' },
    { id: 'remicao', nome: 'Remição', icon: '📚' },
    { id: 'indulto', nome: 'Indulto', icon: '🕊️' },
    { id: 'comutacao', nome: 'Comutação', icon: '🔄' },
    { id: 'livramento', nome: 'Livramento Condicional', icon: '🔓' },
    { id: 'faltaGrave', nome: 'Falta Grave', icon: '⚠️' },
    { id: 'faltaMedia', nome: 'Falta Média', icon: '📋' },
    { id: 'prisaoDomiciliar', nome: 'Prisão Domiciliar', icon: '🏠' },
    { id: 'transferencia', nome: 'Transferência', icon: '🚚' },
    { id: 'monitoramento', nome: 'Monitoramento', icon: '📡' },
    { id: 'incompetencia', nome: 'Incompetência', icon: '🚫' },
    { id: 'embargos', nome: 'Embargos de Declaração', icon: '📄' },
    { id: 'adequacaoRegime', nome: 'Adequação de Regime', icon: '🔧' },
    { id: 'medidaSeguranca', nome: 'Medida de Segurança', icon: '🏥' },
    { id: 'multa', nome: 'Multa', icon: '💰' },
    { id: 'despachos', nome: 'Despachos', icon: '📋' },
    { id: 'outros', nome: 'Outros', icon: '📁' },
] as const;

// Dados mockados (serão substituídos por imports reais)
// Por enquanto, usamos dados de demonstração
const MODELOS_MOCK: ModeloTemplate[] = [];

// Carregar modelos dinamicamente
async function carregarModelos(): Promise<ModeloTemplate[]> {
    // Em produção, isso carregaria todos os módulos
    // Por enquanto, retornamos os dados que temos

    // TODO: Implementar carregamento dinâmico
    // import { DECISOES_PROGRESSAO } from './templates/JuizHenriqueBaltazar/decisoes/progressao';

    return MODELOS_MOCK;
}

// Cache de modelos
let modelosCache: ModeloTemplate[] | null = null;
let statsCache: TemplateStats | null = null;

/**
 * Buscar todos os modelos
 */
export async function getAllModelos(): Promise<ModeloTemplate[]> {
    if (!modelosCache) {
        modelosCache = await carregarModelos();
    }
    return modelosCache;
}

/**
 * Buscar modelos por termo
 */
export async function buscarModelos(termo: string): Promise<ModeloTemplate[]> {
    const modelos = await getAllModelos();
    const termoLower = termo.toLowerCase();

    return modelos.filter(m =>
        m.nome.toLowerCase().includes(termoLower) ||
        m.conteudo.toLowerCase().includes(termoLower)
    );
}

/**
 * Buscar modelos por agrupador
 */
export async function buscarPorAgrupador(agrupador: string): Promise<ModeloTemplate[]> {
    const modelos = await getAllModelos();
    return modelos.filter(m => m.agrupador === agrupador);
}

/**
 * Buscar modelos por tipo
 */
export async function buscarPorTipo(tipo: 'decisao' | 'despacho' | 'sentenca'): Promise<ModeloTemplate[]> {
    const modelos = await getAllModelos();
    return modelos.filter(m => m.tipoDocumento === tipo);
}

/**
 * Buscar modelos por fonte
 */
export async function buscarPorFonte(fonte: 'SEEU' | 'DOCX' | 'OLD'): Promise<ModeloTemplate[]> {
    const modelos = await getAllModelos();
    return modelos.filter(m => {
        if (fonte === 'SEEU') return m.fonteOriginal === 'SEEU';
        if (fonte === 'DOCX') return m.fonteOriginal.includes('DOCX');
        if (fonte === 'OLD') return m.fonteOriginal.includes('OLD');
        return false;
    });
}

// Cache para estatísticas reais
let realStatsCache: TemplateStats | null = null;
let modelosReaisCache: ModeloCompleto[] | null = null;

// Tipo para os modelos do índice completo
export interface ModeloCompleto {
    arquivo: string;
    nome: string;
    pasta: string;
    agrupador: string;
    resultado: string;
    formato: string;
    tamanho_chars: number;
    tem_fillin: boolean;
    campos_fillin: string[];
    estrutura: {
        tem_vistos: boolean;
        tem_relatados: boolean;
        tem_isso_posto: boolean;
        tem_pri: boolean;
        tem_cabecalho: boolean;
    };
    arquivo_texto: string;
    conteudo_preview: string;
    data_extracao: string;
}

interface ModelosIndex {
    meta: {
        versao: string;
        descricao: string;
        dataGeracao: string;
        totalModelos: number;
        estatisticas: {
            total: number;
            sucesso: number;
            falha: number;
            por_agrupador: Record<string, number>;
        };
    };
    modelos: ModeloCompleto[];
}

/**
 * Carregar modelos reais do índice JSON
 */
export async function carregarModelosReais(): Promise<ModeloCompleto[]> {
    if (modelosReaisCache) {
        return modelosReaisCache;
    }

    try {
        const module = await import('../knowledge/decisoes/modelos_completos_index.json') as { default: ModelosIndex };
        modelosReaisCache = module.default.modelos || [];
        return modelosReaisCache;
    } catch (error) {
        console.error('[TemplateService] Erro ao carregar modelos:', error);
        return [];
    }
}

/**
 * Obter modelos por agrupador
 */
export async function getModelosPorAgrupador(agrupadorId: string): Promise<ModeloCompleto[]> {
    const modelos = await carregarModelosReais();
    return modelos.filter(m => m.agrupador === agrupadorId);
}

/**
 * Obter estatísticas do banco de templates (síncrono - usa cache ou dados padrão)
 */
export function getTemplateStats(): TemplateStats {
    if (realStatsCache) {
        return realStatsCache;
    }

    // Estatísticas padrão baseadas no índice v3.0.0 (256 modelos)
    return {
        total: 256,
        porTipo: {
            decisao: 230,
            despacho: 20,
            sentenca: 6,
        },
        porFonte: {
            SEEU: 0,
            DOCX: 79,
            OLD: 177, // 175 ODT + 2 DOC
        },
        porAgrupador: [
            { nome: 'retificacao', total: 75, porTipo: { decisao: 70, despacho: 5, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 20, OLD: 55 } },
            { nome: 'outros', total: 33, porTipo: { decisao: 30, despacho: 3, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 5, OLD: 28 } },
            { nome: 'remicao', total: 27, porTipo: { decisao: 25, despacho: 2, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 21, OLD: 6 } },
            { nome: 'progressao', total: 18, porTipo: { decisao: 18, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 2, OLD: 16 } },
            { nome: 'indulto', total: 17, porTipo: { decisao: 17, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 12, OLD: 5 } },
            { nome: 'unificacao', total: 15, porTipo: { decisao: 15, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 6, OLD: 9 } },
            { nome: 'falta', total: 11, porTipo: { decisao: 11, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 11 } },
            { nome: 'reconsideracao', total: 9, porTipo: { decisao: 9, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 2, OLD: 7 } },
            { nome: 'prescricao', total: 8, porTipo: { decisao: 8, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 8 } },
            { nome: 'transferencia', total: 7, porTipo: { decisao: 5, despacho: 2, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 7 } },
            { nome: 'regressao', total: 7, porTipo: { decisao: 7, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 7 } },
            { nome: 'prisao_domiciliar', total: 7, porTipo: { decisao: 7, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 3, OLD: 4 } },
            { nome: 'multa', total: 6, porTipo: { decisao: 6, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 4, OLD: 2 } },
            { nome: 'despacho', total: 5, porTipo: { decisao: 0, despacho: 5, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 5 } },
            { nome: 'vrep', total: 4, porTipo: { decisao: 4, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 4, OLD: 0 } },
            { nome: 'extincao', total: 3, porTipo: { decisao: 3, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 3 } },
            { nome: 'embargos', total: 2, porTipo: { decisao: 2, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 2 } },
            { nome: 'monitoramento', total: 1, porTipo: { decisao: 1, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 1 } },
            { nome: 'livramento', total: 1, porTipo: { decisao: 1, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 1 } },
        ],
    };
}

/**
 * Inicializa o cache de estatísticas (chamar ao iniciar a aplicação)
 */
export async function initTemplateStatsAsync(): Promise<TemplateStats> {
    const modelos = await carregarModelosReais();

    // Agrupar modelos por agrupador
    const porAgrupadorMap = new Map<string, { total: number }>();

    for (const modelo of modelos) {
        const agrupador = modelo.agrupador || 'outros';
        const stats = porAgrupadorMap.get(agrupador) || { total: 0 };
        stats.total++;
        porAgrupadorMap.set(agrupador, stats);
    }

    // Converter para array ordenado
    const porAgrupador: AgrupadorStats[] = Array.from(porAgrupadorMap.entries())
        .map(([nome, stats]) => ({
            nome,
            total: stats.total,
            porTipo: { decisao: stats.total, despacho: 0, sentenca: 0 },
            porFonte: { SEEU: 0, DOCX: stats.total, OLD: 0 },
        }))
        .sort((a, b) => b.total - a.total);

    realStatsCache = {
        total: modelos.length,
        porTipo: { decisao: modelos.length, despacho: 0, sentenca: 0 },
        porFonte: { SEEU: 0, DOCX: modelos.length, OLD: 0 },
        porAgrupador,
    };

    return realStatsCache;
}


/**
 * Obter nome amigável do agrupador
 */
export function getNomeAgrupador(id: string): string {
    const agrupador = AGRUPADORES.find(a => a.id === id);
    return agrupador?.nome || id;
}

/**
 * Obter ícone do agrupador
 */
export function getIconeAgrupador(id: string): string {
    const agrupador = AGRUPADORES.find(a => a.id === id);
    return agrupador?.icon || '📁';
}
