/**
 * Modelos de Decisão - Insanidade Mental
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: insanidadeMental
 * Status: Concluído (5/5)
 * Total de modelos: 5
 */

import { Modelo } from '../../types';

export const DECISOES_INSANIDADE_MENTAL: Modelo[] = [
    {
        id: 'seeu_174',
        nome: 'Instauração de Incidente de Insanidade Mental',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'insanidadeMental',
        fonteOriginal: 'SEEU',
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

Requisite-se do Núcleo de Perícias do TJRN a realização da perícia, designando-se dia e hora para tal, ficando nomeado perito o profissional ali cadastrado. Após atendido, proceda-se à condução do examinando, remetendo-se cópias de peças deste processo.

Diligencie-se.
 
$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_175',
        nome: 'Portaria de Instauração (Insanidade Mental)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'insanidadeMental',
        fonteOriginal: 'SEEU',
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
        id: 'seeu_215',
        nome: 'Homologação de Laudo (Insanidade Mental)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'insanidadeMental',
        fonteOriginal: 'SEEU',
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
        id: 'seeu_238',
        nome: 'Indeferimento de Incidente (Pedido Genérico)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'insanidadeMental',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena em regime fechado em que o apenado requereu, através de advogado, instauração de incidente de insanidade mental, no que acostou atestado médico.

Opinou o Ministério Público pelo indeferimento do pleito.

Relatados.

Não obstante os relevantes argumentos expostos pela defesa, o pleito de instauração de incidente de insanidade mental não merece deferimento.

É que o fato de acostar aos autos atestado médico não basta para incitar fundadas dúvidas sobre a saúde mental do penitente, até porque o diagnóstico apontado no laudo corresponde a transtornos mentais devidos ao uso de múltiplas drogas, e em nada menciona que tal situação o torna inteiramente incapaz de compreender o caráter da pena ou de determinar-se de acordo com esse entendimento.

O Código Penal define, em seu art. 26, que os inimputáveis são aqueles isentos de pena que, por doença mental, eram, ao tempo da ação, inteiramente incapazes de entender o caráter ilícito do fato ou determinar-se de acordo com esse entendimento.

Impende consignar que o mencionado exame somente se mostra indispensável quando houver dúvida razoável sobre a higidez mental do apenado, isto é, quando se entender presentes sérios indícios que ponham em dúvida a sua capacidade, já que o fato fora trazido à baila no curso da execução penal.

E no caso, não vislumbro dúvidas quanto a capacidade de o apenado entender o caráter do cumprimento da pena a ele aplicada, não bastando o simples requerimento da parte.

Nesse mesmo sentido é firme a jurisprudência do STJ (HC 95.616/PA): "não caracteriza cerceamento de defesa o indeferimento de exame de sanidade mental se não há dúvidas sobre a sua integridade mental".

Isto posto, indefiro o pedido de instauração de incidente de insanidade mental.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_286',
        nome: 'Homologação de Laudo (Variação)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'insanidadeMental',
        fonteOriginal: 'SEEU',
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
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_INSANIDADE_MENTAL.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_INSANIDADE_MENTAL.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
