/**
 * Script de Extração de Modelos DOCX v3
 * Com detecção de tipo (decisão/despacho/sentença), verificação de duplicatas
 * e filtro de arquivos inválidos
 * 
 * Uso: node scripts/extractDocxModels_v3.cjs
 */

const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const DECISOES_PATH = path.join(__dirname, '..', 'knowledge', 'decisoes', 'old');
const EXTRACTED_PATH = path.join(__dirname, '..', 'services', 'templates', 'extracted');

// Arquivos a IGNORAR (não são modelos de decisão/despacho/sentença)
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

// Carregar modelos existentes para verificar duplicatas
function carregarModelosExistentes() {
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

    console.log(`Modelos existentes na base: ${existentes.size}`);
    return existentes;
}

// Verificar se arquivo deve ser ignorado
function deveIgnorar(nomeArquivo) {
    return ARQUIVOS_IGNORAR.some(ign => nomeArquivo.toLowerCase().includes(ign.toLowerCase()));
}

// Detectar tipo de documento baseado no nome e conteúdo
// Tipos válidos: decisao, despacho, sentenca (estagIA não produz acórdãos)
function detectarTipoDocumento(nomeArquivo, conteudo) {
    const nome = nomeArquivo.toUpperCase();
    const texto = conteudo.toUpperCase().slice(0, 800);

    // DESPACHOS - prioridade alta
    if (nome.startsWith('DESPACHO')) return 'despacho';
    if (nome.includes(' DESPACHO')) return 'despacho';
    if (texto.includes('CERTIFIQUE-SE') && texto.length < 600) return 'despacho';
    if (texto.includes('OFICIE-SE') && texto.length < 600) return 'despacho';
    if (texto.includes('INTIME-SE') && texto.length < 600) return 'despacho';

    // Sentenças
    if (nome.includes('SENTENÇA') || nome.includes('SENTENCA')) return 'sentenca';
    if (texto.includes('JULGO PROCEDENTE') || texto.includes('JULGO IMPROCEDENTE')) return 'sentenca';
    if (texto.includes('PELO EXPOSTO, CONDENO')) return 'sentenca';

    // Default: decisão (inclui acórdãos que são tratados como decisões)
    return 'decisao';
}

// Detectar agrupador baseado no nome do arquivo
function detectarAgrupador(nomeArquivo, tipoDoc) {
    const nome = nomeArquivo.toUpperCase();

    // Se é despacho, criar agrupador específico
    if (tipoDoc === 'despacho') return 'despachos';

    // Mapeamento por palavras-chave
    if (nome.includes('PRESCRIÇÃO') || nome.includes('PRESCRICAO') || nome.includes('PUNITIVA') || nome.includes('EXTINÇÃO')) return 'prescricao';
    if (nome.includes('PROGRESSÃO') || nome.includes('PROGRESSAO') || nome.includes('PROGRESSO')) return 'progressao';
    if (nome.includes('REGRESSÃO') || nome.includes('REGRESSAO')) return 'regressao';
    if (nome.includes('UNIFICAÇÃO') || nome.includes('UNIFICACAO') || nome.includes('UNIFICADA')) return 'unificacao';
    if (nome.includes('RETIFICAÇÃO') || nome.includes('RETIFICACAO') || nome.includes('RET GEP') || nome.includes('RETIFICADA')) return 'retificacao';
    if (nome.includes('PRISÃO DOMICILIAR') || nome.includes('PRISAO DOMICILIAR')) return 'prisaoDomiciliar';
    if (nome.includes('FALTA GRAVE') || nome.includes('HOMOLOGAÇÃO FALTA')) return 'faltaGrave';
    if (nome.includes('FALTA MÉDIA') || nome.includes('FALTA MEDIA')) return 'faltaMedia';
    if (nome.includes('INDULTO') || nome.includes('DECRETO 8615') || nome.includes('DECRETO 11')) return 'indulto';
    if (nome.includes('COMUTAÇÃO') || nome.includes('COMUTACAO')) return 'comutacao';
    if (nome.includes('REMIÇÃO') || nome.includes('REMICAO') || nome.includes('ENEM') || nome.includes('ESTUDO') || nome.includes('TRABALHO')) return 'remicao';
    if (nome.includes('TRANSFERÊNCIA') || nome.includes('TRANSFERENCIA')) return 'transferencia';
    if (nome.includes('LIVRAMENTO')) return 'livramento';
    if (nome.includes('EMBARGO')) return 'embargos';
    if (nome.includes('INCOMPETÊNCIA') || nome.includes('INCOMPETENCIA') || nome.includes('DECLÍNIO') || nome.includes('DECLINIO')) return 'incompetencia';
    if (nome.includes('MONITORAMENTO')) return 'monitoramento';
    if (nome.includes('RECONSIDERAÇÃO') || nome.includes('RECONSIDERACAO')) return 'outros';
    if (nome.includes('ADAPTAÇÃO') || nome.includes('ADAPTACAO') || nome.includes('ADEQUAÇÃO') || nome.includes('ADEQUACAO')) return 'adequacaoRegime';
    if (nome.includes('MULTA')) return 'multa';
    if (nome.includes('MEDIDA DE SEGURANÇA') || nome.includes('MEDIDA DE SEGURANCA')) return 'medidaSeguranca';
    if (nome.includes('REVOGAÇÃO') || nome.includes('REVOGACAO')) return 'outros';
    if (nome.includes('REFORMA') || nome.includes('ANULAÇÃO') || nome.includes('ERRO MATERIAL')) return 'outros';

    return 'outros';
}

