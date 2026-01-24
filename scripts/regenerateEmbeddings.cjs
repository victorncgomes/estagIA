/**
 * estagIA - Regeneração de Embeddings v2.0
 * 
 * Gera embeddings para TODOS os 256 modelos do novo índice
 * Usa modelos_completos_index.json (v3.0.0)
 * 
 * Uso: node scripts/regenerateEmbeddings.cjs
 * 
 * @version 2.0.0
 */

const fs = require('fs');
const path = require('path');

// Carregar .env e .env.local manualmente
function loadEnv() {
    const envFiles = ['.env', '.env.local'];
    for (const envFile of envFiles) {
        const envPath = path.join(__dirname, '..', envFile);
        if (fs.existsSync(envPath)) {
            const content = fs.readFileSync(envPath, 'utf-8');
            for (const line of content.split('\n')) {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#')) {
                    const eqIndex = trimmed.indexOf('=');
                    if (eqIndex > 0) {
                        const key = trimmed.slice(0, eqIndex).trim();
                        const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
                        if (!process.env[key]) {
                            process.env[key] = value;
                        }
                    }
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
const DECISOES_PATH = path.join(KNOWLEDGE_PATH, 'decisoes');
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
            const errorText = await response.text();
            console.error(`Erro API: ${response.status} - ${errorText.slice(0, 100)}`);
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
 * Carrega índice completo de modelos (v3.0.0)
 */
function loadModelosIndex() {
    const indexPath = path.join(DECISOES_PATH, 'modelos_completos_index.json');
    if (!fs.existsSync(indexPath)) {
        console.error('Índice de modelos não encontrado:', indexPath);
        return { modelos: [], meta: {} };
    }

    return JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
}

/**
 * Carrega conteúdo de texto de um modelo
 */
function loadModeloContent(modelo) {
    // Tenta carregar do arquivo de texto
    if (modelo.arquivo_texto) {
        const textPath = path.join(DECISOES_PATH, 'textos_completos', modelo.arquivo_texto);
        if (fs.existsSync(textPath)) {
            return fs.readFileSync(textPath, 'utf-8').slice(0, 2000);
        }
    }

    // Fallback: usa preview do índice
    if (modelo.conteudo_preview) {
        return modelo.conteudo_preview;
    }

    // Último fallback: usa nome + agrupador
    return `${modelo.nome || ''} ${modelo.agrupador || ''}`;
}

/**
 * Função principal
 */
async function main() {
    console.log('='.repeat(60));
    console.log('📚 estagIA - Regeneração de Embeddings v2.0');
    console.log('='.repeat(60));

    if (!GEMINI_API_KEY) {
        console.error('❌ GEMINI_API_KEY não configurada');
        console.log('Configure no arquivo .env: VITE_GEMINI_API_KEY=sua_chave');
        process.exit(1);
    }

    // Carregar índice de modelos
    const { modelos, meta } = loadModelosIndex();
    console.log(`\n📋 ${modelos.length} modelos no índice (v${meta?.versao || '?'})`);

    // Estatísticas por agrupador
    if (meta?.estatisticas?.por_agrupador) {
        console.log('\n🏷️ Por agrupador:');
        const sorted = Object.entries(meta.estatisticas.por_agrupador)
            .sort((a, b) => b[1] - a[1]);
        for (const [agr, count] of sorted.slice(0, 6)) {
            console.log(`   ${agr}: ${count}`);
        }
        if (sorted.length > 6) {
            console.log(`   ... e mais ${sorted.length - 6} agrupadores`);
        }
    }

    // Carregar cache existente
    let cache = {};
    if (fs.existsSync(OUTPUT_PATH)) {
        cache = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'));
        console.log(`\n📦 Cache existente: ${Object.keys(cache).length} embeddings`);
    }

    // Processar modelos
    let processados = 0;
    let erros = 0;
    let pulados = 0;
    const startTime = Date.now();

    console.log('\n🔄 Processando modelos...\n');

    for (let i = 0; i < modelos.length; i++) {
        const modelo = modelos[i];
        const key = modelo.arquivo;

        // Pular se já está no cache
        if (cache[key] && cache[key].embedding) {
            pulados++;
            continue;
        }

        // Carregar conteúdo
        const conteudo = loadModeloContent(modelo);
        const textoParaEmbed = `${modelo.nome} ${modelo.agrupador} ${modelo.resultado || ''} ${conteudo}`.slice(0, 1500);

        // Gerar embedding
        const progress = `[${i + 1}/${modelos.length}]`;
        const nomeResumido = modelo.nome.slice(0, 40).padEnd(40);
        process.stdout.write(`${progress} ${nomeResumido}`);

        const embedding = await getEmbedding(textoParaEmbed);

        if (embedding) {
            cache[key] = {
                nome: modelo.nome,
                agrupador: modelo.agrupador,
                resultado: modelo.resultado || 'indefinido',
                pasta: modelo.pasta,
                embedding: embedding,
                tamanho: embedding.length,
                gerado_em: new Date().toISOString()
            };
            processados++;
            console.log(' ✅');
        } else {
            erros++;
            console.log(' ❌');
        }

        // Rate limiting
        await new Promise(r => setTimeout(r, DELAY_MS));

        // Salvar periodicamente (a cada 20 modelos)
        if ((processados + erros) % 20 === 0) {
            fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cache, null, 2));
            console.log(`\n   💾 Checkpoint: ${Object.keys(cache).length} embeddings salvos\n`);
        }
    }

    // Salvar final
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cache, null, 2));

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log('\n' + '='.repeat(60));
    console.log('📊 RELATÓRIO FINAL');
    console.log('='.repeat(60));
    console.log(`\n✅ Processados nesta execução: ${processados}`);
    console.log(`⏭️ Pulados (já em cache): ${pulados}`);
    console.log(`❌ Erros: ${erros}`);
    console.log(`📦 Total no cache: ${Object.keys(cache).length}`);
    console.log(`⏱️ Tempo: ${elapsed}s`);
    console.log(`\n💾 Cache salvo em: ${OUTPUT_PATH}`);
    console.log('='.repeat(60));

    // Estatísticas do cache
    const cacheStats = {};
    for (const item of Object.values(cache)) {
        const agr = item.agrupador || 'outros';
        cacheStats[agr] = (cacheStats[agr] || 0) + 1;
    }

    console.log('\n🏷️ Embeddings por agrupador:');
    for (const [agr, count] of Object.entries(cacheStats).sort((a, b) => b[1] - a[1])) {
        console.log(`   ${agr}: ${count}`);
    }
}

main().catch(console.error);
