/**
 * estagIA - Geração Completa de Embeddings
 * 
 * Gera embeddings para TODO o knowledge:
 * - Modelos de decisão (texto completo)
 * - Doutrina (por chunk de páginas)
 * - Legislação
 * - Jurisprudência (súmulas STJ)
 * 
 * Uso: node scripts/generateAllEmbeddings.cjs [--dry-run]
 */

const fs = require('fs');
const path = require('path');

// Paths
const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');
const MODELOS_INDEX = path.join(KNOWLEDGE_DIR, 'decisoes', 'modelos_completos_index.json');
const TEXTOS_DIR = path.join(KNOWLEDGE_DIR, 'decisoes', 'textos_completos');
const DOUTRINA_INDEX = path.join(KNOWLEDGE_DIR, 'doutrina', 'doutrina_index.json');
const DOUTRINA_TEXTOS = path.join(KNOWLEDGE_DIR, 'doutrina', 'textos');
const LEGISLACAO_INDEX = path.join(KNOWLEDGE_DIR, 'legislacao', 'legislacao_index.json');
const SUMULAS_FILE = path.join(KNOWLEDGE_DIR, 'jurisprudencia', 'stj_sumulas.json');
const OUTPUT_FILE = path.join(KNOWLEDGE_DIR, 'embeddings_v2.json');

// Carregar API key
const envPath = path.join(__dirname, '..', 'backend', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const geminiKey = envContent.match(/GEMINI_API_KEY=([^\r\n]+)/)?.[1]?.trim();

console.log('🔑 API Key:', geminiKey ? `${geminiKey.substring(0, 15)}...` : 'NÃO ENCONTRADA');

// Gerar embedding via Gemini
async function gerarEmbedding(texto, tentativa = 1) {
    const MAX_TENTATIVAS = 3;
    const LIMITE_CHARS = 8000; // Limite de caracteres por requisição

    // Truncar se necessário
    const textoTruncado = texto.length > LIMITE_CHARS ? texto.substring(0, LIMITE_CHARS) : texto;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${geminiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'models/text-embedding-004',
                    content: { parts: [{ text: textoTruncado }] }
                })
            }
        );

        if (response.status === 429 && tentativa < MAX_TENTATIVAS) {
            // Rate limit - esperar e tentar novamente
            console.log(`   ⏳ Rate limit, aguardando... (tentativa ${tentativa}/${MAX_TENTATIVAS})`);
            await new Promise(r => setTimeout(r, 5000 * tentativa));
            return gerarEmbedding(texto, tentativa + 1);
        }

        if (!response.ok) {
            throw new Error(`API: ${response.status}`);
        }

        const data = await response.json();
        return data.embedding?.values || null;

    } catch (error) {
        if (tentativa < MAX_TENTATIVAS) {
            await new Promise(r => setTimeout(r, 2000));
            return gerarEmbedding(texto, tentativa + 1);
        }
        console.log(`   ❌ Erro: ${error.message}`);
        return null;
    }
}

