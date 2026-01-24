/**
 * estagIA - Llama Benchmark Runner
 * Testa o desempenho do Llama local para geração de decisões judiciais
 * Se performance for satisfatória, pode substituir APIs pagas
 * 
 * @version 1.0.0
 * @author estagIA Team
 */

const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURAÇÃO
// ============================================

const CONFIG = {
    ollamaUrl: 'http://localhost:11434',
    model: 'llama3.1:8b',
    testCases: 10,
    outputDir: path.join(__dirname, '..', '..', '..', 'knowledge', 'benchmarks'),
};

// Casos de teste por tema
const TEST_THEMES = {
    remicao: [
        { tipo: 'leitura', dias: 120, livros: 4, resultado: 'defere' },
        { tipo: 'trabalho', dias: 90, horas: 720, resultado: 'defere' },
        { tipo: 'duplicidade', dias: 60, resultado: 'indefere' },
    ],
    progressao: [
        { regime: 'fechado', fracao: '1/6', tempo_cumprido: '2 anos', resultado: 'defere' },
        { regime: 'semiaberto', falta_grave: true, resultado: 'indefere' },
    ],
    livramento: [
        { crimes: ['furto'], reincidencia: 'primario', fracao: '1/3', resultado: 'defere' },
        { crimes: ['trafico'], reincidencia: 'especifico', resultado: 'indefere' },
    ],
};

// ============================================
// FUNÇÕES DE GERAÇÃO
// ============================================

async function callLlama(prompt, systemPrompt = '') {
    const startTime = Date.now();

    try {
        const response = await fetch(`${CONFIG.ollamaUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: CONFIG.model,
                prompt: prompt,
                system: systemPrompt,
                stream: false,
                options: {
                    temperature: 0.3,
                    top_p: 0.9,
                    num_predict: 2000,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Ollama error: ${response.status}`);
        }

        const data = await response.json();
        const endTime = Date.now();

        return {
            success: true,
            response: data.response,
            duration: endTime - startTime,
            tokens: {
                input: data.prompt_eval_count || 0,
                output: data.eval_count || 0,
            },
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            duration: Date.now() - startTime,
        };
    }
}

function buildPrompt(tema, caso) {
    const systemPrompt = `Você é um assistente jurídico especializado em execução penal brasileira.
Gere uma DECISÃO JUDICIAL seguindo estritamente esta estrutura:

1. RELATÓRIO: Inicie com "Vistos, etc." e descreva os fatos. Termine com "Relatados."
2. FUNDAMENTAÇÃO: Inicie com o ponto fulcral, cite legislação (LEP, CP) e doutrina.
3. DISPOSITIVO: Inicie com "Isso posto," seguido do comando judicial. Termine com "P.R.I."

REGRAS ABSOLUTAS:
- NUNCA cite nomes de promotores ou advogados
- NUNCA invente jurisprudência ou súmulas
- Use referências reais: LEP Art. 126-130, Súmula 341 STJ
- Seja objetivo e direto`;

    const prompts = {
        remicao: `Gere uma decisão de ${caso.resultado === 'defere' ? 'DEFERIMENTO' : 'INDEFERIMENTO'} de remição por ${caso.tipo}.
Dados: ${caso.dias} dias requeridos${caso.livros ? `, ${caso.livros} livros lidos` : ''}${caso.horas ? `, ${caso.horas} horas trabalhadas` : ''}.
${caso.resultado === 'indefere' ? 'Motivo: ' + (caso.tipo === 'duplicidade' ? 'Duplicidade de contagem (bis in idem)' : 'Documentação insuficiente') : ''}`,

        progressao: `Gere uma decisão de ${caso.resultado === 'defere' ? 'DEFERIMENTO' : 'INDEFERIMENTO'} de progressão de regime.
Dados: Regime atual ${caso.regime}, fração ${caso.fracao || 'N/A'}, tempo cumprido ${caso.tempo_cumprido || 'N/A'}.
${caso.falta_grave ? 'Havia falta grave registrada no período.' : ''}`,

        livramento: `Gere uma decisão de ${caso.resultado === 'defere' ? 'DEFERIMENTO' : 'INDEFERIMENTO'} de livramento condicional.
Dados: Crimes ${caso.crimes.join(', ')}, ${caso.reincidencia}, fração aplicável ${caso.fracao || 'N/A'}.`,
    };

    return {
        system: systemPrompt,
        user: prompts[tema] || prompts.remicao,
    };
}

// ============================================
// VALIDAÇÃO DE QUALIDADE
// ============================================

function validateDecision(text) {
    const checks = {
        hasVistos: /vistos,?\s*etc/i.test(text),
        hasRelatados: /relatados?\./i.test(text),
        hasIssoPosto: /isso\s*posto/i.test(text),
        hasPRI: /p\.?\s*r\.?\s*i\.?/i.test(text),
        hasLegislation: /art\.?\s*\d+|lei\s*\d+|lep|código\s*penal/i.test(text),
        noNamesLeaked: !/promotor[a]?\s+[A-Z][a-z]+|dr[a]?\.\s*[A-Z][a-z]+/i.test(text),
        minLength: text.length > 500,
        maxLength: text.length < 10000,
    };

    const score = Object.values(checks).filter(Boolean).length;
    const maxScore = Object.keys(checks).length;


    return {
        checks,
        score,
        maxScore,
        percentage: Math.round((score / maxScore) * 100),
        passed: score >= maxScore * 0.7,
    };
}

// ============================================
// BENCHMARK RUNNER
// ============================================

