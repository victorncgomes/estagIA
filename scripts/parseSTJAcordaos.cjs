/**
 * Script para processar o arquivo TXT com acórdãos do STJ
 * e gerar um JSON estruturado
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../knowledge/jurisprudencia/acordaos-stj.txt');
const outputFile = path.join(__dirname, '../knowledge/jurisprudencia/stj_repetitivos.json');

// Ler o arquivo
const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split(/\r?\n/);

const acordaos = [];
let currentDoc = null;
let currentField = null;
let fieldBuffer = '';

function saveField() {
    if (currentDoc && currentField && fieldBuffer.trim()) {
        currentDoc[currentField] = fieldBuffer.trim();
    }
    fieldBuffer = '';
}

function extractProcessNumber(line) {
    // Extrai o número do processo como REsp 1918338/MT
    const match = line.match(/(REsp|HC|AgRg|ProAfR|EDcl)\s+(\d+)\s*\/\s*([A-Z]{2})/);
    if (match) {
        return `${match[1]} ${match[2]}/${match[3]}`;
    }
    return line.trim();
}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detectar novo documento
    const docMatch = line.match(/^Documento (\d+) de 75/);
    if (docMatch) {
        // Salvar documento anterior
        if (currentDoc) {
            saveField();
            acordaos.push(currentDoc);
        }

        currentDoc = {
            id: `stj_rep_${docMatch[1]}`,
            fonte: 'STJ',
            tipo: 'Recurso Repetitivo',
            docNumber: parseInt(docMatch[1])
        };
        currentField = null;
        continue;
    }

    if (!currentDoc) continue;

    // Detectar campos específicos
    if (line.startsWith('Processo')) {
        saveField();
        currentField = 'processoRaw';
        continue;
    }

    if (line.match(/^(REsp|HC|AgRg|ProAfR|PAFRESP|EDcl)/i) && currentField === 'processoRaw') {
        currentDoc.processo = extractProcessNumber(line);
        continue;
    }

    if (line.startsWith('RECURSO REPETITIVO')) {
        currentDoc.tipo = 'Recurso Repetitivo';
        continue;
    }

    if (line.startsWith('DECISÃO DE AFETAÇÃO')) {
        currentDoc.tipo = 'Decisão de Afetação';
        continue;
    }

    if (line.startsWith('Pesquisa de tema: Tema Repetitivo')) {
        const temaMatch = line.match(/Tema Repetitivo (\d+)/);
        if (temaMatch) currentDoc.tema = temaMatch[1];
        continue;
    }

    if (line.startsWith('Situação do tema:')) {
        currentDoc.situacaoTema = line.replace('Situação do tema:', '').trim();
        continue;
    }

    if (line.startsWith('Relator')) {
        saveField();
        currentField = 'relator';
        continue;
    }

    if (line.startsWith('Relatora para Acórdão') || line.startsWith('Relator para Acórdão')) {
        saveField();
        currentField = 'relatorAcordao';
        continue;
    }

    if (line.startsWith('Ministro') || line.startsWith('Ministra')) {
        if (currentField === 'relator') {
            currentDoc.relator = 'Min. ' + line.replace(/Ministr[oa]\s*/, '').split('(')[0].trim();
        } else if (currentField === 'relatorAcordao') {
            currentDoc.relatorAcordao = 'Min. ' + line.replace(/Ministr[oa]\s*/, '').split('(')[0].trim();
        }
        continue;
    }

    if (line.startsWith('Órgão Julgador')) {
        saveField();
        currentField = 'orgaoJulgador';
        continue;
    }

    if (line.match(/^S\d+ - /)) {
        currentDoc.orgaoJulgador = line.trim();
        currentField = null;
        continue;
    }

    if (line.startsWith('Data do Julgamento')) {
        saveField();
        currentField = 'dataJulgamento';
        continue;
    }

    if (line.match(/^\d{2}\/\d{2}\/\d{4}$/) && currentField === 'dataJulgamento') {
        currentDoc.dataJulgamento = line.trim();
        currentField = null;
        continue;
    }

    if (line.startsWith('Data da Publicação')) {
        saveField();
        currentField = 'dataPublicacao';
        continue;
    }

    if (line.match(/^(DJe|DJEN|RSTJ|REVJUR)/)) {
        currentDoc.dataPublicacao = line.trim();
        currentField = null;
        continue;
    }

    if (line.startsWith('Tese Jurídica')) {
        saveField();
        currentField = 'tese';
        continue;
    }

    if (line.startsWith('Ementa')) {
        saveField();
        currentField = 'ementa';
        continue;
    }

    if (line.startsWith('Acórdão')) {
        saveField();
        currentField = 'acordao';
        continue;
    }

    if (line.startsWith('Notas')) {
        saveField();
        currentField = null;
        continue;
    }

    if (line.startsWith('Informações Complementares')) {
        saveField();
        currentField = null;
        continue;
    }

    if (line.startsWith('Referência Legislativa')) {
        saveField();
        currentField = null;
        continue;
    }

    if (line.startsWith('Jurisprudência Citada')) {
        saveField();
        currentField = null;
        continue;
    }

    // Acumular conteúdo do campo atual
    if (currentField && ['tese', 'ementa', 'acordao'].includes(currentField)) {
        if (line.trim()) {
            fieldBuffer += (fieldBuffer ? ' ' : '') + line.trim();
        }
    }
}

// Salvar último documento
if (currentDoc) {
    saveField();
    acordaos.push(currentDoc);
}

// Formatar ementa padrão
acordaos.forEach(ac => {
    const processo = ac.processo || '';
    const relator = ac.relatorAcordao || ac.relator || '';
    const orgao = ac.orgaoJulgador || '';
    const dataJulg = ac.dataJulgamento || '';
    const dataPub = ac.dataPublicacao || '';
    const tema = ac.tema ? `[Tema ${ac.tema}]` : '';

    // Resumo da ementa (primeiras 200 caracteres)
    const ementaResumo = ac.ementa ? ac.ementa.substring(0, 300) + (ac.ementa.length > 300 ? '...' : '') : '';

    ac.ementaFormatada = `${ementaResumo} ${tema}\n(${processo}, Relator: ${relator}, ${orgao}, julgado em ${dataJulg}, ${dataPub})`;

    // Limpar campos temporários
    delete ac.processoRaw;
    delete ac.docNumber;
});

// Criar JSON final
const result = {
    meta: {
        fonte: 'STJ - Superior Tribunal de Justiça',
        tipo: 'Acórdãos - Recursos Repetitivos e Decisões de Afetação',
        termoBusca: '"execucao penal"',
        filtro: 'Julgado conforme Recursos Repetitivos ou Decisão de Afetação',
        dataExtracao: new Date().toISOString(),
        totalExtraido: acordaos.length
    },
    acordaos: acordaos
};

// Salvar arquivo
fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf-8');

console.log(`✅ Processados ${acordaos.length} acórdãos do STJ`);
console.log(`📁 Arquivo salvo em: ${outputFile}`);

// Listar temas únicos
const temas = [...new Set(acordaos.map(a => a.tema).filter(Boolean))].sort((a, b) => parseInt(a) - parseInt(b));
console.log(`📋 Temas encontrados: ${temas.join(', ')}`);