// Processar modelos de decisão
async function processarModelos(dryRun) {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📁 MODELOS DE DECISÃO');
    console.log('═══════════════════════════════════════════════════════\n');

    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
    const embeddings = [];
    let processados = 0;

    for (const modelo of indice.modelos) {
        const textoPath = path.join(TEXTOS_DIR, modelo.arquivo_texto);

        if (!fs.existsSync(textoPath)) {
            console.log(`⚠️ Arquivo não encontrado: ${modelo.arquivo_texto}`);
            continue;
        }

        const texto = fs.readFileSync(textoPath, 'utf-8');
        const textoLimpo = texto.substring(0, 4000); // Preview para embedding

        if (dryRun) {
            console.log(`📄 [DRY] ${modelo.nome.substring(0, 40)}... (${texto.length} chars)`);
            embeddings.push({
                id: modelo.id,
                tipo: 'modelo',
                nome: modelo.nome,
                agrupador: modelo.agrupador,
                resultado: modelo.resultado,
                chars: texto.length,
                embedding: null
            });
        } else {
            process.stdout.write(`📄 ${modelo.nome.substring(0, 35)}... `);
            const embedding = await gerarEmbedding(textoLimpo);

            if (embedding) {
                console.log(`✅ (${embedding.length} dims)`);
                embeddings.push({
                    id: modelo.id,
                    tipo: 'modelo',
                    nome: modelo.nome,
                    agrupador: modelo.agrupador,
                    resultado: modelo.resultado,
                    embedding
                });
                processados++;
            } else {
                console.log('❌');
            }

            // Delay para rate limiting
            await new Promise(r => setTimeout(r, 200));
        }
    }

    console.log(`\n✅ Modelos processados: ${processados}/${indice.modelos.length}`);
    return embeddings;
}

// Processar doutrina (por livro, conteúdo agregado)
async function processarDoutrina(dryRun) {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📚 DOUTRINA');
    console.log('═══════════════════════════════════════════════════════\n');

    const indice = JSON.parse(fs.readFileSync(DOUTRINA_INDEX, 'utf-8'));
    const embeddings = [];
    let processados = 0;

    for (const livro of indice.livros) {
        // Usar a citação + título como texto para embedding
        const textoParaEmbedding = `${livro.titulo}. ${livro.autor}. ${livro.citacaoABNT || ''}`;

        if (dryRun) {
            console.log(`📕 [DRY] ${livro.titulo.substring(0, 40)}...`);
            embeddings.push({
                id: livro.id,
                tipo: 'doutrina',
                titulo: livro.titulo,
                autor: livro.autor,
                citacao: livro.citacaoABNT,
                embedding: null
            });
        } else {
            process.stdout.write(`📕 ${livro.titulo.substring(0, 35)}... `);
            const embedding = await gerarEmbedding(textoParaEmbedding);

            if (embedding) {
                console.log(`✅`);
                embeddings.push({
                    id: livro.id,
                    tipo: 'doutrina',
                    titulo: livro.titulo,
                    autor: livro.autor,
                    citacao: livro.citacaoABNT,
                    embedding
                });
                processados++;
            } else {
                console.log('❌');
            }

            await new Promise(r => setTimeout(r, 200));
        }
    }

    console.log(`\n✅ Doutrina processada: ${processados}/${indice.livros.length}`);
    return embeddings;
}

// Processar legislação
async function processarLegislacao(dryRun) {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('⚖️ LEGISLAÇÃO');
    console.log('═══════════════════════════════════════════════════════\n');

    if (!fs.existsSync(LEGISLACAO_INDEX)) {
        console.log('⚠️ Índice de legislação não encontrado');
        return [];
    }

    const indice = JSON.parse(fs.readFileSync(LEGISLACAO_INDEX, 'utf-8'));
    const leis = indice.leis || indice.legislacao || [];
    const embeddings = [];
    let processados = 0;

    for (const lei of leis) {
        const textoParaEmbedding = `${lei.tipo || 'Lei'} ${lei.numero || ''} - ${lei.titulo || lei.nome || ''}. ${lei.ementa || ''}`;

        if (dryRun) {
            console.log(`📜 [DRY] ${lei.titulo || lei.nome || 'Sem título'}`);
            embeddings.push({
                id: lei.id || lei.numero,
                tipo: 'legislacao',
                nome: lei.titulo || lei.nome,
                numero: lei.numero,
                embedding: null
            });
        } else {
            process.stdout.write(`📜 ${(lei.titulo || lei.nome || 'Lei').substring(0, 35)}... `);
            const embedding = await gerarEmbedding(textoParaEmbedding);

            if (embedding) {
                console.log(`✅`);
                embeddings.push({
                    id: lei.id || lei.numero,
                    tipo: 'legislacao',
                    nome: lei.titulo || lei.nome,
                    numero: lei.numero,
                    embedding
                });
                processados++;
            } else {
                console.log('❌');
            }

            await new Promise(r => setTimeout(r, 200));
        }
    }

    console.log(`\n✅ Legislação processada: ${processados}/${leis.length}`);
    return embeddings;
}

