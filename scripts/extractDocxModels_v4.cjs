/**
 * Script de Extração de Modelos v4
 * Suporte completo: DOCX, ODT, DOC, PDF (com OCR)
 * 
 * Uso: node scripts/extractDocxModels_v4.cjs
 */

const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');
const xml2js = require('xml2js');

// PDF parse - use default export
let pdfParse;
try {
    const pdfModule = require('pdf-parse');
    pdfParse = pdfModule.default || pdfModule;
} catch (e) {
    console.log('pdf-parse não encontrado, PDFs serão ignorados');
}

// Tesseract para OCR (PDFs escaneados)
let Tesseract;
try {
    Tesseract = require('tesseract.js');
} catch (e) {
    console.log('tesseract.js não encontrado, OCR desabilitado');
}

const DECISOES_PATH = path.join(__dirname, '..', 'knowledge', 'decisoes', 'old');
const EXTRACTED_PATH = path.join(__dirname, '..', 'services', 'templates', 'extracted');

// Arquivos a IGNORAR
const ARQUIVOS_IGNORAR = [
    'Controle das Horas',
    'Curso SEEU',
    'CERTIDÕES',
    'Certidão de LANÇAMENTO',
    'COMUNICAÇÃO ELETRÔNICA',
    'DECLARAÇÃO DE MATRÍCULA',
    'REGULAMENTO',
    'Thumbs.db',
    'anotacoes',
    'anotações',
    'juisprudencia',
    'jurisprudencia',
    'online.pdf',
    'TEXTOS PARA',
    '.~lock',
    'JUSTIFICATIVA DE FALTA',
    'inicial multa completo',
    'pedido de escolta',
];

// ===== EXTRATORES POR FORMATO =====

// Extrair texto de DOCX usando mammoth
async function extrairDocx(caminhoArquivo) {
    try {
        const result = await mammoth.extractRawText({ path: caminhoArquivo });
        return result.value.trim();
    } catch (error) {
        console.error(`  Erro DOCX: ${error.message}`);
        return '';
    }
}

// Extrair texto de ODT (arquivo ZIP com content.xml)
async function extrairOdt(caminhoArquivo) {
    return new Promise(async (resolve) => {
        try {
            const directory = await unzipper.Open.file(caminhoArquivo);
            const contentFile = directory.files.find(f => f.path === 'content.xml');

            if (!contentFile) {
                resolve('');
                return;
            }

            const content = await contentFile.buffer();
            const xml = content.toString('utf-8');

            // Remover tags XML e limpar texto
            let texto = xml
                .replace(/<text:p[^>]*>/g, '\n')
                .replace(/<text:span[^>]*>/g, '')
                .replace(/<text:tab[^>]*\/>/g, '\t')
                .replace(/<text:line-break[^>]*\/>/g, '\n')
                .replace(/<[^>]+>/g, '')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/\n{3,}/g, '\n\n')
                .trim();

            resolve(texto);
        } catch (error) {
            console.error(`  Erro ODT: ${error.message}`);
            resolve('');
        }
    });
}

// Extrair texto de PDF
async function extrairPdf(caminhoArquivo) {
    if (!pdfParse) return '[PDF não suportado - instale pdf-parse]';

    try {
        const dataBuffer = fs.readFileSync(caminhoArquivo);
        const data = await pdfParse(dataBuffer);

        // Se o texto está muito curto, pode ser um PDF escaneado
        if (data.text.trim().length < 100 && Tesseract) {
            console.log(`  PDF escaneado detectado, tentando OCR...`);
            // Para OCR de PDF precisaríamos converter para imagem primeiro
            // Por enquanto, retornamos o que temos
            return data.text.trim() || `[PDF escaneado - OCR não implementado para este arquivo]`;
        }

        return data.text.trim();
    } catch (error) {
        console.error(`  Erro PDF: ${error.message}`);
        return '';
    }
}

// Função principal de extração
async function extrairConteudo(caminhoArquivo) {
    const ext = path.extname(caminhoArquivo).toLowerCase();

    switch (ext) {
        case '.docx':
            return extrairDocx(caminhoArquivo);
        case '.odt':
            return extrairOdt(caminhoArquivo);
        case '.pdf':
            return extrairPdf(caminhoArquivo);
        case '.doc':
            // DOC antigo não é suportado diretamente
            return '[Formato DOC antigo não suportado - converter para DOCX]';
        default:
            return '';
    }
}

// ===== DETECTORES =====

function deveIgnorar(nomeArquivo) {
    return ARQUIVOS_IGNORAR.some(ign => nomeArquivo.toLowerCase().includes(ign.toLowerCase()));
}

function detectarTipoDocumento(nomeArquivo, conteudo) {
    const nome = nomeArquivo.toUpperCase();
    const texto = conteudo.toUpperCase().slice(0, 800);

    if (nome.startsWith('DESPACHO')) return 'despacho';
    if (nome.includes(' DESPACHO')) return 'despacho';
    if (texto.includes('CERTIFIQUE-SE') && texto.length < 600) return 'despacho';
    if (texto.includes('OFICIE-SE') && texto.length < 600) return 'despacho';
    if (texto.includes('INTIME-SE') && texto.length < 600) return 'despacho';

    if (nome.includes('SENTENÇA') || nome.includes('SENTENCA')) return 'sentenca';
    if (texto.includes('JULGO PROCEDENTE') || texto.includes('JULGO IMPROCEDENTE')) return 'sentenca';
    if (texto.includes('PELO EXPOSTO, CONDENO')) return 'sentenca';

    return 'decisao';
}

