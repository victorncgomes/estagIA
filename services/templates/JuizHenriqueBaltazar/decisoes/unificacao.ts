/**
 * Modelos de Decisão - Unificação de Penas
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: unificacao
 * Total de modelos: 14/14 (Concluído)
 */

import { Modelo } from '../../types';

export const DECISOES_UNIFICACAO: Modelo[] = [
    {
        id: 'seeu_001',
        nome: 'Unificação reclusão + reclusão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de *** de reclusão no regime *** (ação penal nº ***) imposta a ***, que agora foi novamente condenado, desta feita a *** de reclusão no regime ***, ação penal nº ***.

*Trata-se de execução de penal, com penas já unificadas em *** de reclusão.

Anoto que o penitente encontra-se custodiado no ***, conforme informações do SIAPEN nesta data.

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

A data base para fins de progressão de regime deve ser a da última prisão ou a da última falta grave cometida, o que for posterior.

Conforme art. 111 da LEP: "Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas."

Isto posto, unifico em *** de reclusão a pena privativa de liberdade em execução nestes autos, a ser cumprida em regime ***.

P.R.I. Comunique-se ao estabelecimento prisional e atualize-se o atestado de pena.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_012',
        nome: 'Unificação PP + PRD',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP de reclusão no regime $regimePenaVEP imposta a $passivoNomeVEP, que agora foi novamente condenado, desta feita a *** de reclusão no regime aberto, pena que foi substituída por penas restritivas de direito.

Relatados.

Dispõe o art. 44, § 5º, do CP que "sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior."

No caso, o apenado cumpre atualmente pena de reclusão em regime fechado/semiaberto, não tendo como cumprir, de forma paralela, penas restritivas de direitos, devendo elas permanecerem suspensas até a progressão para o regime aberto.

Trata-se, na espécie, de concurso material de delitos, impondo-se a soma das penas.

Isto posto, mantenho o apenado no cumprimento da pena de $penaTotalVEP de reclusão, determinando o lançamento da nova pena e a suspensão de seu cumprimento até a progressão para o regime aberto.

P.R.I. Comunique-se ao estabelecimento prisional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_013',
        nome: 'Unificação reclusão simples',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP de reclusão no regime $regimePenaVEP imposta a $partesPoloPassivo, que agora foi novamente condenado, desta feita a *** de reclusão no regime fechado, ação penal nº ***.

Anoto que o penitente encontra-se custodiado na ***.

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Dispõe o art. 111 da LEP:

"Art. 111. Quando houver condenação por mais de um crime, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas.

Parágrafo Único. Sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida."

Isto posto, unifico em *** de reclusão a pena privativa de liberdade em execução nestes autos, a ser cumprida inicialmente em regime fechado.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_027',
        nome: 'Unificação continuidade delitiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que a Defesa pugnou pelo reconhecimento da continuidade delitiva entre os crimes objetos das condenações.

O MP opinou pelo indeferimento.

Relatados.

Conforme art. 71 do CP, a continuidade delitiva exige que os crimes sejam da mesma espécie, cometidos nas mesmas condições de tempo, lugar e maneira de execução.

No caso, embora os crimes sejam da mesma espécie, as condições de tempo, lugar e modo de execução são díspares, não autorizando o reconhecimento da continuidade delitiva.

Indefiro o pedido de reconhecimento da continuidade delitiva.

As penas devem ser somadas (concurso material).

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_076',
        nome: 'Unificação detração',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que se verifica a necessidade de unificação com nova condenação.

Anoto que o apenado ficou preso provisoriamente por *** dias, sendo necessária a detração.

Relatados.

Conforme art. 42 do CP: "Computam-se, na pena privativa de liberdade e na medida de segurança, o tempo de prisão provisória, no Brasil ou no estrangeiro."

No caso, o apenado ficou preso provisoriamente por *** dias, devendo este período ser abatido da pena.

Isto posto, unifico as penas em *** de reclusão, determinando a detração de *** dias.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_118',
        nome: 'Unificação continuidade delitiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

A Defesa pugnou pelo reconhecimento da continuidade delitiva entre os crimes das ações penais nº *** e ***, alegando se tratarem de crimes da mesma espécie praticados nas mesmas condições.

O MP opinou pelo deferimento.

Relatados.

Conforme art. 71 do CP, a continuidade delitiva exige crimes da mesma espécie, cometidos nas mesmas condições de tempo, lugar e maneira de execução.

No caso, verifico que os crimes (***) foram praticados em circunstâncias semelhantes, autorizando o reconhecimento da continuidade delitiva.

Defiro o pedido de reconhecimento da continuidade delitiva.

A pena mais grave será aumentada na fração de 1/6 a 2/3.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_126',
        nome: 'Unificação de penas',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de *** de reclusão no regime *** imposta a ***, que agora foi novamente condenado, desta feita a *** de reclusão no regime ***, ação penal nº ***.

Relatados.

Trata-se, na espécie, de concurso material de delitos, impondo-se a soma das penas.

Conforme art. 111 da LEP, a pena resultante da soma determina o regime de cumprimento.

Isto posto, unifico em *** de reclusão a pena privativa de liberdade, a ser cumprida em regime ***.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_028',
        nome: 'Unificação reclusão + detenção simples',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP de reclusão no regime $regimePenaVEP (ação penal nº ***) imposta a $partesPoloPassivo, que agora foi novamente condenado, desta feita a *** de detenção no regime aberto, ação penal nº ***.

Relatados.

Trata-se, na espécie, de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas.

Na dicção do Superior Tribunal de Justiça: "A teor do art. 111 da Lei n. 7.210/1984, na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade" (AgRg no REsp 1861665/ES).

Portanto, condenado às penas de reclusão e detenção, as reprimendas deverão ser somadas para fins de unificação de pena.

Isto posto, unifico em *** a pena privativa de liberdade em execução nestes autos, sendo *** de reclusão e *** de detenção, a ser cumprida inicialmente em regime fechado, face ao saldo de pena e ao regime já em cumprimento.

P.R.I. Comunique-se ao estabelecimento prisional e expeça-se o competente Atestado de Pena unificador.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_050',
        nome: 'Unificação de PP com Art 28',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Tratam os autos de cumprimento de penas unificadas que totalizaram $penaTotalVEP de reclusão, atualmente em regime fechado, em que foi juntada nova guia de recolhimento tratando de condenação à pena restritiva de direitos por delito de porte de drogas para uso pessoal (art. 28, caput, Lei 11.343/06), cujo cumprimento não foi iniciado.

Relatados.

Dispõe o art. 44, § 5º, do Código Penal que sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior.

A jurisprudência do STJ afirma que a conversão ou não fica unicamente na dependência da compatibilidade de cumprimento simultâneo das sanções (AgRg no REsp 1688238/MG).

No caso, porém, tratando-se do crime previsto no art. 28 da Lei de Drogas, o tipo penal não prevê a pena privativa de liberdade, tornando inviável a conversão.

Registro que a substância apreendida não foi alcançada pela recente decisão do STF sobre cannabis sativa.

Em assim sendo, determino la suspensão da execução da pena restritiva de direitos até a progressão para o regime aberto.

P.R.I. Comunique-se ao estabelecimento prisional.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_111',
        nome: 'Revogação de unificação PP com PRD',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução em que foram as penas unificadas em $penaTotalVEP de reclusão, a ser cumprida em regime $regimePenaVEP.

A Defesa interpôs agravo em execução da decisão que indeferiu pedido de reconsideração da revogação da decisão de unificação das penas, arguindo que a pena pecuniária poderia ser cumprida paralelamente.

Relatados.

Dispõe o art. 44, § 5º, do Código Penal que "sobrevindo condenação a pena privativa de liberdade, por outro crime, o juiz da execução penal decidirá sobre a conversão da pena restritiva de direitos anterior".

A Terceira Seção do STJ, no julgamento do REsp 1.925.861/SP (Tema Repetitivo), fixou a tese de que sobrevindo condenação por pena privativa de liberdade no curso da execução de pena restritiva de direitos, as penas serão objeto de unificação, ressalvada a possibilidade de cumprimento simultâneo e vedada a unificação automática quando a condenação superveniente é substituída por alternativa.

No caso, uma das penas substituídas consiste em pena pecuniária, podendo ser cumprida paralelamente.

Diante do exposto, torno sem efeito a decisão de unificação, mantenho o apenado no cumprimento da pena privativa de liberdade, enquanto mando intimar o apenado para efetuar o pagamento da prestação pecuniária, suspendendo o cumprimento da pena de prestação de serviços à comunidade até a progressão para o regime aberto.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_112',
        nome: 'Reforma de unificação por Acórdão redutor',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução em que foram as penas unificadas anteriormente.

Julgado o acórdão referente a ação penal nº ***, foi a pena reduzida, conforme se observa na peça juntada aos autos.

Relatados.

Resta evidente que a decisão de unificação restou prejudicada, uma vez que a pena de uma das ações penais foi reduzida, merecendo reparo.

Diante do exposto, torno sem efeito a decisão de unificação anterior e unifico as penas em *** de reclusão, devendo continuar a cumprir no regime ***.

P.R.I. Comunique-se ao estabelecimento penitenciário e expeça-se a competente GEP unificadora.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_113',
        nome: 'Correção de unificação de ofício',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução cujas penas totalizaram $penaTotalVEP. Registro que, enquanto tramitavam no Juízo anterior, as penas foram unificadas "de ofício" pela secretaria, por entenderem que não seria necessária a conclusão dos autos.

Relatados.

De início, registro que novas condenações prescindem, sempre e em qualquer hipótese, de decisão que as unifiquem ou somem, uma vez que podem ser elas tidas como continuação entre si ou não, análise que não pode ser realizada "de ofício" pela secretaria.

No caso, trata-se de concurso material de delitos, não se podendo ter os crimes como continuação entre si, impondo-se a soma das penas (art. 111 LEP).

Isto posto, unifico em *** de reclusão a pena privativa de liberdade, a ser cumprida inicialmente em regime ***.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_158',
        nome: 'Unificação Reclusão + Detenção',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de reclusão imposta a ***, que agora foi novamente condenado, desta feita a pena de detenção.

Relatados.

Trata-se, na espécie, de concurso material de delitos, impondo-se a soma das penas (art. 111 LEP).

Conforme STJ: "na unificação das penas, devem ser consideradas cumulativamente tanto as reprimendas de reclusão quanto as de detenção para efeito de fixação do regime prisional, porquanto constituem penas de mesma espécie, ou seja, ambas são penas privativas de liberdade" (AgRg no REsp 1861665/ES).

Portanto, as reprimendas deverão ser somadas para fins de unificação de pena.

Isto posto, unifico em *** de pena privativa de liberdade, sendo *** de reclusão e *** de detenção, a ser cumprida em regime ***.

P.R.I. Atualize-se a GEP.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_163',
        nome: 'Unificação Art. 28 Lei de Drogas',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'unificacao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de penas privativas de liberdade em que foi juntada nova GEP referente a condenação por porte de drogas para uso pessoal (art. 28 da Lei 11.343/06).

Relatados.

Dispõe o art. 44, § 5º, do Código Penal sobre a conversão de penas restritivas em privativa de liberdade.

Tratando-se do crime previsto no art. 28 da Lei de Drogas, o tipo penal não prevê a pena privativa de liberdade, tornando inviável a conversão.

Em assim sendo, determino a suspensão da execução da pena restritiva de direitos referente ao art. 28 até a progressão de regime para o aberto.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_UNIFICACAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_UNIFICACAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
