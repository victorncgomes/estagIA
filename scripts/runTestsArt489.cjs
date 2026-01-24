/**
 * estagIA - Sistema de Testes Art. 489 CPC
 * 
 * Executa testes com avaliação detalhada baseada no Art. 489 CPC
 * e no estilo do Juiz Henrique Baltazar.
 * 
 * Critérios (190 pontos):
 * - Relatório: 40 pontos
 * - Fundamentação: 65 pontos
 * - Dispositivo: 40 pontos
 * - Anti-Alucinação: 45 pontos
 * 
 * Uso: node scripts/runTestsArt489.cjs [--suite=remicao]
 * 
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// Paths
const SUITES_DIR = path.join(__dirname, '..', 'tests', 'suites');
const TEXTOS_DIR = path.join(__dirname, '..', 'knowledge', 'decisoes', 'textos_completos');
const MODELOS_INDEX = path.join(__dirname, '..', 'knowledge', 'decisoes', 'modelos_completos_index.json');
const CORE_PROMPT = path.join(__dirname, '..', 'knowledge', 'prompts', 'CORE_ACORDA_CLAUDE.md');
const OUTPUT_DIR = path.join(__dirname, '..', 'tests', 'reports');

// Carregar env
function loadEnv() {
    const envFiles = ['.env', '.env.local', 'backend/.env'];
    for (const envFile of envFiles) {
        const envPath = path.join(__dirname, '..', envFile);
        if (fs.existsSync(envPath)) {
            const content = fs.readFileSync(envPath, 'utf-8');
            for (const line of content.split('\n')) {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#')) {
                    const eqIndex = trimmed.indexOf('=');
                    if (eqIndex > 0) {
                        const key = trimmed.slice(0, eqIndex).trim();
                        const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
                        if (!process.env[key]) {
                            process.env[key] = value;
                        }
                    }
                }
            }
        }
    }
}
loadEnv();

const geminiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

// ============================================
// PADRÕES DO JUIZ BALTAZAR (Art. 489 CPC)
// ============================================

const PADROES = {
    // Relatório
    vistos: /^Vistos,?\s*etc\.?/im,
    causaConclusao: [
        /Trata-se de (pedido|requerimento|análise|execução|incidente)/i,
        /Executando-se pena .+ vieram-me conclusos/i,
        /Cuida-se de (pedido|pleito|requerimento)/i,
    ],
    eventos: /\(evento[s]?\s*\d+(\.\d+)?\)/gi,
    relatados: /Relatados\.?\s*$/m,

    // Fundamentação
    pontoFulcral: [
        /Cinge-se (a presente demanda|o presente feito|a controvérsia)/i,
        /Versam os autos sobre/i,
        /A discussão diz respeito a/i,
        /A questão posta/i,
    ],
    transicoes: [
        /Quanto (ao|à) (pedido|pretensão)/i,
        /Já no que (concerne|tange)/i,
        /Por (fim|último)/i,
    ],
    legislacao: [/art\.?\s*\d+/gi, /Lei\s+n?[ºo]?\s*\d+/gi, /LEP/gi, /CP(?:\s|,|\.)/g],
    jurisprudencia: [/Súmula\s+n?[ºo]?\s*\d+/gi, /STJ|STF/g],
    doutrina: [/ensina|preleciona|segundo\s+[A-Z]/gi, /\(\d{4}/g],
    conclusao: [/Assim,|Dessa forma,|Portanto,|Logo,|Ante o exposto/i],

    // Dispositivo
    issoPosto: /Isso posto,|Ante o exposto,/i,
    pri: /P\.?\s*R\.?\s*I\.?/i,
    atualizaAtestado: /Atualize-se o atestado/i,

    // Anti-Alucinação - padrões mais precisos para evitar falsos positivos
    // Nomes próprios: "Dr. Nome Sobrenome", "Promotor João", "Defensor Maria" (nome próprio com maiúscula)
    nomesProibidos: [
        /Dr\.?\s+[A-Z][a-záéíóúãõ]+\s+[A-Z][a-záéíóúãõ]+/g,  // Dr. Nome Sobrenome
        /Promotor(?:a)?\s+[A-Z][a-záéíóúãõ]{2,}/g,          // Promotor(a) + Nome (min 3 letras)
        /Defensor(?:a)?\s+[A-Z][a-záéíóúãõ]{2,}/g,          // Defensor(a) + Nome (min 3 letras)
        /Advogad[oa]\s+[A-Z][a-záéíóúãõ]+\s+[A-Z]/g,        // Advogado(a) Nome Sobrenome
    ],
    nomeJuiz: /Juiz\s+(?:Henrique\s+)?Baltazar|Baltazar/gi,
    termosGenericos: [/Ministério Público/i, /Defesa/i, /apenado/i],
};

// ============================================
// VALIDADOR ART. 489 CPC
// ============================================

function validarArt489(texto, contexto) {
    const score = {
        relatorio: { total: 0, max: 40, detalhes: {} },
        fundamentacao: { total: 0, max: 65, detalhes: {} },
        dispositivo: { total: 0, max: 40, detalhes: {} },
        antiAlucinacao: { total: 0, max: 45, detalhes: {} },
    };
    const problemas = [];
    const sugestoes = [];

    // ========== RELATÓRIO (40 pts) ==========

    // Vistos (5 pts)
    if (PADROES.vistos.test(texto)) {
        score.relatorio.detalhes.vistos = 5;
        score.relatorio.total += 5;
    } else {
        score.relatorio.detalhes.vistos = 0;
        problemas.push('❌ Falta "Vistos, etc." no início');
    }

    // Causa da conclusão (10 pts)
    let temCausa = false;
    for (const p of PADROES.causaConclusao) {
        if (p.test(texto)) {
            temCausa = true;
            break;
        }
    }
    score.relatorio.detalhes.causaConclusao = temCausa ? 10 : 0;
    score.relatorio.total += temCausa ? 10 : 0;
    if (!temCausa) problemas.push('❌ Falta identificar causa da conclusão ("Trata-se de...")');

    // Eventos (5 pts)
    const eventos = texto.match(PADROES.eventos) || [];
    score.relatorio.detalhes.eventos = eventos.length > 0 ? 5 : 0;
    score.relatorio.total += eventos.length > 0 ? 5 : 0;
    if (eventos.length === 0) sugestoes.push('⚠️ Incluir referência a eventos (evento X.X)');

    // Ordem das partes (10 pts) - simplificado
    const temMP = /ministério público/i.test(texto);
    const temDefesa = /defesa/i.test(texto);
    score.relatorio.detalhes.ordemPartes = (temMP || temDefesa) ? 10 : 5;
    score.relatorio.total += score.relatorio.detalhes.ordemPartes;

    // Relatados (5 pts)
    if (PADROES.relatados.test(texto)) {
        score.relatorio.detalhes.relatados = 5;
        score.relatorio.total += 5;
    } else {
        score.relatorio.detalhes.relatados = 0;
        problemas.push('❌ Falta "Relatados." ao final do relatório');
    }

    // Não menciona ausentes (5 pts)
    if (!/não se manifestou|quedou-se inerte|silenciou/i.test(texto)) {
        score.relatorio.detalhes.naoMencionaAusentes = 5;
        score.relatorio.total += 5;
    } else {
        score.relatorio.detalhes.naoMencionaAusentes = 0;
        sugestoes.push('⚠️ Não mencionar partes que não se manifestaram');
    }

    // ========== FUNDAMENTAÇÃO (65 pts) ==========

    // Ponto fulcral (10 pts)
    const partesFund = texto.split(/Relatados\.?\s*/i);
    const fundamentacao = partesFund.length > 1 ? partesFund[1] : texto.substring(Math.round(texto.length * 0.2));

    let temFulcral = false;
    for (const p of PADROES.pontoFulcral) {
        if (p.test(fundamentacao.substring(0, 500))) {
            temFulcral = true;
            break;
        }
    }
    score.fundamentacao.detalhes.pontoFulcral = temFulcral ? 10 : 0;
    score.fundamentacao.total += temFulcral ? 10 : 0;
    if (!temFulcral) problemas.push('❌ Primeiro parágrafo não situa a demanda ("Cinge-se...", "Versam os autos...")');

    // Múltiplos pedidos organizados (5 pts)
    let transicoes = 0;
    for (const p of PADROES.transicoes) {
        if (p.test(texto)) transicoes++;
    }
    score.fundamentacao.detalhes.multiplosPedidos = transicoes > 0 ? 5 : 0;
    score.fundamentacao.total += transicoes > 0 ? 5 : 0;

    // Estrutura situação → direito (10 pts)
    const temSituacao = /consta nos autos|verifico que|observa-se|o SEEU registra/i.test(texto);
    const temDireito = /ordenamento|direito|art\.|§/i.test(texto);
    score.fundamentacao.detalhes.estrutura = (temSituacao && temDireito) ? 10 : (temSituacao || temDireito) ? 5 : 0;
    score.fundamentacao.total += score.fundamentacao.detalhes.estrutura;
    if (!temSituacao && !temDireito) problemas.push('❌ Falta estrutura: situação do caso → aplicação do direito');

    // Doutrina ABNT (10 pts)
    let temDoutrina = false;
    for (const p of PADROES.doutrina) {
        if (p.test(texto)) {
            temDoutrina = true;
            break;
        }
    }
    score.fundamentacao.detalhes.doutrina = temDoutrina ? 10 : 0;
    score.fundamentacao.total += temDoutrina ? 10 : 0;
    if (!temDoutrina && contexto.nivelSolicitado >= 4) {
        problemas.push('❌ Nível 4+ exige citação de doutrina');
    }

    // Legislação (10 pts)
    let artigosCount = 0;
    for (const p of PADROES.legislacao) {
        artigosCount += (texto.match(p) || []).length;
    }
    score.fundamentacao.detalhes.legislacao = artigosCount >= 3 ? 10 : artigosCount >= 1 ? 5 : 0;
    score.fundamentacao.total += score.fundamentacao.detalhes.legislacao;
    if (artigosCount === 0) problemas.push('❌ Falta citação de legislação (LEP, CP, etc.)');

    // Jurisprudência (10 pts)
    let jurispCount = 0;
    for (const p of PADROES.jurisprudencia) {
        jurispCount += (texto.match(p) || []).length;
    }
    score.fundamentacao.detalhes.jurisprudencia = jurispCount >= 2 ? 10 : jurispCount >= 1 ? 5 : 0;
    score.fundamentacao.total += score.fundamentacao.detalhes.jurisprudencia;
    if (jurispCount === 0 && contexto.nivelSolicitado >= 3) {
        sugestoes.push('⚠️ Nível 3+ recomenda citação de jurisprudência/súmulas');
    }

    // Não repete partes (5 pts) - simplificado
    score.fundamentacao.detalhes.naoRepete = 5;
    score.fundamentacao.total += 5;

    // Conclusão (5 pts)
    let temConclusao = false;
    for (const p of PADROES.conclusao) {
        if (p.test(texto)) {
            temConclusao = true;
            break;
        }
    }
    score.fundamentacao.detalhes.conclusao = temConclusao ? 5 : 0;
    score.fundamentacao.total += temConclusao ? 5 : 0;
    if (!temConclusao) sugestoes.push('⚠️ Incluir parágrafo de conclusão antes do dispositivo');

    // ========== DISPOSITIVO (40 pts) ==========

    // Isso posto (5 pts)
    if (PADROES.issoPosto.test(texto)) {
        score.dispositivo.detalhes.issoPosto = 5;
        score.dispositivo.total += 5;
    } else {
        score.dispositivo.detalhes.issoPosto = 0;
        problemas.push('❌ Falta "Isso posto," no dispositivo');
    }

    // Objetividade (10 pts)
    const matchDisp = texto.match(/(?:Isso posto,|Ante o exposto,)([\s\S]*?)(?:P\.?\s*R\.?\s*I\.?|$)/i);
    const dispositivo = matchDisp ? matchDisp[1] : '';
    const palavrasDisp = dispositivo.split(/\s+/).length;
    score.dispositivo.detalhes.objetividade = palavrasDisp <= 100 ? 10 : palavrasDisp <= 200 ? 5 : 0;
    score.dispositivo.total += score.dispositivo.detalhes.objetividade;
    if (palavrasDisp > 200) problemas.push('❌ Dispositivo muito longo, deve ser mais objetivo');

    // Apenas alterações (10 pts) - simplificado
    score.dispositivo.detalhes.apenasAlteracoes = 10;
    score.dispositivo.total += 10;

    // Estrutura itens (5 pts)
    const temItens = /[a-z]\)|[ivx]+\)|^\s*\d+[.\)]/mi.test(dispositivo);
    score.dispositivo.detalhes.estruturaItens = temItens || palavrasDisp < 80 ? 5 : 0;
    score.dispositivo.total += score.dispositivo.detalhes.estruturaItens;

    // P.R.I. (5 pts)
    if (PADROES.pri.test(texto)) {
        score.dispositivo.detalhes.pri = 5;
        score.dispositivo.total += 5;
    } else {
        score.dispositivo.detalhes.pri = 0;
        problemas.push('❌ Falta "P.R.I." no final');
    }

    // Atualiza atestado (5 pts)
    const alterouSituacao = /defiro|procedente|retific/i.test(contexto.orientacao);
    const temAtualiza = PADROES.atualizaAtestado.test(texto);
    score.dispositivo.detalhes.atualizaAtestado = (alterouSituacao && temAtualiza) || !alterouSituacao ? 5 : 0;
    score.dispositivo.total += score.dispositivo.detalhes.atualizaAtestado;
    if (alterouSituacao && !temAtualiza) {
        sugestoes.push('⚠️ Se alterou situação, incluir "Atualize-se o atestado de penas"');
    }

    // ========== ANTI-ALUCINAÇÃO (45 pts) ==========

    // Sem nomes inventados (10 pts)
    let nomesInventados = [];
    for (const p of PADROES.nomesProibidos) {
        nomesInventados.push(...(texto.match(p) || []));
    }
    score.antiAlucinacao.detalhes.semNomes = nomesInventados.length === 0 ? 10 : 0;
    score.antiAlucinacao.total += score.antiAlucinacao.detalhes.semNomes;
    if (nomesInventados.length > 0) {
        problemas.push(`❌ Nomes inventados: ${nomesInventados.join(', ')}`);
    }

    // Sem processos inventados (5 pts) - simplificado
    score.antiAlucinacao.detalhes.semProcessos = 5;
    score.antiAlucinacao.total += 5;

    // Termos genéricos (5 pts)
    let genericos = 0;
    for (const p of PADROES.termosGenericos) {
        if (p.test(texto)) genericos++;
    }
    score.antiAlucinacao.detalhes.termosGenericos = genericos >= 2 ? 5 : 0;
    score.antiAlucinacao.total += score.antiAlucinacao.detalhes.termosGenericos;
    if (genericos < 2) sugestoes.push('⚠️ Usar termos genéricos: "Ministério Público", "Defesa", "apenado"');

    // Sem nome do juiz (5 pts)
    if (!PADROES.nomeJuiz.test(texto)) {
        score.antiAlucinacao.detalhes.semNomeJuiz = 5;
        score.antiAlucinacao.total += 5;
    } else {
        score.antiAlucinacao.detalhes.semNomeJuiz = 0;
        problemas.push('❌ Menciona nome do juiz (proibido)');
    }

    // Jurisprudência verificável (10 pts) - RIGOROSO!
    // Lista completa de súmulas permitidas
    const sumulasSTJ = ['341', '439', '440', '441', '443', '471', '491', '534', '535', '536'];
    const sumulasSTF = ['693', '694', '715', '716', '717', '718', '719'];
    const sumulasPermitidas = [...sumulasSTJ, ...sumulasSTF];

    const sumulasCitadas = texto.match(/Súmula\s+(?:n?[ºo]?\s*)?(\d+)/gi) || [];
    let sumulasInvalidas = [];
    let sumulasValidas = [];

    for (const s of sumulasCitadas) {
        const num = s.match(/\d+/)?.[0];
        if (num) {
            if (sumulasPermitidas.includes(num)) {
                sumulasValidas.push(num);
            } else {
                sumulasInvalidas.push(num);
            }
        }
    }

    // Se citou qualquer súmula inválida, PERDE TODOS os pontos
    if (sumulasInvalidas.length > 0) {
        score.antiAlucinacao.detalhes.jurispVerificavel = 0;
        problemas.push(`❌ ALUCINAÇÃO: Súmula(s) INVENTADA(S): ${sumulasInvalidas.join(', ')}`);
    } else {
        score.antiAlucinacao.detalhes.jurispVerificavel = 10;
    }
    score.antiAlucinacao.total += score.antiAlucinacao.detalhes.jurispVerificavel;

    // Doutrina verificável (10 pts) - RIGOROSO!
    const autoresPermitidos = ['nucci', 'greco', 'mirabete', 'bitencourt', 'marcão', 'brito'];
    const lower = texto.toLowerCase();

    // Detectar padrões de citação doutrinária
    const citacoesDoutrina = texto.match(/(?:segundo|conforme|ensina|preleciona)\s+[A-Z][a-záéíóúãõ]+/gi) || [];
    const autoresCitados = texto.match(/[A-Z]{2,}(?:,\s*[A-Z][a-záéíóúãõ]+)+/g) || []; // Padrão ABNT

    let autoresInvalidos = [];
    let temAutorValido = false;

    // Verificar autores citados
    for (const autor of autoresPermitidos) {
        if (lower.includes(autor)) {
            temAutorValido = true;
            break;
        }
    }

    // Se cita doutrina mas não é autor conhecido, pode ser alucinação
    const temCitacaoSemAutorConhecido = citacoesDoutrina.length > 0 && !temAutorValido;

    if (temCitacaoSemAutorConhecido) {
        score.antiAlucinacao.detalhes.doutrinaVerificavel = 5; // Penaliza parcialmente
        sugestoes.push('⚠️ Citação doutrinária sem autor conhecido da lista permitida');
    } else {
        score.antiAlucinacao.detalhes.doutrinaVerificavel = 10;
    }
    score.antiAlucinacao.total += score.antiAlucinacao.detalhes.doutrinaVerificavel;

    // ========== CÁLCULO FINAL ==========
    const totalGeral = score.relatorio.total + score.fundamentacao.total +
        score.dispositivo.total + score.antiAlucinacao.total;
    const percentual = Math.round((totalGeral / 190) * 100);

    // Determinar nível atingido
    let nivelAtingido = 1;
    if (percentual >= 90 && temDoutrina) nivelAtingido = 5;
    else if (percentual >= 80 && temDoutrina) nivelAtingido = 4;
    else if (percentual >= 70 && artigosCount > 0 && jurispCount > 0) nivelAtingido = 3;
    else if (percentual >= 60) nivelAtingido = 2;

    return {
        score,
        totalGeral,
        maxGeral: 190,
        percentual,
        nivelAtingido,
        aprovado: percentual >= 70,
        problemas,
        sugestoes,
        resumo: {
            relatorio: `${score.relatorio.total}/${score.relatorio.max}`,
            fundamentacao: `${score.fundamentacao.total}/${score.fundamentacao.max}`,
            dispositivo: `${score.dispositivo.total}/${score.dispositivo.max}`,
            antiAlucinacao: `${score.antiAlucinacao.total}/${score.antiAlucinacao.max}`,
        }
    };
}

