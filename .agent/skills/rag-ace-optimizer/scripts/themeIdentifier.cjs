/**
 * RAG-ACE Optimizer v2.0 - Theme Identifier
 * 
 * Mapeia TODO o banco de conhecimento por temas:
 * - 256 modelos de decisão
 * - Jurisprudência
 * - Legislação
 * - Doutrina
 * 
 * Uso:
 *   node .agent/skills/rag-ace-optimizer/scripts/themeIdentifier.cjs
 */

const fs = require('fs');
const path = require('path');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const KNOWLEDGE_DIR = path.join(ROOT, 'knowledge');
const MODELOS_INDEX = path.join(KNOWLEDGE_DIR, 'decisoes', 'modelos_completos_index.json');
const JURIS_INDEX = path.join(KNOWLEDGE_DIR, 'jurisprudencia', 'stj_sumulas_index.json');
const LEG_INDEX = path.join(KNOWLEDGE_DIR, 'legislacao', 'legislacao_index.json');
const DOUTRINA_INDEX = path.join(KNOWLEDGE_DIR, 'doutrina', 'doutrina_index.json');
const OUTPUT_PATH = path.join(ROOT, 'knowledge', 'ace-v2', 'theme_index.json');

// ============================================
// DEFINIÇÃO DE TEMAS
// ============================================
const TEMAS_CONFIG = {
    remicao: {
        keywords: ['remição', 'remicao', 'estudo', 'trabalho', 'leitura', 'art. 126', 'art. 127', 'remir', 'dias remidos'],
        agrupadores: ['remicao'],
        artigos_lei: ['LEP_Art126', 'LEP_Art127', 'LEP_Art128', 'LEP_Art129', 'LEP_Art130']
    },
    progressao: {
        keywords: ['progressão', 'progressao', 'regime', 'semiaberto', 'aberto', 'fechado', 'fração', 'art. 112'],
        agrupadores: ['progressao', 'vrep'],
        artigos_lei: ['LEP_Art112', 'CP_Art33']
    },
    livramento: {
        keywords: ['livramento', 'condicional', 'art. 83', 'soltura', 'liberdade condicional'],
        agrupadores: ['livramento'],
        artigos_lei: ['CP_Art83', 'CP_Art84', 'CP_Art85', 'CP_Art86', 'CP_Art87', 'CP_Art88', 'CP_Art89', 'CP_Art90']
    },
    indulto: {
        keywords: ['indulto', 'comutação', 'comutacao', 'decreto', 'graça', 'natalino'],
        agrupadores: ['indulto'],
        artigos_lei: ['CF_Art84_XII']
    },
    retificacao: {
        keywords: ['retificação', 'retificacao', 'erro material', 'correção', 'GEP', 'guia'],
        agrupadores: ['retificacao'],
        artigos_lei: []
    },
    unificacao: {
        keywords: ['unificação', 'unificacao', 'penas', 'soma', 'art. 111', 'art. 75'],
        agrupadores: ['unificacao'],
        artigos_lei: ['LEP_Art111', 'CP_Art75']
    },
    falta_grave: {
        keywords: ['falta', 'grave', 'disciplinar', 'sindicância', 'celular', 'fuga', 'art. 50'],
        agrupadores: ['falta'],
        artigos_lei: ['LEP_Art50', 'LEP_Art52']
    },
    prescricao: {
        keywords: ['prescrição', 'prescricao', 'extinção', 'extincao', 'punibilidade', 'art. 109', 'art. 110'],
        agrupadores: ['prescricao', 'extincao'],
        artigos_lei: ['CP_Art109', 'CP_Art110', 'CP_Art111', 'CP_Art112', 'CP_Art113', 'CP_Art114', 'CP_Art115', 'CP_Art116', 'CP_Art117', 'CP_Art118', 'CP_Art119']
    }
};

