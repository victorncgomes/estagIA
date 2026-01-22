/**
 * estagIA - Sistema de Auto-Otimização de Prompts (DSPy-Style)
 * 
 * Este sistema:
 * 1. Pega cada modelo golden como "ground truth"
 * 2. Simula a geração usando a engine atual
 * 3. Calcula similarity (coseno, estrutura, tamanho)
 * 4. Se score < threshold, ajusta parâmetros automaticamente
 * 5. Repete até convergir ou atingir max iterações
 * 
 * Uso: node scripts/autoOptimize.cjs [--agrupador=remicao] [--max-iter=10]
 * 
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// Configuração
const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');
const MODELOS_INDEX = path.join(KNOWLEDGE_DIR, 'decisoes', 'modelos_completos_index.json');
const TEXTOS_DIR = path.join(KNOWLEDGE_DIR, 'decisoes', 'textos_completos');
const CONFIG_OUTPUT = path.join(KNOWLEDGE_DIR, 'prompts', 'otimizado.json');
const REPORT_OUTPUT = path.join(KNOWLEDGE_DIR, 'prompts', 'benchmark_report.json');

// Carregar .env
function loadEnv() {
    const envPaths = [
        path.join(__dirname, '..', 'backend', '.env'),
        path.join(__dirname, '..', '.env')
    ];

    for (const envPath of envPaths) {
        if (fs.existsSync(envPath)) {
            const content = fs.readFileSync(envPath, 'utf-8');
            for (const line of content.split('\n')) {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#')) {
                    const eqIndex = trimmed.indexOf('=');
                    if (eqIndex > 0) {
                        const key = trimmed.slice(0, eqIndex).trim();
                        const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
                        process.env[key] = value;
                    }
                }
            }
        }
    }
}
loadEnv();

// ============================================
// MÉTRICAS DE QUALIDADE
// ============================================

/**
 * Calcula similaridade de texto (Jaccard simplificado)
 */
function calcularSimilaridade(textoA, textoB) {
    const wordsA = new Set(textoA.toLowerCase().split(/\s+/).filter(w => w.length > 3));
    const wordsB = new Set(textoB.toLowerCase().split(/\s+/).filter(w => w.length > 3));

    const intersection = new Set([...wordsA].filter(x => wordsB.has(x)));
    const union = new Set([...wordsA, ...wordsB]);

    return intersection.size / union.size;
}

/**
 * Verifica estrutura da decisão
 */
function verificarEstrutura(texto) {
    const lower = texto.toLowerCase();
    const checks = {
        vistos: lower.includes('vistos') || lower.includes('visto, etc'),
        relatados: lower.includes('relatados.') || lower.includes('relatados,'),
        issoPosto: lower.includes('isso posto') || lower.includes('isto posto'),
        pri: lower.includes('p.r.i') || lower.includes('pri.')
    };

    const score = Object.values(checks).filter(Boolean).length / 4;
    return { score, checks };
}

/**
 * Compara tamanho dos textos
 */
function compararTamanho(gerado, golden) {
    const ratio = gerado.length / golden.length;
    // Score máximo se ratio entre 0.7 e 1.3
    if (ratio >= 0.7 && ratio <= 1.3) return 1.0;
    if (ratio >= 0.5 && ratio <= 1.5) return 0.7;
    if (ratio >= 0.3 && ratio <= 2.0) return 0.4;
    return 0.1;
}

/**
 * Calcula score geral
 */
function calcularScoreGeral(gerado, golden) {
    const similaridade = calcularSimilaridade(gerado, golden);
    const estrutura = verificarEstrutura(gerado);
    const tamanho = compararTamanho(gerado, golden);

    // Pesos: estrutura (40%), similaridade (35%), tamanho (25%)
    const score = (estrutura.score * 40 + similaridade * 35 + tamanho * 25);

    return {
        score,
        detalhes: {
            estrutura: estrutura.score * 100,
            similaridade: similaridade * 100,
            tamanho: tamanho * 100,
            checks: estrutura.checks
        }
    };
}

// ============================================
// GERAÇÃO VIA API
// ============================================

/**
 * Gera decisão usando a API Claude/Gemini
 */
