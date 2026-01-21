import React from 'react';
import { useStore } from '../store';
import { PROFILES } from '../constants';
import { Wand2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { runPipeline } from '../services/pipeline';

const ColumnGuidance: React.FC = () => {
    const { guidance, setGuidance, output } = useStore();

    const handleGenerate = () => {
        runPipeline();
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 border-r border-slate-200">
            <div className="p-4 border-b border-slate-200 bg-white">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    3. Orientações
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">

                {/* Style Profile */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Perfil de Estilo</label>
                    <select
                        className="w-full bg-white border border-slate-200 rounded-md py-2 px-3 text-sm text-slate-700 focus:outline-none focus:border-accent"
                        value={guidance.profile}
                        onChange={(e) => setGuidance('profile', e.target.value)}
                    >
                        {PROFILES.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>

                {/* Instructions */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Orientações de Mérito</label>
                    <textarea
                        className="w-full bg-white border border-slate-200 rounded-md p-3 text-sm h-32 resize-none focus:outline-none focus:border-accent"
                        placeholder="Ex: Acolher tese do MP; Indeferir pedido por falta de requisito subjetivo..."
                        value={guidance.merit}
                        onChange={(e) => setGuidance('merit', e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Dispositivo (Opcional)</label>
                    <textarea
                        className="w-full bg-white border border-slate-200 rounded-md p-3 text-sm h-24 resize-none focus:outline-none focus:border-accent"
                        placeholder="Ex: DEFIRO a progressão. Expeça-se CAL..."
                        value={guidance.device}
                        onChange={(e) => setGuidance('device', e.target.value)}
                    />
                </div>

                {/* Profundidade Jurídica - 6 Níveis */}
                <div className="space-y-4 pt-2 border-t border-slate-200">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-xs font-semibold text-slate-700">Profundidade Jurídica</label>
                            <span className="text-xs font-bold text-accent">Nível {guidance.profundidadeJuridica}</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="6"
                            value={guidance.profundidadeJuridica}
                            onChange={(e) => setGuidance('profundidadeJuridica', parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-[9px] text-slate-400 mt-1 px-0.5">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
                        </div>

                        {/* Descrição do nível selecionado */}
                        <div className="mt-3 p-3 bg-slate-100 rounded-lg border border-slate-200">
                            {guidance.profundidadeJuridica === 1 && (
                                <div className="flex items-start gap-2">
                                    <span className="text-lg">📝</span>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Telegráfico</p>
                                        <p className="text-[10px] text-slate-500">Direto ao ponto, sem fundamentação jurídica. Ideal para despachos simples.</p>
                                    </div>
                                </div>
                            )}
                            {guidance.profundidadeJuridica === 2 && (
                                <div className="flex items-start gap-2">
                                    <span className="text-lg">📚</span>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Padrão</p>
                                        <p className="text-[10px] text-slate-500">Pesquisa na base de 290 modelos do magistrado. Modo recomendado.</p>
                                    </div>
                                </div>
                            )}
                            {guidance.profundidadeJuridica === 3 && (
                                <div className="flex items-start gap-2">
                                    <span className="text-lg">⚖️</span>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Normativo</p>
                                        <p className="text-[10px] text-slate-500">Inclui citações de legislação aplicável (LEP, CP, CPP).</p>
                                    </div>
                                </div>
                            )}
                            {guidance.profundidadeJuridica === 4 && (
                                <div className="flex items-start gap-2">
                                    <span className="text-lg">📖</span>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Doutrinário</p>
                                        <p className="text-[10px] text-slate-500">Adiciona referências doutrinárias da base local.</p>
                                    </div>
                                </div>
                            )}
                            {guidance.profundidadeJuridica === 5 && (
                                <div className="flex items-start gap-2">
                                    <span className="text-lg">🏛️</span>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Tribunais</p>
                                        <p className="text-[10px] text-slate-500">Pesquisa jurisprudência em sites .jus.br (STJ, STF, TJs).</p>
                                    </div>
                                </div>
                            )}
                            {guidance.profundidadeJuridica === 6 && (
                                <div className="flex items-start gap-2">
                                    <span className="text-lg">🌐</span>
                                    <div>
                                        <p className="text-xs font-semibold text-red-600">Ampliado</p>
                                        <p className="text-[10px] text-slate-500">Pesquisa completa na internet. Requer revisão rigorosa.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {guidance.profundidadeJuridica >= 5 && (
                            <div className="flex items-start gap-1 mt-2 text-amber-600 bg-amber-50 p-2 rounded text-[10px] border border-amber-200">
                                <AlertTriangle size={12} className="mt-0.5 shrink-0" />
                                <span>Pesquisa externa ativa. Verifique citações antes de usar.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className="p-4 bg-white border-t border-slate-200">
                <button
                    onClick={handleGenerate}
                    disabled={output.isGenerating}
                    className={`
                w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold text-white shadow-lg shadow-accent/20 transition-all
                ${output.isGenerating
                            ? 'bg-slate-400 cursor-not-allowed'
                            : 'bg-accent hover:bg-blue-700 hover:shadow-accent/30 active:transform active:scale-95'}
            `}
                >
                    {output.isGenerating ? (
                        <>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                            <span>Processando...</span>
                        </>
                    ) : (
                        <>
                            <Wand2 size={20} />
                            <span>GERAR DECISÃO</span>
                        </>
                    )}
                </button>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                    <ShieldCheck size={12} />
                    <span>Sistema Anti-Alucinação Ativo</span>
                </div>
            </div>
        </div>
    );
};

export default ColumnGuidance;