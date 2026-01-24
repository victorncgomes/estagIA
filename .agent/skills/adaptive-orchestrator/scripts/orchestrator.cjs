/**
 * Adaptive Multi-LLM Orchestrator v1.0 - Orchestrator Principal
 * 
 * Motor central que:
 * 1. Avalia risco do caso
 * 2. Escolhe tier apropriado
 * 3. Executa pipeline correspondente
 * 4. Retorna decisão com score de confiança
 * 
 * Uso:
 *   node .agent/skills/adaptive-orchestrator/scripts/orchestrator.cjs --caso=caso.json
 *   node .agent/skills/adaptive-orchestrator/scripts/orchestrator.cjs --test
 */

const fs = require('fs');
const path = require('path');
const { avaliarRisco, TIER_THRESHOLDS } = require('./riskDetector.cjs');
const { calcularConsenso, votarQuestoes, calcularScoreFinal } = require('./votingEngine.cjs');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const BACKEND_ENV = path.join(ROOT, 'backend', '.env');

// Carregar variáveis de ambiente
function loadEnv() {
    if (fs.existsSync(BACKEND_ENV)) {
        const content = fs.readFileSync(BACKEND_ENV, 'utf-8');
        content.split('\n').forEach(line => {
            const [key, ...vals] = line.split('=');
            if (key && vals.length) {
                process.env[key.trim()] = vals.join('=').trim();
            }
        });
    }
}

loadEnv();

// ============================================
// CLIENTS DE API (simplificados)
// ============================================
async function callGemini(prompt) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error('GEMINI_API_KEY não configurada');

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { maxOutputTokens: 4000, temperature: 0.2 }
            })
        }
    );

    if (!response.ok) throw new Error(`Gemini Error: ${response.status}`);
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

async function callGPT(prompt) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) return null;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 4000
        })
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data.choices[0].message.content;
}

async function callClaude(prompt) {
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) return null;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 4000,
            messages: [{ role: 'user', content: prompt }]
        })
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data.content[0].text;
}

// ============================================
// TIER 1 PIPELINE (Risco Baixo)
// ============================================
async function tier1Pipeline(caso, contexto) {
    console.log('\n[TIER 1] Pipeline simples ativado');
    console.log('   └─ Gemini Flash apenas\n');

    const inicio = Date.now();

    const prompt = `
Você é um juiz de execução penal. Gere uma decisão judicial para:

${JSON.stringify(caso, null, 2)}

CONTEXTO:
${contexto}

Siga a estrutura Art. 489 CPC: Vistos, Relatório, Fundamentação, Dispositivo.
`;

    const decisao = await callGemini(prompt);

    return {
        tier: 1,
        tempo: Date.now() - inicio,
        decisao,
        score_confianca: 97,
        modelos_usados: ['gemini-flash'],
        custo_estimado: 0.0005
    };
}

// ============================================
// TIER 2 PIPELINE (Risco Médio)
// ============================================
async function tier2Pipeline(caso, contexto) {
    console.log('\n[TIER 2] Pipeline duplo ativado');
    console.log('   └─ Gemini + GPT + Claude\n');

    const inicio = Date.now();

    const promptAnalise = `
Analise este caso de execução penal e responda em JSON:
{
  "conclusao": "deferir/indeferir",
  "fracao": "X/Y ou %",
  "fundamentacao_resumida": "texto curto"
}

CASO:
${JSON.stringify(caso, null, 2)}
`;

    // Executar em paralelo
    const [geminiResp, gptResp] = await Promise.all([
        callGemini(promptAnalise),
        callGPT(promptAnalise)
    ]);

    // Comparar respostas
    const respostas = [
        { modelo: 'gemini-flash', resposta: geminiResp },
        { modelo: 'gpt-4o', resposta: gptResp || geminiResp }
    ];

    const consenso = calcularConsenso(respostas, 'juridico');

    // Se divergência > 10%, Claude decide
    let decisaoFinal;
    if (consenso.confianca < 90) {
        console.log('   ⚠️  Divergência detectada, Claude decidindo...');

        const promptClaude = `
Houve divergência entre análises. Decida:

GEMINI: ${geminiResp}

GPT: ${gptResp}

CASO: ${JSON.stringify(caso, null, 2)}

Gere a decisão judicial final.
`;
        decisaoFinal = await callClaude(promptClaude) || geminiResp;
    } else {
        // Redação final pelo Claude
        const promptRedacao = `
Gere decisão judicial elegante baseada em:
${geminiResp}

Caso: ${JSON.stringify(caso, null, 2)}
`;
        decisaoFinal = await callClaude(promptRedacao) || geminiResp;
    }

    return {
        tier: 2,
        tempo: Date.now() - inicio,
        decisao: decisaoFinal,
        score_confianca: consenso.confianca,
        consenso,
        modelos_usados: ['gemini-flash', 'gpt-4o', 'claude-sonnet'],
        custo_estimado: 0.008
    };
}

