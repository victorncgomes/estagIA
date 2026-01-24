/**
 * RAG-ACE Optimizer v2.0 - Hallucination Detector
 * 
 * Detecta alucinações em decisões geradas:
 * - Verifica citações doutrinárias (existem na base?)
 * - Valida números de processo (formato CNJ)
 * - Checa cálculos jurídicos
 * - Confirma base legal
 * 
 * Uso:
 *   node .agent/skills/rag-ace-optimizer/scripts/hallucinationDetector.cjs --texto="decisao.txt"
 *   node .agent/skills/rag-ace-optimizer/scripts/hallucinationDetector.cjs --test
 */

const fs = require('fs');
const path = require('path');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const KNOWLEDGE_DIR = path.join(ROOT, 'knowledge');
const DOUTRINA_INDEX = path.join(KNOWLEDGE_DIR, 'doutrina', 'doutrina_index.json');
const JURIS_INDEX = path.join(KNOWLEDGE_DIR, 'jurisprudencia', 'stj_sumulas_index.json');
const LEG_INDEX = path.join(KNOWLEDGE_DIR, 'legislacao', 'legislacao_index.json');

// ============================================
// BASE DE CONHECIMENTO (cache)
// ============================================
let knowledgeCache = null;

function loadKnowledgeBase() {
    if (knowledgeCache) return knowledgeCache;

    knowledgeCache = {
        autores: new Set(),
        obras: new Set(),
        sumulas: new Set(),
        artigos_lep: new Set(),
        artigos_cp: new Set()
    };

    // Carregar autores e obras da doutrina
    if (fs.existsSync(DOUTRINA_INDEX)) {
        const doutrina = JSON.parse(fs.readFileSync(DOUTRINA_INDEX, 'utf-8'));
        if (doutrina.livros) {
            doutrina.livros.forEach(livro => {
                if (livro.autor) {
                    // Normalizar autor: "José Paulo BALTAZAR" -> "baltazar"
                    const autorLower = livro.autor.toLowerCase();
                    knowledgeCache.autores.add(autorLower);
                    // Adicionar sobrenome principal
                    const sobrenomes = autorLower.split(' ').filter(p => p.length > 3);
                    sobrenomes.forEach(s => knowledgeCache.autores.add(s));
                }
                if (livro.titulo) {
                    knowledgeCache.obras.add(livro.titulo.toLowerCase());
                }
            });
        }
    }

    // Carregar súmulas
    if (fs.existsSync(JURIS_INDEX)) {
        const juris = JSON.parse(fs.readFileSync(JURIS_INDEX, 'utf-8'));
        if (juris.sumulas) {
            juris.sumulas.forEach(s => {
                if (s.numero) knowledgeCache.sumulas.add(s.numero.toString());
            });
        }
    }

    // Artigos padrão da LEP e CP
    for (let i = 1; i <= 200; i++) {
        knowledgeCache.artigos_lep.add(i.toString());
        knowledgeCache.artigos_cp.add(i.toString());
    }

    return knowledgeCache;
}

// ============================================
// EXTRATORES
// ============================================
function extrairCitacoesDoutrinarias(texto) {
    const citacoes = [];

    // Padrão: SOBRENOME seguido de referência
    // Ex: "BALTAZAR, José Paulo", "conforme ensina Nucci", "preleciona Bitencourt"
    const padroes = [
        /([A-Z][A-ZÀÁÂÃÉÊÍÓÔÕÚÇ]{2,})\s*,\s*([A-Za-zÀ-ÿ\s]+)/g,  // BALTAZAR, José Paulo
        /(?:conforme|segundo|ensina|preleciona|leciona)\s+([A-Z][a-zà-ÿ]{2,})/gi,  // ensina Nucci
        /(?:nas palavras de|no dizer de)\s+([A-Z][a-zà-ÿ]{2,})/gi,  // nas palavras de Greco
    ];

    for (const padrao of padroes) {
        let match;
        while ((match = padrao.exec(texto)) !== null) {
            citacoes.push({
                texto: match[0],
                autor: match[1],
                posicao: match.index,
                tipo: 'doutrina'
            });
        }
    }

    return citacoes;
}

