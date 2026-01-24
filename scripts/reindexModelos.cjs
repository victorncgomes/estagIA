/**
 * estagIA - Reindexação Completa de Modelos v2.0
 * 
 * Processa TODOS os arquivos de modelo (DOCX, DOC, ODT)
 * em TODAS as pastas e gera um índice completo.
 * 
 * Melhorias:
 * - Suporte a arquivos ODT (OpenDocument Text)
 * - Melhor detecção de agrupadores
 * - Logs detalhados de progresso
 * 
 * Uso: node scripts/reindexModelos.cjs
 * 
 * @version 2.0.0
 */

const fs = require('fs');
const path = require('path');

// Configuração
const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge', 'decisoes');
const OUTPUT_DIR = path.join(KNOWLEDGE_DIR, 'textos_completos');
const INDEX_OUTPUT = path.join(KNOWLEDGE_DIR, 'modelos_completos_index.json');

// Pastas a processar
const PASTAS_MODELOS = [
    'decisoesvrep',
    'remicao',
    'retificacao',
    'indulto',
    'old'
];

// Mapeamento de pasta para agrupador padrão
const PASTA_TO_AGRUPADOR = {
    'decisoesvrep': 'vrep',
    'remicao': 'remicao',
    'retificacao': 'retificacao',
    'indulto': 'indulto',
    'old': 'outros'
};

// Detecta agrupador pelo nome do arquivo
function detectarAgrupador(nomeArquivo, pasta) {
    const nome = nomeArquivo.toLowerCase();

    // Priorizar detecção pelo nome do arquivo
    if (nome.includes('remicao') || nome.includes('remição') ||
        nome.includes('estudo') || nome.includes('trabalho') ||
        nome.includes('leitura') || nome.includes('encceja') ||
        nome.includes('enem') || nome.includes('eja')) {
        return 'remicao';
    }
    if (nome.includes('retifica') || nome.includes('ret ') || nome.includes('ret_') ||
        nome.includes('ret-') || nome.includes('gep') || nome.includes('guia')) {
        return 'retificacao';
    }
    if (nome.includes('indulto') || nome.includes('comuta')) {
        return 'indulto';
    }
    if (nome.includes('multa') || nome.includes('parcel')) {
        return 'multa';
    }
    if (nome.includes('progress')) {
        return 'progressao';
    }
    if (nome.includes('livramento')) {
        return 'livramento';
    }
    if (nome.includes('falta') || nome.includes('disciplin') || nome.includes('pad')) {
        return 'falta';
    }
    if (nome.includes('agravo')) {
        return 'agravo';
    }
    if (nome.includes('reconsider')) {
        return 'reconsideracao';
    }
    if (nome.includes('monitoramento')) {
        return 'monitoramento';
    }
    if (nome.includes('unifica')) {
        return 'unificacao';
    }
    if (nome.includes('prisao domiciliar') || nome.includes('prisão domiciliar')) {
        return 'prisao_domiciliar';
    }
    if (nome.includes('regressao') || nome.includes('regressão')) {
        return 'regressao';
    }
    if (nome.includes('prescri')) {
        return 'prescricao';
    }
    if (nome.includes('extincao') || nome.includes('extinção')) {
        return 'extincao';
    }
    if (nome.includes('embargo')) {
        return 'embargos';
    }
    if (nome.includes('transfer')) {
        return 'transferencia';
    }
    if (nome.includes('despacho')) {
        return 'despacho';
    }

    // Fallback para agrupador da pasta
    return PASTA_TO_AGRUPADOR[pasta] || 'outros';
}