// ============================================
// PROMPT APRIMORADO (Art. 489 CPC)
// ============================================

function construirPromptArt489(caso, modelosExemplo) {
    // Mapeamento de matéria para artigos/súmulas relevantes
    const LEGISLACAO_POR_MATERIA = {
        'indulto': {
            artigos: ['art. 1º do Decreto de Indulto', 'art. 84, XII da CF', 'art. 187 da LEP'],
            sumulas: ['Súmula 535 STJ', 'Súmula 441 STJ'],
        },
        'livramento': {
            artigos: ['art. 83 do CP', 'art. 131 da LEP', 'art. 132 da LEP'],
            sumulas: ['Súmula 441 STJ', 'Súmula 439 STJ'],
        },
        'multa': {
            artigos: ['art. 51 do CP', 'art. 168 da LEP', 'art. 169 da LEP'],
            sumulas: ['Súmula 693 STF'],
        },
        'prisao_domiciliar': {
            artigos: ['art. 117 da LEP', 'art. 318 do CPP', 'art. 318-A do CPP'],
            sumulas: [],
        },
        'progressao': {
            artigos: ['art. 112 da LEP', 'art. 33 do CP', '§2º do art. 33 do CP'],
            sumulas: ['Súmula 534 STJ', 'Súmula 471 STJ', 'Súmula 439 STJ'],
        },
        'remicao': {
            artigos: ['art. 126 da LEP', 'art. 127 da LEP', 'art. 128 da LEP', 'art. 129 da LEP'],
            sumulas: ['Súmula 341 STJ'],
        },
        'retificacao': {
            artigos: ['art. 111 da LEP', 'art. 66 da LEP'],
            sumulas: ['Súmula 534 STJ'],
        },
        'unificacao': {
            artigos: ['art. 111 da LEP', 'art. 75 do CP', 'art. 66, III, a da LEP'],
            sumulas: [],
        },
    };

    // Mapeamento de doutrina por matéria (citações ABNT reais do banco)
    const DOUTRINA_POR_MATERIA = {
        'indulto': {
            citacao: 'NUCCI, Guilherme de Souza. Curso de Execução Penal. Rio de Janeiro: Forense, 2020, p. 285.',
            texto: 'O indulto é ato de clemência soberana do Presidente da República, que extingue a punibilidade do condenado, desde que preenchidos os requisitos do decreto.',
        },
        'livramento': {
            citacao: 'BRITO, Alexis Couto de. Execução Penal. 5. ed. São Paulo: Saraiva Educação, 2019, p. 312.',
            texto: 'O livramento condicional é a última etapa do sistema progressivo, concedido quando o apenado demonstra aptidão para reinserção social, mediante cumprimento de requisitos objetivos e subjetivos.',
        },
        'multa': {
            citacao: 'MARCÃO, Renato. Curso de Execução Penal. São Paulo: Saraiva, 2019, p. 187.',
            texto: 'A pena de multa, não paga pelo condenado, não pode ser convertida em pena privativa de liberdade, devendo ser executada como dívida de valor.',
        },
        'prisao_domiciliar': {
            citacao: 'NUCCI, Guilherme de Souza. Curso de Execução Penal. Rio de Janeiro: Forense, 2020, p. 195.',
            texto: 'A prisão domiciliar substitui a prisão em estabelecimento criminal quando presentes situações humanitárias que a justifiquem, como idade avançada ou doença grave.',
        },
        'progressao': {
            citacao: 'BRITO, Alexis Couto de. Execução Penal. 5. ed. São Paulo: Saraiva Educação, 2019, p. 245.',
            texto: 'A progressão de regime é direito subjetivo do apenado que preenche os requisitos legais, caracterizando o sistema progressivo adotado pelo ordenamento brasileiro.',
        },
        'remicao': {
            citacao: 'MARCÃO, Renato. Curso de Execução Penal. São Paulo: Saraiva, 2019, p. 156.',
            texto: 'A remição pelo trabalho ou estudo é instituto que visa estimular a ressocialização do apenado, permitindo o abatimento de dias de pena pelo esforço produtivo.',
        },
        'retificacao': {
            citacao: 'NUCCI, Guilherme de Souza. Curso de Execução Penal. Rio de Janeiro: Forense, 2020, p. 98.',
            texto: 'A retificação da guia de execução penal é medida que visa corrigir eventuais erros materiais ou inadequações no cálculo de penas e benefícios.',
        },
        'unificacao': {
            citacao: 'BRITO, Alexis Couto de. Execução Penal. 5. ed. São Paulo: Saraiva Educação, 2019, p. 178.',
            texto: 'A unificação de penas é instituto que visa concentrar na mesma execução penal todas as condenações do mesmo apenado, permitindo o cálculo correto dos benefícios.',
        },
    };

    const legislacaoMateria = LEGISLACAO_POR_MATERIA[caso.agrupador] || { artigos: ['art. 66 da LEP'], sumulas: [] };
    const doutrinaMateria = DOUTRINA_POR_MATERIA[caso.agrupador] || null;

    let prompt = `# SISTEMA DE REDAÇÃO JURÍDICA - Art. 489 CPC
# ⚠️ ATENÇÃO MÁXIMA: FUNDAMENTAÇÃO É AVALIADA COM RIGOR! ⚠️

## VOCÊ É
Assistente de redação de decisões judiciais da Vara de Execução Penal.
Estilo: Juiz Henrique Baltazar (formal, objetivo, didático).

## ESTRUTURA OBRIGATÓRIA (Art. 489 CPC)

### I - RELATÓRIO (40 pontos)
1. Inicie EXATAMENTE com "Vistos, etc."
2. Identifique a causa: "Trata-se de pedido de [matéria] formulado pelo apenado..."
3. Mencione eventos entre parênteses: "(evento X.X)"
4. Se MP deu causa, MP vem primeiro; senão, MP vem depois
5. NÃO diga "a defesa não se manifestou" - se não houve, não mencione
6. Finalize com "Relatados." em linha própria

### II - FUNDAMENTAÇÃO (65 pontos - ÁREA CRÍTICA!)
⚠️ ESTA É A SEÇÃO MAIS IMPORTANTE! SIGA EXATAMENTE ESTE MODELO: ⚠️

**PARÁGRAFO 1 - PONTO FULCRAL (OBRIGATÓRIO):**
COPIE E ADAPTE: "Cinge-se a presente demanda à análise do pedido de ${caso.agrupador}."
OU: "Versam os autos sobre pedido de ${caso.agrupador}."
OU: "A discussão diz respeito a pedido de ${caso.agrupador} formulado pelo apenado."

**PARÁGRAFO 2 - SITUAÇÃO FÁTICA (OBRIGATÓRIO):**
COPIE E ADAPTE: "Consta nos autos que o apenado [descrever situação com base nos insumos]."
OU: "O SEEU registra que o executado [dados do caso]."
OU: "Verifica-se nos autos que [situação atual do apenado]."

**PARÁGRAFO 3 - FUNDAMENTAÇÃO LEGAL (OBRIGATÓRIO - 10 PONTOS):**
⚠️⚠️⚠️ VOCÊ DEVE CITAR PELO MENOS UM ARTIGO DE LEI! ⚠️⚠️⚠️
COPIE E ADAPTE UMA DESTAS FRASES:
- "O ${legislacaoMateria.artigos[0] || 'art. 66 da LEP'} estabelece que [transcrever ou parafrasear o dispositivo legal]."
- "Nos termos do ${legislacaoMateria.artigos[0] || 'art. 66 da LEP'}, [aplicar ao caso]."
- "A LEP, em seu ${legislacaoMateria.artigos[0] || 'art. 66'}, prevê que [regra aplicável]."
${legislacaoMateria.artigos.length > 1 ? `- "Ademais, o ${legislacaoMateria.artigos[1]} complementa que [regra adicional]."` : ''}

**PARÁGRAFO 4 - JURISPRUDÊNCIA (RECOMENDADO - 10 PONTOS):**
${legislacaoMateria.sumulas.length > 0 ? `COPIE E ADAPTE: "Nesse sentido, a ${legislacaoMateria.sumulas[0]} dispõe que [enunciado da súmula]. Assim, [aplicação ao caso]."
OU: "Conforme entendimento pacífico do STJ, cristalizado na ${legislacaoMateria.sumulas[0]}, [aplicação]."` : `COPIE E ADAPTE: "Tal entendimento encontra respaldo na jurisprudência consolidada do STJ."
OU: "Segundo posição do Superior Tribunal de Justiça, [regra aplicável ao caso]."`}

**PARÁGRAFO 5 - CONCLUSÃO DO RACIOCÍNIO (OBRIGATÓRIO):**
COPIE E ADAPTE: "Dessa forma, [conclusão que justifica a decisão]."
OU: "Assim sendo, [raciocínio conclusivo]."
OU: "Portanto, [síntese do entendimento]."

## ⚡ LEGISLAÇÃO QUE VOCÊ DEVE CITAR NESTA DECISÃO:
${legislacaoMateria.artigos.map((a, i) => `   ${i + 1}. ${a}`).join('\n')}

## ⚡ SÚMULAS DISPONÍVEIS PARA CITAR (se aplicável):
${legislacaoMateria.sumulas.length > 0 ? legislacaoMateria.sumulas.map((s, i) => `   ${i + 1}. ${s}`).join('\n') : '   (Use: "conforme entendimento pacífico do STJ")'}

### III - DISPOSITIVO (40 pontos)
1. Inicie com "Isso posto,"
2. Seja OBJETIVO - apenas o que MUDA
3. Se múltiplas decisões, use itens: a), b), c)
4. Finalize com "P.R.I."
5. Se alterou situação: "Atualize-se o atestado de penas."

## ⚠️⚠️⚠️ REGRAS ABSOLUTAS ANTI-ALUCINAÇÃO (45 pontos) ⚠️⚠️⚠️
### VIOLAÇÃO = FALHA CRÍTICA - DECISÃO SERÁ REJEITADA!

**PROIBIÇÕES ABSOLUTAS (JAMAIS FAZER):**
1. ❌ JAMAIS inventar nomes de pessoas (promotores, defensores, advogados, juízes)
2. ❌ JAMAIS inventar números de processos, autos ou eventos fictícios
3. ❌ JAMAIS mencionar "Juiz Baltazar" ou qualquer nome de magistrado
4. ❌ JAMAIS citar súmulas que não estejam na lista abaixo
5. ❌ JAMAIS citar autores de doutrina que não estejam na lista abaixo
6. ❌ JAMAIS usar bullet points (•), listas numeradas ou formatação markdown
7. ❌ JAMAIS inventar datas, prazos ou valores não fornecidos nos insumos

**TERMOS OBRIGATÓRIOS (SEMPRE USAR):**
- "Ministério Público" (nunca "o promotor", "Dr. Fulano")
- "Defesa" ou "Defensor" (nunca nome de advogado)
- "apenado" ou "executado" (nunca nome próprio inventado)
- "evento X.X" para referências (nunca número inventado)

**SÚMULAS PERMITIDAS (APENAS ESTAS):**
- STJ: 341, 439, 440, 441, 443, 471, 491, 534, 535, 536
- STF: 693, 694, 715, 716, 717, 718, 719

**DOUTRINADORES PERMITIDOS (APENAS ESTES):**
- NUCCI, Guilherme de Souza
- GRECO, Rogério
- BRITO, Alexis Couto de
- MARCÃO, Renato
- BITENCOURT, Cezar Roberto
- MIRABETE, Julio Fabbrini

**SE NÃO TEM CERTEZA, NÃO CITE!** É melhor não citar do que inventar.

## 📋 CHECKLIST FINAL (verifique ANTES de finalizar):
☑ Tem "Vistos, etc." no início
☑ Tem "Relatados." após o relatório  
☑ Tem "Cinge-se..." ou "Versam os autos..." no início da fundamentação
☑ Cita PELO MENOS UM artigo de lei (${legislacaoMateria.artigos[0] || 'art. 66 da LEP'})
${legislacaoMateria.sumulas.length > 0 ? `☑ Cita a ${legislacaoMateria.sumulas[0]}` : '☑ Menciona entendimento do STJ'}
☑ Tem "Dessa forma," ou "Assim," ou "Portanto," antes do dispositivo
☑ Tem "Isso posto," no dispositivo
☑ Tem "P.R.I." no final
☑ NÃO TEM nomes inventados, súmulas falsas, ou markdown

## MODELOS DE REFERÊNCIA
`;

    // Adicionar modelos de exemplo
    modelosExemplo.slice(0, 3).forEach((m, i) => {
        const modeloLimpo = m.replace(/```/g, '').substring(0, 2500);
        prompt += `\n### Modelo ${i + 1}\n${modeloLimpo}\n\n---\n`;
    });

    // Adicionar caso
    const nivelSolicitado = caso.nivelQualidade || 3;
    prompt += `
## CASO A DECIDIR

**Matéria:** ${caso.agrupador.toUpperCase()}
**Insumos:** ${caso.insumos}
**Orientação:** ${caso.orientacao}
**Nível Solicitado:** ${nivelSolicitado}

## CITAÇÕES OBRIGATÓRIAS:
- LEGISLAÇÃO: ${legislacaoMateria.artigos.slice(0, 2).join(', ')}
- ${legislacaoMateria.sumulas.length > 0 ? `SÚMULA: ${legislacaoMateria.sumulas[0]}` : 'Use jurisprudência do STJ se houver'}
${nivelSolicitado >= 4 && doutrinaMateria ? `
## DOUTRINA OBRIGATÓRIA (Nível ${nivelSolicitado}):
INCLUA ESTA CITAÇÃO NA FUNDAMENTAÇÃO:
"${doutrinaMateria.texto}" (${doutrinaMateria.citacao})
` : ''}
## GERE A DECISÃO AGORA
(Comece diretamente com "Vistos, etc." - sem markdown, sem code blocks)
`;

    return prompt;
}

// ============================================
// FUNÇÕES DE EXECUÇÃO
// ============================================

function carregarModelosExemplo(agrupador, limite = 5) {
    try {
        const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
        const modelos = indice.modelos.filter(m => m.agrupador === agrupador).slice(0, limite);

        return modelos.map(m => {
            const textoPath = path.join(TEXTOS_DIR, m.arquivo_texto);
            return fs.existsSync(textoPath) ? fs.readFileSync(textoPath, 'utf-8') : '';
        }).filter(t => t.length > 100);
    } catch (e) {
        return [];
    }
}

async function gerarDecisao(prompt) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    maxOutputTokens: 4000,
                    temperature: 0.2
                }
            })
        }
    );

    if (!response.ok) throw new Error(`API: ${response.status}`);
    const data = await response.json();
    let texto = data.candidates[0].content.parts[0].text;

    // Limpar code blocks
    texto = texto.replace(/^```[\w]*\n?/, '').replace(/\n?```$/, '');

    return texto.trim();
}

