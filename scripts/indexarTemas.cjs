/**
 * estagIA - Script de Indexação Temática
 * 
 * Percorre TODA a base de conhecimento e mapeia cada item por tema/agrupador.
 * Usa Qwen local para identificar temas em itens não classificados.
 * 
 * Uso:
 *   node scripts/indexarTemas.cjs
 *   node scripts/indexarTemas.cjs --force  (reindexar tudo)
 * 
 * @version 1.0.0
 * @author estagIA Team
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..');
const KNOWLEDGE_DIR = path.join(ROOT, 'knowledge');
const OUTPUT_FILE = path.join(KNOWLEDGE_DIR, 'indice_tematico_v2.json');
const PROGRESS_FILE = path.join(KNOWLEDGE_DIR, 'indexacao_progress.json');

// Diretórios a indexar
const DIRS_TO_INDEX = [
    { dir: 'decisoes', tipo: 'modelo' },
    { dir: 'jurisprudencia', tipo: 'jurisprudencia' },
    { dir: 'legislacao', tipo: 'legislacao' },
    { dir: 'doutrina', tipo: 'doutrina' },
];

// Temas/Agrupadores conhecidos
const TEMAS_CONHECIDOS = [
    'remicao', 'progressao', 'livramento', 'indulto',
    'unificacao', 'falta_grave', 'retificacao', 'saida_temporaria',
    'prisao_domiciliar', 'detração', 'soma_penas', 'extinção',
    'trabalho_externo', 'regressao', 'revogacao', 'suspensao',
];

// ============================================
// CONFIGURAÇÃO QWEN
// ============================================
const OLLAMA_URL = 'http://localhost:11434';
const MODEL = 'qwen2.5:7b-instruct-q4_K_M';

// ============================================
// CALL QWEN LOCAL
// ============================================
async function callQwen(prompt) {
    return new Promise((resolve) => {
        const requestData = JSON.stringify({
            model: MODEL,
            prompt,
            stream: false,
            options: { temperature: 0.1, num_predict: 200 },
        });

        const options = {
            hostname: 'localhost',
            port: 11434,
            path: '/api/generate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestData),
            },
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    resolve(data.response || '');
                } catch (e) {
                    resolve('');
                }
            });
        });

        req.on('error', () => resolve(''));
        req.setTimeout(30000, () => { req.destroy(); resolve(''); });
        req.write(requestData);
        req.end();
    });
}

// ============================================
// IDENTIFICAR TEMAS NO TEXTO
// ============================================
async function identificarTemas(conteudo, usarIA = false) {
    const temas = [];
    const lower = conteudo.toLowerCase();

    // Detecção por palavras-chave
    const keywords = {
        remicao: ['remição', 'remicao', 'art. 126', 'art. 127', 'art. 128', 'art. 129', 'art. 130', 'enem', 'encceja', 'leitura'],
        progressao: ['progressão', 'progressao', 'art. 112', 'regime semiaberto', 'regime aberto', 'fração'],
        livramento: ['livramento', 'condicional', 'art. 83', 'art. 84', 'art. 85', 'art. 86', 'art. 87', 'art. 88'],
        indulto: ['indulto', 'decreto', 'natalino', 'comutação', 'comutacao', 'graça'],
        unificacao: ['unificação', 'unificacao', 'soma', 'tema 1.006', 'tema 1006'],
        falta_grave: ['falta grave', 'falta disciplinar', 'art. 50', 'art. 51', 'art. 52', 'súmula 534'],
        retificacao: ['retificação', 'retificacao', 'gep', 'guia', 'cálculo', 'calculo'],
        saida_temporaria: ['saída temporária', 'saida temporaria', 'art. 122', 'art. 123', 'art. 124', 'art. 125'],
        prisao_domiciliar: ['prisão domiciliar', 'prisao domiciliar', 'art. 117', 'art. 318'],
        detracao: ['detração', 'detracao', 'art. 42'],
        trabalho_externo: ['trabalho externo', 'art. 36', 'art. 37'],
        regressao: ['regressão', 'regressao', 'regime mais gravoso'],
    };

    for (const [tema, termos] of Object.entries(keywords)) {
        for (const termo of termos) {
            if (lower.includes(termo)) {
                if (!temas.includes(tema)) temas.push(tema);
                break;
            }
        }
    }

    // Se não encontrou nada e usarIA está habilitado, usar Qwen
    if (temas.length === 0 && usarIA) {
        const prompt = `Analise o texto jurídico abaixo e identifique qual tema de EXECUÇÃO PENAL ele trata.
Responda APENAS com os temas aplicáveis separados por vírgula.
Temas possíveis: ${TEMAS_CONHECIDOS.join(', ')}

TEXTO:
${conteudo.substring(0, 1500)}

TEMAS:`;

        const resposta = await callQwen(prompt);
        const temasIA = resposta.toLowerCase().split(',').map(t => t.trim()).filter(t => TEMAS_CONHECIDOS.includes(t));
        temas.push(...temasIA);
    }

    return [...new Set(temas)];
}

// ============================================
// PROCESSAR ARQUIVO
// ============================================
async function processarArquivo(filePath, tipo) {
    const ext = path.extname(filePath).toLowerCase();
    let conteudo = '';

    if (['.txt', '.md', '.json'].includes(ext)) {
        try {
            conteudo = fs.readFileSync(filePath, 'utf-8');
            if (ext === '.json') {
                const data = JSON.parse(conteudo);
                conteudo = JSON.stringify(data);
            }
        } catch (e) {
            return null;
        }
    } else {
        return null;
    }

    if (conteudo.length < 50) return null;

    const temas = await identificarTemas(conteudo, true);
    const nome = path.basename(filePath, ext);

    return {
        id: `${tipo}_${nome}`,
        tipo,
        arquivo: filePath,
        nome,
        temas,
        tamanho: conteudo.length,
        dataIndexacao: new Date().toISOString(),
    };
}

// ============================================
// INDEXAR DIRETÓRIO
// ============================================
async function indexarDiretorio(baseDir, tipo, indice, progress) {
    const dirPath = path.join(KNOWLEDGE_DIR, baseDir);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dirPath, file.name);

        if (file.isDirectory()) {
            // Recursivo para subpastas
            const subFiles = fs.readdirSync(fullPath);
            for (const sub of subFiles) {
                const subPath = path.join(fullPath, sub);
                if (!fs.statSync(subPath).isDirectory()) {
                    const result = await processarArquivo(subPath, tipo);
                    if (result) {
                        indice.items[result.id] = result;
                        progress.processados++;

                        // Adicionar ao índice por tema
                        for (const tema of result.temas) {
                            if (!indice.por_tema[tema]) indice.por_tema[tema] = [];
                            if (!indice.por_tema[tema].includes(result.id)) {
                                indice.por_tema[tema].push(result.id);
                            }
                        }

                        process.stdout.write(`\r   [${progress.processados}] ${result.id.substring(0, 40).padEnd(40)} | Temas: ${result.temas.join(', ') || 'nenhum'}`);
                    }
                }
            }
        } else {
            const result = await processarArquivo(fullPath, tipo);
            if (result) {
                indice.items[result.id] = result;
                progress.processados++;

                for (const tema of result.temas) {
                    if (!indice.por_tema[tema]) indice.por_tema[tema] = [];
                    if (!indice.por_tema[tema].includes(result.id)) {
                        indice.por_tema[tema].push(result.id);
                    }
                }

                process.stdout.write(`\r   [${progress.processados}] ${result.id.substring(0, 40).padEnd(40)} | Temas: ${result.temas.join(', ') || 'nenhum'}`);
            }
        }
    }
}

// ============================================
// MAIN
// ============================================
async function main() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🗂️ Indexador Temático - estagIA');
    console.log('═══════════════════════════════════════════════════════\n');

    const indice = {
        version: '2.0.0',
        geradoEm: new Date().toISOString(),
        items: {},
        por_tema: {},
        estatisticas: {},
    };

    const progress = { processados: 0 };

    // Verificar Qwen
    console.log('🔍 Verificando Qwen local...');
    const test = await callQwen('Responda: OK');
    if (test.includes('OK') || test.length > 0) {
        console.log('   ✅ Qwen disponível para análise de temas\n');
    } else {
        console.log('   ⚠️ Qwen não disponível - usando apenas palavras-chave\n');
    }

    // Processar cada diretório
    for (const { dir, tipo } of DIRS_TO_INDEX) {
        console.log(`\n📂 Indexando: ${dir.toUpperCase()}`);
        console.log('-'.repeat(50));
        await indexarDiretorio(dir, tipo, indice, progress);
    }

    // Estatísticas
    console.log('\n\n' + '═'.repeat(50));
    console.log('📊 ESTATÍSTICAS');
    console.log('═'.repeat(50));

    console.log(`\n   Total de itens: ${Object.keys(indice.items).length}`);

    for (const [tema, items] of Object.entries(indice.por_tema)) {
        console.log(`   ${tema.padEnd(20)} | ${items.length} itens`);
        indice.estatisticas[tema] = items.length;
    }

    // Salvar
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(indice, null, 2));
    console.log(`\n💾 Índice salvo em: ${OUTPUT_FILE}`);

    // Salvar progresso
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify({
        ultimaExecucao: new Date().toISOString(),
        totalItens: Object.keys(indice.items).length,
        totalTemas: Object.keys(indice.por_tema).length,
    }, null, 2));

    return indice;
}

// Executar
main().catch(console.error);
