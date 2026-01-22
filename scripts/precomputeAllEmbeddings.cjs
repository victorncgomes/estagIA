/**
 * estagIA - Pré-computação de Embeddings COMPLETO
 * 
 * Gera embeddings para TODO o knowledge:
 * - Modelos de decisão (254)
 * - Doutrina (34 livros, ~900 chunks)
 * - Jurisprudência (súmulas, repetitivos, acordãos)
 * - Legislação (36+ leis)
 * 
 * Uso: node scripts/precomputeAllEmbeddings.cjs
 * 
 * @version 2.0.0
 */

const fs = require('fs');
const path = require('path');

// Carregar .env manualmente
function loadEnv() {
    const envPath = path.join(__dirname, '..', '.env');
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
loadEnv();

// Configuração
const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
const EMBEDDING_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent';
const KNOWLEDGE_PATH = path.join(__dirname, '..', 'knowledge');
const OUTPUT_PATH = path.join(KNOWLEDGE_PATH, 'embeddings_knowledge.json');
const DELAY_MS = 100;

/**
 * Gera embedding para um texto
 */
async function getEmbedding(text) {
    if (!GEMINI_API_KEY || !text || text.trim().length < 10) {
        return null;
    }

    try {
        const response = await fetch(`${EMBEDDING_ENDPOINT}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'models/text-embedding-004',
                content: { parts: [{ text: text.slice(0, 2000) }] }
            })
        });

        if (!response.ok) {
            console.error(`Erro API: ${response.status}`);
            return null;
        }

        const data = await response.json();
        return data.embedding?.values || null;
    } catch (error) {
        console.error('Erro:', error.message);
        return null;
    }
}

/**
 * Carrega doutrina - 1 embedding por LIVRO (resumo)
 */
function loadDoutrina() {
    const indexPath = path.join(KNOWLEDGE_PATH, 'doutrina', 'doutrina_index.json');
    if (!fs.existsSync(indexPath)) return [];

    const data = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    const items = [];

    for (const livro of data.livros || []) {
        // Pegar primeiro arquivo de texto como resumo
        let conteudo = '';
        if (livro.arquivosTexto && livro.arquivosTexto.length > 0) {
            const firstFile = path.join(KNOWLEDGE_PATH, 'doutrina', 'textos', livro.arquivosTexto[0]);
            if (fs.existsSync(firstFile)) {
                conteudo = fs.readFileSync(firstFile, 'utf-8').slice(0, 2000);
            }
        }

        items.push({
            id: `doutrina_${livro.id}`,
            tipo: 'doutrina',
            titulo: livro.titulo,
            autor: livro.autor,
            citacao: livro.citacaoABNT,
            conteudo: conteudo || `${livro.titulo} ${livro.autor || ''}`
        });
    }

    return items;
}

/**
 * Carrega jurisprudência (súmulas, repetitivos, STF)
 */
function loadJurisprudencia() {
    const items = [];
    const jurisPath = path.join(KNOWLEDGE_PATH, 'jurisprudencia');

    // Súmulas STJ
    const sumulasPath = path.join(jurisPath, 'stj_sumulas.json');
    if (fs.existsSync(sumulasPath)) {
        const sumulas = JSON.parse(fs.readFileSync(sumulasPath, 'utf-8'));
        for (const s of sumulas.sumulas || []) {
            items.push({
                id: `sumula_${s.id}`,
                tipo: 'sumula',
                titulo: `Súmula ${s.numero} STJ`,
                conteudo: s.enunciado
            });
        }
    }

    // Repetitivos STJ
    const repetitivosPath = path.join(jurisPath, 'stj_repetitivos.json');
    if (fs.existsSync(repetitivosPath)) {
        const repetitivos = JSON.parse(fs.readFileSync(repetitivosPath, 'utf-8'));
        for (const t of repetitivos.temas || []) {
            items.push({
                id: `repetitivo_${t.id}`,
                tipo: 'repetitivo',
                titulo: `Tema ${t.numero} STJ`,
                conteudo: t.tese || t.questaoSubmetida || ''
            });
        }
    }

    // STF Execução Penal
    const stfPath = path.join(jurisPath, 'stf_execucao_penal.json');
    if (fs.existsSync(stfPath)) {
        const stf = JSON.parse(fs.readFileSync(stfPath, 'utf-8'));
        for (const j of stf.julgados || []) {
            items.push({
                id: `stf_${j.id}`,
                tipo: 'acordao',
                titulo: `${j.tipo} ${j.numero} STF`,
                conteudo: j.ementa || ''
            });
        }
    }

    return items;
}

/**
 * Carrega legislação
 */
function loadLegislacao() {
    const indexPath = path.join(KNOWLEDGE_PATH, 'legislacao', 'legislacao_index.json');
    if (!fs.existsSync(indexPath)) return [];

    const data = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    const items = [];
    const legPath = path.join(KNOWLEDGE_PATH, 'legislacao');

    for (const lei of data.leis || []) {
        // Ler primeiros 2000 caracteres do arquivo em vigor
        let conteudo = '';
        if (lei.arquivoVigor) {
            const emVigorFile = path.join(legPath, lei.arquivoVigor);
            if (fs.existsSync(emVigorFile)) {
                conteudo = fs.readFileSync(emVigorFile, 'utf-8').slice(0, 2000);
            }
        }

        items.push({
            id: `lei_${lei.id}`,
            tipo: 'legislacao',
            titulo: lei.titulo,
            apelido: lei.apelido,
            conteudo: conteudo || `${lei.titulo} ${lei.apelido || ''}`
        });
    }

    return items;
}

/**
 * Função principal
 */
async function main() {
    console.log('='.repeat(60));
    console.log('estagIA - Pré-computação COMPLETA de Embeddings');
    console.log('='.repeat(60));

    if (!GEMINI_API_KEY) {
        console.error('❌ GEMINI_API_KEY não configurada');
        process.exit(1);
    }

    // Carregar cache existente
    let cache = {};
    if (fs.existsSync(OUTPUT_PATH)) {
        cache = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'));
        console.log(`📦 Cache existente: ${Object.keys(cache).length} itens`);
    }

    // Carregar todos os tipos de conteúdo
    console.log('\n📚 Carregando conteúdo...');
    const doutrina = loadDoutrina();
    console.log(`   Doutrina: ${doutrina.length} livros`);

    const jurisprudencia = loadJurisprudencia();
    console.log(`   Jurisprudência: ${jurisprudencia.length} julgados`);

    const legislacao = loadLegislacao();
    console.log(`   Legislação: ${legislacao.length} leis`);

    const todosItens = [...doutrina, ...jurisprudencia, ...legislacao];
    console.log(`\n📊 Total a processar: ${todosItens.length} itens`);

    // Processar
    let processados = 0;
    let erros = 0;
    let pulados = 0;

    for (const item of todosItens) {
        const key = item.id;

        // Pular se já está no cache
        if (cache[key]) {
            pulados++;
            continue;
        }

        // Gerar embedding
        const textoParaEmbed = `${item.titulo || ''} ${item.conteudo || ''}`.slice(0, 2000);
        console.log(`[${processados + pulados + 1}/${todosItens.length}] ${item.tipo}: ${(item.titulo || '').slice(0, 50)}...`);

        const embedding = await getEmbedding(textoParaEmbed);

        if (embedding) {
            cache[key] = {
                tipo: item.tipo,
                titulo: item.titulo,
                autor: item.autor,
                apelido: item.apelido,
                citacao: item.citacao,
                embedding: embedding,
                tamanho: embedding.length
            };
            processados++;
        } else {
            erros++;
        }

        // Rate limiting
        await new Promise(r => setTimeout(r, DELAY_MS));

        // Salvar periodicamente
        if (processados % 20 === 0 && processados > 0) {
            fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cache, null, 2));
            console.log(`  💾 Cache salvo (${Object.keys(cache).length} itens)`);
        }
    }

    // Salvar final
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cache, null, 2));

    console.log('\n' + '='.repeat(60));
    console.log('✅ Pré-computação concluída!');
    console.log(`   Processados: ${processados}`);
    console.log(`   Pulados (cache): ${pulados}`);
    console.log(`   Erros: ${erros}`);
    console.log(`   Total no cache: ${Object.keys(cache).length}`);
    console.log(`   Arquivo: ${OUTPUT_PATH}`);
}

main().catch(console.error);
