/**
 * Modelos de Decisão - Detração
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: detracao
 * Status: Concluído (2/2)
 * Total de modelos: 2
 */

import { Modelo } from '../../types';

export const DECISOES_DETRACAO: Modelo[] = [
    {
        id: 'seeu_019',
        nome: 'Detração sem tornozeleira (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'detracao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que o apenado não teve instalada a tornozeleira por falta do equipamento. A Defesa pediu que fosse considerado como tempo de pena cumprida todo o período.

Relatados.

O pedido não pode ser deferido. Conforme a Portaria Conjunta nº 05/2023 das 1ª e 2ª Varas de Execução Penal, não será contado como pena cumprida o tempo em que o apenado permanece em liberdade plena, sem qualquer espécie de restrição imposta ao seu direito de ir e vir.

Não há como considerar como pena cumprida período em que o apenado goza de liberdade plena. A detração prevista no art. 42 do Código Penal não prevê o caso de liberdade plena sem fiscalização.

Diante do exposto, indefiro o pedido.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_078',
        nome: 'Detração de Medidas Cautelares (Tema 1155 STJ)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'detracao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução penal em que a Defesa pugnou pela detração do período em que o apenado permaneceu sob a cautelar de recolhimento noturno com uso de tornozeleira eletrônica.

Relatados.

Conforme o Tema Repetitivo 1155 do STJ: "O período de recolhimento obrigatório noturno e nos dias de folga, por comprometer o status libertatis do acusado, deve ser reconhecido como período a ser detraído da pena privativa de liberdade".

Aqui, o apenado cumpriu medidas cautelares entre ** e **, período que deve ser anotado como pena cumprida, descontados os dias de violações comprovadas conforme relatórios da CEME.

Isto posto, determino constar como pena cumprida o período de ** a **, menos *** dias referentes às violações.

P.R.I. Atualize-se o atestado de penas.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_DETRACAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_DETRACAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
