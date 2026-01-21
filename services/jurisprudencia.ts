/**
 * estagIA - Serviço de Jurisprudência
 * Gerencia busca e carregamento de jurisprudências do TJRN, STF, STJ e Súmulas STJ
 * 
 * @version 2.2.0
 */

import tjrnData from '../knowledge/jurisprudencia/tjrn_execucao_penal.json';
import stfData from '../knowledge/jurisprudencia/stf_execucao_penal.json';
import stjRepetitivosData from '../knowledge/jurisprudencia/stj_repetitivos.json';
import stjSumulasData from '../knowledge/jurisprudencia/stj_sumulas.json';

export interface Jurisprudencia {
    id: string;
    fonte: string;
    grau?: string;
    tipo?: string;
    processo: string;
    classe?: string;
    relator: string;
    orgaoJulgador: string;
    dataJulgamento: string;
    dataPublicacao?: string;
    tema?: string;
    repercussaoGeral?: boolean;
    ementa: string;
    ementaFormatada?: string;
    textoResumo?: string;
    colegiado?: string;
    metadataRaw?: string;
    tese?: string;
    acordao?: string;
    situacaoTema?: string;
    dataExtracao?: string;
}

export interface Sumula {
    id: string;
    fonte: string;
    tipo: string;
    numero: number;
    ramo: string;
    enunciado: string;
    orgaoJulgador: string;
    dataJulgamento: string;
    dataPublicacao: string;
    ementaFormatada: string;
}

export interface JurisprudenciaMeta {
    fonte: string;
    grau?: string;
    tipo?: string;
    termoBusca: string;
    classes?: string[];
    dataExtracao: string;
    totalExtraido: number;
}

// Cache dos dados
let jurisprudencias: Jurisprudencia[] = [];
let sumulas: Sumula[] = [];
let meta: JurisprudenciaMeta | null = null;

/**
 * Inicializa o cache de jurisprudências (TJRN + STF + STJ Repetitivos + Súmulas STJ)
 */
export function initJurisprudencia(): void {
    // Carregar TJRN
    const tjrn = tjrnData as { meta: JurisprudenciaMeta; jurisprudencias: Jurisprudencia[] };
    // Carregar STF
    const stf = stfData as { meta: JurisprudenciaMeta; jurisprudencias: Jurisprudencia[] };
    // Carregar STJ Repetitivos
    const stjRep = stjRepetitivosData as { meta: JurisprudenciaMeta; acordaos: Jurisprudencia[] };
    // Carregar Súmulas STJ
    const stjSumulas = stjSumulasData as { meta: JurisprudenciaMeta; sumulas: Sumula[] };

    // Combinar jurisprudências
    jurisprudencias = [
        ...tjrn.jurisprudencias,
        ...stf.jurisprudencias,
        ...stjRep.acordaos
    ];

    // Carregar súmulas
    sumulas = stjSumulas.sumulas;

    // Meta combinada
    meta = {
        fonte: 'TJRN + STF + STJ (Repetitivos + Súmulas)',
        termoBusca: '"execucao penal"',
        dataExtracao: new Date().toISOString(),
        totalExtraido: jurisprudencias.length + sumulas.length
    };

    console.log(`📚 Jurisprudência: ${jurisprudencias.length} (TJRN: ${tjrn.jurisprudencias.length}, STF: ${stf.jurisprudencias.length}, STJ Rep: ${stjRep.acordaos.length}) + ${sumulas.length} súmulas STJ`);
}

/**
 * Retorna metadados da base
 */
export function getJurisprudenciaMeta(): JurisprudenciaMeta | null {
    if (!meta) initJurisprudencia();
    return meta;
}

/**
 * Retorna total de jurisprudências
 */
export function getTotalJurisprudencias(): number {
    if (jurisprudencias.length === 0) initJurisprudencia();
    return jurisprudencias.length;
}

/**
 * Busca jurisprudências por termo
 */
