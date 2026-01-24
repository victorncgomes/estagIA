/**
 * ACE Linguagem - Run Benchmark
 * 
 * Executor de benchmarks para avaliação de decisões judiciais.
 * Baseado no framework ACE (Agentic Context Engineering) da Stanford.
 * 
 * Uso:
 *   node .agent/skills/ace-linguagem/scripts/runBenchmark.cjs --agrupador=remicao --limit=3
 *   node .agent/skills/ace-linguagem/scripts/runBenchmark.cjs --agrupador=progressao --epochs=3 --compare
 */

const fs = require('fs');
const path = require('path');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const KNOWLEDGE_DIR = path.join(ROOT, 'knowledge');
const MODELOS_INDEX = path.join(KNOWLEDGE_DIR, 'decisoes', 'modelos_completos_index.json');
const TEXTOS_DIR = path.join(KNOWLEDGE_DIR, 'decisoes', 'textos_completos');
const SKILLBOOK_PATH = path.join(KNOWLEDGE_DIR, 'ace', 'skillbook.json');
const RESULTADOS_DIR = path.join(KNOWLEDGE_DIR, 'ace', 'resultados');
const RUBRICAS_PATH = path.join(__dirname, '..', 'resources', 'rubricas.json');
const CONFIG_PATH = path.join(__dirname, '..', 'resources', 'config.json');

// ============================================
// CARREGAR CONFIGURAÇÕES
// ============================================
function loadEnv() {
    const envPath = path.join(ROOT, 'backend', '.env');
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8');
        content.split('\n').forEach(line => {
            const [key, ...vals] = line.split('=');
            if (key && vals.length) {
                process.env[key.trim()] = vals.join('=').trim();
            }
        });
    }
}

loadEnv();

const GEMINI_KEY = process.env.GEMINI_API_KEY;
const rubricas = JSON.parse(fs.readFileSync(RUBRICAS_PATH, 'utf-8'));
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));

// ============================================
// SKILLBOOK
// ============================================
function loadSkillbook() {
    if (fs.existsSync(SKILLBOOK_PATH)) {
        return JSON.parse(fs.readFileSync(SKILLBOOK_PATH, 'utf-8'));
    }
    return { skills: [], antipatterns: [], stats: {} };
}

