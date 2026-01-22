/**
 * estagIA - Engine de Geração de Decisões v2.0
 * 
 * Engine completa baseada nas regras do Art. 489 CPC e estilo do Juiz Henrique Baltazar.
 * 
 * ESTRUTURA OBRIGATÓRIA:
 * 1. "Vistos, etc." (ABERTURA)
 * 2. Relatório (quem deu causa, eventos entre parênteses)
 * 3. "Relatados." (TRANSIÇÃO)
 * 4. Fundamentação (problema → doutrina → legislação → jurisprudência)
 * 5. "Isso posto," + dispositivo + "P.R.I."
 * 
 * @version 2.0.0
 */

// ============================================
// IDENTIFICAÇÃO DO MAGISTRADO
// ============================================
export const MAGISTRADO = {
    nome: 'Henrique Baltazar Vilar dos Santos',
    vara: '1ª Vara Regional de Execução Penal',
    tribunal: 'TJRN',
    comarca: 'Natal',
    sistema: 'SEEU',
};

// ============================================
// ESTRUTURA FIXA DA DECISÃO (Art. 489 CPC)
// ============================================
export const ESTRUTURA_DECISAO = {
    // CABEÇALHO (fixo)
    cabecalho: `PODER JUDICIÁRIO
TRIBUNAL DE JUSTIÇA DO ESTADO DO RIO GRANDE DO NORTE
TJRN - COMARCA DE NATAL
TJRN - 1ª VARA REGIONAL DE EXECUÇÃO PENAL

Processo nº [NUMERO_PROCESSO]`,

    // ABERTURA - SEMPRE igual
    abertura: 'Vistos, etc.',

    // PADRÕES DE INÍCIO DO RELATÓRIO (escolher conforme contexto)
    relatorioPatterns: {
        pedido: `Trata-se de pedido de [MATÉRIA] formulado por [PARTE] requerendo [PEDIDO], argumentando que [ARGUMENTOS] (evento [EVENTO]).`,
        conclusao: `Executando-se pena privativa de liberdade em regime [REGIME], vieram-me conclusos os autos para análise de [MATÉRIA], em razão de [MOTIVO] (evento [EVENTO]).`,
        diversosPedidos: `A discussão diz respeito a diversos pedidos formulados pelo apenado, em que requer [LISTA_PEDIDOS].`,
    },

    // TRANSIÇÃO RELATÓRIO → FUNDAMENTAÇÃO (SEMPRE sozinha em parágrafo)
    transicaoRelatorio: 'Relatados.',

    // PADRÕES DE INÍCIO DA FUNDAMENTAÇÃO
    fundamentacaoPatterns: {
        singular: `Cinge-se a presente demanda na análise de [PROBLEMA], em que [CONTEXTO].`,
        plural: `Versam os autos sobre [MATÉRIA], em que [CONTEXTO].`,
        multiplos: `A discussão diz respeito a diversos pedidos, onde o apenado requer [LISTA].`,
    },

    // CONECTORES PARA MÚLTIPLOS PEDIDOS
    conectores: {
        primeiro: 'Quanto ao pedido de [X], ab initio, observa-se que',
        segundo: 'Já no que concerne com relação a [X],',
        terceiro: 'Por fim, com relação ao pedido de [X],',
        pendente: 'pondero que os autos não possuem maturidade suficiente para produzir a decisão, eis que',
    },

    // TRANSIÇÃO FUNDAMENTAÇÃO → DISPOSITIVO
    transicaoDispositivo: 'Isso posto,',

    // FECHAMENTOS POSSÍVEIS
    fechamentos: {
        simples: 'P.R.I.',
        comAtualizacao: 'P.R.I. Atualize-se o atestado de penas.',
        comAlvara: 'P.R.I. Expeça-se alvará de soltura, se por al não estiver preso.',
        comOficio: 'P.R.I. Oficie-se.',
        comDiligencia: 'P.R.I. Após, com ou sem resposta, dê-se vista ao Ministério Público e retornem conclusos.',
    },

    // ASSINATURA
    assinatura: `Natal/RN, [DATA].

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
};

// ============================================
// REGRAS ANTI-ALUCINAÇÃO
// ============================================
export const ANTI_ALUCINACAO = {
    proibicoes: [
        'Dividir texto em "DO RELATÓRIO", "DA FUNDAMENTAÇÃO", "DO DISPOSITIVO"',
        'Inventar jurisprudência, súmulas ou temas repetitivos',
        'Criar números de processos falsos',
        'Mencionar nome de promotor ou promotoria',
        'Usar negrito ou itálico para ênfase',
        'Usar listas ou bullet points na decisão',
        'Repetir jurisprudência citada pelas partes (exceto súmulas vinculantes)',
        'Inventar dados do apenado não fornecidos',
        'CITAR DOUTRINA SEM FONTE COMPLETA (autor, obra, editora, ano)',
        'MISTURAR MATÉRIAS (ex: falar de progressão em decisão de remição)',
        'GERAR DECISÃO SOBRE MATÉRIA DIFERENTE DA ESPECIFICADA',
    ],
    regra: 'Na dúvida, use apenas a lei. Lei você tem certeza.',
    citacaoObrigatoria: `TODA citação de doutrina DEVE seguir o formato:
"[TEXTO DA CITAÇÃO]" (AUTOR. Título da Obra. Cidade: Editora, Ano, p. XX).
Exemplo: "A execução penal não se resume ao mero cumprimento da pena" (NUCCI, Guilherme. Manual de Processo Penal. São Paulo: RT, 2020, p. 445).
NUNCA cite sem a referência completa.`,
};

// ============================================
// NÍVEIS DE PROFUNDIDADE (CUMULATIVOS)
// ============================================
export interface NivelConfig {
    nivel: number;
    nome: string;
    descricao: string;
    usarModelos: boolean;
    usarLegislacao: boolean;
    usarJurisprudencia: boolean;
    usarDoutrina: boolean;
    instrucaoRedacao: string;
}

export const NIVEIS: Record<number, NivelConfig> = {
    1: {
        nivel: 1,
        nome: 'Telegráfico',
        descricao: 'Texto mínimo, direto ao ponto',
        usarModelos: false,
        usarLegislacao: false,
        usarJurisprudencia: false,
        usarDoutrina: false,
        instrucaoRedacao: 'Seja EXTREMAMENTE conciso. Máximo 3 parágrafos. Apenas estrutura básica: Vistos → Relatório mínimo → Fundamentação de 1 parágrafo → Dispositivo.',
    },
    2: {
        nivel: 2,
        nome: 'Padrão (Modelos)',
        descricao: 'Usa conteúdo dos modelos como base',
        usarModelos: true,
        usarLegislacao: false,
        usarJurisprudencia: false,
        usarDoutrina: false,
        instrucaoRedacao: 'Use OBRIGATORIAMENTE os modelos de referência fornecidos como base para estrutura, linguagem e estilo. Adapte ao caso concreto.',
    },
    3: {
        nivel: 3,
        nome: 'Normativo + Jurisprudencial',
        descricao: 'Adiciona legislação e jurisprudência',
        usarModelos: true,
        usarLegislacao: true,
        usarJurisprudencia: true,
        usarDoutrina: false,
        instrucaoRedacao: 'Use modelos como base. ADICIONE legislação aplicável e jurisprudência relevante. Se o modelo já cita jurisprudência, verifique se há versão mais atualizada no banco.',
    },
    4: {
        nivel: 4,
        nome: 'Doutrinário',
        descricao: 'Adiciona doutrina OBRIGATÓRIA',
        usarModelos: true,
        usarLegislacao: true,
        usarJurisprudencia: true,
        usarDoutrina: true,
        instrucaoRedacao: 'OBRIGATÓRIO citar doutrina relevante. A hierarquia é: doutrina → legislação → jurisprudência. Dos 34 volumes indexados, IMPOSSÍVEL não haver conteúdo relevante.',
    },
    5: {
        nivel: 5,
        nome: 'Tribunais',
        descricao: 'Pesquisa em .jus.br',
        usarModelos: true,
        usarLegislacao: true,
        usarJurisprudencia: true,
        usarDoutrina: true,
        instrucaoRedacao: 'Pesquise jurisprudência atualizada em sites de tribunais (.jus.br). Cite acórdãos recentes do STJ e STF.',
    },
    6: {
        nivel: 6,
        nome: 'Ampliado',
        descricao: 'Internet ampla',
        usarModelos: true,
        usarLegislacao: true,
        usarJurisprudencia: true,
        usarDoutrina: true,
        instrucaoRedacao: 'Pesquise amplamente na internet. Fundamente com as fontes mais atualizadas disponíveis.',
    },
};

// ============================================
// FUNÇÃO PRINCIPAL: BUILD SYSTEM PROMPT
// ============================================
export function buildDecisionPrompt(config: {
    materia: string;
    nivel: number;
    eventos?: { fonte: string; numero: number }[];
    modelosReferencia?: string[];
    doutrina?: string[];
    legislacao?: string[];
    jurisprudencia?: string[];
}): string {
    const nivelConfig = NIVEIS[config.nivel] || NIVEIS[3];

    // Base do prompt
    let prompt = `# SISTEMA DE REDAÇÃO JURÍDICA - JUIZ HENRIQUE BALTAZAR

## 🎯 REGRA DE PRIORIDADE ABSOLUTA
A decisão deve ser gerada COM BASE NESTA HIERARQUIA:

1. **INSUMOS** (textos colados) → Define o RELATÓRIO (o que aconteceu, quem pediu o quê)
2. **ORIENTAÇÕES** (mérito) → Guia a FUNDAMENTAÇÃO (como decidir)
3. **NÍVEL DE PROFUNDIDADE** → Define QUAIS FONTES usar (modelos, lei, doutrina, jurisp)
4. **MATÉRIA** → Apenas FILTRA os modelos do RAG (NÃO sobrepõe os insumos)

⚠️ A MATÉRIA NÃO DETERMINA O CONTEÚDO.
SE OS INSUMOS DESCREVEM REMIÇÃO, FAÇA DECISÃO DE REMIÇÃO.
A MATÉRIA SERVE APENAS PARA DIRECIONAR A BUSCA DE MODELOS.

## IDENTIFICAÇÃO
- Magistrado: ${MAGISTRADO.nome}
- Vara: ${MAGISTRADO.vara} (${MAGISTRADO.tribunal})
- Sistema: ${MAGISTRADO.sistema}

## MATÉRIA (APENAS GUIA): ${config.materia.toUpperCase()}

## NÍVEL DE PROFUNDIDADE: ${nivelConfig.nivel}/6 - ${nivelConfig.nome}
${nivelConfig.instrucaoRedacao}

## ESTRUTURA OBRIGATÓRIA DA DECISÃO (Art. 489 CPC)

### 1. ABERTURA (SEMPRE)
"${ESTRUTURA_DECISAO.abertura}"

### 2. RELATÓRIO
- Baseie-se EXCLUSIVAMENTE nos INSUMOS fornecidos
- Quem deu causa à conclusão vem PRIMEIRO
- Se MP deu causa → MP primeiro; senão → MP vem depois
- Se não houve manifestação de MP ou Defesa → não mencionar
- Evento SEMPRE entre parênteses no final do parágrafo: (evento XX.X)
- Finaliza com "${ESTRUTURA_DECISAO.transicaoRelatorio}" em parágrafo SEPARADO

### 3. FUNDAMENTAÇÃO
- Baseie-se nas ORIENTAÇÕES DE MÉRITO fornecidas
- 1º PARÁGRAFO: Delinear o problema conforme INSUMOS
- CORPO: situação do caso → aplicação do direito
- HIERARQUIA DE FONTES: doutrina (se nível 4+) → legislação → jurisprudência
- ÚLTIMO PARÁGRAFO: concluir o raciocínio sem deixar dúvidas

### 4. DISPOSITIVO
- SEMPRE inicia com "${ESTRUTURA_DECISAO.transicaoDispositivo}"
- A decisão deve ser COERENTE com os INSUMOS e ORIENTAÇÕES
- "${ESTRUTURA_DECISAO.fechamentos.simples}" sempre

## REGRAS ABSOLUTAS (ANTI-ALUCINAÇÃO)
${ANTI_ALUCINACAO.proibicoes.map(r => `❌ ${r}`).join('\n')}

✅ ${ANTI_ALUCINACAO.regra}

`;

    // Adicionar eventos detectados
    if (config.eventos && config.eventos.length > 0) {
        prompt += `## EVENTOS IDENTIFICADOS NOS INPUTS
${config.eventos.map(e => `- ${e.fonte}: evento ${e.numero}`).join('\n')}

⚠️ USE o formato "(evento XX)" ao referenciar manifestações.

`;
    }

    // Adicionar modelos de referência (Nível 2+)
    if (nivelConfig.usarModelos && config.modelosReferencia && config.modelosReferencia.length > 0) {
        prompt += `## MODELOS DE REFERÊNCIA DO MAGISTRADO
Estes são exemplos REAIS de decisões do Juiz Henrique Baltazar sobre a matéria.
USE como base para estrutura, linguagem e estilo. ADAPTE ao caso concreto.

${config.modelosReferencia.map((m, i) => `### Modelo ${i + 1}\n${m}`).join('\n\n')}

`;
    }

    // Adicionar doutrina (Nível 4+)
    if (nivelConfig.usarDoutrina && config.doutrina && config.doutrina.length > 0) {
        prompt += `## DOUTRINA RELEVANTE
Cite esta doutrina na fundamentação ANTES da jurisprudência.

${config.doutrina.join('\n\n')}

`;
    }

    // Adicionar legislação (Nível 3+)
    if (nivelConfig.usarLegislacao && config.legislacao && config.legislacao.length > 0) {
        prompt += `## LEGISLAÇÃO APLICÁVEL
${config.legislacao.join('\n')}

`;
    }

    // Adicionar jurisprudência (Nível 3+)
    if (nivelConfig.usarJurisprudencia && config.jurisprudencia && config.jurisprudencia.length > 0) {
        prompt += `## JURISPRUDÊNCIA RELEVANTE
Cite apenas se necessário para fundamentar a decisão.
${config.jurisprudencia.join('\n')}

`;
    }

    prompt += `## ⚠️ REGRA DE CITAÇÃO OBRIGATÓRIA
${ANTI_ALUCINACAO.citacaoObrigatoria}

## 🚨 INSTRUÇÃO FINAL OBRIGATÓRIA

A MATÉRIA É: **${config.materia.toUpperCase()}**
VOCÊ SÓ PODE GERAR DECISÃO SOBRE: **${config.materia.toUpperCase()}**

### ESTRUTURA OBRIGATÓRIA (SIGA EXATAMENTE):

\`\`\`
Vistos, etc.
[RELATÓRIO - quem pediu, o que pediu, parecer MP/Defesa (evento X)]
Relatados.
[FUNDAMENTAÇÃO - 1º parágrafo delimita problema, depois aplica direito]
Isso posto, [DECISÃO - defiro/indefiro].
P.R.I.
\`\`\`

### CHECKLIST ANTES DE RESPONDER:
1. ✅ A decisão é sobre ${config.materia.toUpperCase()}? (SE NÃO, PARE E CORRIJA)
2. ✅ Começa com "Vistos, etc."?
3. ✅ Tem "Relatados." em parágrafo separado?
4. ✅ Termina com "Isso posto," + decisão + "P.R.I."?
5. ✅ Toda citação de doutrina tem autor, obra, editora, ano, página?
6. ✅ Eventos estão entre parênteses (evento XX)?

NÃO GERE A DECISÃO SE ALGUM ITEM ACIMA ESTIVER INCORRETO.`;

    return prompt;
}