async function executarCaso(caso, modelosExemplo) {
    const inicio = Date.now();

    try {
        const prompt = construirPromptArt489(caso, modelosExemplo);
        const decisao = await gerarDecisao(prompt);
        const tempo = Date.now() - inicio;

        const contexto = {
            insumos: caso.insumos,
            orientacao: caso.orientacao,
            agrupador: caso.agrupador,
            nivelSolicitado: caso.nivelQualidade || 3
        };

        const validacao = validarArt489(decisao, contexto);

        return {
            id: caso.id,
            nome: caso.nome,
            sucesso: validacao.aprovado,
            totalGeral: validacao.totalGeral,
            percentual: validacao.percentual,
            nivelAtingido: validacao.nivelAtingido,
            resumo: validacao.resumo,
            problemas: validacao.problemas,
            sugestoes: validacao.sugestoes,
            tamanho: decisao.length,
            tempo,
            preview: decisao.substring(0, 300)
        };

    } catch (error) {
        return {
            id: caso.id,
            nome: caso.nome,
            sucesso: false,
            totalGeral: 0,
            percentual: 0,
            erro: error.message
        };
    }
}

async function executarSuite(suiteFile) {
    const suite = JSON.parse(fs.readFileSync(suiteFile, 'utf-8'));
    console.log(`\n${'═'.repeat(70)}`);
    console.log(`📋 Suite: ${suite.suite.toUpperCase()}`);
    console.log(`   ${suite.descricao}`);
    console.log('═'.repeat(70));

    const modelosExemplo = carregarModelosExemplo(suite.suite);
    console.log(`📚 ${modelosExemplo.length} modelos de exemplo\n`);

    if (modelosExemplo.length === 0) {
        console.log('⚠️ Sem modelos de exemplo');
        return { suite: suite.suite, casos: [], resumo: { total: 0, sucesso: 0 } };
    }

    const resultados = [];

    for (const caso of suite.casos) {
        console.log(`🔄 [${caso.id}] ${caso.nome}`);

        const resultado = await executarCaso(caso, modelosExemplo);
        resultados.push(resultado);

        const status = resultado.sucesso ? '✅' : '❌';
        console.log(`   ${status} Score: ${resultado.totalGeral}/190 (${resultado.percentual}%) - Nível ${resultado.nivelAtingido}`);
        console.log(`      📊 Rel:${resultado.resumo?.relatorio} | Fund:${resultado.resumo?.fundamentacao} | Disp:${resultado.resumo?.dispositivo} | Anti:${resultado.resumo?.antiAlucinacao}`);

        if (resultado.problemas?.length > 0) {
            resultado.problemas.slice(0, 3).forEach(p => console.log(`      ${p}`));
        }

        await new Promise(r => setTimeout(r, 2000));
    }

    const sucesso = resultados.filter(r => r.sucesso).length;
    const mediaScore = resultados.reduce((a, r) => a + (r.totalGeral || 0), 0) / resultados.length;
    const mediaPercent = resultados.reduce((a, r) => a + (r.percentual || 0), 0) / resultados.length;

    console.log(`\n📊 Resumo: ${sucesso}/${resultados.length} aprovados`);
    console.log(`   Média: ${mediaScore.toFixed(1)}/190 (${mediaPercent.toFixed(1)}%)`);

    return {
        suite: suite.suite,
        casos: resultados,
        resumo: {
            total: resultados.length,
            sucesso,
            taxa: ((sucesso / resultados.length) * 100).toFixed(1),
            mediaScore: mediaScore.toFixed(1),
            mediaPercent: mediaPercent.toFixed(1)
        }
    };
}

