/**
 * Script de Correção de Tipos de Documentos
 * Reclassifica modelos incorretamente categorizados e remove inválidos
 * 
 * Uso: node scripts/corrigirTipos.cjs
 */

const fs = require('fs');
const path = require('path');

const EXTRACTED_PATH = path.join(__dirname, '..', 'services', 'templates', 'extracted');

// Lista de modelos a REMOVER (não são decisões/despachos/sentenças válidos)
const MODELOS_INVALIDOS = [
    'Controle das Horas',
    'Curso SEEU',
    'CERTIDÕES',
    'COMUNICAÇÃO ELETRÔNICA',
    'Certidão de LANÇAMENTO',
    'DECLARAÇÃO DE MATRÍCULA',
    'REGULAMENTO',
    'Thumbs',
];

// Modelos que devem ser DESPACHO
const KEYWORDS_DESPACHO = [
    'despacho',
    'certifique-se',
    'oficie-se',
    'intime-se',
    'cumpra-se',
    'oficiar',
    'vista ao mp',
    'reiterar',
    'reiteração',
    'proravel',
    'buscar',
];

function deveRemover(nome) {
    const nomeLower = nome.toLowerCase();
    return MODELOS_INVALIDOS.some(inv => nomeLower.includes(inv.toLowerCase()));
}

function deveSerDespacho(nome, conteudo) {
    const nomeLower = nome.toLowerCase();
    const conteudoLower = conteudo.toLowerCase().slice(0, 300);

    // Se nome contém "despacho"
    if (nomeLower.includes('despacho')) return true;

    // Se começa com padrão de despacho
    if (conteudoLower.includes('visto, etc') && conteudoLower.length < 500) return true;
    if (conteudoLower.includes('certifique-se') && !conteudoLower.includes('decisão')) return true;
    if (conteudoLower.includes('cumpra-se') && conteudoLower.length < 400) return true;

    return false;
}

function processarArquivo(filePath) {
    const conteudo = fs.readFileSync(filePath, 'utf-8');
    let modificado = false;
    let linhasRemovidas = 0;
    let tiposCorrigidos = 0;

    // Parse do conteúdo
    const linhas = conteudo.split('\n');
    const novasLinhas = [];
    let dentroModelo = false;
    let modeloAtual = [];
    let nomeAtual = '';
    let conteudoAtual = '';

    for (const linha of linhas) {
        if (linha.includes("id: 'old_")) {
            dentroModelo = true;
            modeloAtual = [linha];
        } else if (dentroModelo) {
            modeloAtual.push(linha);

            if (linha.includes("nome: '")) {
                const match = linha.match(/nome: '([^']+)'/);
                if (match) nomeAtual = match[1];
            }

            if (linha.includes("conteudo: `")) {
                const idxStart = linha.indexOf("conteudo: `") + 11;
                conteudoAtual = linha.slice(idxStart);
            } else if (conteudoAtual && !linha.includes('`')) {
                conteudoAtual += linha;
            }

            // Fim do modelo
            if (linha.trim() === '},') {
                if (deveRemover(nomeAtual)) {
                    console.log(`❌ Removido: ${nomeAtual}`);
                    linhasRemovidas++;
                    modificado = true;
                } else if (deveSerDespacho(nomeAtual, conteudoAtual)) {
                    // Corrigir tipo para despacho
                    const modeloCorrigido = modeloAtual.map(l =>
                        l.includes("tipoDocumento: 'decisao'")
                            ? l.replace("tipoDocumento: 'decisao'", "tipoDocumento: 'despacho'")
                            : l
                    );
                    novasLinhas.push(...modeloCorrigido);
                    console.log(`📝 Reclassificado como despacho: ${nomeAtual}`);
                    tiposCorrigidos++;
                    modificado = true;
                } else {
                    novasLinhas.push(...modeloAtual);
                }

                dentroModelo = false;
                modeloAtual = [];
                nomeAtual = '';
                conteudoAtual = '';
            }
        } else {
            novasLinhas.push(linha);
        }
    }

    if (modificado) {
        fs.writeFileSync(filePath, novasLinhas.join('\n'));
        console.log(`\n📁 ${path.basename(filePath)}: ${linhasRemovidas} removidos, ${tiposCorrigidos} reclassificados\n`);
    }

    return { linhasRemovidas, tiposCorrigidos };
}

function main() {
    console.log('=== Correção de Tipos de Documentos ===\n');

    const arquivos = fs.readdirSync(EXTRACTED_PATH).filter(f => f.endsWith('_old.ts'));
    let totalRemovidos = 0;
    let totalCorrigidos = 0;

    for (const arquivo of arquivos) {
        const filePath = path.join(EXTRACTED_PATH, arquivo);
        const { linhasRemovidas, tiposCorrigidos } = processarArquivo(filePath);
        totalRemovidos += linhasRemovidas;
        totalCorrigidos += tiposCorrigidos;
    }

    console.log('=== Resumo ===');
    console.log(`Total removidos: ${totalRemovidos}`);
    console.log(`Total reclassificados: ${totalCorrigidos}`);
}

main();
