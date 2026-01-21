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

        {/* Sliders */}
        <div className="space-y-4 pt-2 border-t border-slate-200">
            <div>
                <div className="flex justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">Prolixidade</label>
                    <span className="text-xs text-slate-500">Nível {guidance.prolixity}</span>
                </div>
                <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={guidance.prolixity}
                    onChange={(e) => setGuidance('prolixity', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Telegráfico</span>
                    <span>Exaustivo</span>
                </div>
            </div>

            <div>
                <div className="flex justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">Pesquisa Internet</label>
                    <span className={`text-xs font-bold ${guidance.internetLevel > 3 ? 'text-red-500' : 'text-slate-500'}`}>
                        {guidance.internetLevel === 1 ? 'OFF' : guidance.internetLevel === 5 ? 'RISCO MÁXIMO' : `Nível ${guidance.internetLevel}`}
                    </span>
                </div>
                <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={guidance.internetLevel}
                    onChange={(e) => setGuidance('internetLevel', parseInt(e.target.value))}
                    className={`w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-${guidance.internetLevel > 3 ? 'red-500' : 'primary'}`}
                />
                {guidance.internetLevel > 3 && (
                    <div className="flex items-start gap-1 mt-1 text-red-500 bg-red-50 p-1.5 rounded text-[10px]">
                        <AlertTriangle size={12} className="mt-0.5" />
                        <span>Alto risco de alucinação. Requer revisão humana rigorosa.</span>
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