async function gerarDecisao(prompt, provider = 'gemini') {
    const apiKey = provider === 'anthropic'
        ? process.env.ANTHROPIC_API_KEY
        : process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error(`API key não encontrada para ${provider}`);
    }

    if (provider === 'anthropic') {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 8000,
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`API error: ${response.status} - ${error}`);
        }

        const data = await response.json();
        return data.content[0].text;
    } else {
        // Gemini
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            }
        );

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`API error: ${response.status} - ${error}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }
}

// ============================================
// CONSTRUTOR DE PROMPTS (CONFIGURÁVEL)
// ============================================

/**
 * Configuração de prompt que pode ser ajustada automaticamente
 */
let promptConfig = {
    // Instruções de tamanho
    instrucaoTamanho: 'A decisão deve ter NO MÍNIMO 4000 caracteres e NO MÁXIMO 8000 caracteres.',

    // Instruções de estrutura
    instrucaoEstrutura: 'SIGA EXATAMENTE a estrutura: Vistos, etc. → Relatório → Relatados. → Fundamentação → Isso posto, → P.R.I.',

    // Instruções de estilo
    instrucaoEstilo: 'Use linguagem formal jurídica, sem modernismos. NÃO use bullet points ou listas.',

    // Quantidade de exemplos few-shot
    numExemplos: 2,

    // Tamanho máximo de cada exemplo
    maxCharsExemplo: 6000,

    // Ênfase extra
    enfaseExtra: 'ATENÇÃO: Sua decisão deve ser MUITO SIMILAR em tamanho e estrutura aos exemplos.'
};

/**
 * Constrói prompt baseado na configuração atual
 */
function construirPrompt(modelosExemplo, insumosMock, orientacao) {
    let prompt = `# SISTEMA DE REDAÇÃO JURÍDICA - JUIZ HENRIQUE BALTAZAR

## REGRAS CRÍTICAS
${promptConfig.instrucaoTamanho}
${promptConfig.instrucaoEstrutura}
${promptConfig.instrucaoEstilo}

## EXEMPLOS REAIS DO MAGISTRADO
${promptConfig.enfaseExtra}

`;

    // Adicionar exemplos
    modelosExemplo.slice(0, promptConfig.numExemplos).forEach((modelo, i) => {
        const conteudo = modelo.conteudo.substring(0, promptConfig.maxCharsExemplo);
        prompt += `### EXEMPLO ${i + 1}: ${modelo.nome}
Tamanho: ${modelo.tamanho} caracteres

\`\`\`
${conteudo}
\`\`\`

`;
    });

    // Adicionar insumos
    prompt += `---

## CASO ATUAL

### INSUMOS
${insumosMock}

### ORIENTAÇÃO DO JUIZ
${orientacao}

---

AGORA GERE A DECISÃO COMPLETA seguindo EXATAMENTE o estilo e tamanho dos exemplos acima.
`;

    return prompt;
}

// ============================================
// LOOP DE OTIMIZAÇÃO
// ============================================

/**
 * Ajusta parâmetros baseado nos resultados
 */
function ajustarParametros(resultados) {
    const avgScore = resultados.reduce((a, b) => a + b.score, 0) / resultados.length;
    const avgTamanho = resultados.reduce((a, b) => a + b.detalhes.tamanho, 0) / resultados.length;
    const avgEstrutura = resultados.reduce((a, b) => a + b.detalhes.estrutura, 0) / resultados.length;

    let mudancas = [];

    // Se tamanho muito baixo, aumentar ênfase
    if (avgTamanho < 50) {
        promptConfig.instrucaoTamanho = 'OBRIGATÓRIO: A decisão DEVE ter entre 5000 e 10000 caracteres. Decisões curtas serão REJEITADAS.';
        promptConfig.enfaseExtra = '🚨 CRÍTICO: Sua decisão DEVE ter tamanho SIMILAR aos exemplos (5000+ caracteres). NÃO gere texto curto!';
        mudancas.push('Aumentada ênfase em tamanho');
    }

    // Se estrutura baixa, ser mais específico
    if (avgEstrutura < 70) {
        promptConfig.instrucaoEstrutura = `ESTRUTURA OBRIGATÓRIA (verificada automaticamente):
1. INICIAR com "Vistos, etc." ou "Vistos etc."
2. INCLUIR parágrafo com "Relatados." SOZINHO
3. INCLUIR parágrafo com "Isso posto," ANTES do dispositivo
4. FINALIZAR com "P.R.I."`;
        mudancas.push('Detalhada instrução de estrutura');
    }

    // Se score geral bom mas pode melhorar, aumentar exemplos
    if (avgScore > 60 && avgScore < 80 && promptConfig.numExemplos < 3) {
        promptConfig.numExemplos = 3;
        mudancas.push('Aumentado para 3 exemplos');
    }

    return {
        avgScore,
        mudancas,
        novaConfig: { ...promptConfig }
    };
}

