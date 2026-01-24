/**
 * LegislacaoViewer - Visualizador de Legislação Estilo Kindle
 * 
 * Features:
 * - Lista de leis organizadas por categoria
 * - Leitor embutido estilo Kindle
 * - Texto consolidado (em vigor) por padrão
 * - Opção para ver histórico de revogações
 * - Temas: claro, sépia, escuro
 * - Controle de fonte
 * 
 * @version 1.0.0
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
    ScrollText, Search, ChevronRight, ChevronLeft, ArrowLeft,
    Copy, Check, AlertCircle, BookOpen, Filter, X, ZoomIn, ZoomOut,
    Sun, Moon, Coffee, Maximize2, Minimize2, Home, History, FileText
} from 'lucide-react';

// Tipos
interface LeiIndex {
    id: string;
    titulo: string;
    apelido: string;
    categoria: string;
    url: string;
    arquivoVigor: string;
    arquivoHistorico?: string;
    tamanhoVigor: number;
    trechosRevogados?: number;
    ultimaAtualizacao: string;
}

interface LegislacaoViewerProps {
    onCopiar?: (texto: string) => void;
}

type ThemeType = 'light' | 'sepia' | 'dark';

const THEMES: Record<ThemeType, { bg: string; text: string; accent: string; border: string }> = {
    light: {
        bg: 'bg-white',
        text: 'text-slate-900',
        accent: 'text-slate-600',
        border: 'border-slate-200'
    },
    sepia: {
        bg: 'bg-amber-50',
        text: 'text-amber-900',
        accent: 'text-amber-700',
        border: 'border-amber-200'
    },
    dark: {
        bg: 'bg-slate-900',
        text: 'text-slate-200',
        accent: 'text-slate-400',
        border: 'border-slate-700'
    }
};

const FONT_SIZES = [
    { label: 'XS', size: 14, lineHeight: 1.6 },
    { label: 'S', size: 16, lineHeight: 1.7 },
    { label: 'M', size: 18, lineHeight: 1.8 },
    { label: 'L', size: 20, lineHeight: 1.9 },
    { label: 'XL', size: 22, lineHeight: 2.0 },
];

const CATEGORIAS = [
    { id: 'codigos', nome: 'Códigos', icon: BookOpen },
    { id: 'penal_especial', nome: 'Penal Especial', icon: FileText },
    { id: 'execucao', nome: 'Execução Penal', icon: ScrollText },
    { id: 'indulto', nome: 'Indultos', icon: History },
    { id: 'outros', nome: 'Outras', icon: Filter },
];

const LegislacaoViewer: React.FC<LegislacaoViewerProps> = ({ onCopiar }) => {
    // Estados
    const [leis, setLeis] = useState<LeiIndex[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');
    const [leiSelecionada, setLeiSelecionada] = useState<LeiIndex | null>(null);
    const [texto, setTexto] = useState<string>('');
    const [loadingTexto, setLoadingTexto] = useState(false);
    const [modoHistorico, setModoHistorico] = useState(false);
    const [copied, setCopied] = useState(false);

    // Estados do leitor Kindle
    const [theme, setTheme] = useState<ThemeType>('sepia');
    const [fontSizeIndex, setFontSizeIndex] = useState(2);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);
    const currentTheme = THEMES[theme];
    const currentFont = FONT_SIZES[fontSizeIndex];

    // Carregar índice
    useEffect(() => {
        const carregarIndice = async () => {
            try {
                setLoading(true);
                const response = await fetch('/knowledge/legislacao/legislacao_index.json');
                if (!response.ok) throw new Error('Erro ao carregar índice');
                const data = await response.json();
                setLeis(data.leis || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro ao carregar');
            } finally {
                setLoading(false);
            }
        };
        carregarIndice();
    }, []);

    // Categorizar leis
    const categorizarLei = (lei: LeiIndex): string => {
        const apelido = lei.apelido.toLowerCase();
        if (/^(cp|cpp|cpc|cc|cdc|ctn|ctb|cpm|cppm|ce|cf)$/i.test(apelido)) return 'codigos';
        if (/indulto/i.test(lei.titulo)) return 'indulto';
        if (/lep|execu[çc]/i.test(apelido) || /execu[çc][aã]o penal/i.test(lei.titulo)) return 'execucao';
        if (/hediond|droga|desarmamento|tortura|lavagem|ambient|tribut|financ|abuso/i.test(apelido) ||
            /hediond|droga|desarmamento|tortura|lavagem|ambient|tribut|financ|abuso/i.test(lei.titulo)) return 'penal_especial';
        return 'outros';
    };

    // Leis filtradas
    const leisFiltradas = useMemo(() => {
        return leis.filter(lei => {
            // Filtro por categoria
            if (categoriaAtiva !== 'todos') {
                const cat = categorizarLei(lei);
                if (cat !== categoriaAtiva) return false;
            }
            // Filtro por busca
            if (searchTerm.trim()) {
                const termo = searchTerm.toLowerCase();
                return lei.titulo.toLowerCase().includes(termo) ||
                    lei.apelido.toLowerCase().includes(termo);
            }
            return true;
        });
    }, [leis, categoriaAtiva, searchTerm]);

    // Contar por categoria
    const contagemPorCategoria = useMemo(() => {
        const contagem: Record<string, number> = { todos: leis.length };
        leis.forEach(lei => {
            const cat = categorizarLei(lei);
            contagem[cat] = (contagem[cat] || 0) + 1;
        });
        return contagem;
    }, [leis]);

    // Carregar texto da lei
    const carregarTexto = async (lei: LeiIndex, historico = false) => {
        setLoadingTexto(true);
        try {
            const arquivo = historico && lei.arquivoHistorico
                ? lei.arquivoHistorico
                : lei.arquivoVigor;
            const response = await fetch(`/knowledge/legislacao/${arquivo}`);
            if (!response.ok) throw new Error('Arquivo não encontrado');
            const textoCarregado = await response.text();
            setTexto(textoCarregado);
            setModoHistorico(historico);
            setLeiSelecionada(lei);
        } catch (err) {
            setTexto('Erro ao carregar o texto da lei.');
        } finally {
            setLoadingTexto(false);
        }
    };

    // Voltar para lista
    const voltar = () => {
        setLeiSelecionada(null);
        setTexto('');
        setModoHistorico(false);
    };

    // Copiar texto
    const copiarTexto = () => {
        navigator.clipboard.writeText(texto);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        onCopiar?.(texto);
    };

    // Atalhos de teclado
    useEffect(() => {
        if (!leiSelecionada) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '+' || e.key === '=') {
                setFontSizeIndex(i => Math.min(FONT_SIZES.length - 1, i + 1));
            }
            if (e.key === '-') {
                setFontSizeIndex(i => Math.max(0, i - 1));
            }
            if (e.key === 'Escape') voltar();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [leiSelecionada]);

    // Formatar tamanho
    const formatarTamanho = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    // Loading
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent mb-4" />
                <p className="text-slate-500">Carregando legislação...</p>
            </div>
        );
    }

    // Error
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-red-500">
                <AlertCircle size={48} className="mb-4" />
                <p className="text-lg font-semibold">Erro ao carregar legislação</p>
                <p className="text-sm mt-2">{error}</p>
            </div>
        );
    }

    // Modo leitura (estilo Kindle)
    if (leiSelecionada) {
        return (
            <div className={`flex flex-col h-full ${currentTheme.bg} transition-colors duration-300`}>
                {/* Header do leitor */}
                <header className={`flex items-center justify-between px-4 py-3 border-b ${currentTheme.border}`}>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={voltar}
                            className={`p-2 rounded-lg hover:bg-slate-500/10 transition-colors ${currentTheme.accent}`}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h1 className={`font-semibold text-sm ${currentTheme.text}`}>
                                {leiSelecionada.apelido}
                            </h1>
                            <p className={`text-xs ${currentTheme.accent}`}>
                                {modoHistorico ? '📜 Histórico de Revogações' : '✅ Texto Consolidado'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Toggle Histórico */}
                        {leiSelecionada.arquivoHistorico && leiSelecionada.trechosRevogados && leiSelecionada.trechosRevogados > 0 && (
                            <button
                                onClick={() => carregarTexto(leiSelecionada, !modoHistorico)}
                                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${modoHistorico
                                        ? 'bg-amber-100 text-amber-700'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                <History size={14} />
                                {modoHistorico ? 'Ver em vigor' : `Ver revogados (${leiSelecionada.trechosRevogados})`}
                            </button>
                        )}

                        {/* Controle de Fonte */}
                        <div className="flex items-center gap-1 border-l border-slate-500/20 pl-3">
                            <button
                                onClick={() => setFontSizeIndex(i => Math.max(0, i - 1))}
                                disabled={fontSizeIndex === 0}
                                className={`p-2 rounded-lg hover:bg-slate-500/10 disabled:opacity-30 ${currentTheme.accent}`}
                            >
                                <ZoomOut size={16} />
                            </button>
                            <span className={`text-xs font-medium w-6 text-center ${currentTheme.accent}`}>
                                {currentFont.label}
                            </span>
                            <button
                                onClick={() => setFontSizeIndex(i => Math.min(FONT_SIZES.length - 1, i + 1))}
                                disabled={fontSizeIndex === FONT_SIZES.length - 1}
                                className={`p-2 rounded-lg hover:bg-slate-500/10 disabled:opacity-30 ${currentTheme.accent}`}
                            >
                                <ZoomIn size={16} />
                            </button>
                        </div>

                        {/* Temas */}
                        <div className="flex items-center gap-1 border-l border-slate-500/20 pl-3">
                            <button
                                onClick={() => setTheme('light')}
                                className={`p-1.5 rounded-lg transition-colors ${theme === 'light' ? 'bg-yellow-100 text-yellow-600' : `hover:bg-slate-500/10 ${currentTheme.accent}`
                                    }`}
                            >
                                <Sun size={16} />
                            </button>
                            <button
                                onClick={() => setTheme('sepia')}
                                className={`p-1.5 rounded-lg transition-colors ${theme === 'sepia' ? 'bg-amber-100 text-amber-600' : `hover:bg-slate-500/10 ${currentTheme.accent}`
                                    }`}
                            >
                                <Coffee size={16} />
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`p-1.5 rounded-lg transition-colors ${theme === 'dark' ? 'bg-slate-700 text-slate-200' : `hover:bg-slate-500/10 ${currentTheme.accent}`
                                    }`}
                            >
                                <Moon size={16} />
                            </button>
                        </div>

                        {/* Copiar */}
                        <button
                            onClick={copiarTexto}
                            className={`p-2 rounded-lg hover:bg-slate-500/10 transition-colors ${currentTheme.accent}`}
                        >
                            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                    </div>
                </header>

                {/* Conteúdo */}
                <main ref={contentRef} className="flex-1 overflow-auto">
                    {loadingTexto ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent" />
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto py-8 px-6">
                            <article
                                className={`${currentTheme.text} whitespace-pre-wrap`}
                                style={{
                                    fontFamily: 'Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif',
                                    fontSize: `${currentFont.size}px`,
                                    lineHeight: currentFont.lineHeight,
                                    textAlign: 'justify',
                                    hyphens: 'auto',
                                }}
                            >
                                {texto}
                            </article>
                        </div>
                    )}
                </main>

                {/* Footer */}
                <footer className={`px-4 py-2 border-t ${currentTheme.border} text-center`}>
                    <span className={`text-xs ${currentTheme.accent}`}>
                        {formatarTamanho(texto.length)} • + - Fonte • ESC Voltar
                    </span>
                </footer>
            </div>
        );
    }

    // Lista de leis
    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-emerald-50/30 to-white">
            {/* Header */}
            <div className="flex-shrink-0 p-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 rounded-xl">
                            <ScrollText className="text-emerald-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">Legislação</h2>
                            <p className="text-sm text-slate-500">
                                {leis.length} leis disponíveis
                            </p>
                        </div>
                    </div>
                </div>

                {/* Busca */}
                <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por nome ou sigla..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
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

                {/* Categorias */}
                <div className="flex gap-1 overflow-x-auto pb-1">
                    <button
                        onClick={() => setCategoriaAtiva('todos')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${categoriaAtiva === 'todos'
                                ? 'bg-emerald-500 text-white shadow-md'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <BookOpen size={16} />
                        Todos
                        <span className={`px-2 py-0.5 rounded-full text-xs ${categoriaAtiva === 'todos' ? 'bg-white/20' : 'bg-slate-200'
                            }`}>
                            {contagemPorCategoria.todos || 0}
                        </span>
                    </button>
                    {CATEGORIAS.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setCategoriaAtiva(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${categoriaAtiva === cat.id
                                    ? 'bg-emerald-500 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <cat.icon size={16} />
                            {cat.nome}
                            <span className={`px-2 py-0.5 rounded-full text-xs ${categoriaAtiva === cat.id ? 'bg-white/20' : 'bg-slate-200'
                                }`}>
                                {contagemPorCategoria[cat.id] || 0}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lista */}
            <div className="flex-1 overflow-auto p-4">
                {leisFiltradas.length === 0 ? (
                    <div className="text-center py-16 text-slate-400">
                        <ScrollText size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Nenhuma lei encontrada para "{searchTerm}"</p>
                    </div>
                ) : (
                    <div className="grid gap-3 max-w-4xl mx-auto">
                        {leisFiltradas.map(lei => (
                            <div
                                key={lei.id}
                                onClick={() => carregarTexto(lei)}
                                className="bg-white rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-emerald-300 hover:shadow-md transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex flex-col items-center justify-center text-white">
                                        <span className="text-lg font-bold">{lei.apelido}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                            {lei.titulo}
                                        </h3>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                                            <span>{formatarTamanho(lei.tamanhoVigor)}</span>
                                            {lei.trechosRevogados && lei.trechosRevogados > 0 && (
                                                <span className="flex items-center gap-1 text-amber-600">
                                                    <History size={12} />
                                                    {lei.trechosRevogados} revogados
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 p-4 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
                <p className="text-center text-xs text-slate-500">
                    Fonte: Planalto.gov.br • Textos consolidados
                </p>
            </div>
        </div>
    );
};

export default LegislacaoViewer;
