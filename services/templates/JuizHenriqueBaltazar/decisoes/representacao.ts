/**
 * Modelos de Decisão - Representação
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: representacao
 * Status: Concluído (1/1)
 * Total de modelos: 1
 */

import { Modelo } from '../../types';

export const DECISOES_REPRESENTACAO: Modelo[] = [
    {
        id: 'seeu_075',
        nome: 'Honorário dativo (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'representacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade em que foi nomeada defensora dativa no juízo de origem. A advogada peticionou pedindo renúncia do encargo e arbitramento de honorários advocatícios.

Relatados.

Em relação ao arbitramento de honorários, considerando que a Vara Regional de Execução Penal é atendida pelos serviços da Defensoria Pública, não há como serem arbitrados, uma vez que utilizaria recursos públicos de forma não autorizada.

Diante do exposto, acato a renúncia da advogada, determino a intimação do apenado para que diga se pretende constituir novo advogado ou se aceita a representação pela Defensoria Pública e, por fim, deixo de analisar o pedido de honorários.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_REPRESENTACAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_REPRESENTACAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
