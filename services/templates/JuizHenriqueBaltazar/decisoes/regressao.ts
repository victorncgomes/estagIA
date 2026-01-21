/**
 * Decisões de Regressão de Regime - Juiz Henrique Baltazar
 * @version 0.1.0
 * 
 * IDs: seeu_005, seeu_032, seeu_033, seeu_047, seeu_048, seeu_049,
 *      seeu_055, seeu_059, seeu_064, seeu_083, seeu_087, seeu_091,
 *      seeu_109, seeu_124, seeu_139, seeu_140, seeu_144, seeu_145,
 *      seeu_146, seeu_151, seeu_168, seeu_170, seeu_197, seeu_208,
 *      seeu_258
 * 
 * Total: 25 modelos
 */

import { Modelo } from '../../types';

export const DECISOES_REGRESSAO: Modelo[] = [
    {
        id: 'seeu_005',
        nome: 'Regressão definitiva - violações',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-19',
        conteudo: `$cabecalho
Autos nº. $autos.getNumeroUnicoFormatado()
$dadosProcesso

Vistos etc.
A unidade prisional informou que o apenado descumprira as regras de monitoramento eletrônico...
Considerando a gravidade das violações e o parecer ministerial...
Homologo a falta grave e decreto a regressão definitiva do regime, devendo o apenado retornar ao regime fechado.
Comunique-se ao estabelecimento prisional.
P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos
Juiz de direito`,
    },
    {
        id: 'seeu_032',
        nome: 'Regressão provisória - novo crime',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Trata-se de execução de pena privativa de liberdade em regime semiaberto, sendo certificado que o apenado agora foi preso em flagrante por novo crime, supostamente praticado em **.

*Trata-se de execução de pena privativa de liberdade imposta ao apenado acima nominado, em regime semiaberto, sendo certificado que ele agora foi denunciado por novo crime, supostamente praticado em **.

Relatados.

A situação relatada nestes autos encontra-se exposta no art. 118, primeira parte, da Lei nº 7210/84, como causa impositiva de regressão de regime de cumprimento de pena privativa de liberdade, e sobre a qual decidiu a Suprema Corte não ser necessário que o crime doloso tenha sido objeto de sentença condenatória transitada em julgado.

Afinal, como esclarece copioso e pacífica jurisprudência, "a prática de 'fato definido como crime doloso', para fins de aplicação da sanção administrativa da regressão, não depende de trânsito em julgado da ação penal respectiva" (HC 93782, Min. RICARDO LEWANDOWSKI).

*Isto posto, decreto a regressão provisória, para o fechado, do regime prisional imposto ao cumprimento da pena.

*P.R.I., e expeça-se mandado de prisão. Com a captura do apenado, designe-se audiência de justificação.

Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_033',
        nome: 'Regressão novo crime audiência saneamento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Cumprindo pena em regime semiaberto, certificou-se que o apenado foi preso, denunciado e condenado de forma ainda não definitiva por novo crime supostamente praticado em ***.

Relatados.

A situação relatada nestes autos encontra-se exposta no art. 118, primeira parte, da Lei nº 7210/84.

O Superior Tribunal de Justiça decidiu que a instrução durante a execução penal, para fins de reconhecimento da falta grave, poderá ser suprida por sentença criminal condenatória, sendo apenas, se essa ainda não transitou em julgado, imprescindível ouvir a defesa.

No caso, consta decisão condenatória do apenado pelo novo crime, mas ainda sem trânsito em julgado, pelo que entendo necessário ouvir as partes para decisão sem necessidade de audiência de justificação.

Assim, *mando retirar de pauta a audiência de justificação já agendada e determino vistas dos autos às partes.

Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_047',
        nome: 'Regressão - semiaberto - não compareceu',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que o apenado teve o regime progredido para semiaberto, sendo agendado seu comparecimento à CEME para inserção no monitoramento eletrônico, mas não compareceu e nem apresentou justificativa.

O MP pugnou pela regressão de regime.

Relatados.

O regime semiaberto harmonizado neste juízo é cumprido através de prisão domiciliar noturna com monitoramento eletrônico, pelo que, se o apenado não cumpre a determinação de comparecer à CEME se encontra foragido, o que configura falta grave.

Ocorre que, estando o apenado fugido, não é concebível que, ao ser recapturado e antes de ser ouvido, retorne para regime mais brando.

Neste sentido decidiu o STF: "O ato impugnado não apresenta ilegalidade, já que a oitiva prévia do art. 118, § 2º, da LEP somente é indispensável na hipótese de regressão definitiva" (HC 163720).

Isto posto, decreto a regressão provisória, para fechado, do regime prisional.

Atualize-se o atestado de pena. P.I., expeça-se mandado de prisão. Se preso, designe-se audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_048',
        nome: 'Regressão definitiva não comparecimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução penal em que o apenado teve o regime progredido para semiaberto, sendo agendado seu comparecimento à CEME para inserção no monitoramento eletrônico, mas não fez qualquer contato desde **, restando inexitosas as tentativas de localizá-lo.

Regressão cautelar em ** com mandado de prisão cumprido em **.

Em audiência de justificação ele alegou que ***.

O MP opinou pela homologação da falta grave, enquanto a defesa ***.

Relatados.

Determina a LEP, no art. 146-C, I, que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de receber visitas do servidor responsável, responder aos seus contatos e cumprir suas orientações.

*No caso, ao não atender à orientação recebida de comparecer à CEME, o apenado praticou falta grave.

Finalmente, nos termos do art. 118, I, da LEP, a execução ficará sujeita à forma regressiva quando o condenado praticar falta grave.

Isto posto, regrido definitivamente o regime prisional para fechado e considero perdido um quinto (dada a confissão) do tempo já remido.

P.R.I. Atualize-se o cálculo dos requisitos temporais.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_049',
        nome: 'Regressão não instalação tornozeleira',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que o apenado teve o regime progredido para semiaberto, sendo agendado seu comparecimento à CEME para inserção no monitoramento eletrônico, mas não fez qualquer contato desde **, restando inexitosas as tentativas de localizá-lo.

Regressão cautelar em ** com mandado cumprido em **.

Oportunizado-lhe justificar-se, alegou o apenado que **.

O MP opinou pela homologação da falta grave, enquanto a defesa solicitou o acatamento da justificativa.

Relatados.

O comparecimento para inserção no monitoramento eletrônico é o primeiro dever do apenado do regime semiaberto. Ao não fazê-lo pôs-se em situação de fuga, o que configura falta grave (art. 50, II, LEP).

Neste sentido entende o STJ: "tendo permanecido o executando mais de 30 dias fora do sistema prisional, longe de qualquer fiscalização do Estado, demonstrando descomprometimento com o cumprimento da pena e intenção de se furtar à aplicação da lei (fuga), adequado o entendimento quando regride o reeducando" (AgRg no HC n. 834.414/RS).

No caso, a justificativa é inaceitável, porque era obrigação do apenado comparecer à CEME.

Isto posto, regrido para fechado o regime de execução da pena, bem como considero perdido um quinto (dada a confissão) do tempo já remido.

P.R. I. Atualize-se o quadro de eventos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_055',
        nome: 'Regressão definitiva novo crime',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Cumprindo pena em regime semiaberto, certificou-se que o apenado foi preso e denunciado por novo crime supostamente praticado em ***.

Oportunizado-lhe justificar-se, confirmou o apenado sua nova prisão, afirmando, porém, não ter praticado o crime.

O MP opinou pelo reconhecimento da falta grave, enquanto a defesa pediu o acatamento da justificativa.

Relatados.

A situação relatada encontra-se exposta no art. 118, primeira parte, da Lei nº 7210/84.

A Suprema Corte decidiu não ser necessário o trânsito em julgado da condenação criminal: "a prática de 'fato definido como crime doloso' não depende de trânsito em julgado da ação penal respectiva" (HC 93782).

Neste sentido também a Súmula 526 do STJ: "O reconhecimento de falta grave decorrente do cometimento de fato definido como crime doloso no cumprimento da pena prescinde do trânsito em julgado".

O STF reconheceu (Tema 758, RE 776823): "O reconhecimento de falta grave consistente na prática de fato definido como crime doloso dispensa o trânsito em julgado, desde que a apuração ocorra com observância do devido processo legal".

É o caso, pois foi o apenado denunciado pelo suposto novo crime.

Isto posto, decreto a regressão, para o fechado, do regime prisional e considero perdido um quinto do tempo já remido, dada a atenuante da confissão.

P.R.I. Atualize-se a guia de execução penal.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_059',
        nome: 'Regressão cautelar indefere progressão aberto',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para progressão.

Executando-se em regime semiaberto pena privativa de liberdade, ao apenado foi concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que violara a área de inclusão e deixara descarregar completamente a bateria do equipamento por diversas vezes.

Anoto que o apenado descumpre reiteradamente a pena, sendo-lhe impostas punições por faltas médias já por ** vezes.

Relatados.

Verifica-se que o executado praticou várias violações às condições do monitoramento eletrônico.

Em sendo assim, reiteradas vezes o penitente deixou de cumprir a pena, restando evidenciado que as faltas não foram fatos isolados, situação que demonstra a ocorrência do motivo expresso no art. 146-C, parágrafo único, inc. I, da Lei 7.210/84, para regressão de regime.

A jurisprudência do STJ confirma que "Comete falta grave o apenado que viola a zona de monitoramento eletrônico" (HC 462.719/RS, STJ).

Portanto, diante das violações relatadas, indefiro a progressão de regime e regrido cautelarmente o regime prisional para fechado.

Comunique-se à CEME e expeça-se mandado de prisão; quando cumprido, coloque-se o feito em pauta para audiência de justificação.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_064',
        nome: 'Regressão faltas reiteradas',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumprindo pena privativa de liberdade em regime semiaberto, com autorização para saídas externas, o apenado não se recolheu, por ** noites no mês de **, ** em ** e ** deste ano.

Anoto que o apenado descumpre reiteradamente a pena, sendo-lhe impostas punições por faltas médias já por ** vezes.

*Opinou o Ministério Público pela regressão provisória do regime prisional para o fechado.

Relatados.

De logo, verifico que o apenado deixou de se recolher por *** em ** deste ano, quando já havia sido punido por ** vezes faltas médias.

Em sendo assim, reiteradas vezes o penitente deixou de cumprir a pena, restando evidenciado que as faltas não foram fatos isolados no decorrer da execução, mas sim comportamento reiterado.

Portanto, diante da moldura fática apresentada, não vislumbro desproporcionalidade da medida regressiva ao caso, já que as faltas médias anteriormente aplicadas não surtiram qualquer efeito.

Conforme o STJ: "O não-recolhimento injustificado ao estabelecimento prisional caracteriza violação das regras estabelecidas para o cumprimento da pena no regime semi-aberto, podendo dar ensejo à regressão para o regime mais gravoso" (HC 56.600/MS).

Isto posto, decreto a regressão provisória, para fechado, do regime prisional e mando lançar no SEEU *** dias como pena não cumprida.

P.R.I. Expeça-se mandado de prisão. Se e quando preso o apenado, coloque-se o feito em pauta para audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_083',
        nome: 'Regressão provisória - fuga',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
Processo nº. $autos.getNumeroUnicoFormatado()
$dadosProcesso
 
Vistos etc.
Executando-se em regime semiaberto pena privativa de liberdade, informou a Direção do estabelecimento prisional a ausência do apenado desde ***.

Interveio o Ministério Público, requerendo a regressão cautelar do regime prisional.

Relatados.

A situação relatada nestes autos demonstra a ocorrência de falta grave (fuga), a ser devidamente apurada em audiência de justificação, com a aplicação do due process of law.

A jurisprudência do Supremo Tribunal Federal confirma que "a oitiva prévia disposta no art. 118, § 2º, da Lei de Execução Penal somente é indispensável na hipótese de regressão definitiva do regime prisional" (HC 163720).

Isto posto, decreto a regressão provisória, para fechado, do regime prisional imposto ao cumprimento da pena.

Atualize-se o atestado de pena a cumprir, com o lançamento da fuga.

P.I., expeça-se mandado de prisão. Se preso o apenado, designe-se data para audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_087',
        nome: 'Regressão - revogação - novo crime absolvição',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que o apenado foi regredido definitivamente para o regime fechado em razão de ter cometido novo crime, conforme decisão do ev. xxxx.

A Defesa pediu reconsideração da decisão uma vez que o apenado foi absolvido do novo crime que motivou a regressão, conforme sentença exarada nos autos da ação penal nº xxxx.

Instado a se manifestar, o Ministério Público opinou favoravelmente ao pedido.

Relatados.

O pedido deve ser deferido.

É que ficou reconhecido em sentença penal absolutória a não ocorrência do delito que motivou a regressão do regime prisional.

Anoto aqui que o STJ já decidiu que "não pode subsistir o reconhecimento de falta disciplinar de natureza grave decorrente do suposto cometimento de crime diante da posterior absolvição" (HC 265.284 - SP).

Diante do exposto, revogo as decisões dos evs. xxxxxx e determino o imediato retorno do apenado para o regime semiaberto harmonizado.

P.I. Comunique-se ao estabelecimento prisional para que libere o apenado mediante a instalação de tornozeleira eletrônica.

$assinaturaJuizDireito
$rodape`,
    },
    {
        id: 'seeu_091',
        nome: 'Regressão - não iniciou aberto - cancela',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena de * (**) meses de detenção, a ser cumprida inicialmente em regime aberto, substituída por restritiva de direitos, que, após não ser localizado para participar da audiência admonitória, foi regredido para o regime fechado provisoriamente pelo juízo da ** Vara da Comarca de **.

Relatados.

De logo, tenho que, apesar do apenado não ter sido localizado para ser intimado da audiência admonitória anteriormente designada, aqui é incabível a regressão cautelar do regime prisional.

Observo que a regressão de regime só pode ser decretada após o início do cumprimento da pena e não antes disso, sob pena de ferir a coisa julgada, uma vez que a sentença penal condenatória transitada em julgado deve ser cumprida nos termos em que foi proferida.

No caso, caberia a expedição do mandado de prisão, após o que deveria ter se aguardado o seu cumprimento para definição da competência.

Diante do exposto, revogo a decisão do evento ** e mando notificar o apenado para comparecer à secretaria, a fim de iniciar o cumprimento de pena no regime aberto.

P.R.I. Redistribua-se o feito no SEEU para o juízo de execução de pena no perfil aberto da comarca de residência do apenado.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_109',
        nome: 'Regressão definitiva falta grave',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumprindo pena em regime semiaberto, o apenado fugiu em  XXX (fl. 45), sendo recapturado em XXX.

Oportunizado ao apenado justificar-se, relatou que outros presos quebraram a grade, tendo ele aproveitado para fugir.

Opinou o Ministério Público pela regressão de regime, enquanto a Defensora observou que o afastamento daquele da Comarca se deu em razão de ameaças de morte recebidas.

Relatados.

Preliminarmente anoto prescindível a defesa do penitente por meio de advogado durante a realização do procedimento administrativo, desde que seja concedida oportunidade de exercício da ampla defesa em juízo, tal como ocorreu neste caso.

Esta foi a tese que o Supremo Tribunal Federal, no RE 972.598, com repercussão geral reconhecida, fixou acerca da nulidade do procedimento disciplinar em razão do apenado ter sido ouvido administrativamente sem a presença de defensor:

"A oitiva do condenado pelo juízo da execução penal, em audiência de justificação realizada na presença do defensor e do Ministério Publico, afasta a necessidade de prévio procedimento administrativo, e assim como supre eventual ausência ou insuficiência de defesa técnica no PAD instaurado para apurar a prática de falta greve durante o cumprimento da pena".

Ultrapassado este ponto registro que a Lei nº 7.210/84, no seu art. 118, inc. I, última figura, dispõe sobre a transferência do apenado para regime mais rigoroso de cumprimento de pena privativa de liberdade quando pratica falta grave, enquanto o art. 50, inc. II, do mesmo estatuto esclarece, que a comete o condenado que fugir.

No caso, verifica-se inaceitável a justificativa apresentada, porque não pode o apenado decidir, a seu talante, quando sair do cárcere mesmo que a oportunidade tenha sido criada por outros apenados.

Isto posto, homologo a falta grave e mantenho fechado o regime de execução da pena privativa de liberdade aplicada à apenada, bem como considero perdido um quinto (dada a atenuante da confissão) do tempo já remido e o que viesse a ser remido até a data da falta grave.

P.R. I. Atualize-se a Guia de Execução Penal. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_124',
        nome: 'Regressão regime mais gravoso',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

*Cumprindo pena em regime semiaberto, certificou-se que o apenado foi preso e denunciado por novo crime.

*Oportunizado-lhe justificar-se, confirmou o apenado sua nova prisão, afirmando, porém, não ter praticado o crime.

Interveio o Ministério Público, opinando pelo reconhecimento da falta grave, enquanto a defesa pediu o acatamento da justificativa, bem como sustentou que a regressão não poderia ser para regime mais gravoso que aquele determinado na sentença condenatória.

Relatados.

A situação relatada nestes autos encontra-se exposta no art. 118, primeira parte, da Lei nº 7210/84, como causa impositiva de regressão de regime de cumprimento de pena privativa de liberdade, e sobre a qual decidiu a Suprema Corte não ser necessário que o crime doloso tenha sido objeto de sentença condenatória transitada em julgado.

Afinal, "a prática de 'fato definido como crime doloso', para fins de aplicação da sanção administrativa da regressão, não depende de trânsito em julgado da ação penal respectiva" (HC 93782, Relator(a): Min. RICARDO LEWANDOWSKI, Primeira Turma, j. em 16/09/2008).

Nesse sentido também dispõe a Súmula do Superior Tribunal de Justiça: O reconhecimento de falta grave decorrente do cometimento de fato definido como crime doloso no cumprimento da pena prescinde do trânsito em julgado de sentença penal condenatória no processo penal instaurado para apuração do fato. (Verbete 526, aprovado pela 3ª Seção em 13/05/2015).

De seu lado, a jurisprudência dos tribunais superiores é pacífica no tocante a ser cabível a regressão a regime de cumprimento de pena mais gravoso que o fixado na sentença.

Neste sentido: (RHC 104585, Relator(a): Min. GILMAR MENDES, Segunda Turma, julgado em 21/09/2010); (AgRg no HC 525.652/SP, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 19/11/2019).

Isto posto, decreto a regressão, para o fechado, do regime prisional e considero perdido um quinto do tempo já remido e o que viesse a ser até a data da falta grave, dada a atenuante da confissão.

P.R.I. Atualize-se a guia de execução penal. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().


Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_139',
        nome: 'Regressão fuga inexistente revogação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de execução da pena imposta a [Todas as Partes Passivas] em reque foi regredido cautelarmente o regime prisional em razão do CPJC ter informado que o apenado estaria foragido.
Adiante a autoridade carcerária pediu fosse desconsiderada a informação de fuga do apenado, haja vista ele estar *se recolhendo regularmente*inserido no sistema de monitoração eletrônica, incorrendo a secretaria da unidade prisional em engano.
Relatados.
Resta evidente que a decisão de regressão de regime foi fundada em informação equivocada emitida pela Direção do estabelecimento prisional, sendo necessária a sua retificação.
Diante do exposto, torno sem efeitos a decisão de regressão de regime,  mando cancelar o mandado de prisão expedido contra o apenado, inclusive com baixa no BNMP.
P.R.I. Cópia desta decisão servirá como ofício dando ciência  ao estabelecimento prisional de seus termos.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_140',
        nome: 'Regressão rompimento monitoração definitiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
Autos nº. $autos.getNumeroUnicoFormatado()
 
Vistos etc.
Executando-se em regime semiaberto pena privativa de liberdade foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que ele rompera o equipamento.
Ouvido em audiência de justificação, o apenado confirmou a conduta, alegando que o fizera porque ***
Interveio o Ministério Público, opinando pela regressão de regime, enquanto a defesa pediu *a atualização da guia de execução penal *o acatamento da justificativa apresentada.
Relatados.
Determina a Lei de Execução Penal, no art. 146-C, inciso II,  que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "abster-se de remover, de violar, de modificar, de danificar de qualquer forma o dispositivo de monitoração eletrônica ou de permitir que outrem o faça" (art. 146-C, II), esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.
O rompimento do equipamento de monitoração eletrônica ("tornozeleira"), a teor da jurisprudência do Superior Tribunal de Justiça, configura fuga, que é falta disciplinar de natureza grave.

Este Superior Tribunal de Justiça possui entendimento de que o rompimento da tornozeleira eletrônica configura falta disciplinar de natureza grave, nos termos do art. 50, VI, e 146-C, da Lei de Execução Penal. (HC 363.742/RS, Rel. Ministro RIBEIRO DANTAS, QUINTA TURMA).

***A justificativa é inaceitável, porque era obrigação do apenado zelar pelo equipamento de monitoramento eletrônico.
Isto posto, regrido para fechado o regime de execução da pena privativa de liberdade, bem como considero perdido um quinto (dada a confissão) do tempo já remido e o que viesse a ser remido até a data da última falta grave.
P.R. I. Atualize-se o quadro de eventos. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_144',
        nome: 'Regressão definitiva fuga',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Então cumprindo pena em regime semiaberto o apenado deixou de se recolher ao estabelecimento prisional desde **, sendo recapturado/reapresentando-se em **.
Oportunizado ao apenado justificar-se, ****.
Opinou o Ministério Público pela regressão de regime, enquanto a defesa **observou que o afastamento daquele da Comarca se deu em razão de ameaças de morte recebidas**pediu o não reconhecimento da falta grave, em razão da inexistência de PAD com sua efetiva participação** pediu a atualização da GEP.
Relatados.
A Lei nº 7.210/84, no seu art. 118, inc. I, última figura, dispõe sobre a transferência do apenado para regime mais rigoroso de cumprimento de pena privativa de liberdade quando pratica falta grave, enquanto o art. 50, inc. II, do mesmo estatuto esclarece, que a comete o condenado que fugir.
É o caso dos autos, sendo inaceitável a justificativa apresentada, pois caberia ao apenado ter comunicado o fato a Juízo e pedido sua transferência para outro presídio ou sua inserção na monitoração eletrônica, não podendo decidir, a seu talante, quando e onde cumprir a pena, mesmo que alegue **ter inimigos**falta de condições financeiras.**
**Lembro, por derradeiro e face ao alegado pela defesa, que a oitiva do condenado pelo juízo. o Supremo Tribunal Federal, no RE 972.598, com repercussão geral reconhecida, fixou a seguinte tese:
A oitiva do condenado pelo juízo da execução penal, em audiência de justificação realizada na presença do defensor e do Ministério Publico, afasta a necessidade de prévio procedimento administrativo, e assim como supre eventual ausência ou insuficiência de defesa técnica no PAD instaurado para apurar a prática de falta greve durante o cumprimento da pena.

Isto posto, regrido para fechado o regime de execução da pena privativa de liberdade, bem como considero perdido um quinto (dada a confissão) do tempo já remido e o que viesse a ser remido até a data da fuga.
P.R. I. Atualize-se o quadro de eventos. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_145',
        nome: 'Monitoramento rompimento definitiva (variante)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Executando-se em regime semiaberto pena privativa de liberdade, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a Seap/CEME informado que ele rompera o equipamento.
Ouvido em audiência de justificação, o apenado confirmou a conduta, alegando que o fizera porque ***
Interveio o Ministério Público, opinando pela regressão de regime, enquanto a defesa pediu a atualização da guia de execução penal.
Relatados.
Determina a Lei de Execução Penal, no art. 146-C, inciso II, que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "abster-se de remover, de violar, de modificar, de danificar de qualquer forma o dispositivo de monitoração eletrônica ou de permitir que outrem o faça" (art. 146-C, II), esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.
Tal conduta, conforme decidiu o Colendo Superior Tribunal de Justiça, configura falta grave (HC 304.614/RS, Rel. Ministro JORGE MUSSI, QUINTA TURMA).
É o caso, sendo inaceitável a justificativa apresentada, pois ***
Isto posto, decreto a regressão, para o fechado, do regime prisional imposto ao cumprimento da pena e considero perdido um quinto do tempo já remido e o que viesse a ser até a data da falta grave, dada a atenuante da confissão.
P.R.I. Atualize-se o cálculo dos requisitos temporais e cientifique-se ao estabelecimento prisional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_146',
        nome: 'Regressão definitiva fuga e novo crime',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.  
Então cumprindo pena em regime semiaberto, o apenado deixou de se recolher ao estabelecimento prisional desde *** (evento ***), sendo recapturado em ***, quando preso em flagrante por novo crime (evento ***)., pelo qual foi denunciado na ação penal nº ***, em curso no ** Vara Criminal da Comarca de Natal, consoante informação contida no Sistema de Automação do Judiciário - SAJ/PG5.
Oportunizado ao apenado justificar-se, disse que XX (fl. XX).
Opinou o Ministério Público pela regressão definitiva, enquanto a Defensora ** Defesa pediu atualização da guia de execução penal.
Relatados.
A Lei nº 7.210/84, no seu art. 118, inc. I, última figura, dispõe sobre a transferência do apenado para regime mais rigoroso de cumprimento de pena privativa de liberdade quando pratica falta grave, enquanto o art. 50, inc. II, do mesmo estatuto esclarece, que a comete o condenado que fugir.
É o caso dos autos, sendo inaceitável a justificativa apresentada.
Ademais, a situação relatada nestes autos também se encontra exposta no art. 118, primeira parte, da Lei nº 7210/84, como causa impositiva de regressão de regime de cumprimento de pena privativa de liberdade.
Afinal, "a prática de 'fato definido como crime doloso', para fins de aplicação da sanção administrativa da regressão, não depende de trânsito em julgado da ação penal respectiva" (HC 93782, Relator(a): Min. RICARDO LEWANDOWSKI).
Nesse sentido dispõe a Súmula 526 do Superior Tribunal de Justiça.
Isto posto, homologo as faltas graves (fuga e novo crime) e decreto a regressão, para o fechado, do regime prisional imposto ao cumprimento da pena, considerando perdido um quinto do tempo já remido e o que viesse a ser até a data da última daquelas, dada a atenuante da confissão.
P.R.I. Atualize-se o quadro de eventos e cientifique-se ao estabelecimento prisional.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_151',
        nome: 'Monitoramento rompimento (regressão provisória)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto harmonizado (com monitoramento eletrônico) a pena privativa de liberdade, informou a Seap/CEME que o apenado rompera o equipamento em ***, não tendo atendido às tentativas de contato.

Relatados.

Determina a Lei de Execução Penal, no art. 146-C, inciso II, que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "abster-se de remover, de violar, de modificar, de danificar de qualquer forma o dispositivo de monitoração eletrônica ou de permitir que outrem o faça" (art. 146-C, II), esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.

O rompimento do equipamento de monitoração eletrônica ("tornozeleira"), a teor da jurisprudência do Superior Tribunal de Justiça, configura fuga, que é falta disciplinar de natureza grave (HC 363.742/RS, Rel. Ministro RIBEIRO DANTAS, QUINTA TURMA).

É o caso.

Isto posto, decreto a regressão provisória, para fechado, do regime prisional imposto ao cumprimento da pena.

Expeça-se mandado de prisão e, quando cumprido, coloque-se o feito em pauta para audiência de justificação. Comunique-se à unidade prisional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_168',
        nome: 'Regressão novo crime julgado antes da audiência',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade aplicada em que foi regredido provisoriamente o regime em razão do apenado(a) ter sido denunciado(a) pela prática de novo crime.

Adiante, porém, certificou-se no SAJ a condenação definitiva pelo novo processo.

Relatados.

A situação relatada nestes autos encontra-se exposta no art. 118, primeira parte, da Lei nº 7210/84, como causa impositiva de regressão de regime de cumprimento de pena privativa de liberdade, e sobre a qual decidiu o Superior Tribunal de Justiça ser desnecessária a oitiva do réu antes da regressão de regime prisional, pois descabida eventual justificação do cometimento do fato delituoso ou demonstração de sua inocorrência se evidenciada a prolação de sentença condenatória referente ao novo delito.

No mesmo sentido o Supremo Tribunal Federal, em 04/12/2020, ao julgar o RE n. 776.823/RS, fixou a tese de repercussão geral no sentido de que a instrução durante a execução penal, para fins de reconhecimento da falta grave, poderá ser suprida por sentença criminal condenatória (Tema n. 758/STF).

Isto posto, torno definitiva a regressão, para o fechado, do regime prisional.

P.R.I. Atualize-se a guia de execução penal.

Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_170',
        nome: 'Regressão cancelamento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

Vistos etc.

Trata-se de execução da pena em foi regredido cautelarmente o regime prisional em razão **do apenado ter sido autuado em flagrante por novo crime **da unidade prisional ter comunicado fuga do apenado.

**Adiante a autoridade carcerária pediu fosse desconsiderada a informação de fuga do apenado, haja vista ele estar *se recolhendo regularmente*inserido no sistema de monitoração eletrônica, incorrendo a secretaria da unidade prisional em engano.

**Adiante, certificou-se que o apenado não foi denunciado pelo suposto novo crime*, sendo quanto a ele arquivado o inquérito policial.

Relatados.

**Resta evidente que a decisão de regressão de regime foi fundada em informação equivocada emitida pela Direção do estabelecimento prisional, sendo necessária a sua retificação.

**Induvidoso que não se exige o julgamento do novo crime para reconhecer-se a falta grave prevista no art. 52, primeira parte, da Lei 7.210/84.

**Entretanto, o não oferecimento da denúncia demonstra que a polícia judiciária e o Ministério Público não conseguiram suficientes indícios quanto à conduta criminosa.

**A consequência é que não se pode punir o apenado por situação indefinida.

*Entretanto, o arquivamento da apuração policial, com não oferecimento da denúncia face ao apenado, afasta a falta grave.

Diante do exposto, torno sem efeitos a decisão de regressão de regime, retornando o apenado à situação anterior (regime ***), com a devida anotação no SEEU.

P.R.I. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_197',
        nome: 'Regressão negada novo crime sem denúncia',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Trata-se de processo de execução penal em que o Ministério Público pugnou pela regressão do regime prisional em razão do apenado ter sido autuado em flagrante por novo crime.

*Trata-se de processo de execução penal em que vieram os autos conclusos em razão da informação de que o apenado fora autuado em flagrante por novo crime. Adiante, porém, certificou-se que ele não ainda não foi denunciado.

É o relatório.

Induvidoso que não se exige o julgamento do novo crime para reconhecer-se a falta grave prevista no art. 52, primeira parte, da Lei 7.210/84.

Entretanto, o não oferecimento da denúncia após quase um ano do suposto fato demonstra que a polícia judiciária e o Ministério Público não conseguiram suficientes indícios quanto à conduta criminosa.

A consequência é que não se pode punir o apenado por situação indefinida.

Isto posto, indefiro a regressão de regime.

P. R. I. Aguarde-se algum novo incidente na execução penal 

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_208',
        nome: 'Regressão novo crime cancelamento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

*O regime de cumprimento de pena privativa de liberdade foi regredido de **semiaberto para fechado em razão do apenado ter sido denunciado por novo crime doloso, sendo, porém, posteriormente absolvido dessa nova acusação.

*O regime de cumprimento de pena privativa de liberdade foi regredido de **semiaberto para fechado em razão do apenado ter sido preso por novo crime doloso, sendo, porém, posteriormente arquivado o procedimento policial em razão do Ministério Público não ter encontrado fundamento para denúncia.

*O regime de cumprimento de pena privativa de liberdade foi regredido de **semiaberto para fechado em razão do apenado ter sido preso por novo crime doloso, não sendo até o momento concluído o procedimento policial, apesar de transcorridos mais de dois meses do suposto fato.

Relatados.

A Lei de Execução Penal indica como falta grave a prática de crime doloso, razão pela qual foi regredido o regime prisional imposto.

Ocorre que após a regressão *cautelar* do regime foi o apenado absolvido da nova imputação.

Ocorre que o apenado não foi denunciado pelo suposto novo crime.

Em assim sendo, cancelo a regressão aplicada, retornando o regime de cumprimento de pena para o semiaberto.

P.R.I., retificando-se a Guia de Execução Penal. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos, o qual deverá providenciar o encaminhamento do apenado para o regime prisional adequado.
   
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_258',
        nome: 'Regressão provisória semiaberto não localizado',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'regressao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Progredido o regime para semiaberto desde *** o apenado não cumpre a pena.

Buscada sua intimação, certificou-se que não foi localizado.

Relatados.

A situação relatada nestes autos demonstra a ocorrência de falta grave (fuga), a ser devidamente apurada em audiência de justificação, com a aplicação do due process of law, reclamando, inclusive, exercício do direito de defesa.

Tal é, aliás, a posição da reiterada jurisprudência do Supremo Tribunal Federal: "Conforme interpretação dos arts. 50, II, 60 e 118, §§ 1º e 2º, da Lei 7.210/84, o Juízo das Execuções pode decretar, provisoriamente, a regressão de regime prisional do condenado foragido do presídio, sem a necessidade da prévia ouvida do sentenciado, pois essa providência cautelar não obsta a que o réu se defenda quando vier a ser preso" (RT 763/485).

A jurisprudência desta Corte é no sentido de que a fuga do condenado justifica a regressão cautelar do regime prisional, sendo que a oitiva prévia disposta no art. 118, § 2º, da LEP somente é indispensável na hipótese de regressão definitiva (RHC 135554 AgR).

Isto posto, decreto a regressão provisória, para fechado, do regime prisional imposto ao cumprimento da pena.

Atualize-se o atestado de pena a cumprir, com o lançamento da fuga, caso ainda não inserida no quadro de eventos.

P.I., expeça-se mandado de prisão. Se preso o apenado, designe-se data para audiência de justificação.

Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_REGRESSAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_REGRESSAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
