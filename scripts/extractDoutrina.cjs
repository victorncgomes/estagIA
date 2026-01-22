/**
 * Script de Extração de Doutrina Jurídica v1.0
 * Pipeline OCR de 3 camadas para PDFs escaneados
 * 
 * Uso:
 *   node scripts/extractDoutrina.cjs                    # Processa todos
 *   node scripts/extractDoutrina.cjs --limite=5         # Limita a 5 PDFs
 *   node scripts/extractDoutrina.cjs --arquivo="nome.pdf" --preview  # Preview de 1 arquivo
 *   node scripts/extractDoutrina.cjs --status           # Mostra progresso
 * 
 * Características:
 *   - Retomável: salva progresso a cada página
 *   - OCR multi-camada: pdf-parse → tesseract.js → Gemini Vision
 *   - Citações ABNT automáticas com página
 *   - Saída segmentada por blocos de 50 páginas
 */

const fs = require('fs');
const path = require('path');

// ===== CONFIGURAÇÃO =====
const CONFIG = {
    DOUTRINA_PATH: path.join(__dirname, '..', 'knowledge', 'doutrina'),
    TEXTOS_PATH: path.join(__dirname, '..', 'knowledge', 'doutrina', 'textos'),
    INDEX_FILE: path.join(__dirname, '..', 'knowledge', 'doutrina', 'doutrina_index.json'),
    PROGRESS_FILE: path.join(__dirname, '..', 'knowledge', 'doutrina', 'doutrina_progress.json'),

    // Thresholds
    MIN_CHARS_POR_PAGINA: 100,  // Abaixo disso, considera escaneado
    GARBAGE_CHAR_RATIO: 0.15,   // Acima disso, considera OCR ruim
    PAGINAS_POR_ARQUIVO: 50,    // Segmentação de saída

    // OCR
    OCR_LANG: 'por',  // Português
    GEMINI_FALLBACK: true,
};

// ===== IMPORTS DINÂMICOS =====
let pdfParse, Tesseract, pdfPoppler;

function carregarDependencias() {
    try {
        const pdfModule = require('pdf-parse');
        pdfParse = pdfModule.default || pdfModule;
        console.log('✅ pdf-parse carregado');
    } catch (e) {
        console.log('❌ pdf-parse não encontrado - instale: npm install pdf-parse');
        process.exit(1);
    }

    try {
        Tesseract = require('tesseract.js');
        console.log('✅ tesseract.js carregado');
    } catch (e) {
        console.log('⚠️  tesseract.js não encontrado - OCR desabilitado');
    }

    try {
        pdfPoppler = require('pdf-poppler');
        console.log('✅ pdf-poppler carregado');
    } catch (e) {
        console.log('⚠️  pdf-poppler não encontrado - conversão PDF→imagem desabilitada');
    }
}

// ===== PARSING DE METADADOS DO NOME DO ARQUIVO =====

/**
 * Extrai metadados do nome do arquivo
 * @param {string} nomeArquivo - Nome do arquivo PDF
 * @returns {Object} Metadados extraídos
 */
