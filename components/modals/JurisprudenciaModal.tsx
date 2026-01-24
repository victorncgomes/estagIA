/**
 * Modal de Jurisprudência - estagIA
 * Exibe e permite busca nas jurisprudências do TJRN
 * 
 * @version 1.1.0 - Melhorias de contraste e navegação
 */

import React, { useState, useEffect, useMemo } from 'react';
import { X, Search, Scale, User, Calendar, FileText, ChevronRight, ArrowLeft, Copy, Check, Loader2 } from 'lucide-react';
import {
    searchJurisprudencia,
    getJurisprudenciaStats,
    getClassesDisponiveis,
    getRelatoresDisponiveis,
    getTotalJurisprudencias,
    Jurisprudencia
} from '../../services/jurisprudencia';

interface JurisprudenciaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function JurisprudenciaModal({ isOpen, onClose }: JurisprudenciaModalProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClasse, setSelectedClasse] = useState<string>('');
    const [selectedRelator, setSelectedRelator] = useState<string>('');
    const [results, setResults] = useState<Jurisprudencia[]>([]);
    const [selectedItem, setSelectedItem] = useState<Jurisprudencia | null>(null);
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [displayLimit, setDisplayLimit] = useState(50);

    const stats = useMemo(() => getJurisprudenciaStats(), []);
    const classes = useMemo(() => getClassesDisponiveis(), []);
    const relatores = useMemo(() => getRelatoresDisponiveis(), []);
    const totalDisponivel = useMemo(() => getTotalJurisprudencias(), []);

    // Resetar estado quando abre o modal
    useEffect(() => {
        if (isOpen) {
            setSelectedItem(null);
            setSearchTerm('');
            setSelectedClasse('');
            setSelectedRelator('');
            setDisplayLimit(50);
            // Carregar resultados iniciais (sem limite fixo)
            setLoading(true);
            setTimeout(() => {
                setResults(searchJurisprudencia('', 5000));
                setLoading(false);
            }, 100);
        }
    }, [isOpen]);

    // Buscar ao digitar
    useEffect(() => {
        if (!isOpen) return;
        setLoading(true);
        setDisplayLimit(50); // Reset ao mudar filtros
        const timer = setTimeout(() => {
            let filtered = searchJurisprudencia(searchTerm, 5000);
            if (selectedClasse) {
                filtered = filtered.filter(j => j.classe === selectedClasse);
            }
            if (selectedRelator) {
                filtered = filtered.filter(j => j.relator === selectedRelator);
            }
            setResults(filtered);
            setLoading(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [searchTerm, selectedClasse, selectedRelator, isOpen]);

    // Copiar texto
    const handleCopy = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">

                {/* Header - Melhor contraste com fundo mais escuro */}
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {selectedItem && (
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                                title="Voltar à lista"
                            >
                                <ArrowLeft size={20} />
                            </button>
                        )}
                        <Scale size={24} className="text-amber-200" />
                        <div>
                            <h2 className="text-xl font-bold text-white">
                                {selectedItem ? 'Detalhes da Jurisprudência' : 'Jurisprudência'}
                            </h2>
                            <p className="text-amber-200 text-sm font-medium">
                                {stats.total.toLocaleString()} acórdãos • TJRN, STF, STJ
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                        title="Fechar"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Conteúdo */}
                {selectedItem ? (
                    // Visualização de item selecionado
                    <div className="flex-1 overflow-auto p-6">
                        <div className="space-y-4">
                            {/* Metadados */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-xs text-slate-500 mb-1">Processo</div>
                                    <div className="font-mono text-sm font-medium text-slate-700">
                                        {selectedItem.processo}
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-xs text-slate-500 mb-1">Classe</div>
                                    <div className="text-sm font-medium text-slate-700">
                                        {selectedItem.classe || 'N/A'}
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-xs text-slate-500 mb-1">Relator</div>
                                    <div className="text-sm font-medium text-slate-700">
                                        {selectedItem.relator || 'N/A'}
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-xs text-slate-500 mb-1">Data</div>
                                    <div className="text-sm font-medium text-slate-700">
                                        {selectedItem.data || 'N/A'}
                                    </div>
                                </div>
                            </div>

                            {/* Texto completo */}
                            <div className="border border-slate-200 rounded-xl overflow-hidden">
                                <div className="bg-slate-100 px-4 py-2 flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-600">Inteiro Teor</span>
                                    <button
                                        onClick={() => handleCopy(selectedItem.textoResumo)}
                                        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors"
                                    >
                                        {copied ? <Check size={14} /> : <Copy size={14} />}
                                        {copied ? 'Copiado!' : 'Copiar'}
                                    </button>
                                </div>
                                <div className="p-4 max-h-[50vh] overflow-y-auto">
                                    <pre className="whitespace-pre-wrap font-sans text-sm text-slate-700 leading-relaxed">
                                        {selectedItem.textoResumo}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Lista de resultados
                    <>
                        {/* Barra de busca */}
                        <div className="p-4 border-b border-slate-200 space-y-3">
                            <div className="flex gap-3">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Buscar por termo, processo, relator..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                                    />
                                </div>
                                <select
                                    value={selectedClasse}
                                    onChange={(e) => setSelectedClasse(e.target.value)}
                                    className="px-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white text-sm"
                                >
                                    <option value="">Todas as classes</option>
                                    {classes.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedRelator}
                                    onChange={(e) => setSelectedRelator(e.target.value)}
                                    className="px-3 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white text-sm max-w-[200px]"
                                >
                                    <option value="">Todos os relatores</option>
                                    {relatores.map(r => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span>{results.length} resultados</span>
                                <span>•</span>
                                <span>{stats.classes} classes</span>
                                <span>•</span>
                                <span>{stats.relatores} relatores</span>
                            </div>
                        </div>

                        {/* Lista */}
                        <div className="flex-1 overflow-y-auto">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-12 text-amber-600">
                                    <Loader2 size={40} className="animate-spin" />
                                    <p className="mt-3 text-sm text-slate-500">Buscando jurisprudências...</p>
                                </div>
                            ) : results.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                                    <Scale size={48} strokeWidth={1} />
                                    <p className="mt-2">Nenhuma jurisprudência encontrada</p>
                                    <p className="text-xs mt-1">Tente outro termo de busca</p>
                                </div>
                            ) : (
                                <>
                                    <div className="divide-y divide-slate-100">
                                        {results.slice(0, displayLimit).map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => setSelectedItem(item)}
                                                className="w-full text-left px-6 py-4 hover:bg-slate-50 transition-colors group"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="font-mono text-sm font-medium text-slate-800">
                                                                {item.processo}
                                                            </span>
                                                            {item.classe && (
                                                                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                                                                    {item.classe}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-slate-600 line-clamp-2 mb-2">
                                                            {item.ementa || item.textoResumo?.substring(0, 200)}...
                                                        </p>
                                                        <div className="flex items-center gap-4 text-xs text-slate-400">
                                                            {item.relator && (
                                                                <span className="flex items-center gap-1">
                                                                    <User size={12} />
                                                                    {item.relator}
                                                                </span>
                                                            )}
                                                            {item.dataJulgamento && (
                                                                <span className="flex items-center gap-1">
                                                                    <Calendar size={12} />
                                                                    {item.dataJulgamento}
                                                                </span>
                                                            )}
                                                            {item.tipo && (
                                                                <span className="flex items-center gap-1">
                                                                    <FileText size={12} />
                                                                    {item.tipo}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <ChevronRight
                                                        size={20}
                                                        className="text-slate-300 group-hover:text-amber-500 transition-colors mt-1"
                                                    />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    {/* Botão Carregar Mais */}
                                    {displayLimit < results.length && (
                                        <div className="p-4 border-t border-slate-200 bg-slate-50">
                                            <button
                                                onClick={() => setDisplayLimit(prev => prev + 50)}
                                                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
                                            >
                                                Carregar mais ({Math.min(50, results.length - displayLimit)} de {results.length - displayLimit} restantes)
                                            </button>
                                        </div>
                                    )}
                                    {displayLimit >= results.length && results.length > 50 && (
                                        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center text-sm text-slate-500">
                                            ✓ Todos os {results.length} resultados carregados
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
