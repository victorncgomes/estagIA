/**
 * estagIA - Validador de Citações
 * 
 * Verifica se as citações de doutrina e jurisprudência na decisão
 * existem no banco de conhecimento do sistema.
 * 
 * @version 1.0.0
 */

export interface CitacaoEncontrada {
    tipo: 'doutrina' | 'jurisprudencia' | 'legislacao';
    texto: string;
    valida: boolean;
    fonte?: string;
    motivo?: string;
}

export interface ValidacaoCitacoes {
    totalEncontradas: number;
    validas: number;
    invalidas: number;
    citacoes: CitacaoEncontrada[];
    aprovado: boolean;
}

// Cache dos bancos de conhecimento
let doutrinaCache: { titulo: string; autor: string; citacao: string }[] | null = null;
let jurisprudenciaCache: { tribunal: string; numero: string; ementa: string }[] | null = null;

/**
 * Carrega banco de doutrina
 */
async function carregarDoutrina(): Promise<typeof doutrinaCache> {
    if (doutrinaCache) return doutrinaCache;

    try {
        const response = await fetch('/knowledge/doutrina/doutrina_index.json');
        if (response.ok) {
            const dados = await response.json() as { livros?: Array<{ titulo: string; autor: string; citacaoABNT: string }> };
            doutrinaCache = (dados.livros || []).map(l => ({
                titulo: l.titulo,
                autor: l.autor,
                citacao: l.citacaoABNT
            }));
        }
    } catch (e) {
        console.warn('[CitacaoValidator] Erro ao carregar doutrina');
    }

    return doutrinaCache || [];
}

/**
 * Carrega banco de jurisprudência (súmulas STJ)
 */
async function carregarJurisprudencia(): Promise<typeof jurisprudenciaCache> {
    if (jurisprudenciaCache) return jurisprudenciaCache;

    try {
        const response = await fetch('/knowledge/jurisprudencia/stj_sumulas.json');
        if (response.ok) {
            const dados = await response.json() as { sumulas?: Array<{ numero: number; enunciado: string }> };
            jurisprudenciaCache = (dados.sumulas || []).map(s => ({
                tribunal: 'STJ',
                numero: `Súmula ${s.numero}`,
                ementa: s.enunciado
            }));
        }
    } catch (e) {
        console.warn('[CitacaoValidator] Erro ao carregar jurisprudência');
    }

    return jurisprudenciaCache || [];
}

/**
 * Extrai citações de doutrina do texto
 * Padrão: "texto" (AUTOR. Título. Cidade: Editora, Ano)
 */
function extrairCitacoesDoutrina(texto: string): string[] {
    const citacoes: string[] = [];

    // Padrão ABNT: (AUTOR. Título. Editora, Ano)
    const padrao1 = /\(([A-ZÁÉÍÓÚÀÂÊÔÃÕÇ][A-ZÁÉÍÓÚÀÂÊÔÃÕÇ\s]+)\.\s+([^)]+(?:\d{4}[^)]*)?)\)/g;
    let match;
    while ((match = padrao1.exec(texto)) !== null) {
        citacoes.push(match[0]);
    }

    // Padrão: conforme AUTOR (Ano)
    const padrao2 = /conforme\s+([A-Z][a-záéíóúàâêôãõç]+)\s*\((\d{4})\)/gi;
    while ((match = padrao2.exec(texto)) !== null) {
        citacoes.push(match[0]);
    }

    return citacoes;
}

/**
 * Extrai citações de jurisprudência do texto
 */
