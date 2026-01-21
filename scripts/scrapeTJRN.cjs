/**
 * Script de Scraping v6 - Jurisprudência TJRN
 * COM SELETORES CSS CORRETOS descobertos via browser subagent
 * 
 * IMPORTANTE: Execute a busca manualmente no browser PRIMEIRO com os filtros:
 * - Ementa: "execucao penal"
 * - Classes: Apelação Criminal, HC Criminal, Revisão Criminal, Agravo de Execução Penal
 * - Decisões: Colegiadas
 * - Órgão Julgador: Câmara Criminal, Tribunal Pleno
 * 
 * Depois execute este script - ele vai conectar ao browser existente
 * 
 * @version 6.0.0
 * @usage: node scripts/scrapeTJRN.cjs
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configurações
const CONFIG = {
    url: 'https://jurisprudencia.tjrn.jus.br/',
    searchTerm: '"execucao penal"',
    targetResults: 2500,
    resultsPerPage: 10,
    outputDir: path.join(__dirname, '..', 'knowledge', 'jurisprudencia'),
    outputFile: 'tjrn_execucao_penal.json',
    delayShort: 600,
    delayMedium: 1200,
    delayLong: 2500,
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

/**
 * Extrai dados de uma página de resultados usando os seletores corretos
 */
async function extractPageData(page) {
    return await page.evaluate(() => {
        const results = [];

        // Encontrar todos os números de processo (marcador de cada resultado)
        const processoInputs = document.querySelectorAll('input.resultado-numero');

        processoInputs.forEach((input) => {
            try {
                const processo = input.value || '';

                // Navegar para o container do resultado
                // O input está dentro de uma estrutura: div > div > form > div > input
                let container = input;
                for (let i = 0; i < 10; i++) {
                    container = container.parentElement;
                    if (!container) break;
                    // Procurar container que tenha blockquote (ementa) ou texto de metadados
                    if (container.querySelector('blockquote') ||
                        container.innerText?.includes('Classe :') ||
                        container.innerText?.includes('Magistrado')) {
                        break;
                    }
                }

                if (!container) return;

                const cardText = container.innerText || '';

                // === EXTRAIR METADADOS ===

                // Classe
                const classeMatch = cardText.match(/Classe\s*:\s*([^\n]+)/i);
                const classe = classeMatch ? classeMatch[1].trim() : '';

                // Órgão Julgador
                const orgaoMatch = cardText.match(/(?:Órgão Julgador|Orgão Julgador)[\/Vara]*\s*:\s*([^\n]+)/i);
                const orgao = orgaoMatch ? orgaoMatch[1].trim() : '';

                // Colegiado
                const colegiadoMatch = cardText.match(/Colegiado\s*:\s*([^\n]+)/i);
                const colegiado = colegiadoMatch ? colegiadoMatch[1].trim() : '';

                // Relator/Magistrado
                const relatorMatch = cardText.match(/(?:Magistrado\(a\)|Relator\(a\))\s*:\s*([^\n]+)/i);
                const relator = relatorMatch ? relatorMatch[1].trim() : '';

                // Data
                const dataMatch = cardText.match(/Data\s*:\s*(\d{2}\/\d{2}\/\d{4})/i);
                const data = dataMatch ? dataMatch[1] : '';

                // Tipo Documento
                const tipoMatch = cardText.match(/Tipo Documento\s*:\s*([^\n]+)/i);
                const tipo = tipoMatch ? tipoMatch[1].trim() : '';

                // === EXTRAIR EMENTA ===
                // A ementa está em blockquote > p
                const blockquote = container.querySelector('blockquote');
                let ementa = '';
                if (blockquote) {
                    const p = blockquote.querySelector('p');
                    ementa = p ? p.innerText.trim() : blockquote.innerText.trim();
                }

                // Fallback: procurar texto que começa com "EMENTA"
                if (!ementa) {
                    const ementaMatch = cardText.match(/EMENTA[:\s]+([^]+?)(?=\n\s*(?:Classe|Órgão|Magistrado|Data|Colegiado|Tipo)|$)/i);
                    if (ementaMatch) {
                        ementa = ementaMatch[1].trim();
                    }
                }

                // Limitar tamanho da ementa
                ementa = ementa.substring(0, 5000);

                results.push({
                    processo,
                    classe,
                    orgaoJulgador: orgao,
                    colegiado,
                    relator,
                    dataJulgamento: data,
                    tipo,
                    ementa
                });

            } catch (e) {
                console.error('Erro na extração:', e.message);
            }
        });

        return results;
    });
}

