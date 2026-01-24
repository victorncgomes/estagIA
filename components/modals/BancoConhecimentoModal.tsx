/**
 * BancoConhecimentoModal - Portal de Conhecimento Jurídico
 * Modal fullscreen para explorar todas as bases indexadas:
 * - Modelos de Decisão
 * - Legislação
 * - Doutrina
 * - Jurisprudência
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
    X, Search, FileText, ChevronRight, Copy, Check, ArrowLeft, Eye,
    BookOpen, Scale, GraduationCap, ScrollText, Database, Loader2, ChevronLeft
} from 'lucide-react';
import KindleReader from '../readers/KindleReader';
import JurisprudenciaViewer from '../readers/JurisprudenciaViewer';
import { getTemplateStats, AGRUPADORES } from '../../services/templateService';
import {
    getIndexStats, getLegislacaoIndex, getDoutrinaIndex,
    categorizarLeis, categorizarLivros,
    getLegislacaoTexto, getDoutrinaTexto, listarArquivosDoutrina, extrairPaginasDoArquivo,
    type LeiIndex, type LivroIndex, type IndexStats
} from '../../services/knowledge/indexService';

interface BancoConhecimentoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Tabs disponíveis
type TabId = 'modelos' | 'legislacao' | 'doutrina' | 'jurisprudencia';

const TABS: Array<{ id: TabId; label: string; icon: React.ElementType; color: string }> = [
    { id: 'modelos', label: 'Modelos', icon: FileText, color: 'text-primary' },
    { id: 'legislacao', label: 'Legislação', icon: ScrollText, color: 'text-emerald-600' },
    { id: 'doutrina', label: 'Doutrina', icon: GraduationCap, color: 'text-violet-600' },
    { id: 'jurisprudencia', label: 'Jurisprudência', icon: Scale, color: 'text-amber-600' },
];

const BancoConhecimentoModal: React.FC<BancoConhecimentoModalProps> = ({ isOpen, onClose }) => {
    // Estado geral
    const [activeTab, setActiveTab] = useState<TabId>('modelos');
    const [searchTerm, setSearchTerm] = useState('');
    const [stats, setStats] = useState<IndexStats | null>(null);

    // Estado para modelos
    const [agrupadorSelecionado, setAgrupadorSelecionado] = useState<string | null>(null);

    // Estado para legislação
    const [leis, setLeis] = useState<LeiIndex[]>([]);
    const [categoriaLeiSelecionada, setCategoriaLeiSelecionada] = useState<string | null>(null);
    const [leiSelecionada, setLeiSelecionada] = useState<LeiIndex | null>(null);

    // Estado para doutrina
    const [livros, setLivros] = useState<LivroIndex[]>([]);
    const [categoriaLivroSelecionada, setCategoriaLivroSelecionada] = useState<string | null>(null);
    const [livroSelecionado, setLivroSelecionado] = useState<LivroIndex | null>(null);

    // Estado para visualização de texto
    const [textoLei, setTextoLei] = useState<string>('');
    const [textoDoutrina, setTextoDoutrina] = useState<string>('');
    const [loadingTexto, setLoadingTexto] = useState(false);
    const [modoLeitura, setModoLeitura] = useState(false);
    const [arquivoDoutrinaSelecionado, setArquivoDoutrinaSelecionado] = useState<string>('');
    const [paginaAtual, setPaginaAtual] = useState(0);

    const templateStats = useMemo(() => getTemplateStats(), []);

    // Carregar dados ao abrir
    useEffect(() => {
        if (isOpen) {
            getIndexStats().then(setStats);
            getLegislacaoIndex().then(data => setLeis(data.leis));
            getDoutrinaIndex().then(data => setLivros(data.livros));
        }
    }, [isOpen]);

    // Leis categorizadas e filtradas
    const leisCategorizadas = useMemo(() => categorizarLeis(leis), [leis]);
    const leisFiltradas = useMemo(() => {
        if (!searchTerm) return leis;
        const termo = searchTerm.toLowerCase();
        return leis.filter(lei =>
            lei.titulo.toLowerCase().includes(termo) ||
            lei.apelido.toLowerCase().includes(termo)
        );
    }, [leis, searchTerm]);

    // Livros categorizados e filtrados
    const livrosCategorizados = useMemo(() => categorizarLivros(livros), [livros]);
    const livrosFiltrados = useMemo(() => {
        if (!searchTerm) return livros;
        const termo = searchTerm.toLowerCase();
        return livros.filter(livro =>
            livro.titulo.toLowerCase().includes(termo) ||
            livro.autor.toLowerCase().includes(termo)
        );
    }, [livros, searchTerm]);

    // Agrupadores filtrados para modelos
    const agrupadorsFiltrados = useMemo(() => {
        return templateStats.porAgrupador
            .filter(ag => {
                if (searchTerm) {
                    const termo = searchTerm.toLowerCase();
                    const agrupador = AGRUPADORES.find(a => a.id === ag.nome);
                    const nomeCompleto = agrupador?.nome || ag.nome;
                    return nomeCompleto.toLowerCase().includes(termo) || ag.nome.toLowerCase().includes(termo);
                }
                return true;
            })
            .sort((a, b) => b.total - a.total);
    }, [templateStats, searchTerm]);

    const handleBack = () => {
        if (modoLeitura) {
            setModoLeitura(false);
            setTextoLei('');
            setTextoDoutrina('');
            return;
        }
        if (activeTab === 'modelos') {
            setAgrupadorSelecionado(null);
        } else if (activeTab === 'legislacao') {
            if (leiSelecionada) setLeiSelecionada(null);
            else setCategoriaLeiSelecionada(null);
        } else if (activeTab === 'doutrina') {
            if (livroSelecionado) setLivroSelecionado(null);
            else setCategoriaLivroSelecionada(null);
        }
    };

    const resetSelection = () => {
        setAgrupadorSelecionado(null);
        setCategoriaLeiSelecionada(null);
        setLeiSelecionada(null);
        setCategoriaLivroSelecionada(null);
        setLivroSelecionado(null);
        setSearchTerm('');
        setModoLeitura(false);
        setTextoLei('');
        setTextoDoutrina('');
        setPaginaAtual(0);
    };

    const handleTabChange = (tab: TabId) => {
        resetSelection();
        setActiveTab(tab);
    };

    // Carregar texto da lei
    const carregarTextoLei = async (lei: LeiIndex, tipo: 'vigor' | 'historico' = 'vigor') => {
        setLoadingTexto(true);
        try {
            const texto = await getLegislacaoTexto(lei.id, tipo);
            setTextoLei(texto);
            setModoLeitura(true);
        } catch (error) {
            console.error('Erro ao carregar texto:', error);
            setTextoLei('Erro ao carregar o texto da lei.');
        } finally {
            setLoadingTexto(false);
        }
    };

    // Carregar texto da doutrina
    const carregarTextoDoutrina = async (livro: LivroIndex, arquivo?: string) => {
        setLoadingTexto(true);
        try {
            const arquivos = listarArquivosDoutrina(livro);
            const arquivoParaCarregar = arquivo || arquivos[0];
            if (arquivoParaCarregar) {
                setArquivoDoutrinaSelecionado(arquivoParaCarregar);
                const indice = arquivos.indexOf(arquivoParaCarregar);
                setPaginaAtual(indice >= 0 ? indice : 0);
                const texto = await getDoutrinaTexto(livro.id, arquivoParaCarregar);
                setTextoDoutrina(texto);
                setModoLeitura(true);
            }
        } catch (error) {
            console.error('Erro ao carregar texto:', error);
            setTextoDoutrina('Erro ao carregar o texto do livro.');
        } finally {
            setLoadingTexto(false);
        }
    };

    // Navegação entre páginas da doutrina
    const navegarPaginaDoutrina = async (direcao: 'anterior' | 'proxima') => {
        if (!livroSelecionado) return;
        const arquivos = listarArquivosDoutrina(livroSelecionado);
        const novoIndice = direcao === 'proxima' ? paginaAtual + 1 : paginaAtual - 1;
        if (novoIndice >= 0 && novoIndice < arquivos.length) {
            await carregarTextoDoutrina(livroSelecionado, arquivos[novoIndice]);
        }
    };

    const formatBytes = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const formatDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString('pt-BR');
        } catch {
            return dateStr;
        }
    };

    const hasSelection = agrupadorSelecionado || categoriaLeiSelecionada || leiSelecionada || categoriaLivroSelecionada || livroSelecionado;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-[95vw] h-[90vh] max-w-7xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex items-center gap-3">
                        {hasSelection && (
                            <button
                                onClick={handleBack}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </button>
                        )}
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <Database size={24} className="text-primary" />
                                Base de Conhecimento
                            </h2>
                            <p className="text-sm text-slate-500">
                                {stats && `${stats.modelos.total} modelos • ${stats.legislacao.total} leis • ${stats.doutrina.total} livros • ${stats.jurisprudencia.total} julgados`}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="px-6 py-2 border-b border-slate-100 bg-slate-50/50 flex items-center gap-1">
                    {TABS.map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive
                                    ? 'bg-white shadow-md text-slate-800'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? tab.color : ''} />
                                {tab.label}
                                {stats && (
                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-500'
                                        }`}>
                                        {tab.id === 'modelos' && stats.modelos.total}
                                        {tab.id === 'legislacao' && stats.legislacao.total}
                                        {tab.id === 'doutrina' && stats.doutrina.total}
                                        {tab.id === 'jurisprudencia' && stats.jurisprudencia.total}
                                    </span>
                                )}
                            </button>
                        );
                    })}

                    {/* Search */}
                    <div className="ml-auto relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-6">
                    {/* Tab: Modelos */}
                    {activeTab === 'modelos' && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {agrupadorsFiltrados.map((ag) => {
                                const agrupador = AGRUPADORES.find(a => a.id === ag.nome);
                                const icon = agrupador?.icon || '📁';
                                const nomeDisplay = agrupador?.nome || ag.nome;

                                return (
                                    <button
                                        key={ag.nome}
                                        onClick={() => setAgrupadorSelecionado(ag.nome)}
                                        className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-200 text-left"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <span className="text-2xl">{icon}</span>
                                            <ChevronRight size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                                        </div>
                                        <h3 className="font-semibold text-slate-800 mb-1 line-clamp-2">{nomeDisplay}</h3>
                                        <p className="text-2xl font-bold text-primary">{ag.total}</p>
                                        <p className="text-xs text-slate-400 mt-1">modelos</p>
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {/* Tab: Legislação */}
                    {activeTab === 'legislacao' && !leiSelecionada && !categoriaLeiSelecionada && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {(Object.entries(leisCategorizadas) as [string, LeiIndex[]][]).map(([categoria, leisCat]) => (
                                <div key={categoria} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setCategoriaLeiSelecionada(categoria)}
                                        className="w-full p-4 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-2xl">
                                                {categoria === 'Códigos' && '📚'}
                                                {categoria === 'Leis Penais Especiais' && '📜'}
                                                {categoria === 'Decretos de Indulto' && '🎄'}
                                                {categoria === 'Estatutos e Outras' && '📋'}
                                            </span>
                                            <ChevronRight size={16} className="text-slate-400" />
                                        </div>
                                        <h3 className="font-semibold text-slate-800">{categoria}</h3>
                                        <p className="text-2xl font-bold text-emerald-600 mt-2">{leisCat.length}</p>
                                        <p className="text-xs text-slate-400">leis indexadas</p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Lista de leis por categoria */}
                    {activeTab === 'legislacao' && categoriaLeiSelecionada && !leiSelecionada && (
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-slate-700 mb-4">{categoriaLeiSelecionada}</h3>
                            {leisCategorizadas[categoriaLeiSelecionada]?.map(lei => (
                                <button
                                    key={lei.id}
                                    onClick={() => setLeiSelecionada(lei)}
                                    className="w-full p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                            <ScrollText size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded">
                                                    {lei.apelido}
                                                </span>
                                            </div>
                                            <h4 className="font-semibold text-slate-800 mt-1">{lei.titulo}</h4>
                                            <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                                                <span>{formatBytes(lei.tamanhoVigor)}</span>
                                                <span>•</span>
                                                <span>Atualizado: {formatDate(lei.ultimaAtualizacao)}</span>
                                                {lei.trechosRevogados > 0 && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="text-amber-600">{lei.trechosRevogados} trechos revogados</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-emerald-600">
                                            <Eye size={16} />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Detalhe da lei */}
                    {activeTab === 'legislacao' && leiSelecionada && (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white border border-slate-200 rounded-xl p-6">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                        <ScrollText size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded">
                                            {leiSelecionada.apelido}
                                        </span>
                                        <h2 className="text-xl font-bold text-slate-800 mt-2">{leiSelecionada.titulo}</h2>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-xs text-slate-500 mb-1">Tamanho</p>
                                        <p className="text-lg font-bold text-slate-800">{formatBytes(leiSelecionada.tamanhoVigor)}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-xs text-slate-500 mb-1">Última Atualização</p>
                                        <p className="text-lg font-bold text-slate-800">{formatDate(leiSelecionada.ultimaAtualizacao)}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-xs text-slate-500 mb-1">Trechos Revogados</p>
                                        <p className="text-lg font-bold text-amber-600">{leiSelecionada.trechosRevogados}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-xs text-slate-500 mb-1">Fonte</p>
                                        <a
                                            href={leiSelecionada.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-primary hover:underline"
                                        >
                                            Planalto.gov.br ↗
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => carregarTextoLei(leiSelecionada, 'vigor')}
                                        disabled={loadingTexto}
                                        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                                    >
                                        {loadingTexto ? <Loader2 size={16} className="animate-spin" /> : <BookOpen size={16} />}
                                        Ver Texto Vigente
                                    </button>
                                    {leiSelecionada.arquivoHistorico && (
                                        <button
                                            onClick={() => carregarTextoLei(leiSelecionada, 'historico')}
                                            disabled={loadingTexto}
                                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 disabled:opacity-50"
                                        >
                                            <ScrollText size={16} />
                                            Ver Trechos Revogados
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Leitor de Texto - Legislação */}
                    {activeTab === 'legislacao' && modoLeitura && textoLei && (
                        <div className="h-full flex flex-col">
                            <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <ScrollText size={20} className="text-emerald-600" />
                                    <div>
                                        <h3 className="font-semibold text-slate-800">{leiSelecionada?.apelido}</h3>
                                        <p className="text-xs text-slate-500">{leiSelecionada?.titulo}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => navigator.clipboard.writeText(textoLei)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50"
                                >
                                    <Copy size={14} />
                                    Copiar
                                </button>
                            </div>
                            <div className="flex-1 overflow-auto bg-amber-50/30">
                                <div className="max-w-4xl mx-auto px-8 py-6">
                                    <pre className="whitespace-pre-wrap font-serif text-base text-slate-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                        {textoLei}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab: Doutrina */}
                    {activeTab === 'doutrina' && !livroSelecionado && !categoriaLivroSelecionada && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(Object.entries(livrosCategorizados) as [string, LivroIndex[]][]).map(([categoria, livrosCat]) => {
                                const totalPaginas = livrosCat.reduce((acc, l) => acc + l.totalPaginas, 0);
                                return (
                                    <div key={categoria} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setCategoriaLivroSelecionada(categoria)}
                                            className="w-full p-4 text-left hover:bg-slate-50 transition-colors"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <GraduationCap size={24} className="text-violet-600" />
                                                <ChevronRight size={16} className="text-slate-400" />
                                            </div>
                                            <h3 className="font-semibold text-slate-800">{categoria}</h3>
                                            <div className="flex items-center gap-3 mt-2">
                                                <div>
                                                    <p className="text-2xl font-bold text-violet-600">{livrosCat.length}</p>
                                                    <p className="text-xs text-slate-400">livros</p>
                                                </div>
                                                <div className="h-8 w-px bg-slate-200" />
                                                <div>
                                                    <p className="text-lg font-bold text-slate-600">{totalPaginas.toLocaleString()}</p>
                                                    <p className="text-xs text-slate-400">páginas</p>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Lista de livros por categoria */}
                    {activeTab === 'doutrina' && categoriaLivroSelecionada && !livroSelecionado && (
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-slate-700 mb-4">{categoriaLivroSelecionada}</h3>
                            {livrosCategorizados[categoriaLivroSelecionada]?.map(livro => (
                                <button
                                    key={livro.id}
                                    onClick={() => setLivroSelecionado(livro)}
                                    className="w-full p-4 bg-white border border-slate-200 rounded-xl hover:border-violet-500 hover:shadow-md transition-all text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                                            <GraduationCap size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-slate-800">{livro.titulo}</h4>
                                            <p className="text-sm text-slate-500 mt-1">{livro.autor}</p>
                                            <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                                                {livro.editora && <span>{livro.editora}</span>}
                                                {livro.ano && <><span>•</span><span>{livro.ano}</span></>}
                                                <span>•</span>
                                                <span>{livro.totalPaginas.toLocaleString()} páginas</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-violet-600">
                                            <Eye size={16} />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Detalhe do livro */}
                    {activeTab === 'doutrina' && livroSelecionado && (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white border border-slate-200 rounded-xl p-6">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-violet-50 text-violet-600 rounded-xl">
                                        <GraduationCap size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-slate-800">{livroSelecionado.titulo}</h2>
                                        <p className="text-slate-600 mt-1">{livroSelecionado.autor}</p>
                                        {livroSelecionado.editora && (
                                            <p className="text-sm text-slate-500 mt-1">
                                                {livroSelecionado.editora}
                                                {livroSelecionado.ano && `, ${livroSelecionado.ano}`}
                                                {livroSelecionado.edicao && ` (${livroSelecionado.edicao}ª ed.)`}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-xs text-slate-500 mb-1">Páginas</p>
                                        <p className="text-lg font-bold text-slate-800">{livroSelecionado.totalPaginas.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-xs text-slate-500 mb-1">Arquivos de Texto</p>
                                        <p className="text-lg font-bold text-slate-800">{livroSelecionado.arquivosTexto.length}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-xs text-slate-500 mb-1">Extração</p>
                                        <p className="text-lg font-bold text-emerald-600">{livroSelecionado.camadaExtracao}</p>
                                    </div>
                                </div>

                                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 mb-6">
                                    <p className="text-xs text-violet-600 font-medium mb-1">Citação ABNT</p>
                                    <p className="text-sm text-slate-700 font-mono">{livroSelecionado.citacaoABNT}</p>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(livroSelecionado.citacaoABNT)}
                                        className="mt-2 text-xs text-violet-600 hover:text-violet-800 flex items-center gap-1"
                                    >
                                        <Copy size={12} /> Copiar citação
                                    </button>
                                </div>

                                <button
                                    onClick={() => carregarTextoDoutrina(livroSelecionado)}
                                    disabled={loadingTexto || !livroSelecionado.arquivosTexto?.length}
                                    className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                                >
                                    {loadingTexto ? <Loader2 size={16} className="animate-spin" /> : <BookOpen size={16} />}
                                    Ver Texto Completo
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Leitor de Texto - Doutrina (KindleReader Premium) */}
                    {activeTab === 'doutrina' && modoLeitura && textoDoutrina && livroSelecionado && (
                        <KindleReader
                            titulo={livroSelecionado.titulo}
                            autor={livroSelecionado.autor}
                            texto={textoDoutrina}
                            paginaAtual={paginaAtual}
                            totalPaginas={listarArquivosDoutrina(livroSelecionado).length}
                            paginasLabel={(() => {
                                const paginas = extrairPaginasDoArquivo(arquivoDoutrinaSelecionado);
                                return paginas ? `Páginas ${paginas.inicio} - ${paginas.fim}` : undefined;
                            })()}
                            onClose={() => setModoLeitura(false)}
                            onAnterior={() => navegarPaginaDoutrina('anterior')}
                            onProxima={() => navegarPaginaDoutrina('proxima')}
                            loading={loadingTexto}
                        />
                    )}

                    {/* Tab: Jurisprudência */}
                    {activeTab === 'jurisprudencia' && (
                        <div className="h-full">
                            <JurisprudenciaViewer />
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-slate-500">
                        {activeTab === 'modelos' && (
                            <span>
                                <strong className="text-slate-700">{agrupadorsFiltrados.reduce((a, b) => a + b.total, 0)}</strong> modelos
                            </span>
                        )}
                        {activeTab === 'legislacao' && stats && (
                            <span>
                                <strong className="text-slate-700">{stats.legislacao.total}</strong> leis • {stats.legislacao.tamanhoTotal}
                            </span>
                        )}
                        {activeTab === 'doutrina' && stats && (
                            <span>
                                <strong className="text-slate-700">{stats.doutrina.total}</strong> livros • {stats.doutrina.paginas.toLocaleString()} páginas
                            </span>
                        )}
                        {activeTab === 'jurisprudencia' && stats && (
                            <span>
                                <strong className="text-slate-700">{stats.jurisprudencia.total}</strong> julgados
                            </span>
                        )}
                    </div>
                    <div className="text-slate-400 text-xs">
                        Base de Conhecimento Jurídico • estagIA v0.2.1
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BancoConhecimentoModal;
