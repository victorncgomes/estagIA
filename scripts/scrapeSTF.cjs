/**
 * Script de Scraping - STF Jurisprudência
 * Extrai acórdãos de repercussão geral sobre execução penal
 * 
 * @version 1.0.0
 * @usage: node scripts/scrapeSTF.cjs
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configurações
const CONFIG = {
    url: 'https://jurisprudencia.stf.jus.br/pages/search?base=acordaos&is_repercussao_geral=true&pesquisa_inteiro_teor=false&sinonimo=true&plural=true&radicais=false&buscaExata=true&page=1&pageSize=50&queryString=%22execucao%20penal%22&sort=_score&sortBy=desc',
    outputDir: path.join(__dirname, '..', 'knowledge', 'jurisprudencia'),
    outputFile: 'stf_execucao_penal.json',
    delayShort: 500,
    delayMedium: 1000,
    delayLong: 2500,
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

/**
 * Extrai dados de uma página de resultados do STF
 */
async function extractPageData(page) {
    return await page.evaluate(() => {
        const results = [];

        // Encontrar todos os containers de resultado
        const containers = document.querySelectorAll('.result-container.jud-text');

        containers.forEach((container) => {
            try {
                // Processo (h4)
                const h4 = container.querySelector('h4');
                const processo = h4 ? h4.innerText.trim() : '';

                // Metadados
                const metadataDiv = container.querySelector('.mb-15.jud-text');
                const metadataText = metadataDiv ? metadataDiv.innerText : '';

                // Extrair campos via regex
                const relatorMatch = metadataText.match(/Relator\(a\):\s*(.+?)(?=\n|$)/);
                const orgaoMatch = metadataText.match(/Órgão julgador:\s*(.+?)(?=\n|$)/);
                const julgamentoMatch = metadataText.match(/Julgamento:\s*(\d{2}\/\d{2}\/\d{4})/);
                const publicacaoMatch = metadataText.match(/Publicação:\s*(\d{2}\/\d{2}\/\d{4})/);

                // Tema (repercussão geral)
                const temaMatch = metadataText.match(/Tema\s*(\d+)/);

                // Ementa - procurar label "Ementa" e pegar conteúdo
                let ementa = '';
                const allElements = container.querySelectorAll('h4, strong, span, div');
                for (const el of allElements) {
                    if (el.innerText.trim() === 'Ementa') {
                        // O texto da ementa está no parent ou próximo sibling
                        const parent = el.parentElement;
                        if (parent) {
                            ementa = parent.innerText.replace('Ementa', '').trim();
                        }
                        break;
                    }
                }

                // Fallback: procurar div após o metadata que contém texto longo
                if (!ementa) {
                    const divs = container.querySelectorAll('div');
                    for (const div of divs) {
                        const text = div.innerText;
                        if (text.includes('Ementa:') || (text.length > 200 && !text.includes('Relator'))) {
                            ementa = text.replace(/^Ementa:?\s*/i, '').trim();
                            break;
                        }
                    }
                }

                results.push({
                    processo,
                    relator: relatorMatch ? relatorMatch[1].trim() : '',
                    orgaoJulgador: orgaoMatch ? orgaoMatch[1].trim() : '',
                    dataJulgamento: julgamentoMatch ? julgamentoMatch[1] : '',
                    dataPublicacao: publicacaoMatch ? publicacaoMatch[1] : '',
                    tema: temaMatch ? temaMatch[1] : '',
                    ementa,
                    metadataRaw: metadataText
                });

            } catch (e) {
                console.error('Erro:', e.message);
            }
        });

        return results;
    });
}

/**
 * Formata ementa no padrão de citação
 * Formato: Ementa text (PROCESSO, Relator(a): NOME, Órgão, julgado em DATA, PUBLICADO em DATA)
 */
