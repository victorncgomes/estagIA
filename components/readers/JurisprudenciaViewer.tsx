/**
 * JurisprudenciaViewer - Visualizador Completo de Jurisprudência
 * 
 * Features:
 * - Exibição de TODOS os julgados (TJRN, STF, STJ) + Súmulas
 * - Interface estilo Kindle (como DoutrinaViewer)
 * - Tabs por fonte com contagem
 * - Paginação virtual para performance
 * - Busca e filtros
 * 
 * @version 2.0.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
    Scale, Search, Copy, Check, ChevronDown, ChevronUp,
    ChevronLeft, ChevronRight, Filter, AlertCircle, BookOpen,
    Gavel, FileText, Building2, Bookmark, X
} from 'lucide-react';

// Tipos unificados
interface Jurisprudencia {
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
    tese?: string;
}

interface Sumula {
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

interface JurisprudenciaViewerProps {
    onCopiar?: (texto: string) => void;
}

type TabType = 'todos' | 'tjrn' | 'stf' | 'stj' | 'sumulas';

const ITEMS_PER_PAGE = 20;

const JurisprudenciaViewer: React.FC<JurisprudenciaViewerProps> = ({ onCopiar }) => {
    // Estados
    const [jurisprudencias, setJurisprudencias] = useState<Jurisprudencia[]>([]);
    const [sumulas, setSumulas] = useState<Sumula[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<TabType>('todos');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<Jurisprudencia | Sumula | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Carregar dados
    useEffect(() => {
        const carregarDados = async () => {
            try {
                setLoading(true);

                // Carregar todos os arquivos em paralelo
                const [tjrnRes, stfRes, stjRes, sumulasRes] = await Promise.all([
                    fetch('/knowledge/jurisprudencia/tjrn_execucao_penal.json'),
                    fetch('/knowledge/jurisprudencia/stf_execucao_penal.json'),
                    fetch('/knowledge/jurisprudencia/stj_repetitivos.json'),
                    fetch('/knowledge/jurisprudencia/stj_sumulas.json')
                ]);

                const [tjrnData, stfData, stjData, sumulasData] = await Promise.all([
                    tjrnRes.json(),
                    stfRes.json(),
                    stjRes.json(),
                    sumulasRes.json()
                ]);

                // Combinar jurisprudências com identificação de fonte
                const todasJurisps: Jurisprudencia[] = [
                    ...(tjrnData.jurisprudencias || []).map((j: Jurisprudencia) => ({ ...j, fonte: 'TJRN' })),
                    ...(stfData.jurisprudencias || []).map((j: Jurisprudencia) => ({ ...j, fonte: 'STF' })),
                    ...(stjData.acordaos || []).map((j: Jurisprudencia) => ({ ...j, fonte: 'STJ' }))
                ];

                setJurisprudencias(todasJurisps);
                setSumulas(sumulasData.sumulas || []);

                console.log(`📚 Jurisprudência carregada: ${todasJurisps.length} julgados + ${sumulasData.sumulas?.length || 0} súmulas`);

            } catch (err) {
                console.error('Erro ao carregar jurisprudência:', err);
                setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
            } finally {
                setLoading(false);
            }
        };

        carregarDados();
    }, []);

    // Contagem por fonte
    const contagens = useMemo(() => {
        const tjrn = jurisprudencias.filter(j => j.fonte === 'TJRN').length;
        const stf = jurisprudencias.filter(j => j.fonte === 'STF').length;
        const stj = jurisprudencias.filter(j => j.fonte === 'STJ').length;
        return {
            todos: jurisprudencias.length + sumulas.length,
            tjrn,
            stf,
            stj,
            sumulas: sumulas.length
        };
    }, [jurisprudencias, sumulas]);

    // Itens filtrados
    const itensFiltrados = useMemo(() => {
        let itens: (Jurisprudencia | Sumula)[] = [];

        // Filtrar por tab
        switch (activeTab) {
            case 'tjrn':
                itens = jurisprudencias.filter(j => j.fonte === 'TJRN');
                break;
            case 'stf':
                itens = jurisprudencias.filter(j => j.fonte === 'STF');
                break;
            case 'stj':
                itens = jurisprudencias.filter(j => j.fonte === 'STJ');
                break;
            case 'sumulas':
                itens = sumulas as (Jurisprudencia | Sumula)[];
                break;
            default:
                itens = [...jurisprudencias, ...sumulas as (Jurisprudencia | Sumula)[]];
        }

        // Filtrar por busca
        if (searchTerm.trim()) {
            const termo = searchTerm.toLowerCase();
            itens = itens.filter(item => {
                if ('numero' in item) {
                    // É uma súmula
                    return item.enunciado.toLowerCase().includes(termo) ||
                        item.numero.toString().includes(termo) ||
                        item.ramo.toLowerCase().includes(termo);
                } else {
                    // É jurisprudência
                    return item.ementa?.toLowerCase().includes(termo) ||
                        item.processo?.toLowerCase().includes(termo) ||
                        item.relator?.toLowerCase().includes(termo) ||
                        item.classe?.toLowerCase().includes(termo) ||
                        item.tema?.toLowerCase().includes(termo);
                }
            });
        }

        return itens;
    }, [activeTab, jurisprudencias, sumulas, searchTerm]);

    // Paginação
    const totalPages = Math.ceil(itensFiltrados.length / ITEMS_PER_PAGE);
    const itensPaginados = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return itensFiltrados.slice(start, start + ITEMS_PER_PAGE);
    }, [itensFiltrados, currentPage]);

    // Reset página ao mudar filtros
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchTerm]);

    // Copiar citação
    const copiarCitacao = useCallback((item: Jurisprudencia | Sumula) => {
        let citacao: string;

        if ('numero' in item) {
            citacao = `Súmula ${item.numero}/${item.fonte}: ${item.enunciado}`;
        } else {
            citacao = `${item.fonte}, ${item.classe || ''} ${item.processo}, Rel. ${item.relator}, ${item.dataJulgamento}`;
        }

        navigator.clipboard.writeText(citacao);
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2000);
        onCopiar?.(citacao);
    }, [onCopiar]);

    // Verificar se é súmula
    const isSumula = (item: Jurisprudencia | Sumula): item is Sumula => 'numero' in item;

    // Loading
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent mb-4" />
                <p className="text-slate-500">Carregando jurisprudência...</p>
            </div>
        );
    }

    // Error
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-red-500">
                <AlertCircle size={48} className="mb-4" />
                <p className="text-lg font-semibold">Erro ao carregar jurisprudência</p>
                <p className="text-sm mt-2">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-amber-50/30 to-white">
            {/* Header */}
            <div className="flex-shrink-0 p-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
                {/* Título e total */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-100 rounded-xl">
                            <Scale className="text-amber-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">Jurisprudência</h2>
                            <p className="text-sm text-slate-500">
                                {contagens.todos.toLocaleString()} itens disponíveis
                            </p>
                        </div>
                    </div>
                </div>

                {/* Busca */}
                <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por ementa, processo, relator, tema..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>

                {/* Tabs por fonte */}
                <div className="flex gap-1 overflow-x-auto pb-1">
                    {[
                        { key: 'todos', label: 'Todos', icon: BookOpen, count: contagens.todos },
                        { key: 'tjrn', label: 'TJRN', icon: Building2, count: contagens.tjrn },
                        { key: 'stf', label: 'STF', icon: Gavel, count: contagens.stf },
                        { key: 'stj', label: 'STJ Rep.', icon: FileText, count: contagens.stj },
                        { key: 'sumulas', label: 'Súmulas', icon: Bookmark, count: contagens.sumulas },
                    ].map(({ key, label, icon: Icon, count }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as TabType)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeTab === key
                                ? 'bg-amber-500 text-white shadow-md'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <Icon size={16} />
                            <span>{label}</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === key
                                ? 'bg-white/20 text-white'
                                : 'bg-slate-200 text-slate-500'
                                }`}>
                                {count.toLocaleString()}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lista de itens - Estilo Kindle */}
            <div className="flex-1 overflow-auto p-4">
                {itensFiltrados.length === 0 ? (
                    <div className="text-center py-16 text-slate-400">
                        <Scale size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Nenhum resultado encontrado para "{searchTerm}"</p>
                    </div>
                ) : (
                    <div className="space-y-3 max-w-4xl mx-auto">
                        {itensPaginados.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
                                className={`bg-white rounded-xl border transition-all cursor-pointer ${selectedItem?.id === item.id
                                    ? 'border-amber-400 shadow-lg ring-2 ring-amber-200'
                                    : 'border-slate-200 hover:border-amber-300 hover:shadow-md'
                                    }`}
                            >
                                {/* Cabeçalho compacto */}
                                <div className="px-4 py-3 flex items-start gap-3">
                                    {/* Badge da fonte */}
                                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white ${isSumula(item)
                                        ? 'bg-gradient-to-br from-purple-500 to-purple-600'
                                        : item.fonte === 'TJRN'
                                            ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                                            : item.fonte === 'STF'
                                                ? 'bg-gradient-to-br from-red-500 to-red-600'
                                                : 'bg-gradient-to-br from-green-500 to-green-600'
                                        }`}>
                                        {isSumula(item) ? (
                                            <>
                                                <span className="text-[10px] opacity-80">Súmula</span>
                                                <span className="text-lg font-bold">{item.numero}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-xs font-medium">{item.fonte}</span>
                                                <Gavel size={18} className="mt-0.5 opacity-80" />
                                            </>
                                        )}
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="flex-1 min-w-0">
                                        {isSumula(item) ? (
                                            <>
                                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                                                        {item.ramo}
                                                    </span>
                                                    <span className="text-xs text-slate-400">{item.dataJulgamento}</span>
                                                </div>
                                                <p className={`text-sm text-slate-800 ${selectedItem?.id === item.id ? '' : 'line-clamp-2'}`}>
                                                    {item.enunciado}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                    {item.classe && (
                                                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                                            {item.classe}
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-slate-400 truncate">
                                                        {item.processo}
                                                    </span>
                                                </div>
                                                <p className={`text-sm text-slate-800 ${selectedItem?.id === item.id ? '' : 'line-clamp-2'}`}>
                                                    {item.ementa || item.textoResumo || '(Sem ementa)'}
                                                </p>
                                                {item.relator && (
                                                    <p className="text-xs text-slate-500 mt-1">
                                                        Rel. {item.relator}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>

                                    {/* Chevron */}
                                    <div className="flex-shrink-0 text-slate-400">
                                        {selectedItem?.id === item.id ? (
                                            <ChevronUp size={20} />
                                        ) : (
                                            <ChevronDown size={20} />
                                        )}
                                    </div>
                                </div>

                                {/* Detalhes expandidos */}
                                {selectedItem?.id === item.id && (
                                    <div className="px-4 pb-4 border-t border-slate-100">
                                        <div className="pt-4 space-y-4">
                                            {/* Ementa/Tese completa */}
                                            <div className="bg-amber-50 rounded-lg p-4">
                                                <p className="text-xs font-medium text-amber-700 mb-2">
                                                    {isSumula(item) ? 'ENUNCIADO COMPLETO' : 'EMENTA'}
                                                </p>
                                                <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                                                    {isSumula(item)
                                                        ? item.ementaFormatada || item.enunciado
                                                        : item.ementaFormatada || item.ementa
                                                    }
                                                </p>
                                            </div>

                                            {/* Tese (se STJ) */}
                                            {!isSumula(item) && item.tese && (
                                                <div className="bg-green-50 rounded-lg p-4">
                                                    <p className="text-xs font-medium text-green-700 mb-2">
                                                        TESE FIRMADA
                                                    </p>
                                                    <p className="text-sm text-slate-700 whitespace-pre-wrap">
                                                        {item.tese}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Metadados */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                                {!isSumula(item) && item.relator && (
                                                    <div>
                                                        <p className="text-xs text-slate-500">Relator</p>
                                                        <p className="font-medium text-slate-700 truncate">{item.relator}</p>
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="text-xs text-slate-500">Órgão Julgador</p>
                                                    <p className="font-medium text-slate-700">{item.orgaoJulgador}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500">Julgamento</p>
                                                    <p className="font-medium text-slate-700">{item.dataJulgamento}</p>
                                                </div>
                                                {item.dataPublicacao && (
                                                    <div>
                                                        <p className="text-xs text-slate-500">Publicação</p>
                                                        <p className="font-medium text-slate-700">{item.dataPublicacao}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Ações */}
                                            <div className="flex items-center gap-2 pt-2">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        copiarCitacao(item);
                                                    }}
                                                    className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors"
                                                >
                                                    {copiedId === item.id ? (
                                                        <>
                                                            <Check size={16} />
                                                            Copiado!
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy size={16} />
                                                            Copiar citação
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer com paginação */}
            <div className="flex-shrink-0 p-4 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                    <span className="text-sm text-slate-500">
                        Exibindo <strong className="text-slate-700">
                            {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, itensFiltrados.length)}
                        </strong> de <strong className="text-slate-700">{itensFiltrados.length.toLocaleString()}</strong>
                    </span>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <span className="px-4 py-2 text-sm font-medium text-slate-700">
                            {currentPage} / {totalPages}
                        </span>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JurisprudenciaViewer;
