/**
 * Adaptive Multi-LLM Orchestrator - Risk Pattern Trainer
 * 
 * Usa Qwen 7B local para treinar padrões de risco:
 * 1. Gera milhares de casos sintéticos
 * 2. Testa cada caso em diferentes tiers
 * 3. Marca onde alucinação ocorre
 * 4. Identifica padrões de erro
 * 5. Cria mapa de risco otimizado
 * 
 * Uso:
 *   node .agent/skills/adaptive-orchestrator/scripts/riskPatternTrainer.cjs --casos=1000
 *   node .agent/skills/adaptive-orchestrator/scripts/riskPatternTrainer.cjs --continue
 */

const fs = require('fs');
const path = require('path');
const { avaliarRisco } = require('./riskDetector.cjs');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const OUTPUT_DIR = path.join(ROOT, 'knowledge', 'adaptive');
const PATTERNS_FILE = path.join(OUTPUT_DIR, 'risk_patterns_learned.json');
const CHECKPOINT_FILE = path.join(OUTPUT_DIR, 'training_checkpoint.json');
const LOG_FILE = path.join(OUTPUT_DIR, 'training_log.jsonl');

// ============================================
// CONFIGURAÇÃO QWEN
// ============================================
const OLLAMA_URL = 'http://localhost:11434/api/generate';
const MODEL = 'qwen2.5:7b-instruct-q4_K_M';

// ============================================
// CALL QWEN LOCAL (usando http nativo)
// ============================================
const http = require('http');

async function callQwen(prompt, options = {}) {
    return new Promise((resolve) => {
        const requestData = JSON.stringify({
            model: MODEL,
            prompt,
            stream: false,
            options: {
                temperature: options.temperature || 0.2,
                num_predict: options.maxTokens || 2000
            }
        });

        const reqOptions = {
            hostname: 'localhost',
            port: 11434,
            path: '/api/generate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestData),
            },
        };

        const req = http.request(reqOptions, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    resolve(data.response);
                } catch (e) {
                    resolve(null);
                }
            });
        });

        req.on('error', (error) => {
            console.log(`   ❌ Qwen Error: ${error.message}`);
            resolve(null);
        });

        req.setTimeout(60000, () => {
            req.destroy();
            resolve(null);
        });

        req.write(requestData);
        req.end();
    });
}

// ============================================
// GERADOR DE CASOS SINTÉTICOS
// ============================================
const VARIAVEIS = {
    crimes: ['furto', 'roubo', 'tráfico', 'homicídio', 'estelionato', 'receptação', 'porte ilegal'],
    temas: ['remicao', 'progressao', 'livramento', 'indulto', 'unificacao', 'falta_grave'],
    regimes: ['fechado', 'semiaberto', 'aberto'],
    reincidencia: ['primario', 'reincidente_generico', 'reincidente_especifico'],
    situacoes_especiais: [
        { gestante: true },
        { tentativa: true },
        { antes_pacote_anticrime: true },
        { decreto_presidencial: 'Decreto X/2025' },
        { idoso: true },
        { doenca_grave: true },
        { estrangeiro: true }
    ],
    complexidades: [
        { multiplas_leis: true },
        { conflito_temporal: true },
        { caso_inedito: true },
        { combinacao_leis: true, tema_stj: '1196' },
        { unificacao_penas: true },
        { limite_trintenario: true }
    ]
};