function extrairProcessos(texto) {
    const processos = [];

    // Formato CNJ: 0000000-00.0000.0.00.0000
    const padraoCNJ = /\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}/g;

    // Formato antigo: 0000000
    const padraoAntigo = /(?:processo|autos|pec|ação penal)\s*(?:n[º°]?\.?\s*)?(\d{5,})/gi;

    // Habeas Corpus
    const padraoHC = /H[Cc]\s*(?:n[º°]?\.?\s*)?(\d+(?:\.\d+)?)/g;

    let match;

    while ((match = padraoCNJ.exec(texto)) !== null) {
        processos.push({
            numero: match[0],
            formato: 'CNJ',
            posicao: match.index,
            valido: validarCNJ(match[0])
        });
    }

    while ((match = padraoHC.exec(texto)) !== null) {
        processos.push({
            numero: match[0],
            formato: 'HC',
            posicao: match.index,
            valido: true // HCs são mais flexíveis
        });
    }

    return processos;
}

function extrairCalculos(texto) {
    const calculos = [];

    // Frações: 1/6, 2/5, 40%, 50%
    const padraoFracao = /(\d+)\s*[\/]\s*(\d+)/g;
    const padraoPercent = /(\d+(?:,\d+)?)\s*%/g;

    // Dias/tempo: "30 dias", "2 anos e 6 meses"
    const padraoDias = /(\d+)\s*(?:dias?|meses?|anos?)/gi;

    let match;

    while ((match = padraoFracao.exec(texto)) !== null) {
        calculos.push({
            texto: match[0],
            tipo: 'fracao',
            numerador: parseInt(match[1]),
            denominador: parseInt(match[2]),
            posicao: match.index
        });
    }

    while ((match = padraoPercent.exec(texto)) !== null) {
        calculos.push({
            texto: match[0],
            tipo: 'percentual',
            valor: parseFloat(match[1].replace(',', '.')),
            posicao: match.index
        });
    }

    return calculos;
}

function extrairBasesLegais(texto) {
    const bases = [];

    // Artigos de lei
    const padraoArtigo = /art(?:igo)?\.?\s*(\d+)(?:\s*,?\s*(?:§|parágrafo)\s*(\d+))?(?:\s*,?\s*(?:inciso|inc\.?)\s*([IVXLCDM]+))?(?:[,\s]+(?:da|do)\s+([A-Za-zÀ-ÿ\s]+))?/gi;

    // Leis específicas
    const padraoLei = /(?:Lei|Decreto)\s*(?:n[º°]?\.?\s*)?(\d+(?:\.\d+)?(?:\/\d+)?)/gi;

    let match;

    while ((match = padraoArtigo.exec(texto)) !== null) {
        bases.push({
            texto: match[0],
            artigo: match[1],
            paragrafo: match[2] || null,
            inciso: match[3] || null,
            lei: match[4]?.trim() || null,
            posicao: match.index
        });
    }

    while ((match = padraoLei.exec(texto)) !== null) {
        bases.push({
            texto: match[0],
            lei_numero: match[1],
            posicao: match.index
        });
    }

    return bases;
}

// ============================================
// VALIDADORES
// ============================================
function validarCNJ(numero) {
    // Formato: NNNNNNN-DD.AAAA.J.TT.OOOO
    const partes = numero.split(/[-\.]/);
    if (partes.length !== 6) return false;

    const [seq, digito, ano, justica, tribunal, origem] = partes;

    // Validações básicas
    if (seq.length !== 7) return false;
    if (digito.length !== 2) return false;
    if (ano.length !== 4) return false;
    if (justica.length !== 1) return false;
    if (tribunal.length !== 2) return false;
    if (origem.length !== 4) return false;

    // Ano razoável (1990-2030)
    const anoNum = parseInt(ano);
    if (anoNum < 1990 || anoNum > 2030) return false;

    return true;
}

