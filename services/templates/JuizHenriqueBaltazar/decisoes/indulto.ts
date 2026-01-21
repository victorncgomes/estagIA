/**
 * Modelos de Decisão - Indulto Natalino
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: indulto
 * Status: Concluído (11/11)
 * Total de modelos: 11
 */

import { Modelo } from '../../types';

export const DECISOES_INDULTO: Modelo[] = [
    {
        id: 'seeu_014',
        nome: 'Indulto 2024 indeferimentos',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $partesPoloPassivo.

A Defesa peticionou pugnando pelo indulto com fundamento no Decreto Presidencial nº 12.338/2024 (ev. ***).

O MP opinou pelo indeferimento considerando que o apenado não cumpriu o requisito objetivo (ev. ***).

Relatados.

Verifico que quando da publicação do Decreto 12.338/2024 o apenado cumpria pena de $penaTotalVEP.

Dispõe o art. 9º, incisos I e II, que "Concede-se o indulto coletivo às pessoas condenadas: I - a pena privativa de liberdade não superior a oito anos..."

[Opções: NÃO CUMPRIU REQUISITO OBJETIVO / FALTA GRAVE / NÃO CUMPRIU 2/3 DO CRIME IMPEDITIVO / CRIME IMPEDITIVO]

Diante do exposto, indefiro o pedido de indulto das penas.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_016',
        nome: 'Indulto foragido indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP imposta a $passivoNomeVEP.

A Defesa/MP pediu o indulto das penas com fundamento no Decreto Presidencial nº *** (ev. ***).

Anoto que o apenado está foragido desde ***, em local incerto e não sabido.

Relatados.

O pedido não deve ser deferido uma vez que o apenado não estava cumprindo pena na data do decreto e, portanto, não podia ter nenhum benefício deferido já que houve a interrupção do cumprimento da pena.

Conforme STF: "estando o sentenciado foragido, sua fuga enseja a interrupção automática da execução da pena até a sua recaptura" (HC 241532, Min. André Mendonça).

Diante do exposto, indefiro o indulto das penas privativas de liberdade.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_031',
        nome: 'Indulto multa 2024 deferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP imposta a $passivoNomeVEP.

A Defesa pediu o indulto da pena de multa com fulcro no art. 12, I, do Decreto Presidencial nº 12.338/2024 (ev. ***).

O MP opinou pelo deferimento (ev. ***).

Relatados.

O pedido deve ser deferido uma vez que o apenado atende às regras do decreto concessivo.

Art. 12. Concede-se o indulto coletivo às pessoas condenadas a pena de multa:
I - cujo valor não supere o valor mínimo para o ajuizamento de execução fiscal de débitos com a Fazenda Nacional.

A Portaria do Ministério da Fazenda Pública Federal nº 75/2022 estabelece R$ 20.000,00 como limite mínimo para execuções fiscais.

É o caso, pois o apenado foi condenado a penas de multas que somadas totalizaram R$ ***.

Defiro o indulto da pena de multa com escopo no art. 12, I, do Decreto 12.338/2024.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_046',
        nome: 'Indulto 2022 negando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de penas privativas de liberdade unificadas em regime fechado.

A Defesa ingressou com pedido de indulto natalino com fundamento no art. 5º do Decreto nº 11.302/2022.

O MP pugnou pelo indeferimento.

Relatados.

O pedido não merece prosperar.

[MEMBRO DE FACÇÃO CRIMINOSA]
O apenado é integrante de facção criminosa, conforme classificação DEPEN. O art. 7º, §1º, do Decreto preconiza que o indulto não será concedido aos integrantes de facções criminosas.

[CRIME IMPEDITIVO]
O apenado praticou crime impeditivo relacionado no art. 7º, I, do Decreto. O art. 11, parágrafo único, exige cumprimento integral das penas dos crimes impeditivos.

[NÃO CUMPRIU 2/3 DO CRIME IMPEDITIVO]
O art. 11, parágrafo único, exige cumprimento de 2/3 da pena do crime impeditivo antes do indulto dos crimes comuns.

Isto posto, indefiro o indulto.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_058',
        nome: 'Indulto 2023 deferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de pena privativa de liberdade de $penaTotalVEP em regime **.

O SEEU identificou o apenado como possível beneficiário de indulto natalino.

O MP opinou pelo deferimento.

Relatados.

Verifico que o apenado atende às regras do Decreto nº 11.846/2023, pois:
- Não praticou crime impeditivo relacionado no art. 7º;
- Não integra facção criminosa;
- Cumpriu o requisito objetivo previsto no decreto.

Diante do exposto, defiro o indulto natalino.

Se não houver outras penas a cumprir, expeça-se alvará de soltura.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_084',
        nome: 'Indulto 2022 deferindo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de penas privativas de liberdade em regime **.

O SEEU identificou o apenado como possível beneficiário de indulto natalino.

O MP opinou pelo deferimento.

Relatados.

Verifico que o apenado atende às regras do Decreto nº 11.302/2022, pois:
- Não praticou crime impeditivo;
- Não integra facção criminosa;
- Cumpriu o requisito objetivo.

Diante do exposto, defiro o indulto natalino.

Se não houver outras penas a cumprir, expeça-se alvará de soltura.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_097',
        nome: 'Indulto 2022 facção criminosa',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de penas privativas de liberdade unificadas em $penaTotalVEP em regime $regimePenaVEP.

A Defesa ingressou com pedido de indulto natalino com base no art. 5º do Decreto 11.302/2022.

O MP pugnou pelo indeferimento, considerando que o apenado é integrante de facção criminosa denominada "Sindicato do Crime".

Relatados.

Sem adentrar no mérito da constitucionalidade do art. 5º do Decreto 11.302/2022, o pedido não merece prosperar.

O apenado é integrante de facção criminosa, conforme classificação oriunda do DEPEN.

O art. 7º, § 1º, do Decreto preconiza que "o indulto natalino também não será concedido aos integrantes de facções criminosas, ainda que sejam reconhecidas somente no julgamento do pedido de indulto."

Isto posto, reconhecendo que o apenado integra facção criminosa, indefiro o indulto.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_143',
        nome: 'Indulto negando objetivo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado requereu indulto, tendo obtido parecer **favorável do Conselho Penitenciário e contrário do MP, por ausente o requisito objetivo**.

Relatados.

**Com**Sem razão o MP, pois o apenado, condenado por crime cometido com **violência**grave ameaça** à pessoa, foi punido por falta grave praticada em **, data da qual transcorreram menos de 24 meses até a publicação do decreto.

**Verifica-se impedimento legal para o benefício perseguido, constante do art. ***, do decreto nº **.

Isto posto, indefiro o pedido de indulto, por falta do requisito objetivo.

P.R.I., aguardando-se o cumprimento da pena.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_092',
        nome: 'Indulto 2022 - Sobrestamento (Tema 1267 STF)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

A Defesa requereu indulto com base no art. 5º do Decreto nº 11.302/2022. O MP pugnou pelo sobrestamento conforme determinado pelo TJRN no HC 0807178-32.2023.8.20.0000.

Relatados.

A análise do indulto com base no Decreto 11.302/2022 deve ser sobrestada. O TJRN determinou a suspensão da análise até o julgamento definitivo da constitucionalidade do art. 5º do Decreto pelo STF (Tema 1267).

Ante o exposto, determino o sobrestamento do pedido até o julgamento definitivo da matéria perante o STF.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_121',
        nome: 'Indulto 2022 - Indeferimento (Mérito e Constitucionalidade)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

A Defesa requereu indulto com base no art. 5º do Decreto nº 11.302/2022. O MP pugnou pelo reconhecimento incidental da inconstitucionalidade do referido artigo.

Relatados.

Sem adentrar de início no mérito da constitucionalidade do art. 5º do Decreto 11.302/2022, tenho que o pedido não merece prosperar porque desconsidera regras estabelecidas no próprio decreto, especificamente o art. 11 que exige unificação das penas e cumprimento prévio de fração para crimes impeditivos.

O apenado não satisfaz os requisitos estabelecidos para o benefício.

Isto posto, indefiro o pedido de indulto.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_217',
        nome: 'Indulto/Comutação - Indeferimento (Requisito Objetivo)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'indulto',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como possível beneficiário de indulto/comutação com base no Decreto Presidencial nº ***.

Relatados.

De logo verifico que quando da publicação do Decreto o apenado cumpria pena de *** em regime ***. Conforme o art. 2º do Decreto, seria necessário o cumprimento de fração mínima da pena.

Registro que não se pode confundir detração com indulto. Como ensina a Min. Maria Thereza de Assis Moura: "O indulto é um ato de clemência do Poder Público que pressupõe a existência de sentença condenatória transitada em julgado e análise dos requisitos objetivos e subjetivos do decreto".

No caso, o apenado não cumpriu a fração exigida (1/4 se primário ou 1/3 se reincidente).

Isto posto, indefiro o pedido de indulto por ausência do requisito objetivo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_INDULTO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_INDULTO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}

