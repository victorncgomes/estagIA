/**
 * estagIA - Modal de Gerenciamento da Knowledge Base
 * @version 0.1.2
 */

import React, { useState, useEffect } from 'react';
import {
    X,
    Plus,
    Trash2,
    FileText,
    Scale,
    BookOpen,
    GraduationCap,
    Upload,
    Download,
    Search,
    Database,
    AlertCircle
} from 'lucide-react';
import {
    listDocuments,
    addDocument,
    removeDocument,
    getStats,
    exportDocuments,
    importDocuments,
} from '../../services/knowledge';
import { KnowledgeDocument } from '../../services/ai/types';
import { MATTERS } from '../../constants';

interface KnowledgeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DOC_TYPES = [
    { id: 'minuta', label: 'Minuta/Decisão', icon: FileText },
    { id: 'jurisprudencia', label: 'Jurisprudência', icon: Scale },
    { id: 'legislacao', label: 'Legislação', icon: BookOpen },
    { id: 'doutrina', label: 'Doutrina', icon: GraduationCap },
    { id: 'modelo', label: 'Modelo/Template', icon: FileText },
] as const;

export const KnowledgeModal: React.FC<KnowledgeModalProps> = ({ isOpen, onClose }) => {
    const [documents, setDocuments] = useState<KnowledgeDocument[]>([]);
    const [stats, setStats] = useState(getStats());
    const [searchQuery, setSearchQuery] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [newDoc, setNewDoc] = useState({
        title: '',
        content: '',
        type: 'minuta' as KnowledgeDocument['type'],
        materia: '',
        tags: '',
    });

    const loadDocuments = () => {
        const docs = listDocuments();
        setDocuments(docs);
        setStats(getStats());
    };

    useEffect(() => {
        if (isOpen) {
            loadDocuments();
        }
    }, [isOpen]);

    const filteredDocs = documents.filter(doc =>
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddDocument = () => {
        if (!newDoc.title || !newDoc.content) return;

        addDocument({
            title: newDoc.title,
            content: newDoc.content,
            type: newDoc.type,
            materia: newDoc.materia || undefined,
            tags: newDoc.tags.split(',').map(t => t.trim()).filter(Boolean),
        });

        setNewDoc({ title: '', content: '', type: 'minuta', materia: '', tags: '' });
        setIsAdding(false);
        loadDocuments();
    };

    const handleRemove = (id: string) => {
        if (confirm('Remover este documento da base de conhecimento?')) {
            removeDocument(id);
            loadDocuments();
        }
    };

    const handleExport = () => {
        const data = exportDocuments();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `estagia-knowledge-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target?.result as string);
                const count = importDocuments(data);
                alert(`${count} documentos importados com sucesso!`);
                loadDocuments();
            } catch {
                alert('Erro ao importar arquivo. Verifique o formato.');
            }
        };
        reader.readAsText(file);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 p-2 rounded-lg">
                            <Database size={24} className="text-indigo-600" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">Base de Conhecimento</h2>
                            <p className="text-xs text-slate-500">
                                {stats.totalDocuments} documentos • {(stats.totalChars / 1000).toFixed(0)}K caracteres
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 flex items-center gap-3">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Buscar documentos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                    </div>

                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        <Plus size={16} />
                        Adicionar
                    </button>

                    <button
                        onClick={handleExport}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                        title="Exportar"
                    >
                        <Download size={18} />
                    </button>

                    <label className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors cursor-pointer" title="Importar">
                        <Upload size={18} />
                        <input type="file" accept=".json" className="hidden" onChange={handleImport} />
                    </label>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    {isAdding ? (
                        <div className="bg-slate-50 rounded-lg p-4 space-y-4 border border-slate-200">
                            <h3 className="font-semibold text-slate-800">Novo Documento</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-600 mb-1">Título *</label>
                                    <input
                                        type="text"
                                        value={newDoc.title}
                                        onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
                                        placeholder="Ex: Modelo de Livramento Condicional"
                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-600 mb-1">Tipo</label>
                                    <select
                                        value={newDoc.type}
                                        onChange={(e) => setNewDoc({ ...newDoc, type: e.target.value as any })}
                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                    >
                                        {DOC_TYPES.map(t => (
                                            <option key={t.id} value={t.id}>{t.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-600 mb-1">Matéria</label>
                                    <select
                                        value={newDoc.materia}
                                        onChange={(e) => setNewDoc({ ...newDoc, materia: e.target.value })}
                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                    >
                                        <option value="">Todas</option>
                                        {MATTERS.map(m => (
                                            <option key={m.id} value={m.id}>{m.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-600 mb-1">Tags (separadas por vírgula)</label>
                                    <input
                                        type="text"
                                        value={newDoc.tags}
                                        onChange={(e) => setNewDoc({ ...newDoc, tags: e.target.value })}
                                        placeholder="Ex: remição, trabalho, estudo"
                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-600 mb-1">Conteúdo *</label>
                                <textarea
                                    value={newDoc.content}
                                    onChange={(e) => setNewDoc({ ...newDoc, content: e.target.value })}
                                    placeholder="Cole aqui o texto do documento..."
                                    className="w-full h-48 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                />
                                <p className="text-xs text-slate-400 mt-1">
                                    {newDoc.content.length} caracteres
                                </p>
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setIsAdding(false)}
                                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleAddDocument}
                                    disabled={!newDoc.title || !newDoc.content}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Salvar Documento
                                </button>
                            </div>
                        </div>
                    ) : filteredDocs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                            <AlertCircle size={48} className="mb-3" />
                            <p className="text-lg font-medium">Base de conhecimento vazia</p>
                            <p className="text-sm">Adicione documentos para que a IA possa pesquisar neles</p>
                            <button
                                onClick={() => setIsAdding(true)}
                                className="mt-4 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                            >
                                <Plus size={16} />
                                Adicionar primeiro documento
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredDocs.map(doc => {
                                const TypeIcon = DOC_TYPES.find(t => t.id === doc.type)?.icon || FileText;
                                const docMateria = MATTERS.find(m => m.id === doc.materia);

                                return (
                                    <div
                                        key={doc.id}
                                        className="bg-white border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="bg-slate-100 p-2 rounded-lg shrink-0">
                                                <TypeIcon size={20} className="text-slate-500" />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-slate-800 truncate">
                                                    {doc.title}
                                                </h4>
                                                <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                                                    {doc.content.substring(0, 150)}...
                                                </p>

                                                <div className="flex items-center gap-2 mt-2 flex-wrap">
                                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                                        {DOC_TYPES.find(t => t.id === doc.type)?.label}
                                                    </span>
                                                    {docMateria && (
                                                        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded">
                                                            {docMateria.title}
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-slate-400">
                                                        {(doc.content.length / 1000).toFixed(1)}K chars
                                                    </span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleRemove(doc.id)}
                                                className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-colors shrink-0"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-xs text-slate-400">
                    <span>Tipos: {Object.entries(stats.byType).map(([k, v]) => `${k}: ${v}`).join(', ') || 'Nenhum'}</span>
                    <span>Última atualização: {new Date().toLocaleTimeString('pt-BR')}</span>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeModal;
