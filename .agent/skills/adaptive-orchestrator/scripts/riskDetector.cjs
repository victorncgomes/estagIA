/**
 * Adaptive Multi-LLM Orchestrator v1.0 - Risk Detector
 * 
 * Avalia risco do caso e retorna score (0-100) + tier recomendado
 * 
 * Fatores:
 * 1. Similaridade RAG (30%)
 * 2. Complexidade Jurídica (25%)
 * 3. Variáveis Especiais (20%)
 * 4. Cálculos Complexos (15%)
 * 5. Histórico de Erro (10%)
 * 
 * Uso:
 *   node .agent/skills/adaptive-orchestrator/scripts/riskDetector.cjs --caso=caso.json
 *   node .agent/skills/adaptive-orchestrator/scripts/riskDetector.cjs --test
 */

const fs = require('fs');
const path = require('path');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const THEME_INDEX = path.join(ROOT, 'knowledge', 'ace-v2', 'theme_index.json');
const MODELOS_INDEX = path.join(ROOT, 'knowledge', 'decisoes', 'modelos_completos_index.json');
const CONFIG_PATH = path.join(__dirname, '..', 'resources', 'model_weights.json');
const HISTORY_PATH = path.join(__dirname, '..', 'data', 'risk_history.jsonl');

// ============================================
// CONFIGURAÇÃO
// ============================================
const RISK_WEIGHTS = {
    similaridade_rag: 0.30,
    complexidade_juridica: 0.25,
    variaveis_especiais: 0.20,
    calculos_complexos: 0.15,
    historico_erro: 0.10
};

const TIER_THRESHOLDS = {
    1: { min: 0, max: 20 },
    2: { min: 21, max: 50 },
    3: { min: 51, max: 75 },
    4: { min: 76, max: 100 }
};

// ============================================
// ANÁLISE DE SIMILARIDADE RAG
// ============================================
function analisarSimilaridadeRAG(caso) {
    let score = 0;
    const detalhes = [];

    // Verificar se tema está mapeado
    let themeIndex = null;
    if (fs.existsSync(THEME_INDEX)) {
        themeIndex = JSON.parse(fs.readFileSync(THEME_INDEX, 'utf-8'));
    }

    const temaMapeado = themeIndex?.temas?.[caso.tema];

    if (!temaMapeado) {
        score += 30;
        detalhes.push({ fator: 'tema_nao_mapeado', pontos: 30 });
    } else {
        // Verificar quantidade de modelos similares
        if (temaMapeado.modelos.count === 0) {
            score += 20;
            detalhes.push({ fator: 'sem_modelo_similar', pontos: 20 });
        } else if (temaMapeado.modelos.count < 3) {
            score += 10;
            detalhes.push({ fator: 'poucos_modelos', pontos: 10 });
        }

        // Verificar jurisprudência
        if (temaMapeado.jurisprudencia.count === 0) {
            score += 10;
            detalhes.push({ fator: 'sem_jurisprudencia', pontos: 10 });
        }
    }

    // Verificar se caso parece inédito
    if (caso.caso_inedito) {
        score += 15;
        detalhes.push({ fator: 'caso_inedito', pontos: 15 });
    }

    // Normalizar para 0-100
    const scoreNormalizado = Math.min(100, (score / 55) * 100);

    return {
        score: scoreNormalizado,
        peso: RISK_WEIGHTS.similaridade_rag,
        contribuicao: scoreNormalizado * RISK_WEIGHTS.similaridade_rag,
        detalhes
    };
}

