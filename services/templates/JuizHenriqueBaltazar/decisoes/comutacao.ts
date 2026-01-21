/**
 * Modelos de Decisão - Comutação de Pena
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: comutacao
 * Total de modelos: 5
 */

import { Modelo } from '../../types';

export const DECISOES_COMUTACAO: Modelo[] = [
    {
        id: 'seeu_053',
        nome: 'Comutação 2024 indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'comutacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP em $regimePenaVEP imposta a $partesPoloPassivo.

A Defesa peticionou pugnando pela comutação das penas, fundamentando o pedido no Decreto Presidencial nº 12.338/2024.

O MP opinou pelo indeferimento, considerando que o apenado não integralizou 2/3 da pena dos crimes impeditivos.

Relatados.

O pedido não pode ser deferido, já que esbarra em impedimentos previstos no próprio Decreto 12.338/2024.

[CRIME IMPEDITIVO]
O apenado cometeu crime impeditivo elencado no art. 1º do Decreto. Em relação a estes crimes não cabe a comutação.

[NÃO CUMPRIU 2/3 DO CRIME IMPEDITIVO]
O art. 7º, parágrafo único, dispõe: "Na hipótese de haver concurso com crime previsto no art. 1º, não será declarado o indulto ou a comutação de pena correspondente ao crime não impeditivo enquanto a pessoa condenada não cumprir dois terços da pena correspondente ao crime impeditivo."

Diante do exposto, indefiro o pedido de comutação das penas.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_079',
        nome: 'Comutação 2024 ausência req. objetivo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'comutacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP imposta a $passivoNomeVEP.

A Defesa peticionou pugnando pela comutação da pena com fundamento no Decreto Presidencial nº 12.338/2024.

O MP opinou pelo indeferimento considerando que o apenado não atingiu requisito objetivo.

Relatados.

Dispõe o art. 13 do Decreto que "concede-se a comutação da pena remanescente na proporção de 1/5 da pena, às pessoas condenadas que tenham cumprido, até 25.12.2024, 1/5 da pena, se não reincidentes, ou 1/4 da pena, se reincidentes."

*Aqui, como o apenado era primário, teria que ter cumprido 1/5 da pena, o que não ocorreu.

*Aqui, como o apenado era reincidente, teria que ter cumprido 1/4 da pena, o que não ocorreu.

Em 25.12.2024, o apenado não havia atingido o requisito objetivo para a concessão da comutação.

Diante do exposto, indefiro o pedido de comutação das penas.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_088',
        nome: 'Comutação ou indulto 2023 deferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'comutacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade imposta a $partesPoloPassivo.

O SEEU identificou o apenado como possível beneficiário de comutação.

O MP opinou pelo deferimento.

Relatados.

Verifico que o apenado atende às regras do Decreto nº 11.846/2023, pois:
- Não praticou crime impeditivo relacionado no art. 7º;
- Não integra facção criminosa;
- Cumpriu o requisito objetivo previsto no decreto.

Defiro a comutação de 1/5 da pena remanescente.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_099',
        nome: 'Comutação ou indulto 2023 quadrilha/bando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'comutacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que a Defesa/MP pugnou pelo indulto ou comutação com fundamento no Decreto nº 11.846/2023.

Relatados.

Verifico que o apenado foi condenado pelo crime de associação criminosa (art. 288 CP) ou formação de quadrilha ou bando.

O art. 7º, I, do Decreto de 2023 estabelece como crime impeditivo a "associação criminosa" prevista no art. 288 do CP.

Assim, o apenado não faz jus ao benefício.

Isto posto, indefiro o indulto e a comutação.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_127',
        nome: 'Comutação 2024 deferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'comutacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP imposta a $partesPoloPassivo.

A Defesa peticionou pugnando pela comutação das penas com fundamento no Decreto Presidencial nº 12.338/2024.

O MP opinou pelo deferimento.

Relatados.

Verifico que o apenado atende às regras do Decreto 12.338/2024:
- Não praticou crime impeditivo;
- Não integra facção criminosa;
- Cumpriu o requisito objetivo de 1/5 (primário) ou 1/4 (reincidente) da pena até 25.12.2024.

Defiro a comutação de 1/5 da pena remanescente.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_COMUTACAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_COMUTACAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
