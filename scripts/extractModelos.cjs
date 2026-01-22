/**
 * estagIA - Extração de Conteúdo dos Modelos de Decisão
 * Extrai texto de arquivos DOCX e ODT
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

// Tentar importar odt-extract se disponível
let extractODT = null;
try {
    const { extractText } = require('odl-handler');
    extractODT = extractText;
} catch (e) {
    console.log('⚠️ odt-handler não disponível, tentando alternativa...');
}

const DECISOES_PATH = path.join(__dirname, '..', 'knowledge', 'decisoes');
const OUTPUT_PATH = path.join(DECISOES_PATH, 'textos');

// Criar diretório de saída
if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH, { recursive: true });
}

// Função para extrair texto de DOCX usando mammoth
async function extractDocx(filePath) {
    try {
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
    } catch (error) {
        console.error(`Erro ao extrair DOCX ${filePath}:`, error.message);
        return null;
    }
}

// Função para extrair texto de ODT (formato ZIP com content.xml)
async function extractOdt(filePath) {
    try {
        const AdmZip = require('adm-zip');
        const zip = new AdmZip(filePath);
        const contentXml = zip.getEntry('content.xml');

        if (!contentXml) {
            console.error(`ODT sem content.xml: ${filePath}`);
            return null;
        }

        const xmlContent = contentXml.getData().toString('utf8');

        // Extrair texto do XML (remover tags)
        const text = xmlContent
            .replace(/<text:p[^>]*>/g, '\n')
            .replace(/<text:line-break\/>/g, '\n')
            .replace(/<text:tab\/>/g, '\t')
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/\n\s*\n\s*\n/g, '\n\n')
            .trim();

        return text;
    } catch (error) {
        console.error(`Erro ao extrair ODT ${filePath}:`, error.message);
        return null;
    }
}

// Função para processar um arquivo
async function processFile(filePath, baseName) {
    const ext = path.extname(filePath).toLowerCase();
    let text = null;

    if (ext === '.docx') {
        text = await extractDocx(filePath);
    } else if (ext === '.odt') {
        text = await extractOdt(filePath);
    } else if (ext === '.doc') {
        console.warn(`⚠️ Formato .doc não suportado: ${baseName}`);
        return null;
    }

    return text;
}

// Função para processar todos os arquivos de uma pasta
async function processDirectory(dirPath, category) {
    const files = fs.readdirSync(dirPath);
    const results = [];

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) continue;

        const ext = path.extname(file).toLowerCase();
        if (!['.docx', '.odt', '.doc'].includes(ext)) continue;

        console.log(`📄 Processando: ${file}`);

        const text = await processFile(filePath, file);

        if (text && text.length > 50) {
            const baseName = path.basename(file, ext);
            const outputFile = path.join(OUTPUT_PATH, `${category}_${baseName}.txt`);

            // Salvar texto
            fs.writeFileSync(outputFile, text, 'utf8');

            results.push({
                arquivo: file,
                categoria: category,
                caracteres: text.length,
                palavras: text.split(/\s+/).length,
                outputFile: path.basename(outputFile),
            });

            console.log(`   ✅ ${text.length} caracteres extraídos`);
        } else {
            console.log(`   ⚠️ Sem texto ou muito curto`);
        }
    }

    return results;
}

// Função principal
async function main() {
    console.log('🚀 estagIA - Extração de Modelos de Decisão\n');

    const allResults = [];
    const categories = ['decisoesvrep', 'indulto', 'remicao', 'retificacao', 'old'];

    for (const category of categories) {
        const categoryPath = path.join(DECISOES_PATH, category);

        if (!fs.existsSync(categoryPath)) {
            console.log(`⏭️ Pasta não encontrada: ${category}`);
            continue;
        }

        console.log(`\n📁 Categoria: ${category.toUpperCase()}`);
        console.log('─'.repeat(50));

        const results = await processDirectory(categoryPath, category);
        allResults.push(...results);
    }

    // Salvar índice
    const indexPath = path.join(OUTPUT_PATH, 'modelos_extraidos.json');
    const indexData = {
        version: '1.0.0',
        dataExtracao: new Date().toISOString(),
        totalArquivos: allResults.length,
        totalCaracteres: allResults.reduce((sum, r) => sum + r.caracteres, 0),
        arquivos: allResults,
    };

    fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2), 'utf8');

    console.log('\n' + '═'.repeat(50));
    console.log(`✅ Extração concluída!`);
    console.log(`📊 Total: ${allResults.length} arquivos`);
    console.log(`📝 Total: ${indexData.totalCaracteres.toLocaleString()} caracteres`);
    console.log(`📁 Saída: ${OUTPUT_PATH}`);
}

main().catch(console.error);