// ============================================
// MAPEAMENTO MATÉRIA → AGRUPADOR DO ÍNDICE
// ============================================
export const MATERIA_TO_AGRUPADOR: Record<string, string[]> = {
    remicao: ['remicao'],
    remição: ['remicao'],
    livramento: ['livramento'],
    progressao: ['progressao'],
    progressão: ['progressao'],
    retificacao: ['retificacao'],
    retificação: ['retificacao'],
    gep: ['retificacao'],
    multa: ['multa'],
    indulto: ['indulto', 'comutacao'],
    comutacao: ['comutacao', 'indulto'],
    comutação: ['comutacao', 'indulto'],
    falta: ['falta'],
    monitoramento: ['monitoramento'],
    agravo: ['agravo'],
    reconsideracao: ['reconsideracao'],
    reconsideração: ['reconsideracao'],
};

// ============================================
// BUSCA SEMÂNTICA DE MODELOS
// ============================================
export function buscarModelosRelevantes(
    materia: string,
    orientacao: string,
    modelos: Array<{ nome: string; agrupador: string; arquivo: string; trecho?: string }>
): Array<{ nome: string; arquivo: string; trecho?: string; score: number }> {
    const materiaLower = materia.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const orientacaoLower = orientacao.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Palavras-chave da orientação
    const palavrasChave = orientacaoLower
        .split(/\s+/)
        .filter(p => p.length > 3)
        .map(p => p.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));

    // Agrupadores relevantes para a matéria
    const agrupadores = MATERIA_TO_AGRUPADOR[materiaLower] || [];

    return modelos
        .map(modelo => {
            const nomeLower = modelo.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const agrupadorLower = modelo.agrupador?.toLowerCase() || '';

            let score = 0;

            // Matching por agrupador (peso alto)
            if (agrupadores.includes(agrupadorLower)) {
                score += 10;
            }

            // Matching por matéria no nome
            if (nomeLower.includes(materiaLower)) {
                score += 8;
            }

            // Matching por palavras-chave da orientação
            for (const palavra of palavrasChave) {
                if (nomeLower.includes(palavra)) {
                    score += 3;
                }
            }

            // Termos específicos importantes
            const termosEspecificos = ['indefere', 'defere', 'ausencia', 'acrescimo', 'intelectual', 'enem', 'encceja', 'trabalho', 'estudo', 'leitura'];
            for (const termo of termosEspecificos) {
                if (orientacaoLower.includes(termo) && nomeLower.includes(termo)) {
                    score += 5;
                }
            }

            return { ...modelo, score };
        })
        .filter(m => m.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5); // Top 5 modelos
}

export default {
    MAGISTRADO,
    ESTRUTURA_DECISAO,
    ANTI_ALUCINACAO,
    NIVEIS,
    buildDecisionPrompt,
    buscarModelosRelevantes,
    MATERIA_TO_AGRUPADOR,
};
