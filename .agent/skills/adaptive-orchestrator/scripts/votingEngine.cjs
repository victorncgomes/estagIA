/**
 * Adaptive Multi-LLM Orchestrator v1.0 - Voting Engine
 * 
 * Sistema de votação ponderada entre múltiplos LLMs.
 * 
 * Cada modelo tem peso diferente baseado no tipo de questão:
 * - juridico: interpretação de lei
 * - redacao: qualidade do texto
 * - calculo: frações e matemática
 * - fact_check: validação de fatos
 * 
 * Uso:
 *   const { calcularConsenso } = require('./votingEngine.cjs');
 *   const resultado = calcularConsenso(respostas, 'juridico');
 */

const fs = require('fs');
const path = require('path');

// ============================================
// CARREGAR PESOS
// ============================================
const WEIGHTS_PATH = path.join(__dirname, '..', 'resources', 'model_weights.json');
let MODEL_WEIGHTS = {};

if (fs.existsSync(WEIGHTS_PATH)) {
    const config = JSON.parse(fs.readFileSync(WEIGHTS_PATH, 'utf-8'));
    MODEL_WEIGHTS = config.weights;
}

// ============================================
// NORMALIZAR RESPOSTA
// ============================================
function normalizarResposta(resposta) {
    if (typeof resposta !== 'string') return String(resposta);

    return resposta
        .toLowerCase()
        .trim()
        .replace(/[.,;:!?]/g, '')
        .replace(/\s+/g, ' ');
}

// ============================================
// AGRUPAR RESPOSTAS SIMILARES
// ============================================
function agruparRespostasSimilares(respostas) {
    const grupos = [];

    for (const resp of respostas) {
        const normalizada = normalizarResposta(resp.resposta);

        // Procurar grupo existente similar
        let grupoEncontrado = null;

        for (const grupo of grupos) {
            const grupoNorm = normalizarResposta(grupo.valor);

            // Verificar similaridade (simples - pode ser melhorado)
            if (normalizada === grupoNorm ||
                normalizada.includes(grupoNorm) ||
                grupoNorm.includes(normalizada)) {
                grupoEncontrado = grupo;
                break;
            }

            // Respostas de sim/não
            const simVariantes = ['sim', 'yes', 'positivo', 'afirmativo', 'deferido', 'conceder'];
            const naoVariantes = ['não', 'nao', 'no', 'negativo', 'indeferido', 'negar'];

            const respEhSim = simVariantes.some(v => normalizada.includes(v));
            const respEhNao = naoVariantes.some(v => normalizada.includes(v));
            const grupoEhSim = simVariantes.some(v => grupoNorm.includes(v));
            const grupoEhNao = naoVariantes.some(v => grupoNorm.includes(v));

            if ((respEhSim && grupoEhSim) || (respEhNao && grupoEhNao)) {
                grupoEncontrado = grupo;
                break;
            }
        }

        if (grupoEncontrado) {
            grupoEncontrado.respostas.push(resp);
        } else {
            grupos.push({
                valor: resp.resposta,
                respostas: [resp]
            });
        }
    }

    return grupos;
}

// ============================================
// CALCULAR CONSENSO
// ============================================
function calcularConsenso(respostas, tipoQuestao = 'juridico') {
    if (!respostas || respostas.length === 0) {
        return {
            resposta: null,
            consenso: '0/0',
            confianca: 0,
            divergencias: []
        };
    }

    // Agrupar respostas similares
    const grupos = agruparRespostasSimilares(respostas);

    // Calcular score ponderado para cada grupo
    for (const grupo of grupos) {
        grupo.score = 0;
        grupo.modelos = [];

        for (const resp of grupo.respostas) {
            const modelo = resp.modelo || 'unknown';
            const peso = MODEL_WEIGHTS[modelo]?.[tipoQuestao] || 1.0;

            grupo.score += peso;
            grupo.modelos.push({ modelo, peso });
        }
    }

    // Ordenar por score
    grupos.sort((a, b) => b.score - a.score);

    // Calcular peso total possível
    const pesoTotal = respostas.reduce((sum, r) => {
        const modelo = r.modelo || 'unknown';
        return sum + (MODEL_WEIGHTS[modelo]?.[tipoQuestao] || 1.0);
    }, 0);

    const melhor = grupos[0];
    const confianca = pesoTotal > 0 ? (melhor.score / pesoTotal) * 100 : 0;

    return {
        resposta: melhor.valor,
        consenso: `${melhor.respostas.length}/${respostas.length}`,
        confianca: Math.round(confianca * 10) / 10,
        score_ponderado: Math.round(melhor.score * 100) / 100,
        peso_total: Math.round(pesoTotal * 100) / 100,
        modelos_concordantes: melhor.modelos,
        divergencias: grupos.slice(1).map(g => ({
            valor: g.valor,
            modelos: g.modelos,
            score: g.score
        })),
        requer_escalacao: confianca < 90
    };
}