// ============================================
// ANÁLISE DE COMPLEXIDADE JURÍDICA
// ============================================
function analisarComplexidadeJuridica(caso) {
    let score = 0;
    const detalhes = [];

    // Múltiplas leis aplicáveis
    if (caso.multiplas_leis || (caso.leis_aplicaveis && caso.leis_aplicaveis.length > 2)) {
        score += 15;
        detalhes.push({ fator: 'multiplas_leis', pontos: 15 });
    }

    // Conflito temporal de normas
    if (caso.conflito_temporal || caso.antes_pacote_anticrime) {
        score += 20;
        detalhes.push({ fator: 'conflito_temporal', pontos: 20 });
    }

    // Caso inédito (sem precedente)
    if (caso.caso_inedito || caso.sem_precedente) {
        score += 25;
        detalhes.push({ fator: 'sem_precedente', pontos: 25 });
    }

    // Decreto/portaria especial
    if (caso.decreto_especial || caso.decreto_presidencial) {
        score += 15;
        detalhes.push({ fator: 'decreto_especial', pontos: 15 });
    }

    // Tema STJ específico
    if (caso.tema_stj) {
        score += 10;
        detalhes.push({ fator: 'tema_stj', pontos: 10, tema: caso.tema_stj });
    }

    // Normalizar
    const scoreNormalizado = Math.min(100, (score / 85) * 100);

    return {
        score: scoreNormalizado,
        peso: RISK_WEIGHTS.complexidade_juridica,
        contribuicao: scoreNormalizado * RISK_WEIGHTS.complexidade_juridica,
        detalhes
    };
}

// ============================================
// ANÁLISE DE VARIÁVEIS ESPECIAIS
// ============================================
function analisarVariaveisEspeciais(caso) {
    let score = 0;
    const detalhes = [];

    const situacao = caso.situacao_especial || {};

    // Gestante/lactante
    if (situacao.gestante || situacao.lactante) {
        score += 15;
        detalhes.push({ fator: 'gestante_lactante', pontos: 15 });
    }

    // Tentativa vs consumado
    if (situacao.tentativa) {
        score += 10;
        detalhes.push({ fator: 'tentativa', pontos: 10 });
    }

    // Mudança de regime legal
    if (situacao.antes_pacote_anticrime || caso.mudanca_regime_legal) {
        score += 15;
        detalhes.push({ fator: 'mudanca_regime', pontos: 15 });
    }

    // Benefício presidencial
    if (situacao.decreto_presidencial || caso.beneficio_presidencial) {
        score += 15;
        detalhes.push({ fator: 'beneficio_presidencial', pontos: 15 });
    }

    // Idade avançada ou doença
    if (situacao.idoso || situacao.doenca_grave) {
        score += 10;
        detalhes.push({ fator: 'condicao_saude', pontos: 10 });
    }

    // Estrangeiro
    if (situacao.estrangeiro) {
        score += 5;
        detalhes.push({ fator: 'estrangeiro', pontos: 5 });
    }

    // Normalizar
    const scoreNormalizado = Math.min(100, (score / 70) * 100);

    return {
        score: scoreNormalizado,
        peso: RISK_WEIGHTS.variaveis_especiais,
        contribuicao: scoreNormalizado * RISK_WEIGHTS.variaveis_especiais,
        detalhes
    };
}

// ============================================
// ANÁLISE DE CÁLCULOS COMPLEXOS
// ============================================
function analisarCalculosComplexos(caso) {
    let score = 0;
    const detalhes = [];

    // Múltiplas frações aplicáveis
    if (caso.multiplas_fracoes || caso.fracoes_diferentes) {
        score += 20;
        detalhes.push({ fator: 'multiplas_fracoes', pontos: 20 });
    }

    // Combinação de leis (Tema STJ)
    if (caso.combinacao_leis || caso.tema_stj?.includes('1196')) {
        score += 25;
        detalhes.push({ fator: 'combinacao_leis', pontos: 25 });
    }

    // Detração/remição envolvida
    if (caso.detracao || caso.remicao_envolvida) {
        score += 10;
        detalhes.push({ fator: 'detracao_remicao', pontos: 10 });
    }

    // Unificação de penas
    if (caso.unificacao_penas) {
        score += 15;
        detalhes.push({ fator: 'unificacao', pontos: 15 });
    }

    // Limite trintenário
    if (caso.limite_trintenario) {
        score += 10;
        detalhes.push({ fator: 'limite_trintenario', pontos: 10 });
    }

    // Normalizar
    const scoreNormalizado = Math.min(100, (score / 80) * 100);

    return {
        score: scoreNormalizado,
        peso: RISK_WEIGHTS.calculos_complexos,
        contribuicao: scoreNormalizado * RISK_WEIGHTS.calculos_complexos,
        detalhes
    };
}

