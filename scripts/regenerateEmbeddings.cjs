/**
 * estagIA - Regeneração de Embeddings com Conteúdo Completo
 * 
 * Gera embeddings baseados no CONTEÚDO COMPLETO dos modelos (não apenas nome)
 * Isso permite busca semântica muito mais precisa
 * 
 * Uso: node scripts/regenerateEmbeddings.cjs
 * 
 * @version 2.0.0
 */

const fs = require('fs');
const path = require('path');

// Configuração
const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');
const MODELOS_INDEX = path.join(KNOWLEDGE_DIR, 'decisoes', 'modelos_completos_index.json');
const TEXTOS_DIR = path.join(KNOWLEDGE_DIR, 'decisoes', 'textos_completos');
const OUTPUT_FILE = path.join(KNOWLEDGE_DIR, 'embeddings_modelos_v2.json');

// Configuração da API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const EMBEDDING_MODEL = 'text-embedding-004';
const EMBEDDING_DIM = 768;
const MAX_TEXT_LENGTH = 8000; // Limite de caracteres para embedding

// Delay entre requisições para evitar rate limit
const DELAY_MS = 100;

/**
 * Gera embedding via Gemini API
 */
async function generateEmbedding(text) {
    const truncatedText = text.substring(0, MAX_TEXT_LENGTH);

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent?key=${GEMINI_API_KEY}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: `models/${EMBEDDING_MODEL}`,
                content: { parts: [{ text: truncatedText }] }
            })
        }
    );

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Gemini API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.embedding.values;
}

/**
 * Função principal
 */
async function main() {
    console.log('='.repeat(60));
    console.log('📚 estagIA - Regeneração de Embeddings v2.0');
    console.log('='.repeat(60));
    console.log('');

    // Verificar API key
    let apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        // Tentar ler do .env do backend
        const envPath = path.join(__dirname, '..', 'backend', '.env');
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf-8');
            const match = envContent.match(/GEMINI_API_KEY=([^\r\n]+)/);
            if (match) {
                apiKey = match[1].trim();
            }
        }
    }

    if (!apiKey) {
        console.error('❌ GEMINI_API_KEY não configurada');
        console.log('   Configure a variável de ambiente ou adicione ao backend/.env');
        process.exit(1);
    }

    console.log(`🔑 API Key encontrada: ${apiKey.substring(0, 10)}...`);

    // Carregar índice de modelos
    if (!fs.existsSync(MODELOS_INDEX)) {
        console.error('❌ Índice de modelos não encontrado:', MODELOS_INDEX);
        console.log('   Execute primeiro: node scripts/extractDocxComplete.cjs');
        process.exit(1);
    }

    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));
    console.log(`📋 Carregados ${indice.modelos.length} modelos do índice`);

    // Carregar embeddings existentes (se houver)
    let embeddingsCache = {};
    if (fs.existsSync(OUTPUT_FILE)) {
        try {
            embeddingsCache = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
            console.log(`📦 Cache existente: ${Object.keys(embeddingsCache).length} embeddings`);
        } catch (e) {
            console.log('⚠️ Erro ao ler cache, recriando...');
        }
    }

    const stats = {
        total: indice.modelos.length,
        processados: 0,
        cache_hit: 0,
        erros: 0
    };

    const newEmbeddings = {};

    // Processar cada modelo
    for (const modelo of indice.modelos) {
        const arquivoTexto = modelo.arquivo_texto;
        const textoPath = path.join(TEXTOS_DIR, arquivoTexto);

        // Verificar se já existe no cache
        if (embeddingsCache[modelo.arquivo] && embeddingsCache[modelo.arquivo].embedding) {
            newEmbeddings[modelo.arquivo] = embeddingsCache[modelo.arquivo];
            stats.cache_hit++;
            continue;
        }

        // Ler conteúdo
        if (!fs.existsSync(textoPath)) {
            console.log(`⚠️ Arquivo não encontrado: ${arquivoTexto}`);
            stats.erros++;
            continue;
        }

        const conteudo = fs.readFileSync(textoPath, 'utf-8');

        console.log(`📄 [${stats.processados + 1}/${indice.modelos.length}] ${modelo.nome.substring(0, 50)}...`);

        try {
            // Gerar embedding
            const embedding = await generateEmbedding(conteudo);

            newEmbeddings[modelo.arquivo] = {
                nome: modelo.nome,
                agrupador: modelo.agrupador,
                resultado: modelo.resultado,
                tamanho: conteudo.length,
                embedding: embedding,
                conteudo_preview: conteudo.substring(0, 300).replace(/\n/g, ' '),
                gerado_em: new Date().toISOString()
            };

            stats.processados++;

            // Delay para evitar rate limit
            await new Promise(resolve => setTimeout(resolve, DELAY_MS));

            // Salvar periodicamente
            if (stats.processados % 10 === 0) {
                fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newEmbeddings, null, 2), 'utf-8');
                console.log(`   💾 Checkpoint salvo (${stats.processados} embeddings)`);
            }

        } catch (error) {
            console.error(`   ❌ Erro: ${error.message}`);
            stats.erros++;
        }
    }

    // Salvar final
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newEmbeddings, null, 2), 'utf-8');

    // Relatório
    console.log('\n');
    console.log('='.repeat(60));
    console.log('📊 RELATÓRIO FINAL');
    console.log('='.repeat(60));
    console.log(`\n✅ Processados: ${stats.processados}`);
    console.log(`📦 Cache hits: ${stats.cache_hit}`);
    console.log(`❌ Erros: ${stats.erros}`);
    console.log(`💾 Total embeddings: ${Object.keys(newEmbeddings).length}`);
    console.log(`📁 Salvo em: ${OUTPUT_FILE}`);

    // Estatísticas por agrupador
    const porAgrupador = {};
    for (const [arquivo, data] of Object.entries(newEmbeddings)) {
        if (!porAgrupador[data.agrupador]) {
            porAgrupador[data.agrupador] = 0;
        }
        porAgrupador[data.agrupador]++;
    }

    console.log('\n🏷️ Por agrupador:');
    for (const [agrupador, count] of Object.entries(porAgrupador).sort((a, b) => b[1] - a[1])) {
        console.log(`   ${agrupador}: ${count}`);
    }

    console.log('='.repeat(60));
}

main().catch(console.error);