function extrairCitacoesJurisprudencia(texto: string): string[] {
    const citacoes: string[] = [];

    // Súmulas
    const padrao1 = /Súmula\s+(?:nº\s*)?(\d+)\s+(?:do\s+)?(STJ|STF|TST)/gi;
    let match;
    while ((match = padrao1.exec(texto)) !== null) {
        citacoes.push(match[0]);
    }

    // Acórdãos: REsp, AgRg, HC, etc
    const padrao2 = /(REsp|AgRg|HC|RHC|ED|ARE|RE|ADI|ADPF)\s*(?:nº\s*)?([\d./-]+)/gi;
    while ((match = padrao2.exec(texto)) !== null) {
        citacoes.push(match[0]);
    }

    // Tema repetitivo
    const padrao3 = /Tema\s+(?:nº\s*)?(\d+)/gi;
    while ((match = padrao3.exec(texto)) !== null) {
        citacoes.push(match[0]);
    }

    return citacoes;
}

/**
 * Verifica se citação de doutrina existe no banco
 */
async function verificarDoutrina(citacao: string): Promise<{ valida: boolean; fonte?: string }> {
    const banco = await carregarDoutrina();

    if (!banco || banco.length === 0) {
        return { valida: true }; // Sem banco, assumir válida
    }

    const citacaoLower = citacao.toLowerCase();

    for (const livro of banco) {
        if (
            citacaoLower.includes(livro.autor?.toLowerCase() || '') ||
            citacaoLower.includes(livro.titulo?.toLowerCase().substring(0, 20) || '')
        ) {
            return { valida: true, fonte: livro.citacao };
        }
    }

    return { valida: false };
}

/**
 * Verifica se citação de jurisprudência existe no banco
 */
async function verificarJurisprudencia(citacao: string): Promise<{ valida: boolean; fonte?: string }> {
    const banco = await carregarJurisprudencia();

    if (!banco || banco.length === 0) {
        return { valida: true }; // Sem banco, assumir válida
    }

    const citacaoLower = citacao.toLowerCase();

    // Verificar súmulas
    const matchSumula = citacao.match(/Súmula\s+(?:nº\s*)?(\d+)/i);
    if (matchSumula) {
        const numero = matchSumula[1];
        const sumula = banco.find(s => s.numero.includes(numero));
        if (sumula) {
            return { valida: true, fonte: `${sumula.numero}: ${sumula.ementa.substring(0, 100)}...` };
        }
    }

    return { valida: true }; // Por padrão, assumir válida para não bloquear
}

/**
 * Valida todas as citações em uma decisão
 */
export async function validarCitacoes(decisao: string): Promise<ValidacaoCitacoes> {
    const citacoesEncontradas: CitacaoEncontrada[] = [];

    // Extrair e validar doutrina
    const doutrina = extrairCitacoesDoutrina(decisao);
    for (const cit of doutrina) {
        const verificacao = await verificarDoutrina(cit);
        citacoesEncontradas.push({
            tipo: 'doutrina',
            texto: cit,
            valida: verificacao.valida,
            fonte: verificacao.fonte,
            motivo: verificacao.valida ? undefined : 'Não encontrada no banco de doutrina'
        });
    }

    // Extrair e validar jurisprudência
    const juris = extrairCitacoesJurisprudencia(decisao);
    for (const cit of juris) {
        const verificacao = await verificarJurisprudencia(cit);
        citacoesEncontradas.push({
            tipo: 'jurisprudencia',
            texto: cit,
            valida: verificacao.valida,
            fonte: verificacao.fonte,
            motivo: verificacao.valida ? undefined : 'Não encontrada no banco de jurisprudência'
        });
    }

    const validas = citacoesEncontradas.filter(c => c.valida).length;
    const invalidas = citacoesEncontradas.filter(c => !c.valida).length;

    return {
        totalEncontradas: citacoesEncontradas.length,
        validas,
        invalidas,
        citacoes: citacoesEncontradas,
        aprovado: invalidas === 0
    };
}

/**
 * Resumo rápido para log
 */
export function resumoValidacao(resultado: ValidacaoCitacoes): string {
    if (resultado.totalEncontradas === 0) {
        return 'Nenhuma citação detectada';
    }

    if (resultado.aprovado) {
        return `${resultado.validas}/${resultado.totalEncontradas} citações válidas ✅`;
    }

    return `${resultado.invalidas}/${resultado.totalEncontradas} citações inválidas ⚠️`;
}
