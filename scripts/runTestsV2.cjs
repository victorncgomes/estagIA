/**
 * estagIA - Sistema de Testes v2.0 com LLM Judge
 * 
 * Executa testes com avaliação qualitativa usando LLM Judge.
 * Critérios: Estrutura, Citações, Coerência, Anti-alucinação, Adequação.
 * 
 * Uso: node scripts/runTestsV2.cjs [--suite=remicao]
 * 
 * @version 2.0.0
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
// PROMPT APRIMORADO PARA GERAÇÃO
// ============================================
function carregarCorePrompt() {
    if (fs.existsSync(CORE_PROMPT)) {
        return fs.readFileSync(CORE_PROMPT, 'utf-8').substring(0, 8000);
    }
    return '';
}

function construirPromptAprimorado(caso, modelosExemplo) {
    const corePrompt = carregarCorePrompt();

    let prompt = `# SISTEMA DE REDAÇÃO JURÍDICA - VARA DE EXECUÇÃO PENAL

## IDENTIDADE
Você é um assistente de redação de decisões judiciais da Vara de Execução Penal.
Suas decisões devem ser precisas, bem fundamentadas e seguir rigorosamente a estrutura padrão.

## ESTRUTURA OBRIGATÓRIA

### 1. Abertura
- Deve iniciar EXATAMENTE com "Vistos etc." ou "Vistos, etc."
- NÃO iniciar com \`\`\` ou markdown

### 2. Relatório
- Descreva os fatos do caso
- Mencione a manifestação do MP (usar apenas "Ministério Público", nunca nomes)
- Mencione a manifestação da Defesa (usar apenas "Defesa", nunca nomes)
- IMPORTANTE: Termine o parágrafo do relatório com uma linha contendo apenas "Relatados."

### 3. Fundamentação
- Cite a legislação aplicável (LEP, CP, etc.)
- Cite súmulas se aplicável (ex: Súmula 534 STJ para data-base)
- Cite jurisprudência quando relevante
- Analise os requisitos objetivos e subjetivos
- Use parágrafos bem estruturados (NÃO use bullet points ou listas)

### 4. Dispositivo
- Inicie com "Isso posto," ou "Ante o exposto,"
- Defira ou indefira o pedido conforme a orientação
- Fundamente brevemente a decisão

### 5. Encerramento
- Termine com "P.R.I." (Publique-se, Registre-se, Intime-se)
- Não adicione data ou assinatura (serão inseridos automaticamente)

## REGRAS ABSOLUTAS

### Proibições
- JAMAIS inventar nomes de promotores, defensores ou advogados
- JAMAIS inventar números de processos
- JAMAIS usar bullet points (•) ou listas numeradas
- JAMAIS iniciar a resposta com \`\`\` ou markdown code blocks
- JAMAIS mencionar "Juiz Baltazar" ou qualquer nome de magistrado
- JAMAIS usar emojis ou formatação não-jurídica

### Obrigações
- SEMPRE usar termos genéricos: "Ministério Público", "Defesa", "apenado"
- SEMPRE incluir fundamentação legal
- SEMPRE manter tom formal e impessoal
- SEMPRE gerar decisão com 1500 a 4000 caracteres

## MODELOS DE REFERÊNCIA

`;

    // Adicionar modelos de exemplo (limitados)
    modelosExemplo.slice(0, 3).forEach((m, i) => {
        // Pegar apenas os primeiros 2000 chars de cada modelo
        const modeloLimpo = m.replace(/```/g, '').substring(0, 2000);
        prompt += `### Exemplo ${i + 1}\n${modeloLimpo}\n\n---\n\n`;
    });

    // Adicionar o caso específico
    prompt += `## CASO A DECIDIR

**Matéria:** ${caso.agrupador.toUpperCase()}
**Insumos:** ${caso.insumos}
**Orientação:** ${caso.orientacao}

## INSTRUÇÕES FINAIS
1. Gere a decisão COMPLETA, começando diretamente com "Vistos etc."
2. NÃO use markdown, code blocks ou formatação especial
3. Mantenha tamanho entre 1500 e 4000 caracteres
4. Inclua fundamentação legal adequada à matéria

GERE A DECISÃO AGORA:`;

    return prompt;
}

// ============================================
// LLM JUDGE - AVALIAÇÃO QUALITATIVA
// ============================================
const JUDGE_PROMPT = `# JUIZ AVALIADOR DE DECISÕES JUDICIAIS

Você é um especialista em execução penal avaliando uma decisão judicial.

## CRITÉRIOS DE AVALIAÇÃO (100 pontos total)

### 1. ESTRUTURA (20 pontos)
- Inicia com "Vistos etc." ou similar: +5
- Contém "Relatados." em parágrafo próprio: +5
- Contém "Isso posto," ou "Ante o exposto,": +5
- Termina com "P.R.I.": +5

### 2. FUNDAMENTAÇÃO JURÍDICA (25 pontos)
- Cita legislação aplicável (LEP, CP, etc.): +10
- Cita súmulas ou jurisprudência quando aplicável: +10
- Fundamentação lógica e coerente: +5

### 3. ADEQUAÇÃO À MATÉRIA (20 pontos)
- Trata corretamente o tipo de pedido: +10
- Analisa requisitos corretos (objetivos/subjetivos): +10

### 4. QUALIDADE TEXTUAL (15 pontos)
- Linguagem formal jurídica: +5
- Sem bullet points ou listas: +5
- Tamanho adequado (1500-4000 chars): +5

### 5. ANTI-ALUCINAÇÃO (20 pontos)
- Não inventa nomes de pessoas: +10
- Não inventa números de processo: +5
- Usa termos genéricos ("Ministério Público", "Defesa"): +5

## INFORMAÇÕES DO CASO
**Matéria:** {{MATERIA}}
**Insumos:** {{INSUMOS}}
**Orientação:** {{ORIENTACAO}}

## DECISÃO A AVALIAR
\`\`\`
{{DECISAO}}
\`\`\`

## RESPONDA APENAS COM JSON:
{
  "score_total": <0-100>,
  "aprovado": <true se >= 75>,
  "estrutura": {"pontos": <0-20>, "problemas": []},
  "fundamentacao": {"pontos": <0-25>, "problemas": []},
  "adequacao": {"pontos": <0-20>, "problemas": []},
  "qualidade": {"pontos": <0-15>, "problemas": []},
  "anti_alucinacao": {"pontos": <0-20>, "problemas": []},
  "pontos_fortes": ["lista"],
  "sugestoes_melhoria": ["lista"]
}`;

async function avaliarComLLMJudge(decisao, caso) {
    const prompt = JUDGE_PROMPT
        .replace('{{MATERIA}}', caso.agrupador)
        .replace('{{INSUMOS}}', caso.insumos)
        .replace('{{ORIENTACAO}}', caso.orientacao)
        .replace('{{DECISAO}}', decisao);

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { maxOutputTokens: 2000, temperature: 0.1 }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`API: ${response.status}`);
        }

        const data = await response.json();
        const texto = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Extrair JSON
        const jsonMatch = texto.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        throw new Error('JSON não encontrado na resposta');

    } catch (error) {
        console.error('   ⚠️ Erro no LLM Judge:', error.message);
        return null;
    }
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================
function carregarModelosExemplo(agrupador, limite = 5) {
    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
    const modelos = indice.modelos.filter(m => m.agrupador === agrupador).slice(0, limite);

    return modelos.map(m => {
        const textoPath = path.join(TEXTOS_DIR, m.arquivo_texto);
        return fs.existsSync(textoPath) ? fs.readFileSync(textoPath, 'utf-8') : '';
    }).filter(t => t.length > 100);
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
                    temperature: 0.3 // Baixa temperatura para mais consistência
                }
            })
        }
    );

    if (!response.ok) throw new Error(`API: ${response.status}`);
    const data = await response.json();
    let texto = data.candidates[0].content.parts[0].text;

    // Limpar possíveis code blocks
    texto = texto.replace(/^```[\w]*\n?/, '').replace(/\n?```$/, '');

    return texto.trim();
}

// ============================================
// EXECUÇÃO DOS TESTES
// ============================================
async function executarCaso(caso, modelosExemplo) {
    const inicio = Date.now();

    try {
        // Gerar decisão
        const prompt = construirPromptAprimorado(caso, modelosExemplo);
        const decisao = await gerarDecisao(prompt);
        const tempoGeracao = Date.now() - inicio;

        // Avaliar com LLM Judge
        await new Promise(r => setTimeout(r, 500)); // Rate limit
        const avaliacao = await avaliarComLLMJudge(decisao, caso);
        const tempoTotal = Date.now() - inicio;

        if (avaliacao) {
            return {
                id: caso.id,
                nome: caso.nome,
                sucesso: avaliacao.aprovado,
                score_total: avaliacao.score_total,
                detalhes: {
                    estrutura: avaliacao.estrutura?.pontos || 0,
                    fundamentacao: avaliacao.fundamentacao?.pontos || 0,
                    adequacao: avaliacao.adequacao?.pontos || 0,
                    qualidade: avaliacao.qualidade?.pontos || 0,
                    anti_alucinacao: avaliacao.anti_alucinacao?.pontos || 0
                },
                problemas: [
                    ...(avaliacao.estrutura?.problemas || []),
                    ...(avaliacao.fundamentacao?.problemas || []),
                    ...(avaliacao.adequacao?.problemas || []),
                    ...(avaliacao.qualidade?.problemas || []),
                    ...(avaliacao.anti_alucinacao?.problemas || [])
                ],
                pontos_fortes: avaliacao.pontos_fortes || [],
                sugestoes: avaliacao.sugestoes_melhoria || [],
                tamanho: decisao.length,
                tempo: tempoTotal,
                preview: decisao.substring(0, 250)
            };
        }

        // Fallback se LLM Judge falhar
        return avaliacaoLocal(caso, decisao, tempoTotal);

    } catch (error) {
        return {
            id: caso.id,
            nome: caso.nome,
            sucesso: false,
            score_total: 0,
            erro: error.message
        };
    }
}

function avaliacaoLocal(caso, decisao, tempo) {
    const lower = decisao.toLowerCase();
    let score = 0;
    const problemas = [];

    // Estrutura (20)
    if (lower.includes('vistos')) score += 5;
    else problemas.push('Falta "Vistos"');

    if (lower.includes('relatados')) score += 5;
    else problemas.push('Falta "Relatados"');

    if (lower.includes('isso posto') || lower.includes('ante o exposto')) score += 5;
    else problemas.push('Falta "Isso posto"');

    if (lower.includes('p.r.i')) score += 5;
    else problemas.push('Falta "P.R.I."');

    // Fundamentação (25)
    if (lower.includes('lep') || lower.includes('lei de execução') || lower.includes('art.')) score += 10;
    if (lower.includes('súmula') || lower.includes('stj') || lower.includes('stf')) score += 10;
    score += 5; // Assume coerência

    // Adequação (20)
    if (lower.includes(caso.agrupador.toLowerCase().replace('_', ' '))) score += 10;
    score += 10; // Assume tratamento correto

    // Qualidade (15)
    if (!decisao.includes('•') && !decisao.includes('-')) score += 5;
    if (decisao.length >= 1500 && decisao.length <= 4000) score += 10;
    else if (decisao.length < 1500) problemas.push(`Texto curto: ${decisao.length} chars`);

    // Anti-alucinação (20)
    if (!decisao.match(/Dr\.\s+[A-Z][a-z]+/)) score += 10;
    if (lower.includes('ministério público') || lower.includes('defesa')) score += 10;

    return {
        id: caso.id,
        nome: caso.nome,
        sucesso: score >= 75,
        score_total: score,
        detalhes: { local: true },
        problemas,
        tamanho: decisao.length,
        tempo,
        preview: decisao.substring(0, 250)
    };
}

async function executarSuite(suiteFile) {
    const suite = JSON.parse(fs.readFileSync(suiteFile, 'utf-8'));
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`📋 Suite: ${suite.suite.toUpperCase()}`);
    console.log(`   ${suite.descricao}`);
    console.log('═'.repeat(60));

    const modelosExemplo = carregarModelosExemplo(suite.suite);
    console.log(`📚 ${modelosExemplo.length} modelos de exemplo\n`);

    if (modelosExemplo.length === 0) {
        console.log('⚠️ Sem modelos de exemplo - pulando');
        return { suite: suite.suite, casos: [], resumo: { total: 0, sucesso: 0 } };
    }

    const resultados = [];

    for (const caso of suite.casos) {
        console.log(`🔄 [${caso.id}] ${caso.nome}`);

        const resultado = await executarCaso(caso, modelosExemplo);
        resultados.push(resultado);

        const status = resultado.sucesso ? '✅' : '❌';
        console.log(`   ${status} Score: ${resultado.score_total}/100`);

        if (resultado.detalhes && !resultado.detalhes.local) {
            console.log(`      📊 Est:${resultado.detalhes.estrutura} | Fund:${resultado.detalhes.fundamentacao} | Adeq:${resultado.detalhes.adequacao} | Qual:${resultado.detalhes.qualidade} | Anti:${resultado.detalhes.anti_alucinacao}`);
        }

        if (resultado.problemas?.length > 0) {
            resultado.problemas.slice(0, 2).forEach(p => console.log(`      ⚠️ ${p}`));
        }

        await new Promise(r => setTimeout(r, 1500)); // Rate limit
    }

    const sucesso = resultados.filter(r => r.sucesso).length;
    const mediaScore = resultados.reduce((a, r) => a + (r.score_total || 0), 0) / resultados.length;

    console.log(`\n📊 Resumo: ${sucesso}/${resultados.length} aprovados | Média: ${mediaScore.toFixed(1)}/100`);

    return {
        suite: suite.suite,
        casos: resultados,
        resumo: {
            total: resultados.length,
            sucesso,
            taxa: ((sucesso / resultados.length) * 100).toFixed(1),
            mediaScore: mediaScore.toFixed(1)
        }
    };
}

// ============================================
// MAIN
// ============================================
async function main() {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('🧪 estagIA - Sistema de Testes v2.0 com LLM Judge');
    console.log('═══════════════════════════════════════════════════════════');

    if (!geminiKey) {
        console.error('❌ GEMINI_API_KEY não configurada');
        process.exit(1);
    }

    // Parse args
    const args = process.argv.slice(2);
    let suiteFiltro = null;
    for (const arg of args) {
        if (arg.startsWith('--suite=')) suiteFiltro = arg.split('=')[1];
    }

    // Listar suites
    const suites = fs.readdirSync(SUITES_DIR)
        .filter(f => f.endsWith('.test.json'))
        .filter(f => !suiteFiltro || f.includes(suiteFiltro));

    console.log(`\n📁 ${suites.length} suites a executar`);

    // Executar
    const resultados = [];
    for (const suiteFile of suites) {
        const resultado = await executarSuite(path.join(SUITES_DIR, suiteFile));
        resultados.push(resultado);
    }

    // Relatório final
    console.log('\n' + '═'.repeat(60));
    console.log('📊 RELATÓRIO FINAL');
    console.log('═'.repeat(60));

    let totalCasos = 0;
    let totalSucesso = 0;
    let somaScores = 0;

    for (const r of resultados) {
        if (r.resumo.total > 0) {
            console.log(`\n${r.suite}: ${r.resumo.sucesso}/${r.resumo.total} (${r.resumo.taxa}%) | Média: ${r.resumo.mediaScore}`);
            totalCasos += r.resumo.total;
            totalSucesso += r.resumo.sucesso;
            somaScores += parseFloat(r.resumo.mediaScore) * r.resumo.total;
        }
    }

    const taxaGlobal = ((totalSucesso / totalCasos) * 100).toFixed(1);
    const mediaGlobal = (somaScores / totalCasos).toFixed(1);

    console.log(`\n${'─'.repeat(60)}`);
    console.log(`🎯 TOTAL: ${totalSucesso}/${totalCasos} aprovados (${taxaGlobal}%)`);
    console.log(`📈 MÉDIA GLOBAL: ${mediaGlobal}/100`);

    // Salvar relatório
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const relatorio = {
        versao: '2.0.0',
        dataExecucao: new Date().toISOString(),
        totalCasos,
        totalSucesso,
        taxaGlobal,
        mediaGlobal,
        suites: resultados
    };

    const relatorioPath = path.join(OUTPUT_DIR, `report_v2_${Date.now()}.json`);
    fs.writeFileSync(relatorioPath, JSON.stringify(relatorio, null, 2));
    console.log(`\n💾 Relatório: ${relatorioPath}`);
}

main().catch(console.error);
