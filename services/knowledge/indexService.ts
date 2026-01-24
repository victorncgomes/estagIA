/**
 * Index Service - Carrega e fornece estatísticas das bases indexadas
 * 
 * Serviço para acessar os índices JSON de legislação, doutrina e jurisprudência.
 */

// Tipos para Legislação
export interface LeiIndex {
    id: string;
    titulo: string;
    apelido: string;
    url: string;
    arquivoVigor: string;
    arquivoHistorico: string | null;
    tamanhoVigor: number;
    trechosRevogados: number;
    ultimaAtualizacao: string;
}

export interface LegislacaoIndex {
    meta: {
        descricao: string;
        versao: string;
        ultimaAtualizacao: string;
        totalLeis: number;
    };
    leis: LeiIndex[];
}

// Tipos para Doutrina
export interface LivroIndex {
    id: string;
    titulo: string;
    autor: string;
    editora: string | null;
    ano: number | null;
    edicao: number | null;
    arquivoOriginal: string;
    totalPaginas: number;
    status: string;
    camadaExtracao: string;
    citacaoABNT: string;
    arquivosTexto: string[];
    dataProcessamento: string;
}

export interface DoutrinaIndex {
    meta: {
        versao: string;
        descricao: string;
        totalLivros: number;
        ultimaAtualizacao: string;
    };
    livros: LivroIndex[];
}

// Tipos para Jurisprudência
export interface JulgadoIndex {
    id: string;
    numero: string;
    tribunal: string;
    tipo: string;
    ementa: string;
    dataJulgamento?: string;
    relator?: string;
}

export interface JurisprudenciaIndex {
    meta: {
        versao: string;
        totalJulgados: number;
        ultimaAtualizacao: string;
    };
    julgados: JulgadoIndex[];
}

// Estatísticas consolidadas
export interface IndexStats {
    modelos: {
        total: number;
        categorias: number;
    };
    legislacao: {
        total: number;
        tamanhoTotal: string;
        ultimaAtualizacao: string;
    };
    doutrina: {
        total: number;
        paginas: number;
        ultimaAtualizacao: string;
    };
    jurisprudencia: {
        total: number;
        tribunais: string[];
        ultimaAtualizacao: string;
    };
}

// Cache para evitar recarregar os índices
let legislacaoCache: LegislacaoIndex | null = null;
let doutrinaCache: DoutrinaIndex | null = null;
let jurisprudenciaCache: JurisprudenciaIndex | null = null;

/**
 * Carrega o índice de legislação
 */
export async function getLegislacaoIndex(): Promise<LegislacaoIndex> {
    if (legislacaoCache) {
        return legislacaoCache;
    }

    try {
        const module = await import('../../knowledge/legislacao/legislacao_index.json');
        legislacaoCache = module.default || module;
        return legislacaoCache;
    } catch (error) {
        console.error('[IndexService] Erro ao carregar legislação:', error);
        return {
            meta: { descricao: '', versao: '0', ultimaAtualizacao: '', totalLeis: 0 },
            leis: [],
        };
    }
}

/**
 * Carrega o índice de doutrina
 */
export async function getDoutrinaIndex(): Promise<DoutrinaIndex> {
    if (doutrinaCache) {
        return doutrinaCache;
    }

    try {
        const module = await import('../../knowledge/doutrina/doutrina_index.json');
        doutrinaCache = module.default || module;
        return doutrinaCache;
    } catch (error) {
        console.error('[IndexService] Erro ao carregar doutrina:', error);
        return {
            meta: { versao: '0', descricao: '', totalLivros: 0, ultimaAtualizacao: '' },
            livros: [],
        };
    }
}

/**
 * Carrega o índice de jurisprudência
 * Nota: Não existe um arquivo jurisprudencia_index.json consolidado ainda.
 * Retorna dados estáticos baseados nos arquivos existentes.
 */