// Detecta resultado (defere/indefere)
function detectarResultado(nomeArquivo, conteudo) {
    const nome = nomeArquivo.toLowerCase();
    const texto = conteudo.toLowerCase();

    // Priorizar nome do arquivo
    if (nome.includes('indefere') || nome.includes('indeferimento') || nome.includes('indefiro')) {
        return 'indefere';
    }
    if (nome.includes('defere') || nome.includes('deferimento') ||
        nome.includes('concedendo') || nome.includes('concede') || nome.includes('defiro')) {
        return 'defere';
    }
    if (nome.includes('parcial')) {
        return 'parcial';
    }

    // Analisar conteúdo
    if (texto.includes('isso posto, indefiro') || texto.includes('indefiro o pedido')) {
        return 'indefere';
    }
    if (texto.includes('isso posto, defiro') || texto.includes('defiro o pedido')) {
        return 'defere';
    }

    return 'indefinido';
}

// Detecta campos FillIn no XML do DOCX
async function detectarFillIn(docxPath) {
    const AdmZip = require('adm-zip');
    const campos = [];

    try {
        const zip = new AdmZip(docxPath);
        const documentXml = zip.readAsText('word/document.xml');

        const fillInPatterns = [
            /<w:ffData>[\s\S]*?<w:name w:val="([^"]+)"[\s\S]*?<\/w:ffData>/g,
            /<w:sdtPr>[\s\S]*?<w:tag w:val="([^"]+)"[\s\S]*?<\/w:sdtPr>/g,
            /\[([A-Z_]+)\]/g,
            /«([^»]+)»/g,
            /FILLIN\s+"([^"]+)"/g
        ];

        for (const pattern of fillInPatterns) {
            let match;
            while ((match = pattern.exec(documentXml)) !== null) {
                if (match[1] && !campos.includes(match[1])) {
                    campos.push(match[1]);
                }
            }
        }
    } catch (e) {
        // Não é crítico se falhar
    }

    return campos;
}

// Analisa estrutura da decisão
function analisarEstrutura(conteudo) {
    const texto = conteudo.toLowerCase();

    return {
        tem_vistos: texto.includes('vistos') || texto.includes('vistos, etc'),
        tem_relatados: texto.includes('relatados.') || texto.includes('relatados,'),
        tem_isso_posto: texto.includes('isso posto') || texto.includes('isto posto'),
        tem_pri: texto.includes('p.r.i') || texto.includes('pri.') || texto.includes('p. r. i'),
        tem_cabecalho: texto.includes('tribunal de justiça') || texto.includes('poder judiciário')
    };
}

// Extrai conteúdo do DOCX
async function extrairDocx(docxPath) {
    const mammoth = require('mammoth');
    try {
        const result = await mammoth.extractRawText({ path: docxPath });
        let texto = result.value;

        texto = texto
            .replace(/\r\n/g, '\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        return texto;
    } catch (error) {
        console.error(`  ❌ Erro ao extrair DOCX ${path.basename(docxPath)}:`, error.message);
        return null;
    }
}

// Extrai conteúdo do ODT
async function extrairOdt(odtPath) {
    const AdmZip = require('adm-zip');
    try {
        const zip = new AdmZip(odtPath);
        const contentXml = zip.readAsText('content.xml');

        // Extrair texto do XML
        let texto = contentXml
            .replace(/<text:p[^>]*>/g, '\n')
            .replace(/<text:tab\/>/g, '\t')
            .replace(/<text:s[^>]*\/>/g, ' ')
            .replace(/<text:line-break\/>/g, '\n')
            .replace(/<[^>]+>/g, '')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        return texto;
    } catch (error) {
        console.error(`  ❌ Erro ao extrair ODT ${path.basename(odtPath)}:`, error.message);
        return null;
    }
}

// Extrai conteúdo do DOC antigo (best effort)
async function extrairDoc(docPath) {
    // DOC antigo é mais complexo, vamos tentar extrair texto bruto
    try {
        const buffer = fs.readFileSync(docPath);
        // Extrair strings ASCII/Unicode do binário
        let texto = buffer.toString('utf-8', 0, buffer.length);

        // Limpar caracteres binários
        texto = texto.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, ' ');

        // Procurar por conteúdo textual
        const matches = texto.match(/[A-Za-záàâãéèêíïóôõúüç\s,.;:!?()-]{20,}/g);
        if (matches && matches.length > 0) {
            return matches.join('\n').trim();
        }

        return null;
    } catch (error) {
        console.error(`  ❌ Erro ao extrair DOC ${path.basename(docPath)}:`, error.message);
        return null;
    }
}