// Verificar se é duplicata - DESABILITADO para extrair tudo
// Depois faremos a curadoria manual
function isDuplicata(nomeModelo, existentes) {
    // Apenas match exato
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

async function extrairDocx(caminhoArquivo) {
    try {
        if (caminhoArquivo.endsWith('.pdf')) {
            return `[Conteúdo PDF - Ver arquivo original: ${path.basename(caminhoArquivo)}]`;
        }
        const result = await mammoth.extractRawText({ path: caminhoArquivo });
        return result.value.trim();
    } catch (error) {
        console.error(`Erro ao extrair ${caminhoArquivo}:`, error.message);
        return '';
    }
}

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
        fonteOriginal: 'OLD_DOCX',
        dataExtracao: '${new Date().toISOString().split('T')[0]}',
        conteudo: \`${conteudoEscapado}\`,
    },
`;
    }

    return codigo;
}

async function main() {
    console.log('=== Extrator de Modelos v3 (com classificação de tipos) ===\n');

    const existentes = carregarModelosExistentes();

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
        porTipo: {},
        porAgrupador: {},
    };

    for (const arquivo of arquivos) {
        if (!arquivo.match(/\.(docx|odt|doc|pdf)$/i)) continue;

        estatisticas.total++;

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
        const conteudo = await extrairDocx(caminhoCompleto);
        if (!conteudo || conteudo.length < 50) {
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

        console.log(`✅ ${tipoDocumento.padEnd(10)} | ${agrupador.padEnd(15)} | ${nome.slice(0, 50)}`);
    }

    console.log('\n=== Estatísticas ===');
    console.log(`Total de arquivos: ${estatisticas.total}`);
    console.log(`Extraídos: ${estatisticas.extraidos}`);
    console.log(`Duplicatas: ${estatisticas.duplicatas}`);
    console.log(`Ignorados: ${estatisticas.ignorados}`);
    console.log(`Erros: ${estatisticas.erros}`);
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
        fs.writeFileSync(outputPath, `// Modelos extraídos da pasta OLD - ${agrupador}\n// Total: ${mods.length} modelos\n// Tipos: ${[...new Set(mods.map(m => m.tipoDocumento))].join(', ')}\n// Data: ${new Date().toISOString()}\n\nexport const MODELOS_${agrupador.toUpperCase()}_OLD = [\n${codigo}];\n`);
        console.log(`\nGerado: ${outputPath} (${mods.length} modelos)`);
    }

    console.log('\n=== Extração concluída! ===');
}

main().catch(console.error);
