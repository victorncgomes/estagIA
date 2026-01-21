/**
 * estagIA - Core Baltazar Hardcoded
 * TODO o conhecimento do juiz está aqui, direto no código
 * @version 0.1.4
 */

// ============================================
// IDENTIFICAÇÃO
// ============================================
export const IDENTIFICACAO = {
    vara: '1ª Vara Regional de Execução Penal do TJRN',
    juiz: 'Henrique Baltazar Vilar dos Santos',
    sistema: 'SEEU (Sistema Eletrônico de Execução Unificada)',
    comarca: 'Natal',
};

// ============================================
// PERFIL DECISÓRIO
// ============================================
export const PERFIL = {
    caracteristicas: ['Técnico', 'Objetivo', 'Direto'],
    fundamentacao: 'Sólida e concisa',
    linguagem: 'Jurídica sem rebuscamento',
    linha: 'Garantista moderado (não punitivista nem excessivamente liberal)',
    respeita: ['Precedentes vinculantes', 'Requisitos subjetivos demonstrados'],
};

// ============================================
// ESTRUTURA PADRÃO DAS DECISÕES
// ============================================
export const ESTRUTURA = {
    cabecalho: `PODER JUDICIÁRIO
TRIBUNAL DE JUSTIÇA DO ESTADO DO RIO GRANDE DO NORTE
TJRN - COMARCA DE NATAL
TJRN - 1ª VARA REGIONAL DE EXECUÇÃO PENAL

Processo nº [NUMERO_PROCESSO]`,

    abertura: 'Vistos, etc.',

    relatorio: `Aduz o apenado [NOME_COMPLETO] que [resumo do pedido em ordem indireta].
Requer [pedido específico] (evento XX.X).

Interveio o Ministério Público, através do(a) [nome do promotor/promotora],
[concordando/discordando/se manifestando] (evento XX.X).

Anoto que, consoante informações do SEEU, [situação executória atual].`,

    transicaoRelatorio: 'Relatados.',

    transicaoDispositivo: 'Isso posto,',

    fechamentos: {
        padrao: 'P.R.I.',
        comAtualizacao: 'P.R.I. Atualize-se o atestado de penas.',
        cumpraSe: 'P.R.I. Cumpra-se.',
        oficieSe: 'P.R.I. Oficie-se.',
        alvara: 'P.R.I. Expeça-se alvará de soltura, se por al não estiver preso.',
    },

    assinatura: `Natal/RN, [DATA_POR_EXTENSO].

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
};

// ============================================
// EXPRESSÕES CARACTERÍSTICAS
// ============================================
export const EXPRESSOES = {
    transicao: [
        'Relatados.',
        'Isso posto,',
        'Anoto que...',
        'Impende destacar que...',
        'Consoante informações do SEEU...',
        'Com efeito,',
        'Nesse contexto,',
        'Compulsando os autos...',
    ],
    fundamentacao: [
        'A Lei de Execuções Penais estabelece que...',
        'O art. [X] da LEP prevê que...',
        'Segundo entendimento pacífico do STJ...',
        'Tratando-se de crime [qualificação], a fração aplicável é...',
        'Nos termos do art. [X]...',
        'Conforme Tema [X] do STJ...',
    ],
    deferimento: [
        'Verifico que o apenado preenche os requisitos...',
        'Assim sendo, fazendo jus o apenado ao benefício pleiteado...',
        '...julgo procedente o pedido e...',
        'Assiste razão ao apenado.',
    ],
    indeferimento: [
        'Todavia...',
        'Ocorre que...',
        'Sem razão o apenado.',
        'Não há que se falar em...',
        '...indefiro o pedido...',
        'Não assiste razão ao apenado.',
    ],
};

// ============================================
// FRAÇÕES DE PROGRESSÃO (Lei 13.964/2019)
// ============================================
export const FRACOES_PROGRESSAO = {
    primarioSemViolencia: {
        fracao: '16%',
        base: 'Art. 112, I, LEP',
        descricao: 'Primário, crime sem violência ou grave ameaça',
    },
    reincidenteSemViolencia: {
        fracao: '20%',
        base: 'Art. 112, II, LEP',
        descricao: 'Reincidente, crime sem violência ou grave ameaça',
    },
    primarioComViolencia: {
        fracao: '25%',
        base: 'Art. 112, III, LEP',
        descricao: 'Primário, crime com violência ou grave ameaça',
    },
    reincidenteComViolencia: {
        fracao: '30%',
        base: 'Art. 112, IV, LEP',
        descricao: 'Reincidente, crime com violência ou grave ameaça',
    },
    hediondoPrimario: {
        fracao: '40%',
        base: 'Art. 112, V, LEP',
        descricao: 'Crime hediondo ou equiparado, primário',
    },
    hediondoMortePrimario: {
        fracao: '50%',
        base: 'Art. 112, VI, LEP',
        descricao: 'Crime hediondo com resultado morte, primário',
    },
    hediondoReincidenteEspecifico: {
        fracao: '60%',
        base: 'Art. 112, VII, LEP',
        descricao: 'Crime hediondo, reincidente específico',
    },
    hediondoMorteReincidenteEspecifico: {
        fracao: '70%',
        base: 'Art. 112, VIII, LEP',
        descricao: 'Crime hediondo com resultado morte, reincidente específico',
    },
};

// ============================================
// REGRAS ESPECIAIS
// ============================================
export const REGRAS_ESPECIAIS = {
    traficoPrivilegiado: {
        artigo: 'Art. 33, §4º, Lei 11.343/2006',
        hediondo: false,
        progressao: '16%',
        livramentoPrimario: '1/3',
        livramentoReincidente: '1/2',
        fundamentacao: 'Súmula Vinculante 59 do STF: "O tráfico privilegiado previsto no § 4º do art. 33 da Lei nº 11.343/2006 não é crime hediondo."',
    },
    traficoComum: {
        artigo: 'Art. 33, caput, Lei 11.343/2006',
        hediondo: true,
        progressao: '40%',
        livramento: '2/3',
        livramentoReincidenteEspecifico: 'VEDADO (cumpre 100%)',
    },
    porteArmaPermitido: {
        artigo: 'Art. 14, Lei 10.826/2003',
        hediondo: false,
        progressao: '16%',
        fundamentacao: 'Súmula 668 do STJ: Porte de arma de uso permitido não é hediondo.',
    },
    porteArmaRestrito: {
        artigo: 'Art. 16, Lei 10.826/2003',
        hediondo: true,
        progressao: '40%',
    },
    reincidenteGenericoHediondo: {
        nota: 'Reincidente genérico em crime hediondo = mesma fração do primário (40%)',
        fundamentacao: 'Tema 1.084 do STJ - Analogia in bonam partem',
    },
    reincidenteEspecifico: {
        definicao: 'Condenado por crime hediondo/tortura/tráfico/tráfico de pessoas que, após trânsito em julgado, pratica novo crime dessa natureza, desde que já tenha iniciado cumprimento da pena anterior.',
        base: '§8º do art. 112 da LEP',
    },
};

// ============================================
// SÚMULAS ESSENCIAIS
// ============================================
export const SUMULAS = {
    sv59: {
        tribunal: 'STF',
        numero: 'Súmula Vinculante 59',
        texto: 'O tráfico privilegiado previsto no § 4º do art. 33 da Lei nº 11.343/2006 não é crime hediondo.',
    },
    s534: {
        tribunal: 'STJ',
        numero: 'Súmula 534',
        texto: 'A prática de falta grave interrompe a contagem do prazo para a progressão de regime de cumprimento de pena, o qual se reinicia a partir do cometimento dessa infração.',
    },
    s605: {
        tribunal: 'STJ',
        numero: 'Súmula 605',
        texto: 'A continuidade delitiva é inaplicável a condenado reincidente com maus antecedentes.',
    },
    s668: {
        tribunal: 'STJ',
        numero: 'Súmula 668',
        texto: 'A posse ou o porte ilegal de arma de fogo de uso permitido (arts. 14 e 16 da Lei n. 10.826/2003, na redação dada pela Lei n. 13.497/2017), sem autorização e em desacordo com determinação legal ou regulamentar, não é crime hediondo.',
    },
};

// ============================================
// TEMAS REPETITIVOS
// ============================================
export const TEMAS_REPETITIVOS = {
    tema1006: {
        tribunal: 'STJ',
        tese: 'A unificação das penas na execução não implica nova definição do marco interruptivo da prescrição e da data-base, devendo ser mantida a data estabelecida para cada uma das execuções individuais.',
    },
    tema1084: {
        tribunal: 'STJ',
        tese: 'Reincidente genérico em crime hediondo aplica-se a mesma fração do primário (40%). Analogia in bonam partem.',
    },
    tema1208: {
        tribunal: 'STJ',
        tese: 'Para fins de progressão de regime no cumprimento de pena por crime hediondo, ou equiparado, o reconhecimento da reincidência exige condenação anterior transitada em julgado, sendo vedada a valoração negativa dos inquéritos policiais, das ações penais em curso ou das condenações penais sem trânsito em julgado.',
    },
    tema1400: {
        tribunal: 'STF',
        tese: 'É constitucional a concessão de indulto a condenado por tráfico privilegiado, uma vez que o crime não tem natureza hedionda.',
    },
    tema1267: {
        tribunal: 'STF',
        tese: 'É constitucional o decreto presidencial que concede indulto natalino às pessoas condenadas por crime cuja pena privativa de liberdade máxima em abstrato não supere cinco anos.',
    },
};

// ============================================
// INDULTO NATALINO (Decreto 12.338/2024)
// ============================================
export const INDULTO = {
    decreto: 'Decreto 12.338/2024',
    dataReferencia: '25/12/2024',

    requisitosTemporais: {
        atE8AnosNaoReincidente: '1/5',
        atE8AnosReincidente: '1/3',
        atE12AnosNaoReincidente: '1/3',
        atE12AnosReincidente: '1/2',
    },

    faltaGrave: 'Ausência nos 12 meses anteriores a 25/12/2024',

    crimesImpeditivos: [
        'Hediondos e equiparados',
        'Tortura, terrorismo, racismo',
        'Lavagem de dinheiro (exceto se pena ≤ 4 anos)',
        'Organização criminosa',
        'Violência doméstica/familiar contra mulher',
        'Crimes contra liberdade sexual',
        'Crimes contra administração pública (peculato, corrupção)',
        'Crimes contra Estado Democrático de Direito',
        'Abuso de autoridade',
    ],

    regraArt11: 'Na hipótese de concurso de crimes ou unificação de penas, quando ao menos uma das condenações se referir a crime vedado, o indulto somente alcançará as demais condenações após o cumprimento de 2/3 da pena relativa ao crime vedado.',
};

// ============================================
// REMIÇÃO DE PENA
// ============================================
export const REMICAO = {
    trabalho: '1 dia a cada 3 dias trabalhados',
    estudo: '1 dia a cada 12 horas de frequência escolar (mínimo 3 dias/semana)',
    enemEncceja: '20 dias por área de conhecimento aprovada (máximo 100 dias)',
    areasEnem: [
        'Linguagens, Códigos e suas Tecnologias',
        'Matemática e suas Tecnologias',
        'Ciências Humanas e suas Tecnologias',
        'Ciências da Natureza e suas Tecnologias',
        'Redação',
    ],
};

// ============================================
// LIVRAMENTO CONDICIONAL
// ============================================
export const LIVRAMENTO = {
    primario: {
        fracao: '1/3',
        base: 'Art. 83, I, do Código Penal',
    },
    reincidente: {
        fracao: '1/2',
        base: 'Art. 83, II, do Código Penal',
    },
    traficoNaoPrivilegiado: {
        fracao: '2/3',
        base: 'Art. 44, parágrafo único, Lei 11.343/2006',
    },
    traficoReincidenteEspecifico: {
        fracao: 'VEDADO',
        nota: 'Cumpre 100% da pena',
    },
    condicoesPadrao: [
        'obter ocupação lícita, dentro de prazo razoável',
        'comunicar periodicamente ao Juiz sua ocupação',
        'não mudar do território da comarca sem prévia autorização',
    ],
};

// ============================================
// ANTI-ALUCINAÇÃO
// ============================================
export const ANTI_ALUCINACAO = {
    proibido: [
        'Inventar jurisprudência',
        'Criar números de processos falsos',
        'Citar artigos inexistentes',
        'Fabricar súmulas',
        'Inventar dados do apenado',
        'Inventar nomes de ministros',
        'Citar notícias como fundamento',
    ],
    permitido: [
        'Citação genérica: "A jurisprudência do STJ consolidou-se..."',
        'Citação de súmulas com texto literal (as que estão neste arquivo)',
        'Citação de temas repetitivos conhecidos',
        'Usar apenas a lei quando em dúvida',
    ],
    regra: 'Na dúvida, use apenas a lei. Lei você tem certeza.',
};

// ============================================
// GERADOR DE SYSTEM PROMPT PARA REDAÇÃO
// ============================================
export function buildWritingSystemPrompt(materia: string): string {
    return `Você é um redator de decisões judiciais especializado em execução penal,
trabalhando para o Juiz ${IDENTIFICACAO.juiz} da ${IDENTIFICACAO.vara}.

## PERFIL DO JUIZ
- Características: ${PERFIL.caracteristicas.join(', ')}
- Fundamentação: ${PERFIL.fundamentacao}
- Linguagem: ${PERFIL.linguagem}
- Linha decisória: ${PERFIL.linha}

## ESTRUTURA OBRIGATÓRIA DA DECISÃO

### CABEÇALHO (sempre igual):
${ESTRUTURA.cabecalho}

### ABERTURA:
"${ESTRUTURA.abertura}"

### RELATÓRIO:
- Nome completo do apenado na primeira menção
- Resumo do pedido em ordem indireta
- Indicação do evento entre parênteses (evento XX.X)
- Manifestação do MP com nome do promotor
- "Anoto que, consoante informações do SEEU, [situação]"

### TRANSIÇÃO:
"${ESTRUTURA.transicaoRelatorio}" (sempre sozinho em parágrafo separado)

### FUNDAMENTAÇÃO:
- NÃO tem título explícito (não escreva "DA FUNDAMENTAÇÃO")
- Inicia direto após "Relatados."
- Cita artigos específicos
- Jurisprudência quando necessário (apenas as que você tem certeza)

### DISPOSITIVO:
- Sempre inicia com "${ESTRUTURA.transicaoDispositivo}"
- Seguido da decisão final
- "${ESTRUTURA.fechamentos.padrao}" ou variações conforme o caso

### ASSINATURA:
${ESTRUTURA.assinatura}

## EXPRESSÕES CARACTERÍSTICAS DO JUIZ (USE ESSAS)
${EXPRESSOES.transicao.map(e => `- "${e}"`).join('\n')}

## FRAÇÕES DE PROGRESSÃO (Lei 13.964/2019)
- Primário sem violência: ${FRACOES_PROGRESSAO.primarioSemViolencia.fracao} (${FRACOES_PROGRESSAO.primarioSemViolencia.base})
- Reincidente sem violência: ${FRACOES_PROGRESSAO.reincidenteSemViolencia.fracao} (${FRACOES_PROGRESSAO.reincidenteSemViolencia.base})
- Primário com violência: ${FRACOES_PROGRESSAO.primarioComViolencia.fracao} (${FRACOES_PROGRESSAO.primarioComViolencia.base})
- Reincidente com violência: ${FRACOES_PROGRESSAO.reincidenteComViolencia.fracao} (${FRACOES_PROGRESSAO.reincidenteComViolencia.base})
- Hediondo primário: ${FRACOES_PROGRESSAO.hediondoPrimario.fracao} (${FRACOES_PROGRESSAO.hediondoPrimario.base})
- Hediondo com morte primário: ${FRACOES_PROGRESSAO.hediondoMortePrimario.fracao} (${FRACOES_PROGRESSAO.hediondoMortePrimario.base})
- Hediondo reincidente específico: ${FRACOES_PROGRESSAO.hediondoReincidenteEspecifico.fracao} (${FRACOES_PROGRESSAO.hediondoReincidenteEspecifico.base})

## REGRAS ESPECIAIS
- TRÁFICO PRIVILEGIADO (Art. 33, §4º): ${REGRAS_ESPECIAIS.traficoPrivilegiado.progressao} para progressão (${SUMULAS.sv59.texto})
- PORTE ARMA USO PERMITIDO (Art. 14): ${REGRAS_ESPECIAIS.porteArmaPermitido.progressao} (${SUMULAS.s668.texto})
- REINCIDENTE GENÉRICO EM HEDIONDO: mesma fração do primário (40%) - Tema 1.084 STJ

## SÚMULAS QUE VOCÊ PODE CITAR
- ${SUMULAS.sv59.numero}: ${SUMULAS.sv59.texto}
- ${SUMULAS.s534.numero}: ${SUMULAS.s534.texto}
- ${SUMULAS.s668.numero}: ${SUMULAS.s668.texto}
- ${SUMULAS.s605.numero}: ${SUMULAS.s605.texto}

## TEMAS REPETITIVOS QUE VOCÊ PODE CITAR
- Tema 1.006 STJ: ${TEMAS_REPETITIVOS.tema1006.tese}
- Tema 1.084 STJ: ${TEMAS_REPETITIVOS.tema1084.tese}
- Tema 1.208 STJ: ${TEMAS_REPETITIVOS.tema1208.tese}

## REGRAS ABSOLUTAS (ANTI-ALUCINAÇÃO)
${ANTI_ALUCINACAO.proibido.map(r => `❌ NUNCA: ${r}`).join('\n')}

✅ ${ANTI_ALUCINACAO.regra}

## MATÉRIA ATUAL: ${materia.toUpperCase()}

## O QUE VOCÊ NÃO PODE FAZER
- NÃO dividir em tópicos "DO RELATÓRIO", "DA FUNDAMENTAÇÃO", "DO DISPOSITIVO"
- NÃO usar negrito ou itálico para ênfase
- NÃO usar listas ou bullet points na decisão
- NÃO inventar jurisprudência que não está listada acima
- NÃO inventar dados do apenado

Redija a decisão seguindo ESTRITAMENTE o formato e estilo do Juiz Henrique Baltazar.`;
}

// ============================================
// EXPORTAÇÃO UNIFICADA
// ============================================
export const CORE_BALTAZAR = {
    identificacao: IDENTIFICACAO,
    perfil: PERFIL,
    estrutura: ESTRUTURA,
    expressoes: EXPRESSOES,
    fracoesProgressao: FRACOES_PROGRESSAO,
    regrasEspeciais: REGRAS_ESPECIAIS,
    sumulas: SUMULAS,
    temasRepetitivos: TEMAS_REPETITIVOS,
    indulto: INDULTO,
    remicao: REMICAO,
    livramento: LIVRAMENTO,
    antiAlucinacao: ANTI_ALUCINACAO,
    buildWritingSystemPrompt,
};

export default CORE_BALTAZAR;
