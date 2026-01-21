import React, { useState } from 'react';
import { useStore } from '../store';
import { ThumbsUp, ThumbsDown, X, Send, MessageSquare } from 'lucide-react';

interface FeedbackDialogProps {
    onClose: () => void;
}

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({ onClose }) => {
    const { feedback, setFeedback } = useStore();
    const [comentario, setComentario] = useState(feedback.comentario);

    const handleSubmit = () => {
        setFeedback(feedback.tipo, comentario);
        // TODO: Salvar feedback no filesystem (knowledge/feedback/)
        console.log('Feedback salvo:', { tipo: feedback.tipo, comentario });
        onClose();
    };

    const titulo = feedback.tipo === 'up'
        ? '👍 Feedback Positivo'
        : '👎 O que podemos melhorar?';

    const placeholder = feedback.tipo === 'up'
        ? 'Opcional: O que você gostou? Algo a destacar?'
        : 'Por favor, descreva o que houve de errado na minuta gerada...';

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
                {/* Header */}
                <div className={`p-4 flex items-center justify-between ${feedback.tipo === 'up' ? 'bg-green-50 border-b border-green-100' : 'bg-red-50 border-b border-red-100'
                    }`}>
                    <h3 className={`font-semibold ${feedback.tipo === 'up' ? 'text-green-800' : 'text-red-800'
                        }`}>
                        {titulo}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-white/50 rounded-full transition-colors"
                    >
                        <X size={18} className="text-slate-500" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4">
                    <div className="flex items-start gap-2 mb-3">
                        <MessageSquare size={16} className="text-slate-400 mt-1" />
                        <p className="text-sm text-slate-600">
                            {feedback.tipo === 'up'
                                ? 'Seu feedback ajuda o estagIA a aprender e melhorar.'
                                : 'Descreva o problema para que possamos corrigir em futuras gerações.'
                            }
                        </p>
                    </div>

                    <textarea
                        className="w-full h-32 p-3 border border-slate-200 rounded-lg text-sm resize-none focus:outline-none focus:border-accent"
                        placeholder={placeholder}
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        autoFocus
                    />

                    {feedback.tipo === 'down' && (
                        <p className="text-[10px] text-slate-400 mt-2">
                            * Seu feedback será armazenado para retroalimentar o sistema de IA
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className={`px-4 py-2 text-sm text-white rounded-lg flex items-center gap-2 transition-colors ${feedback.tipo === 'up'
                                ? 'bg-green-600 hover:bg-green-700'
                                : 'bg-red-600 hover:bg-red-700'
                            }`}
                    >
                        <Send size={14} />
                        Enviar Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

// Componente de botões de feedback
export const FeedbackButtons: React.FC = () => {
    const { feedback, setFeedback, showFeedbackDialog, output } = useStore();

    // Só mostra se houver texto e não estiver gerando
    if (!output.text || output.isGenerating) return null;

    const handleThumbClick = (tipo: 'up' | 'down') => {
        setFeedback(tipo);
        showFeedbackDialog(true);
    };

    return (
        <>
            <div className="flex items-center gap-2 mt-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 flex-1">A minuta atendeu suas expectativas?</span>
                <button
                    onClick={() => handleThumbClick('up')}
                    className={`p-2 rounded-lg transition-all ${feedback.tipo === 'up'
                            ? 'bg-green-100 text-green-600 ring-2 ring-green-200'
                            : 'hover:bg-green-50 text-slate-400 hover:text-green-500'
                        }`}
                    title="Sim, ficou bom!"
                >
                    <ThumbsUp size={18} />
                </button>
                <button
                    onClick={() => handleThumbClick('down')}
                    className={`p-2 rounded-lg transition-all ${feedback.tipo === 'down'
                            ? 'bg-red-100 text-red-600 ring-2 ring-red-200'
                            : 'hover:bg-red-50 text-slate-400 hover:text-red-500'
                        }`}
                    title="Precisa melhorar"
                >
                    <ThumbsDown size={18} />
                </button>
            </div>

            {feedback.showDialog && (
                <FeedbackDialog onClose={() => showFeedbackDialog(false)} />
            )}
        </>
    );
};

export default FeedbackDialog;
