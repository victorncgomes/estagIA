/**
 * estagIA - Auto-Aprendizado de Prompts
 * 
 * Sistema que aprende e ajusta o prompt automaticamente:
 * 1. Gera decisão baseada nos exemplos
 * 2. Compara com golden truth
 * 3. Ajusta parâmetros baseado no erro
 * 4. Repete até atingir score alvo
 * 
 * Uso: node scripts/autoLearn.cjs [--agrupador=remicao] [--max-iter=5]
 */

const fs = require('fs');
const path = require('path');

// Paths
const TEXTOS_DIR = path.join(__dirname, '..', 'knowledge', 'decisoes', 'textos_completos');
const MODELOS_INDEX = path.join(__dirname, '..', 'knowledge', 'decisoes', 'modelos_completos_index.json');
const CONFIG_FILE = path.join(__dirname, '..', 'knowledge', 'prompts', 'prompt_config.json');
const HISTORY_FILE = path.join(__dirname, '..', 'knowledge', 'prompts', 'learning_history.json');

// Carregar env
const envPath = path.join(__dirname, '..', 'backend', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const geminiKey = envContent.match(/GEMINI_API_KEY=([^\r\n]+)/)?.[1]?.trim();

// Configuração inicial do prompt (será ajustada automaticamente)
let promptConfig = {
    instrucaoTamanho: 'A decisão deve ter entre 3000 e 6000 caracteres.',
    instrucaoEstrutura: 'ESTRUTURA: Vistos → Relatório → Relatados. → Fundamentação → Isso posto, → P.R.I.',
    numExemplos: 2,
    maxCharsExemplo: 5000,
    enfase: 'IMPORTANTE: Seu texto deve ter tamanho SIMILAR aos exemplos.',
    multiplicadorTamanho: 1.0  // Ajustado dinamicamente
};

// Carregar config salva se existir
if (fs.existsSync(CONFIG_FILE)) {
    try {
        promptConfig = { ...promptConfig, ...JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8')) };
        console.log('📂 Configuração carregada');
    } catch (e) { }
}

// Métricas
function calcularMetricas(gerado, golden) {
    const lower = gerado.toLowerCase();
    const estrutura = {
        vistos: lower.includes('vistos') ? 1 : 0,
        relatados: lower.includes('relatados') ? 1 : 0,
        issoPosto: lower.includes('isso posto') || lower.includes('isto posto') ? 1 : 0,
        pri: lower.includes('p.r.i') ? 1 : 0
    };
    const estruturaScore = (estrutura.vistos + estrutura.relatados + estrutura.issoPosto + estrutura.pri) * 25;

    const ratio = gerado.length / golden.length;
    let tamanhoScore = 0;
    if (ratio >= 0.8 && ratio <= 1.2) tamanhoScore = 100;
    else if (ratio >= 0.6 && ratio <= 1.4) tamanhoScore = 70;
    else if (ratio >= 0.4 && ratio <= 1.6) tamanhoScore = 40;
    else tamanhoScore = 10;

    // Score: estrutura 50%, tamanho 50%
    const score = estruturaScore * 0.5 + tamanhoScore * 0.5;

    return { score, estrutura, estruturaScore, tamanhoScore, ratio };
}

// Gerar via Gemini
async function gerarDecisao(prompt) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { maxOutputTokens: 8000 }
            })
        }
    );

    if (!response.ok) throw new Error(`API: ${response.status}`);
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// Construir prompt com config atual
function construirPrompt(modelosExemplo, goldenLength, orientacao, agrupador) {
    // Calcular tamanho alvo baseado no multiplicador
    const tamanhoAlvo = Math.round(goldenLength * promptConfig.multiplicadorTamanho);
    const tamanhoMin = Math.round(tamanhoAlvo * 0.8);
    const tamanhoMax = Math.round(tamanhoAlvo * 1.2);

    let prompt = `# SISTEMA DE REDAÇÃO JURÍDICA - JUIZ HENRIQUE BALTAZAR

## REGRAS ABSOLUTAS (VERIFIQUE ANTES DE RESPONDER)
1. ${promptConfig.instrucaoEstrutura}
2. TAMANHO OBRIGATÓRIO: Entre ${tamanhoMin} e ${tamanhoMax} caracteres. VOCÊ SERÁ AVALIADO POR ISSO.
3. Use linguagem formal jurídica. SEM bullet points ou listas.
4. ${promptConfig.enfase}

## EXEMPLOS REAIS DO MAGISTRADO

`;

    modelosExemplo.slice(0, promptConfig.numExemplos).forEach((modelo, i) => {
        prompt += `### EXEMPLO ${i + 1} (${modelo.length} caracteres)
\`\`\`
${modelo.substring(0, promptConfig.maxCharsExemplo)}
\`\`\`

`;
    });

    prompt += `---

## TAREFA
Matéria: ${agrupador}
Orientação: ${orientacao}

GERE A DECISÃO COMPLETA com aproximadamente ${tamanhoAlvo} caracteres, seguindo o estilo dos exemplos.
`;

    return prompt;
}

