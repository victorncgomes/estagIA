/**
 * Modelos de Decisão - Monitoramento Eletrônico
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: monitoramento
 * Status: Concluído (13/13)
 * Total de modelos: 13
 */

import { Modelo } from '../../types';

export const DECISOES_MONITORAMENTO: Modelo[] = [
    {
        id: 'seeu_006',
        nome: 'Monitoramento reiteração cautelar',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto pena privativa de liberdade, ao apenado foi concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que violara a área de inclusão por ** / deixara descarregar completamente a bateria do equipamento por *** vezes.

Relatados.

Determina a LEP, no art. 146-D, II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar los deveres a que estiver sujeito durante a sua vigência ou cometer falta grave."

Os deveres estão previstos no art. 4º da Portaria Conjunta nº 03/2023 das 1ª e 2ª VEP.

Neste sentido, STJ: "Constitui falta grave, passível de regressão ao regime mais gravoso, a inobservância das condições estabelecidas para a prisão domiciliar, no caso dos autos, monitoramento eletrônico" (AgRg no REsp 1738805/TO).

Isto posto, regrido cautelarmente o regime prisional para fechado.

Comunique-se à CEME e expeça-se mandado de prisão; quando cumprido, paute-se audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_011',
        nome: 'Monitoramento reiteração definitiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto, ao apenado foi concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que violara a área de inclusão/deixara descarregar a bateria.

Oportunizado justificar-se, o apenado alegou que **.

O MP pugnou pela homologação da falta grave, enquanto a Defesa pediu **.

Relatados.

Determina a LEP, no art. 146-D, II, que "A monitoração eletrônica poderá ser revogada: (...) se o acusado ou condenado violar os deveres a que estiver sujeito."

É o caso, sendo inaceitável a justificativa do apenado, pois **.

Isto posto, regrido para fechado o regime, bem como considero perdido 1/5 (dada a confissão) do tempo já remido.

P.R.I. Atualize-se o quadro de eventos.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_101',
        nome: 'Monitoramento falta média',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto, o apenado foi beneficiado com prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que violara as condições impostas.

Relatados.

No caso, verificam-se diversas violações às regras da monitoração eletrônica.

A LEP, art. 146-D, II, estabelece que a monitoração poderá ser revogada se o condenado violar os deveres.

Nessa situação, resta claro que desatendeu ao previsto no inc. I, parte final, do art. 39 da Lei 7.210/84 ("cumprimento fiel da sentença"), praticando falta disciplinar média, prevista no Regulamento Disciplinar do Sistema Penitenciário do RN, art. 74, inc. IV.

A referida falta não importa em regressão de regime.

Isto posto, reconheço a prática de falta média, suspendendo as autorizações de saídas externas desvigiadas por 10 dias.

P.R.I. Comunique-se à CEME e ao CPJC para cumprimento da sanção.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_102',
        nome: 'Monitoramento violações + req. progressão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto, o apenado foi beneficiado com prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que violara as condições impostas.

Acrescento que o SEEU identificara o apenado como tendo atingido o requisito objetivo para progressão de regime.

Interveio o MP.

Relatados.

Conforme atestado de pena, o apenado cumpriu o requisito objetivo para progressão.

Quanto ao subjetivo, porém, verificam-se diversas violações às regras da monitoração eletrônica.

Nessa situação, resta claro que desatendeu ao previsto no inc. I, parte final, do art. 39 da Lei 7.210/84, praticando falta disciplinar média.

A referida falta não importa em regressão de regime.

Isto posto, indefiro a progressão de regime e reconheço a prática de falta média, suspendendo as autorizações de saídas externas desvigiadas por *** dias.

P.R.I. Comunique-se à CEME.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_131',
        nome: 'Monitoramento bateria definitiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que deixara descarregar completamente a bateria do equipamento desde ***.

Oportunizado justificar-se, disse que ***.

O MP opinou pela falta grave com regressão, enquanto o defensor observou que *.

Relatados.

A LEP, art. 146-C, I, estabelece que o condenado tem o dever de "receber visitas do servidor e cumprir suas orientações", esclarecendo no parágrafo único que a violação poderá acarretar regressão ou revogação da prisão domiciliar.

O art. 50, VI, c/c art. 39, V, da LEP configura falta grave descumprir as ordens recebidas.

Ao deixar de carregar a bateria, o apenado desobedeceu à ordem de manter o aparelho em funcionamento, o que configura falta grave.

Conforme STJ: "Ao deixar de carregar a bateria da tornozeleira eletrônica, longe da esfera de vigilância, o paciente desobedeceu à ordem de manter o aparelho em funcionamento" (HC 342.466/SP).

Nos termos do art. 118, I, da LEP, a prática de falta grave enseja regressão.

Isto posto, torno definitiva a regressão do regime prisional para fechado, bem como considero perdido 1/3 do tempo já remido.

Atualize-se a GEP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_137',
        nome: 'Monitoramento bateria cautelar',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se pena em regime semiaberto, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a SEAP/CEME informado que deixara descarregar completamente a bateria do equipamento desde ***.

Relatados.

A LEP, art. 146-C, I, estabelece que o condenado tem o dever de cumprir orientações, esclarecendo no parágrafo único que a violação poderá acarretar regressão.

O art. 50, VI, c/c art. 39, V, da LEP configura falta grave descumprir as ordens recebidas.

Ao deixar de carregar a bateria, o apenado desobedeceu à ordem de manter o aparelho em funcionamento, o que configura falta grave.

Conforme STJ: "A prática de infração disciplinar de natureza grave ocasiona a regressão de regime prisional" (AgRg no HC n. 595.942/SP).

Nos termos do art. 118, I, da LEP, a prática de falta grave enseja regressão.

Isto posto, decreto cautelarmente a regressão provisória para fechado.

Expeça-se mandado de prisão e, quando cumprido, paute-se audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_142',
        nome: 'Monitoramento violação minutos (falta leve)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto, foi ao apenado concedida prisão domiciliar com monitoramento eletrônico, tendo a SEJUC/CEME informado que descumprira as condições firmadas, pois ***.

Interveio o MP, pedindo a suspensão do benefício.

Relatados.

A LEP, art. 146-D, II, estabelece que a monitoração poderá ser revogada se o condenado violar os deveres.

No caso, o apenado descumpriu por ** minutos o dever de permanecer recolhido entre 20h e 05h.

Tal transgressão parece-me configurar apenas falta leve, devendo ser punido com advertência.

Isto posto, reconheço como falta leve a transgressão anotada, mandando constar uma advertência no prontuário do apenado, com efeitos no seu comportamento.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_149',
        nome: 'Monitoramento falta média (audiência)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Executando-se em regime semiaberto harmonizado (com monitoramento eletrônico), informou a SEAP/CEME que o apenado descumprira as condições firmadas.

Ouvido em audiência, o apenado alegou que ***.

O MP opinou pela regressão, enquanto a defesa requereu que ***.

Relatados.

A LEP, art. 146-D, II, estabelece que a monitoração poderá ser revogada se o condenado violar os deveres.

No caso, restou esclarecido que o apenado descumpriu os deveres previstos nas alíneas a e g do art. 4º da Portaria nº 02/2016 deste juízo.

Conforme STJ: "Comete falta grave o apenado que viola a zona de monitoramento eletrônico" (HC 462.719/RS).

Registro que o art. 57 da LEP autoriza ao juiz aplicar punição suficiente à falta praticada.

Como o apenado retornou ao cumprimento regular, entendo suficiente a suspensão do benefício pelo mesmo período de violações.

Isto posto, homologo como falta média o conjunto de transgressões anotadas.

Retorne-se o apenado à situação anterior.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_166',
        nome: 'Monitoramento descumprimento punição (Regressão)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado foi punido mais de uma vez por violações às obrigações do monitoramento eletrônico, não comparecendo para cumprimento da sanção imposta, bem como não atendeu aos contatos da fiscalização.

Relatados.

Reiteradas vezes o penitente deixou de cumprir a pena, restando evidenciado que as faltas não foram fatos isolados, mas sim comportamento reiterado. O recolhimento noturno domiciliar monitorado eletronicamente é obrigação do apenado.

Conforme STJ: "o descumprimento das condições impostas é considerada falta grave, sendo causa de regressão do regime prisional" (AgRg no AREsp 1942873/TO).

Ao descumprir a obrigação de recolhimento domiciliar noturno e não atender às ligações, o apenado desobedeceu ordem judicial, o que configura falta grave.

Isto posto, decreto a regressão provisória para o regime fechado. Expeça-se mandado de prisão.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_172',
        nome: 'Monitoramento - Desobediência a comparecimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado, em monitoramento eletrônico, foi contatado para comparecer à unidade prisional e não atendeu, ou não respondeu aos contatos da fiscalização.

Relatados.

A LEP, no art. 146-C, I, estabelece que o apenado tem o dever de responder aos contatos e cumprir orientações da monitoração. O art. 50, VI, c/c art. 39, V, configura falta grave o descumprimento de ordens recebidas.

No caso, ao não atender à orientação de comparecer à unidade ou não responder aos contatos, o apenado praticou falta grave.

Isto posto, decreto cautelarmente a regressão provisória para o regime fechado.

Expeça-se mandado de prisão e, quando cumprido, paute-se audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_173',
        nome: 'Monitoramento - Sem comunicação (Cautelar)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

A CEME informou que o equipamento de monitoramento está sem comunicação, não tendo o apenado atendido às tentativas de contato. Há suspeita de "envelopamento" do equipamento.

Relatados.

A LEP, no art. 146-C, I, prevê o dever de responder aos contatos e manter o equipamento em funcionamento. Ao possibilitar a perda do sinal e não atender aos chamados, o apenado desobedeceu ordem judicial, o que configura falta grave (art. 50, VI, LEP).

Tais condutas permitem ao apenado circular livremente fora da vigilância, frustrando os fins da execução.

Isto posto, decreto cautelarmente a regressão provisória para o regime fechado.

Expeça-se mandado de prisão e, quando cumprido, paute-se audiência de justificação.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_196',
        nome: 'Pedido de instalação de tornozeleira',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado requereu a colocação da tornozeleira eletrônica alegando risco à sua integridade física.

Relatados.

A Portaria nº 02/2016 já autoriza o monitoramento eletrônico para apenados no regime semiaberto com saídas desvigiadas. O atendimento ao pedido de instalação é atribuição administrativa da Central de Monitoramento Eletrônico (CEME).

Isto posto, não conheço do pedido, devendo o apenado dirigir-se à autoridade administrativa.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_220',
        nome: 'Monitoramento - Envelopamento (Definitiva)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'monitoramento',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado confessou ter "envelopado" o equipamento de monitoramento, alegando que o fizera porque ***.

Relatados.

A LEP, no art. 146-C, II, impõe o dever de abster-se de remover ou violar o dispositivo. Ao bloquear intencionalmente o sinal (envelopamento), o apenado impossibilita a fiscalização e circula livremente, o que configura falta grave (art. 50, VI, LEP).

Conforme STJ: "Ao bloquear de maneira intencional o sinal emitido pela tornozeleira eletrônica, o paciente violou o dever de inviolabilidade do equipamento, configurando falta grave" (HC 400.495/RS).

Isto posto, torno definitiva a regressão para o regime fechado, com a perda de 1/5 (pela confissão) do tempo remido.

P.R.I. Atualize-se a GEP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_MONITORAMENTO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_MONITORAMENTO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
