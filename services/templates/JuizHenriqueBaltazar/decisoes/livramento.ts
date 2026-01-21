/**
 * Modelos de Decisão - Livramento Condicional
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: livramento
 * Total de modelos: 17
 */

import { Modelo } from '../../types';

export const DECISOES_LIVRAMENTO: Modelo[] = [
    {
        id: 'seeu_073',
        nome: 'LC negando violações monitoramento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para o livramento condicional.

Interveio o MP, opinando fundamentadamente pelo indeferimento.

Anoto que o apenado está cumprindo sanção disciplinar em razão de violações ao monitoramento eletrônico.

Relatados.

Apesar de atingido o requisito objetivo, não cabe o benefício ao apenado.

É que ficou claramente demonstrada a falta de bom comportamento no cumprimento da pena (CP, art. 83, III, a).

Conforme STJ: "ainda que o apenado não tenha incorrido em fuga, nem em novo crime, o descumprimento das regras do monitoramento é previsto como falta grave na LEP" (AgRg no HC 867.103/SC).

Conforme o Tema Repetitivo 1161 do STJ: "a valoração do requisito subjetivo para concessão do LC deve considerar todo o histórico prisional."

Isto posto, face não atender o apenado aos requisitos do art. 83, III, do CP, indefiro o livramento condicional.

P.R.I. Faça-se o registro no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_098',
        nome: 'LC violações monitoramento repetidas',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para o livramento condicional.

Interveio o Ministério Público, opinando fundamentadamente pelo indeferimento.

Relatados.

Apesar de atingido o requisito objetivo, não cabe o benefício ao apenado.

É que ficou claramente demonstrada a falta de bom comportamento no cumprimento da pena (CP, art. 83, III, a), pois o apenado foi punido ** vezes nos últimos 2 anos, por ** violações ao monitoramento eletrônico.

Conforme STJ: "ainda que o apenado não tenha incorrido em fuga, nem em novo crime, o descumprimento das regras do monitoramento é previsto como falta grave na LEP" (AgRg no HC 867.103/SC).

O art. 83 do CP não restringe o bom comportamento ao último ano, exigindo "bom comportamento durante a execução da pena" (Tema Repetitivo 1161 do STJ).

Isto posto, face não atender o apenado aos requisitos do art. 83, III, do CP, indefiro o livramento condicional.

P.R.I. Faça-se o registro no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_117',
        nome: 'LC revogação quebra condições',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que foi concedido o livramento condicional ao apenado.

Juntou-se aos autos informações de que o apenado, durante o período de provas, deixou de se apresentar em Juízo para justificar suas atividades.

Mandado de prisão cumprido em ***.

Relatados.

O executado descumpriu as condições estabelecidas para o cumprimento do período de provas do LC.

Conforme o art. 87 do CP: "O juiz poderá revogar o livramento, se o liberado deixar de cumprir qualquer das obrigações constantes da sentença."

O art. 88 do CP estabelece que, revogado o livramento, não poderá ser novamente concedido, não se descontando o tempo em que esteve solto.

Isto posto, revogo o livramento condicional com fulcro no art. 87 do CP, anotando-se fração de 1/1 para nova concessão (vedada).

P.R.I. Comunique-se ao estabelecimento prisional e atualize-se a GEP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_129',
        nome: 'LC revogação crime anterior',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Em gozo de livramento condicional, o apenado foi condenado definitivamente por prática de delito doloso praticado em data anterior, recebida a Guia de Recolhimento.

É o relatório.

Nos termos do art. 86, II, do CP, revoga-se o livramento se o liberado vem a ser condenado a PPL por crime cometido antes da vigência do benefício, mas é possível nova concessão e o tempo de prova se considera como pena cumprida.

Conforme STJ: "A condenação à PPL, em sentença irrecorrível, por crime cometido anteriormente à concessão de LC é causa obrigatória" (HC n. 15.929/SP).

Por oportuno, anoto tratar-se de crime anterior ao benefício, devendo ser descontando o tempo em que esteve solto (CP, art. 88).

Isto posto, revogo o livramento condicional.

P.R.I., expedindo-se novo Atestado de Pena.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_135',
        nome: 'LC concessão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de *** de reclusão em regime **, sendo noticiado que o apenado atingiu requisito objetivo para LC.

O MP opinou favoravelmente.

Relatados.

Verifica-se atender o apenado às exigências do art. 83 do CP, pois cumpriu mais de ** da pena, com comportamento satisfatório.

Isto posto, com fundamento nos arts. 83 e segs. do CP c/c arts. 131 e segs. da LEP, concedo o livramento condicional, impondo as seguintes condições:

- Comparecer mensalmente a este Juízo;
- Recolher-se à sua residência até às 23h00;
- Não frequentar bares, casas de prostituição e de jogos ilícitos;
- Não ingerir bebidas alcoólicas ou usar drogas;
- Não portar armas;
- Não mudar de residência sem prévia autorização.

Expeça-se Carta de Livramento (art. 136 da LEP).

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_148',
        nome: 'LC negando objetivo (fuga 12 meses)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que o SEEU identificou requisito objetivo para concessão de LC.

Relatados.

Os cálculos do SEEU não estão corretos.

O apenado registra fuga em **, com recaptura em **, ou seja, praticou falta grave há menos de 12 meses, configurando ausência do requisito objetivo (art. 83, III, b, do CP).

Conforme STJ: "O requisito relativo ao não cometimento de falta grave nos últimos 12 meses é pressuposto objetivo para a concessão do LC" (AgRg no HC 639.495/SP).

Isto posto, face não atender o apenado aos requisitos do art. 83, III, do CP, indefiro o livramento condicional.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_152',
        nome: 'LC suspensão novo crime pena cumprida',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de LC que foi suspenso em razão de nova prisão e denúncia.

O MP requereu que se aguarde o julgamento do novo processo.

Conforme a GEP, a pena teria terminado em ***.

É o relatório.

Nos termos do art. 145 da LEP, a revogação do LC suspenso depende da decisão final do processo de conhecimento.

Dispõe o art. 89 do CP: "O juiz não poderá declarar extinta a pena, enquanto não passar em julgado a sentença."

No caso, a pena já teria sido cumprida, exceto se condenado; a execução não pode se prolongar indefinidamente.

Isto posto, suspendo a execução da pena, aguardando julgamento do novo processo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_154',
        nome: 'LC revogação nova condenação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Em gozo de livramento condicional, o apenado foi preso e condenado definitivamente por prática de novo delito doloso, recebida a Guia.

É o relatório.

Nos termos do art. 86, I, do CP, revoga-se o livramento se o liberado vem a ser condenado a PPL por crime cometido durante a vigência do benefício.

Anoto tratar-se de crime posterior ao benefício, não se descontando da pena o tempo em que esteve solto (art. 88 CP).

Isto posto, revogo o livramento condicional.

P.R.I., expedindo-se nova GEP sem computar como cumprido o período de LC.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_176',
        nome: 'LC falta grave antiga',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para livramento condicional.

O MP opinou pelo indeferimento em razão do passado de reiterados descumprimentos às normas da execução.

Relatados.

Trata-se de condenada por delito de ***, cuja pena importou em *** de reclusão, atualmente em regime semiaberto.

Mesmo com o passado de reiterados descumprimentos, sua última falta grave data de ***, ou seja, há mais de dois anos o penitente cumpre regularmente a pena.

A análise do requisito subjetivo não pode ser absoluta e limitada a um brevíssimo período, devendo considerar outros aspectos mais recentes.

Isto posto, concedo o livramento condicional, impondo as seguintes condições:

- Comparecer mensalmente a este Juízo;
- Recolher-se à sua residência até às 23h00;
- Não frequentar bares ou casas de jogos ilícitos;
- Não portar armas;
- Não mudar de residência sem prévia autorização.

Expeça-se Carta de Livramento (art. 136 LEP).

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_177',
        nome: 'LC concessão padrão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de apenado que atingiu requisito objetivo para LC, com parecer favorável do Conselho Penitenciário e do MP.

Relatados.

Trata-se de condenado por delito de *, cuja pena importou em * anos de reclusão, já cumprida mais de ** da pena, com boa conduta carcerária.

Verifica-se atender o apenado às exigências do art. 83 do CP, tendo comportamento satisfatório e ressarcido os danos causados.

Isto posto, com fundamento nos arts. 83 e segs. do CP c/c arts. 131 e segs. da LEP, concedo o livramento condicional, impondo as seguintes condições:

- Comparecer mensalmente a este Juízo;
- Recolher-se à sua residência até às 23h00;
- Não frequentar bares, casas de prostituição e de jogos ilícitos;
- Não ingerir bebidas alcoólicas ou usar drogas;
- Não portar armas;
- Não mudar de residência sem prévia autorização.

Expeça-se Carta de Livramento, nos termos do art. 136 da LEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_205',
        nome: 'LC pena cumprida durante suspensão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução em que foi concedido o livramento condicional, mas o apenado foi novamente preso e denunciado, sendo o benefício suspenso.

Acrescento que o novo processo ainda não foi julgado e o SEEU identificou a pena como cumprida.

É o relatório.

Suspenso o LC e retornando ao cumprimento da pena, atingiu-se a data do término.

Nos termos do art. 89 do CP, "o juiz não poderá declarar extinta a pena, enquanto não passar em julgado a sentença por crime cometido na vigência do livramento."

Entretanto, sendo impossível antever se o apenado será condenado ou absolvido, não pode permanecer cumprindo pena que não se sabe se já extinta.

Isto posto, suspendo o cumprimento da pena, mandando colocar o apenado em liberdade, aguardando o julgamento do novo processo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_212',
        nome: 'LC suspenso pena cumprida',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução em que ao apenado foi concedido o LC, mas foi preso e denunciado por outro delito, sendo o benefício suspenso.

Acrescento que o novo processo ainda não foi julgado, mas o SEEU informa pena cumprida.

É o relatório.

Suspenso o LC e retornando ao cumprimento da pena, atingiu-se a data de término.

Nos termos do art. 89 do CP, "o juiz não poderá declarar extinta a pena, enquanto não passar em julgado a sentença." (art. 88 do CP: período de prova não se desconta se condenado).

Entretanto, sendo impossível antever se o apenado será condenado ou absolvido, não pode permanecer cumprindo pena que não se sabe se já extinta.

Isto posto, suspendo o cumprimento da pena, mandando colocar o apenado em liberdade desvigiada, aguardando o julgamento do novo processo.

P.R.I. Caso necessário, expeça-se alvará de soltura.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_213',
        nome: 'LC suspensão novo crime',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução em que foi concedido LC ao apenado, mas adiante certificou-se que foi preso e denunciado por outros delitos.

O MP requereu a suspensão do LC.

É o relatório.

Aplica-se o art. 145 da LEP: "praticada pelo liberado outra infração penal, o juiz poderá ordenar a sua prisão" e poderá ser suspenso "o curso do livramento condicional, cuja revogação ficará dependendo da decisão final".

Isto posto, suspendo o curso do livramento condicional, retornando o apenado provisoriamente à execução da pena.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_234',
        nome: 'LC negando objetivo e subjetivo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que o SEEU identificou requisito objetivo para LC.

Relatados.

Descabe o benefício por não atender requisitos objetivo e subjetivo.

O apenado registra fuga em **, com recaptura em **, ou seja, praticou falta grave há menos de 12 meses (ausência do requisito objetivo - art. 83, III, b, CP).

Conforme STJ: "O requisito relativo ao não cometimento de falta grave nos últimos 12 meses é pressuposto objetivo para LC" (AgRg no HC 639.495/SP).

Ademais, o apenado também não atende ao requisito subjetivo, pois fugiu ** vezes durante o cumprimento da pena, demonstrando falta de comportamento satisfatório (art. 83, III, a, CP).

Isto posto, face não atender os requisitos do art. 83, III, a e b, do CP, indefiro o livramento condicional.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_285',
        nome: 'LC revogação nova condenação (crime posterior)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Em gozo de LC, o apenado foi preso e condenado definitivamente por prática de novo delito doloso, recebida a Guia de Recolhimento.

Interveio o MP.

É o relatório.

Nos termos do art. 86, I, do CP, revoga-se o livramento se o liberado vem a ser condenado a PPL, em sentença irrecorrível, por crime cometido durante a vigência do benefício.

É o caso, transitada em julgado a nova decisão condenatória.

Por oportuno, anoto tratar-se de crime posterior ao benefício, não se descontando da pena o tempo em que esteve solto (art. 88 CP).

Isto posto, revogo o livramento condicional.

P.R.I., expedindo-se nova GEP, não constando como pena cumprida o período de LC.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_287',
        nome: 'LC preventiva negando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado atingiu o requisito objetivo para o livramento condicional, alegando já ter preenchido todos os requisitos.

O MP contrarrazoou insistindo na manutenção do indeferimento.

Relatados.

Apesar de atingido o requisito objetivo, não cabe o benefício, pois o apenado se encontra com prisão preventiva decretada em outro processo.

Neste sentido: "Não se admite o livramento condicional se o condenado está preso em razão de prisão preventiva decretada em outro processo" (jurisprudência consolidada).

Isto posto, indefiro o livramento condicional.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_288',
        nome: 'LC indeferido subjetivo (Tema 1161)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'livramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou que o apenado atingiu o requisito objetivo para LC.

O MP opinou pelo indeferimento, considerando que o apenado foi penalizado com falta grave.

Relatados.

Apesar de atingido o requisito objetivo, não cabe o benefício ao apenado.

É que ficou demonstrada a falta de comportamento satisfatório (CP, art. 83, III, a), já que o apenado ***.

O art. 83 do CP exige "bom comportamento durante a execução da pena", conforme Tema Repetitivo 1161 do STJ.

Isto posto, face não atender o apenado aos requisitos do art. 83, III, do CP, indefiro o livramento condicional.

P.R.I. Faça-se o registro no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_LIVRAMENTO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_LIVRAMENTO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
