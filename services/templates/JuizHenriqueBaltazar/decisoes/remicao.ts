/**
 * Modelos de Decisão - Remição
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: remicao
 * Status: Concluído (14/14)
 * Total de modelos: 14
 */

import { Modelo } from '../../types';

export const DECISOES_REMICAO: Modelo[] = [
    {
        id: 'seeu_036',
        nome: 'Remição curso profissionalizante',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena por estudo realizado através da conclusão de curso profissionalizante, conforme certificado, totalizando ** horas de estudo.

O MP opinou pela remição de ** dias do total da pena.

Decido.

O instituto da remição previsto no art. 126 da LEP constitui um forte instrumento para reeducação dos encarcerados, servindo de incentivo para que o sentenciado desenvolva atividade laborterápica rotineira vinculada à ressocialização.

O art. 126, § 1º, I, da LEP dispõe o limite diário de estudo em 4 horas (12 horas de frequência escolar divididas, no mínimo, em três dias), para fins de remição pelo estudo.

Isso posto, julgo remidos ** dias da pena em execução.

P.R.I. Insira-se o evento no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_037',
        nome: 'Remição curso profissionalizante (43 dias)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
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
        id: 'seeu_065',
        nome: 'Remição trabalho',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena pelo trabalho, constando folha de frequência e produção do apenado.

O MP opinou pela concessão da remição de ** dias da pena em razão do trabalho.

Decido.

O instituto da remição previsto no art. 126 da LEP constitui um forte instrumento para reeducação dos encarcerados, promovendo o impedimento à ociosidade e servindo de incentivo para atividade laborterápica.

Conforme Prof. Julio Fabbrini Mirabete: "a Lei de Execução instituiu no País uma forma de redenção de parte da pena privativa de liberdade através de remição, na qual, pelo trabalho, o condenado abrevia parte do tempo de sua condenação".

Compulsando os autos, verifico que o apenado trabalhou efetivamente por ** dias em serviços internos na unidade prisional, com jornada de trabalho dentro dos parâmetros legais.

Isso posto, julgo remidos ** dias da pena em execução.

P.R.I. Insira-se o evento no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_066',
        nome: 'Remição leitura',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena em regime fechado, vieram-me conclusos os autos para análise de pedido de remição por leitura.

O MP opinou pela concessão da remição de ** dias em razão da leitura das obras constantes no relatório.

Relatados.

Além da remição pelo trabalho e pelo estudo, devem ser consideradas outras modalidades, em interpretação extensiva in bonam partem, sendo a remição por leitura uma delas.

A Portaria nº 03/2023 do Grupo de Monitoramento e Fiscalização - GMF/TJRN dispõe em seu art. 3º:

"Terão direito à remição de pena pela leitura as pessoas privadas de liberdade que comprovarem a leitura de qualquer obra literária."

Para cada obra lida corresponderá a remição de 4 dias, considerado, a cada período de 12 meses, o limite de até 12 obras e a possibilidade de remir até 48 dias de pena.

No caso, restaram consubstanciados os requisitos necessários à concessão.

Isso posto, julgo remidos ** dias da pena imposta ao apenado.

P.R.I. Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_153',
        nome: 'Remição trabalho padrão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena pelo trabalho, conforme relatório e cálculos juntos, que obteve parecer favorável do MP.

*Impende registrar que o relatório informa frequência diária de 4h trabalhadas, quando o art. 33 da LEP exige o mínimo de 6h/dia.

Decido.

Com razão o parecer, pois face à documentação, o apenado trabalhou efetivamente ** em serviços internos na unidade prisional, durante o período de **, com carga horária diária de **, pelo que ** dias da pena se encontram remidos pelo trabalho.

Conforme Prof. Mirabete: "a Lei de Execução instituiu uma forma de redenção de parte da pena através de remição, na qual, pelo trabalho, o condenado abrevia parte do tempo de sua condenação."

Isto posto, julgo remidos ** dias da pena em execução.

P.R.I. Insira-se o evento no SEEU.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_156',
        nome: 'Remição ENEM indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

O apenado requereu remição pelo estudo, alegando aprovação no ENEM, realizado no ano de ***.

O MP opinou pelo indeferimento.

Relatados.

Dispõe a Resolução nº 391/2021 do CNJ, em seu art. 3º, Parágrafo único, que a remição pelo estudo exige APROVAÇÃO no ENEM, e não apenas tê-lo prestado.

No caso, a documentação somente comprova que o apenado prestou o exame, contudo sem comprovar a aprovação via SiSU.

Conforme STJ: "as horas expendidas para aprender em atividade escolar fora do ambiente prisional, no caso de conclusão do ensino médio antes da execução, não podem integrar o cálculo da remição" (EDcl no HC n. 716.072/SP).

Ainda: "tendo o apenado concluído o ensino médio e superior antes do cumprimento da pena, incabível a remição por aprovação no ENEM" (AgRg no REsp n. 1.979.591/SP).

Isto posto, indefiro o pedido de remição pelo estudo-ENEM.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_183',
        nome: 'Remição ENEM com SiSU (100 dias)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução em regime ** em que o apenado requereu remição pelo estudo, em razão de ter realizado o ENEM no ano de **.

Verifica-se que o apenado juntou comprovação da aprovação para curso superior através do ENEM e SiSU.

Relatados.

A Resolução nº 391/2021 do CNJ viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no ENEM.

Conforme STJ (HC 602.425-SC): "as 1.200 horas dispostas na Recomendação n. 44/2013 do CNJ já equivalem aos 50% da carga horária definida legalmente para cada nível de ensino."

A base de cálculo para remição pela aprovação no ENEM é de 1.200 horas.

Consoante o art. 126 da LEP, a contagem se dará à razão de 1 dia de pena a cada 12 horas de frequência escolar. Portanto, tendo sido o apenado aprovado em todas as áreas de conhecimento: 1.200h / 12 = 100 dias de remição.

Isto posto, defiro o pedido, declarando remidos 100 dias da pena em execução.

P.R.I. Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_184',
        nome: 'Remição ENEM sem SiSU (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena privativa de liberdade em que o apenado requereu remição pelo estudo, em razão de ter realizado o ENEM no ano de ***.

Verifica-se que o apenado não juntou comprovação da aprovação para algum curso superior através do ENEM, pois a documentação colacionada somente comprova que prestou o exame durante o cumprimento de sua pena.

Relatados.

A Recomendação nº 391/2021 do CNJ viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no Exame Nacional do Ensino Médio, e não apenas por tê-lo prestado.

No caso, a documentação acostada pela defesa somente comprova que o apenado prestou o exame do ENEM, contudo sem comprovar a aprovação, critério expressamente exigido.

Isto posto, indefiro o pedido de remição pelo ENEM.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_185',
        nome: 'Remição ENCCEJA (133 dias)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução em que o apenado requereu remição pelo estudo, em razão de ter concluído o Ensino Fundamental por meio do ENCCEJA no ano de ***.

Foram juntados Certificado de Conclusão e Histórico do ENCCEJA.

Relatados.

A Resolução nº 391/2021 do CNJ viabiliza a remição pelo estudo alicerçada na APROVAÇÃO em exames nacionais.

Conforme STJ (HC 602.425-SC): "as 1.600 horas dispostas na Recomendação n. 44/2013 do CNJ já equivalem aos 50% da carga horária definida legalmente para o ensino fundamental."

A base de cálculo para remição pela aprovação no ENCCEJA é de 1.600 horas.

Consoante o art. 126 da LEP: 1.600h / 12 = 133 dias de remição.

Por conclusão do ensino durante o cumprimento da pena, tem direito ao acréscimo de 1/3 previsto no § 5º do art. 126 da LEP.

Isto posto, defiro o pedido, declarando remidos *** dias da pena.

P.R.I. Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_189',
        nome: 'Remição estudo PROJOVEM',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de remição de parte da pena pelo estudo, conforme declaração e tabela de presença do PROJOVEM URBANO, a partir dos quais elaborou-se cálculo de dias remidos, que obteve parecer favorável do MP.

Relatados.

Com razão o parecer, pois face à documentação junta, o apenado estudou efetivamente ** com carga horária diária de 4h, no período de **, pelo que ** dias da pena se encontram remidos pelo estudo.

Art. 126, §1º, I, da LEP: "1 dia de pena a cada 12 horas de frequência escolar, divididas, no mínimo, em 3 dias."

Isto posto, julgo remidos ** dias da pena em execução.

P.R.I. Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_190',
        nome: 'Remição ENEM (Não aprovação)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado requereu remição pelo estudo devido à realização do ENEM.

Relatados.

A Recomendação nº 391/2021 do CNJ viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no Exame Nacional do Ensino Médio, e não apenas por tê-lo prestado. No caso, as notas obtidas não foram suficientes para ingressar em algum curso superior ou certificar conclusão.

Isto posto, indefiro o pedido de remição.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_227',
        nome: 'Remição insuficiente (curso 1 dia)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de PEC que vieram conclusos para examinar possível remição por estudo, em razão do apenado ter concluído curso de ***.

O MP opinou pelo indeferimento em razão do curso, de * horas, ter-se realizado em apenas um dia.

Decido.

Com razão o parecer, pois conforme dispõe o art. 126, § 1º, I, da Lei 7.210, a remição por estudo se dará à razão de 1 dia de pena a cada 12 horas de estudo, divididas, no mínimo, em três dias.

No caso, todo o curso decorreu em apenas um dia.

Entretanto, os esforços do apenado devem ser aproveitados posteriormente, quando nova carga horária de estudo for acrescentada.

Isto posto, suspendo a análise do benefício até que sobrevenha nova informação de horas de estudo.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_231',
        nome: 'Remição ENCCEJA parcial indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos, etc.

Trata-se de execução em que o apenado requereu remição pelo estudo, em razão de ter realizado a prova do ENCCEJA no ano de **.

Foi juntada Declaração de Proficiência com resultado satisfatório apenas na área de **.

O MP opinou pelo indeferimento.

Relatados.

A Resolução nº 391/2021 do CNJ viabiliza a remição alicerçada na APROVAÇÃO, ou seja, certificação de conclusão do ensino fundamental ou médio. No caso, a documentação comprova que o apenado alcançou nota máxima apenas em uma das cinco áreas da prova.

Isto posto, indefiro o pedido de remição.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_247',
        nome: 'Remição ENEM aprovado (100 dias)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'remicao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução em regime fechado em que o apenado requereu remição pelo estudo, em razão de ter realizado o ENEM no ano de **.

O MP opinou favoravelmente para que fossem remidos 100 dias.

Verifica-se que o apenado obteve pontuação mínima exigida em cada disciplina.

Relatados.

A Resolução nº 391/2021 do CNJ viabiliza a remição pelo estudo alicerçada na APROVAÇÃO no ENEM.

Conforme STJ (HC 602.425-SC, Info 689): "as 1.200 horas dispostas na Resolução já equivalem aos 50% da carga horária definida legalmente para o ensino médio."

Art. 126 da LEP: 1.200h / 12 = 100 dias de remição.

Isto posto, defiro the pedido, declarando remidos 100 dias da pena em execução.

P.R.I. Atualize-se o Atestado de Penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_REMICAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_REMICAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
