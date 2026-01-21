export type MatterType =
  | 'progressao'
  | 'regressao'
  | 'livramento'
  | 'remicao'
  | 'unificacao'
  | 'retificacao'
  | 'indulto'
  | 'prescricao'
  | 'falta'
  | 'domiciliar'
  | 'monitoramento'
  | 'transferencia'
  | 'agravo'
  | 'reconsideracao'
  | 'medidaSeguranca'
  | 'outros';

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

// Tipos para Profundidade Jurídica (6 níveis)
export type ProfundidadeJuridicaNivel = 1 | 2 | 3 | 4 | 5 | 6;

export interface FeedbackData {
  tipo: 'up' | 'down' | null;
  comentario: string;
  showDialog: boolean;
}

export interface AppState {
  // Global settings
  batchMode: boolean;
  selectedModel: string;

  // Column 1
  selectedMatter: MatterType | null;
  detectedMatter: MatterType | null; // Matéria detectada automaticamente

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
    profundidadeJuridica: ProfundidadeJuridicaNivel; // 1-6 (novo sistema unificado)
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

  // Feedback
  feedback: FeedbackData;

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
  setBatchMode: (value: boolean) => void;
  setSelectedModel: (model: string) => void;
  setDetectedMatter: (matter: MatterType | null) => void;
  setFeedback: (tipo: 'up' | 'down' | null, comentario?: string) => void;
  showFeedbackDialog: (show: boolean) => void;
}