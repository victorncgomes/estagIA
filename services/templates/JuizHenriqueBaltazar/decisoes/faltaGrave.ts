/**
 * Modelos de Decisão - Falta Grave
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: faltaGrave
 * Total de modelos: 6
 */

import { Modelo } from '../../types';

export const DECISOES_FALTA_GRAVE: Modelo[] = [
    {
        id: 'seeu_081',
        nome: 'Falta grave novo crime (faccionados)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaGrave',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que juntou-se sindicância concluindo que o apenado, juntamente com outros, alegou ter ingressado na facção criminosa ***, gerando "princípio de motim" e desavenças com grupos rivais.

Certificou-se que não existe denúncia recebida face ao apenado por crimes praticados desde ***.

Relatados.

A conduta configura falta grave, mas apenas se houver autuação em flagrante, denúncia ou condenação por novos crimes.

É induvidoso que não se exige o julgamento do novo crime para reconhecer-se a falta grave prevista no art. 52, primeira parte, da Lei 7.210/84.

Entretanto, o não oferecimento da denúncia após *** meses do suposto fato demonstra que a Polícia Judiciária e o MP não conseguiram suficientes indícios quanto à conduta criminosa.

Não se pode punir o apenado por situação indefinida.

Isto posto, nego seguimento à apuração dos fatos relatados na sindicância.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_094',
        nome: 'Falta grave novo crime prescrição inocorrência',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaGrave',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de $penaTotalVEP.

A Defesa pediu o reconhecimento da prescrição da falta grave ocorrida em relação aos fatos da ação penal nº ***, considerando que se passaram mais de 3 anos da ocorrência.

O MP pugnou pelo indeferimento.

Relatados.

O pedido deve ser indeferido.

O novo crime transitou em julgado, o que supre a necessidade de instauração de PAD para sua validação (STF, Tema 758).

Portanto, existindo nos autos sentença penal condenatória e certidão de trânsito em julgado, a instauração do PAD foi suprida pela sentença criminal condenatória transitada em julgado, não havendo o que se falar em prescrição da falta grave.

Indefiro o pedido de reconhecimento da prescrição da falta grave disciplinar.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_119',
        nome: 'Falta grave homologação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaGrave',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado foi punido disciplinarmente por falta grave consistente em ***.

Ouvido em audiência, o apenado confirmou a prática da falta.

O MP opinou pela homologação.

Relatados.

Conforme art. 50 da LEP, configura falta grave a conduta descrita.

Conforme Súmula 533 do STJ: "Para o reconhecimento da prática de falta disciplinar de natureza grave, é imprescindível a instauração de procedimento administrativo."

No caso, o PAD foi regularmente instaurado e concluído.

Isto posto, homologo a falta grave, com perda de 1/3 do tempo remido e reinício do cômputo para benefícios futuros.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_132',
        nome: 'Falta grave sem provas',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaGrave',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

*Cumprindo pena em regime fechado, foi o apenado punido disciplinarmente por falta grave consistente em ***.

*O apenado teve o regime regredido para fechado em razão de ***.

Em audiência, o apenado apresentou justificativa, alegando que ***

O MP opinou pelo não reconhecimento da falta grave dada a falta de provas, enquanto a defesa pugnou pelo acatamento das justificativas.

Relatados.

Além do apenado negar a conduta, a sindicância junta ao evento ** não apresenta provas suficientes de que ele a teria praticado.

Impossível homologar-se punição amparada em tal instrumento processual.

*Em assim sendo, cancelo a punição disciplinar.

*Em assim sendo, revogo a decisão que regrediu provisoriamente o regime prisional, retornando o apenado a cumprir a pena como antes imposta.

Comunique-se ao estabelecimento prisional e atualize-se a GEP.

Diligencie-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_147',
        nome: 'Falta grave cancelamento punição',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaGrave',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado foi punido disciplinarmente por falta grave.

Ouvido em audiência, o apenado negou a prática da falta, alegando que ***.

O MP opinou pelo cancelamento da punição.

Relatados.

A narrativa do apenado é verossímil e não fora contraditada por provas robustas.

Conforme Súmula 533 do STJ: "Para o reconhecimento da prática de falta disciplinar de natureza grave, é imprescindível a instauração de procedimento administrativo."

No caso, o PAD apresenta vícios que comprometem sua validade.

Isto posto, cancelo a punição disciplinar.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_254',
        nome: 'Falta grave reabilitação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaGrave',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que a Defesa peticionou pela reabilitação comportamental do apenado/desconsideração da falta grave ocorrida em ***.

O MP opinou pelo deferimento.

Relatados.

A LEP prevê a possibilidade de reabilitação comportamental após o decurso de prazo.

O art. 49, parágrafo único, da LEP estabelece que "nas faltas graves, o período de reabilitação será de 12 meses."

No caso, transcorreram mais de 12 meses desde a prática da falta grave.

O apenado manteve bom comportamento desde então.

Defiro a reabilitação comportamental, passando o apenado a ostentar novamente bom comportamento carcerário.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_FALTA_GRAVE.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_FALTA_GRAVE.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
