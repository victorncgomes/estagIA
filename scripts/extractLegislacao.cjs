/**
 * Script para extrair legislação do Planalto.gov.br
 * Separa texto em vigor (sem strikethrough) do texto revogado (com strikethrough)
 * 
 * Uso: node scripts/extractLegislacao.cjs <url>
 * Exemplo: node scripts/extractLegislacao.cjs https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848.htm
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// HTML Parser simples
function parseHtml(html) {
    // Remover comentários HTML
    html = html.replace(/<!--[\s\S]*?-->/g, '');

    // Identificar e marcar conteúdo dentro de <strike>
    const strikeRegex = /<strike[^>]*>([\s\S]*?)<\/strike>/gi;
    const strikeParts = [];
    let match;

    while ((match = strikeRegex.exec(html)) !== null) {
        strikeParts.push({
            full: match[0],
            content: match[1],
            index: match.index
        });
    }

    // Remover tags strike para obter texto em vigor
    let textoEmVigor = html.replace(strikeRegex, '');

    // Limpar HTML para texto puro
    function cleanHtml(text) {
        return text
            // Remover scripts e styles
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
            // Preservar quebras de parágrafo
            .replace(/<\/(p|div|br|h[1-6]|li|tr)>/gi, '\n')
            .replace(/<br\s*\/?>/gi, '\n')
            // Remover todas as tags HTML
            .replace(/<[^>]+>/g, '')
            // Decodificar entidades HTML
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num)))
            // Limpar espaços extras
            .replace(/[ \t]+/g, ' ')
            .replace(/\n\s+/g, '\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
    }

    // Extrair título da lei
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? cleanHtml(titleMatch[1]) : 'Lei não identificada';

    // Identificar número da lei
    const lawNumMatch = title.match(/(Lei|Decreto-Lei|Decreto|Código|Constituição)[^\d]*(\d+[\d.]*)/i);
    const lawId = lawNumMatch ? `${lawNumMatch[1]}_${lawNumMatch[2]}`.replace(/\s+/g, '_').replace(/\./g, '_') : 'lei_desconhecida';

    return {
        titulo: title,
        id: lawId,
        textoEmVigor: cleanHtml(textoEmVigor),
        textoRevogado: strikeParts.map(p => cleanHtml(p.content)).join('\n\n---REVOGADO---\n\n'),
        totalRevogados: strikeParts.length,
        htmlOriginal: html
    };
}

// Função para baixar URL
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8'
            }
        };

        const req = protocol.get(url, options, (res) => {
            // Seguir redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                fetchUrl(res.headers.location).then(resolve).catch(reject);
                return;
            }

            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode}`));
                return;
            }

            let data = '';
            res.setEncoding('latin1'); // Planalto usa ISO-8859-1
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                // Converter para UTF-8
                const utf8 = Buffer.from(data, 'latin1').toString('utf8');
                resolve(utf8);
            });
        });

        req.on('error', reject);
        req.setTimeout(30000, () => {
            req.destroy();
            reject(new Error('Timeout'));
        });
    });
}

// Função principal
async function main() {
    const url = process.argv[2];

    if (!url) {
        console.log('Uso: node scripts/extractLegislacao.cjs <url>');
        console.log('Exemplo: node scripts/extractLegislacao.cjs https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848.htm');
        process.exit(1);
    }

    console.log(`🔍 Baixando: ${url}`);

    try {
        const html = await fetchUrl(url);
        console.log(`📄 HTML obtido: ${html.length} caracteres`);

        const result = parseHtml(html);
        console.log(`📋 Lei identificada: ${result.titulo}`);
        console.log(`🆔 ID: ${result.id}`);
        console.log(`✅ Texto em vigor: ${result.textoEmVigor.length} caracteres`);
        console.log(`❌ Trechos revogados: ${result.totalRevogados}`);

        // Salvar arquivos
        const outputDir = path.join(__dirname, '../knowledge/legislacao');

        // Salvar texto em vigor
        const vigorPath = path.join(outputDir, `${result.id}_em_vigor.txt`);
        fs.writeFileSync(vigorPath, result.textoEmVigor, 'utf8');
        console.log(`✅ Salvo: ${vigorPath}`);

        // Salvar texto revogado (histórico)
        if (result.textoRevogado.length > 0) {
            const revogadoPath = path.join(outputDir, `${result.id}_historico_revogado.txt`);
            fs.writeFileSync(revogadoPath, result.textoRevogado, 'utf8');
            console.log(`📜 Histórico: ${revogadoPath}`);
        }

        // Atualizar índice
        const indexPath = path.join(outputDir, 'legislacao_index.json');
        let index = { meta: {}, leis: [] };
        if (fs.existsSync(indexPath)) {
            index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        }

        // Verificar se já existe
        const existingIdx = index.leis.findIndex(l => l.url === url);
        const entry = {
            id: result.id,
            titulo: result.titulo,
            url: url,
            arquivoVigor: `${result.id}_em_vigor.txt`,
            arquivoHistorico: result.totalRevogados > 0 ? `${result.id}_historico_revogado.txt` : null,
            tamanhoVigor: result.textoEmVigor.length,
            trechosRevogados: result.totalRevogados,
            ultimaAtualizacao: new Date().toISOString()
        };

        if (existingIdx >= 0) {
            index.leis[existingIdx] = entry;
        } else {
            index.leis.push(entry);
        }

        index.meta.ultimaAtualizacao = new Date().toISOString();
        fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');
        console.log(`📑 Índice atualizado`);

        console.log('\n✅ Concluído!');

    } catch (error) {
        console.error(`❌ Erro: ${error.message}`);
        process.exit(1);
    }
}

main();