function parseMetadados(nomeArquivo) {
    const nome = nomeArquivo.replace(/\.pdf$/i, '').replace(/^#/, '');

    // Padrões comuns:
    // "Código Penal Comentado (2017) - Guilherme de Souza Nucci"
    // "2019_1_Execucao_Penal_5a_edição"
    // "Direito Constitucional Esquematizado by Pedro Lenza"

    const metadados = {
        titulo: '',
        autor: '',
        ano: null,
        edicao: null,
        editora: null,
    };

    // Extrair ano
    const matchAno = nome.match(/\((\d{4})\)|(\d{4})_|_(\d{4})|(\d{4})$/);
    if (matchAno) {
        metadados.ano = parseInt(matchAno[1] || matchAno[2] || matchAno[3] || matchAno[4]);
    }

    // Extrair edição
    const matchEdicao = nome.match(/(\d+)[ªaº]?\s*(ed|edição|edicao)/i);
    if (matchEdicao) {
        metadados.edicao = parseInt(matchEdicao[1]);
    }

    // Separar autor e título
    // Padrão: "Título - Autor" ou "Título by Autor"
    let partes = nome.split(/\s+-\s+|\s+by\s+/i);
    if (partes.length >= 2) {
        metadados.titulo = partes[0].replace(/\(\d{4}\)/, '').trim();
        metadados.autor = partes[partes.length - 1].trim();
    } else {
        // Tentar padrão "Autor - Título"
        partes = nome.split(/\s+-\s+/);
        if (partes.length >= 2 && partes[0].match(/^[A-Z][a-záéíóúãõç\s]+$/)) {
            metadados.autor = partes[0].trim();
            metadados.titulo = partes.slice(1).join(' - ').replace(/\(\d{4}\)/, '').trim();
        } else {
            metadados.titulo = nome.replace(/\(\d{4}\)/, '').replace(/_/g, ' ').trim();
        }
    }

    // Limpar título
    metadados.titulo = metadados.titulo
        .replace(/^\d+_\d+_/, '')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    // Inferir editora de padrões conhecidos
    const editoraMap = {
        'Nucci': 'Forense',
        'Greco': 'Impetus',
        'Renato Brasileiro': 'JusPodivm',
        'Távora': 'JusPodivm',
        'Marcão': 'Saraiva',
        'Zanella': 'Atlas',
        'Lenza': 'Saraiva',
        'Sanches': 'JusPodivm',
        'Avena': 'Método',
        'Medina': 'RT',
        'Donizetti': 'Atlas',
        'Marinoni': 'RT',
        'Ada Pellegrini': 'Forense Universitária',
        'Theodoro': 'Forense',
        'Scavone': 'Forense',
        'Roig': 'Saraiva',
    };

    for (const [autorParcial, editora] of Object.entries(editoraMap)) {
        if (nome.includes(autorParcial)) {
            metadados.editora = editora;
            break;
        }
    }

    return metadados;
}

/**
 * Gera citação ABNT
 * @param {Object} metadados - Metadados do livro
 * @returns {string} Citação formatada
 */
function gerarCitacaoABNT(metadados) {
    const partes = [];

    // Autor em caixa alta
    if (metadados.autor) {
        const nomes = metadados.autor.split(' ');
        if (nomes.length > 1) {
            const sobrenome = nomes[nomes.length - 1].toUpperCase();
            const prenome = nomes.slice(0, -1).join(' ');
            partes.push(`${sobrenome}, ${prenome}`);
        } else {
            partes.push(metadados.autor.toUpperCase());
        }
    }

    // Título em itálico (representado entre aspas por ser texto)
    if (metadados.titulo) {
        partes.push(`${metadados.titulo}`);
    }

    // Edição
    if (metadados.edicao) {
        partes.push(`${metadados.edicao}. ed.`);
    }

    // Editora e ano
    const local = 'São Paulo'; // Default
    if (metadados.editora && metadados.ano) {
        partes.push(`${local}: ${metadados.editora}, ${metadados.ano}`);
    } else if (metadados.ano) {
        partes.push(`${metadados.ano}`);
    }

    return partes.join('. ') + '.';
}

/**
 * Gera ID único para o livro
 * @param {Object} metadados 
 * @param {string} nomeArquivo 
 * @returns {string}
 */
function gerarId(metadados, nomeArquivo) {
    let id = '';

    if (metadados.autor) {
        const sobrenome = metadados.autor.split(' ').pop().toLowerCase();
        id += sobrenome + '_';
    }

    if (metadados.titulo) {
        id += metadados.titulo
            .toLowerCase()
            .replace(/[áàãâä]/g, 'a')
            .replace(/[éèêë]/g, 'e')
            .replace(/[íìîï]/g, 'i')
            .replace(/[óòõôö]/g, 'o')
            .replace(/[úùûü]/g, 'u')
            .replace(/ç/g, 'c')
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .slice(0, 30);
    }

    if (metadados.ano) {
        id += '_' + metadados.ano;
    }

    return id.replace(/_+/g, '_').replace(/^_|_$/g, '');
}

// ===== EXTRAÇÃO DE PDF =====

/**
 * Detecta se PDF é escaneado baseado no conteúdo
 * @param {string} texto - Texto extraído
 * @param {number} numPaginas - Número de páginas
 * @returns {boolean}
 */
function isEscaneado(texto, numPaginas) {
    if (!texto || texto.length < CONFIG.MIN_CHARS_POR_PAGINA * numPaginas) {
        return true;
    }

    // Verificar "garbage characters" (OCR ruim ou PDF protegido)
    const garbageChars = (texto.match(/[^\w\sáéíóúãõâêîôûàèìòùçÁÉÍÓÚÃÕÂÊÎÔÛÀÈÌÒÙÇ.,;:!?\-()[\]{}'"]/g) || []).length;
    const ratio = garbageChars / texto.length;

    return ratio > CONFIG.GARBAGE_CHAR_RATIO;
}

/**
 * Extrai texto de PDF usando pdf-parse (Camada 1)
 * @param {string} caminhoArquivo 
 * @returns {Promise<{texto: string, numPaginas: number, camada: string}>}
 */
async function extrairPdfNativo(caminhoArquivo) {
    const buffer = fs.readFileSync(caminhoArquivo);
    const data = await pdfParse(buffer);

    return {
        texto: data.text,
        numPaginas: data.numpages,
        camada: 'pdf-parse',
    };
}

/**
 * Extrai texto de PDF página por página com OCR (Camada 2)
 * @param {string} caminhoArquivo 
 * @param {number} paginaInicial - Página para retomar
 * @param {function} onProgress - Callback de progresso
 * @returns {Promise<{paginas: Array, camada: string}>}
 */
async function extrairPdfOCR(caminhoArquivo, paginaInicial = 1, onProgress = null) {
    if (!pdfPoppler || !Tesseract) {
        throw new Error('pdf-poppler e tesseract.js são necessários para OCR');
    }

    const outputDir = path.join(CONFIG.TEXTOS_PATH, 'temp_images');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Converter PDF para imagens
    const opts = {
        format: 'png',
        out_dir: outputDir,
        out_prefix: 'page',
        page: null, // Todas as páginas
    };

    console.log('  Convertendo PDF para imagens...');
    await pdfPoppler.convert(caminhoArquivo, opts);

    // Listar imagens geradas
    const imagens = fs.readdirSync(outputDir)
        .filter(f => f.startsWith('page') && f.endsWith('.png'))
        .sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)[0]);
            const numB = parseInt(b.match(/\d+/)[0]);
            return numA - numB;
        });

    const paginas = [];
    const worker = await Tesseract.createWorker(CONFIG.OCR_LANG);

    try {
        for (let i = paginaInicial - 1; i < imagens.length; i++) {
            const imagemPath = path.join(outputDir, imagens[i]);
            const numPagina = i + 1;

            if (onProgress) {
                onProgress(numPagina, imagens.length);
            }

            const { data: { text } } = await worker.recognize(imagemPath);

            paginas.push({
                numero: numPagina,
                texto: text.trim(),
            });

            // Limpar imagem processada
            fs.unlinkSync(imagemPath);
        }
    } finally {
        await worker.terminate();
    }

    // Limpar diretório temporário
    try {
        fs.rmdirSync(outputDir);
    } catch (e) {
        // Ignorar erro se diretório não estiver vazio
    }

    return {
        paginas,
        camada: 'tesseract',
    };
}

