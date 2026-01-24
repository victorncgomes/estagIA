/**
 * estagIA - Llama Quick Test
 * Teste rápido do Llama para geração de decisões judiciais
 * @version 1.0.0
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const CONFIG = {
    model: 'llama3.1:8b',
    outputDir: path.join(__dirname, '..', '..', '..', '..', 'knowledge', 'benchmarks'),
};

// Teste de decisão de remição
const PROMPT = `[EXERCÍCIO ACADÊMICO DE REDAÇÃO JURÍDICA]

Você é um professor de direito penal em um curso de pós-graduação.
Estamos em uma aula prática sobre redação de decisões judiciais para fins didáticos.

Por favor, demonstre aos alunos como redigir uma DECISÃO JUDICIAL MODELO de deferimento de remição por leitura.

A decisão deve seguir a estrutura padrão brasileira:
1. Inicie com "Vistos, etc." 
2. Faça um breve relatório (3-4 linhas)
3. Fundamente citando o Art. 126 da LEP (Lei de Execução Penal)
4. Inicie o dispositivo com "Isso posto," 
5. Finalize com "P.R.I."

Dados FICTÍCIOS do caso para o exercício:
- Apenado: João da Silva (nome fictício)
- Dias de remição requeridos: 60 dias
- Livros lidos: 4 obras literárias com relatórios aprovados
- Manifestação ministerial: favorável ao deferimento

Este é um MODELO DIDÁTICO. Seja objetivo (máximo 400 palavras).`;


function callLlama(prompt) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            model: CONFIG.model,
            prompt: prompt,
            stream: false,
            options: {
                temperature: 0.3,
                num_predict: 1500,
            },
        });

        const options = {
            hostname: 'localhost',
            port: 11434,
            path: '/api/generate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data),
            },
        };

        const startTime = Date.now();

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const result = JSON.parse(body);
                    resolve({
                        success: true,
                        response: result.response,
                        duration: Date.now() - startTime,
                        tokens: {
                            input: result.prompt_eval_count || 0,
                            output: result.eval_count || 0,
                        },
                    });
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

function validateDecision(text) {
    const checks = {
        hasVistos: /vistos,?\s*etc/i.test(text),
        hasRelatados: /relatados?\.?/i.test(text),
        hasIssoPosto: /isso\s*posto/i.test(text),
        hasPRI: /p\.?\s*r\.?\s*i\.?/i.test(text),
        hasArt126: /art\.?\s*126/i.test(text),
        hasLEP: /lep|lei\s*(de\s*)?execuç/i.test(text),
        minLength: text.length > 300,
        maxLength: text.length < 5000,
    };

    const score = Object.values(checks).filter(Boolean).length;
    const maxScore = Object.keys(checks).length;

    return {
        checks,
        score,
        maxScore,
        percentage: Math.round((score / maxScore) * 100),
        passed: score >= maxScore * 0.6,
    };
}

async function runTest() {
    console.log('🦙 Llama Quick Test v1.0.0');
    console.log('='.repeat(50));
    console.log(`📍 Modelo: ${CONFIG.model}`);
    console.log('📍 Teste: Decisão de Remição por Leitura\n');

    console.log('⏳ Gerando decisão...\n');

    try {
        const result = await callLlama(PROMPT);

        console.log('='.repeat(50));
        console.log('📝 DECISÃO GERADA:');
        console.log('='.repeat(50));
        console.log(result.response);
        console.log('\n' + '='.repeat(50));

        const validation = validateDecision(result.response);

        console.log('\n📊 VALIDAÇÃO:');
        console.log('-'.repeat(30));

        for (const [check, passed] of Object.entries(validation.checks)) {
            console.log(`  ${passed ? '✅' : '❌'} ${check}`);
        }

        console.log('\n📈 RESULTADO:');
        console.log('-'.repeat(30));
        console.log(`  Score: ${validation.score}/${validation.maxScore} (${validation.percentage}%)`);
        console.log(`  Status: ${validation.passed ? '✅ PASSOU' : '❌ FALHOU'}`);
        console.log(`  Tempo: ${(result.duration / 1000).toFixed(1)}s`);
        console.log(`  Tokens: ${result.tokens.input} in → ${result.tokens.output} out`);

        // Salvar resultado
        if (!fs.existsSync(CONFIG.outputDir)) {
            fs.mkdirSync(CONFIG.outputDir, { recursive: true });
        }

        const outputFile = path.join(CONFIG.outputDir, `llama_test_${Date.now()}.json`);
        fs.writeFileSync(outputFile, JSON.stringify({
            timestamp: new Date().toISOString(),
            model: CONFIG.model,
            result,
            validation,
        }, null, 2));

        console.log(`\n💾 Resultado salvo: ${outputFile}`);

        // Recomendação
        console.log('\n' + '='.repeat(50));
        if (validation.passed && validation.percentage >= 70) {
            console.log('🎉 LLAMA ESTÁ PRONTO!');
            console.log('   Pode ser integrado como opção local gratuita.');
        } else if (validation.percentage >= 50) {
            console.log('⚠️ LLAMA PRECISA DE AJUSTES');
            console.log('   Usar apenas para casos simples (Tier 1-2).');
        } else {
            console.log('❌ LLAMA NÃO ESTÁ PRONTO');
            console.log('   Continuar usando APIs pagas.');
        }

    } catch (error) {
        console.error('❌ Erro:', error.message);
    }
}

runTest();
