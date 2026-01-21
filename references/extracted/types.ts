export type MatterType = 
  | 'gep' 
  | 'remicao' 
  | 'livramento' 
  | 'monitoramento' 
  | 'multa' 
  | 'falta' 
  | 'agravo' 
  | 'reconsideracao';

export interface Matter {
  id: MatterType;
  title: string;
  description: string;
  icon: string;
}

export type InputTab = 'mp' | 'defesa' | 'rspe' | 'outros' | 'arquivos';

export interface FileData {
  id: string;
  name: string;
  size: number;
  status: 'processing' | 'extracted' | 'error';
  confidence?: number;
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  stage: 'ocr' | 'extraction' | 'consistency' | 'validation' | 'review' | 'writing';
  message: string;
  status: 'pending' | 'success' | 'warning' | 'error';
  details?: string;
  duration?: number;
}

export interface AppState {
  // Column 1
  selectedMatter: MatterType | null;
  
  // Column 2
  inputs: {
    mp: string;
    defesa: string;
    rspe: string;
    outros: string;
  };
  files: FileData[];
  activeInputTab: InputTab;

  // Column 3
  guidance: {
    merit: string;
    device: string;
    prolixity: number; // 1-5
    internetLevel: number; // 1-5
    profile: string;
  };

  // Column 4
  output: {
    text: string;
    prompt: string;
    logs: LogEntry[];
    isGenerating: boolean;
    activeOutputTab: 'decision' | 'prompt' | 'log';
    progress: number; // 0-100
  };

  // Actions
  setMatter: (id: MatterType) => void;
  setInput: (field: keyof AppState['inputs'], value: string) => void;
  addFile: (file: FileData) => void;
  setActiveInputTab: (tab: InputTab) => void;
  setGuidance: (field: keyof AppState['guidance'], value: string | number) => void;
  setActiveOutputTab: (tab: 'decision' | 'prompt' | 'log') => void;
  startGeneration: () => void;
  addLog: (log: LogEntry) => void;
  finishGeneration: (decision: string, prompt: string) => void;
}