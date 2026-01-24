/**
 * RAG-ACE Optimizer v2.0 - Benchmark Engine
 * 
 * Motor de benchmarks massivos com:
 * - Geração de casos sintéticos
 * - Testes com checkpoint/resume
 * - Medição de taxa de alucinação
 * - Otimização de configuração RAG
 * 
 * Uso:
 *   node .agent/skills/rag-ace-optimizer/scripts/benchmarkEngine.cjs --tema=remicao --testes=100
 *   node .agent/skills/rag-ace-optimizer/scripts/benchmarkEngine.cjs --all --testes=50
 *   node .agent/skills/rag-ace-optimizer/scripts/benchmarkEngine.cjs --resume
 */

const fs = require('fs');
const path = require('path');
const { detectarTema, TEMAS_CONFIG } = require('./themeIdentifier.cjs');
const { detectarAlucinacoes } = require('./hallucinationDetector.cjs');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const KNOWLEDGE_DIR = path.join(ROOT, 'knowledge');
const MODELOS_INDEX = path.join(KNOWLEDGE_DIR, 'decisoes', 'modelos_completos_index.json');
const TEXTOS_DIR = path.join(KNOWLEDGE_DIR, 'decisoes', 'textos_completos');
const THEME_INDEX = path.join(KNOWLEDGE_DIR, 'ace-v2', 'theme_index.json');
const CHECKPOINT_DIR = path.join(ROOT, '.agent', 'skills', 'rag-ace-optimizer', 'data', 'checkpoints');
const RESULTS_DIR = path.join(KNOWLEDGE_DIR, 'ace-v2', 'benchmark_results');
const SKILLBOOK_PATH = path.join(KNOWLEDGE_DIR, 'ace-v2', 'skillbook_evolutivo.json');

// Carregar env
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

// ============================================
// GERADOR DE CASOS SINTÉTICOS
// ============================================
const NOMES = ['João da Silva', 'Maria dos Santos', 'José Oliveira', 'Ana Pereira', 'Carlos Souza'];
const CRIMES_COMUNS = ['furto', 'roubo', 'tráfico', 'homicídio', 'estelionato'];
const REGIMES = ['fechado', 'semiaberto', 'aberto'];