// ============================================
// ANÁLISE DE HISTÓRICO DE ERRO
// ============================================
function analisarHistoricoErro(caso) {
    let score = 0;
    const detalhes = [];

    // Carregar histórico de benchmarks (se existir)
    const benchmarkDir = path.join(ROOT, 'knowledge', 'ace-v2', 'benchmark_results');

    if (fs.existsSync(benchmarkDir)) {
        const files = fs.readdirSync(benchmarkDir)
            .filter(f => f.startsWith('benchmark_') && f.includes(caso.tema));

        if (files.length > 0) {
            // Pegar último benchmark do tema
            const lastFile = files.sort().reverse()[0];
            const benchmark = JSON.parse(fs.readFileSync(path.join(benchmarkDir, lastFile), 'utf-8'));

            // Verificar taxa de alucinação
            if (benchmark.stats && benchmark.stats.taxa_alucinacao) {
                const taxa = benchmark.stats.taxa_alucinacao;

                if (taxa > 50) {
                    score += 30;
                    detalhes.push({ fator: 'alta_taxa_alucinacao', pontos: 30, taxa });
                } else if (taxa > 20) {
                    score += 15;
                    detalhes.push({ fator: 'media_taxa_alucinacao', pontos: 15, taxa });
                } else if (taxa > 5) {
                    score += 5;
                    detalhes.push({ fator: 'baixa_taxa_alucinacao', pontos: 5, taxa });
                }
            }

            // Score médio baixo
            if (benchmark.stats && benchmark.stats.score_medio < 70) {
                score += 15;
                detalhes.push({ fator: 'score_baixo', pontos: 15 });
            }
        } else {
            // Tema nunca testado = risco alto
            score += 20;
            detalhes.push({ fator: 'tema_nunca_testado', pontos: 20 });
        }
    }

    // Normalizar
    const scoreNormalizado = Math.min(100, (score / 65) * 100);

    return {
        score: scoreNormalizado,
        peso: RISK_WEIGHTS.historico_erro,
        contribuicao: scoreNormalizado * RISK_WEIGHTS.historico_erro,
        detalhes
    };
}

// ============================================
// DETECTOR PRINCIPAL
// ============================================
function avaliarRisco(caso) {
    const resultado = {
        timestamp: new Date().toISOString(),
        caso_id: caso.id || `caso_${Date.now()}`,
        tema: caso.tema || caso.materia?.toLowerCase().replace(/\s+/g, '_'),
        analises: {},
        score_total: 0,
        tier: 1,
        recomendacao: ''
    };

    // Executar todas as análises
    resultado.analises.similaridade = analisarSimilaridadeRAG(caso);
    resultado.analises.complexidade = analisarComplexidadeJuridica(caso);
    resultado.analises.variaveis = analisarVariaveisEspeciais(caso);
    resultado.analises.calculos = analisarCalculosComplexos(caso);
    resultado.analises.historico = analisarHistoricoErro(caso);

    // Calcular score total
    resultado.score_total = Object.values(resultado.analises)
        .reduce((sum, a) => sum + a.contribuicao, 0);

    // Garantir intervalo 0-100
    resultado.score_total = Math.min(100, Math.max(0, resultado.score_total));

    // Determinar tier
    for (const [tier, range] of Object.entries(TIER_THRESHOLDS)) {
        if (resultado.score_total >= range.min && resultado.score_total <= range.max) {
            resultado.tier = parseInt(tier);
            break;
        }
    }

    // Gerar recomendação
    switch (resultado.tier) {
        case 1:
            resultado.recomendacao = 'RISCO BAIXO - Pipeline simples (Gemini)';
            break;
        case 2:
            resultado.recomendacao = 'RISCO MÉDIO - Pipeline duplo (Gemini + GPT + Claude)';
            break;
        case 3:
            resultado.recomendacao = 'RISCO ALTO - Pipeline completo (4-5 LLMs + fact-check)';
            break;
        case 4:
            resultado.recomendacao = 'RISCO CRÍTICO - Pipeline máximo (5-7 LLMs + votação + humano)';
            break;
    }

    // Coletar todos os fatores de risco
    resultado.fatores_risco = [];
    for (const [categoria, analise] of Object.entries(resultado.analises)) {
        analise.detalhes.forEach(d => {
            resultado.fatores_risco.push({
                categoria,
                ...d
            });
        });
    }

    // Ordenar por pontos
    resultado.fatores_risco.sort((a, b) => b.pontos - a.pontos);

    return resultado;
}