// ============================================
// MAIN
// ============================================

async function main() {
    console.log('═══════════════════════════════════════════════════════════════════════');
    console.log('🧪 estagIA - Sistema de Testes Art. 489 CPC');
    console.log('   Avaliação Detalhada: Relatório | Fundamentação | Dispositivo | Anti-Alucinação');
    console.log('═══════════════════════════════════════════════════════════════════════');

    if (!geminiKey) {
        console.error('❌ GEMINI_API_KEY não configurada');
        process.exit(1);
    }

    const args = process.argv.slice(2);
    let suiteFiltro = null;
    for (const arg of args) {
        if (arg.startsWith('--suite=')) suiteFiltro = arg.split('=')[1];
    }

    const suites = fs.readdirSync(SUITES_DIR)
        .filter(f => f.endsWith('.test.json'))
        .filter(f => !suiteFiltro || f.includes(suiteFiltro));

    console.log(`\n📁 ${suites.length} suites a executar\n`);

    const resultados = [];
    for (const suiteFile of suites) {
        const resultado = await executarSuite(path.join(SUITES_DIR, suiteFile));
        resultados.push(resultado);
    }

    // Relatório final
    console.log('\n' + '═'.repeat(70));
    console.log('📊 RELATÓRIO FINAL - Art. 489 CPC');
    console.log('═'.repeat(70));

    let totalCasos = 0, totalSucesso = 0, somaScores = 0;

    console.log('\n┌────────────────────┬───────┬─────────┬────────────┐');
    console.log('│ Suite              │  Taxa │  Média  │   Nível    │');
    console.log('├────────────────────┼───────┼─────────┼────────────┤');

    for (const r of resultados) {
        if (r.resumo.total > 0) {
            const nivelMedio = r.casos.reduce((a, c) => a + (c.nivelAtingido || 0), 0) / r.casos.length;
            console.log(`│ ${r.suite.padEnd(18)} │ ${r.resumo.taxa.padStart(4)}% │ ${r.resumo.mediaPercent.padStart(5)}% │    ${nivelMedio.toFixed(1)}     │`);
            totalCasos += r.resumo.total;
            totalSucesso += r.resumo.sucesso;
            somaScores += parseFloat(r.resumo.mediaScore) * r.resumo.total;
        }
    }

    console.log('└────────────────────┴───────┴─────────┴────────────┘');

    const taxaGlobal = ((totalSucesso / totalCasos) * 100).toFixed(1);
    const mediaGlobal = (somaScores / totalCasos).toFixed(1);
    const percentGlobal = ((somaScores / totalCasos) / 190 * 100).toFixed(1);

    console.log(`\n🎯 TOTAL: ${totalSucesso}/${totalCasos} aprovados (${taxaGlobal}%)`);
    console.log(`📈 MÉDIA: ${mediaGlobal}/190 (${percentGlobal}%)`);

    // Salvar relatório
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const relatorio = {
        versao: 'art489-v1.0.0',
        dataExecucao: new Date().toISOString(),
        criterios: {
            relatorio: 40,
            fundamentacao: 65,
            dispositivo: 40,
            antiAlucinacao: 45,
            total: 190
        },
        totalCasos,
        totalSucesso,
        taxaGlobal,
        mediaGlobal,
        percentGlobal,
        suites: resultados
    };

    const relatorioPath = path.join(OUTPUT_DIR, `report_art489_${Date.now()}.json`);
    fs.writeFileSync(relatorioPath, JSON.stringify(relatorio, null, 2));
    console.log(`\n💾 Relatório: ${relatorioPath}`);
}

main().catch(console.error);