function gerarCasoSintetico(tema, modeloBase = null) {
    const caso = {
        id: `caso_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        tema,
        timestamp: new Date().toISOString()
    };

    // Dados do réu
    caso.reu = {
        nome: NOMES[Math.floor(Math.random() * NOMES.length)],
        crime: modeloBase?.crime || CRIMES_COMUNS[Math.floor(Math.random() * CRIMES_COMUNS.length)],
        regime: REGIMES[Math.floor(Math.random() * REGIMES.length)],
        reincidencia: Math.random() > 0.7 ? 'reincidente' : 'primario'
    };

    // Pena (1-30 anos)
    caso.pena = {
        anos: Math.floor(Math.random() * 20) + 1,
        meses: Math.floor(Math.random() * 12)
    };

    // Tempo cumprido (10-80% da pena)
    const penaTotalDias = (caso.pena.anos * 365) + (caso.pena.meses * 30);
    const percentualCumprido = 0.1 + (Math.random() * 0.7);
    caso.tempo_cumprido = Math.floor(penaTotalDias * percentualCumprido);

    // Gabarito baseado no tema
    caso.gabarito = gerarGabarito(tema, caso);

    return caso;
}

function gerarGabarito(tema, caso) {
    const gabarito = {
        tema,
        citacoes_obrigatorias: [],
        base_legal: [],
        fracao_esperada: null,
        conclusao_esperada: null
    };

    switch (tema) {
        case 'remicao':
            gabarito.base_legal = ['LEP_Art126', 'LEP_Art127'];
            gabarito.fracao_esperada = '3/1'; // 3 dias trabalhados = 1 dia remido
            gabarito.citacoes_obrigatorias = ['remição', 'trabalho', 'estudo'];
            gabarito.conclusao_esperada = 'deferir'; // maioria é deferimento
            break;

        case 'progressao':
            gabarito.base_legal = ['LEP_Art112'];
            if (caso.reu.reincidencia === 'reincidente') {
                gabarito.fracao_esperada = '40%';
            } else {
                gabarito.fracao_esperada = '16%';
            }
            gabarito.citacoes_obrigatorias = ['progressão', 'regime'];
            break;

        case 'livramento':
            gabarito.base_legal = ['CP_Art83'];
            gabarito.fracao_esperada = caso.reu.reincidencia === 'reincidente' ? '2/3' : '1/3';
            gabarito.citacoes_obrigatorias = ['livramento', 'condicional'];
            break;

        case 'retificacao':
            gabarito.base_legal = ['LEP_Art66', 'CPC_Art494'];
            gabarito.citacoes_obrigatorias = ['retificação', 'erro', 'guia', 'GEP'];
            gabarito.conclusao_esperada = null; // pode ser deferir ou indeferir
            break;

        case 'unificacao':
            gabarito.base_legal = ['LEP_Art111', 'CP_Art75'];
            gabarito.citacoes_obrigatorias = ['unificação', 'penas', 'soma'];
            break;

        case 'falta_grave':
            gabarito.base_legal = ['LEP_Art50', 'LEP_Art52'];
            gabarito.citacoes_obrigatorias = ['falta', 'grave', 'disciplinar'];
            break;

        case 'indulto':
            gabarito.base_legal = ['CF_Art84_XII'];
            gabarito.citacoes_obrigatorias = ['indulto', 'decreto', 'comutação'];
            break;

        case 'prescricao':
            gabarito.base_legal = ['CP_Art109', 'CP_Art110'];
            gabarito.citacoes_obrigatorias = ['prescrição', 'extinção', 'punibilidade'];
            break;

        default:
            gabarito.base_legal = ['LEP'];
            gabarito.citacoes_obrigatorias = [];
            break;
    }

    return gabarito;
}

// ============================================
// CONTEXTO RAG
// ============================================
function montarContextoRAG(tema, config = {}) {
    const maxModelos = config.max_modelos || 4;  // Aumentado de 2 para 4
    const maxTokens = config.max_tokens || 20000; // Aumentado para mais contexto

    let contexto = '';
    let tokensAprox = 0;

    // Carregar modelos do tema
    if (fs.existsSync(MODELOS_INDEX)) {
        const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
        const modelosTema = indice.modelos.filter(m =>
            TEMAS_CONFIG[tema]?.agrupadores?.includes(m.agrupador)
        );

        const modelosSelecionados = modelosTema.slice(0, maxModelos);

        for (const modelo of modelosSelecionados) {
            const textoPath = path.join(TEXTOS_DIR, modelo.arquivo_texto);
            if (fs.existsSync(textoPath)) {
                const texto = fs.readFileSync(textoPath, 'utf-8');
                const textoTruncado = texto.substring(0, 3000);

                contexto += `\n## MODELO: ${modelo.nome}\n${textoTruncado}\n\n`;
                tokensAprox += textoTruncado.length / 4;

                if (tokensAprox > maxTokens) break;
            }
        }
    }

    // Adicionar base legal
    const baseLegal = TEMAS_CONFIG[tema]?.artigos_lei || [];
    if (baseLegal.length > 0) {
        contexto = `## LEGISLAÇÃO APLICÁVEL\nArtigos relevantes: ${baseLegal.join(', ')}\n\n` + contexto;
    }

    return {
        contexto,
        tokensAprox: Math.floor(tokensAprox),
        modelosUsados: Math.min(maxModelos, 3)
    };
}

