/**
 * KindleReader - Leitor de texto estilo Kindle premium
 * Features:
 * - Controle de tamanho de fonte
 * - Temas (claro, sépia, escuro)
 * - Navegação entre seções
 * - Barra de progresso
 */

import React, { useState, useEffect, useRef } from 'react';
import {
    X, ChevronLeft, ChevronRight, Copy, BookOpen,
    ZoomIn, ZoomOut, Sun, Moon, Coffee,
    Settings, Maximize2, Minimize2, Home
} from 'lucide-react';

interface KindleReaderProps {
    titulo: string;
    autor: string;
    texto: string;
    paginaAtual: number;
    totalPaginas: number;
    paginasLabel?: string;
    onClose: () => void;
    onAnterior: () => void;
    onProxima: () => void;
    loading?: boolean;
}

type ThemeType = 'light' | 'sepia' | 'dark';

const THEMES: Record<ThemeType, { bg: string; text: string; accent: string; label: string }> = {
    light: {
        bg: 'bg-white',
        text: 'text-slate-900',
        accent: 'text-slate-600',
        label: 'Claro'
    },
    sepia: {
        bg: 'bg-amber-50',
        text: 'text-amber-900',
        accent: 'text-amber-700',
        label: 'Sépia'
    },
    dark: {
        bg: 'bg-slate-900',
        text: 'text-slate-200',
        accent: 'text-slate-400',
        label: 'Escuro'
    }
};

const FONT_SIZES = [
    { label: 'XS', size: 14, lineHeight: 1.6 },
    { label: 'S', size: 16, lineHeight: 1.7 },
    { label: 'M', size: 18, lineHeight: 1.8 },
    { label: 'L', size: 20, lineHeight: 1.9 },
    { label: 'XL', size: 22, lineHeight: 2.0 },
    { label: 'XXL', size: 24, lineHeight: 2.1 },
];