// ============================================
// VOTAÇÃO MULTI-QUESTÃO
// ============================================
function votarQuestoes(questoes, respostasPorModelo) {
    const resultados = {};

    for (const questao of questoes) {
        const respostas = [];

        for (const [modelo, analise] of Object.entries(respostasPorModelo)) {
            if (analise.respostas && analise.respostas[questao.id]) {
                respostas.push({
                    modelo,
                    resposta: analise.respostas[questao.id],
                    raciocinio: analise.raciocinio?.[questao.id] || ''
                });
            }
        }

        resultados[questao.id] = {
            questao: questao.texto,
            tipo: questao.tipo,
            ...calcularConsenso(respostas, questao.tipo)
        };
    }

    return resultados;
}

// ============================================
// CALCULAR SCORE FINAL
// ============================================
function calcularScoreFinal(consensos, validacoes = {}) {
    const scores = [];

    // Score dos consensos
    for (const consenso of Object.values(consensos)) {
        scores.push(consenso.confianca);
    }

    // Score das validações
    if (validacoes.deterministico !== undefined) {
        scores.push(validacoes.deterministico);
    }
    if (validacoes.juridico !== undefined) {
        scores.push(validacoes.juridico);
    }
    if (validacoes.externo !== undefined) {
        scores.push(validacoes.externo);
    }

    if (scores.length === 0) return 0;

    const media = scores.reduce((a, b) => a + b, 0) / scores.length;

    return Math.round(media * 10) / 10;
}

// ============================================
// TESTE
// ============================================
function testar() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🗳️  Voting Engine - TEST');
    console.log('═══════════════════════════════════════════════════════\n');

    // Simular respostas de múltiplos LLMs
    const respostas = [
        { modelo: 'gemini-flash', resposta: '50%', raciocinio: 'Art. 112, I' },
        { modelo: 'gpt-4o', resposta: '50%', raciocinio: 'Tema 1196 STJ' },
        { modelo: 'claude-sonnet', resposta: '50%', raciocinio: 'Princípio favorabilidade' },
        { modelo: 'deepseek', resposta: '50%', raciocinio: 'Cálculo: 0.5 × pena' },
        { modelo: 'perplexity', resposta: '40%', raciocinio: 'Crime hediondo padrão' }  // Divergente
    ];

    console.log('📊 Questão: Fração aplicável');
    console.log('   Tipo: calculo\n');

    const resultado = calcularConsenso(respostas, 'calculo');

    console.log(`   ✅ Resposta: ${resultado.resposta}`);
    console.log(`   📈 Consenso: ${resultado.consenso}`);
    console.log(`   🎯 Confiança: ${resultado.confianca}%`);
    console.log(`   ⚖️  Score ponderado: ${resultado.score_ponderado}/${resultado.peso_total}`);

    console.log('\n   Modelos concordantes:');
    resultado.modelos_concordantes.forEach(m => {
        console.log(`      - ${m.modelo} (peso ${m.peso})`);
    });

    if (resultado.divergencias.length > 0) {
        console.log('\n   ⚠️  Divergências:');
        resultado.divergencias.forEach(d => {
            console.log(`      - "${d.valor}" (${d.modelos.map(m => m.modelo).join(', ')})`);
        });
    }

    console.log(`\n   🚨 Requer escalação: ${resultado.requer_escalacao ? 'SIM' : 'NÃO'}`);

    return resultado;
}

// ============================================
// MAIN
// ============================================
if (require.main === module) {
    testar();
}

module.exports = {
    calcularConsenso,
    votarQuestoes,
    calcularScoreFinal,
    agruparRespostasSimilares,
    MODEL_WEIGHTS
};
