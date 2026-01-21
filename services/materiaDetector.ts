/**
 * estagIA - Engine de Detecção Automática de Matéria
 * Analisa o texto do RSPE/MP/Defesa para identificar automaticamente a matéria
 */

import { MatterType } from '../types';

// Palavras-chave por matéria (ordenadas por especificidade)
const MATERIA_KEYWORDS: Record<MatterType, string[]> = {
    gep: [
        'retificação', 'retificar', 'gep', 'guia de execução',
        'data-base', 'data base', 'percentual', 'fração', 'frações',
        'pacote anticrime', '112', 'percentuais', 'soma', 'unificação'
    ],
    remicao: [
        'remição', 'remicao', 'remir', 'trabalho', 'estudo',
        'enem', 'encceja', 'leitura', 'dias remidos', 'folha de ponto',
        'horas', 'curso', 'eja', 'frequência'
    ],
    livramento: [
        'livramento', 'condicional', 'art. 83', 'art.83',
        'liberdade condicional', 'lc', 'requisito subjetivo',
        'requisito objetivo', '2/3', '1/2', 'dois terços'
    ],
    monitoramento: [
        'monitoramento', 'tornozeleira', 'monitorado', 'ceme',
        'central de monitoramento', 'eletrônico', 'violação',
        'zona de inclusão', 'bateria', 'envelopamento'
    ],
    multa: [
        'multa', 'pena de multa', 'prestação pecuniária',
        'parcelamento', 'salário mínimo', 'conversão'
    ],
    falta: [
        'falta grave', 'falta média', 'falta leve', 'pad',
        'regressão', 'sanção disciplinar', 'audiência de justificação',
        'procedimento administrativo', 'infração disciplinar'
    ],
    agravo: [
        'agravo', 'recurso', 'agrava', 'agravante',
        'contrarrazões', 'reforma', 'manutenção da decisão',
        'instrumento', 'pje 2º grau'
    ],
    reconsideracao: [
        'reconsideração', 'reconsiderar', 'pedido de reconsideração',
        'embargos', 'declaração', 'omissão', 'contradição'
    ],
};

// Pesos para palavras mais específicas
const KEYWORD_WEIGHTS: Record<string, number> = {
    // Remição - alta especificidade
    'enem': 3,
    'encceja': 3,
    'remição': 3,
    'folha de ponto': 2,

    // Livramento - alta especificidade
    'livramento condicional': 3,
    'art. 83': 2,

    // GEP - alta especificidade
    'retificação': 2,
    'data-base': 2,
    'guia de execução': 2,

    // Monitoramento - alta especificidade
    'tornozeleira': 3,
    'ceme': 2,

    // Falta - alta especificidade
    'falta grave': 3,
    'regressão': 2,

    // Agravo - alta especificidade
    'agravo': 2,
    'contrarrazões': 2,
};

/**
 * Detecta a matéria com base no texto fornecido
 * @param texto - Texto a ser analisado (RSPE, MP, Defesa ou combinação)
 * @returns Matéria detectada ou null se não conseguir identificar
 */
export function detectarMateria(texto: string): MatterType | null {
    if (!texto || texto.trim().length < 10) return null;

    const textoLower = texto.toLowerCase();
    const scores: Record<MatterType, number> = {
        gep: 0,
        remicao: 0,
        livramento: 0,
        monitoramento: 0,
        multa: 0,
        falta: 0,
        agravo: 0,
        reconsideracao: 0,
    };

    // Calcular score para cada matéria
    for (const [materia, keywords] of Object.entries(MATERIA_KEYWORDS)) {
        for (const keyword of keywords) {
            if (textoLower.includes(keyword.toLowerCase())) {
                const weight = KEYWORD_WEIGHTS[keyword] || 1;
                scores[materia as MatterType] += weight;
            }
        }
    }

    // Encontrar matéria com maior score
    let maxScore = 0;
    let detectedMateria: MatterType | null = null;

    for (const [materia, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            detectedMateria = materia as MatterType;
        }
    }

    // Retornar null se o score for muito baixo (menos de 2 pontos)
    if (maxScore < 2) return null;

    return detectedMateria;
}

/**
 * Retorna todas as matérias detectadas ordenadas por probabilidade
 * @param texto - Texto a ser analisado
 * @returns Array de matérias com seus scores, ordenado por score decrescente
 */
export function detectarMateriasRanking(texto: string): { materia: MatterType; score: number; probabilidade: number }[] {
    if (!texto || texto.trim().length < 10) return [];

    const textoLower = texto.toLowerCase();
    const scores: Record<MatterType, number> = {
        gep: 0,
        remicao: 0,
        livramento: 0,
        monitoramento: 0,
        multa: 0,
        falta: 0,
        agravo: 0,
        reconsideracao: 0,
    };

    // Calcular score para cada matéria
    for (const [materia, keywords] of Object.entries(MATERIA_KEYWORDS)) {
        for (const keyword of keywords) {
            if (textoLower.includes(keyword.toLowerCase())) {
                const weight = KEYWORD_WEIGHTS[keyword] || 1;
                scores[materia as MatterType] += weight;
            }
        }
    }

    // Calcular total para probabilidade
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

    // Converter para array e ordenar
    return Object.entries(scores)
        .filter(([_, score]) => score > 0)
        .map(([materia, score]) => ({
            materia: materia as MatterType,
            score,
            probabilidade: totalScore > 0 ? Math.round((score / totalScore) * 100) : 0,
        }))
        .sort((a, b) => b.score - a.score);
}

export default detectarMateria;
