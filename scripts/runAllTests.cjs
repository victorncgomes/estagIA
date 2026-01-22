/**
 * estagIA - Runner de Testes Automatizados
 * 
 * Executa todas as suites de teste e gera relatório.
 * 
 * Uso: node scripts/runAllTests.cjs [--suite=remicao] [--dry-run]
 */

const fs = require('fs');
const path = require('path');

// Paths
const SUITES_DIR = path.join(__dirname, '..', 'tests', 'suites');
const TEXTOS_DIR = path.join(__dirname, '..', 'knowledge', 'decisoes', 'textos_completos');
const MODELOS_INDEX = path.join(__dirname, '..', 'knowledge', 'decisoes', 'modelos_completos_index.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'tests', 'reports');

// Carregar env
const envPath = path.join(__dirname, '..', 'backend', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const geminiKey = envContent.match(/GEMINI_API_KEY=([^\r\n]+)/)?.[1]?.trim();

// Métricas
function calcularMetricas(gerado, metricas) {
    const lower = gerado.toLowerCase();
    const resultado = {
        score: 0,
        detalhes: {}
    };

    // Verificar estrutura
    let estruturaScore = 0;
    const estrutura = metricas.estrutura_obrigatoria || ['vistos', 'relatados', 'isso_posto', 'pri'];

    for (const elem of estrutura) {
        const presente = lower.includes(elem.replace('_', ' '));
        resultado.detalhes[elem] = presente;
        if (presente) estruturaScore += 25;
    }
    resultado.detalhes.estrutura_score = estruturaScore;

    // Verificar tamanho
    const tamanhoOk =
        gerado.length >= (metricas.tamanho_minimo || 1000) &&
        gerado.length <= (metricas.tamanho_maximo || 10000);
    resultado.detalhes.tamanho = gerado.length;
    resultado.detalhes.tamanho_ok = tamanhoOk;

    // Score final
    resultado.score = (estruturaScore * 0.6) + (tamanhoOk ? 40 : 0);
    resultado.aprovado = resultado.score >= (metricas.score_minimo || 75);

    return resultado;
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

// Carregar modelos de exemplo
function carregarModelosExemplo(agrupador, limite = 2) {
    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
    const modelos = indice.modelos.filter(m => m.agrupador === agrupador).slice(0, limite);

    return modelos.map(m => {
        const textoPath = path.join(TEXTOS_DIR, m.arquivo_texto);
        return fs.existsSync(textoPath) ? fs.readFileSync(textoPath, 'utf-8') : '';
    }).filter(t => t.length > 100);
}

// Construir prompt
function construirPrompt(caso, modelosExemplo) {
    let prompt = `# SISTEMA DE REDAÇÃO JURÍDICA

## REGRAS
- ESTRUTURA: Vistos → Relatório → Relatados. → Fundamentação → Isso posto, → P.R.I.
- Tamanho: Entre 1500 e 6000 caracteres
- Linguagem formal jurídica

## EXEMPLOS
`;

    modelosExemplo.forEach((m, i) => {
        prompt += `### Exemplo ${i + 1}\n\`\`\`\n${m.substring(0, 3000)}\n\`\`\`\n\n`;
    });

    prompt += `---

## CASO
Matéria: ${caso.agrupador}
Insumos: ${caso.insumos}
Orientação: ${caso.orientacao}

GERE A DECISÃO COMPLETA.`;

    return prompt;
}

// Executar um caso de teste
async function executarCaso(caso, modelosExemplo, metricas) {
    const inicio = Date.now();

    try {
        const prompt = construirPrompt(caso, modelosExemplo);
        const gerado = await gerarDecisao(prompt);
        const tempo = Date.now() - inicio;

        const resultado = calcularMetricas(gerado, metricas);

        return {
            id: caso.id,
            nome: caso.nome,
            sucesso: resultado.aprovado,
            score: resultado.score,
            tempo,
            tamanho: gerado.length,
            detalhes: resultado.detalhes,
            preview: gerado.substring(0, 200)
        };
    } catch (error) {
        return {
            id: caso.id,
            nome: caso.nome,
            sucesso: false,
            erro: error.message
        };
    }
}

// Executar suite
async function executarSuite(suiteFile) {
    const suite = JSON.parse(fs.readFileSync(suiteFile, 'utf-8'));
    console.log(`\n${'═'.repeat(55)}`);
    console.log(`📋 Suite: ${suite.suite.toUpperCase()}`);
    console.log(`   ${suite.descricao}`);
    console.log('═'.repeat(55));

    // Carregar modelos de exemplo
    const modelosExemplo = carregarModelosExemplo(suite.suite);
    if (modelosExemplo.length === 0) {
        console.log('⚠️ Sem modelos de exemplo');
        return { suite: suite.suite, casos: [], resumo: { total: 0, sucesso: 0 } };
    }

    console.log(`📚 ${modelosExemplo.length} modelos de exemplo carregados\n`);

    const resultados = [];

    for (const caso of suite.casos) {
        console.log(`🔄 [${caso.id}] ${caso.nome}`);

        const resultado = await executarCaso(caso, modelosExemplo, suite.metricas);
        resultados.push(resultado);

        const status = resultado.sucesso ? '✅' : '❌';
        console.log(`   ${status} Score: ${resultado.score?.toFixed(0) || 'N/A'}/100 | ${resultado.tamanho || 0} chars`);

        // Delay entre casos
        await new Promise(r => setTimeout(r, 1000));
    }

    // Resumo
    const sucesso = resultados.filter(r => r.sucesso).length;
    console.log(`\n📊 Resumo: ${sucesso}/${resultados.length} aprovados`);

    return {
        suite: suite.suite,
        casos: resultados,
        resumo: {
            total: resultados.length,
            sucesso,
            taxa: ((sucesso / resultados.length) * 100).toFixed(1)
        }
    };
}

// Main
async function main() {
    console.log('═══════════════════════════════════════════════════════');
    console.log('🧪 estagIA - Runner de Testes Automatizados');
    console.log('═══════════════════════════════════════════════════════');

    // Parse args
    const args = process.argv.slice(2);
    let suiteFiltro = null;
    let dryRun = false;

    for (const arg of args) {
        if (arg.startsWith('--suite=')) suiteFiltro = arg.split('=')[1];
        if (arg === '--dry-run') dryRun = true;
    }

    // Listar suites
    const suites = fs.readdirSync(SUITES_DIR)
        .filter(f => f.endsWith('.test.json'))
        .filter(f => !suiteFiltro || f.includes(suiteFiltro));

    console.log(`\n📁 ${suites.length} suites encontradas`);

    if (dryRun) {
        console.log('\n🔍 Modo dry-run: apenas listando casos');
        for (const suite of suites) {
            const data = JSON.parse(fs.readFileSync(path.join(SUITES_DIR, suite), 'utf-8'));
            console.log(`\n📋 ${data.suite}: ${data.casos.length} casos`);
            data.casos.forEach(c => console.log(`   - [${c.id}] ${c.nome}`));
        }
        return;
    }

    // Executar suites
    const resultados = [];

    for (const suiteFile of suites) {
        const resultado = await executarSuite(path.join(SUITES_DIR, suiteFile));
        resultados.push(resultado);
    }

    // Relatório final
    console.log('\n' + '═'.repeat(55));
    console.log('📊 RELATÓRIO FINAL');
    console.log('═'.repeat(55));

    let totalCasos = 0;
    let totalSucesso = 0;

    for (const r of resultados) {
        console.log(`\n${r.suite}: ${r.resumo.sucesso}/${r.resumo.total} (${r.resumo.taxa}%)`);
        totalCasos += r.resumo.total;
        totalSucesso += r.resumo.sucesso;
    }

    const taxaGlobal = ((totalSucesso / totalCasos) * 100).toFixed(1);
    console.log(`\n🎯 TOTAL: ${totalSucesso}/${totalCasos} (${taxaGlobal}%)`);

    // Salvar relatório
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const relatorio = {
        dataExecucao: new Date().toISOString(),
        totalCasos,
        totalSucesso,
        taxaGlobal,
        suites: resultados
    };

    const relatorioPath = path.join(OUTPUT_DIR, `report_${Date.now()}.json`);
    fs.writeFileSync(relatorioPath, JSON.stringify(relatorio, null, 2));
    console.log(`\n💾 Relatório salvo: ${relatorioPath}`);
}

main().catch(console.error);