async function runBenchmark() {
    console.log('🦙 Llama Benchmark Runner v1.0.0');
    console.log('================================\n');
    console.log(`📍 Modelo: ${CONFIG.model}`);
    console.log(`📍 Testes por tema: ${CONFIG.testCases}\n`);

    // Verificar se Ollama está rodando
    try {
        const healthCheck = await fetch(`${CONFIG.ollamaUrl}/api/tags`);
        if (!healthCheck.ok) throw new Error('Ollama não respondeu');
        console.log('✅ Ollama está online\n');
    } catch (error) {
        console.error('❌ Erro: Ollama não está rodando');
        console.log('Execute: ollama serve');
        process.exit(1);
    }

    const results = {
        timestamp: new Date().toISOString(),
        model: CONFIG.model,
        testsByTheme: {},
        totals: {
            tests: 0,
            passed: 0,
            failed: 0,
            avgScore: 0,
            avgDuration: 0,
            totalTokens: { input: 0, output: 0 },
        },
    };

    // Executar testes por tema
    for (const [tema, casos] of Object.entries(TEST_THEMES)) {
        console.log(`\n📂 Tema: ${tema.toUpperCase()}`);
        console.log('-'.repeat(40));

        results.testsByTheme[tema] = {
            tests: [],
            summary: { passed: 0, failed: 0, avgScore: 0 },
        };

        for (let i = 0; i < Math.min(casos.length, CONFIG.testCases); i++) {
            const caso = casos[i];
            const { system, user } = buildPrompt(tema, caso);

            const casoLabel = caso.tipo || caso.regime || (caso.crimes && caso.crimes[0]) || 'teste';
            console.log(`\n  🔄 Teste ${i + 1}/${casos.length}: ${casoLabel}...`);

            const response = await callLlama(user, system);

            if (!response.success) {
                console.log(`  ❌ Erro: ${response.error}`);
                results.testsByTheme[tema].tests.push({
                    caso,
                    error: response.error,
                    passed: false,
                });
                results.testsByTheme[tema].summary.failed++;
                results.totals.failed++;
                continue;
            }

            const validation = validateDecision(response.response);

            console.log(`  ⏱️ Tempo: ${(response.duration / 1000).toFixed(1)}s`);
            console.log(`  📊 Score: ${validation.score}/${validation.maxScore} (${validation.percentage}%)`);
            console.log(`  ${validation.passed ? '✅ PASSOU' : '❌ FALHOU'}`);

            results.testsByTheme[tema].tests.push({
                caso,
                duration: response.duration,
                tokens: response.tokens,
                validation,
                passed: validation.passed,
                responsePreview: response.response.substring(0, 200) + '...',
            });

            if (validation.passed) {
                results.testsByTheme[tema].summary.passed++;
                results.totals.passed++;
            } else {
                results.testsByTheme[tema].summary.failed++;
                results.totals.failed++;
            }

            results.totals.tests++;
            results.totals.avgScore += validation.percentage;
            results.totals.avgDuration += response.duration;
            results.totals.totalTokens.input += response.tokens.input;
            results.totals.totalTokens.output += response.tokens.output;
        }

        // Calcular média do tema
        const themeTests = results.testsByTheme[tema].tests.filter(t => !t.error);
        if (themeTests.length > 0) {
            results.testsByTheme[tema].summary.avgScore =
                themeTests.reduce((sum, t) => sum + t.validation.percentage, 0) / themeTests.length;
        }
    }

    // Calcular totais
    if (results.totals.tests > 0) {
        results.totals.avgScore = Math.round(results.totals.avgScore / results.totals.tests);
        results.totals.avgDuration = Math.round(results.totals.avgDuration / results.totals.tests);
    }

    // Salvar resultados
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    const outputFile = path.join(CONFIG.outputDir, `llama_benchmark_${Date.now()}.json`);
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

    // Resumo final
    console.log('\n' + '='.repeat(50));
    console.log('📊 RESUMO DO BENCHMARK');
    console.log('='.repeat(50));
    console.log(`\n✅ Passou: ${results.totals.passed}/${results.totals.tests} (${Math.round(results.totals.passed / results.totals.tests * 100)}%)`);
    console.log(`❌ Falhou: ${results.totals.failed}/${results.totals.tests}`);
    console.log(`📊 Score médio: ${results.totals.avgScore}%`);
    console.log(`⏱️ Tempo médio: ${(results.totals.avgDuration / 1000).toFixed(1)}s`);
    console.log(`🔢 Tokens: ${results.totals.totalTokens.input} in + ${results.totals.totalTokens.output} out`);
    console.log(`\n💾 Resultados salvos: ${outputFile}`);

    // Recomendação
    const passRate = results.totals.passed / results.totals.tests;
    console.log('\n' + '-'.repeat(50));
    if (passRate >= 0.8 && results.totals.avgScore >= 70) {
        console.log('🎉 RECOMENDAÇÃO: Llama está PRONTO para produção!');
        console.log('   O modelo pode substituir APIs pagas para decisões simples.');
    } else if (passRate >= 0.5) {
        console.log('⚠️ RECOMENDAÇÃO: Llama precisa de ajustes');
        console.log('   Use apenas para Tier 1-2 (casos simples).');
    } else {
        console.log('❌ RECOMENDAÇÃO: Llama NÃO está pronto');
        console.log('   Continue usando APIs pagas para produção.');
    }

    return results;
}

// Executar se chamado diretamente
if (require.main === module) {
    runBenchmark().catch(console.error);
}

module.exports = { runBenchmark, callLlama, validateDecision };