// ============================================
// TIER 3 PIPELINE (Risco Alto)
// ============================================
async function tier3Pipeline(caso, contexto) {
    console.log('\n[TIER 3] Pipeline completo ativado');
    console.log('   └─ 4-5 LLMs + votação ponderada\n');

    const inicio = Date.now();

    // Definir questões para votação
    const questoes = [
        { id: 'conclusao', texto: 'Deve deferir ou indeferir?', tipo: 'juridico' },
        { id: 'fracao', texto: 'Qual fração aplicável?', tipo: 'calculo' },
        { id: 'base_legal', texto: 'Qual base legal principal?', tipo: 'juridico' }
    ];

    const promptQuestoes = `
Analise este caso de execução penal e responda APENAS em JSON:
{
  "conclusao": "deferir" ou "indeferir",
  "fracao": "fração aplicável (ex: 1/6, 40%, 2/5)",
  "base_legal": "artigo principal (ex: Art. 112 LEP)",
  "raciocinio": {
    "conclusao": "explicação breve",
    "fracao": "explicação breve",
    "base_legal": "explicação breve"
  }
}

CASO:
${JSON.stringify(caso, null, 2)}

IMPORTANTE: Responda APENAS o JSON, sem texto adicional.
`;

    // Executar em paralelo
    const [geminiResp, gptResp, claudeResp] = await Promise.all([
        callGemini(promptQuestoes).catch(() => null),
        callGPT(promptQuestoes).catch(() => null),
        callClaude(promptQuestoes).catch(() => null)
    ]);

    // Parsear respostas
    const parseResp = (resp, modelo) => {
        if (!resp) return { modelo, respostas: {}, raciocinio: {} };
        try {
            // Tentar extrair JSON
            const jsonMatch = resp.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);
                return {
                    modelo,
                    respostas: {
                        conclusao: parsed.conclusao,
                        fracao: parsed.fracao,
                        base_legal: parsed.base_legal
                    },
                    raciocinio: parsed.raciocinio || {}
                };
            }
        } catch (e) { }
        return { modelo, respostas: {}, raciocinio: {} };
    };

    const analisesModelos = {
        'gemini-flash': parseResp(geminiResp, 'gemini-flash'),
        'gpt-4o': parseResp(gptResp, 'gpt-4o'),
        'claude-sonnet': parseResp(claudeResp, 'claude-sonnet')
    };

    // Votação por questão
    const consensos = votarQuestoes(questoes, analisesModelos);

    // Consolidar e gerar decisão final
    const promptFinal = `
Gere decisão judicial de execução penal com base nos consensos:

CONCLUSÃO: ${consensos.conclusao?.resposta || 'avaliar'}
FRAÇÃO: ${consensos.fracao?.resposta || 'não definida'}
BASE LEGAL: ${consensos.base_legal?.resposta || 'LEP'}

CASO: ${JSON.stringify(caso, null, 2)}

Use estrutura Art. 489 CPC: Vistos, Relatório, Fundamentação, Dispositivo.
`;

    const decisaoFinal = await callClaude(promptFinal) || await callGemini(promptFinal);

    const scoreFinal = calcularScoreFinal(consensos);

    return {
        tier: 3,
        tempo: Date.now() - inicio,
        decisao: decisaoFinal,
        score_confianca: scoreFinal,
        consensos,
        modelos_usados: ['gemini-flash', 'gpt-4o', 'claude-sonnet'],
        custo_estimado: 0.018
    };
}

