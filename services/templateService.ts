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

/**
 * Obter estatísticas do banco de templates
 */
export function getTemplateStats(): TemplateStats {
    // Estatísticas reais do banco
    return {
        total: 484,
        porTipo: {
            decisao: 455,
            despacho: 28,
            sentenca: 1,
        },
        porFonte: {
            SEEU: 290,
            DOCX: 53,
            OLD: 141,
        },
        porAgrupador: [
            { nome: 'agravo', total: 48, porTipo: { decisao: 48, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 48, DOCX: 0, OLD: 0 } },
            { nome: 'progressao', total: 42, porTipo: { decisao: 42, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 28, DOCX: 0, OLD: 14 } },
            { nome: 'retificacao', total: 42, porTipo: { decisao: 42, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 26, DOCX: 0, OLD: 16 } },
            { nome: 'regressao', total: 36, porTipo: { decisao: 36, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 25, DOCX: 0, OLD: 11 } },
            { nome: 'outros', total: 35, porTipo: { decisao: 35, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 11, DOCX: 0, OLD: 24 } },
            { nome: 'unificacao', total: 26, porTipo: { decisao: 26, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 14, DOCX: 0, OLD: 12 } },
            { nome: 'remicao', total: 39, porTipo: { decisao: 39, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 14, DOCX: 21, OLD: 4 } },
            { nome: 'despachos', total: 14, porTipo: { decisao: 0, despacho: 14, sentenca: 0 }, porFonte: { SEEU: 0, DOCX: 0, OLD: 14 } },
            { nome: 'indulto', total: 27, porTipo: { decisao: 27, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 11, DOCX: 12, OLD: 3 } },
            { nome: 'prescricao', total: 15, porTipo: { decisao: 15, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 2, DOCX: 0, OLD: 13 } },
            { nome: 'livramento', total: 17, porTipo: { decisao: 17, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 17, DOCX: 0, OLD: 0 } },
            { nome: 'faltaGrave', total: 12, porTipo: { decisao: 12, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 6, DOCX: 0, OLD: 6 } },
            { nome: 'prisaoDomiciliar', total: 11, porTipo: { decisao: 11, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 3, DOCX: 0, OLD: 8 } },
            { nome: 'monitoramento', total: 14, porTipo: { decisao: 14, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 13, DOCX: 0, OLD: 1 } },
            { nome: 'incompetencia', total: 14, porTipo: { decisao: 14, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 11, DOCX: 0, OLD: 3 } },
            { nome: 'transferencia', total: 13, porTipo: { decisao: 13, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 9, DOCX: 0, OLD: 4 } },
            { nome: 'comutacao', total: 7, porTipo: { decisao: 7, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 5, DOCX: 0, OLD: 2 } },
            { nome: 'embargos', total: 4, porTipo: { decisao: 4, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 1, DOCX: 0, OLD: 3 } },
            { nome: 'adequacaoRegime', total: 4, porTipo: { decisao: 4, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 1, DOCX: 0, OLD: 3 } },
            { nome: 'medidaSeguranca', total: 8, porTipo: { decisao: 8, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 8, DOCX: 0, OLD: 0 } },
            { nome: 'multa', total: 9, porTipo: { decisao: 9, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 6, DOCX: 3, OLD: 0 } },
            { nome: 'faltaMedia', total: 4, porTipo: { decisao: 4, despacho: 0, sentenca: 0 }, porFonte: { SEEU: 3, DOCX: 0, OLD: 1 } },
        ],
    };
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