// ============================================
// ANÁLISE DE MODELOS
// ============================================
function analisarModelos() {
    console.log('📁 Analisando modelos de decisão...');

    if (!fs.existsSync(MODELOS_INDEX)) {
        console.log('   ⚠️  Índice de modelos não encontrado');
        return {};
    }

    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
    const modelosPorTema = {};

    for (const [tema, config] of Object.entries(TEMAS_CONFIG)) {
        modelosPorTema[tema] = [];

        indice.modelos.forEach((modelo, idx) => {
            // Verificar por agrupador
            if (config.agrupadores.includes(modelo.agrupador)) {
                modelosPorTema[tema].push({
                    idx,
                    arquivo: modelo.arquivo,
                    nome: modelo.nome,
                    tamanho: modelo.tamanho_chars,
                    resultado: modelo.resultado,
                    matchType: 'agrupador'
                });
                return;
            }

            // Verificar por keywords no nome/preview
            const textoLower = (modelo.nome + ' ' + (modelo.conteudo_preview || '')).toLowerCase();
            const keywordMatch = config.keywords.some(kw => textoLower.includes(kw.toLowerCase()));

            if (keywordMatch) {
                modelosPorTema[tema].push({
                    idx,
                    arquivo: modelo.arquivo,
                    nome: modelo.nome,
                    tamanho: modelo.tamanho_chars,
                    resultado: modelo.resultado,
                    matchType: 'keyword'
                });
            }
        });
    }

    return modelosPorTema;
}

// ============================================
// ANÁLISE DE JURISPRUDÊNCIA
// ============================================
function analisarJurisprudencia() {
    console.log('📚 Analisando jurisprudência...');

    const jurisPorTema = {};

    // Inicializar temas
    for (const tema of Object.keys(TEMAS_CONFIG)) {
        jurisPorTema[tema] = [];
    }

    // Analisar súmulas STJ
    if (fs.existsSync(JURIS_INDEX)) {
        const sumulas = JSON.parse(fs.readFileSync(JURIS_INDEX, 'utf-8'));

        if (sumulas.sumulas) {
            sumulas.sumulas.forEach((sumula, idx) => {
                const texto = (sumula.titulo + ' ' + (sumula.enunciado || '')).toLowerCase();

                for (const [tema, config] of Object.entries(TEMAS_CONFIG)) {
                    if (config.keywords.some(kw => texto.includes(kw.toLowerCase()))) {
                        jurisPorTema[tema].push({
                            tipo: 'sumula_stj',
                            numero: sumula.numero,
                            titulo: sumula.titulo,
                            idx
                        });
                    }
                }
            });
        }
    }

    return jurisPorTema;
}

// ============================================
// ANÁLISE DE LEGISLAÇÃO
// ============================================
function analisarLegislacao() {
    console.log('📜 Analisando legislação...');

    const legPorTema = {};

    // Inicializar temas
    for (const tema of Object.keys(TEMAS_CONFIG)) {
        legPorTema[tema] = TEMAS_CONFIG[tema].artigos_lei || [];
    }

    // Complementar com análise do índice
    if (fs.existsSync(LEG_INDEX)) {
        const legislacao = JSON.parse(fs.readFileSync(LEG_INDEX, 'utf-8'));

        if (legislacao.legislacoes) {
            legislacao.legislacoes.forEach(lei => {
                const nome = (lei.nome || lei.sigla || '').toLowerCase();

                for (const [tema, config] of Object.entries(TEMAS_CONFIG)) {
                    if (config.keywords.some(kw => nome.includes(kw.toLowerCase()))) {
                        const ref = `${lei.sigla || lei.nome}`;
                        if (!legPorTema[tema].includes(ref)) {
                            legPorTema[tema].push(ref);
                        }
                    }
                }
            });
        }
    }

    return legPorTema;
}

// ============================================
// ANÁLISE DE DOUTRINA
// ============================================
function analisarDoutrina() {
    console.log('📖 Analisando doutrina...');

    const doutrinaPorTema = {};

    // Inicializar temas
    for (const tema of Object.keys(TEMAS_CONFIG)) {
        doutrinaPorTema[tema] = [];
    }

    if (fs.existsSync(DOUTRINA_INDEX)) {
        const doutrina = JSON.parse(fs.readFileSync(DOUTRINA_INDEX, 'utf-8'));

        if (doutrina.livros) {
            doutrina.livros.forEach((livro, idx) => {
                const texto = (livro.titulo + ' ' + (livro.autor || '')).toLowerCase();

                // Execução penal é relevante para todos os temas
                if (texto.includes('execução penal') || texto.includes('execucao penal')) {
                    for (const tema of Object.keys(TEMAS_CONFIG)) {
                        doutrinaPorTema[tema].push({
                            idx,
                            titulo: livro.titulo,
                            autor: livro.autor,
                            relevancia: 'alta'
                        });
                    }
                }
            });
        }
    }

    return doutrinaPorTema;
}