function formatarEmentaPadrao(dados) {
    let texto = dados.ementa;

    // Limpar "Ementa:" do início se houver
    texto = texto.replace(/^Ementa:?\s*/i, '');

    const partes = [];
    if (dados.processo) partes.push(dados.processo);
    if (dados.relator) partes.push(`Relator(a): ${dados.relator}`);
    if (dados.orgaoJulgador) partes.push(dados.orgaoJulgador);
    if (dados.dataJulgamento) partes.push(`julgado em ${dados.dataJulgamento}`);
    if (dados.dataPublicacao) partes.push(`PUBLICADO em ${dados.dataPublicacao}`);

    if (partes.length > 0) {
        texto += `\n(${partes.join(', ')})`;
    }

    return texto;
}

async function scrapeSTF() {
    console.log('\n🔍 STF Jurisprudência Scraper v1.0\n');
    console.log('📊 Buscando acórdãos de repercussão geral sobre execução penal...\n');

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1400, height: 1000 },
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(60000);

    const allResults = [];

    try {
        // 1. ACESSAR PÁGINA (com 50 resultados por página para pegar todos)
        console.log('📡 Acessando STF...');
        await page.goto(CONFIG.url, { waitUntil: 'networkidle2', timeout: 60000 });
        await delay(CONFIG.delayLong);

        // 2. AGUARDAR RESULTADOS
        console.log('⏳ Aguardando resultados...');
        await page.waitForSelector('.result-container', { timeout: 30000 });
        await delay(CONFIG.delayMedium);

        // Verificar total
        const totalText = await page.evaluate(() => {
            const match = document.body.innerText.match(/(\d+)\s*resultado/i);
            return match ? match[1] : 'N/A';
        });
        console.log(`📊 Total de resultados: ${totalText}\n`);

        // 3. EXTRAIR DADOS
        console.log('📋 Extraindo dados...');
        const pageData = await extractPageData(page);

        console.log(`   Encontrados: ${pageData.length} acórdãos`);

        for (const item of pageData) {
            allResults.push({
                id: `stf_${allResults.length + 1}`,
                fonte: 'STF',
                tipo: 'Acórdão',
                repercussaoGeral: true,
                ...item,
                ementaFormatada: formatarEmentaPadrao(item),
                dataExtracao: new Date().toISOString()
            });
        }

        // Se houver mais páginas, continuar
        let currentPage = 1;
        const maxPages = 5; // Safety limit

        while (allResults.length < parseInt(totalText) && currentPage < maxPages) {
            const hasNext = await page.evaluate(() => {
                const nextBtn = document.querySelector('button[aria-label="Next page"], a.next, [class*="next"]');
                if (nextBtn && !nextBtn.disabled) {
                    nextBtn.click();
                    return true;
                }
                return false;
            });

            if (!hasNext) break;

            currentPage++;
            console.log(`   Página ${currentPage}...`);
            await delay(CONFIG.delayMedium);

            const moreData = await extractPageData(page);
            for (const item of moreData) {
                if (!allResults.some(r => r.processo === item.processo)) {
                    allResults.push({
                        id: `stf_${allResults.length + 1}`,
                        fonte: 'STF',
                        tipo: 'Acórdão',
                        repercussaoGeral: true,
                        ...item,
                        ementaFormatada: formatarEmentaPadrao(item),
                        dataExtracao: new Date().toISOString()
                    });
                }
            }
        }

    } catch (error) {
        console.error('\n❌ Erro:', error.message);
    } finally {
        // SALVAR RESULTADOS
        const outputPath = path.join(CONFIG.outputDir, CONFIG.outputFile);
        fs.writeFileSync(outputPath, JSON.stringify({
            meta: {
                fonte: 'STF - Supremo Tribunal Federal',
                tipo: 'Acórdãos de Repercussão Geral',
                termoBusca: '"execucao penal"',
                dataExtracao: new Date().toISOString(),
                totalExtraido: allResults.length
            },
            jurisprudencias: allResults
        }, null, 2));

        console.log(`\n${'='.repeat(60)}`);
        console.log(`✅ SCRAPING STF CONCLUÍDO`);
        console.log(`${'='.repeat(60)}`);
        console.log(`📊 Total extraído: ${allResults.length} acórdãos`);
        console.log(`📁 Arquivo: ${outputPath}`);
        console.log(`${'='.repeat(60)}\n`);

        await browser.close();
    }
}

scrapeSTF().catch(console.error);