// ===== GERENCIAMENTO DE PROGRESSO =====

function carregarProgresso() {
    if (fs.existsSync(CONFIG.PROGRESS_FILE)) {
        return JSON.parse(fs.readFileSync(CONFIG.PROGRESS_FILE, 'utf-8'));
    }
    return {
        ultimaExecucao: null,
        arquivos: {},
    };
}

function salvarProgresso(progresso) {
    progresso.ultimaExecucao = new Date().toISOString();
    fs.writeFileSync(CONFIG.PROGRESS_FILE, JSON.stringify(progresso, null, 2), 'utf-8');
}

function carregarIndice() {
    if (fs.existsSync(CONFIG.INDEX_FILE)) {
        return JSON.parse(fs.readFileSync(CONFIG.INDEX_FILE, 'utf-8'));
    }
    return {
        meta: {
            versao: '1.0.0',
            totalLivros: 0,
            ultimaAtualizacao: null,
        },
        livros: [],
    };
}

function salvarIndice(indice) {
    indice.meta.ultimaAtualizacao = new Date().toISOString();
    indice.meta.totalLivros = indice.livros.length;
    fs.writeFileSync(CONFIG.INDEX_FILE, JSON.stringify(indice, null, 2), 'utf-8');
}

// ===== SALVAMENTO DE TEXTO EXTRAÍDO =====