// ============================================
// GERAR ÍNDICE TEMÁTICO
// ============================================
function gerarIndice() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🏷️  RAG-ACE Theme Identifier v2.0');
    console.log('═══════════════════════════════════════════════════════\n');

    const modelos = analisarModelos();
    const juris = analisarJurisprudencia();
    const leg = analisarLegislacao();
    const doutrina = analisarDoutrina();

    // Montar índice final
    const themeIndex = {
        version: '2.0.0',
        generatedAt: new Date().toISOString(),
        temasCount: Object.keys(TEMAS_CONFIG).length,
        temas: {}
    };

    for (const [tema, config] of Object.entries(TEMAS_CONFIG)) {
        themeIndex.temas[tema] = {
            keywords: config.keywords,
            agrupadores: config.agrupadores,
            modelos: {
                count: modelos[tema]?.length || 0,
                items: modelos[tema] || []
            },
            jurisprudencia: {
                count: juris[tema]?.length || 0,
                items: juris[tema] || []
            },
            legislacao: {
                count: leg[tema]?.length || 0,
                artigos: leg[tema] || []
            },
            doutrina: {
                count: doutrina[tema]?.length || 0,
                items: doutrina[tema] || []
            },
            rag_config: {
                max_modelos: Math.min(3, modelos[tema]?.length || 1),
                max_juris: Math.min(2, juris[tema]?.length || 0),
                max_doutrina: 1,
                ordem_contexto: ['legislacao', 'modelo', 'jurisprudencia', 'doutrina']
            }
        };
    }

    // Estatísticas
    console.log('\n📊 ESTATÍSTICAS');
    console.log('─────────────────────────────────────────────────────');

    let totalModelos = 0;
    let totalJuris = 0;

    for (const [tema, data] of Object.entries(themeIndex.temas)) {
        const modCount = data.modelos.count;
        const jurisCount = data.jurisprudencia.count;
        const legCount = data.legislacao.count;

        totalModelos += modCount;
        totalJuris += jurisCount;

        console.log(`   ${tema.padEnd(15)} | Modelos: ${String(modCount).padStart(3)} | Juris: ${String(jurisCount).padStart(2)} | Leis: ${String(legCount).padStart(2)}`);
    }

    console.log('─────────────────────────────────────────────────────');
    console.log(`   TOTAL           | Modelos: ${String(totalModelos).padStart(3)} | Juris: ${String(totalJuris).padStart(2)}`);

    // Salvar
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(themeIndex, null, 2));
    console.log(`\n💾 Índice salvo em: ${OUTPUT_PATH}`);

    return themeIndex;
}

// ============================================
// FUNÇÃO PARA DETECTAR TEMA DE TEXTO
// ============================================
function detectarTema(texto) {
    const textoLower = texto.toLowerCase();
    const scores = {};

    for (const [tema, config] of Object.entries(TEMAS_CONFIG)) {
        scores[tema] = 0;

        for (const keyword of config.keywords) {
            const regex = new RegExp(keyword.toLowerCase(), 'gi');
            const matches = textoLower.match(regex) || [];
            scores[tema] += matches.length;
        }
    }

    // Ordenar por score
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    if (sorted[0][1] > 0) {
        return {
            tema: sorted[0][0],
            score: sorted[0][1],
            alternativas: sorted.slice(1, 3).filter(s => s[1] > 0)
        };
    }

    return { tema: 'outros', score: 0, alternativas: [] };
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);

    if (args.includes('--detect')) {
        // Modo de detecção de tema
        const texto = args.find(a => a.startsWith('--texto='))?.split('=')[1] || '';
        const resultado = detectarTema(texto);
        console.log('Tema detectado:', resultado);
    } else {
        // Gerar índice completo
        const indice = gerarIndice();
        return indice;
    }
}

module.exports = { detectarTema, TEMAS_CONFIG };

if (require.main === module) {
    main().catch(console.error);
}