export async function getJurisprudenciaIndex(): Promise<JurisprudenciaIndex> {
    if (jurisprudenciaCache) {
        return jurisprudenciaCache;
    }

    // Dados estáticos baseados nos arquivos existentes em knowledge/jurisprudencia/
    // tjrn_execucao_penal.json: 2.331 acórdãos
    // stf_execucao_penal.json: 31 repercussão geral
    // stj_repetitivos.json: 75 repetitivos
    // stj_sumulas.json: 25 súmulas
    jurisprudenciaCache = {
        meta: {
            versao: '2.2.0',
            totalJulgados: 2462,
            ultimaAtualizacao: '2026-01-21T10:00:00.000Z',
        },
        julgados: [], // Não carregamos os julgados individuais aqui para performance
    };

    return jurisprudenciaCache;
}

/**
 * Retorna estatísticas da jurisprudência sem carregar os julgados
 */
export function getJurisprudenciaStats(): { total: number; tribunais: string[] } {
    return {
        total: 2462,
        tribunais: ['TJRN', 'STF', 'STJ'],
    };
}

/**
 * Formata tamanho em bytes para exibição legível
 */
function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Obtém estatísticas consolidadas de todas as bases
 */
export async function getIndexStats(): Promise<IndexStats> {
    const [legislacao, doutrina, jurisprudencia] = await Promise.all([
        getLegislacaoIndex(),
        getDoutrinaIndex(),
        getJurisprudenciaIndex(),
    ]);

    // Calcula tamanho total da legislação
    const tamanhoTotalBytes = legislacao.leis.reduce((acc, lei) => acc + (lei.tamanhoVigor || 0), 0);

    // Calcula total de páginas da doutrina
    const totalPaginas = doutrina.livros.reduce((acc, livro) => acc + (livro.totalPaginas || 0), 0);

    // Lista de tribunais únicos
    const tribunais = [...new Set(jurisprudencia.julgados.map(j => j.tribunal))];

    return {
        modelos: {
            total: 484, // Valor fixo baseado na base unificada
            categorias: 25,
        },
        legislacao: {
            total: legislacao.meta.totalLeis || legislacao.leis.length,
            tamanhoTotal: formatBytes(tamanhoTotalBytes),
            ultimaAtualizacao: legislacao.meta.ultimaAtualizacao,
        },
        doutrina: {
            total: doutrina.meta.totalLivros || doutrina.livros.length,
            paginas: totalPaginas,
            ultimaAtualizacao: doutrina.meta.ultimaAtualizacao,
        },
        jurisprudencia: {
            total: jurisprudencia.meta.totalJulgados || jurisprudencia.julgados.length,
            tribunais,
            ultimaAtualizacao: jurisprudencia.meta.ultimaAtualizacao,
        },
    };
}

/**
 * Categoriza leis por tipo
 */
export function categorizarLeis(leis: LeiIndex[]): Record<string, LeiIndex[]> {
    const categorias: Record<string, LeiIndex[]> = {
        'Códigos': [],
        'Leis Penais Especiais': [],
        'Decretos de Indulto': [],
        'Estatutos e Outras': [],
    };

    for (const lei of leis) {
        const id = lei.id.toLowerCase();
        const apelido = lei.apelido.toLowerCase();

        if (apelido.includes('indulto') || id.includes('indulto')) {
            categorias['Decretos de Indulto'].push(lei);
        } else if (
            id.includes('codigo') || id.includes('cf88') ||
            ['cp', 'cpp', 'cpc', 'cc', 'ctb', 'ctn', 'cdc', 'cpm', 'cppm'].includes(apelido.toLowerCase())
        ) {
            categorias['Códigos'].push(lei);
        } else if (
            id.includes('eca') || id.includes('estatuto') ||
            id.includes('lgpd') || id.includes('licitacoes')
        ) {
            categorias['Estatutos e Outras'].push(lei);
        } else {
            categorias['Leis Penais Especiais'].push(lei);
        }
    }

    return categorias;
}

/**
 * Agrupa livros por área
 */