// ============================================
// SALVAR HISTÓRICO
// ============================================
function salvarHistorico(resultado) {
    const dataDir = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    const line = JSON.stringify(resultado) + '\n';
    fs.appendFileSync(HISTORY_PATH, line);
}

// ============================================
// TESTE
// ============================================
function testar() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🎯 Adaptive Orchestrator - Risk Detector TEST');
    console.log('═══════════════════════════════════════════════════════\n');

    // Caso simples (Tier 1)
    const casoSimples = {
        tema: 'remicao',
        materia: 'Remição por estudo',
        reu: 'João da Silva'
    };

    // Caso complexo (Tier 4) - baseado no exemplo do usuário
    const casoComplexo = {
        tema: 'progressao',
        materia: 'Progressão de Regime',
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

    console.log('📋 CASO 1: Simples (remição)\n');
    const resultado1 = avaliarRisco(casoSimples);
    exibirResultado(resultado1);

    console.log('\n\n📋 CASO 2: Complexo (progressão gestante + conflito temporal)\n');
    const resultado2 = avaliarRisco(casoComplexo);
    exibirResultado(resultado2);

    return { simples: resultado1, complexo: resultado2 };
}

function exibirResultado(resultado) {
    console.log(`   🎯 SCORE TOTAL: ${resultado.score_total.toFixed(1)}/100`);
    console.log(`   📊 TIER: ${resultado.tier}`);
    console.log(`   💡 ${resultado.recomendacao}`);

    console.log('\n   📈 CONTRIBUIÇÕES:');
    for (const [cat, analise] of Object.entries(resultado.analises)) {
        console.log(`      ${cat.padEnd(15)} ${analise.score.toFixed(1).padStart(5)} × ${(analise.peso * 100).toFixed(0)}% = ${analise.contribuicao.toFixed(1)}`);
    }

    if (resultado.fatores_risco.length > 0) {
        console.log('\n   ⚠️  FATORES DE RISCO:');
        resultado.fatores_risco.slice(0, 5).forEach(f => {
            console.log(`      +${f.pontos} ${f.fator} (${f.categoria})`);
        });
    }
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);

    if (args.includes('--test')) {
        return testar();
    }

    const casoArg = args.find(a => a.startsWith('--caso='));
    if (casoArg) {
        const casoPath = casoArg.split('=')[1];
        if (fs.existsSync(casoPath)) {
            const caso = JSON.parse(fs.readFileSync(casoPath, 'utf-8'));
            const resultado = avaliarRisco(caso);
            exibirResultado(resultado);
            salvarHistorico(resultado);
            return resultado;
        }
    }

    console.log('Uso:');
    console.log('  node riskDetector.cjs --test');
    console.log('  node riskDetector.cjs --caso=caso.json');
}

module.exports = { avaliarRisco, TIER_THRESHOLDS, RISK_WEIGHTS };

if (require.main === module) {
    main().catch(console.error);
}