function validarCitacaoDoutrinaria(citacao, knowledgeBase) {
    const autorLower = citacao.autor.toLowerCase();

    // Verificar se autor existe na base
    for (const autorConhecido of knowledgeBase.autores) {
        if (autorConhecido.includes(autorLower) || autorLower.includes(autorConhecido)) {
            return { valido: true, autor_encontrado: autorConhecido };
        }
    }

    return { valido: false, autor_encontrado: null };
}

// ============================================
// DETECTOR PRINCIPAL
// ============================================
function detectarAlucinacoes(texto, contexto = {}) {
    const kb = loadKnowledgeBase();

    const resultado = {
        timestamp: new Date().toISOString(),
        texto_length: texto.length,
        alucinacoes: [],
        avisos: [],
        score_confianca: 100,
        categorias: {
            citacoes: { total: 0, invalidas: 0 },
            processos: { total: 0, invalidos: 0 },
            calculos: { total: 0, suspeitos: 0 },
            bases_legais: { total: 0, ausentes: 0 }
        }
    };

    // 1. VERIFICAR CITAÇÕES DOUTRINÁRIAS
    const citacoes = extrairCitacoesDoutrinarias(texto);
    resultado.categorias.citacoes.total = citacoes.length;

    for (const cit of citacoes) {
        const validacao = validarCitacaoDoutrinaria(cit, kb);

        if (!validacao.valido) {
            resultado.alucinacoes.push({
                tipo: 'CITACAO_NAO_VERIFICADA',
                gravidade: 'ALTA',
                conteudo: cit.texto,
                autor: cit.autor,
                posicao: cit.posicao,
                mensagem: `Autor "${cit.autor}" não encontrado na base de conhecimento`
            });
            resultado.categorias.citacoes.invalidas++;
            resultado.score_confianca -= 15;
        }
    }

    // 2. VERIFICAR PROCESSOS
    const processos = extrairProcessos(texto);
    resultado.categorias.processos.total = processos.length;

    for (const proc of processos) {
        if (!proc.valido) {
            resultado.alucinacoes.push({
                tipo: 'PROCESSO_FORMATO_INVALIDO',
                gravidade: 'MEDIA',
                conteudo: proc.numero,
                formato: proc.formato,
                posicao: proc.posicao,
                mensagem: `Número de processo "${proc.numero}" com formato inválido`
            });
            resultado.categorias.processos.invalidos++;
            resultado.score_confianca -= 10;
        }
    }

    // 3. VERIFICAR CÁLCULOS
    const calculos = extrairCalculos(texto);
    resultado.categorias.calculos.total = calculos.length;

    // Verificar frações conhecidas
    const fracoesValidas = ['1/6', '2/5', '3/5', '1/2', '1/3', '2/3', '40%', '50%', '60%', '25%', '16%'];

    for (const calc of calculos) {
        if (calc.tipo === 'fracao') {
            const fracaoStr = `${calc.numerador}/${calc.denominador}`;
            // Frações muito incomuns são suspeitas
            if (calc.denominador > 10 || calc.numerador > calc.denominador) {
                resultado.avisos.push({
                    tipo: 'CALCULO_INCOMUM',
                    conteudo: fracaoStr,
                    posicao: calc.posicao,
                    mensagem: `Fração "${fracaoStr}" incomum em execução penal`
                });
                resultado.categorias.calculos.suspeitos++;
                resultado.score_confianca -= 5;
            }
        }
    }

    // 4. VERIFICAR BASES LEGAIS
    const bases = extrairBasesLegais(texto);
    resultado.categorias.bases_legais.total = bases.length;

    // Artigos que não existem na LEP (vai até 199)
    for (const base of bases) {
        if (base.lei && base.lei.toLowerCase().includes('lep')) {
            if (parseInt(base.artigo) > 199) {
                resultado.alucinacoes.push({
                    tipo: 'ARTIGO_INEXISTENTE',
                    gravidade: 'CRITICA',
                    conteudo: base.texto,
                    artigo: base.artigo,
                    posicao: base.posicao,
                    mensagem: `Art. ${base.artigo} da LEP não existe (LEP vai até art. 199)`
                });
                resultado.categorias.bases_legais.ausentes++;
                resultado.score_confianca -= 20;
            }
        }
    }

    // Garantir score mínimo de 0
    resultado.score_confianca = Math.max(0, resultado.score_confianca);

    // Classificação final
    resultado.tem_alucinacao = resultado.alucinacoes.length > 0;
    resultado.nivel_risco =
        resultado.score_confianca >= 90 ? 'BAIXO' :
            resultado.score_confianca >= 70 ? 'MEDIO' :
                resultado.score_confianca >= 50 ? 'ALTO' : 'CRITICO';

    return resultado;
}