export function searchJurisprudencia(termo: string, limit: number = 50): Jurisprudencia[] {
    if (jurisprudencias.length === 0) initJurisprudencia();

    if (!termo || termo.trim().length < 2) {
        return jurisprudencias.slice(0, limit);
    }

    const termoLower = termo.toLowerCase();
    const keywords = termoLower.split(/\s+/).filter(k => k.length > 2);

    const results = jurisprudencias.filter(j => {
        const searchText = `${j.processo} ${j.classe} ${j.relator} ${j.ementa} ${j.textoResumo}`.toLowerCase();
        return keywords.every(k => searchText.includes(k));
    });

    return results.slice(0, limit);
}

/**
 * Busca por classe/tipo
 */
export function getJurisprudenciaByClasse(classe: string): Jurisprudencia[] {
    if (jurisprudencias.length === 0) initJurisprudencia();
    return jurisprudencias.filter(j =>
        j.classe.toLowerCase().includes(classe.toLowerCase())
    );
}

/**
 * Busca por relator
 */
export function getJurisprudenciaByRelator(relator: string): Jurisprudencia[] {
    if (jurisprudencias.length === 0) initJurisprudencia();
    return jurisprudencias.filter(j =>
        j.relator.toLowerCase().includes(relator.toLowerCase())
    );
}

/**
 * Retorna jurisprudência por ID
 */
export function getJurisprudenciaById(id: string): Jurisprudencia | undefined {
    if (jurisprudencias.length === 0) initJurisprudencia();
    return jurisprudencias.find(j => j.id === id);
}

/**
 * Retorna lista de classes únicas
 */
export function getClassesDisponiveis(): string[] {
    if (jurisprudencias.length === 0) initJurisprudencia();
    const classes = new Set(jurisprudencias.map(j => j.classe).filter(Boolean));
    return Array.from(classes).sort();
}

/**
 * Retorna lista de relatores únicos
 */
export function getRelatoresDisponiveis(): string[] {
    if (jurisprudencias.length === 0) initJurisprudencia();
    const relatores = new Set(jurisprudencias.map(j => j.relator).filter(Boolean));
    return Array.from(relatores).sort();
}

/**
 * Estatísticas da base
 */
export function getJurisprudenciaStats(): {
    total: number;
    totalSumulas: number;
    classes: number;
    relatores: number;
    dataMin: string;
    dataMax: string;
} {
    if (jurisprudencias.length === 0) initJurisprudencia();

    const datas = jurisprudencias
        .map(j => j.dataJulgamento)
        .filter(Boolean)
        .sort();

    return {
        total: jurisprudencias.length,
        totalSumulas: sumulas.length,
        classes: getClassesDisponiveis().length,
        relatores: getRelatoresDisponiveis().length,
        dataMin: datas[0] || 'N/A',
        dataMax: datas[datas.length - 1] || 'N/A',
    };
}

/**
 * Retorna todas as súmulas
 */
export function getSumulas(): Sumula[] {
    if (sumulas.length === 0) initJurisprudencia();
    return sumulas;
}

/**
 * Busca súmulas por termo
 */
export function searchSumulas(termo: string): Sumula[] {
    if (sumulas.length === 0) initJurisprudencia();

    if (!termo || termo.trim().length < 2) {
        return sumulas;
    }

    const termoLower = termo.toLowerCase();
    const keywords = termoLower.split(/\s+/).filter(k => k.length > 2);

    return sumulas.filter(s => {
        const searchText = `${s.numero} ${s.ramo} ${s.enunciado}`.toLowerCase();
        return keywords.every(k => searchText.includes(k));
    });
}

/**
 * Retorna súmula por número
 */
export function getSumulaByNumero(numero: number): Sumula | undefined {
    if (sumulas.length === 0) initJurisprudencia();
    return sumulas.find(s => s.numero === numero);
}

/**
 * Total incluindo súmulas
 */
export function getTotalGeral(): number {
    if (jurisprudencias.length === 0) initJurisprudencia();
    return jurisprudencias.length + sumulas.length;
}

// Inicializar ao importar
initJurisprudencia();

