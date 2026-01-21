/**
 * Decisões de Agravo - Juiz Henrique Baltazar
 * @version 0.1.0
 * 
 * IDs: seeu_004, seeu_026, seeu_038, seeu_039, seeu_090, seeu_105, seeu_106, 
 *      seeu_107, seeu_108, seeu_114, seeu_115, seeu_155, seeu_157, seeu_159,
 *      seeu_167, seeu_181, seeu_192, seeu_206, seeu_219, seeu_224, seeu_229,
 *      seeu_230, seeu_233, seeu_235, seeu_236, seeu_237, seeu_239, seeu_240,
 *      seeu_243, seeu_244, seeu_248, seeu_249, seeu_250, seeu_255, seeu_256,
 *      seeu_259, seeu_261, seeu_268, seeu_269, seeu_270, seeu_272, seeu_275,
 *      seeu_276, seeu_277, seeu_278, seeu_279, seeu_282, seeu_284
 * 
 * Total: 48 modelos
 */

import { Modelo } from '../../types';

export const DECISOES_AGRAVO: Modelo[] = [
    {
        id: 'seeu_004',
        nome: 'Agravo modificando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
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
        id: 'seeu_026',
        nome: 'Agravo prescrição suspensa',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
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
        id: 'seeu_038',
        nome: 'Agravo percentual homicídio',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
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
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
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
        id: 'seeu_090',
        nome: 'Agravo não pagamento multa',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
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
        id: 'seeu_105',
        nome: 'Agravo mantendo indeferimento LC',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do ev. * que indeferiu-lhe o livramento condicional.

O Ministério Público contraarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois ficou demonstrada a falta de comportamento satisfatório no cumprimento da pena (Código Penal, art. 83, III, a), já que se verifica que o apenado praticou * falta*s grave*s.

Neste sentido, registro a jurisprudência do Superior Tribunal de Justiça: "Embora o cometimento de falta grave no curso da execução não interrompa o lapso temporal aquisitivo do livramento condicional, conforme previsto na Súmula n. 441 do STJ, a penalidade pode impedir a concessão do benefício por ausência de implementação do requisito subjetivo, com amparo no art. 83, III, do Código Penal." (AgRg no HC n. 739.618/SP, STJ)

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu o livramento condicional ao agravante.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito
$rodape`,
    },
    {
        id: 'seeu_106',
        nome: 'Agravo mantendo LC',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Agrava * da decisão de fl. * que concedeu livramento condicional ao apenado, alegando que não atenderia ao requisito subjetivo, pois praticara **faltas médias e grave no decorrer da pena.

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
        nome: 'Agravo mantendo (modelo genérico)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.

Agrava * da decisão de fl. * que converteu em privativa de liberdade as penas restritivas de direitos que recebera quando condenado por praticar delito capitulado no art. * do Código Penal.

Intimado, o Ministério Público contra-arrazoou insistindo na manutenção da decisão agravada.

Relatados.

*Sem razão o agravante, pois, conforme bem explicitado nas razões ministeriais de fls. *, foi ele advertido diversas vezes quanto às conseqüências do descumprimento das restrições de direitos impostas na sentença, sem que tal importasse em mudança de seu comportamento.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que converteu em privativa de liberdade as penas restritivas de direitos impostas ao agravante.

Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso, providenciando sua juntada e formando-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_108',
        nome: 'Agravo liminar',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o Ministério Público da decisão de fl. *, que deferiu o livramento condicional ao apenado, alegando ausência de qualquer fundamentação, enquanto não atende o beneficiário ao requisito subjetivo, dado o tempo em que permaneceu foragido do cumprimento da pena.

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
        id: 'seeu_114',
        nome: 'Agravo regressão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento *** que regrediu-lhe o regime prisional em razão da prática de novo crime.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois antigo e sempre referido acórdão do Min. RICARDO LEWANDOWSKI ensina que "a prática de 'fato definido como crime doloso', para fins de aplicação da sanção administrativa da regressão, não depende de trânsito em julgado da ação penal respectiva" (HC 93782, 16/09/2008).

Ademais, a jurisprudência do STJ é cristalizada nesse sentido, inclusive objeto do enunciado da Súmula n. 526.

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos, acrescidos das bem lançadas contrarrazões ministeriais.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_115',
        nome: 'Agravo indulto 2022 mantendo negativa',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento XX.A que negou indulto por não atender o apenado aos critérios estabelecidos pelo próprio Decreto 11.302/2022.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada o Decreto 11.302/2022 exige, ao benefício, que as penas somadas/unificadas não sejam superiores a 05 (cinco) anos.

E ainda que não fosse o caso há de se considerar a inconstitucionalidade do art. 5º, o que inclusive é objetivo de Ação Direta de Inconstitucionalidade nº 7.390.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$assinaturaJuizDireito

$rodape`,
    },
    {
        id: 'seeu_155',
        nome: 'Agravo mantendo fuga',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que regrediu-lhe o regime prisional em razão de fuga, sob a alegação de que não teria praticado novos crimes no período em que esteve foragido, bem como pela regressão ter sido para regime mais gravoso que o originalmente fixado na sentença condenatória.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do Superior Tribunal de Justiça, "O reconhecimento da fuga como falta grave decorre de expressa disposição legal (art. 50, inciso II, da LEP)" (HC 478.430/RS).

No mesmo sentido decidiu o Supremo Tribunal Federal no HC 129936 (2016), afirmando que a fuga constitui falta grave, sujeitando o apenado à regressão de regime e perda de dias remidos.

Ademais, também não procede a reclamação quanto à regressão a regime mais gravoso que o originalmente fixado na sentença, conforme RHC 104585 do STF.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

*Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_157',
        nome: 'Agravo exame criminológico',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que entendeu necessária a realização de exame criminológico para formar o convencimento do juízo acerca da possibilidade de progressão de regime.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o Supremo Tribunal Federal, por jurisprudência consolidada, admite que pode ser exigido fundamentadamente o exame criminológico pelo juiz para avaliar pedido de progressão de regime prisional (HC 206868 AgR, Relatora: ROSA WEBER, Primeira Turma, julgado em 25/10/2021).

No caso, o exame foi requisitado em razão da constatação de que ***

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_159',
        nome: 'Agravo data-base',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava * da decisão do evento * que fixou como data-base, para progressão de regime, a da última prisão ou falta grave praticada pelo apenado.

Intimada, a defesa contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência da Câmara Criminal do TJRN, amparada em Proposta de Afetação no Recurso Especial (ProAfR no REsp 1753512/PR), "a unificação de penas não enseja a alteração da data-base para concessão de novos benefícios executórios".

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

*Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_167',
        nome: 'Agravo saídas negando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

Vistos etc.

Agrava ** da decisão do evento ** que negou-lhe saídas externas desvigiadas.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o Superior Tribunal de Justiça reiteradamente tem decidido que "o regime semiaberto não obriga o Juiz das Execuções a deferir automaticamente o deferimento do trabalho extramuros, havendo que se avaliar o preenchimento dos requisitos do art. 123 da Lei n. 7.210/1984" (RHC 50.097/RJ).

Em assim sendo, por seus próprios fundamentos, acrescido das razões ministeriais, mantenho a decisão que indeferiu as saídas externas desvigiadas ao apenado.

*Intime-se o agravante a indicar as peças dos autos cujas cópias deseja que acompanhe o recurso.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_181',
        nome: 'Agravo base trânsito',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava a Defensoria Pública da decisão do evento ** que fixou como data-base, para progressão de regime, a do último trânsito em julgado das condenações do apenado.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do Supremo Tribunal Federal, que modificou o entendimento sustentado pela 3ª Seção do STJ, a data-base para progressão, no caso de apenados com mais de uma condenação, deve ser a do último trânsito em julgado.

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos.

*Intime-se a defesa para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo, que deverá protocolar diretamente no PJe de 2º grau.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_192',
        nome: 'Agravo falta média',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que lhe impôs punição por falta média, consistente em não recolhimento ao pernoite na unidade prisional.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão agravada, desatendeu ele ao previsto no inc. I, parte final, do art. 39 da lei nº 7.210/84 ("cumprimento fiel da sentença"), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do RN, art. 74, inc. IV.

Registro que a falta praticada poderia também ser considerada grave (fuga), tendo este juízo optado pela decisão mais benéfica porque depois ele retornou ao cumprimento da pena.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

*Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().
 

Henrique Baltazar Vilar dos Santos

Juiz de Direito`,
    },
    {
        id: 'seeu_206',
        nome: 'Agravo percentuais mantendo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que deferiu pedido ministerial para retificar os percentuais de cumprimento da pena para progressão de regime.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois os percentuais de atingimento do requisito objetivo para progressão de regime foram fixados nos termos da nova redação do art. 112 da Lei de Execução Penal, já que mais benéfica ao apenado que a previsão anterior.

Registro que utilizar para uma pena parte da nova lei e para outras a redação anterior importaria em criar nova legislação combinando leis, prática vedada pelo verbete nº 501 da Súmula do STJ.

Neste sentido: "A condição de reincidente, uma vez adquirida pelo sentenciado, estende-se sobre a totalidade das penas somadas" (REsp n. 2.042.501, Min. Ribeiro Dantas).

Em assim sendo, por seus próprios fundamentos, acrescidos das bem lançadas contrarrazões ministeriais, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_219',
        nome: 'Agravo retificação GEP negando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava a Defensoria Pública da decisão do evento ** que indeferiu pedido para alteração dos percentuais necessários para atingimento do requisito objetivo para progressão de regime.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o § 2º do art. 2º da Lei nº 8.072/90, que previa 3/5 aos reincidentes em crimes hediondos, não utilizava termo "reincidente específico", da mesma forma que a Lei nº 13.964/19, não sendo possível inferir categorias diferenciadas de reincidência.

Conforme HC n. 596.572/SP do Min. FELIX FISCHER: "A condição de reincidente, uma vez adquirida pelo sentenciado, estende-se sobre a totalidade das penas somadas."

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos.

*Intime-se a defesa para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_224',
        nome: 'Agravo competência mantendo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o Ministério Público da decisão do evento ** que manteve a competência do juízo para o feito.

Intimada, a defesa contrarrazoou pugnando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois, como esclarecido na decisão recorrida, inexiste no juízo para onde pretende seja remetido o PEC estrutura de secretaria judiciária e unidade prisional que possibilite o adequado acompanhamento da execução da pena.

Ademais, foi acordado pelo COPEP (Colégio dos Juízes de Execução Penal) que este juízo ficaria responsável pela execução penal em regime semiaberto nas Comarcas da Grande Natal.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que não reconheceu a incompetência deste juízo para o feito.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_229',
        nome: 'Agravo domiciliar mantendo (COVID-19)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava ** da decisão do evento ** que negou-lhe a prisão domiciliar.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, como esclarecido na decisão recorrida, o sistema prisional adotou providências para evitar a contaminação dos presos, tendo inclusive suspendido a entrada de visitas nos presídios.

O CREMERN, Parecer nº 03/2020, afirmou que a identificação pela administração penitenciária dos custodiados em grupo de risco e seu monitoramento são medidas adequadas para o enfrentamento da pandemia nas unidades prisionais.

Conforme Min. Rogério Schietti (STJ): "...a crise do novo coronavírus deve ser sempre levada em conta, mas não é um passe livre para a liberação de todos, pois ainda persiste o direito da coletividade em ver preservada a paz social" (HC n. 567.408/RJ).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu a prisão domiciliar ao agravante.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_230',
        nome: 'Agravo domiciliar mantendo (variante 2)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava ** da decisão do evento ** que negou-lhe a prisão domiciliar.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, como esclarecido na decisão recorrida, o sistema prisional adotou providências para evitar a contaminação dos presos.

O CREMERN, Parecer nº 03/2020, afirmou que as medidas adotadas são adequadas para o enfrentamento da pandemia nas unidades prisionais.

Conforme DEPEN: "Não há nos normativos uma recomendação de concessão de regime domiciliar de forma generalizada para presos."

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu a prisão domiciliar ao agravante.

*Forme-se o instrumento, que deve subir para a egrégia Câmara Criminal.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_233',
        nome: 'Agravo unificação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento **, que, confirmando a do evento **, unificou penas a ele impostas.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme restou claro na decisão agravada, a manutenção da prisão preventiva do apenado impõe a unificação provisória da pena, ainda que não haja trânsito em julgado.

Conforme STJ (EDcl no HC 379.829/ES): "Uma vez admitida a execução provisória, deve-se, igualmente, permitir que seja realizada a unificação provisória da pena."

No mesmo sentido decidiu a eg. Câmara Criminal do TJRN no Agravo em Execução nº 0807642-27.2021.8.20.0000.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_235',
        nome: 'Agravo prazo comportamento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu progressão de regime, por não cumprido o tempo exigido pelo Regimento Disciplinar Penitenciário para aferição do requisito subjetivo.

O Ministério Público contrarrazoou, pugnando pela reforma da decisão agravada.

Relatados.

Nos termos do art. 24, I, da CF/88, compete à União, aos Estados e ao DF legislar concorrentemente sobre direito penitenciário.

O RN publicou o Regulamento Disciplinar Penitenciário, art. 95, II, que determina conduta disciplinar "boa" quando no prazo mínimo de 06 meses não tiver cometido infração grave ou média.

A LEP, art. 112, § 1º, dispõe que o apenado só terá direito à progressão se ostentar boa conduta carcerária.

Assim, sem razão o agravante e o MP, pois o apenado não passou tempo suficiente no regime fechado para aferição do bom comportamento.

Em assim sendo, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_236',
        nome: 'Agravo prescrição anterior denúncia',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu pedido de reconhecimento de prescrição executória.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão recorrida, a incidência de causa interruptiva impediu o transcurso do prazo prescricional.

Nos termos do art. 110, § 1º, do CP: "A prescrição, depois da sentença condenatória com trânsito em julgado para a acusação, regula-se pela pena aplicada, não podendo, em nenhuma hipótese, ter por termo inicial data anterior à da denúncia ou queixa."

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_237',
        nome: 'Agravo prescrição mantendo indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu pedido de reconhecimento de prescrição executória.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme esclarecido na decisão recorrida, a incidência de causa interruptiva impediu o transcurso do prazo prescricional.

É assente na jurisprudência do STF ser irrelevante que o crime tenha sido praticado antes ou depois da Lei nº 11.596/2007 para se considerar que o acórdão de segundo grau, confirmando a condenação mas modificando a pena, é causa de interrupção do prazo prescricional.

Neste sentido: HC 205566 ED-AgR (STF), HC 134853, HC 106.222.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_239',
        nome: 'Agravo progressão indeferida por requisito subjetivo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que indeferiu-lhe a progressão de regime por ausente o requisito subjetivo.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois a noção de bom comportamento do apenado exigido como requisito subjetivo para a progressão de regime "abrange a valoração de elementos que não se restringem ao atestado emitido pela direção carcerária, sob pena de transformar o juiz em mero homologador de documentos administrativos" (AgRg no HC 660.197/SP, STJ).

Nestes termos: "Em sede de execução penal, vale o princípio in dubio pro societate, o qual preconiza que, na dúvida quanto à aptidão para a promoção a regime mais brando, faz-se necessário o encarceramento por um período maior de tempo" (AgRg no HC 639.850/RS, STJ).

No caso, restou esclarecido na decisão agravada que ***

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_240',
        nome: 'Agravo percentual único',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que indeferiu seu pedido para retificar os percentuais de cumprimento da pena para progressão de regime.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme anotado na decisão agravada, deve ser fixado apenas um patamar para todos os delitos (AgRg nos EDcl no HC 668.301/SP), sendo todas penas somadas ou unificadas para fins de fixação do regime prisional (LEP, art. 111).

Registro que a decisão agravada mandou corrigir erro de lançamento do cálculo da pena, atendendo à jurisprudência do STJ.

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_243',
        nome: 'Agravo data falta média',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o Ministério Público da decisão do evento ** que concedeu progressão de regime ao apenado, por entender que seria necessário aguardar o prazo de 60 dias após o cumprimento de punição disciplinar por falta média que lhe fora imposta.

Intimada, a defesa contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois a falta média foi praticada mais de 60 dias antes da progressão (data da última violação anotada), mesmo que a punição tenha sido cumprida posteriormente.

A data de cumprimento da punição não está ao critério do apenado, pois depende da conveniência administrativa do sistema prisional, não podendo ele ser prejudicado por isso.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_244',
        nome: 'Agravo mantendo alteração',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que alterou os cálculos do requisito objetivo para progressão de regime.

Intimado, o Ministério Público contrarrazoou opinando pela alteração da decisão agravada.

Relatados.

Sem razão o agravante, pois os percentuais foram fixados nos termos da antiga redação do art. 112 da LEP, que neste particular não difere da nova lei.

Relembro, por oportuno, como o STJ esclarece: "não é juridicamente possível a utilização da fração de 1/6 para o crime comum e de 2/5 para o hediondo, devendo ser fixado apenas um patamar para ambos" (AgRg nos EDcl no HC 668.301/SP).

A decisão que homologa cálculos da pena não faz coisa julgada, estando sujeita à cláusula rebus sic stantibus (HC 385.541/SP).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_248',
        nome: 'Agravo monitoramento rompimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado decisão do evento * que regrediu-lhe o regime prisional em razão de rompimento da tornozeleira eletrônica.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do STJ, o rompimento do equipamento de monitoração eletrônica configura falta grave.

Neste sentido: "Ao romper a tornozeleira eletrônica, o paciente desrespeitou a ordem recebida para não violar o equipamento de monitoração, o que configura a falta grave tipificada no art. 50, VI, c/c o art. 39, V, ambos da LEP" (HC 460.440/RS).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_249',
        nome: 'Agravo falta média monitoramento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que lhe impôs punição por falta média, consistente em descumprimento das condições do monitoramento eletrônico, dado o não recolhimento ao local determinado no horário noturno.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois desatendeu ao previsto no inc. I, parte final, do art. 39 da LEP ("cumprimento fiel da sentença"), praticando falta disciplinar média, prevista no Regulamento Disciplinar do RN, art. 74, inc. IV.

Registro que a falta praticada também poderia ser considerada grave, nos termos do STJ (AgRg no HC 509.270/SP). Este juízo, porém, preferiu considerar a falta como média.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_250',
        nome: 'Agravo negando mudar para trânsito',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena em regime semiaberto, em que o MP pugnou pela retificação da guia, alegando erro na data-base para progressão ao regime aberto.

Relatados.

Sem razão o agravante, pois a jurisprudência do STJ segue o STF (HC 115.254) para estabelecer, como marco para progressão, a data em que o apenado preencheu os requisitos do art. 112 da LEP.

Ademais, o STJ sedimentou que a alteração da data-base em razão da unificação das penas não encontra respaldo legal: "A unificação das penas, por si só, não altera a data-base para concessão de novos benefícios" (AgRg no HC 456.329/MT).

Isto posto, mantenho a decisão agravada, por seus próprios fundamentos.

Intime-se o agravante para selecionar e gravar os arquivos das peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_255',
        nome: 'Agravo novo crime',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que regrediu-lhe o regime prisional em razão da prática de fato previsto como crime doloso, alegando violação aos princípios da presunção de inocência e não culpabilidade.

Intimado, o Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme dispõe o verbete 526 da Súmula do STJ: "O reconhecimento de falta grave decorrente do cometimento de fato definido como crime doloso no cumprimento da pena prescinde do trânsito em julgado de sentença penal condenatória."

O STF reconheceu tese com Repercussão Geral (Tema 758, RE 776823): "O reconhecimento de falta grave consistente na prática de fato definido como crime doloso no curso da execução penal dispensa o trânsito em julgado."

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_256',
        nome: 'Agravo perda dias remidos',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que, reconhecendo omissão em decisão anterior que reconhecera falta grave, julgou perdidos um quinto dos dias remidos.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme iterativa jurisprudência do STJ: "O cometimento de falta grave pelo apenado (a) importa na alteração da data-base para novos benefícios, salvo LC, indulto e comutação; (b) autoriza a regressão de regime e (c) a revogação de até 1/3 dos dias remidos" (AgRg no HC n. 732.365/SP).

A decretação da perda dos dias remidos não preclui, na medida em que é efeito legal decorrente da penalidade administrativa (HC n. 182.317/SP).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_268',
        nome: 'Agravo unificação PPL em PRD',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que unificou penas a ele impostas e fixou o regime fechado para cumprimento.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme pacífica jurisprudência do STJ, "sobrevindo condenação a pena restritiva de direitos para quem cumpria pena privativa de liberdade, converte-se aquela em sanção corporal, unificando-se as reprimendas" (AgRg no REsp n. 1.960.148/MG).

No mesmo sentido: "Sobrevindo condenação que impossibilite o cumprimento simultâneo das penas, deve-se proceder à conversão da sanção restritiva de direitos em privativa de liberdade, unificando-se as penas" (AgRg no HC n. 697.843/SC).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_269',
        nome: 'Agravo unificação PRD em PPL',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que unificou penas a ele impostas e fixou o regime fechado para cumprimento.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, conforme Tema Repetitivo nº 1106 do STJ: "Sobrevindo condenação por PPL no curso da execução de PRD, as penas serão unificadas, com a reconversão."

Nesses casos, nos termos do art. 111 da LEP, deve-se proceder à unificação das penas, não sendo aplicável o art. 76 do CP (HC n. 624.161/MG).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_270',
        nome: 'Agravo remição ENEM parcial',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena em regime fechado em que o apenado requereu concessão de remição por estudo, em razão da aprovação parcial no ENEM.

Relatados.

A Resolução nº 391/2021 do CNJ, art. 3º, parágrafo único, exige a APROVAÇÃO em exames nacionais para remição por estudo.

A nota obtida não foi suficiente para certificar a conclusão do ensino pretendido, não havendo direito à remição parcial.

Sem razão o agravante, pois a legislação é clara ao exigir aprovação completa.

Em assim sendo, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_271',
        nome: 'Agravo saída temporária negando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que negou saída temporária.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o art. 122 da LEP prevê saída temporária apenas para apenados em regime semiaberto.

Conforme STJ: "O apenado que cumpre pena em regime fechado não preenche os requisitos estatuídos nos arts. 122 e seguintes da LEP, de maneira que não faz jus à concessão de saídas temporárias" (AgRg no HC n. 318.388/SC).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_272',
        nome: 'Agravo crime continuado',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que indeferiu seu pedido para considerar suas condenações como continuidade delitiva.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois a alteração no modus operandi dos delitos, bem como a ausência de liame subjetivo entre as condutas, afasta a ficção da continuidade delitiva, demonstrando habitualidade criminosa.

Conforme STJ (AgRg no HC n. 730.671/SC): "O Tribunal a quo não constatou a existência do requisito subjetivo da unidade de desígnios entre os crimes, tratando-se de habitualidade delitiva."

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_276',
        nome: 'Agravo transferência',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que não conheceu do seu pedido de transferência para unidade prisional diversa.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois a transferência de apenados entre unidades prisionais depende de análise de critérios de oportunidade e conveniência, inclusive segurança prisional, não constituindo direito subjetivo a permanência em estabelecimento próximo de sua família.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_278',
        nome: 'Agravo carga horária trabalho',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento ** que converteu sua carga horária de trabalho, inferior ao mínimo legal, de forma a possibilitar o cálculo remicional, dividindo as horas por oito.

O Ministério Público contrarrazoou pugnando pela reforma da decisão agravada.

Relatados.

Sem razão o agravante, pois a divisão da carga horária por oito seguiu o padrão de cálculo de todos os demais presos trabalhadores.

Assente no STJ: "para a remição da pena em razão do trabalho, o cálculo deverá ser realizado pela quantidade de dias efetivamente trabalhados, não sendo possível seu cômputo com o simples somatório das horas" (AgRg no HC n. 674.930/RS).

A decisão agravada beneficiou o apenado de forma a considerar a boa vontade em trabalhar, com uma espécie de banco de horas.

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_279',
        nome: 'Agravo tráfico hediondo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu pedido para reconhecer o crime de tráfico de drogas como não hediondo.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois o crime de tráfico (art. 33, caput, Lei 11.343/2006) é equiparado a hediondo por força do art. 5º, XLIII, da CF.

Conforme STJ: "A revogação do § 2º do art. 2º da Lei 8.072/90 não retira do tráfico sua caracterização como equiparado a hediondo" (AgRg no HC 729.332/SP).

O STF também decidiu: "O tráfico de drogas é equiparado a hediondo por previsão constitucional" (HC 218576 AgR).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão recorrida.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_282',
        nome: 'Agravo LC negado subjetivo (Tema 1161)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu-lhe o livramento condicional.

O Ministério Público contrarrazoou pugnando pela manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, apesar de atingido o requisito objetivo, ficou demonstrada a falta de comportamento satisfatório (CP, art. 83, III, a), pois o apenado ***.

O art. 83 do CP exige "bom comportamento durante a execução da pena" (alínea a).

Conforme Tema Repetitivo 1161 (REsp n. 1.970.217/MG): "A valoração do requisito subjetivo para LC deve considerar todo o histórico prisional, não se limitando ao período de 12 meses referido na alínea 'b'."

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu o livramento condicional.

P.R.I. Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_284',
        nome: 'Agravo mantendo indeferimento LC',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do ev. * que indeferiu-lhe o livramento condicional.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois ficou demonstrada a falta de comportamento satisfatório no cumprimento da pena (CP, art. 83, III, a), já que o apenado praticou * falta*s grave*s.

Conforme STJ (REsp 1.970.217/MG, Tema 1161): "O elemento subjetivo deve ser aferido durante todo o histórico prisional."

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu o livramento condicional.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_287',
        nome: 'Agravo LC preventiva negando',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Agrava o apenado da decisão do evento * que indeferiu-lhe o livramento condicional, alegando já ter atingido o requisito objetivo.

O Ministério Público contrarrazoou insistindo na manutenção da decisão agravada.

Relatados.

Sem razão o agravante, pois, apesar de atingido o requisito objetivo, não cabe o benefício, já que se encontra com prisão preventiva decretada em outro processo.

Neste sentido: "Não se admite o livramento condicional se o condenado está preso em razão de prisão preventiva decretada em outro processo" (jurisprudência consolidada).

Em assim sendo, por seus próprios fundamentos, mantenho a decisão que indeferiu o livramento condicional.

Intime-se o agravante para selecionar as peças necessárias à formação do instrumento de agravo.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_288',
        nome: 'Agravo LC indeferido subjetivo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O SEEU identificou que o apenado atingiu o requisito objetivo para o livramento condicional.

O Ministério Público opinou pelo indeferimento, considerando que o apenado foi penalizado com falta grave.

Relatados.

Apesar de atingido o requisito objetivo, não cabe o benefício ao apenado.

É que ficou demonstrada a falta de comportamento satisfatório (CP, art. 83, III, a), pois o apenado ***.

O art. 83 do CP exige "bom comportamento durante a execução da pena", conforme Tema Repetitivo 1161 do STJ.

Isto posto, face não atender o apenado aos requisitos do art. 83, III, do CP, indefiro o livramento condicional.

P.R.I. Faça-se o registro no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_289',
        nome: 'Agravo conferir prescrição',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'agravo',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Agrava o apenado da decisão que indeferiu reconhecimento de prescrição executória.

O Ministério Público contrarrazoou.

Relatados.

Certifique-se, à vista do SAJ, SEEU, PJe, BNMP 2.0 e SIAPEN, se o apenado registra novas prisões após a data da fuga, bem como se constam outros processos criminais em seu desfavor.

*Após, dê-se vista ao MP para opinar sobre possível prescrição.

*Após, voltem-me conclusos para decidir sobre possível prescrição.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_AGRAVO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_AGRAVO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
