/**
 * estagIA - Modelos do SEEU Extraídos
 * Modelos de decisão extraídos do Sistema SEEU
 * @version 0.1.0
 */

export interface ModeloSEEU {
    id: string;
    nome: string;
    conteudo: string;
    tipoDocumento: string;
    fonte: 'SEEU';
    dataExtracao: string;
}

// ============================================
// MODELOS EXTRAÍDOS - PÁGINA 1
// ============================================

export const MODELOS_SEEU: ModeloSEEU[] = [
    {
        id: 'seeu_001',
        nome: 'Amanda Pauxis - UNIFICAÇÃO reclusao + reclusao',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-19',
        conteudo: `$cabecalho
Autos nº. $autos.getNumeroUnicoFormatado()
$dadosProcesso

Vistos etc.
Trata-se de execução de pena de xx ( ) anos, xx ( ) meses e xx ( ) dias de reclusão no regime xx (ação penal nº ) imposta a xx, que agora foi novamente condenado, desta feita a xx ( ) anos, xx ( ) meses e xx ( ) dias de reclusão no regime xx, ação penal nº (evento ).
*Trata-se de execução de penal, com penas já unificadas em xx ( ) anos, xx ( ) meses e xx ( ) dias de reclusão no regime xx (ação penal nº ) imposta a xx, que agora foi novamente condenado, desta feita a xx ( ) anos, xx ( ) meses e xx ( ) dias de reclusão no regime xx, ação penal nº (evento ).
Anoto que o penitente encontra-se custodiado no xxx, conforme informações do SIAPEN nesta data.
Relatados.
Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.
A data base para fins de progressão de regime deve ser a da última prisão ou a da última falta grave cometida, o que for posterior.
Isto posto, unifico em xx ( ) anos, xx ( ) meses e xx ( ) dias de reclusão a pena privativa de liberdade em execução nestes autos, a ser cumprida em regime fechado*semiaberto, face ao saldo de pena e ao determinado *na última sentença condenatórias *nas sentenças condenatórias*.
P.R.I. Comunique-se ao estabelecimento prisional e atualize-se o atestado de pena a cumprir, bem como verifique-se a situação no BNMP.
**Oficie-se ao estabelecimento prisional, com as devidas pesquisas no SAJ, SEEU e BNMP, para transferência do apenado à unidade adequada ao regime semiaberto.
$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos
Juiz de direito`,
    },
    {
        id: 'seeu_002',
        nome: 'Amanda Pauxis - retifica a GEP deferimento acordao',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-19',
        conteudo: `$cabecalho
Autos nº. $autos.getNumeroUnicoFormatado()
$dadosProcesso

Defiro o pedido. Cumpra-se o acórdão de evento xxx, atualizando a pena em execução e a guia de recolhimento, bem como demais informações pertinentes.
P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos
Juiz de direito`,
    },
    {
        id: 'seeu_003',
        nome: 'Amanda Pauxis - Progressão INDEFERE ACC regular ma conduta',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_004',
        nome: 'Agravo modificando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-19',
        conteudo: `$cabecalho
Autos nº. $autos.getNumeroUnicoFormatado()
$dadosProcesso

Vistos etc.
Agrava o Ministério Público*apenado da decisão do evento * que *...
Após análise das razões recursais e considerando...
Reformo a decisão agravada e **.
P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos
Juiz de direito`,
    },
    {
        id: 'seeu_005',
        nome: 'regressão definitiva - violações',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_006',
        nome: 'monitoramento reiteração',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto pena privativa de liberdade, ao apenado foi concedida prisão domiciliar com monitoramento eletrônico, tendo a Seap/CEME informado que **violara a área de inclusão por ** **deixara descarregar completamente a bateria do equipamento por *** vezes.

Relatados.

Determina a Lei de Execução Penal, no art. 146-D, inciso II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar os deveres a que estiver sujeito durante a sua vigência ou cometer falta grave".

Os deveres a que se sujeita o apenado beneficiado com a prisão domiciliar com monitoramento eletrônico estão previstas no art. 4º da Portaria Conjunta nº 03/2023, das 1a e 2a varas regionais de execução penal, tendo o apenado descumprido *** aquele previsto na sua ***alínea a, segundo a qual "deverá permanecer recolhido em sua residência, ou local indicado quando da instalação do equipamento, todos os dias no horário compreendido entre 20h e 05h, salvo autorização anterior do juízo". *** e *** vezes o da alínea g, segundo a qual lhe caberia "impedir a descarga completa da bateria do equipamento de monitoração eletrônica".

Tal situação pode importar na revogação do monitoramento, ou regressão de regime prisional, especialmente quando se trata, como agora, de reiteração de condutas.

Neste sentido, decidiu o Superior Tribunal de Justiça:

(...) 5- Constitui falta grave, passível de regressão ao regime mais gravoso, a inobservância das condições estabelecidas para a prisão domiciliar, no caso dos autos, monitoramento eletrônico, ex vi do disposto nos arts. 50, inciso VI c. c art. 39, inciso V, ambos da Lei de Execução Penal Agravo regimental desprovido. (AgRg no REsp 1738805/TO)

Exige-se, para a decisão definitiva, que se ouçam o Ministério Público e a defesa, mas, o que se afina plenamente com o poder geral de cautela, as providências podem ser tomadas provisoriamente, para garantia do Juízo.

Isto posto, regrido cautelarmente o regime prisional para fechado.

Comunique-se à CEME e expeça-se mandado de prisão; quando cumprido, coloque-se o feito em pauta para audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_007',
        nome: 'progressão semiaberto comum',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_008',
        nome: 'Falta média retorno cela sem individualizar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Vieram-me os autos para análise de eventual falta grave noticiada pela unidade prisional no PAD nº **, onde se narrou que em ** o interno, juntamente com outros, se recusou a retornar para sua cela, alegando estar jurado de morte e que não existia mais condições de convivência ali, gerando-se extremo tumulto.

Relatados.

Compulsando os autos, nota-se que os fatos narrados caracterizam claramente ato coletivo de subversão à ordem e disciplina, mas não se indicou especificamente conduta individual, impossibilitando o reconhecimento da falta grave.

Entretanto, o apenado confessou ter saído da cela sem permissão e se negado a retornar, conduta confirmada pelos policiais penais ouvidos na sindicância.

No caso, o apenado concorreu para que fosse retardado a execução da ordem legal de recolhimento em alojamento específico da unidade prisional, o que configura a falta média prevista no art. 74, inciso XVI, do Regulamento Disciplinar Penitenciário.

Em assim sendo, homologo a conduta como falta média, com fulcro no art. 74, inciso XVI, do Regulamento Disciplinar Penitenciário.

P.R.I. Comunique-se ao estabelecimento prisional.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_009',
        nome: 'VICTOR - MULTA DEFERE PARCELAMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de pedido de parcelamento da pena de multa imposta ao apenado, nos autos dos processos Nº *****, em que foi condenado ao valor de R$ ******* , conforme cálculos da secretaria (evento *****).

Instado a se manifestar, o apenado propôs pedido de parcelamento em parcelas de ***** (evento ***).

O Ministério Público anuiu com o pedido (evento ****).

Relatados.

Conforme deliberações anteriores deste juízo, o parcelamento da pena de multa possui autorização legislativa, cabendo ao apenado apenas apresentar proposta razoável em equilíbrio com suas condições financeiras.

O valor da parcela proposto pelo apenado parece-me viável e dentro dos parâmetros previstos em nossa doutrina e jurisprudência, razão pela qual há de ser deferido o parcelamento.

Isso posto, defiro o pedido de parcelamento da pena de multa formulado pelo apenado, devendo realizar o depósito de ***** parcelas iguais de ***, a serem depositadas em favor do Fundo Penitenciário do Rio Grande do Norte – SEJUC/RN (Instituição Financeira: Banco do Brasil; Agência: 3795-8; Conta Corrente: 11.934-2).

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_010',
        nome: 'VICTOR - ACÓRDÃO REDUTOR',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos, etc.

Executando-se pena privativa de liberdade em face de $passivoNomeVEP, atualmente cumprida no regime $regimePenaVEP, com penal total de $penaTotalVEP, vieram-me conclusos os autos em virtude da sobrevinda de acórdão redutor transitado em julgado referente ao processo nº xxxxxxx em que foi condenado o apenado, reduzindo a reprimenda imposta para o patamar de xxxxxxxx (evento xx)

Relatados.

Com a notícia da sobrevinda de acórdão redutor transitado em julgado, deve ser retificada a guia de recolhimento, conforme dispõe o §2º do art. 106 da Lei nº 7.210/84.

No caso dos autos, a condenação referente ao processo nº xxxxxxx, foi reduzida de xxxxxxxxxxx para o patamar de xxxxxxxx.

Isso posto, determino a retificação da GEP para fazer consta a pena de xxxxxxxx, referente à condenação vinculada ao processo nº xxxxxxx.

P.R.I. Atualize-se o atestado de penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_011',
        nome: 'Monitoramento reiteração definitiva',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto pena privativa de liberdade, ao apenado foi concedida prisão domiciliar com monitoramento eletrônico, tendo a Seap/CEME informado que **violara a área de inclusão por ** **deixara descarregar completamente a bateria do equipamento por *** vezes.

Oportunizado-lhe justificar-se, o apenado alegou que **.

Instado a se manifestar, o Ministério Público pugnou pela homologação da falta grave, enquanto a Defesa pediu **.

Relatados.

Determina a Lei de Execução Penal, no art. 146-D, inciso II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar os deveres a que estiver sujeito durante a sua vigência ou cometer falta grave".

É o caso, sendo inaceitável a justificativa do apenado, pois **.

Isto posto, regrido para fechado o regime de execução da pena privativa de liberdade, bem como considero perdido um quinto (dada a confissão) do tempo já remido.

P.R. I. Atualize-se o quadro de eventos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_012',
        nome: 'FERNANDO - UNIFICAÇÃO DE PP COM PRD',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP de reclusão no regime $regimePenaVEP (ação penal nº XXX) imposta a $passivoNomeVEP, que agora foi novamente condenado, desta feita a XXXX de reclusão no regime aberto, pena que foi substituída por penas restritivas de direito.

Relatados.

Dispõe o art. 44, § 5º, do Código Penal que "sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior".

No caso, o apenado cumpre atualmente pena de reclusão em regime fechado/semiaberto, não tendo como cumprir, de forma paralela, penas restritivas de direitos, devendo elas permanecerem suspensas até a progressão para o regime aberto.

Trata-se, na espécie, de concurso material de delitos, impondo-se a soma das penas.

Isto posto, mantenho o apenado no cumprimento da pena de $penaTotalVEP de reclusão, determinando o lançamento da nova pena e a suspensão de seu cumprimento até a progressão para o regime aberto.

P.R.I. Comunique-se ao estabelecimento prisional.

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito

$rodape`,
    },
    {
        id: 'seeu_013',
        nome: 'FERNANDO - UNIFICAÇÃO - RECLUSÃO + RECLUSÃO SIMPLES',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP de reclusão no regime $regimePenaVEP (ação penal nº xxx) imposta a $partesPoloPassivo, que agora foi novamente condenado, desta feita a XXX de reclusão no regime fechado, ação penal nº xxx (evento 1.xx).

Anoto que o penitente encontra-se custodiado na PEA – Penitenciária Estadual de Alcaçuz /PES – Penitenciária Estadual do Seridó / PERCM - Penitenciária Estadual Rogério Coutinho Madruga/ Cadeia Pública de Nova Cruz/CPJC – Complexo Prisional João Chaves, conforme informações do SIAPEN nesta data.

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Dispõe o art. 111, da Lei de Execução Penal:

"Art. 111. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.

Parágrafo Único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime".

Isto posto, unifico em XXX de reclusão a pena privativa de liberdade em execução nestes autos, a ser cumprida inicialmente em regime fechado, face ao saldo de pena e ao regime já em cumprimento.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador.

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito

$rodape`,
    },
    {
        id: 'seeu_014',
        nome: 'INDULTO 2024 - INDEFERIMENTOS',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $partesPoloPassivo.

A Defesa peticionou pugnando pelo indulto das penas impostas nas ações penais nºs XXXXXXXXX, fundamentando o pedido no Decreto Presidencial nº 12.338/2024 (ev. XXXXXX)

Instado a se manifestar, o Ministério Público opinou pelo deferimento considerando que o apenado não cumpriu o requisito objetivo para concessão do benefício (ev. XXXXX).

Relatados.

De logo verifico que quando da publicação do Decreto 12.338/2024 o apenado cumpria pena de $penaTotalVEP.

Dispõe o referido diploma legal, no seu art. 9º, incisos I e II, que "Concede-se o indulto coletivo às pessoas, nacionais e migrantes, condenadas: I - a pena privativa de liberdade não superior a oito anos..."

[Opções de fundamentação para indeferimento: NÃO CUMPRIU REQUISITO OBJETIVO / FALTA GRAVE / NÃO CUMPRIU 2/3 DO CRIME IMPEDITIVO / CRIME IMPEDITIVO]

Diante do exposto, em consonância com o parecer ministerial, indefiro o pedido de indulto das penas.

P.R.I.

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito

$rodape`,
    },
    {
        id: 'seeu_015',
        nome: 'INDULTO PENA DE MULTA 2024 - INDEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $passivoNomeVEP.

A Defesa pediu o indulto da pena de multa com fulcro no art. 12, I, do Decreto Presidencial nº 12.338/2024 (ev. XXX)

Instado a se manifestar, o Ministério Público opinou pelo deferimento/indeferimento (ev. XXX).

Relatados.

O pedido deve ser indeferido uma vez que o apenado desatende às regras do decreto concessivo.

[Opções: FALTA GRAVE / NÃO CUMPRIU 2/3 DO CRIME IMPEDITIVO / CRIME IMPEDITIVO]

Diante do exposto, indefiro o indulto da pena de multa a que foi condenado o apenado.

P.R.I.

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito

$rodape`,
    },
    {
        id: 'seeu_016',
        nome: 'INDULTO QQ ANO - FORAGIDO - INDEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP de reclusão imposta a $passivoNomeVEP

A Defesa/o Ministério Público pediu o indulto das penas com fundamento no Decreto Presidencial nº XXXXXXX (ev. XXXX)

Anoto aqui que o apenado está foragido desde o dia XXXXXX, estando atualmente em local incerto e não sabido.

Relatados.

O pedido não deve ser deferido uma vez que o apenado não estava cumprindo pena em XXXXXXXXX e, portanto, não podia ter nenhum benefício deferido já que houve a interrupção do cumprimento da pena.

É o que tem entendido o STF sobre o assunto: "estando o sentenciado foragido, sua fuga enseja a interrupção automática da execução da pena até a sua recaptura" (HC 241532, Min. André Mendonça).

Diante do exposto, indefiro o indulto das penas privativas de liberdade.

P.R.I.

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito

$rodape`,
    },
    {
        id: 'seeu_017',
        nome: 'FERNANDO - DECISÃO FORMATADO - EM BRANCO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$dadosProcesso

Vistos etc.

XXXXXXXXXX INSIRA O TEXTO AQUI XXXXXXXXXX

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_018',
        nome: 'Data base indef anterior',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que verifiquei estar constando como data-base para progressão para o regime aberto o dia em que teria sido atingido o requisito para a progressão ao semiaberto.

Relatados.

A Terceira Seção do Superior Tribunal de Justiça publicou julgado de Afetação em Recurso Especial Representativo de Controvérsia, Tema Repetitivo nº 1165, fixando a seguinte tese:

"A decisão que defere a progressão de regime não tem natureza constitutiva, senão declaratória. O termo inicial para a progressão de regime deverá ser a data em que preenchidos os requisitos objetivo e subjetivo..."

Nesse sentido, em casos como o presente, em que anteriormente foi indeferido o benefício por ausente o requisito subjetivo, a data-base para a próxima progressão de regime deve ser aquela em este foi considerado preenchido.

Isto posto, mando lançar o dia *** (evento **) como data-base para a próxima progressão de regime.

Cumpra-se, cientificando-se as partes.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_019',
        nome: 'Detração sem tornozeleira',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em regime semiaberto em que o apenado não teve instalada a tornozeleira por falta do equipamento.

A Defensoria Pública pediu que fosse considerado como tempo de pena cumprida todo o período, alegando que o apenado não pode ser penalizado pela indisponibilidade do dispositivo de monitoramento.

Relatados.

O pedido não pode ser deferido.

Conforme a Portaria Conjunta nº 05/2023 das 1ª e 2ª Varas de Execução Penal, não será contado como pena cumprida o tempo em que o apenado permanece em liberdade plena, sem qualquer espécie de restrição imposta ao seu direito de ir e vir.

Não há como considerar como pena cumprida período em que o apenado goza de liberdade plena, como se não tivesse pena a cumprir.

A detração está prevista no art. 42 do Código Penal e não prevê o caso de liberdade plena sem fiscalização.

Diante do exposto, indefiro o pedido.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_020',
        nome: 'Exame criminológico novo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_021',
        nome: 'Amanda Pauxis - Determina exame criminologico',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Cumprindo-se pena em regime fechado, certificou-se cumprimento do requisito objetivo para progressão, enquanto juntou-se ACC.

Tratando-se de apenado com aparente periculosidade, evidenciada pelo seu histórico criminal, onde constam ** condenações e ** ações penais ainda em andamento, inclusive por crime hediondo ou equiparado, além de registrar fugas durante a execução da pena, entendo necessário, para decidir acerca da progressão de regime, a realização de exame criminológico.

Neste sentido, decidiu a Suprema Corte: "O enunciado 26 da Súmula Vinculante não proibiu a determinação de prévia realização do exame criminológico. Exige-se, apenas, que a decisão seja fundamentada." (Rcl 63371 AgR)

Em assim sendo mando requisitar laudos do serviço social e de psicologia a serem feitos por profissionais cadastrados pelo NUPEJ, aos quais arbitro honorários no valor de R$ 413,24 (por cada laudo).

Por oportuno, enquanto se providenciam os laudos, lance-se no SEEU o indeferimento provisório da progressão de regime, pelo prazo de 60 dias.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_022',
        nome: 'Progressao - indeferimento provisorio noticia PAD',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_023',
        nome: 'Transferência sem compet indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução da pena privativa de liberdade em regime semiaberto, em que o apenado requereu transferência para a Comarca de Parnamirim/RN, local onde reside (evento **).

Relatados.

De logo, anoto que não existe unidade prisional para cumprimento de pena em regime semiaberto em Parnamirim/RN, o que impossibilita o atendimento, registrando que o apenado pode morar em outra Comarca, optando, se assim o desejar, por prisão domiciliar com monitoramento eletrônico.

Isto posto, indefiro o pedido de transferência.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_024',
        nome: 'Transferência PM',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

Vistos etc.

Trata-se de execução de pena em regime fechado imposta a policial militar, já transitada em julgado, tendo o Ministério Público requerido sua transferência para a Cadeia Pública de Ceará Mirim, esclarecendo que a unidade prisional dispõe de área destinada à prisão especial na forma prevista no art. 295 do CPP.

Relatados.

De logo anoto que o direito do militar estadual à prisão especial em quartel, previsto no art. 295, inciso V do CPP, somente subsiste até condenação definitiva, após o que deve ser ele transferido para estabelecimento prisional comum.

Conforme determina o art. 84, § 2°, da Lei 7.210/84, "O preso que, ao tempo do fato, era funcionário da Administração da Justiça Criminal ficará em dependência separada".

Isto posto, mando requisitar à CoAPe a transferência do apenado para ala específica da Cadeia Pública de Ceará Mirim.

Se e quando realizada a transferência, voltem-me conclusos.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_025',
        nome: 'transferência defere semiaberto',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Requereu o apenado sua transferência para a Comarca de **, em razão de seus familiares ali residirem.

Indagado, o juízo de destino concordou com o pedido.

Interveio o Ministério Público, opinando pelo deferimento.

Relatados.

A pretensão encontra amparo no art. 66, V, g, da Lei de Execução Penal (Lei nº 7.210/84) e no art. 38 da Lei Complementar nº 165/99, bem como na jurisprudência do Supremo Tribunal Federal.

No caso, verifica-se que o juízo de execução penal de destino concordou com a transferência do apenado no regime semiaberto.

Isto posto, defiro o pedido para a transferência do apenado para a Comarca de **.

P.R.I. Comunique-se à CEME para que exclua o apenado do monitoramento eletrônico, devendo ele apresentar no fórum da Comarca de ** em cinco dias após a retirada do equipamento.

Remetam-se os autos para o juízo competente.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_026',
        nome: 'Agravo prescrição suspensa',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu pedido de reconhecimento de prescrição executória.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão recorrida, a análise da pretensão da prescrição executória deve ser realizada para cada delito praticado isoladamente, inclusive, no caso de concurso de crimes, ficando suspensa a prescrição executória da pena do crime menos grave enquanto não consumado o lapso prescricional da pretensão executória do restante da pena mais grave.

Neste sentido: "Enquanto o paciente estiver cumprindo pena por um crime, ficam suspensas as prescrições das demais condenações a ele impostas." (AgRg no RHC n. 150.075/RN, STJ)

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_027',
        nome: 'FERNANDO - UNIFICADAS RECLUSÃO E RECLUSÃO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$dadosProcesso

Vistos etc.

Trata-se de execução cujas penas unificadas totalizaram $penaTotalVEP de reclusão no regime $regimePenaVEP (ações penais nºs xx) impostas a $passivoNomeVEP, que agora foi novamente condenado, desta feita a xxx de reclusão no regime fechado, ação penal nº XXX (evento XXXX).

Anoto que o penitente se encontra custodiado na PEA – Penitenciária Estadual de Alcaçuz/CPJC – Complexo Prisional João Chaves, conforme informações do SIAPEN nesta data.

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Dispõe o art. 111, da Lei de Execução Penal:

"Art. 111. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.

Parágrafo Único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime".

Isto posto, unifico em XXX de reclusão a pena privativa de liberdade em execução nestes autos, a ser cumprida inicialmente em regime fechado, face ao saldo de pena e ao regime já em cumprimento.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador.

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_028',
        nome: 'FERNANDO - UNIFICAÇÃO RECLUSÃO + DETENÇÃO SIMPLES',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP de reclusão no regime $regimePenaVEP (ação penal nº xxx) imposta a $partesPoloPassivo, que agora foi novamente condenado, desta feita a XXX de detenção no regime aberto, ação penal nº X (evento 1.XXX).

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Na dicção do Superior Tribunal de Justiça: "A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade" (AgRg no REsp 1861665/ES).

Portanto, condenado às penas de reclusão e detenção, as reprimendas deverão ser somadas para fins de unificação de pena.

Isto posto, unifico em XXX a pena privativa de liberdade em execução nestes autos, sendo XXX de reclusão e XX de detenção, a ser cumprida inicialmente em regime fechado, face ao saldo de pena e ao regime já em cumprimento.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador.

$localDataPorExtenso

Henrique Baltazar Vilar dos Santos
Juiz de Direito

$rodape`,
    },
    {
        id: 'seeu_029',
        nome: 'progressão iniciou recentemente fechado',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_030',
        nome: 'Transferência - indeferimento - periculosidade',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos, etc.

Trata-se de execução de pena privativa de liberdade em regime fechado, em que o apenado encontra-se recolhido na Penitenciária Estadual de **.

Peticionou a defesa requerendo o recambiamento do apenado para uma unidade prisional situada na Comarca de **, em razão de sua família ali residir (evento **).

Relatados.

A pretensão de recambiamento do apenado não pode prosperar considerando a periculosidade do apenado e a inexistência de informações suficientes acerca da segurança da unidade prisional de destino.

A transferência/recambiamento entre unidades prisionais depende de análise de critérios de oportunidade e conveniência da Administração Pública, inclusive do ponto de vista da segurança prisional.

A permanência em estabelecimento prisional próximo de sua família não constitui direito subjetivo absoluto, pois está condicionada aos interesses da administração pública e da segurança pública.

Nesse sentido: "O Superior Tribunal de Justiça possui entendimento de que o direito que o apenado tem de cumprir pena em local próximo da família é relativo" (AgRg no HC n. 854.381/RJ).

No caso, o apenado é integrante e líder da facção criminosa denominada ****, conforme classificação oriunda do SIAPEN.

Isto posto, indefiro a pretensão de recambiamento do apenado.

P.R.I. Comunique-se à unidade prisional onde ele se encontra.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_031',
        nome: 'INDULTO PENA DE MULTA 2024 - DEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $passivoNomeVEP.

A Defesa pediu o indulto da pena de multa com fulcro no art. 12, I, do Decreto Presidencial nº 12.338/2024 (ev. XXX)

Instado a se manifestar, o Ministério Público opinou pelo deferimento (ev. XXX).

Relatados.

O pedido deve ser deferido uma vez que o apenado atende às regras do decreto concessivo.

Art. 12. Concede-se o indulto coletivo às pessoas, nacionais e migrantes, condenadas a pena de multa:
I - cujo valor não supere o valor mínimo para o ajuizamento de execução fiscal de débitos com a Fazenda Nacional.

Por sua vez, a Portaria do Ministério da Fazenda Pública Federal de nº 75/2022, estabelece R$ 20.000,00 (vinte mil reais) como limite mínimo para o ajuizamento de execuções fiscais.

É o caso, pois o apenado foi condenado a penas de multas que somadas totalizaram R$ XXXXXXXXXX.

Diante do exposto, em consonância com o parecer ministerial, defiro o indulto da pena de multa a que foi condenado o apenado, o que faço com escopo no art. 12, I, do Decreto 12.338/2024.

P.R.I.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_032',
        nome: 'Regressão provisória - novo crime',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_034',
        nome: 'incompetência cobrança valores',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que foi juntada decisão que declinou a ação ordinária de cobrança contra a Fazenda Pública em que a Defesa cobra o pagamento de pecúnia ao apenado por ter ele trabalhado enquanto cumpria pena (ev. **).

Relatados.

De início registro que não se trata de pedido de liberação de pecúnia mas de cobrança de valores por ter o apenado supostamente trabalhado enquanto cumpria pena no regime fechado.

Tal pedido tem caráter de ação autônoma, cujo processamento não pode se dar nos mesmos autos da execução da pena, sendo de anotar que as varas regionais de execução penal não detém a competência para tal análise, a qual deve ser buscada junto a alguma das varas da Fazenda Pública.

Diante do exposto, nego seguimento ao pedido.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_035',
        nome: 'Permissão de saída',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Requer o apenado autorização para saída temporária do estabelecimento prisional, mediante escolta, para comparecimento ao velório e sepultamento de **seu pai.

Relatados.

Dispõe a Lei de Execução Penal, no seu art. 120, que:

Os condenados que cumprem pena em regime fechado ou semi-aberto e os presos provisórios poderão obter permissão para sair do estabelecimento, mediante escolta, quando ocorrer um dos seguintes fatos:
I - falecimento ou doença grave do cônjuge, companheira, ascendente, descendente ou irmão;
II - necessidade de tratamento médico (parágrafo único do artigo 14).

Entretanto, o parágrafo único do mesmo dispositivo esclarece que "a permissão de saída será concedida pelo diretor do estabelecimento onde se encontra o preso".

Trata-se, portanto, de atribuição administrativa.

Isto posto, faltando competência a este juízo para decidir acerca da permissão de saída com escolta, não conheço do pedido, que deverá ser proposto perante a autoridade administrativa penitenciária.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_036',
        nome: 'Curso Profissionalizante',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena por estudo realizado através da conclusão de curso profissionalizante, conforme certificado localizado no evento **, totalizando 160 (cento e sessenta) horas de estudo.

Instado a se manifestar, o Ministério Público opinou pela remição de 13 dias do total da pena.

Decido.

O instituto da remição previsto no art. 126 da LEP constitui um forte instrumento para reeducação dos encarcerados, servindo de incentivo para que o sentenciado desenvolva atividade laborterápica rotineira vinculada à ressocialização.

O art. 126, § 1º, I, da Lei de Execução Penal dispõe expressamente o limite diário de estudo em 4 horas (12 horas de frequência escolar divididas, no mínimo, em três dias), para fins de remição pelo estudo.

Isso posto, julgo remidos 13 (treze) dias da pena em execução.

P.R.I. Insira-se o evento no SEEU, para correção dos cálculos de benefícios.

$juizo.getCidade(), $data.getDataPorExtenso().

$rodape`,
    },
    {
        id: 'seeu_037',
        nome: 'curso profissionalizante - 43 dias',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena por estudo realizado através da conclusão de curso profissionalizante com duração de 160h, conforme comprovante de horas de estudos.

Instado a se manifestar, o Ministério Público opinou pela remição de 43 dias do total da pena.

Decido.

O instituto da remição previsto no art. 126 da LEP constitui um forte instrumento para reeducação dos encarcerados, servindo de incentivo para que o sentenciado desenvolva atividade laborterápica rotineira vinculada à ressocialização.

O §1º do art. 129 da Lei de Execuções Penais dispõe que o condenado autorizado a estudar fora do estabelecimento penal deverá comprovar mensalmente a frequência e o aproveitamento escolar.

Isso posto, julgo remidos 43 (quarenta e três) dias da pena em execução.

P.R.I. Insira-se o evento no SEEU, para correção dos cálculos de benefícios.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_038',
        nome: 'Agravo percentual homicídio',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agravou o apenado da decisão do evento **, que determinou a retificação da GEP, alegando, em síntese, que este juízo incorreu em erro ao determinar fração de 50% para crime hediondo com resultado morte cometido anteriormente ao Pacote Anticrime.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, no caso de crime hediondo com resultado morte esse percentual será de 50% (LEP, art. 112, VI).

Neste sentido: "Havendo o resultado morte, a jurisprudência sedimentou o entendimento de que se aplica o disposto na alínea 'a' do mencionado dispositivo, o qual indica o patamar de 50% para progressão de regime." (AgRg nos EDcl no HC n. 695.760/SC, STJ)

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_039',
        nome: 'Agravo conduta prazo Reg Disciplinar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agravou o apenado da decisão do evento **, que lhe indeferiu a progressão de regime por ausência do requisito subjetivo, alegando que a decisão impõe requisito inexistente na legislação, ao condicionar a progressão de regime à permanência mínima de 06 (seis) meses no sistema prisional.

O Ministério Público contrarrazoou opinando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois a boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112, § 1º).

O Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte fixa, para os apenados no regime fechado, o prazo de 06 (seis) meses sem prática de infração de natureza grave para a conduta ser classificada como boa.

O Estado tem competência concorrente com a União para disciplinar matéria sobre direito penitenciário (CF, art. 24, I).

Neste sentido julgou o STJ, no RMS n. 66.541/SP.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_040',
        nome: 'Progressão indefere regressão recente',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_041',
        nome: 'Transf - negativa juiz destino',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos, etc.

Trata-se de execução de pena privativa de liberdade em regime fechado, em que o apenado encontra-se recolhido na Penitenciária Estadual de **.

Peticionou a defesa requerendo o recambiamento do apenado para uma unidade prisional situada na Comarca de **, em razão de sua família ali residir (evento **).

Indagado, o juízo de destino não concordou em receber o apenado (evento **).

Relatados.

Em que pese a pretensão encontre amparo na Lei nº 7.210/84, não pode prosperar considerando a negativa dada pelo juízo de destino.

Isto posto, indefiro o pedido de recambiamento do apenado, considerando a negativa do juízo da Vara de Execução Penal da Comarca de **.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos
Magistrado(a)
$rodape`,
    },
    {
        id: 'seeu_042',
        nome: 'quesitos criminológico indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_043',
        nome: 'Progressão indeferimento provis exame',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_046',
        nome: 'Indulto 2022 negando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
O apenado é integrante de facção criminosa, conforme classificação oriunda do DEPEN. O art. 7º, §1º, do Decreto preconiza que o indulto natalino não será concedido aos integrantes de facções criminosas.

[CRIME IMPEDITIVO]
O apenado praticou crime impeditivo relacionado no art. 7º, I, do Decreto, correspondente ao delito do art. XXXX, cuja condenação deriva de fato ocorrido em XXXX. O art. 11, parágrafo único, do Decreto exige que o apenado tenha cumprido integralmente as penas dos crimes impeditivos.

[NÃO CUMPRIU 2/3 DO CRIME IMPEDITIVO]
O art. 11, parágrafo único, exige cumprimento de 2/3 da pena do crime impeditivo antes do indulto dos crimes comuns.

Isto posto, indefiro o indulto.

P.R.I.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_047',
        nome: 'regressão - semiab - não compareceu',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_050',
        nome: 'FERNANDO - UNIFICAÇÃO DE PP COM ART 28',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Tratam os autos de cumprimento de penas unificadas que totalizaram $penaTotalVEP de reclusão, atualmente em regime fechado, em que foi juntada nova guia de recolhimento tratando de condenação à pena restritiva de direitos por delito de porte de drogas para uso pessoal (art. 28, caput, Lei 11.343/06), cujo cumprimento não foi iniciado.

Relatados.

Dispõe o art. 44, § 5º, do Código Penal que sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior.

A jurisprudência do STJ afirma que a conversão ou não fica unicamente na dependência da compatibilidade de cumprimento simultâneo das sanções (AgRg no REsp 1688238/MG).

No caso, porém, tratando-se do crime previsto no art. 28 da Lei de Drogas, o tipo penal não prevê a pena privativa de liberdade, tornando inviável a conversão.

Registro que a substância apreendida não foi alcançada pela recente decisão do STF sobre cannabis sativa.

Em assim sendo, determino a suspensão da execução da pena restritiva de direitos até a progressão para o regime aberto.

P.R.I. Comunique-se ao estabelecimento prisional.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_051',
        nome: 'Progressão aberto hediondo e comum',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        nome: 'progressão para aberto crime comum',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_053',
        nome: 'COMUTAÇÃO 2024 - INDEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP em $regimePenaVEP imposta a $partesPoloPassivo.

A Defesa peticionou pugnando pela comutação das penas, fundamentando o pedido no Decreto Presidencial nº 12.338/2024.

O MP opinou pelo indeferimento, considerando que o apenado não integralizou 2/3 (dois terços) da pena dos crimes impeditivos.

Relatados.

O pedido não pode ser deferido, já que esbarra em impedimentos previstos no próprio Decreto 12.338/2024.

[CRIME IMPEDITIVO]
O apenado cometeu crime impeditivo elencado no art. 1º do Decreto. Em relação a estes crimes não cabe a comutação.

[NÃO CUMPRIU 2/3 DO CRIME IMPEDITIVO]
O art. 7º, parágrafo único, dispõe: "Na hipótese de haver concurso com crime previsto no art. 1º, não será declarado o indulto ou a comutação de pena correspondente ao crime não impeditivo enquanto a pessoa condenada não cumprir dois terços da pena correspondente ao crime impeditivo."

O apenado não cumpriu 2/3 da pena do crime impeditivo até 25.12.2024.

Diante do exposto, indefiro o pedido de comutação das penas.

P.I.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_054',
        nome: 'Progressão indefere progrediu recentemente',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_055',
        nome: 'Regressão definitiva novo crime',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_056',
        nome: 'Progressão indefere aud justificação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_057',
        nome: 'MEDIDA DE SEGURANÇA - CONVERSÃO EM AMBULATORIAL - POLÍTICA ANTIMANICOMIAL',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança na forma detentiva em que o inimputável encontra-se custodiado na Penitenciária Estadual desde o dia XXXXXXX e regulado para transferência para leito psiquiátrico da rede SUS desde XXXXXXX.

Relatados.

O art. 13, § 1º, da Resolução nº 487/2023, que instituiu a política antimanicomial, determina que nenhuma pessoa em cumprimento de medida de segurança na forma detentiva será mantida em unidade prisional ou hospital de custódia.

A situação configura-se como irregular, posto que foi regulado para leito psiquiátrico e até o momento não foi transferido.

Portanto, mesmo entendendo que pode ele representar considerável perigo para a sociedade, não há meios para mantê-lo na unidade prisional, já que o Estado Administração não cria as condições necessárias para tratamento destas pessoas.

Diante do exposto, em atenção ao que estabeleceu a Resolução do CNJ de nº 487/2023, especialmente em seu art. 13, § 1º, converto a medida de segurança detentiva em medida de segurança ambulatorial, devendo o inimputável ser imediatamente posto em liberdade.

P.I. Remetam-se os autos ao presídio para que providencie a imediata liberação do inimputável.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_058',
        nome: 'INDULTO 2022 - FORAGIDO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $PartePoloPassivoVepma.

A Defesa pediu o indulto das penas com fundamento no art. 5º do Decreto Presidencial nº 11.302/2022.

Anoto aqui que o apenado estava foragido desde o dia XXXXX e só foi recapturado em XXXXX.

Relatados.

O pedido não deve ser deferido uma vez que o apenado não estava cumprindo pena em 25.12.2022.

Como decidiu o STF: "estando o sentenciado foragido, sua fuga enseja a interrupção automática da execução da pena até a sua recaptura, suspendendo a obtenção de quaisquer benefícios da execução penal" (HC 241532, Min. André Mendonça).

Em que pese o Decreto 11.302/2022 não trazer a falta grave como impedimento para a concessão do indulto, a fuga interrompe o curso da execução penal, situação em que nenhum benefício pode ser concedido, já que não havia pena em cumprimento.

É o caso, já que o apenado fugiu em XXXXXXXX e só foi recapturado em XXXXXXXX, e não estava cumprindo pena no dia 25.12.2022.

Diante do exposto, indefiro o indulto das penas privativas de liberdade.

P.R.I.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_059',
        nome: 'Regressão cautelar indefe progressao aberto',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_060',
        nome: 'Progressão aberto defere poucas violaçoes',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_061',
        nome: 'Embargos de declaração indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado interpôs embargos declaratórios da decisão do evento **, alegando que **. Em consequência pediu **.

Relatados.

Preenchidos os requisitos de admissibilidade, conheço dos presentes embargos de declaração, que, porém, não merecem acolhimento.

Com efeito, observo que inexistiu obscuridade, ambiguidade, contradição ou omissão na decisão combativa, pois foram devidamente apresentadas as razões do convencimento, nos termos da orientação dos Tribunais Superiores.

Sendo assim, constata-se que o julgado foi devidamente fundamentado e a questão suficientemente debatida, nos moldes do princípio do livre convencimento motivado do magistrado.

Destaco ainda, o nítido propósito de rediscussão da matéria. Ora, no recurso de embargos de declaração não há possibilidade de rediscussão da matéria, cuja finalidade cinge-se à elucidação e integração de obscuridade, omissão e contradição.

Portanto, constando que a decisão embargada encontra-se devidamente fundamentada, rejeito os embargos de declaração, por buscarem apenas a rediscussão da matéria.

P.R.I.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_062',
        nome: 'MEDIDA DE SEGURANÇA RESTRITIVA - SUSCITAÇÃO DO CONFLITO DE COMPETÊNCIA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de medida de segurança restritiva (ambulatorial) em que o Juízo de Direito da XXXXXXXXXXXXX declinou a competência para esta 1ª Vara Regional de Execução penal.

Relatados.

A meu ver, a melhor interpretação para a definição da competência para acompanhamento das medidas de segurança na forma restritiva (ambulatorial) não é aquela dada pelo Juízo de Direito da XXXXXXXXXXXXXXXX, até porque não possibilita o cumprimento da política antimanicomial estabelecida pelo CNJ (Resolução nº 487/2023).

As varas regionais de execução penal foram criadas para acompanhar as execuções penais em regime fechado e semiaberto. A medida de segurança detentiva equivale ao regime fechado, enquanto a modalidade restritiva ao regime aberto.

O acompanhamento das medidas de segurança restritivas pelo juízo local, ao invés das varas regionais, permite proximidade com os CAPS dos municípios e um acompanhamento mais regular.

Em assim sendo, decido representar ao Exmº Desembargador Presidente do Egrégio Tribunal de Justiça sobre o conflito de competência acima referido.

Cumpra-se, juntando a decisão do Juízo e esta ao PJe 2º grau.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_063',
        nome: 'Prescrição indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Tratam os autos de processo de execução de *** anos de reclusão pela prática de delito capitulado no art. *****, do Código Penal, na data de **.

A sentença condenatória data de *****, tendo transitado em julgado para a acusação em ****, nunca tendo sido cumprida a pena por não ter sido preso o apenado.

*Requereu o apenado o reconhecimento da prescrição da pretensão executória.

*Acrescento ao relatório que o apenado é reincidente.

Relatados.

Prescrição penal é a perda do poder-dever de punir do Estado pelo não exercício da pretensão punitiva ou da pretensão executória durante certo lapso de tempo.

No caso, o parâmetro de prescrição é o previsto no art. 109, inciso **, do Código Penal, ou seja, *** anos. Entretanto, aqui o referido prazo deve ser aumentado em 1/3 em virtude da reincidência do apenado (art. 110, caput, do CP), totalizando um prazo de ** anos, ainda não ultrapassado.

Neste sentido: "o reconhecimento da prescrição da pretensão executória impossibilita o Estado de executar a pena aplicada, sem, contudo, rescindir a sentença penal condenatória, razão pela qual seus efeitos secundários - entre eles, a reincidência - permanecem inalterados" (STJ, EDcl no AgRg no AREsp 726.325/DF).

Registro que "a reincidência, como causa de interrupção da prescrição da pretensão executória, é contada a partir da prática do novo delito, e não do trânsito em julgado de eventual sentença condenatória" (RHC 68.812/RJ, STJ).

Isto posto, posto não ultrapassado o prazo prescricional, indefiro o pedido de reconhecimento da prescrição.

P.R.I. Aguarde-se o cumprimento do mandado de prisão.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_064',
        nome: 'Regressão faltas reiteradas',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_065',
        nome: 'Remição trabalho ATUALIZADA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena pelo trabalho, constando folha de frequência e produção do apenado.

Instado a se manifestar, o Ministério Público opinou pela concessão da remição de 4 (quatro) dias da pena em razão do trabalho.

Decido.

O instituto da remição previsto no art. 126 da LEP constitui um forte instrumento para reeducação dos encarcerados, promovendo o impedimento à ociosidade perniciosa, servindo de incentivo para que o sentenciado desenvolva atividade laborterápica rotineira vinculada à ressocialização.

"a Lei de Execução instituiu no País uma forma de redenção de parte da pena privativa de liberdade através de remição, na qual, pelo trabalho, o condenado abrevia parte do tempo de sua condenação" (Prof. Julio Fabbrini Mirabete).

Compulsando os autos, verifico que o apenado trabalhou efetivamente por 14 (quatorze) dias em serviços internos na unidade prisional, com jornada de trabalho dentro dos parâmetros legais.

Isso posto, julgo procedente o pedido, para fim de julgar remidos 4 (quatro) dias da pena em execução.

P.R.I. Insira-se o evento no SEEU, para correção dos cálculos de benefícios.

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_066',
        nome: 'Remição LEITURA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena privativa de liberdade em regime fechado, vieram-me conclusos os autos para análise de pedido de remição por leitura.

O MP opinou pela concessão da remição de 12 (doze) dias em razão da leitura das obras constantes no relatório.

Relatados.

Além da remição pelo trabalho e pelo estudo, também devem ser levadas em consideração outras possíveis modalidades, em interpretação extensiva in bonam partem, sendo a remição por leitura, uma delas.

A Portaria Nº 03/2023 do Grupo de Monitoramento e Fiscalização - GMF/TJRN, dispõe em seu art. 3º:

Art. 3º Terão direito à remição de pena pela leitura as pessoas privadas de liberdade que comprovarem a leitura de qualquer obra literária.

Para cada obra lida corresponderá a remição de 4 (quatro) dias, considerado, a cada período de 12 (doze) meses, o limite de até 12 (doze) obras e a possibilidade de remir até 48 (quarenta e oito) dias de pena.

No caso, observa-se que restaram consubstanciados os requisitos necessários à concessão da remição por leitura, uma vez que os relatórios expõem os textos produzidos pelo apenado relacionados à compreensão das obras literárias lidas.

Isso posto, julgo procedente o pedido, a fim de declarar remidos 12 (doze) dias da pena imposta ao apenado.

P.R.I. Atualize-se o Atestado de Penas.

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_067',
        nome: 'falta média MODELO FORA DE USO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumprindo pena privativa de liberdade em regime semiaberto, com autorização para saídas externas, o apenado não se recolheu por ** noites no mês de **, quando já fora punido por faltas anteriores.

*Opinou o Ministério Público pela suspensão da autorização para saídas externas.

Relatados.

Conforme informado pela administração penitenciária, desatendeu o apenado ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 ("cumprimento fiel da sentença"), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do Rio Grande do Norte, art. 74, inc. IV.

Ocorre que a referida falta não importa em regressão de regime, pelo que deverá o apenado continuar a cumprir a pena no regime semiaberto, com as consequências cabíveis no tocante ao registro de seu comportamento.

Isto posto, reconheço a prática de falta média e suspendo as autorizações de saídas externas desvigiadas do apenado por *** dias, mandando recolhê-lo ao presídio.

P.R.I., inclusive ao apenado ou seu defensor.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_068',
        nome: 'Posse droga cancela unificação Tema 506',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Trata-se de execução de pena privativa de liberdade cumprida no regime ***, sendo uma das condenações por delito do art. 28, da Lei de Drogas (cannabis sativa até 40g).

Relatados.

Processo examinado no âmbito do Mutirão Processual Penal do Conselho Nacional de Justiça, estabelecido pela Portaria da Presidência do TJRN nº 278, de 2024.

Em 26.06.2024 o STF, ao julgar o RE. n. 635659, aprovou o Tema 506 de Repercussão Geral, onde declarou a inconstitucionalidade da conduta prevista no art. 28 da Lei n. 11.343/2006, afastando quaisquer efeitos penais, enquanto entendeu presumir-se de forma relativa usuário de drogas quem adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, até 40 gramas de cannabis sativa ou seis plantas-fêmeas.

Nesse sentido, diante da repercussão geral reconhecida no julgado, reconheço a atipicidade da conduta do apenado.

*Posto isso, torno sem efeitos a decisão de regressão de regime do ev *** e de unificação de penas do ev. ***, retornando o apenado à situação anterior.

Extraiam-se destes autos a GEP e seus anexos referentes àquela condenação, devolvendo-a ao juízo de conhecimento, juntamente com cópia desta decisão.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_069',
        nome: 'Posse drogas mantém situação Tema 506',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que o apenado foi autuado em flagrante por delito do art. 28 da Lei de Drogas, não se verificando decisão de regressão de regime em razão de tal conduta.

Processo examinado no âmbito do Mutirão Processual Penal do CNJ (Portaria nº 278/2024).

Relatados.

Em 26.06.2024 o STF, ao julgar o RE. n. 635659, aprovou o Tema 506 de Repercussão Geral, declarando a inconstitucionalidade da conduta prevista no art. 28 da Lei n. 11.343/2006.

Todavia o caso em tela é diverso.

Isso porque, apesar do auto de prisão em flagrante remeter à condição do apenado como usuário para consumo próprio, dentro dos parâmetros estipulados pela decisão, não teve o condão de influenciar a presente execução penal, já que não se decidiu pela regressão de regime.

*Posto isso, mantenho o apenado na situação em que se encontra.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_070',
        nome: 'Posse droga cancela regressão Tema 506',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que, então no regime semiaberto, o apenado foi autuado em flagrante por delito do art. 28 da Lei de Drogas, sendo regredido para o regime fechado.

**Acrescento que o apenado fora preso por portar ** gramas de cannabis sativa ou ** plantas-fêmeas.

Processo examinado no âmbito do Mutirão Processual Penal do CNJ (Portaria nº 278/2024).

Relatados.

Em 26.06.2024 o STF, ao julgar o RE. n. 635659, aprovou o Tema 506 de Repercussão Geral, declarando a inconstitucionalidade da conduta prevista no art. 28 da Lei n. 11.343/2006, afastando quaisquer efeitos penais, enquanto presumiu de forma relativa usuário de drogas quem adquirir, guardar, tiver em depósito, transportar até 40 gramas de cannabis sativa ou seis plantas-fêmeas.

Nesse sentido, reconheço a atipicidade da conduta do apenado ocorrida em ***.

Posto isso, torno sem efeitos a decisão de regressão de regime, retornando o apenado à situação anterior (regime ***).

Providencie-se, se necessário, baixa de mandado de prisão no BNMP.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_071',
        nome: 'Adequação. Regime semiaberto. Periculosidade',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade, no regime semiaberto, em que interveio o MP aduzindo a incompatibilidade de cumprimento do regime por meio da tornozeleira eletrônica, tendo em vista que o apenado oferece grave risco à sociedade.

A unidade prisional juntou Plano Individualizador da Pena, no qual se destaca que o apenado é classificado como de alta periculosidade, compõe posto de liderança na facção criminosa Sindicato do Crime.

Relatados.

Nos termos do art. 37 da LEP, a prestação de trabalho externo ao estabelecimento prisional "dependerá de aptidão, disciplina e responsabilidade".

O STJ tem decidido que "o fato de o apenado ter progredido para o regime semiaberto não lhe assegura o direito automático ao trabalho extramuros, devendo ser analisada a compatibilidade entre a concessão do benefício e os objetivos da pena" (AgRg no RHC n. 155.097/RJ).

Aqui, o apenado é classificado como de alta periculosidade, compondo posto de liderança na facção criminosa Sindicato do Crime.

Isto posto, dado regime prisional imposto e a manifesta periculosidade do apenado, nego-lhe a autorização para saídas desvigiadas permanentes e trabalho externo desvigiado, por seis meses, período necessário para reanálise de seu comportamento.

P.R.I. e diligencie-se. Voltem-me após aquele prazo.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
];

export const MODELOS_SEEU_LOTE4_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_072',
        nome: 'Mutirão mulheres indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Estes autos me vieram conclusos em cumprimento ao determinado na Portaria Conjunta nº 33/2024, com o objetivo de reavaliá-lo de ofício, de forma a verificar se contemplada por indulto em razão de alguma das seguintes situações:

- mulheres condenadas à pena privativa de liberdade superior a 8 anos, por crime praticado sem violência ou grave ameaça, que tenham filho ou filha menor de 18 anos ou com deficiência.

- mulheres condenadas à pena privativa de liberdade não superior a 8 anos, por crime praticado sem violência ou grave ameaça, que tenham filho ou filha menor de 18 anos ou com deficiência.

Relatados.

Trata-se de mulher condenada à pena privativa de liberdade por crime praticado com violência ou grave ameaça à pessoa, pelo que não pode ser beneficiada com indulto.

Em assim sendo, mantenho a apenada na situação em que se encontra.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_073',
        nome: 'LC negando violações monitoramento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para o livramento condicional.

Interveio o MP, opinando fundamentadamente pelo indeferimento.

Anoto que o apenado está cumprindo sanção disciplinar em razão de violações ao monitoramento eletrônico.

Relatados.

Apesar de atingido o requisito objetivo, não cabe o benefício ao apenado.

É que ficou claramente demonstrada a falta de bom comportamento no cumprimento da pena (Código Penal, art. 83, III, a).

Neste sentido: "ainda que o apenado não tenha incorrido em fuga, nem em novo crime, o descumprimento das regras do monitoramento é previsto como falta grave na LEP" (STJ, AgRg no HC 867.103/SC).

Conforme o Tema Repetitivo 1161 do STJ: "a valoração do requisito subjetivo para concessão do livramento condicional deve considerar todo o histórico prisional, não se limitando ao período de 12 meses".

Isto posto, face não atender o apenado aos requisitos do art. 83, III, do Código Penal, indefiro o livramento condicional.

P.R.I. Faça-se o registro no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_074',
        nome: 'PROGRESSAO - indefere - prisao preventiva outro processo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_075',
        nome: 'Honorário dativo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade em que a advogada ** foi nomeada como defensora dativa, quando o feito tramitava em comarca do interior do estado.

Peticionou a advogada pedindo a renúncia do encargo, intimação do apenado para constituir novo advogado, além de arbitramento de honorários advocatícios.

Relatados.

Em relação ao arbitramento de honorários advocatícios, considerando que a 1ª Vara Regional de Execução Penal é atendida pelos serviços da Defensoria Pública, não há como serem arbitrados, uma vez que utilizaria recursos públicos de forma não autorizada.

Diante do exposto, acato a renúncia da advogada, determino a intimação do apenado para que diga, no ato da intimação, se pretende constituir novo advogado ou se aceita ser representado pela Defensoria Pública e, por fim, deixo de analisar o pedido de arbitramento de honorários advocatícios.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_076',
        nome: 'FERNANDO - UNIFICAÇÃO ART 28 11343/2006',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Tratam os autos de cumprimento de penas de $penaTotalVEP de reclusão atualmente em regime $regimePenaVEP, em que sobreveio nova condenação por delito de porte de drogas para uso pessoal (art. 28, caput, Lei 11.343/06), cujo cumprimento não foi iniciado.

Relatados.

Dispõe o art. 44, § 5º, do Código Penal que "sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior".

A jurisprudência do STJ afirma que a conversão ou não fica unicamente na dependência da compatibilidade de cumprimento simultâneo das sanções (AgRg no REsp 1688238/MG).

No caso, porém, por se tratar do crime previsto no art. 28 da Lei de Drogas, o tipo penal não prevê a pena privativa de liberdade, tornando inviável a conversão.

Em assim sendo, mantenho o apenado no cumprimento da pena de $penaTotalVEP, devendo permanecer no regime $regimePenaVEP, enquanto determino a suspensão da execução da pena restritiva de direitos até a progressão de regime para o aberto.

P.R.I.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_077',
        nome: 'Progressão indefere PAD',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_078',
        nome: 'Detração cautelares',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução penal em que a Defesa pugnou pela detração do período em que o apenado permaneceu sob a cautelar de recolhimento noturno com uso de tornozeleira eletrônica.

O MP opinou pelo deferimento do pedido, descontados os dias de violações ao monitoramento eletrônico.

Acostou-se nos autos a comprovação do tempo que o apenado permaneceu monitorado eletronicamente e os relatórios de violações.

Relatados.

Conforme o Tema Repetitivo 1155 do STJ, "O período de recolhimento obrigatório noturno e nos dias de folga, por comprometer o status libertatis do acusado, deve ser reconhecido como período a ser detraído da pena privativa de liberdade e da medida de segurança, em homenagem aos princípios da proporcionalidade e do non bis in idem".

Aqui, o apenado cumpriu aquelas medidas entre ** e **, período que deve ser anotado como pena cumprida, com exceção do número de dias equivalente às violações ocorridas.

Isto posto, determino constar como pena cumprida o período de ** a **, menos *** dias, referentes às violações ocorridas.

P.R.I., atualize-se o atestado de penas.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_079',
        nome: 'COMUTAÇÃO 2024 - AUSENCIA REQ OBJETIVO INDEFERINDO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $passivoNomeVEP.

A Defesa peticionou pugnando pela comutação da pena, fundamentando o pedido no Decreto Presidencial nº 12.338/2024.

O MP opinou pelo indeferimento considerando que o apenado não atingiu requisito objetivo.

Relatados.

De logo verifico que quando da publicação do Decreto o apenado cumpria pena de $penaTotalVEP meses de reclusão.

Dispõe o art. 13 do Decreto que "concede-se a comutação da pena remanescente na proporção de um quinto da pena, às pessoas condenadas a pena privativa de liberdade que tenham cumprido, até 25 de dezembro de 2024, um quinto da pena, se não reincidentes, ou um quarto da pena, se reincidentes."

*Aqui, como o apenado era primário à época do decreto, ele teria que ter cumprido 1/5 (um quinto) da pena, ou seja, **, o que não ocorreu.

*Aqui, como o apenado à época do decreto era reincidente, ele teria que ter cumprido 1/4 (um quarto) da pena, ou seja, **, o que não ocorreu.

Ora, em 25.12.2024, o apenado não havia atingido o requisito objetivo para a concessão da comutação da pena.

Diante do exposto, indefiro o pedido de comutação das penas, considerando que o apenado não cumpriu o requisito objetivo estipulado no Decreto 12.338/2024.

P.I.

$assinaturaJuizDireito

$rodape`,
    },
];

// Concatena lote4 parte2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE4_PARTE2);

// Lote 5: Modelos 101-125 (seeu_080 a seeu_104)
export const MODELOS_SEEU_LOTE5: ModeloSEEU[] = [
    {
        id: 'seeu_080',
        nome: 'Multa parcelamento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena privativa de liberdade em regime *****fechado, vieram-me conclusos os autos para análise das penas de multa impostas ao apenado, nos autos de nº ********, as quais totalizaram R$ ******** (******), conforme cálculos da secretaria (evento ****).

Intimado, o apenado propôs parcelamento, nos seguintes termos: *********** (evento *****).

Instado a se manifestar, o Ministério Público ***não concordou com a proposta (evento *******).

Acrescento ao relatório que o apenado tem **** (****) anos, ****** (*****) meses e ***** (******) dias de pena a cumprir, consoante informações do SEEU, nesta data.

Relatados.

A pena de multa está prevista no art. 5º, inciso XLVI, alínea "c", da Constituição Federal e no art. 49 do Código Penal e seja ela cominada no preceito secundário do tipo penal ou substitutiva da pena privativa de liberdade (art. 44 do CP), constitui espécie de sanção penal patrimonial.

Em sendo o parcelamento direito objetivo do apenado (norma agendi) incluído no art. 169 da Lei de Execuções Penais, ainda que não tenha apresentado proposta razoável ou pormenorização com sua situação financeira, deve ser examinada sua pretensão.

Isso posto, defiro o parcelamento das penas de multa impostas ao apenado nas Ações Penais nº *****, em *** (***) parcelas iguais de R$ ****(****), devendo o pagamento ser feito através de depósito identificado em favor do Fundo Penitenciário do Rio Grande do Norte.

P.R.I. Comprovado ou não o pagamento, certifique-se e dê-se vistas ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_081',
        nome: 'Falta grave - novo crime sem denúncia - faccionados',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que juntou-se sindicância na qual concluiu-se que o apenado, juntamente com outros, alegou ter ingressado na facção criminosa Comando Vermelho, o que gerara "princípio de motim" e desavenças com grupos rivais dentro do ambiente carcerário.

Diligenciado, certificou-se que não existe nenhuma denúncia recebida face ao apenado por crimes que teriam sido praticados desde outubro de 2023.

Relatados.

Como diz o Ministério Público, a conduta noticiada configura falta grave, mas apenas se houve autuação em flagrante, denúncia ou condenação por novos crimes.

E é induvidoso que não se exige o julgamento do novo crime para reconhecer-se a falta grave prevista no art. 52, primeira parte, da Lei 7.210/84.

Entretanto, o não oferecimento da denúncia após quatro ou cinco meses do suposto fato demonstra que a Polícia Judiciária e o Ministério Público não conseguiram suficientes indícios quanto à conduta criminosa.

A consequência é que não se pode punir o apenado por situação indefinida.

Isto posto, dada a inexistência de indícios da falta grave, nego seguimento à apuração dos fatos relatados na sindicância.

P.R.I., diligências necessárias, inclusive comunicação ao estabelecimento prisional para registro no prontuário do apenado.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_082',
        nome: 'incompetência',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
$dadosProcesso
 
Vistos etc.

*Trata-se de execução da pena em que se verificou que a apenada está recolhida no Pavilhão Feminino do Complexo Penal Dr. João Chaves.

*Trata-se de execução da pena em que se verificou que o apenado está recolhido na Cadeia Pública de Ceará Mirim

*Trata-se de execução da pena em que se verificou que o apenado está recolhido na Penitenciária Estadual de Parnamirim.

Relatados.

Competente para a execução penal é o juízo do local onde recolhido o apenado.

*No caso, está a apenada recolhida em unidade prisional onde as execuções penais são da competência da 2ª Vara Regional de Execução Penal.

Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução penal de pessoa que está recolhida em outro município fora desta competência, determino a remessa dos autos para a 2ª Vara Regional de Execução Penal.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_083',
        nome: 'Regressão provisória - fuga',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_084',
        nome: 'INDULTO PENA DE MULTA - 2023 - DEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $passivoNomeVEP pela prática de crimes do art. XXXX, ação penal XXX.

A Defesa pediu o indulto da pena de multa com fulcro no art. 2º inciso X, do Decreto Presidencial nº 11.846/2023 (ev. XXX)

Instado a se manifestar, o Ministério Público opinou pelo deferimento*indeferimento (ev. XXX).

Relatados.

O pedido deve ser deferido uma vez que o apenado atende às regras do decreto concessivo.

O art. 2º, do Decreto Presidencial nº 11.846/2023, em seu inciso X, exige que, para que a pena de multa seja indultada, não pode ser superior ao valor mínimo para o ajuizamento de execuções fiscais de débitos com a Fazenda Pública (R$ 20.000,00).

É o caso, pois o apenado foi condenado a penas de multas que somadas totalizaram R$ XXXXXXXXXX.

Diante do exposto, em consonância com o parecer ministerial, defiro o indulto da pena de multa, com escopo no art. 2º, inciso X, e art. 8º, do Decreto 11.846/2023.

P.R.I.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_085',
        nome: 'FALTA MÉDIA - AUSÊNCIA DE AUDIÊNCIA - MANTENDO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Cumprindo pena privativa de liberdade em regime **********fechado ********* semiaberto a unidade prisional juntou aos autos sindicância pelo cometimento de falta média (ev. XXXX).

A **********Defensoria Pública **********Defesa pediu a anulação da sindicância, alegando que o apenado não foi submetido à audiência de justificação.

Relatados.

Conforme informado pela administração penitenciária, desatendeu o apenado ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 ("cumprimento fiel da sentença"), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do Rio Grande do Norte, art. 74, inc. XXXXXXX.

Em relação ao pedido de anulação das sindicâncias formulados pela *********Defensoria Pública anoto que a falta média não comporta qualquer deliberação judicial, seja por inexistir previsão legal, ao contrário das faltas de natureza grave regulamentadas pela Lei federal nº 7.210, de 1984, seja por se revelarem matéria eminentemente administrativa, razão pela qual entendo não ser caso de designação de audiência de justificação.

Isto posto, reconheço a prática de faltas médias e não faltas graves.

P.R.I.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_086',
        nome: 'PRESTAÇÃO PECUNIÁRIA - PARCELAMENTO DEFERINDO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em regime fechado em que a Defesa pediu o parcelamento da prestação pecuniária de XXXXX salários mínimos em XXXXX parcelas iguais e sucessivas.

Instado a se manifestar, o Ministério Público concordou com o pedido.

Relatados.

O pedido deve ser deferido, uma vez que o parcelamento possibilita o cumprimento da pena pecuniária, sendo razoável o prazo requerido para seu cumprimento.

Na forma do art. 45, § 1º, do Código Penal, a prestação pecuniária consiste no pagamento em dinheiro à vítima, a seus dependentes ou a entidade pública ou privada com destinação social.

Isso posto, defiro o parcelamento da prestação pecuniária em XXXXX parcelas iguais e sucessivas de R$ XXXXX, devendo o pagamento ocorrer todo dia XXXXX de cada mês.

P.R.I.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_087',
        nome: 'REGRESSÃO - REVOGAÇÃO - NOVO CRIME ABSOLVIÇÃO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_088',
        nome: 'AGRAVO - INDULTO/COMUTAÇÃO - 2023. MANTENDO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento XXX.1 que negou indulto por não atender o apenado aos critérios estabelecidos pelo próprio Decreto 11.846/2023 (ev. XXX.1).

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada (ev. XXX.1).

Relatados.

***************Sem razão o agravante, pois, conforme esclarecido na decisão agravada o Decreto 11.846/2023 exige, ao benefício, que o apenado tenha cumprido 2/3 (dois terços) da pena dos crimes impeditivos, conforme art. 9º, parágrafo único, do Decreto.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe 2º grau.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_089',
        nome: 'Progressão indef multa',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_090',
        nome: 'Agravo não pagto multa',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado, da decisão do evento *** que lhe indeferiu a progressão de regime por ausência de comprovação do pagamento ou parcelamento da pena de multa.

Contrarrazoou o Ministério Público opinando pela manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois é entendimento jurisprudencial sedimentando que o inadimplemento da sanção pecuniária constitui óbice à progressão de regime, salvo inequívoca comprovação da incapacidade econômica do apenado.

O Supremo Tribunal Federal deixou claro que o apenado precisa comprovar a impossibilidade de pagamento da multa, ainda que de forma parcelada, situação que não pode ser presumida (ADI 7032/DF, julgado em 22/03/2024).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_091',
        nome: 'Regressão - não iniciou aberto - cancela',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
];

// Concatena lote5 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE5);

// Lote 5 - Parte 2: Modelos 101-125 (seeu_092 a seeu_104)
export const MODELOS_SEEU_LOTE5_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_092',
        nome: 'INDULTO 2022. SOBRESTAMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de pena privativa de liberdade que unificadas totalizaram xxxx de reclusão, em regime fechado********semiaberto.

A Defesa do apenado ingressou com pedido de indulto natalino com fundamento no art. 5º do Decreto nº 11.302/2022.

Interveio o Ministério Público que pugnou pelo sobrestamento da análise do pedido, conforme determinado no HC 0807178-32.2023.8.20.0000 de lavra do TJRN.

Relatados.

A análise do indulto com base no Decreto 11.302/2022 deve ser sobrestada.

É que o Tribunal de Justiça do Rio Grande do Norte determinou a suspensão da análise do pedido, conforme decisão proferida no HC 0807178-32.2023.8.20.0000, até o julgamento definitivo da constitucionalidade do art. 5º do Decreto pelo STF (Tema 1267).

Ante o exposto, determino o sobrestamento do pedido, até o julgamento definitivo da matéria perante o STF.

P.I

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_093',
        nome: 'PRESTAÇÃO PECUNIÁRIA - CONVERSÃO EM PP',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP de reclusão no regime fechado, cuja pena foi substituída por penas restritivas de direitos consistentes em prestação pecuniária.

O apenado foi intimado para pagar a prestação pecuniária, deixando o prazo transcorrer sem que tenha efetuado o pagamento ou pedido seu parcelamento.

Relatados.

Dispõe o art. 44, § 5º, do Código Penal que "sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior".

Por sua vez, prevê o Código Penal, art. 44, § 4º que "a pena restritiva de direitos converte-se em privativa de liberdade quando ocorrer o descumprimento injustificado da restrição imposta."

No caso, o apenado foi devidamente intimado para efetuar o pagamento da prestação pecuniária, deixando transcorrer o prazo sem dar cumprimento à obrigação.

Isto posto, converto as penas restritivas de direitos em privativa de liberdade e unifico em XXXXXXXX de reclusão a pena privativa de liberdade em execução nestes autos.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_094',
        nome: 'FALTA GRAVE - NOVO CRIME - PRESCRIÇÃO - INOCORRÊNCIA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP de reclusão.

A ***********Defensoria Pública ********Defesa pediu o reconhecimento da prescrição da falta grave ocorrida em relação aos fatos que deram origem à ação penal nº XXXXXXXX, considerando que se passaram mais de 03 (três) anos da ocorrência.

Com vista dos autos, o Ministério Público pugnou pelo indeferimento do pedido.

Relatados.

O pedido deve ser indeferido.

O novo crime transitou em julgado, o que supre a necessidade de instauração de PAD para sua validação (STF, Tema 758).

Portanto, existindo nos autos sentença penal condenatória e certidão de trânsito em julgado, a instauração do PAD foi suprida pela sentença criminal condenatória transitada em julgado, não havendo o que se falar em prescrição da falta grave.

Diante do exposto, indeferido o pedido de reconhecimento da ocorrência da prescrição da falta grave disciplinar.

P.I.

$assinaturaJuizDireito
 
$rodape`,
    },
    {
        id: 'seeu_095',
        nome: 'progressão indeferimento requisito objetivo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_096',
        nome: 'Retificação pena em dobro Curado',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que a Defesa pugnou pela retificação do atestado de pena para fazer constar o cômputo em dobro do tempo que o apenado esteve recluso, afirmando que há um estado de coisas inconstitucional no sistema carcerário brasileiro.

Instado a se manifestar o Ministério Público pugnou pelo indeferimento uma vez que a Resolução da Corte Interamericana de Direitos Humanos tratava de situação fática ocorrida em penitenciária de outro Estado da federação.

Relatados.

A Resolução de 28 de novembro de 2018 da Corte Interamericana de Direitos Humanos, que determinou o cômputo em dobro do tempo de cumprimento da pena na unidade prisional do Complexo do Curado, tem aplicabilidade inter partes.

No caso, verifico que o apenado nunca cumpriu pena no Complexo do Curado, não se enquadrando na hipótese apontada pela Defesa.

Ante o exposto, indefiro o pedido de cômputo em dobro da pena cumprida.

P.I.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_097',
        nome: 'INDULTO 2022. FACÇÃO CRIMINOSA. INDEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de penas privativas de liberdade que foram unificadas em $penaTotalVEP em regime $regimePenaVEP.

A Defesa ingressou com pedido de indulto natalino, o que fez com base no art. 5º do Decreto 11.302/2022.

Interveio o Ministério Público pugnando pelo indeferimento do pedido, considerando que o apenado é integrante de facção criminosa denominada "Sindicato do Crime".

Relatados.

Sem adentrar no mérito da constitucionalidade do art. 5º do Decreto 11.302/2022, o pedido não merece prosperar, uma vez que desconsidera regra estabelecida no próprio decreto.

É que o apenado é integrante de facção criminosa denominada "Sindicato do Crime", conforme classificação oriunda do DEPEN.

O art. 7º, § 1º, do Decreto, preconiza que "o indulto natalino também não será concedido aos integrantes de facções criminosas, ainda que sejam reconhecidas somente no julgamento do pedido de indulto."

Isto posto, reconhecendo que o apenado integra facção criminosa, tenho como não atendido o requisito do decreto, pelo que indefiro o indulto.

P.R.I. 

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_098',
        nome: 'lc violações monitoramento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para o livramento condicional.

*Interveio o Ministério Público, opinando fundamentadamente pelo indeferimento.

Relatados.

Apesar de atingido o requisito objetivo, não cabe o benefício ao apenado.

É que ficou claramente demonstrada a falta de bom comportamento no cumprimento da pena (Código Penal, art. 83, III, a), pois se verifica que o apenado foi punido ** vezes nos últimos 2 anos, por ** violações ao monitoramento eletrônico.

Neste sentido colhe-se da jurisprudência: "ainda que o apenado não tenha incorrido em fuga, nem em novo crime, o descumprimento das regras do monitoramento é previsto como falta grave na LEP" (AgRg no HC 867.103/SC, STJ).

Por oportuno, cabe anotar que o art. 83 do Código Penal não restringe o bom comportamento do apenado ao último ano, já que exige "bom comportamento durante a execução da pena" (Tema Repetitivo 1161, STJ).

Isto posto, face não atender o apenado aos requisitos do art. 83, III, do Código Penal, indefiro o livramento condicional.

P.R.I. Faça-se o registro no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_099',
        nome: 'COMUTAÇÃO OU INDULTO 2023. QUADRILHA OU BANDO + 288. INDEFERE',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de penas privativas de liberdade que foram unificadas em $penaTotalVEP em regime $regimePenaVEP.

A Defesa ingressou com pedido de comutação das penas, o que fez com base no art. 3º e 4º do Decreto 11.846/2023.

Interveio o Ministério Público pugnando pelo indeferimento do pedido, considerando que o apenado é integrante de facção criminosa denominada "Sindicato do Crime" bem como foi condenado por crime de quadrilha ou bando.

Relatados.

O pedido não merece prosperar, uma vez que desconsidera regra estabelecida no próprio decreto.

É que o apenado é integrante de facção criminosa denominada "Sindicato do Crime", conforme classificação oriunda do DEPEN.

O art. 1º, § 1º, I, do Decreto 11.846/2023 preconiza que o indulto coletivo não alcança as pessoas "integrantes de facções criminosas que nelas desempenhem ou tenham desempenhado função de liderança ou participado de forma relevante em organização criminal".

Neste sentido o STJ tem decidido que não há diferenciação entre facção ou organização criminosa (AgRg no RHC n. 185.970/PR).

Isto posto, reconhecendo que o apenado integra facção criminosa, tenho como não atendido o requisito do decreto, pelo que indefiro a comutação.

P.R.I. 

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_100',
        nome: 'progressão indefere subjetivo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_101',
        nome: 'Minuta - monitoramento (falta média)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.    

Executando-se em regime semiaberto pena privativa de liberdade, o apenado foi beneficiado com prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que violara as condições impostas.

Relatados.

No caso, verificam-se diversas violações às regras da monitoração eletrônica.

Ora, determina a Lei de Execução Penal, no art. 146-D, inciso II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar os deveres a que estiver sujeito durante a sua vigência (...)."

Os deveres a que se sujeita o apenado beneficiado com a prisão domiciliar com monitoramento eletrônico estão previstas no art. 4º da Portaria nº 01/2022 deste juízo.

Nessa situação, resta claro que desatendeu o apenado ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 ("cumprimento fiel da sentença"), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do Rio Grande do Norte, art. 74, inc. IV.

Ocorre que a referida falta não importa em regressão de regime, pelo que deverá o apenado continuar a cumprir a pena no regime semiaberto, com as consequências cabíveis no tocante ao registro de seu comportamento.

Isto posto, reconheço a prática de falta média, suspendendo as autorizações de saídas externas desvigiadas do apenado por 10 (dez) dias.

P. R. I., atualize-se o Atestado de Penas.

Comunique-se à CEME e ao CPJC, para que se dê cumprimento à sanção. 

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_102',
        nome: 'monitoramento violações req progr',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.    

Executando-se em regime semiaberto pena privativa de liberdade, o apenado foi beneficiado com prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que violara as condições impostas.

Acrescento ao relatório que o SEEU identificara o apenado como tendo atingido o requisito objetivo para progressão de regime.

*Interveio o Ministério Público.

Relatados.

Conforme atestado de pena, o apenado cumpriu o requisito objetivo para concessão da progressão de regime.

Quanto ao subjetivo, porém, diversa é a situação.

No caso, verificam-se diversas violações às regras da monitoração eletrônica.

Os deveres a que se sujeita o apenado beneficiado com a prisão domiciliar com monitoramento eletrônico estão previstas no art. 4º da Portaria nº 01/2022 deste juízo.

Nessa situação, resta claro que desatendeu o apenado ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 ("cumprimento fiel da sentença"), praticando falta disciplinar média.

Ocorre que a referida falta não importa em regressão de regime, pelo que deverá o apenado continuar a cumprir a pena no regime semiaberto, com as consequências cabíveis no tocante ao registro de seu comportamento.

Isto posto, indefiro a progressão de regime e reconheço a prática de falta média, suspendendo as autorizações de saídas externas desvigiadas do apenado por *** dias.

P. R. I., atualize-se o Atestado de Penas.

Comunique-se à CEME, para que notifique o apenado a iniciar o cumprimento em cinco dias.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_103',
        nome: 'indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

O apenado foi identificado como possível beneficiário de progressão de regime mas tem audiência de justificação agendada para apuração de falta grave alegadamente praticada em **.

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
        id: 'seeu_104',
        nome: 'incompetência (2ª variante)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
 
$dadosProcesso
 
Vistos etc.

*Trata-se de execução da pena em que verificou-se que a apenada está recolhida no Pavilhão Feminino do Complexo Penal Dr. João Chaves.

*Trata-se de execução da pena em que verificou-se que o apenado está recolhido na Cadeia Pública de Ceará Mirim*Penitenciária Estadual de Parnamirim.

Relatados.

Competente para a execução penal é o juízo do local onde recolhido o apenado.

*No caso, está a apenada recolhida em unidade prisional onde as execuções penais são da competência da 2ª Vara Regional de Execução Penal.

*No caso, está o apenado recolhido em unidade prisional onde as execuções penais são da competência da 2ª Vara Regional de Execução Penal.

Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução penal de pessoa que está recolhida em outra Comarca, determino a remessa dos autos para a 2ª Vara Regional de Execução Penal.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote5 parte2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE5_PARTE2);

MODELOS_SEEU.push(...MODELOS_SEEU_LOTE5_PARTE2);

// Lote 6: Modelos 126-150 (seeu_105 a seeu_129)
export const MODELOS_SEEU_LOTE6: ModeloSEEU[] = [
    {
        id: 'seeu_105',
        nome: 'agravo mantendo indeferimento LC',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do ev. * que indeferiu-lhe o livramento condicional.

O Ministério Público contraarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois ficou demonstrada a falta de comportamento satisfatório no cumprimento da pena (Código Penal, art. 83, III, a), já que se verifica que o apenado praticou * falta*s grave*s.

Sem razão o agravante, pois ficou demonstrada a falta do requisitos objetivo, pois o apenado praticou falta grave nos últimos doze meses, e subjetivo, já que demonstrou comportamento insatisfatório no cumprimento da pena, já que se verifica que o praticou * falta*s grave*s ((Código Penal, art. 83, III, a e b).

Neste sentido, registro a jurisprudência do Superior Tribunal de Justiça

AGRAVO REGIMENTAL NO HABEAS CORPUS. LIVRAMENTO CONDICIONAI. FALTA GRAVE. HISTÓRICO DE INFRAÇÕES DISCIPLINARES. REQUISITO SUBJETIVO NÃO ALCANÇADO. SUSPENSÃO DO BENEFÍCIO. SUFICIÊNCIA DA FUNDAMENTAÇÃO. ENTENDIMENTO DO STJ. DECISÃO MANTIDA.
1. (...).
2. Embora o cometimento de falta grave no curso da execução não interrompa o lapso temporal aquisitivo do livramento condicional, conforme previsto na Súmula n. 441 do STJ, a penalidade pode impedir a concessão do benefício por ausência de implementação do requisito subjetivo, com amparo no art. 83, III, do Código Penal.
3. Mantém-se integralmente a decisão agravada cujos fundamentos estão em conformidade com o entendimento do STJ sobre a matéria suscitada.
4. Agravo regimental desprovido.
(AgRg no HC n. 739.618/SP, relator Ministro João Otávio de Noronha, Quinta Turma, julgado em 21/6/2022, DJe de 24/6/2022.)

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. LIVRAMENTO CONDICIONAL INDEFERIDO. REQUISITO SUBJETIVO NÃO PREENCHIDO. AUSÊNCIA DE BOM COMPORTAMENTO CARCERÁRIO. HISTÓRICO DE INFRAÇÕES - CRIME E DESCUMPRIMENTO DAS REGRAS DA PRISÃO DOMICILIAR CONCEDIDA NO CONTEXTO DA PANDEMIA. LIMITAÇÃO DO PERÍODO DE AFERIÇÃO DO REQUISITO SUBJETIVO. IMPOSSIBILIDADE. RECURSO IMPROVIDO.
1. A verificação de mau comportamento carcerário ante a prática de faltas graves durante a execução da pena pode afastar o preenchimento do requisito subjetivo para o livramento condicional, obstando a concessão do benefício. Precedentes. [...] (HC n.º 468.851/RS, Rel. Ministra LAURITA VAZ, Sexta Turma, julgado em 13/11/2018, DJe 4/12/2018.
2. Não se aplica limite temporal à análise do requisito subjetivo, devendo ser analisado todo o período de execução da pena, a fim de se averiguar o mérito do apenado. Precedentes [...] (HC n.º 564.292/SP, Relator Ministro JOEL ILAN PACIORNIK, Quinta Turma, julgado em 16/6/2020, DJe 23/6/2020).
3. A circunstância de o paciente já haver se reabilitado, pela passagem do tempo, desde o cometimento das sobreditas faltas, não impede que se invoque o histórico de infrações praticadas no curso da execução penal, como indicativo de mau comportamento carcerário (HC n.º 347.194/SP, Relator Ministro FELIX FISCHER, julgado em 28/6/2016).
4. No caso, o apenado praticou duas faltas graves, suficientes para justificar o indeferimento do livramento condicional, uma consistente em descumprimento da prisão domiciliar eletronicamente monitorada e concedida em virtude do contexto da pandemia do coronavírus, e outra consistente em crime.
5. De fato, praticar novo delito durante a execução penal mostra descaso em relação à Justiça, já que o executado insiste no mundo do delito; e descumprir regras da prisão domiciliar demonstra ousadia, porque, ao invés de aproveitar a chance no regime de semiliberdade para se ressocializar, incidiu em falta grave, sobretudo no contexto da pandemia, que exige regras mais rigorosas e comprova que a falta, ainda que tenha sido cometida há mais de 12 meses, é recente.
6. Consoante entendimento pacificado do Superior Tribunal de Justiça é legítimo que o julgador considere, no caso concreto, motivadamente, a impossibilidade de concessão do benefício executório devido ao cometimento de infrações disciplinares há mais de 12 (doze) meses, em razão da existência do requisito cumulativo contido na alínea a do art. 83 do inciso III do Código Penal, o qual determina que será concedido livramento condicional apenas aos que demonstrarem bom comportamento durante a execução da pena (AgRg no HC 669.429/SP, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 24/08/2021, DJe 02/09/2021) 7. Agravo regimental não provido.
(AgRg no HC 706.781/MG, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 07/12/2021, DJe 13/12/2021).
 
AGRAVO REGIMENTAL NO HABEAS CORPUS. INDEFERIMENTO DE LIVRAMENTO CONDICIONAL. FALTA GRAVE NÃO ANTIGA. REQUISITO SUBJETIVO NÃO PREENCHIDO. MOTIVAÇÃO SUFICIENTE. LIMITAÇÃO DO PERÍODO DE AFERIÇÃO DO REQUISITO SUBJETIVO. IMPOSSIBILIDADE. RECURSO NÃO PROVIDO.
1. Firmou-se, nesta Corte Superior, entendimento no sentido de que, conquanto não interrompa a contagem do prazo para fins de livramento condicional (enunciado n. 441 da Súmula do STJ), a prática de falta grave impede a concessão do aludido benefício, por evidenciar a ausência do requisito subjetivo exigido durante o resgate da pena, nos termos do art. 83, III, do Código Penal [...] (AgRg no HC n.º 590.192/SP, Rel. Ministro REYNALDO SOARES DA FONSECA, Quinta Turma, julgado em 4/8/2020, DJe 13/8/2020) 2. Não se aplica limite temporal à análise do requisito subjetivo, devendo ser analisado todo o período de execução da pena, a fim de se averiguar o mérito do apenado. Precedentes. [...] (HC n.º 564.292/SP, Relator Ministro JOEL ILAN PACIORNIK, Quinta Turma, julgado em 16/6/2020, DJe 23/6/2020).
3. A circunstância de o paciente já haver se reabilitado, pela passagem do tempo, desde o cometimento das sobreditas faltas, não impede que se invoque o histórico de infrações praticadas no curso da execução penal, como indicativo de mau comportamento carcerário (HC n. 347.194/SP, Relator Ministro FELIX FISCHER, julgado em 28/6/2016).
4. No caso, o ora agravante praticou uma falta grave, consistente em subversão da ordem e disciplina, em 21/3/2020. O Tribunal havia ressaltado bem a gravidade do fato, ao deixar claro que ele praticou a infração quando estava em regime semiaberto, o que ocasionou sua regressão ao fechado. De fato, quando se viu em regime de semiliberdade, ao invés de aproveitar a chance para se reeducar, incorreu em indisciplina, demonstrando descaso e ousadia.
5. Desse modo, a depender das circunstâncias e da gravidade, uma única falta pode igualmente desmerecer o livramento condicional, como na espécie, porque na execução penal impera o princípio do in dubio pro societate, de modo que, na dúvida, deve-se decidir a favor da sociedade.
6. Agravo regimental não provido.
(AgRg no HC 704.573/SP, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 16/11/2021, DJe 19/11/2021)
Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu o livramento condicional ao agravante.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_106',
        nome: 'agravo mantendo LC',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

     Vistos etc.

     Agrava * da decisão de fl. *  que concedeu livramento condicional ao apenado, alegando que não atenderia ao requisito subjetivo, pois praticara **faltas médias e grave no decorrer da pena.
     Intimado, o agravado contrarrazoou insistindo na manutenção da decisão agravada.
     Relatados.

     Sem razão o agravante, pois, apesar de inexistir limitação legal quanto ao tempo necessário de cumprimento para se entender que o comportamento do apenado seria satisfatório, é certo que ocorreu reabilitação espontânea quando o apenado, restando pouco saldo de pena a cumprir, há mais de dois anos não pratica falta grave.
     Em assim sendo, por seus próprios fundamentos, mantenho a decisão que concedeu livramento condicional ao agravado.
     Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_107',
        nome: 'agravo mantendo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Agrava * da decisão de fl. * que converteu em privativa de liberdade as penas restritivas de direitos que recebera quando condenado por praticar delito capitulado no art. * do Código Penal.
Intimado, o Ministério Público contra-arrazoou insistindo na manutenção da decisão agravada.
Relatados.

*Sem razão o agravante, pois, conforme bem explicitado nas razões ministeriais de fls. *, foi ele advertido diversas vezes quanto às conseqüências do descumprimento das restrições de direitos impostas na sentença, sem que tal importasse em mudança de seu comportamento.
***Sem razão o agravante, pois a situação relatada nestes autos encontra-se exposta no art. 118, primeira parte, da Lei nº 7210/84, como causa impositiva de regressão de regime de cumprimento de pena privativa de liberdade, e sobre a qual decidiu a Suprema Corte não ser necessário que o crime doloso tenha sido objeto de sentença condenatória transitada em julgado.
Afinal, "a prática de 'fato definido como crime doloso', para fins de aplicação da sanção administrativa da regressão, não depende de trânsito em julgado da ação penal respectiva" (HC 93782, Relator(a): Min. RICARDO LEWANDOWSKI, Primeira Turma, julgado em 16/09/2008).
Nesse sentido:
EXECUÇÃO PENAL. HABEAS CORPUS. PRÁTICA DE CRIME DOLOSO PELO CONDENADO. FALTA GRAVE. REGRESSÃO DE REGIME. DESNECESSIDADE DE SENTENÇA CONDENATÓRIA TRANSITADA EM JULGADO. PRECEDENTES DO STF. ORDEM DENEGADA. 1. A Lei de Execução Penal não exige o trânsito em julgado de sentença condenatória para a regressão de regime, bastando, para tanto, que o condenado tenha "praticado" fato definido como crime doloso (art. 118, I da LEP). 2. Ante o exposto, denego a ordem de habeas corpus. (HC 97218, Relª Min. ELLEN GRACIE, Segunda Turma, julgado em 12/05/2009)
HABEAS CORPUS. PROCESSO PENAL E DIREITO PENAL. SUBSTITUTIVO DE RECURSO CONSTITUCIONAL. INADEQUAÇÃOO DA VIA ELEITA. EXECUÇÃO PENAL. FALTA GRAVE. PRÁTICA DE NOVO CRIME. ART. 118, I, DA LEI 7.210/1984. REGRESSÃO DE REGIME.    1. (...).    2. O art. 118, I, da Lei 7.210/1984 prevê a regressão de regime se o apenado "praticar fato definido como crime doloso ou falta grave".     3. Para caracterização do fato, não exige a lei o trânsito em julgado da condenação criminal em relação ao crime praticado. Precedentes.    4. Habeas corpus extinto sem resolução de mérito. (HC 110881, Relator(a):  Min. MARCO AURÉLIO, Relatora p/ Acórdão:  Min. ROSA WEBER, Primeira Turma, julgado em 20/11/2012).
HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. RESSALVA DO ENTENDIMENTO PESSOAL DA RELATORA. EXECUÇÃO PENAL. PRÁTICA DE CRIME DOLOSO DURANTE A EXECUÇÃO DA PENA. FALTA GRAVE. ANOTAÇÃO. TRÂNSITO EM JULGADO. PRESCINDIBILIDADE. REGRESSÃO E PERDA DE 1/3 DOS DIAS REMIDOS. CABIMENTO. REINÍCIO DO PRAZO PARA A OBTENÇÃO DO BENEFÍCIO DA PROGRESSÃO DE REGIME. LEGALIDADE. RECLASSIFICAÇÃO DA CONDUTA CARCERÁRIA. POSSIBILIDADE. ORDEM DE HABEAS CORPUS NÃO CONHECIDA. 1. (...). 3. Basta o cometimento do crime doloso para reconhecimento da falta grave, sendo prescindível o trânsito em julgado da condenação para a aplicação das sanções disciplinares. Precedentes. 4. O cometimento de falta grave pelo condenado acarreta a regressão de regime e a perda de até 1/3 dos dias remidos, sem que se vislumbre ofensa ao direito adquirido ou à coisa julgada. Precedentes do Superior Tribunal de Justiça. 5. Segundo entendimento fixado por esta Corte, o cometimento de falta disciplinar de natureza grave pelo Executando acarreta o reinício do cômputo do interstício necessário ao preenchimento do requisito objetivo para a concessão do benefício da progressão de regime (EREsp 1.176.486/SP, 3.ª Seção, Rel. Min. NAPOLEÃO NUNES MAIA FILHO, julgamento concluído em 28/03/2012), iniciando-se o novo período aquisitivo a partir da data da última infração disciplinar. 6. A reclassificação da conduta carcerária em decorrência do cometimento de falta grave segue a intencionalidade normativa do art. 112 da Lei de Execuções Penais, sendo elemento relevante para o exame sobre a viabilidade ou não de conceder ao apenado benefícios da execução penal. 7. Ordem de habeas corpus não conhecida. (HC 281.536/RS, Rel. Ministra LAURITA VAZ, QUINTA TURMA, julgado em 06/05/2014, DJe 13/05/2014)
HABEAS CORPUS. EXECUÇÃO PENAL. PACIENTE CONDENADO POR CRIME DE FURTO QUALIFICADO. PROGRESSÃO AO REGIME ABERTO. PRÁTICA DE NOVO CRIME DOLOSO. REGRESSÃO PARA O REGIME FECHADO. POSSIBILIDADE. PRÁTICA DE FATO DEFINIDO COMO CRIME DOLOSO. TRÂNSITO EM JULGADO DE SENTENÇA PENAL CONDENATÓRIA. DESNECESSIDADE. HABEAS CORPUS DENEGADO.1. Nos termos do art. 118 da Lei de Execução Penal, a transferência do condenado, a título de regressão, pode ocorrer para qualquer dos regimes mais rigorosos. Precedentes. 2. Na hipótese, tendo obtido a progressão ao regime aberto, o Paciente foi preso em flagrante delito pela suposta prática dos crimes tipificados no art. 33, caput, da Lei n.º 11.343/2006, e no art. 244-B da Lei n.º 8.069/90. Após denunciado e ouvido pelo Juízo das Execuções, foi corretamente decretada a sua regressão do regime aberto ao fechado, não se constatando, pois, o apontado constrangimento ilegal. 3. A jurisprudência desta Corte Superior de Justiça é uníssona ao afirmar ser prescindível o trânsito em julgado de sentença penal condenatória para a aplicação das sanções disciplinares cabíveis em função do cometimento de crime doloso no decorrer da execução penal. Precedentes. 4. Ordem de habeas corpus denegada. (HC 220.607/MG, Rel. Ministra LAURITA VAZ, QUINTA TURMA, julgado em 17/09/2013, DJe 25/09/2013)

*Sem razão o agravante, pois, conforme jurisprudência consolidada da Câmara Criminal do Tribunal de Justiça do Rio Grande do Norte, o não recolhimento do apenado em regime aberto ou semiaberto ao recolhimento noturno configura fuga, sendo exemplo as seguintes decisões:
AGRAVO EM EXECUÇÃO CRIMINAL. PACIENTE QUE DEIXOU DE COMPARECER AO ESTABELECIMENTO PRISIONAL ONDE CUMPRIA PENA NO REGIME SEMIABERTO. DECISÃO DO JUÍZO DA EXECUÇÃO QUE DETERMINOU A REGRESSÃO PARA O REGIME FECHADO E DECLAROU A PERDA DOS DIAS REMIDOS. JUSTIFICAÇÃO INIDÔNEA. FALTA GRAVE CONFIGURADA. CONHECIMENTO E DESPROVIMENTO DO AGRAVO QUE SE IMPÕE.
- Nos termos do § 1º do art. 13 do Provimento da Corregedoria de Justiça, será considerado foragido o apenado que, no regime semiaberto ou aberto, não retornar ao estabelecimento prisional pelo prazo consecutivo de 03 (três) dias.
- Estando o instituto da fuga regulamentado pelo Provimento supra citado, está o julgador adstrito à constatação da situação fática subsumível à norma regulamentar.
(Agravo Em Execução Criminal n° 2014.001621-9, Relator: Desembargador Glauber Rêgo, j. 11.03.2014).

AGRAVO EM EXECUÇÃO CRIMINAL. REGRESSÃO DO REGIME DE CUMPRIMENTO DA PENA DO SEMIABERTO PARA O FECHADO. PRETENDIDA MANUTENÇÃO DO REGIME SEMIABERTO. IMPOSSIBILIDADE. APENADO QUE DEIXOU DE SE RECOLHER NO PERÍODO NOTURNO. FATO CONSIDERADO COMO FUGA, FACE ULTRAPASSAR LAPSO DE 03 (TRÊS) DIAS, NOS TERMOS DO ART. 13, §1º, DO PROVIMENTO N.º 31/2008 DA CORREGEDORIA DO TJ/RN. FALTA GRAVE CARACTERIZADA. REGRESSÃO QUE SE IMPÕE. INTELIGÊNCIA DOS ARTS. 50 E 118, DA LEI DE EXECUÇÃO PENAL. RECURSO CONHECIDO, MAS DESPROVIDO. (Agravo Em Execução Criminal n° 2013.016575-3, Relatora: Desembargadora Maria Zeneide Bezerra, j. 19.11.2013).

CONSTITUCIONAL E EXECUÇÃO PENAL. HABEAS CORPUS. REGRESSÃO DE REGIME DE CUMPRIMENTO DE PENA. APENADO SUJEITO AO REGIME SEMI-ABERTO. NÃO COMPARECIMENTO AO RECOLHIMENTO NOTURNO. FALTA GRAVE CARACTERIZADA. DENEGAÇÃO DA ORDEM.
- Configura fuga, caracterizando, assim, falta grave a ensejar a regressão do regime de cumprimento de pena, nos moldes do art. 118 da Lei de Execução Penal (LEP), o apenado que estando cumprido pena no regime semi-aberto, não comparece ao recolhimento noturno.
(Habeas Corpus Com Liminar n.° 2011.000637-4; relatora: Juíza convocada Berenice Capuxú de Araújo Roque; julgado em 17.03.2011).

CONSTITUCIONAL E EXECUÇÃO PENAL. HABEAS CORPUS. REGRESSÃO DE REGIME. APENADO SUJEITO AO REGIME SEMI-ABERTO QUE DEIXA DE COMPARECER REITERADAS VEZES À UNIDADE PRISIONAL DURANTE O RECOLHIMENTO NOTURNO. FALTA GRAVE. JUSTIFICATIVA INSATISFATÓRIA. IRRELEVÂNCIA DA APRESENTAÇÃO ESPONTÂNEA. DENEGAÇÃO DA ORDEM.
O comportamento do paciente que deixa de comparecer durante o período noturno para cumprimento da reprimenda a que estava obrigado por força do regime prisional semi-aberto, configura fuga, cometendo, desta forma, falta tida como grave e, por decorrência, deve ser punido com a regressão de regime, sobretudo porque insatisfatórias as justificativas e irrelevante a apresentação espontânea. Denegação da ordem.
(Habeas Corpus Com Liminar n° 2011.000415-0; relator: Desembargador Virgílio Macêdo Jr., julgado em 24.02.2011).

*Sem razão o agravante, pois, conforme jurisprudência consolidada do Superior Tribunal de Justiça, a Lei n.º 8072/90, em seu art. 2.º, § 2º, não diferencia a natureza da reincidência para imponer o cumprimento de 3/5 (três quintos) da pena.  Apenas distingue entre o apenado primário (que deve cumprir 2/5 da pena) e o reincidente (que deve cumprir 3/5 da reprimenda), sem diferenciação entre condenação anterior por crime comum ou por crime hediondo ou equiparado.
Neste sentido:
PENAL. PROCESSUAL PENAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. EXECUÇÃO PENAL. PROGRESSÃO DE REGIME. CRIME HEDIONDO. REINCIDÊNCIA. DELITO COMETIDO SOB A ÉGIDE DA LEI N.º 11.464/2007. NECESSIDADE DE CUMPRIMENTO DE 3/5 DA PENA PARA FINS DE PROGRESSÃO DE REGIME.
1. Na esteira dos recentes precedentes do Supremo Tribunal Federal e desta Corte Superior de Justiça, é incabível o habeas corpus substitutivo do recurso ordinário constitucionalmente previsto.
2. A inadequação da via eleita, contudo, não desobriga este Tribunal Superior de, ex officio, fazer cessar manifesta ilegalidade que importe no cerceamento do direito de ir e vir do paciente.
3. Em se tratando de crime hediondo praticado na vigência da Lei n.º 11.464/2007, é exigido, para fins de progressão de regime, o cumprimento dos lapsos temporais de 2/5 (dois quintos) da pena, se o apenado for primário, e de 3/5 (três quintos), se reincidente.
4. Consoante a orientação jurisprudencial desta Corte Superior, o § 2º do art. 2º da Lei n.º 8.072/90, modificado pela Lei n.º 11.464/2007, não faz distinção entre reincidência comum ou específica, devendo, portanto, incidir a fração de 3/5 a todos os agentes reincidentes, independentemente da natureza do delito antes cometido. Precedentes.
5. Writ não conhecido.
(HC 264.841/RJ, Rel. Ministra ALDERITA RAMOS DE OLIVEIRA (DESEMBARGADORA CONVOCADA DO TJ/PE), SEXTA TURMA, julgado em 04/06/2013, DJe 12/06/2013) (grifei).

HABEAS CORPUS. EXECUÇÃO PENAL. TRÁFICO DE DROGAS. RÉU REINCIDENTE. DELITO COMETIDO SOB A ÉGIDE DA LEI N.º 11.464/07. NECESSIDADE DE CUMPRIMENTO DE 3/5 (TRÊS QUINTOS) DA PENA PARA FINS DE PROGRESSÃO DE REGIME. REQUISITO OBJETIVO NÃO ATINGIDO. HABEAS CORPUS DENEGADO.
1. Inexiste constrangimento ilegal na negativa da progressão de regime ao Paciente, uma vez que o delito foi praticado sob a égide della Lei n.º 11.464/07, o condenado é reincidente e não implementou o requisito objetivo de cumprimento 3/5 (três quintos) da pena.
2. A Lei n.º 11.464/07 afastou do ordenamento jurídico o regime integral fechado imposto aos condenados por crimes hediondos e equiparados, assegurando-lhes a progressão de regime prisional após o cumprimento de 2/5 (dois quintos) da pena, se primário, e 3/5 (três quintos), se reincidente, sem distinção entre condenação anterior por crime comum, como no caso, ou por hediondo ou equiparado. Precedente.
3. Habeas corpus denegado.
(HC 239.682/MG, Rel. Ministra LAURITA VAZ, QUINTA TURMA, julgado em 21/06/2012, DJe 29/06/2012).

EXECUÇÃO PENAL. TRÁFICO DE DROGAS. CAUSA DE DIMINUIÇÃO DE PENA PREVISTA NO ART. 33, § 4º, DA LEI Nº 11.343/2006. CRIME HEDIONDO.
PROGRESSÃO DE REGIME E LIVRAMENTO CONDICIONAL. PRAZOS DA LEI N.º 11.464/2007 QUE DEVEM SER RESPEITADOS. CONSTRANGIMENTO ILEGAL NÃO EVIDENCIADO. AGRAVO DESPROVIDO.
I. A aplicação da causa de diminuição de pena prevista no art. 33, § 4º, da Lei nº 11.343/2006 não desnatura a natureza hedionda do crime de tráfico ilícito de entorpecentes e drogas afins.
II. A causa de diminuição de pena prevista no art. 33, § 4º, da Lei nº 11.343/2006 não constitui tipo penal distinto do caput do mesmo artigo, não havendo, portanto, que se falar em concessão de progressão de regime ou de livramento condicional com o cumprimento dos prazos estabelecidos para os crimes comuns.
III. Praticado delito hediondo na vigência da Lei n.º 11.464/2007, devem ser respeitados os lapsos temporais de 2/5 (dois quintos) da pena, se o apenado for primário, e de 3/5 (três quintos), se reincidente, para a progressão de regime, bem como o prazo disposto no art. 44, parágrafo único, da Lei n.º 11.343/2006 para o livramento condicional.
IV. Agravo desprovido, nos termos do voto do Relator.
(AgRg no HC 206.070/MS, Rel. Ministro GILSON DIPP, QUINTA TURMA, julgado em 17/05/2012, DJe 24/05/2012).

***
*Sem razão o agravante, pois, conforme bem explicitado nas razões ministeriais e na decisão agravada, ele fugiu da prisão durante o cumprimento da pena, continuando até hoje foragido, estando essa falta grave ainda dependente de sua recaptura para cumprimento do devido processo legal de apuração, do qual faz parte sua oitiva para justificação que entenda cabível.
Por oportuno, lembro que exatamente em razão de estar foragido, não é possível ouvir-se em audiência apenado não localizável.
*No caso, estando o apenado foragido, não há como se entender que tenha satisfatório comportamento durante a execução da pena, inclusive porque ela não está sendo executada.
Como anotou a eminente Ministra Assusete Magalhães, ao julgar habeas corpus deste Estado, "a permanência da fuga do reeducando impossibilita, ao Juízo competente, homologar, dentro das balizas constitucionais e legais, a sanção por falta disciplinar, o que, evidentemente, não pode chancelar a concessão do pretendido benefício". (HC 265.186/RN, SEXTA TURMA, julgado em 05/09/2013, DJe 08/05/2014)
***
Por oportuno, registro que apesar do disposto no verbete 533 da  Súmula do STJ, a jurisprudência do Supremo Tribunal Federal é iterativa no sentido de que a oitiva em juízo do apenado, devidamente acompanhado de seu defensor e na presença do Ministério Público, supre a irregularidade consistente na falta do procedimento disciplinar ou sua realização sem participação da defesa, não se podendo falar em inobservância dos preceitos constitucionais do contraditório e da ampla defesa. "Cuida-se, na espécie, do princípio da instrumentalidade das formas, segundo o qual se consideram válidos os atos que, realizados de outro modo, lhe preencham a finalidade essencial (art. 154 do CPC) e, ainda que a lei prescreva determinada forma, sem cominação de nulidade, o juiz poderá, mesmo que realizado de outro modo, considerá-lo hígido quando tenha alcançado sua finalidade essencial (art. 244 do CPC)". (RHC 109847).
Em outras palavras, o procedimento administrativo disciplinar, para se aferir o cometimento de falta grave, é suprido pela realização de audiência de justificação, desde que o apenado esteja devidamente representado pela defesa técnica, conforme asseguram os princípios do contraditório e da ampla defesa.
Nesse sentido tem-se manifestado a jurisprudência do Supremo Tribunal, como se observa dos seguintes julgados:
PENAL, PROCESSUAL PENAL E CONSTITUCIONAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ORDINÁRIO CONSTITUCIONAL. COMPETÊNCIA DO SUPREMO TRIBUNAL FEDERAL PARA JULGAR HABEAS CORPUS: CF. ART. 102, I, “D” E “I”. ROL TAXATIVO. MATÉRIA DE DIREITO ESTRITO. INTERPRETAÇÃO EXTENSIVA: PARADOXO. ORGANICIDADE DO DIREITO. PRÁTICA DE FALTA GRAVE DURANTE O CUMPRIMENTO DE PENA PRIVATIVA DE LIBERDADE. INSTAURAÇÃO DE PROCEDIMENTO ADMINISTRATIVO DISCIPLINAR. ALEGAÇÃO DE AUSÊNCIA DE DEFESA TÉCNICA NO ATO DO INTERROGATÓRIO. NULIDADADE SANÁVEL COM A OITIVA DO CONDENADO EM AUDIÊNCIA DE JUSTIFICAÇÃO. ORDEM DE HABEAS CORPUS DENEGADA. 1.“A Lei de Execuções Penais não impõe a obrigatoriedade de instauração do procedimento administrativo disciplinar, sendo, entretanto, imprescindível a realização de audiência de justificação, para que seja dada a oportunidade ao Paciente do exercício do contraditório e da ampla defesa”. 2. A oitiva do condenado em audiência de justificação realizada na presença do defensor e do Ministério Público supre eventual nulidade decorrente da ausência ou deficiência de defesa técnica no curso de Procedimento Administrativo Disciplinar instaurado para apurar a prática de falta grave durante o cumprimento da pena privativa de liberdade. Precedentes: HC 109.536, Primeira Turma, Relatora a Ministra Cármen Lúcia, DJ de 15.06.12; RHC 109.847, Primeira Turma, Relator o Ministro Dias Toffoli, DJ de 06.12.11; HC 112.380, Primeira Turma, Relator o Ministro Dias Toffoli, DJ de 22.06.12.     3. In casu, a) o Juízo da Execução deixou de homologar o PAD sob o fundamento de ausência de defesa técnica no ato do interrogatório, destacando que a nomeação de advogado dativo vinculado ao órgão acusador (SUSEP) para atuar no feito violaria os princípios do contraditório e da ampla defesa; b) A Corte Estadual, no julgamento do agravo em execução interposto pelo Ministério Público afirmou que o ato do interrogatório realizado na via administrativa não acarretou qualquer prejuízo à defesa, bem como determinou fosse realizada audiência de justificação, nos termos do artigo 118, § 2º, da LEP.   4. A competência originária do Supremo Tribunal Federal para conhecer e julgar habeas corpus está definida, taxativamente, no artigo 102, inciso I, alíneas “d” e “i”, da Constituição Federal, sendo certo que os pacientes não estão arrolados em nenhuma das hipóteses sujeitas à jurisdição desta Corte, por isso que inadmissível o writ substitutivo de recurso ordinário. 5. Outrossim, no caso sub examine, não há excepcionalidade que justifique a concessão, ex officio, da ordem.     6. Ordem de habeas corpus denegada. (HC 110.278, rel. Min. Luiz Fux, Primeira Turma, DJe 15/08/2013)    
RECURSO EXTRAORDINÁRIO COM AGRAVO. EXECUÇÃO PENAL. AUSÊNCIA DE DEFESA TÉCNICA EM PROCEDIMENTO ADMINISTRATIVO DISCIPLINAR. RECONHECIMENTO DE FALTA GRAVE IN JUÍZO (AUDIÊNCIA DE JUSTIFICAÇÃO), COM A PRESENÇA DE DEFENSOR PÚBLICO: INEXISTÊNCIA DE CONTRARIEDADE AO ART. 5º, INC. LIV E LV, DA CONSTITUIÇÃO DA REPÚBLICA. JULGADO RECORRIDO EM DESARMONIA COM A JURISPRUDÊNCIA DO SUPREMO TRIBUNAL. AGRAVO E RECURSO EXTRAORDINÁRIO PROVIDOS. ( ARE 689.004, Rel. Min. Cármen Lúcia, DJe 15/06/2012)
Recurso ordinário em habeas corpus. Falta grave. Fuga. Pretendida nulidade do ato que reconheceu a prática da falta de natureza grave por ausência de procedimento administrativo disciplinar (PAD). Não ocorrência. Nulidade suprida na audiência de justificação. Oitiva do paciente em juízo, devidamente assistido por uma defensor e na presença do Ministério Público. Observância do preceitos constitucionais do contraditório e da ampla defesa (art. 5º, incisos LIV e LV). Finalidade essencial pretendida no procedimento administrativo disciplinar alcançada de forma satisfatória. Princípio da instrumentalidade das formas (art. 154 e 244 do CPC). Aplicabilidade. Recurso ao qual se nega provimento. Reconhecimento da falta grave que implicou na perda integral dos dias remidos. Impossibilidade. Revogação do tempo a ser remido limitado ao patamar máximo de 1/3 (um terço). Lei nº 12.433/11. Novatio legis in mellius. Possibilidade de retroagir para beneficiar o paciente. Princípio da retroatividade da lei penal menos gravosa. Ordem de habeas corpus concedida de ofício. 1. Ao contrário do que afirma a recorrente, foi instaurado procedimento administrativo disciplinar (PAD nº 017/2009), o qual não foi homologado pelo Juízo de Direito da Vara de Execução Criminal de Novo Hamburgo/RS, que entendeu que a defesa do apenado deveria ser feita por advogado habilitado. 2. No entanto, essa irregularidade foi suprida pela repetição do procedimento em juízo, quando foi feita a oitiva do paciente, devidamente acompanhado de seu defensor e na presença do Ministério Público estadual. Portanto, não há que se falar em inobservância dos preceitos constitucionais do contraditório e da ampla defesa no ato que reconheceu a prática de falta grave pelo paciente. 3. Aquele juízo na audiência de justificação, ao não potencializar a forma pela forma, que resultaria na pretendida nulidade do PAD pela defesa, andou na melhor trilha processual, pois entendeu que aquele ato solene teria alcançando, de forma satisfatória, a finalidade essencial pretendida no procedimento administrativo em questão. Cuida-se, na espécie, do princípio da instrumentalidade das formas, segundo o qual se consideram válidos os atos que, realizados de outro modo, lhe preencham a finalidade essencial (art. 154 do CPC) e, ainda que a lei prescreva determinada forma, sem cominação de nulidade, o juiz poderá, mesmo que realizado de outro modo, considerá-lo hígido quando tenha alcançado sua finalidade essencial (art. 244 do CPC). 4. Recurso ao qual se nega provimento. 5. Caso de concessão de habeas corpus de ofício, pois o reconhecimento da prática de falta grave pelo paciente implicou na perda integral dos dias a serem remidos de sua pena, o que, à luz do novo ordenamento jurídico, não mais é permitido. 6. A nova redação conferida pela Lei nº 12.433/11 ao art. 127 da Lei de Execução Penal, limita ao patamar máximo de 1/3 (um terço) a revogação do tempo a ser remido. 7. Por se tratar de uma novatio legis in mellius, nada impede que ela retroaja para beneficiar o paciente no caso concreto. Princípio da retroatividade da lei penal menos gravosa. 8. Ordem de habeas corpus concedida de ofício. (RHC 109847, Rel:  Min. DIAS TOFFOLI, Primeira Turma, julgado em 22/11/2011)
      
Não custa lembrar que o Supremo Tribunal Federal é intérprete último da Constituição da República, e que a matéria é constitucional, pois trata do Direito de Defesa.
**Sem razão o agravante, pois, apesar do juízo ter decidido sem ouvir o Ministério Público, não se anotou qual o prejuízo sofrido pela parte, ou se o atendimento à norma de fundo processual teria modificado em algum ponto a decisão tomada.
Neste sentido:
HABEAS CORPUS. PROCESSO PENAL. TRÁFICO ILÍCITO DE ENTORPECENTES. PROCEDIMENTO. LEI 10.409/2002. NULIDADE. PREJUÍZO. 1. A demonstração de prejuízo, a teor do art. 563 do CPP, é essencial à alegação de nulidade, seja ela relativa ou absoluta, eis que, conforme já decidiu a Corte, "o âmbito normativo do dogma fundamental da disciplina das nulidades - pas de nullité sans grief - compreende as nulidades absolutas" (HC 81.510, rel. Min. Sepúlveda Pertence, 1ª Turma, unânime, DJ de 12.4.2002). 2. Ordem indeferida (HC 85155, Relator(a):  Min. ELLEN GRACIE, Segunda Turma, julgado em 22/03/2005).

Em assim sendo, por seus próprios fundamentos, historicamente detalhados no parecer ministerial de fls. *, mantenho a decisão que converteu em privativa de liberdade as penas restritivas de direitos impostas ao agravante.
Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_108',
        nome: 'agravo liminar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o Ministério Público da decisão de fl. *, que deferiu o livramento condicional ao apenado, alegando ausência de qualquer fundamentação, enquanto não atende o beneficiário ao requisito subjetivo, dado o tempo em que permaneceu foragido do cumprimento da pena..

Relatados.

Recebi os autos para apreciação liminar do recurso, dada a possibilidade de lesão grave e de difícil correção futura, pois, estando o apenado atualmente preso em regime fechado, sua soltura em razão do benefício combatido poderá importar em fuga.

Em assim sendo, suspendo cautelarmente a decisão de fls. ****, mandando dar vista dos autos à defesa para que possa contraarrazoar o recurso.

Cientifique-se o estabelecimento prisional.

Diligencie-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_109',
        nome: 'regressão definitiva falta grave',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumprindo pena em regime semiaberto, o apenado fugiu em  XXX (fl. 45), sendo recapturado em XXX.

Oportunizado ao apenado justificar-se, relatou que outros presos quebraram a grade, tendo ele aproveitado para fugir.

Opinou o Ministério Público pela regressão de regime, enquanto a Defensora observou que o afastamento daquele da Comarca se deu em razão de ameaças de morte recebidas.

Relatados.

***

Preliminarmente anoto prescindível a defesa do penitente por meio de advogado durante a realização do procedimento administrativo, desde que seja concedida oportunidade de exercício da ampla defesa em juízo, tal como ocorreu neste caso.

Esta foi a tese que o Supremo Tribunal Federal, no RE 972.598, com repercussão geral reconhecida, fixou  acerca da nulidade do procedimento disciplinar em razão do apenado ter sido ouvido administrativamente sem a presença de defensor:

"A oitiva do condenado pelo juízo da execução penal, em audiência de justificação realizada na presença do defensor e do Ministério Publico, afasta a necessidade de prévio procedimento administrativo, e assim como supre eventual ausência ou insuficiência de defesa técnica no PAD instaurado para apurar a prática de falta greve durante o cumprimento da pena".

Ademais, a jurisprudência consolidada do Superior Tribunal de Justiça já anotara, sobre a ausência de defesa técnica em procedimento para apuração de falta grave na execução penal, que isso só caracteriza nulidade quando evidenciado prejuízo efetivo para a defesa.

Neste termos:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. FALTA DISCIPLINAR GRAVE. APONTADA VIOLAÇÃO AO CONTRADITÓRIO E À AMPLA DEFESA. NÃO OCORRÊNCIA. INDICADO O PATROCÍNIO DA DEFESA DO REEDUCANDO. DECISÃO MANTIDA. AGRAVO REGIMENTAL NÃO PROVIDO. [...] 2. Ademais, "[q]uanto à necessidade de a defesa técnica do paciente presenciar os depoimentos das testemunhas e o do próprio sentenciado, prestados no procedimento administrativo disciplinar instaurado para a apuração de falta grave, este Superior Tribunal de Justiça já se pronunciou em diversas ocasiões no sentido de que é imprescindível a demonstração de prejuízo para reconhecimento de eventual nulidade, ônus do qual não se desincumbiu a combativa defesa - em consonância com o princípio pas de nullite sans grief, consagrado no art. 563 do Código de Processo Penal" (AgRg no HC n. 736.555/RJ, relator Ministro Jesuíno Rissato (Desembargador Convocado do TJDFT), Quinta Turma, DJe de 27/6/2022.) [...] (AgRg no HC n. 808.696/SC, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 24/4/2023, DJe de 26/4/2023.)

***

Ultrapassado este ponto registro que a  Lei nº 7.210/84, no seu art. 118, inc. I, última figura, dispõe sobre a transferência do apenado para  regime  mais rigoroso de cumprimento de  pena privativa  de liberdade quando pratica falta grave, enquanto  o art.  50, inc. II, do mesmo estatuto esclarece, que a  comete  o condenado que fugir.

No caso, verifica-se inaceitável a justificativa apresentada, porque não pode o apenado decidir, a seu talante, quando sair do cárcere mesmo que a oportunidade tenha sido criada por outros apenados.

Isto posto, homologo a falta grave e mantenho fechado o regime de execução da pena privativa de liberdade aplicada à apenada, bem como considero perdido um quinto (dada a atenuante da confissão) do tempo já remido e o que viesse a ser remido até a data da falta grave.

P.R. I. Atualize-se a Guia de Execução Penal. Cópia desta decisão servirá como ofício dando ciência  ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_110',
        nome: 'Cumprimento da pena art 75 indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

**Trata-se de execução penal em que a Defesa pugnou pela extinção da pena, em razão do apenado ter completado 30 anos de pena (evento **).

**Trata-se de execução penal em desfavor do apenado acima nominado, em que o SEEU indicou o témino da pena, em razão do apenado ter completado o limite de 30 anos (evento **).

Instado a se manifestar, o Ministério Público opinou pelo indeferimento do pedido (evento **).

Relatados. Decido.

Com razão o Ministério Público.

Isso porque o artigo 75 do CP, em sua redação anterior a Lei 13.964/2019, mais benéfica ao apenado, apesar de limitar o tempo de cumprimento da pena a 30 anos, em seu § 2º aduz:

   § 2º - Sobrevindo condenação por fato posterior ao início do cumprimento da pena, far-se-á nova unificação, desprezando-se, para esse fim, o período de pena já cumprido.

Assim, em que pese o apenado está cumprido pena desde **, o último crime pelo qual foi condenado ocorreu em (data), onde lhe foi imposta pena de *** de reclusão, quando já havia cumprido *** das reprimendas anteriores.

Desse modo, desprezando o tempo cumprido, soma-se a pena da nova condenação, neste caso, ***, ao que restava para completar 30 anos, aqui, ***

**Isso quer dizer que a partir da data do último fato criminoso, ***(data), o apenado deve cumprir ***, terminando sua pena, portanto, somente em (data), antes, portanto, dos 30 anos previstos no art. 75 do Código Pebal.

**Isso quer dizer que a partir da data do último fato criminoso, ***(data), o apenado deve cumprir ***, ou, dado o determinado no art. 75 do Código Penal, terminará de cumprir a pena em (data somando 30 anos ao dia do último crime).

Friso que a jurisprudência é pacífica neste sentido, conforme segue:

AGRAVO REGIMENTAL EM HABEAS CORPUS. UNIFICAÇÃO DE PENAS. NOVO DELITO PRATICADO POSTERIORMENTE AO INÍCIO DA EXECUÇÃO. LIMITE TRINTENÁRIO. APLICAÇÃO DO ART. 75, § 2º, DO CP. AUSÊNCIA DE ILEGALIDADE. 1.Nos [...] termos do disposto no art. 75, § 2º, do CP, tendo sido o sentenciado condenado por fato criminoso posterior ao início do cumprimento da reprimenda, para efeitos de limitação trintenária ao cumprimento da pena, deve se fazer nova unificação, desprezando-se, para tanto, o período já cumprido. A incidência da referida regra se dá desde que iniciado o cumprimento da pena, sendo irrelevante a ocorrência de prévia unificação, sob pena de se subvertera ratio legis (AgRg no HC n. 366.107/SP, Ministro Felix Fischer, Quinta Turma, DJe 7/4/2017). 2 In casu, havia o cumprimento de uma execução penal, que foi interrompida pela fuga, voltando o seu curso em 2/3/2010, em razão da prática de novo delito, cabível, assim, a aplicação do art. 75, §2º, do Código Penal, sendo desnecessária decisão de unificação anterior. 3. Agravo regimental improvido. (STJ - AgRg no HC: 356501 MG 2016/0128093-7, Relator: Ministro SEBASTIÃO REIS JÚNIOR, Data de Julgamento: 14/08/2018, T6 - SEXTA TURMA, Data de Publicação: DJe22/08/2018)

Ante o exposto, ***indefiro o pedido da defesa e ***determino a retificação da GEP para fazer constar *** como data para o término da pena.

P.R.I. Ciência ao MP.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_111',
        nome: 'FERNANDO - REVOGAÇÃO DE UNIFICAÇÃO DE PP COM PRD',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução em que foram as penas unificadas em $penaTotalVEP de reclusão, a ser cumprida em regime $regimePenaVEP (evento XXXX).

A Defesa interpôs agravo em execução (evento XXXX) da decisão do evento XXXX que indeferiu pedido de ********reconsideração da revogação da decisão de unificação das penas ******* da decisão de unificação das penas (ev. XXXXX), arguindo em seu arrazoado (ev. XXXXX) que XXXXXX

Instado a se manifestar, o Ministério Público pronunciou-se pela manutenção da decisão agravada, considerando a impossibilidade do cumprimento simultâneo da pena privativa de liberdade em regime fechado e das penas restritivas de direitos (ev. XXXX)

Anoto ainda que o penitente encontra-se cumprindo pena PEA – Penitenciária Estadual de Alcaçuz /PES – Penitenciária Estadual do Seridó - / PERCM  - Penitenciária Estadual Rogério Coutinho Madruga/ Cadeia Pública de Nova Cruz / CPJC - Complexo Prisional João Chaves, conforme consulta SIAPEN desta data.

Relatados.

Inicialmente importa considerar que o apenado foi condenado à penas que unificadas totalizavam $penaTotalVEP, conforme decisão do evento XXX, sendo a primeira pena consistente em XXXXX de reclusão, em regime fechado, ação penal nº XXXXX (ev. XXX), enquanto a segunda pena restou fixada em XXXX de reclusão, em regime aberto, substituída por 02 (duas) penas restritivas de direitos, consistente em; a) prestação de serviços à comunidade ou entidade pública; b) prestação pecuniária em favor de entidade pública ou privada de destinação social fixada em 1/2 (meio) salário mínimo, podendo, ainda, consistir em prestação de outra natureza, se houver aceitação do beneficiário, ação penal nº XXXXXX (ev. XX).

Registro que a decisão de unificação restou prejudicada, uma vez que converteu as penas restritivas de direito em privativa de liberdade prematuramente e sem oportunizar ao apenado o cumprimento da pena pecuniária, já que é possível a sua integralização paralelamente ao regime fechado, merecendo reparo por este motivo.

Dispõe o art. 44, § 5º, do Código Penal que "sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior, podendo deixar de aplicá-la se for possível ao condenado cumpri-las concomitantemente.

De seu lado, a consolidada jurisprudência do Superior Tribunal de Justiça, interpretando tal dispositivo, afirma que " independentemente de a condenação à pena restritiva de direitos ser anterior ou posterior à sanção privativa de liberdade, a conversão ou não da pena restritiva de direitos em privativa de liberdade fica unicamente na dependência da compatibilidade de cumprimento simultâneo das sanções" (AgRg no REsp 1688238/MG, Rel. Ministro JOEL ILAN PACIORNIK, QUINTA TURMA, julgado em 25/06/2019, DJe 05/08/2019).

No caso, o apenado cumpre atualmente pena de reclusão em regime fechado, enquanto uma das penas substituídas na sentença da ação pena nº 0102147-95.2016.8.20.0104  consiste em pena pecuniária, podendo ser cumprida paralelamente.

Ademais, o STJ, evoluindo o pensando, passou a se posicionar da seguinte maneira sobre a matéria, verbis:

RECURSO ESPECIAL ADMITIDO COMO REPRESENTATIVO DA CONTROVÉRSIA. JULGAMENTO SUBMETIDO À SISTEMÁTICA DOS RECURSOS REPETITIVOS. EXECUÇÃO PENAL. PENA RESTRITIVA DE DIREITOS E PENA PRIVATIVA DE LIBERDADE. EXECUÇÃO SIMULTÂNEA. RECURSO ESPECIAL DESPROVIDO.
1. A lei contempla a possibilidade de conversão da pena restritiva de direitos quando o apenado vem a ser posteriormente condenado à pena privativa de liberdade. Inteligência dos arts. 44, § 5.º, do Código Penal e 181, § 1.º, e, da Lei n. 7.210/84.
2. Os arts. 44, § 5.º, do Código Penal e 181, § 1.º, e, da Lei n. 7.210/84, não amparam a conversão na situação inversa, qual seja, aquela em que o apenado já se encontra em cumprimento de pena privativa de liberdade e sobrevém nova condenação em que a pena corporal foi substituída por pena alternativa.
3. Em tais casos, a conversão não conta com o indispensável amparo legal e ainda ofende a coisa julgada, tendo em vista que o benefício foi concedido em sentença definitiva e, portanto, somente comporta a conversão nas situações expressamente previstas em lei, em especial no art. 44, §§ 4.º e 5.º, do Código Penal.
 4. A pena restritiva de direitos serve como uma alternativa ao cárcere. Logo, se o julgador reputou adequada a concessão do benefício, a situation do condenado não pode ser agravada por meio de interpretação que amplia o alcance do § 5.º do art. 44 do Código Penal em seu prejuízo, notadamente à vista da possibilidade de cumprimento sucessivo das penas.
5. Recurso especial desprovido, com a fixação da seguinte tese:
"Sobrevindo condenação por pena privativa de liberdade no curso da execução de pena restritiva de direitos, as penas serão objeto de unificação, com a reconversão da pena alternativa em privativa de liberdade, ressalvada a possibilidade de cumprimento simultâneo aos apenados em regime aberto e vedada a unificação automática nos casos em que a condenação substituída por pena alternativa é superveniente."
(REsp n. 1.925.861/SP, relatora Ministra Laurita Vaz, Terceira Seção, julgado em 27/4/2022, DJe de 28/6/2022.)

Anoto aqui que já decidi de maneira diversa, porém tenho por bem acompanhar o novo entendimento do STJ, revendo o posicionamento a ser adotado doravante.

Diante do exposto, torno sem efeito a decisão de unificação do evento XXX, mantenho o apenado no cumprimento da pena imposta pela sentença da ação penal nº XXXX,  de XXXXXX de reclusão em regime *****fechado *****semiaberto, por ser este o regime em cumprimento, enquanto mando intimar o apenado para efetuar o pagamento da prestação pecuniária imposta pela sentença condenatória da ação penal nº XXXXXXX, no prazo de 10 (dez) dias, qual seja, prestação pecuniária em favor de entidade pública ou privada de destinação social fixada em 1/2 (meio) salário mínimo, podendo, ainda, consistir em prestação de outra natureza, se houver aceitação do beneficiário enquanto suspendo o cumprimento da pena de prestação de serviços à comunidade, até a progressão para o regime aberto, considerando que este Juízo não tem competência para acompanhar o cumprimento desse tipo de pena.

P.R.I. Comunique-se ao estabelecimento penitenciário e expeça-se o competente Atesto de Pena unificador, com os devidos "lançamentos" no SEEU.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_112',
        nome: 'FERNANDO - REFORMA DE UNIFICAÇÃO EM RAZÃO DE ACORDAO REDUTOR DE UMA DAS PENAS',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução em que foram as penas unificadas em $penaTotalVEP de reclusão, a ser cumprida em regime fechado (evento XXXX).

Julgado o acórdão referente a ação penal nº XXXXX, foi a pena reduzida de XXXXXX dias para o patamar de XXXXX, conforme se observa na peça juntada aos autos (evento XX).

Anoto ainda que o penitente encontra-se cumprindo pena na na PEA – Penitenciária Estadual de Alcaçuz/ /PES – Penitenciária Estadual do Seridó - / PERCM  - Penitenciária Estadual Rogério Coutinho Madruga/ Cadeia Pública de Nova Cruz/ CPJC - Complexo Prisional João Chaves, conforme consulta SIAPEN desta data.

Relatados.

Resta evidente que a decisão de unificação restou prejudicada, uma vez que a pena de uma das ações penais foi reduzida, merecendo reparo por este motivo.

Diante do exposto, torno sem efeito a decisão de unificação do evento XXXX e unifico as penas em XXXXX de reclusão a pena privativa de liberdade, devendo continuar a cumprir no *******regime fechado, face ao saldo de pena e ******ao que consta do acórdão do evento ****.

P.R.I. Comunique-se ao estabelecimento penitenciário e expeça-se o competente Atesto de Pena unificador, com os devidos "lançamentos" no SEEU.

Transitada em julgado a sentença condenatória da pena somada, solicite-se ao Juízo de Direito da ***ª Vara da Comarca de Nova Cruz certidão informativa sobre o recolhimento da multa culminada juntamente à pena privativa de liberdade na ação penal nº ****.

$assinaturaJuizDireito

$rodape`,
    },
];

// Concatena lote6 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE6);

// Lote 6 - Parte 2: Modelos 113-119 (continuação de 126-150.txt)
export const MODELOS_SEEU_LOTE6_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_113',
        nome: 'FERNANDO - UNIFICAÇÃO - CORREÇÃO DE UNIFICAÇÃO FEITA DE OFÍCIO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução cujas penas totalizaram $penaTotalVEP, sendo XXXXX de reclusão e XXXX de detenção, no regime $regimePenaVEP (ações penais nºs XXXX) impostas a $partesPoloPassivo.

Registro aqui que, enquanto tramitavam no Juízo anterior, por erro de interpretação, as penas foram unificadas "de ofício" pela secretaria, por entenderem que, como não havia alteração de regime, não seria necessária a conclusão dos autos para apreciação do magistrado, como se observa nas certidões acostadas aos eventos XXX.

Por oportuno, registro que todas as ações penais transitaram em julgado.

Anoto que the penitente encontra-se custodiado na PEA – Penitenciária Estadual de Alcaçuz /PES – Penitenciária Estadual do Seridó - / PERCM  - Penitenciária Estadual Rogério Coutinho Madruga/ Cadeia Pública de Nova Cruz / CPJC - Complexo Prisional João Chaves, conforme informações do SIAPEN nesta data.

Relatados.

De início, registro que, ainda que mantido o regime anterior de cumprimento das penas unificadas, novas condenações prescindem, sempre e em qualquer hipótese, de decisão que as unifiquem ou somem, uma vez que podem ser elas tidas como continuação entre si ou não, análise que não pode ser realizada "de ofício" pela secretaria.

No caso em espécie, trata-se de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Dispõe o art. 111, da Lei de Execução Penal:

Art. 111. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.

Parágrafo Único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime”.

Na dicção do Superior Tribunal de Justiça:

“Cabe ao Juízo da Execução, nos termos do art. 111 da Lei 7.210/84, diante de condenações diversas, em um mesmo processo ou não, somar ou unificar as penas impostas ao sentenciado, no intuito de redefinir o regime prisional, não havendo falar-se em reformatio in pejus. (AgRg no HC 520.469/MS, Rel. Ministro NEFI CORDEIRO, SEXTA TURMA, julgado em 26/11/2019, DJe 03/12/2019)

De seu lado, a consolidada jurisprudência do Superior Tribunal Federal, interpretando tal dispositivo, afirma que:

"No caso de condenações diversas, não se espera o cumprimento de uma delas para executar-se a outra. Tem-se o somatório das penas e um novo enquadramento quanto ao regime a ser observado na execução. (…) Surge incoerente concluir de forma diversa, como se as sanções pudessem ser consideradas isoladamente, presentes os títulos judicias condenatórios que as veiculem" (HC 137.440, Primeira Turma, Rel. Min. Marco Aurélio, DJe de 30/08/2017).

EXECUÇÃO PENAL. ART. 111 DA LEP. UNIFICAÇÃO DE PENAS. RECLUSÃO COM DETENÇÃO SUPERVENIENTE. REPRIMENDAS DA MESMA NATUREZA. SOMATÓRIO.
POSSIBILIDADE. I - "A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade" (AgRg no HC n. 473.459/SP, Quinta Turma, Rel. Min. Reynaldo Soares da Fonseca, DJe de 01/03/2019). Precedentes do STF e desta Corte Superior de Justiça. Agravo regimental desprovido. (AgRg no REsp 1861665/ES, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 05/05/2020, DJe 15/05/2020).

Portanto, condenado às penas de reclusão e detenção, as reprimendas deverão ser somadas para fins de unificação de pena, por se tratarem de sanções de mesma espécie, qual seja, pena privativa de liberdade.

Por oportuno anoto a recente importante e esclarecedora diferenciação feita pelo Superior Tribunal de Justiça acerca da unificação das penas de reclusão e detenção:

“(...) a jurisprudência desta Corte Superior de Justiça faz distinção entre a fixação de regime inicial de cumprimento da pena e da unificação das penas para fins de execução penal. A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade. (...) Tratando-se de fixação de regime inicial, deve ser aplicado o regime correspondente para cada um dos crimes, pois aplica-se o disposto nos arts. 69 e 76 do CP e, não, o art. 111 da Lei de Execução Penal, que cuida da hipótese de unificação das penas na execução” (AgRg no REsp 1939600/GO, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 22/06/2021, DJe 28/06/2021).

********Registro que a data-base para futuros benefícios deve ser a da ultima falta grave, a do último crime ou do último atingimento aos requisitos objetivo e subjetivo para progressão deferida, a que for mais recente. (UTILIZAR SÓ EM CASOS ESPECÍFICOS, ONDE HÁ PROGRESSÃO ANTERIOR)

********Registro que a data-base para futuros benefícios deve ser a da ultima falta grave.

********Registro que a data-base para futuros benefícios deve ser a da ultima prisão.

Isto posto, unifico em XXX de reclusão a pena privativa de liberdade em execução nestes autos, a ser cumprida inicialmente em regime ****fechado, *****face ao saldo de pena, ao regime já em cumprimento e ao que consta da última sentença condenatória., bem como ******na decisão de regressão de regime.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador, com os devidos "lançamentos" no SEEU.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_114',
        nome: 'Agravo regressão',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ***  que regrediu-lhe o regime prisional em razão da prática de novo crime.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois antigo e sempre referido acórdão do Min. RICARDO LEWANDOWSKI ensina que  "a prática de 'fato definido como crime doloso', para fins de aplicação da sanção administrativa da regressão, não depende de trânsito em julgado da ação penal respectiva" (HC 93782, 16/09/2008).

Ademais, a jurisprudência do STJ é cristalizada nesse sentido, inclusive objeto do enunciado da Súmula n. 526, a qual dispõe que "o reconhecimento de falta grave decorrente do cometimento de fato definido como crime doloso no cumprimento da pena prescinde do trânsito em julgado de sentença penal condenatória no processo penal instaurado para apuração do fato".

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos, acrescidos das bem lançadas contrarrazões ministeriais.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_115',
        nome: 'FERNANDO - AGRAVO DE DECISÃO QUE NEGOU INDULTO 2022. MANTENDO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento XX.A que negou indulto por não atender o apenado aos critérios estabelecidos pelo próprio Decreto 11.302/2022.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada (ev. XXX.1).

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada o Decreto 11.302/2022 exige, ao benefício, que as penas  somadas/unificadas não sejam superiores a 05 (cinco) anos.

E ainda que não fosse o caso há de se considerar a inconstitucionalidade do art. 5º, o que inclusive é objetivo de  Ação Direta de Inconstitucionalidade nº 7.390, que questiona o excesso de poder exarado no Decreto Presidencial 11.302/2022, em seu art. 5º.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_116',
        nome: 'progressão aberto multa não paga',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Tratam os autos de execução de pena de reclusão, em regime  semiaberto onde o SEEU informou atingido o requisito objetivo para progressão e, juntado ACC, interveio o Ministério Publico, opinando pelo indeferimento do benefício dado o inadimplemento da pena pecuniária.
Relatados.
Dispõe a Lei de Execução Penal, no art. 112, que cumprido certo percentual  da pena imposta será transferido o apenado para regime menos rigoroso, se ostentar bom comportamento carcerário, sendo aquele registrado no atestado de pena e o comportamento no ACC ou relatório da CEME constante dos autos.
É o caso, quando o apenado cumpre a pena no regime semiaberto harmonizado sem anotação de violações ao monitoramento eletrônico * com anotação de menos de cinco violações ao monitoramento eletrônico em período de tempo tempo mais que razoável.
O Supremo Tribunal Federal, porém, iterativamente tem decidido, que o “inadimplemento deliberado da pena de multa impede a progressão de regime” (STF, HC 211.197-AgR, Segunda Turma, Rel. Min. Gilmar Mendes, DJe de 15/3/2022; HC 205.609, Primeira Turma, Rel. Min. Dias Toffoli, DJe de 15/3/2022, HC 227285 AgR, Rel: LUIZ FUX, Primeira Turma, j. 22/05/2023).
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
        id: 'seeu_117',
        nome: 'FERNANDO - LIVRAMENTO CONDICIONAL - REVOGAÇÃO - QUEBRA DAS CONDIÇÕES',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que foi concedido o livramento condicional ao apenado em XXXXXX, conforme decisão do ev. XXXX

Juntou-se aos autos informações de que o apenado, durante o período de provas, deixou de se apresentar em Juízo para justificar suas atividades, quebrando assim as condições estabelecidas para o benefício (ev. XXX), razão pela qual vieram-me os autos conclusos para revogação do benefício.

Mandado de prisão cumprido em XXXXX, conforme noticiado no evento XXX.

Anoto aqui que o penitente está custodiado na XXXXX, conforme consulta SIAPEN desta data.

Relatados.

Observa-se nos presentes autos, que o executado descumpriu as condições estabelecidas para o cumprimento do período de provas do livramento condicional, pois deixou de comparecer em juízo para justificar suas atividades desde XXXXXXXX.

Outrossim, ressalte-se que a revogação do livramento condicional é obrigatória no seguinte caso, conforme dispositivo do Código Penal:

  Art. 87 - O juiz poderá, também, revogar o livramento, se o liberado deixar de cumprir qualquer das obrigações constantes da sentença, ou for irrecorrivelmente condenado, por crime ou contravenção, a pena que não seja privativa de liberdade.

Por sua vez o artigo 88, também do Código Penal, estabelece que:

Art. 88 - Revogado o livramento, não poderá ser novamente concedido, e, salvo quando a revogação resulta de condenação por outro crime anterior àquele benefício, não se desconta na pena o tempo em que esteve solto o condenado.

Desta forma, tendo em vista a quebra das condições para o cumprimento do período de provas,  revogo o livramento condicional do sentenciado, com fulcro no art. 87  do Código Penal, não se descontando do período de provas o tempo em que esteve solto, na forma do art. 88 do CP, anotando-se, ainda, a fração de 1/1 para o livramento condicional, posto que fica vedado nova concessão do benefício.

P.R.I. Comunique-se ao estabelecimento prisional e atualize-se a guia de execução penal, com os devidos lançamentos no SEEU,

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_118',
        nome: 'FERNANDO - UNIFICAÇÃO CONTINUIDADE DELITIVA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução cujas penas unificadas totalizaram $penaTotalVEP de reclusão no regime fechado (ações penais nºs xxx) impostas a $passivoNomeVEP, que agora foi novamente condenado, desta feita a XXX de reclusão no regime semiaberto, ação penal nº XXXX (evento XXXX).

Por oportuno, registro que todas as ações penais transitaram em julgado, inclusive a que ora é somada.

Anoto que o penitente se encontra custodiado na PEA – Penitenciária Estadual de Alcaçuz, conforme informações do SIAPEN nesta data.

Relatados.

Trata-se, na espécie, de continuidade delitiva em que diversos a mesma "Operação Richter" foi desdobrada em diversas ações penais, considerando que a nova condenação decorre dos mesmos fatos que levaram às condenações nas ações penais nºs xxxxxxxx, conforme decisões dos eventos xxxxxxx.

É que o apenado foi condenado pela concessão fraudulenta de benefícios previdenciários em razão de integrar organização criminosa articulada para a prática de fraudes contra a Previdência Social, conforme descrito na sentença juntada ao evento XXXXXXXXX, fatos também objeto das condenações das ações penais XXXXXXXXXX, não restando dúvidas de que foram crimes praticados em continuidade delitiva entre os anos de 2007 e 2009.

Dispõe o art. 71, do Código Penal:

Art. 71 - Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes da mesma espécie e, pelas condições de tempo, lugar, maneira de execução e outras semelhantes, devem os subsequentes ser havidos como continuação do primeiro, aplica-se-lhe a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, aumentada, em qualquer caso, de um sexto a dois terços.

        Parágrafo único - Nos crimes dolosos, contra vítimas diferentes, cometidos com violência ou grave ameaça à pessoa, poderá o juiz, considerando a culpabilidade, os antecedentes, a conduta social e a personalidade do agente, bem como os motivos e as circunstâncias, aumentar a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, até o triplo, observadas as regras do parágrafo único do art. 70 e do art. 75 deste Código. 

Aqui é de se considerar que a nova pena é maior que as anteriormente aplicadas, que eram de XXXXXX de reclusão para a ação penal nº XXXXXX, de XXXXXXX de reclusão para a ação penal XXXXXXX e de XXXXXX de reclusão para a ação penal XXXXXX.

Portanto, sendo a pena da ação penal nº XXXXXXX a mais grave, é a que deve ser mantida, porém, como nas decisões dos eventos XXXXX, considerando que na ação penal nºXXXXXXXXX já foi aplicada a fração mais alta referente à continuidade delitiva - 2/3 (dois terços) - e que a pena concreta e definitiva daquele processo é mais alta do que a imposta na ação penal nº XXXXXXXX, não se pode mais exasperar a pena do executado, devendo a pena unificada ser fixada exatamente na mesma quantidade da sanção da ação penal nºXXXXXXX, a saber, em XXXXXXX de reclusão.

Em relação às penas unificadas considerando a continuidade delitiva e os demais crimes, trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Dispõe o art. 111, da Lei de Execução Penal:

Art. 111. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.

Parágrafo Único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime”.

Registro que a data-base para futuros benefícios deve ser a da ultima falta grave ocorrida em XXXXX.

Isto posto, unifico em as penas das ações penais XXXXXX em XXXXXX de reclusão, considerando a continuidade delitiva e, ato contínuo, unifico com as demais penas privativas de liberdade em XXXXXX, a ser cumprida inicialmente em regime fechado, face ao saldo de pena e ao regime já em cumprimento.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador, com os devidos "lançamentos" no SEEU.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_119',
        nome: 'FERNANDO - HOMOLOGAÇÃO DE FALTA GRAVE',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Cumprindo pena em regime semiaberto, o apenado praticou falta grave disciplinar consistente em XXXXXXX, razão pela qual foi movida sindicância que gerou o PAD - Processo Administrativo Disciplinar nº XXXX, conforme documentação juntada ao evento XXX.

Oportunizado ao apenado justificar-se em audiência, relatou que XXXXXXX

Opinou o Ministério Público pela regressão de regime, enquanto a Defensoria Pública/Defesa Técnica observou que o afastamento daquele da Comarca se deu em razão de ameaças de morte recebidas.

Vídeos da audiência de justificação juntada ao evento XXXX

Anoto aqui que o penitente está custodiado na PEA - Penitenciária Estadual de Alcaçuz / PERCM - Penitenciária Estadual Rogério Coutinho Madruga / PES - Penitenciária Estadual do Seridó / Cadeia Pública de Nova Cruz / CPJC - Complexo Prisional João Chaves, conforme consulta SIAPEN desta data.

Relatados.

Preliminarmente anoto prescindível a defesa do penitente por meio de advogado durante a realização do procedimento administrativo, desde que seja concedida oportunidade de exercício da ampla defesa em juízo, tal como ocorreu neste caso.

Esta foi a tese que o Supremo Tribunal Federal, no RE 972.598, com repercussão geral reconhecida, fixou  acerca da nulidade do procedimento disciplinar em razão do apenado ter sido ouvido administrativamente sem a presença de defensor:

"A oitiva do condenado pelo juízo da execução penal, in audiência de justificação realizada na presença do defensor e do Ministério Publico, afasta a necessidade de prévio procedimento administrativo, e assim como supre eventual ausência ou insuficiência de defesa técnica no PAD instaurado para apurar a prática de falta greve durante o cumprimento da pena".

Ademais, a jurisprudência consolidada do Superior Tribunal de Justiça já anotara, sobre a ausência de defesa técnica em procedimento para apuração de falta grave na execução penal, que isso só caracteriza nulidade quando evidenciado prejuízo efetivo para a defesa.

Neste termos:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. FALTA DISCIPLINAR GRAVE. APONTADA VIOLAÇÃO AO CONTRADITÓRIO E À AMPLA DEFESA. NÃO OCORRÊNCIA. INDICADO O PATROCÍNIO DA DEFESA DO REEDUCANDO. DECISÃO MANTIDA. AGRAVO REGIMENTAL NÃO PROVIDO. [...] 2. Ademais, "[q]uanto à necessidade de a defesa técnica do paciente presenciar os depoimentos das testemunhas e o do próprio sentenciado, prestados no procedimento administrativo disciplinar instaurado para a apuração de falta grave, este Superior Tribunal de Justiça já se pronunciou em diversas ocasiões no sentido de que é imprescindível a demonstração de prejuízo para reconhecimento de eventual nulidade, ônus do qual não se desincumbiu a combativa defesa - em consonância com o princípio pas de nullite sans grief, consagrado no art. 563 do Código de Processo Penal" (AgRg no HC n. 736.555/RJ, relator Ministro Jesuíno Rissato (Desembargador Convocado do TJDFT), Quinta Turma, DJe de 27/6/2022.) [...] (AgRg no HC n. 808.696/SC, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 24/4/2023, DJe de 26/4/2023.)

***

Ultrapassado este ponto registro que a  Lei nº 7.210/84, no seu art. 118, inc. I, última figura, dispõe sobre a transferência do apenado para  regime  mais rigoroso de cumprimento de  pena privativa  de liberdade quando pratica falta grave, enquanto  o art.  50, inc. II, do mesmo estatuto esclarece, que a  comete  o condenado que fugir.

No caso, verifica-se inaceitável a justificativa apresentada, porque não pode o apenado decidir, a seu talante, quando sair do cárcere mesmo que a oportunidade tenha sido criada por outros apenados.

Isto posto, homologo a falta grave e mantenho fechado o regime de execução da pena privativa de liberdade aplicada à apenada, bem como considero perdido um quinto (dada a atenuante da confissão) do tempo já remido e o que viesse a ser remido até a data da falta grave.

P.R. I. Atualize-se a Guia de Execução Penal. Cópia desta decisão servirá como ofício dando ciência  ao estabelecimento prisional de seus termos.

$assinaturaJuizDireito

$rodape`,
    },
];

// Concatena lote6 parte 2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE6_PARTE2);

// Lote 6 - Parte 3: Modelos 120-124 (continuação de 126-150.txt)
export const MODELOS_SEEU_LOTE6_PARTE3: ModeloSEEU[] = [
    {
        id: 'seeu_120',
        nome: 'endereço atribuição CEME',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade, atualmente em regime semiaberto harmonizado, em que requereu o apenado o registro de mudança de endereço.

]Relatados.

O atendimento ao pedido trata-se de atribuição administrativa e não judiciária, ou seja, cabe à CEME dar esse tipo de assistência ao apenado, sendo apenas alçada deste juízo caso haja negativa injustificada do órgão público.

Isto posto, não conheço o pedido da defesa, que deverá ser feito diretamente à CEME pela defesa.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_121',
        nome: 'FERNANDO - INDULTO 2022 - INDEFERIMENTO MÉRITO E CONSTITUCIONALIDADE',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de pena privativa de liberdade que unificadas totalizaram $penaTotalVEP de reclusão, em regime $regimePenaVEP.

A Defesa do apenado ingressou com pedido de indulto natalino com fundamento no art. 5º do Decreto nº 11.302/2022, combinado com os art. 192 e 193, da Lei 7.2010/1984 (ev. xxxxxx).

Interveio o Ministério Público que pugnou pelo reconhecimento incidental da inconstitucionalidade do art. 5º, caput e parágrafo único do Decreto 11.032/2022, por entender que houve excesso de poder e desvio de finalidade, tendo em vista o esvaziamento do objeto da política criminal, pois indultou todas as infrações penais com pena máxima inferior a 05 (cinco) anos, sem exigir qualquer período de pena cumprida para a obtenção do beneplácito constitucional (ev. xxxxxx).

Relatados.

De início verifico que, quando da publicação do Decreto 11.032/2022, o apenado cumpria penas referentes a $penaTotalVEP decorrentes da prática do delito tipificado no art. XXXXX, do Código Penal, e XXXX (duas) decorrentes do crime do art. XXXX, também do Código Penal.

Desde já, sem adentrar de início no mérito da constitucionalidade do art. 5º, caput e parágrafo único, do Decreto 11.302/2022, como pleiteou o Ministério Público, tenho que o pedido não merece prosperar, uma vez que desconsidera regras estabelecidas no próprio decreto.

Primeiramente, o pedido da Defesa baseia-se no disposto no art. 5º, caput, e seu parágrafo único, que dispõem:

Art. 5º  Será concedido indulto natalino às pessoas condenadas por crime cuja pena privativa de liberdade máxima em abstrato não seja superior a cinco anos.

Parágrafo único.  Para fins do disposto no caput, na hipótese de concurso de crimes, será considerada, individualmente, a pena privativa de liberdade máxima em abstrato relativa a cada infração penal.

Por sua vez, o art. 11, do mesmo Decreto, preconiza que:

Art. 11.  Para fins do disposto neste Decreto, as penas correspondentes a infrações diversas serão unificadas ou somadas até 25 de dezembro de 2022, nos termos do disposto no art. 111 da Lei nº 7.210, de 11 de julho de 1984.

Parágrafo único.  Não será concedido indulto natalino correspondente a crime não impeditivo enquanto a pessoa condenada não cumprir a pena pelo crime impeditivo do benefício, na hipótese de haver concurso com os crimes a que se refere o art. 7º, ressalvada a concessão fundamentada no inciso III do caput do art. 1º. (grifo acrescentado)

Pois bem, as penas foram unificadas em $penaTotalVEP de reclusão, reconhecendo-se o concurso material de delitos, decisão que foi proferida em XX.XX.XXXX (ev. XXXXXX).

Neste sentido, o entendimento jurisprudencial tem interpretado que deve ser considerada a pena totalizada, ou seja, somada ou unificada, e não a pena separadamente para cada crime individualmente, como decidiu o Tribunal de Justiça do Estado de São Paulo, verbis:

AGRAVO EM EXECUÇÃO – Indeferimento do pedido de concessão do indulto previsto no Decreto Presidencial nº 11.302/2022 – Pedido de reforma – Rejeição – Sentenciado que cumpre pena por diversos crimes, cuja soma das penas é superior a 09 anos – Hipótese cujo requisito objetivo de quantum da pena deve observar a soma decorrente da unificação – Disposição expressa do art. 11 do Decreto nº 11.302/2022 – Consideração individual das sanções que deve ocorrer apenas na hipótese de concurso de crimes – Art. 5º, parágrafo único, do Decreto nº 11.302/2022 – Condenações do sentenciado que ultrapassam os 5 anos de reclusão – Uma das condenações que, outrossim, refere-se a corrupção de menores (art. 244-B, do ECA) – Hipótese que também impede a concessão da benesse – Art. 11, parágrafo único, do Decreto nº 11.302/2022 – Precedente desta C. Câmara - Agravo não provido. 

(TJSP;  Agravo de Execução Penal 0001209-27.2023.8.26.0154; Relator (a): Renato Genzani Filho; Órgão Julgador: 11ª Câmara de Direito Criminal; São José do Rio Preto/DEECRIM UR8 - Unidade Regional de Departamento Estadual de Execução Criminal DEECRIM 8ª RAJ; Data do Julgamento: 11/04/2023; Data de Registro: 11/04/2023) (grifos nossos)

Outro não é o entendimento que vem sendo firmado pelo Superior Tribunal de Justiça, que orientou na mesma direção, devendo ser utilizado como parâmetro, em caso de múltiplos delitos, a pena unificada e não a pena individualizada crime por crime, verbis:

Trata-se de habeas corpus substitutivo de recurso próprio, impetrado em favor de M. S. P., em que aponta como autoridade coatora o Tribunal de Justiça do Estado de São Paulo. O Paciente cumpre pena de vinte e cinco (25) anos, nove (9) meses e vinte e sete (27) dias de reclusão por crimes de estelionato e apropriação indébita agravada. Ao todo tem dezesseis (16) as execuções. Neste writ, o Impetrante alega que o Paciente sofre constrangimento ilegal em razão do indeferimento do pedido do pedido de indulto, formulado com base no artigo 5°, do Decreto P residencial n° 11.302/2022. Afirma que estão preenchidos os requisitos do Decreto n. 11.302, de 22 de dezembro de 2022. Requereu o indulto de todas as penas privativas de liberdade com base no artigo 5°, do Decreto presidencial n° 11.302/2022. É o relatório. Decido. Esta Corte - HC 535.063, Terceira Seção, Rel. Ministro Sebastião Reis Junior, julgado em 10/6/2020 - e o Supremo Tribunal Federal - AgRg no HC 180.365, Primeira Turma, Rel. Min. Rosa Weber, julgado em 27/3/2020; AgRg no HC 147.210, Segunda Turma, Rel. Min. Edson Fachin, julgado em 30/10/2018 -, pacificaram orientação no sentido de que não cabe habeas corpus substitutivo do recurso legalmente previsto para a hipótese, impondo-se o não conhecimento da impetração, salvo quando constatada a existência de flagrante ilegalidade no ato judicial impugnado. Assim, passo à análise das razões da impetração, de forma a verificar a ocorrência de flagrante ilegalidade a justificar a concessão do habeas corpus, de ofício. Busca a impetrante a concessão de indulto ao paciente, com base no Decreto Presidencial n. 11.302 de 22 de dezembro de 2022, pois estaria cumprido o requisito objetivo e subjetivo. Dispõe o artigo 5º do Decreto Presidencial nº 11.302/22 que será concedido indulto natalino às pessoas condenadas por crime cuja pena privativa de liberdade máxima em abstrato não seja superior a cinco anos, sendo que seu parágrafo único complementa que para fins do disposto no caput, na hipótese de concurso de crimes (formal ou material). No caso em exame as penas unificadas totalizam mais de vinte e cinco (25) anos. Desse modo, conforme registrado pelas instâncias ordinárias, a exigência de condenação primária não restou satisfeito. Não se verifica, pois, ilegalidade a justificar a intervenção desta Corte. Ante o exposto, não conheço do habeas corpus. Publique-se. Intimem-se. (HC n. 806.671- SP (2023/0068766-9), Ministro Ribeiro Dantas, DJe de 13/03/2023.) (grifo acrescentado)

Ainda:

Trata-se de habeas corpus substitutivo de recurso próprio, com pedido liminar, impetrado em favor de A. S. G., no qual aponta como autoridade coatora o Tribunal de Justiça do Estado de São Paulo, que denegou a ordem originária.Neste writ, a impetrante alega constrangimento ilegal causado ao paciente, em decorrência do indeferimento do indulto natalino - Decreto Presidencial n. 11.302/2022 em seu artigo 5º, 9º, III e artigo 12º -, não obstante tenha preenchido os requisitos para sua concessão. Afirma que, cumpriu os requisitos legais necessários à benesse alvitrada. Condenada definitivamente à pena total de 02 (dois) anos de reclusão, no regime inicial semiaberto, e ao pagamento de 10 ( dez) dias-multa, de valor unitário mínimo, por incurso no artigo 14, caput, da lei nº 10.826/03. Afirma que o referido Decreto Presidencial nada se refere a reincidência, não havendo qualquer óbice ao instituto da reincidência, consoante se vê da íntegra do referido Decreto. Requer a concessão do indulto da pena ao paciente, amparado pelo Decreto nº 11.302 de 22 de dezembro de 2022. É o relatório. Decido. Esta Corte - HC 535.063, Terceira Seção, Rel. Ministro Sebastião Reis Junior, julgado em 10/6/2020 - e o Supremo Tribunal Federal - AgRg no HC 180.365, Primeira Turma, Rel. Min. Rosa Weber, julgado em 27/3/2020; AgRg no HC 147.210, Segunda Turma, Rel. Min. Edson Fachin, julgado em 30/10/2018 -, pacificaram orientação no sentido de que não cabe habeas corpus substitutivo do recurso legalmente previsto para a hipótese, impondo-se o não conhecimento da impetração, salvo quando constatada a existência de flagrante ilegalidade no ato judicial impugnado. Assim, passo à análise das razões da impetração, de forma a verificar a ocorrência de flagrante ilegalidade a justificar a concessão do habeas corpus, de ofício. Busca a impetrante a concessão de indulto ao paciente, com base no Decreto Presidencial n. 11.302 de 22 de dezembro de 2022, pois estaria cumprido o requisito objetivo e subjetivo. Está inscrito no acórdão impugnado: " No caso, conquanto a pena máxima em abstrato cominada ao crime de porte ilegal de arma de fogo não seja superior a cinco anos, verifica-se que o paciente não preenche todos os requisitos para a concessão da benesse. Isso porque o Decreto Presidencial n. 11.302/2022, em seu artigo 12, restringiu o indulto às hipóteses de "condenação primária" (O indulto natalino de que trata este Decreto será concedido pelo juízo do processo de conhecimento, quando se tratar de condenação primária, desde que não haja recurso da sentença interposto pela acusação). Com efeito. Na espécie, verifica-se que o paciente ostenta a condição de reincidente, conforme se extrai da sentença e acórdão, em decisão transitada em julgado (fls. 26, 207/211 e 216). Desse modo, respeitado o entendimento do impetrante e nos limites que esta via estreita do Habeas Corpus permite, não há falar em constrangimento ilegal." (e-STJ, fl. 279). Consta do Decreto Presidencial n. 11.302/2022, em seu artigo 12: "O indulto natalino de que trata este Decreto será concedido pelo juízo do processo de conhecimento, quando se tratar de condenação primária, desde que não haja recurso da sentença interposto pela acusação. " Desse modo, conforme registrado pelas instâncias ordinárias, a exigência de condenação primária não restou satisfeito. Não se verifica, pois, ilegalidade a justificar a intervenção desta Corte. Ante o exposto, não conheço do habeas corpus. Publique-se. Intime-se. (HC n. 805.648- SP (2023/0063097-0), Ministro Ribeiro Dantas, DJe de 07/03/2023.) (grifei)

É o que ocorre no presente caso, pois o apenado, cujas penas somadas ultrapassam XXXXX anos, não atende aos requisitos objetivos do próprio decreto presidencial.

Quanto à possibilidade de enquadramento no comando do art. 7º, §3º, do Decreto 11.302/2022, menciona o artigo quais os crimes não são indutáveis, porém, em nada aproveitando ao pedido do apenado, uma vez que a análise de qualquer pedido de indulto passa naturalmente pelo crivo do mencionado artigo, sendo hipótese excludente de análise, o que não é o caso em comento.

Em que pese não atender aos critérios estabelecidos pelo próprio Decreto Presidencial, conforme o encaminhamento dado pela jurisprudência do STJ, há de ser analisado o pedido também pela via do controle difuso de constitucionalidade como requerido pelo Ministério Público, inclusive em razão da recente propositura da Ação Direta de Inconstitucionalidade nº 7.390, que questiona justamente o excesso de poder exarado no Decreto Presidencial 11.302/2022, em seu art. 5º, senão vejamos.

Com razão o Ministério Público.

No que concerne ao controle de constitucionalidade, o fundamento para o instituto em análise reside, precisamente, no reconhecimento da supremacia da Constituição e de sua força vinculante em relação aos Poderes Públicos, o que torna inevitável a discussão sobre formas e modos de defesa da Carta Magna e sobre a necessidade de controle de constitucionalidade dos atos do Poder Público, especialmente das leis e atos normativos1.

Dentre as espécies de controle de constitucionalidade, aquele que se presta a presente sentença corresponde ao sistema americano inaugurado pelo caso paradigma Marbury v. Madison (1803), amplamente conhecido como modelo difuso, cuja sistemática presta homenagem ao interesse público em sentido amplo, democratizando a discussão em torno da questão constitucional.

Nessa linha, a análise acerca da compatibilidade do ato normativo em exame com a Constituição de República de 1988 denuncia flagrante caso de inconstitucionalidade material. Os vícios materiais traduzem defeito de conteúdo do ato normativo, pela inobservância de sua compatibilidade com a essência da Carta Magna2

Inicialmente, importa ressaltar que o Decreto n.º 11.302/2022 é objeto do procedimento controle de constitucionalidade instaurado pela Ação Direta de Inconstitucionalidade nº 7.330/DF, especificamente quanto aos seus art. 6º, caput e parágrafo único, e art. 7º, §3º, os quais estão suspensos em virtude da decisão proferida pela Presidente da Suprema Corte, Min.ª Rosa Weber, que deferiu a medida cautelar pleiteada :“Medida cautelar deferida para suspender, até o reexame da matéria pelo eminente Relator, após a abertura do Ano Judiciário, e ad referendum do Plenário, a (i) expressão no momento de sua prática constante da parte final do art. 6º, caput, do Decreto Presidencial 11.302/2022 e (ii) do § 3º do art. 7º do Decreto Presidencial 11.302/2022”3.

Embora ainda sem deferimento de pedido liminar, não menos importante, também em relação aos limites constitucionais do art. 5º do Decreto Presidencial 11.302/2022, foi proposta a Ação Direta de Inconstitucionalidade nº 7.390, pois reputa a Procuradoria Geral da República, por meio de seu Procurador Geral, considerando que houve excesso aos limites do sistema de freios e contrapesos e ao estado de direito, bem como aos compromissos assumidos pelo Estado brasileiro perante a ordem internacional, "ao conferir clemência estatal com base em cláusula que atenta contra o próprio sistema de justiça e de proteção/reparação das vítimas, que alcança não um determinado indivíduo ou um grupo específico de condenados, por razões políticas, ou, mesmo, como forma de concretização de política criminal, mas todos os condenados por crimes cuja pena em abstrato não supere cinco anos", no que descreve com "descriterioso desencarceramento em massa de condenados por amplíssimo rol de tipos penais".

Em que pesem tais Ações Diretas de Inconstitucionalidade, o indulto é instituto jurídico previsto no artigo 84, inciso XII da Constituição Federal, de competência privativa do Presidente da República, e assim como demais atos/normas se submete aos limites constitucionais, sujeitando-se, portanto, aos princípios constitucionais.    

O indulto, caracteriza-se pela renúncia do Estado ao seu direito de punir. Embora trate-se de função atípica do chefe do Poder Executivo, eis que eivada de atribuição legisferante, devendo obediência aos princípios constitucionais.

É o entendimento doutrinário de Cléber Masson:

"O indulto propriamente dito, ou indulto coletivo, é a modalidade de clemência espontaneamente pelo Presidente da República a todo o grupo de condenados que preencherem os requisitos apontados pelo decreto. O indulto leva em consideração a duração da pena aplicada, bem como o preenchimento de determinados requisitos subjetivos (exemplo: primariedade) e objetivos (exemplo: cumprimento de parte da pena)"4

Ora, o indulto é uma medida excepcional e deve ser concedido com base em critérios claros e objetivos, como tempo de cumprimento da pena e o comportamento do apenado durante o período de encarceramento. No entanto, tais critérios não foram observados, tornando-o ilegal e inconstitucional, motivo pelo qual merece ser objeto de controle de constitucionalidade pela via difusa. 

Importa anotar, embora a concessão do indulto seja ato de competência privativa do Presidente da República, "o Decreto que concede o benefício à determinada categoria de sentenciados não é autoexecutável e se traduz em mera expectativa de direito, tanto que sua aplicação depende de decisão judicial, cabendo ao Juízo da Execução Criminal verificar o preenchimento dos requisitos exigidos para identificar quais daqueles condenados são alcançados pela benesse presidencial"5

Dessa forma, verifico ter ocorrido uma verdadeira afronta ao Princípio da Separação dos Poderes (art. 2º; art. 48, VIII, CF; art. 60, §4º, III; art. 62, §1º, I, b; e art. 68, §1º, II, todos da CF).

Isto porque, ao não considerar a pena concretamente aplicada, mas sim a abstratamente cominada, o Decreto em tela, no art.5º, promoveu uma verdadeira anistia, usurpando a prerrogativa constitucional do Congresso Nacional de legislar sobre a matéria e violando frontalmente o princípio da separação dos poderes.

Consoante esclarece o Min. Celso de Mello, “ao contrário da anistia, que opera efeitos radicais, o indulto e a graça em sentido estrito geram, somente, a extinção da punibilidade. Não apagam o ilícito nem suprimem as consequências de ordem penal, inclusive os efeitos penais secundários da sentença condenatória(...)” (HC 82.554/RJ, Rel. Min. Celso de Mello, DJe 07.10.2013, grifei).

Logo, o Presidente da República no exercício de função atípica, apossou-se de competência inerente ao Poder Legislativo, retirando o preceito sancionador dos tipos penais (ou seja, despenalizou condutas abstratamente eleitas pelo Congresso Nacional como criminosas).

Além disso, verifico também ter ocorrido violação ao Princípio da Proporcionalidade e Razoabilidade (art. 1º, caput; e art. 5º, LIV e XLI, todos da CF).

Ora, o Decreto em análise não previu qualquer lapso temporal mínimo de cumprimento de pena como requisito para concessão de indulto e, não bastasse, estabeleceu como limite máximo para concessão do benefício a condenação por crime cuja pena privativa de liberdade máxima em abstrato não seja superior a cinco anos, apresentando-se como verdadeiro instrumento de impunidade.

Ao comentar a decisão do STF na ADI 5.874/DF, Cleber Masson explica:

"Com o merecido respeito à Corte Constitucional, nosso entendimento é diverso. De fato, o indulto deve observar os limites impostos pela Lei Suprema. Tais barreiras, contudo, podem ser implícitas e decorrentes do sistema constitucional interpretado em totalidade. Em primeiro lugar, é imprescindível a obediência à separação dos poderes, insculpida no art.2º da Constituição Federal. Não se pode, ao livre gosto do Presidente da República, muitas vezes motivado por acordos políticos, partidários e contrários aos interesses da nação, simplesmente ignorar uma decisão condenatória imposta pelo Poder Judiciário após anos, quiçá décadas, de tramitação de uma ação penal, norteada pelos princípios (também constitucionais) do contraditório, da ampla defesa e do devido processo penal. Imagine-se um decreto de indulto exigindo, por exemplo, apenas o cumprimento de 1/10 da pena privativa de liberdade para extinção da punibilidade. Essa opção do Poder Executivo indiscutivelmente banalizaria a atuação jurisdicional, transformando as portas do sistema penal em uma autêntica "porta giratória" fomentadora da impunidade e da criminalidade"6.

Vale transcrever a decisão liminar proferida pela Min.ª Cármen Lúcia na ADI 5.874/DF, o “Indulto não é nem pode ser instrumento de impunidade. É providência garantidora, num sistema constitucional e legal em que a execução da pena definida aos condenados seja a regra, possa-se, em situações específicas, excepcionais e não demolidoras do processo penal, permitir-se a extinção da pena pela superveniência de medida humanitária. Essa medida significa gesto estatal que beneficia aquele que, tendo cumprido parte de seu débito com a sociedade, obtenha, com a providência, um reconhecimento de que seu erro foi assumido por ele, punido e sobre ele se debruçou o infrator. Ainda assim, a sociedade oferece-lhe uma nova chance de superar seu erro. Fortalece-se, então, a crença no direito e no sistema penal democrático.

É importante frisar que o controle de constitucionalidade zela pela proeminência da Constituição, assegurando a proteção e a efetivação dos direitos e garantias fundamentais ao indivíduo e à sociedade.

Nas lições de Luís Roberto Barroso .:

Um dos fundamentos do controle de constitucionalidade é a proteção dos direitos fundamentais, inclusive e sobretudo os das minorias, em face das maiorias parlamentares eventuais. Seu pressuposto é a existência de valores materiais compartilhados pela sociedade que devem ser preservados das injunções estritamente políticas. A questão da legitimidade democrática do controle judicial é um dos temas que têm atraído mais intensamente a atenção dos juristas, cientistas políticos e filósofos da Constituição, e a ele se dedicará um tópico desta exposição. (BARROSO, Luis Roberto. Controle de Constitucionalidade no Direito Brasileiro, 2ª Ed. Rio de Janeiro: Saraiva, 2006)

Em igual linha de pensamento, verifica-se que houve afronta ao princípio da isonomia e individualização da pena (art. 5º, inciso XLVI/CF), tendo em vista que, consoante já narrado, os termos do artigo em exame concedem o indulto com base, tão somente, na pena abstrata do réu, sem considerar tempo de cumprimento efetivo da reprimenda, natureza da condenação ou comportamento durante a execução da pena.

Dessa forma, ao expedir o referido Decreto, o Presidente da República exorbitou os limites jurídicos-constitucionais do poder que lhe foi atribuído e feriu os princípios constitucionais que regem nosso ordenamento jurídico, de modo que a aplicação do art.5º, caput, e §Único resultaria num impacto irreversível.

Ressalto, mais uma vez, que na mesma linha segue a ADI 7.390 proposta pela Procuradoria Geral da República.

Ante o exposto, ausente os pressupostos estabelecidos pelo próprio Decreto para concessão do indulto, bem como por reconhecer a inconstitucionalidade incidental do art. 5º, caput e parágrafo único, do Decreto n.º 11.302/2022, por conseguinte, indefiro o pedido de indulto formulado pelo apenado.

Publique-se. Intime-se. 

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_122',
        nome: 'LIBERAÇÃO DE PECÚNIA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Trata-se de execução de pena privativa de liberdade em que o apenado integralizou todo o saldo de pena, estando hoje em liberdade.

A Defensoria Pública solicitou a liberação do saldo constante da conta judicial nº XXXXXX, vinculada a estes autos, considerando que o valor é oriundo de remuneração do apenado por ter exercido trabalho enquanto cumpria pena (ev. XXX)

Instado a se manifestar, pugnou o Ministério Público por XXXXXX

Oficiado ao Banco do Brasil S/A, foi confirmada a existência de saldo remanescente na conta XXXXX, conforme ofício juntado ao ev. XXX

Relatados.

O pedido deve ser deferido, considerando que o apenado laborou enquanto cumpria pena em regime fechado e hoje está em liberdade após ter cumprido toda a pena.

O art. 29 da Lei de Execuções Penais prevê que:

Art. 29. O trabalho do preso será remunerado, mediante prévia tabela, não podendo ser inferior a 3/4 (três quartos) do salário mínimo.

§ 1° O produto da remuneração pelo trabalho deverá atender:

a) à indenização dos danos causados pelo crime, desde que determinados judicialmente e não reparados por outros meios;

b) à assistência à família;

c) a pequenas despesas pessoais;

d) ao ressarcimento ao Estado das despesas realizadas com a manutenção do condenado, em proporção a ser fixada e sem prejuízo da destinação prevista nas letras anteriores.

§ 2º Ressalvadas outras aplicações legais, será depositada a parte restante para constituição do pecúlio, em Caderneta de Poupança, que será entregue ao condenado quando posto em liberdade.

Assim, considerando que o apenado cumpriu toda a pena e, portanto, encontra-se em liberdade, deve lhe ser entregue o saldo constante da conta judicial, conforme disposto no art. 29, §2º, da LEP.

Diante do exposto, defiro o pedido de liberação da pecúnia e mando expedir alvará para saque do total disponível na conta judicial nº XXXX mantida junto ao Banco do Brasil S/A, o que faço com fulcro no art. 29, §2º, da LEP.

P.R.I. Cumprida a diligência voltem os autos ao arquivo.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_123',
        nome: 'Progressão de Regime - SEMIABERTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_124',
        nome: 'regressão regime mais gravoso',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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

Neste sentido:

Recurso ordinário em habeas corpus. 2. Execução Penal. 3. Falta disciplinar grave. 4. Fixação de nova data-base para obtenção de benefícios executórios. Possibilidade. Precedentes. 5. Regressão a regime de cumprimento de pena mais gravoso que o fixado em sentença transitada em julgado (aberto ou semiaberto). Possibilidade. Regência do art. 118 da Lei de Execuções Penais. 6. Constrangimento não evidenciado. 7. Recurso a que se nega provimento.  (RHC 104585, Relator(a):  Min. GILMAR MENDES, Segunda Turma, julgado em 21/09/2010, DJe-190 DIVULG 07-10-2010 PUBLIC 08-10-2010 EMENT VOL-02418-04 PP-00791)

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. PACIENTE CONDENADA AO REGIME ABERTO. DESCUMPRIMENTO DAS CONDIÇÕES IMPOSTAS. FALTA GRAVE. REGRESSÃO DE REGIME. POSSIBILIDADE. AGRAVO DESPROVIDO. 1. Nos termos da jurisprudência desta Corte Superior, não constitui ofensa à coisa julgada a regressão a regime de cumprimento de pena mais gravoso que o fixado na sentença, em razão da prática de falta grave (art. 118, inciso I, da Lei de Execução Penal). 2. Agravo regimental desprovido. (AgRg no HC 525.652/SP, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 19/11/2019, DJe 05/12/2019).

AGRAVO REGIMENTAL NO RECURSO ESPECIAL. FALTA GRAVE. REGRESSÃO DE REGIME. ART. 118 DA LEP. AGRAVO REGIMENTAL NÃO PROVIDO. 1. A teor dos julgados desta Corte, é cabível a regressão a regime de cumprimento de pena mais gravoso que o fixado na sentença, na hipótese de prática de falta grave. Não há falar em imutabilidade da sentença, pois, a teor do art. 118 da LEP, a execução da reprimenda privativa de liberdade também está sujeita à forma regressiva. (...) (AgRg no REsp 1789438/RO, Rel. Ministro ROGERIO SCHIETTI CRUZ, SEXTA TURMA, julgado em 06/08/2019, DJe 13/08/2019)

AGRAVO REGIMENTAL NO HABEAS CORPUS. FALTA GRAVE. POSSIBILIDADE DE REGRESSÃO DE REGIME. ART. 118 DA LEP. AGRAVO REGIMENTAL NÃO PROVIDO. 1. É cabível a regressão a regime prisional mais grave do que o fixado na sentença quando o condenado pratica fato definido como falta grave. O regime estabelecido na fase de conhecimento não é inalterável, absoluto, pois, a teor do art. 118 da LEP, a execução da pena privativa de liberdade também está sujeita à forma regressiva. 2. Agravo regimental não provido. (AgRg no HC 488.882/SP, Rel. Ministro ROGERIO SCHIETTI CRUZ, SEXTA TURMA, julgado em 04/06/2019, DJe 10/06/2019).

Nos termos da jurisprudência desta Corte Superior, não constitui ofensa à coisa julgada a regressão a regime de cumprimento de pena mais gravoso que o fixado na sentença, em razão da prática de falta grave (art. 118, inciso I, da Lei de Execução Penal), ante o descumprimento pelo apenado das condições impostas ao regime aberto. Agravo regimental improvido. (AgRg no HC 599.580/SP, Rel. Ministro NEFI CORDEIRO, SEXTA TURMA, julgado em 22/09/2020, DJe 29/09/2020).

Isto posto, decreto a regressão, para o fechado, do regime prisional e considero perdido um quinto do tempo já remido e o que viesse a ser até a data da falta grave, dada a atenuante da confissão.

P.R.I. Atualize-se a guia de execução penal. Cópia desta decisão servirá como ofício dando ciência  ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().


Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
];

// Concatena lote6 parte 3 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE6_PARTE3);

// Lote 6 - Parte 4: Modelos 125-129 (finalização de 126-150.txt)
export const MODELOS_SEEU_LOTE6_PARTE4: ModeloSEEU[] = [
    {
        id: 'seeu_125',
        nome: 'Retificação reincidência hediondo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Requereu o apenado retificação da GEP, fazendo constar a fraction de 40% para o crime de homicídio referente ao processo criminal nº ***, alegando que nesse primeiro crime não era reincidente (ev. (*).

O Ministério Público opinou contrariamente (ev. **.).

Relatados.

Com razão o Ministério Público.

Inicialmente verifico que a exigência de 3/5 ou 60% (LEP, art. 112, VII) só cabe no caso de reincidência específica em crime hediondo, o que é o caso dos autos.

Compulsando os autos, notadamente a guia de execução penal, observo que apenado cometeu crime de homicídio qualificado** em ** (processo criminal nº **) e, após condenado definitivamente,  praticou o de tráfico de drogas (processo criminal nº **),  adquiriu a condição de reincidente específico na prática de crime hediondo ou equiparado (AgRg no HC n. 660.579/SP, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 5/10/2021, DJe de 11/10/2021.)

Também nestes sentido:

AGRAVO REGIMENTAL EM HABEAS CORPUS SUBSTITUTIVO DE RECURSO PRÓPRIO. EXECUÇÃO DEFINITIVA. EXECUTADO QUE JÁ TINHA CONTRA SI CONDENAÇÃO DEFINITIVA POR CRIME DE HOMICÍDIO QUALIFICADO, QUANDO VEIO A PRATICAR O DELITO DE TRÁFICO DE ENTORPECENTES. CONDIÇÃO DE REINCIDENTE APLICÁVEL A TODAS AS CONDENAÇÕES DE MESMA NATUREZA. LEI 13.964/2019. AUSÊNCIA DE FLAGRANTE ILEGALIDADE. AGRAVO REGIMENTAL DESPROVIDO.
1. O Superior Tribunal de Justiça, alinhando-se à nova jurisprudência da Corte Suprema, também passou a restringir as hipóteses de cabimento do habeas corpus, não admitindo que o remédio constitucional seja utilizado em substituição ao recurso ou ação cabível, ressalvadas as situações em que, à vista da flagrante ilegalidade do ato apontado como coator, em prejuízo da liberdade do paciente, seja cogente a concessão, de ofício, da ordem de habeas corpus. (AgRg no HC 437.522/PR, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 07/06/2018, DJe 15/06/2018).
2. O entendimento jurisprudencial desta Corte consolidou-se no sentido de que a reincidência é circunstância pessoal que interfere na integralidade da execução, e não somente nas penas em que ela tiver sido reconhecida.
Precedentes: AgRg no HC 660.579/SP, Rel. Ministro ROGERIO SCHIETTI CRUZ, SEXTA TURMA, julgado em 05/10/2021, DJe 11/10/2021; AgRg no HC 616.696/SP, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 15/12/2020, DJe 18/12/2020; AgRg no HC n. 509.877/MS, de minha relatoria, Quinta Turma, DJe 27/6/2019; AgRg no HC n. 450.475/ES, Rel. Ministro NEFI CORDEIRO, Sexta Turma, DJe 21/11/2018.
3. Não obstante a entrada em vigor da Lei. n. 13.964/2019, esta Corte manteve entendimento de que "a condição de reincidente, uma vez adquirida pelo sentenciado, estende-se sobre a totalidade das penas somadas, não se justificando a consideração isolada de cada condenação e tampouco a aplicação de percentuais diferentes para cada uma das reprimendas" (AgRg no HC 616.696/SP, Quinta Turma, rel. Min. FELIX FISCHER, DJe 18/12/2020). No mesmo sentido, as decisões monocráticas: REsp 1.957.643/MG, Rel. Min. SEBASTIÃO REIS JÚNIOR, DJe de 18/02/2022; REsp 1.978.212/MG, Rel. Min. REYNALDO SOARES DA FONSECA, DJe de 10/02/2022; REsp 1.977.504/MT, Rel. Min. ANTONIO SALDANHA PALHEIRO, DJe de 02/02/2022; HC 714.220/MG, Rel. Min. RIBEIRO DANTAS, DJe de 02/02/2022.
4. No caso concreto, quando o paciente praticou o crime de tráfico de drogas, em 2021, já tinha contra si condenação definitiva anterior por outro crime hediondo com resultado morte (homicídio qualificado), devendo ser considerado reincidente em crime hediondo ou equiparado conforme a letra do art. 112, VII, da Lei de Execução Penal (na redação da Lei 13.964/2019) que prevê a aplicação, para fins de progressão de regime, da necessidade de cumprimento da fração de "60% (sessenta por cento) da pena, se o apenado for reincidente na prática de crime hediondo ou equiparado; (Incluído pela Lei nº 13.964, de 2019)".
5. Diante desse contexto, não merece reparos o acórdão do Tribunal de Justiça, visto que limitou o alcance da reincidência aos crimes hediondos ou equiparados cometidos pelo apenado, observando a distinção prevista na Lei 13.964/2019 em relação aos crimes comuns, não alcançados pelos efeitos da reincidência.
6. Agravo regimental desprovido.
(AgRg no HC n. 833.497/SC, relator Ministro Reynaldo Soares da Fonseca, Quinta Turma, julgado em 18/9/2023, DJe de 20/9/2023.) grifei.

Isso posto, indefiro o pedido da defesa.

P.R.I. Ciência ao MP.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_126',
        nome: 'unificação de penas',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
Processo nº. $autos.getNumeroUnicoFormatado()
$dadosProcesso
 
 
Vistos etc.
 
Trata-se de execução de pena de xx ( ) anos, xx ( ) meses e xx ( ) dias de reclusão no regime xx (ação penal nº ) imposta a xxx, que agora foi novamente condenado, desta feita a xx ( ) anos, xx ( ) meses e xx ( ) dias de detenção no regime xx, ação penal nº (evento ).
 
Anoto que o penitente encontra-se custodiado no xx, conforme informações do SIAPEN nesta data.
 
Relatados.
 
Trata-se, na espécie, de concurso material de delitos, não se podendo tel os crimes como continuação entre si, impondo-se a soma das penas.
 
Dispõe o art. 111, da Lei de Execução Penal:
 
Art. 111. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será deita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.
 
Parágrafo Único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime”.
 
Na dicção do Superior Tribunal de Justiça:
 
“Cabe ao Juízo da Execução, nos termos do art. 111 da Lei 7.210/84, diante de condenações diversas, em um mesmo processo ou não, somar ou unificar as penas impostas ao sentenciado, no intuito de redefinir o regime prisional, não havendo falar-se em reformatio in pejus. (AgRg no HC 520.469/MS, Rel. Ministro NEFI CORDEIRO, SEXTA TURMA, julgado em 26/11/2019, DJe 03/12/2019)
 
De seu lado, a consolidada jurisprudência do Superior Tribunal Federal, interpretando tal dispositivo, afirma que:
 
"No caso de condenações diversas, não se espera o cumprimento de uma delas para executar-se a outra. Tem-se o somatório das penas e um novo enquadramento quanto ao regime a ser observado na execução. (…) Surge incoerente concluir de forma diversa, como se as sanções pudessem ser consideradas isoladamente, presentes os títulos judicias condenatórios que as veiculem" (HC 137.440, Primeira Turma, Rel. Min. Marco Aurélio, DJe de 30/08/2017).
 
EXECUÇÃO PENAL. ART. 111 DA LEP. UNIFICAÇÃO DE PENAS. RECLUSÃO COM DETENÇÃO SUPERVENIENTE. REPRIMENDAS DA MESMA NATUREZA. SOMATÓRIO.
 POSSIBILIDADE. I - "A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade" (AgRg no HC n. 473.459/SP, Quinta Turma, Rel. Min. Reynaldo Soares da Fonseca, DJe de 01/03/2019). Precedentes do STF e desta Corte Superior de Justiça. Agravo regimental desprovido. (AgRg no REsp 1861665/ES, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 05/05/2020, DJe 15/05/2020)
 
*Portanto, condenado às penas de reclusão e detenção, as reprimendas deverão ser somadas para fins de unificação de pena, por se tratarem de sanções de mesma espécie, qual seja, pena privativa de liberdade.
 
*Por oportuno anoto a recente importante e esclarecedora diferenciação feita pelo Superior Tribunal de Justiça acerca da unificação das penas de reclusão e detenção:
 
“(...) a jurisprudência desta Corte Superior de Justiça faz distinção entre a fixação de regime inicial de cumprimento da pena e da unificação das penas para fins de execução penal. A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade. (...) Tratando-se de fixação de regime inicial, deve ser aplicado o regime correspondente para cada um dos crimes, pois aplica-se o disposto nos arts. 69 e 76 do CP e, não, o art. 111 da Lei de Execução Penal, que cuida da hipótese de unificação das penas na execução” (AgRg no REsp 1939600/GO, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 22/06/2021, DJe 28/06/2021).
 
*Registro que a data-base para futuros benefícios deve ser a da ultima falta grave, a do último crime ou do último atingimento aos requisitos objetivo e subjetivo para progressão deferida, a que for mais recente. (UTILIZAR SÓ EM CASOS ESPECÍFICOS, ONDE HÁ PROGRESSÃO ANTERIOR)
 
*Registro que a data-base para futuros benefícios deve ser a da ultima falta grave.
 
*Registro que a data-base para futuros benefícios deve ser a da ultima prisão.
 
Isto posto, unifico em xx (xx) anos e xx (x) meses a pena privativa de liberdade em execução nestes autos, sendo xx (xx) anos de reclusão e xx (xx) de detenção, a ser cumprida inicialmente em regime *fechado* *semiaberto*, face ao determinado no saldo de penas e *na última sentença condenatória* *nas sentenças condenatórias* *bem como na decisão de regressão de regime*.
 
P.R.I. *Comunique-se ao estabelecimento prisional e expeça-se a competente Guia de Execução Penal unificadora, com os devidos "lançamentos" no SEEU. **Oficie-se ao estabelecimento prisional, com as devidas pesquisas no SAJ, SEEU e BNMP, para transferência do apenado à unidade adequada ao regime semiaberto.
 
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_127',
        nome: 'COMUTAÇÃO DE PENA 2023 - INDEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de $penaTotalVEP imposta a $passivoNomeVEP pela prática de crimes do art. XXXX, ação penal XXX, art. XXXX, ação penal XXX.

A Defesa peticionou pugnando pela comutação da pena, fundamentando o pedido no art. 3º do Decreto Presidencial nº 11.846/2023 e alegando que XXXXXX (ev. XXXXX)

Instado a se manifestar, o Ministério Público opinou pelo ********* indeferimento/deferimento considerando que o apenado XXXXXXX (ev. XXXX).

Anoto aqui que o penitente está cumprindo pena na PEA - Penitenciária Estadual de Alcaçuz/ PERCM - Penitenciária Estadual Rogério Coutinho Madruga/ CPJC - Complexo Prisional João Chaves /Cadeia Pública de Nova Cruz / PES - Penitenciária Estadual do Seridó, conforme consulta SIAPEN desta data.

Relatados.

De logo verifico que quando da publicação do Decreto 11.846/2023 o apenado cumpria pena de $penaTotalVEP meses de reclusão.

Dispõe o referido diploma legal, no seu art. 3º, que “Concede-se a comutação da pena remanescente, aferida em 25 de dezembro de 2023, de um quarto, se não reincidentes, e de um quinto, se reincidentes, às pessoas condenadas a pena privativa de liberdade, não beneficiadas coma suspensão condicional da pena e que até a referida data tenham cumprido um quinto da pena, se não reincidentes, ou um quarto, se reincidentes, e não preencham os requisitos deste Decreto para receber o indulto.”

** Aqui, como o apenado era primário à época do decreto, ele teria que ter cumprido 1/5 (um quinto) da pena, ou seja, **, o que não ocorreu.

**Aqui, como o apenado à época do decreto era reincidente, ele teria que ter cumprido 1/4 (um quarto) da pena, ou seja, **, o que não ocorreu.

DEMAIS CASOS DE INDEFERIMENTO

Em que pese o pedido se restringir à pena de XXXXXX pelo cometimento do crime tipificado no art. XXXXX, o apenado desatende as condições estabelecidas no Decreto 11.846/2023.

    INDEFERIMENTO POR SER CRIME HEDIONDO/CRIME IMPEDITIVO

Ora, a pena foi imposta em razão do crime previsto no art. 1º do próprio Decreto,  impeditivo para a concessão do indulto: DEIXAR SÓ O INCISO EM QUE ESTÁ O CRIME IMPEDITIVO

Art. 1º  O indulto coletivo e a comutação de penas concedidos às pessoas nacionais e migrantes não alcançam as que tenham sido condenadas:

I - por crime hediondo ou equiparado, nos termos do disposto na Lei nº 8.072, de 25 de julho de 1990;
II - por crime de tortura, nos termos do disposto na Lei nº 9.455, de 7 de abril de 1997;
III - por crime previsto na Lei nº 9.613, de 3 de março de 1998, exceto quando a pena aplicada não for superior a quatro anos;
IV - por crime previsto na Lei nº 13.260, de 16 de março de 2016;
V - pelos crimes previstos nos art. 312 a art. 319 do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 - Código Penal, exceto quando a pena aplicada não for superior a quatro anos;
VI - por crime previsto na Lei nº 7.716, de 5 de janeiro de 1989;
VII - pelos crimes previstos nos art. 149 e art. 149-A do Decreto-Lei nº 2.848, de 1940 - Código Penal;
VIII - por crime previsto na Lei nº 2.889, de 1º de outubro de 1956;
IX - por crime previsto na Lei nº 7.492, de 16 de junho de 1986, exceto quando a pena aplicada não for superior a quatro anos;
X - por crime previsto na Lei nº 14.133, de 1º de abril de 2021, exceto quando a pena aplicada não for superior a quatro anos;
XI - por crimes definidos no Decreto-Lei nº 1.001, 21 de outubro de 1969 - Código Penal Militar, que correspondam aos delitos previstos nos incisos I a X e XII a XVII;
XII - por crime previsto na Lei nº 9.605, de 12 de fevereiro de 1998, atribuído a pessoa jurídica;
XIII - por crime contra o Estado Democrático de Direito de que tratam os art. 359-I a art. 359-R do Decreto-Lei nº 2.848, de 1940 - Código Penal;
XIV - por crimes de violência contra a mulher constantes na Lei nº 11.340, de 7 de agosto de 2006, na Lei nº 13.718, de 24 de setembro de 2018, na Lei nº 14.192, de 4 de agosto de 2021, na Lei nº 14.132, de 31 de março de 2021, e na Lei nº 13.641, de 3 de abril de 2018;
XV - por crime previsto na Lei nº 12.850, de 2 de agosto de 2013, e no art. 288-A do Decreto-Lei nº 2.848, de 1940 - Código Penal;
XVI - pelos crimes previstos nos art. 239 a art. 244-B da Lei nº 8.069, de 13 de julho de 1990 - Estatuto da Criança e do Adolescente; e
XVII - por crime de tráfico ilícito de drogas, nos termos do disposto no caput e no § 1º do art. 33, nos art. 34 a art. 37 e no art. 39 da Lei nº 11.343, de 23 de agosto de 2006.

INDEFERIMENTO POR SER O APENADO MEMBRO DE FACÇÃO/RDD/PRESIDIO SEGURANÇA MÁXIMA/ OU QUE CELEBRARAM DELAÇÃO PREMIADA NA FORMA DO Art. 1º,§1º.

É que o apenado foi condenado na ação penal nº XXXXXXXX por integrar facção criminosa, nela desempenhando função de liderança ou participado de forma relevante em organização criminal/ celebrou acordo de delação/ está em Regime Diferenciado Disciplinar/, sendo que o art. 1º, §§1º e 4º, ambos do Decreto nº 11.846/2023, impedem o deferimento da comutação da pena:

Art. 1º. O indulto coletivo e a comutação de penas concedidos às pessoas nacionais e migrantes não alcançam as que tenham sido condenadas:
(...)
§ 1º  O indulto coletivo concedido a pessoas nacionais e migrantes, independentemente do crime cometido, não alcança as pessoas:
I - integrantes de facções criminosas que nelas desempenhem ou tenham desempenhado função de liderança ou participado de forma relevante em organização criminal;
II - que estejam submetidas ao Regime Disciplinar Diferenciado - RDD; ou
III - que estejam incluídas ou transferidas para cumprimento de pena em estabelecimentos penais de segurança máxima do Sistema Penitenciário Federal ou dos Estados e do Distrito Federal, assim classificados por ato do Poder Executivo para esse fim, na forma do disposto no art. 11-B da Lei nº 11.671, de 8 de maio de 2008.
(...)
§ 4º  O disposto neste Decreto não alcança as pessoas que tenham celebrado acordo de colaboração premiada, na forma prevista na Lei nº 12.850, de 2013.

APENADO QUE PRATICOU FALTA GRAVE NOS 12 MESES ANTERIORES.

************É que o apenado praticou falta grave em XXXXXXX, cuja homologação se deu pela decisão constante do ev. XXXXX, o que impede a  concessão da comutação da pena:

**********É que o apenado praticou falta grave em XXXXXXX, cuja apuração está em andamento, com audiência de justificação a ser designada, o que impede a  concessão da comutação da pena:

Art. 6º  A declaração do indulto e da comutação de penas prevista neste Decreto fica condicionada à inexistência de aplicação de sanção, reconhecida pelo juízo competente, em audiência de justificação, garantido o direito aos princípios do contraditório e da ampla defesa, por falta disciplinar de natureza grave, prevista na Lei nº 7.210, de 1984 - Lei de Execução Penal, cometida nos doze meses de cumprimento da pena contados retroativamente a 25 de dezembro de 2023.

    APENADO QUE PRATICOU CRIME IMPEDITIVO E AINDA NÃO CUMPRIU 2/3 DA PENA.

É que o apenado também foi condenado a XXXX meses referente ao art. XXXX, fato ocorrido em 25.03.2016, sentença condenatória de 28.04.2017, com trânsito em julgado ocorrido em 26.07.2018, ação penal nº XXXXXX, sendo este crime impeditivo, exigindo o Decreto o cumprimento de 2/3 (dois terços) da pena correspondente ao crime impeditivo para que se conceda comutação para os crimes comuns, estando previsto o impedimento do art. 9º, parágrafo único, do Decreto:

Art. 9º  As penas correspondentes a infrações diversas devem somar-se, para efeito da declaração do indulto e da comutação de penas, até 25 de dezembro de 2023.

Parágrafo único.  Na hipótese de haver concurso com crime descrito no art. 1º, não será declarado o indulto ou a comutação da pena correspondente ao crime não impeditivo enquanto a pessoa condenada não cumprir dois terços da pena correspondente ao crime impeditivo dos benefícios.

Portanto, condenado à pena de XXXXXX, sentença condenatória de XXXX, ação penal XXXXXX, em seguida condenado à pena de XXXXX, sentença condenatória de XXXXXX, sendo estes crimes comuns e não impeditivos, o apenado teria cumprido então XXXXX destas 02 (duas) penas, para somente após o que iniciou o cumprimento da pena de XXXXX de reclusão referente ao crime impeditivo, cuja sentença condenatória foi exarada em XXXXXXX, ação penal XXXXXX.

Na data de hoje, o apenado cumpriu XXXXXX da pena total, do que deve ser descontado os XXXXXXX das penas referentes aos crimes comuns, cujas condenações se deram primeiro, somente após o que iniciou o cumprimento da pena do crime impeditivo.

Ora, tem-se que cumpriu tão somente XXXXXX da pena do crime hediondo restando-lhe a cumprir XXXXXX desta pena.

Assim é que cumpriu, na data de hoje, menos de 1/10 (um décimo) desta pena, estando longe de atingir os 2/3 (dois terços) do cumprimento da pena do crime impeditivo para se beneficiar da comutação com base no Decreto 11.846/2023, mesmo que o pedido se limite aos crime comutáveis e ainda mais quando se considera que o requisito deveria ter sido atingido em 25.12.2023.

*******************Por óbvio, se o apenado não cumpriu o requisito na data de hoje, também não cumpriu em 25.12.2023, quanto havia cumprido menos pena ainda

Diante do exposto, em consonância com o parecer ministerial, indefiro a comutação da pena formulado no ev. XXXX, o que faço com escopo no art. XXXXXXX, do Decreto 11.846/2023.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_128',
        nome: 'INDULTO PENA DE MULTA - 2023 - INDEFERIMENTO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de XXXXXX imposta a XXXXXXXXXX pela prática de crimes do art. XXXX, ação penal XXX, art. XXXX, ação penal XXX.

*

A Defesa peticionou pugnando pelo indulto da pena de multa com fulcro no art. 2º inciso X, do Decreto Presidencial nº 11.846/2023 (ev. XXX)

Instado a se manifestar, o Ministério Público opinou pelo deferimento*indeferimento (ev. XXX).

*

O Ministério Público requereu a concessão do indulto da pena de multa, com fulcro no art. 2º inciso X, do Decreto Presidencial nº 11.846/2023 (ev. XXX)

Anoto aqui que o penitente está cumprindo pena na PEA – Penitenciária Estadual de Alcaçuz/ PES - Penitenciária Estadual do Seridó/ PERCM - Penitenciária Rogério Coutinho Madruga/ Cadeia Pública de Nova Cruz/ CPJC - Complexo Prisional João Chaves, conforme consulta SIAPEN desta data.

Relatados.

O pedido não deve ser deferido uma vez que o apenado não atende às regras do decreto concessivo.

Explico:

O art. 2º, do Decreto Presidencial nº 11.846/2023, em seu inciso X, bem como no art. 8º, exige que, para que a pena de multa seja indultada, não pode ser superior ao valor mínimo para o ajuizamento de execuções fiscais de débitos com a Fazenda Pública, ou, sendo, deve o apenado comprovar que não tem capacidade econômica de quitá-la, verbis:


Art. 2º.  Concede-se o indulto coletivo às pessoas, nacionais e migrantes:
(...)
X - condenadas a pena de multa, ainda que não quitada, independentemente da fase executória ou do juízo em que se encontre, aplicada isolada ou cumulativamente com pena privativa de liberdade, desde que não supere o valor mínimo para o ajuizamento de execuções fiscais de débitos com a Fazenda Nacional, estabelecido em ato do Ministro de Estado da Fazenda, ou que não tenham capacidade econômica de quitá-la, ainda que supere o referido valor;
(...)
Art. 8º.  O indulto ou a comutação da pena privativa de liberdade ou restritiva de direitos alcança a pena de multa aplicada cumulativamente, desde que, nos termos do disposto no inciso X do caput do art. 2º, não supere o valor mínimo para o ajuizamento de execuções fiscais de débitos com a Fazenda Nacional, estabelecido em ato do Ministro de Estado da Fazenda, ou que a pessoa condenada não tenha capacidade econômica de quitá-la, ainda que supere o referido valor.

Por sua vez, a Portaria do Ministério da Fazenda Pública Federal de nº 75/2022, estabelece R$ 20.000,00 (vinte mil reais) como limite mínimo para o ajuizamento de execuções fiscais de débitos com a Fazenda Pública.

Até este ponto, atende o apenado à condição para o indulto, porém desatende em outros pontos.

INDEFERIMENTO POR SER A MULTA SUPERIOR AO MÍNIMO PARA EXECUÇÃO ou POR NÃO COMPROVAÇÃO DA INCAPACIDADE ECONÔMICA

No caso, a multa supera aquele valor e o apenado não comprovou a incapacidade de arcar com seu pagamento, não podendo, portanto, ser indultada.

Tenho aqui que incapacidade financeira para pagamento da pena de multa não é presumível, não bastando a alegação de hipossuficiência para que não se efetue o pagamento, entendimento este pacificado na jurisprudência, verbis:

AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL. EXECUÇÃO PENAL. PROGRESSÃO DE REGIME. INADIMPLEMENTO DA PENA DE MULTA CUMULATIVAMENTE APLICADA. VEDAÇÃO AO DEFERIMENTO DA BENESSE DO ART. 112 DA LEP. POSSIBILIDADE. HIPOSSUFICIÊNCIA DO APENADO COMPROVADA. AFASTAMENTO. INCIDÊNCIA DA SÚMULA 7/STJ. AGRAVO REGIMENTAL NÃO PROVIDO.
(...)
    4. O Supremo Tribunal Federal pacificou o entendimento de que "o inadimplemento deliberado da pena de multa cumulativamente aplicada ao sentenciado impede a progressão no regime prisional, sendo tal condição excepcionada pela comprovação da absoluta impossibilidade econômica em pagar as parcelas do ajuste" (EP 8 ProgReg-AgR, Rel. Ministro ROBERTO BARROSO, Tribunal Pleno, julgado em 1º/7/2016, PROCESSO ELETRÔNICO DJe-213 divulg. 19/9/2017 public. 20/9/2017).
(...)
    7. Desse modo, constatado o inadimplemento da pena de multa aplicada cumulativamente à privativa de liberdade, o Juízo da Execução Criminal deverá, antes de deliberar acerca da progressão de regime, intimar o reeducando para efetuar o pagamento, ressaltando a possibilidade de parcelamento, a pedido e conforme as circunstâncias do caso concreto (art. 50, caput, do CP), bem como oportunizando   ao condenado comprovar, se for o caso, a absoluta impossibilidade econômica de arcar com seu valor sem prejuízo do mínimo vital para a sua subsistência e de seus familiares.
    9. Agravo regimental não provido.
(STJ - AgRg nº 2.178.502 – MG(2022/0234025-5). Relator Min. Reynaldo Soares da Fonseca. 25.10.22) (grifei)

E mais:

HABEAS CORPUS. EXECUÇÃO PENAL. PLEITO DE EXTINÇÃO DA PUNIBILIDADE POR INDULTO. DECRETO N. 9.246/2017. INCAPACIDADE ECONÔMICA PELO FATO DE O PACIENTE SER ASSISTIDO PELA DEFENSORIA PÚBLICA. INEXISTÊNCIA DE PRESUNÇÃO.
1. Não se presume a incapacidade econômica do apenado, para reparar o dano da infração, tão somente pelo fato de ser assistido por Defensor Público.
(...)
4. Ordem denegada.
(HC n. 479.065/SP, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 7/2/2019, DJe de 1/3/2019.) (grifei)

***Anoto, por oportuno, que o só fato de ter advogado constituído já leva à presunção de suficiência financeira. E ainda que assim não fosse, seria necessário o esgotamento dos meios de execução requeridos ou a serem requeridos pelo Ministério Público, pois, como como bem ponderou o Ministro ROGERIO SCHIETTI CRUZ, no julgamento do HC n. 672.632, "é ônus do sentenciado, durante a execução, justificar o descumprimento da sentença, também no ponto relacionado à multa." (AgRg no REsp n. 1.990.425/MG, relator Ministro Reynaldo Soares da Fonseca, Quinta Turma, julgado em 26/4/2022, DJe de 29/4/2022).

****Anoto, por oportuno, inviável a presunção da hipossuficiência econômica do apenado com base no fato de ele ser assistido pela Defensoria Pública, se não  esgotados os meios de execução requeridos ou a serem requeridos pelo Ministério Público, pois, como  como bem ponderou o Ministro ROGERIO SCHIETTI CRUZ, no julgamento do HC n. 672.632, "nem todos os processados criminalmente, patrocinados pela Defensoria Pública, são hipossuficientes. [...]. Assim, é ônus do sentenciado, durante a execução, justificar o descumprimento da sentença, também no ponto relacionado à multa." (AgRg no REsp n. 1.990.425/MG, relator Ministro Reynaldo Soares da Fonseca, Quinta Turma, julgado em 26/4/2022, DJe de 29/4/2022).

****Anoto, por oportuno, ser inviável a presunção da hipossuficiência econômica do apenado com base no fato da companheira/esposa dele ser beneficiada do Bolsa-Família, já que existem situações noticiadas de pessoas de excelente situação financeira ali cadastradas, em claro desvio da finalidade do Programa. Assim, é necessário o esgotamento dos meios de execução requeridos ou a serem requeridos pelo Ministério Público, pois, como como bem ponderou o Ministro ROGERIO SCHIETTI CRUZ, no julgamento do HC n. 672.632, "é ônus do sentenciado, durante a execução, justificar o descumprimento da sentença, também no ponto relacionado à multa." (AgRg no REsp n. 1.990.425/MG, relator Ministro Reynaldo Soares da Fonseca, Quinta Turma, julgado em 26/4/2022, DJe de 29/4/2022).


    INDEFERIMENTO POR SER CRIME HEDIONDO/CRIME IMPEDITIVO

Ora, a pena de multa foi imposta em razão do crime previsto no art. 1º do próprio Decreto,  impeditivo para a concessão do indulto: DEIXAR SÓ O INCISO EM QUE ESTÁ O CRIME IMPEDITIVO

Art. 1º  O indulto coletivo e a comutação de penas concedidos às pessoas nacionais e migrantes não alcançam as que tenham sido condenadas:

I - por crime hediondo ou equiparado, nos termos do disposto na Lei nº 8.072, de 25 de julho de 1990;
II - por crime de tortura, nos termos do disposto na Lei nº 9.455, de 7 de abril de 1997;
III - por crime previsto na Lei nº 9.613, de 3 de março de 1998, exceto quando a pena aplicada não for superior a quatro anos;
IV - por crime previsto na Lei nº 13.260, de 16 de março de 2016;
V - pelos crimes previstos nos art. 312 a art. 319 do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 - Código Penal, exceto quando a pena aplicada não for superior a quatro anos;
VI - por crime previsto na Lei nº 7.716, de 5 de janeiro de 1989;
VII - pelos crimes previstos nos art. 149 e art. 149-A do Decreto-Lei nº 2.848, de 1940 - Código Penal;
VIII - por crime previsto na Lei nº 2.889, de 1º de outubro de 1956;
IX - por crime previsto na Lei nº 7.492, de 16 de junho de 1986, exceto quando a pena aplicada não for superior a quatro anos;
X - por crime previsto na Lei nº 14.133, de 1º de abril de 2021, exceto quando a pena aplicada não for superior a quatro anos;
XI - por crimes definidos no Decreto-Lei nº 1.001, 21 de outubro de 1969 - Código Penal Militar, que correspondam aos delitos previstos nos incisos I a X e XII a XVII;
XII - por crime previsto na Lei nº 9.605, de 12 de fevereiro de 1998, atribuído a pessoa jurídica;
XIII - por crime contra o Estado Democrático de Direito de que tratam os art. 359-I a art. 359-R do Decreto-Lei nº 2.848, de 1940 - Código Penal;
XIV - por crimes de violência contra a mulher constantes na Lei nº 11.340, de 7 de agosto de 2006, na Lei nº 13.718, de 24 de setembro de 2018, na Lei nº 14.192, de 4 de agosto de 2021, na Lei nº 14.132, de 31 de março de 2021, e na Lei nº 13.641, de 3 de abril de 2018;
XV - por crime previsto na Lei nº 12.850, de 2 de agosto de 2013, e no art. 288-A do Decreto-Lei nº 2.848, de 1940 - Código Penal;
XVI - pelos crimes previstos nos art. 239 a art. 244-B da Lei nº 8.069, de 13 de julho de 1990 - Estatuto da Criança e do Adolescente; e
XVII - por crime de tráfico ilícito de drogas, nos termos do disposto no caput e no § 1º do art. 33, nos art. 34 a art. 37 e no art. 39 da Lei nº 11.343, de 23 de agosto de 2006.

INDEFERIMENTO POR SER O APENADO MEMBRO DE FACÇÃO/RDD/PRESIDIO SEGURANÇA MÁXIMA/ OU QUE CELEBRARAM DELAÇÃO PREMIADA NA FORMA DO Art. 1º,§1º.

É que o apenado foi condenado na ação penal nº XXXXXXXX por integrar facção criminosa, nela desempenhando função de liderança ou participado de forma relevante em organização criminal/ celebrou acordo de delação/ está em Regime Diferenciado Disciplinar/, sendo que o art. 1º, §§1º e 4º, ambos do Decreto nº 11.846/2023, impedem o deferimento do indulto:

Art. 1º. O indulto coletivo e a comutação de penas concedidos às pessoas nacionais e migrantes não alcançam as que tenham sido condenadas:
(...)
§ 1º  O indulto coletivo concedido a pessoas nacionais e migrantes, independentemente do crime cometido, não alcança as pessoas:
I - integrantes de facções criminosas que nelas desempenhem ou tenham desempenhado função de liderança ou participado de forma relevante em organização criminal;
II - que estejam submetidas ao Regime Disciplinar Diferenciado - RDD; ou
III - que estejam incluídas ou transferidas para cumprimento de pena em estabelecimentos penais de segurança máxima do Sistema Penitenciário Federal ou dos Estados e do Distrito Federal, assim classificados por ato do Poder Executivo para esse fim, na forma do disposto no art. 11-B da Lei nº 11.671, de 8 de maio de 2008.
(...)
§ 4º  O disposto neste Decreto não alcança as pessoas que tenham celebrado acordo de colaboração premiada, na forma prevista na Lei nº 12.850, de 2013.

    APENADO QUE PRATICOU CRIME IMPEDITIVO E AINDA NÃO CUMPRIU 2/3 DA PENA.

É que mesmo sendo o pedido de indulto de pena de multa imposta para crime não impeditivo, o apenado também foi condenado a XXXX meses de pena por crime tipificado no art. XXXX sendo este crime impeditivo, nos termos do art. 1º, inciso XVI do Decreto, e não havia cumprindo, até o dia 25.12.2023, 2/3 (dois terços) da pena correspondente a este crime, esbarrando no impedimento do art. 9º, Parágrafo Único, do Decreto:

Art. 9º  As penas correspondentes a infrações diversas devem somar-se, para efeito da declaração do indulto e da comutação de penas, até 25 de dezembro de 2023.

Parágrafo único.  Na hipótese de haver concurso com crime descrito no art. 1º, não será declarado o indulto ou a comutação da pena correspondente ao crime não impeditivo enquanto a pessoa condenada não cumprir dois terços da pena correspondente ao crime impeditivo dos benefícios.

Aqui registro que o apenado cometeu primeiramente art. XXXXl, cuja pena é de XXXX de reclusão (ação penal nº XXXX), e também o crime do art.XXX, cuja pena é de XXXX (ação penal nº XXXXX), sendo que, na data de hoje, cumpriu somente XXXXX da pena total.

Portanto, cumpridos XXXXX da pena total, o apenado ainda está cumprindo a pena art. XXX, de XXXX de reclusão, não tendo ***************sequer iniciado o cumprimento da pena do crime impeditivo do art. XXXX. ************** não tendo cumprido 2/3 (dois terços) da pena do crime impeditivo, uma vez que cumpriu menos de XXXX anos desta pena, estando longe de atingir os XXXX anos que seriam necessários para cumprir o requisito.

Observo aqui que o Decreto não limita o impedimento às penas privativas de liberdade, mas a todos os types de penas, uma vez que diz somente que "não será declarado o indulto ou a comutação da pena".

Por óbvio que se o apenado não cumpriu o requisito temporal na data de hoje, também não o atingiu em 25.12.2023, quando havia cumprido menos pena ainda.

Diante do exposto, em consonância/em dissonância com o parecer ministerial, indefiro o indulto da pena de multa, o que faço com escopo no art. 9º, parágrafo único, do Decreto 11.846/2023.

P.R.I. Voltem-me conclusos para análise do pedido de parcelamento e de progressão de regime do ev. 152.1.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_129',
        nome: 'FERNANDO - LIVRAMENTO CONDICIONAL - REVOGAÇÃO - CRIME ANTERIOR',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Processo nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Em gozo de livramento condicional concedido em xxx (ev. XXX), o apenado foi condenado definitivamente por prática de delito doloso praticado em data anterior, no caso, em xxxxxxx, ação penal nº XXXXXXX, tendo sido recebida a correspondente Guia de Recolhimento neste juízo (ev. XXX).

Unificadas as penas, vieram-me os autos conclusos para revogação do benefício.

Anoto que o penitente está custodiado na PEA - Penitenciária Estadual de Alcaçuz, conforme consulta SIAPEN desta data.

É o relatório.

Nos termos do art. 86, II, do Código Penal, revoga-se o livramento se o liberado vem a ser condenado a pena privativa de liberdade, em sentença irrecorrível, por crime cometido antes da vigência do benefício, mas é possível nova concessão e o tempo de prova se considera como pena cumprida.

É o caso.

A propósito, apesar da controvérsia doutrinária, os tribunais superiores entendem que, "à luz do artigo 86, inciso II, do Código Penal, a condenação à pena privativa de liberdade, em sentença irrecorrível, por crime cometido anteriormente à concessão de livramento condicional é causa obrigatória da do benefício." (HC n. 15.929/SP, relator Ministro Hamilton Carvalhido, Sexta Turma, julgado em 14/8/2001, DJ de 29/10/2001, p. 271).

No mesmo sentido:

PENAL. PROCESSUAL PENAL. HABEAS CORPUS. PEDIDOS SUPERVENIENTES DA DEFENSORIA PÚBLICA. NÃO CONHECIMENTO. SUPRESSÃO DE INSTÂNCIA. NOVA CONDENAÇÃO PENAL. REVOGAÇÃO DO BENEFÍCIO DO LIVRAMENTO CONDICIONAL E REGRESSÃO DE REGIME. POSSIBILIDADE. ART. 86 DO CÓDIGO PENAL E ARTS. 111 E 118 DA LEI DE EXECUÇÃO PENAL. IMPETRAÇÃO PARCIALMENTE CONHECIDA E, NESSA EXTENSÃO, ORDEM DENEGADA. I - (...). II - A superveniência de condenação penal transitada em julgado, com imposição de pena privativa da liberdade, é causa de revogação obrigatória do livramento condicional, sendo irrelevante que a nova condenação se refira a fato anterior à vigência do livramento (art. 86 do Código Penal e arts. 140 e 141 da Lei de Execução Penal). III - A regressão ao regime fechado, considerada a soma das duas penas, tem suporte nos arts. 111, parágrafo único, e 118, II, da Lei de Execução Penal. IV – Impetração conhecida em parte e, nessa extensão, ordem d e n e g a d a . (HC 117201, Relator(a): RICARDO LEWANDOWSKI, Segunda Turma, julgado em 04-02-2014, PROCESSO ELETRÔNICO DJe-032 DIVULG 14-02-2014 PUBLIC 17-02-2014) - transcrição parcial.

Por oportuno, anoto tratar-se de crime anterior ao benefício, devendo ser descontando da pena, em consequência, o tempo em que esteve solto o apenado (Código Penal, art. 88).

Isto posto, revogo o livramento condicional de que beneficiário o apenado.

P.R.I., expedindo-se novo Atestado de Pena, constando como pena cumprida o período em que o apenado esteve solto em razão do livramento condicional.

$assinaturaJuizDireito

$rodape`,
    },
];

// Concatena lote6 parte 4 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE6_PARTE4);

// Lote 7 - Parte 1: Modelos 130-137 (início de 151-175.txt)
export const MODELOS_SEEU_LOTE7_PARTE1: ModeloSEEU[] = [
    {
        id: 'seeu_130',
        nome: 'progressão CTC',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso
 
Vistos etc
Executando-se pena privativa de liberdade em regime fechado, certificou-se que o apenado atingiu o requisito objetivo para progressão, bem como informou a unidade prisional que ele apresenta bom comportamento prisional.
Interveio o Ministério Público, opinando *pela progressão de regime. *contrariamente à progressão de regime, por entender que **submissão do apenado a exame criminológico.
Relatados.
Como se lê na jurisprudência do Supremo Tribunal Federal, mostra-se “viável a realização do exame criminológico nas situações em que o Juiz da Execução, forte no exercício do poder geral de cautela, considerar necessário para a formação do seu convencimento” (Rcl nº 22.685/SP, Primeira Turma,Relatora para o acórdão a MinistraRosa Weber, DJe de 16/9/2016).
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
        id: 'seeu_131',
        nome: 'monitoramento bateria sem carga definitiva',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Executando-se em regime semiaberto pena privativa de liberdade, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que ele deixara descarregar completamente a bateria do equipamento desde ***.
Oportunizado ao apenado justificar-se, disse que ***.
Adiante, opinou o Ministério Público pelo reconhecimento da falta grave, com regressão de regime, enquanto o defensor observou que *.
Relatados.
Determina a Lei de Execução Penal, no art. 146-C, inciso I,  que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "receber visitas do servidor responsável pela monitoração eletrônica, responder aos seus contatos e cumprir suas orientações, esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.
Por outro lado, o mesmo diploma estatui, no art. 50, inciso VI, c/c. art. 39, inciso V, configurar falta grave descumprir as ordens recebidas.
No caso, ao  deixar  de  carregar  a  bateria  da  tornozeleira eletrônica,  com a perda do sinal do GRPS, e não ter atendido às ligações telefônicas, o  apenado  desobedeceu  à  ordem  de  manter o aparelho em funcionamento, o que configura falta grave, impedindo inclusive a vigilância eletrônica, o que, em última análise, configura fuga.
Ora, consoante o art. 146-C da LEP, os apenados que são incluídos em prisão domiciliar com monitoramento eletrônico, são instruídos acerca dos cuidados que deverão adotar com o equipamento, sendo-lhe impostos deveres de abstenção, dentre os quais de remover, modificar ou danificar a tornozeleira. No caso, o fato de ter o apenado intencionalmente impedido a emissão de sinal, deixando sem carga a bateria do equipamento, é circunstância correspondente à falta grave consistente em fuga, uma vez que inviabiliza a fiscalização da execução da pena, o que equivale a estar em fuga.
Neste sentido:
"HABEAS  CORPUS.  EXECUÇÃO  PENAL. IMPETRAÇÃO SUBSTITUTIVA DE RECURSO ESPECIAL.  FALTA GRAVE. CONFIGURAÇÃO. REGRESSÃO. POSSIBILIDADE. WRIT NÃO CONHECIDO. 1. (...) 2.  Caso em que não se vislumbra constrangimento ilegal a ser sanado de ofício. Ao deixar de carregar a bateria da tornozeleira eletrônica e circular pela cidade livremente pela cidade, longe da esfera de vigilância das autoridades competentes, como consta dos autos, o paciente desobedeceu à ordem de manter o aparelho em funcionamento, incidindo na hipóteses do art. 50, inciso VI, c.c. o art. 39, inciso V, ambos da Lei de Execução Penal - LEP. 3. O art. 146-C, parágrafo único, inciso I, da Lei de Execução Penal autoriza a regressão de regime, não se vislumbrando, no ponto, qualquer ilegalidade. 4. Writ não conhecido. (HC 342.466/SP, Rel. Ministra MARIA THEREZA DE ASSIS MOURA, SEXTA TURMA, j.em 02/06/2016).
Finalmente, observo que, nos termos do art. 118, I, da LEP, a execução da pena privativa de liberdade ficará sujeita à forma regressiva, com a transferência para qualquer dos regimes mais rigorosos, quando o condenado praticar fato definido como  falta grave.
Isto posto, torno definitiva a regressão do regime prisional para fechado,  bem como considero perdido um terço**quinto (dada a confissão) do tempo já remido e o que viesse a ser remido até a data da falta disciplinar.
Atualize-se a GEP.
P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_132',
        nome: 'falta grave sem provas',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.
*Cumprindo pena privativa de liberdade em regime fechado, foi o apenado punido disciplinarmente, por ter praticado falta grave consistente em **.
*O apenado teve o regime prisional regredido para fechado em razão de **.
Em audiência, o apenado apresentou justificativa, alegando que ...  
Interveio o Ministério Público, opinando pelo não reconhecimento da falta grave, dada a falta de provas, enquanto a defesa pugnou pelo acatamento das justificativas apresentadas.
Relatados.
Além do apenado negar a conduta, a sindicância junta ao evento ** não apresenta provas suficientes de que ele a teria praticado.
Impossível me parece homologar-se punição amparada em tal instrumento processual.
*Em assim sendo, cancelo a punição disciplinar aplicada a *.
*Em assim sendo, revogo a decisão que regrediu provisoriamente o regime prisional, retornando o apenado a cumprir a pena como antes imposta.
Comunique-se ao estabelecimento prisional e atualize-se a Guia de Execução Penal.
Diligencie-se.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_133',
        nome: 'retificação tráfico privilegiado',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.
Tratam os autos de execução de pena em que o Ministériio Público pugnou pela retificação da guia, posto tel utilizado fração errada de cumprimento da pena para benefício prisional, já que o delito de tráfico de drogas privilegiado (lei 11.343, art. 33, § 4º) não seria hediondo.
Relatados.
Com razão o Ministério Público, pois o Supremo Tribunal Federal, no julgamento do HC 118.533, Rel. Min. Cármen Lúcia, firmou orientação no sentido de que o tráfico privilegiado (art. 33, parágrafo 4º, da Lei 11.343/2006), não deve ser considerado crime de natureza hedionda.
Isto posto, mando retificar a guia de execução penal, utilizando nos cálculos para benefícios prisionais as frações de pena adequadas aos crimes comuns (não hediondos).
P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_134',
        nome: 'prisão domiciliar indeferindo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.
Trata-se de execução de pena privativa de liberdade imposta a , de * anos e ** meses de reclusão por delito capitulado no art. *** do Código Penal, atualmente em regime semiaberto, tendo ela apresentado justificativa dos dez dias de ausência, alegando doença intestinal não especificada por protozoários (fls. XX).
Interveio o Ministério Público opinando pelo indeferimento (fl. 55).
Relatados.
O art. 117 da LEP somente autoriza a concessão de prisão domiciliar para condenado em regime aberto, nas hipóteses expressamente previstas: (a) condenado maior de 70 anos; (b) condenado acometido de doença grave; © condenada com filho menor ou deficiente físico ou mental; (d) condenada gestante.
É cediço que a jurisprudência tem admitido a concessão de prisão domiciliar para condenados em regime fechado, mas somente em situações excepcionalíssimas, no caso de portadores de doença grave, quando comprovada a impossibilidade da assistência médica no estabelecimento prisional em que cumprem pena.
Não é o caso, pois a apenada tem recebido a devida atenção à saúde. pois é atendida regularmente pela equipe médica da unidade prisional e conduzida para tratamento externo sempre que necessário.
**Assim, verifica-se que a penitente não satisfaz os requisitos autorizadores para a concessão da prisão domiciliar, mesmo que por dez dias, porquanto cumpre pena em regime semiaberto, apenas assinando a lista de presença, sem recolhimento ao presídio, bem como não demonstrou a inviabilidade de tratamento concomitante ao cumprimento da pena.
Ante o exposto, e em consonância com o parecer ministerial, indefiro o pleito da Defensoria Pública e tenho como pena não cumprida o período de XX deste ano, devendo-se, portanto, atualizar a GEP.
P.I., solicite-se atestado de conduta carcerária atualizado, inclusive constando os dias de ausência da apenada
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_135',
        nome: 'LC concessão',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

 
Vistos etc.
Trata-se de execução de pena de XXX de reclusão, atualmente em regime XX, sendo noticiado que o apenado atingiu requisito objetivo para possível concessão de livramento condicional, 
**requer o livramento condicional face à pena pela qual condenado, alegando atender às condições estabelecidas na legislação penal em vigor**,
no que mereceu parecer favorável do **Conselho Penitenciário** e do Ministério Público.
Relatados.
Trata-se de condenado por delito de *, cuja pena importou em * anos de reclusão, atualmente em regime *, mas já cumprida mais de **dois terços**, estando previsto seu término para *, sendo informado pelo estabelecimento penal como tendo boa conduta carcerária (fl. **).
Interveio o Ministério Público, opinando pela concessão do livramento condicional.
De seu lado, verifica-se atender o apenado às exigências dos diversos incisos do art. 83 do estatuto penal, pois cumpriu mais de **dois terços da pena**, comprovando no seu decorrer comportamento satisfatório, enquanto ressarciu os danos causados.
Isto posto, com fundamento nos arts. 83 e seguintes do Código Penal c/c arts. 131 e segs. da Lei de Execução Penal, concedo ao apenado o livramento condicional, impondo-lhe, sob pena de revogação do benefício, a observância das seguintes condições, até a data do término do cumprimento da pena: comparecer mensalmente a este Juízo para comprovar residência fixa e trabalho honesto; recolher-se à sua residência até às 23h00; não freqüentar bares, casas de prostituição e de jogos ilícitos; não ingerir bebidas alcóolicas ou similares; não usar drogas ilícitas; não portar armas; não mudar de residência sem prévio aviso a este Juízo, do qual precisará de autorização para residir fora da Comarca.
Expeça-se Carta de Livramento, nos termos do art. 136 da Lei 7.210/84.
Comunique-se ao Conselho Penitenciário para designar cerimônia do livramento condicional.
P.R.I., diligenciando-se como necessário.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_136',
        nome: 'progressao cautelar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_137',
        nome: 'monitoramento bateria sem carga cautelar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena privativa de liberdade em regime semiaberto, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que deixara descarregar completamente a bateria do equipamento desde ***.

Relatados.

Determina a Lei de Execução Penal, no art. 146-C, inciso I, que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "receber visitas do servidor responsável pela monitoração eletrônica, responder aos seus contatos e cumprir suas orientações, esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.

Por outro lado, o mesmo diploma estatui, no art. 50, inciso VI, c/c. art. 39, inciso V, configurar falta grave descumprir as ordens recebidas.

No caso, ao deixar de carregar a bateria da tornozeleira eletrônica, com a perda do sinal do GRPS, e não ter atendido às ligações telefônicas, o apenado desobedeceu à ordem de manter o aparelho em funcionamento, o que configura falta grave.

Neste sentido:

AGRAVO REGIMENTAL NO HABEAS CORPUS. FALTA GRAVE. MANTER EQUIPAMENTO DE MONITORAMENTO ELETÔNICO DESCARREGADO. CARACTERIZAÇÃO. ART. 50, VI, C/C ART. 39, V, DA LEP. REGRESSÃO DE REGIME. LEGALIDADE. RECURSO NÃO PROVIDO. 1. In casu, ao deixar de carregar a bateria da tornozeleira eletrônica e circular pela cidade livremente, longe da esfera de vigilância das autoridades competentes, como consta dos autos, o paciente desobedeceu à ordem de manter o aparelho em funcionamento, incidindo na hipótese do art. 50, inciso VI, c.c. o art. 39, inciso V, ambos da Lei de Execução Penal – LEP. 2. A prática de infração disciplinar de natureza grave ocasiona a regressão de regime prisional. Precedentes desta Corte. 3. Agravo regimental não provido. (AgRg no HC n. 595.942/SP, relator Ministro Reynaldo Soares da Fonseca, Quinta Turma, julgado em 9/2/2021, DJe de 11/2/2021.)

Finalmente, observo que, nos termos do art. 118, I, da LEP, a execução da pena privativa de liberdade ficará sujeita à forma regressiva, com a transferência para qualquer dos regimes mais rigorosos, quando o condenado praticar fato definido como falta grave.

Isto posto, decreto cautelarmente a regressão provisória, para fechado, do regime prisional imposto ao cumprimento da pena.

Expeça-se mandado de prisão e, quando cumprido, coloque-se o feito em pauta para audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote7 parte 1 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE7_PARTE1);

// Lote 7 - Parte 2: Modelos 138-145 (continuação de 151-175.txt)
export const MODELOS_SEEU_LOTE7_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_138',
        nome: 'retificação GEP data-base negando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.
Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões deveria  ser a da última prisão, calculando-se o requisito objetivo sobre o saldo da pena.
Relatados.
Sem razão o Ministério Público, pois, no caso da execução de uma única condenação, o requisito objetivo deve ser calculado sobre a pena total, utilizando-se como data-base a data da primeira prisão (ou da última falta grave, se ocorrida), e não a última prisão ou mesmo a data do trânsito em julgado da sentença condenatória.
Ademais, deve ser considerada como pena cumprida todo o período de recolhimento, aí incluída as prisões provisória e a definitiva.
Nesse sentido:
"(...) em se tratado de única condenação criminal com trânsito em julgado, o marco inicial da contagem do prazo para a concessão de benefícios da execução, permanecendo o réu segregado na fase processual, deve ser a data da sua prisão cautelar, e não o momento do trânsito em julgado da sentença penal condenatória." (AGRAVO EM RECURSO ESPECIAL Nº 208.602, Relator: Min. MARCO AURÉLIO BELLIZZE, j. 01/08/2014).
(...) considerar a data do trânsito em julgado da sentença penal condenatória como data-base para a obtenção dos benefícios da execução, além de negar vigência à legislação penal em vigor e à jurisprudência assente nos Tribunais Superiores, causaria bis in idem contra e não em benefício do sentenciado, até porque tal instituto é de aplicabilidade em favor do réu e não do Estado. Além disso, poderia ocasionar que sentenciados ao cumprimento de penas mais curtas viessem a cumpri-la integralmente em regime fechado, sem a possibilidade de progressão, pois esta dependeria do trânsito em julgado da condenação. (AREsp 311676 Relª Ministra ALDERITA RAMOS DE OLIVEIRA - DESEMBARGADORA CONVOCADA DO TJ/PE - , Dje 25/04/2013)
Isto posto, mantenho a guia de execução penal na forma como lançada.
P.R.I.   
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_139',
        nome: 'regressão fuga inexistente revogação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        nome: 'regressão rompimento monitoração definitiva',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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

EXECUÇÃO  PENAL.  HABEAS  CORPUS  SUBSTITUTIVO  DE RECURSO ESPECIAL. ROMPIMENTO  DE TORNOZELEIRA ELETRÔNICA. CONFIGURAÇÃO DE FALTA GRAVE. REGRESSÃO   DE   REGIME.   INTERRUPÇÃO   DE  PRAZO  PARA  LIVRAMENTO CONDICIONAL,   INDULTO   E   COMUTAÇÃO   DE  PENA.  IMPOSSIBILIDADE. SÚMULAS/STJ  441, 534 E 535. MANIFESTA ILEGALIDADE VERIFICADA. ORDEM NÃO CONHECIDA. WRIT CONCEDIDO DE OFÍCIO. (...) 2.  Este  Superior  Tribunal de Justiça possui entendimento de que o rompimento da tornozeleira eletrônica configura falta disciplinar de natureza  grave,  nos  termos  do  art.  50,  VI, e 146-C, da Lei de Execução Penal. Precedentes. 3.  A  jurisprudência  desta  Corte  Superior firmou entendimento no sentido  de  que  a  prática  de falta disciplinar de natureza grave implica  a regressão de regime, conforme estabelecido pelo art. 118, I, da LEP. 4.  A  prática de falta grave pelo sentenciado, no curso da execução da  pena,  altera  a data-base para a concessão de novos benefícios, exceto  para  fins de livramento condicional, indulto e comutação da pena.  Entendimento  consolidado  nas  Súmulas  441, 535 e 534 desta Corte e no recurso repetitivo, REsp 1.364.192/RS. 5.  Habeas  corpus  não  conhecido. Ordem concedida, de ofício, para afastar  a  interrupção  da contagem do lapso temporal em relação ao livramento condicional, ao indulto e à comutação de pena. (HC 363.742/RS, Rel. Ministro RIBEIRO DANTAS, QUINTA TURMA, julgado em 15/12/2016, DJe 01/02/2017)

HABEAS   CORPUS.  IMPETRAÇÃO  ORIGINÁRIA.  SUBSTITUIÇÃO  AO  RECURSO ORDINÁRIO   CONSTITUCIONAL  CABÍVEL.  IMPOSSIBILIDADE.  RESPEITO  AO SISTEMA RECURSAL PREVISTO NA CARTA MAGNA. NÃO CONHECIMENTO. (...) EXECUÇÃO  PENAL.  REGIME  SEMIABERTO. AUSÊNCIA DE VAGA. COLOCAÇÃO DO SENTENCIADO EM PRISÃO DOMICILIAR COM MONITORAMENTO ELETRÔNICO. ROMPIMENTO  DA  TORNOZELEIRA. FALTA GRAVE. RECONHECIMENTO. REGRESSÃO DE  REGIME  E ADEQUAÇÃO DA DATA-BASE. POSSIBILIDADE. CONSTRANGIMENTO ILEGAL. INEXISTÊNCIA. 1. Descumprida a condição da prisão domiciliar, diante do rompimento da  tornozeleira, configurado está o cometimento da falta grave, nos termos  dos artigos 146-C, inciso II e parágrafo único, inciso I c/c 50,  inciso  VI,  todos  da  Lei n. de Execução Penal, autorizando a regressão do regime e alteração da data-base para nova progressão. 2. Habeas corpus não conhecido. (HC 304.614/RS, Rel. Ministro JORGE MUSSI, QUINTA TURMA, julgado em 26/04/2016, DJe 03/05/2016)
 
***A justificativa é inaceitável, porque era obrigação do apenado zelar pelo equipamento de monitoramento eletrônico.
Isto posto, regrido para fechado o regime de execução da pena privativa de liberdade, bem como considero perdido um quinto (dada a confissão) do tempo já remido e o que viesse a ser remido até a data da última falta grave.
P.R. I. Atualize-se o quadro de eventos. Cópia desta decisão servirá como ofício dando ciência  ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_141',
        nome: 'progressão para semiaberto hediondo e comum',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_142',
        nome: 'monitoramento violação minutos',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso


Vistos etc.
Executando-se em regime semiaberto pena privativa de liberdade, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a Sejuc/CEME informado que descumprira as condições firmadas, pois ***.
Interveio o Ministério Público, pedindo a suspensão do benefício da prisão domiciliar com monitoramento eletrônico.
Relatados.

Determina a Lei de Execução Penal, no art. 146-D, inciso II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar os deveres a que estiver sujeito durante a sua vigência ou cometer falta grave.
No caso, o apenado descumpriu por ** minutos o dever de "permanecer recolhido em sua residência, ou local indicado quando da instalação do equipamento, todos os dias no horário compreendido entre 20h e 05h, salvo autorização anterior do juízo".
Tal transgressão parece-me configurar apenas falta leve, devendo ser punido com advertência.
Isto posto, reconheço como falta leve a transgressão anotada, mandando constar uma advertência no prontuário do apenado, com efeitos no seu comportamento.
P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_143',
        nome: 'indulto negando objetivo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.
*, condenado a cumprir pena de *** de reclusão, requereu indulto, tendo obtido parecer **favorável do Conselho Penitenciária e contrário do Ministério Público, por ausente o requisito objetivo**.

Relatados.

**Com**Sem razão o Ministério Público, pois o apenado, condenado por crime cometido com **violência**grave ameaça** à pessoa, foi punido por falta grave praticada em **, data da qual transcorreram até hoje menos de 24 meses, contados até a  da publicação do decreto nº **, o que ocorreu em **.

**Com**Sem razão o Ministério Público, pois trata-se de apenado por crime cometido com **violência**grave ameaça** à pessoa, havendo impedimento legal ao benefício no art. ***, do decreto nº **..

**Assim, verifica-se impedimento legal para o benefício perseguido, constante do art. ***, do decreto nº **.

Isto posto, indefiro o pedido de fls., por falta do requisito objetivo.

P. R. I., aguardando-se o cumprimento da pena.

$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_144',
        nome: 'regressão definitiva fuga',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Então cumprindo pena em regime semiaberto o apenado deixou de se recolher ao estabelecimento prisional desde **, sendo recapturado/reapresentando-se em **.
Oportunizado ao apenado justificar-se, ****.
Opinou o Ministério Público pela regressão de regime, enquanto a defesa **observou que o afastamento daquele da Comarca se deu em razão de ameaças de morte recebidas**pediu o não reconhecimento da falta grave, em razão da inexistência de PAD com sua efetiva participação** pediu a atualização da GEP.
Relatados.
A Lei nº 7.210/84, no seu art. 118, inc. I, última figura, dispõe sobre a transferência do apenado para  regime  mais rigoroso de cumprimento de  pena privativa  de liberdade quando pratica falta grave, enquanto  o art.  50, inc. II, do mesmo estatuto esclarece, que a  comete  o condenado que fugir.
É o caso dos autos, sendo inaceitável a justificativa apresentada, pois caberia ao apenado ter comunicado o fato a Juízo e pedido sua transferência para outro presídio ou sua inserção na monitoração eletrônica, não podendo decidir, a seu talante, quando e onde cumprir a pena, mesmo que alegue **ter inimigos**falta de condições financeiras.**
**Lembro, por derradeiro e face ao alegado pela defesa, que a oitiva do condenado pelo juízo. o Supremo Tribunal Federal, no RE 972.598, com repercussão geral reconhecida, fixou a seguinte tese:
A oitiva do condenado pelo juízo da execução penal, em audiência de justificação realizada na presença do defensor e do Ministério Publico, afasta a necessidade de prévio procedimento administrativo, e assim como supre eventual ausência ou insuficiência de defesa técnica no PAD instaurado para apurar a prática de falta greve durante o cumprimento da pena.

Isto posto, regrido para fechado o regime de execução da pena privativa de liberdade, bem como considero perdido um quinto (dada a confissão) do tempo já remido e o que viesse a ser remido até a data da fuga.
P.R. I. Atualize-se o quadro de eventos. Cópia desta decisão servirá como ofício dando ciência  ao estabelecimento prisional de seus termos.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_145',
        nome: 'monitoramento rompimento definitiva (variante)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Executando-se em regime semiaberto pena privativa de liberdade, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a Seap/CEME informado que ele rompera o equipamento.
Ouvido em audiência de justificação, o apenado confirmou a conduta, alegando que o fizera porque ***
Interveio o Ministério Público, opinando pela regressão de regime, enquanto a defesa pediu a atualização da guia de execução penal.
Relatados.
Determina a Lei de Execução Penal, no art. 146-C, inciso II, que o condenado fiscalizado por meio da monitoração eletrônica temo dever de "abster-se de remover, de violar, de modificar, de danificar de qualquer forma o dispositivo de monitoração eletrônica ou de permitir que outrem o faça" (art. 146-C, II), esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.
Tal conduta, conforme decidiu o Colendo Superior Tribunal de Justiça, configura falta grave, verbis:
HABEAS CORPUS. IMPETRAÇÃO ORIGINÁRIA. SUBSTITUIÇÃO AO RECURSO ORDINÁRIO CONSTITUCIONAL CABÍVEL. IMPOSSIBILIDADE. RESPEITO AO SISTEMA RECURSAL PREVISTO NA CARTA MAGNA.NÃO CONHECIMENTO. 1. (...) EXECUÇÃO PENAL. REGIME SEMIABERTO. AUSÊNCIA DE VAGA. COLOCAÇÃO DO SENTENCIADO EM PRISÃO DOMICILIAR COM MONITORAMENTO ELETRÔNICO. ROMPIMENTO DA TORNOZELEIRA.FALTA GRAVE. RECONHECIMENTO. REGRESSÃO DE REGIME E ADEQUAÇÃO DA DATA-BASE. POSSIBILIDADE.CONSTRANGIMENTO ILEGAL. INEXISTÊNCIA. 1. Descumprida a condição da prisão domiciliar, diante do rompimento da tornozeleira, configurado está o cometimento da falta grave, nos termos dos artigos 146-C, inciso II e parágrafo único, inciso I c/c 50,inciso VI, todos da Lei n. de Execução Penal, autorizando a regressão do regime e alteração da data-base para nova progressão. 2. Habeas corpus não conhecido. (HC 304.614/RS, Rel. Ministro JORGE MUSSI, QUINTA TURMA, julgado em 26/04/2016, DJe 03/05/2016).
Como no seu voto anotou o Ministro Jorge Mussi, "é dever do condenado submetido o monitoramento eletrônico zelar pelo equipamento,conforme orientação recebida, implicando sua violação na regressão do regime, nos termos do artigo 146-C, inciso II e parágrafo único,inciso I, da Lei de Execução Penal".
Não o fazendo, rompendo o equipamento, configura-se, continuou Sua Excelência, o descumprimento da ordem e... "o cometimento da falta grave, como previsto no artigo 50, inciso VI, da LEP, que está assim redigido: Art. 50. Comete falta grave o condenado à pena privativa de liberdade que: [...]VI - inobservar os deveres previstos nos incisos II e V, do artigo 39, desta Lei. [E] O inciso V do artigo 39, da LEP, por sua vez, disciplina ser dever do condenado o fiel cumprimento das ordens recebidas."
É o caso, sendo inaceitável a justificativa apresentada, pois ***
Isto posto, decreto a regressão, para o fechado, do regime prisional imposto ao cumprimento da pena e considero perdido um quinto do tempo já remido e o que viesse a ser até a data da falta grave, dada a atenuante da confissão.
P.R.I. Atualize-se o cálculo dos requisitos temporais e cientifique-se ao estabelecimento prisional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote7 parte 2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE7_PARTE2);

// Lote 7 - Parte 3: Modelos 146-154 (final de 151-175.txt)
export const MODELOS_SEEU_LOTE7_PARTE3: ModeloSEEU[] = [
    {
        id: 'seeu_146',
        nome: 'regressão definitiva fuga e novo crime',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.  
Então cumprindo pena em regime semiaberto, o apenado deixou de se recolher ao estabelecimento prisional desde *** (evento ***), sendo recapturado em ***, quando preso em flagrante por novo crime (evento ***)., pelo qual foi denunciado na ação penal nº ***, em curso no ** Vara Criminal da Comarca de Natal,  consoante informação contida no Sistema de Automação do Judiciário - SAJ/PG5.
Oportunizado ao apenado justificar-se, disse que XX (fl. XX).
Opinou o Ministério Público pela regressão definitiva, enquanto a Defensora ** Defesa pediu atualização da guia de execução penal.
Relatados.
A Lei nº 7.210/84, no seu art. 118, inc. I, última figura, dispõe sobre a transferência do apenado para  regime  mais rigoroso de cumprimento de  pena privativa  de liberdade quando pratica falta grave, enquanto  o art.  50, inc. II, do mesmo estatuto esclarece, que a  comete  o condenado que fugir.
É o caso dos autos, sendo inaceitável a justificativa apresentada, pois caberia ao apenado ter comunicado o fato a Juízo e pedido sua transferência para outro presídio ou sua inserção na monitoração eletrônica, não podendo decidir, ao seu arbítrio, quando recolher-se ou não ao cumprimento de pena, mesmo que alegue dificuldade de locomoção ao presídio em razão de trabalho externo.
Ademais, a situação relatada nestes autos também se encontra exposta no art. 118, primeira parte, da Lei nº 7210/84, como causa impositiva de regressão de regime de cumprimento de pena privativa de liberdade, e sobre a qual decidiu a Suprema Corte não ser necessário que o crime doloso tenha sido objeto de sentença condenatória transitada em julgado.
Afinal, "a prática de 'fato definido como crime doloso', para fins de aplicação da sanção administrativa da regressão, não depende de trânsito em julgado da ação penal respectiva" (HC 93782, Relator(a): Min. RICARDO LEWANDOWSKI, Primeira Turma, j. em 16/09/2008).
Nesse sentido dispõe a Súmula do Superior Tribunal de Justiça: O recognitionimento de falta grave decorrente do cometimento de fato definido como crime doloso no cumprimento da pena prescinde do trânsito em julgado de sentença penal condenatória no processo penal instaurado para apuração do fato. (Verbete 526, aprovado pela 3ª Seção em 13/05/2015).
Isto posto, homologo as faltas graves (fuga e novo crime) e decreto a regressão, para o fechado, do regime prisional imposto ao cumprimento da pena, considerando perdido um quinto do tempo já remido e o que viesse a ser até a data da última daquelas, dada a atenuante da confissão.
P.R.I. Atualize-se o quadro de eventos e cientifique-se ao estabelecimento prisional.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_147',
        nome: 'falta grave desconsiderando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que se noticiou a prática de falta grave, consistente em *fuga *posse de telefone celular *posse de drogas *desacato a agente penitenciário *, juntando-se aos autos a correspondente sindicância *informando a autoridade penitenciária, porém, que os fatos não foram apurados em sindicância.
**Interveio o Ministério Público, opinando pela desconsideração da suposta falta disciplinar.
Relatados.
A conduta noticiada configura falta grave, conforme disposto nos artigos 50 e seguintes da Lei nº 7.210/84.
*Contudo, da leitura da sindicância junta não se observa qualquer indício da conduta por parte do apenado, inexistindo fundamento para as conclusões da autoridade sindicante.
*Contudo, da leitura da sindicância junta não se observa qualquer indício da conduta por parte do apenado, tendo inclusive a autoridade sindicante optado por não punir o sindicado.
*Contudo, das informações recebidas da autoridade penitenciária não se observa qualquer indício da conduta por parte do apenado, inexistindo fundamento para a imputação feita.
Isto posto, dada a inexistência de indícios da falta grave, nego seguimento à apuração dos fatos relatados na sindicância.
P.R.I., diligências necessárias, inclusive comunicação ao estabelecimento prisional para registro no prontuário do apenado, cujo comportamento não deverá ser negativado pelos fatos relatados na sindicância.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_148',
        nome: 'LC negando obj',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que o SEEU identificou requisito objetivo para concessão de livramento condicional, face à pena imposta.

Relatados.

Os cálculos apresentados pelo SEEU não estão corretos.

É que o apenado registra fuga em **, com recaptura em **, ou seja, praticou falta grave há menos de doze meses, situação que confira ausência do requisito objetivo exigido pelo art. 83, III, b, do Código Penal para o livramento condicional.

Neste sentido decidiu recentemente o Superior Tribunal de Justiça, confirmando decisão do ano anterior:

No tocante à nova redação dada ao inciso III do artigo 83 do CPB, esta Corte Superior se posiciona no sentido de que o requisito relativo ao não cometimento de falta grave nos últimos 12 (doze) meses é pressuposto objetivo para a concessão do livramento condicional, não limitando a apreciação do requisito subjetivo necessário ao deferimento do benefício, "inclusive quanto a fatos ocorridos antes da entrada em vigor da Lei Anticrime" (HC 612.296/MG, Rel. Ministro SEBASTIÃO REIS JÚNIOR, SEXTA TURMA, julgado em 20/10/2020, DJe 26/10/2020) (AgRg no HC 639.495/SP, Rel. Ministro RIBEIRO DANTAS, QUINTA TURMA, julgado em 10/08/2021, DJe 17/08/2021)

Isto posto, face não atender o apenado  aos requisitos do art. 83,  III, do Código Penal, indefiro o livramento condicional.

P.R.I.
 
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_149',
        nome: 'monitoramento falta média',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso


    Vistos etc.

Executando-se em regime semiaberto harmonizado (com monitoramento eletrônico), informou a SEAP/CEME  que o apenado descumprira as condições firmadas, pois ***.

Ouvido em audiência, o apenado alegou que ***

Interveio o Ministério Público, opinando pela **regressão de regime**suspensão da prisão domiciliar**, enquanto a defesa requereu que *****

Relatados.

Determina a Lei de Execução Penal, no art. 146-D, inciso II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar os deveres a que estiver sujeito durante a sua vigência ou cometer falta grave.

No caso, restou esclarecido que o apena descumpriu os deveres previstos nas alíneas a e g do art. 4º da Portaria nº 02/2016 deste juízo, tendo se ausentado do local de recolhimento por ****** vezes no horário em que ali deveria permanecer, enquanto deixou descarregar totalmente a  bateria do equipamento de monitoração eletrônica por outras *** vezes.

De seu lado, a jurisprudência do Superior Tribunal de Justiça afirma que  "Comete falta grave o apenado que viola a zona de monitoramento eletrônico" (HC 462.719/RS, Rel. Ministro JOEL ILAN PACIORNIK, QUINTA TURMA, julgado em 09/10/2018, DJe 24/10/2018).

Entretanto, registro que o art. 57 da LEP autoriza ao juiz aplicar punição disciplinar que seja suficiente à falta praticada, q utilizando-se o disposto no art. 55 do mesmo diploma.

Assim, como o apenado retornou ao cumprimento regular da pena, entendo suficiente como punição a suspensão do benefício da prisão domiciliar pelo mesmo período de violações, e inclusive sem autorização para saídas externas desvigiadas (Regulamento Disciplinar Penitenciário do RN, art. 66, III, c/c art. 67).

Isto posto, homologo como falta média o conjunto de transgressões anotadas, entendendo como suficiente a punição já recebida, com a devida anotação no prontuário, para fins de comportamento.

Retorne-se o apenado à situação anterior, inclusive com com prisão domiciliar sob monitoramento eletrônico.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
     Juiz de Direito`,
    },
    {
        id: 'seeu_150',
        nome: 'monitoramento falta média - modelo sem uso',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso


    Vistos etc.
    Executando-se em regime semiaberto pena privativa de liberdade aplicada a $partePoloPassivo, foi-lhe concedida prisão domiciliar com monitoramento eletrônico, tendo a Sejuc/CEME informado que o apenado descumprira as condições firmadas, pois ***.

     Ouvido em audiência, o apenado alegou que ***

     Interveio o Ministério Público, opinando pela *regressão de regime*suspensão da prisão domiciliar*, enquanto a defesa requereu que **
     Relatados.
     **Determina a Lei de Execução Penal, no art. 146-D, inciso II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar os deveres a que estiver sujeito durante a sua vigência ou cometer falta grave.
     No caso, restou esclarecido que o apena descumpriu os deveres previstos nas alíneas a e g do art. 4º da Portaria nº 02/2016 deste juízo, tendo se ausentado do local de recolhimento por ** vezes no horário em que ali deveria permanecer, enquanto deixou descarregar totalmente a  bateria do equipamento de monitoração eletrônica por outras *** vezes.
     **Entretanto, como "quase*todas as transgressões ocorreram por tempo inferior a uma hora, entendo suficiente como punição o período em que o apenado esteve com a prisão domiciliar suspensa, e inclusive sem autorização para saídas externas desvigiadas.
     Isto posto, homologo como falta média o conjunto de transgressões anotadas, entendendo como suficiente a punição já recebida, com a devida anotação no prontuário, para fins de comportamento.
     Retorne-se o apenado à situação anterior, inclusive com com prisão domiciliar sob monitoramento eletrônico.
     P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
     Juiz de Direito`,
    },
    {
        id: 'seeu_151',
        nome: 'monitoramento rompimento (regressão provisória)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto harmonizado (com monitoramento eletrônico) a pena privativa de liberdade, informou a Seap/CEME que o apenado rompera o equipamento em ***, não tendo atendido às tentativas de contato.

Relatados.

Determina a Lei de Execução Penal, no art. 146-C, inciso II,  que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "abster-se de remover, de violar, de modificar, de danificar de qualquer forma o dispositivo de monitoração eletrônica ou de permitir que outrem o faça" (art. 146-C, II), esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.

O rompimento do equipamento de monitoração eletrônica ("tornozeleira"), a teor da jurisprudência do Superior Tribunal de Justiça, configura fuga, que é falta disciplinar de natureza grave.

EXECUÇÃO  PENAL.  HABEAS  CORPUS  SUBSTITUTIVO  DE RECURSO ESPECIAL. ROMPIMENTO  DE TORNOZELEIRA ELETRÔNICA. CONFIGU-RAÇÃO DE FALTA GRAVE. REGRESSÃO   DE   REGIME.   (...) 2.  Este  Superior  Tribunal de Justiça possui entendimento de que o rompimento da tornozeleira eletrônica configura falta disciplinar de natureza  grave,  nos  termos  do  art.  50,  VI, e 146-C, da Lei de Execução Penal. Precedentes. 3. (...). (HC 363.742/RS, Rel. Ministro RIBEIRO DANTAS, QUINTA TURMA, julgado em 15/12/2016, DJe 01/02/2017).

Ocorre que, tratando-se de fuga,  não é concebível que o apenado, ao ser recapturado e antes de ser ouvido pelo magistrado, retorne ao regime prisional mais brando, possibilitando que torne a escafeder-se frustrando, assim, ad aeternum a execução, sendo necessária, para garantia do Juízo, como ocorre na prisão preventiva, seja recolhido sob regime de maior segurança e vigilância, o que se afina plenamente com o poder geral de cautela, que informa a atividade judicante (LEP, art. 2º, CPP, art. 3º e arts. 311 e segs; e CPP, arts. 798/799).

Tal é, aliás, a posição da Corte Suprema, verbis: Conforme interpretação dos ars. 50, II, 60 e 118, §§ 1º e 2º, da Lei 7.210/84, o Juízo das Execuções pode decretar, provisoriamente, a regressão de regime prisional do condenado foragido do presídio, sem a necessidade da prévia ouvida do sentenciado, pois essa providência cautelar não obsta a que o réu se defenda quando vier a ser preso, comprovando, se for o caso, que tinha justos motivos para o cometimento da falta grave (STF, RT 763/485).

É o caso.

Isto posto, decreto a regressão provisória, para  fechado, do regime prisional imposto ao cumprimento da pena.

Expeça-se mandado de prisão e, quando cumprido, coloque-se o feito em pauta para audiência de justificação. Comunique-se à unidade prisional.

    $juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_152',
        nome: 'LC - suspensão - novo crime - pena cumprida',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

     Vistos etc.
     Trata-se de execução de pena privativa de liberdade imposta a ***, em que foi-lhe concedido o livramento condicional, o qual adiante foi suspenso em razão do apenado ter sido novamente preso e denunciado por prática de outro(s) delito(s).
     Interveio o Ministério Público, requerendo que se aguarde o julgamento do novo processo para decidir-se acerca do cumprimento da pena.
     Acrescento ao relatório que, conforme a GEP de fls., a pena teria terminado em ***.
     É o relatório.
     Nos termos do art. 145 da Lei de Execução Penal, a revogação do livramento condicional, suspenso em razão da prática de novo crime, depende da decisão final do processo de conhecimento, enquanto dispõe o art. 89 do Código Penal que "O juiz não poderá declarar extinta a pena, enquanto não passar em julgado a sentença em processo a que responde o liberado, por crime cometido na vigência do livramento".
     No caso, porém, observa-se da GEP que a pena já teria sido integralmente cumprida, exceto se o apenado for condenado no novo processo, quando não se computará como pena cumprida o período de prova.
     Enfim, a execução da pena não pode se prolongar de forma indefinida, em prejuízo do apenado, aguardando-se um julgamento que não se sabe quando ocorrerá, para que finalmente se esclareça se aquela foi ou não cumprida.
     A solução, ao menos no momento, está em suspender a execução da pena.
     Isto posto, suspendo a execução da pena, mandando que os autos aguardem a juntada de certidão acerca do julgamento do novo processo a que responde o apenado.
     P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_153',
        nome: 'remição trabalho',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de remição de parte da pena pelo trabalho, conforme relatório e cálculos juntos, que obteve parecer favorável do Ministério Público.
*Impende registrar que o relatório emitido pelo CPJC informa frequência  diária de 4h trabalhadas, quando o art. 33 da Lei de Execução Penal exige o mínimo de 6h/dia, razão pela qual não são considerados ** dias, mas ** dias trabalhados com remição de ** dias.
Decido.
Com razão o parecer, pois face à documentação junta, o apenado trabalhou, efetivamente, * em serviços internos na unidade prisional, durante o período de *, com carga horária diária de *, pelo que * dias da pena a ele imposta se encontram remidos pelo trabalho.
Note-se, na lição do festejado Prof. Julio Fabbrini Mirabete, que “a Lei de Execução instituiu no País uma forma de redenção de parte da pena privativa de liberdade através de remição, na qual, pelo trabalho, o condenado abrevia parte do tempo de sua condenação”.
Isto posto, julgo procedente o pedido de fls., para fim de julgar remidos * (*)  dias/ * mês e * dias da pena em execução.
P.R.I. Insira-se o evento no SEEU, para correção dos cálculos de benefícios.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_154',
        nome: 'LC revogação nova condenação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Em gozo de livramento condicional o apenado preso e condenado definitivamente por prática de novo delito doloso, tendo sido recebida a correspondente Guia de Recolhimento neste juízo.

Interveio o Ministério Público.

É o relatório.

Nos termos do art. 86, I, do Código Penal, revoga-se o livramento se the liberado vem a ser condenado a pena privativa de liberdade, em sentença irrecorrível, por crime cometido durante a vigência do benefício.

É o caso, desnecessárias maiores considerações a respeito, especialmente quando se nota transitada em julgado a nova decisão condenatória***, inclusive depois de confirmada pela segunda instância.

Por oportuno, anoto tratar-se de crime posterior ao benefício, não se descontando da pena, em conseqüência, o tempo em que esteve solto o apenado (Código Penal, art. 88).

Isto posto, revogo o livramento condicional de que beneficiário o apenado.

P.R.I., expedindo-se nova Guia de Execução Criminal,  não constando como pena cumprida o período em que o apenado esteve solto em razão do livramento condicional. *Voltem-me para decidir acerca da unificação ou soma das penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote7 parte 3 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE7_PARTE3);

// Lote 8 - Parte 1: Modelos 155-162 (início de 176-200.txt)
export const MODELOS_SEEU_LOTE8_PARTE1: ModeloSEEU[] = [
    {
        id: 'seeu_155',
        nome: 'Agravo mantendo fuga',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que regrediu-lhe o regime prisional em razão de fuga, sob a alegação de que não teria praticado novos crimes no período em que esteve foragido, bem como pela regressão ter sido para regime mais gravoso que o originalmente fixado na sentença condenatória.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do Superior Tribunal de Justiça, "O reconhecimento da fuga como falta grave decorre de expressa disposição legal (art. 50, inciso II, da LEP)" (HC 478.430/RS, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 26/03/2019, DJe 10/04/2019).

No mesmo sentido decidiu o Supremo Tribunal Federal:

Habeas corpus. Penal. (...). Relatividade do direito à liberdade. Dever do preso de se submeter às consequências jurídicas do crime. Inexistência de direito à fuga. Ato ilícito. Fato que constitui falta grave (art. 50, III, da Lei nº 7.210/84). Sujeição do preso a penas disciplinares, à regressão de regime e à perda de até 1/3 (um terço) do tempo remido (arts. 53, 118, I, e 127I, ambos da Lei nº 7.210/84). Ordem denegada. (...) 6. Nem se alegue que haveria um suposto direito constitucional à fuga, decorrente do direito à liberdade. 7. O princípio constitucionalmente assegurado da liberdade (art. 5º, caput, CF) não outorga ao paciente o direito de se evadir mediante violência, diante do interesse público na manutenção de sua prisão, legalmente ordenada, e na preservação da integridade física e psíquica dos responsáveis por sua custódia. 8. O fato de a fuga constituir um impulso natural não a erige em um direito de quem já se encontre sob custódia, diante de seu dever de se submeter às consequências jurídicas do crime. 9. Embora a fuga sem violência não constitua crime por parte do preso, constitui, tanto quanto a fuga com violência contra a pessoa, falta grave (art. 50, III, da Lei nº 7.210/84), que o sujeita, além das penas disciplinares, à regressão de regime e à perda de até 1/3 (um terço) do tempo remido (arts. 53; 118, I, e 127, I, todos da Lei nº 7.210/84). 10. Nesse diapasão, a fuga do preso definitivo ou provisório (art. 2º, parágrafo único, da Lei nº 7.210/84), com ou sem violência contra a pessoa, constitui ato ilícito, com reflexos sancionatórios nos direitos do preso e na própria execução da pena. 11. Ordem denegada. (HC 129936, Relator(a): Min. DIAS TOFFOLI, Segunda Turma, julgado em 31/05/2016, PROCESSO ELETRÔNICO DJe-123 DIVULG 14-06-2016 PUBLIC 15-06-2016) - transcrição parcial.
Ademais, também não procede a reclamação quanto à regressão a regime mais gravoso que o originalmente fixado na sentença condenatória, conforme iterativa jurisprudência dos tribunais superiores, sendo exemplos:

Recurso ordinário em habeas corpus. 2. Execução Penal. 3. Falta disciplinar grave. 4. Fixação de nova data-base para obtenção de benefícios executórios. Possibilidade. Precedentes. 5. Regressão a regime de cumprimento de pena mais gravoso que o fixado em sentença transitada em julgado (aberto ou semiaberto). Possibilidade. Regência do art. 118 da Lei de Execuções Penais. 6. Constrangimento não evidenciado. 7. Recurso a que se nega provimento. (RHC 104585, Relator(a): Min. GILMAR MENDES, Segunda Turma, julgado em 21/09/2010, DJe-190 DIVULG 07-10-2010 PUBLIC 08-10-2010 EMENT VOL-02418-04 PP-00791)
Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

*Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando a secretaria sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

*Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_156',
        nome: 'remição enem indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

**Nome do apenado**, condenado a XXX anos, XXX meses e XXX dias de reclusão em regime fechado, requereu remição pelo estudo, alegando aprovação no Exame Nacional do Ensino Médio - ENEM, realizado no ano de XXX (eventos **).

Opinou o Ministério Público pelo *deferimento de remição * *indeferimento de remição* (evento **).

Relatados.

Dispõe a Recomendação nº 391/2021 do CNJ, em seu art. 3º, Parágrafo Único, expressamente que:

Parágrafo único. Em caso de a person privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP.

Com ser assim, a recomendação supra viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no Exame Nacional do Ensino Médio e não apenas por tê-lo prestado.

No caso, documentação acostada pela defesa somente comprova que o apenado prestou o exame do ENEM durante o cumprimento de sua pena, contudo sem comprovar a aprovação, critério expressamente exigido pela Resolução CNJ nº 391/2021.

É cediço que para o candidato ser aprovado deverá atingir determinada nota exigida para cada curso.

Aqui, as notas obtidas pelo apenado não necessariamente podem ter sido suficientes para ingressar em algum curso superior.

N'outro flanco, a lista de aprovados, contendo a nota e a situação (aprovada ou suplente) é divulgada pelo Sistema de Seleção Unificada – SISU, e a defesa não a acostou para provar que o penitente fora aprovado.

Ademais, não se comprovou qual era o nível de escolaridade anterior do apenado e se sabe que o Superior Tribunal de Justiça esclareceu que as horas expendidas para aprender as matérias da grade curricular em atividade escolar efetivada fora do ambiente prisional, no caso de conclusão do ensino médio antes do início da execução, não podem integrar o cálculo da remição, pois o aprendizado não ocorreu ao longo do período de cárcere (EDcl no HC n. 716.072/SP, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 22/3/2022, DJe de 28/3/2022).

Assim, descabe analogia ou interpretação extensiva do art. 126 da LEP, de modo a permitir ao agravante a remição das penas por aprovação no Enem quando estudou e concluiu o ensino médio antes de iniciar o cumprimento da pena, não evidenciando o estudo sob a responsabilidade do apenado quando já preso.

Na lição do mesmo acórdão acima referido:

8. Se o postulante valeu-se do Enem como espécie de vestibular, não há prejuízo de obter o nível superior e pleitear futura remição. Entretanto, a execução é regida pelo princípio da legalidade e a realização de provas por aquele que frequentou aulas e obteve o certificado do grau de ensino não pode ensejar premiação por aprendizado do nível de escolaridade não adquirido a encargo do próprio preso. 9. Entender de outra forma permitiria que alguém com nível superior obtivesse remições por realizar o ENCEJJA do ensino fundamental (133 dias), o ENCEJJA de ensino médio (100 dias) e, ainda, o ENEM (100 dias), o que resultaria no abatimento de 333 dias de sua pena, quando é manifesto que não houve dedicação no cárcere para aquisição do conhecimento.

Nesse sentido:

AGRAVO REGIMENTAL EM RECURSO ESPECIAL. EXECUÇÃO PENAL. VIOLAÇÃO DO ART. 126 DA LEP. PLEITO DE RECONHECIMENTO DA REMIÇÃO PELO ESTUDO. APROVAÇÃO NO ENEM (EXAME NACIONAL DO ENSINO MÉDIO) APÓS A CONCLUSÃO DO ENSINO MÉDIO. SENTENCIADO PORTADOR DE DIPLOMA DE CURSO SUPERIOR. IMPOSSIBILIDADE DE CONCESSÃO DA BENESSE.
1. Visando à ressocialização do apenado e tendo como base o direito fundamental à Educação, o Conselho Nacional de Justiça (CNJ), por meio da Recomendação n. 44/2013 - posteriormente substituída pela Resolução n. 391/2021 -, estabeleceu a possibilidade de remição de pena à pessoa privada de liberdade, que, por meio de estudos por conta própria, vier a ser aprovada nos exames que certificam a conclusão do ensino fundamental ou médio (ENCCEJA ou outros) e aprovação no Exame Nacional do Ensino Médio - ENEM.
2. Com efeito, o propósito da remição pelo estudo não é simplesmente diminuir o tempo de encarceramento, mas, sobretudo, fomentar a aquisição de novos conhecimentos e ferramentais educacionais por parte do apenado, de modo a facilitar a sua reintegração social.
3. No caso, tendo o apenado concluído o ensino médio e superior antes do início do cumprimento da pena, incabível a remição penal por aprovação no Exame Nacional do Ensino Médio, visto que tal situação destoa do escopo da norma.
4. Agravo regimental improvido.
(AgRg no REsp n. 1.979.591/SP, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 19/4/2022, DJe de 25/4/2022.).

Isto posto, indefiro o pedido de remição pelo estudo-ENEM.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_157',
        nome: 'Agravo exame criminológico',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que entendeu necessária a realização de exame criminológico para formar o convencimento do juízo acerca da possibilidade de progressão de regime.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o Supremo Tribunal Federal, por jurisprudência consolidada, admite que pode ser exigido fundamentadamente o exame criminológico pelo juiz para avaliar pedido de progressão de regime prisional (HC 206868 AgR, Relatora: ROSA WEBER, Primeira Turma, julgado em 25/10/2021).

Nestes termos:

Processual penal. Agravo regimental em habeas corpus. Execução penal. (...) 2. O entendimento do STF é no sentido de que “a Lei 10.792/03 deu nova redação ao artigo 112 da Lei de Execuções Penais (Lei 7.210/84), excluindo a previsão de exame criminológico para a obtenção da progressão de regime, livramento condicional, indulto e comutação de penas. O silêncio da Lei a respeito da obrigatoriedade do exame criminológico, contudo, não inibe o Juízo da execução do poder de determiná-lo, desde que fundamentadamente. Isso porque a análise do requisito subjetivo pressupõe a verificação do mérito do condenado, que não está adstrito ao ‘bom comportamento carcerário’, como faz parecer a literalidade da lei, sob pena de concretizar-se o absurdo de transformar o diretor do presídio no verdadeiro concedente do benefício e o juiz em simples homologador, como assentado na ementa do Tribunal a quo” (RHC 121.851, Rel. Min. Luiz Fux). No mesmo sentido: HC 114.137, Relª. Minª. Rosa Weber; HC 114.409, Rel. Min. Ricardo Lewandowski). 3. Agravo regimental a que se nega provimento. (HC 203071 AgR, Relator(a): ROBERTO BARROSO, Primeira Turma, julgado em 27/09/2021) - transcrição parcial.

No caso, o exame foi requisitado em razão da constatação de que ***

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_158',
        nome: 'UNIFICAÇÃO Reclusão + Detenção',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execution de pena de xx ( ) anos, xx ( ) meses e xx ( ) dias de reclusão no regime xx (ação penal nº ) imposta a xxx, que agora foi novamente condenado, desta feita a xx ( ) anos, xx ( ) meses e xx ( ) dias de detenção no regime xx, ação penal nº (evento ).

Anoto que o penitente encontra-se custodiado no xx, conforme informações do SIAPEN nesta data.

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Dispõe o art. 111, da Lei de Execução Penal:

Art. 111. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será deita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.

Parágrafo Único. Sobrevinho condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime”.

Na dicção do Superior Tribunal de Justiça:

“Cabe ao Juízo da Execução, nos termos do art. 111 da Lei 7.210/84, diante de condenações diversas, em um mesmo processo ou não, somar ou unificar as penas impostas ao sentenciado, no intuito de redefinir o regime prisional, não havendo falar-se em reformatio in pejus. (AgRg no HC 520.469/MS, Rel. Ministro NEFI CORDEIRO, SEXTA TURMA, julgado em 26/11/2019, DJe 03/12/2019)

De seu lado, a consolidada jurisprudência do Superior Tribunal Federal, interpretando tal dispositivo, afirma que:

"No caso de condenações diversas, não se espera o cumprimento de uma delas para executar-se a outra. Tem-se o somatório das penas e um novo enquadramento quanto ao regime a ser observado na execução. (…) Surge incoerente concluir de forma diversa, como se as sanções pudessem ser consideradas isoladamente, presentes os títulos judicias condenatórios que as veiculem" (HC 137.440, Primeira Turma, Rel. Min. Marco Aurélio, DJe de 30/08/2017).

EXECUÇÃO PENAL. ART. 111 DA LEP. UNIFICAÇÃO DE PENAS. RECLUSÃO COM DETENÇÃO SUPERVENIENTE. REPRIMENDAS DA MESMA NATUREZA. SOMATÓRIO.
POSSIBILIDADE. I - "A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade" (AgRg no HC n. 473.459/SP, Quinta Turma, Rel. Min. Reynaldo Soares da Fonseca, DJe de 01/03/2019). Precedentes do STF e desta Corte Superior de Justiça. Agravo regimental desprovido. (AgRg no REsp 1861665/ES, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 05/05/2020, DJe 15/05/2020)

*Portanto, condenado às penas de reclusão e detenção, as reprimendas deverão ser somadas para fins de unificação de pena, por se tratarem de sanções de mesma espécie, qual seja, pena privativa de liberdade.

*Por oportuno anoto a recente importante e esclarecedora diferenciação feita pelo Superior Tribunal de Justiça acerca da unificação das penas de reclusão e detenção:

“(...) a jurisprudência desta Corte Superior de Justiça faz distinção entre a fixação de regime inicial de cumprimento da pena e da unificação das penas para fins de execução penal. A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem be consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade. (...) Tratando-se de fixação de regime inicial, deve ser aplicado o regime correspondente para cada um dos crimes, pois aplica-se o disposto nos arts. 69 e 76 do CP e, não, o art. 111 da Lei de Execução Penal, que cuida da hipótese de unificação das penas na execução” (AgRg no REsp 1939600/GO, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 22/06/2021, DJe 28/06/2021).

Registro que, como a demora no julgamento do novo processo não pode ser debitada ao apenado, a data-base para futuros benefícios deve ser a da ultima falta grave, a do último crime ou do último atingimento ao requisito objetivo para progressão deferida, a que for mais recente.

Isto posto, unifico em xx (xx) anos e xx (x) meses a pena privativa de liberdade em execução nestes autos, sendo xx (xx) anos de reclusão e xx (xx) de detenção, a ser cumprida inicialmente em regime *fechado* *semiaberto*, face ao determinado no saldo de penas e *na última sentença condenatória* *nas sentenças condenatórias* *bem como na decisão de regressão de regime*.

P.R.I. *Comunique-se ao estabelecimento prisional e expeça-se a competente Guia de Execução Penal unificadora, com os devidos "lançamentos" no SEEU. **Oficie-se ao estabelecimento prisional, com as devidas pesquisas no SAJ, SEEU e BNMP, para transferência do apenado à unidade adequada ao regime semiaberto.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_159',
        nome: 'Agravo data-base',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava * da decisão do evento * que fixou como data-base, para progressão de regime, a da última prisão ou falta grave praticada pelo apenado.

Intimada, a defesa contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência da Câmara Criminal do TJRN, amparada em Proposta de Afetação no Recurso Especial (ProAfR no REsp 1753512/PR, Rel. Ministro ROGERIO SCHIETTI CRUZ, TERCEIRA SEÇÃO, julgado em 18/12/2018, DJe 11/03/2019), "a unificação de penas não enseja a alteração da data-base para concessão de novos benefícios executórios".

Em assim sendo, por seus próprios fundamentos, mantenho the decisão recorrida.

*Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

*Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando a secretaria sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

*Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_160',
        nome: 'Data base único condenação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de penas única em que o SEEU calculou o benefício de progressão de regime tendo como data-base a primeira prisão do apenado, que, porém, obteve liberdade provisória antes da condenação definitiva, não tendo permanecido custodiado ininterruptamente.

Relatados.

O tema foi analisado pela eg. Câmara Criminal do Tribunal de Justiça do Rio Grande do Norte, no agravo em execução penal nº 0804957-52.2018.8.20.0000, relator o des. Glauber Rêgo, onde se decidiu: PENAL. PROCESSUAL PENAL. AGRAVO EM EXECUÇÃO. RECURSO MINISTERIAL. CONDENAÇÃO ÚNICA. PRISÃO PREVENTIVA INTERROMPIDA. IMPOSSIBILIDADE DE SER CONSIDERADA A PRIMEIRA PRISÃO COMO DATA-BASE PRA CÔMPUTO DE BENEFÍCIOS DA EXECUÇÃO PENAL. PERÍODO UTILIZADO APENAS PARA FINS DE DETRAÇÃO. RECURSO CONHECIDO E PROVIDO. (j. em 22.07.2019)

No seu voto, registrou o em. relator:

"A controvérsia central debatida nos autos diz respeito à data-base a ser fixada para a contagem de benefícios da execução da pena, alegando o recorrente que deve ser retificada a guia de execução penal, para estabelecer a data da última prisão como a base para a progressão de regime.

Esclareça-se, de início, que não se cuida aqui de estabelecer marco inicial para obtenção de benefícios na execução em virtude de nova condenação, em unificação de penas. O que se discute é o cômputo ou não da prisão preventiva para fins de progressão de regime na execução de uma única condenação.

Na hipótese de custódia ininterrupta, tenho entendido que the marco para progressão deve retroagir à data da prisão cautelar, conforme orientação do colendo Superior Tribunal de Justiça. Contudo, na espécie, o réu veio a obter liberdade provisória antes da condenação definitiva (preso preventivamente entre ...), não tendo permanecido custodiado ininterruptamente. Somente no dia (...), quando foi cumprido o mandado de prisão em virtude de sua condenação definitiva, o sentenciado ingressou no sistema carcerário.

Nos termos do artigo 42 do Código Penal, “computam-se, na pena privativa de liberdade e na medida de segurança, o tempo de prisão provisória, no Brasil ou no estrangeiro, o de prisão administrativa e o de internação em qualquer dos estabelecimentos referidos no artigo anterior”.

Assim, o período em que o reeducando ficou preso provisoriamente deve ser considerado como tempo de pena cumprida e, por conseguinte, ser descontado do total da reprimenda que lhe foi imposta na sentença condenatória.

De outra parte, não pode a data da primeira prisão ser considerada como marco inicial na concessão de futuros benefícios, quando se tratar de hipóteses de prisão interrompida e de uma única condenação, pois o início do cumprimento da pena só ocorreu verdadeiramente em (...).

Percebo que houve equívoco por parte do magistrado na decisão de fl. (...), quando o Ministério Público apresentou impugnação aos cálculos da progressão de regime e requereu acertadamente a retificação da guia de execução, de modo a considerar como data base a última prisão, e não a da prisão preventiva. Impossível se pensar na possibilidade de a data-base retroagir à data da primeira prisão, quando o apenado logo em seguida à prisão preventiva foi colocado em liberdade. Portanto, assiste razão ao Ministério Público.

Nesta hipótese, o período de prisão anterior, de natureza cautelar, será, evidentemente, objeto de detração" (transcrição omitindo dados específicos ao caso que então se julgou).

Tratando-se de decisão unânime da eg. Câmara Criminal, cabe segui-la.

Isto posto, mando retificar a quadro de eventos e correspondente guia de execução penal, fazendo constar como data-base para a próxima progressão de regime a da prisão definitiva e, por consequência, considerar o tempo de prisão provisória tão somente para fim de detração penal.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_161',
        nome: 'Fixação de requisito objetivo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

O apenado foi transferido para o regime semiaberto em **, face progressão de regime*face regressão de regime.

O apenado foi transferido para o regime fechado em **, face regressão de regime.

O SEEU identifica o apenado como já tendo atingido o requisito objetivo para progressão de regime.

Interveio o Ministério Público pelo indeferimento do benefício, por entender que se faz necessário aguardar o período de adaptação (evento **).

Relatados.

Dispõe o art. 112, §1º, da LEP que em todos os casos, o apenado só terá direito à progressão de regime se ostentar boa conduta carcerária, comprovada pelo diretor do estabelecimento, respeitadas as normas que vedam a progressão.

*Por outro lado, no art. 38 da Portaria nº 072/2011 (Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte) é fixado o prazo de sessenta dias, para aferição do período de adaptação e observação do apenado, durante o qual será observado seu comportamento.

*Por outro lado, no art. 98 da Portaria nº 072/2011 (Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte) é fixado o prazo de um mês para reabilitação da conduta à partir do cumprimento da sanção disciplinar para o apenado em regime fechado que praticar falta leve.

*Por outro lado, no art. 98 da Portaria nº 072/2011 (Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte) é fixado o prazo de três meses para reabilitação da conduta à partir do cumprimento da sanção disciplinar para o apenado em regime fechado que praticar falta média.

*Por outro lado, no art. 98 da Portaria nº 072/2011 (Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte) é fixado o prazo de seis meses para reabilitação da conduta à partir do cumprimento da sanção disciplinar para o apenado em regime fechado que praticar falta grave.

*Por outro lado, no art. 99 da Portaria nº 072/2011 (Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte) é fixado o prazo de 30 dias para reabilitação da conduta à partir do cumprimento da sanção disciplinar para o apenado em regime semiaberto que praticar falta leve.

*Por outro lado, no art. 99 da Portaria nº 072/2011 (Regulamento Disciplinar Penitenciário do Estado do Rio Grande do Norte) é fixado o prazo de 60 dias para reabilitação da conduta à partir do cumprimento da sanção disciplinar para o apenado em regime semiaberto que praticar falta média.

No caso, o penitente ainda não cumpriu o período de adaptação e observação*reabilitação, para que se possa ser atestada a sua boa conduta carcerária, requisito subjetivo necessário para obtenção da progressão de regime.

Isto posto, por ausência do requisito subjetivo, indefiro a progressão de regime, devendo o apenado continuar a cumprir sua pena no regime semiaberto até o término do prazo de 60 (sessenta) dias, a partir de **, oportunidade em que se deverá solicitar atestado de conduta carcerária, para fins de progressão.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_162',
        nome: 'unificação medida segurança',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se medida de segurança detentiva, foi recebida vara nova guia, relativa a outra medida imposta na Comarca de *****.

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os fatos como continuação entre si.

Entretanto, como nas medidas de segurança se determina apenas os prazos mínimos para exame de cessação de periculosidade, não se há de somá-las, tendo a consideração das existências delas efeitos para fins de tempo máximo possível de internamento.

Isto posto, unifico as medidas de segurança em cumprimento, determinando que o inimputável seja submetido a exame de cessação de periculosidade após um ano***dois anos, período a ser contado do último exame**internamento.

P.R.I., expeça-se a competente Guia de Execução de Medida de Segurança. Cópia desta decisão servirá como ofício dando ciência ao estabelecimento carcerário de seus termos.


$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
];

// Concatena lote8 parte 1 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE8_PARTE1);

// Lote 8 - Parte 2: Modelos 163-171 (continuação de 176-200.txt)
export const MODELOS_SEEU_LOTE8_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_163',
        nome: 'unificação art 28',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de cumprimento de penas de ***, atualmente em regime fechado*semiaberto, em que foi juntada nova GEP, tratando de condenação à pena restritiva de direitos por delito de porte de drogas para uso pessoal (art. 28, caput, Lei 11.343/06), cujo cumprimento *não* foi iniciado (evento 1.**).

Relatados.

Dispõe o art. 44, § 5º, do Código Penal que "sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior, podendo deixar de aplicá-la se for possível ao condenado cumpri-las concomitantemente.

De seu lado, a consolidada jurisprudência do Superior Tribunal de Justiça, interpretando tal dispositivo, afirma que " independentemente de a condenação à pena restritiva de direitos ser anterior ou posterior à sanção privativa de liberdade, a conversão ou não da pena restritiva de direitos em privativa de liberdade fica unicamente na dependência da compatibilidade de cumprimento simultâneo das sanções" (AgRg no REsp 1688238/MG, Rel. Ministro JOEL ILAN PACIORNIK, QUINTA TURMA, julgado em 25/06/2019, DJe 05/08/2019)

No caso, porém, tratando-se do crime previsto no art. 28 da Lei de Drogas, o tipo penal não prevê a pena privativa de liberdade, tornando inviável a conversão.

Em assim sendo, determino a suspensão da execução da pena restritiva de direitos até a progressão de regime para o aberto.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_164',
        nome: 'Autorização indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Requer o apenado autorização para não se recolher à unidade prisional enquanto aguarda liberação de tornozeleira eletrônica.

Interveio o Ministério Público.

Relatados.

Com razão o Ministério Público, pois o regime semiaberto deve, em princípio, ser cumprido na unidade prisional indicada pelo Estado, sendo a prisão domiciliar a egunda opção.

É o que decidiu a Terceira Seção do Superior Tribunal de Justiça, ao resolver a Tese 993 de Recurso Repetitivo, verbis:

RECURSO ESPECIAL. PROPOSTA DE JULGAMENTO SOB O RITO DOS RECURSOS REPETITIVOS. EXECUÇÃO PENAL. DETERMINAÇÃO DE CUMPRIMENTO DE PENA EM PRISÃO DOMICILIAR, QUANDO INEXISTENTE VAGA NO REGIME DE CUMPRIMENTO DE PENA ADEQUADO AO EXECUTADO OU ESTABELECIMENTO PRISIONAL COMPATÍVEL COM O PREVISTO EM LEI. INEXISTÊNCIA DE VIOLAÇÃO DO ART. 117 DA LEI DE EXECUÇÕES PENAIS. APLICAÇÃO DO NOVO ENTENDIMENTO ESTABELECIDO PELO SUPREMO TRIBUNAL FEDERAL NO JULGAMENTO DO RE 641.320/RS.
1. Recurso representativo de controvérsia, para atender ao disposto no art. 1.036 e seguintes do CPC/2015 e na Resolução STJ n. 8/2008.
2. Delimitação da controvérsia: "(im)possibilidade de concessão da prisão domiciliar, como primeira opção, sem prévia observância dos parâmetros traçados no RE 641.320/RS".
3. TESE: A inexistência de estabelecimento penal adequado ao regime prisional determinado para o cumprimento da pena não autoriza a concessão imediata do benefício da prisão domiciliar, porquanto, nos termos da Súmula Vinculante n° 56, é imprescindível que a adoção de tal medida seja precedida das providências estabelecidas no julgamento do RE n° 641.320/RS, quais sejam: (i) saída antecipada de outro sentenciado no regime com falta de vagas, abrindo-se, assim, vagas para os reeducandos que acabaram de progredir; (ii) a liberdade eletronicamente monitorada ao sentenciado que sai antecipadamente ou é posto em prisão domiciliar por falta de vagas;
e (iii) cumprimento de penas restritivas de direitos e/ou estudo aos sentenciados em regime aberto.
4. Ao examinar a questão do cumprimento de pena em regime fechado, na hipótese de não existir vaga em estabelecimento adequado ao regime em que está efetivamente enquadrado o reeducando, por ocasião do julgamento do RE 641.320/RS, o Supremo Tribunal Federal assentou que "A falta de estabelecimento penal adequado não autoriza a manutenção do condenado em regime prisional mais gravoso" e que "Os juízes da execução penal poderão avaliar os estabelecimentos destinados aos regimes semiaberto e aberto, para qualificação como adequados a tais regimes. São aceitáveis estabelecimentos que não se qualifiquem como "colônia agrícola, industrial" (regime semiaberto) ou "casa de albergado ou estabelecimento adequado" (regime aberto) (art. 33, § 1º, alíneas "b" e "c")". Concluiu, ainda, que, na ausência de vagas ou estabelecimento prisional adequado na localidade, o julgador deve buscar aplicar as seguintes alternativas, em ordem de preferência: (i) a saída antecipada de sentenciado no regime com falta de vagas; (ii) a liberdade eletronicamente monitorada ao sentenciado que sai antecipadamente ou é posto em prisão domiciliar por falta de vagas; (iii) o cumprimento de penas restritivas de direito e/ou estudo ao sentenciado que progride ao regime aberto. Observou, entretanto, que, até que sejam estruturadas as medidas alternativas propostas, poderá ser deferida a prisão domiciliar ao sentenciado e que a adoção de uma solução alternativa não é um direito do condenado.
5. Somente se considera a utilização da prisão domiciliar pouco efetiva, como alternativa à ausência de vagas no regime adequado, quando ela restringe totalmente o direito do executado de deixar a residência, não permitindo, assim, o exercício de trabalho externo, ou quando, estando o reeducando no regime aberto, a prisão domiciliar puder ser substituída pelo cumprimento de penas alternativas e/ou estudo. Não há óbices à concessão de prisão domiciliar com monitoração eletrônica ao sentenciado em regime semiaberto, quando não há vagas no regime específico ou quando não há estabelecimento prisional adequado ou similar na localidade em que cumpre pena.
6. Não há ilegalidade na imposição da prisão domiciliar, mesmo a pura e simples em que o executado não tem direito de deixar a residência em momento algum, em hipóteses não elencadas no art. 117 da Lei de Execuções Penais, máxime quando não houver vagas suficientes para acomodar o preso no regime de cumprimento de pena adequado, tampouco estabelecimento prisional similar, e não for possível, no caso concreto, a aplicação de uma das hipóteses propostas no RE n. 641.320/RS.
(...).
(REsp 1710674/MG, Rel. Ministro REYNALDO SOARES DA FONSECA, TERCEIRA SEÇÃO, julgado em 22/08/2018, DJe 03/09/2018) (transcrito no que importa).
No caso, como existe na Comarca unidade prisional adequada ao regime semiaberto, descabe conceder prisão domiciliar com o simples fim de atender interesse pessoal do apenado.

Isto posto, indefiro o pedido.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_165',
        nome: 'falta média requisito progressão',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc

Cumprindo pena privativa de liberdade em regime semiaberto, com autorização para saídas externas, o apenado não se recolheu por ***noites no mês de **, quando já fora punido por faltas anteriores.

Acrescento ao relatório que o SEEU identificou oa penado como tendo atingido o requisito objetivo para progressão de regime.

*Interveio o Ministério Público.

Relatados.

Conforme atestado de pena, o apenado cumpriu o requisito objetivo para concessão da progressão de regime.

Quanto ao subjetivo, porém, diversa é a situação.

Como lembrava o já referido Prof. Mirabete:

"...a aferição do mérito se refere à conduta global do preso e dela faz parte um acréscimo na confiança depositada no mesmo e a possibilidade de atribuição de maiores responsabilidades para o regime de mais liberdade. O condenado deve ser avaliado, aliás, em função do regime para o qual pretende progredir; terá que ser examinado tendo em vista as regalias de que irá gozar no regime progressivo seguinte. Não deve ser concedida a progressão quando se verificar que o apenado não apresenta condições para se ajustar ao novo regime".

No caso, verificam-se diversas violações às regras do regime semiaberto.

Ora, conforme informado pela administração penitenciária, desatendeu o apenado ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 (“cumprimento fiel da sentença”), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do Rio Grande do Norte, art. 74, inc. IV, merecendo punição.

Ocorre que a referida falta não importa em regressão de regime, pelo que deverá o apenado continuar a cumprir a pena no regime semiaberto, com as conseqüências cabíveis no tocante ao registro de seu comportamento, o que **, dada a reincidência e o ao extremo abuso demonstrado**, também importará na suspensão da autorização para saída externa pelo mesmo**dobro do número de faltas.

Isto posto, indefiro a progressão de regime e reconheço a prática de falta média, suspendendo as autorizações de saídas externas desvigiadas do apenado por *** dias, mandando recolhê-lo ao presídio, constando também no quadro de eventos *o mesmo período *x dias como pena não cumprida.

P.R.I. Comunique-se ao CPJC, para que se dê cumprimento. **Esclareça-se se cumprida a punição imposta no evento **. Caso a resposta seja negativa, determinem-se ao CPJC providências para o imediato recolhimento do apenado, como antes determinado.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_166',
        nome: 'Monitoramento não cumprimento punição',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumprindo pena privativa de liberdade em regime semiaberto, na forma domiciliar com monitoramento eletrônico, o apenado foi punido mais de um vez por violações às obrigações assumidas, não comparecendo ao CPJC para cumprimento da sanção imposta, bem como não atendeu ao aviso eletrônico ou chamado telefônico feito para os terminais que indicou quando recebeu o benefício.

Relatados.

De logo, verifico que o apenado foi punido com XXX dias de suspensão de prisão domiciliar e saídas externas desvigiadas, em razão de reiterados descumprimentos às regras da monitoração eletrônica.

Em sendo assim, reiteradas vezes o penitente deixou de cumprir a pena, restando evidenciado que as faltas não foram fatos isolados no decorrer da execução, mas sim comportamento reiterado.

Aqui impõe-se anotar que o recolhimento noturno domiciliar monitorado eletronicamente é obrigação do apenado.

Neste sentido, decidiu o Superior Tribunal de Justiça:

AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL. DECISÃO AGRAVADA. RECONSIDERAÇÃO. FUNDAMENTOS IMPUGNADOS. CONHECIMENTO. EXECUÇÃO PENAL. VIOLAÇÃO DE ZONA DE MONITORAMENTO. DESCUMPRIMENTO DE ORDEM RECEBIDA. FALTA GRAVE CONFIGURADA. 1. (...). 2. Consoante o disposto no art. 50, V, da Lei de Execução Penal, o descumprimento das condições impostas é considerada falta grave, sendo causa de regressão do regime prisional. 3. Nos termos da jurisprudência desta Corte Superior, a violação da zona de monitoramento configura falta grave consubstanciada em desobediência de ordem recebida, a ensejar a regressão de regime prisional e a alteração da data-base para nova progressão. 4. Agravo regimental provido. Agravo conhecido para negar provimento ao recurso especial. (AgRg no AREsp 1942873/TO, Rel. Ministro OLINDO MENEZES (DESEMBARGADOR CONVOCADO DO TRF 1ª REGIÃO), SEXTA TURMA, julgado em 15/03/2022, DJe 21/03/2022)

Portanto, diante da moldura fática apresentada, não vislumbro desproporcionalidade da medida regressiva ao caso, já que as faltas médias anteriormente aplicadas não surtiram qualquer efeito.

*De seu lado, ao descumprir a obrigação de recolhimento domiciliar noturno e não ter atender às ligações telefônicas, ou mesmo atualizar os números dos terminais telefônicos para contato, o apenado desobedeceu ordem prevista na Portaria nº 01/2022 deste juízo, que lhe autorizou o benefício, o que configura falta grave.

Finalmente, observo que, nos termos do art. 118, I, da LEP, a execução da pena privativa de liberdade ficará sujeita à forma regressiva quando o condenado praticar fato definido como falta grave, com a transferência para qualquer dos regimes mais rigorosos.

Isto posto, decreto a regressão provisória, para fechado, do regime prisional. Expeça-se mandado de prisão.

P.R.I. Encaminhe-se cópia do presente ao CPJC, servindo como comunicação para as providências devidas.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_167',
        nome: 'Agravo saídas negando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

Vistos etc.

Agrava ** da decisão do evento ** que negou-lhe saídas externas desvigiadas.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o Superior Tribunal de Justiça reiteradamente tem decidido que "o regime semiaberto não obriga o Juiz das Execuções a deferir automaticamente o deferimento do trabalho extramuros, havendo que se avaliar o preenchimento dos requisitos do art. 123 da Lei n. 7.210/1984" ((RHC 50.097/RJ, Rel. Ministro ROGERIO SCHIETTI CRUZ, SEXTA TURMA, julgado em 04/12/2014, DJe 18/12/2014).

No mesmo sentido:

RECURSO EM HABEAS CORPUS. EXECUÇÃO PENAL. TRABALHO EXTERNO.PRETENSÃO INDEFERIDA PELO JUÍZO DA VARA DE EXECUÇÕES PENAIS. HABEAS CORPUS DENEGADO. NÃO PREENCHIMENTO DO REQUISITO DE ORDEM SUBJETIVA.ART. 123, III, DA LEI N. 7.210/84.1. A análise da concessão do benefício da saída temporária para realização de trabalho extramuros atrai a normatividade do art. 123 da Lei n. 7.210/1984.2. A decisão proferida nas instâncias ordinárias encontra-se dotada de suficiente fundamentação quanto ao indeferimento do benefício. Observância estrita ao comando constitucional previsto no art. 93, IX, da Magna Carta. 3. Na apreciação do pleito de trabalho extramuros aviado pelo apenado houve a análise acerca do atendimento ao requisito erigido pelo inciso III do art. 123 da Lei de Execuções Penais, que preceitua a necessidade de análise acerca da compatibilidade do benefício com os objetivos da pena, o que não foi vislumbrado. 4. Esta Corte Superior de Justiça tem firme entendimento de que o fato de o condenado encontrar-se no regime semiaberto não é suficiente para garantir-lhe o benefício do trabalho externo, quando ausentes outras condições especificadas em lei. 5. A benesse solicitada pelo recorrente representa medida que visa a sua ressocialização. Contudo, para fazer jus a esse benefício, o apenado deve necessariamente cumprir todos os requisitos objetivos e subjetivos, consoante se depreende do disposto no caput do art. 123 da LEP, o que não ocorreu no presente caso. 6. Recurso ordinário em habeas corpus improvido.(RHC 62.993/RJ, Rel. Ministro ANTONIO SALDANHA PALHEIRO, SEXTA TURMA, julgado em 27/09/2016, DJe 13/10/2016).

EXECUÇÃO PENAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. TRABALHO EXTRAMUROS. NÃO PREENCHIMENTO DOS REQUISITOS PREVISTOS NO ART. 123 DA LEI DE EXECUÇÃO PENAL. PECULIARIDADES DO CASO CONCRETO APRECIADAS PELA INSTÂNCIA ORDINÁRIA. AUSÊNCIA DO REQUISITO SUBJETIVO. EXAME CRIMINOLÓGICO. FACULDADE DAS INSTÂNCIAS ORDINÁRIAS MEDIANTE DECISÃO FUNDAMENTADA. CONSTRANGIMENTO ILEGAL NÃO CONFIGURADO. HABEAS CORPUS NÃO CONHECIDO. (...) III - Para a concessão do benefício do trabalho extramuros, deve o acusado preencher os requisitos objetivos e subjetivos, nos termos do art. 123 da Lei de Execução Penal. IV - Não se vislumbra qualquer ilegalidade ou arbitrariedade no v. acórdão impugnado, tendo em vista os elementos concretos destacados nos autos que recomendam maior cautela na concessão do trabalho extramuros, sobretudo a ausência de demonstração do preenchimento do requisito subjetivo pelo paciente, condenado por crimes graves, com longa pena a cumprir e que obteve progressão para o regime semiaberto há pouco tempo. V - Esta Corte possui entendimento consolidado no sentido de ser inviável, na via estreita do habeas corpus, a dilação probatória necessária para aferir o preenchimento dos requisitos objetivos e subjetivos pelo apenado, ora paciente, a fim de se vislumbrar possível inversão do que restou decidido pelo eg. Tribunal a quo. Habeas Corpus não conhecido. (HC 315.479/RJ, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 23/06/2015, DJe 07/08/2015).

Em assim sendo, por seus próprios fundamentos, acrescido das razões ministeriais, mantenho a decisão que indeferiu as saídas externas desvigiadas ao apenado.

*Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando a secretaria sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_168',
        nome: 'Regressão novo crime julgado antes da audiência',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade aplicada em que foi regredido provisoriamente o regime em razão do apenado(a) ter sido denunciado(a) pela prática de novo crime.

Adiante, porém, certificou-se no SAJ a condenação definitiva pelo novo processo.

Relatados.

A situação relatada nestes autos encontra-se exposta no art. 118, primeira parte, da Lei nº 7210/84, como causa impositiva de regressão de regime de cumprimento de pena privativa de liberdade, e sobre a qual decidiu o Superior Tribunal de Justiça ser desnecessário desnecessária a oitiva do réu antes da regressão de regime prisional, pois descabida eventual justificação do cometimento do fato delituoso ou demonstração de sua inocorrência se evidenciada a prolação de sentença condenatória referente ao novo delito.

Neste sentido: CRIMINAL. HC. EXECUÇÃO. PROGRESSÃO DE REGIME. PRÁTICA DE CRIME DOLOSO. REGRESSÃO DE REGIME PRISIONAL. POSSIBILIDADE. NOVA CONDENAÇÃO. DESNECESSIDADE DE OITIVA PRÉVIA DO RÉU. AUSÊNCIA DE CONSTRANGIMENTO ILEGAL. ORDEM DENEGADA. I. Hipótese na qual o paciente encontrava-se cumprindo pena no regime semi-aberto, e, com a prática de novo crime doloso, foi determinada a regressão para o regime fechado. II. A prática de fato definido como crime doloso ou de falta grave, a teor do art. 118, inciso I, da Lei de Execuções Penais, enseja a regressão de regime prisional. Precedentes. III. Evidenciada a prolação de sentença condenatória referente ao novo delito, descarta-se a necessidade de oitiva do réu antes da regressão de regime prisional, pois descabida eventual justificação do cometimento do fato delituoso ou demonstração de sua inocorrência. IV. Ordem denegada. (HC 42.415/SP, Rel. Ministro GILSON DIPP, QUINTA TURMA, julgado em 18/08/2005, DJ 19/09/2005, p. 357).

No mesmo sentido o Supremo Tribunal Federal, em 04/12/2020, ao julgar o RE n. 776.823/RS, fixou a tese de repercussão geral no sentido de que a instrução durante a execução penal, para fins de reconhecimento da falta grave, poderá ser suprida por sentença criminal condenatória (Tema n. 758/STF).

Isto posto, torno definitiva a regressão, para o fechado, do regime prisional.

P.R.I. Atualize-se a guia de execução penal.

Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_169',
        nome: 'progressão indefere subj exame crimin incompleto',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
Sobre o assunto, oportuna lembrar a tradicional lição do Prof. Júlio Fabbrini Mirabete: "Tendo em vista a finalidade da pena, de integração ou reinserção social, o processo de execução deve ser dinâmico, sujeito a mutações ditadas pela resposta do condenado ao tratamento penitenciário. Assim, ao dirigir a execução para a forma progressiva, estabelece o artigo 112 (da L.E.P) a progressão, ou seja, a transferência do condenado de regime mais rigoroso a outro menos rigoroso quando demonstra condições de adaptação ao mais suave. (...) Para que se processe a progressão exige a lei, em primeiro lugar, dois requisitos materiais; um de caráter objetivo, que é o cumprimento de um sexto da pena no regime anterior, e um de caráter subjetivo, que se refere ao mérito do condenado indicando a oportunidade da transferência" (in Execução Penal. São Paulo : Atlas, 5ª ed., 1992, p.283/283).
Aqui, cumpriu o apenado o requisito objetivo para progressão de regime.
Quanto ao subjetivo, porém, diversa é a situação.
Já dispunha a Exposição de Motivos da Lei de Execução Penal que "a progressão deve ser uma conquista do condenado pelo seu mérito".
E, como lembrava o já referido Prof. Mirabete: "...a aferição do mérito se refere à conduta global do preso e dela faz parte um acréscimo na confiança depositada no mesmo e a possibilidade de atribuição de maiores responsabilidades para o regime de mais liberdade. O condenado deve ser avaliado, aliás, em função do regime para o qual pretende progredir; terá que ser examinado tendo em vista as regalias de que irá gozar no regime progressivo seguinte. Não deve ser concedida a progressão quando se verificar que o apenado não apresenta condições para se ajustar ao novo regime".
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
        id: 'seeu_170',
        nome: 'Regressão cancelamento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_171',
        nome: 'incompetência apenado solto',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

Vistos etc.    

*Trata-se de execução de pena, em que se informou que o apenado encontra-se em liberdade.

*Trata-se de execução de medida de segurança detentiva, em que se informou que o inimputável encontra-se em liberdade.

Relatados.

Conforme dispõe a Resolução nº 113, do Conselho Nacional de Justiça, a guia de recolhimento ou de internação será expedida após o cumprimento do mandado de prisão ou de internação.

*Por outro lado, a competência deste juízo para execução das penas privativas de liberdade em regime fechado ou semiaberto se fixa se e quando o apenado se encontra em unidade prisional da Comarca de Natal.

*Por outro lado, a competência deste juízo para execução das medidas de segurança de internação se fixa se e quando o internado se encontra em unidade prisional da Comarca de Natal.

*No caso, o apenado está em liberdade, pelo que caberia ao juízo de conhecimento expedir o mandado de prisão e, apenas após seu cumprimento, a guia de recolhimento, remetendo-a a este juízo, para instauração do processo de execução penal.

*No caso, o inimputável está em liberdade, pelo que caberia ao juízo de conhecimento expedir o mandado de internação e, apenas após seu cumprimento, a guia de internação, remetendo-a a este juízo, para instauração do processo de execução penal.

Isto posto, tendo por incompetente este juízo para a presidir processo de execução penal de apenado**inimputável que não está recolhido na Comarca, ou em qualquer outra, determino a devolução dos autos ao juízo de origem.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote8 parte 2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE8_PARTE2);

// Lote 8 - Parte 3: Modelos 172-180 (final de 176-200.txt)
export const MODELOS_SEEU_LOTE8_PARTE3: ModeloSEEU[] = [
    {
        id: 'seeu_172',
        nome: 'monitoramento - desobediência a comparecimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Executando-se pena privativa de liberdade em regime semiaberto, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, sendo-lhe imposta punição por falta média em razão de violações às regras do benefício.
*Acrescento ao relatório que o apenado foi contatado e orientado a comparecer à unidade prisional, o que não atendeu.
*Acrescento ao relatório que tentou-se contactar o apenado para ser orientado a comparecer à unidade prisional, mas ele não respondeu aos contatos.
Relatados.
Determina a Lei de Execução Penal, no art. 146-C, inciso I, que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "receber visitas do servidor responsável pela monitoração eletrônica, responder aos seus contatos e cumprir suas orientações, esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.
Por outro lado, o mesmo diploma estatui, no art. 50, inciso VI, c/c. art. 39, inciso V, configurar falta grave descumprir as ordens recebidas.
*No caso, ao não atender às ligações telefônicas ou não atualizar junto à CEME a informação acerca dos terminais que utiliza, o apenado desobedeceu à determinação de responder aos contatos da fiscalização do monitoramento eletrônico, o que configura falta grave.
*No caso, ao não atender à orientação recebida, de comparecer à unidade prisional, o apenado praticou falta grave.
Finalmente, observo que, nos termos do art. 118, I, da LEP, a execução da pena privativa de liberdade ficará sujeita à forma regressiva, com a transferência para qualquer dos regimes mais rigorosos, quando o condenado praticar fato definido como falta grave.
Isto posto, decreto cautelarmente a regressão provisória, para fechado, do regime prisional imposto ao cumprimento da pena.
Expeça-se mandado de prisão e, quando cumprido, coloque-se o feito em pauta para audiência de justificação.
$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_173',
        nome: 'monitoramento - sem comunicação - cautelar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Executando-se pena privativa de liberdade em regime semiaberto, foi concedida prisão domiciliar com monitoramento eletrônico, tendo a Seap/CEME informado que o equipamento estava sem comunicação desde *, não tendo o apenado atendido às tentativas de contato.
**De seu lado, informou-se que o sistema detectara "envelopamento" do equipamento, o que pressupõe algum tipo de material que interrompe a transmissão do sinal do GRPS.
Relatados.
Determina a Lei de Execução Penal, no art. 146-C, inciso I, que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "receber visitas do servidor responsável pela monitoração eletrônica, responder aos seus contatos e cumprir suas orientações, esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.
Por outro lado, o mesmo diploma estatui, no art. 50, inciso VI, c/c. art. 39, inciso V, configurar falta grave descumprir as ordens recebidas.
No caso, ao possibilitar a a perda do sinal do GRPS, *****seja por "envelopamento" do aparelho ou por algum outro motivo,***** e não ter atendido às ligações telefônicas do servidor penitenciário, o apenado desobedeceu à ordem de manter o aparelho em funcionamento, o que configura falta grave, inclusive possibilitando-lhe circular livremente por onde queira, longe da esfera de vigilância das autoridades competentes, situação que o faz na hipótese do art. 50, inciso VI, c.c. o art. 39, inciso V, ambos da Lei de Execução Penal - LEP, para a qual o art. 146-C, parágrafo único, inciso I, do mesmo diploma autoriza a regressão de regime.
Finalmente, observo que, nos termos do art. 118, I, da LEP, a execução da pena privativa de liberdade ficará sujeita à forma regressiva, com a transferência para qualquer dos regimes mais rigorosos, quando o condenado praticar fato definido como falta grave.
Isto posto, decreto cautelarmente a regressão provisória, para fechado, do regime prisional imposto ao cumprimento da pena.
Expeça-se mandado de prisão e, quando cumprido, coloque-se o feito em pauta para audiência de justificação.
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_174',
        nome: 'Incidente de insanidade mental',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Considerando as dúvidas suscitadas a respeito da sanidade mental do apenado, instauro, com fundamento no art. 149 do CPP, incidente de insanidade mental, a fim de ser ele submetido a exame por peritos do ITEP ou do Núcleo de Perícias do TJRN.
Por oportuno, nomeio curador ao apenado o Defensor Público em exercício perante este juízo, sob compromisso do seu cargo.
Formulo, desde já, os seguintes quesitos, concedendo ao curador e ao Ministério Público a oportunidade de sugerir alguns outros que entenda pertinentes:
1º. É o apenado portador de doença mental ou desenvolvimento mental incompleto ou retardado que o torna inteiramente incapaz de entender o caráter da pena imposta ou de determinar-se de acordo com esse entendimento?
2º. Em virtude de perturbação da saúde mental ou por desenvolvimento mental incompleto ou retardado, não possui o apenado a plena capacidade de entender o caráter da pena imposta, ou de determinar-se de acordo com esse entendimento?
3º. Se existente, tal doença mental, desenvolvimento mental incompleto ou retardado, perturbação da saúde mental ou desenvolvimento mental incompleto ou retardado é transitória ou permanente?
4º. Caso positiva a resposta ao 1º ou 2º quesito, tal situação o torna perigoso ao convívio social?
5º. É o(a)examinado(a) passível de recuperação? Qual o tratamento recomendado?
Requisite-se do Núcleo de Perícias do TJRN a realização da perícia, designando-se dia e hora para tal, ficando nomeado perito o profissional ali cadastrado. Após atendido, proceda-se à *condução do examinando, remetendo-se cópias de peças deste processo.
Diligencie-se.
 
$juizo.getCidade(), $data.getDataPorExtenso().
Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_175',
        nome: 'Portaria s/nº (Insanidade Mental)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

O Dr. Henrique Baltazar Vilar dos Santos, Juiz de Direito desta 17ª Vara Criminal da Comarca de Natal, no uso de suas atribuições legais etc.

Considerando as dúvidas levantadas quanto à integridade mental do apenado.

**Considerando os documentos constantes dos autos dando conta de outro exame de insanidade mental realizado no apenado.

Considerando a necessidade de se dissipar qualquer questionamento quanto à sua imputabilidade.

RESOLVE:

I – INSTAURAR o incidente de insanidade mental do apenado, na forma do art. 149 e ss do Código de Processo Penal Brasileiro.

II – SUSPENDER o curso do procedimento, pelo prazo de 45 dias, a fim de que seja realizado o laudo pericial.

III – Nomear curador para o apenado o Defensor Público em exercício perante este juízo.

IV – Determinar que ao Núcleo de Perícias do TJRN, após marcar o exame, informe a este juízo com antecedência para intimação do apenado da data e local de sua realização.

V – Requisitar ao Núcleo de Perícias do TJRN, através do seu agente competente, que proceda, com urgência, ao exame do apenado respondendo aos quesitos que se seguem:

QUESITOS DO JUÍZO

1º. É o apenado portador de doença mental ou desenvolvimento mental incompleto ou retardado que o torna inteiramente incapaz de entender o caráter da pena imposta ou de determinar-se de acordo com esse entendimento?

2º. Em virtude de perturbação da saúde mental ou por desenvolvimento mental incompleto ou retardado, não possui o apenado a plena capacidade de entender o caráter da pena imposta, ou de determinar-se de acordo com esse entendimento?

3º. Se existente, tal doença mental, desenvolvimento mental incompleto ou retardado, perturbação da saúde mental ou desenvolvimento mental incompleto ou retardado é transitória ou permanente?


$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_176',
        nome: 'Livramento condicional falta antiga',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
*O apenado requereu, através da Defensoria Pública, o livramento condicional face à pena pela qual condenado, alegando atender às condições estabelecidas na legislação penal em vigor, sendo juntado ACC.
*O SEEU identificou o apenado como tendo atingido o requisito objetivo para livramento condicional, sendo juntado ACC.
*Com vista dos autos, o Ministério Público pugnou pelo indeferimento do benefício, bem como fosse o apenado intimado a ***.
*Interveio o Ministério Público, opinando pelo deferimento do benefício.
Relatados.
Trata-se de condenada a por delito de ***, cuja pena importou em *** de reclusão, atualmente em regime semiaberto, estando previsto seu término para **.
De seu lado, verifica-se atender o apenado às exigências dos diversos incisos do art. 83 do estatuto penal, tendo cumprido mais de um terço/metade da pena, comprovando, ao menos nos últimos anos, comportamento satisfatório.
É que, mesmo com o passado de reiterados descumprimentos às normas da execução, sua última falta grave data de ***, ou seja, há mais de dois anos o penitente cumpre regularmente a pena, de modo que não se pode inviabilizar a concessão do livramento condicional.
Como é cediço, a análise do requisito subjetivo para o livramento condicional não pode ser absoluto e limitado a um brevíssimo período de tempo dentro da integralidade da pena de *** anos de reclusão impingida al apenado – sem considerar outros aspectos, indicados no art. 83 do Código Penal, de igual ou maior relevância, como é o caso de aparentemente afastar-se de condutas criminosas, razão pela qual deixo de acolher o parecer ministerial.
Isto posto, com fundamento nos arts. 83 e seguintes do Código Penal c/c arts. 131 e segs. da Lei de Execução Penal, concedo ao apenado o livramento condicional, impondo-lhe, sob pena de revogação do benefício, a observância das seguintes condições, até a data do término do cumprimento da pena: comparecer mensalmente a este Juízo para comprovar residência fixa e trabalho honesto; recolher-se à sua residência até às 23h00; não freqüentar bares, casas de prostituição e de jogos ilícitos; não ingerir bebidas alcóolicas ou similares; não portar armas; não mudar de residência sem prévio aviso ao Juízo, do qual precisará de autorização para residir fora da Comarca.
Expeça-se Carta de Livramento, nos termos do art. 136 da Lei 7.210/84.
Comunique-se ao Conselho Penitenciário para designar cerimônia do livramento condicional.
P.R.I., diligenciando-se como necessário e redistribua-se à 13ª Vara Criminal.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_177',
        nome: 'Livramento Condicional',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de apenado que atingiu requisito objetivo para possível concessão de livramento condicional, **requer o livramento condicional face à pena pela qual condenado, alegando atender às condições estabelecidas na legislação penal em vigor**, no que mereceu parecer favorável do **Conselho Penitenciário** e do Ministério Público.
Relatados.
Trata-se de condenado por delito de *, cuja pena importou em * anos de reclusão, atualmente em regime *, mas já cumprida mais de **dois terços**, estando previsto seu término para *, sendo informado pelo estabelecimento penal como tendo boa conduta carcerária.
**Intervieram o Conselho Penitenciário** e o Ministério Público, opinando favoravelmente ao livramento condicional.
De seu lado, verifica-se atender o apenado às exigências dos diversos incisos do art. 83 do estatuto penal, pois cumpriu mais de **dois terços da pena**, comprovando no seu decorrer comportamento satisfatório, enquanto ressarciu os danos causados.
Isto posto, com fundamento nos arts. 83 e seguintes do Código Penal c/c arts. 131 e segs. da Lei de Execução Penal, concedo ao apenado o livramento condicional, impondo-lhe, sob pena de revogação do benefício, a observância das seguintes condições, até a data do término do cumprimento da pena: comparecer mensalmente a este Juízo para comprovar residência fixa e trabalho honesto; recolher-se à sua residência até às 23h00; não freqüentar bares, casas de prostituição e de jogos ilícitos; não ingerir bebidas alcóolicas ou similares; não portar armas; não mudar de residência sem prévio aviso a este Juízo, do qual precisará de autorização para residir fora da Comarca.
Expeça-se Carta de Livramento, nos termos do art. 136 da Lei 7.210/84.
Comunique-se ao Conselho Penitenciário para designar cerimônia do livramento condicional.
P.R.I., diligenciando-se como necessário, remetendo os autos à Décima Terceira Criminal.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_178',
        nome: 'Retificação GEP. Data-base. Última prisão',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que a defesa pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões, no caso de unificação de penas, deveria ser a da última prisão e não a do último trânsito em julgado, calculando-se o requisito objetivo sobre o saldo da pena.

Interveio o Ministério Público, opinando contrariamente.

Relatados.

O Superior Tribunal de Justiça, em decision de sua Terceira Seção, competente para unificar a jurisprudência criminal, firmou entendimento, que também é seguido pacificamente pela eg. Câmara Criminal do Tribunal de Justiça do Rio Grande do Norte, de que o marco inicial para a concessão de benefícios, após a unificação das penas, é a data do último crime ou última infração disciplinar, verbis:

RECURSO ESPECIAL. EXECUÇÃO PENAL. UNIFICAÇÃO DE PENAS. SUPERVENIÊNCIA DO TRÂNSITO EM JULGADO DE SENTENÇA CONDENATÓRIA. TERMO A QUO PARA CONCESSÃO DE NOVOS BENEFÍCIOS. AUSÊNCIA DE PREVISÃO LEGAL PARA ALTERAÇÃO DA DATA-BASE. ACÓRDÃO MANTIDO. RECURSO NÃO PROVIDO. 1. A superveniência de nova condenação no curso da execução penal enseja a unificação das reprimendas impostas ao reeducando. Caso o quantum obtido após o somatório torne incabível o regime atual, está o condenado sujeito a regressão a regime de cumprimento de pena mais gravoso, consoante inteligência dos arts. 111, parágrafo único, e 118, II, da Lei de Execução Penal. 2. A alteração da data-base para concessão de novos benefícios executórios, em razão da unificação das penas, não encontra respaldo legal. Portanto, a desconsideração do período de cumprimento de pena desde a última prisão ou desde a última infração disciplinar, seja por delito ocorrido antes do início da execução da pena, seja por crime praticado depois e já apontado como falta disciplinar grave, configura excesso de execução. 3. Caso o crime cometido no curso da execução tenha sido registrado como infração disciplinar, seus efeitos já repercutiram no bojo do cumprimento da pena, pois, segundo a jurisprudência consolidada do Superior Tribunal de Justiça, a prática de falta grave interrompe a data-base para concessão de novos benefícios executórios, à exceção do livramento condicional, da comutação de penas e do indulto.Portanto, a superveniência do trânsito em julgado da sentença condenatória não poderia servir de parâmetro para análise do mérito do apenado, sob pena de flagrante bis in idem. 4. O delito praticado antes do início da execução da pena não constitui parâmetro idôneo de avaliação do mérito do apenado, porquanto evento anterior ao início do resgate das reprimendas impostas não desmerece hodiernamente o comportamento do sentenciado. As condenações por fatos pretéritos não se prestam a macular a avaliação do comportamento do sentenciado, visto que estranhas ao processo de resgate da pena. 5. Recurso não provido. (REsp 1557461/SC, Rel. Ministro ROGERIO SCHIETTI CRUZ, TERCEIRA SEÇÃO, julgado em 22/02/2018, DJe 15/03/2018).

Isto posto, por não encontrar respaldo legal para entender que a data-base para concessão de novos benefícios executórios deva ser a da unificação das penas, mando retificar a guia de execução penal, fazendo constar como data-base para a próxima progressão de regime a da última falta grave ou último crime pelo qual o apenado tenha sido condenado, o que for posterior.

P.R.I. 

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_179',
        nome: 'retificação GEP falta grave',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões deveria ser a da última prisão ou falta grave, calculando-se o requisito objetivo sobre o saldo da pena.
Relatados.
Com razão o Ministério Público, pois, no caso de prática de falta grave, o requisito objetivo deve ser calculado sobre o saldo da pena a cumprir, utilizando-se como data-base a data da última prisão ou da última falta grave, se ocorrida.
Neste sentido:
AGRAVO REGIMENTAL. HABEAS CORPUS. EXECUÇÃO PENAL. UNIFICAÇÃO DE PENAS. NOVA DATA PARA OBTENÇÃO DE BENEFÍCIOS. DATA DA ÚLTIMA PRISÃO. CONSTRANGIMENTO ILEGAL CONFIGURADO. 1. A Terceira Seção desta Corte, no julgamento do RESP 1.557.461/SC, ocorrido em 22/02/2018, alterou o anterior posicionamento jurisprudencial, passando a entender que a superveniência do trânsito em julgado da sentença condenatória não serve de novo parâmetro para fixação da data-base para concessão de benefícios à execução, não podendo, assim, ser desconsiderado o período de cumprimento de pena desde a última prisão ou desde a última infração disciplinar, seja por delito ocorrido antes do início da execução da pena, seja por crime praticado após e já apontado como falta grave. 2. Decisão agravada reconsiderada. Ordem concedida para estabelecer a data da última prisão do paciente, ou a data do cometimento da última falta grave, como a data-base para a aquisição de benefícios na execução da pena, observado o disposto nas Súmulas nºs 441, 534 e 535/STJ. (Superior Tribunal de Justiça STJ; AgRg-HC 384.700; Proc. 2017/0000859-7; ES; Rel. Min. Sebastião Reis Júnior; Julg. 01/03/2018; DJE 05/03/2018; Pág. 7837).
Isto posto, mando retificar a guia de execução penal.
P.R.I. 
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_180',
        nome: 'inicial trabalho externo negando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se da execução de pena privativa de liberdade, a ser cumprida inicialmente em regime semiaberto, estando o apenado recolhido no Complexo Penal Dr. João Chaves – CPJC**na Cadeia Pública de Natal.

Interveio o Ministério Público, opinando pelo indeferimento da autorização para saídas externas desvigiadas.

Relatados.

Nos termos do art. 37 da Lei de Execução Penal, a prestação de trabalho externo ao estabelecimento prisional "dependerá de aptidão, disciplina e responsabilidade, além de cumprimento mínimo de um sexto da pena".

O requisito objetivo para o benefício foi afastado pela jurisprudência consolidada do Superior Tribunal de Justiça, que, porém, afirma necessário condições pessoais favoráveis, a serem observadas no caso concreto.

Neste sentido, anotou o Supremo Tribunal Federal:

"4. A inaplicabilidade do requisito temporal para o deferimento de trabalho externo não significa, naturalmente, que a sua concessão deva ser automática. Embora a Lei de Execução Penal seja lacônica quanto aos requisitos pertinentes, é intuitivo que a medida é condicionada: (i) pela condição pessoal do apenado, que deve ser compatível com as exigências de responsabilidade inerentes à autorização para saída do estabelecimento prisional; e (ii) pela adequação do candidato a empregador." (EP 2 TrabExt-AgR, Relator(a): Min. ROBERTO BARROSO, Tribunal Pleno, julgado em 25/06/2014, PROCESSO ELETRÔNICO DJe-213 DIVULG 29-10-2014 PUBLIC 30-10-2014).

De seu lado, o Superior Tribunal de Justiça reiteradamente tem decidido, por ambas as suas turmas criminais:

"O regime semiaberto não obriga o Juiz das Execuções a deferir automaticamente o deferimento do trabalho extramuros, havendo que se avaliar o preenchimento dos requisitos do art. 123 da Lei n. 7.210/1984" ((RHC 50.097/RJ, Rel. Ministro ROGERIO SCHIETTI CRUZ, SEXTA TURMA, julgado em 04/12/2014, DJe 18/12/2014).

"É pacífico o entendimento de que o fato de o apenado ter progredido para o regime semiaberto não lhe assegura o direito automático ao trabalho extramuros, devendo ser analisada a compatibilidade entre a concessão do benefício e os objetivos da pena" (AgRg no RHC n. 155.097/RJ, relator Ministro Ribeiro Dantas, Quinta Turma, julgado em 14/12/2021, DJe de 17/12/2021).

No mesmo sentido:

AGRAVO REGIMENTAL NO RECURSO EM HABEAS CORPUS. SUPRESSÃO DE INSTÂNCIA. AUSÊNCIA DE MANIFESTAÇÃO DO JUÍZO DAS EXECUÇÕES. TRABALHO EXTRAMUROS. NÃO PREENCHIDO O REQUISITO OBJETIVO. IMPOSSIBILIDADE DE ANÁLISE DOS REQUISITOS SUBJETIVOS ANTES DO INÍCIO DA EXECUÇÃO DA PENA. AGRAVO REGIMENTAL DESPROVIDO. 1. A concessão da saída temporária para o trabalho externo do preso em cumprimento de pena definitiva em regime inicialmente semiaberto depende do cumprimento de requisitos objetivos e subjetivos a serem avaliados pelo Juízo das Execuções no curso do cumprimento da pena. 2. Se não preenchido sequer o requisito objetivo de cumprimento de 1/6 da pena corporal, uma vez que o paciente não deu início à execução da pena e o tempo de prisão preventiva não atingiu tal patamar, não há falar em constrangimento ilegal pela ausência de análise do pedido de trabalho externo antes de iniciado o cumprimento da pena corporal. 3. Inviável a análise dos requisitos subjetivos do paciente a concessão do benefício pretendido antes do início do cumprimento da pena corporal. 4. Agravo Regimental no Recurso em Habeas Corpus desprovido. (AgRg no RHC n. 119.680/PA, relator Ministro Joel Ilan Paciornik, Quinta Turma, julgado em 11/2/2020, DJe de 21/2/2020.)

RECURSO EM HABEAS CORPUS. EXECUÇÃO PENAL. TRABALHO EXTERNO.PRETENSÃO INDEFERIDA PELO JUÍZO DA VARA DE EXECUÇÕES PENAIS. HABEAS CORPUS DENEGADO. NÃO PREENCHIMENTO DO REQUISITO DE ORDEM SUBJETIVA.ART. 123, III, DA LEI N. 7.210/84.1. A análise da concessão do benefício da saída temporária para realização de trabalho extramuros atrai a normatividade do art. 123 da Lei n. 7.210/1984.2. A decisão proferida nas instâncias ordinárias encontra-se dotada de suficiente fundamentação quanto ao indeferimento do benefício. Observância estrita ao comando constitucional previsto no art. 93, IX, da Magna Carta. 3. Na apreciação do pleito de trabalho extramuros aviado pelo apenado houve a análise acerca do atendimento ao requisito erigido pelo inciso III do art. 123 da Lei de Execuções Penais, que preceitua a necessidade de análise acerca da compatibilidade do benefício com os objetivos da pena, o que não foi vislumbrado. 4. Esta Corte Superior de Justiça tem firme entendimento de que o fato de o condenado encontrar-se no regime semiaberto não é suficiente para garantir-lhe o benefício do trabalho externo, quando ausentes outras condições especificadas em lei. 5. A benesse solicitada pelo recorrente representa medida que visa a sua ressocialização. Contudo, para fazer jus a esse benefício, o apenado deve necessariamente cumprir todos os requisitos objetivos e subjetivos, consoante se depreende do disposto no caput do art. 123 da LEP, o que não ocorreu no presente caso. 6. Recurso ordinário em habeas corpus improvido.(RHC 62.993/RJ, Rel. Ministro ANTONIO SALDANHA PALHEIRO, SEXTA TURMA, julgado em 27/09/2016, DJe 13/10/2016).

EXECUÇÃO PENAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. TRABALHO EXTRAMUROS. NÃO PREENCHIMENTO DOS REQUISITOS PREVISTOS NO ART. 123 DA LEI DE EXECUÇÃO PENAL. PECULIARIDADES DO CASO CONCRETO APRECIADAS PELA INSTÂNCIA ORDINÁRIA. AUSÊNCIA DO REQUISITO SUBJETIVO. EXAME CRIMINOLÓGICO. FACULDADE DAS INSTÂNCIAS ORDINÁRIAS MEDIANTE DECISÃO FUNDAMENTADA. CONSTRANGIMENTO ILEGAL NÃO CONFIGURADO. HABEAS CORPUS NÃO CONHECIDO. (...) III - Para a concessão do benefício do trabalho extramuros, deve o acusado preencher os requisitos objetivos e subjetivos, nos termos do art. 123 da Lei de Execução Penal. IV - Não se vislumbra qualquer ilegalidade ou arbitrariedade no v. acórdão impugnado, tendo em vista os elementos concretos destacados nos autos que recomendam maior cautela na concessão do trabalho extramuros, sobretudo a ausência de demonstração do preenchimento do requisito subjetivo pelo paciente, condenado por crimes graves, com longa pena a cumprir e que obteve progressão para o regime semiaberto há pouco tempo. V - Esta Corte possui entendimento consolidado no sentido de ser inviável, na via estreita do habeas corpus, a dilação probatória necessária para aferir o preenchimento dos requisitos objetivos e subjetivos pelo apenado, ora paciente, a fim de se vislumbrar possível inversão do que restou decidido pelo eg. Tribunal a quo. Habeas Corpus não conhecido. (HC 315.479/RJ, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 23/06/2015, DJe 07/08/2015).

*Aqui, o apenado, em regime semiaberto, responde a outros processos por crimes patrimoniais praticados com uso de arma e concurso de pessoas, demonstrando intensa periculosidade, *tendo sido inclusive recentemente denunciado por outro delito dessa espécie.

* Aqui, o apenado, em regime semiaberto, responde a outro processo, no qual tem prisão preventiva decretada, o que faz presumir periculosidade.

Isto posto, dado regime prisional imposto e a manifesta periculosidade do apenado, nego-lhe a autorização para saídas desvigiadas permanentes e trabalho externo, por três meses, período necessário ao julgamento de outra ação penal a que responde.

P.R.I. e diligencie-se, inclusive comunicando-se à unidade prisional. Voltem-me após aquele prazo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote8 parte 3 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE8_PARTE3);

// Lote 9 - Parte 1: Modelos 181-188 (de 201-225.txt)
export const MODELOS_SEEU_LOTE9_PARTE1: ModeloSEEU[] = [
    {
        id: 'seeu_181',
        nome: 'agravo base trânsito',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava a Defensoria Pública da decisão do evento ** que fixou como data-base, para progressão de regime, a do último trânsito em julgado das condenações do apenado.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do Supremo Tribunal Federal, que modificou o entendimento sustentado pela 3ª Seção do STJ, a data-base para progressão, no caso de apenados com mais de uma condenação, deve ser a do último trânsito em julgado.

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos.

*Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando a secretaria sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

*Intime-se a defesa para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_182',
        nome: 'incompetência monitorado',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de execução da pena em em regime semiaberto, com apenado monitorado eletronicamente e que reside na Comarca de **, cujo juízo concordou com a remessa dos autos..
Interveio o Ministério Público.
Relatados.
Competente para a execução de pena em regime semiaberto, com apenado monitorado, é o juízo do local onde ele reside, se houve a devida concordância com a remessa dos autos.
É o caso.
Isto posto, tenho por incompetente este juízo para continuar a presidir o processo e determino a remessa dos autos para a Comarca de **.
P.R.I. Cumpra-se.
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_183',
        nome: 'Remição aprovação ENEM e SiSU',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade, em regime semiaberto**fechado, em que o apenado, amparado na previsão do art. 126 da Lei 12.433/2011 e na Resolução nº 391/2021, do CNJ, requereu remição pelo estudo, em razão de ter realizado o ENEM no ano de ** (evento **).

Juntou-se Histórico Escolar do Ensino médio, comprovando que o executado o concluiu em ** (evento **).

Opinou o Ministério Público pela parcial procedência, para que fossem remidos 50 dias (evento **).

Verifica-se que o apenado juntou comprovação da aprovação para curso superior através do ENEM e SiSU (evento ).

Por derradeiro, tem-se que o apenado foi preso em ***, de acordo o quadro de eventos.

Relatados.

O Exame Nacional do Ensino Médio (ENEM) é uma prova realizada pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), autarquia vinculada ao Ministério da Educação do Brasil para avaliar a qualidade do ensino médio no país.

O seu resultado serve para acesso ao ensino superior em universidades públicas brasileiras, através do Sistema de Seleção Unificada (SiSU), assim como em algumas universidades no exterior ou particulares.

Além disso, o exame passou a servir também como certificação de conclusão do ensino médio em cursos de Educação de Jovens e Adultos (EJA), antigo supletivo, substituindo o Exame Nacional para Certificação de Competências de Jovens e Adultos (Encceja).

Para obter êxito no ENEM o estudante tem que alcançar pontuação exigida para cada curso de nível superior a partir da média das notas dos participantes, tendo cada curso superior uma média de corte, que à evidência irá depender dos concorrentes.

Assim, para saber se um participante do ENEM foi aprovado verifica-se se atingiu a média para ingressar no curso de nível superior que deseja, fazendo depois sua inscrição através do SiSU.

D’outro lado, o exame passou a servir como certificação de conclusão do ensino médio (EJA/Encceja), tendo o mesmo critério de idade (mínima de 18 anos) e exigência do participante obter nota superior a 450 (quatrocentos e cinquenta) pontos em cada uma das áreas de conhecimento e 500 (quinhentos) pontos na redação.

Dispõe a Recomendação nº 391/2021 do CNJ, em seu art. 3º, Parágrafo único, expressamente que:

Parágrafo único. Em caso de a pessoa privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP.

Com ser assim, a resolução supra viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no Exame Nacional do Ensino Médio, e não apenas por tê-lo prestado.

No caso, a documentação acostada pela defesa comprova que o apenado prestou o exame do ENEM durante o cumprimento de sua pena, bem como obteve aprovação em curso de ensino superior, critério expressamente exigido pela Resolução CNJ nº 391/2021, por meio do SiSU.

Outrossim, relativamente à base de cálculo, observa-se que ao mencionar a carga horária de 1.600 (mil e seiscentas) horas para o ensino fundamental, e 1.200 (mil e duzentas) horas para o ensino médio, a Resolução nº 391/2021 do CNJ já faz referência ao percentual de 50% da carga horária definida pela Resolução nº 03/2010 do Conselho Nacional de Educação, cujo art. 4º, II e III estabelece que a duração mínima dos cursos presenciais de EJA para os anos finais do Ensino Fundamental deve ser de 1.600 (mil e seiscentas) horas e do Ensino Médio deve ser de 1.200 (mil e duzentas) horas.

A jurisprudência do Superior Tribunal de Justiça era oscilante acerca da base de cálculos para a remição nesses casos, algumas vezes que deveria ser calculada sobre 1600 horas e em outras sobre a metade delas. No dia 10 de março de 2021, porém, a Terceira Seção daquela Corte definiu a interpretação correta, firmando tese no HC 602.425-SC, que foi publicada como sendo o seguinte tema: Execução Penal. Remição da pena pelo estudo. Aprovação no Exame Nacional para Certificação de Competência de Jovens e Adultos - ENCCEJA. Recomendação n. 44/2013 do CNJ. Interpretação mais benéfica. Cálculo dos 50% da Carga Horária. Patamar equivalente a 1.600 horas. Remição de 133 dias. 26 dias por área de conhecimento. Reafirmação da jurisprudência da Terceira Seção.

Dito de outra forma, entendeu a Terceira Seção do STJ que as 1.200 hs ou 1.600 hs, dispostas na Recomendação n. 44/2013 do CNJ, já equivalem aos 50% da carga horária definida legalmente para cada nível de ensino, com base nas quais serão calculados os dias a serem remidos. De mesmo modo, aplica-se tal entendimento ao disposto na Resolução nº 391/2021 do CNJ, por ter mantido seu posicionamento acerca da base de cálculo.

Assim, temos que a base de cálculo para remição pela aprovação no ENEM é de 1200 (mil e duzentas) horas.

Consoante o art. 126, da LEP, a contagem do prazo se dará à razão de um dia de pena a cada 12 horas de frequência escolar, divididas, no mínimo, em três dias da atividade. Portanto, em tendo sido o apenado aprovado em todas as áreas de conhecimento do ENEM e considerando-se a carga horária de 1200h, divide-se esse total por 12, alcançando-se 100 (cem) dias de remição.

Isto posto, defiro o pedido de remição do evento **, declarando remidos 100 (cem) dias da pena em execução.

P.R.I. Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_184',
        nome: 'Remição ENEM sem SiSU indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade, em regime semiaberto**fechado, em que o apenado, dizendo-se amparado na previsão do art. 126 da Lei 12.433/2011 e na Recomendação nº 391/2021, do CNJ, requereu remição pelo estudo, em razão de ter realizado o ENEM no ano de *** (evento **).

Juntou-se Histórico Escolar do Ensino médio, comprovando que o executado o concluiu em ** (evento **).

Verifica-se que o apenado não juntou comprovação da aprovação para algum curso superior através do ENEM, pois a documentação colacionada somente comprova que prestou o exame durante o cumprimento de sua pena.

Opinou o Ministério Público pela parcial procedência, para que fossem remidos 50 dias (evento **).

Por derradeiro, tem-se que o apenado foi preso em 2002, de acordo o quadro de eventos.

Relatados.

O Exame Nacional do Ensino Médio (ENEM) é uma prova realizada pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), autarquia vinculada ao Ministério da Educação do Brasil para avaliar a qualidade do ensino médio no país.

O seu resultado serve para acesso ao ensino superior em universidades públicas brasileiras, através do Sistema de Seleção Unificada (SiSU), assim como em algumas universidades no exterior ou particulares.

Além disso, o exame passou a servir também como certificação de conclusão do ensino médio em cursos de Educação de Jovens e Adultos (EJA), antigo supletivo, substituindo o Exame Nacional para Certificação de Competências de Jovens e Adultos (Encceja).

Para obter êxito no ENEM o estudante tem que alcançar pontuação exigida para cada curso de nível superior a partir da média das notas dos participantes, tendo cada curso superior uma média de corte, que à evidência irá depender dos concorrentes.

Assim, para saber se um participante do ENEM foi aprovado, verifica-se se atingiu a média para ingressar no curso de nível superior que deseja, fazendo depois sua inscrição através do SiSU.

D’outro lado, o exame passou a servir como certificação de conclusão do ensino médio (EJA/Encceja), tendo o mesmo critério de idade (mínima de 18 anos) e exigência do participante obter nota superior a 450 (quatrocentos e cinquenta) pontos em cada uma das áreas de conhecimento e 500 (quinhentos) pontos na redação.

Dispõe a Recomendação nº 391/2021 do CNJ, em seu art. 3º, Parágrafo Único, expressamente que:

Parágrafo único. Em caso de a pessoa privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP.

Desse modo, a recomendação supra viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no Exame Nacional do Ensino Médio, e não apenas por tê-lo prestado.

No caso, a documentação acostada pela defesa somente comprova que o apenado prestou o exame do ENEM durante o cumprimento de sua pena, em ***, contudo sem comprovar a aprovação, critério expressamente exigido pela resolução CNJ nº 391/2021.

É cediço que para o candidato ser aprovado deverá atingir determinada nota exigida para cada curso.

Aqui, as notas obtidas pelo apenado não necessariamente podem ter sido suficientes para ingressar em algum curso superior.

N'outro flanco, a lista de aprovados, contendo a nota e a situação (aprovada ou suplente) é divulgada pelo Sistema de Seleção Unificada – SISU, de modo que poderia o apenado a ele ter acesso, inclusive através de familiares, defesa ou direção da unidade prisional.

***Por fim, esclareço que ainda que tivesse sido aprovado em algum curso de ensino superior não teria ele direito ao acréscimo previsto no § 5º do art. 126 da LEP.

É que o § 5º vaticina que o tempo a remir em função das horas de estudo será acrescido de um terço no caso de conclusão do ensino fundamental, médio ou superior durante o cumprimento de pena, desde que certificada pelo órgão competente do sistema de educação.

No caso, o executado não concluiu ensino fundamental, médio no curso do cumprimento da pena, não importando que tenha prestado o ENEM no seu decorrer.

Como consta no ev. **, o apenado concluiu o ensino médio em **, antes de ser preso em **, ou seja, ele já tinha nível médio completo antes do início do cumprimento da reprimenda.

Isto posto, indefiro o pedido de remição do ev. **.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_185',
        nome: 'Remição aprovação ENCCEJA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade, em regime semiaberto/fechado, em que o apenado requereu remição pelo estudo, amparado na previsão do art. 126 da Lei 12.433/2011 e na Recomendação nº 44/2013, do CNJ, em razão de ter concluído o Ensino Fundamental por meio do ENCCEJA no ano de ***, (evento **).

Forviam juntados, por meio de ofício do CPJC** da Cadeia Pública de Ceará Mirim** da Penitenciária Estadual **, o Certificado de Conclusão do Ensino Médio pelo ENCCEJA e o respectivo Histórico do Ensino Fundamental (evento ).

Opinou o Ministério Público pela parcial procedência, para que fossem remidos ** dias (evento **).

*Por derradeiro, tem-se que o apenado foi preso em ***, de acordo o quadro de eventos.

Relatados.

O Exame Nacional de Educação para Jovens e Adultos (ENCCEJA) é uma prova realizada pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), autarquia vinculada ao Ministério da Educação do Brasil para buscar a certificação de conclusão no ensino fundamental ou médio.

Dispõe a Resolução nº 391/2021 do CNJ, em seu art. 3º, Parágrafo Único, expressamente que:

Parágrafo único. Em caso de a pessoa privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP.

Desse modo, a recomendação supra viabiliza a remição pelo estudo alicerçada na APROVAÇÃO em exames nacionais.

No caso, a documentação comprova que o apenado fora aprovado no ENCCEJA, a fim de certificar a conclusão do Ensino Fundamental durante o cumprimento da pena, em ***, critério expressamente exigido pela Resolução CNJ nº 391/2021.

Outrossim, relativamente à base de cálculo, observa-se que ao mencionar a carga horária de 1.600 (mil e seiscentas) horas para o ensino fundamental, e 1.200 (mil e duzentas) horas para o ensino médio, a Resolução nº 391/2021 do CNJ já faz referência ao percentual de 50% da carga horária definida pela Resolução nº 03/2010 do Conselho Nacional de Educação, cujo art. 4º, II e III estabelece que a duração mínima dos cursos presenciais de EJA para os anos finais do Ensino Fundamental deve ser de 1.600 (mil e seiscentas) horas e do Ensino Médio deve ser de 1.200 (mil e duzentas) horas.

A jurisprudência do Superior Tribunal de Justiça era oscilante acerca da base de cálculos para a remição nesses casos, algumas vezes que deveria ser calculada sobre 1600 horas e em outras sobre a metade delas. No dia 10 de março de 2021, porém, a Terceira Seção daquela Corte definiu a interpretação correta, firmando tese no HC 602.425-SC, que foi publicada como sendo o seguinte tema: Execução Penal. Remição da pena pelo estudo. Aprovação no Exame Nacional para Certificação de Competência de Jovens e Adultos - ENCCEJA. Recomendação n. 44/2013 do CNJ. Interpretação mais benéfica. Cálculo dos 50% da Carga Horária. Patamar equivalente a 1.600 horas. Remição de 133 dias. 26 dias por área de conhecimento. Reafirmação da jurisprudência da Terceira Seção.

Dito de outra forma, entendeu a Terceira Seção do STJ que as 1.200 hs ou 1.600 hs, dispostas na Recomendação n. 44/2013 do CNJ, já equivalem aos 50% da carga horária definida legalmente para cada nível de ensino, com base nas quais serão calculados os dias a serem remidos. De igual modo, aplica-se tal entendimento ao disposto na Resolução nº 391/2021 do CNJ, por ter mantido o posicionamento do Conselho acerca da base de cálculo.

Assim, temos que a base de cálculo para remição pela aprovação no ENCCEJA é de 1600 (mil e seiscentas) horas.

Consoante o art. 126, da LEP, a contagem do prazo se dará à razão de um um dia de pena a cada 12 horas de frequência escolar, divididas, no mínimo, em três dias da atividade. Portanto, em tendo sido certificada a aprovação do apenado no ENCCEJA e considerando-se a carga horária de 1600h, divide-se esse total por 12, alcançando-se 133 (cento e trinta e três) dias de remição.

**

Por fim, esclareço ainda que, dada a conclusão do ensino **fundamental **médio **superior durante o cumprimento da pena, certificada pelo órgão competente do sistema de educação, tem o apenado direito ao acréscimo de um terço previsto no § 5º do art. 126 da LEP, em consonância ao entendimento do STJ:

A Resolução CNJ nº 44/2013 menciona a carga horária de 1.600 horas para o ensino fundamental, e 1.200 horas para o ensino médio, que se refere ao percentual de 50 por cento da carga horária definida legalmente para cada nível de ensino.
Considerando como base de cálculo 50 por cento da carga horária definida legalmente para o ensino médio, ou seja, 1.200 horas, deve-se dividir esse total por 12, encontrando-se o resultado de 100 dias de remição em caso de aprovação em todos os campos de conhecimento do ENEM.
Se a aprovação foi no ENCCEJA (ensino fundamental), deve-se dividir as 1.600 horas por 12, encontrando-se o resultado de 133 dias, desprezando-se a fração. Se o apenado obteve aprovação em todas as cinco áreas de conhecimento, faz jus ao total de 133 dias de remição, acrescidos de bônus de 1/3, nos termos do art. 126, § 5º, da Lei de Execução Penal, perfazendo o total de 177 dias remidos por estudo.
STJ. 3ª Seção. HC 602.425/SC, Rel. Min. Reynaldo Soares da Fonseca, julgado em 10/03/2021 (Info 689).

**

Isto posto, defiro o pedido de remição do evento ***, declarando remidos *** dias da pena.

P.R.I. **, inclusive o apenado para que junte ao autos documento comprobatório do seu nível de escolaridade anterior à realização da prova do ENCCEJA, de modo a possibilitar a análise de possível acréscimo de um terço aos dias aqui remidos previsto no § 5º do art. 126 da LEP.

Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_186',
        nome: 'Medida de segurança regressão',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Trata-se de execução de medida de segurança restritiva em que se certificou que o inimputável foi preso/apreendido em flagrante pela prática de nova conduta delituosa, desta feita de ***.

*Trata-se de execução de medida de segurança restritiva em que se certificou que o inimputável foi preso/apreendido em flagrante pela prática de nova conduta delituosa, desta feita de ***, sendo de acrescentar que tal fato ocorreu ** dias**meses após ele ser benefíciado com a desinternação.

Relatados.

Como ensinava o Prof. Julio Fabbrini Mirabete, “é indeterminado o tempo de duração da medida de segurança, perdurando sua execução enquanto não cessada a periculosidade do agente” (In: Código penal interpretado. 4ª ed., São Paulo : Atlas, 2003, p. 629).

O Código Penal, por sua vez, no art. 97, § 3º, dispõe que "a desinternação, ou a liberação, será sempre condicional devendo ser restabelecida a situation anterior se o agente, antes do decurso de 1 (um) ano, pratica fato indicativo de persistência de sua periculosidade".

É o caso, pois o desinternado praticou novo delito violento poucos dias após receber o benefício, demonstrando ser perigoso ao convívio social.

Isto posto, regrido a medida de segurança para a forma detentiva, pelo prazo mínimo de dois anos.

P.R.I. Comunique-se à unidade prisional e insira-se o inimputável na lista de espera de vagas da UPCT.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_187',
        nome: 'Multa indefere execução MP',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de pedido incidental de execução de multa fixada em sentença condenatória penal em face da parte Executada acima especificada.

Por ocasião do julgamento de questão de ordem na Ação Penal 470 e na ADI 3150, o Supremo Tribunal Federal entendeu que a legitimidade para a execução de multa aplicada em sede de sentença penal condenatória é, prioritariamente, do Ministério Público, assim como que o Juízo competente para o seu processamento é o da Execução Penal, tendo sido o julgamento proclamado nos seguintes termos:

“Decisão: O Tribunal, por maioria, julgou parcialmente procedente o pedido formulado na ação direta para, conferindo interpretação conforme à Constituição ao art. 51 do Código Penal, explicitar que a expressão “aplicando-se-lhes as normas da legislação relativa à dívida ativa da Fazenda Pública, inclusive no que concerne às causas interruptivas e suspensivas da prescrição”, não exclui a legitimação prioritária do Ministério Público para a cobrança da multa na Vara de Execução Penal, nos termos do voto do Ministro Roberto Barroso, Redator para o acórdão, vencidos os Ministros Marco Aurélio (Relator) e Edson Fachin, que o julgavam improcedente. Ausentes, justificadamente, os Ministros Celso de Mello e Gilmar Mendes. Presidência do Ministro Dias Toffoli. Plenário, 13.12.2018.

Fixadas as premissas quanto à competência e à legitimidade ativa para a cobrança da multa, resta a definição do procedimento a ser seguido, considerando-se que a legislação criminal não esgota o procedimento a ser adotado e que o art. 51 do Código Penal textualmente prevê a aplicação de normas da legislação relativa à dívida ativa da Fazenda Pública.

A legislação aplicável à cobrança de dívidas da Fazenda Pública é a Lei nº 6.830/80 – Lei de Execução Fiscal, sem prejuízo da aplicação subsidiária do CPC no que for necessário.

Todavia, o mencionado corpo legal diverge em alguns aspectos do art. 164 da Lei de Execução Penal, que determina, verbis:

“Extraída certidão da sentença condenatória com trânsito em julgado, que valerá como título executivo judicial, o Ministério Público requererá, em autos apartados, a citação do condenado para, no prazo de 10 (dez) dias, pagar o valor da multa ou nomear bens à penhora”.

Diante da divergência apontada e levando-se em conta que, a despeito da aplicação da legislação cível à cobrança da multa em exame, como assentado pela jurisprudência dominante, esta não perde a natureza jurídica de instituto penal, a conclusão lógica é a de que as normas que informam a execução cível de dívidas da União somente serão aplicadas naquilo que não conflitar com o procedimento previsto na Lei de Execução Fiscal1.

Em vista disso, uma primeira divergência identificável entre a LEP e a LEF é a desnecessidade de inscrição da multa em dívida ativa para que possa ser executada. Basta certidão de sentença condenatória com trânsito em julgado, que vem a ser o título executivo judicial, para que a execução penal da multa seja deflagrada.

A segunda divergência diz respeito ao prazo para pagamento voluntário ou nomeação de bens à penhora. Enquanto a LEP prevê 10 (dez) dias, a LEF contempla apenas 5 (cinco) dias, de acordo com o seu art. 8º. Neste caso, como assentado acima, pelo primado da especialidade, aplica-se o prazo de 10 (dez) dias da legislação penal.

O único entrave ao pleito ministerial, contudo, reside, a meu ver, em sua incidentalidade.

Embora entenda que o art. 164 da LEP seja claro o suficiente ao exigir que a execução da multa se dê em autos apartados, compreendo que o assunto demanda um melhor esclarecimento.

Em princípio, tratando-se de execução de título judicial, poder-se-ia defender que a fase de execução dessa verba ocorresse nos mesmos autos da execução penal que abranja outras modalidades de pena, já que tudo se trataria de sanção cominada por sentença de mérito.

Inobstante, é inegável que a concomitância da execução de uma pena outra qualquer e da pena de multa, em um mesmo processo, acarretaria entraves processuais insuperáveis para o célere deslinde do processo.

Basta atentar para o fato do Executado poder, por exemplo, uma vez garantida da dívida, embargar a execução, como previsto no art. 16 da Lei nº 6.830/80 ou mesmo interpor exceção de pré-executividade2, incidentalmente no processo de execução de quantia certa, de cuja decisão caberá, a depender de seu teor, agravo de instrumento ou recurso de apelação, criando, assim, claro entrave para a fiscalização do cumprimento de pena outra que tenha sido aplicada na sentença condenatória.

Em vista do exposto, entendo não ser à toa a exigência do art. 164 da LEP, ao exigir que a execução da multa ocorra em autos apartados e não incidentalmente, como pleiteado pelo representante ministerial, razão pela qual INDEFIRO o pedido do evento ***.

Intime-se o Ministério Publico da presente decisão, para que ajuíze processo autônomo de execução da multa; caso não o faça em 90 dias, encaminhe-se a certidão e anexos à Procuradoria da Dívida Ativa.

Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito

1Embora exija a inscrição em dívida ativa, a Lei de Execução Fiscal se presta para a cobrança de dívida tributária ou não tributária, assim definida na Lei nº 4.320, de 17 de março de 1964 (v. art. 2º da Lei nº 6.830/80 e art. 39, § 2º, da Lei nº 4.320/64).

2A exceção de pré-executividade é amplamente aceita na jurisprudência e se presta para o conhecimento incidental de matéria de ordem pública, que pode ser conhecida de ofício pelo juiz, como previsto no art. 803, parágrafo único do CPC.`,
    },
    {
        id: 'seeu_188',
        nome: 'Retificação percentuais hediondo e comum - NAO UTILIZAR',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Requereu a defesa retificação da GEP, fazendo constar como requisito para progressão de regime os percentuais previstos na nova redação do art. 112 da LEP, já que não se trata de reincidência específica em crime hediondo.

*Requereu a defesa retificação da GEP, fazendo constar como requisito para progressão de regime o percentual de 1/6 previsto na antiga redação do art. 112 da LEP para os crimes comuns.

*Interveio o Ministério Público, opinando favoravelmente. **contrariamente, pois ****.

Relatados.

Conforme decidiu o Superior Tribunal de Justiça, a fixação dos percentuais para progressão de regime devem considerar, em sua integralidade, a nova ou a anterior redação do art. 112 da LEP em sua integralidade, conforme seja mais benérico ao apenado.

Neste sentido:

"O entendimento desta Corte Superior é o de impossibilidade de combinação de leis, formando uma terceira lei. Deve o julgador analisar, de forma individualizada, qual redação do artigo 112 da Lei das Execuções Penais é a mais benéfica ao sentenciado para fins de alcance do requisito objetivo necessário à progressão de regime - aquela com ou sem as modificações trazidas pela Lei n. 13.964/2019" (AgRg no HC n. 699.653/SP, Quinta Turma, Rel. Min. Ribeiro Dantas, DJe de 16/11/2021).

No caso, em aplicada a redação antiga, não importa que o apenado seja reincidente não específico em crime hediondo, deve ser imposto

Com razão ****.

Inicialmente verifico que a exigência de 60% (LEP, art. 112, VII) só cabe no caso de reincidência específica em crime hediondo, o que não é o caso.

É o que atualmente tem decidido o Superior Tribunal de Justiça, verbis:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. PROGRESSÃO DE REGIME. LEI N. 13.964/2019. ALTERAÇÃO DOS PATAMARES DE PROGRESSÃO DO ART. 112 DA LEI DE EXECUÇÃO PENAL. RETROATIVIDADE DA LEI PENAL POSTERIOR MAIS BENÉFICA. ORDEM CONCEDIDA. AGRAVO REGIMENTAL DESPROVIDO. 1. Esta Corte vem decidindo no sentido de que, com a nova redação dos incisos IV e VI do art. 112 da Lei de Execução Penal, alterada pela Lei n. 13.964/2019, quedou omissa a situação dos agentes condenados por crime hediondo com reincidência não específica, de maneira que tal situação, como prescrevem os princípios gerais do direito penal, deve sempre ser interpretada em favor do réu, o que impede a aplicação por analogia da fração de 3/5 (ou 60%) realizada pela instância ordinária no caso em tela, por se tratar de analogia in malam partem, possibilidade vedada em nosso ordenamento. Precedentes. 2. Agravo regimental desprovido. (AgRg no HC 642.977/SP, Rel. Ministro ANTONIO SALDANHA PALHEIRO, SEXTA TURMA, julgado em 02/03/2021, DJe 10/03/2021

Como antes o percentual fora fixado em 3/5, dada ao que dispunha a lei 8072/90, a nova redação do art. 112 da LEP se mostra como novatio legis in mellius, devendo ser aplicada.

Assim, em relação ao crime hediondo, é de se aplicar o percentual de 40% (LEP, art. 112, V).

***

Quando ao crime de roubo, a nova redação fixa o percentual de 25% (inc. III), já que se trata de crime cometido com violência à pessoa ou grave ameaça.

Registro, por oportuno, que neste ponto não utilizo a fração prevista na redação anterior da lei (1/6), pois importaria em criar nova legislação combinando leis, prática vedada pelo verbete nº 501 da Súmula do Superior Tribunal de Justiça. 

Isto posto, mando corrigir a guia de execução penal, fixando como requisito objetivo para a progressão de regime os percentuais de 25% e 40%, respectivamente para os crimes de roubo e de tráfico de drogas..

***

Quando aos demais crimes, a nova redação fixa o percentual de 20% (inc. II), já que se trata de apenado reincidente.

Registro, por oportuno, que neste ponto não utilizo a fração prevista na redação anterior da lei (1/6), pois importaria em criar nova legislação combinando leis, prática vedada pelo verbete nº 501 da Súmula do Superior Tribunal de Justiça. 

Isto posto, mando corrigir a guia de execução penal, fixando como requisito objetivo para a progressão de regime os percentuais de 40% e 20%, respectivamente para o crime hediondo e os comuns.

P.R.I. 

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
];

// Concatena lote 9 parte 1 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE9_PARTE1);

// Lote 9 - Parte 2: Modelos 189-195 (de 201-225.txt)
export const MODELOS_SEEU_LOTE9_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_189',
        nome: 'remição pelo estudo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

 

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena pelo estudo, conforme declaração e tabela de presença do PROJOVEM URBANO (evento ), a partir dos quais elaborou-se cálculo de dias remidos (evento ), que obteve parecer favorável do Ministério Público (evento ).

Relatados.

Com razão o parecer, pois face à documentação junta, o apenado estudou, efetivamente, xx com carga horária diária de 4h, no período de XX, pelo que xx (xx) dias da pena a ele imposta se encontram remidos pelo estudo, conforme dispõe o art, 126, §1º, I:

Art. 126. O condenado que cumpre a pena em regime fechado ou semiaberto poderá remir, por trabalho ou por estudo, parte do tempo de execução da pena.
§ 1o A contagem de tempo referida no caput será feita à razão de:
I - 1 (um) dia de pena a cada 12 (doze) horas de frequência escolar - atividade de ensino fundamental, médio, inclusive profissionalizante, ou superior, ou ainda de requalificação profissional - divididas, no mínimo, em 3 (três) dias;
Isto posto, julgo procedente o pedido, para fim de julgar remidos xx (xx) dias da pena em execução.

P.R.I. Atualize-se o Atestado de Penas.


$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_190',
        nome: 'remição ENEM não aprovação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Cumprindo pena de *** de reclusão em regime fechado, requereu o apenado remição pelo estudo, amparada na previsão do art. 126 da Lei 12.433/2011 e na Resolução nº 391/2021, do CNJ, no que acostou as notas que comprovam aprovação no ENEM (evento 21).

Opinou o Ministério Público pela parcial procedência, para que fossem remidos ** dias (evento **).

Verifica-se que o apenado não juntou comprovação da aprovação para algum curso superior através do ENEM, pois a documentação colacionada somente comprova que prestou o aquele exame durante o cumprimento de sua pena, em 2019, inclusive não obtendo a pontuação mínima exigida para a disciplina **.

Relatados.

Dispõe a Recomendação nº 391/2021 do CNJ, em seu art. 3º, Parágrafo Único, expressamente que:

Parágrafo único. Em caso de a pessoa privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP.

Com ser assim, a recomendação supra viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no Exame Nacional do Ensino Médio, e não apenas por tê-lo prestado.

No caso, a documentação acostada pela defesa somente comprova que o apenado prestou o exame do ENEM durante o cumprimento de sua pena, em 2019, contudo sem comprovar a aprovação, critério expressamente exigido pela resolução CNJ nº 391/2021.

É cediço que para o candidato ser aprovado deverá atingir determinada nota exigida para cada curso.

Aqui, as notas obtidas não foram suficientes para ingressar em algum curso superior.

Ademais, ele não obteve a pontuação mínima exigida para a disciplina Matemática e Suas Tecnologias, o que já o reprovaria no exame do ENEM.

N'outro flanco, a lista de aprovados, contendo a nota e a situação (aprovada ou suplente) é divulgada pelo Sistema de Seleção Unificada – SISU, de modo que poderia ele ter acesso.

Ademais, não se comprovou qual era o nível de escolaridade anterior do apenado e se sabe que o Superior Tribunal de Justiça esclareceu que as horas expendidas para aprender as matérias da grade curricular em atividade escolar efetivada fora do ambiente prisional, no caso de conclusão do ensino médio antes do início da execução, não podem integrar o cálculo da remição, pois o aprendizado não ocorreu ao longo do período de cárcere (EDcl no HC n. 716.072/SP, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 22/3/2022, DJe de 28/3/2022).

Assim, descabe analogia ou interpretação extensiva do art. 126 da LEP, de modo a permitir ao agravante a remição das penas por aprovação no Enem quando estudou e concluiu o ensino médio antes de iniciar o cumprimento da pena, não evidenciando o estudo sob a responsabilidade do apenado quando já preso.

Na lição do mesmo acórdão acima referido:

8. Se o postulante valeu-se do Enem como espécie de vestibular, não há prejuízo de obter o nível superior e pleitear futura remição. Entretanto, a execução é regida pelo princípio da legalidade e a realização de provas por aquele que frequentou aulas e obteve o certificado do grau de ensino não pode ensejar premiação por aprendizado do nível de escolaridade não adquirido a encargo do próprio preso. 9. Entender de outra forma permitiria que alguém com nível superior obtivesse remições por realizar o ENCEJJA do ensino fundamental (133 dias), o ENCEJJA de ensino médio (100 dias) e, ainda, o ENEM (100 dias), o que resultaria no abatimento de 333 dias de sua pena, quando é manifesto que não houve dedicação no cárcere para aquisição do conhecimento.

Nesse sentido:

AGRAVO REGIMENTAL EM RECURSO ESPECIAL. EXECUÇÃO PENAL. VIOLAÇÃO DO ART. 126 DA LEP. PLEITO DE RECONHECIMENTO DA REMIÇÃO PELO ESTUDO. APROVAÇÃO NO ENEM (EXAME NACIONAL DO ENSINO MÉDIO) APÓS A CONCLUSÃO DO ENSINO MÉDIO. SENTENCIADO PORTADOR DE DIPLOMA DE CURSO SUPERIOR. IMPOSSIBILIDADE DE CONCESSÃO DA BENESSE.
1. Visando à ressocialização do apenado e tendo como base o direito fundamental à Educação, o Conselho Nacional de Justiça (CNJ), por meio da Recomendação n. 44/2013 - posteriormente substituída pela Resolução n. 391/2021 -, estabeleceu a possibilidade de remição de pena à pessoa privada de liberdade, que, por meio de estudos por conta própria, vier a ser aprovada nos exames que certificam a conclusão do ensino fundamental ou médio (ENCCEJA ou outros) e aprovação no Exame Nacional do Ensino Médio - ENEM.
2. Com efeito, o propósito da remição pelo estudo não é simplesmente diminuir o tempo de encarceramento, mas, sobretudo, fomentar a aquisição de novos conhecimentos e ferramentais educacionais por parte do apenado, de modo a facilitar a sua reintegração social.
3. No caso, tendo o apenado concluído o ensino médio e superior antes do início do cumprimento da pena, incabível a remição penal por aprovação no Exame Nacional do Ensino Médio, visto que tal situação destoa do escopo da norma.
4. Agravo regimental improvido.
(AgRg no REsp n. 1.979.591/SP, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 19/4/2022, DJe de 25/4/2022.).

Isto posto, indefiro o pedido de remição do ev.**.

P.R.I

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_191',
        nome: 'Prisão domiciliar monitorado',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade, atualmente em regime semiaberto, tendo a Defensoria Pública requerido concessão de prisão domiciliar c/c monitoramento eletrônico, alegando que, conforme se extrai doSIAPEN, o apenado tem histórico de consultas médicas em razão de tuberculose, e, *** , correndo o risco de contrair o Coronavírus - COVID-19, bem como de transmiti-lo aos policiais penais (evento **).

Interveio o Ministério Público, opinando pelo indeferimento (evento **).

Acrescento ao relatório que em ** fora concedida progressão de regime ao apenado (evento **),tendo ele sido inserido no regime semiaberto e e já estando monitorado eletronicamente.

Relatados.

De logo, quanto ao novo Coronavírus, o Poder Judiciário vem seguindo as recomendações do Ministério da Saúde e demais autoridades sanitárias, no sentido da população permanecer em isolamento social.

De seu lado, o sistema prisional adotou providências para evitar a contaminação dos presos, tendo inclusive suspendido a entrada de visitas nos presídios.

A Recomendação do CNJ de nº 62, no art. 5º, incisos III e IV, dispõe que a prisão domiciliar deve ser concedida em caso de diagnóstico suspeito ou confirmado do COVID-19, mediante relatório da equipe de saúde.

Aqui, o apenado já está em prisão domiciliar, monitorado eletronicamente, pelo que o pedido está prejudicado.

Ante o exposto, não conheço do pedido.P.R.I.


$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_192',
        nome: 'agravo falta média',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que lhe impôs punição por falta média, consistente em não recolhimento ao pernoite na unidade prisional.

Agrava o apenado da decisão do evento * que lhe impôs punição por falta média, consistente em descumprimento das condições do monitoramento eletrônico.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada, desatendeu ele ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 (“cumprimento fiel da sentença”), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do Rio Grande do Norte, art. 74, inc. IV, merecendo punição, que no caso foi a prevista no seu art. 66, III ( suspensão ou restrição de regalias) c/c art. 67.

Registro, por oportuno, que a falta praticada poderia também ser considerada grave (fuga), já que o apenado não se recolheu por mais de três dias à unidade prisional, tendo este juízo optado pela decisão mais benéfica porque depois ele retornou ao cumprimento da pena.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

*Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando a secretaria sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

*Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_193',
        nome: 'Prisão domiciliar indeferimento covid19',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade, atualmente em regime fechado, tendo a defesa requerido concessão de prisão domiciliar, alegando que o apenado é idoso e portador de **, sendo do grupo de risco quanto à pandemia do Coronavírus - COVID-19 (evento ***).

Interveio o Ministério Público, opinando pelo indeferimento (evento ***).

Relatados.

De logo, quanto ao novo Coronavírus, o Poder Judiciário vem seguindo as recomendações do Ministério da Saúde e demais autoridades sanitárias, no sentido da população permanecer em isolamento social.

De seu lado, o sistema prisional adotou providências para evitar a contaminação dos presos, tendo inclusive suspendido a entrada de visitas nos presídios.

A Recomendação do CNJ de nº 62, no art. 5º, incisos III e IV, dispõe que a concessão de prisão domiciliar deve ser concedida em caso de diagnóstico suspeito ou confirmado do COVID-19, mediante relatório da equipe de saúde.

Aqui, o apenado está em regime fechado, com mais de *** anos de pena a cumprir e previsão de progressão de regime apenas para ****, e não comprovou suspeita de COVID-19, de forma que a prisão domiciliar não se mostra indicada.

De seu lado, o Conselho Regional de Medicina do Rio Grande do Norte, ao responder ao Processo-Consulta CREMERN nº 04/2020, oferecendo o Parecer CREMERN nº 03/2020, deixou expresso:

"...entendemos que a identificação pela administração penitenciária dos custodiados em grupo de risco, o seu monitoramento e isolamento dos demais presos nos casos indicados, em consonância com a portaria interministerial supracitada, como também as medidas elencadas na Nota Técnica 10/2020 da Secretaria de Saúde do Rio Grande do Norte, desde que estritamente observadas, são adequadas e suficientes para o enfrentamento da pandemia do coronavírus nas unidades prisionais, bem como para a preservação da saúde das pessoas privadas de liberdade."

Finalmente, vale a pena recordar as ponderações do eminente Ministro Rogério Schietti:"... a crise do novo coronavírus deve ser sempre levada em conta na análise de pleitos de libertação de presos, mas, ineludivelmente, não é um passe livre para a liberação de todos, pois ainda persiste o direito da coletividade em ver preservada a paz social, a qual não se desvincula da ideia de que o sistema de justiça penal há de ser efetivo, de sorte a não desproteger a coletividade contra os ataques mais graves aos bens juridicamente tutelados na norma penal (STJ - HC n. 567.408/RJ).

Ante o exposto, e em consonância com o parecer ministerial, indefiro o pleito da defesa, que visava colocar o apenado em prisão domiciliar.

P.R.I

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_194',
        nome: 'Progressão aberto cautelar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_195',
        nome: 'Incompetência inimputável',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de execução da medida de segurança restritiva, em que o inimputável reside no Município de **, Comarca de ***. 
Relatados.
Competente para a execução de medida de segurança restritiva é o juízo do local onde reside o inimputável.
No caso, o inimputável reside na Comarca de ***.
Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução penal, determino a remessa dos autos para a Comarca de ***.
P.R.I. Cumpra-se.
 $juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
 
Juiz de Direito`,
    },
];

// Concatena lote 9 parte 2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE9_PARTE2);

// Lote 9 - Parte 3: Modelos 196-205 (de 201-225.txt - final)
export const MODELOS_SEEU_LOTE9_PARTE3: ModeloSEEU[] = [
    {
        id: 'seeu_196',
        nome: 'Monitoramento pedido instalação tornozeleira',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execution de pena unificada em **, atualmente em regime semiaberto, em que o apenado requereu a colocação da tornozeleira eletrônica, alegando, em síntese, que corre risco à sua vida ou integridade física, em razão de (evento **).

Relatados.

A Portaria nº 02/2016 deste juízo já autorizou a inserção no monitoramento eletrônico de todos os apenados no regime semiaberto que tenham autorização para saídas externas desvigiadas, o que deve ser requerido à Central de Monitoramento Eletrônico - CEME.

O atendimento ao pedido, portanto, trata-se de atribuição da autoridade administrativa.

Isto posto, não conheço do pedido.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_197',
        nome: 'Regressão negada novo crime sem denúncia',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_198',
        nome: 'Retificação GEP data último trânsito NÃO USAR',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões deveria ser a do trânsito em julgado da última condenação, calculando-se o requisito objetivo sobre o saldo da pena.

A defesa, de seu lado, sustentou a manutenção da GEP.

Relatados.

A Terceira Seção do Superior Tribunal de Justiça, e, competente para unificar a jurisprudência criminal, firmou entendimento de que "A alteração da data-base para concessão de novos benefícios executórios, em razão da unificação das penas, não encontra respaldo legal.. (REsp 1557461/SC, Rel. Ministro ROGERIO SCHIETTI CRUZ, TERCEIRA SEÇÃO, julgado em 22/02/2018, DJe 15/03/2018).

O Supremo Tribunal Federal, porém, por praticamente todos os seus ministros, julgando Recursos Extradordinários face a tal entendimento, sustentou antiga jurisprudência da Corte para reconhecer a data do trânsito em julgado da última condenação do réu como data-base para a concessão de benefícios durante a execução penal ( RE 1215997, que faz referência a grande número de outros julgados).

Isto posto, mando corrigir a guia de execução penal, lançando a data do trânsito em julgado da última condenação do apenado como data-base para futura progressão de regime

P.R.I. 

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_199',
        nome: 'Conversão pena medida de segurança',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que demonstrou-se, após perícia médica, que sobreveio doença mental ao apenado.

Interveio, então, o Ministério Público, opinando pela conversão da pena privativa de liberdade em medida de segurança detentiva*, com a concordância da defesa. *A defesa, de seu lado, pugnou pela medida restritiva*.

*Acrescento ao relatório que o apenado encontra-se recolhido na UPCT*provisoriamente na Cadeia Pública de Natal.

Relatados.

Nos termos do art. 183 da Lei nº 7.210/84, “quando, no curso da execução da pena privativa de liberdade, sobrevier doença mental ou perturbação da saúde mental, o juiz, de ofício, a requerimento do Ministério Público ou da autoridade administrativa, poderá determinar a substituição da pena por medida de segurança”.

É o caso, pois a perícia médica realizada pelo ITEP comprovou que o apenado é, hoje, portador de transtorno mental (CID – 10 F****) de cura improvável, doença essa que o torna perigoso ao convívio social.

Ora, conforme o dispositivo legal antes referido, suspende-se a execução e converte-se a pena em medida de segurança se sobrevier doença mental ou perturbação da saúde mental que deixe o condenado sem capacidade penal de submeter-se às obrigações da pena privativa de liberdade.

Não há confundir com a mera transferência prevista no art. 108 da Lei de Execução Penal e art. 41 Código Penal.

“Note-se que a opção entre a conversão dos arts. 183 e 184 da LEP e a simples transferência para o internamento deve ser feita pelo Juiz, e levará em conta a periculosidade do agente. Se a doença mental superveniente for muito séria e de caráter permanente, demonstrada estará a periculosidade do sentenciado, devendo o Juiz optar pela conversão, seguindo a execução todas as regras relativas às medidas de segurança. Se, porém, for de natureza transitória e de gravidade relativa, não estará demonstrada a periculosidade do sentenciado, devendo optar pela simples transferência” (MORAES, Alexandre de, SMANIO, Gianpaolo Poggio. Legislação penal especial. 4ª ed. São Paulo : Atlas, 2001, p. 212).

No caso, é grave e permanente a doença mental diagnosticada, estando demonstrada a periculosidade do apenado, enquanto desaconselhável, ao menos no estádio atual, seu retorno ao convívio social.

*Isto posto, converto em medida de segurança detentiva prevista no art. 96, I, do Código Penal, pelo prazo mínimo de três anos, a pena privativa de liberdade, devendo o inimputável ficar provisoriamente recolhido no estabelecimento prisional onde se encontra, enquanto não se providencia sua transferência para a UPCT (Unidade Psiquiátrica de Custódia e Tratamento).

*Isto posto, converto em medida de segurança detentiva prevista no art. 96, I, do Código Penal, pelo prazo mínimo de três anos, a pena privativa de liberdade, devendo o inimputável permanecer recolhido à UPCT (Unidade Psiquiátrica de Custódia e Tratamento).

Isto posto, converto a pena privativa de liberdade em medida de segurança restritiva prevista no art. 96, II, do Código Penal, pelo prazo mínimo de dois anos, concedendo ao inimputável, conforme art. 97 do Código Penal, a liberação condicional, cabendo-lhe realizar tratamento psiquiátrico em CAPS ou outro serviço médico adequado, encaminhando-se relatórios trimestrais a este Juízo, esclarecendo, ainda, que, nos termos do que dispõe o artigo 178, c.c. com os artigos 132 e 133 da Lei de Execução Penal, deverá:

Apresentar trimestralmente a Juízo comprovação de que se submete ao tratamento médico adequado;

Não mudar de endereço sem comunicar ao Juízo e não mudar do território da comarca sem prévia autorização judicial;

Recolher-se até às 22h00 à sua habitação;

Não freqüentar lugares onde bebidas alcoólicas sejam vendidas em balcão, além de casas de jogo e prostituição; e,

Após o decurso de dois anos requisite-se novo exame de sanidade mental e avaliação de periculosidade, dando-se vista ao Ministério Público após a juntada do laudo aos autos.

P.R.I. Comunique-se à UPCT e ao curador do inimputável.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_200',
        nome: 'visitas indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de pena privativa de liberdade imposta a ***, atualmente em regime fechado, em que sua genitora, através da Defensoria Pública, requereu autorização para visitar o interno na Cadeia Pública de Ceará Mirim (evento *), que fora negado pela administração penitenciária.

Interveio o Ministério Público opinando pelo ** (evento *).

Relatados.

*A genitora do apenado foi recentemente condenada por crime de tráfico de drogas, estando em curso a ação de execução penal (PEC nº **), motivo pelo qual foi impedida de visitar o filho.

*A genitora do apenado responde em liberdade a ação penal por crime de tráfico de drogas, motivo pelo qual foi impedida de visitar o filho.

Justificável, portanto, o óbice ao direito de visita.

Ademais, o indeferimento do pedido de visitas não gerará prejuízo ao processo de ressocialização do apenado, que pode receber visitas de outros pessoas, como companheira, filhos, irmãos etc.

O indeferimento da visita de sua genitora decorre de uma condição dela, não dele.

Sobre o assunto, a jurisprudência do Superior Tribunal de Justiça é no sentido de que o direito de visita, disposto no art. 41, inciso X, da Lei de Execução Penal, que confere aos presos o direito de serem visitados por cônjuge, companheira, parentes e amigos em dias determinados, embora seja relevante para o processo de reinserção do preso à sociedade e imprescindível para a manutenção dos seus laços familiares, não possui natureza absoluta e deve ser sopesado, de acordo com a situação específica vivenciada no caso concreto, em conjunto com outros princípios, dentre os quais o que visa a garantir a disciplina e a segurança dentro dos estabelecimentos prisionais, velando, por consequência, também pela integridade física tanto dos reclusos quanto dos que os visitam (RE nº 1.845.849 - DF).

No mesmo sentido:

RECURSO ORDINÁRIO EM MANDADO DE SEGURANÇA. DIREITO DO PRESO DE RECEBER VISITAS.(...). 1. A competência para dispor sobre direito penitenciário é concorrente entre a União, os Estados e o Distrito Federal (art. 24, I, da CF), tendo a LEP outorgado à autoridade administrativa prisional o poder de regular a matéria, no que toca a questões disciplinares. 2. O direito do preso de receber visitas, assegurado pelo art. 41, X, da Lei de Execuções Penais (Lei 7.210/1.984), não é absoluto e deve ser sopesado, de acordo com a situação específica vivenciada no caso concreto, em conjunto com outros princípios, dentre os quais o que visa a garantir a disciplina e a segurança dentro dos estabelecimentos prisionais, velando, por consequência, também pela integridade física tanto dos reclusos quanto dos que os visitam. 3. A administração disciplinar típica da competência da autoridade prisional diz respeito, por exemplo, ao número máximo de pessoas que podem efetuar visitas por vez (o que se justifica plenamente diante da capacidade física do presídio de acomodar um certo número de pessoas com um mínimo de conforto e segurança), à organização dos cadastros para controle dos que têm acesso ao estabelecimento prisional, os documentos, comprovantes e trâmites administrativos que lhes são exigidos, necessidade (ou não) de revista prévia do visitante, dia, local e duração das visitas, restrição de transporte de bens para o presídio, zelo pela ordem e atenção a regras durante o período de visita etc. (...). (RMS 56.152/SP, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 03/04/2018, DJe 13/04/2018).

Isto posto, reconhecendo justificável o óbice da visita ao apenado por sua genitora, que também é apenada, indefiro o pedido.

P.R.I

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_201',
        nome: 'Medida de segurança - desinternação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança em que o inimputável foi submetido a exame de cessação de periculosidade, opinando a perícia pela continuidade do tratamento a nível ambulatorial.

Interveio, então, o Ministério Público, opinando pela desinternação condicional. 

Relatados.

No parecer médico-psiquiátrico restou consignado que a custódia do sentenciado poderia ser encerrada, com seu desinternamento, submetendo-se a tratamento ambulatorial.

O caso sob julgamento vem analisado com maestria por Guilherme de Souza Nucci (Código Penal Comentado. 2ª ed. São Paulo : Revista dos Tribunais, 2002, p. 324), ao comentar o art. 97, § 4º, do Código Penal, verbis:

“Conversão da internação em tratamento ambulatorial (desinternação progressiva): prevê a lei penal que o tratamento ambulatorial pode ser convertido em internação, caso essa providência seja necessária para ‘fins curativos’. Nada fala, no entanto, quanto à conversão da internação em tratamento ambulatorial, o que se nos afigura perfeitamente possível. Muitas vezes o agente pode não revelar periculosidade suficiente para manter-se internado, mas ainda necessitar de um tratamento acompanhado. Assim, valendo-se da hipótese deste parágrafo, pode o magistrado determinar a desinternação do agente para o fim de se submeter a tratamento ambulatorial, que seria a conversão da internação em tratamento ambulatorial. Não é, pois, a desinternação prevista no parágrafo anterior – porque cessou a periculosidade –, mas sim para a continuidade dos cuidados médicos, sob outra forma. Essa medida torna-se particularmente importante, pois há vários casos em que os médicos sugerem a desinternação, para o bem do próprio doente, embora sem que haja a desvinculação do tratamento médico obrigatório. Ora, o art. 178 da Lei de Execução Penal é claro ao determinar que, havendo desinternação ou liberação, devem ser impostas ao apenado as condições obrigatórias e facultativas do livramento condicional (arts. 132 e 133, LEP). Ocorre que nenhuma delas prevê a possibilidade de se fixar, como condição, a obrigação de continuar o tratamento ambulatorial, após ter sido desinternado. Assim, o melhor a fazer é converter a internação em tratamento ambulatorial, pelo tempo que for necessário à recuperação, até que seja possível, verificando-se cessação da periculosidade, haver a liberação condicional”.

Aplica-se ao caso o Código Penal, que no art. 97, §§ 1º e 3º, dispõe que a medida de segurança, consistente em internação ou tratamento ambulatorial, será por tempo indeterminado, persistindo enquanto não averiguada, mediante perícia médica, a cessação da periculosidade, sendo, de toda forma, a desinternação, condicional, pois a situação anterior será restabelecida se, antes do decurso de um ano, o agente pratica fato indicativo de persistência de sua periculosidade. 

Isto posto, converto em medida de segurança restritiva prevista no art. 96, II, do Código Penal, pelo prazo mínimo de dois anos, a medida de segurança detentiva em execução, concedendo ao inimputável, conforme art. 97 dp Código Penal, a liberação condicional, cabendo-lhe realizar tratamento psiquiátrico em CAPS ou outro serviço médico adequado, encaminhando-se relatórios trimestrais a este Juízo, esclarecendo, ainda, que, nos termos do que dispõe o artigo 178, c.c. com os artigos 132 e 133 da Lei de Execução Penal, deverá:

Apresentar trimestralmente a Juízo comprovação de que se submete ao tratamento médico adequado;

Não mudar de endereço sem comunicar ao Juízo e não mudar do território da comarca sem prévia autorização judicial;

Recolher-se até às 22h00 à sua habitação;

Não freqüentar lugares onde bebidas alcoólicas sejam vendidas em balcão, além de casas de jogo e prostituição; e,

Após o decurso de dois anos requisite-se novo exame de sanidade mental e avaliação de periculosidade, dando-se vista ao Ministério Público após a juntada do laudo aos autos.

P.R.I. Comunique-se à UPCT e ao curador do inimputável.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_202',
        nome: 'Transf MP indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena privativa de liberdade em regime semiaberto, em que o Ministério Público requereu a transferência do PEC para a Comarca de **, local onde o apenado reside.

Indagado, o juízo daquela Comarca informou a impossibilidade de receber o PEC.

Relatados.

De logo, anoto que não existe unidade prisional na Comarca de domicílio do apenado, a qual seria necessária para o recolhimento noturno ou cumprimento de punições por faltas médias, comuns no regime semiaberto harmonizado (prisão domiciliar monitorada eletronicamente), o que impossibilita o atendimento.

Ademais, conforme decidiu a Terceira Seção do Superior Tribunal de Justiça:

"A jurisprudência desta Corte entende que a transferência de preso para local próximo de sua família, onde possa obter resultados mais favoráveis no processo de ressocialização, depende de consulta prévia ao juízo de destino. 3. Inexistindo vaga, na localidade de domicílio do reeducando, no regime em que se encontra em cumprimento de pena, tanto a execução quanto a fiscalização da reprimenda devem ser mantidas com o Juízo originário da Execução" (CC n. 148.441/DF, Terceira Seção, Rel. Min. Nefi Cordeiro, DJe de 17/08/2017). .

Por fim, além do juízo competente discordar com a transferência, existem problemas operacionais do SEEU a considerar, já que poucos servidores do TJRN foram treinados no uso do sistema, e menos ainda nas comarcas onde inexiste unidade prisional, não havendo qualquer prejuízo ao apenado na manutenção da situação atual.

Isto posto, indefiro a transferência.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_203',
        nome: 'incompetência da 13 para 17',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena em que verificou-se que o apenado responde a outro PEC na 17ª Vara Criminal, tendo sido solicitada a remessa destes autos.

Relatados.

Existindo outro PEC em andamento, em juízo diverso e com regime mais gravoso, impõe-se a remessa dos autos para unificação de penas.

Isto posto, tendo por incompetente este juízo para continuar a presidir o feito, determino sua remessa à 17ª Vara Criminal de Natal.P.R.I.

Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_204',
        nome: 'Medida de segurança mantendo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Trata-se de execução de medida de segurança detentiva onde, realizado exame de cessação de periculosidade por peritos do ITEP, opinaram esses pela continuidade do tratamento.

*Trata-se de execução de medida de segurança restritiva onde, realizado exame de cessação de periculosidade por peritos do ITEP, opinaram esses pela continuidade do tratamento.

Intervieram o Ministério Público e a defesa.

Relatados.

Como ensinava o Prof. Julio Fabbrini Mirabete, “é indeterminado o tempo de duração da medida de segurança, perdurando sua execução enquanto não cessada a periculosidade do agente” (In: Código penal interpretado. 4ª ed., São Paulo : Atlas, 2003, p. 629).

**No caso, os peritos oficiais, psiquiatras forenses do Itep, concluíram que o periciando “em razão de transtorno de personalidade” (CID-10-F 60.0 – Personalidade Paranóica), é perigoso ao convívio social, sendo necessidade a manutenção do seu internamento**.

**No caso, os peritos oficiais do ITEP, concluíram que o periciando continua necessitando de tratamento, não se verificando cessação de periculosidade.**

*Isto posto, mantenho a medida de segurança detentiva pelo prazo mínimo de dois anos, cabendo à equipe técnica da Unidade Psiquiátrica de Custódia e Tratamento o seu acompanhamento, encaminhando relatórios semestrais a este Juízo.

Isto posto, mantenho a medida de segurança restritiva pelo prazo mínimo de dois anos, cabendo ao curador do inimputável encaminhar a juízo comprovação trimestral de que o tratamento médico-psiquiátrico está sendo realizado.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_205',
        nome: 'LC - pena cumprida durante suspensão',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que foi concedido o livramento condicional, mas adiante certificou-se que o apenado foi novamente preso e denunciado por prática de outro delito, sendo o benefício suspenso.

Acrescento ao relatório que o novo processo ainda não foi julgado e que o SEEU identificou a pena como cumprida.

É o relatório.

Suspenso o livramento condicional e retornando o apenado ao cumprimento da pena, foi atingida a data em que previsto seu término.

Ora, nos termos do art. 89 do Código Penal, "o juiz não poderá declarar extinta a pena, enquanto não passar em julgado a sentença em processo a que responde o liberado, por crime cometido na vigência do livramento". Isso porque o período de prova, caso ocorra condenação no novo processo, não se desconta da pena o tempo em que esteve solto o apenado (CP, art. 88).

Entretanto, sendo impossível antever se o apenado será condenado ou absolvido no novo processo, não pode permanecer cumprindo uma pena que não se sabe se já extinta.

Isto posto, suspendo o cumprimento da pena, mandando colocar o apenado em liberdade, se inexistente outra ordem de prisão, aguardando o julgamento do novo processo, o que deverá ser buscado após três meses.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 9 parte 3 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE9_PARTE3);

// Lote 10 - Parte 1: Modelos 206-212 (de 226-250.txt)
export const MODELOS_SEEU_LOTE10_PARTE1: ModeloSEEU[] = [
    {
        id: 'seeu_206',
        nome: 'Agravo percentuais mantendo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que deferiu pedido ministerial para retificar os percentuais de cumprimento da pena para progressão de regime.

Agrava o apenado da decisão do evento * que indeferiu seu pedido para retificar os percentuais de cumprimento da pena para progressão de regime, utilizando-se percentuais para umas e frações para outras, conforme lhe fosse mais benéfico.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois os percentuais de atingimento do requisito objetivo para progressão de regime foram fixados nos termos da nova redação do art. 112 da Lei de Execução Penal, já que mais benéfica ao apenado que a previsão anterior.

Registro, por oportuno, que utilizar para uma (ou umas) pena(s) parte da redação imposta pela nova lei e para outras a redação anterior importaria em criar nova legislação combinando leis, prática vedada pelo verbete nº 501 da Súmula do Superior Tribunal de Justiça.

Neste sentido anotou o Ministro Ribeiro Dantas, em decisão recentíssima:

De acordo com a jurisprudência desta Corte, é cabível a aplicação retroativa da lei nova, desde que o resultado da incidência das suas disposições, na íntegra, seja mais favorável ao réu do que o advindo da aplicação da lei mais antiga, sendo vedada a combinação de leis.

(…)

Assim, deve o julgador analisar, de forma individualizada, qual redação do artigo 112 da Lei das Execuções Penais é a mais benéfica ao sentenciado para fins de alcance do requisito objetivo necessário à progressão de regime - aquela com ou sem as modificações trazidas pela Lei n. 13.964/2019.

(REsp n. 2.042.501, Ministro Ribeiro Dantas, DJe de 24/03/2023.)

Destoa, portanto, da orientação jurisprudencial deste STJ, qualquer decisão que leve a efeito indevida combinação de leis, aplicando, na mesma execução penal, a norma do art. 112 da LEP, tanto com a redação anterior quanto com a redação posterior à alteração promovida pela Lei n. 13.964/2019.

Esse entendimento, aliás, é exaustivamente repetido pela 5ª Turma do Tribunal da Cidadania:

EXECUÇÃO PENAL. AGRAVO REGIMENTAL NO RECURSO ESPECIAL. EXECUÇÃO PENAL. PROGRESSÃO DE REGIME PRISIONAL. ART. 112 DA LEP. REDAÇÃO DA LEI 13.964/2019 (PACOTE ANTICRIME). APLICAÇÃO DA LEI MAIS BENÉFICA EM SUA INTEGRALIDADE. COMBINAÇÃO DE LEIS. IMPOSSIBILIDADE. AGRAVO REGIMENTAL NÃO PROVIDO.

1. O Tribunal a quo, ao decidir a controvérsia, consignou que, diante do conflito de leis no tempo, o exame da norma aplicável, no que tange às modificações operadas pela Lei n.º 13.964/2019 no art. 112 da Lei de Execução Penal, deve ser feito individualmente para cada condenação.

2..Ocorre que a jurisprudência desta Corte possui o entendimento consolidado de que é cabível a aplicação retroativa da lei nova, desde que o resultado da incidência das suas disposições, na íntegra, seja mais favorável ao réu do que o advindo da aplicação da lei mais antiga, sendo vedada a combinação de leis.

3. Ademais, o verbete sumular n. 471 do STJ, segundo o qual "Os condenados por crimes hediondos ou assemelhados cometidos antes da vigência da Lei n. 11.464/2007 sujeitam-se ao disposto no art. 112 da Lei n. 7.210/1984 (Lei de Execução Penal) para a progressão de regime prisional", muito embora assegure a ultratividade da lei penal mais benéfica em relação a delitos praticados antes da superveniência de lei mais gravosa, não chega ao ponto de admitir a combinação de leis pretendida pela defesa.

4. Agravo regimental não provido. (AgRg no REsp n. 2.011.151/SC, relator Ministro Reynaldo Soares da Fonseca, Quinta Turma, julgado em 6/9/2022, DJe de 13/9/2022.)

AGRAVO REGIMENTAL NO HABEAS CORPUS. PROGRESSÃO DE REGIME. PACIENTE CONDENADO POR CRIME COMUM E HEDIONDO. REINCIDENTE NÃO ESPECÍFICO EM DELITO HEDIONDO. LEI N. 13.964/2019. POSSIBILIDADE DE APLICAÇÃO DOS PERCENTUAIS PREVISTOS NOS INCISOS II E V DO ART. 112 DA LEI N. 7.210/84. IMPOSSIBILIDADE DE COMBINAÇÃO DE LEIS. SÚMULA 501 DO SUPERIOR TRIBUNAL DE JUSTIÇA - STJ. RECURSO DESPROVIDO.

1. Conforme prevê o Enunciado n. 501 da Súmula do STJ, é vedada a combinação de leis, devendo o julgador aplicar, na íntegra, a norma que seja mais favorável ao indivíduo.

No caso, o Tribunal a quo manteve a aplicação do percentual de 40% como requisito para a progressão referente à condenação por crime hediondo ou equiparado e 20% para a condenação por crime comum, praticado sem violência ou grave ameaça, tendo em vista que o apenado é reincidente não específico em crime hediondo, estando, portanto, em consonância com a jurisprudência desta Corte. Precedentes.

2. Agravo regimental desprovido. (AgRg no HC n. 701.427/SC, relator Ministro Joel Ilan Paciornik, Quinta Turma, julgado em 24/5/2022, DJe de 26/5/2022.)

 

Em assim sendo, por seus próprios fundamentos, acrescidos das bem lançadas contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_207',
        nome: 'Incompetência monitorado Regional',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena em regime semiaberto em que verificou-se que o apenado está monitorado eletronicamente e residindo em outra comarca.

Relatados.

Competente para o acompanhamento do regime semiaberto harmonizado é o juízo do local onde reside o apenado, desde que na Comarca exista a devida estrutura para o processo de execução penal.

No caso, o apenado reside em município integrante da área territorial de competência da 1a Vara Regional de Execução Penal.

Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução penal de pessoa que cumpre a pena em regime semiaberto harmonizado em região de outra competência, determino a remessa dos autos para a 1a Vara Regional de Execução Penal.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_208',
        nome: 'Regressão novo crime cancelamento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_209',
        nome: 'Competência visita menores',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de requerimento formulado por ** para autorização de visita de adolescente ao apenado ***, recolhido na cadeia pública desta comarca.

Interveio o Ministério Público.

Relatados.
Nos termos da jurisprudência do eg Tribunal de Justiça do Rio Grande do Norte, a expedição de alvará para autorizar adolescente a entrar em presídio é do juízo competente para cumprimento dos atos previstos no art. 149 da Lei nº 8.069/1990, por possuir em seus quadros equipe multidisciplinar que pode lhe auxiliar na análise do pedido, sempre objetivando a proteção integral da pessoa em formação, ao contrário do Juízo da Vara Criminal, que, analisaria o pleito sob a ótica do preso, permitindo ou não a respectiva visita.

É o que se lê nos acórdãos que julgaram o Conflito Negativo de Competência n° 2010.016014-9, em 20.04. 2011, relatora a Desembargadora Maria Zeneide Bezerra, e o Conflito Negativo de Competência nº 2010.016013-2, julgado em 16/03/2011, sendo relator o Desembargador AMAURY MOURA SOBRINHO;

Isto posto, tendo por incompetente este juízo para decidir acerca de visita de adolescente a pessoa presa, nego seguimento ao pleito, que poderá ser requerido pelo interessado no juízo competente para os assuntos de infância de juventude nesta Comarca.
P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_210',
        nome: 'medida de segurança indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade de * anos de reclusão por prática de crime de **, em que alegou-se que ao apenado sobreveio doença mental.

Realizada perícia médica-psiquiátrica, esclareceu o laudo que o apenado tem a plena capacidade de entender o caráter da pena imposta, ou de determinar-se de acordo com esse entendimento.

Interveio, então, o Ministério Público, opinando pelo indeferimento da conversão da pena privativa de liberdade em medida de segurança detentiva, enquanto a defesa ***. 

Relatados.

Nos termos do art. 183 da Lei nº 7.210/84, “quando, no curso da execução da pena privativa de liberdade, sobrevier doença mental ou perturbação da saúde mental, o juiz, de ofício, a requerimento do Ministério Público ou da autoridade administrativa, poderá determinar a substituição da pena por medida de segurança”.

**No caso, a perícia médica realizada pelo ITEP comprovou que o apenado, **mesmo sendo portador de transtorno mental (CID – 10 F**), tem a plena capacidade de entender o caráter da pena imposta, ou de determinar-se de acordo com esse entendimento.

**No caso, a perícia médica realizada pelo ITEP comprovou que o apenado não é portador de transtorno mental.

Como definiu o Superior Tribunal de Justiça, "Em sede de inimputabilidade (ou semi-imputabilidade), vigora, entre nós, o critério biopsicológico normativo. Dessa maneira, não basta simplesmente que o agente padeça de alguma enfermidade mental (critério biológico), faz-se mister, ainda, que exista prova (v.g. perícia) de que este transtorno realmente afetou a capacidade de compreensão do caráter ilícito do fato (requisito intelectual) ou de determinação segundo esse conhecimento (requisito volitivo) à época do fato, i.e., no momento da ação criminosa (critério psicológico)" (HC 55.230/RJ, Rel. Ministro FELIX FISCHER, QUINTA TURMA, j. em 06/06/2006)

Ora, sendo a inimputabilidade penal do apenado afastada por prova pericial específica, não se é de deferir o pedido para conversão da pena em medida de segurança.

Isto posto, demonstrada a imputabilidade penal do apenado, indefiro o pedido para converter a pena em medida de segurança.

P.R.I. Remeta-se cópia para a unidade prisional.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_211',
        nome: 'Visita indeferimento atribuição administ',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc. 

Trata-se de requerimento formulado por ** para autorização de visita a ***, recolhido na cadeia pública desta comarca.

Interveio o Ministério Público.

Relatados.

Dispõe o art. 41, X, da Lei de Execução Penal, constituir direito do preso "visita do cônjuge, da companheira, de parentes e amigos em dias determinados", que, esclarece o parágrafo único do dispositivo, pode ser suspenso ou restringido mediante ato motivado do diretor do estabelecimento.

A competência do juiz de execução penal é prevista no art. 66 da Lei 7.210/84. Entre tais disposições não consta regular as visitas sociais ou íntimas a apenados ou presos provisórios. Se a administração do estabelecimento prisional indeferir sem razão o pleito caberá providências junto à CoAPe e, mantida a situação, a irresignação do interessado poderá ser resolvida por este juízo, como medida genérica.

Não é o caso, pois não se comprovou a busca da decisão administrativa, alegando-se apenas a negativa da direção do presídio a conceder a autorização.

Não há, portanto, uma das condições da ação, pois falta à requerente interesse de agir, conforme o art. 267, inciso IV do Código de Processo Civil, posto que deveria ter buscado a via administrativa antes da judiciária.

Em caso de admissão da procura direta e desnecessária pelo Poder Judiciário se estaria desconsiderando a atribuição da SEAP para gerência dos estabelecimentos prisionais, havendo uma intrusão desnecessária nos atos da administração direta, e admitindo procedimentos que venham a colaborar com o grande volume de atos judiciais, travando a eficiência deste poder.

Isto posto, verificando a carência de ação, extingo o pedido sem julgamento do mérito, com arrimo no artigo 330, inciso III, do CPC.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_212',
        nome: 'LC suspenso e pena cumprida',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que ao apenado foi concedido o livramento condicional, mas adiante certificou-se que ele foi novamente preso e denunciado por prática de outro delito, sendo então o benefício suspenso.

Acrescento ao relatório que o novo processo ainda não foi julgado, mas o SEEU informa pena cumprida.

É o relatório.

Suspenso o livramento condicional e retornando o apenado ao cumprimento da pena, foi atingida a data em que previsto seu término.

Ora, nos termos do art. 89 do Código Penal, "o juiz não poderá declarar extinta a pena, enquanto não passar em julgado a sentença em processo a que responde o liberado, por crime cometido na vigência do livramento". Isso porque o período de prova, caso ocorra condenação no novo processo, não se desconta da pena o tempo em que esteve solto o apenado (CP, art. 88).

Entretanto, sendo impossível antever se o apenado será condenado ou absolvido no novo processo, não pode permanecer cumprindo uma pena que não se sabe se já está extinta.

Isto posto, suspendo o cumprimento da pena, mandando colocar o apenado em liberdade desvigiada e sem qualquer outra medida cautelar, aguardando o julgamento do novo processo, o que deverá ser buscado após cem dias.

P.R.I. Caso necessário, expeça-se alvará de soltura. Suspenda-se o andamento do PEC no SEEU e remeta-se cópia da presente decisão ao sistema prisional onde era cumprida a pena.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 10 parte 1 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE10_PARTE1);

// Lote 10 - Parte 2: Modelos 213-218 (de 226-250.txt)
export const MODELOS_SEEU_LOTE10_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_213',
        nome: 'LC suspensão novo crime',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que foi ao apenado concedido o livramento condicional, mas adiante certificou-se que ele foi novamente preso e denunciado por prática de outros delitos.

Interveio o Ministério Público, requerendo a suspensão do livramento condicional.

É o relatório.

Aplica-se ao caso o art. 145 da Lei de Execução Penal, o qual esclarece que “praticada pelo liberado outra infração penal, o juiz poderá ordenar a sua prisão”, bem como poderá ser suspenso “curso do livramento condicional, cuja revogação, entretanto, ficará dependendo da decisão final” do novo processo.

Isto posto, suspendo o curso do livramento condicional, retornando o apenado provisoriamente à execução da pena que lhe foi imposta.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_214',
        nome: 'Transferência APAC',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.   

Trata-se de execução da pena em regime *, tendo sido requerida a transferência do domicílio do apenado para a APAC de Macau, com o que concordou o Juízo de Direito competente.

Interveio o Ministério Público opinando pelo deferimento.

Relatados.

A pretensão encontra amparo no art. 66, V, g, da Lei de Execução Penal (Lei nº 7.210/84) e no art. 38 da Lei Complementar nº 165/99, bem como na jurisprudência do Supremo Tribunal Federal, verbis:

Transferência de preso. Natureza. Tanto quanto possível, incumbe ao Estado adotar medidas preparatórias ao retorno do condenado ao convívio social. Os valores humanos fulminam os enfoques segregacionistas. A ordem jurídica em vigor consagra o direito do preso de ser transferido para local em que possua raízes, visando à indispensável assistência pelos familiares. Os óbices ao acolhimento do pleito devem ser inafastáveis e exsurgir ao primeiro exame, consideradas as precárias condições do sistema carcerário pátrio. Eficácia do disposto nos arts. 1º e 86 da LEP”. (HC 71.179, Min. Marco Aurélio).

Ademais, no caso da Apac, é de ver que o apenado teria que atender a certos critérios definidos pelo juízo competente, o que ocorreu.

Isto posto, defiro o pedido para a transferência do apenado para a APAC de Macau.

P.R.I. Comunique-se à unidade prisional onde ele se encontra e à Coeap, voltando-me os autos conclusos quando efetivada a transferência.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_215',
        nome: 'Insanidade mental indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de incidente de insanidade mental do apenado acima identificado, tendo sido apresentado o competente laudo referente ao exame e dadas vistas dos autos ao Ministério Público e à defesa, que concordaram com suas conclusões.

Relatados.

Submetido o apenado a exame de insanidade mental, os peritos do ITEP responderam que o apenado é portador de doença mental (*), a qual, entretanto não compromete sua capacidade de entender o caráter da pena e de se determinar de acordo com esse entendimento.

As partes nada opuseram ao laudo pericial.

Em assim sendo, homologo, para que seus jurídicos e legais efeitos produza, o incidente de sanidade mental, bem como o respectivo laudo oferecido pelos peritos médico-legais, e indefiro o pedido de conversão da pena em medida de segurança.

P.R.I. Aguarde-se novo incidente na execução penal.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_216',
        nome: 'Incompetência regime aberto',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de execução da pena em regime aberto, onde verificou-se que o apenado reside na Comarca de **.
Interveio o Ministério Público, pugnando pela remessa dos autos.
Relatados.
Competente para a execução penal no regime aberto é o juízo do local onde reside o apenado.
No caso, está o apenado reside na Comarca de **.
Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução penal em regime aberto de pessoa que reside em outra Comarca, determino a remessa dos autos para a Comarca de **.
P.R.I. Cumpra-se.
$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_217',
        nome: 'Indulto comutação indefere obj',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para concessão de indulto**comutação de pena, com base no Decreto nº **8.615/2015**9.246/2017**.

Interveio o Ministério Público.

Relatados.

De logo verifico que quando da publicação do Decreto 8.615/2015**9.246/2017 o apenado cumpria pena de *** anos e ** meses de reclusão.

Dispõe o referido diploma legal, no seu art. 2º, que “Concede-se a comutação da pena remanescente, aferida em 25 de dezembro de 2015, de um quarto, se não reincidentes, e de um quinto, se reincidentes, às pessoas condenadas a pena privativa de liberdade, não beneficiadas coma suspensão condicional da pena que, até a referida data, tenham cumprido um quarto da pena, se não reincidentes, ou um terço, se reincidentes, e não preencham os requisitos deste Decreto para receber o indulto.”

ATENÇÃO: VER TEOR DO DISPOSITIVO NO DEC DE 2017

** Aqui, como o apenado era primário à época do decreto, ele teria que ter cumprido 1/4 (um quarto) da pena, ou seja, **, o que não ocorreu.

**Aqui, como o apenado à época do decreto era reincidente, ele teria que ter cumprido 1/3 (um terço) da pena, ou seja, **, o que não ocorreu.

Registro, por oportuno, que não se pode confundir detração com indulto, pois são institutos completamente diferentes.

A lição é da em. Ministra Maria Thereza de Assis Moura:

O indulto é um ato de clemência do Poder Público, é um benefício concedido privativamente pelo Presidente da República, que consiste em uma espécie de graça coletiva.

A concessão do indulto atinge a pena, e pode ser pleno ou parcial. Será pleno quando extinguir a pena por completo, resultando na extinção da punibilidade. E será parcial, também chamado de comutação, quando o afastamento da pena não se der por completo. No entanto, permanecem inalterados os demais efeitos penais e civis do crime.

(...)

Além disso, a concessão do indulto pressupõe a existência de uma sentença penal condenatória com trânsito em julgado.

Uma vez transitada em julgado a sentença penal condenatória, ocorrerá o início da punibilidade, com a pretensão de execução da pena. Se, posteriormente, o Estado desistir de prosseguir na execução da pena, haverá, tão somente, uma interrupção do cumprimento, mas não uma inidoneidade ou desnecessidade da pena.

Vale ressaltar que essa interrupção, no caso do indulto, é um ato de clemência do Estado, que só será reconhecido ao apenado após regular procedimento judicial.

Dessa forma, até a prolação da decisão que extinguir a punibilidade do agente, a sua custódia será decorrente de uma prisão pena.

A detração, por sua vez, é decorrência do princípio constitucional da não culpabilidade. A Constituição Federal estabelece que "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória".

Ocorre que, mesmo antes do trânsito em julgado, em algumas situações se faz necessária a constrição provisória do acusado. Essa, no entanto, é uma prisão cautelar. E, por vezes, ao final do julgamento, pode ocorrer a absolvição do agente, ou a prescrição da pretensão punitiva...

Portanto, este instituto visa a impedir que o Estado abuse do poder-dever que tem de punir, impondo ao agente uma fração desnecessária da pena quando houver a perda da liberdade ou a internação em momento anterior à sentença condenatória.

Em razão desses casos, para amenizar a situação do réu, o Código Penal regulamentou que:

Art. 42 - Computam-se, na pena privativa de liberdade e na medida de segurança, o tempo de prisão provisória, no Brasil ou no estrangeiro, o de prisão administrativa e o de internação em qualquer dos estabelecimentos referidos no artigo anterior.

Dessa forma, a detração é uma operação matemática em que se subtrai da pena privativa de liberdade (ou medida de segurança) aplicada ao réu ao final do processo, o tempo de prisão provisória, prisão administrativa ou internação em hospital de custódia e tratamento psiquiátrico que o sentenciado já cumpriu anteriormente.

Em razão da equidade, admite-se a detração inclusive em processos que não guardem relação entre si, desde que a segregação indevida seja posterior ao crime em que se requer a incidência do instituto. Nestes casos, embora a prisão processual fosse necessária no momento em que foi realizada, ao final do julgamento do processo, a conduta do agente não resultou em uma punição efetiva. Dessa forma, é possível utilizar esse período para descontar a pena referente a crime praticado em data anterior.

Conclui-se, portanto, que a detração é um instituto que pretende amenizar as consequências de uma custódia processual, abatendo-se da pena efetivamente aplicada, o período em que o réu esteve preso por meio de medida cautelar, seja em razão de prisão provisória, prisão administrativa ou internação em hospital de custódia e tratamento psiquiátrico.

Dessa forma, o instituto da detração não pode tangenciar o benefício do indulto porque, enquanto o período compreendido entre a publicação do Decreto Presidencial e a decisão que reconhece o indulto, decretando-se a extinção da punibilidade do agente, refere-se à uma prisão pena, a detração somente se opera em relação à medida cautelar, o que impede a sua aplicação no referido período (REsp 1557408/DF, Rel. Ministra MARIA THEREZA DE ASSIS MOURA, SEXTA TURMA, julgado em 16/02/2016, DJe 24/02/2016)

No mesmo sentido é copiosa a jurisprudência do Superior Tribunal de Justiça, sendo exemplos os seguintes recentes julgados:

AGRAVO REGIMENTAL NO HABEAS CORPUS. CONCESSÃO DE INDULTO. DECRETO N. 9.246/2017. REQUISITOS AUSENTES. PRISÃO CAUTELAR ANTERIOR À SENTENÇA. AGRAVO DESPROVIDO. 1. Para a concessão do indulto é necessário que a pessoa tenha ao menos iniciado o cumprimento da pena fixada por sentença condenatória, ainda que recorrível, no período compreendido pelo decreto presidencial que pretende o benefício. 2. Agravo Regimental desprovido. (AgRg no HC 530.998/SP, Rel. Ministro JOEL ILAN PACIORNIK, QUINTA TURMA, julgado em 05/05/2020, DJe 13/05/2020)

AGRAVO REGIMENTAL NO RECURSO ESPECIAL. INDULTO NATALINO. DECRETO PRESIDENCIAL N. 9.246/17. CONSIDERAÇÃO DO TEMPO DE PRISÃO CAUTELAR PASSÍVEL DE DETRAÇÃO PENAL. IMPOSSIBILIDADE. SEGREGAÇÕES COM NATUREZAS DISTINTAS. AGRAVO REGIMENTAL IMPROVIDO. 1. Conforme precedentes desta Corte Superior, o período ao qual o Decreto Presidencial se refere para fins de indulto é aquele corresponde à prisão pena, não se alinhando para o preenchimento do requisito objetivo aquele alusivo ao da detração penal, no qual se está diante de constrição por medida cautelar. 2. Agravo regimental improvido. (AgRg no REsp 1868254/PR, Rel. Ministro NEFI CORDEIRO, SEXTA TURMA, julgado em 25/08/2020, DJe 04/09/2020)

HABEAS CORPUS. EXECUÇÃO PENAL. INDULTO NATALINO. DECRETO PRESIDENCIAL N. 9.246/17. CONSIDERAÇÃO DO TEMPO DE PRISÃO CAUTELAR PASSÍVEL DE DETRAÇÃO PENAL. IMPOSSIBILIDADE. SEGREGAÇÕES COM NATUREZAS DISTINTAS. HABEAS CORPUS DENEGADO. 1. Conforme precedentes desta Corte Superior, o período ao qual o Decreto Presidencial se refere para fins de indulto é aquele corresponde à prisão pena, não se alinhando para o preenchimento do requisito objetivo aquele alusivo ao da detração penal, no qual se está diante de constrição por medida cautelar. 2. Habeas corpus denegado. (HC 534.826/SP, Rel. Ministro NEFI CORDEIRO, SEXTA TURMA, julgado em 11/02/2020, DJe 14/02/2020).

No caso, o apenado até (**data**) cumpria prisão cautelar, cuja detração não se equipara à prisão-pena, que foi cumprida, portanto, apenas por *** anos, *** meses e *** dias, período inferior ao requisito objetivo exigido pelo decreto de indulto.

Isto posto, como o período utilizado para detração penal não corresponde à prisão pena para fins de indulto, tenho como não cumpridos os requisitos do decreto em referência e indefiro o benefício.

P.R.I.  

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_218',
        nome: 'Exame antecipação indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de medida de segurança em que a UPCT sugeriu antecipação do exame de cessação de periculosidade.

Relatados.

De início observo que a UPCT não apresentou indicativos de cessação da periculosidade do inimputável, apenas registrando o tempo em que ele está recolhido, nele somado o período em que esteve cumprindo pena privativa de liberdade.

Ora, a pena privativa de liberdade foi convertida em medida de segurança detentiva em (data) (evento **), após exame realizado em (data) daquele ano (ev. **), sendo fixada internação por no mínimo três anos.

Em assim sendo, apenas no ano de ** será atingido o requisito objetivo para novoexame, descabendo no momento a reanálise pugnada pela UPCT, especialmente se não anotados indícios de cessação de periculosidade.

Cientifique-se a unidade prisional.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 10 parte 2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE10_PARTE2);

// Lote 10 - Parte 3: Modelos 219-230 (de 226-250.txt)
export const MODELOS_SEEU_LOTE10_PARTE3: ModeloSEEU[] = [
    {
        id: 'seeu_219',
        nome: 'Agravo retificação GEP negando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava a Defensoria Pública da decisão do evento ** que indeferiu pedido para alteração dos percentuais necessários para atingimento do requisito objetivo para progressão de regime.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme anotado na decisão agravada, o § 2º do art. 2º da Lei nº 8.072/90, que previa a progressão de regime no patamar de 3/5 aos condenados por crimes hediondos ou equiparados quando reincidentes, não utilizava o termo "reincidente específico", da mesma forma que a Lei nº 13.964/19 - que o revogou expressamente, concentrando os lapsos para progressão de regime no artigo 112 da Lei de Execução Penal -, não sendo possível inferir que tenha criado categorias diferenciadas de reincidência.

Aliás, no que concerne a nova redação dada ao art. 112 da Lei de Execução Penal, pela Lei n. 13.964/2019 (Pacote Anticrime), recentemente se pronunciou o Ministro FELIX FISCHER, ao apreciar o HC n. 596.572/SP:

A jurisprudência desta eg. Corte Superior de Justiça é firme ao declarar que a condição de reincidente, uma vez adquirida pelo sentenciado, estende-se sobre a totalidade das penas somadas, não se justificando a consideração isolada de cada condenação e tampouco a aplicação de percentuais diferentes para cada uma das reprimendas.
Deve-se recordar que as execuções são unificadas para fins de cálculos penais como um todo, não importando sequer as naturezas diferenciadas dos delitos pelos quais houve a condenação.

No presente caso, verifica-se que o eg. Tribunal de origem determinou fosse observada a fração própria à reincidência dos crimes hediondos em geral, de forma bem fundamentada, com a aplicação do atual art. 112, VII, da Lei de Execução Penal, que, tal qual a redação anterior, não faz qualquer diferenciação entre a reincidência específica ou não. Verbis:

"Art. 112. A pena privativa de liberdade será executada em forma progressiva com a transferência para regime menos rigoroso, a ser determinada pelo juiz, quando o preso tiver cumprido ao menos:

[...] V - 40% (quarenta por cento) da pena, se o apenado for condenado pela prática de crime hediondo ou equiparado, se for primário;

[...] VII - 60% (sessenta por cento) da pena, se o apenado for reincidente na prática de crime hediondo ou equiparado [...]" (grifei)

Nesse passo, inclusive, consolidou-se, há muito, neste eg. Tribunal, o entendimento no sentido de que a condição de reincidência, uma vez reconhecida, se estende ao cumprimento dos demais crimes, não precisando sequer ser específica.

[...] Por fim, deve-se deixar expressamente consignado que, no caso em tela, não há falar nem em lei mais benéfica e nem em, de qualquer forma, prejudicial ao apenado, tendo em vista que o percentual de 60% (consagrado hoje pelo denominado "Pacote Anticrime") corresponde exatamente à anterior fração de 3/5. (HC n. 596.572/SP, DJe 13/8/2020).

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos

*Intime-se a defesa para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_220',
        nome: 'Monitoramento envelopamento regressão definitiva',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena privativa de liberdade em regime semiaberto, foi concedida prisão domiciliar com monitoramento eletrônico, tendo a Seap/CEME informado que o equipamento estava sem comunicação desde *, não tendo o apenado atendido às tentativas de contato.

De seu lado, informou-se que o sistema detectara "envelopamento" do equipamento, o que pressupõe algum tipo de material que interrompe a transmissão do sinal do GRPS.

Oportunizado ao apenado justificar-se, confirmou ter “envelopado” o equipamento de monitoramento, alegando que o fizera porque ***.

Adiante, opinou o Ministério Público pelo reconhecimento da falta grave, com regressão de regime, enquanto o defensor requereu ***.

Relatados.

Determina a Lei de Execução Penal, no art. 146-C, inciso I, que o condenado fiscalizado por meio da monitoração eletrônica tem o dever de "abster-se de remover, de violar, de modificar, de danificar de qualquer forma o dispositivo de monitoração eletrônica ou de permitir que outrem o faça", esclarecendo, no seu parágrafo único, que "a violação comprovada dos deveres previstos neste artigo poderá acarretar, a critério do juiz da execução", entre outros, a regressão do regime ou a revogação da prisão domiciliar.

Ora, ao bloquear intencionalmente o sinal emitido pela tornozeleira eletrônica, possibilitando a perda do sinal do GRPS pelo "envelopamento" (ou seja, encapada com papel alumínio ou outro com as mesmas características) e permitindo-lhe circular livremente por onde queira, longe da esfera de vigilância das autoridades competentes, o apenado violou e danificou o regular funcionamento do equipamento de monitoração, ainda que temporariamente, descumprindo, dessa forma, o dever de sua inviolabilidade, o que importa em falta grave.

De seu lado, com essa conduta o apenado também desobedeceu à ordem de manter o aparelho em funcionamento, o que novamente configura falta grave, situação que incide na hipótese do art. 50, inciso VI, c.c. o art. 39, inciso V, ambos da Lei de Execução Penal - LEP, para a qual o art. 146-C, parágrafo único, inciso I, do mesmo diploma autoriza a regressão de regime.

Neste sentido:

PROCESSUAL PENAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. EXECUÇÃO PENAL. FALTA GRAVE. PRISÃO DOMICILIAR COM MONITORAÇÃO ELETRÔNICA. BLOQUEIO INTENCIONAL DE SINAL EMITIDO PELA TORNOZELEIRA ELETRÔNICA. DESCUMPRIMENTO DO DEVER DE INVIOLABILIDADE DO EQUIPAMENTO. ART. 146-C, II, DA LEI DE EXECUÇÃO PENAL. FALTA GRAVE CARACTERIZADA. ART. 50, VI, C/C O ART. 39, V, AMBOS DA LEI DE EXECUÇÃO PENAL. DESPROPORCIONALIDADE DA MEDIDA. INOCORRÊNCIA.
ALTERAÇÃO DA DATA-BASE PARA FINS DE PROGRESSÃO DE REGIME. POSSIBILIDADE. SÚMULA 534/STJ. HABEAS CORPUS NÃO CONHECIDO.
I - (...).
II - Nos termos do art. 146-C, II, da Lei de Execução Penal, o apenado submetido ao monitoramento eletrônico tem que observar o dever de inviolabilidade do equipamento de monitoração, no caso a tornozeleira eletrônica, não podendo remover, violar, modificar ou danificar de qualquer forma o dispositivo de monitoração eletrônica, or mesmo permitir que outrem o faça.
III - Ao bloquear de maneira intencional o sinal emitido pela tornozeleira eletrônica, o paciente, de alguma forma, violou e danificou o regular funcionamento do equipamento de monitoração, ainda que temporariamente, descumprindo, pois, o dever de inviolabilidade do equipamento eletrônico, do qual já havia sido previamente informado.
IV - Por conseguinte, o paciente também desrespeitou a ordem recebida para não violar o equipamento de monitoração, o que configura a falta grave tipificada no art. 50, VI, c/c o art. 39, V, ambos da Lei de Execução Penal. (...). (STJ, HC 400.495/RS, Rel. Min. FELIX FISCHER, 5ª TURMA, j.em 14/09/2017) - transcrição parcial.

Finalmente, observo que, nos termos do art. 118, I, da LEP, a execução da pena privativa de liberdade ficará sujeita à forma regressiva, com a transferência para qualquer dos regimes mais rigorosos, quando o condenado praticar fato definido como falta grave.

Isto posto, torno definitiva a regressão do regime prisional para fechado, bem como considero perdido um terço**quinto (dada a confissão) do tempo já remido e o que viesse a ser remido até a data da falta disciplinar.

Atualize-se a GEP e comunique-se à unidade prisional, remetendo-se cópia da presente decisão, que valerá como ofício.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_221',
        nome: 'Retificação percentuais lei 13964 negando NÃO UTILIZAR',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Requereu a defesa retificação da GEP, fazendo constar como requisito para progressão de regime os percentuais previstos na nova redação do art. 112, já que não se trata de reincidência específica em crime hediondo.

Interveio o Ministério Público, opinando favoravelmente. **contrariamente, pois ****.

Relatados.

Sem razão o apenado.

O § 2º do art. 2º da Lei nº 8.072/90, que previa a progressão de regime no patamar de 3/5 aos condenados por crimes hediondos ou equiparados quando reincidentes, não utilizava o termo "reincidente específico", da mesma forma que a Lei nº 13.964/19 - que o revogou expressamente, concentrando os lapsos para progressão de regime no artigo 112 da Lei de Execução Penal -, não sendo possível inferir que tenha criado categorias diferenciadas de reincidência

Cabe destacar que o Superior Tribunal de Justiça firmou o entendimento no sentido de que, para fins de progressão de regime, mostra-se irrelevante que a reincidência seja específica em crime hediondo para a aplicação da fração de 3/5, pois não deve haver distinção entre se condenações anteriores, se o foram por crime comum or por delito hediondo (AgRg no HC n. 494.404/MS, Ministro Reynaldo Soares da Fonseca, Quinta Turma, DJe 20/5/2019).

A Quinta Turma daquela Colenda Corte decidiu recentemente, à unanimidade:

AGRAVO REGIMENTAL NO HABEAS CORPUS SUBSTITUTIVO DE RECURSO PRÓPRIO. EXECUÇÃO PENAL DEFINITIVA. PROGRESSÃO DE REGIME PRISIONAL. REINCIDÊNCIA. CRIME HEDIONDO. PACOTE ANTICRIME (LEI N. 13.964/2019). APLICAÇÃO DE 60% (SESSENTA POR CENTO) DO CUMPRIMENTO DA PENA PARA CONCESSÃO DA BENESSE. CONSTRANGIMENTO ILEGAL NÃO VERIFICADO. AGRAVO REGIMENTAL DESPROVIDO. 1. A decisão agravada deve ser mantida por seus próprios fundamentos. 2. O entendimento delineado pelo Tribunal de origem encontra-se alinhado ao desta Corte Superior no sentido de que a Lei dos Crimes Hediondos não faz distinção entre a reincidência comum or específica ao determinar a fração de 3/5 (três quintos) como lapso temporal para a progressão de regime, e que, consistindo a reincidência em condição pessoal, uma vez reconhecida, influi sobre o requisito objetivo dos benefícios da execução em relação a todas as condenações. Importa acrescer que, não há falar nem em lei mais benéfica, e nem em de qualquer forma prejudicial ao apenado, tendo em vista que o percentual de 60% (consagrado hoje pelo denominado ?Pacote Anticrime?), corresponde exatamente à anterior fração de 3/5. Precedentes. 3. Agravo regimental desprovido. (AgRg no HC 608.770/SC, Rel. Ministro JOEL ILAN PACIORNIK, QUINTA TURMA, julgado em 17/11/2020, DJe 20/11/2020)

No mesmo sentido vê em decisão monocrática:

 “É certo que a Lei de Crimes Hediondos (8.072/90), alterada pela Lei nº 11.464/2007, também não fazia distinção entre os reincidentes comuns or específicos. A progressão de regime dependia do cumprimento de 2/5 (dois quintos) da pena, se primário, or 3/5 (três quintos) se reincidente. Com a edição da Lei 13.964/2019, estas frações foram equiparadas a 40% (quarenta por cento) e 60% (sessenta por cento).
Estamos, pois, convictos de que nada mudou. A nova redação do art. 112 da lei 7.210/84 não faz alusão aos crimes praticados anteriormente, só impõe tratamento mais gravoso ao agente reincidente, que comete crime considerado hediondo or equiparado.
Nesses termos, é de se convir, não se há falar em novo status or nova situação de direito material.” (HC 594350, Rel Min. Felix Fischer, 17.8.20)

De seu lado, é inaceitável o que pede a defesa no sentido de aplicar-se ao reincidente o mesmo prazo para progressão de regime previsto aos apenados primários, sob pena de equiparar o sentenciado sem mácula em sua vida pregressa ao criminoso contumaz, raciocínio que, como bem lembra o em. Ministro Nefi Cordeiro, é manifestamente contrário à proposta da Lei Anticrime (HC 585708, Min Nefi Cordeiro, 13.8.20).

Ademais, quando o legislador se refere exclusivamente aos reincidentes específicos usa expressamente esta palavra, como se verifica no inciso VII art. 72 da Lei de Execução Penal: "VII - acompanhar a execução da pena das mulheres beneficiadas pela progressão especial de que trata o § 3º do art. 112 desta Lei, monitorando sua integração social e a ocorrência de reincidência, específica or não, mediante a realização de avaliações periódicas e de estatísticas criminais." (Min Nefi Cordeiro, na mesma decisão acima referida).

Ora, parece clara a intenção do legislador da Lei Anticrimes de exigir maior tempo de cumprimento de pena do reincidente, não sendo cabível que conferisse tratamento mais brando a aquele que praticara ao menos um crime hediondo.

Dito de outro forma, entendo que ao revogar expressamente o art. 2º, § 2º, da Lei 8.072/90, o legislador buscou regulamentar toda a matéria ali tratada, apenas transformando em porcentagem o que antes era representado por fração, no mais conferindo tratamento menos brando aos reincidentes em crimes violentos or praticado com grave ameaça.

Isto posto, não extraindo da lei nº 13.964/2019 a interpretação buscada pela defesa, indefiro o pedido do evento ***.

P.R.I.   

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_222',
        nome: 'Retificação data-base crime anterior',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição, por entender que a data-base para as progressões deveria ser a do trânsito em julgado da última condenação, calculando-se o requisito objetivo sobre o saldo da pena, e não a última falta grave or da última conduta delituosa, como atualmente lançado.

A defesa, de seu lado, sustentou a manutenção da GEP.

Relatados.

A Terceira Seção do Superior Tribunal de Justiça, competente para unificar a jurisprudência criminal, firmou entendimento de que "A alteração da data-base para concessão de novos benefícios executórios, em razão da unificação das penas, não encontra respaldo legal.. (REsp 1557461/SC, Rel. Ministro ROGERIO SCHIETTI CRUZ, TERCEIRA SEÇÃO, julgado em 22/02/2018, DJe 15/03/2018).

O Supremo Tribunal Federal, porém, por praticamente todos os seus ministros, julgando Recursos Extradordinários face a tal entendimento, sustentou antiga jurisprudência da Corte para reconhecer a data do trânsito em julgado da última condenação do réu como data-base para a concessão de benefícios durante a execução penal ( RE 1215997, que faz referência a grande número de outros julgados).

Entretanto, o caso em julgamento mostra excepcionalidade que deve ser observada.

É que o último processo julgado é cronologicamente mais antigo, decorrendo a demora no seu julgamento não de ato do apenado, mas da morosidade judicial, pelo que aquele não pode ser por isso prejudicado.

Isto posto, por não encontrar respaldo legal para entender que a data-base para concessão de novos benefícios executórios deva ser a do julgamento do último processo, quando o apenado não foi responsável pela demora no julgamento, mando retificar a guia de execução penal, mantenho como data-base para a próxima progressão de regime aquela que já se encontra lançada no quadro de evento.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_223',
        nome: 'Retificação regime indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de XX anos de reclusão em regime fechado por prática de crime previsto no art. *** do Código Penal, em que o apenado requereu a modificação do regime inicial de cumprimento da pena, levando em conta o quantum da pena fixado na sentença condenatória para adequar a sua situação processual a consubstanciada no art. 33, § 2º, "b", do Código Penal.

Interveio o Ministério Público, opinando contrariamente.

Relatados.

Verifico dos autos que, embora a pena privativa de liberdade não exceda a oito anos de reclusão, mostra-se justificada a fixação do modo inicialmente fechado, nos termos do art. 33, § 2º, alínea "a", e § 3º, do Código Penal, haja vista a desfavorabilidade de circunstâncias judiciais que impedem seja estabelecido regime menos gravoso para cumprimento da reprimenda.

Neste sentido é o entendimento do STJ:

AGRAVO REGIMENTAL EM HABEAS CORPUS. (...). REGIME PRISIONAL MAIS GRAVOSO. CIRCUNSTÂNCIAS JUDICIAIS NEGATIVAS. POSSIBILIDADE. PRECEDENTES. CONSTRANGIMENTO ILEGAL NÃO EVIDENCIADO. (...) 3. A presença de circunstância judicial desfavorável e o quantum da pena superior a 4 anos justificam a fixação do regime inicial fechado, nos termos do art. 33 c/c o art. 59, ambos do Código Penal (AgRg no HC n. 525.512/SP, Ministro Joel Ilan Paciornik, Quinta Turma, DJe 17/9/2019). 4. Agravo regimental improvido. (AgRg no HC 556.858/SP, Rel. Ministro SEBASTIÃO REIS JÚNIOR, SEXTA TURMA, julgado em 26/05/2020, DJe 04/06/2020).

AGRAVO REGIMENTAL EM HABEAS CORPUS. (...). REGIME PRISIONAL MAIS GRAVOSO. CIRCUNSTÂNCIAS JUDICIAIS NEGATIVAS. POSSIBILIDADE. PRECEDENTES. CONSTRANGIMENTO ILEGAL NÃO EVIDENCIADO. (...). 3. A presença de circunstância judicial desfavorável e o quantum da pena superior a 4 anos justificam a fixação do regime inicial fechado, nos termos do art. 33 c/c o art. 59, ambos do Código Penal (AgRg no HC n. 525.512/SP, Ministro Joel Ilan Paciornik, Quinta Turma, DJe 17/9/2019). 4. Agravo regimental improvido. (AgRg no HC 556.858/SP, Rel. Ministro SEBASTIÃO REIS JÚNIOR, SEXTA TURMA, julgado em 26/05/2020, DJe 04/06/2020).

PENAL. AGRAVO REGIMENTAL NO HABEAS CORPUS. (...). REGIME INICIAL FECHADO. CIRCUNSTÂNCIAS JUDICIAIS DESFAVORÁVEIS. QUANTUM DE PENA APLICADO. ESTABELECIMENTO DO MODO MAIS GRAVOSO JUSTIFICADO. AGRAVO REGIMENTAL DESPROVIDO. (...). VII - Regime inicial fechado. A jurisprudência do STJ é iterativa no sentido de que, ainda que o condenado seja primário e o quantum de pena aplicada seja superior a 04 (quatro) anos e não exceda a 08 (oito) anos, justifica-se o regime inicial fechado, quando presente circunstâncias judiciais desfavoráveis. Desta feita, a despeito da menção ao art. 2º, § 1º, da Lei n. 8.072/1990, observa-se que a pena-base não foi fixada no mínimo legal e o quantum de pena aplicado - 5 (cinco) anos, 6 (seis) meses e 20 (vinte) dias de reclusão - são circunstâncias que autorizam a fixação do regime inicial fechado, conforme iterativa jurisprudência do STJ. Agravo regimental desprovido. (AgRg no HC 536.985/SP, Rel. Ministro LEOPOLDO DE ARRUDA RAPOSO (DESEMBARGADOR CONVOCADO DO TJ/PE), QUINTA TURMA, julgado em 11/02/2020, DJe 19/02/2020).

Noutro pórtico, conquanto seja da competência do juiz da execução aplicar aos casos julgados a lei posterior que de qualquer modo favorecer o condenado, nos termos do art. 66, I, da Lei de Execução Penal, in casu, a modificação do regime inicial de cumprimento da pena, sem observar as circunstancias judiciais para sua concessão, constitui afronta à coisa julgada.

Nesse sentido, o julgado do STJ:

PROCESSUAL PENAL. HABEAS CORPUS. ESTUPRO. CUMPRIMENTO DA PENA NO REGIME INICIAL FECHADO. PEDIDO DE PROGRESSÃO DEFERIDO PELO JUÍZO DA EXECUÇÃO. REFORMA DA DECISÃO PELO TRIBUNAL A QUO EM SEDE DE AGRAVO POR AUSÊNCIA DOS REQUISITOS SUBJETIVOS. CONSTRANGIMENTO ILEGAL INEXISTENTE. ORDEM DENEGADA. 1. Fixado na sentença o regime inicial fechado para cumprimento de pena privativa de liberdade pela prática de crime hediondo, e mantido pelo Tribunal a quo por ausência de recurso da acusação, não cabe modificação durante a execução criminal sob pena de violação à coisa julgada. 2. A reforma pelo Tribunal a quo, em sede de agravo, da decisão proferida pelo Juízo das Execuções, que defere pedido de progressão, por entender ausente requisito subjetivo, não maltrata a coisa julgada. 3. Não há falar em constrangimento ilegal quando mantido na fase da execução criminal o regime inicial fechado fixado na sentença transitada em julgado. 4. Ordem denegada. (46202 SP 2005/0122586-2, Relator: Ministro ARNALDO ESTEVES LIMA, Data de Julgamento: 06/02/2006, T5 - QUINTA TURMA, Data de Publicação: DJ 24.04.2006 p. 425)

Isto posto, indefiro o pedido da defesa.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_224',
        nome: 'Agravo competência mantendo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o Ministério Público da decisão do evento ** que manteve a competência do juízo para o feito.

Intimada, a contrarrazoou pugnando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois, como esclarecido na decisão recorrida, inexiste no juízo para onde pretende seja remetido o PEC estrutura de secretaria judiciária e unidade prisional que possibilite o adequado acompanhamento da execução da pena.

Ademais, há alguns foi acordado pelo COPEP (Colégio dos Juízes de Execução Penal), com interveniência da Corregedoria de Justiça, que este juízo ficaria responsável pela execução penal que fosse cumprido em regime semiaberto nas Comarcas da Grande Natal, já que dispunha de estrutura adequada para isso, ao contrário das demais comarcas que integram essa região.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que não reconheceu a incompetência deste juízo para o feito.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau. l..

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_225',
        nome: 'Retificação lei 13964 primário comum e VGA',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de PEC com penas unificadas, em que verificadas condenações de apenado primário, por crimes não hediondos, mas um deles cometidos com violência à pessoa or grave ameaça, sendo necessário verificar se cabível alteração do requisito objetivo para progressão de regime.

Acrescento ao relatório que a defesa*Ministério Público requereu a retificação da GEP.

Relatados.

Dispõe o art. 112, inc. I, da LEP, com redação imposta pela lei 13964/2019, que a pena privativa de liberdade será executada em forma progressiva com a transferência para regime menos rigoroso, a ser determinada pelo juiz, quando o apenado, primário, tiver cumprido ao menos 16% (dezesseis por cento) da pena por crime cometido sem violência à pessoa or grave ameaça e 25% (vinte e cinco por cento) da pena em se tratando de crime praticado naquelas circunstâncias.

No caso, o apenado, sendo primário quando de ambas as condutas, praticou um crime com e outro sem violência à pessoa or grave ameaça.

Como os delitos foram praticados antes da Lei 13964/2019, esta só se lhe aplica se mais favorável integralmente que a situação anterior, conforme entendimento sustentando pelo Superior Tribunal de Justiça quando da expedição da Súmula 501, a qual veda a combinação de leis.

**

Ora, 1/6 (um sexto) da pena unificada resulta em quantum inferior a 16% da pena pelo crime de *** mais 25% da pena imposta pelo crime de ***.

Isto posto, sendo a nova situação prejudicial ao apenado, mantenho a GEP com os cálculos atuais.

**

Ora, 1/6 (um sexto) da pena unificada resulta em quantum superior a 16% da pena pelo crime de *** mais 25% da pena imposta pelo crime de ***.

Isto posto, mando corrigir a guia de execução penal, fixando como requisitos objetivos para a progressão de regime o percentual de 25% de cumprimento da pena pelo crime praticado com violência or grave ameaça, e 16% da pena dos demais delitos anotados.

P.R.I. 

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_226',
        nome: 'Retificação lei 13964 primário crime comum',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Trata-se de PEC em que verificada condenação por crime não hediondos, cometido sem violência à pessoa or grave ameaça, ao que impõe-se a alteração no percentual exigido como requisito objetivo para progressão de regime.

*Trata-se de PEC em que verificadas condenações por crimes não hediondos, cometidos sem violência à pessoa or grave ameaça, com apenado primário em todas elas, ao que impõe-se a alteração no percentual exigido como requisito objetivo para progressão de regime.

Relatados.

Dispõe o art. 112, inc. I, da LEP, com redação imposta pela lei 13964/2019, que a pena privativa de liberdade será executada em forma progressiva com a transferência para regime menos rigoroso, a ser determinada pelo juiz, quando o preso tiver cumprido ao menos 16% (dezesseis por cento) da pena, se o apenado for primário e o crime tiver sido cometido sem violência à pessoa or grave ameaça.

É o caso

Isto posto, mando corrigir a guia de execução penal, fixando como requisito objetivo para a progressão de regime o percentual de 16% de cumprimento da pena.

P.R.I.   

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_227',
        nome: 'remição insuficiente',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Trata-se de PEC que vieram conclusos para examinar possível remição por estudo, em razão do apenado ter concluído curso de ***.
Interveio o Ministério Público, opinando pelo indeferimento em razão do curso, de X horas, ter-se realizado em apenas um dia.
Decido.
Com razão o parecer, pois, conforme dispõe o art. 126, § 1º, I, da Lei 7.210, a remição da pena por estudo se dará à razão de um dia de pena a cada doze horas de estudo, divididas, no mínimo, em três dias.
No caso, porém, todo o curso decorreu em apenas um dia.
Entretanto, os esforços do apenado devem ser aproveitados, o que poderá ocorrer posteriormente, quando nova carga horária de estudo for acrescentada.
Isto posto, suspendo a análise do benefício até que sobrevenha nova informação horas de estudo do apenado.
P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso()
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_228',
        nome: 'Retificação data-base progressão',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

*Trata-se de execução de pena privativa de liberdade, atualmente em regime semiaberto, no que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição quanto a data-base para alcance da progressão ao regime aberto, requerendo que fosse aquele em que alcançado o requisito objetivo para a progressão anterior: *** (evento **).

*Trata-se de execução de pena privativa de liberdade em que se verifica erro no lançamento da data-base para alcance da progressão ao regime aberto.

Relatados.

Com razão o parecer ministerial, pois, conforme entendimento do Supremo Tribunal Federal, a data-base para a progressão do regime semiaberto para o aberto deve ser aquela em que o apenado atingiu o requisito objetivo para a progressão anterior, verbis:

Habeas Corpus. 2. Execução Penal. Progressão de regime. Data-base. 3. (...) 4. Na execução da pena, o marco para a progressão de regime será a data em que o apenado preencher os requisitos legais (art. 112, LEP), e não a do início do cumprimento da reprimenda no regime anterior. 5. A decisão que defere a progressão de regime tem natureza declaratória, e não constitutiva. 6. Deve ser aplicada a mesma lógica utilizada para a regressão de regime em faltas graves (art. 118, LEP), em que a data-base é a da prática do fato, e não da decisão posterior que reconhece a falta. 7. Constrangimento ilegal reconhecido, ordem concedida. (HC 115254, Rel: Min. GILMAR MENDES, Segunda Turma, julgado em 15/12/2015).

A data-base para a progressão do regime semiaberto para o aberto deve ser aquela em que o apenado atingiu os requisitos para a progressão anterior. No caso, a progressão fora indeferida em ** em razão do apenado não ter atingido o requisito subjetivo, pelo que, inclusive em seu benefício, essa deve ser anotada como data-base para a futura progressão, e não aquela em que esse foi realmente deferido or qualquer outra.

*Isto posto, mando retificar a guia de execução penal, fazendo constar a data em que alcançados os requisitos para a progressão anterior como base para progressão ao regime aberto, no caso, **, data em que foi indeferido requerimento anterior por falta de requisito subjetivo.

*Isto posto, defiro o requerimento do ministério Público, mandando retificar a guia de execução penal, fazendo constar a data em que alcançado o requisito objetivo para a progressão anterior como base para progressão ao regime aberto, no caso ***.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_229',
        nome: 'Agravo domiciliar mantendo (variante 1)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava ** da decisão do evento ** que negou-lhe a prisão domiciliar.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, como esclarecido na decisão recorrida, o sistema prisional adotou providências para evitar a contaminação dos presos, tendo inclusive suspendido a entrada de visitas nos presídios, não se anotando, ao menos até o presente momento, um só caso de coronavírus entre a população carcerária.

Aliás, o Conselho Regional de Medicina do Rio Grande do Norte, ao responder ao Processo-Consulta CREMERN nº 04/2020, oferecendo o Parecer CREMERN nº 03/2020, deixou expresso:
...entendemos que a identificação pela administração penitenciária dos custodiados em grupo de risco, o seu monitoramento e isolamento dos demais presos nos casos indicados, em consonância com a portaria interministerial supracitada, como também as medidas elencadas na Nota Técnica 10/2020 da Secretaria de Saúde do Rio Grande do Norte, desde que estritamente observadas, são adequadas e suficientes para o enfrentamento da pandemia do coronavírus nas unidades prisionais, bem como para a preservação da saúde das pessoas privadas de liberdade.

Cabe registrar, ainda, o que deixaram anotado o então Ministro da Justiça e Segurança Pública, Dr. Sérgio Moro, e Fabiano Bordignon é diretor-geral do Departamento Penitenciário Nacional, em artigo publicado no "sítio" do DEPEN:

Não há nos normativos publicados pelo governo uma recomendação de concessão de regime domiciliar de forma generalizada para presos. Tais situações devem ser consideradas com muito cuidado, pois podem impactar na segurança pública e inclusive nos sistemas de saúde. Há muitos casos de presos que já não possuem mais uma família para voltar e, para os que possuem doenças como tuberculose, a saída pode representar suspensão de tratamento e contágios familiares graves.

Finalmente, vale a pena recordar as ponderações do eminente Ministro Rogério Schietti: "... a crise do novo coronavírus deve ser sempre levada em conta na análise de pleitos de libertação de presos, mas, ineludivelmente, não é um passe livre para a liberação de todos, pois ainda persiste o direito da coletividade em ver preservada a paz social, a qual não se desvincula da ideia de que o sistema de justiça penal há de ser efetivo, de sorte a não desproteger a coletividade contra os ataques mais graves aos bens juridicamente tutelados na norma penal (STJ - HC n. 567.408/RJ).

Em assim sendo, por seus próprios fundamentos, acrescido das razões ministeriais, mantenho a decisão que indeferiu a prisão domiciliar ao agravante.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_230',
        nome: 'Agravo domiciliar mantendo (variante 2)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava ** da decisão do evento ** que negou-lhe a prisão domiciliar.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, como esclarecido na decisão recorrida, o sistema prisional adotou providências para evitar a contaminação dos presos, tendo inclusive suspendido a entrada de visitas nos presídios, não se anotando, ao menos até o presente momento, um só caso de coronavírus entre a população carcerária.

Aliás, o Conselho Regional de Medicina do Rio Grande do Norte, ao responder ao Processo-Consulta CREMERN nº 04/2020, oferecendo o Parecer CREMERN nº 03/2020, deixou expresso:
...entendemos que a identificação pela administração penitenciária dos custodiados em grupo de risco, o seu monitoramento e isolamento dos demais presos nos casos indicados, em consonância com a portaria interministerial supracitada, como também as medidas elencadas na Nota Técnica 10/2020 da Secretaria de Saúde do Rio Grande do Norte, desde que estritamente observadas, são adequadas e suficientes para o enfrentamento da pandemia do coronavírus nas unidades prisionais, bem como para a preservação da saúde das pessoas privadas de liberdade.

Cabe registrar, ainda, o que deixaram anotado o então Ministro da Justiça e Segurança Pública, Dr. Sérgio Moro, e Fabiano Bordignon é diretor-geral do Departamento Penitenciário Nacional, em artigo publicado no "sítio" do DEPEN:

Não há nos normativos publicados pelo governo uma recomendação de concessão de regime domiciliar de forma generalizada para presos. Tais situações devem ser consideradas com muito cuidado, pois podem impactar na segurança pública e inclusive nos sistemas de saúde. Há muitos casos de presos que já não possuem mais uma família para voltar e, para os que possuem doenças como tuberculose, a saída pode representar suspensão de tratamento e contágios familiares graves.

Em assim sendo, por seus próprios fundamentos, acrescido das razões ministeriais, mantenho a decisão que indeferiu a prisão domiciliar ao agravante.

*Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando a secretaria sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

*Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

Intime-se a defesa para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau. .

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 10 parte 3 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE10_PARTE3);

// Lote 11 - Parte 1: Modelos 231-245 (de 251-275.txt)
export const MODELOS_SEEU_LOTE11_PARTE1: ModeloSEEU[] = [
    {
        id: 'seeu_231',
        nome: 'Remição parcial ENCCEJA indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos, etc.

Trata-se de execution de pena privativa de liberdade, em regime fechado, em que o apenado requereu remição pelo estudo, amparada na previsão do art. 126 da Lei 12.433/2011 e na Recomendação nº 44/2013, do CNJ, em razão de ter realizado a prova para declaração de proficiência no Ensino Fundamental por meio do ENCCEJA no ano de **, (evento *).

Foi juntado, por meio de ofício do CPJC** da Cadeia Pública de Ceará Mirim** da Penitenciária Estadual **, a Declaração de Proficiência - ENCCEJA do Ensino Fundamental com o resultado satisfatório apenas na área de Ciências Naturais (evento *).

Opinou o Ministério Público para que fossem remidos * dias (evento *).

Relatados.

O Exame Nacional de Educação para Jovens e Adultos (ENCCEJA) é uma prova realizada pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), autarquia vinculada ao Ministério da Educação do Brasil para buscar a certificação de conclusão no ensino fundamental ou médio.

Dispõe a Resolução nº 391/2021 do CNJ, em seu art. 3º, Parágrafo Único, expressamente que:

Parágrafo único. Em caso de a pessoa privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP.

Desse modo, a recomendação supra viabiliza a remição pelo estudo alicerçada na APROVAÇÃO em exames nacionais.

No caso, a documentação comprova que o apenado alcançara a nota mínima apenas em uma das cinco áreas da prova no ENCCEJA, contudo sem comprovar a aprovação, critério expressamente exigido pela Resolução CNJ nº 391/2021.

É cediço que para o candidato ser aprovado deverá atingir determinada nota exigida para cada área de conhecimento, alcançando, assim, a certificação de competência para o ensino pretendido.

Aqui, a nota obtida não fora suficiente para certificar a conclusão do Ensino Fundamental.

Isto posto, indefiro o pedido de remição do evento *.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_232',
        nome: 'agravo retifica percentual único completo MODELO SEM USO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que retificou os percentuais de cumprimento da pena para progressão de regime, seguindo entendimento assente no Superior Tribunal de Justiça, inclusive nas últimas semanas, até depois de proferida a decisão recorrida.

O Ministério Público contrarrazoou pugnando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme anotado na decisão agravada, deve ser fixado apenas um patamar para todos os delitos, sendo todas penas são somadas ou unificadas para fins de fixação do regime prisional (LEP, art. 111, caput e seu parágrafo único):

"Desse modo, não é juridicamente possível a utilização da fração de 1/6 para fins de progressão de regime apenas para o crime comum, e de 2/5 apenas para o crime hediondo, devendo ser fixado apenas um patamar de progressão para ambos os delitos" (AgRg nos EDcl no HC 668.301/SP, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 08/06/2021, DJe 14/06/2021)

No mesmo sentido:

"Não há justificativa para a consideração isolada de cada condenação, tampouco para a aplicação de percentual diferente a cada uma das reprimendas" (RECURSO ESPECIAL Nº 1957657 - MG, RELATOR : MINISTRO JOÃO OTÁVIO DE NORONHA, j. 26.11.2021) .

Aqui lembro que todas as penas são somadas ou unificadas para fins de fixação do regime prisional (LEP, art. 111, caput e seu parágrafo único).

Muito recentemente o Superior Tribunal de Justiça decidiu, repetindo sua jurisprudência:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. PROGRESSÃO DE REGIME. COMBINAÇÃO DE LEIS. INVIABILIDADE. CONDIÇÃO DE REINCIDENTE APLICÁVEL A TODAS AS CONDENAÇÕES. 1. "O entendimento desta Corte Superior é o de impossibilidade de combinação de leis, formando uma terceira lei. Assim, deve o julgador analisar, de forma individualizada, qual redação do artigo 112 da Lei das Execuções Penais é a mais benéfica ao sentenciado para fins de alcance do requisito objetivo necessário à progressão de regime - aquela com ou sem as modificações trazidas pela Lei n. 13.964/2019" (AgRg no HC n. 699.653/SP, Quinta Turma, Rel. Min. Ribeiro Dantas, DJe de 16/11/2021). 2. A condição de reincidente, uma vez adquirida pelo sentenciado, estende-se sobre a totalidade das penas somadas, não se justificando a consideração isolada de cada condenação e tampouco a aplicação de percentuais diferentes para cada uma das reprimendas. Precedente. 3. No caso, foi aplicada retroativamente a Lei nº 13.964/2019, que alterou o art. 112 da Lei de Execuções Penais, com incidência dos incisos V e VI, para os crimes hediondos, e dos incisos I a IV, para os crimes comuns, para fins de progressão de regime, o que significa a adoção de frações distintas, em desconformidade com a jurisprudência dessa Corte Superior. 4. Entretanto, além dos incisos V e VI, a fixação dos percentuais previstos nos incisos I a IV, do art. 112 da Lei de Execução Penal, para os crimes comuns, conforme a decisão proferida pelo Juízo de primeira instância e mantida pela Corte de origem, implica situação mais benéfica ao agravante, que também figura como condenado por crime hediondo. 5. Dessa forma, não se vislumbra constrangimento ilegal a ser sanado nesta via, devendo ser mantidas, ante à ausência de recurso da acusação, as frações adotadas/mantidas pelas instâncias ordinárias, em observância ao princípio do ne reformatio in pejus. 6. Agravo regimental improvido. (AgRg no HC n. 700.483/SC, relator Ministro Olindo Menezes (Desembargador Convocado do TRF 1ª Região), Sexta Turma, julgado em 29/3/2022, DJe de 1/4/2022).

No seu voto o relator expressamente anotou, em relação a entendimento diverso:

"No caso, foi aplicada retroativamente a Lei nº 13.964/2019, que alterou o art. 112 da Lei de Execuções Penais, com incidência dos incisos V e VI, para os crimes hediondos, e dos incisos I a IV, para os crimes comuns, para fins de progressão de regime, o que significa a adoção de frações distintas, em desconformidade com a jurisprudência dessa Corte Superior."

Em decisão monocrática do último 30 de junho de 2022, no HC n. 732.875, o Ministro Sebastião Reis Júnior reafirmou esse entendimento, verbis:

"Dito de outra forma, é pacífico nesta Corte Superior o entendimento segundo o qual a condição de reincidente pode ser reconhecida na fase da execução e se estende sobre a totalidade das penas somadas, aplicando-se fração única, inclusive na primeira condenação quando o réu ainda ostentava a condição de primário (AgRg no HC n. 660.579/SP, Ministro Rogerio Schietti Cruz, Sexta Turma, DJe 11/10/2021 - grifo nosso).
Nessa mesma linha, o AgRg no REsp n. 1.986.299/MG, Ministro Joel Ilan Paciornik, Quinta Turma, DJe 26/5/2022; e REsp n. 1.957.657/MG, Ministro João Otávio de Noronha, Quinta Turma, DJe 26/11/2021".

Na verdade, várias vezes o Superior Tribunal de Justiça debruçou-se sobre o tema, deixando assentado, em acórdão que trata especificamente da questão, que o tema trata da individualização da pena.

Verbis:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. LAPSO PARA A PROGRESSÃO DE REGIME. CASO CONCRETO. EFETIVA REINCIDÊNCIA ESPECÍFICA EM CRIME HEDIONDO PARA FINS DE UNIFICAÇÃO DE PENAS. NOVO PACOTE ANTICRIME (LEI N. 13.964/2019). RECURSO DESPROVIDO. I - A Terceira Seção desta eg. Corte Superior consagrou o entendimento de que "É reconhecida a retroatividade do patamar estabelecido no art. 112, V, da Lei n. 13.964/2019, àqueles apenados que, embora tenham cometido crime hediondo ou equiparado sem resultado morte, não sejam reincidentes em delito de natureza semelhante" (REsp n. 1.910.240/MG, Terceira Seção, Rel. Min. Rogerio Schietti Cruz, DJe de 31/5/2021). II - Na hipótese concreta, contudo, é a efetiva reincidência específica da parte agravante em crimes hediondos que impossibilita a concessão da ordem para fins de unificação de penas em execução penal. III - Assente na jurisprudência desta eg. Corte Superior que "As condições pessoais do apenado, tal como a reincidência, ainda que não sejam reconhecidas na condenação, devem ser observadas pelo Juízo das execuções para concessão de benefícios, já que tal proceder encontra-se na sua esfera de competências, definida no art. 66 da LEP, descabendo falar-se em reformatio in pejus ou em violação da coisa julgada material, mas em individualização da pena relativa à apreciação de institutos próprios da execução penal (AgRg no HC n. 511.766/MG, Rel. Ministro ANTONIO SALDANHA PALHEIRO, Sexta Turma, julgado em 18/6/2019, DJe 27/6/2019)" (AgRg nos EDcl no HC n.668.301/SP, Quinta Turma, Rel. Min. Reynaldo Soares da Fonseca, DJe de 14/6/2021). Agravo regimental desprovido. (AgRg no HC 676.203/SP, Rel. Ministro JESUÍNO RISSATO (DESEMBARGADOR CONVOCADO DO TJDFT), QUINTA TURMA, julgado em 14/09/2021, DJe 22/09/2021) - negritei.

De tão didático, vale a pena transcrever parte do voto condutor:

Assim, realizada a unificação das penas, não é possível o fracionamento das condenações impostas para fins de execução penal.

No mesmo sentido, o art. 111 da Lei de Execução Penal:

"Art. 1 11. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.

Parágrafo único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime."

Igualmente, assente na jurisprudência desta eg. Corte Superior que "As condições pessoais do apenado, tal como a reincidência, ainda que não sejam reconhecidas na condenação, devem ser observadas pelo Juízo das execuções para concessão de benefícios, já que tal proceder encontra-se na sua esfera de competências, definida no art. 66 da LEP, descabendo falar-se em reformatio in pejus ou em violação da coisa julgada material, mas em individualização da pena relativa à apreciação de institutos próprios da execução penal (AgRg no HC n. 511.766/MG, Rel. Ministro ANTONIO SALDANHA PALHEIRO, Sexta Turma, julgado em 18/6/2019, DJe 27/6/2019)" (AgRg nos EDcl no HC 668.301/SP, Quinta Turma, Rel. Min. Reynaldo Soares da Fonseca, DJe 14/6/2021).

Disso, se extrai que, se a parte agravante é reincidente, e esta condição deve afetar a totalidade da pena em cumprimento, apesar de a nova lei dividir os percentuais para crimes hediondos e comuns.

Verifica-se, portanto, que o entendimento anterior está em consonância com a posição desta eg. Corte Superior, no sentido de que, "a condição de reincidente, uma vez adquirida pelo sentenciado, estende-se sobre a totalidade das penas somadas, não se justificando a consideração isolada de cada condenação e tampouco a aplicação de percentuais diferentes para cada uma das reprimendas" (AgRg no HC n. 616.696/SP, Quinta Turma, Rel. Min. Felix Fischer, DJe de 18/12/2020).

No mesmo sentido: HC n. 608.151, Quinta Turma, Rel. Min. João Otávio de Noronha, DJe de 5/5/2021; e REsp n. 1.918.049, Quinta Turma, Rel. Min. Ribeiro Dantas, Dje de 28/4/2021.

De seu lado, a eg. Câmara Criminal do Tribunal de Justiça do Rio Grande do Norte, assentou recentemente:

PROCESSUAL PENAL. AGEX. PRETENSO RECONHECIMENTO DE PERCENTUAL DE 40% PARA PROGRESSÃO DE REGIME DO CRIME COMUM, PREVISTO NO PACOTE ANTICRIME (LEI 13.964/19). APENADO POSTERIORMENTE CONDENADO POR CRIME HEDIONDO COM RESULTADO MORTE (50%). NECESSIDADE DE ANÁLISE SOB O CRIVO DO SOMATÓRIO DAS REPRIMENDAS (PRINCÍPIO DA INDIVIDUALIZAÇÃO DA PENA). IMPOSSIBILIDADE DE CONSIDERAÇÃO ISOLADA DAS SANÇÕES E DE SEURS RESPECTIVOS PERCENTUAIS. PRECEDENTES. DECISUM MANTIDO. CONHECIMENTO E DESPROVIMENTO (Agravo em Execução nº 0812481-95.2021.8.20.0000, Relator: Desembargador Saraiva Sobrinho, j. em 13.01.2022). grifei.

PENAL E PROCESSUAL PENAL. AGRAVO EM EXECUÇÃO CRIMINAL. RETIFICAÇÃO DA GEP. IMPOSSIBILIDADE DE CONSIDERAÇÃO ISOLADA DAS SANÇÕES PARA FIXAÇÃO DE PERCENTUAIS DIFERENTES. PRÁTICA DE CRIME HEDIONDO POR RÉU REINCIDENTE. INCIDÊNCIA DO PERCENTUAL DE 60% (3/5) PARA O CÁLCULO DA PROGRESSÃO DE REGIME. INTELIGÊNCIA DO ART. 112, INCISO VII, DA LEP. PRECEDENTES DA QUINTA TURMA DO STJ E DESTA CORTE. MANUTENÇÃO DA DECISÃO A QUO QUE SE IMPÕE. CONHECIMENTO E DESPROVIMENTO DO RECURSO. (Agravo Em Execução Criminal n.º 0810383-74.2020.8.20.0000. Relator: Des. Glauber Rêgo, j. 27.01.2021). grifei.

Registro, por oportuno, que a decisão agravada mandou corrigir erro de lançamento do cálculo da pena (patamares do requisito objetivo para progressão de regime) efetivado por servidores do juízo, atendendo à jurisprudência do Superior Tribunal de Justiça, de forma a corrigir erro, individualizando a execução da pena.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_233',
        nome: 'Agravo unificação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento **, que, confirmando a do evento **, unificou penas a ele impostas.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme restou claro na decisão agravada, a manutenção da prisão preventiva do apenado, com a negativa do direito de recorrer em liberdade, impõe-se a unificação provisória da pena, ainda que não haja trânsito em julgado da sentença penal condenatória.

Assim:

EMBARGOS DE DECLARAÇÃO NO HABEAS CORPUS. EXECUÇÃO. SUPERVENIÊNCIA DE NOVA CONDENAÇÃO. AUSÊNCIA DE TRÂNSITO EM JULGADO. UNIFICAÇÃO DA PENA. POSSIBILIDADE. MARCO INICIAL DE NOVOS BENEFÍCIOS. DATA DA ÚLTIMA PRISÃO OU DA ÚLTIMA INFRAÇÃO DISCIPLINAR.
1. De acordo com a jurisprudência desta Corte Superior de Justiça, "a execução da pena não se inicia apenas com a superveniência do título judicial exequível. Já se admite a execução provisória nas hipóteses de existência de prisão cautelar e, atualmente, quando há a confirmação da condenação pelo Tribunal de Justiça/Tribunal Regional e não há prisão preventiva" (HC n. 381.248/MG, relator p/ o acórdão Ministro Sebastião Reis Júnior, Sexta Turma, DJe de 3/4/2018).
2. Uma vez admitida a execução provisória, deve-se, igualmente, permitir que seja realizada a unificação provisória da pena, ainda que não haja trânsito em julgado da sentença penal condenatória.
3. Na linha da orientação jurisprudencial desta Corte, sobrevindo nova condenação no curso da execução, deverá o Juízo da execução realizar a unificação das penas impostas ao sentenciado, no entanto, não poderá, diante da ausência de previsão legal, considerar o trânsito em julgado dessa nova condenação - ou como no caso dos presentes autos, a data da última sentença penal condenatória - como marco inicial para novos benefícios, devendo, em casos como o presente, observar, como estabelecido pela Terceira Seção (REsp n. 1.557.461/SC), a data da última prisão ou da última falta disciplinar.
4. Embargos de declaração parcialmente acolhidos, com efeitos infringentes, para manter a unificação das penas, determinando ao Juízo da execução que promova novo cálculo de pena no qual deve considerar como termo inicial para novos benefícios a data da última prisão ou da última falta disciplinar.
(EDcl no HC 379.829/ES, Rel. Ministro ANTONIO SALDANHA PALHEIRO, SEXTA TURMA, julgado em 04/08/2020, DJe 12/08/2020)

Agravo em Execução Penal nº 0807642-27.2021.8.20.0000Origem: Juízo de Execuções Penais de Nísia FlorestaAgravante: Anjuly Bastos de CarvalhoAdvogado: Gabriel Bulhões Nóbrega DiasAgravado: Ministério PúblicoRelator: Desembargador Saraiva Sobrinho EMENTA: PROCESSUAL PENAL. AGEX. POSSIBILIDADE DE UNIFICAÇÃO DE PENAS DEFINITIVAS E PROVISÓRIAS SUPERVENINTES, AINDA QUE A SENTENÇA NÃO TENHA TRANSITADO EM JULGADO. INTELIGÊNCIA DA SÚMULA 716 DO STF, ART. 111, PARÁGRAFO ÚNICO, DA LEP E DOS ARTS. 8° E 9°, §2°, DA RESOLUÇÃO 113/2010-CNJ. GUIA DE EXECUÇÃO PROVISÓRIA EMITIDA. INOCORRÊNCIA DE VIOLAÇÃO AO PRINCÍPIO DA PRESUNÇÃO DE INOCÊNCIA. PRECEDENTES. DECISUM MANTIDO. CONHECIMENTO E DESPROVIMENTO. ACÓRDÃOAcordam os Desembargadores integrantes da Câmara Criminal, à unanimidade de votos e em consonância com a 5ª Procuradoria de Justiça, conhecer e desprover o Recurso, nos termos do voto do Relator.

No mesmo sentido decidiu a eg. Câmara Criminal do Tribunal de Justiça do Rio Grande do Norte:

PROCESSUAL PENAL. AGEX. POSSIBILIDADE DE UNIFICAÇÃO DE PENAS DEFINITIVAS E PROVISÓRIAS SUPERVENINTES, AINDA QUE A SENTENÇA NÃO TENHA TRANSITADO EM JULGADO. INTELIGÊNCIA DA SÚMULA 716 DO STF, ART. 111, PARÁGRAFO ÚNICO, DA LEP E DOS ARTS. 8° E 9°, §2°, DA RESOLUÇÃO 113/2010-CNJ. GUIA DE EXECUÇÃO PROVISÓRIA EMITIDA. INOCORRÊNCIA DE VIOLAÇÃO AO PRINCÍPIO DA PRESUNÇÃO DE INOCÊNCIA. PRECEDENTES. DECISUM MANTIDO. CONHECIMENTO E DESPROVIMENTO (Agravo em Execução Penal nº 0807642-27.2021.8.20.0000. Relator: Desembargador Saraiva Sobrinho, j. 12.08.2021).

Em assim sendo, por seus próprios fundamentos, acrescidos das contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_234',
        nome: 'LC neg obj e subj',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal em que o SEEU identificou requisito objetivo para concessão de livramento condicional, face à pena imposta.

Relatados.

Descabe o benefício, pois o apenado não atende aos seus requisitos objetivo e subjetivo.

A uma por que os cálculos apresentados pelo SEEU não estão corretos.

É que o apenado registra fuga em **, com recaptura apenas em **, ou seja, praticou falta grave há menos de doze meses, situação que confira ausência do requisito objetivo exigido pelo art. 83, III, b, do Código Penal para o livramento condicional.

Neste sentido decidiu recentemente o Superior Tribunal de Justiça, confirmando decisão do ano anterior:

No tocante à nova redação dada ao inciso III do artigo 83 do CPB, esta Corte Superior se posiciona no sentido de que o requisito relativo ao não cometimento de falta grave nos últimos 12 (doze) meses é pressuposto objetivo para a concessão do livramento condicional, não limitando a apreciação do requisito subjetivo necessário ao deferimento do benefício, "inclusive quanto a fatos ocorridos antes da entrada em vigor da Lei Anticrime" (HC 612.296/MG, Rel. Ministro SEBASTIÃO REIS JÚNIOR, SEXTA TURMA, julgado em 20/10/2020, DJe 26/10/2020) (AgRg no HC 639.495/SP, Rel. Ministro RIBEIRO DANTAS, QUINTA TURMA, julgado em 10/08/2021, DJe 17/08/2021)

Ademais, o apenado também não atende ao requisito subjetivo ao benefício, pois resta demonstrada a falta de comportamento satisfatório (Código Penal, art. 83, III, a), já que ele fugiu ** vezes durante o cumprimento da pena.

Isto posto, face não atender o apenado aos requisitos do art. 83, III, a e b, do Código Penal, indefiro o livramento condicional.

P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_235',
        nome: 'Agravo prazo comportamento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu progressão de regime, por não cumprido o tempo exigido pelo Regimento Disciplinar Penitenciário para aferição do requisito subjetivo para o benefício.

O Ministério Público contrarrazoou, pugnando pela reforma da decisão agravada, por "inexistir na legislação" a exigência do prazo anotado.

Relatados.

Nos termos do art. 24, I, da Constituição da República Federativa do Brasil, compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre, entre outros, direito penitenciário.

No exercício de tal competência o Estado do Rio Grande do Norte publicou o Regulamento Disciplinar Penitenciário, o qual, no art. 95, inciso II, determina que a conduta disciplinar do preso em regime fechado classificar-se-á em "boa, quando no prazo mínimo de 06 (seis) meses, não tiver cometido infração disciplinar de natureza grave ou média".

De seu lado, o art. 112, § 1º da Lei de Execução Penal, dispõe que "o apenado só terá direito à progressão de regime se ostentar boa conduta carcerária, comprovada pelo diretor do estabelecimento".

Ora, se o apenado não cumpriu os seis meses da pena no regime fechado não há como atender ao requisito subjetivo para the progressão de regime, já que seu comportamento será neutro ou regular e não bom.

Assim, sem razão o agravante e o Ministério Público, pois, conforme esclarecido na decisão recorrida, o apenado não passou tempo suficiente no regime fechado para aferição do bom comportamento, exigível para a progressão de regime.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_236',
        nome: 'Agravo prescrição anterior denúncia',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu pedido de reconhecimento de prescrição executória.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão recorrida, a incidência de causa interruptiva impediu o transcurso do prazo prescricional.

Ora, nos termos do art. 110, parágrafo único, do Código Penal, transitada em julgada a ação penal, a prescrição não poderá em hipótese alguma ser regulada por período anterior a denúncia ou a queixa, verbis:

Art. 110 - A prescrição depois de transitar em julgado a sentença condenatória regula-se pela pena aplicada e verifica-se nos prazos fixados no artigo anterior, os quais se aumentam de um terço, se o condenado é reincidente.

§ 1o A prescrição, depois da sentença condenatória com trânsito em julgado para a acusação ou depois de improvido seu recurso, regula-se pela pena aplicada, não podendo, em nenhuma hipótese, ter por termo inicial data anterior à da denúncia ou queixa

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_237',
        nome: 'Agravo prescrição mantendo indef',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu pedido de reconhecimento de prescrição executória.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão recorrida, a incidência de causa interruptiva impediu o transcurso do prazo prescricional.

Ora, é assente na jurisprudência do Supremo Tribunal Federal ser irrelevante que o crime tenha sido praticado antes ou depois da Lei nº 11.596/2007 para se considerar que o acórdão de segundo grau, confirmando a condenação de primeira instância mas modificando a pena, deve ser considerado como uma nova causa de interrupção do prazo prescricional.

Neste sentido, negritado por mim:

Agravo regimental nos embargos de declaração no habeas corpus. 2. Condenação implementada pelo Tribunal de Justiça após sentença absolutória. Crime praticado antes da Lei 11.596/2007. Irrelevância. 3. Mesmo antes da Lei 11.596/2007, a condenação implementada de forma inaugural pelo Tribunal de Justiça, após absolvição em primeiro grau, é causa de interrupção da prescrição. 4. Agravo improvido. (HC 205566 ED-AgR, Relator(a): GILMAR MENDES, Segunda Turma, julgado em 04/10/2021).

PRETENSÃO PUNITIVA – PRESCRIÇÃO – ACÓRDÃO. Quer após a Lei nº 11.596/2007, quer antes dela, o acórdão de mérito alusivo à apelação surge como fator interruptivo da prescrição. [...]” (ARE 1.054.714-AgR-segundo-ED, Relator Ministro Marco Aurélio, Primeira Turma, DJe 1º.8.2018).

PRESCRIÇÃO – ACÓRDÃO – INTERRUPÇÃO. Quer após a Lei nº 11.596/2007, quer antes dela, acórdão de mérito alusivo a apelação surge como fator interruptivo da prescrição. (HC 134853, Relator(a): MARCO AURÉLIO, Primeira Turma, julgado em 07/08/2018).

“(...) mesmo antes da alteração introduzida pela Lei 11.596/2007, o Superior Tribunal de Justiça e esta Suprema Corte já haviam consolidado o entendimento de que o acórdão de segundo grau que, confirmando a condenação de primeira instância, modificasse a pena, de modo a refletir no cálculo do prazo prescricional, tinha relevância jurídica e, portanto, deveria ser considerado como uma nova causa de interrupção do prazo prescricional”. (HC 106.222, Rel. Min. Ricardo Lewandowski, DJe de 29/3/2011).

Recurso ordinário em habeas corpus. Direito Penal Militar. Extinção da punibilidade. Inocorrência. Eficácia interruptiva do acórdão condenatório que reforma sentença absolutória. Recurso desprovido. “O acórdão condenatório que reforma sentença penal absolutória reveste-se de eficácia interruptiva da prescrição penal, posto que equiparado, para tal fim, à sentença condenatória recorrível” (HC 70.810/RS, rel. min. Celso de Mello, DJ de 01.12.2006). A jurisprudência desta Corte, mesmo antes da alteração introduzida pela Lei nº 11.596/2007, já havia sedimentado o entendimento de que o acórdão de segundo grau que altera a pena aplicada ou impõe preceito condenatório possui relevância jurídica e deve ser considerado como causa interruptiva do prazo prescricional, entendimento este que também pode ser aplicado no Direito Penal Militar. Recurso ao qual se nega provimento. (RHC 109973, Relator(a): JOAQUIM BARBOSA, Segunda Turma, julgado em 22/11/2011).

Bem significativa da posição jurisprudencial do Supremo Tribunal Federal é a afirmação, feita pelo em. Ministro Alexandre de Moraes, quando do julgamento do AG.REG. NO RECURSO EXTRAORDINÁRIO 1.210.551:

“A ideia de prescrição está vinculada à inércia estatal e o que existe na confirmação da condenação, muito pelo contrário, é a atuação do Tribunal. Consequentemente, se o Estado não está inerte, há necessidade de se interromper a prescrição para o cumprimento do devido processo legal”.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_238',
        nome: 'Exame sanidade mental indef pedido genérico',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena de ** de reclusão em regime fechado em que o apenado requereu, através de advogado, instauração de incidente de insanidade mental, no que acostou atestado médico.

Opinou o Ministério Público pelo indeferimento do pleito.

Relatados.

Não obstante os relevantes argumentos expostos pela defesa no afã de gerar dúvida quanto à higidez mental do apenado, o pleito de instauração de incidente de insanidade mental não merece deferimento.

É que o fato de acostar aos autos atestado médico não basta para incitar fundadas dúvidas sobre a saúde mental do penitente, até porque o diagnóstico apontado no laudo corresponde a **transtornos mentais e comportamentais devido ao uso de múltiplas drogas e ao uso de outras substâncias psicoativas, prevista no CID 10 – F19.2**, e em nada menciona que tal doença o torna perigoso ao convício social e inteiramente incapaz de compreender o caráter da pena imposta ou de determinar-se de acordo com esse entendimento, de forma a justificar possível inimputabilidade.

O Código Penal define, em seu art. 26, que os inimputáveis são aqueles isentos de pena que, por doença mental ou desenvolvimento mental incompleto ou retardado, eram, ao tempo da ação ou omissão, inteiramente incapazes de entender o caráter ilícito do fato ou determinar-se de acordo com esse entendimento.

Entretanto, a prova da inimputabilidade prevista no referido artigo é feita obrigatoriamente por meio do exame de sanidade mental que, nos termos do art. 149 do Código de Processo Penal, deverá ser instaurado quando houver dúvida sobre a integridade mental do acusado, o qual será submetido a exame médico-legal.

Impende consignar que o mencionado exame somente se mostra indispensável quando houver dúvida razoável sobre a higidez mental do apenado, isto é, quando se entender presentes aos autos sérios indícios que ponham em dúvida a sua capacidade de entender o caráter da pena imposta, já que o fato fora trazido à baila no curso da execução penal.

E no caso, não vislumbro dúvidas quanto a capacidade de o apenado entender o caráter do cumprimento da pena a ele aplicada, não bastando o simples requerimento da parte para que o procedimento seja instaurado.

Nesse mesmo sentido é firme a jurisprudência do STJ ao entender que não caracteriza cerceamento de defesa o indeferimento de exame de sanidade mental se não há dúvidas sobre a sua integridade mental, como se observa dos seguintes precedentes:

HABEAS CORPUS. CONCUSSÃO E FORMAÇÃO DE QUADRILHA. INSTAURAÇÃO DE INCIDENTE DE INSANIDADE MENTAL. ATESTADO MÉDICO ACOSTADO AOS AUTOS. INEXISTÊNCIA DE DÚVIDA RAZOÁVEL QUANTO À SAÚDE MENTAL DO PACIENTE. NÃO OBRIGATORIEDADE DO PROCEDIMENTO. DECISÃO DO JUÍZO SINGULAR BEM FUNDAMENTADA. ORDEM DENEGADA. 1. É pacífica a jurisprudência desta Corte de Justiça no sentido de que não caracteriza cerceamento de defesa o indeferimento de exame de sanidade mental se não há dúvidas sobre a integridade mental do acusado, não bastando o simples requerimento da parte para que o procedimento seja instaurado. 2. O fato de haver acostado aos autos um atestado médico não basta para incitar fundadas dúvidas sobre a saúde mental do paciente, até porque somente consta que ele estava em tratamento e que estaria sem condições de sanidade mental para a retomada das atividades laborais, em nada mencionando, de fato, a capacidade de compreender o caráter ilícito da conduta que justificasse uma possível inimputabilidade. 3. Sendo a dúvida sobre a integridade mental do acusado um pressuposto para a instauração do incidente e tendo a decisão do Juízo Singular - confirmada pelo acórdão objurgado - trazido fundamentação idônea a justificar a desnecessidade do procedimento ante a ausência de incertezas sobre as condições mentais do paciente, não se vislumbra o aventado constrangimento ilegal. 4. Ordem denegada. (HC 95.616/PA, Rel. Ministro JORGE MUSSI, QUINTA TURMA, julgado em 04/02/2010, DJe 12/04/2010).

HABEAS CORPUS. HOMICÍDIO QUALIFICADO. RECURSO EM SENTIDO ESTRITO. INCIDENTE DE INSANIDADE MENTAL. NÃO OBRIGATORIEDADE. VIA ELEITA INADEQUADA PARA AFERIR A NECESSIDADE DE REALIZAÇÃO DESSA MEDIDA. SENTENÇA DE PRONÚNCIA PROFERIDA ANTES DO RESULTADO DAS PROVAS PERICIAIS. NULIDADE. INEXISTÊNCIA. 1. O exame a que se refere o art. 149 do Código de Processo Penal é imprescindível apenas quando houver dúvida a respeito da saúde mental do acusado, ou seja, indícios plausíveis de que o agente, no tempo dos fatos, era incapaz de entender o caráter ilícito de sua conduta. 2. No caso, o Juiz que presidiu o feito não detectou nenhuma anormalidade no interrogatório do acusado, ou mesmo durante a instrução processual, a fim de justificar a instauração de incidente de insanidade mental, sendo certo que somente na fase de alegações finais a defesa alegou ser o paciente portador de doença capaz de interferir no seu estado psíquico (epilepsia). 3. Com efeito, não se vislumbra nenhuma ilegalidade no acórdão hostilizado que, de maneira fundamentada, entendeu inexistir qualquer suspeita a respeito da perturbação mental do paciente. Assim, a inversão do decidido demandaria o exame aprofundado de matéria fático-probatória, inviável na via estreita do habeas corpus. (...). 7. Habeas corpus denegado. (HC nº 68.708/RS, rel. Ministro OG FERNANDES, Sexta Turma, julgado em 17-9-2009, DJe 13-10-2009).

AGRAVO REGIMENTAL NO RECURSO ESPECIAL. ARTS. 213 E 217-A DO CÓDIGO PENAL. ARTS. 241-A E 241-B DO ECA. EXAME DE INSANIDADE MENTAL. INDEFERIMENTO DO PEDIDO. INEXISTÊNCIA DE DÚVIDA RAZOÁVEL. CERCEAMENTO DE DEFESA NÃO CONFIGURADO. INCIDÊNCIA DA SÚMULA N. 7/STJ. AGRAVO REGIMENTAL DESPROVIDO. 1. Na linha da jurisprudência desta Corte, "a realização do exame de insanidade mental não é automática ou obrigatória, devendo existir dúvida razoável acerca da higidez mental do acusado para o seu deferimento" (RHC n. 88.626/DF, relator Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 7/11/2017, DJe 14/11/2017). 2. No caso, o Tribunal de origem concluiu, fundamentadamente e com base no amplo acervo de provas colacionadas aos autos, não haver dúvida razoável acerca da sanidade mental do acusado de modo a justificar o deferimento do pedido de realização do referido exame. Dessa forma, a reversão do julgado, como pretendido pelo agravante, exigiria o reexame do material fático-probatório, o que é inviável em recurso especial, tendo em vista o teor do enunciado 7 da Súmula desta Corte.
3. Agravo regimental desprovido. (AgRg no REsp 1799314/DF, Rel. Ministro ANTONIO SALDANHA PALHEIRO, SEXTA TURMA, julgado em 06/04/2021, DJe 13/04/2021)

Neste pórtico, entendo que **o atestado médico acostado aos autos é genérico, porquanto não traz qualquer elemento apto a demonstrar o comprometimento da lucidez e da ausência de compreensão da pena imposta, necessários ao reconhecimento da inimputabilidade.

Isto posto, em consonância com o parecer ministerial, indefiro o pedido da defesa.

P.R.I.
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_239',
        nome: 'Agravo progr indef subj',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que indeferiu-lhe a progressão de regime por ausente o requisito subjetivo.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois a noção de bom comportamento do apenado exigido como requisito subjetivo para a progressão de regime "abrange a valoração de elementos que não se restringem ao atestado emitido pela direção carcerária, sob pena de transformar o juiz em mero homologador de documentos administrativos. (AgRg no HC 660.197/SP, Rel. Ministro ROGERIO SCHIETTI CRUZ, SEXTA TURMA, julgado em 17/08/2021).

Nestes termos:

Em sede de execução penal, vale o princípio in dubio pro societate, o qual preconiza que, na dúvida quanto à aptidão para a promoção a regime mais brando, faz-se necessário o encarceramento por um período maior de tempo sob o olhar cauteloso do Estado, evitando-se que a sociedade seja posta em risco com uma reinserção prematura. Lado outro, o atestado de boa conduta carcerária emitido pelo diretor da unidade prisional é insuficiente para se aferir, por si só, o mérito subjetivo, na medida em que o comportamento disciplinado é dever de todos que se encontram temporariamente encarcerados, sob pena de imposição de sanções disciplinares. [...] (AgRg no HC 639.850/RS, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 25/05/2021, DJe 01/06/2021).

No caso, restou esclarecido na decisão agravada que ***

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_240',
        nome: 'Agravo percentual único',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que indeferiu seu pedido para retificar os percentuais de cumprimento da pena para progressão de regime,.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme anotado na decisão agravada, deve ser fixado apenas um patamar para todos os delitos (AgRg nos EDcl no HC 668.301/SP), sendo todas penas são somadas ou unificadas para fins de fixação do regime prisional (LEP, art. 111, caput e seu parágrafo único).

Registro, por oportuno, que a decisão agravada mandou corrigir erro de lançamento do cálculo da pena (patamares do requisito objetivo para progressão de regime) efetivado por servidores do juízo, atendendo à jurisprudência do Superior Tribunal de Justiça.

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_241',
        nome: 'Retificação GEP regime inicial',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de condenação a ** de reclusão em regime fechado, por crime de ***, em que o apenado requereu alteração do regime inicial de cumprimento da pena para o aberto, por preencher os requisitos legais (ev. **).

Interveio o Ministério Público, opinando pelo indeferimento do pedido (ev. **).

Relatados.

Nos precisos termos do art. 66, I, da Lei de Execução Penal, compete ao juiz da execução aplicar aos casos julgados lei posterior que de qualquer modo favorecer o condenado.

No mesmo sentido dispõe a Súmula nº 611 do Supremo Tribunal Federal, com a seguinte redação: “Transitada em julgado a sentença condenatória, compete ao juízo das execuções aplicação de lei mais benigna”.

Indiscutível, portanto, a competência do Juízo das Execuções para a análise e aplicação das repercussões benignas advindas do STF ao reconhecer a inconstitucionalidade da obrigatoriedade do regime inicial fechado para os condenados por crimes hediondos e os a ele equiparados, de modo que a identificação do regime inicial deve observar os critérios do art. 33, §§ 2º e 3º do Código Penal.

Refiro-me ao seguinte acórdão:

Habeas corpus. Penal. Tráfico de entorpecentes. Crime praticado durante a vigência da Lei nº 11.464/07. Pena inferior a 8 anos de reclusão. Obrigatoriedade de imposição do regime inicial fechado. Declaração incidental de inconstitucionalidade do § 1º do art. 2º da Lei nº 8.072/90. Ofensa à garantia constitucional da individualização da pena (inciso XLVI do art. 5º da CF/88). Fundamentação necessária (CP, art. 33, § 3º, c/c o art. 59). Possibilidade de fixação, no caso em exame, do regime semiaberto para o início de cumprimento da pena privativa de liberdade. Ordem concedida. 1. Verifica-se que o delito foi praticado em 10/10/09, já na vigência da Lei nº 11.464/07, a qual instituiu a obrigatoriedade da imposição do regime inicialmente fechado aos crimes hediondos e assemelhados. 2. Se a Constituição Federal menciona que a lei regulará a individualização da pena, é natural que ela exista. Do mesmo modo, os critérios para a fixação do regime prisional inicial devem-se harmonizar com as garantias constitucionais, sendo necessário exigir-se sempre a fundamentação do regime imposto, ainda que se trate de crime hediondo ou equiparado. 3. Na situação em análise, em que o paciente, condenado a cumprir pena de seis (6) anos de reclusão, ostenta circunstâncias subjetivas favoráveis, o regime prisional, à luz do art. 33, § 2º, alínea b, deve ser o semiaberto. 4. Tais circunstâncias não elidem a possibilidade de o magistrado, em eventual apreciação das condições subjetivas desfavoráveis, vir a estabelecer regime prisional mais severo, desde que o faça em razão de elementos concretos e individualizados, aptos a demonstrar a necessidade de maior rigor da medida privativa de liberdade do indivíduo, nos termos do § 3º do art. 33, c/c o art. 59, do Código Penal. 5. Ordem concedida tão somente para remover o óbice constante do § 1º do art. 2º da Lei nº 8.072/90, com a redação dada pela Lei nº 11.464/07, o qual determina que “[a] pena por crime previsto neste artigo será cumprida inicialmente em regime fechado“. Declaração incidental de inconstitucionalidade, com efeito ex nunc, da obrigatoriedade de fixação do regime fechado para início do cumprimento de pena decorrente da condenação por crime hediondo ou equiparado. (HC 111840, Relator(a): DIAS TOFFOLI, Tribunal Pleno, julgado em 27/06/2012, PROCESSO ELETRÔNICO DJe-249 DIVULG 16-12-2013 PUBLIC 17-12-2013) - negritei.

Dessarte, ante a declaração pelo Supremo Tribunal Federal da inconstitucionalidade do art. 2º, § 1º, da Lei nº 8.072/1990, passou a ser possível aos condenado por crimes hediondos ou equiparados a fixação, em tese, de quaisquer dos regimes prisionais legalmente previstos.

Assim sendo, mesmo em se tratando de crimes hediondos, para a imposição de regime mais severo do que o permitido segundo a sanção aplicada, faz-se necessário que a pena-base seja fixada acima do mínimo legal, por meio de motivação idônea, com demonstração concreta das circunstancias judiciais previstas no art. 59 do estatuto repressivo, que, necessariamente, devem ser desfavoráveis ao réu, para incidência do disposto no art. 33, § 3º, do Código Penal.

*Na hipótese dos autos, conquanto o Juízo de conhecimento tenha feito ressalvas quanto às circunstâncias da culpabilidade, personalidade, motivação e consequências, verifico que elas fazem parte do próprio tipo penal; tanto é verdade que o julgador fixou a pena-base no mínimo legal (por ausência de circunstâncias judiciais desfavoráveis ao condenado), enquanto o eg. Tribunal Justiça nada fundamentou a respeito (ev. **).

*Na hipótese dos autos, o Juízo de conhecimento não reconheceu quaisquer das circunstâncias judiciais como desfavoráveis ao condenado, o que também não ocorreu quando do julgamento do recurso pela eg. Câmara Criminal (ev.**).

Quanto ao regime prisional, tem-se que o Juízo Condenatório fixou automaticamente o regime fechado para o seu cumprimento, apenas com base no § 7º, do art. 1º, da Lei 9.455/1997, violando a garantia fundamental da individualização da pena, conforme vaticina o art. 5º, XLVI, da Constituição Federal, sendo necessário, portando, exigir-se sempre a fundamentação do regime imposto, ainda que se trate de crime hediondo ou equiparado.

Em sendo assim, observo atender o apenado aos requisitos insertos no art. 33, §§ 2º, "c", e 3º do Código Penal, de modo que se impõe o início do cumprimento da pena em regime semiaberto.

Isto posto, deixo de acolher o parecer ministerial e estabeleço o regime inicial semiaberto para o início do cumprimento da reprimenda corporal.

P.R.I. Comunique-se à unidade prisional, para que providencie a transferência do apenado ao regime semiaberto harmonizado.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_242',
        nome: 'Progressão indeferimento pedir nova gep',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_243',
        nome: 'Agravo data falta média',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o Ministério Público da decisão do evento ** que concedeu progressão de regime ao apenado, por entender que seria necessário aguardar o prazo de 60 dias após o cumprimento de punição disciplinar por falta média que lhe fora imposta.

Intimada, a defesa contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois a falta média foi praticada mais de 60 dias antes da progressão, em **l (data da última violação anotada), mesmo que a punição tenha sido cumprida posteriormente.

Neste particular impõe-se anotar que a data de cumprimento da punição não está ao critério do apenado, pois depende da conveniência administrativa do sistema prisional, não podendo ele ser prejudicado por isso.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_244',
        nome: 'Agravo mantendo alteração',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que alterou os cálculos do requisito objetivo para progressão de regime, entendendo que deveria ser de 16% para o crime comum e 40% para o hediondo.

Intimado, o Ministério Público contrarrazoou opinando pela alteração da decisão agravada.

Relatados.

Sem razão o agravante, pois os percentuais de atingimento do requisito objetivo para progressão de regime foram fixados nos termos da antiga redação do art. 112 da Lei de Execução Penal, que neste particular não difere da nova lei.

Relembro, por oportuno, como o esclarece o Superior Tribunal de Justiça, que "not é juridicamente possível a utilização da fração de 1/6 para fins de progressão de regime apenas para o crime comum, e de 2/5 apenas para o crime hediondo, devendo ser fixado apenas um patamar de progressão para ambos os delitos" (AgRg nos EDcl no HC 668.301/SP, Rel. Ministro .REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 08/06/2021, DJe 14/06/2021).

De seu lado, observo que a decisão agravada não alterou o percentual aplicado, mas apenas corrigiu cálculos lançados erradamente na guia de execução penal, lembrando, neste ponto, que a decisão que homologa os cálculos da pena não faz coisa julgada, estando as decisões do juízo de execução penal, aliás, sujeitos à cláusula rebus sic stantibus.

Neste particular, decidiu o Superior Tribunal de Justiça:

PROCESSUAL PENAL. EXECUÇÃO. HABEAS CORPUS. PROGRESSÃO DE REGIME CONCEDIDA. POSTERIOR REVOGAÇÃO DIANTE DO NÃO PREENCHIMENTO DO REQUISITO OBJETIVO. COISA JULGADA. CLÁUSULA REBUS SIC STANDIBUS. ALTERAÇÃO DO SUBSTRATO FÁTICO-JURÍDICO. ERRO MATERIAL. POSSIBILIDADE DE CORREÇÃO. ORDEM DENEGADA.
1. A força vinculativa do ato decisório, em sede de execução penal, subordina-se à cláusula rebus sic standibus, é dizer, está atrelada à manutenção dos pressupostos fáticos e jurídicos que lhe serviram de suporte.
2. In casu, inexiste o alegado constrangimento ilegal, tendo em vista que a decisão que revogou a progressão de regime equivocadamente concedida ao paciente, diante do constatado erro material, não padece de nenhuma ilegalidade, tampouco caracteriza ofensa à coisa julgada. Uma vez constatada a existência de nova execução, até então desconhecida, agiu com acerto o Juízo singular ao reconhecer a alteração do substrato fático-jurídico e revogar a decisão que havia deferido o benefício, por ausência de lapso temporal, sob pena de, ao contrário, manter o apenado em um regime de cumprimento de pena do qual ele ainda não faz jus por não ter preenchido o requisito objetivo.
3. Ordem denegada.
(HC 385.541/SP, Rel. Ministra MARIA THEREZA DE ASSIS MOURA, SEXTA TURMA, julgado em 16/05/2017, DJe 24/05/2017).

Aqui, repito, houve apenas correção de erro quando dos cálculos antes lançados.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_245',
        nome: 'Multa despacho inicial',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

1. Recebo e defiro a petição inicial.

2. Cite-se o executado, pelo correio, para, no prazo de 10 (dez) dias:

a) pagar a dívida, que deverá ser recolhida diretamente ao Fundo Penitenciário Estadual, juntando-se a comprovação aos autos ao fim daquele prazo;

b) garantir a execução, através de depósito em dinheiro, fiança bancária, nomeação de bens ou indicação à penhora de bens oferecidos por terceiros.

Esclareça-se que o apenado/executado poderá requerer o pagamento parcelado (LEP, art. 169), inclusive mediante desconto no vencimento ou salário (art. 168).

3. Ressalte-se que, recaindo a nomeação em bem imóvel, faz-se necessária a juntada aos autos, pelo executado, de certidão de sua matrícula, expedida pelo registro imobiliário competente, nos termos do art. 1.245, do Código Civil; recaindo em bens móveis, presume-se sua propriedade tão-somente pela posse, porquanto transferível pela tradição.

4. Frustrada a citação pelo correio proceda-se à citação por oficial de justiça ou por edital, ressaltando-se que esta somente é possível após exauridas todas as diligências necessárias para a localização do devedor.

5. Efetuada a citação e não paga ou garantida a execução, dê-se vista ao Ministério Público.

6. Garantida a execução através de depósito em dinheiro ou fiança bancária, caso não sejam oferecidos embargos, dê-se vista dos autos ao Exeqüente, nos termos do art. 18, da LEF.

7. Na hipótese do Executado nomear bem(ns) à penhora ou indicar à penhora bens oferecidos por terceiros, dê-se vista dos autos ao Exeqüente para, no prazo de 10 dias, oferecer manifestação, vindo, em seguida, os autos à conclusão.

Cumpra-se e intimem-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 11 parte 1 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE11_PARTE1);

// Lote 11 - Parte 2: Modelos 246-255 (finalizando 251-275.txt)
export const MODELOS_SEEU_LOTE11_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_246',
        nome: 'Transf indefere Regional',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena privativa de liberdade em regime semiaberto, em que o Ministério Público requereu a transferência do PEC para a Comarca de **, local onde o apenado reside.

Relatados.

Em razão da Resolução nº 33/2021, do eg. Tribunal de Justiça do Rio Grande do Norte, este juízo passou a ter competência territorial regional, abrangendo as execuções penais em regime fechado e semiaberto na área territorial de 15 comarcas, entre as quais aquela para onde o Ministério Público requereu a remessa dos autos.

Isto posto, indefiro o pedido de declínio de competência.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_247',
        nome: 'Remição ENEM',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade, em regime fechado, em que o apenado, amparado na previsão do art. 126 da Lei 12.433/2011 e na Resolução nº 391/2021, do CNJ, requereu remição pelo estudo, em razão de ter realizado o ENEM no ano de ** (evento **).

Opinou o Ministério Público favoravelmente a procedência, para que fossem remidos 100 (cem) dias (evento **).

Verifica-se que o apenado juntou comprovação da aprovação no ENEM obtendo pontuação mínima exigida em cada disciplina (evento *).

Relatados.

O Exame Nacional do Ensino Médio (ENEM) é uma prova realizada pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), autarquia vinculada ao Ministério da Educação do Brasil para avaliar a qualidade do ensino médio no país.

O seu resultado serve para acesso ao ensino superior em universidades públicas brasileiras, através do Sistema de Seleção Unificada (SiSU), assim como em algumas universidades no exterior ou particulares.

Além disso, o exame passou a servir também como certificação de conclusão do ensino médio em cursos de Educação de Jovens e Adultos (EJA), antigo supletivo, substituindo o Exame Nacional para Certificação de Competências de Jovens e Adultos (Encceja).

Para obter êxito no ENEM o estudante tem que alcançar pontuação exigida para cada curso de nível superior a partir da média das notas dos participantes, tendo cada curso superior uma média de corte, que à evidência irá depender dos concorrentes.

Assim, para saber se um participante do ENEM foi aprovado verifica-se se atingiu a média para ingressar no curso de nível superior que deseja, fazendo depois sua inscrição através do SiSU.

D’outro lado, o exame passou a servir como certificação de conclusão do ensino médio (EJA/ENCEJA), tendo o mesmo critério de idade (mínima de 18 anos) e exigência do participante obter nota superior a 450 (quatrocentos e cinquenta) pontos em cada uma das áreas de conhecimento e 500 (quinhentos) pontos na redação.

Dispõe a Resolução nº 391/2021 do CNJ, em seu art. 3º, Parágrafo Único, expressamente que:

Parágrafo único. Em caso de a pessoa privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP.

Com ser assim, a recomendação supra viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no Exame Nacional do Ensino Médio, e não apenas por tê-lo prestado.

No caso, a documentação acostada pela defesa comprova que o apenado prestou o exame do ENEM durante o cumprimento de sua pena, bem como obteve a aprovação, critério expressamente exigido pela Resolução CNJ nº 391/2021.

Outrossim, relativamente à base de cálculo, observa-se que ao mencionar a carga horária de 1.600 (mil e seiscentas) horas para o ensino fundamental, e 1.200 (mil e duzentas) horas para o ensino médio, a Resolução nº 391/2021 do CNJ já faz referência ao percentual de 50% da carga horária definida pela Resolução nº 03/2010 do Conselho Nacional de Educação, cujo art. 4º, III estabelece que a duração mínima dos cursos presenciais de EJA para o Ensino Médio deve ser de 1.200 (mil e duzentas) horas.

A jurisprudência do Superior Tribunal de Justiça era oscilante acerca da base de cálculos para a remição nesses casos, algumas vezes que deveria ser calculada sobre 1600 horas e em outras sobre a metade delas. No dia 10 de março de 2021, porém, a Terceira Seção daquela Corte definiu a interpretação correta, firmando tese no HC 602.425-SC, que foi publicada como sendo o seguinte tema: Execução Penal. Remição da pena pelo estudo. Aprovação no Exame Nacional para Certificação de Competência de Jovens e Adultos - ENCCEJA. Recomendação n. 44/2013 do CNJ. Interpretação mais benéfica. Cálculo dos 50% da Carga Horária. Patamar equivalente a 1.600 horas. Remição de 133 dias. 26 dias por área de conhecimento. Reafirmação da jurisprudência da Terceira Seção.

Dito de outra forma, entendeu a Terceira Seção do STJ que as 1.200 hs ou 1.600 hs, dispostas na Recomendação n. 44/2013 do CNJ, já equivalem aos 50% da carga horária definida legalmente para cada nível de ensino, com base nas quais serão calculados os dias a serem remidos. De mesmo modo, aplica-se tal entendimento ao disposto na Resolução nº 391/2021 do CNJ, por ter mantido seu posicionamento acerca da base de cálculo.

Assim, temos que a base de cálculo para remição pela aprovação no ENEM é de 1.200 (mil e duzentas) horas.

Consoante o art. 126, da LEP, a contagem do prazo se dará à razão de um dia de pena a cada 12 horas de frequência escolar, divididas, no mínimo, em três dias da atividade. Portanto, em tendo sido o apenado aprovado em todas as áreas de conhecimento do ENEM e considerando-se a carga horária de 1.200h, divide-se esse total por 12, alcançando-se 100 (cem) dias de remição.

Isto posto, defiro o pedido de remição do evento 69.1, declarando remidos 100 (cem) dias da pena em execução.

P.R.I. Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_248',
        nome: 'Agravo monitoramento rompimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que regrediu-lhe o regime prisional em razão de rompimento da tornozeleira eletrônica.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do Superior Tribunal de Justiça, o rompimento do equipamento de monitoração eletrônica configura falta grave.

Neste sentido:

“... II - Nos termos do art. 146-C, II, da LEP, o apenado submetido ao monitoramento eletrônico tem que observar o dever de inviolabilidade do equipamento, no caso a tornozeleira eletrônica, não podendo remover, violar, modificar ou danificar de qualquer forma o dispositivo de monitoração, ou mesmo permitir que outrem o faça. III - Ao romper a tornozeleira eletrônica, o paciente desrespeitou a ordem recebida para não violar o equipamento de monitoração, o que configura a falta grave tipificada no art. 50, VI, c/c o art. 39, V, ambos da LEP, nos termos da jurisprudência deste Tribunal Superior. Precedentes. (...) (HC 460.440/RS, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 18/09/2018, DJe 25/09/2018).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_249',
        nome: 'agravo falta média monitoramento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que lhe impôs punição por falta média, consistente em descumprimento das condições do monitoramento eletrônico, dado o não recolhimento ao local determinado no horário noturno.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada, desatendeu ele ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 (“cumprimento fiel da sentença”), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do Rio Grande do Norte, art. 74, inc. IV, merecendo punição, que no caso foi a prevista no seu art. 66, III ( suspensão ou restrição de regalias) c/c art. 67.

Registro, por oportuno, que a falta praticada também poderia, na dicção do Superior Tribunal de Justiça, ser considerada grave: "De acordo com o entendimento desta Corte, a violação da zona de monitoramento pode configurar falta grave, nos termos dos arts. 50, inciso VI, e 39, inciso V, ambos da Lei de Execução Penal, o que autoriza a regressão de regime e a alteração da data-base para progressão" (AgRg no HC 509.270/SP, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 17/11/2020, DJe 27/11/2020).

Este juízo, porém, preferiu considerar a falta como média.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_250',
        nome: 'Agravo negando mudar para trânsito',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade, atualmente em regime semiaberto, em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição quanto a data-base para alcance da progressão ao regime aberto, requerendo que fosse aquele em que transitou em julgado a última condenação.

Relatados.

Sem razão o agravante, pois a jurisprudência do Superior Tribunal de Justiça segue o entendimento do Supremo Tribunal Federal, externado no julgamento do HC 115.254 (Rel. Ministro GILMAR MENDES, SEGUNDA TURMA, julgado em 15.12.2015), para estabelecer, como marco para a subsequente progressão, a data em que o apenado preencheu os requisitos legais do art. 112 da LEP e não aquela em que o Juízo das Execuções, em decisão declaratória, deferiu o benefício ou aquela em que o apenado, efetivamente, foi inserido no atual regime: "A atual jurisprudência do Superior Tribunal de Justiça, acompanhando a orientação do Pretório Excelso, firmou entendimento no sentido de que 'a data inicial para a progressão de regime deve ser aquela em que o apenado preencheu os requisitos do art. 112 da Lei de Execução Penal, e não a data da efetiva inserção do reeducando no atual regime' (AgRg no REsp 1.582.285/MS, Rel. Ministro RIBEIRO DANTAS, QUINTA TURMA, DJe 24/8/2016)."

De seu lado, o Tribunal da Cidadania também sedimentou o entendimento de que a alteração da data-base para a concessão de novos benefícios executórios, em razão da unificação das penas, não encontra respaldo legal.

Nestes termos:

AGRAVO REGIMENTAL EM HABEAS CORPUS CONCEDIDO MONOCRATICAMENTE. EXECUÇÃO PENAL. SUPERVENIÊNCIA DE NOVA CONDENAÇÃO. UNIFICAÇÃO. DATA-BASE PARA A CONCESSÃO DE NOVOS DIREITOS. DATA DA ÚLTIMA PRISÃO, RESSALVADO, QUANTO AO BENEFÍCIO DA PROGRESSÃO DE REGIME, EVENTUAL FALTA GRAVE SUBSEQUENTE. JURISPRUDÊNCIA PACIFICADA DO STJ. 1. A Terceira Seção do Superior Tribunal de Justiça pacificou o entendimento de que a unificação das penas, por si só, não altera a data-base para concessão de novos benefícios, devendo ser considerada a data da última prisão ou a data da última infração disciplinar (REsp n. 1.557.461, Ministro Rogerio Schietti Cruz, DJe 15/3/2018). 2. A alteração do termo a quo para fins de concessão de benefícios durante a execução da pena constitui afronta ao princípio da legalidade e ofensa à individualização da pena, motivo pelo qual o marco interruptivo anterior à unificação das penas deve prevalecer. Registre-se, ainda, que, caso o crime cometido no curso da execução tenha sido apenado como infração disciplinar, seus efeitos já repercutiram no bojo do cumprimento da pena, não podendo, portanto, a superveniência do trânsito em julgado da sentença condenatória servir para a análise do mérito do apenado, sob pena de flagrante bis in idem. Idêntico raciocínio aplica-se ao delito praticado antes do início da execução da pena, porquanto preexistente ao início da execução em curso, sendo estranho ao processo (REsp n. 1.835.094, Ministro Nefi Cordeiro, DJe 11/10/2019). 3. A nova orientação desta Casa alinha-se ao postulado pela defesa. 4. Agravo regimental improvido. (AgRg no HC 456.329/MT, Rel. Ministro SEBASTIÃO REIS JÚNIOR, SEXTA TURMA, julgado em 18/02/2020, DJe 28/02/2020)

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos.

Intime-se o agravante, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_251',
        nome: 'Retificação mulher negando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que a apenada pugnou pela retificação da guia, alegando atender aos requisitos do § 3º do art. 112 da LEP.

Interveio o Ministério Público.

Relatados.

A Lei de Execução Penal cria, no art. 112, § 3º, lapso diferenciado para progressão de regime que beneficia as mulheres que, cumulativamente, atendam a determinados requisitos.

Transcrevo:

Art. 112. A pena privativa de liberdade será executada em forma progressiva com a transferência para regime menos rigoroso, a ser determinada pelo juiz, quando o preso tiver cumprido ao menos:

(…)

§ 3º No caso de mulher gestante ou que for mãe ou responsável por crianças ou pessoas com deficiência, os requisitos para progressão de regime são, cumulativamente:

I - não ter cometido crime com violência ou grave ameaça a pessoa;

II - não ter cometido o crime contra seu filho ou dependente;

III - ter cumprido ao menos 1/8 (um oitavo) da pena no regime anterior;

IV - ser primária e ter bom comportamento carcerário, comprovado pelo diretor do estabelecimento;

V - não ter integrado organização criminosa.

No caso, verifico que a apenada foi também condenada pelo crime do art. 35 da Lei de Drogas, o qual vem a ser espécie de organização criminosa, como destacado no acórdão que julgou o HC 645.236/SP, Rel. Ministro JOEL ILAN PACIORNIK, QUINTA TURMA, julgado em 30/03/2021, DJe 13/04/2021:

O ordenamento jurídico brasileiro, possui mais de uma definição para o que vem a ser uma organização criminosa, dentre eles a Lei n.12.850/2013, Decreto n. 5.015/2004 (Convenção de Palermo) e Lei n.12.694/2012. Assim, o conceito de organização criminosa não está atrelado a apenas um dispositivo legal, tendo como traço característico uniforme a reunião de pessoas com a intenção de estabilidade para a prática de crimes. Tal característica também está presente no crime de associação para o tráfico de drogas.

Assim, tenho afastada a possibilidade de incidência do lapso diferenciado para progressão, uma vez que, consoante previsto no art. 112, § 3º, V, da Lei de Execução Penal, é necessário que a sentenciada não integrado organização criminosa.

Isto posto, não atendendo a apenada cumulativamente a todos os requisitos previstos no § 3º do art. 112 da Lei de Execução Penal, indefiro o pedido do ev. *** e mantenho a GEP como está.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_252',
        nome: 'Retificação progressão indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade, atualmente em regime semiaberto, em que o Ministério Público pugnou pela retificação da guia, alegando erro na sua expedição quanto a data-base para alcance da progressão ao regime aberto, requerendo que fosse aquele em que alcançado o requisito objetivo para a progressão anterior:

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
        id: 'seeu_253',
        nome: 'Retificação hediondo+comum conf STJ MODELO SEM USO',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Requereu o apenado retificação da GEP, fazendo constar como requisito para progressão de regime os percentuais previstos na nova redação do art. 112, já que não se trata de reincidência específica em crime hediondo.

Interveio o Ministério Público, opinando favoravelmente. **contrariamente, pois ****.

Relatados.

Com razão o apenado.

Inicialmente verifico que a exigência de 60% (LEP, art. 112, VII) só cabe no caso de reincidência específica em crime hediondo, o que não é o caso.

É o que decidiu o Superior Tribunal de Justiça ao julgar em 26/05/2021 o Recurso Especial representativo da controvérsia (REsp) 1910240/MG, sendo relator o Ministro ROGERIO SCHIETTI CRUZ, quando fixou a seguinte tese:

É reconhecida a retroatividade do patamar estabelecido no art. 112, V, da Lei n. 13.964/2019, àqueles apenados que, embora tenham cometido crime hediondo ou equiparado sem resultado morte, não sejam reincidentes em delito de natureza semelhante.

Como antes o percentual fora fixado em 3/5, dada ao que dispunha a lei 8.072/90, a nova redação do art. 112 da LEP se mostra como novatio legis in mellius, devendo ser aplicada.

Assim, em relação ao crime hediondo, é de se aplicar o percentual de 40% (LEP, art. 112, V).

*Ressalte-se que no caso de crime hediondo com resultado morte esse percentual será de 50% (LEP, art. 112, VI).

Neste sentido:

PENAL. AGRAVO REGIMENTAL NO RECURSO ESPECIAL. AGRAVO EM EXECUÇÃO PENAL. PROGRESSÃO DE REGIME. REINCIDÊNCIA EM CRIME COMUM. HIPÓTESE NÃO ABARCADA PELA NOVATIO LEGIS. LEI Nº 13.964/2019 (PACOTE ANTICRIME). ANALOGIA IN BONAM PARTEM. CUMPRIMENTO DE 40% DA PENA PARA CONCESSÃO DA BENESSE. ARTIGO 112, INC. V, DA LEP. NOVA ORIENTAÇÃO JURISPRUDENCIAL. DECISÃO MANTIDA. VIOLAÇÃO A DISPOSITIVOS E A PRINCÍPIOS DE EXTRAÇÃO CONSTITUCIONAL. VIA INADEQUADA. COMPETÊNCIA DO PRETÓRIO EXCELSO. I - Conforme ressaltado no decisum monocrático reprochado, nos termos da moderna jurisprudência desta Corte Superior de Justiça, "[...] para o condenado por crime hediondo que seja reincidente genérico, como se dá no caso em tela, deverá incidir o percentual equivalente ao que é previsto para o primário, vale dizer, de 40% ou 50%, na forma do art. 112, V e VI, a, da LEP, a depender do caso (se houve ou não resultado morte)" (AgRg no HC n. 598.839/SP, Sexta Turma, Rel. Min. Sebastião Reis Júnior, DJe de 04/12/2020). II - Não compete a este eg. Superior Tribunal se manifestar sobre violação a princípios ou a dispositivos de extração constitucional, ainda que para fins de prequestionamento, sob pena de usurpação da competência do Pretório STF. (Precedentes). Agravo regimental desprovido. (AgRg no REsp 1926562/PR, Rel. Ministro FELIX FISCHER, QUINTA TURMA, julgado em 18/05/2021, DJe 25/05/2021)

No tocante às demais penas em execução impõe-se registrar que o caput do art. 112 da LEP dispõe que a “pena privativa de liberdade será executada em forma progressiva com a transferência para regime menos rigoroso, a ser determinada pelo juiz, quando o preso tiver cumprido ao menos” certo percentual dela, no caso, 40%, não dizendo que o cálculo será diferente para a pena de cada crime.

De acordo com o Superior Tribunal de Justiça: "Desse modo, não é juridicamente possível a utilização da fração de 1/6 para fins de progressão de regime apenas para o crime comum, e de 2/5 apenas para o crime hediondo, devendo ser fixado apenas um patamar de progressão para ambos os delitos" (AgRg nos EDcl no HC 668.301/SP, Rel. Ministro REYNALDO SOARES DA FONSECA, QUINTA TURMA, julgado em 08/06/2021, DJe 14/06/2021)

Aqui lembro que todas as penas são somadas ou unificadas para fins de fixação do regime prisional (LEP, art. 111, caput e seu parágrafo único).

Várias vezes aquela Corte superior debruçou-se sobre o tema, deixando assentado, em acórdão que trata especificamente da questão, que o tema trata da individualização da pena.

Verbis:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. LAPSO PARA A PROGRESSÃO DE REGIME. CASO CONCRETO. EFETIVA REINCIDÊNCIA ESPECÍFICA EM CRIME HEDIONDO PARA FINS DE UNIFICAÇÃO DE PENAS. NOVO PACOTE ANTICRIME (LEI N. 13.964/2019). RECURSO DESPROVIDO. I - A Terceira Seção desta eg. Corte Superior consagrou o entendimento de que "É reconhecida a retroatividade do patamar estabelecido no art. 112, V, da Lei n. 13.964/2019, àqueles apenados que, embora tenham cometido crime hediondo ou equiparado sem resultado morte, não sejam reincidentes em delito de natureza semelhante" (REsp n. 1.910.240/MG, Terceira Seção, Rel. Min. Rogerio Schietti Cruz, DJe de 31/5/2021). II - Na hipótese concreta, contudo, é a efetiva reincidência específica da parte agravante em crimes hediondos que impossibilita a concessão da ordem para fins de unificação de penas em execução penal. III - Assente na jurisprudência desta eg. Corte Superior que "As condições pessoais do apenado, tal como a reincidência, ainda que não sejam reconhecidas na condenação, devem ser observadas pelo Juízo das execuções para concessão de benefícios, já que tal proceder encontra-se na sua esfera de competências, definida no art. 66 da LEP, descabendo falar-se em reformatio in pejus ou em violação da coisa julgada material, mas em individualização da pena relativa à apreciação de institutos próprios da execução penal (AgRg no HC n. 511.766/MG, Rel. Ministro ANTONIO SALDANHA PALHEIRO, Sexta Turma, julgado em 18/6/2019, DJe 27/6/2019)" (AgRg nos EDcl no HC n.668.301/SP, Quinta Turma, Rel. Min. Reynaldo Soares da Fonseca, DJe de 14/6/2021). Agravo regimental desprovido. (AgRg no HC 676.203/SP, Rel. Ministro JESUÍNO RISSATO (DESEMBARGADOR CONVOCADO DO TJDFT), QUINTA TURMA, julgado em 14/09/2021, DJe 22/09/2021) - negritei.

De tão didático, vale a pena transcrever parte do voto condutor:

Assim, realizada a unificação das penas, não é possível o fracionamento das condenações impostas para fins de execução penal.

No mesmo sentido, o art. 111 da Lei de Execução Penal:

"Art. 1 11. Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas, observada, quando for o caso, a detração ou remição.

Parágrafo único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime."

Igualmente, assente na jurisprudência desta eg. Corte Superior que "As condições pessoais do apenado, tal como a reincidência, ainda que não sejam reconhecidas na condenação, devem ser observadas pelo Juízo das execuções para concessão de benefícios, já que tal proceder encontra-se na sua esfera de competências, definida no art. 66 da LEP, descabendo falar-se em reformatio in pejus ou em violação da coisa julgada material, mas em individualização da pena relativa à apreciação de institutos próprios da execução penal (AgRg no HC n. 511.766/MG, Rel. Ministro ANTONIO SALDANHA PALHEIRO, Sexta Turma, julgado em 18/6/2019, DJe 27/6/2019)" (AgRg nos EDcl no HC 668.301/SP, Quinta Turma, Rel. Min. Reynaldo Soares da Fonseca, DJe 14/6/2021).

Disso, se extrai que, se a parte agravante é reincidente, e esta condição deve afetar a totalidade da pena em cumprimento, apesar de a nova lei dividir os percentuais para crimes hediondos e comuns.

Verifica-se, portanto, que o entendimento anterior está em consonância com a posição desta eg. Corte Superior, no sentido de que, "a condição de reincidente, uma vez adquirida pelo sentenciado, estende-se sobre a totalidade das penas somadas, não se justificando a consideração isolada de cada condenação e tampouco a aplicação de percentuais diferentes para cada uma das reprimendas" (AgRg no HC n. 616.696/SP, Quinta Turma, Rel. Min. Felix Fischer, DJe de 18/12/2020).

No mesmo sentido, as decisões: HC n. 608.151, Quinta Turma, Rel. Min. João Otávio de Noronha, DJe de 5/5/2021; e REsp n. 1.918.049, Quinta Turma, Rel. Min. Ribeiro Dantas, Dje de 28/4/2021, e:

AGRAVO REGIMENTAL NO RECURSO ESPECIAL. EXECUÇÃO PENAL. UNIFICAÇÃO DE PENAS. REINCIDÊNCIA. 1. De acordo com a jurisprudência desta Corte, “a reincidência é circunstância de caráter pessoal que pode ser reconhecida na fase da execução penal e estende-se sobre a totalidade das penas somadas para efeito de cálculo dos benefícios” (AgRg no REsp n. 1.824.437/MG, relator Ministro ROGERIO SCHIETTI CRUZ, SEXTA TURMA, julgado em 26/11/2019, DJe 29/11/2019). Precedentes. 2. Agravo regimental desprovido. (AgRg no REsp 1934159/MA, Rel. Ministro ANTONIO SALDANHA PALHEIRO, SEXTA TURMA, julgado em 19/10/2021, DJe 05/11/2021) .

Por oportuno anoto que já decidi de forma diferente em outras situações, mas rendo-me à interpretação dada pelo Superior Tribunal de Justiça e evoluo minha forma de pensar, registrando que aqui não se trata de aplicar nova lei mas de corrigir erro, nos cálculos anteriormente feitos, de forma a individualizar a execução da pena.

*No tocante ao livramento condicional, observo que aqui se trata de apenado por crime hediondo, mas não reincidente específico.

Isto posto, mando corrigir a guia de execução penal, fixando como requisito objetivo para a progressão de regime o percentual de 40% **50% sobre as penas unificadas* e 2/3 para o livramento condicional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_254',
        nome: 'Falta grave sem individualização da conduta',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumprindo pena privativa de liberdade em regime fechado foi o apenado punido disciplinarmente pela direção da unidade prisional por ter praticado falta grave, posto terem sido descobertos no alojamento onde estava recolhido ** objetos perfuro contundentes, fato apurado na Sindicância Sumária de n° **/2021, com enquadramento no art. 75, III, do Regimento Único dos Estabelecimentos Prisionais do Rio Grande do Norte ("Comete falta disciplinar de natureza grave o preso que: ... III - possuir, indevidamente, instrumento capaz de ofender a integridade física de outrem") (evento **).

Conforme o documento haviam ** internos no local, tendo apenas *** assumido a posse dos ** ferros pontiagudos e os demais apenas mantido o depoimento padrão de que “nada teriam a declarar", inclusive o ora executado. Foi acrescentado ser de conhecimento da direção que ***.

Em conclusão, entendeu-se que um interno assumira a autoria única visando encobrir a verdadeira responsabilidade pelo fato.

Oportunizado ao apenado justificar-se, alegou que não tinha conhecimento da existência dos ferros no interior da cela. Acrescentou que não viu o momento em que os objetos foram encontrados, sabendo que outro interno assumira a autoria da conduta.

Interveio o Ministério Público, opinando pelo não reconhecimento da falta grave, dada a insuficiência de provas para atribuir alguma conduta ao apenado (evento **).

Intimada, a Defensoria Pública nada declarou ou requereu (evento ***).

Relatados.

A conduta noticiada configura falta grave, conforme estabelecido na Lei nº 7.210/84, que no seu art. 50, inc. III, esclarece que a comete o condenado que possuir, indevidamente, instrumento capaz de ofender a integridade física de outrem.

Contudo, a situação dos autos exige que se faça uma ponderação dos princípios que regem a execução penal e mesmo o ordenamento jurídico como um todo. Nesta senda, não restou inequivocamente comprovado em audiência e sindicância a autoria do fato, tampouco que algum interno teria logrado êxito em proceder com os atos de forma totalmente sigilosa, sem o conhecimento ou ajuda dos demais.

A sindicância presumiu que o ora executado e demais internos tiveram participação ou conhecimento do fato, mas não passou disso, inexistindo qualquer prova que ultrapasse o campo da suposição de autoria e destinação, haja vista não ter sido delimitado de forma individualizada a conduta do penitente, ao passo que este limitou-se declarar desconhecimento dos fatos.

Assim, não houve adequada especificação dos fatos e individualização das supostas ações configuradoras de falta, limitando-se à exposição de forma genérica, com mera presunção de autoria.

Impossível homologar-se punição amparando-se apenas em suposições.

Isto posto, dada a inexistência de provas da autoria da conduta pelo apenado,nego a homologação de falta grave.

P. R. I., diligências necessárias, inclusive comunicação ao estabelecimento prisional para registro no prontuário do apenado, cujo comportamento não deverá ser negativado pelos fatos relatados na sindicância.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_255',
        nome: 'Agravo novo crime',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que regrediu-lhe o regime prisional em razão da prática de fato previsto como crime doloso, alegando violação aos princípios da presunção de inocência e não culpabilidade, além da desproporcionalidade da medida.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme dispõe o verbete 526 da Súmula do Superior Tribunal de Justiça: O reconhecimento de falta grave decorrente do cometimento de fato definido como crime doloso no constante do cumprimento da pena prescinde do trânsito em julgado de sentença penal condenatória no processo penal instaurado para apuração do fato. (aprovado pela 3ª Seção em 13/05/2015).

O entendimento, aliás, foi reconhecido pelo Supremo Tribunal Federal na seguinte tese com Repercussão Geral:

O reconhecimento de falta grave consistente na prática de fato definido como crime doloso no curso da execução penal dispensa o trânsito em julgado da condenação criminal no juízo do conhecimento, desde que a apuração do ilícito disciplinar ocorra com observância do devido processo legal, do contraditório e da ampla defesa, podendo a instrução em sede executiva ser suprida por sentença criminal condenatória que verse sobre a materialidade, a autoria e as circunstâncias do crime correspondente à falta grave (Tema 758, RE 776823).

Ademais, nesse sentido também dispõe a Súmula do Superior Tribunal de Justiça: O reconhecimento de falta grave decorrente do cometimento de fato definido como crime doloso no cumprimento da pena prescinde do trânsito em julgado de sentença penal condenatória no processo penal instaurado para apuração do fato. (Verbete 526, aprovado pela 3ª Seção em 13/05/2015).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 11 parte 2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE11_PARTE2);

// Lote 12 - Parte 1: Modelos 256-263 (iniciando 276-300.txt)
export const MODELOS_SEEU_LOTE12_PARTE1: ModeloSEEU[] = [
    {
        id: 'seeu_256',
        nome: 'Agravo perda dias remidos',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que, reconhecendo omissão em decisão anterior que reconhecera a prática de falta grave, julgou perdidos um quinto dos dias remidos.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do Superior Tribunal de Justiça, "O entendimento desta Corte Superior de Justiça é no sentido de que o cometimento de falta grave pelo apenado (a) importa na alteração da data-base para a concessão de novos benefícios, salvo livramento condicional, indulto e comutação da pena; (b) autoriza a regressão de regime e (c) a revogação de até 1/3 dos dias remidos (art. 127 da LEP)" (AgRg no HC n. 732.365/SP, relator Ministro Joel Ilan Paciornik, Quinta Turma, julgado em 17/5/2022, DJe de 19/5/2022.).

No mesmo sentido:

HABEAS CORPUS. EXECUÇÃO PENAL. FALTA GRAVE (FUGA). DIAS REMIDOS. PRECLUSÃO. IMPOSSIBILIDADE. EFEITO LEGAL DA PUNIÇÃO PELA PRÁTICA DE FALTA GRAVE. NOVA REDAÇÃO AO ART. 127 DA LEI N.º 7.210/84. PERDA DE ATÉ 1/3 (UM TERÇO) DOS DIAS REMIDOS. PRINCÍPIO DA RETROATIVIDADE DA LEI PENAL MAIS BENÉFICA. APLICABILIDADE. WRIT CONCEDIDO, DE OFÍCIO, NESSE PONTO.
1. A perda dos dias remidos é decorrência legal, estabelecida no art. 127, da LEP, quando o sentenciado for punido pela prática de falta grave. Cumpre ressaltar que esta Quinta Turma e o Supremo Tribunal Federal pacificaram o entendimento segundo o qual, reconhecido o cometimento de falta grave pelo sentenciado, cabe ao Juízo da Execução decretar a perda dos dias remidos. Precedentes.
2. A decretação da perda dos dias remidos, não obstante posterior ao reconhecimento da falta grave, não preclui e nem transita em julgado, na medida em que é efeito legal decorrente da penalidade administrativa.
3. A partir da vigência da Lei n.º 12.433, de 29 de junho de 2011, que alterou a redação ao art. 127 da Lei de Execuções Penais, a penalidade consistente na perda de dias remidos pelo cometimento de falta grave passa a ter nova disciplina, não mais incidindo sobre a totalidade do tempo remido, mas apenas até o limite de 1/3 (um terço) desse montante, cabendo ao Juízo das Execuções, com certa margem de discricionariedade, aferir o quantum, levando em conta "a natureza, os motivos, as circunstâncias e as conseqüências do fato, bem como a pessoa do faltoso e seu tempo de prisão", consoante o disposto no art. 57 da Lei de Execuções Penais.
4. Ordem denegada. Habeas corpus concedido, de ofício, a fim de, reformando a decisão de primeiro grau, na parte referente à perda total dos dias remidos, determinar o retorno dos autos ao Juízo de Execuções Penais, para que se complete o julgamento, aferindo novo patamar da penalidade, à luz da superveniente disciplina do art. 127 da Lei de Execuções Penais.
(HC n. 182.317/SP, relatora Ministra Laurita Vaz, Quinta Turma, julgado em 19/6/2012, DJe de 28/6/2012.)

Em assim sendo, por seus próprios fundamentos, acrescidos daqueles trazidos nas contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_257',
        nome: 'incompetência medida de segurança ambulatorial',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Trata-se de execução de medida de segurança ambulatorial em que verificou-se que o inimputável reside no município de Natal, cuja competência para a execução penal é da 2ª Vara Regional de Execução Penal.

*Trata-se de execução de medida de segurança ambulatorial em que verificou-se que o inimputável reside no município de **.

Relatados.

Competente para a execução de medida de segurança ambulatorial é o juízo do local onde reside o apenado.

*No caso, o inimputável reside em município integrante da competência da 2ª Vara Regional de Execução Penal.

*No caso, o inimputável reside em município de *.

Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução de medida de segurança ambulatorial de pessoa que reside em outra Comarca, determino a remessa dos autos para a 2ª Vara Regional de Execução Penal.

*Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução de medida de segurança ambulatorial de pessoa que reside em outra Comarca, determino a remessa dos autos para o meio aberto da Comarca de **.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_258',
        nome: 'regressão prov semiaberto não localizado',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.
Progredido o regime para semiaberto desde *** o apenado não cumpre a pena.

Buscada sua intimação, certificou-se que não foi localizado.

Relatados.

A situação relatada nestes autos demonstra a ocorrência de falta grave (fuga), a ser devidamente apurada em audiência de justificação, com a aplicação do due process of law, reclamando, inclusive, exercício do direito de defesa. Ocorre que, tendo o apenado fugido da Unidade Prisional onde se executava regime mais brando, não é concebível que, ao ser recapturado e antes de ser ouvido pelo magistrado, para lá retorne, possibilitando torne ele a escafeder-se frustrando, assim, ad aeternum a execução, sendo necessária, para garantia do Juízo, como ocorre na prisão preventiva, seja recolhido sob regime de maior segurança e vigilância, o que se afina plenamente com o poder geral de cautela, que informa a atividade judicante (LEP, art. 2º, CPP, art. 3º e arts. 311 e segs; e CPP, arts. 798/799).

Tal é, aliás, a posição da reiterada jurisprudência do Supremo Tribunal Federal:

Conforme interpretação dos ars. 50, II, 60 e 118, §§ 1º e 2º, da Lei 7.210/84, o Juízo das Execuções pode decretar, provisoriamente, a regressão de regime prisional do condenado foragido do presídio, sem a necessidade da prévia ouvida do sentenciado, pois essa providência cautelar não obsta a que o réu se defenda quando vier a ser preso, comprovando, se for o caso, que tinha justos motivos para o cometimento da falta grave (RT 763/485).

A jurisprudência desta Corte é no sentido de que a fuga do condenado justifica a regressão cautelar do regime prisional, sendo que a oitiva prévia disposta no art. 118, § 2º, da Lei de Execução Penal somente é indispensável na hipótese de regressão definitiva (RHC 135554 AgR).

No mesmo sentido entende o Superior Tribunal de Justiça, verbis:

HABEAS CORPUS. PROCESSUAL PENAL E EXECUÇÃO PENAL. ATENTADO VIOLENTO AO PUDOR. COMUNICAÇÃO DE PRÁTICA DE FALTA GRAVE. FUGA. REGRESSÃO CAUTELAR DE REGIME. POSSIBILIDADE. OITIVA PRÉVIA. PRESCINDIBILIDADE. ORDEM DE HABEAS CORPUS DENEGADA. 1. É válida a decisão que determina a regressão cautelar do regime de cumprimento de pena pelo Juízo das Execuções Criminais, que reconheceu a prática pelo Apenado de falta disciplinar de natureza grave prevista no art. 50, inciso II, da Lei n.º 7.210/84, uma vez que empreendeu fuga, revelando, segundo a decisão do Magistrado, a intenção de frustar a execução da pena. 2. Esta Corte Superior possui entendimento pacífico no sentido de que, praticada falta grave pelo Condenado, é perfeitamente cabível a regressão cautelar do regime prisional, com fundamento na comunicação dessa infração ao Juízo, sem a oitiva prévia do Apenado, que somente é exigida na regressão definitiva (precedentes). 3. Ordem de habeas corpus denegada. (HC 446.733/SE, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 18/10/2018, DJe 07/11/2018) - grifei.

Isto posto, decreto a regressão provisória, para fechado, do regime prisional imposto ao cumprimento da pena.

Atualize-se o atestado de pena a cumprir, com o lançamento da fuga, caso ainda não inserida no quadro de eventos.

P.I., expeça-se mandado de prisão. Se preso o apenado, designe-se data para audiência de justificação.

Cópia desta decisão servirá como ofício dando ciência ao estabelecimento prisional de seus termos.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_259',
        nome: 'Agravo monitoramento regressão cautelar',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que regrediu-lhe cautelarmente o regime prisional em razão de reiteradas e inúmeras violações ao monitoramento eletrônico, alegando ser incabível a regressão provisória sem a prévia oitiva do apenado (evento **).

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada (evento **).

Relatados.

De início ressalto que a regressão cautelar de regime é ato judicial amparado pelo poder geral de cautela do Juízo da Execução Penal que poderá, assim como ocorre na prisão preventiva, decretar a regressão provisória para qualquer dos regimes mais gravosos quando noticiado o cometimento de falta grave pelo apenado, que ao ser capturado, terá assegurados o direito do contraditório e ampla defesa, na oportunidade da audiência de justificação.

Posto isto observo sem razão o agravante, pois, conforme esclarecido na decisão agravada, praticou ele, em tese, falta grave, conforme dicção do Superior Tribunal de Justiça, verbis:

"De acordo com o entendimento desta Corte, a violação da zona de monitoramento pode configurar falta grave, nos termos dos arts. 50, inciso VI, e 39, inciso V, ambos da Lei de Execução Penal, o que autoriza a regressão de regime e a alteração da data-base para progressão" (AgRg no HC 509.270/SP, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 17/11/2020, DJe 27/11/2020).

Praticada falta grave, é certo, conforme interpretação dos ars. 50, II, 60 e 118, §§ 1º e 2º, da Lei 7.210/84, que o Juízo das Execuções pode decretar, provisoriamente, a regressão de regime prisional, sem a necessidade da prévia ouvida do sentenciado, pois essa providência cautelar não obsta a que o réu se defenda quando vier a ser preso, comprovando, se for o caso, que tinha justos motivos para a conduta, só sendo a sua oitiva prévia indispensável na hipótese de regressão definitiva.

No mesmo sentido mais uma vez trago à colação o entendimento do Superior Tribunal de Justiça, verbis:

HABEAS CORPUS. PROCESSUAL PENAL E EXECUÇÃO PENAL. ATENTADO VIOLENTO AO PUDOR. COMUNICAÇÃO DE PRÁTICA DE FALTA GRAVE. FUGA. REGRESSÃO CAUTELAR DE REGIME. POSSIBILIDADE. OITIVA PRÉVIA. PRESCINDIBILIDADE. ORDEM DE HABEAS CORPUS DENEGADA. 1. É válida a decisão que determina a regressão cautelar do regime de cumprimento de pena pelo Juízo das Execuções Criminais, que reconheceu a prática pelo Apenado de falta disciplinar de natureza grave prevista no art. 50, inciso II, da Lei n.º 7.210/84, uma vez que empreendeu fuga, revelando, segundo a decisão do Magistrado, a intenção de frustar a execução da pena. 2. Esta Corte Superior possui entendimento pacífico no sentido de que, praticada falta grave pelo Condenado, é perfeitamente cabível a regressão cautelar do regime prisional, com fundamento na comunicação dessa infração ao Juízo, sem a oitiva prévia do Apenado, que somente é exigida na regressão definitiva (precedentes). 3. Ordem de habeas corpus denegada. (HC 446.733/SE, Rel. Ministra LAURITA VAZ, SEXTA TURMA, julgado em 18/10/2018, DJe 07/11/2018) – grifei.

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos, acrescidos das bem lançadas contrarrazções ministeriais.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_260',
        nome: 'acórdão cumprimento sem trânsito',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que peticionou a Defensoria Pública requerendo a retificação do atestado de pena conforme Acórdão em Agravo em Execução Penal acostado no evento **, que deferiu a *progressão de regime *o livramento condicional* ao penitente, alegando que o Recurso Especial interposto pelo Ministério Público não é dotado de efeito suspensivo.

Anoto que fora certificado que o referido agravo ainda não transitou em julgado e que o Recurso Especial encontra-se remetido para a Vice-Presidência, em grau de admissibilidade (evento **).

Relatados.

De logo, tenho que, interposto Recurso Especial e ainda pendente de julgamento, não há que se falar em trânsito em julgado do Acórdão modificador para justificar a atualização do Atestado de penas.

Nesse sentido decidiu a Câmara Criminal do TJRN:

CONSTITUCIONAL E PROCESSO PENAL. HABEAS CORPUS. EXECUÇÃO PENAL. PLEITO DE CUMPRIMENTO DE ACÓRDÃO ANTERIORMENTE PROFERIDO EM AGRAVO DE EXECUÇÃO PENAL. TJRN QUE DEFERIU A DIFERENCIAÇÃO ENTRE AS FRAÇÕES APLICADAS ENTRE CRIME COMUM E CRIME HEDIONDO. ALEGAÇÃO DE SUPOSTO CONSTRANGIMENTO ILEGAL DIANTE DO EXCESSO DE PRAZO PARA O CUMPRIMENTO DE ACÓRDÃO. INOCORRÊNCIA. ACÓRDÃO NÃO TRANSITADO EM JULGADO. RECURSO ESPECIAL PROTOCOLADO PELO MINISTÉRIO PÚBLICO. AUTORIDADE COATORA QUE EXPEDIU OFÍCIO PARA OBTER INFORMAÇÕES QUANTO AOS EFEITOS DO RECURSO ESPECIAL INTERPOSTO. REGULARIDADE NO TRÂMITE PROCESSUAL. PRINCÍPIOS DA RAZOABILIDADE E PROPORCIONALIDADE. CONSTRANGIMENTO ILEGAL NÃO EVIDENCIADO. ORDEM CONHECIDA E DENEGADA. CONSONÂNCIA COM O PARECER DA 9ª PROCURADORIA DE JUSTIÇA. (Habeas Corpus nº 0814179-05.2022.8.20.0000, rel. Des. Gilson Barbosa, j. un. em 14.12.2022).

Isto posto, indefiro o pedido do evento 98. P. I. Verificada a ocorrência do trânsito em julgado do referido Acórdão, voltem-me conclusos.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_261',
        nome: 'Agravo remição trabalho menos que 8 hs',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que converteu sua carga horária de trabalho, inferior ao mínimo legal exigido, de forma a possibilitar o cálculo remicional, dividindo as horas de trabalho por oito, seguindo-se o padrão normal de todos os demais presos trabalhadores.

O Ministério Público contrarrazoou pugnando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois a divisão da carga horária trabalhada por oito seguiu o padrão de cálculo de todos os demais presos trabalhadores, evitando tratamento não isonômico entre apenados na mesma situação, não discrepando do que preconiza a Lei de Execução Penal.

Com relação à jornada inferior a 6 (seis) horas diárias, o primeiro requisito a se observar diz respeito à aplicação da situação excepcional ao caso, sendo indispensável a vaticinação de serviço de conservação e/ou manutenção do estabelecimento penal como objeto da relação laboral e, coerentemente, a designação expressa pela administração penitenciária de que o encarcerado estaria incluído em regime de horário especial, o que não foi o caso dos autos.

Essa é a orientação prevista no RHC 217297 / MG - MINAS GERAIS de relatoria da Min. Cármen Lúcia, de 08/07/2022 e AgRg no HC n. 673.932/RS, de relatoria do Min. Rogerio Schietti Cruz, julgado em 17/8/2021.

Relembro, na pacífica jurisprudência do Superior Tribunal de Justiça, carga horária inferior a 6 (seis) horas nem deveria ser computada.

Nesse sentido:

AGRAVO REGIMENTAL DO HABEAS CORPUS. EXECUÇÃO PENAL. REMIÇÃO DA PENA PELO TRABALHO. CÔMPUTO EM HORAS. IMPOSSIBILIDADE, SALVO AS HORAS EXCEDENTES À OITAVA HORA DIÁRIA. AGRAVO NÃO PROVIDO. 1. O Tribunal de origem adotou a tese da defesa, no sentido de que "é certo que os dias remidos devem ser considerados como pena efetivamente cumprida, posto que esse entendimento é o que melhor atende ao espírito da legislação vigente (art. 128, da Lei de Execução Penal, com a redação dada pela Lei Federal n. 12.433, de 2011)".2. Ao verificar a situação dos autos, registrou o acórdão que não houve divergência entre as partes sobre o método aplicado para a realização do cálculo, uma vez que a remição concedida fora considerada como pena cumprida, nos termos do art. 128 da LEP. A pretensão de desconstituir a conclusão da instância de origem demandaria reexame de fatos e provas, o que é impossível na via processual eleita. 3. O Superior Tribunal de Justiça firmou entendimento no sentido de que a remição da pena pelo trabalho, nos termos do art. 33 c/c art. 126, § 1º, da LEP, realizada à razão de 1 (um) dia de pena a cada 3 (três) dias de trabalho, deve ser calculada a partir dos dias efetivamente trabalhados e não da soma das horas de labor. 4. Deve-se, ainda, respeitar a jornada diária mínima de 6 (seis) horas e não excedente a 8 (oito) horas de trabalho, sendo certo que apenas as horas trabalhadas após a jornada máxima legal poderão ser somadas a fim de que, atingindo 6 (seis) horas, sejam computadas como 1 (um) dia para fins de remição. 5. Agravo regimental a que se nega provimento.(AgRg no HC n. 437.846/SP, relator Ministro Ribeiro Dantas, Quinta Turma, julgado em 13/4/2021, DJe de 16/4/2021.) - grifei.

AGRAVO REGIMENTAL. RECURSO ESPECIAL. EXECUÇÃO PENAL. REMISSÃO DE PENA. CRITÉRIO DE CÁLCULO DO DIA TRABALHADO. JORNADA NÃO INFERIOR A 6 NEM SUPERIOR A 8 HORAS. CÔMPUTO DA REMIÇÃO EM HORAS. IMPOSSIBILIDADE. RECURSO DESPROVIDO.1. A remissão da pena pelo trabalho, nos termos do art. 33 c/c 126, § 1º, da LEP, exige jornada diária não inferior a seis nem superior a oito horas, contabilizando-se a quantidade de dias efetivamente trabalhados e não o simples somatório de horas. Precedentes. 2. Agravo regimental a que se nega provimento. (AgRg no REsp n. 1.635.766/MG, relator Ministro Jorge Mussi, Quinta Turma, julgado em 16/5/2017, DJe de 24/5/2017.) - grifei.

EMBARGOS DE DECLARAÇÃO NO AGRAVO REGIMENTAL NOS EMBARGOS DE DECLARAÇÃO NO AGRAVO EM RECURSO ESPECIAL. RECEBIMENTO COMO AGRAVO REGIMENTAL. AUSÊNCIA DOS VÍCIOS DO ART. 619 DO CPP. EXECUÇÃO PENAL. REMIÇÃO DA PENA. CÁLCULO COM BASE NOS DIAS TRABALHADOS. OMISSÃO DO ESTADO. REMIÇÃO FICTA. NÃO CABIMENTO. INCIDÊNCIA DA SÚMULA N. 83 DO STJ. AGRAVO REGIMENTAL DESPROVIDO. 1. A remição da pena pelo trabalho se dá por dias trabalhados, não por horas, exigindo-se, em relação a cada dia, o mínimo de 6 e o máximo de 8 horas, nos termos dos arts. 33 e 126, § 1º, da Lei de Execução Penal. 2. Para a remição, deve-se considerar o trabalho efetivamente cumprido. Assim, a omissão do Estado em impossibilitar a realização de atividades laborais não autoriza a remição ficta ou automática. 3. Não se conhece de recurso especial pela divergência, quando a orientação do STJ se firmou no mesmo sentido da decisão recorrida (Súmula n. 83 do STJ). 4. Embargos de declaração recebidos como agravo regimental, ao qual se nega provimento. (EDcl no AgRg nos EDcl no AREsp 1697170/SP, Rel. Ministro JOÃO OTÁVIO DE NORONHA, QUINTA TURMA, julgado em 23/ 03/2021, DJe 29/03/2021).

Assim, a decisão agravada na verdade beneficiou o apenado, reconhecendo a sua disciplina e responsabilidade pelas horas trabalhadas, fazendo cumprir o propósito do instituto que é prepará-lo para a reinserção social e não pura e simplesmente reduzir a sua pena.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_262',
        nome: 'Retificação hediondo + comum',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o apenado pugnou pela retificação da guia, com fixação de patamares diversos para atingimento do requisito objetivo para progressão de regime, conforme o tipo de delito praticado.

Interveio o Ministério Público, opinando pelo deferimento.

Relatados.

Dada a mudança da jurisprudência da Câmara Criminal do Tribunal de Justiça do Rio Grande do Norte e do Superior Tribunal de Justiça, cabe deferimento ao pedido.

Nesse sentido:

HABEAS CORPUS. EXECUÇÃO PENAL. PROGRESSÃO DE REGIME. APENADO REINCIDENTE EM CRIME HEDIONDO OU EQUIPARADO. CONDIÇÃO PESSOAL NA EXECUÇÃO DA PENA. ALTERAÇÕES PROMOVIDAS PELO PACOTE ANTICRIME. ESPECIFICAÇÃO DA NATUREZA DO DELITO. IMPOSSIBILIDADE DE APLICAÇÃO INDISTINTA DA REINCIDÊNCIA. HABEAS PARCIALMENTE CONCEDIDO.

1. Consoante a jurisprudência consolidada do Superior Tribunal de Justiça, "[o] Juízo da execução penal não está adstrito ao emprego dado pelo Juízo do conhecimento aos registros criminais que ensejariam a reincidência do apenado, de modo que, a despeito de tal anotação não haver sido reconhecida em todas as condenações do apenado, nada impede seu uso para avaliação das condições pessoais do sentenciado no que tange à concessão de benefícios executórios como, por exemplo, o livramento condicional" (AgRg no REsp n. 1.721.638/RO, Rel. Ministro Rogerio Schietti, 6ª T., DJe 29/10/2019). Precedentes: AgRg no HC n. 476.422/MG; HC n. 378.985/ES; HC n. 379.007/RS; e AgRg no HC n. 511.766/MG.

2. Embora amplamente reconhecida a reincidência, a título de condição pessoal, como instituto próprio da execução da pena, sua aplicação hodierna requer a observação das recentes alterações legislativas, promovidas pela Lei n. 13.964/2019, quanto aos patamares exigidos para auferição da progressão de regime.

3. O Pacote Anticrime implementou um cenário de maior complexidade quanto à recidiva do reeducando, visto que, agora, não se trata apenas do simples exame da natureza do delito (se comum ou hediondo) e da existência de registros aptos a caracterizarem a reincidência (genérica) do apenado, mas sim de uma incursão mais apurada no exame dos antecedentes criminais do indivíduo encarcerado, passando a ganhar ampla relevância se se trata de crime cometido com ou sem violência a pessoa ou grave ameaça, crime hediondo ou equiparado ou, ainda, crime hediondo ou equiparado com resultado morte.

4. Na hipótese, o apenado cumpre pena por roubo circunstanciado e outros dois delitos de tráfico de drogas, ou seja, percebe-se que o reeducando é, então, reincidente específico na prática de crime hediondo ou equiparado, porém, reincidente genérico quanto a delitos cometidos mediante violência a pessoa ou grave ameaça. Por consequência, quanto aos crimes de tráfico de drogas, considerado o caráter pessoal da reincidência, é cogente o cumprimento de 60% de ambas as penas impostas, visto que se trata de reincidência de mesma natureza - a saber, reincidência em crime hediondo ou equiparado.

Todavia, tal lógica não se aplica ao crime comum, visto que o sentenciado é primário na prática de crime com violência a pessoa ou grave ameaça, de modo que incide na espécie o lapso previsto no art. 112, III, da Lei de Execução Penal, o qual exige o cumprimento tão-somente de 25% da pena para que se perquira a progressão a regime menos gravoso.

5. Habeas corpus parcialmente concedido determinar a retificação do cálculo de progressão da pena relativo à condenação do paciente pelo crime comum, nos termos da conclusão do voto.

(HC n. 654.870/MG, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 20/9/2022, DJe de 30/9/2022.)

Em assim sendo, mando retificar a GEP, fixando, para o atingimento do requisito objetivo para progressão de regime, os patamares de **% para a pena pelo crime hedindo e ** para o crime comum (praticado com violência ou grave ameaça..

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_263',
        nome: 'Acordão cumprimento crimes anteriores',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de acórdão de agravo a execução criminal que mandou fixar patamares individualizados por delito às condenações impostas ao apenado.

Relatados.

Tratando-se de condenações anteriores a janeiro de 2020 e não sendo o apenado reincidente em crimes hediondos, é de se fixar os patamares previstos na anterior redação do art. 112 da Lei de Execução Penal, c/c Lei dos Crimes hediondos.

Isto posto, mando fixar em 2/5 da pena imposta pelo crime hediondo e 1/6 para a fixada para o crime comum como requisito objetivo para progressão de regime.

P.R.I.

 $juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 12 parte 1 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE12_PARTE1);

// Lote 12 - Parte 2: Modelos 264-271 (continuando 276-300.txt)
export const MODELOS_SEEU_LOTE12_PARTE2: ModeloSEEU[] = [
    {
        id: 'seeu_264',
        nome: 'Saída temporária indefere genérica',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cuida-se de pedido de saída temporária formulado pelo apenado.

O Ministério Público opinou pelo deferimento.

É o que importa relatar. Fundamento e decido.

O art. 122 da Lei de Execução Penal prevê que os acusados que cumprem pena em regime semiaberto poderão obter autorização para saída temporária do estabelecimento, sem vigilância direta, nos casos previstos nos seus incisos.

Este juízo publicou a portaria 02/2022, em 18.11.2022, regulamentando a saída temporária para o período natalino deste ano, com regras genéricas aplicadas a todos os apenados do regime semiaberto.

Assim, não há o que decidir no caso, bastando ao apenado verificar se sua situação se adequa ao previsto naquela portaria e cumprir conforme ali foi disposto.

Isto posto, INDEFIRO o pedido individual de saída temporária.

Publique-se. Registre-se. Intimem-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_265',
        nome: 'Horário mudança atribuição',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução penal, em que o apenado cumpre a pena no regime semiaberto, com uso da tornozeleira eletrônica, tendo requerido autorização para que o horário de recolhimento domiciliar seja estendido para **, por ** (motivo).

Interveio o Ministério Público, opinando pelo in*deferimento.

Relatados.

A modificação do horário de recolhimento domiicilar para apenados monitorados, a fim de participar de qualquer atividade que seja moral e legalmente compatível ao cumprimento da pena, com indicação do local e horário onde será realizado, é de atribuição da Central de Monitoramento Eletrônico - CEME, conforme disciplina Portaria nº 02/ 2016 deste juízo.

Isto posto, não conheço do pedido no evento **.

Dê-se ciência à Defesa, bem como a Central de Monitoramento Eletrônico - CEME. P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_266',
        nome: 'Semiaberto cumprimento outro presídio',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em regime semiaberto, em que o apenado peticionou alegando que a Central de Monitoramento não dispõe de tornozeleiras eletrônicas no momento e que não tem condições financeiras de deslocar-se até a Penitenciária Estadual de Alcaçuz para recolhimento todas as noites, requerendo que seu recolhimento se dê no Centro de Recebimento e Triagem ou na Cadeia Pública de Natal.

Relatados.

O cumprimento do regime semiaberto em nosso estado se dá por meio de recolhimento noturno no presídio ou em prisão domiciliar monitorado eletronicamente, de acordo com a disponibilidade de tornozeleiras eletrônicas.

Dito de outra forma, em não havendo disponibilidade de equipamentos de monitoramento o apenado deve recolher-se no presídio designado pela SEAP/RN para o cumprimento do regime semiaberto;

Não tem, a propósito, este juízo competência para indicar a unidade prisional onde a pena deve ser cumprida e que não seja aquele que o estado designou.

Isto posto, não conheço do pedido.

P. I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_267',
        nome: 'Saída temporária fechado indefere',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cuida-se de pedido de saída temporária formulado pelo apenado.

O Ministério Público opinou desfavoravelmente ao deferimento.

É o que importa relatar. Fundamento e decido.

O art. 122 da Lei de Execução Penal prevê que os acusados que cumprem pena em regime semiaberto poderão obter autorização para saída temporária do estabelecimento, sem vigilância direta, nos casos previstos nos seus incisos.

Aqui a pena é cumprida no regime fechado, pelo que falta ao apenado o requisito objetivo para o benefício.

Nesse sentido decidiu o Superior Tribunal de Justiça:

O apenado que cumpre pena em regime fechado não preenche os requisitos estatuídos nos arts. 122 e seguintes da Lei de Execução Penal, de maneira que não faz jus à concessão de saídas temporárias. (AgRg no HC n. 318.388/SC, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 16/6/2015, DJe de 26/6/2015.)

O regime fechado para o cumprimento de pena mostra-se incompatível com o benefício de saída temporária, no termos do artigo 122 da LEP (HC n. 213.575/MG, relatora Ministra Maria Thereza de Assis Moura, Sexta Turma, julgado em 11/10/2011, DJe de 3/11/2011.)

HABEAS CORPUS. EXECUÇÃO DA PENA. (...). SAÍDAS TEMPORÁRIAS. BENESSE INCOMPATÍVEL COM O REGIME FECHADO. ILEGALIDADE NÃO CONFIGURADA. ORDEM DENEGADA. (...) 4. Mantido o modo fechado, mostra-se inviável o atendimento do pleito referente às saídas temporárias, visto que tal benefício é incompatível com o regime mais severo, a teor do art. 122 da LEP. Precedente. 5. Ordem denegada. (HC n. 114.088/RS, relator Ministro Jorge Mussi, Quinta Turma, julgado em 4/5/2010, DJe de 21/6/2010.)

Isto posto, INDEFIRO o pedido de saída temporária.

Publique-se. Registre-se. Intimem-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_268',
        nome: 'Agravo unificação PPL em PRD',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que unificou penas a ele impostas e fixou o regime fechado para cumprimento.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme pacífica e recente jurisprudência do Superior Tribunal de Justiça, sobrevindo condenação a pena retritiva de direitos para quem cumpria pena privativa de liberdade, sejam regime fechado ou semiaberto, converte-se aquela em sanção corporal, unificando-se as reprimendas (AgRg no REsp n. 1.960.148/MG, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 17/5/2022, DJe de 23/5/2022.).

No mesmo sentido:

AGRAVO REGIMENTAL NO HABEAS CORPUS. UNIFICAÇÃO DE PENAS. RECLUSÃO E DETENÇÃO. SUFICIÊNCIA DA FUNDAMENTAÇÃO. ENTENDIMENTO DO STJ. DECISÃO MANTIDA.
1. É inadmissível habeas corpus em substituição ao recurso próprio, também à revisão criminal, impondo-se o não conhecimento da impetração, salvo se verificada flagrante ilegalidade no ato judicial impugnado apta a ensejar a concessão da ordem de ofício.
2. "Sobrevindo condenação que impossibilite o cumprimento simultâneo das penas, o que ocorre nos casos de condenações em regime fechado ou semiaberto, deve-se proceder à conversão da sanção restritiva de direitos em privativa de liberdade, unificando-se as penas" (AgRg no REsp n. 1.724.650/MG).
3. Mantém-se integralmente a decisão agravada cujos fundamentos estão em conformidade com o entendimento do STJ sobre a matéria suscitada.
4. Agravo regimental desprovido. (AgRg no HC n. 697.843/SC, relator Ministro João Otávio de Noronha, Quinta Turma, julgado em 19/4/2022, DJe de 25/4/2022.)

EXECUÇÃO PENAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. CUMPRIMENTO DE PENA RESTRITIVA DE DIREITOS. SUPERVENIÊNCIA DE CONDENAÇÃO POR PENA PRIVATIVA DE LIBERDADE EM REGIME FECHADO. INCOMPATIBILIDADE DE CUMPRIMENTO SIMULTÂNEO. RECONVERSÃO DA PENA RESTRITIVA DE DIREITOS EM PRIVATIVA DE LIBERDADE. POSSIBILIDADE. PRECEDENTES. AUSÊNCIA DE FLAGRANTE ILEGALIDADE. HABEAS CORPUS NÃO CONHECIDO.
I - A Terceira Seção desta Corte, seguindo entendimento firmado pela Primeira Turma do col. Pretório Excelso, sedimentou orientação no sentido de não admitir habeas corpus substitutivo do recurso adequado, situação que implica o não conhecimento da impetração, ressalvados casos excepcionais em que, configurada flagrante ilegalidade apta a gerar constrangimento ilegal, seja possível a concessão da ordem de ofício.
II - Esta Corte Superior de Justiça pacificou o entendimento no sentido de que, no caso de nova condenação a penas restritivas de direitos a quem esteja cumprindo pena privativa de liberdade em regime fechado ou semiaberto, é inviável a suspensão do cumprimento daquelas - ou a execução simultânea das penas. O mesmo se dá quando o agente estiver cumprindo pena restritiva de direitos e lhe sobrevem nova condenação à pena privativa de liberdade. Nesses casos, nos termos do art. 111 da Lei de Execução Penal, deve-se proceder à unificação das penas, não sendo aplicável o art. 76 do Código Penal. Precedentes.
III - Não se vislumbra, na espécie, constrangimento ilegal apto para a concessão da ordem, de ofício. Habeas corpus não conhecido. (HC n. 624.161/MG, relator Ministro Felix Fischer, Quinta Turma, julgado em 9/12/2020, DJe de 15/12/2020).
Em assim sendo, por seus próprios fundamentos, acrescidos das contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_269',
        nome: 'Agravo unificação PRD em PPL',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que unificou penas a ele impostas e fixou o regime fechado para cumprimento.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme tese firmada no Tema Repetitivo nº 1106 do Superior Tribunal de Justiça, "Sobrevindo condenação por pena privativa de liberdade no curso da execução de pena restritiva de direitos, as penas serão objeto de unificação, com a reconversão da pena alternativa em privativa de liberdade, ressalvada a possibilidade de cumprimento simultâneo aos apenados em regime aberto e vedada a unificação automática nos casos em que a condenação substituída por pena alternativa é superveniente." (REsp n. 1.918.287/MG, relator Ministro Sebastião Reis Júnior, relatora para acórdão Ministra Laurita Vaz, Terceira Seção, julgado em 27/4/2022, DJe de 28/6/2022).

No mesmo sentido:

AGRAVO REGIMENTAL EM RECURSO ESPECIAL. EXECUÇÃO PENAL. ARTS. 111, CAPUT E PARÁGRAFO ÚNICO, E 181, § 1º, E, AMBOS DA LEI N. 7.210/1984; E 44, § 5°, E 76, AMBOS DO CP. CUMPRIMENTO DE PENA PRIVATIVA DE LIBERDADE EM REGIME SEMIABERTO. CONDENAÇÃO A PENAS RESTRITIVAS DE DIREITOS. SUPERVENIÊNCIA. INCOMPATIBILIDADE DE EXECUÇÃO SIMULTÂNEA OU DE SUSPENSÃO. PRECEDENTES DO STJ. CONVERSÃO DAS PENAS RESTRITIVAS DE DIREITOS EM SANÇÃO CORPORAL E UNIFICAÇÃO DAS REPRIMENDAS. POSSIBILIDADE. INTERPRETAÇÃO DOS ARTS. 181 E 111 DA LEP. TEMA AFETADO À TERCEIRA SEÇÃO (1.106). NÃO APLICAÇÃO DO QUANTO DISPOSTO NO ART. 1.036, § 1º, PARTE FINAL, DO CPC.
1. A matéria está afetada à Terceira Seção (Tema Repetitivo n. 1.106); todavia, foi determinado que o disposto na parte final do § 1º do art. 1.036 do Código de Processo Civil, que trata da suspensão do trâmite dos processos pendentes, não se aplica à referida matéria jurídica.
2. No âmbito desta Corte Superior, em que pese a Terceira Seção, em 8/6/2021, tenha aprovado, por unanimidade, a proposta de afetação do julgamento do REsp n. 1.890.343/SC e do REsp n. 1.890.344/RS à sistemática dos recursos repetitivos - Tema Repetitivo n. 1098, cuja controvérsia foi delimitada como a "(im)possibilidade de acordo de não persecução penal posteriormente ao recebimento da denúncia" -, o referido órgão colegiado, acolhendo proposta do Relator, decidiu não determinar a suspensão do trâmite dos processos pendentes que versem sobre a matéria jurídica em questão (AgRg no AREsp n. 1.995.675/MS, Ministro Reynaldo Soares Da Fonseca, Quinta Turma, DJe 18/3/2012).
3. O posicionamento jurisprudencial manifestado na decisão agravada ainda é aplicado por ambas as Turmas que compõem a Terceira Seção desta Corte Superior.
4. Agravo regimental desprovido.
(AgRg no REsp n. 1.960.148/MG, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 17/5/2022, DJe de 23/5/2022.)

AGRAVO REGIMENTAL NO HABEAS CORPUS. UNIFICAÇÃO DE PENAS. RECLUSÃO E DETENÇÃO. SUFICIÊNCIA DA FUNDAMENTAÇÃO. ENTENDIMENTO DO STJ. DECISÃO MANTIDA.
1. É inadmissível habeas corpus em substituição ao recurso próprio, também à revisão criminal, impondo-se o não conhecimento da impetração, salvo se verificada flagrante ilegalidade no ato judicial impugnado apta a ensejar a concessão da ordem de ofício.
2. "Sobrevindo condenação que impossibilite o cumprimento simultâneo das penas, o que ocorre nos casos de condenações em regime fechado ou semiaberto, deve-se proceder à conversão da sanção restritiva de direitos em privativa de liberdade, unificando-se as penas" (AgRg no REsp n. 1.724.650/MG).
3. Mantém-se integralmente a decisão agravada cujos fundamentos estão em conformidade com o entendimento do STJ sobre a matéria suscitada.
4. Agravo regimental desprovido. (AgRg no HC n. 697.843/SC, relator Ministro João Otávio de Noronha, Quinta Turma, julgado em 19/4/2022, DJe de 25/4/2022.)

EXECUÇÃO PENAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. CUMPRIMENTO DE PENA RESTRITIVA DE DIREITOS. SUPERVENIÊNCIA DE CONDENAÇÃO POR PENA PRIVATIVA DE LIBERDADE EM REGIME FECHADO. INCOMPATIBILIDADE DE CUMPRIMENTO SIMULTÂNEO. RECONVERSÃO DA PENA RESTRITIVA DE DIREITOS EM PRIVATIVA DE LIBERDADE. POSSIBILIDADE. PRECEDENTES. AUSÊNCIA DE FLAGRANTE ILEGALIDADE. HABEAS CORPUS NÃO CONHECIDO.
I - A Terceira Seção desta Corte, seguindo entendimento firmado pela Primeira Turma do col. Pretório Excelso, sedimentou orientação no sentido de não admitir habeas corpus substitutivo do recurso adequado, situação que implica o não conhecimento da impetração, ressalvados casos excepcionais em que, configurada flagrante ilegalidade apta a gerar constrangimento ilegal, seja possível a concessão da ordem de ofício.
II - Esta Corte Superior de Justiça pacificou o entendimento no sentido de que, no caso de nova condenação a penas restritivas de direitos a quem esteja cumprindo pena privativa de liberdade em regime fechado ou semiaberto, é inviável a suspensão do cumprimento daquelas - ou a execução simultânea das penas. O mesmo se dá quando o agente estiver cumprindo pena restritiva de direitos e lhe sobrevem nova condenação à pena privativa de liberdade. Nesses casos, nos termos do art. 111 da Lei de Execução Penal, deve-se proceder à unificação das penas, não sendo aplicável o art. 76 do Código Penal. Precedentes.
III - Não se vislumbra, na espécie, constrangimento ilegal apto para a concessão da ordem, de ofício. Habeas corpus não conhecido. (HC n. 624.161/MG, relator Ministro Felix Fischer, Quinta Turma, julgado em 9/12/2020, DJe de 15/12/2020).
Em assim sendo, por seus próprios fundamentos, acrescidos das contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_270',
        nome: 'Agravo remição enem parcial',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade em regime fechado em que o apenado requereu concessão de remição por estudo (evento 218), em razão da aprovação parcial da realização do ENEM no ano de 202*.

O pedido de remição foi indeferido por este juízo (evento **) e, irresignado, o apenado agravou da decisão.

Instado a se manifestar o Ministério Público opinou pelo conhecimento e provimento do recurso, para que seja reconhecido o direito à remição parcial ao apenado pelo estudo.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada, a recomendação do CNJ apenas admite a remição nos casos de aprovação nos exames nacionais.

O instituto da remição previsto no art. 126 da Lei de Execuções Penais constitui um forte instrumento para reeducação dos encarcerados, promovendo o impedimento à ociosidade perniciosa, servindo de incentivo para que o sentenciado desenvolva uma atividade laborterápica rotineira com notável finalidade à ressocialização, tendo também como objetivo incentivar o bom comportamento dos apenados, em harmonia com diretrizes internacionais de direitos humanos, das quais o Brasil é signatário.

No que concerne especificamente ao estudo em sede de execução penal, anteriormente disciplinado pelo enunciado da Súmula Nº 341 do STJ e que passou a ter altivez consubstanciada com a Lei Nº 12.433/2011, doutrinadores de modo geral concordam que não raras vezes poderá ter efeitos melhores e inclusive mais sensíveis para o futuro dos encarcerados em benefício de toda a sociedade que a forma singular anteriormente prevista, nos dizeres de Renato Marcão:

“Tanto quanto possível, em razão de seus inegáveis benefícios, o aprimoramento cultural por meio do estudo deve constituir um objetivo a ser alcançado na execução penal, e um grande estímulo na busca deste ideal é a possibilidade de remir a pena privativa de liberdade pelo estudo”.

Segundo Maria da Graça Morais Dias, "trata-se de um instituto completo, ‘pois reeduca o delinquente, prepara-o para sua reincorporação à sociedade, proporciona-lhe meios para reabilitar-se diante de si mesmo e da sociedade, disciplina sua vontade, favorece a sua família e sobretudo abrevia a condenação, condicionando esta ao próprio esforço do apenado’”.

Disciplinada a permissividade da remição por estudo com as reformas trazidas com a Lei Nº 12.433/2011, a jurisprudência ainda claudica com relação à utilização dos exames nacionais com a finalidade de obter a certificação de níveis ensino, vindo o Conselho Nacional de Justiça a disciplinar a matéria, com a Resolução Nº 391/2021, aprimorando seu próprio entendimento anterior.

De acordo com a norma do instituto regulador do Poder Judiciário, no parágrafo único do art. 3º:

“Em caso de a pessoa privada de liberdade não estar vinculada a atividades regulares de ensino no interior da unidade e realizar estudos por conta própria, ou com acompanhamento pedagógico não-escolar, logrando, com isso, obter aprovação nos exames que certificam a conclusão do ensino fundamental ou médio (Encceja ou outros) e aprovação no Exame Nacional do Ensino Médio - Enem, será considerada como base de cálculo para fins de cômputo das horas visando à remição da pena 50% (cinquenta por cento) da carga horária definida legalmente para cada nível de ensino, fundamental ou médio, no montante de 1.600 (mil e seiscentas) horas para os anos finais do ensino fundamental e 1.200 (mil e duzentas) horas para o ensino médio ou educação profissional técnica de nível médio, conforme o art. 4o da Resolução no 03/2010 do Conselho Nacional de Educação, acrescida de 1/3 (um terço) por conclusão de nível de educação, a fim de se dar plena aplicação ao disposto no art. 126, § 5o, da LEP”.

Percebe-se nitidamente que tais normas preveem condições específicas para a concessão de remição por estudo nas hipóteses de realização do ENEM, ENCCEJA ou outros, quais sejam: (a) realização de estudos por conta própria e (b) certificação de conclusão do ensino fundamental ou médio.

Cristalina é a redação do dispositivo sobre a essencialidade destes dois requisitos, sendo notável a mens legis nesses casos, posto que o apenado realizando estudos por conta própria não teria como mensurar a frequência exigida pela via tradicional, sendo expressa também a exigência não da realização do exame, e sim, da pretensão de obtenção da certificação do nível de ensino.

Tanto o é, que, em julgados recentes, o Superior Tribunal de Justiça tem consolidado o entendimento pela impossibilidade de concessão de remição nos casos em que o apenado já possui o mencionado diploma pretendido, sendo exemplos:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. REMIÇÃO. APENADO JÁ APROVADO NO EXAME NACIONAL DE ENSINO MÉDIO - ENEM. DUPLICIDADE DE BENEFÍCIO NÃO ACEITA. AGRAVO REGIMENTAL DESPROVIDO. 1. Pacífica a jurisprudência desta Corte quanto à impossibilidade de conceder o benefício da remição da pena em duplicidade, por aprovações sucessivas no ENEM. 2. Agravo regimental desprovido. (AgRg no HC n. 734.881/SC, relator Ministro Joel Ilan Paciornik, Quinta Turma, julgado em 9/8/2022, DJe de 15/8/2022.)

AGRAVO REGIMENTAL EM RECURSO ESPECIAL. EXECUÇÃO PENAL. VIOLAÇÃO DO ART. 126 DA LEP. PLEITO DE RECONHECIMENTO DA REMIÇÃO PELO ESTUDO. APROVAÇÃO NO ENEM (EXAME NACIONAL DO ENSINO MÉDIO) APÓS A CONCLUSÃO DO ENSINO MÉDIO. SENTENCIADO PORTADOR DE DIPLOMA DE CURSO SUPERIOR. IMPOSSIBILIDADE DE CONCESSÃO DA BENESSE. 1. Visando à ressocialização do apenado e tendo como base o direito fundamental à Educação, o Conselho Nacional de Justiça (CNJ), por meio da Recomendação n. 44/2013 - posteriormente substituída pela Resolução n. 391/2021 -, estabeleceu a possibilidade de remição de pena à pessoa privada de liberdade, que, por meio de estudos por conta própria, vier a ser aprovada nos exames que certificam a conclusão do ensino fundamental ou médio (ENCCEJA ou outros) e aprovação no Exame Nacional do Ensino Médio - ENEM. 2. Com efeito, o propósito da remição pelo estudo não é simplesmente diminuir o tempo de encarceramento, mas, sobretudo, fomentar a aquisição de novos conhecimentos e ferramentais educacionais por parte do apenado, de modo a facilitar a sua reintegração social. 3. No caso, tendo o apenado concluído o ensino médio e superior antes do início do cumprimento da pena, incabível a remição penal por aprovação no Exame Nacional do Ensino Médio, visto que tal situação destoa do escopo da norma. 4. Agravo regimental improvido. (AgRg no REsp n. 1.979.591/SP, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 19/4/2022, DJe de 25/4/2022.).

Por mais humanista ou expansivo que seja o entendimento, a remição deve demonstrar que exerceu algum papel vinculado à sua prorpia finalidade, de reabilitação e reintegração social das pessoas em condição de privação de liberdade ou nos dizeres de Guilherme Nucci: “o Superior Tribunal de Justiça tem sido benevolente – e com razão - à obtenção de remição pelos sentenciados, desde que apresentem algum ganho no seu processo de reeducação”.

Nessa perspectiva, este juízo tem se mantido firme no entendimento da interpretação literal e expressa da Recomendação do CNJ e da jurisprudência menos hesitante do STJ, em sentido diverso aos entendimentos jurisprudenciais a que se referem as partes, forte na acepção de que a remição por estudo no caso de realização de exames apenas é possível quando acompanhada da certificação de conclusão dos ensinos fundamental ou médio, devendo também o apenado demonstrar o grau de estudo anterior à realização do exame, não havendo como adequar o pleito de remição parcial em tais situações.

Ora, caso assim não fosse, bastava o apenado prestar os exames todos os anos deixando em branco quaisquer das disciplinas que jamais seria aprovado e teria direito à remição parcial anualmente, burlando a finalidade da norma, posto que o princípio fulcral inerente ao instituto não é a redução da pena, e sim, o aprimoramento cultural e social do reeducando.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_271',
        nome: 'Expedição de certidão narrativa',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Visto, etc.

Trata-se de execução penal em que foi pedida, via Defensoria Pública, a expedição de certidão narrativa do processo (evento *) , sem cobrança de custas (evento *), com a finalidade de solicitar auxílio reclusão em nome da filha**esposa do apenado.

Anoto que a Defensoria Pública informou que o INSS passou a exigir o documento (certidão narrativa) para a concessão do auxílio reclusão, não mais se contentando apenas com o atestado de pena, que anteriormente era utilizado nos pedidos da espécie.

Registro que o penitente está custodiado na ** cumprindo pena no regime fechado, conforme consulta SIAPEN desta data.

Relatados.

O pedido realizado pela Defensoria Pública visa resguardar interesse de **menor de idade, filha do apenado**, que, na qualidade de segurado do sistema previdenciário brasileiro, faz jus ao auxílio reclusão, conforme dispositivo constitucional do art. 201, IV, da Carta Magna, in verbis:

Art. 201. A previdência social será organizada sob a forma do Regime Geral de Previdência Social, de caráter contributivo e de filiação obrigatória, observados critérios que preservem o equilíbrio financeiro e atuarial, e atenderá, na forma da lei, a:

(...)

IV - salário-família e auxílio reclusão para os dependentes dos segurados de baixa renda;

(...) (grifei)

De outra banda, o Código de Normas da Corregedoria Geral de Justiça do Estado do Rio Grande do Norte prevê que:

Art. 169-A. Não será cobrada taxa judiciária pela extração e pelo fornecimento de certidões para a defesa de direitos e esclarecimento de situações de interesse pessoal, como a certidões cíveis e criminais de nada consta.

Some-se aos dispositivos anteriores a previsão legal do art. 46, da Lei de Custas Judiciais do Estado do Rio Grande do Norte, Lei Estadual nº 11.308/2021, que estabelece que "Será suspenso o pagamento dos emolumentos e demais taxas do beneficiário da justiça gratuita, em conformidade com §1º, IX e §3º do art. 98 do Código de Processo Civil."

É a situação em análise.

Diante do exposto, defiro o pedido de expedição de certidão narrativa formulado pela Defensoria Pública, ficando a parte dispensada do recolhimento das custas, posto se tratar de defesa de direito próprio e de beneficiário da gratuidade de justiça.

Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 12 parte 2 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE12_PARTE2);

// Lote 12 - Parte 3: Modelos 272-279 (finalizando 276-300.txt)
export const MODELOS_SEEU_LOTE12_PARTE3: ModeloSEEU[] = [
    {
        id: 'seeu_272',
        nome: 'agravo crime continuado',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento **, que indeferiu seu pedido para considerar suas condenações como continuidade delitiva.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme restou claro na decisão agravada, a alteração no modus operandi dos delitos, bem como a ausência de liame subjetivo entre as condutas *e a presença de coautores diversos, além do tempo decorrido entre eles/elas* afasta a ficção da continuidade delitiva, demonstrando, ao contrário, habitualidade criminosa.

Neste sentido:

(...)

4. O crime continuado é benefício penal, modalidade de concurso de crimes, que, por ficção legal, consagra unidade incindível entre os crimes parcelares que o formam, para fins específicos de aplicação da pena. Para a sua aplicação, a norma extraída do art. 71, caput, do Código Penal exige, concomitantemente, três requisitos objetivos: I) pluralidade de condutas; II) pluralidade de crime da mesma espécie; III) condições semelhantes de tempo, lugar, maneira de execução e outras semelhantes (conexão temporal, espacial, modal e ocasional); IV) e, por fim, adotando a teoria objetivo-subjetiva ou mista, a doutrina e jurisprudência inferiram implicitamente da norma um requisito da unidade de desígnios na prática dos crimes em continuidade delitiva, exigindo-se, pois, que haja um liame entre os crimes, apto a evidenciar de imediato terem sido esses delitos subsequentes continuação do primeiro, isto é, os crimes parcelares devem resultar de um plano previamente elaborado pelo agente.
5. No caso, o Tribunal a quo não constatou a existência do requisito subjetivo da unidade de desígnios entre os crimes de furto, tratando-se de habitualidade delitiva, não sendo possível concluir em sentido contrário nesta estreita via do habeas corpus, dado o óbice ao revolvimento fático-probatório.
6. Agravo desprovido.
(AgRg no HC n. 730.671/SC, relator Ministro Ribeiro Dantas, Quinta Turma, julgado em 23/8/2022, DJe de 30/8/2022.)

Em assim sendo, por seus próprios fundamentos, acrescidos das contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_273',
        nome: 'Retificação tráfico hediondo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de execução de pena em que o apenado pugnou pela retificação da guia, alegando que o crime de tráfico de drogas, em razão da redação da lei anticrimes, não seria mais hediondo.

Interveio o Ministério Público, opinando pelo indeferimento.

Relatados.

Sem razão o requerente, pois os tribunais superiores afastaram essa tese, sustentando que o delito capitulado no art. 33, caput, da Lei nº 11.343/2006 é, por previsão legal e constitucional, equiparado a hediondo,

Neste sentido:

AGRAVO REGIMENTAL EM HABEAS CORPUS. EXECUÇÃO PENAL. CÁLCULO DE PENA PARA PROGRESSÃO DE REGIME. TRÁFICO DE DROGAS. CRIME EQUIPARADO A HEDIONDO. 1. Nos termos do art. 5º, XLIII, da Constituição da República, a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem. 2. Como se verifica do próprio texto constitucional, o tráfico de drogas, a tortura e o terrorismo não são crimes hediondos, porém a eles se aplicam as regras previstas em lei (ALEXANDRE DE MORAES, Constituição do Brasil Interpretada e Legislação Constitucional, 9ª ed., 2013, Atlas, p. 264, item 5.70). São, portanto, infrações penais equiparadas aos delitos hediondos e, por consequência, terão o mesmo tratamento a eles destinado. 3. Inexistência de constrangimento ilegal a ser sanado. 4. Agravo Regimental a que se nega provimento. (HC 218576 AgR, Relator: ALEXANDRE DE MORAES, Primeira Turma, j. em 05/09/2022).

Isto posto, indefiro o pedido de retificação da guia de execução penal, que deve ser mantida como se encontra.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_274',
        nome: 'Retificação cumprimento agravo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução penal em que foi acostado aos autos decisão de agravo em execução, evento XX, determinando que o juízo da execução penal aplique aos cálculos da GEP a lei que for, em sua integralidade, mais favorável ao apenado (a LEP com a redação anterior ou posterior às mudanças trazidas pelo Pacote Anticrime), sendo vedada a combinação das duas normas.

Relatados.

**

Cumprindo o determinado, observo que a aplicação da redação anterior da LEP importará em o apenado atingir o requisito objetivo para progressão de regime em *** (data), enquanto na redação atual isso seria atingido em ***.

Em assim sendo, mando aplicar no cálculo de penas, para a progressão de regime, o percentual de 16% para os delitos comuns e 40% para a pena pelo crime hediondo ou equiparado.

No tocante ao livramento condicional, aplique-se 1/3 e 2/3, respectivamente, para os delitos comuns e hediondo.

***

Cumprindo o determinado, observo que a aplicação da redação nova da LEP será mais benéfica ao apenado, posto tratar-se de reincidente genérico quando praticou o crime hediondo *e demais crimes da segunda condenação*, o que, conforme a redação anterior e jurisprudência consolidada do STJ, importaria na exigência do cumprimento de 3/5 da pena para a progressão de regime.

Em assim sendo, mando aplicar no cálculo de penas, para a progressão de regime, o percentual de 16% para os delitos comuns e 40% para a pena pelo crime hediondo ou equiparado.

Em assim sendo, mando aplicar no cálculo de penas, para a progressão de regime, o percentual de 20% para as penas dos crimes de associação para tráfico de drogas e porte de arma de fogo, 25% para a do crime de roubo e 40% para a pena do tráfico de drogas.

No tocante ao livramento condicional, aplique-se 1/2 e 2/3, respectivamente, para o delito do artigo 2º da lei 12.850/2013 e para o artigo 33 da lei 11.343/2006.

**

Cumprindo o determinado, e considerando que a pena do crime de natureza hedionda encontra-se integralmente cumprido, sendo o apenado reincidente, não resta dúvida que a redação anterior é mais benéfica ao apenado (20% e 25% > 1/6).

Assim sendo, constatado que a redação anterior ao pacote anticrime é mais favorável ao apenado, mando aplicar no cálculo de penas, para a progressão de regime, a fração de 1/6 para os crimes comuns e 3/5 para o crime hediondo ou equiparado.

No tocante ao livramento condicional, aplique-se 2/3 para o artigo 33 e 35 da lei 11.343/2006, e 1/2 para os demais crimes.

**

Cumprindo o determinado, e considerando o que o apenado é tecnicamente primário em todos os crimes, e que mais da metade da pena refere-se a crime cometido com violência, não resta dúvida que a redação anterior é mais benéfica ao apenado ( 25% > 1/6).

Assim sendo, constatado que a redação anterior ao pacote anticrime é mais favorável ao apenado, mando aplicar no cálculo de penas, para a progressão de regime, a fração de 2/5 somente para a pena imposta pelo crime hediondo ou equiparado, e 1/6 para os demais crimes, todos de natureza comum.

No tocante ao livramento condicional, aplique-se 2/3 para o artigo 33 da lei 11.343/2006, e 1/3 para os demais crimes.

P.R.I. Atualize-se a GEP. Ciência ao MP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_275',
        nome: 'Agravo unifica restritiva semiaberto',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que unificou penas a ele impostas e fixou o regime semiaberto para cumprimento.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme pacífica jurisprudência do Superior Tribunal de Justiça, se o apenado cumpria pena restritiva de direitos e lhe sobreveio condenação à pena privativa de liberdade, em regime semiaberto, isso inviabiliza o cumprimento simultâneo, ou a suspensão, das de direitos (AgRg no HC 647.483/PE, Rel. Ministro SEBASTIÃO REIS JÚNIOR, SEXTA TURMA, julgado em 27/04/2021, DJe 03/05/2021).

No mesmo sentido:

AGRAVO REGIMENTAL EM RECURSO ESPECIAL. EXECUÇÃO PENAL. ARTS. 111, CAPUT E PARÁGRAFO ÚNICO, E 181, § 1º, E, AMBOS DA LEI N. 7.210/1984; E 44, § 5°, E 76, AMBOS DO CP. CUMPRIMENTO DE PENA PRIVATIVA DE LIBERDADE EM REGIME SEMIABERTO. CONDENAÇÃO A PENAS RESTRITIVAS DE DIREITOS. SUPERVENIÊNCIA. INCOMPATIBILIDADE DE EXECUÇÃO SIMULTÂNEA OU DE SUSPENSÃO. PRECEDENTES DO STJ. CONVERSÃO DAS PENAS RESTRITIVAS DE DIREITOS EM SANÇÃO CORPORAL AND UNIFICAÇÃO DAS REPRIMENDAS. POSSIBILIDADE. INTERPRETAÇÃO DOS ARTS. 181 E 111 DA LEP. TEMA AFETADO À TERCEIRA SEÇÃO (1.106). NÃO APLICAÇÃO DO QUANTO DISPOSTO NO ART. 1.036, § 1º, PARTE FINAL, DO CPC.
1. A matéria está afetada à Terceira Seção (Tema Repetitivo n. 1.106); todavia, foi determinado que o disposto na parte final do § 1º do art. 1.036 do Código de Processo Civil, que trata da suspensão do trâmite dos processos pendentes, não se aplica à referida matéria jurídica.
2. No âmbito desta Corte Superior, em que pese a Terceira Seção, em 8/6/2021, tenha aprovado, por unanimidade, a proposta de afetação do julgamento do REsp n. 1.890.343/SC e do REsp n. 1.890.344/RS à sistemática dos recursos repetitivos - Tema Repetitivo n. 1098, cuja controvérsia foi delimitada como a "(im)possibilidade de acordo de não persecução penal posteriormente ao recebimento da denúncia" -, o referido órgão colegiado, acolhendo proposta do Relator, decidiu não determinar a suspensão do trâmite dos processos pendentes que versem sobre a matéria jurídica em questão (AgRg no AREsp n. 1.995.675/MS, Ministro Reynaldo Soares Da Fonseca, Quinta Turma, DJe 18/3/2022).
3. O posicionamento jurisprudencial manifestado na decisão agravada ainda é aplicado por ambas as Turmas que compõem a Terceira Seção desta Corte Superior.
4. Agravo regimental desprovido.
(AgRg no REsp n. 1.960.148/MG, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 17/5/2022, DJe de 23/5/2022.)

AGRAVO REGIMENTAL NO HABEAS CORPUS. UNIFICAÇÃO DE PENAS. RECLUSÃO E DETENÇÃO. SUFICIÊNCIA DA FUNDAMENTAÇÃO. ENTENDIMENTO DO STJ. DECISÃO MANTIDA.
1. É inadmissível habeas corpus em substituição ao recurso próprio, também à revisão criminal, impondo-se o não conhecimento da impetração, salvo se verificada flagrante ilegalidade no ato judicial impugnado apta a ensejar a concessão da ordem de ofício.
2. "Sobrevindo condenação que impossibilite o cumprimento simultâneo das penas, o que ocorre nos casos de condenações em regime fechado ou semiaberto, deve-se proceder à conversão da sanção restritiva de direitos em privativa de liberdade, unificando-se as penas" (AgRg no REsp n. 1.724.650/MG).
3. Mantém-se integralmente a decisão agravada cuhos fundamentos estão em conformidade com o entendimento do STJ sobre a matéria suscitada.
4. Agravo regimental desprovido. (AgRg no HC n. 697.843/SC, relator Ministro João Otávio de Noronha, Quinta Turma, julgado em 19/4/2022, DJe de 25/4/2022.)

EXECUÇÃO PENAL. HABEAS CORPUS SUBSTITUTIVO DE RECURSO ESPECIAL. NÃO CABIMENTO. CUMPRIMENTO DE PENA RESTRITIVA DE DIREITOS. SUPERVENIÊNCIA DE CONDENAÇÃO POR PENA PRIVATIVA DE LIBERDADE EM REGIME FECHADO. INCOMPATIBILIDADE DE CUMPRIMENTO SIMULTÂNEO. RECONVERSÃO DA PENA RESTRITIVA DE DIREITOS EM PRIVATIVA DE LIBERDADE. POSSIBILIDADE. PRECEDENTES. AUSÊNCIA DE FLAGRANTE ILEGALIDADE. HABEAS CORPUS NÃO CONHECIDO.
I - A Terceira Seção desta Corte, seguindo entendimento firmado pela Primeira Turma do col. Pretório Excelso, sedimentou orientação no sentido de não admitir habeas corpus substitutivo do recurso adequado, situação que implica o não conhecimento da impetração, ressalvados casos excepcionais em que, configurada flagrante ilegalidade apta a gerar constrangimento ilegal, seja possível a concessão da ordem de ofício.
II - Esta Corte Superior de Justiça pacificou o entendimento no sentido de que, no caso de nova condenação a penas restritivas de direitos a quem esteja cumprindo pena privativa de liberdade em regime fechado ou semiaberto, é inviável a suspensão do cumprimento daquelas - ou a execução simultânea das penas. O mesmo se dá quando o agente estiver cumprindo pena restritiva de direitos e lhe sobrevém nova condenação à pena privativa de liberdade. Nesses casos, nos termos do art. 111 da Lei de Execução Penal, deve-se proceder à unificação das penas, não sendo aplicável o art. 76 do Código Penal. Precedentes.
III - Não se vislumbra, na espécie, constrangimento ilegal apto para a concessão da ordem, de ofício. Habeas corpus não conhecido. (HC n. 624.161/MG, relator Ministro Felix Fischer, Quinta Turma, julgado em 9/12/2020, DJe de 15/12/2020).
Em assim sendo, por seus próprios fundamentos, acrescidos das contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_276',
        nome: 'agravo transferência',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que não conheceu do seu pedido de transferência para unidade prisional diversa daquela em que atualmente se encontra.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada, a transferência de apenados entre unidades prisionais dentro do estado depende de análise de critérios de oportunidade e conveniência, inclusive do ponto de vista da segurança prisional, não constituindo direito subjetivo a permanência em estabelecimento próximo de sua família.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_277',
        nome: 'Agravo remição parcial ENEM',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu pedido de remição da pena.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.*pugnando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada, a documentação acostada somente comprova que o apenado prestou o exame do ENEM durante o cumprimento da pena, contudo sem comprovar a aprovação, critério expressamente exigido pela resolução CNJ nº 391/2021.

Ademais, não se verifica nos autos informação acerca de qual era o nível de escolaridade do apenado, o que se mostra necessário para o benefício pois, caso já tivesse concluído o nível médio**fundamental, esse não pode ser concedido, conforme recente decisão do Superior Tribunal de Justiça, verbis:

AGRAVO REGIMENTAL EM RECURSO ESPECIAL. EXECUÇÃO PENAL. VIOLAÇÃO DO ART. 126 DA LEP. PLEITO DE RECONHECIMENTO DA REMIÇÃO PELO ESTUDO. APROVAÇÃO NO ENEM (EXAME NACIONAL DO ENSINO MÉDIO) APÓS A CONCLUSÃO DO ENSINO MÉDIO. SENTENCIADO PORTADOR DE DIPLOMA DE CURSO SUPERIOR. IMPOSSIBILIDADE DE CONCESSÃO DA BENESSE.
1. Visando à ressocialização do apenado e tendo como base o direito fundamental à Educação, o Conselho Nacional de Justiça (CNJ), por meio da Recomendação n. 44/2013 - posteriormente substituída pela Resolução n. 391/2021 -, estabeleceu a possibilidade de remição de pena à pessoa privada de liberdade, que, por meio de estudos por conta própria, vier a ser aprovada nos exames que certificam a conclusão do ensino fundamental ou médio (ENCCEJA ou outros) e aprovação no Exame Nacional do Ensino Médio - ENEM.
2. Com efeito, o propósito da remição pelo estudo não é simplesmente diminuir o tempo de encarceramento, mas, sobretudo, fomentar a aquisição de novos conhecimentos e ferramentais educacionais por parte do apenado, de modo a facilitar a sua reintegração social.
3. No caso, tendo o apenado concluído o ensino médio e superior antes do início do cumprimento da pena, incabível a remição penal por aprovação no Exame Nacional do Ensino Médio, visto que tal situação destoa do escopo da norma.
4. Agravo regimental improvido.
(AgRg no REsp n. 1.979.591/SP, relator Ministro Sebastião Reis Júnior, Sexta Turma, julgado em 19/4/2022, DJe de 25/4/2022.).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau .

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_278',
        nome: 'Agravo carga horária',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que converteu sua carga horária de trabalho, inferior ao mínimo legal exigido, de forma a possibilitar o cálculo remicional, dividindo as horas de trabalho por oito, seguindo-se o padrão normal de todos os demais presos trabalhadores.

O Ministério Público contrarrazoou pugnando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois a divisão da carga horária trabalhada por oito seguiu o padrão de cálculo de todos os demais presos trabalhadores, evitando que tratamento não isonômico entre apenados na mesma situação, não discrepando do que preconiza a Lei de Execução Penal.

Ora, assente no Superior Tribunal de Justiça que "para a remição da pena em razão do trabalho, o cálculo deverá ser realizado pela quantidade de dias efetivamente trabalhados pelo reeducando, não sendo possível seu cômputo com o simples somatório das horas. Precedentes" (AgRg no AREsp n. 1.249.385/ES, Sexta Turma, Rel. Min. Nefi Cordeiro, DJe de 4/2/2019) (AgRg no HC n. 674.930/RS, relator Ministro Jesuíno Rissato, Quinta Turma, julgado em 28/9/2021, DJe de 5/10/2021).

Assim, a decisão agravada na verdade beneficiou o apenado de forma a considerar a boa vontade em trabalhar, fazendo uma espécie de banco de horas, de forma que total somado fosse dividido por 8, que é a carga horária normal.

Relembro, na pacífica jurisprudência do Superior Tribunal de Justiça, carga horária inferior a 6 horas nem deveria ser computada.

Neste sentido:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. REMIÇÃO DA PENA PELO TRABALHO. CÔMPUTO EM HORAS. IMPOSSIBILIDADE, SALVO AS HORAS EXCEDENTES À OITAVA HORA DIÁRIA. AGRAVO NÃO PROVIDO. 1. O Tribunal de origem adotou a tese da defesa, no sentido de que "é certo que os dias remidos devem ser considerados como pena efetivamente cumprida, posto que esse entendimento é o que melhor atende ao espírito da legislação vigente (art. 128, da Lei de Execução Penal, com a redação dada pela Lei Federal n. 12.433, de 2011)".2. Ao verificar a situação dos autos, registrou o acórdão que não houve divergência entre as partes sobre o método aplicado para a realização do cálculo, uma vez que a remição concedida fora considerada como pena cumprida, nos termos do art. 128 da LEP. A pretensão de desconstituir a conclusão da instância de origem demandaria reexame de fatos e provas, o que é impossível na via processual eleita. 3. O Superior Tribunal de Justiça firmou entendimento no sentido de que a remição da pena pelo trabalho, nos termos do art. 33 c/c art. 126, § 1º, da LEP, realizada à razão de 1 (um) dia de pena a cada 3 (três) dias de trabalho, deve ser calculada a partir dos dias efetivamente trabalhados e não da soma das horas de labor. 4. Deve-se, ainda, respeitar a jornada diária mínima de 6 (seis) horas e não excedente a 8 (oito) horas de trabalho, sendo certo que apenas as horas trabalhadas após a jornada máxima legal poderão ser somadas a fim de que, atingindo 6 (seis) horas, sejam computadas como 1 (um) dia para fins de remição. 5. Agravo regimental a que se nega provimento.(AgRg no HC n. 437.846/SP, relator Ministro Ribeiro Dantas, Quinta Turma, julgado em 13/4/2021, DJe de 16/4/2021.) - grifei.
AGRAVO REGIMENTAL. RECURSO ESPECIAL. EXECUÇÃO PENAL. REMISSÃO DE PENA. CRITÉRIO DE CÁLCULO DO DIA TRABALHADO. JORNADA NÃO INFERIOR A 6 NEM SUPERIOR A 8 HORAS. CÔMPUTO DA REMIÇÃO EM HORAS. IMPOSSIBILIDADE. RECURSO DESPROVIDO.1. A remissão da pena pelo trabalho, nos termos do art. 33 c/c 126, § 1º, da LEP, exige jornada diária não inferior a seis nem superior a oito horas, contabilizando-se a quantidade de dias efetivamente trabalhados e não o simples somatório de horas. Precedentes. 2. Agravo regimental a que se nega provimento. (AgRg no REsp n. 1.635.766/MG, relator Ministro Jorge Mussi, Quinta Turma, julgado em 16/5/2017, DJe de 24/5/2017.) - grifei.
EMBARGOS DE DECLARAÇÃO NO AGRAVO REGIMENTAL NOS EMBARGOS DE DECLARAÇÃO NO AGRAVO EM RECURSO ESPECIAL. RECEBIMENTO COMO AGRAVO REGIMENTAL. AUSÊNCIA DOS VÍCIOS DO ART. 619 DO CPP. EXECUÇÃO PENAL. REMIÇÃO DA PENA. CÁLCULO COM BASE NOS DIAS TRABALHADOS. OMISSÃO DO ESTADO. REMIÇÃO FICTA. NÃO CABIMENTO. INCIDÊNCIA DA SÚMULA N. 83 DO STJ. AGRAVO REGIMENTAL DESPROVIDO. 1. A remição da pena pelo trabalho se dá por dias trabalhados, não por horas, exigindo-se, em relação a cada dia, o mínimo de 6 e o máximo de 8 horas, nos termos dos arts. 33 e 126, § 1º, da Lei de Execução Penal. 2. Para a remição, deve-se considerar o trabalho efetivamente cumprido. Assim, a omissão do Estado em impossibilitar a realização de atividades laborais não autoriza a remição ficta ou automática. 3. Não se conhece de recurso especial pela divergência, quando a orientação do STJ se firmou no mesmo sentido da decisão recorrida (Súmula n. 83 do STJ). 4. Embargos de declaração recebidos como agravo regimental, ao qual se nega provimento. (EDcl no AgRg nos EDcl no AREsp 1697170/SP, Rel. Ministro JOÃO OTÁVIO DE NORONHA, QUINTA TURMA, julgado em 23/03/2021, DJe 29/03/2021).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_279',
        nome: 'agravo tráfico hediondo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu seu pedido para reconhecer o crime de tráfico de drogas como não hediondo.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o delito capitulado no art. 33, caput, da Lei nº 11.343/2006 é, por previsão legal e constitucional, equiparado a hediondo.

Neste sentido decidiu recentemente o Superior Tribunal de Justiça:

AGRAVO REGIMENTAL EM HABEAS CORPUS SUBSTITUTIVO DE RECURSO PRÓPRIO. EXECUÇÃO PENAL. CÁLCULO DE PENA PARA PROGRESSÃO DE REGIME. REVOGAÇÃO DO § 2º DO ART. 2º DA LEI 8.072/90 (LEI DOS CRIMES HEDIONDOS) PELA LEI 13.964/2019 (PACOTE ANTICRIME) QUE NÃO AFASTA A CARACTERIZAÇÃO DO CRIME DE TRÁFICO DE DROGAS (ART. 33, CAPUT, DA LEI 11.343/2006) COMO DELITO EQUIPARADO A HEDIONDO. CLASSIFICAÇÃO QUE DECORRE DO ART. 5º, XLIII, DA CONSTITUIÇÃO FEDERAL. AGRAVO REGIMENTAL DESPROVIDO.1. (...).2. A revogação do § 2º do art. 2º da Lei 8.072/90 pela Lei 13.964/2019 não tem o condão de retirar do tráfico de drogas sua caracterização como delito equiparado a hediondo, pois a classificação da narcotraficância como infração penal equiparada a hedionda decorre da previsão constitucional estabelecida no art. 5º, XLIII, da Constituição Federal. 3. O Plenário do Supremo Tribunal Federal, no julgamento do HC n. 118.533/MS, concluiu que "o tráfico de entorpecentes privilegiado (art. 33, § 4º, da Lei n. 11.313/2006) não se harmoniza com a hediondez do tráfico de entorpecentes definido no caput e § 1º do art. 33 da Lei de Tóxicos" (HC 118.533/MS, Rel. Ministra CÁRMEN LÚCIA, TRIBUNAL PLENO, DJe 16/09/2016). 4. O fato de a Lei 13.964/2019 ter consignado, expressamente, no § 5º do art. 112 da Lei de Execução Penal, que não se considera hediondo ou equiparado o tráfico de drogas previsto no § 4º do art. 33 da Lei 11.343/2006 somente consagra o tratamento diferenciado que já vinha sendo atribuído pela jurisprudência ao denominado tráfico privilegiado. Isso, no entanto, não autoriza deduzir que a mesma descaracterização como delito equiparado a hediondo tenha sido estendida ao crime do art. 33, caput e § 1º, da Lei de Drogas. 5. Esta Corte já teve a oportunidade, em diversas ocasiões, de referendar a natureza de delito equiparado a hediondo do crime previsto no art. 33, caput, da Lei 11.343/06, mesmo após a entrada em vigor da Lei 13.964/2019 (Pacote anticrime), ressaltando-se, inclusive que, no julgamento do Recurso Especial n. 1.918.338/MT (Rel. Ministro ROGERIO SCHIETTI CRUZ, TERCEIRA SEÇÃO, julgado em 26/05/2021, DJe 31/05/2021) pela sistemática dos recursos repetitivos (Tema n. 1.084), no qual foi assentada a tese reconhecendo a possibilidade de aplicação retroativa do art. 112, V, da LEP a condenados por crimes hediondos ou equiparados que fossem reincidentes genéricos, o caso concreto tratou especificamente de condenado por tráfico de drogas. Precedentes desta Corte sobre a mesma controvérsia posta nos autos: HC 733.052/RS, Min. RIBEIRO DANTAS, DJe de 06/04/2022; HC731.139/SP, Rel. Min. JOEL ILAN PACIORNIK, DJe de 29/03/2022; HC 723.462/SC, Rel. Min. ANTONIO SALDANHA PALHEIRO, DJe de 11/03/2022; HC 726.162/SC, Rel. Min. RIBEIRO DANTAS, DJe de 16/03/2022; HC 721.316/SC, Rel. Min. JOEL ILAN PACIORNIK, DJe de 08/02/2022. 6. Agravo regimental desprovido. ( AgRg no HABEAS CORPUS Nº 729.332 - SP. RELATOR: Ministro Reynaldo Soares da Fonseca, 5ª Turma, j. 19.04.2022) - transcrição parcial.
1097: AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO DA PENA. CÁLCULO DE PENA PARA PROGRESSÃO DE REGIME. REVOGAÇÃO DO § 2º DO ART. 2º DA LEI 8.072/90 (LEI DOS CRIMES HEDIONDOS) PELA LEI 13.964/2019 QUE NÃO AFASTA A CARACTERIZAÇÃO DO CRIME DE TRÁFICO DE DROGAS COMO DELITO EQUIPARADO A HEDIONDO. CLASSIFICAÇÃO QUE DECORRE DO ART. 5º, XLIII, DA CONSTITUIÇÃO. 1. (...). 2. O entendimento da instância ordinária está em consonância com a jurisprudência desta Corte Superior, pois a Lei n. 13.964/2019 não retirou o caráter de equiparado a hediondo do crime de tráfico de drogas. O caráter hediondo somente é retirado quando incide a figura do tráfico privilegiado, o que não é o caso dos autos, conforme já decidido pelo Supremo Tribunal Federal no HC 118.533/MS. 3. Além disso, de acordo com entendimento desta Corte, "a classificação da narcotraficância como infração penal equiparada a hedionda decorre da previsão constitucional estabelecida no art. 5º, XLIII, da Constituição Federal" (AgRg no HABEAS CORPUS Nº 729.332 - SP (2022/0072818-5). 4. Agravo regimental improvido. (AgRg no HC n. 726.166/SC, relator Ministro Olindo Menezes (Desembargador Convocado do TRF 1ª Região), Sexta Turma, julgado em 7/6/2022, DJe de 13/6/2022.)
1098:
1099: AGRAVO REGIMENTAL. HABEAS CORPUS. EXECUÇÃO PENAL. PROGRESSÃO DE REGIME. PEDIDO DE RETIFICAÇÃO DE CÁLCULO DE PENAS. IMPOSSIBILIDADE. TRÁFICO DE DROGAS. DELITO EQUIPARADO A HEDIONDO. PREVISÃO CONSTITUCIONAL. DESPROVIMENTO DO RECURSO. 1. A equiparação do tráfico de drogas a delitos hediondos decorre de previsão constitucional assente no art. 5º, XLIII, da Constituição Federal. 2. A jurisprudência desta Corte Superior de Justiça pacificou-se no sentido de que as alterações providas pela Lei n. 13.964/2019 apenas afastaram o caráter hediondo ou equiparado do tráfico privilegiado, previsto no art. 33, § 4º, da Lei n. 11.343/2006, nada dispondo sobre os demais dispositivos da Lei de Drogas. 3. Agravo regimental desprovido. (AgRg no HC n. 754.913/MG, relator Ministro Jorge Mussi, Quinta Turma, julgado em 6/12/2022, DJe de 15/12/2022.)
1100:
1101:
1102: O Supremo Tribunal Federal também decidiu da mesma forma:
1103:
1104: AGRAVO REGIMENTAL EM HABEAS CORPUS. EXECUÇÃO PENAL. CÁLCULO DE PENA PARA PROGRESSÃO DE REGIME. TRÁFICO DE DROGAS. CRIME EQUIPARADO A HEDIONDO. 1. Nos termos do art. 5º, XLIII, da Constituição da República, a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem. 2. Como se verifica do próprio texto constitucional, o tráfico de drogas, a tortura e o terrorismo não são crimes hediondos, porém a eles se aplicam as regras previstas em lei (ALEXANDRE DE MORAES, Constituição do Brasil Interpretada e Legislação Constitucional, 9ª ed., 2013, Atlas, p. 264, item 5.70). São, portanto, infrações penais equiparadas aos delitos hediondos e, por consequência, terão o mesmo tratamento a eles destinado. 3. Inexistência de constrangimento ilegal a ser sanado. 4. Agravo Regimental a que se nega provimento. (HC 218576 AgR, Relator(a): ALEXANDRE DE MORAES, Primeira Turma, julgado em 05/09/2022, PROCESSO ELETRÔNICO DJe-182 DIVULG 12-09-2022 PUBLIC 13-09-2022).
1105:
1106: AGRAVO REGIMENTAL NO HABEAS CORPUS. CRIMES DE TRÁFICO DE DROGAS E DE ASSOCIAÇÃO PARA O TRÁFICO. WRIT SUCEDÂNEO DE RECURSO OU REVISÃO CRIMINAL. EXECUÇÃO PENAL. CÁLCULO DE PENA PARA PROGRESSÃO DE REGIME. REVOGAÇÃO DO § 2º DO ART. 2 º DA LEI 8.072/90 PELA LEI 13.964/2019. CIRCUNSTÂNCIA QUE NÃO AFASTA A HEDIONDEZ DA INFRAÇÃO PENAL. DELITO EQUIPARADO A HEDIONDO (ART. 5º, XLIII, DA CONSTITUIÇÃO FEDERAL). MANIFESTA ILEGALIDADE OU TERATOLOGIA NÃO IDENTIFICADAS. 1. Inadmissível, como regra, o emprego do habeas corpus como sucedâneo de recurso ou revisão criminal. Precedentes. 2. Nos termos do disposto no inciso XLIII do art. 5º da Constituição Federal, o tráfico ilícito de substâncias entorpecentes (artigo 33, caput, e § 1º, Lei 11.343/2006) é figura típica equiparada aos crimes hediondos, assim discriminados na Lei 8.072/90. 3. A revogação do § 2º do art. 2º da Lei 8.072/90 pela Lei 13.964/2019 em nada influiu na caracterização da hediondez do delito de tráfico de drogas, porquanto a equiparação decorre de previsão constitucional estabelecida no art. 5º, XLIII, da Constituição Federal. 4. Agravo regimental conhecido e não provido. (HC 215182 AgR, Relator(a): ROSA WEBER, Primeira Turma, julgado em 29/08/2022, PROCESSO ELETRÔNICO DJe-173 DIVULG 30-08-2022 PUBLIC 31-08-2022)

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 12 parte 3 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE12_PARTE3);

// Lote 13: Modelos 280-290 (finalizando 301-311.txt)
export const MODELOS_SEEU_LOTE13: ModeloSEEU[] = [
    {
        id: 'seeu_280',
        nome: 'Amanda Pauxis - Decisão Genérica',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Trata-se de execution penal em desfavor do apenado acima nominado, em que a Defesa pugnou pela

Instado a se manifestar, o Ministério Público opinou pelo

Relatados.

*Sem/Com razão a Defesa.

*Com razão o Ministério Público.

Isso porque

P.R.I. Ciência ao MP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_281',
        nome: 'Progressao Indeferimento ACC Regular preso menos 6 meses',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
        id: 'seeu_282',
        nome: 'Agravo LC negado subj',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu-lhe o livramento condicional, alegando que atingira os seus necessários requisitos.

O Ministério Público contrarrazoou, pugnando pela manutenção da decisão agravada.

Relatados .

Sem razão o agravante, pois, apesar de atingido o requisito objetivo para o livramento condicional, não cabe o benefício.

É que ficou claramente demonstrada a falta de comportamento satisfatório no cumprimento da pena (Código Penal, art. 83, III, a), pois se verifica que o apenado ***.

Por oportuno, cabe anotar que o art. 83 do Codigo Penal não restringe o bom comportamento do apenado ao último ano, já que exige "bom comportamento durante a execução da pena" (alínea ).

É, aliás, o teor do Tema Repetitivo 1161 da jurisprudência do Superior Tribunal de Justiça:

PENAL. RECURSO ESPECIAL REPRESENTATIVO DE CONTROVÉRSIA. LIVRAMENTO CONDICIONAL. FALTA GRAVE. ÚLTIMOS 12 MESES. REQUISITO OBJETIVO. BOM COMPORTAMENTO. REQUISITO SUBJETIVO. AUSÊNCIA DE LIMITAÇÃO TEMPORAL. AFERIÇÃO DURANTE TODO O HISTÓRICO PRISIONAL. TESE FIRMADA. CASO CONCRETO. NÃO PREENCHIMENTO DOS REQUISITOS. RECURSO PROVIDO.

1. Recurso representativo de controvérsia. Atendimento ao disposto no art. 1036 e seguintes do Código de Processo Civil e da Resolução n. 8/2008 do STJ.

2. Delimitação da controvérsia: definir se o requisito objetivo do livramento condicional consistente em não ter cometido falta grave nos últimos 12 meses (art. 83, III, "b", do CP, inserido pela Lei Anticrime) limita a valoração do requisito subjetivo (bom comportamento durante a execução da pena, alínea "a" do referido inciso).

3. Tese: a valoração do requisito subjetivo para concessão do livramento condicional - bom comportamento durante da execução da pena (art. 83, inciso III, alínea "a", do Código Penal) - deve considerar todo o histórico prisional, não se limitando ao período de 12 meses referido na alínea "b" do mesmo inciso III do art. 83 do Código Penal.

4. (...)

5. Recurso especial provido. (REsp n. 1.970.217/MG, relator Ministro Ribeiro Dantas, Terceira Seção, julgado em 24/5/2023, DJe de 1/6/2023.) grifei.

Em assim sendo, por seus próprios fundamentos, ou seja, por não atender o agravante aos requisitos do art. 83, III, do Código Penal, mantenho a decisão que indeferiu-lhe o livramento condicional.

P.R.I. Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_283',
        nome: 'progressão semiaberto comum',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
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
    {
        id: 'seeu_284',
        nome: 'agravo mantendo indeferimento LC',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do ev. * que indeferiu-lhe o livramento condicional.

O Ministério Público contraarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois ficou demonstrada a falta de comportamento satisfatório no cumprimento da pena (Código Penal, art. 83, III, a), já que se verifica que o apenado praticou * falta*s grave*s.

Sem razão o agravante, pois ficou demonstrada a falta do requisitos objetivo, pois o apenado praticou falta grave nos últimos doze meses, e subjetivo, já que demonstrou comportamento insatisfatório no cumprimento da pena, já que se verifica que o praticou * falta*s grave*s ((Código Penal, art. 83, III, a e b).

Neste sentido, registro a jurisprudência do Superior Tribunal de Justiça que em recente julgamento de recurso repetitivo decidiu

PENAL. RECURSO ESPECIAL REPRESENTATIVO DE CONTROVÉRSIA. LIVRAMENTO CONDICIONAL. FALTA GRAVE. ÚLTIMOS 12 MESES. REQUISITO OBJETIVO. BOM COMPORTAMENTO. REQUISITO SUBJETIVO. AUSÊNCIA DE LIMITAÇÃO TEMPORAL. AFERIÇÃO DURANTE TODO O HISTÓRICO PRISIONAL. TESE FIRMADA. CASO CONCRETO. NÃO PREENCHIMENTO DOS REQUISITOS. RECURSO PROVIDO. 1. Recurso representativo de controvérsia. Atendimento ao disposto no art. 1036 e seguintes do Código de Processo Civil e da Resolução n. 8/2008 do STJ. 2. Delimitação da controvérsia: definir se o requisito objetivo do livramento condicional consistente em não ter cometido falta grave nos últimos 12 meses (art. 83, III, "b", do CP, inserido pela Lei Anticrime) limita a valoração do requisito subjetivo (bom comportamento durante a execução da pena, alínea "a" do referido inciso). 3. Tese: a valoração do requisito subjetivo para concessão do livramento condicional - bom comportamento durante da execução da pena (art. 83, inciso III, alínea "a", do Código Penal) - deve considerar todo o histórico prisional, não se limitando ao período de 12 meses referido na alínea "b" do mesmo inciso III do art. 83 do Código Penal. 4. No caso concreto, o recorrido não preenche os requisitos para a obtenção do livramento condicional, diante da prática de falta grave, considerada pelo juízo da execução como demonstrativa de irresponsabilidade e indisciplina no cumprimento de pena. 5. Recurso especial provido. (Recurso Especial nº 1.970.217 - MG 2021/0361139-0. Relator Ministro Ribeiro Dantas. 24.02.2023)

Houve, portanto, a pacificação do entendimento jurisprudencial para considerar que o elemento subjetivo não se limita aos últimos 12 meses e deve ser aferido durante todo o histórico prisional.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu o livramento condicional ao agravante.

Intime-se o agravante para, nos termos o art. 2º, I, da Portaria nº 316-TJRN, de 29.05.2020, selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_285',
        nome: 'LC revogação nova condenação',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Em gozo de livramento condicional o apenado preso e condenado definitivamente por prática de novo delito doloso, tendo sido recebida a correspondente Guia de Recolhimento neste juízo.

Interveio o Ministério Público.

É o relatório.

Nos termos do art. 86, I, do Código Penal, revoga-se o livramento se o liberado vem a ser condenado a pena privativa de liberdade, em sentença irrecorrível, por crime cometido durante a vigência do benefício.

É o caso, desnecessárias maiores considerações a respeito, especialmente quando se nota transitada em julgado a nova decisão condenatória***, inclusive depois de confirmada pela segunda instância.

Por oportuno, anoto tratar-se de crime posterior ao benefício, não se descontando da pena, em conseqüência, o tempo em que esteve solto o apenado (Código Penal, art. 88).

Isto posto, revogo o livramento condicional de que beneficiário o apenado.

P.R.I., expedindo-se nova Guia de Execução Criminal, não constando como pena cumprida o período em que o apenado esteve solto em razão do livramento condicional. *Voltem-me para decidir acerca da unificação ou soma das penas.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_286',
        nome: 'Insanidade mental indeferimento',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de incidente de insanidade mental do apenado acima identificado, tendo sido apresentado o competente laudo referente ao exame e dadas vistas dos autos ao Ministério Público e à defesa, que concordaram com suas conclusões.

Relatados.

Submetido o apenado a exame de insanidade mental, os peritos do ITEP responderam que o apenado é portador de doença mental (*), a qual, entretanto não compromete sua capacidade de entender o caráter da pena e de se determinar de acordo com esse entendimento.

As partes nada opuseram ao laudo pericial.

Em assim sendo, homologo, para que seus jurídicos e legais efeitos produza, o incidente de sanidade mental, bem como o respectivo laudo oferecido pelos peritos médico-legais, e indefiro o pedido de conversão da pena em medida de segurança.

P.R.I. Aguarde-se novo incidente na execução penal.

$assinaturaJuizDireito`,
    },
    {
        id: 'seeu_287',
        nome: 'LC preventiva negando',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para livramento condicional, tendo o Ministério Público opinado pelo indeferimento, face a ausência de requisito subjetivo, enquanto a defesa ***.

Acrescento ao relatório que a secretaria (evento ***) certificou que consta prisão preventiva decretada em desfavor do apenado em ação penal a que responde.

É o relatório.

Apesar de atingido o requisito objetivo, não cabe o benefício ao apenado.

É que ficou claramente demonstrada a falta de bom comportamento no cumprimento da pena (Código Penal, art. 83, III, a), pois se verifica que o apenado teve sua prisão preventiva decretada em outra ação penal a que responde, por suposto delito praticado durante a execução da pena.

Neste sentido decidiram os Tribunal de Justiça do Rio Grande do Sul, São Paulo e Paraná:

AGRAVO EM EXECUÇÃO. LIVRAMENTO CONDICIONAL. REQUISITO SUBJETIVO. SUPERVENIENTE DECRETAÇÃO DE PRISÃO PREVENTIVA EM PROCESSO DISTINTO. ALTERAÇÃO FÁTICA SUBSTANCIAL. TENDO EM VISTA QUE FOI DECRETADA A PRISÃO DO RÉU NOUTRO PROCESSO E EXPEDIDO MANDADO DE PRISÃO, A SITUAÇÃO FÁTICA DO APENADO NÃO AUTORIZA O DEFERIMENTO DO PEDIDO DE LIVRAMENTO CONDICIONAL. AGRAVO DESPROVIDO. (Agravo de Execução Penal, Nº 52360126520228217000, Primeira Câmara Criminal, Tribunal de Justiça do RS, Relator: Jayme Weingartner Neto, Julgado em: 27-04-2023).

Agravo em Execução Penal - Pleitos de progressão ao regime semiaberto e de livramento condicional, indeferidos - Recurso da defesa - Impossibilidade de concessão dos benefícios prisionais almejados, ante a falta de preenchimento de requisito subjetivo - Agravante que responde a ações penais em curso em outro Estado da Federação (por furtos qualificados e associação criminosa), com ordens de prisão preventiva pendentes de cumprimento - Circunstância incompatível com as benesses em estudo - Ausência de juízo minimamente seguro para o deferimento de maior liberdade - Retorno ao convívio social que deve se dar de forma gradativa, mediante a demonstração de assimilação da terapêutica penal, o que não se verifica, in casu – Agravo não provido (TJ-SP 00079249120178260026 SP, Relator: Juvenal Duarte, Data de Julgamento: 22/02/2018, 5ª Câmara de Direito Criminal).

RECURSO DE AGRAVO. Pedido de reforma da r. Decisão que indeferiu o pedido de progressão de regime e livramento condicional. Requisito subjetivo não preenchido. Decreto de prisão preventiva em ação penal diversa. Incompatibilidade da prisão cautelar do apenado com a concessão dos benefícios pretendidos. Súmula no 716, do STF. Inaplicabilidade. Situação diversa. Decisão mantida. Recurso desprovido. (TJ-PR; RecAgrav 1642044-5; Maringá; Quarta Câmara Criminal; Rel. Des. Carvilio da Silveira Filho; Julg. 03/08/2017; DJPR 21/08/2017; Pág. 290)

O Superior Tribunal de Justiça, aliás, já anotou que a decretação da prisão preventiva em outro processo por fato praticado durante a execução da pena mostra ausência do requisito subjetivo para o livramento condicional tornando o benefício, aliás, “sem efeito a prisão cautelar, colocando em risco a sociedade” (AgRg no HC n. 791.083/GO, relator Ministro Reynaldo Soares da Fonseca, Quinta Turma, julgado em 14/2/2023, DJe de 27/2/2023.)

Ora, se há fundamento para manutenção da prisão preventiva por razões de ordem pública, por coerência, não haveria o preenchimento, em tese, do requisito subjetivo para o livramento condicional.

Se a ordem pública resta ameaçada pela liberdade do apenado, inadequada seria sua liberdade.

Isto posto, por ausência do requisito subjetivo, indefiro o livramento condicional ao apenado.

P.I. Registre-se no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_288',
        nome: 'LC indefere subjetivo',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou o apenado como tendo atingido o requisito objetivo para o livramento condicional em **.

Interveio o Ministério Público, opinando pelo indeferimento, considerando que, no curso da execução penal, o apenado foi penalizado com falta grave, enquanto a defesa ***.

Relatados .

Apesar de atingido o requisito objetivo para o livramento condicional, não cabe o benefício ao apenado.

É que ficou claramente demonstrada a falta de comportamento satisfatório no cumprimento da pena (Código Penal, art. 83, III, a), pois se verifica que o apenado ***.

Por oportuno, cabe anotar que o art. 83 do Codigo Penal não restringe o bom comportamento do apenado ao último ano, já que exige "bom comportamento durante a execução da pena" (alínea ).

É, aliás, o teor do Tema Repetitivo 1161 da jurisprudência do Superior Tribunal de Justiça:

PENAL. RECURSO ESPECIAL REPRESENTATIVO DE CONTROVÉRSIA. LIVRAMENTO CONDICIONAL. FALTA GRAVE. ÚLTIMOS 12 MESES. REQUISITO OBJETIVO. BOM COMPORTAMENTO. REQUISITO SUBJETIVO. AUSÊNCIA DE LIMITAÇÃO TEMPORAL. AFERIÇÃO DURANTE TODO O HISTÓRICO PRISIONAL. TESE FIRMADA. CASO CONCRETO. NÃO PREENCHIMENTO DOS REQUISITOS. RECURSO PROVIDO.
1. Recurso representativo de controvérsia. Atendimento ao disposto no art. 1036 e seguintes do Código de Processo Civil e da Resolução n. 8/2008 do STJ.
2. Delimitação da controvérsia: definir se o requisito objetivo do livramento condicional consistente em não ter cometido falta grave nos últimos 12 meses (art. 83, III, "b", do CP, inserido pela Lei Anticrime) limita a valoração do requisito subjetivo (bom comportamento durante a execução da pena, alínea "a" do referido inciso).
3. Tese: a valoração do requisito subjetivo para concessão do livramento condicional - bom comportamento durante da execução da pena (art. 83, inciso III, alínea "a", do Código Penal) - deve considerar todo o histórico prisional, não se limitando ao período de 12 meses referido na alínea "b" do mesmo inciso III do art. 83 do Código Penal.
4. (...)
5. Recurso especial provido. (REsp n. 1.970.217/MG, relator Ministro Ribeiro Dantas, Terceira Seção, julgado em 24/5/2023, DJe de 1/6/2023.) grifei.
Isto posto, face não atender o apenado aos requisitos do art. 83, III, do Código Penal, indefiro o livramento condicional.

P.R.I. Faça-se o registro no SEEU

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_289',
        nome: 'Conferir prescrição (novo)',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Certifique-se, à vista do SAJ, SEEU, PJe, BNMP 2.0 e SIAPEN, se o apenado registra novas prisões após a data da fuga, bem como se constam outros processos criminais em seu desfavor (em andamento ou arquivados).

*Após, dê-se vista ao Ministério Público para opinar sobre possível prescrição.

*Após, voltem-me conclusos para decidir sobre possível prescrição.

$juizo.getCidade(), $data.getDataPorExtenso().

$rodape`,
    },
    {
        id: 'seeu_290',
        nome: 'Retificação GEP data-base crime único',
        tipoDocumento: 'Decisão',
        fonte: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O Superior Tribunal de Justiça, em decisão de sua Terceira Seção, competente para unificar a jurisprudência criminal, em hipótese de unificação do art. 111 da LEP, delimitou a tese jurídica, em recurso especial repetitivo, de que a fixação da data-base para benefícios executórios é pautada pelo princípio da legalidade.

Por isso, para cálculos de progressão de regime, entendeu que a desconsideração do período de cumprimento de pena desde a prisão do apenado ou desde a prática de novo crime ou falta grave configura excesso de execução (ProAfR no REsp 1.753.509/PR, 3ª S., DJe 11/3/2019).

Trata-se de ficção decorrente do art. 42 do CP, aplicável também em situação de condenação em apenas um processo, quando o período de prisão cautelar é considerado, na fase da execução penal, como pena efetivamente cumprida (arts. 42 do CP e 66, III, "c", da LEP).

Claro que o raciocínio não pode culminar na detração do art. 42 do CP em duplicidade, na sentença (pelo Juiz de conhecimento) e, outra vez, na fase da sua execução. Dito de outra forma, computa-se, na pena privativa de liberdade, o tempo de prisão provisória, no Brasil ou no estrangeiro, mas não há previsão de que o período seja diminuído em duplicidade.

Assim, são diferentes as situações que podem surgir, a depender do momento da observância do art. 42 do CP.

O processo de execução penal poderá abranger: a) o saldo remanescente de pena aplicada ao crime, quando o Juiz de conhecimento já abateu o período de prisão provisória do total da condenação, para fixação do regime prisional, em conformidade com o art. 387, § 2°, do CPP ou b) o total da pena aplicada ao crime, quando a detração penal terá de ser feita pelo Juiz das Execuções.

In casu, a detração penal não foi realizada na sentença e a guia de execução refere-se ao total da pena aplicada ao réu, sem nenhum abatimento anterior. O tempo de prisão provisória está sendo considerado como pena privativa de liberdade efetivamente cumprida (art. 66, III, "c", da LEP), não podendo desconsiderar seu termo inicial no cálculo da progressão de regime.

Assim, a data da prisão preventiva será o termo inicial do benefício do art. 112 do CP e o cálculo penal não poderá ser interrompido sem previsão legal, vale dizer, sem notícia de prática de outro fato definido como crime doloso ou de falta grave.

É verdade que se encontram precedentes do STJ e até do Supremo Tribunal Federal que consideram a data da última prisão como termo de benefícios.

Entretanto, consoante o princípio da legalidade, apenas o legislador pode estabelecer hipóteses de interrupção da data-base de direitos executórios.

O gozo de liberdade provisória ou o novo recolhimento do condenado para dar início à execução definitiva não são hipóteses, previstas na LEP, de reinício da contagem do prazo para progressão de regime e nem qualquer período em que o apenado permaneceu solto pode ser considerado como resgate de sua pena.

La data da prisão preventiva é o termo inicial do benefício e a fração do art. 112 da LEP, por sua vez, deve incidir sobre o total da reprimenda aplicada na sentença, sem nenhum abatimento, pois, caso contrário, haveria a diminuição em dobro de período de recolhimento cautelar, o que não é albergado pelo art. 42 do CP.

Ou seja, qualquer lapso de liberdade provisória em nenhuma hipótese será creditado como sanção privativa de liberdade efetivamente cumprida, pois não há permissivo legal para tanto.

Nestes sentido:

AGRAVO REGIMENTAL NO HABEAS CORPUS. EXECUÇÃO PENAL. ÚNICA CONDENAÇÃO. DETRAÇÃO PENAL. TEMPO DE PRISÃO PROVISÓRIA COMPUTADO COMO PENA EFETIVAMENTE CUMPRIDA. CONSIDERAÇÃO NO PRAZO PARA PROGRESSÃO DE REGIME. INCIDÊNCIA DA FRAÇÃO SOBRE O TOTAL DA PENA, SEM ABATIMENTO ANTERIOR. AGRAVO REGIMENTAL NÃO PROVIDO. 1. Esta Corte, em hipótese de unificação do art. 111 da LEP, delimitou a tese jurídica, em recurso especial repetitivo, de que a fixação da data-base para benefícios executórios é pautada pelo princípio da legalidade. Por isso, para cálculos de progressão de regime, a desconsideração do período de cumprimento de pena desde a prisão do apenado ou desde a prática de novo crime ou falta grave configura excesso de execução (ProAfR no REsp 1.753.509/PR, 3ª S., DJe 11/3/2019). 2. O raciocínio é em tudo aplicável à condenação relacionada a um único processo. Se o Juízo das Execuções (art. 66, III, "c", da LEP) considera o período de prisão ante tempus como pena efetivamente cumprida, não pode deixar de adotar seu termo inicial para individualizar a progressão de regime. Por ficção jurídica, entende-se que o reeducando iniciou o resgate da sanção antes mesmo de ser julgado e, portanto, é esse o marco temporal para o benefício, que somente poderá ser interrompido se houver previsão legal para tanto. A fração do art. 112 da LEP, por sua vez, incidirá sobre o total da reprimenda aplicada ao réu, sob pena de detração penal em dobro, o que não é albergado pelo art. 42 do CP. 3. O lapso de liberdade provisória em nenhuma hipótese será creditado como sanção privativa de liberdade efetivamente cumprida, pois não há permissivo legal para isso. 4. Agravo regimental não provido. (AgRg no HC n. 719.763/MS, relator Ministro Rogerio Schietti Cruz, Sexta Turma, julgado em 29/3/2022, DJe de 1/4/2022.).

Isto posto, por não encontrar respaldo legal para entender que a data-base para concessão de novos benefícios executórios deva ser a data da última prisão efetuada, *****mando retificar a guia de execução penal, fazendo constar como data-base para a progressão de regime o dia da segregação provisória do condenado, sendo irrelevante eventual lapso de liberdade, ou seja, observando que os períodos de soltura não serão reconhecidos como efetiva reclusão, para nenhum fim. *****mantenho a guia de execução penal como se encontra, ou seja, constar como data-base para a progressão de regime o dia da segregação provisória do condenado, sendo irrelevante eventual lapso de liberdade, de forma que os períodos de soltura não serão reconhecidos como efetiva reclusão, para nenhum fim.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

// Concatena lote 13 ao array principal
MODELOS_SEEU.push(...MODELOS_SEEU_LOTE13);

// Função para buscar modelo por nome
export function findModeloByNome(nome: string): ModeloSEEU | undefined {
    return MODELOS_SEEU.find(m => m.nome.toLowerCase().includes(nome.toLowerCase()));
}

// Função para listar todos os modelos
export function getAllModelos(): ModeloSEEU[] {
    return MODELOS_SEEU;
}

// Função para buscar modelo por ID
export function buscarPorId(id: string): ModeloSEEU | undefined {
    return MODELOS_SEEU.find(m => m.id === id);
}

// Função para buscar modelos por termo no nome ou conteúdo
export function buscarPorTermo(termo: string): ModeloSEEU[] {
    const termoLower = termo.toLowerCase();
    return MODELOS_SEEU.filter(m =>
        m.nome.toLowerCase().includes(termoLower) ||
        m.conteudo.toLowerCase().includes(termoLower)
    );
}