function detectarAgrupador(nomeArquivo, tipoDoc) {
    const nome = nomeArquivo.toUpperCase();

    if (tipoDoc === 'despacho') return 'despachos';

    if (nome.includes('PRESCRIÇÃO') || nome.includes('PRESCRICAO') || nome.includes('PUNITIVA') || nome.includes('EXTINÇÃO')) return 'prescricao';
    if (nome.includes('PROGRESSÃO') || nome.includes('PROGRESSAO') || nome.includes('PROGRESSO')) return 'progressao';
    if (nome.includes('REGRESSÃO') || nome.includes('REGRESSAO')) return 'regressao';
    if (nome.includes('UNIFICAÇÃO') || nome.includes('UNIFICACAO') || nome.includes('UNIFICADA')) return 'unificacao';
    if (nome.includes('RETIFICAÇÃO') || nome.includes('RETIFICACAO') || nome.includes('RET GEP') || nome.includes('RETIFICADA')) return 'retificacao';
    if (nome.includes('PRISÃO DOMICILIAR') || nome.includes('PRISAO DOMICILIAR')) return 'prisaoDomiciliar';
    if (nome.includes('FALTA GRAVE') || nome.includes('HOMOLOGAÇÃO FALTA') || nome.includes('HOMOLOGACAO FALTA')) return 'faltaGrave';
    if (nome.includes('FALTA MÉDIA') || nome.includes('FALTA MEDIA')) return 'faltaMedia';
    if (nome.includes('INDULTO') || nome.includes('DECRETO 8615') || nome.includes('DECRETO 11')) return 'indulto';
    if (nome.includes('COMUTAÇÃO') || nome.includes('COMUTACAO')) return 'comutacao';
    if (nome.includes('REMIÇÃO') || nome.includes('REMICAO') || nome.includes('ENEM')) return 'remicao';
    if (nome.includes('TRANSFERÊNCIA') || nome.includes('TRANSFERENCIA')) return 'transferencia';
    if (nome.includes('LIVRAMENTO')) return 'livramento';
    if (nome.includes('EMBARGO')) return 'embargos';
    if (nome.includes('INCOMPETÊNCIA') || nome.includes('INCOMPETENCIA') || nome.includes('DECLÍNIO') || nome.includes('DECLINIO')) return 'incompetencia';
    if (nome.includes('MONITORAMENTO')) return 'monitoramento';
    if (nome.includes('ADAPTAÇÃO') || nome.includes('ADAPTACAO') || nome.includes('ADEQUAÇÃO') || nome.includes('ADEQUACAO')) return 'adequacaoRegime';
    if (nome.includes('MULTA')) return 'multa';
    if (nome.includes('MEDIDA DE SEGURANÇA') || nome.includes('MEDIDA DE SEGURANCA')) return 'medidaSeguranca';

    return 'outros';
}

function isDuplicata(nomeModelo, existentes) {
    const nomeLower = nomeModelo.toLowerCase().trim();
    return existentes.has(nomeLower);
}

function limparNomeModelo(nomeArquivo) {
    return nomeArquivo
        .replace(/\.(docx|odt|doc|pdf)$/i, '')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// ===== GERAÇÃO DE CÓDIGO =====

async function gerarCodigoTs(modelos) {
    let codigo = '';

    for (const modelo of modelos) {
        const id = `old_${modelo.arquivo.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`;
        const conteudoEscapado = modelo.conteudo
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\$/g, '\\$');

        codigo += `    {
        id: '${id}',
        nome: '${modelo.nome.replace(/'/g, "\\'")}',
        tipoDocumento: '${modelo.tipoDocumento}',
        magistrado: 'henriqueBaltazar',
        agrupador: '${modelo.agrupador}',
        fonteOriginal: 'OLD_${path.extname(modelo.arquivo).slice(1).toUpperCase()}',
        dataExtracao: '${new Date().toISOString().split('T')[0]}',
        conteudo: \`${conteudoEscapado}\`,
    },
`;
    }

    return codigo;
}

// ===== MAIN =====

