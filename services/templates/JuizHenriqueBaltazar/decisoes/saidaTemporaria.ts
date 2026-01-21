/**
 * Modelos de Decisão - Saída Temporária
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: saidaTemporaria
 * Total de modelos: 3
 */

import { Modelo } from '../../types';

export const DECISOES_SAIDA_TEMPORARIA: Modelo[] = [
    {
        id: 'seeu_035',
        nome: 'Saída temporária deferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'saidaTemporaria',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em regime semiaberto em que o apenado requereu saída temporária para visita à família / curso profissionalizante / trabalho externo.

O MP opinou pelo deferimento.

Relatados.

Conforme art. 122 da LEP: "Os condenados que cumprem pena em regime semiaberto poderão obter autorização para saída temporária do estabelecimento."

São requisitos para a saída temporária (art. 123 da LEP):
I - comportamento adequado;
II - cumprimento mínimo de 1/6 da pena, se primário, e 1/4, se reincidente;
III - compatibilidade do benefício com os objetivos da pena.

O apenado atende aos requisitos legais.

Defiro a saída temporária para o período de *** a ***, devendo o apenado retornar até às 18h do último dia.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_264',
        nome: 'Saída temporária indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'saidaTemporaria',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em regime semiaberto em que o apenado requereu saída temporária.

O MP opinou pelo indeferimento.

Relatados.

Conforme art. 123 da LEP, são requisitos para a saída temporária:
I - comportamento adequado;
II - cumprimento mínimo de 1/6 da pena, se primário, e 1/4, se reincidente;
III - compatibilidade do benefício com os objetivos da pena.

No caso, o apenado não atende ao requisito *** / está respondendo a PAD / praticou falta disciplinar recentemente.

Indefiro a saída temporária.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_267',
        nome: 'Saída temporária automatizada',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'saidaTemporaria',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em regime semiaberto em que o apenado requereu saída temporária automatizada.

O MP opinou pelo deferimento.

Relatados.

Conforme Súmula 520 do STJ: "O benefício de saída temporária no âmbito da execução penal é ato jurisdicional insuscetível de delegação à autoridade administrativa do estabelecimento prisional."

Todavia, uma vez concedida a primeira saída temporária, podem ser autorizadas as demais de forma automatizada.

Conforme Resolução CNJ nº 474/2022, a concessão de saídas temporárias subsequentes pode ser automatizada.

Defiro a saída temporária automatizada para as datas comemorativas (Páscoa, Dia das Mães, Dia dos Pais, Natal e Ano Novo), desde que mantido o bom comportamento carcerário.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_SAIDA_TEMPORARIA.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_SAIDA_TEMPORARIA.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