// Ajustar config baseado nos resultados
function ajustarConfig(resultados) {
    const avgRatio = resultados.reduce((a, b) => a + b.ratio, 0) / resultados.length;
    const avgScore = resultados.reduce((a, b) => a + b.score, 0) / resultados.length;

    let mudancas = [];

    // Ajustar multiplicador de tamanho
    if (avgRatio > 1.3) {
        // Texto muito longo - reduzir
        promptConfig.multiplicadorTamanho *= 0.7;
        mudancas.push(`Multiplicador tamanho: ${promptConfig.multiplicadorTamanho.toFixed(2)} (reduzido)`);
    } else if (avgRatio < 0.7) {
        // Texto muito curto - aumentar
        promptConfig.multiplicadorTamanho *= 1.3;
        mudancas.push(`Multiplicador tamanho: ${promptConfig.multiplicadorTamanho.toFixed(2)} (aumentado)`);
    }

    // Se estrutura baixa, ser mais enfático
    const avgEstrutura = resultados.reduce((a, b) => a + b.estruturaScore, 0) / resultados.length;
    if (avgEstrutura < 80) {
        promptConfig.instrucaoEstrutura = `ESTRUTURA OBRIGATÓRIA (será verificada):
1. INICIAR com "Vistos, etc." ou "Vistos etc."
2. INCLUIR parágrafo "Relatados." SOZINHO
3. DISPOSITIVO iniciar com "Isso posto,"
4. FINALIZAR com "P.R.I."`;
        mudancas.push('Instrução de estrutura detalhada');
    }

    return { avgScore, avgRatio, mudancas };
}

// Loop principal
async function autoLearn(agrupador = 'remicao', maxIter = 5, scoreAlvo = 80) {
    console.log('═══════════════════════════════════════════════════════');
    console.log('🤖 estagIA - Auto-Aprendizado de Prompts');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`\nAgrupador: ${agrupador} | Score alvo: ${scoreAlvo} | Max iter: ${maxIter}\n`);

    // Carregar modelos
    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
    const modelos = indice.modelos.filter(m => m.agrupador.toLowerCase() === agrupador.toLowerCase());

    if (modelos.length < 3) {
        console.log('❌ Insuficientes modelos (mínimo 3)');
        return;
    }

    console.log(`📁 ${modelos.length} modelos de ${agrupador}`);

    // Carregar conteúdos
    const modelosComConteudo = modelos.slice(0, 6).map(m => {
        const conteudo = fs.readFileSync(path.join(TEXTOS_DIR, m.arquivo_texto), 'utf-8');
        return { ...m, conteudo };
    }).filter(m => m.conteudo.length > 500);

    const history = [];

    for (let iter = 1; iter <= maxIter; iter++) {
        console.log(`\n${'─'.repeat(55)}`);
        console.log(`📍 ITERAÇÃO ${iter}/${maxIter}`);
        console.log('─'.repeat(55));

        const resultados = [];

        // Testar em 2 modelos por iteração
        for (let i = 0; i < Math.min(2, modelosComConteudo.length); i++) {
            const modeloTeste = modelosComConteudo[i];
            const modelosExemplo = modelosComConteudo
                .filter((_, idx) => idx !== i)
                .slice(0, promptConfig.numExemplos)
                .map(m => m.conteudo);

            const orientacao = modeloTeste.resultado === 'defere' ? 'Deferir' : 'Indeferir';
            const prompt = construirPrompt(modelosExemplo, modeloTeste.conteudo.length, orientacao, agrupador);

            console.log(`\n  [${i + 1}/2] ${modeloTeste.nome.substring(0, 35)}...`);

            try {
                const gerado = await gerarDecisao(prompt);
                const metricas = calcularMetricas(gerado, modeloTeste.conteudo);

                resultados.push(metricas);

                const status = metricas.score >= 80 ? '✅' : metricas.score >= 60 ? '⚠️' : '❌';
                console.log(`      ${status} Score: ${metricas.score.toFixed(0)}/100 | Struct: ${metricas.estruturaScore}% | Size: ${metricas.tamanhoScore}% (${(metricas.ratio * 100).toFixed(0)}%)`);

                await new Promise(r => setTimeout(r, 500));
            } catch (e) {
                console.log(`      ❌ Erro: ${e.message}`);
            }
        }

        if (resultados.length === 0) continue;

        // Ajustar configuração
        const ajuste = ajustarConfig(resultados);

        console.log(`\n  📊 Média: Score ${ajuste.avgScore.toFixed(0)}/100 | Ratio ${(ajuste.avgRatio * 100).toFixed(0)}%`);

        if (ajuste.mudancas.length > 0) {
            console.log('  🔧 Ajustes:');
            ajuste.mudancas.forEach(m => console.log(`     • ${m}`));
        }

        history.push({
            iteracao: iter,
            avgScore: ajuste.avgScore,
            avgRatio: ajuste.avgRatio,
            config: { ...promptConfig },
            mudancas: ajuste.mudancas
        });

        // Verificar se atingiu alvo
        if (ajuste.avgScore >= scoreAlvo) {
            console.log(`\n🎉 SCORE ALVO ATINGIDO! (${ajuste.avgScore.toFixed(0)} >= ${scoreAlvo})`);
            break;
        }
    }

    // Salvar configuração otimizada
    const outputDir = path.join(__dirname, '..', 'knowledge', 'prompts');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    fs.writeFileSync(CONFIG_FILE, JSON.stringify(promptConfig, null, 2));
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📊 RESULTADO FINAL');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`\nIterações: ${history.length}`);
    console.log(`Score inicial: ${history[0]?.avgScore.toFixed(0) || 'N/A'}`);
    console.log(`Score final: ${history[history.length - 1]?.avgScore.toFixed(0) || 'N/A'}`);
    console.log(`\n💾 Config salva: ${CONFIG_FILE}`);
    console.log(`📄 Histórico: ${HISTORY_FILE}`);

    return history;
}

// Parse args
const args = process.argv.slice(2);
let agrupador = 'remicao', maxIter = 5;

for (const arg of args) {
    if (arg.startsWith('--agrupador=')) agrupador = arg.split('=')[1];
    if (arg.startsWith('--max-iter=')) maxIter = parseInt(arg.split('=')[1], 10);
}

autoLearn(agrupador, maxIter, 75).catch(console.error);