// ============================================
// GERAÇÃO DE DECISÃO
// ============================================
async function gerarDecisao(caso, contextoRAG) {
    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_KEY) throw new Error('GEMINI_API_KEY não configurada');

    const prompt = `
# DECISÃO JUDICIAL - EXECUÇÃO PENAL

## CONTEXTO
${contextoRAG.contexto}

## CASO
Réu: ${caso.reu.nome}
Crime: ${caso.reu.crime}
Regime: ${caso.reu.regime}
Reincidência: ${caso.reu.reincidencia}
Pena: ${caso.pena.anos} anos e ${caso.pena.meses} meses
Tempo cumprido: ${caso.tempo_cumprido} dias
Tema: ${caso.tema}

## TAREFA
Gere uma decisão judicial completa com:
1. Estrutura Art. 489 CPC (Vistos, Relatório, Fundamentação, Dispositivo)
2. Citações APENAS do contexto fornecido
3. Cálculos de frações se aplicável
4. Conclusão fundamentada

IMPORTANTE: NÃO INVENTE citações doutrinárias. Use APENAS o que está no contexto.
`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { maxOutputTokens: 4000, temperature: 0.2 }
            })
        }
    );

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// ============================================
// AVALIAR RESULTADO
// ============================================
function avaliarResultado(decisao, caso, gabarito) {
    // Detectar alucinações
    const alucinacoes = detectarAlucinacoes(decisao);

    // Verificar elementos esperados
    const lower = decisao.toLowerCase();

    const avaliacaoEstrutura = {
        vistos: lower.includes('vistos'),
        relatados: lower.includes('relatados'),
        issoPosto: lower.includes('isso posto'),
        pri: /p\.?r\.?i/i.test(lower)
    };

    const estruturaScore = Object.values(avaliacaoEstrutura).filter(Boolean).length * 25;

    // Verificar base legal
    let baseLegalScore = 0;
    for (const base of gabarito.base_legal) {
        const artigo = base.split('_')[1]?.replace('Art', '');
        if (artigo && lower.includes(`art. ${artigo}`) || lower.includes(`artigo ${artigo}`)) {
            baseLegalScore += 20;
        }
    }
    baseLegalScore = Math.min(100, baseLegalScore);

    // Verificar citações obrigatórias
    let citacoesScore = 0;
    for (const citacao of gabarito.citacoes_obrigatorias) {
        if (lower.includes(citacao.toLowerCase())) {
            citacoesScore += 33;
        }
    }
    citacoesScore = Math.min(100, citacoesScore);

    // Score final
    const score = (
        estruturaScore * 0.25 +
        baseLegalScore * 0.25 +
        citacoesScore * 0.20 +
        alucinacoes.score_confianca * 0.30
    );

    return {
        score,
        estrutura: avaliacaoEstrutura,
        estruturaScore,
        baseLegalScore,
        citacoesScore,
        alucinacoes,
        tem_alucinacao: alucinacoes.tem_alucinacao
    };
}

