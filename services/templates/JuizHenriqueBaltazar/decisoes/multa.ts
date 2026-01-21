/**
 * Modelos de Decisão - Pena de Multa
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: multa
 * Total de modelos: 6
 */

import { Modelo } from '../../types';

export const DECISOES_MULTA: Modelo[] = [
    {
        id: 'seeu_009',
        nome: 'Multa execução',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'multa',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade imposta ao apenado, havendo também pena de multa a cumprir.

O MP peticionou pela intimação do apenado para pagamento da pena de multa.

Relatados.

A pena de multa está prevista no art. 5º, inciso XLVI, alínea "c", da CF e no art. 49 do CP, constituindo espécie de sanção penal patrimonial.

Intime-se o apenado para, no prazo de 10 dias, pagar a pena de multa ou apresentar proposta de parcelamento, sob pena de inscrição do débito na dívida ativa.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_015',
        nome: 'Indulto pena de multa indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'multa',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP imposta a $passivoNomeVEP.

A Defesa pediu o indulto da pena de multa com fulcro no art. 12, I, do Decreto Presidencial nº 12.338/2024.

O MP opinou pelo indeferimento.

Relatados.

O pedido deve ser indeferido uma vez que o apenado desatende às regras do decreto concessivo.

[FALTA GRAVE]
O apenado praticou falta grave dentro do período de depuração (24 meses).

[CRIME IMPEDITIVO]
O apenado foi condenado por crime impeditivo relacionado no art. 7º do Decreto.

Diante do exposto, indefiro o indulto da pena de multa.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_080',
        nome: 'Multa parcelamento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'multa',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena privativa de liberdade em regime ***, vieram conclusos os autos para análise das penas de multa impostas ao apenado, as quais totalizam R$ ***.

Intimado, o apenado propôs parcelamento.

O MP *** concordou com a proposta.

Relatados.

A pena de multa está prevista no art. 5º, inciso XLVI, alínea "c", da CF e no art. 49 do CP.

Em sendo o parcelamento direito objetivo do apenado (norma agendi) incluído no art. 169 da LEP, ainda que não tenha apresentado proposta razoável, deve ser examinada sua pretensão.

Defiro o parcelamento das penas de multa em *** parcelas iguais de R$ ***, devendo o pagamento ser feito através de depósito identificado em favor do Fundo Penitenciário do RN.

P.R.I. Comprovado ou não o pagamento, certifique-se e dê-se vistas ao MP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_128',
        nome: 'Multa encaminhamento Fazenda Pública',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'multa',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que, terminando a pena privativa de liberdade, restam as penas de multa impostas nas ações penais nº *** totalizando R$ ***.

O art. 51 do CP, com a redação dada pela Lei nº 9.268/96, estabelece que a multa não paga será considerada dívida de valor, aplicando-se-lhe as normas da legislação relativa à dívida ativa da Fazenda Pública.

Conforme STF (ADI 3150): "o Ministério Público não possui legitimidade para propor a cobrança de multa penal na Vara de Execuções, devendo a multa ser executada pela Fazenda Pública."

Isto posto, determino o encaminhamento dos autos à Procuradoria-Geral do Estado para as providências cabíveis quanto à cobrança da pena de multa.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_187',
        nome: 'Multa indulto deferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'multa',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que a Defesa pediu o indulto da pena de multa com fulcro no Decreto Presidencial.

O MP opinou pelo deferimento.

Relatados.

Verifico que o apenado atende às regras do decreto concessivo:
- O valor da multa não supera R$ 20.000,00 (limite Portaria MF 75/2022);
- Não praticou falta grave no período de depuração;
- Não foi condenado por crime impeditivo.

Defiro o indulto da pena de multa.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_245',
        nome: 'Multa extinção pelo pagamento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'multa',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado efetuou o pagamento integral da pena de multa.

Comprovado o pagamento.

O MP opinou pela extinção da punibilidade.

Relatados.

O pagamento da pena de multa faz cessar a punibilidade quanto a este ponto.

Isto posto, declaro extinta a pena de multa pelo pagamento.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_MULTA.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_MULTA.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