// Processa um arquivo de modelo
async function processarModelo(filePath, pasta) {
    const nomeArquivo = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const nomeBase = nomeArquivo.replace(/\.(docx?|odt)$/i, '');

    console.log(`  📄 ${nomeArquivo}`);

    // Extrair conteúdo baseado no formato
    let conteudo = null;
    let formato = 'unknown';

    if (ext === '.docx') {
        conteudo = await extrairDocx(filePath);
        formato = 'docx';
    } else if (ext === '.doc') {
        conteudo = await extrairDoc(filePath);
        formato = 'doc';
    } else if (ext === '.odt') {
        conteudo = await extrairOdt(filePath);
        formato = 'odt';
    }

    if (!conteudo || conteudo.length < 50) {
        console.log(`     ⚠️ Conteúdo insuficiente`);
        return null;
    }

    // Detectar campos FillIn (apenas para DOCX)
    let camposFillIn = [];
    if (formato === 'docx') {
        camposFillIn = await detectarFillIn(filePath);
    }

    // Analisar estrutura
    const estrutura = analisarEstrutura(conteudo);

    // Detectar agrupador e resultado
    const agrupador = detectarAgrupador(nomeArquivo, pasta);
    const resultado = detectarResultado(nomeArquivo, conteudo);

    // Gerar nome amigável
    const nomeAmigavel = nomeBase
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join(' ');

    // Salvar texto completo
    const outputPath = path.join(OUTPUT_DIR, `${nomeBase}.txt`);
    fs.writeFileSync(outputPath, conteudo, 'utf-8');

    console.log(`     ✅ ${agrupador} | ${resultado} | ${conteudo.length} chars`);

    return {
        arquivo: nomeArquivo,
        nome: nomeAmigavel,
        pasta: pasta,
        agrupador: agrupador,
        resultado: resultado,
        formato: formato,
        tamanho_chars: conteudo.length,
        tem_fillin: camposFillIn.length > 0,
        campos_fillin: camposFillIn,
        estrutura: estrutura,
        arquivo_texto: `${nomeBase}.txt`,
        conteudo_preview: conteudo.substring(0, 500).replace(/\n/g, ' ') + '...',
        data_extracao: new Date().toISOString()
    };
}