/**
 * Formata ementa no padrão oficial
 */
function formatarEmentaPadrao(dados) {
    let texto = dados.ementa;
    if (!texto.toUpperCase().startsWith('EMENTA')) {
        texto = `EMENTA: ${texto}`;
    }

    const partes = [];
    if (dados.classe) partes.push(dados.classe.toUpperCase());
    if (dados.processo) partes.push(dados.processo);
    if (dados.relator) partes.push(`Des. ${dados.relator}`);
    if (dados.orgaoJulgador) partes.push(dados.orgaoJulgador);
    if (dados.dataJulgamento) partes.push(`JULGADO em ${dados.dataJulgamento}`);

    if (partes.length > 0) {
        texto += `\n(${partes.join(', ')})`;
    }

    return texto;
}

async function scrapeTJRN() {
    console.log('\n🔍 TJRN Jurisprudência Scraper v6.0 (SELETORES CORRETOS)\n');
    console.log(`📊 Meta: ${CONFIG.targetResults} resultados`);
    console.log(`🌐 Conectando ao browser...\n`);

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1400, height: 1000 },
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(90000);

    const allResults = [];

    try {
        // 1. ACESSAR PÁGINA E CONFIGURAR FILTROS
        console.log('📡 Acessando site...');
        await page.goto(CONFIG.url, { waitUntil: 'networkidle2', timeout: 60000 });
        await delay(CONFIG.delayLong);

        // 2. CLICAR EM "SEGUNDO GRAU"
        console.log('🎯 Selecionando Segundo Grau...');
        await page.evaluate(() => {
            const links = document.querySelectorAll('a');
            for (const l of links) {
                if (l.textContent.trim() === 'Segundo Grau') {
                    l.click();
                    return;
                }
            }
        });
        await delay(CONFIG.delayMedium);

        // 3. PREENCHER CAMPO EMENTA
        console.log('✏️ Preenchendo campo Ementa...');
        // O campo ementa é identificado pelo label
        await page.evaluate((term) => {
            // Encontrar todos os inputs/textareas visíveis
            const inputs = document.querySelectorAll('input[type="text"], textarea');
            for (const inp of inputs) {
                // Verificar se está na área de "Segundo Grau" (coluna do meio)
                const rect = inp.getBoundingClientRect();
                // O campo ementa está aproximadamente no centro horizontal
                if (rect.x > 300 && rect.x < 600 && rect.y > 100 && rect.y < 250) {
                    inp.value = term;
                    inp.dispatchEvent(new Event('input', { bubbles: true }));
                    inp.dispatchEvent(new Event('change', { bubbles: true }));
                    return;
                }
            }
        }, CONFIG.searchTerm);
        await delay(CONFIG.delayShort);

        // 4. SELECIONAR CLASSES
        console.log('📋 Selecionando classes...');
        await page.click('body'); // Clicar fora para fechar dropdowns
        await delay(300);

        // Encontrar e clicar no dropdown de classes
        await page.evaluate(() => {
            // Procurar dropdown de classes pelo texto
            const dropdowns = document.querySelectorAll('.ng-select, [class*="select"], select');
            for (const dd of dropdowns) {
                const label = dd.closest('.form-group')?.querySelector('label');
                if (label && label.textContent.toLowerCase().includes('classe')) {
                    dd.click();
                    return;
                }
            }
        });
        await delay(CONFIG.delayShort);

        // Selecionar cada classe criminal
        const classes = ['Apelação Criminal', 'Habeas Corpus Criminal', 'Revisão Criminal', 'Agravo de Execução Penal'];
        for (const cls of classes) {
            await page.evaluate((className) => {
                const options = document.querySelectorAll('.ng-option, [class*="option"], option');
                for (const opt of options) {
                    if (opt.textContent.includes(className)) {
                        opt.click();
                        return true;
                    }
                }
                return false;
            }, cls);
            await delay(200);
        }
        await delay(CONFIG.delayShort);

        // 5. SELECIONAR DECISÕES COLEGIADAS
        console.log('📝 Selecionando decisões colegiadas...');
        await page.evaluate(() => {
            const radios = document.querySelectorAll('input[type="radio"]');
            for (const radio of radios) {
                const label = radio.nextElementSibling || radio.parentElement;
                if (label && label.textContent.toLowerCase().includes('colegiada')) {
                    radio.click();
                    return;
                }
            }
        });
        await delay(CONFIG.delayShort);

        // 6. SELECIONAR ÓRGÃOS JULGADORES
        console.log('⚖️ Selecionando órgãos julgadores...');
        // Câmara Criminal e Tribunal Pleno
        await page.evaluate(() => {
            const chips = document.querySelectorAll('.ng-value, .chip, [class*="chip"]');
            // Se já tem chips, está ok
            if (chips.length > 0) return;

            // Senão, tentar clicar no dropdown
            const dropdowns = document.querySelectorAll('.ng-select');
            for (const dd of dropdowns) {
                const label = dd.closest('.form-group')?.querySelector('label');
                if (label && (label.textContent.includes('Órgão') || label.textContent.includes('Orgão'))) {
                    dd.click();
                    return;
                }
            }
        });
        await delay(CONFIG.delayShort);

        // 7. CLICAR EM PESQUISAR
        console.log('🔎 Executando pesquisa...');
        await page.evaluate(() => {
            const btns = document.querySelectorAll('button');
            for (const btn of btns) {
                if (btn.textContent?.includes('Pesquisar')) {
                    btn.click();
                    return;
                }
            }
        });
        await delay(CONFIG.delayLong);

        // 8. AGUARDAR RESULTADOS
        console.log('⏳ Aguardando resultados...');
        await page.waitForFunction(() => {
            return document.querySelectorAll('input.resultado-numero').length > 0;
        }, { timeout: 60000 });
        await delay(CONFIG.delayMedium);

        // Verificar total
        const totalInfo = await page.evaluate(() => {
            const text = document.body.innerText;
            const match = text.match(/(\d+)\s*a\s*(\d+)\s*de\s*(\d+)/i);
            if (match) {
                return { inicio: match[1], fim: match[2], total: match[3] };
            }
            return { total: 'N/A' };
        });
        console.log(`📊 Resultados: ${totalInfo.total}\n`);

        // 9. LOOP DE EXTRAÇÃO
        const maxPages = Math.ceil(CONFIG.targetResults / CONFIG.resultsPerPage);
        console.log(`📄 Extraindo até ${maxPages} páginas...\n`);

        for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
            if (allResults.length >= CONFIG.targetResults) break;

            // Scroll para garantir que resultados estão visíveis
            await page.evaluate(() => window.scrollTo(0, 600));
            await delay(CONFIG.delayShort);

            // Extrair dados
            const pageData = await extractPageData(page);

            if (pageData.length === 0) {
                console.log(`  ⚠️ Página ${pageNum}: Aguardando carregamento...`);
                await delay(CONFIG.delayLong);
                const retry = await extractPageData(page);
                if (retry.length === 0) {
                    console.log(`  ⚠️ Página ${pageNum}: Pulando (0 resultados)`);
                    // Tentar próxima página mesmo assim
                } else {
                    pageData.push(...retry);
                }
            }

            // Adicionar aos resultados
            for (const item of pageData) {
                if (allResults.length >= CONFIG.targetResults) break;

                // Verificar se já existe (por número do processo)
                if (allResults.some(r => r.processo === item.processo)) continue;

                allResults.push({
                    id: `tjrn_${allResults.length + 1}`,
                    fonte: 'TJRN',
                    grau: '2º Grau',
                    ...item,
                    ementaFormatada: formatarEmentaPadrao(item),
                    dataExtracao: new Date().toISOString()
                });
            }

            console.log(`📃 Página ${pageNum}/${maxPages} | Extraídos: ${pageData.length} | Total: ${allResults.length}`);

            // Próxima página
            if (pageNum < maxPages && allResults.length < CONFIG.targetResults) {
                const hasNext = await page.evaluate(() => {
                    // Procurar botão "Próxima"
                    const btns = document.querySelectorAll('button, a');
                    for (const btn of btns) {
                        const text = btn.textContent?.trim();
                        if (text === 'Próxima »' || text === 'Próxima' || text === '»') {
                            btn.click();
                            return true;
                        }
                    }
                    return false;
                });

                if (!hasNext) {
                    console.log('  ⚠️ Botão próxima não encontrado, tentando navegação alternativa...');
                    // Tentar clicar em número de página
                    const clicked = await page.evaluate((targetPage) => {
                        const links = document.querySelectorAll('a, button');
                        for (const l of links) {
                            if (l.textContent.trim() === String(targetPage)) {
                                l.click();
                                return true;
                            }
                        }
                        return false;
                    }, pageNum + 1);

                    if (!clicked) {
                        console.log('  ❌ Não foi possível avançar. Fim da extração.');
                        break;
                    }
                }

                // Aguardar carregamento da próxima página
                await delay(CONFIG.delayMedium);
                await page.waitForFunction((expected) => {
                    const inputs = document.querySelectorAll('input.resultado-numero');
                    return inputs.length > 0;
                }, { timeout: 15000 }, pageNum + 1).catch(() => { });
            }

            // Salvar progresso periodicamente
            if (pageNum % 50 === 0) {
                const progressPath = path.join(CONFIG.outputDir, `progress_p${pageNum}.json`);
                fs.writeFileSync(progressPath, JSON.stringify({
                    pagina: pageNum,
                    total: allResults.length,
                    resultados: allResults
                }, null, 2));
                console.log(`  💾 Progresso salvo: ${allResults.length} resultados`);
            }
        }

    } catch (error) {
        console.error('\n❌ Erro:', error.message);
        console.error(error.stack);
    } finally {
        // SALVAR RESULTADOS FINAIS
        const outputPath = path.join(CONFIG.outputDir, CONFIG.outputFile);
        fs.writeFileSync(outputPath, JSON.stringify({
            meta: {
                fonte: 'TJRN - Tribunal de Justiça do Rio Grande do Norte',
                grau: '2º Grau',
                termoBusca: CONFIG.searchTerm,
                classes: ['Apelação Criminal', 'Habeas Corpus Criminal', 'Revisão Criminal', 'Agravo de Execução Penal'],
                orgaosJulgadores: ['Câmara Criminal', 'Tribunal Pleno'],
                decisoes: 'Colegiadas',
                dataExtracao: new Date().toISOString(),
                totalExtraido: allResults.length
            },
            jurisprudencias: allResults
        }, null, 2));

        console.log(`\n${'='.repeat(60)}`);
        console.log(`✅ SCRAPING CONCLUÍDO`);
        console.log(`${'='.repeat(60)}`);
        console.log(`📊 Total extraído: ${allResults.length} jurisprudências`);
        console.log(`📁 Arquivo: ${outputPath}`);
        console.log(`${'='.repeat(60)}\n`);

        await browser.close();
    }
}

scrapeTJRN().catch(console.error);