// Processar súmulas
async function processarSumulas(dryRun) {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📋 SÚMULAS STJ');
    console.log('═══════════════════════════════════════════════════════\n');

    if (!fs.existsSync(SUMULAS_FILE)) {
        console.log('⚠️ Arquivo de súmulas não encontrado');
        return [];
    }

    const data = JSON.parse(fs.readFileSync(SUMULAS_FILE, 'utf-8'));
    const sumulas = data.sumulas || [];
    const embeddings = [];
    let processados = 0;

    for (const sumula of sumulas) {
        const textoParaEmbedding = `Súmula ${sumula.numero} STJ: ${sumula.enunciado}`;

        if (dryRun) {
            console.log(`📋 [DRY] Súmula ${sumula.numero}`);
            embeddings.push({
                id: `sumula_stj_${sumula.numero}`,
                tipo: 'jurisprudencia',
                numero: sumula.numero,
                enunciado: sumula.enunciado,
                embedding: null
            });
        } else {
            process.stdout.write(`📋 Súmula ${sumula.numero}... `);
            const embedding = await gerarEmbedding(textoParaEmbedding);

            if (embedding) {
                console.log(`✅`);
                embeddings.push({
                    id: `sumula_stj_${sumula.numero}`,
                    tipo: 'jurisprudencia',
                    numero: sumula.numero,
                    enunciado: sumula.enunciado,
                    embedding
                });
                processados++;
            } else {
                console.log('❌');
            }

            await new Promise(r => setTimeout(r, 200));
        }
    }

    console.log(`\n✅ Súmulas processadas: ${processados}/${sumulas.length}`);
    return embeddings;
}

// Main
async function main() {
    console.log('═══════════════════════════════════════════════════════');
    console.log('🧠 estagIA - Geração Completa de Embeddings v2.0');
    console.log('═══════════════════════════════════════════════════════');

    const args = process.argv.slice(2);
    const dryRun = args.includes('--dry-run');

    if (dryRun) {
        console.log('\n🔍 MODO DRY-RUN: Apenas listando itens\n');
    }

    const inicio = Date.now();

    // Processar cada categoria
    const modelos = await processarModelos(dryRun);
    const doutrina = await processarDoutrina(dryRun);
    const legislacao = await processarLegislacao(dryRun);
    const sumulas = await processarSumulas(dryRun);

    // Consolidar
    const todosEmbeddings = {
        versao: '2.0.0',
        dataGeracao: new Date().toISOString(),
        estatisticas: {
            modelos: modelos.length,
            doutrina: doutrina.length,
            legislacao: legislacao.length,
            sumulas: sumulas.length,
            total: modelos.length + doutrina.length + legislacao.length + sumulas.length
        },
        embeddings: {
            modelos,
            doutrina,
            legislacao,
            sumulas
        }
    };

    const tempo = ((Date.now() - inicio) / 1000 / 60).toFixed(1);

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📊 RESUMO FINAL');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`\nModelos: ${modelos.length}`);
    console.log(`Doutrina: ${doutrina.length}`);
    console.log(`Legislação: ${legislacao.length}`);
    console.log(`Súmulas: ${sumulas.length}`);
    console.log(`\n📦 TOTAL: ${todosEmbeddings.estatisticas.total} embeddings`);
    console.log(`⏱️ Tempo: ${tempo} minutos`);

    if (!dryRun) {
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(todosEmbeddings, null, 2));
        console.log(`\n💾 Salvo em: ${OUTPUT_FILE}`);
    }
}

main().catch(console.error);