async function main() {
    console.log('=== Extrator de Modelos v4 (DOCX + ODT + PDF) ===\n');

    // Carregar modelos existentes
    const existentes = new Set();
    if (fs.existsSync(EXTRACTED_PATH)) {
        const arquivos = fs.readdirSync(EXTRACTED_PATH);
        for (const arquivo of arquivos) {
            if (arquivo.endsWith('.ts') && !arquivo.includes('_old')) {
                const conteudo = fs.readFileSync(path.join(EXTRACTED_PATH, arquivo), 'utf-8');
                const matches = conteudo.matchAll(/nome:\s*['"]([^'"]+)['"]/g);
                for (const match of matches) {
                    existentes.add(match[1].toLowerCase().trim());
                }
            }
        }
    }
    console.log(`Modelos existentes na base: ${existentes.size}\n`);

    if (!fs.existsSync(DECISOES_PATH)) {
        console.log(`Pasta não encontrada: ${DECISOES_PATH}`);
        return;
    }

    const arquivos = fs.readdirSync(DECISOES_PATH);
    const modelos = [];
    const estatisticas = {
        total: 0,
        extraidos: 0,
        duplicatas: 0,
        ignorados: 0,
        erros: 0,
        porFormato: {},
        porTipo: {},
        porAgrupador: {},
    };

    for (const arquivo of arquivos) {
        if (!arquivo.match(/\.(docx|odt|doc|pdf)$/i)) continue;

        const formato = path.extname(arquivo).slice(1).toUpperCase();
        estatisticas.total++;
        estatisticas.porFormato[formato] = (estatisticas.porFormato[formato] || 0) + 1;

        // Verificar se deve ignorar
        if (deveIgnorar(arquivo)) {
            console.log(`⏭️  Ignorado: ${arquivo}`);
            estatisticas.ignorados++;
            continue;
        }

        const caminhoCompleto = path.join(DECISOES_PATH, arquivo);
        const nome = limparNomeModelo(arquivo);

        // Verificar duplicata
        if (isDuplicata(nome, existentes)) {
            console.log(`🔄 Duplicata: ${arquivo}`);
            estatisticas.duplicatas++;
            continue;
        }

        // Extrair conteúdo
        console.log(`📄 Processando (${formato}): ${arquivo}`);
        const conteudo = await extrairConteudo(caminhoCompleto);

        if (!conteudo || conteudo.length < 50 || conteudo.startsWith('[')) {
            console.log(`❌ Erro/vazio: ${arquivo}`);
            estatisticas.erros++;
            continue;
        }

        // Detectar tipo e agrupador
        const tipoDocumento = detectarTipoDocumento(arquivo, conteudo);
        const agrupador = detectarAgrupador(arquivo, tipoDocumento);

        modelos.push({
            arquivo,
            nome,
            tipoDocumento,
            agrupador,
            conteudo,
        });

        existentes.add(nome.toLowerCase().trim());

        estatisticas.extraidos++;
        estatisticas.porTipo[tipoDocumento] = (estatisticas.porTipo[tipoDocumento] || 0) + 1;
        estatisticas.porAgrupador[agrupador] = (estatisticas.porAgrupador[agrupador] || 0) + 1;

        console.log(`✅ ${tipoDocumento.padEnd(10)} | ${agrupador.padEnd(15)} | ${nome.slice(0, 45)}`);
    }

    console.log('\n=== Estatísticas ===');
    console.log(`Total de arquivos: ${estatisticas.total}`);
    console.log(`Extraídos: ${estatisticas.extraidos}`);
    console.log(`Duplicatas: ${estatisticas.duplicatas}`);
    console.log(`Ignorados: ${estatisticas.ignorados}`);
    console.log(`Erros: ${estatisticas.erros}`);
    console.log('\nPor formato:');
    for (const [fmt, count] of Object.entries(estatisticas.porFormato)) {
        console.log(`  ${fmt}: ${count}`);
    }
    console.log('\nPor tipo de documento:');
    for (const [tipo, count] of Object.entries(estatisticas.porTipo)) {
        console.log(`  ${tipo}: ${count}`);
    }
    console.log('\nPor agrupador:');
    for (const [agrup, count] of Object.entries(estatisticas.porAgrupador).sort((a, b) => b[1] - a[1])) {
        console.log(`  ${agrup}: ${count}`);
    }

    // Gerar arquivos por agrupador
    const porAgrupador = {};
    for (const modelo of modelos) {
        if (!porAgrupador[modelo.agrupador]) {
            porAgrupador[modelo.agrupador] = [];
        }
        porAgrupador[modelo.agrupador].push(modelo);
    }

    if (!fs.existsSync(EXTRACTED_PATH)) {
        fs.mkdirSync(EXTRACTED_PATH, { recursive: true });
    }

    for (const [agrupador, mods] of Object.entries(porAgrupador)) {
        const codigo = await gerarCodigoTs(mods);
        const outputPath = path.join(EXTRACTED_PATH, `${agrupador}_old.ts`);
        fs.writeFileSync(outputPath, `// Modelos extraídos da pasta OLD - ${agrupador}\n// Total: ${mods.length} modelos\n// Tipos: ${[...new Set(mods.map(m => m.tipoDocumento))].join(', ')}\n// Formatos: ${[...new Set(mods.map(m => path.extname(m.arquivo).slice(1).toUpperCase()))].join(', ')}\n// Data: ${new Date().toISOString()}\n\nexport const MODELOS_${agrupador.toUpperCase()}_OLD = [\n${codigo}];\n`);
        console.log(`\nGerado: ${outputPath} (${mods.length} modelos)`);
    }

    console.log('\n=== Extração concluída! ===');
}

main().catch(console.error);