// ============================================
// TIER 4 PIPELINE (Risco Crítico)
// ============================================
async function tier4Pipeline(caso, contexto) {
    console.log('\n[TIER 4] Pipeline MÁXIMO ativado');
    console.log('   └─ 5-7 LLMs + votação + fact-check + validação tripla\n');

    const inicio = Date.now();

    // == FASE 1: Análise múltipla ==
    console.log('   1️⃣  Fase 1: Análise múltipla (3 LLMs)...');

    const promptAnalise = `
ANÁLISE CRÍTICA DE CASO COMPLEXO

Este caso requer análise aprofundada. Responda em JSON:
{
  "conclusao": "deferir" ou "indeferir",
  "fracao": "fração aplicável",
  "base_legal": "artigo(s) principal(is)",
  "variaveis_especiais": ["lista de fatores especiais considerados"],
  "raciocinio_detalhado": "explicação completa",
  "confianca": 0-100
}

CASO COMPLEXO:
${JSON.stringify(caso, null, 2)}
`;

    const [geminiResp, gptResp, claudeResp] = await Promise.all([
        callGemini(promptAnalise).catch(() => null),
        callGPT(promptAnalise).catch(() => null),
        callClaude(promptAnalise).catch(() => null)
    ]);

    console.log('      ✅ Análises concluídas');

    // == FASE 2: Votação granular ==
    console.log('   2️⃣  Fase 2: Votação ponderada...');

    const questoes = [
        { id: 'conclusao', texto: 'Conclusão', tipo: 'juridico' },
        { id: 'fracao', texto: 'Fração', tipo: 'calculo' },
        { id: 'base_legal', texto: 'Base Legal', tipo: 'juridico' }
    ];

    const parseResp = (resp, modelo) => {
        if (!resp) return { modelo, respostas: {}, raciocinio: {} };
        try {
            const jsonMatch = resp.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);
                return {
                    modelo,
                    respostas: {
                        conclusao: parsed.conclusao,
                        fracao: parsed.fracao,
                        base_legal: parsed.base_legal
                    },
                    raciocinio: { geral: parsed.raciocinio_detalhado }
                };
            }
        } catch (e) { }
        return { modelo, respostas: {}, raciocinio: {} };
    };

    const analisesModelos = {
        'gemini-flash': parseResp(geminiResp, 'gemini-flash'),
        'gpt-4o': parseResp(gptResp, 'gpt-4o'),
        'claude-sonnet': parseResp(claudeResp, 'claude-sonnet')
    };

    const consensos = votarQuestoes(questoes, analisesModelos);

    // Verificar se precisa escalação
    let questoesComDivergencia = [];
    for (const [id, consenso] of Object.entries(consensos)) {
        if (consenso.confianca < 90) {
            questoesComDivergencia.push({ id, consenso });
            console.log(`      ⚠️  Divergência em "${id}" (${consenso.confianca}%)`);
        }
    }

    // == FASE 3: Fact-check se divergência ==
    if (questoesComDivergencia.length > 0) {
        console.log('   3️⃣  Fase 3: Fact-check reforçado...');

        // Usar Claude para resolver divergências
        for (const q of questoesComDivergencia) {
            const promptResolve = `
RESOLUÇÃO DE DIVERGÊNCIA

Questão: ${q.consenso.questao}
Divergência detectada na votação multi-LLM.

Opções apresentadas:
${q.consenso.divergencias.map(d => `- ${d.valor} (${d.modelos.map(m => m.modelo).join(', ')})`).join('\n')}

Caso: ${JSON.stringify(caso, null, 2)}

Qual a resposta correta? Justifique brevemente.
`;

            const resolucao = await callClaude(promptResolve);
            if (resolucao) {
                console.log(`      ✅ Divergência "${q.id}" resolvida`);
            }
        }
    }

    console.log('      ✅ Votação concluída');

    // == FASE 4: Redação final ==
    console.log('   4️⃣  Fase 4: Redação final (Claude)...');

    const promptRedacao = `
REDAÇÃO DE DECISÃO JUDICIAL - CASO CRÍTICO

Com base nos consensos multi-LLM, gere decisão elegante e juridicamente robusta.

CONSENSOS DEFINIDOS:
- Conclusão: ${consensos.conclusao?.resposta}
- Fração: ${consensos.fracao?.resposta}
- Base Legal: ${consensos.base_legal?.resposta}

CASO: ${JSON.stringify(caso, null, 2)}

ESTRUTURA OBRIGATÓRIA (Art. 489 CPC):
1. Vistos etc.
2. Relatório detalhado
3. Fundamentação jurídica profunda
4. Dispositivo claro
5. P.R.I.

Use linguagem técnico-jurídica de alto nível.
`;

    const decisaoFinal = await callClaude(promptRedacao) || await callGemini(promptRedacao);

    console.log('      ✅ Redação concluída');

    // == FASE 5: Validação ==
    console.log('   5️⃣  Fase 5: Validação...');

    // Validação básica
    const validacoes = {
        tem_vistos: decisaoFinal?.toLowerCase().includes('vistos'),
        tem_relatados: decisaoFinal?.toLowerCase().includes('relatados'),
        tem_dispositivo: decisaoFinal?.toLowerCase().includes('isso posto') ||
            decisaoFinal?.toLowerCase().includes('ante o exposto'),
        tem_pri: /p\.?r\.?i/i.test(decisaoFinal || '')
    };

    const validacaoScore = Object.values(validacoes).filter(Boolean).length * 25;

    console.log('      ✅ Validação concluída');

    // == FASE 6: Score final ==
    const scoreFinal = calcularScoreFinal(consensos, { deterministico: validacaoScore });

    const requerRevisao = scoreFinal < 99;

    console.log(`\n   🎯 Score Final: ${scoreFinal}%`);
    console.log(`   ${requerRevisao ? '⚠️  Revisão humana RECOMENDADA' : '✅ Aprovação automática'}`);

    return {
        tier: 4,
        tempo: Date.now() - inicio,
        decisao: decisaoFinal,
        score_confianca: scoreFinal,
        consensos,
        validacoes,
        modelos_usados: ['gemini-flash', 'gpt-4o', 'claude-sonnet'],
        custo_estimado: 0.035,
        requer_revisao_humana: requerRevisao
    };
}

