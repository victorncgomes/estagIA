/**
 * Decisões de Progressão de Regime - Juiz Henrique Baltazar
 * @version 0.2.0
 * 
 * IDs: seeu_003, seeu_007, seeu_022, seeu_029, seeu_040, seeu_043, seeu_044,
 *      seeu_045, seeu_051, seeu_052, seeu_054, seeu_056, seeu_060, seeu_074,
 *      seeu_077, seeu_089, seeu_095, seeu_100, seeu_116, seeu_123, seeu_130,
 *      seeu_136, seeu_141, seeu_169, seeu_194, seeu_242, seeu_281, seeu_283
 */

import { Modelo } from '../../types';

export const DECISOES_PROGRESSAO: Modelo[] = [
    {
        id: 'seeu_003',
        nome: 'Progressão INDEFERE ACC regular má conduta',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-19',
        conteudo: `$cabecalho
Autos nº. $autos.getNumeroUnicoFormatado()
$dadosProcesso

Vistos etc.
XXX... atingiu o requisito objetivo para progressão de regime...
Considerando o histórico de comportamento do apenado, especialmente o atestado carcerário que demonstra conduta irregular...
Indefiro a progressão de regime por ausência do requisito subjetivo, mantendo-se o apenado no regime atual.
P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos
Juiz de direito`,
    },
    {
        id: 'seeu_007',
        nome: 'Progressão semiaberto comum',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

DECISÃO/OFÍCIO

Executando-se pena privativa de liberdade em regime fechado o SEEU identificou que o apenado atingiu o requisito objetivo para progressão de regime, bem como informou a unidade prisional bom comportamento carcerário (evento  ).

Interveio o Ministério Público, opinando pela concessão do benefício (evento  ).

Relatados.

Conforme atestado de pena, o apenado cumpriu o requisito objetivo para concessão da progressão de regime, como também apresenta bom comportamento carcerário, atendendo, portanto, aos requisitos previstos no art. 112 da LEP.

Por oportuno, dada a inexistência de unidade prisional adequada ao regime semiaberto na região, está sendo concedido o semiaberto harmonizado (semiaberto em prisão domiciliar com monitoramento eletrônico e recolhimento no horário noturno).

Isto posto, progrido o cumprimento da pena para o regime semiaberto, que pode ser cumprido como semiaberto harmonizado.

Atualize-se o atestado de pena.

P. R. I. Remeta-se cópia desta decisão à unidade prisional.

Providencie-se, se necessário, baixa de mandado de prisão no BNMP.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_022',
        nome: 'Progressão - indeferimento provisório notícia PAD',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Em andamento incidente de progressão de regime informou a unidade prisional a existência de ** sindicância tratando de falta disciplinar que teria sido praticada pelo apenado (ev. **).

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

Aqui, a unidade prisional informou a existência de PAD tratando de falta disciplinar.

Entretanto, o certo é que o incidente de progressão não pode ficar em aberto.

Em assim sendo, dada a noticia de falta disciplinar indefiro provisoriamente, por 30 dias, a progressão de regime.

Cientifiquem-se as partes e requisite-se da unidade prisional o envio urgente dos PAD.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_029',
        nome: 'Progressão iniciou recentemente fechado',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

O apenado iniciou o cumprimento da pena no regime fechado em ***, mas dado o pequeno saldo do tempo a cumprir, o SEEU o identifica como já tendo atingido o requisito objetivo para progressão.

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

Já o Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte fixa classifica a conduta do apenado em regime fechado como boa quando, no prazo mínimo de 06 (seis) meses, não tiver cometido infração disciplinar de natureza grave ou média (art. 95, II).

Tal prazo, no caso de regressão de regime, conta-se da prisão do apenado.

Aqui, o apenado iniciou o cumprimento da pena no regime fechado há menos de seis meses, pelo que não atingiu ainda o requisito subjetivo para progressão.

O Estado tem competência concorrente com a União para disciplinar matéria sobre direito penitenciário (CF, art. 24, I), competindo à essa a edição das normas gerais.

Em assim sendo, indefiro a progressão de regime.

Cientifiquem-se as partes.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_040',
        nome: 'Progressão indefere regressão recente',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

O apenado teve o regime prisional regredido cautelarmente para fechado em razão de fuga, tendo sido recapturado em ***, mas dado o pequeno tempo de pena a cumprir, o SEEU o identifica como já tendo atingido o requisito objetivo para progressão.

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

O § 6º esclarece que o cometimento de falta grave interrompe o prazo para a progressão.

O Regulamento Disciplinar Penitenciário do RN fixa, no caso de apenado que pratica falta grave, o prazo de 06 meses para reabilitação da conduta.

O Estado tem competência concorrente com a União para disciplinar matéria sobre direito penitenciário (CF, art. 24, I).

Aqui, o apenado está há menos de seis meses no regime fechado, pelo que não atingiu ainda o requisito subjetivo para progressão.

Em assim sendo, indefiro a progressão de regime.

*Cientifiquem-se às partes e a CEME e paute-se audiência de justificação

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_043',
        nome: 'Progressão indeferimento provisório exame',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em regime fechado em que foi determinada a realização de exame criminológico para fins de progressão (ev. **).

O NUPEJ aprazou a realização dos exames para o dia **.

Relatados.

Considerando que o exame ficou aprazado e o NUPEJ só entrega o laudo após 30 dias úteis de sua realização, a análise da progressão deve ser suspensa por mais 60 (sessenta) dias.

Diante do exposto, determino que seja anotada a suspensão da progressão por mais 60 (sessenta) dias.

P.I. Requisite-se ao NUPEJ que remeta os laudos do exame criminológico.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_044',
        nome: 'Progressão aberto indefere violações',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para progressão de regime.

Juntado ACC, informando comportamento regular, posto que relatadas violações às regras de monitoramento, interveio o MP opinando contrariamente.

Relatados.

Determina a LEP, no art. 146-D, II, que a monitoração eletrônica poderá ser revogada se o condenado violar os deveres a que estiver sujeito.

Verifica-se que o apenado violou as condições do monitoramento eletrônico.

Entretanto, a falta não importa em regressão de regime, pelo que deverá continuar no semiaberto, com suspensão das autorizações de saída externa.

Isto posto, reconheço a prática de falta média e suspendo as autorizações de saídas externas por ** dias, mandando recolhê-lo. Por ausência do requisito subjetivo, indefiro a progressão de regime.

Comunique-se à CEME, para que notifique o apenado a iniciar o cumprimento em 05 dias.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_045',
        nome: 'Progressão indefere preventiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o(a) apenado(a) como tendo atingido o requisito objetivo para progressão.

Interveio o MP, opinando pelo indeferimento face ausência de requisito subjetivo.

Certificou-se que persiste prisão preventiva decretada em outro processo.

Relatados.

A LEP dispõe que cumprido certo período da pena será transferido o apenado para regime menos rigoroso, se seu mérito indicar a progressão.

Aqui, atende o(a) apenado(a) ao requisito objetivo. Quanto ao subjetivo, porém, diversa é a situação.

No caso, existe prisão preventiva decretada em outra ação penal, situação que leva a presunção de periculosidade.

A jurisprudência do STJ afirma: "A prisão preventiva decretada em outro processo pode justificar o indeferimento da progressão" (AgRg no HC n. 718.375/PR).

Ora, a progressão depende da adaptação provável do apenado ao regime menos severo, sendo de anotar que na execução criminal prevalece o princípio do in dubio pro societate.

Isto posto, por ausência do requisito subjetivo, indefiro a progressão de regime por mais 120 dias.

P.I. Registre-se no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_051',
        nome: 'Progressão aberto hediondo e comum',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena de reclusão em regime semiaberto, por delitos de ***.

Interveio o MP, opinando pela progressão de regime.

Relatados.

Dispõe a LEP, no art. 112, que cumprido ao menos um sexto da pena imposta, será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário.

No caso de crime hediondo, a Lei 8.072/90 dispõe que a progressão dar-se-á após o cumprimento de 2/5 (dois quintos) da pena, se o apenado for primário, e de 3/5 (três quintos), se reincidente.

*Aqui, tratam-se de crimes hediondo e comum, com apenado não reincidente e que já cumpriu mais de dois quintos da pena por aquele e um sexto da imposta por esse, sendo comprovado bom comportamento carcerário.

Isto posto, progrido para aberto o regime de cumprimento da pena aqui executada.

P.R.I. Certifique-se o endereço do apenado, remetendo-se os autos para o juízo competente.

Comunique-se ao estabelecimento prisional, solicitando que advirta o apenado do prazo de 05 (cinco) dias para comparecer à 14ª Vara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_052',
        nome: 'Progressão para aberto crime comum',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

DECISÃO/OFÍCIO

Executando-se pena privativa de liberdade em regime semiaberto o SEEU identificou que o apenado atingiu o requisito objetivo para progressão de regime, bem como foi noticiado bom comportamento carcerário.

Interveio o MP opinando pela concessão do benefício.

Relatados.

Conforme atestado de pena, o apenado cumpriu o requisito objetivo para concessão da progressão de regime, como também apresenta bom comportamento carcerário, atendendo aos requisitos previstos no art. 112 da LEP.

Isto posto, progrido o regime de cumprimento da pena para aberto.

Atualize-se o atestado de pena.

Remeta-se cópia desta decisão à CEME e à unidade prisional, que valerá como determinação para transferência do apenado ao novo regime.

P.R.I. Certifique-se o endereço do apenado, remetendo-se os autos para o juízo competente.

Comunique-se ao estabelecimento prisional, solicitando que advirta o apenado do prazo de 05 (cinco) dias para comparecer à 14ª Vara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_054',
        nome: 'Progressão indefere progrediu recentemente',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

*O apenado teve o regime prisional progredido para semiaberto em ***, mas dado o pequeno saldo do tempo de pena a cumprir, o SEEU o identifica como já tendo atingido o requisito objetivo para nova progressão.

*O apenado foi inserido no regime semiaberto harmonizado em ***, mas dado o pequeno saldo do tempo de pena a cumprir, o SEEU o identifica como já tendo atingido o requisito objetivo para progressão.

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

O Regulamento Disciplinar Penitenciário do RN fixa, para os apenados no regime semiaberto, o prazo de 03 meses sem prática de infração de natureza grave ou média para a conduta ser classificada como boa.

Tal prazo conta-se da entrada do apenado no regime semiaberto.

O Estado tem competência concorrente com a União para disciplinar matéria sobre direito penitenciário (CF, art. 24, I).

Aqui, como o apenado está há menos de três meses no regime semiaberto, não atingiu ainda o requisito subjetivo para nova progressão, pelo que a indefiro.

Cientifiquem-se as partes e a CEME.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_056',
        nome: 'Progressão indefere audiência justificação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

O apenado foi identificado como possível beneficiário de progressão de regime mas tem audiência de justificação agendada em razão de falta grave alegadamente praticada em **.

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

Aqui, porém, existe incidente de apuração de falta grave em andamento, com audiência de justificação já agendada.

Entretanto, é certo que o incidente de progressão, automaticamente aberto pelo SEEU não pode ficar em aberto.

Em assim sendo, dada a noticiada falta grave em apuração, indefiro provisoriamente, por 60 dias, a progressão de regime, tempo suficiente para a realização da audiência e solução do incidente.

*Cientifiquem-se as partes e a CEME e paute-se audiência de justificação.

*Cientifiquem-se as partes.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_060',
        nome: 'Progressão aberto defere poucas violações',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena privativa de liberdade em regime semiaberto, o SEEU identificou que o apenado atingiu o requisito objetivo para progressão de regime, bem como foi noticiado bom comportamento carcerário, tendo sido relatadas ________ violações às regras de monitoramento.

Interveio o MP, opinando pela concessão do benefício.

Relatados.

Conforme atestado de pena, o apenado cumpriu a porcentagem de pena suficiente para progredir de regime, atendendo ao requisito objetivo previsto no art. 112 da LEP.

Em análise do requisito subjetivo, verifica-se que o apenado apresenta violações às regras do monitoramento eletrônico.

Nessa situação, resta claro que desatendeu o apenado ao previsto no art. 39 da Lei 7.210/84 ("cumprimento fiel da sentença"), praticando falta disciplinar média.

Não obstante, dado o pequeno número de violações, entendo que não há mácula significativa ao bom comportamento do apenado, pelo que considero preenchido o requisito subjetivo para a progressão.

Isto posto, progrido o regime de cumprimento da pena para aberto.

P.R.I. Atualize-se o atestado de pena. Certifique-se o endereço do apenado, remetendo-se os autos para o juízo competente.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_074',
        nome: 'Progressão - indefere - prisão preventiva outro processo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para progressão de regime.

O MP opinou pelo indeferimento da progressão face a ausência de requisito subjetivo.

Acrescento ao relatório que persiste prisão preventiva decretada em desfavor do(a) apenado(a), conforme consulta ao BNMP.

Relatados.

Aqui, atende o apenado ao requisito objetivo. Quanto ao subjetivo, porém, diversa é a situação.

No caso, verifica-se que existe prisão preventiva decretada face ao apenado, em outra ação penal, situação que leva a presunção de periculosidade.

O STJ decidiu: "A prisão preventiva decretada em outro processo pode justificar o indeferimento da progressão de regime" (AgRg no HC n. 718.375/PR).

Ora, a progressão depende da adaptação provável do apenado ao regime menos severo, sendo de anotar que na execução criminal prevalece o princípio do in dubio pro societate.

Isto posto, por ausência do requisito subjetivo, indefiro a progressão de regime, devendo o apenado continuar a cumprir sua pena no regime fechado, por mais 100 dias.

P.I. Registre-se no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_077',
        nome: 'Progressão indefere PAD',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

*Em andamento incidente de progressão de regime juntou a unidade prisional PAD tratando de falta grave que teria sido praticada pelo apenado, o que ainda será melhor analisado após audiência de justificação.

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

Já o Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte fixa, no caso de apenado que pratica falta grave, o prazo de 06 meses para reabilitação da conduta.

*Aqui, a unidade prisional juntou PAD que reconheceu falta grave praticada em **, a qual ainda será objeto de análise por este juízo, após audiência de justificação.

Entretanto, o certo é que o incidente de progressão não pode ficar em aberto.

Em assim sendo, dada a noticiada falta grave, indefiro provisoriamente, por 60 dias, a progressão de regime.

*Cientifiquem-se as partes e a CEME e paute-se audiência de justificação.

*Cientifiquem-se as partes e requisite-se da unidade prisional o envio do PAD.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_089',
        nome: 'Progressão indefere multa',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de pedido de progressão de regime apresentado em que sustenta o apenado ter preenchido os requisitos objetivo e subjetivo para progredir ao regime semiaberto, *afirmando não ter condições de arcar com o valor da multa.

Interveio o Ministério Público, opinando pela concessão**indeferimento do benefício.

Relatados.

Inicialmente, a análise da documentação aportada aos autos evidencia o cumprimento do requisito temporal e da comprovação de bom comportamento penitenciário.

Sem embargo do preenchimento do requisito temporal e do bom comportamento carcerário, não vejo como conceder a progressão no regime prisional. É que o apenado deixou de adimplir a pena de multa, sem comprovar insuficiência financeira ou requerer o parcelamento do pagamento.

Nesse sentido, decidiu o Supremo Tribunal Federal: "O inadimplemento deliberado da pena de multa cumulativamente aplicada ao sentenciado impede a progressão no regime prisional" (EP 12-AgR).

Ante o exposto, face à falta de comprovação do pagamento da multa, seu parcelamento ou mesmo da comprovação da impossibilidade real de fazê-lo, indefiro o pedido de progressão para o regime semiaberto.

P.R. Intime-se. Ciência ao MP.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_095',
        nome: 'Progressão indeferimento requisito objetivo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Requer o apenado progressão de regime, alegando*.

O pedido veio documentalmente instruído, registrando-se intervenção do Ministério Público, que opinou contrariamente, por entender ausente o critério objetivo.

É o relatório.

O pedido é improcedente.

É que o sentenciado não cumpriu mais de um sexto/dois quintos da pena em execução.

***Trata-se, no caso, de crime hediondo, sendo oportuno lembrar o que decidiu o Supremo Tribunal Federal sobre a exigência legal do cumprimento de 2/5 da pena, se primário, e de 3/5, se reincidente (HC 114452 AgR).

Isto posto, por ausência do requisito objetivo, indefiro o pedido de progressão de regime.

P. R. I. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_100',
        nome: 'Progressão indefere subjetivo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
$dadosProcesso
Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para progressão de regime.

Interveio o Ministério Público opinando contrariamente.

É o relatório.

A Lei de Execução Penal dispõe que cumprido ao menos 16% da pena imposta por crime crime cometido sem violência à pessoa, será transferido o apenado para regime menos rigoroso, se seu mérito indicar a progressão.

Aqui, atende o apenado ao requisito objetivo.

Quanto ao subjetivo, porém, diversa é a situação.

Já dispunha a Exposição de Motivos da Lei de Execução Penal que "a progressão deve ser uma conquista do condenado pelo seu mérito".

No caso, verifica-se que o(a) apenado(a) foi flagranteado por novo crime, tendo inclusive prisão preventiva decretada.

Ora, a progressão depende da adaptação provável do apenado ao regime menos severo,  sendo de anotar que na execução criminal prevalece o princípio do in dubio pro societate.

Não se pode causar à sociedade consciente risco, quando a não adaptabilidade do apenado a regime menos gravoso se apresenta manifesta.

Isto posto, por ausência do requisito subjetivo, indefiro a progressão de regime, devendo o apenado continuar a cumprir sua pena no regime semiaberto**fechado, por mais 90 dias.

P..I. Registre-se no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_116',
        nome: 'Progressão aberto multa não paga',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Tratam os autos de execução de pena de reclusão, em regime  semiaberto onde o SEEU informou atingido o requisito objetivo para progressão e, juntado ACC, interveio o Ministério Publico, opinando pelo indeferimento do benefício dado o inadimplemento da pena pecuniária.
Relatados.
Dispõe a Lei de Execução Penal, no art. 112, que cumprido certo percentual  da pena imposta será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário, sendo aquele registrado no atestado de pena e o comportamento no ACC ou relatório da CEME constante dos autos.
É o caso, quando o apenado cumpre a pena no regime semiaberto harmonizado sem anotação de violações ao monitoramento eletrônico * com anotação de menos de cinco violações ao monitoramento eletrônico em período de tempo tempo mais que razoável.
O Supremo Tribunal Federal, porém, iterativamente tem decidido, que o "inadimplemento deliberado da pena de multa impede a progressão de regime" (STF, HC 211.197-AgR, Segunda Turma, Rel. Min. Gilmar Mendes, DJe de 15/3/2022; HC 205.609, Primeira Turma, Rel. Min. Dias Toffoli, DJe de 15/3/2022, HC 227285 AgR, Rel: LUIZ FUX, Primeira Turma, j. 22/05/2023).
**No caso, porém, trata-se de condenação transitada em julgado em dada anterior à vigência da Portaria Conjunta nº 42 – TJ/RN-CGJ, em 30/09/2019, que fixou a competência deste juízo para executar as penas de multa, pelo que nada impede que isso ocorra ou já esteja ocorrendo tanto em algum dos juízos da Fazenda Pública ou naquele de execução penal para onde for declinada a execução da pena corporal.
**No caso, porém, nada impede que a multa seja paga no juízo para onde for declinada a execução da pena corporal.
Ademais, o saldo da pena privativa de liberdade em execução é diminuto, não se mostrando razoável que o apenado continue no regime mais gravoso.
Isto posto, progrido para aberto o regime de cumprimento da pena privativa de liberdade.
*P.R.I. Expeça-se a competente Guia de Execução Penal atualizada. Cópia desta decisão será como ofício dando ciência à unidade prisional acerca dos seus termos.
*P.R.I. Comunique-se ao estabelecimento prisional, solicitando que advirta o apenado do prazo de cinco dias para comparecer à 14ª Vara Criminal, ou quinze dias para comparecer perante o juízo competente. Caso o PEC seja remetido para outra comarca, informe-se à unidade prisional ou CEME (conforme estivesse ou não monitorado o apenado) para as devidas anotações no prontuário ou sua remessa para a unidade prisional onde deverá se apresentar.
]Remetam-se estes autos ao juízo competente.
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_123',
        nome: 'Progressão de Regime - SEMIABERTO',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Tratam os autos de execução de pena de reclusão em regime em regime fechado em que o SEEU informou atingido o requisito objetivo para progressão e, juntado ACC, interveio o Ministério Publico, opinando pelo deferimento do benefício.
Anoto existir (em) em desfavor do apenado ação penal nº XXX em curso na XXX, **ainda sem julgamento **com ordem de prisão decretada ** conclusa para sentença desde XX, consoante informação contida no PJe.
Anoto que o apenado foi condenado pelo Juízo da XX, processo nº XX, a pena de XX de reclusão, com direito a recorrer em liberdade ** sem direito a recorrer em liberdade, encontrando-se os autos remetidos ao eg. Tribunal de Justiça, consoante informação contida no PJe.
Registro a existência de prisão decretada face ao apenado na ação penal nº ***, em curso na ** Vara Criminal.
Relatados.
Dispõe a Lei de Execução Penal, no art. 112, que cumprido ao menos um sexto da pena imposta, será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário, o que ficou explicitado nos documentos juntos.
No caso de crime hediondo ou equiparado, porém, a Lei 8.072/90, com a redação que foi dada ao seu art. 2º, § 2º, pela Lei 11.464/2007, dispõe que "a progressão de regime, no caso dos condenados aos crimes previstos neste artigo, dar-se-á após o cumprimento de 2/5 (dois quintos) da pena, se o apenado for primário, e de 3/5 (três quintos), se reincidente".
**Aqui, trata-se de crime não hediondo, com apenado não reincidente e que já cumpriu mais de um sexto da pena em execução, sendo comprovado bom comportamento carcerário.
*Aqui, trata-se de equiparado a hediondo, com apenado não reincidente e que já cumpriu mais de dois quintos da pena em execução, sendo comprovado bom comportamento carcerário.
**Apesar de existir prisão preventiva decretada em desfavor do apenado (fls. 48 e 50), não pode ele permanecer aguardando ad eternum a sua revogação ou julgamento do novo processo para que se decida sobre progressão de regime, se já preenchidos os requisitos legais.
Isto posto, progrido para semiaberto o regime de cumprimento da pena, ***sem autorização para saídas externas desvigiadas enquanto perdurar a ordem de prisão decretada em outro processo.
P.R.I. Expeça-se a competente Guia de Execução Penal atualizada. Cópia desta decisão será como ofício dando ciência à unidade prisional acerca dos seus termos.
 
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_130',
        nome: 'Progressão CTC',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso
 
Vistos etc
Executando-se pena privativa de liberdade em regime fechado, certificou-se que o apenado atingiu o requisito objetivo para progressão, bem como informou a unidade prisional que ele apresenta bom comportamento prisional.
Interveio o Ministério Público, opinando *pela progressão de regime. *contrariamente à progressão de regime, por entender que **submissão do apenado a exame criminológico.
Relatados.
Como se lê na jurisprudência do Supremo Tribunal Federal, mostra-se "viável a realização do exame criminológico nas situações em que o Juiz da Execução, forte no exercício do poder geral de cautela, considerar necessário para a formação do seu convencimento" (Rcl nº 22.685/SP, Primeira Turma,Relatora para o acórdão a MinistraRosa Weber, DJe de 16/9/2016).
No mesmo sentido, já anotara a Suprema Corte, ao julgar reclamação em que relator o Ministro Celso de Mello:
Reclamação – Alegado desrespeito ao enunciado constante da Súmula Vinculante nº 26/STF – Inocorrência – Progressão de regime – Reconhecimento a possibilidade de o Juízo da Execução Criminal ordenar, mediante decisão fundamentada, a realização de exame criminológico – Importância do mencionado exame na aferição da personalidade e do grau de periculosidade do sentenciado - Edição da Lei nº 10.792/2003, que deu nova redação ao art. 112 da LEP – Diploma legislativo que, embora omitindo qualquer referência ao exame criminológico, não lhe veda a realização, sempre que julgada necessária pelo magistrado competente - Consequente legitimidade jurídica da determinação, pelo Poder Judiciário, do exame criminológico - Precedentes - Parecer da PGR pela improcedência da reclamação - Recurso de agravo improvido. (Rcl 18734 AgR, Relator(a):  Min. CELSO DE MELLO, Segunda Turma, julgado em 16/12/2014, PROCESSO ELETRÔNICO DJe-038 DIVULG 26-02-2015 PUBLIC 27-02-2015).
**No caso, trata-se de apenado que teve regressões de regime anteriores, pela prática de faltas graves, notadamente fugas (ocorridas duas vezes) quando beneficiado com progressão, mostrando-se imprescindível sua submissão a exame criminológico, com o escopo de verificar se se encontra satisfeito, na espécie, o requisito subjetivo legalmente exigido para a concessão de benefício, o qual não se subsume a simplesmente não ter praticado falta grave por alguns meses.
**No caso, trata-se de apenado por crime hediondo e que responde a outras 3-4-5- ações penais, enquanto já foi condenado outra duas* vezes (penas já unificadas * penas ainda não unificadas, pois lhe foi permitido o recurso em liberdade), mostrando-se imprescindível sua submissão a exame criminológico, com o escopo de verificar se se encontra satisfeito, na espécie, o requisito subjetivo legalmente exigido para a concessão de benefício, o qual não se subsume a simplesmente não ter praticado falta grave por alguns meses.
Isto posto, mando submeter o apenado a exame criminológico, que deve ser requisitado à Sejuc, fixando-se prazo de 15 dias para juntada do suas conclusões aos autos.
Atendido, dê-se nova vista ao Ministério Público.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_136',
        nome: 'Progressão cautelar',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de execução de pena do apenado acima nominado, atualmente em regime fechado, em que observado o cumprimento de mais de  um sexto da reprimenda** dois quintos da reprimenda**, enquanto comprovado documentalmente bom comportamento carcerário.
Acrescento ao relatório que não consta intervenção do Ministério Público, face a proximidade do recesso natalino, evitando prejuízos ao apenado.

Anoto existir (em) em desfavor do apenado ação penal nº XXX em curso na XXX, **ainda sem julgamento **com ordem de prisão decretada ** conclusa para sentença desde XX, consoante informação contida no Sistema de Automação do Judiciário – SAJ.

Anoto que o apenado foi condenado pelo Juízo da XX, processo nº XX, a pena  de XX de reclusão, com direito a recorrer em liberdade ** sem direito a recorrer em liberdade, encontrando-se os autos remetidos ao eg. Tribunal de Justiça, consoante informação contida no Sistema de Automação do Judiciário – SAJ.

Dispõe a Lei de Execução Penal, no art. 112, que cumprido ao menos um sexto da pena imposta, será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário, o que ficou explicitado nos documentos juntos.
**É o caso.
**No caso de crime hediondo ou equiparado, porém, a Lei 8.072/90, com a redação que foi dada ao seu art. 2º, § 2º, pela Lei 11.464/2007, dispõe  que "a progressão de regime, no caso dos condenados aos crimes previstos neste artigo, dar-se-á após o cumprimento de 2/5 (dois quintos) da pena, se o apenado for primário, e de 3/5 (três quintos), se reincidente".
**Aqui, trata-se de crime hediondo, com apenado não reincidente e que já cumpriu mais de dois quintos da pena em execução, sendo comprovado **** comportamento carcerário (fl. **).

Registro que dada a dificuldade na manifestação ministerial no curto prazo, a progressão será deferida cautelarmente, evitando prejuízos ao apenado.
Isto posto, progrido cautelarmente para o regime semiaberto o cumprimento da pena.
P. R. I. Comunique-se a unidade prisional, para que providencie a transferência do apenado ao regime adequado, dando-se em seguida vista ao Ministério Público.
Caso não haja discordância ministerial, aguarde-se transferência para o novo incidente na execução penal. Ocorrendo o contrário, voltem-me para nova decisão.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_141',
        nome: 'Progressão para semiaberto hediondo e comum',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena de *** de reclusão em regime ****,  por delitos de ***.

Interveio o Ministério Publico, opinando pela progressão de regime.

Relatados.

Dispõe a Lei de Execução Penal, no art. 112, que cumprido ao menos um sexto da pena imposta, será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário, o que ficou explicitado nos documentos juntos.

No caso de crime hediondo ou equiparado, porém, o art. 112 da Lei exige o cumprimento de 40% da pena se primário e 60% se reincidente específico.

**Aqui, tratam-se de crimes hediondo e comum, com apenado não reincidente específico e que já cumpriu mais de 40% daquela pena e 16% da imposta por esse, sendo comprovado bom comportamento carcerário.

**Aqui, trata-se de crimes hediondo e comum, com apenado reincidente específico e que já cumpriu mais de 60% da pena em execução pelo crime hediondo e 16% da imposta pelo crime comum, sendo comprovado bom comportamento carcerário.

**Aqui, trata-se de crimes hediondo e comum, aquele praticado antes da Lei 11.464, já cumprido mais de um sexto da pena em execução, sendo comprovado **** comportamento carcerário (fl. **).

Por oportuno, dada a inexistência de unidade prisional adequada ao regime semiaberto na região,  está sendo concedido o semiaberto harmonizado (semiaberto em prisão domiciliar com monitoramento eletrônico e recolhimento no horário noturno), visando possibilitar o exercício de trabalho, conforme orientação do Superior Tribunal de Justiça, verbis:

Não há óbices à concederão de prisão domiciliar com monitoração eletrônica ao sentenciado em regime semiaberto, quando não há vagas no regime específico ou quando não há estabelecimento prisional adequado ou similar na localidade em que cumpre pena" (REsp 1710674/MG, Rel. Ministro REYNALDO SOARES DA FONSECA, TERCEIRA SEÇÃO, julgado em 22/08/2018, DJe 03/09/2018).

Isto posto, progrido o cumprimento da pena para o regime semiaberto, que pode ser cumprido como semiaberto harmonizado (semiaberto em prisão domiciliar com monitoramento eletrônico e recolhimento no horário noturno), obedecendo-se o regramento estipulado por portaria deste juízo.

P.R.I. Regularize-se a situação do apenado no BNMP, se for o caso, e requisite-se sua transferência para estabelecimento prisional adequado. Atualize-se a GEP.                         

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_169',
        nome: 'Progressão indefere subjetivo exame criminológico incompleto',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

Vistos etc
Executando-se pena privativa de liberdade em regime fechado, certificou-se que o apenado atingiu o requisito objetivo para progressão, bem como informou a unidade prisional que ele apresenta bom comportamento prisional.
Este juízo requisitou exame criminológico, que foi parcialmente realizado, já que ausentes pareceres psicológico e psiquiátrico, enquanto apresentada avaliação feita por comissão de servidores penitenciários.
Interveio o Ministério Público, opinando pelo complemento da avaliação com exame realizado por equipe técnica, enquanto a defesa impugnou a avaliação e requereu progressão para o semiaberto.
Acrescento ao relatório que o apenado registra, no decurso da execução da pena, **XX regressões por fuga e XX prática de novo crime, além de diversas outras faltas disciplinares.
Relatados.
De logo observo a impraticabilidade de determinar a complementação do exame criminológico, já que a unidade prisional informou a este juízo que a Sejuc não disponibilizou a necessária equipe técnica de classificação.
Isso dito, anoto dispor a Lei de Execução Penal, no art. 112, que cumprido ao menos um sexto da pena imposta ou dois quintos no caso de crime hediondos e equiparados, será transferido o apenado para regime menos rigoroso, se seu mérito indicar a progressão.
Aqui, cumpriu o apenado o requisito objetivo para progressão de regime.
Quanto ao subjetivo, porém, diversa é a situação.
Já dispunha a Exposição de Motivos da Lei de Execução Penal que "a progressão deve ser uma conquista do condenado pelo seu mérito".
No caso, verifica-se que o apenado cumpre irregularmente a pena, já anotadas XX fugas durante a execução, além de novos crimes praticados durante tal período, situação que leva a presunção de periculosidade.
Aqui, os autos demonstram claramente características de apenado não adequadas a alguém que está beneficiado com a semiliberdade, já que não cumpre corretamente a pena (o cumprimento fiel da sentença, aliás, é primeiro dos deveres do apenado, conforme dispõe o art. 39, I, da Lei 7.210/84).
Enfim, a progressão depende da adaptação provável do apenado ao regime menos severo, o que se obtém de detalhes registrados no decorrer da execução penal, não se podendo correr tal consciente risco quando os autos ampara decisão contrária.
Repito: não se pode causar à sociedade consciente risco, quando a não adaptabilidade do apenado a regime menos gravoso se apresenta manifesta.
Isto posto, por ausência do requisito subjetivo, indefiro a progressão de regime, devendo o apenado continuar a cumprir sua pena no regime fechado, por mais 100 dias, quando deverá ser buscado novo ACC.
P..I. Registre-se no SEEU.
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_194',
        nome: 'Progressão aberto cautelar',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena, atualmente em regime semiaberto, em que o SEEU identificou o atingimento do requisito objetivo para progressão, enquanto comprovado documentalmente bom comportamento carcerário.

Acrescento ao relatório que foi dada vista ao Ministério Público há mais de cinco dias, o qual ainda não se manifestou.

Relatados.

Inicialmente registro que, apesar de ainda não transcorrido o prazo para manifestação ministerial, impõe-se a decisão cautelar, dada a atual situação de pandemia mundialmente reconhecida, bem como à Recomendação nº 62/2020, do Conselho Nacional de Justiça.

É o que passo a fazer. 

**Dispõe a Lei de Execução Penal, no art. 112 que cumprido ao menos 16% da pena imposta, será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário, o que ficou explicitado nos documentos juntos.

**Dispõe a Lei de Execução Penal, na redação anterior del art. 112 (aplicável ao caso), que cumpridos ao menos um sexto da pena imposta, será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário, o que ficou explicitado nos documentos juntos.

Isto posto, progrido cautelarmente para o regime aberto o cumprimento da pena.

P. R. I. Comunique-se a unidade prisional, para que providencie a transferência do apenado ao regime adequado, dando-se em seguida vista ao Ministério Público.

Caso não haja discordância ministerial, aguarde-se transferência para o novo incidente na execução penal. Ocorrendo o contrário, voltem-me para nova decisão.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_242',
        nome: 'Progressão indeferimento pedir nova GEP',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução penal em que o SEEU identificou o requisito objetivo para progressão de regime, tendo em vista a pena em imposta.

No entanto, existe ação penal julgada, na qual o apenado foi condenado, sem direito a recorrer em liberdade, na **ª Vara Criminal de Natal/RN, sob o nº **.

É o relatório. Decido.

Apesar de atendido o requisito objetivo, agora não se há de conceder o benefício de progressão de regime, pois é necessária, antes, proceder à unificação das penas e consequente atualização dos cálculos dos benefícios, expedindo-se guia de execução penal atualizada.

Ante o exposto, com fundamento nos arts. 111 c/c 118, II, da Lei de Execução Penal, a indefiro a progressão de regime e determino que se solicite a guia de recolhimento referente à ação penal nº **, para fins de unificação ou soma de penas.

P.R. Cumpra-se. Ciência ao MP e à Defensoria Pública, se necessário

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_281',
        nome: 'Progressão Indeferimento ACC Regular preso menos 6 meses',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Trata-se de execução penal em desfavor do apenado acima nominado, em que o SEEU identificou o requisito objetivo para progressão de regime.

Interveio o Ministério Público opinando pelo indeferimento, face a ausência de requisito subjetivo.

Intimada, a Defesa pugnou pela progressão de regime.

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

Já o Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte fixa, para os apenados no regime fechado, o prazo de 06 meses sem prática de infração domiciliar de natureza grave para a conduta disciplinar ser classificada como boa.

Tal prazo, à evidência, conta-se da entrada do apenado no regime fechado.

Aqui, o apenado está há menos de seis meses nesse regime de cumprimento da pena, pelo que não atingiu ainda o requisito subjetivo para nova progressão.

Em assim sendo, indefiro a progressão de regime, devendo o ACC ser buscado após o apenado cumprir seis meses no regime fechado.

P.R.I. Ciência ao Ministério Público.

Natal, data do sistema.
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_283',
        nome: 'Progressão semiaberto comum (completo)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'progressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

DECISÃO/OFÍCIO

Executando-se pena privativa de liberdade em regime fechado o SEEU identificou que o apenado atingiu o requisito objetivo para progressão de regime, bem como informou a unidade prisional bom comportamento carcerário (evento ).

Interveio o Ministério Público, opinando pela concessão do benefício (evento ).

** Anoto que o apenado, custodiado no Complexo Penal Dr. João Chaves - CPJC, não tem em seu desfavor outro processo criminal em andamento, mandado de prisão aguardando cumprimento ou prisão preventiva decretada, conforme informações do Sistema de Automação da Justiça - SAJ, SEEU, PJe e BNMP nesta data.

**Anoto que o apenado, custodiado no Complexo Penal Dr. João Chaves - CPJC, tem em seu desfavor as ações penais nºs *., sem mandado de prisão aguardando cumprimento ou prisão preventiva decretada, conforme informações do Sistema de Automação da Justiça - SAJ, SEEU, PJe e BNMP nesta data. 

**Acrescento ao relatório que transcorreu o prazo determinado no evento ** para reanálise do incidente de progressão de regime.

Relatados.

Conforme atestado de pena, o apenado cumpriu o requisito objetivo para concessão da progressão de regime, como também apresenta bom comportamento carcerário, atendendo, portanto, aos requisitos previstos no art. 112 da LEP.

Por oportuno, dada a inexistência de unidade prisional adequada ao regime semiaberto na região, está sendo concedido o semiaberto harmonizado (semiaberto em prisão domiciliar com monitoramento eletrônico e recolhimento no horário noturno), visando possibilitar o exercício de trabalho, conforme orientação do Superior Tribunal de Justiça, verbis:

Não há óbices à concessão de prisão domiciliar com monitoração eletrônica ao sentenciado em regime semiaberto, quando não há vagas no regime específico ou quando não há estabelecimento prisional adequado ou similar na localidade em que cumpre pena" (REsp 1710674/MG, Rel. Ministro REYNALDO SOARES DA FONSECA, TERCEIRA SEÇÃO, julgado em 22/08/2018, DJe 03/09/2018).

Isto posto, progrido o cumprimento da pena para o regime semiaberto, que pode ser cumprido como semiaberto harmonizado (semiaberto em prisão domiciliar com monitoramento eletrônico e recolhimento no horário noturno), obedecendo-se o regramento estipulado por portaria deste juízo.

Atualize-se o atestado de pena.

P. R. I. Remeta-se cópia desta decisão à unidade prisional, que valerá como determinação para transferência do apenado ao novo regime, observando-se que o apenado deverá ser inserido no semiaberto harmonizado, ou seja, monitorado eletronicamente, em até três dias, exceto se houver algum motivo que o impeça, o que deverá ser imediatamente comunicado a este juízo.

Providencie-se, se necessário, baixa de mandado de prisão no BNMP.

$assinaturaJuizDireito`,
    },
];
