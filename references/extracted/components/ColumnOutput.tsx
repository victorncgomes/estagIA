import React from 'react';
import { useStore } from '../store';
import { Copy, RefreshCw, Terminal, CheckCircle2, AlertOctagon, BrainCircuit } from 'lucide-react';
import { LogEntry } from '../types';

const OUTPUT_TABS = [
  { id: 'decision', label: 'Decisão' },
  { id: 'prompt', label: 'Prompt' },
  { id: 'log', label: 'Log' },
];

const ColumnOutput: React.FC = () => {
  const { output, setActiveOutputTab } = useStore();
  const { logs, activeOutputTab, text, prompt, progress, isGenerating } = output;

  const renderLogItem = (log: LogEntry) => {
    let icon = <div className="w-2 h-2 bg-slate-400 rounded-full" />;
    let colorClass = 'text-slate-600';
    let bgClass = 'bg-white';
    
    if (log.status === 'success') {
        icon = <CheckCircle2 size={14} className="text-green-500" />;
        bgClass = 'bg-green-50/50';
    } else if (log.status === 'warning') {
        icon = <AlertOctagon size={14} className="text-amber-500" />;
        bgClass = 'bg-amber-50/50';
    } else if (log.status === 'pending') {
        icon = <div className="w-3 h-3 border-2 border-accent border-t-transparent rounded-full animate-spin" />;
        colorClass = 'text-accent font-medium';
    }

    return (
        <div key={log.id} className={`flex gap-3 p-3 rounded-md border border-slate-100 mb-2 text-sm ${bgClass}`}>
            <div className="mt-0.5 shrink-0">{icon}</div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <span className={`uppercase text-[10px] font-bold tracking-wider mb-1 block ${log.status === 'pending' ? 'text-accent' : 'text-slate-400'}`}>
                        {log.stage}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                        {log.timestamp.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}
                    </span>
                </div>
                <p className={`${colorClass} leading-snug`}>{log.message}</p>
                {log.details && (
                    <p className="text-xs text-slate-400 mt-1 pl-2 border-l-2 border-slate-200">
                        {log.details}
                    </p>
                )}
            </div>
        </div>
    );
  };

  const renderContent = () => {
    if (activeOutputTab === 'log') {
        return (
            <div className="flex flex-col h-full">
                {isGenerating && (
                    <div className="mb-4">
                        <div className="flex justify-between text-xs text-slate-500 mb-1">
                            <span>Progresso Global</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-accent transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                )}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {logs.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-2">
                            <Terminal size={32} />
                            <p className="text-sm">Aguardando processamento...</p>
                        </div>
                    ) : (
                        logs.map(renderLogItem)
                    )}
                </div>
            </div>
        );
    }

    if (activeOutputTab === 'prompt') {
        return (
            <textarea
                readOnly
                className="w-full h-full p-4 bg-slate-900 text-green-400 font-mono text-xs rounded-lg resize-none focus:outline-none leading-relaxed"
                value={prompt || "O prompt gerado aparecerá aqui..."}
            />
        );
    }

    return (
        <div className="h-full flex flex-col relative">
            <textarea
                className="flex-1 w-full p-6 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-accent resize-none font-serif leading-loose shadow-sm"
                value={text}
                placeholder="A decisão gerada aparecerá aqui..."
                readOnly={isGenerating}
                onChange={() => {}} // In a real app, this would update store
            />
            {text && !isGenerating && (
                <div className="absolute top-2 right-2 flex gap-1">
                    <button className="p-2 bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50 text-slate-600" title="Copiar">
                        <Copy size={16} />
                    </button>
                    <button className="p-2 bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50 text-slate-600" title="Regenerar">
                        <RefreshCw size={16} />
                    </button>
                </div>
            )}
        </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="p-4 border-b border-slate-200 bg-white">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          4. Saída
        </h2>
        
        <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
          {OUTPUT_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveOutputTab(tab.id as any)}
              className={`
                flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all
                ${activeOutputTab === tab.id 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 overflow-hidden">
        {renderContent()}
      </div>
      
      {/* Footer Stats */}
      <div className="px-4 py-2 border-t border-slate-200 bg-white flex justify-between items-center text-[10px] text-slate-400">
        <div className="flex items-center gap-2">
            <BrainCircuit size={12} />
            <span>Modelo: Claude 3.5 Sonnet</span>
        </div>
        <div>
            {text.length > 0 && <span>{text.split(' ').length} palavras</span>}
        </div>
      </div>
    </div>
  );
};

export default ColumnOutput;