/**
 * Executa benchmark em um agrupador
 */
async function executarBenchmark(agrupador, maxModelos = 5) {
    console.log(`\n📊 Benchmark: ${agrupador.toUpperCase()}`);
    console.log('─'.repeat(50));

    // Carregar índice
    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));

    // Filtrar modelos do agrupador
    const modelosAgrupador = indice.modelos.filter(m =>
        m.agrupador.toLowerCase() === agrupador.toLowerCase()
    );

    if (modelosAgrupador.length === 0) {
        console.log(`⚠️ Nenhum modelo encontrado para ${agrupador}`);
        return [];
    }

    console.log(`📁 ${modelosAgrupador.length} modelos disponíveis`);

    // Carregar conteúdo dos modelos
    const modelosComConteudo = [];
    for (const modelo of modelosAgrupador.slice(0, maxModelos + 2)) {
        const textoPath = path.join(TEXTOS_DIR, modelo.arquivo_texto);
        if (fs.existsSync(textoPath)) {
            modelo.conteudo = fs.readFileSync(textoPath, 'utf-8');
            modelosComConteudo.push(modelo);
        }
    }

    const resultados = [];

    // Para cada modelo, testar geração
    for (let i = 0; i < Math.min(maxModelos, modelosComConteudo.length); i++) {
        const modeloTeste = modelosComConteudo[i];

        // Usar outros modelos como exemplos few-shot
        const modelosExemplo = modelosComConteudo.filter((_, idx) => idx !== i).slice(0, promptConfig.numExemplos);

        if (modelosExemplo.length === 0) {
            console.log(`⚠️ Sem exemplos para ${modeloTeste.nome}`);
            continue;
        }

        // Mock de insumos baseado no modelo
        const insumosMock = `Trata-se de pedido de ${agrupador}.
O Ministério Público opinou pelo ${modeloTeste.resultado === 'defere' ? 'deferimento' : 'indeferimento'}.`;

        const orientacao = modeloTeste.resultado === 'defere' ? 'Deferir o pedido' : 'Indeferir o pedido';

        // Construir prompt
        const prompt = construirPrompt(modelosExemplo, insumosMock, orientacao);

        console.log(`\n🔄 [${i + 1}/${maxModelos}] ${modeloTeste.nome.substring(0, 40)}...`);

        try {
            // Gerar decisão
            const inicio = Date.now();
            const gerado = await gerarDecisao(prompt, 'anthropic');
            const tempo = Date.now() - inicio;

            // Calcular score
            const score = calcularScoreGeral(gerado, modeloTeste.conteudo);

            resultados.push({
                modelo: modeloTeste.nome,
                arquivo: modeloTeste.arquivo,
                tamanhoGolden: modeloTeste.conteudo.length,
                tamanhoGerado: gerado.length,
                tempo,
                ...score
            });

            // Status
            const status = score.score >= 70 ? '✅' : score.score >= 50 ? '⚠️' : '❌';
            console.log(`   ${status} Score: ${score.score.toFixed(1)}/100`);
            console.log(`      Estrutura: ${score.detalhes.estrutura.toFixed(0)}% | Similaridade: ${score.detalhes.similaridade.toFixed(0)}% | Tamanho: ${score.detalhes.tamanho.toFixed(0)}%`);
            console.log(`      Golden: ${modeloTeste.conteudo.length} chars | Gerado: ${gerado.length} chars`);

            // Delay entre chamadas
            await new Promise(r => setTimeout(r, 1000));

        } catch (error) {
            console.log(`   ❌ Erro: ${error.message}`);
            resultados.push({
                modelo: modeloTeste.nome,
                erro: error.message
            });
        }
    }

    return resultados;
}

/**
 * Loop principal de auto-otimização
 */