// Função principal
async function main() {
    console.log('='.repeat(60));
    console.log('📚 estagIA - Reindexação Completa de Modelos v2.0');
    console.log('='.repeat(60));
    console.log('');

    // Criar diretório de saída
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        console.log(`📁 Criado diretório: ${OUTPUT_DIR}`);
    }

    const todosModelos = [];
    const estatisticas = {
        total: 0,
        sucesso: 0,
        falha: 0,
        por_formato: { docx: 0, doc: 0, odt: 0 },
        por_agrupador: {},
        por_pasta: {},
        com_fillin: 0
    };

    // Processar cada pasta
    for (const pasta of PASTAS_MODELOS) {
        const pastaPath = path.join(KNOWLEDGE_DIR, pasta);

        if (!fs.existsSync(pastaPath)) {
            console.log(`⚠️ Pasta não encontrada: ${pasta}`);
            continue;
        }

        console.log(`\n📂 Processando pasta: ${pasta}`);
        console.log('-'.repeat(50));

        // Listar TODOS os arquivos processáveis (docx, doc, odt)
        const arquivos = fs.readdirSync(pastaPath)
            .filter(f => /\.(docx?|odt)$/i.test(f) && !f.startsWith('~$'));

        console.log(`   📋 Encontrados ${arquivos.length} arquivos processáveis`);
        estatisticas.por_pasta[pasta] = { total: arquivos.length, sucesso: 0, formatos: {} };

        for (const arquivo of arquivos) {
            const filePath = path.join(pastaPath, arquivo);
            const ext = path.extname(arquivo).toLowerCase().replace('.', '');
            estatisticas.total++;

            try {
                const modelo = await processarModelo(filePath, pasta);

                if (modelo) {
                    todosModelos.push(modelo);
                    estatisticas.sucesso++;
                    estatisticas.por_pasta[pasta].sucesso++;
                    estatisticas.por_formato[modelo.formato] = (estatisticas.por_formato[modelo.formato] || 0) + 1;

                    // Contabilizar por agrupador
                    if (!estatisticas.por_agrupador[modelo.agrupador]) {
                        estatisticas.por_agrupador[modelo.agrupador] = 0;
                    }
                    estatisticas.por_agrupador[modelo.agrupador]++;

                    if (modelo.tem_fillin) {
                        estatisticas.com_fillin++;
                    }
                } else {
                    estatisticas.falha++;
                }
            } catch (error) {
                console.error(`  ❌ Erro fatal: ${arquivo}`, error.message);
                estatisticas.falha++;
            }
        }
    }

    // Salvar índice completo
    const indice = {
        meta: {
            versao: '3.0.0',
            descricao: 'Índice completo de modelos de decisão (DOCX + ODT)',
            dataGeracao: new Date().toISOString(),
            totalModelos: todosModelos.length,
            estatisticas: estatisticas
        },
        modelos: todosModelos.sort((a, b) => {
            if (a.agrupador !== b.agrupador) {
                return a.agrupador.localeCompare(b.agrupador);
            }
            return a.nome.localeCompare(b.nome);
        })
    };

    fs.writeFileSync(INDEX_OUTPUT, JSON.stringify(indice, null, 2), 'utf-8');

    // Relatório final
    console.log('\n');
    console.log('='.repeat(60));
    console.log('📊 RELATÓRIO FINAL');
    console.log('='.repeat(60));
    console.log(`\n✅ Total processados: ${estatisticas.sucesso}/${estatisticas.total}`);
    console.log(`❌ Falhas: ${estatisticas.falha}`);
    console.log(`📝 Com campos FillIn: ${estatisticas.com_fillin}`);

    console.log('\n📁 Por formato:');
    for (const [formato, count] of Object.entries(estatisticas.por_formato)) {
        if (count > 0) console.log(`   ${formato.toUpperCase()}: ${count}`);
    }

    console.log('\n📂 Por pasta:');
    for (const [pasta, stats] of Object.entries(estatisticas.por_pasta)) {
        console.log(`   ${pasta}: ${stats.sucesso}/${stats.total}`);
    }

    console.log('\n🏷️ Por agrupador:');
    for (const [agrupador, count] of Object.entries(estatisticas.por_agrupador).sort((a, b) => b[1] - a[1])) {
        console.log(`   ${agrupador}: ${count}`);
    }

    console.log(`\n💾 Índice salvo em: ${INDEX_OUTPUT}`);
    console.log(`📁 Textos salvos em: ${OUTPUT_DIR}`);
    console.log('='.repeat(60));
}

// Verificar dependências
async function verificarDependencias() {
    try {
        require('mammoth');
    } catch {
        console.log('📦 Instalando dependência: mammoth...');
        const { execSync } = require('child_process');
        execSync('npm install mammoth --legacy-peer-deps', {
            cwd: path.join(__dirname, '..'),
            stdio: 'inherit'
        });
    }

    try {
        require('adm-zip');
    } catch {
        console.log('📦 Instalando dependência: adm-zip...');
        const { execSync } = require('child_process');
        execSync('npm install adm-zip --legacy-peer-deps', {
            cwd: path.join(__dirname, '..'),
            stdio: 'inherit'
        });
    }
}

// Executar
verificarDependencias().then(() => {
    main().catch(console.error);
});