/**
 * Salva texto extraído em arquivos segmentados
 * @param {string} id - ID do livro
 * @param {Object} metadados 
 * @param {Array|string} conteudo - Páginas ou texto bruto
 * @param {string} nomeArquivo 
 * @returns {Array<string>} Arquivos gerados
 */
function salvarTextoExtraido(id, metadados, conteudo, nomeArquivo) {
    if (!fs.existsSync(CONFIG.TEXTOS_PATH)) {
        fs.mkdirSync(CONFIG.TEXTOS_PATH, { recursive: true });
    }

    const arquivosGerados = [];

    // Se conteúdo é string (extração nativa), converter para páginas simuladas
    let paginas;
    if (typeof conteudo === 'string') {
        // Dividir por form feed ou estimativa de 3000 chars por página
        const partes = conteudo.split(/\f/);
        if (partes.length > 1) {
            paginas = partes.map((texto, i) => ({ numero: i + 1, texto: texto.trim() }));
        } else {
            // Dividir artificialmente
            const charsPerPage = 3000;
            paginas = [];
            for (let i = 0; i < conteudo.length; i += charsPerPage) {
                paginas.push({
                    numero: paginas.length + 1,
                    texto: conteudo.slice(i, i + charsPerPage).trim(),
                });
            }
        }
    } else {
        paginas = conteudo;
    }

    // Segmentar em blocos
    for (let i = 0; i < paginas.length; i += CONFIG.PAGINAS_POR_ARQUIVO) {
        const bloco = paginas.slice(i, i + CONFIG.PAGINAS_POR_ARQUIVO);
        const paginaInicio = bloco[0].numero;
        const paginaFim = bloco[bloco.length - 1].numero;

        const nomeArquivoTexto = `${id}_p${String(paginaInicio).padStart(3, '0')}-${String(paginaFim).padStart(3, '0')}.txt`;
        const caminhoArquivoTexto = path.join(CONFIG.TEXTOS_PATH, nomeArquivoTexto);

        // Construir conteúdo com metadados
        let conteudoArquivo = `[META]
TITULO: ${metadados.titulo}
AUTOR: ${metadados.autor || 'Desconhecido'}
ANO: ${metadados.ano || 'N/A'}
EDICAO: ${metadados.edicao || 'N/A'}
EDITORA: ${metadados.editora || 'N/A'}
PAGINAS: ${paginaInicio}-${paginaFim}
ARQUIVO_ORIGINAL: ${nomeArquivo}
CITACAO_ABNT: ${gerarCitacaoABNT(metadados)}
[/META]

`;

        for (const pagina of bloco) {
            conteudoArquivo += `[PAGINA ${pagina.numero}]
${pagina.texto}
[/PAGINA ${pagina.numero}]

`;
        }

        fs.writeFileSync(caminhoArquivoTexto, conteudoArquivo, 'utf-8');
        arquivosGerados.push(nomeArquivoTexto);
    }

    return arquivosGerados;
}

// ===== PROCESSAMENTO PRINCIPAL =====

