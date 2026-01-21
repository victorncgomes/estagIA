/**
 * estagIA - Índice das Decisões do Juiz Henrique Baltazar
 * Banco das decisões extraídas e organizadas por agrupador
 * @version 0.2.0
 */

import { Modelo, Agrupador } from '../../types';

// Importação das decisões por agrupador
import { DECISOES_PROGRESSAO } from './progressao';
import { DECISOES_REGRESSAO } from './regressao';
import { DECISOES_AGRAVO } from './agravo';
import { DECISOES_REMICAO } from './remicao';
import { DECISOES_LIVRAMENTO } from './livramento';
import { DECISOES_MONITORAMENTO } from './monitoramento';
import { DECISOES_RETIFICACAO } from './retificacao';
import { DECISOES_UNIFICACAO } from './unificacao';
import { DECISOES_INDULTO } from './indulto';
import { DECISOES_COMUTACAO } from './comutacao';
import { DECISOES_FALTA_GRAVE } from './faltaGrave';
import { DECISOES_FALTA_MEDIA } from './faltaMedia';
import { DECISOES_MEDIDA_SEGURANCA } from './medidaSeguranca';
import { DECISOES_MULTA } from './multa';
import { DECISOES_TRANSFERENCIA } from './transferencia';
import { DECISOES_PRISAO_DOMICILIAR } from './prisaoDomiciliar';
import { DECISOES_EXAME_CRIMINOLOGICO } from './exameCriminologico';
import { DECISOES_INSANIDADE_MENTAL } from './insanidadeMental';
import { DECISOES_SAIDA_TEMPORARIA } from './saidaTemporaria';
import { DECISOES_EMBARGOS } from './embargos';
import { DECISOES_INCOMPETENCIA } from './incompetencia';
import { DECISOES_DETRACAO } from './detracao';
import { DECISOES_REPRESENTACAO } from './representacao';
import { DECISOES_ACORDAO } from './acordao';
import { DECISOES_PRESCRICAO } from './prescricao';
import { DECISOES_TEMA506 } from './tema506';
import { DECISOES_ADEQUACAO_REGIME } from './adequacaoRegime';
import { DECISOES_MUTIRAO } from './mutirao';
import { DECISOES_PRESTACAO_PECUNIARIA } from './prestacaoPecuniaria';
import { DECISOES_OUTROS } from './outros';

// Re-exporta todos os arrays
export {
    DECISOES_PROGRESSAO,
    DECISOES_REGRESSAO,
    DECISOES_AGRAVO,
    DECISOES_REMICAO,
    DECISOES_LIVRAMENTO,
    DECISOES_MONITORAMENTO,
    DECISOES_RETIFICACAO,
    DECISOES_UNIFICACAO,
    DECISOES_INDULTO,
    DECISOES_COMUTACAO,
    DECISOES_FALTA_GRAVE,
    DECISOES_FALTA_MEDIA,
    DECISOES_MEDIDA_SEGURANCA,
    DECISOES_MULTA,
    DECISOES_TRANSFERENCIA,
    DECISOES_PRISAO_DOMICILIAR,
    DECISOES_EXAME_CRIMINOLOGICO,
    DECISOES_INSANIDADE_MENTAL,
    DECISOES_SAIDA_TEMPORARIA,
    DECISOES_EMBARGOS,
    DECISOES_INCOMPETENCIA,
    DECISOES_DETRACAO,
    DECISOES_REPRESENTACAO,
    DECISOES_ACORDAO,
    DECISOES_PRESCRICAO,
    DECISOES_TEMA506,
    DECISOES_ADEQUACAO_REGIME,
    DECISOES_MUTIRAO,
    DECISOES_PRESTACAO_PECUNIARIA,
    DECISOES_OUTROS,
};

/**
 * Array consolidado com TODAS as decisões do Juiz Henrique Baltazar
 */