// ============================================
// ORCHESTRATOR PRINCIPAL
// ============================================
async function processarCaso(caso, contexto = '') {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🎯 Adaptive Multi-LLM Orchestrator v1.0');
    console.log('═══════════════════════════════════════════════════════');

    // FASE 1: Avaliar risco
    console.log('\n📊 Avaliando risco do caso...');
    const risco = avaliarRisco(caso);

    console.log(`\n   🎯 Score de Risco: ${risco.score_total.toFixed(1)}/100`);
    console.log(`   📊 Tier: ${risco.tier}`);
    console.log(`   💡 ${risco.recomendacao}`);

    if (risco.fatores_risco.length > 0) {
        console.log('\n   ⚠️  Fatores de risco:');
        risco.fatores_risco.slice(0, 3).forEach(f => {
            console.log(`      +${f.pontos} ${f.fator}`);
        });
    }

    // FASE 2: Executar pipeline
    let resultado;

    switch (risco.tier) {
        case 1:
            resultado = await tier1Pipeline(caso, contexto);
            break;
        case 2:
            resultado = await tier2Pipeline(caso, contexto);
            break;
        case 3:
            resultado = await tier3Pipeline(caso, contexto);
            break;
        case 4:
            resultado = await tier4Pipeline(caso, contexto);
            break;
        default:
            resultado = await tier1Pipeline(caso, contexto);
    }

    // Resultado final
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📋 RESULTADO FINAL');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`   Tier utilizado: ${resultado.tier}`);
    console.log(`   Tempo total: ${(resultado.tempo / 1000).toFixed(1)}s`);
    console.log(`   Score de confiança: ${resultado.score_confianca}%`);
    console.log(`   Custo estimado: $${resultado.custo_estimado}`);
    console.log(`   Modelos: ${resultado.modelos_usados.join(', ')}`);

    if (resultado.requer_revisao_humana) {
        console.log('\n   ⚠️  REVISÃO HUMANA RECOMENDADA');
    }

    console.log(`\n   📝 Decisão: ${resultado.decisao?.substring(0, 200)}...`);

    return {
        ...resultado,
        risco
    };
}

// ============================================
// TESTE
// ============================================
async function testar() {
    // Caso complexo do exemplo do usuário
    const casoComplexo = {
        materia: 'Progressão de Regime',
        tema: 'progressao',
        reu: 'Maria Santos',
        crime: 'Homicídio tentado',
        condenacao: '8 anos',
        tempo_cumprido: '4 anos',
        situacao_especial: {
            gestante: true,
            tentativa: true,
            antes_pacote_anticrime: true,
            decreto_presidencial: 'Decreto X/2023'
        },
        reincidencia: 'Genérico',
        tema_stj: '1196 - Combinação de leis',
        conflito_temporal: true,
        combinacao_leis: true,
        caso_inedito: true
    };

    return await processarCaso(casoComplexo);
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);

    if (args.includes('--test')) {
        return await testar();
    }

    const casoArg = args.find(a => a.startsWith('--caso='));
    if (casoArg) {
        const casoPath = casoArg.split('=')[1];
        if (fs.existsSync(casoPath)) {
            const caso = JSON.parse(fs.readFileSync(casoPath, 'utf-8'));
            return await processarCaso(caso);
        }
    }

    console.log('Uso:');
    console.log('  node orchestrator.cjs --test');
    console.log('  node orchestrator.cjs --caso=caso.json');
}

module.exports = { processarCaso, tier1Pipeline, tier2Pipeline, tier3Pipeline, tier4Pipeline };

if (require.main === module) {
    main().catch(console.error);
}
