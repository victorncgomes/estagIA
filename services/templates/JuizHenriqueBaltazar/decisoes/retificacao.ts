/**
 * Modelos de Decisão - Retificação de GEP
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: retificacao
 * Status: Concluído (26/26)
 * Total de modelos: 26
 */

import { Modelo } from '../../types';

export const DECISOES_RETIFICACAO: Modelo[] = [
    {
        id: 'seeu_002',
        nome: 'Retifica GEP cumprimento acórdão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Defiro o pedido. Cumpra-se o acórdão de evento ***, atualizando a pena em execução e a guia de recolhimento, bem como demais informações pertinentes.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_010',
        nome: 'Retificação por acórdão redutor',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos, etc.

Executando-se pena privativa de liberdade em face de $passivoNomeVEP, atualmente cumprida no regime $regimePenaVEP, com penal total de $penaTotalVEP, vieram-me conclusos os autos em virtude da sobrevinda de acórdão redutor transitado em julgado referente ao processo nº *** em que foi condenado o apenado, reduzindo a reprimenda imposta para o patamar de *** (evento ***).

Relatados.

Com a notícia da sobrevinda de acórdão redutor transitado em julgado, deve ser retificada a guia de recolhimento, conforme dispõe o §2º do art. 106 da Lei nº 7.210/84.

No caso dos autos, a condenação referente ao processo nº ***, foi reduzida de *** para o patamar de ***.

Isso posto, determino a retificação da GEP para fazer consta a pena de ***, referente à condenação vinculada ao processo nº ***.

P.R.I. Atualize-se o atestado de penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_018',
        nome: 'Retifica data-base progressão (indefere retroatividade)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição quanto a data-base para alcance da progressão, requerendo que fosse aquela em que alcançados os requisitos para a progressão anterior.

Relatados.

A data-base para verificação da implementação dos requisitos objetivo e subjetivo, previstos no art. 112 da Lei n. 7.210/1984, deverá ser definida de forma casuística, fixando-se como termo inicial o momento em que preenchido o último requisito pendente, seja ele o objetivo ou o subjetivo (AgRg no HC 655.303/SP, Rel. Ministro SEBASTIÃO REIS JÚNIOR, SEXTA TURMA, julgado em 01/06/2021, DJe 07/06/2021, e AgRg no HC 662.160/SP, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 11/05/2021, DJe 14/05/2021).

No caso, o apenado tivera a progressão de regime indeferida anteriormente por ausência do requisito subjetivo (evento ***), que só foi reconhecido adiante, na data já lançada na GEP como base para futura progressão.

Isto posto, indefiro o requerimento do ministério Público, mantendo a GEP na forma em que se encontra.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_096',
        nome: 'Retificação pena em dobro (Curado)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que a Defesa pugnou pela retificação do atestado de pena para fazer constar o cômputo em dobro do tempo que o apenado esteve recluso, afirmando que há um estado de coisas inconstitucional no sistema carcerário brasileiro.

Invoca, para tanto, a decisão proferida pela Corte Interamericana de Direitos Humanos sobre o Complexo do Curado, em Pernambuco, que determinou que o Estado brasileiro computasse em dobro o tempo de privação de liberdade cumprido pelos presos desse complexo.

Relatados.

Sem razão a pretensão defensiva.

Em que pesem as graves deficiências estruturais do sistema carcerário local, a decisão da Corte Interamericana de Direitos Humanos foi proferida para unidade prisional específica (Complexo do Curado), não se estendendo automaticamente a todo e qualquer estabelecimento prisional do país, ainda que em condições semelhantes.

O cômputo em dobro do tempo de pena por condições indignas, como medida compensatória, depende de provocação específica aos órgãos internacionais competentes para o exame de cada unidade prisional, ou de lei interna que preveja tal benefício, a qual ainda não existe no ordenamento jurídico pátrio.

Pelo exposto, indefiro o pedido de retificação da GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_125',
        nome: 'Retificação reincidência hediondo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Requereu o apenado retificação da GEP, fazendo constar a fração de 40% para o crime de homicídio referente ao processo criminal nº ***, alegando que nesse primeiro crime não era reincidente (ev. ***).

O Ministério Público opinou contrariamente (ev. ***).

Relatados.

Com razão o Ministério Público.

Inicialmente verifico que a exigência de 3/5 ou 60% (LEP, art. 112, VII) só cabe no caso de reincidência específica em crime hediondo, o que é o caso dos autos.

Compulsando os autos, notadamente a guia de execução penal, observo que apenado cometeu crime de homicídio qualificado em *** (processo criminal nº ***) e, após condenado definitivamente, praticou o de tráfico de drogas (processo criminal nº ***), adquiriu a condição de reincidente específico na prática de crime hediondo ou equiparado (AgRg no HC n. 660.579/SP, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 5/10/2021, DJe de 11/10/2021).

Isso posto, indefiro o pedido da defesa.

P.R.I. Ciência ao MP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_133',
        nome: 'Retificação tráfico privilegiado',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, posto ter utilizado fração errada de cumprimento da pena para benefício prisional, já que o delito de tráfico de drogas privilegiado (lei 11.343, art. 33, § 4º) não seria hediondo.

Relatados.

Com o advento da Lei nº 13.964/19 (Pacote Anticrime), o legislador pôs fim a qualquer polêmica sobre a natureza do chamado tráfico privilegiado, ao incluir o § 5º no art. 112 da LEP, estabelecendo expressamente que "não se considera hediondo ou equiparado, para os fins deste artigo, o crime de tráfico de drogas previsto no § 4º do art. 33 da Lei nº 11.343, de 23 de agosto de 2006".

Isto posto, mando retificar a guia de execução penal, utilizando nos cálculos para benefícios prisionais as frações de pena adequadas aos crimes comuns (não hediondos).

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_138',
        nome: 'Retificação data-base negando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões deveria ser a da última prisão, calculando-se o requisito objetivo sobre o saldo da pena.

Relatados.

A jurisprudência do Superior Tribunal de Justiça é no sentido de que a unificação de penas acarreta a fixação de nova data-base para a concessão de benefícios, mas esta deve ser a data do último trânsito em julgado para a acusação ou para a defesa, o que for posterior, e não necessariamente a data da prisão.

No caso, verifico que a data lançada na GEP atende aos critérios legais, não havendo erro a ser sanado.

Isto posto, indefiro o pedido ministerial e mantenho a GEP como está.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_160',
        nome: 'Retificação GEP data-base prisão definitiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de penas única em que o SEEU calculou o benefício de progressão de regime tendo como data-base a primeira prisão do apenado, que, porém, obteve liberdade provisória antes da condenação definitiva, não tendo permanecido custodiado ininterruptamente.

Relatados.

Tratando-se de decisão unânime da eg. Câmara Criminal, cabe segui-la no sentido de que a data da primeira prisão não pode ser considerada marco inicial quando se tratar de prisão interrompida e condenação única.

Isto posto, mando retificar a quadro de eventos e correspondente guia de execução penal, fazendo constar como data-base para a próxima progressão de regime a da prisão definitiva e, por consequência, considerar o tempo de prisão provisória tão somente para fim de detração penal.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_178',
        nome: 'Retificação data-base última prisão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que a defesa pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões, no caso de unificação de penas, deveria ser a da última prisão e não a do último trânsito em julgado.

Relatados.

A Terceira Seção do Superior Tribunal de Justiça firmou entendimento de que "A alteração da data-base para concessão de novos benefícios executórios, em razão da unificação das penas, não encontra respaldo legal" (REsp 1557461/SC).

Isto posto, mando retificar a guia de execução penal, fazendo constar como data-base para a próxima progressão de regime a da última falta grave ou último crime pelo qual o apenado tenha sido condenado, o que for posterior.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_179',
        nome: 'Retificação GEP falta grave',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões deveria ser a da última prisão ou falta grave.

Relatados.

Pelo que se extrai da LEP, art. 112, a prática de falta grave interrompe o prazo para a progressão de regime, devendo ser reiniciada a contagem a partir da data da infração disciplinar.

Isto posto, mando retificar a guia de execução penal.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_188',
        nome: 'Retificação percentuais hediondo e comum (Não utilizar)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Requereu a defesa retificação da GEP, fazendo constar como requisito para progressão de regime os percentuais previstos na nova redação do art. 112 da LEP.

Relatados.

Conforme decidiu o Superior Tribunal de Justiça, a fixação dos percentuais para progressão de regime devem considerar, em sua integralidade, a nova ou a anterior redação do art. 112 da LEP, conforme seja mais benéfico ao apenado.

No caso, verifico que a exigência de 60% só cabe no caso de reincidência específica em crime hediondo, o que não é o caso. Assim, em relação ao crime hediondo, é de se aplicar o percentual de 40% (LEP, art. 112, V).

Isto posto, mando retificar a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_198',
        nome: 'Retificação GEP data último trânsito (Não usar)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, por entender que a data-base para as progressões deveria ser a do trânsito em julgado da última condenação.

Relatados.

A Terceira Seção do Superior Tribunal de Justiça firmou entendimento de que a alteração da data-base para concessão de novos benefícios executórios, em razão da unificação das penas, não encontra respaldo legal. O STF, porém, reconhece a data do trânsito em julgado da última condenação como data-base.

Isto posto, mando corrigir a guia de execução penal, lançando a data do trânsito em julgado da última condenação do apenado como data-base para futura progressão de regime.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_221',
        nome: 'Retificação percentuais lei 13964 negando (Não utilizar)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Requereu a defesa retificação da GEP, fazendo constar como requisito para progressão de regime os percentuais previstos na nova redação do art. 112.

Relatados.

Sem razão o apenado. A Lei dos Crimes Hediondos não faz distinção entre a reincidência comum ou específica ao determinar a fração de 3/5 como lapso temporal para a progressão de regime.

Isto posto, indefiro o pedido do evento ***.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_222',
        nome: 'Retificação data-base crime anterior',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, por entender que a data-base deveria ser a do trânsito em julgado da última condenação.

Relatados.

O caso em julgamento mostra excepcionalidade pois o último processo julgado é cronologicamente mais antigo, decorrendo a demora no seu julgamento não de ato do apenado, mas da morosidade judicial.

Isto posto, mando retificar a guia de execução penal, mantendo como data-base para a próxima progressão de regime aquela que já se encontra lançada.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_223',
        nome: 'Retificação regime inicial (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado requereu a modificação do regime inicial de cumprimento da pena para adequar a sua situação ao art. 33, § 2º, "b", do Código Penal.

Relatados.

Verifico dos autos que a modificação do regime inicial de cumprimento da pena, sem observar as circunstâncias judiciais para sua concessão, constitui afronta à coisa julgada.

Isto posto, indefiro o pedido da defesa.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_225',
        nome: 'Retificação lei 13964 primário comum e VGA',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de PEC em que verificadas condenações de apenado primário, por crimes não hediondos, sendo um deles cometido com violência à pessoa ou grave ameaça.

Relatados.

Dispõe o art. 112, inc. I, da LEP, que a pena será executada em forma progressiva quando o apenado, primário, tiver cumprido ao menos 16% da pena por crime cometido sem violência e 25% da pena por crime praticado com violência ou grave ameaça.

Isto posto, mando corrigir a guia de execução penal, fixando como requisitos os percentuais de 25% (crime com violência) e 16% (demais delitos).

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_226',
        nome: 'Retificação lei 13964 primário crime comum',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de PEC em que verificada condenação por crime não hediondo, cometido sem violência à pessoa ou grave ameaça.

Relatados.

Dispõe o art. 112, inc. I, da LEP (Lei 13.964/2019), que a pena será executada em forma progressiva quando o preso tiver cumprido ao menos 16% da pena, se primário e o crime sem violência.

Isto posto, mando corrigir a guia de execução penal, fixando como requisito objetivo o percentual de 16%.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_228',
        nome: 'Retificação data-base progressão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em regime semiaberto, no que o Ministério Público pugnou pela retificação da guia quanto a data-base para alcance da progressão ao regime aberto.

Relatados.

Conforme entendimento do Supremo Tribunal Federal, a data-base para a progressão do regime semiaberto para o aberto deve ser aquela em que o apenado atingiu o requisito objetivo para a progressão anterior.

Isto posto, defiro o requerimento do Ministério Público, mandando retificar a guia de execução penal.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_241',
        nome: 'Retificação GEP regime inicial (Semiaberto)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de condenação a reclusão em regime fechado, em que o apenado requereu alteração do regime inicial por preencher os requisitos do art. 33 do CP.

Relatados.

Indiscutível a competência do Juízo das Execuções para a análise e identificação do regime inicial observando os critérios do art. 33, §§ 2º e 3º do Código Penal. No caso, observo atender o apenado aos requisitos para o regime semiaberto.

Isto posto, estabeleço o regime inicial semiaberto.

P.R.I. Comunique-se à unidade prisional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_251',
        nome: 'Retificação progressão especial mulher (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que a apenada pugnou pela retificação da guia, alegando atender aos requisitos do § 3º do art. 112 da LEP.

Relatados.

A Lei de Execução Penal cria lapso diferenciado (1/8) para mulheres que atendam aos requisitos. No caso, a apenada foi condenada por associação para o tráfico, o que afasta o benefício por ser equiparado à integração de organização criminosa.

Isto posto, indefiro o pedido de retificação da GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_252',
        nome: 'Retificação progressão (Data-base subjetiva)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O Ministério Público pugnou pela retificação da guia, alegando erro na data-base para alcance da progressão, requerendo que fosse aquela em que alcançado o requisito objetivo.

Relatados.

A data-base deve ser definida de forma casuística, fixando-se como termo inicial o momento em que preenchido o último requisito pendente, seja ele o objetivo ou o subjetivo. No caso, o requisito subjetivo só foi reconhecido na data já lançada na GEP.

Isto posto, indefiro o requerimento do Ministério Público, mantendo a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_253',
        nome: 'Retificação hediondo+comum (Modelo sem uso)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Requereu o apenado retificação da GEP, fazendo constar frações diferenciadas para crimes hediondos e comuns.

Relatados.

Com razão o apenado. A exigência de 60% só cabe no caso de reincidência específica em crime hediondo. A condição de reincidente estende-se sobre a totalidade das penas somadas.

Isto posto, mando corrigir a guia de execução penal, fixando como requisito objetivo o percentual de 40% (ou 50% se morte) sobre as penas unificadas.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_262',
        nome: 'Retificação hediondo + comum (Percentuais diversos)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado pugnou pela retificação da guia com fixação de patamares diversos para progressão de regime, conforme o tipo de delito praticado.

Relatados.

Dada a mudança da jurisprudência do STJ, cabe deferimento ao pedido para aplicar lapsos diferenciados em caso de crimes de naturezas distintas.

Isto posto, mando retificar a GEP, fixando patamares específicos para crimes hediondos e comuns.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_273',
        nome: 'Retificação tráfico hediondo (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado pugnou pela retificação da guia, alegando que o crime de tráfico de drogas não seria mais hediondo.

Relatados.

Sem razão o requerente, pois o delito capitulado no art. 33, caput, da Lei nº 11.343/2006 é, por previsão legal e constitucional, equiparado a hediondo.

Isto posto, indefiro o pedido de retificação da guia de execução penal.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_274',
        nome: 'Retificação cumprimento agravo (Retroatividade)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de aplicar a decisão de agravo em execução que determinou a aplicação da lei mais favorável ao apenado.

Relatados.

Observo que a aplicação da redação nova da LEP será mais benéfica ao apenado, posto tratar-se de reincidente genérico.

Isto posto, mando aplicar os percentuais de 16% para delitos comuns e 40% para crimes hediondos ou equiparados.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_290',
        nome: 'Retificação GEP data-base crime único',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'retificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O Ministério Público pugnou pela retificação da data-base para benefícios executórios.

Relatados.

Para cálculos de progressão de regime, a desconsideração do período de cumprimento de pena desde a prisão do apenado configura excesso de execução.

Isto posto, mando retificar a guia de execução penal, fazendo constar como data-base o dia da segregação provisória.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_RETIFICACAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_RETIFICACAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