// ============================================
// BENCHMARK PRINCIPAL
// ============================================
async function executarBenchmark(tema, numTestes, options = {}) {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log(`🧪 RAG-ACE Benchmark Engine v2.0`);
    console.log(`   Tema: ${tema}`);
    console.log(`   Testes: ${numTestes}`);
    console.log('═══════════════════════════════════════════════════════\n');

    const resultados = {
        tema,
        dataInicio: new Date().toISOString(),
        config: options,
        testes: [],
        stats: {
            total: 0,
            sucesso: 0,
            falha: 0,
            alucinacoes: 0,
            taxa_alucinacao: 0,
            score_medio: 0
        }
    };

    // Carregar contexto RAG para o tema
    const ragConfig = montarContextoRAG(tema, options.ragConfig || {});
    console.log(`📚 Contexto RAG: ~${ragConfig.tokensAprox} tokens\n`);

    for (let i = 0; i < numTestes; i++) {
        const caso = gerarCasoSintetico(tema);

        console.log(`🔄 Teste ${i + 1}/${numTestes}: ${caso.reu.nome}`);

        const inicio = Date.now();

        try {
            // Gerar decisão
            const decisao = await gerarDecisao(caso, ragConfig);
            const tempo = Date.now() - inicio;

            // Avaliar
            const avaliacao = avaliarResultado(decisao, caso, caso.gabarito);

            const resultado = {
                caso_id: caso.id,
                reu: caso.reu.nome,
                tempo,
                score: avaliacao.score,
                tem_alucinacao: avaliacao.tem_alucinacao,
                alucinacoes_count: avaliacao.alucinacoes.alucinacoes?.length || 0,
                score_confianca: avaliacao.alucinacoes.score_confianca,
                decisao_length: decisao.length
            };

            resultados.testes.push(resultado);
            resultados.stats.total++;
            resultados.stats.sucesso++;

            if (avaliacao.tem_alucinacao) {
                resultados.stats.alucinacoes++;
            }

            console.log(`   ✅ Score: ${avaliacao.score.toFixed(1)} | Confiança: ${avaliacao.alucinacoes.score_confianca}% | ${tempo}ms`);

            // Rate limiting
            await new Promise(r => setTimeout(r, 500));

        } catch (error) {
            console.log(`   ❌ Erro: ${error.message}`);
            resultados.testes.push({
                caso_id: caso.id,
                erro: error.message
            });
            resultados.stats.falha++;
            resultados.stats.total++;
        }

        // Checkpoint a cada 10 testes
        if ((i + 1) % 10 === 0) {
            salvarCheckpoint(resultados);
        }
    }

    // Calcular estatísticas finais
    const testesValidos = resultados.testes.filter(t => !t.erro);
    if (testesValidos.length > 0) {
        resultados.stats.score_medio = testesValidos.reduce((a, b) => a + b.score, 0) / testesValidos.length;
        resultados.stats.taxa_alucinacao = (resultados.stats.alucinacoes / testesValidos.length) * 100;
    }

    resultados.dataFim = new Date().toISOString();

    // Salvar resultado final
    salvarResultado(resultados);

    // Exibir resumo
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📊 RESULTADO FINAL');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`   Testes: ${resultados.stats.sucesso}/${resultados.stats.total} sucesso`);
    console.log(`   Score Médio: ${resultados.stats.score_medio.toFixed(1)}`);
    console.log(`   Taxa de Alucinação: ${resultados.stats.taxa_alucinacao.toFixed(1)}%`);
    console.log(`   Alucinações detectadas: ${resultados.stats.alucinacoes}`);

    return resultados;
}

// ============================================
// CHECKPOINT E PERSISTÊNCIA
// ============================================
function salvarCheckpoint(resultados) {
    if (!fs.existsSync(CHECKPOINT_DIR)) {
        fs.mkdirSync(CHECKPOINT_DIR, { recursive: true });
    }

    const filename = `checkpoint_${resultados.tema}_${Date.now()}.json`;
    fs.writeFileSync(
        path.join(CHECKPOINT_DIR, filename),
        JSON.stringify(resultados, null, 2)
    );
    console.log(`   💾 Checkpoint salvo`);
}

function salvarResultado(resultados) {
    if (!fs.existsSync(RESULTS_DIR)) {
        fs.mkdirSync(RESULTS_DIR, { recursive: true });
    }

    const filename = `benchmark_${resultados.tema}_${Date.now()}.json`;
    fs.writeFileSync(
        path.join(RESULTS_DIR, filename),
        JSON.stringify(resultados, null, 2)
    );
    console.log(`\n💾 Resultado salvo em: ${filename}`);
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);

    let tema = 'remicao';
    let numTestes = 10;

    for (const arg of args) {
        if (arg.startsWith('--tema=')) tema = arg.split('=')[1];
        if (arg.startsWith('--testes=')) numTestes = parseInt(arg.split('=')[1], 10);
    }

    if (!TEMAS_CONFIG[tema]) {
        console.log(`❌ Tema "${tema}" não encontrado`);
        console.log(`   Temas disponíveis: ${Object.keys(TEMAS_CONFIG).join(', ')}`);
        process.exit(1);
    }

    await executarBenchmark(tema, numTestes);
}

module.exports = { executarBenchmark, gerarCasoSintetico, avaliarResultado };

if (require.main === module) {
    main().catch(console.error);
}
