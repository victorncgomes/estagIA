/**
 * Índice Unificado de Modelos de Decisão
 * Integra modelos de todas as fontes: SEEU + DOCX
 * 
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * @version 1.0.0
 */

import { Modelo, Agrupador } from '../../types';

// Modelos SEEU (originais)
import { DECISOES_REMICAO as REMICAO_SEEU } from './remicao';
import { DECISOES_INDULTO as INDULTO_SEEU } from './indulto';
import { DECISOES_RETIFICACAO as RETIFICACAO_SEEU } from './retificacao';
import { DECISOES_MULTA as MULTA_SEEU } from './multa';
import { DECISOES_OUTROS as OUTROS_SEEU } from './outros';

// Modelos DOCX (extraídos)
import { MODELOS_REMICAO_DOCX } from '../extracted/remicao_docx';
import { MODELOS_INDULTO_DOCX } from '../extracted/indulto_docx';
import { MODELOS_RETIFICACAO_DOCX } from '../extracted/retificacao_docx';
import { MODELOS_MULTA_DOCX } from '../extracted/multa_docx';
import { MODELOS_OUTROS_DOCX } from '../extracted/outros_docx';

// ===== MODELOS UNIFICADOS POR AGRUPADOR =====

export const REMICAO_UNIFICADO: Modelo[] = [
    ...REMICAO_SEEU,
    ...(MODELOS_REMICAO_DOCX as unknown as Modelo[]),
];

export const INDULTO_UNIFICADO: Modelo[] = [
    ...INDULTO_SEEU,
    ...(MODELOS_INDULTO_DOCX as unknown as Modelo[]),
];

export const RETIFICACAO_UNIFICADO: Modelo[] = [
    ...RETIFICACAO_SEEU,
    ...(MODELOS_RETIFICACAO_DOCX as unknown as Modelo[]),
];

export const MULTA_UNIFICADO: Modelo[] = [
    ...MULTA_SEEU,
    ...(MODELOS_MULTA_DOCX as unknown as Modelo[]),
];

export const OUTROS_UNIFICADO: Modelo[] = [
    ...OUTROS_SEEU,
    ...(MODELOS_OUTROS_DOCX as unknown as Modelo[]),
];

// ===== CONTAGEM DE MODELOS =====

export function getEstatisticasUnificadas() {
    return {
        remicao: {
            seeu: REMICAO_SEEU.length,
            docx: MODELOS_REMICAO_DOCX.length,
            total: REMICAO_UNIFICADO.length,
        },
        indulto: {
            seeu: INDULTO_SEEU.length,
            docx: MODELOS_INDULTO_DOCX.length,
            total: INDULTO_UNIFICADO.length,
        },
        retificacao: {
            seeu: RETIFICACAO_SEEU.length,
            docx: MODELOS_RETIFICACAO_DOCX.length,
            total: RETIFICACAO_UNIFICADO.length,
        },
        multa: {
            seeu: MULTA_SEEU.length,
            docx: MODELOS_MULTA_DOCX.length,
            total: MULTA_UNIFICADO.length,
        },
        outros: {
            seeu: OUTROS_SEEU.length,
            docx: MODELOS_OUTROS_DOCX.length,
            total: OUTROS_UNIFICADO.length,
        },
    };
}

// ===== BUSCA UNIFICADA =====

export function buscarModeloUnificado(id: string): Modelo | undefined {
    const todosModelos = [
        ...REMICAO_UNIFICADO,
        ...INDULTO_UNIFICADO,
        ...RETIFICACAO_UNIFICADO,
        ...MULTA_UNIFICADO,
        ...OUTROS_UNIFICADO,
    ];
    return todosModelos.find((modelo) => modelo.id === id);
}

export function buscarModelosUnificadosPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    const todosModelos = [
        ...REMICAO_UNIFICADO,
        ...INDULTO_UNIFICADO,
        ...RETIFICACAO_UNIFICADO,
        ...MULTA_UNIFICADO,
        ...OUTROS_UNIFICADO,
    ];
    return todosModelos.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}

export function buscarModelosUnificadosPorAgrupador(agrupador: Agrupador): Modelo[] {
    switch (agrupador) {
        case 'remicao': return REMICAO_UNIFICADO;
        case 'indulto': return INDULTO_UNIFICADO;
        case 'retificacao': return RETIFICACAO_UNIFICADO;
        case 'multa': return MULTA_UNIFICADO;
        case 'outros': return OUTROS_UNIFICADO;
        default: return [];
    }
}