export const TODAS_DECISOES: Modelo[] = [
    ...DECISOES_PROGRESSAO,
    ...DECISOES_REGRESSAO,
    ...DECISOES_AGRAVO,
    ...DECISOES_REMICAO,
    ...DECISOES_LIVRAMENTO,
    ...DECISOES_MONITORAMENTO,
    ...DECISOES_RETIFICACAO,
    ...DECISOES_UNIFICACAO,
    ...DECISOES_INDULTO,
    ...DECISOES_COMUTACAO,
    ...DECISOES_FALTA_GRAVE,
    ...DECISOES_FALTA_MEDIA,
    ...DECISOES_MEDIDA_SEGURANCA,
    ...DECISOES_MULTA,
    ...DECISOES_TRANSFERENCIA,
    ...DECISOES_PRISAO_DOMICILIAR,
    ...DECISOES_EXAME_CRIMINOLOGICO,
    ...DECISOES_INSANIDADE_MENTAL,
    ...DECISOES_SAIDA_TEMPORARIA,
    ...DECISOES_EMBARGOS,
    ...DECISOES_INCOMPETENCIA,
    ...DECISOES_DETRACAO,
    ...DECISOES_REPRESENTACAO,
    ...DECISOES_ACORDAO,
    ...DECISOES_PRESCRICAO,
    ...DECISOES_TEMA506,
    ...DECISOES_ADEQUACAO_REGIME,
    ...DECISOES_MUTIRAO,
    ...DECISOES_PRESTACAO_PECUNIARIA,
    ...DECISOES_OUTROS,
];

/**
 * Mapeamento de agrupador para array de decisões
 */
export const DECISOES_POR_AGRUPADOR: Partial<Record<Agrupador, Modelo[]>> = {
    progressao: DECISOES_PROGRESSAO,
    regressao: DECISOES_REGRESSAO,
    agravo: DECISOES_AGRAVO,
    remicao: DECISOES_REMICAO,
    livramento: DECISOES_LIVRAMENTO,
    monitoramento: DECISOES_MONITORAMENTO,
    retificacao: DECISOES_RETIFICACAO,
    unificacao: DECISOES_UNIFICACAO,
    indulto: DECISOES_INDULTO,
    comutacao: DECISOES_COMUTACAO,
    faltaGrave: DECISOES_FALTA_GRAVE,
    faltaMedia: DECISOES_FALTA_MEDIA,
    medidaSeguranca: DECISOES_MEDIDA_SEGURANCA,
    multa: DECISOES_MULTA,
    transferencia: DECISOES_TRANSFERENCIA,
    prisaoDomiciliar: DECISOES_PRISAO_DOMICILIAR,
    exameCriminologico: DECISOES_EXAME_CRIMINOLOGICO,
    insanidadeMental: DECISOES_INSANIDADE_MENTAL,
    saidaTemporaria: DECISOES_SAIDA_TEMPORARIA,
    embargos: DECISOES_EMBARGOS,
    incompetencia: DECISOES_INCOMPETENCIA,
    detracao: DECISOES_DETRACAO,
    representacao: DECISOES_REPRESENTACAO,
    acordao: DECISOES_ACORDAO,
    extincaoPrescricao: DECISOES_PRESCRICAO,
    tema506: DECISOES_TEMA506,
    adequacaoRegime: DECISOES_ADEQUACAO_REGIME,
    mutirao: DECISOES_MUTIRAO,
    prestacaoPecuniaria: DECISOES_PRESTACAO_PECUNIARIA,
    outros: DECISOES_OUTROS,
};

// ============================================
// FUNÇÕES DE BUSCA
// ============================================

/**
 * Busca decisão por ID
 */
export function buscarDecisaoPorId(id: string): Modelo | undefined {
    return TODAS_DECISOES.find(m => m.id === id);
}

/**
 * Busca decisões por agrupador
 */
export function buscarDecisoesPorAgrupador(agrupador: Agrupador): Modelo[] {
    return DECISOES_POR_AGRUPADOR[agrupador] || [];
}

/**
 * Busca decisões por termo no nome ou conteúdo
 */
export function buscarDecisoes(termo: string, agrupador?: Agrupador): Modelo[] {
    const termoLower = termo.toLowerCase();
    const fonte = agrupador ? buscarDecisoesPorAgrupador(agrupador) : TODAS_DECISOES;

    return fonte.filter(m =>
        m.nome.toLowerCase().includes(termoLower) ||
        m.conteudo.toLowerCase().includes(termoLower) ||
        m.tags?.some(t => t.toLowerCase().includes(termoLower))
    );
}

/**
 * Retorna estatísticas das decisões
 */
export function getEstatisticasDecisoes(): { total: number; porAgrupador: Record<string, number> } {
    const porAgrupador: Record<string, number> = {};

    for (const [agrup, modelos] of Object.entries(DECISOES_POR_AGRUPADOR)) {
        if (modelos && modelos.length > 0) {
            porAgrupador[agrup] = modelos.length;
        }
    }

    return {
        total: TODAS_DECISOES.length,
        porAgrupador,
    };
}
