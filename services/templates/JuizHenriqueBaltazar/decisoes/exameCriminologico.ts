/**
 * Modelos de Decisão - Exame Criminológico
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: exameCriminologico
 * Status: Concluído (4/4)
 * Total de modelos: 4
 */

import { Modelo } from '../../types';

export const DECISOES_EXAME_CRIMINOLOGICO: Modelo[] = [
    {
        id: 'seeu_020',
        nome: 'Determinação de Exame Criminológico',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'exameCriminologico',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumprindo-se pena em regime fechado, certificou-se cumprimento do requisito objetivo para progressão, enquanto juntou-se ACC.

Relatados.

Tratando-se de apenado aparente periculosidade, evidenciada pelo seu histórico criminal, onde constam ** condenações e ** ações penais ainda em andamento, entendo necessário, para decidir acerca da progressão de regime, a realização de exame criminológico.

Neste sentido, decidiu o STF na Súmula Vinculante 26 e o STJ na Súmula 439: "Admite-se o exame criminológico pelas peculiaridades do caso, desde que em decisão motivada".

Em assim sendo mando requisitar laudos do serviço social e de psicologia a serem feitos por profissionais cadastrados pelo NUPEJ.

Registro que os psicólogos deverão responder aos seguintes quesitos:
1) O(a) apenado(a) apresenta sinais de que voltará a delinqüir?
2) Tem o(a) apenado(a) consciência de que infringiu norma de conduta?
3) Demonstra estar em condições de aceitar o convívio social?
4) Aparente personalidade perigosa ou agressiva para o convívio social?
5) Foi identificada personalidade antissocial ou transtorno de personalidade?
6) É possível estimar se apenado apresenta risco de reincidência?

Por oportuno, enquanto se providenciam os laudos, lance-se no SEEU o indeferimento provisório da progressão de regime, pelo prazo de 60 dias.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_021',
        nome: 'Determinação de Exame Criminológico (Amanda Pauxis)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'exameCriminologico',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Cumprindo-se pena em regime fechado, certificou-se cumprimento do requisito objetivo para progressão, enquanto juntou-se ACC.

Tratando-se de apenado com aparente periculosidade, evidenciada pelo seu histórico criminal, onde constam ** condenações e ** ações penais ainda em andamento, inclusive por crime hediondo ou equiparado, além de registrar fugas durante a execução da pena, entendo necessário, para decidir acerca da progressão de regime, a realização de exame criminológico.

Neste sentido, decidiu a Suprema Corte: "O enunciado 26 da Súmula Vinculante não proibiu a determinação de prévia realização do exame criminológico. Exige-se, apenas, que a decision seja fundamentada." (Rcl 63371 AgR)

Em assim sendo mando requisitar laudos do serviço social e de psicologia a serem feitos por profissionais cadastrados pelo NUPEJ, aos quais arbitro honorários no valor de R$ 413,24 (por cada laudo).

Por oportuno, enquanto se providenciam os laudos, lance-se no SEEU o indeferimento provisório da progressão de regime, pelo prazo de 60 dias.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_042',
        nome: 'Indeferimento de quesitos doutrinários',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'exameCriminologico',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que foi determinada a realização de exame criminológico, razão pela qual foram os autos em vistas ao MP e à Defensoria para formulação de quesitos.

O MP aderiu à quesitação do juízo. A Defensoria formulou quesitos de cunho doutrinário.

Relatados.

O pedido da Defensoria não merece prosperar, uma vez que formulou quesitação de cunho meramente doutrinário, enquanto o exame criminológico presta-se a fim diverso.

O exame criminológico é uma avaliação do indivíduo, pretendendo explicar a dinâmica criminal e propondo medidas recuperadoras, e não de uma situação hipotética afeita ao campo da literatura.

Ademais, o exame criminológico tem caráter opinativo, servindo como balizador para a decisão judicial, porém sem cunho vinculante.

Diante do exposto, indefiro a quesitação formulada pela Defensoria Pública.

P.R.I

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_218',
        nome: 'Indeferimento de antecipação de exame',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'exameCriminologico',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de medida de segurança em que a UPCT sugeriu antecipação do exame de cessação de periculosidade.

Relatados.

De início observo que a UPCT não apresentou indicativos de cessação da periculosidade do inimputável, apenas registrando o tempo em que ele está recolhido, nele somado o período em que esteve cumprindo pena privativa de liberdade.

Ora, a pena privativa de liberdade foi convertida em medida de segurança detentiva em (data) (evento **), após exame realizado em (data) daquele ano (ev. **), sendo fixada internação por no mínimo três anos.

Em assim sendo, apenas no ano de ** será atingido o requisito objetivo para novo exame, descabendo no momento a reanálise pugnada pela UPCT, especialmente se não anotados indícios de cessação de periculosidade.

Cientifique-se a unidade prisional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_EXAME_CRIMINOLOGICO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_EXAME_CRIMINOLOGICO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