function gerarCasoAleatorio() {
    const caso = {
        id: `train_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        tema: VARIAVEIS.temas[Math.floor(Math.random() * VARIAVEIS.temas.length)],
        crime: VARIAVEIS.crimes[Math.floor(Math.random() * VARIAVEIS.crimes.length)],
        regime: VARIAVEIS.regimes[Math.floor(Math.random() * VARIAVEIS.regimes.length)],
        reincidencia: VARIAVEIS.reincidencia[Math.floor(Math.random() * VARIAVEIS.reincidencia.length)],
        pena_anos: Math.floor(Math.random() * 20) + 1,
        situacao_especial: {},
        complexidade: {}
    };

    // Adicionar situações especiais aleatórias (0-3)
    const numSituacoes = Math.floor(Math.random() * 4);
    const situacoesSelecionadas = [...VARIAVEIS.situacoes_especiais]
        .sort(() => Math.random() - 0.5)
        .slice(0, numSituacoes);

    situacoesSelecionadas.forEach(s => {
        caso.situacao_especial = { ...caso.situacao_especial, ...s };
    });

    // Adicionar complexidades aleatórias (0-2)
    const numComplexidades = Math.floor(Math.random() * 3);
    const complexidadesSelecionadas = [...VARIAVEIS.complexidades]
        .sort(() => Math.random() - 0.5)
        .slice(0, numComplexidades);

    complexidadesSelecionadas.forEach(c => {
        caso.complexidade = { ...caso.complexidade, ...c };
    });

    // Merge complexidade no caso principal (para Risk Detector)
    Object.assign(caso, caso.complexidade);

    return caso;
}

// ============================================
// TESTAR CASO COM QWEN
// ============================================
async function testarCasoComQwen(caso) {
    const prompt = `
Você é um juiz de execução penal. Analise este caso e gere uma decisão breve.

CASO:
- Tema: ${caso.tema}
- Crime: ${caso.crime}
- Regime: ${caso.regime}
- Reincidência: ${caso.reincidencia}
- Pena: ${caso.pena_anos} anos
${Object.keys(caso.situacao_especial).length > 0 ?
            '- Situação especial: ' + Object.keys(caso.situacao_especial).join(', ') : ''}
${Object.keys(caso.complexidade).length > 0 ?
            '- Complexidade: ' + Object.keys(caso.complexidade).join(', ') : ''}

Responda em formato JSON:
{
  "conclusao": "deferir" ou "indeferir",
  "fracao": "fração aplicável",
  "base_legal": "artigo principal",
  "citacao_doutrinaria": "autor e obra (se aplicável)",
  "confianca": 0-100
}
`;

    const inicio = Date.now();
    const resposta = await callQwen(prompt);
    const tempo = Date.now() - inicio;

    // Validar resposta
    const validacao = validarResposta(resposta, caso);

    return {
        caso_id: caso.id,
        tempo,
        resposta,
        validacao,
        tem_alucinacao: validacao.alucinacoes.length > 0
    };
}

// ============================================
// VALIDAR RESPOSTA
// ============================================
function validarResposta(resposta, caso) {
    const validacao = {
        alucinacoes: [],
        score: 100
    };

    if (!resposta) {
        validacao.alucinacoes.push({ tipo: 'resposta_vazia', gravidade: 'alta' });
        validacao.score = 0;
        return validacao;
    }

    const lower = resposta.toLowerCase();

    // Verificar citação inventada
    const citacaoFalsa = [
        'ficticio', 'inventado', 'manual de', 'tratado de',
        'curso de direito penal', 'compêndio'
    ];

    for (const termo of citacaoFalsa) {
        if (lower.includes(termo)) {
            validacao.alucinacoes.push({
                tipo: 'citacao_suspeita',
                termo,
                gravidade: 'media'
            });
            validacao.score -= 20;
        }
    }

    // Verificar frações inválidas
    const fracaoMatch = resposta.match(/(\d+)\/(\d+)/);
    if (fracaoMatch) {
        const [_, num, den] = fracaoMatch;
        if (parseInt(den) > 10 || parseInt(num) > parseInt(den)) {
            validacao.alucinacoes.push({
                tipo: 'fracao_invalida',
                valor: `${num}/${den}`,
                gravidade: 'alta'
            });
            validacao.score -= 30;
        }
    }

    // Verificar artigo inexistente da LEP
    const artigoMatch = resposta.match(/art\.?\s*(\d+)/gi);
    if (artigoMatch) {
        for (const match of artigoMatch) {
            const num = parseInt(match.replace(/\D/g, ''));
            if (lower.includes('lep') && num > 199) {
                validacao.alucinacoes.push({
                    tipo: 'artigo_inexistente',
                    artigo: num,
                    gravidade: 'alta'
                });
                validacao.score -= 30;
            }
        }
    }

    validacao.score = Math.max(0, validacao.score);
    return validacao;
}

// ============================================
// AGREGAR PADRÕES
// ============================================
function agregarPadroes(resultados) {
    const padroes = {};

    for (const resultado of resultados) {
        const caso = resultado.caso;

        // Criar chave de combinação
        const fatores = [];

        if (caso.situacao_especial.gestante) fatores.push('gestante');
        if (caso.situacao_especial.tentativa) fatores.push('tentativa');
        if (caso.situacao_especial.antes_pacote_anticrime) fatores.push('pacote_anticrime');
        if (caso.situacao_especial.decreto_presidencial) fatores.push('decreto');
        if (caso.complexidade.conflito_temporal) fatores.push('conflito_temporal');
        if (caso.complexidade.combinacao_leis) fatores.push('combinacao_leis');
        if (caso.complexidade.caso_inedito) fatores.push('inedito');

        const chave = fatores.sort().join('+') || 'baseline';

        if (!padroes[chave]) {
            padroes[chave] = {
                fatores,
                total: 0,
                alucinacoes: 0,
                taxa_alucinacao: 0,
                tier_recomendado: 1,
                exemplos: []
            };
        }

        padroes[chave].total++;
        if (resultado.resultado.tem_alucinacao) {
            padroes[chave].alucinacoes++;
        }

        // Guardar até 3 exemplos
        if (padroes[chave].exemplos.length < 3) {
            padroes[chave].exemplos.push(caso);
        }
    }

    // Calcular taxa e tier recomendado
    for (const [chave, padrao] of Object.entries(padroes)) {
        padrao.taxa_alucinacao = (padrao.alucinacoes / padrao.total) * 100;

        // Determinar tier baseado na taxa
        if (padrao.taxa_alucinacao > 50) {
            padrao.tier_recomendado = 4;
        } else if (padrao.taxa_alucinacao > 20) {
            padrao.tier_recomendado = 3;
        } else if (padrao.taxa_alucinacao > 5) {
            padrao.tier_recomendado = 2;
        } else {
            padrao.tier_recomendado = 1;
        }
    }

    return padroes;
}

// ============================================
// SALVAR CHECKPOINT
// ============================================
function salvarCheckpoint(resultados, iteracao) {
    const checkpoint = {
        iteracao,
        timestamp: new Date().toISOString(),
        total_casos: resultados.length,
        resultados: resultados.slice(-100) // Últimos 100
    };

    fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(checkpoint, null, 2));
}

// ============================================
// SALVAR PADRÕES
// ============================================
function salvarPadroes(padroes) {
    const data = {
        version: '1.0.0',
        generatedAt: new Date().toISOString(),
        padroes
    };

    fs.writeFileSync(PATTERNS_FILE, JSON.stringify(data, null, 2));
    console.log(`\n💾 Padrões salvos em: ${PATTERNS_FILE}`);
}

// ============================================
// TREINAMENTO PRINCIPAL
// ============================================
async function treinar(numCasos = 100) {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🧠 Risk Pattern Trainer - Qwen 7B Local');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`\n📊 Configuração:`);
    console.log(`   Casos a testar: ${numCasos}`);
    console.log(`   Modelo: ${MODEL}`);
    console.log(`   Output: ${PATTERNS_FILE}`);

    // Verificar Ollama
    console.log('\n🔍 Verificando Ollama...');
    try {
        const test = await callQwen('Responda apenas: OK', { maxTokens: 10 });
        if (!test) {
            console.log('❌ Ollama não está respondendo');
            console.log('   Execute: ollama serve');
            process.exit(1);
        }
        console.log('   ✅ Qwen respondendo');
    } catch (e) {
        console.log(`❌ Erro de conexão: ${e.message}`);
        console.log('   Execute: ollama serve');
        process.exit(1);
    }

    // Garantir diretório
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const resultados = [];
    let alucinacoes = 0;

    console.log('\n🔄 Iniciando treinamento...\n');

    for (let i = 0; i < numCasos; i++) {
        // Gerar caso
        const caso = gerarCasoAleatorio();

        // Avaliar risco
        const risco = avaliarRisco(caso);

        // Testar com Qwen
        const resultado = await testarCasoComQwen(caso);

        resultados.push({
            caso,
            risco,
            resultado
        });

        if (resultado.tem_alucinacao) alucinacoes++;

        // Log
        const taxa = ((alucinacoes / (i + 1)) * 100).toFixed(1);
        process.stdout.write(`\r   [${i + 1}/${numCasos}] Alucinações: ${alucinacoes} (${taxa}%) | Último: ${resultado.tempo}ms`);

        // Checkpoint a cada 50
        if ((i + 1) % 50 === 0) {
            salvarCheckpoint(resultados, i + 1);
        }

        // Log detalhado se alucinação
        if (resultado.tem_alucinacao) {
            const logEntry = {
                timestamp: new Date().toISOString(),
                caso: caso.id,
                risco: risco.score_total,
                alucinacoes: resultado.validacao.alucinacoes
            };
            fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + '\n');
        }
    }

    console.log('\n\n═══════════════════════════════════════════════════════');
    console.log('📊 RESULTADO DO TREINAMENTO');
    console.log('═══════════════════════════════════════════════════════');

    const taxaFinal = ((alucinacoes / numCasos) * 100).toFixed(1);
    console.log(`\n   Casos testados: ${numCasos}`);
    console.log(`   Alucinações: ${alucinacoes} (${taxaFinal}%)`);

    // Agregar padrões
    console.log('\n🔬 Agregando padrões...');
    const padroes = agregarPadroes(resultados);

    // Exibir padrões de risco
    console.log('\n📈 PADRÕES DE RISCO IDENTIFICADOS:');
    console.log('─────────────────────────────────────────────────────');

    const padroesOrdenados = Object.entries(padroes)
        .sort((a, b) => b[1].taxa_alucinacao - a[1].taxa_alucinacao);

    for (const [chave, padrao] of padroesOrdenados.slice(0, 10)) {
        const status = padrao.taxa_alucinacao > 20 ? '🔴' :
            padrao.taxa_alucinacao > 5 ? '🟡' : '🟢';
        console.log(`   ${status} ${chave.padEnd(35)} | ${padrao.taxa_alucinacao.toFixed(1).padStart(5)}% | Tier ${padrao.tier_recomendado}`);
    }

    // Salvar
    salvarPadroes(padroes);

    return { resultados, padroes };
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);

    let numCasos = 100;

    for (const arg of args) {
        if (arg.startsWith('--casos=')) {
            numCasos = parseInt(arg.split('=')[1], 10);
        }
    }

    await treinar(numCasos);
}

module.exports = { treinar, gerarCasoAleatorio, callQwen };

if (require.main === module) {
    main().catch(console.error);
}
