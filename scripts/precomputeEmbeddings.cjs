/**
 * estagIA - Pré-computação de Embeddings
 * 
 * Gera embeddings para todos os 254 modelos e salva em JSON
 * Permite busca semântica instantânea sem chamadas de API em tempo real
 * 
 * Uso: node scripts/precomputeEmbeddings.cjs
 * 
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// Carregar .env manualmente (sem dependência dotenv)
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
const OUTPUT_PATH = path.join(KNOWLEDGE_PATH, 'embeddings_cache.json');

// Delay entre chamadas para respeitar rate limit
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
                content: { parts: [{ text: text.slice(0, 1500) }] }
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
 * Carrega índice de modelos - usa modelos_extraidos.json (254 arquivos)
 */
function loadModelosIndex() {
    // Usa modelos_extraidos.json que tem todos os 254 modelos
    const indexPath = path.join(KNOWLEDGE_PATH, 'decisoes', 'textos', 'modelos_extraidos.json');
    if (!fs.existsSync(indexPath)) {
        console.error('Índice de modelos extraídos não encontrado:', indexPath);
        return [];
    }

    const data = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    const modelos = [];

    // Estrutura: arquivos[] com {arquivo, categoria, outputFile, ...}
    if (data.arquivos && Array.isArray(data.arquivos)) {
        for (const item of data.arquivos) {
            modelos.push({
                arquivo: item.arquivo,
                nome: item.arquivo.replace(/\.(docx|odt)$/i, '').replace(/[_-]/g, ' '),
                categoria: item.categoria,
                outputFile: item.outputFile, // Caminho do arquivo .txt
                agrupador: item.categoria
            });
        }
    }

    return modelos;
}

/**
 * Carrega conteúdo extraído de um modelo
 */
function loadModeloContent(modelo) {
    // Usa outputFile diretamente se disponível
    if (modelo.outputFile) {
        const textPath = path.join(KNOWLEDGE_PATH, 'decisoes', 'textos', modelo.outputFile);
        if (fs.existsSync(textPath)) {
            return fs.readFileSync(textPath, 'utf-8').slice(0, 2000);
        }
    }

    // Fallback: tenta com nome transformado
    const baseName = modelo.arquivo.replace(/\.(docx|odt)$/i, '.txt');
    const textPath = path.join(KNOWLEDGE_PATH, 'decisoes', 'textos', baseName);

    if (fs.existsSync(textPath)) {
        return fs.readFileSync(textPath, 'utf-8').slice(0, 2000);
    }

    // Último fallback: usa nome do modelo + categoria
    return `${modelo.nome || ''} ${modelo.categoria || ''} ${modelo.agrupador || ''}`;
}

/**
 * Função principal
 */
async function main() {
    console.log('='.repeat(50));
    console.log('estagIA - Pré-computação de Embeddings');
    console.log('='.repeat(50));

    if (!GEMINI_API_KEY) {
        console.error('❌ GEMINI_API_KEY não configurada');
        console.log('Configure: set GEMINI_API_KEY=sua_chave');
        process.exit(1);
    }

    // Carregar modelos
    const modelos = loadModelosIndex();
    console.log(`\n📋 ${modelos.length} modelos encontrados`);

    // Carregar cache existente
    let cache = {};
    if (fs.existsSync(OUTPUT_PATH)) {
        cache = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'));
        console.log(`📦 Cache existente: ${Object.keys(cache).length} embeddings`);
    }

    // Processar modelos
    let processados = 0;
    let erros = 0;
    let pulados = 0;

    for (const modelo of modelos) {
        const key = modelo.arquivo;

        // Pular se já está no cache
        if (cache[key]) {
            pulados++;
            continue;
        }

        // Carregar conteúdo
        const conteudo = loadModeloContent(modelo);
        const textoParaEmbed = `${modelo.nome} ${conteudo}`.slice(0, 1500);

        // Gerar embedding
        console.log(`[${processados + 1}/${modelos.length}] ${modelo.nome.slice(0, 50)}...`);
        const embedding = await getEmbedding(textoParaEmbed);

        if (embedding) {
            cache[key] = {
                nome: modelo.nome,
                agrupador: modelo.agrupador,
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
        if (processados % 10 === 0) {
            fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cache, null, 2));
            console.log(`  💾 Cache salvo (${Object.keys(cache).length} embeddings)`);
        }
    }

    // Salvar final
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cache, null, 2));

    console.log('\n' + '='.repeat(50));
    console.log('✅ Pré-computação concluída!');
    console.log(`   Processados: ${processados}`);
    console.log(`   Pulados (cache): ${pulados}`);
    console.log(`   Erros: ${erros}`);
    console.log(`   Total no cache: ${Object.keys(cache).length}`);
    console.log(`   Arquivo: ${OUTPUT_PATH}`);
}

main().catch(console.error);
