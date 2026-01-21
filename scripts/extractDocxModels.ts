/**
 * Script de Extração de Modelos DOCX
 * Extrai o conteúdo de arquivos .docx e gera código TypeScript
 * 
 * Uso: npx ts-node scripts/extractDocxModels.ts
 */

const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

interface ModeloExtraido {
    arquivo: string;
    nome: string;
    agrupador: string;
    conteudo: string;
}

const DECISOES_PATH = path.join(__dirname, '..', 'knowledge', 'decisoes');

// Mapeamento de pastas/nomes para agrupadores
function detectarAgrupador(pasta: string, nomeArquivo: string): string {
    const nome = nomeArquivo.toUpperCase();

    // Por pasta
    if (pasta === 'remicao') return 'remicao';
    if (pasta === 'indulto') return 'indulto';
    if (pasta === 'retificacao') return 'retificacao';

    // Por nome de arquivo
    if (nome.includes('REMIÇÃO') || nome.includes('REMICAO') || nome.includes('ESTUDO') ||
        nome.includes('TRABALHO') || nome.includes('LEITURA') || nome.includes('ENEM') ||
        nome.includes('ENCCEJA') || nome.includes('EJA')) return 'remicao';

    if (nome.includes('INDULTO') || nome.includes('COMUTAÇÃO') || nome.includes('COMUTACAO')) return 'indulto';

    if (nome.includes('RET GEP') || nome.includes('RET -') || nome.includes('RETIFICAÇÃO') ||
        nome.includes('RETIFICACAO')) return 'retificacao';

    if (nome.includes('MULTA')) return 'multa';
    if (nome.includes('AGRAVO')) return 'agravo';
    if (nome.includes('ACORDAO') || nome.includes('ACÓRDÃO')) return 'acordao';
    if (nome.includes('PROGRESSÃO') || nome.includes('PROGRESSAO')) return 'progressao';
    if (nome.includes('REGRESSÃO') || nome.includes('REGRESSAO')) return 'regressao';
    if (nome.includes('CORREGEDORIA')) return 'outros';

    return 'outros';
}

function limparNomeModelo(nomeArquivo: string): string {
    return nomeArquivo
        .replace(/\.docx$/i, '')
        .replace(/\.odt$/i, '')
        .replace(/_/g, ' ')
        .replace(/-/g, ' - ')
        .trim();
}

async function extrairDocx(caminhoArquivo: string): Promise<string> {
    try {
        const result = await mammoth.extractRawText({ path: caminhoArquivo });
        return result.value.trim();
    } catch (error) {
        console.error(`Erro ao extrair ${caminhoArquivo}:`, error);
        return '';
    }
}

async function processarPasta(pasta: string): Promise<ModeloExtraido[]> {
    const pastaCompleta = path.join(DECISOES_PATH, pasta);
    const modelos: ModeloExtraido[] = [];

    if (!fs.existsSync(pastaCompleta)) {
        console.log(`Pasta não encontrada: ${pastaCompleta}`);
        return modelos;
    }

    const arquivos = fs.readdirSync(pastaCompleta);

    for (const arquivo of arquivos) {
        if (!arquivo.endsWith('.docx')) continue;

        const caminhoCompleto = path.join(pastaCompleta, arquivo);
        const conteudo = await extrairDocx(caminhoCompleto);

        if (conteudo) {
            modelos.push({
                arquivo,
                nome: limparNomeModelo(arquivo),
                agrupador: detectarAgrupador(pasta, arquivo),
                conteudo
            });
        }
    }

    return modelos;
}

async function gerarCodigoTs(modelos: ModeloExtraido[]): Promise<string> {
    let codigo = '';

    for (const modelo of modelos) {
        const id = `docx_${modelo.arquivo.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`;
        const conteudoEscapado = modelo.conteudo
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\$/g, '\\$');

        codigo += `    {
        id: '${id}',
        nome: '${modelo.nome.replace(/'/g, "\\'")}',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: '${modelo.agrupador}',
        fonteOriginal: 'DOCX',
        dataExtracao: '${new Date().toISOString().split('T')[0]}',
        conteudo: \`${conteudoEscapado}\`,
    },
`;
    }

    return codigo;
}

async function main() {
    console.log('=== Extrator de Modelos DOCX ===\n');

    const pastas = ['remicao', 'indulto', 'retificacao', 'decisoesvrep'];
    const todosModelos: ModeloExtraido[] = [];

    for (const pasta of pastas) {
        console.log(`Processando pasta: ${pasta}`);
        const modelos = await processarPasta(pasta);
        todosModelos.push(...modelos);
        console.log(`  -> ${modelos.length} modelos extraídos`);
    }

    console.log(`\nTotal: ${todosModelos.length} modelos\n`);

    // Agrupar por agrupador
    const porAgrupador: Record<string, ModeloExtraido[]> = {};
    for (const modelo of todosModelos) {
        if (!porAgrupador[modelo.agrupador]) {
            porAgrupador[modelo.agrupador] = [];
        }
        porAgrupador[modelo.agrupador].push(modelo);
    }

    // Mostrar estatísticas
    console.log('Por agrupador:');
    for (const [agrupador, modelos] of Object.entries(porAgrupador)) {
        console.log(`  ${agrupador}: ${modelos.length}`);
    }

    // Gerar código para cada agrupador
    const outputDir = path.join(__dirname, '..', 'services', 'templates', 'extracted');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const [agrupador, modelos] of Object.entries(porAgrupador)) {
        const codigo = await gerarCodigoTs(modelos);
        const outputPath = path.join(outputDir, `${agrupador}_docx.ts`);
        fs.writeFileSync(outputPath, `// Modelos extraídos de arquivos DOCX - ${agrupador}\n// Total: ${modelos.length} modelos\n\nexport const MODELOS_${agrupador.toUpperCase()}_DOCX = [\n${codigo}];\n`);
        console.log(`\nGerado: ${outputPath}`);
    }

    console.log('\n=== Extração concluída! ===');
}

main().catch(console.error);