function formatSkillsForPrompt(skillbook) {
    if (!skillbook.skills || skillbook.skills.length === 0) return '';

    const helpfulSkills = skillbook.skills
        .filter(s => s.type === 'helpful' && s.confidence >= 0.7)
        .map(s => `- ${s.pattern}`)
        .join('\n');

    const harmfulPatterns = skillbook.antipatterns
        .filter(a => a.severity === 'high')
        .map(a => `- EVITAR: ${a.pattern}`)
        .join('\n');

    if (!helpfulSkills && !harmfulPatterns) return '';

    return `
## SKILLS APRENDIDAS (SEGUIR ESTRITAMENTE)
${helpfulSkills}

${harmfulPatterns ? `## ANTIPADRÕES (EVITAR)\n${harmfulPatterns}` : ''}
`;
}

// ============================================
// MÉTRICAS
// ============================================
function calcularMetricas(gerado, golden) {
    const lower = gerado.toLowerCase();
    const result = {
        estrutura: { score: 0, detalhes: {} },
        citacoes: { score: 0, detalhes: {} },
        tamanho: { score: 0, ratio: 0 },
        linguagem: { score: 0, detalhes: {} },
        total: 0
    };

    // Estrutura Art. 489 CPC (40%)
    const estrutura = rubricas.estruturaArt489.criterios;
    for (const [key, crit] of Object.entries(estrutura)) {
        const regex = new RegExp(crit.regex, 'i');
        const match = regex.test(lower);
        result.estrutura.detalhes[key] = match;
        if (match) result.estrutura.score += crit.pontos;
    }

    // Citações ABNT (30%)
    const citacoes = rubricas.citacoesABNT.criterios;
    for (const [key, crit] of Object.entries(citacoes)) {
        if (crit.regex) {
            const regex = new RegExp(crit.regex, 'gi');
            const matches = gerado.match(regex) || [];
            result.citacoes.detalhes[key] = matches.length;
            if (matches.length > 0) result.citacoes.score += crit.pontos;
        }
    }

    // Tamanho (20%)
    const ratio = gerado.length / golden.length;
    result.tamanho.ratio = ratio;
    const tamanhoConfig = rubricas.tamanho;
    if (ratio >= tamanhoConfig.ideal.min && ratio <= tamanhoConfig.ideal.max) {
        result.tamanho.score = tamanhoConfig.pontuacao.ideal;
    } else if (ratio >= tamanhoConfig.aceitavel.min && ratio <= tamanhoConfig.aceitavel.max) {
        result.tamanho.score = tamanhoConfig.pontuacao.aceitavel;
    } else {
        result.tamanho.score = tamanhoConfig.pontuacao.fora;
    }

    // Linguagem (10%)
    const linguagem = rubricas.linguagem.criterios;
    for (const [key, crit] of Object.entries(linguagem)) {
        const found = crit.indicadores.filter(ind => lower.includes(ind.toLowerCase()));
        result.linguagem.detalhes[key] = found.length;
        if (found.length >= 2) result.linguagem.score += crit.pontos;
    }

    // Score Total Ponderado
    result.total = (
        result.estrutura.score * rubricas.estruturaArt489.peso +
        result.citacoes.score * rubricas.citacoesABNT.peso +
        result.tamanho.score * rubricas.tamanho.peso +
        result.linguagem.score * rubricas.linguagem.peso
    );

    return result;
}

// ============================================
// GERAÇÃO VIA API
// ============================================
async function gerarDecisao(prompt, skillbook) {
    const skillsText = formatSkillsForPrompt(skillbook);
    const fullPrompt = skillsText + '\n\n' + prompt;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: fullPrompt }] }],
                generationConfig: { maxOutputTokens: 8000 }
            })
        }
    );

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`API Error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// ============================================
// CONSTRUIR PROMPT
// ============================================
function construirPrompt(modelosExemplo, goldenLength, orientacao, agrupador) {
    const exemplos = modelosExemplo.map((m, i) => {
        const texto = fs.readFileSync(path.join(TEXTOS_DIR, m.arquivo_texto), 'utf-8');
        return `### EXEMPLO ${i + 1} - ${m.nome}\n\`\`\`\n${texto.substring(0, 5000)}\n\`\`\``;
    }).join('\n\n');

    return `# SISTEMA DE REDAÇÃO JURÍDICA - EXECUÇÃO PENAL

## REGRAS CRÍTICAS (OBRIGATÓRIAS)
1. A decisão deve ter ENTRE ${Math.round(goldenLength * 0.8)} e ${Math.round(goldenLength * 1.2)} caracteres
2. ESTRUTURA OBRIGATÓRIA conforme Art. 489 CPC:
   - Iniciar com "Vistos etc."
   - Relatório detalhado dos fatos
   - Marcar fim do relatório com "Relatados."
   - Fundamentação jurídica
   - Transição com "Isso posto,"
   - Dispositivo final
   - Encerrar com "P.R.I."

3. Citações doutrinárias devem seguir ABNT:
   - SOBRENOME, Nome. Título em itálico. Editora, ano, p. X.

4. Use linguagem técnico-jurídica formal

## EXEMPLOS REAIS (SIGA ESTE ESTILO EXATAMENTE)
${exemplos}

---

## CASO PARA REDIGIR
Matéria: ${agrupador}
Orientação: ${orientacao}

GERE A DECISÃO COMPLETA seguindo RIGOROSAMENTE o estilo, estrutura e tamanho dos exemplos.`;
}

// ============================================
// BENCHMARK
// ============================================
async function executarBenchmark(agrupador, options = {}) {
    const { limit = 5, useSkillbook = true, verbose = true } = options;

    console.log('\n═══════════════════════════════════════════════════════');
    console.log(`📊 ACE Benchmark - ${agrupador.toUpperCase()}`);
    console.log('═══════════════════════════════════════════════════════\n');

    // Carregar índice e skillbook
    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
    const skillbook = useSkillbook ? loadSkillbook() : { skills: [], antipatterns: [] };

    // Filtrar modelos do agrupador
    const modelos = indice.modelos.filter(m => m.agrupador === agrupador);
    console.log(`📁 ${modelos.length} modelos disponíveis para ${agrupador}`);

    if (modelos.length < 3) {
        console.log('❌ Mínimo de 3 modelos necessários (2 exemplos + 1 teste)');
        return null;
    }

    const testCount = Math.min(limit, modelos.length - 2);
    const resultados = [];

    for (let i = 0; i < testCount; i++) {
        const modeloTeste = modelos[i];
        const modelosExemplo = modelos.filter((_, idx) => idx !== i).slice(0, 2);

        // Carregar golden truth
        const golden = fs.readFileSync(path.join(TEXTOS_DIR, modeloTeste.arquivo_texto), 'utf-8');

        // Construir prompt
        const orientacao = modeloTeste.resultado === 'defere' ? 'Deferir o pedido' :
            modeloTeste.resultado === 'indefere' ? 'Indeferir o pedido' : 'Avaliar o caso';
        const prompt = construirPrompt(modelosExemplo, golden.length, orientacao, agrupador);

        if (verbose) {
            console.log(`\n🔄 Teste ${i + 1}/${testCount}: ${modeloTeste.nome}`);
            console.log(`   Golden: ${golden.length} chars`);
        }

        const inicio = Date.now();

        try {
            const gerado = await gerarDecisao(prompt, skillbook);
            const tempo = (Date.now() - inicio) / 1000;
            const metricas = calcularMetricas(gerado, golden);

            resultados.push({
                modelo: modeloTeste.nome,
                arquivo: modeloTeste.arquivo,
                goldenLength: golden.length,
                geradoLength: gerado.length,
                tempo,
                metricas,
                score: metricas.total,
                gerado: gerado.substring(0, 1000) // Preview
            });

            if (verbose) {
                console.log(`   ✅ Score: ${metricas.total.toFixed(1)} | Tempo: ${tempo.toFixed(1)}s`);
                console.log(`      Estrutura: ${metricas.estrutura.score}/100 | Citações: ${metricas.citacoes.score}/30`);
                console.log(`      Tamanho: ${(metricas.tamanho.ratio * 100).toFixed(0)}% | Linguagem: ${metricas.linguagem.score}/10`);
            }

            // Rate limiting
            await new Promise(r => setTimeout(r, 1000));

        } catch (error) {
            console.log(`   ❌ Erro: ${error.message}`);
            resultados.push({
                modelo: modeloTeste.nome,
                error: error.message,
                score: 0
            });
        }
    }

    // Calcular estatísticas
    const scores = resultados.filter(r => !r.error).map(r => r.score);
    const stats = {
        total: resultados.length,
        sucesso: scores.length,
        falha: resultados.length - scores.length,
        scoreMedia: scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0,
        scoreMelhor: scores.length > 0 ? Math.max(...scores) : 0,
        scorePior: scores.length > 0 ? Math.min(...scores) : 0
    };

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📈 RESULTADO FINAL');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`\n🎯 Score Médio: ${stats.scoreMedia.toFixed(1)}/100`);
    console.log(`   Melhor: ${stats.scoreMelhor.toFixed(1)} | Pior: ${stats.scorePior.toFixed(1)}`);
    console.log(`   Testes: ${stats.sucesso}/${stats.total} sucesso`);

    // Salvar resultado
    const resultado = {
        dataExecucao: new Date().toISOString(),
        agrupador,
        config: { limit, useSkillbook },
        stats,
        resultados
    };

    if (!fs.existsSync(RESULTADOS_DIR)) {
        fs.mkdirSync(RESULTADOS_DIR, { recursive: true });
    }

    const outputPath = path.join(RESULTADOS_DIR, `benchmark_${agrupador}_${Date.now()}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(resultado, null, 2));
    console.log(`\n💾 Resultado salvo em: ${outputPath}`);

    return resultado;
}

// ============================================
// MODO COMPARAÇÃO
// ============================================
async function executarComparacao(agrupador, options = {}) {
    console.log('\n🔬 MODO COMPARAÇÃO: Baseline vs ACE\n');

    // Baseline (sem skillbook)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 BASELINE (sem Skillbook)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    const baseline = await executarBenchmark(agrupador, { ...options, useSkillbook: false });

    // ACE (com skillbook)
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 ACE (com Skillbook)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    const ace = await executarBenchmark(agrupador, { ...options, useSkillbook: true });

    // Comparação
    if (baseline && ace) {
        const diff = ace.stats.scoreMedia - baseline.stats.scoreMedia;
        const diffPercent = ((diff / baseline.stats.scoreMedia) * 100).toFixed(1);

        console.log('\n═══════════════════════════════════════════════════════');
        console.log('⚖️  COMPARAÇÃO');
        console.log('═══════════════════════════════════════════════════════');
        console.log(`   Baseline: ${baseline.stats.scoreMedia.toFixed(1)}`);
        console.log(`   ACE:      ${ace.stats.scoreMedia.toFixed(1)}`);
        console.log(`   Melhoria: ${diff >= 0 ? '+' : ''}${diff.toFixed(1)} (${diff >= 0 ? '+' : ''}${diffPercent}%)`);
    }
}

// ============================================
// MAIN
// ============================================
async function main() {
    // Parse argumentos
    const args = process.argv.slice(2);
    let agrupador = config.defaults.limit > 0 ? 'remicao' : 'remicao';
    let limit = config.defaults.limit;
    let compare = false;
    let epochs = 1;

    for (const arg of args) {
        if (arg.startsWith('--agrupador=')) agrupador = arg.split('=')[1];
        if (arg.startsWith('--limit=')) limit = parseInt(arg.split('=')[1], 10);
        if (arg.startsWith('--epochs=')) epochs = parseInt(arg.split('=')[1], 10);
        if (arg === '--compare') compare = true;
    }

    if (!GEMINI_KEY) {
        console.error('❌ GEMINI_API_KEY não encontrada no .env');
        process.exit(1);
    }

    console.log(`🔑 API Key: ${GEMINI_KEY.substring(0, 10)}...`);
    console.log(`📁 Agrupador: ${agrupador}`);
    console.log(`🔢 Limit: ${limit}`);
    console.log(`🔄 Epochs: ${epochs}`);
    console.log(`⚖️  Compare: ${compare}`);

    if (compare) {
        await executarComparacao(agrupador, { limit });
    } else {
        for (let epoch = 1; epoch <= epochs; epoch++) {
            if (epochs > 1) {
                console.log(`\n\n🔄 EPOCH ${epoch}/${epochs}`);
                console.log('═══════════════════════════════════════════════════════\n');
            }
            await executarBenchmark(agrupador, { limit });
        }
    }
}

main().catch(console.error);