// ============================================
// TESTE
// ============================================
function executarTeste() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🔍 RAG-ACE Hallucination Detector - Teste');
    console.log('═══════════════════════════════════════════════════════\n');

    const textoTeste = `
    Vistos etc.
    
    Conforme ensina FICTICIO em sua obra "Direito Penal Inventado", o apenado 
    faz jus à progressão de regime após cumprir 1/47 da pena.
    
    O STJ, no HC 999.999.999, decidiu que a fração aplicável é de 250%.
    
    Nos termos do art. 500 da LEP, concedo a progressão.
    
    Processo: 1234567-99.9999.9.99.9999
    
    P.R.I.
    `;

    console.log('📄 Texto de teste (com erros propositais):\n');
    console.log(textoTeste);
    console.log('\n─────────────────────────────────────────────────────');

    const resultado = detectarAlucinacoes(textoTeste);

    console.log('\n📊 RESULTADO DA ANÁLISE');
    console.log('─────────────────────────────────────────────────────');
    console.log(`   Score de Confiança: ${resultado.score_confianca}%`);
    console.log(`   Nível de Risco: ${resultado.nivel_risco}`);
    console.log(`   Alucinações encontradas: ${resultado.alucinacoes.length}`);

    if (resultado.alucinacoes.length > 0) {
        console.log('\n❌ ALUCINAÇÕES DETECTADAS:');
        resultado.alucinacoes.forEach((a, i) => {
            console.log(`   ${i + 1}. [${a.gravidade}] ${a.tipo}`);
            console.log(`      ${a.mensagem}`);
            console.log(`      Trecho: "${a.conteudo}"`);
        });
    }

    if (resultado.avisos.length > 0) {
        console.log('\n⚠️  AVISOS:');
        resultado.avisos.forEach((a, i) => {
            console.log(`   ${i + 1}. ${a.tipo}: ${a.mensagem}`);
        });
    }

    console.log('\n📈 ESTATÍSTICAS:');
    console.log(`   Citações: ${resultado.categorias.citacoes.invalidas}/${resultado.categorias.citacoes.total} inválidas`);
    console.log(`   Processos: ${resultado.categorias.processos.invalidos}/${resultado.categorias.processos.total} inválidos`);
    console.log(`   Cálculos: ${resultado.categorias.calculos.suspeitos}/${resultado.categorias.calculos.total} suspeitos`);
    console.log(`   Bases legais: ${resultado.categorias.bases_legais.ausentes}/${resultado.categorias.bases_legais.total} ausentes`);

    return resultado;
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);

    if (args.includes('--test')) {
        return executarTeste();
    }

    const textoArg = args.find(a => a.startsWith('--texto='));
    if (textoArg) {
        const filePath = textoArg.split('=')[1];
        if (fs.existsSync(filePath)) {
            const texto = fs.readFileSync(filePath, 'utf-8');
            const resultado = detectarAlucinacoes(texto);
            console.log(JSON.stringify(resultado, null, 2));
            return resultado;
        }
    }

    console.log('Uso:');
    console.log('  node hallucinationDetector.cjs --test');
    console.log('  node hallucinationDetector.cjs --texto=decisao.txt');
}

module.exports = { detectarAlucinacoes, extrairCitacoesDoutrinarias, extrairProcessos, extrairCalculos };

if (require.main === module) {
    main().catch(console.error);
}
