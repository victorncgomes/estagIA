/**
 * MinutasModal - Portal de Repositório de Minutas
 * Modal fullscreen para explorar todos os modelos indexados
 * Base unificada - sem distinção de fonte
 */

import React, { useState, useMemo, useEffect } from 'react';
import { X, Search, FileText, ChevronRight, Copy, Check, ArrowLeft, Eye } from 'lucide-react';
import { getTemplateStats, AGRUPADORES, getModelosPorAgrupador, type ModeloCompleto } from '../../services/templateService';

interface MinutasModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MinutasModal: React.FC<MinutasModalProps> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [agrupadorSelecionado, setAgrupadorSelecionado] = useState<string | null>(null);
    const [modeloSelecionado, setModeloSelecionado] = useState<ModeloCompleto | null>(null);
    const [modelosDoAgrupador, setModelosDoAgrupador] = useState<ModeloCompleto[]>([]);
    const [loadingModelos, setLoadingModelos] = useState(false);
    const [copied, setCopied] = useState(false);

    const stats = useMemo(() => getTemplateStats(), []);

    // Carregar modelos do agrupador selecionado
    useEffect(() => {
        if (agrupadorSelecionado) {
            setLoadingModelos(true);
            getModelosPorAgrupador(agrupadorSelecionado)
                .then(modelos => {
                    setModelosDoAgrupador(modelos);
                    setLoadingModelos(false);
                })
                .catch(() => {
                    setModelosDoAgrupador([]);
                    setLoadingModelos(false);
                });
        } else {
            setModelosDoAgrupador([]);
        }
    }, [agrupadorSelecionado]);

    // Filtrar agrupadores
    const agrupadorsFiltrados = useMemo(() => {
        return stats.porAgrupador
            .filter(ag => {
                if (searchTerm) {
                    const termo = searchTerm.toLowerCase();
                    const agrupador = AGRUPADORES.find(a => a.id === ag.nome);
                    const nomeCompleto = agrupador?.nome || ag.nome;
                    if (!nomeCompleto.toLowerCase().includes(termo) && !ag.nome.toLowerCase().includes(termo)) {
                        return false;
                    }
                }
                return true;
            })
            .sort((a, b) => b.total - a.total);
    }, [stats, searchTerm]);

    // Total filtrado
    const totalFiltrado = useMemo(() => {
        return agrupadorsFiltrados.reduce((acc, ag) => acc + ag.total, 0);
    }, [agrupadorsFiltrados]);

    const handleCopy = () => {
        if (modeloSelecionado) {
            navigator.clipboard.writeText(modeloSelecionado.conteudo_preview);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleBack = () => {
        if (modeloSelecionado) {
            setModeloSelecionado(null);
        } else if (agrupadorSelecionado) {
            setAgrupadorSelecionado(null);
        }
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-[95vw] h-[90vh] max-w-7xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex items-center gap-3">
                        {(agrupadorSelecionado || modeloSelecionado) && (
                            <button
                                onClick={handleBack}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </button>
                        )}
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">
                                {modeloSelecionado
                                    ? modeloSelecionado.nome
                                    : agrupadorSelecionado
                                        ? AGRUPADORES.find(a => a.id === agrupadorSelecionado)?.nome || agrupadorSelecionado
                                        : 'Repositório de Modelos'
                                }
                            </h2>
                            <p className="text-sm text-slate-500">
                                {modeloSelecionado
                                    ? 'Visualizando modelo'
                                    : agrupadorSelecionado
                                        ? `${modelosDoAgrupador.length} modelos disponíveis`
                                        : `${stats.total} modelos indexados`
                                }
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

                {/* Search - apenas na tela de agrupadores */}
                {!agrupadorSelecionado && !modeloSelecionado && (
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <div className="relative max-w-xl">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Buscar agrupadores..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 overflow-auto p-6">
                    {modeloSelecionado ? (
                        /* Vista de conteúdo do modelo */
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-slate-700">Conteúdo do Modelo</h3>
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors"
                                    >
                                        {copied ? <Check size={16} /> : <Copy size={16} />}
                                        {copied ? 'Copiado!' : 'Copiar'}
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-slate-200 font-mono text-sm text-slate-700 whitespace-pre-wrap">
                                    {modeloSelecionado.conteudo_preview}
                                </div>
                            </div>
                        </div>
                    ) : agrupadorSelecionado ? (
                        /* Lista de modelos do agrupador */
                        <div className="space-y-2">
                            {loadingModelos ? (
                                <div className="text-center py-12 text-slate-400">
                                    <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                                    <p>Carregando modelos...</p>
                                </div>
                            ) : modelosDoAgrupador.length > 0 ? (
                                modelosDoAgrupador.map((modelo) => (
                                    <button
                                        key={modelo.arquivo}
                                        onClick={() => setModeloSelecionado(modelo)}
                                        className="w-full p-4 bg-white border border-slate-200 rounded-xl hover:border-primary hover:shadow-md transition-all text-left group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                                <FileText size={20} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-slate-800 group-hover:text-primary transition-colors">
                                                    {modelo.nome}
                                                </h3>
                                                <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                                                    {modelo.conteudo_preview}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400 group-hover:text-primary">
                                                <Eye size={16} />
                                                <span className="text-xs">Ver</span>
                                            </div>
                                        </div>
                                    </button>
                                ))
                            ) : (
                                <div className="text-center py-12 text-slate-400">
                                    <FileText size={48} className="mx-auto mb-4 opacity-50" />
                                    <p>Nenhum modelo encontrado neste agrupador</p>
                                    <p className="text-sm mt-2">Os modelos podem estar em outro agrupador</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Grid de agrupadores */
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
                                        <h3 className="font-semibold text-slate-800 mb-1 line-clamp-2">
                                            {nomeDisplay}
                                        </h3>
                                        <p className="text-2xl font-bold text-primary">
                                            {ag.total}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">modelos</p>
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {!agrupadorSelecionado && !modeloSelecionado && agrupadorsFiltrados.length === 0 && (
                        <div className="text-center py-12 text-slate-400">
                            <Search size={48} className="mx-auto mb-4 opacity-50" />
                            <p>Nenhum agrupador encontrado</p>
                            <p className="text-sm mt-2">Tente outro termo de busca</p>
                        </div>
                    )}
                </div>

                {/* Footer - Stats (apenas na tela principal) */}
                {!agrupadorSelecionado && !modeloSelecionado && (
                    <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-slate-500">
                            <span className="flex items-center gap-1">
                                <FileText size={14} />
                                Exibindo: <strong className="text-slate-700">{totalFiltrado}</strong> de {stats.total} modelos
                            </span>
                        </div>
                        <div className="text-slate-400 text-xs">
                            Base unificada de modelos de decisão
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MinutasModal;