async function autoOptimize(agrupador, maxIteracoes = 5, scoreAlvo = 75) {
    console.log('═'.repeat(60));
    console.log('🤖 estagIA - Auto-Otimização de Prompts v1.0');
    console.log('═'.repeat(60));
    console.log(`\nAgrupador: ${agrupador}`);
    console.log(`Score alvo: ${scoreAlvo}`);
    console.log(`Máximo iterações: ${maxIteracoes}`);

    const historico = [];

    for (let iter = 1; iter <= maxIteracoes; iter++) {
        console.log(`\n${'═'.repeat(60)}`);
        console.log(`📍 ITERAÇÃO ${iter}/${maxIteracoes}`);
        console.log('═'.repeat(60));

        // Executar benchmark
        const resultados = await executarBenchmark(agrupador, 3);

        if (resultados.length === 0) {
            console.log('⚠️ Sem resultados, abortando');
            break;
        }

        // Calcular média
        const validos = resultados.filter(r => !r.erro && r.score !== undefined);
        const avgScore = validos.length > 0
            ? validos.reduce((a, b) => a + b.score, 0) / validos.length
            : 0;

        console.log(`\n📈 Score médio: ${avgScore.toFixed(1)}/100 (${validos.length} válidos)`);

        if (validos.length === 0) {
            console.log('⚠️ Nenhum resultado válido nesta iteração');
            historico.push({ iteracao: iter, score: null, ajustes: [], config: { ...promptConfig } });
            continue;
        }

        // Verificar se atingiu alvo
        if (avgScore >= scoreAlvo) {
            console.log(`\n🎉 SCORE ALVO ATINGIDO! (${avgScore.toFixed(1)} >= ${scoreAlvo})`);
            historico.push({ iteracao: iter, score: avgScore, config: { ...promptConfig } });
            break;
        }

        // Ajustar parâmetros
        const ajuste = ajustarParametros(validos);

        console.log(`\n🔧 Ajustes realizados:`);
        if (ajuste.mudancas.length > 0) {
            ajuste.mudancas.forEach(m => console.log(`   - ${m}`));
        } else {
            console.log('   (nenhum ajuste necessário)');
        }

        historico.push({
            iteracao: iter,
            score: avgScore,
            ajustes: ajuste.mudancas,
            config: { ...promptConfig }
        });

        // Delay entre iterações
        await new Promise(r => setTimeout(r, 2000));
    }

    // Salvar configuração otimizada
    const configFinal = {
        versao: '1.0.0',
        dataOtimizacao: new Date().toISOString(),
        agrupador,
        scoreAlcancado: historico[historico.length - 1]?.score || 0,
        config: promptConfig,
        historico
    };

    // Criar diretório se não existir
    const promptDir = path.join(KNOWLEDGE_DIR, 'prompts');
    if (!fs.existsSync(promptDir)) {
        fs.mkdirSync(promptDir, { recursive: true });
    }

    fs.writeFileSync(CONFIG_OUTPUT, JSON.stringify(configFinal, null, 2), 'utf-8');
    fs.writeFileSync(REPORT_OUTPUT, JSON.stringify(historico, null, 2), 'utf-8');

    console.log(`\n${'═'.repeat(60)}`);
    console.log('📊 RELATÓRIO FINAL');
    console.log('═'.repeat(60));
    console.log(`\nIterações: ${historico.length}`);
    console.log(`Score inicial: ${historico[0]?.score.toFixed(1) || 'N/A'}`);
    console.log(`Score final: ${historico[historico.length - 1]?.score.toFixed(1) || 'N/A'}`);
    console.log(`\n💾 Configuração salva em: ${CONFIG_OUTPUT}`);
    console.log(`📄 Relatório salvo em: ${REPORT_OUTPUT}`);

    return configFinal;
}

// ============================================
// EXECUÇÃO
// ============================================

// Parse argumentos
const args = process.argv.slice(2);
let agrupador = 'remicao';
let maxIter = 5;

for (const arg of args) {
    if (arg.startsWith('--agrupador=')) {
        agrupador = arg.split('=')[1];
    } else if (arg.startsWith('--max-iter=')) {
        maxIter = parseInt(arg.split('=')[1], 10);
    }
}

// Executar
autoOptimize(agrupador, maxIter, 70).catch(console.error);
