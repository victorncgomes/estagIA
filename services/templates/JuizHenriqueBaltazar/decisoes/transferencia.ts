/**
 * Modelos de Decisão - Transferência de Preso
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: transferencia
 * Status: Concluído (9/9)
 * Total de modelos: 9
 */

import { Modelo } from '../../types';

export const DECISOES_TRANSFERENCIA: Modelo[] = [
    {
        id: 'seeu_023',
        nome: 'Transferência para regime adequado',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado cumpre pena em regime *** mas está custodiado em unidade prisional inadequada ao regime.

O MP opinou pela transferência.

Relatados.

O apenado tem direito a cumprir a pena em estabelecimento adequado ao regime.

Conforme art. 87 da LEP: "A penitenciária destina-se ao condenado à pena de reclusão, em regime fechado."

No caso, o apenado está em regime ***, devendo ser transferido para unidade adequada.

Determino a transferência do apenado para unidade prisional compatível com o regime ***.

Oficie-se à SEAP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_024',
        nome: 'Transferência por motivo de segurança',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que a Direção do estabelecimento prisional informa que o apenado está em risco na unidade atual.

O apenado é/foi integrante de facção criminosa e há ameaças de grupos rivais.

O MP opinou pela transferência.

Relatados.

A integridade física do apenado é dever do Estado.

Conforme art. 45 da LEP: "Não haverá falta nem sanção disciplinar sem expressa e anterior previsão legal ou regulamentar."

No caso, verifico que o apenado corre risco efetivo em sua integridade física.

Determino a transferência do apenado para outra unidade prisional, por motivo de segurança.

Oficie-se com urgência à SEAP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_025',
        nome: 'Transferência indeferindo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado / familiares do apenado peticionaram requerendo transferência para outra unidade prisional.

O MP opinou pelo indeferimento.

Relatados.

O pedido de transferência deve ser deferido apenas em situações excepcionais devidamente comprovadas.

No caso, o apenado não demonstrou situação excepcional que justifique a transferência.

A mera alegação de *** não é suficiente para autorizar a transferência.

Indefiro o pedido de transferência.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_030',
        nome: 'Transferência por saúde',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado necessita de tratamento médico não disponível na unidade prisional.

Juntou-se laudo médico indicando a necessidade de tratamento especializado.

O MP opinou pela transferência.

Relatados.

O apenado tem direito à assistência à saúde, conforme art. 14 da LEP.

No caso, o laudo médico indica que o apenado necessita de tratamento para ***, não disponível na unidade atual.

Determino a transferência do apenado para unidade prisional que disponha de atendimento médico adequado.

Oficie-se à SEAP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_041',
        nome: 'Transferência para proximidade familiar',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado/familiares peticionaram requerendo transferência para unidade prisional mais próxima de sua família.

O MP opinou pelo deferimento.

Relatados.

O direito à visitação familiar é assegurado pela LEP.

No caso, verifico que a família do apenado reside em ***, sendo difícil/impossível o deslocamento para visitação.

Conforme art. 41, X, da LEP: "Constituem direitos do preso: (...) visita do cônjuge, da companheira, de parentes e amigos em dias determinados."

Defiro a transferência do apenado para unidade prisional mais próxima de sua família.

Oficie-se à SEAP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_202',
        nome: 'Transferência (MP indefere)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena privativa de liberdade em regime semiaberto, em que o Ministério Público requereu a transferência do PEC para a Comarca de **, local onde o apenado reside.

Indagado, o juízo daquela Comarca informou a impossibilidade de receber o PEC.

Relatados.

De logo, anoto que não existe unidade prisional na Comarca de domicílio do apenado, a qual seria necessária para o recolhimento noturno ou cumprimento de punições por faltas médias, comuns no regime semiaberto harmonizado, o que impossibilita o atendimento.

Inexistindo vaga na localidade de domicílio do reeducando no regime em que se encontra, tanto a execução quanto a fiscalização da reprimenda devem ser mantidas com o Juízo originário da Execução.

Isto posto, indefiro a transferência.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_214',
        nome: 'Transferência APAC',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.   

Trata-se de execução da pena em regime *, tendo sido requerida a transferência do domicílio do apenado para a APAC de Macau, com o que concordou o Juízo de Direito competente.

Interveio o Ministério Público opinando pelo deferimento.

Relatados.

A pretensão encontra amparo no art. 66, V, g, da Lei de Execução Penal. A ordem jurídica em vigor consagra o direito do preso de ser transferido para local em que possua raízes, visando à indispensável assistência pelos familiares.

No caso da Apac, é de ver que o apenado teria que atender a certos critérios definidos pelo juízo competente, o que ocorreu.

Isto posto, defiro o pedido para a transferência do apenado para a APAC de Macau.

P.R.I. Comunique-se à unidade prisional onde ele se encontra e à Coeap, voltando-me os autos conclusos quando efetivada a transferência.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_246',
        nome: 'Transferência Regional (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena privativa de liberdade em regime semiaberto, em que o Ministério Público requereu a transferência do PEC para a Comarca de **, local onde o apenado reside.

Relatados.

Em razão da Resolução nº 33/2021 do TJRN, este juízo passou a ter competência territorial regional, abrangendo as execuções penais em regime fechado e semiaberto na área territorial de 15 comarcas, entre as quais aquela para onde o Ministério Público requereu a remessa dos autos.

Isto posto, indefiro o pedido de declínio de competência.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_266',
        nome: 'Semiaberto cumprimento outro presídio (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'transferencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado peticionou alegando que a Central de Monitoramento não dispõe de tornozeleiras eletrônicas no momento, requerendo que seu recolhimento se dê em outra unidade prisional.

Relatados.

O cumprimento do regime semiaberto em nosso estado se dá por meio de recolhimento noturno no presídio ou em prisão domiciliar monitorado eletronicamente. Não tem este juízo competência para indicar a unidade prisional onde a pena deve ser cumprida e que não seja aquele que o estado designou.

Isto posto, não conheço do pedido.

P. I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_TRANSFERENCIA.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_TRANSFERENCIA.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
