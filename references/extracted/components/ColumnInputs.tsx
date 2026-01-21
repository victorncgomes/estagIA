import React, { useRef } from 'react';
import { UploadCloud, FileText, CheckCircle, AlertCircle, Trash2, Eye } from 'lucide-react';
import { useStore } from '../store';
import { InputTab, FileData } from '../types';

const TABS: { id: InputTab; label: string }[] = [
  { id: 'rspe', label: 'RSPE' },
  { id: 'mp', label: 'MP' },
  { id: 'defesa', label: 'Defesa' },
  { id: 'outros', label: 'Outros' },
  { id: 'arquivos', label: 'Arquivos' },
];

const ColumnInputs: React.FC = () => {
  const { inputs, activeInputTab, setActiveInputTab, setInput, files, addFile } = useStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFile: FileData = {
        id: Math.random().toString(36).substr(2, 9),
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        status: 'extracted', // Simulating instant extraction for UI
        confidence: 0.92
      };
      addFile(newFile);
    }
  };

  const renderTabContent = () => {
    if (activeInputTab === 'arquivos') {
      return (
        <div className="flex flex-col h-full">
          <div 
            className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 hover:border-accent transition-colors cursor-pointer mb-4"
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileUpload}
            />
            <div className="bg-slate-100 p-3 rounded-full w-fit mx-auto mb-3 text-slate-500">
                <UploadCloud size={24} />
            </div>
            <p className="text-sm font-medium text-slate-700">Clique para enviar ou arraste arquivos</p>
            <p className="text-xs text-slate-400 mt-1">PDF, JPG, PNG, DOCX (Max 20MB)</p>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Arquivos Processados ({files.length})</h4>
            {files.map((file) => (
              <div key={file.id} className="bg-white border border-slate-200 rounded-md p-3 flex items-center gap-3">
                <div className="bg-blue-50 text-blue-600 p-2 rounded">
                  <FileText size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-slate-500">{(file.size / 1024).toFixed(0)} KB</span>
                    {file.status === 'extracted' && (
                        <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">
                            <CheckCircle size={10} /> OCR 92%
                        </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded">
                        <Eye size={16} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={16} />
                    </button>
                </div>
              </div>
            ))}
            {files.length === 0 && (
                <div className="text-center py-4 text-slate-400 text-xs italic">
                    Nenhum arquivo anexado.
                </div>
            )}
          </div>
        </div>
      );
    }

    const placeholders: Record<string, string> = {
      rspe: "Cole aqui o texto completo do Relatório da Situação Processual Executória...",
      mp: "Cole aqui a manifestação do Ministério Público...",
      defesa: "Cole aqui o pedido ou manifestação da Defesa...",
      outros: "Cole aqui sentenças, certidões ou outros documentos relevantes..."
    };

    return (
      <div className="h-full flex flex-col">
        <textarea
          className="flex-1 w-full p-4 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none font-mono leading-relaxed"
          placeholder={placeholders[activeInputTab]}
          value={inputs[activeInputTab as keyof typeof inputs]}
          onChange={(e) => setInput(activeInputTab as keyof typeof inputs, e.target.value)}
        />
        <div className="mt-2 flex justify-between items-center px-1">
            <span className="text-xs text-slate-400">
                {inputs[activeInputTab as keyof typeof inputs].length} caracteres
            </span>
            <button 
                className="text-xs text-slate-500 hover:text-red-500"
                onClick={() => setInput(activeInputTab as keyof typeof inputs, '')}
            >
                Limpar
            </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 border-r border-slate-200">
      <div className="p-4 border-b border-slate-200 bg-white">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          2. Insumos
        </h2>
        
        <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
          {TABS.map((tab) => {
            const isActive = activeInputTab === tab.id;
            const hasContent = tab.id === 'arquivos' 
                ? files.length > 0 
                : inputs[tab.id as keyof typeof inputs].length > 0;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveInputTab(tab.id)}
                className={`
                  flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-all relative
                  ${isActive 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}
                `}
              >
                {tab.label}
                {hasContent && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-accent rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ColumnInputs;