export function categorizarLivros(livros: LivroIndex[]): Record<string, LivroIndex[]> {
    const categorias: Record<string, LivroIndex[]> = {
        'Execução Penal': [],
        'Processo Penal': [],
        'Direito Penal': [],
        'Processo Civil': [],
        'Direito Civil': [],
        'Direito Administrativo': [],
        'Outros': [],
    };

    for (const livro of livros) {
        const titulo = livro.titulo.toLowerCase();

        if (titulo.includes('execu') && titulo.includes('penal')) {
            categorias['Execução Penal'].push(livro);
        } else if (titulo.includes('processo') && titulo.includes('penal')) {
            categorias['Processo Penal'].push(livro);
        } else if (titulo.includes('penal') || titulo.includes('código penal')) {
            categorias['Direito Penal'].push(livro);
        } else if (titulo.includes('processo') && titulo.includes('civil')) {
            categorias['Processo Civil'].push(livro);
        } else if (titulo.includes('civil')) {
            categorias['Direito Civil'].push(livro);
        } else if (titulo.includes('administrativo')) {
            categorias['Direito Administrativo'].push(livro);
        } else {
            categorias['Outros'].push(livro);
        }
    }

    // Remove categorias vazias
    return Object.fromEntries(
        Object.entries(categorias).filter(([_, items]) => items.length > 0)
    );
}

/**
 * Limpa o cache (para testes ou atualização forçada)
 */
export function clearIndexCache(): void {
    legislacaoCache = null;
    doutrinaCache = null;
    jurisprudenciaCache = null;
}

// Cache para textos carregados
const textoLegislacaoCache: Map<string, string> = new Map();
const textoDoutrinaCache: Map<string, string> = new Map();

/**
 * Carrega o texto de uma lei (versão em vigor)
 * @param leiId ID da lei (ex: 'codigo_penal', 'lep')
 * @param tipo 'vigor' ou 'historico'
 */
export async function getLegislacaoTexto(leiId: string, tipo: 'vigor' | 'historico' = 'vigor'): Promise<string> {
    const cacheKey = `${leiId}_${tipo}`;

    if (textoLegislacaoCache.has(cacheKey)) {
        return textoLegislacaoCache.get(cacheKey)!;
    }

    try {
        const sufixo = tipo === 'vigor' ? 'em_vigor' : 'historico_revogado';
        const arquivo = `${leiId}_${sufixo}.txt`;

        // Importar o arquivo de texto dinamicamente
        const response = await fetch(`/knowledge/legislacao/${arquivo}`);
        if (!response.ok) {
            throw new Error(`Arquivo não encontrado: ${arquivo}`);
        }

        const texto = await response.text();
        textoLegislacaoCache.set(cacheKey, texto);
        return texto;
    } catch (error) {
        console.error('[IndexService] Erro ao carregar texto da legislação:', error);
        return `Erro ao carregar o texto da lei. Verifique se o arquivo existe.`;
    }
}

/**
 * Carrega o texto de um livro de doutrina
 * @param livroId ID do livro
 * @param arquivoTexto Nome específico do arquivo de texto (opcional)
 */
export async function getDoutrinaTexto(livroId: string, arquivoTexto?: string): Promise<string> {
    const cacheKey = `${livroId}_${arquivoTexto || 'all'}`;

    if (textoDoutrinaCache.has(cacheKey)) {
        return textoDoutrinaCache.get(cacheKey)!;
    }

    try {
        // Carregar o arquivo de texto especificado ou o primeiro disponível
        const arquivo = arquivoTexto || `${livroId}_p0001-0050.txt`;

        const response = await fetch(`/knowledge/doutrina/textos/${arquivo}`);
        if (!response.ok) {
            throw new Error(`Arquivo não encontrado: ${arquivo}`);
        }

        const texto = await response.text();
        textoDoutrinaCache.set(cacheKey, texto);
        return texto;
    } catch (error) {
        console.error('[IndexService] Erro ao carregar texto da doutrina:', error);
        return `Erro ao carregar o texto do livro. Verifique se o arquivo existe.`;
    }
}

/**
 * Lista os arquivos de texto disponíveis para um livro
 */
export function listarArquivosDoutrina(livro: LivroIndex): string[] {
    return livro.arquivosTexto || [];
}

/**
 * Extrai número da página do nome do arquivo de doutrina
 * Ex: "2017_curso_de_direito_processual_pe_2017_p0051-0100.txt" -> { inicio: 51, fim: 100 }
 */
export function extrairPaginasDoArquivo(nomeArquivo: string): { inicio: number; fim: number } | null {
    const match = nomeArquivo.match(/_p(\d+)-(\d+)\.txt$/i);
    if (match) {
        return {
            inicio: parseInt(match[1], 10),
            fim: parseInt(match[2], 10),
        };
    }
    return null;
}

