/**
 * ACE Linguagem - Reflector
 * 
 * Analisa qualidade das decisões geradas e identifica padrões.
 * Papel do Reflector no framework ACE:
 * - Compara resultado com golden truth
 * - Identifica pontos fortes e fracos
 * - Extrai trechos bem-sucedidos
 * - Detecta antipadrões
 * 
 * Uso:
 *   node .agent/skills/ace-linguagem/scripts/reflector.cjs --input=knowledge/ace/resultados/benchmark_remicao_xxx.json
 */

const fs = require('fs');
const path = require('path');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const RUBRICAS_PATH = path.join(__dirname, '..', 'resources', 'rubricas.json');
const SKILLBOOK_PATH = path.join(ROOT, 'knowledge', 'ace', 'skillbook.json');

const rubricas = JSON.parse(fs.readFileSync(RUBRICAS_PATH, 'utf-8'));

// ============================================
// ANÁLISE DETALHADA
// ============================================
function analisarResultado(resultado) {
    const analise = {
        pontosFotes: [],
        pontosFracos: [],
        padroesExtraidos: [],
        antipadroesDetectados: [],
        recomendacoes: []
    };

    const { metricas, gerado, goldenLength, geradoLength } = resultado;

    if (!metricas) return analise;

    // Analisar Estrutura
    const estrutura = metricas.estrutura.detalhes;
    if (estrutura.vistos && estrutura.relatorio && estrutura.fundamentacao && estrutura.dispositivo) {
        analise.pontosFotes.push({
            categoria: 'estrutura',
            descricao: 'Estrutura Art. 489 CPC completa',
            score: metricas.estrutura.score
        });
    } else {
        const faltando = Object.entries(estrutura).filter(([_, v]) => !v).map(([k]) => k);
        analise.pontosFracos.push({
            categoria: 'estrutura',
            descricao: `Elementos faltando: ${faltando.join(', ')}`,
            score: metricas.estrutura.score
        });

        faltando.forEach(elem => {
            analise.antipadroesDetectados.push({
                tipo: 'estrutura',
                pattern: `Omitir elemento '${elem}' da estrutura`,
                severity: 'medium'
            });
        });
    }

    // Analisar Citações
    if (metricas.citacoes.score >= 20) {
        analise.pontosFotes.push({
            categoria: 'citacoes',
            descricao: 'Citações em formato adequado',
            score: metricas.citacoes.score
        });
    } else if (metricas.citacoes.score > 0) {
        analise.pontosFracos.push({
            categoria: 'citacoes',
            descricao: 'Citações incompletas ou mal formatadas',
            score: metricas.citacoes.score
        });
    }

    // Analisar Tamanho
    const ratio = metricas.tamanho.ratio;
    if (ratio >= 0.7 && ratio <= 1.3) {
        analise.pontosFotes.push({
            categoria: 'tamanho',
            descricao: `Tamanho adequado (${(ratio * 100).toFixed(0)}% do golden)`,
            score: metricas.tamanho.score
        });
    } else {
        const direcao = ratio < 0.7 ? 'muito curto' : 'muito longo';
        analise.pontosFracos.push({
            categoria: 'tamanho',
            descricao: `Texto ${direcao} (${(ratio * 100).toFixed(0)}% do golden)`,
            score: metricas.tamanho.score
        });

        analise.recomendacoes.push({
            categoria: 'tamanho',
            acao: ratio < 0.7
                ? 'Aumentar detalhamento do relatório e fundamentação'
                : 'Reduzir verbosidade, focar no essencial'
        });
    }

    // Analisar Linguagem
    if (metricas.linguagem.score >= 8) {
        analise.pontosFotes.push({
            categoria: 'linguagem',
            descricao: 'Linguagem técnico-jurídica adequada',
            score: metricas.linguagem.score
        });
    }

    return analise;
}

// ============================================
// EXTRAIR PADRÕES BEM-SUCEDIDOS
// ============================================
function extrairPadroes(resultados) {
    const padroes = [];

    // Filtrar resultados com score alto
    const bons = resultados.filter(r => r.score >= 70 && !r.error);

    bons.forEach(r => {
        const gerado = r.gerado || '';

        // Extrair padrões de abertura
        const aberturaMatch = gerado.match(/^(.{0,200})/);
        if (aberturaMatch && aberturaMatch[1].toLowerCase().includes('vistos')) {
            padroes.push({
                tipo: 'abertura',
                pattern: 'Iniciar com "Vistos etc." seguido de identificação do caso',
                exemplo: aberturaMatch[1].substring(0, 100),
                confidence: 0.85
            });
        }

        // Extrair transições
        if (gerado.toLowerCase().includes('relatados.')) {
            padroes.push({
                tipo: 'transicao',
                pattern: 'Usar "Relatados." como marcador entre relatório e fundamentação',
                confidence: 0.90
            });
        }

        if (gerado.toLowerCase().includes('isso posto,')) {
            padroes.push({
                tipo: 'transicao',
                pattern: 'Usar "Isso posto," como marcador antes do dispositivo',
                confidence: 0.90
            });
        }
    });

    // Deduplica padrões
    const uniquePatterns = [];
    const seen = new Set();
    padroes.forEach(p => {
        if (!seen.has(p.pattern)) {
            seen.add(p.pattern);
            uniquePatterns.push(p);
        }
    });

    return uniquePatterns;
}