async function processarArquivo(nomeArquivo, progresso, indice, opcoes = {}) {
    const caminhoCompleto = path.join(CONFIG.DOUTRINA_PATH, nomeArquivo);

    // Verificar se já foi processado
    const estadoArquivo = progresso.arquivos[nomeArquivo];
    if (estadoArquivo && estadoArquivo.status === 'concluido') {
        console.log(`⏭️  Já processado: ${nomeArquivo}`);
        return null;
    }

    console.log(`\n📖 Processando: ${nomeArquivo}`);

    // Extrair metadados
    const metadados = parseMetadados(nomeArquivo);
    console.log(`   Título: ${metadados.titulo}`);
    console.log(`   Autor: ${metadados.autor || 'N/A'}`);
    console.log(`   Ano: ${metadados.ano || 'N/A'}`);

    if (opcoes.preview) {
        // Modo preview: apenas mostrar primeiros 500 chars
        try {
            const resultado = await extrairPdfNativo(caminhoCompleto);
            console.log(`\n--- PREVIEW (${resultado.numPaginas} páginas) ---`);
            console.log(resultado.texto.slice(0, 500) + '...');
            console.log('--- FIM PREVIEW ---');
            return null;
        } catch (error) {
            console.error(`Erro: ${error.message}`);
            return null;
        }
    }

    // Marcar como em progresso
    progresso.arquivos[nomeArquivo] = {
        status: 'em_progresso',
        inicio: new Date().toISOString(),
        ultimaPaginaProcessada: estadoArquivo?.ultimaPaginaProcessada || 0,
    };
    salvarProgresso(progresso);

    try {
        // Camada 1: Extração nativa
        console.log('   Camada 1: Extração nativa...');
        const resultadoNativo = await extrairPdfNativo(caminhoCompleto);

        let textoFinal;
        let camadaUsada;
        let numPaginas = resultadoNativo.numPaginas;

        if (!isEscaneado(resultadoNativo.texto, numPaginas)) {
            // Texto nativo é bom
            textoFinal = resultadoNativo.texto;
            camadaUsada = 'pdf-parse';
            console.log(`   ✅ Texto nativo extraído (${textoFinal.length} chars)`);
        } else {
            console.log('   ⚠️  PDF escaneado detectado');

            if (Tesseract && pdfPoppler) {
                // Camada 2: OCR
                console.log('   Camada 2: OCR com Tesseract...');
                const paginaInicial = (estadoArquivo?.ultimaPaginaProcessada || 0) + 1;

                const resultadoOCR = await extrairPdfOCR(caminhoCompleto, paginaInicial, (atual, total) => {
                    process.stdout.write(`\r   Página ${atual}/${total}`);
                    progresso.arquivos[nomeArquivo].ultimaPaginaProcessada = atual;
                    if (atual % 10 === 0) {
                        salvarProgresso(progresso);
                    }
                });

                console.log('');
                textoFinal = resultadoOCR.paginas;
                camadaUsada = 'tesseract';
                console.log(`   ✅ OCR concluído (${resultadoOCR.paginas.length} páginas)`);
            } else {
                // Fallback: usar texto parcial
                textoFinal = resultadoNativo.texto || '[EXTRAÇÃO FALHOU - PDF ESCANEADO SEM OCR]';
                camadaUsada = 'pdf-parse-parcial';
                console.log('   ⚠️  OCR não disponível, usando texto parcial');
            }
        }

        // Gerar ID e salvar
        const id = gerarId(metadados, nomeArquivo);
        const arquivosGerados = salvarTextoExtraido(id, metadados, textoFinal, nomeArquivo);

        // Atualizar índice
        const livroExistente = indice.livros.findIndex(l => l.id === id);
        const livroData = {
            id,
            titulo: metadados.titulo,
            autor: metadados.autor,
            editora: metadados.editora,
            ano: metadados.ano,
            edicao: metadados.edicao,
            arquivoOriginal: nomeArquivo,
            totalPaginas: numPaginas,
            status: 'processado',
            camadaExtracao: camadaUsada,
            citacaoABNT: gerarCitacaoABNT(metadados),
            arquivosTexto: arquivosGerados,
            dataProcessamento: new Date().toISOString(),
        };

        if (livroExistente >= 0) {
            indice.livros[livroExistente] = livroData;
        } else {
            indice.livros.push(livroData);
        }
        salvarIndice(indice);

        // Marcar como concluído
        progresso.arquivos[nomeArquivo] = {
            status: 'concluido',
            camadaUsada,
            paginasTotal: numPaginas,
            arquivosGerados: arquivosGerados.length,
            conclusao: new Date().toISOString(),
        };
        salvarProgresso(progresso);

        console.log(`   ✅ Salvo: ${arquivosGerados.length} arquivo(s) de texto`);

        return { id, arquivosGerados };

    } catch (error) {
        console.error(`   ❌ Erro: ${error.message}`);

        progresso.arquivos[nomeArquivo] = {
            status: 'erro',
            erro: error.message,
            dataErro: new Date().toISOString(),
        };
        salvarProgresso(progresso);

        return null;
    }
}

