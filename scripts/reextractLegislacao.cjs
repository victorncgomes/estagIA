/**
 * Script para re-extrair legislações pendentes do índice
 * Usa os nomes corretos definidos no índice
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../knowledge/legislacao');
const indexPath = path.join(outputDir, 'legislacao_index.json');

// Ler índice
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

// HTML Parser
function cleanHtml(text) {
    return text
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<\/(p|div|br|h[1-6]|li|tr)>/gi, '\n')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num)))
        .replace(/[ \t]+/g, ' ')
        .replace(/\n\s+/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function parseHtml(html) {
    html = html.replace(/<!--[\s\S]*?-->/g, '');
    const strikeRegex = /<strike[^>]*>([\s\S]*?)<\/strike>/gi;
    const strikeParts = [];
    let match;
    while ((match = strikeRegex.exec(html)) !== null) {
        strikeParts.push({ content: match[1] });
    }
    let textoEmVigor = html.replace(strikeRegex, '');
    return {
        textoEmVigor: cleanHtml(textoEmVigor),
        textoRevogado: strikeParts.map(p => cleanHtml(p.content)).join('\n\n---REVOGADO---\n\n'),
        totalRevogados: strikeParts.length
    };
}

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml'
            }
        };
        const req = protocol.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                fetchUrl(res.headers.location).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode}`));
                return;
            }
            let data = '';
            res.setEncoding('latin1');
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(Buffer.from(data, 'latin1').toString('utf8')));
        });
        req.on('error', reject);
        req.setTimeout(60000, () => { req.destroy(); reject(new Error('Timeout')); });
    });
}

async function processLei(lei) {
    console.log(`\n📥 Processando: ${lei.apelido}`);
    console.log(`   URL: ${lei.url}`);

    try {
        const html = await fetchUrl(lei.url);
        const result = parseHtml(html);

        // Salvar texto em vigor
        const vigorPath = path.join(outputDir, lei.arquivoVigor);
        fs.writeFileSync(vigorPath, result.textoEmVigor, 'utf8');
        console.log(`   ✅ ${lei.arquivoVigor}: ${result.textoEmVigor.length} chars`);

        // Salvar histórico se houver
        if (result.totalRevogados > 0 && lei.arquivoHistorico) {
            const histPath = path.join(outputDir, lei.arquivoHistorico);
            fs.writeFileSync(histPath, result.textoRevogado, 'utf8');
            console.log(`   📜 ${lei.arquivoHistorico}: ${result.totalRevogados} trechos`);
        }

        // Atualizar lei no índice
        lei.tamanhoVigor = result.textoEmVigor.length;
        lei.trechosRevogados = result.totalRevogados;
        lei.ultimaAtualizacao = new Date().toISOString();
        delete lei.pendente;

        return true;
    } catch (err) {
        console.log(`   ❌ Erro: ${err.message}`);
        return false;
    }
}

async function main() {
    const pendentes = index.leis.filter(l => l.pendente);
    console.log(`\n🔄 Re-extraindo ${pendentes.length} legislações pendentes...\n`);

    let sucesso = 0;
    for (const lei of pendentes) {
        if (await processLei(lei)) sucesso++;
        // Delay entre requisições
        await new Promise(r => setTimeout(r, 2000));
    }

    // Salvar índice atualizado
    index.meta.ultimaAtualizacao = new Date().toISOString();
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');

    console.log(`\n✅ Concluído: ${sucesso}/${pendentes.length} legislações processadas`);
}

main();