const KindleReader: React.FC<KindleReaderProps> = ({
    titulo,
    autor,
    texto,
    paginaAtual,
    totalPaginas,
    paginasLabel,
    onClose,
    onAnterior,
    onProxima,
    loading = false
}) => {
    const [theme, setTheme] = useState<ThemeType>('sepia');
    const [fontSizeIndex, setFontSizeIndex] = useState(2); // M = default
    const [showSettings, setShowSettings] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const currentTheme = THEMES[theme];
    const currentFont = FONT_SIZES[fontSizeIndex];

    // Progresso
    const progress = totalPaginas > 0 ? ((paginaAtual + 1) / totalPaginas) * 100 : 0;

    // Atalhos de teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') onAnterior();
            if (e.key === 'ArrowRight') onProxima();
            if (e.key === '+' || e.key === '=') aumentarFonte();
            if (e.key === '-') diminuirFonte();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onAnterior, onProxima, onClose]);

    const aumentarFonte = () => {
        if (fontSizeIndex < FONT_SIZES.length - 1) {
            setFontSizeIndex(fontSizeIndex + 1);
        }
    };

    const diminuirFonte = () => {
        if (fontSizeIndex > 0) {
            setFontSizeIndex(fontSizeIndex - 1);
        }
    };

    const copiarTexto = () => {
        navigator.clipboard.writeText(texto);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <div className={`fixed inset-0 z-[100] flex flex-col ${currentTheme.bg} transition-colors duration-300`}>
            {/* Barra de Progresso Superior */}
            <div className="h-1 bg-slate-200/20">
                <div
                    className="h-full bg-violet-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Header */}
            <header className={`flex items-center justify-between px-6 py-3 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'
                }`}>
                <div className="flex items-center gap-3">
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-lg hover:bg-slate-500/10 transition-colors ${currentTheme.accent}`}
                    >
                        <Home size={20} />
                    </button>
                    <div className="hidden md:block">
                        <h1 className={`font-semibold text-sm ${currentTheme.text}`}>{titulo}</h1>
                        <p className={`text-xs ${currentTheme.accent}`}>{autor}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {/* Controle de Fonte */}
                    <div className="flex items-center gap-1 mr-4">
                        <button
                            onClick={diminuirFonte}
                            disabled={fontSizeIndex === 0}
                            className={`p-2 rounded-lg hover:bg-slate-500/10 disabled:opacity-30 transition-colors ${currentTheme.accent}`}
                        >
                            <ZoomOut size={18} />
                        </button>
                        <span className={`text-xs font-medium w-8 text-center ${currentTheme.accent}`}>
                            {currentFont.label}
                        </span>
                        <button
                            onClick={aumentarFonte}
                            disabled={fontSizeIndex === FONT_SIZES.length - 1}
                            className={`p-2 rounded-lg hover:bg-slate-500/10 disabled:opacity-30 transition-colors ${currentTheme.accent}`}
                        >
                            <ZoomIn size={18} />
                        </button>
                    </div>

                    {/* Temas */}
                    <div className="flex items-center gap-1 border-l border-slate-500/20 pl-4">
                        <button
                            onClick={() => setTheme('light')}
                            className={`p-2 rounded-lg transition-colors ${theme === 'light'
                                    ? 'bg-yellow-100 text-yellow-600'
                                    : `hover:bg-slate-500/10 ${currentTheme.accent}`
                                }`}
                            title="Tema Claro"
                        >
                            <Sun size={18} />
                        </button>
                        <button
                            onClick={() => setTheme('sepia')}
                            className={`p-2 rounded-lg transition-colors ${theme === 'sepia'
                                    ? 'bg-amber-100 text-amber-600'
                                    : `hover:bg-slate-500/10 ${currentTheme.accent}`
                                }`}
                            title="Tema Sépia"
                        >
                            <Coffee size={18} />
                        </button>
                        <button
                            onClick={() => setTheme('dark')}
                            className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                                    ? 'bg-slate-700 text-slate-200'
                                    : `hover:bg-slate-500/10 ${currentTheme.accent}`
                                }`}
                            title="Tema Escuro"
                        >
                            <Moon size={18} />
                        </button>
                    </div>

                    {/* Ações */}
                    <div className="flex items-center gap-1 border-l border-slate-500/20 pl-4">
                        <button
                            onClick={copiarTexto}
                            className={`p-2 rounded-lg hover:bg-slate-500/10 transition-colors ${currentTheme.accent}`}
                            title="Copiar texto"
                        >
                            <Copy size={18} />
                        </button>
                        <button
                            onClick={toggleFullscreen}
                            className={`p-2 rounded-lg hover:bg-slate-500/10 transition-colors ${currentTheme.accent}`}
                            title="Tela cheia"
                        >
                            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                        </button>
                        <button
                            onClick={onClose}
                            className={`p-2 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-colors ${currentTheme.accent}`}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Área de Leitura */}
            <main
                ref={contentRef}
                className="flex-1 overflow-auto px-4 md:px-0"
            >
                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-violet-500 border-t-transparent" />
                    </div>
                ) : (
                    <div
                        className="max-w-3xl mx-auto py-8 md:py-12 px-4 md:px-8"
                        style={{
                            minHeight: '100%'
                        }}
                    >
                        <article
                            className={`${currentTheme.text} whitespace-pre-wrap`}
                            style={{
                                fontFamily: 'Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif',
                                fontSize: `${currentFont.size}px`,
                                lineHeight: currentFont.lineHeight,
                                textAlign: 'justify',
                                hyphens: 'auto',
                                wordBreak: 'break-word'
                            }}
                        >
                            {texto}
                        </article>
                    </div>
                )}
            </main>

            {/* Footer com Navegação */}
            <footer className={`flex items-center justify-between px-6 py-4 border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'
                }`}>
                <button
                    onClick={onAnterior}
                    disabled={paginaAtual === 0 || loading}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all
                        ${paginaAtual === 0
                            ? 'opacity-30 cursor-not-allowed'
                            : 'hover:bg-violet-100 hover:text-violet-600'
                        } ${currentTheme.text}`}
                >
                    <ChevronLeft size={20} />
                    <span className="hidden md:inline font-medium">Anterior</span>
                </button>

                <div className={`flex flex-col items-center ${currentTheme.accent}`}>
                    <span className="text-lg font-bold">
                        {paginaAtual + 1} / {totalPaginas}
                    </span>
                    {paginasLabel && (
                        <span className="text-xs">{paginasLabel}</span>
                    )}
                </div>

                <button
                    onClick={onProxima}
                    disabled={paginaAtual >= totalPaginas - 1 || loading}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all
                        ${paginaAtual >= totalPaginas - 1
                            ? 'opacity-30 cursor-not-allowed'
                            : 'hover:bg-violet-100 hover:text-violet-600'
                        } ${currentTheme.text}`}
                >
                    <span className="hidden md:inline font-medium">Próxima</span>
                    <ChevronRight size={20} />
                </button>
            </footer>

            {/* Dicas de Atalhos */}
            <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 text-xs ${currentTheme.accent} opacity-50`}>
                ← → Navegar • + - Fonte • ESC Fechar
            </div>
        </div>
    );
};

export default KindleReader;