// ===== COMANDOS =====

async function mostrarStatus() {
    const progresso = carregarProgresso();
    const indice = carregarIndice();

    console.log('\n=== Status da Indexação de Doutrina ===\n');
    console.log(`Última execução: ${progresso.ultimaExecucao || 'Nunca'}`);
    console.log(`Livros no índice: ${indice.meta.totalLivros}`);

    const arquivos = fs.readdirSync(CONFIG.DOUTRINA_PATH).filter(f => f.endsWith('.pdf'));
    const concluidos = Object.values(progresso.arquivos).filter(a => a.status === 'concluido').length;
    const emProgresso = Object.values(progresso.arquivos).filter(a => a.status === 'em_progresso').length;
    const erros = Object.values(progresso.arquivos).filter(a => a.status === 'erro').length;
    const pendentes = arquivos.length - concluidos - emProgresso - erros;

    console.log(`\nProgresso:`);
    console.log(`  ✅ Concluídos: ${concluidos}/${arquivos.length}`);
    console.log(`  ⏳ Em progresso: ${emProgresso}`);
    console.log(`  ❌ Erros: ${erros}`);
    console.log(`  📋 Pendentes: ${pendentes}`);

    if (erros > 0) {
        console.log(`\nArquivos com erro:`);
        for (const [arquivo, estado] of Object.entries(progresso.arquivos)) {
            if (estado.status === 'erro') {
                console.log(`  - ${arquivo}: ${estado.erro}`);
            }
        }
    }
}

async function main() {
    console.log('=== Extrator de Doutrina Jurídica v1.0 ===\n');

    // Parse args
    const args = process.argv.slice(2);
    const opcoes = {
        limite: null,
        arquivo: null,
        preview: false,
        status: false,
    };

    for (const arg of args) {
        if (arg.startsWith('--limite=')) {
            opcoes.limite = parseInt(arg.split('=')[1]);
        } else if (arg.startsWith('--arquivo=')) {
            opcoes.arquivo = arg.split('=')[1].replace(/"/g, '');
        } else if (arg === '--preview') {
            opcoes.preview = true;
        } else if (arg === '--status') {
            opcoes.status = true;
        }
    }

    if (opcoes.status) {
        await mostrarStatus();
        return;
    }

    // Carregar dependências
    carregarDependencias();

    // Garantir diretórios
    if (!fs.existsSync(CONFIG.TEXTOS_PATH)) {
        fs.mkdirSync(CONFIG.TEXTOS_PATH, { recursive: true });
    }

    // Carregar estado
    const progresso = carregarProgresso();
    const indice = carregarIndice();

    // Listar PDFs
    let arquivos = fs.readdirSync(CONFIG.DOUTRINA_PATH).filter(f => f.endsWith('.pdf'));

    if (opcoes.arquivo) {
        arquivos = arquivos.filter(f => f.includes(opcoes.arquivo));
        if (arquivos.length === 0) {
            console.log(`Arquivo não encontrado: ${opcoes.arquivo}`);
            return;
        }
    }

    console.log(`PDFs encontrados: ${arquivos.length}`);

    if (opcoes.limite) {
        arquivos = arquivos.slice(0, opcoes.limite);
        console.log(`Limitando a: ${opcoes.limite} arquivo(s)`);
    }

    // Processar
    let processados = 0;
    let erros = 0;

    for (const arquivo of arquivos) {
        try {
            const resultado = await processarArquivo(arquivo, progresso, indice, opcoes);
            if (resultado) {
                processados++;
            }
        } catch (error) {
            console.error(`Erro ao processar ${arquivo}: ${error.message}`);
            erros++;
        }
    }

    console.log(`\n=== Resumo ===`);
    console.log(`Processados: ${processados}`);
    console.log(`Erros: ${erros}`);
    console.log(`Total no índice: ${indice.meta.totalLivros}`);
}

// Exportar funções para testes
module.exports = {
    parseMetadados,
    gerarCitacaoABNT,
    gerarId,
    isEscaneado,
};

// Executar se chamado diretamente
if (require.main === module) {
    main().catch(console.error);
}