// ============================================
// GERAR RELATÓRIO DE REFLEXÃO
// ============================================
function gerarRelatorio(benchmark) {
    const analises = benchmark.resultados
        .filter(r => !r.error)
        .map(r => ({
            modelo: r.modelo,
            score: r.score,
            ...analisarResultado(r)
        }));

    const padroes = extrairPadroes(benchmark.resultados);

    // Agregar antipadrões
    const antipatterns = {};
    analises.forEach(a => {
        a.antipadroesDetectados.forEach(ap => {
            const key = ap.pattern;
            if (!antipatterns[key]) {
                antipatterns[key] = { ...ap, occurrences: 0 };
            }
            antipatterns[key].occurrences++;
        });
    });

    // Gerar recomendações gerais
    const recomendacoes = [];

    if (benchmark.stats.scoreMedia < 60) {
        recomendacoes.push('Score médio baixo - revisar exemplos few-shot');
    }

    const estruturaFalhas = analises.filter(a =>
        a.pontosFracos.some(p => p.categoria === 'estrutura')
    ).length;

    if (estruturaFalhas > analises.length * 0.5) {
        recomendacoes.push('Mais de 50% com falhas estruturais - enfatizar Art. 489 CPC no prompt');
    }

    return {
        dataAnalise: new Date().toISOString(),
        benchmarkRef: benchmark.dataExecucao,
        agrupador: benchmark.agrupador,
        statsOriginal: benchmark.stats,
        analises,
        padroesExtraidos: padroes,
        antipadroesAgrupados: Object.values(antipatterns),
        recomendacoesGerais: recomendacoes
    };
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);
    let inputPath = null;

    for (const arg of args) {
        if (arg.startsWith('--input=')) {
            inputPath = arg.split('=')[1];
        }
    }

    if (!inputPath) {
        // Buscar último benchmark
        const resultadosDir = path.join(ROOT, 'knowledge', 'ace', 'resultados');
        if (fs.existsSync(resultadosDir)) {
            const files = fs.readdirSync(resultadosDir)
                .filter(f => f.startsWith('benchmark_'))
                .sort()
                .reverse();

            if (files.length > 0) {
                inputPath = path.join(resultadosDir, files[0]);
            }
        }
    }

    if (!inputPath || !fs.existsSync(inputPath)) {
        console.log('❌ Arquivo de benchmark não encontrado');
        console.log('Uso: node reflector.cjs --input=path/to/benchmark.json');
        process.exit(1);
    }

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🔍 ACE Reflector - Análise de Qualidade');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log(`📂 Input: ${inputPath}\n`);

    const benchmark = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
    const relatorio = gerarRelatorio(benchmark);

    // Exibir resumo
    console.log('📊 RESUMO DA ANÁLISE');
    console.log('─────────────────────────────────────────────────────');
    console.log(`   Agrupador: ${relatorio.agrupador}`);
    console.log(`   Score Médio: ${relatorio.statsOriginal.scoreMedia.toFixed(1)}`);
    console.log(`   Testes Analisados: ${relatorio.analises.length}`);

    console.log('\n✅ PONTOS FORTES COMUNS');
    console.log('─────────────────────────────────────────────────────');
    const pontosFortes = {};
    relatorio.analises.forEach(a => {
        a.pontosFotes.forEach(p => {
            pontosFortes[p.descricao] = (pontosFortes[p.descricao] || 0) + 1;
        });
    });
    Object.entries(pontosFortes)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .forEach(([desc, count]) => {
            console.log(`   • ${desc} (${count}x)`);
        });

    console.log('\n❌ PONTOS FRACOS COMUNS');
    console.log('─────────────────────────────────────────────────────');
    const pontosFracos = {};
    relatorio.analises.forEach(a => {
        a.pontosFracos.forEach(p => {
            pontosFracos[p.descricao] = (pontosFracos[p.descricao] || 0) + 1;
        });
    });
    Object.entries(pontosFracos)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .forEach(([desc, count]) => {
            console.log(`   • ${desc} (${count}x)`);
        });

    console.log('\n📚 PADRÕES EXTRAÍDOS');
    console.log('─────────────────────────────────────────────────────');
    relatorio.padroesExtraidos.forEach(p => {
        console.log(`   • [${p.tipo}] ${p.pattern}`);
    });

    if (relatorio.recomendacoesGerais.length > 0) {
        console.log('\n💡 RECOMENDAÇÕES');
        console.log('─────────────────────────────────────────────────────');
        relatorio.recomendacoesGerais.forEach(r => {
            console.log(`   → ${r}`);
        });
    }

    // Salvar relatório
    const outputPath = inputPath.replace('benchmark_', 'reflexao_');
    fs.writeFileSync(outputPath, JSON.stringify(relatorio, null, 2));
    console.log(`\n💾 Relatório salvo em: ${outputPath}`);

    return relatorio;
}

module.exports = { analisarResultado, extrairPadroes, gerarRelatorio };

if (require.main === module) {
    main().catch(console.error);
}
