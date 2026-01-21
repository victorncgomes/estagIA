import { create } from 'zustand';
import { AppState, MatterType, LogEntry, ProfundidadeJuridicaNivel } from './types';

export const useStore = create<AppState>((set) => ({
  // Global Settings
  batchMode: false,
  selectedModel: 'anthropic', // Default to Claude

  // Initial State
  selectedMatter: null,
  detectedMatter: null, // Matéria detectada automaticamente
  inputs: {
    mp: '',
    defesa: '',
    rspe: '',
    outros: '',
  },
  files: [],
  activeInputTab: 'rspe', // RSPE is default as per MVP
  guidance: {
    merit: '',
    device: '',
    profundidadeJuridica: 2 as ProfundidadeJuridicaNivel, // Nível 2 (Padrão) como default
    profile: 'baltazar',
  },
  output: {
    text: '',
    prompt: '',
    logs: [],
    isGenerating: false,
    activeOutputTab: 'decision',
    progress: 0,
  },
  feedback: {
    tipo: null,
    comentario: '',
    showDialog: false,
  },

  // Actions
  setMatter: (id: MatterType) => set({ selectedMatter: id }),

  setDetectedMatter: (matter: MatterType | null) => set({ detectedMatter: matter }),

  setInput: (field, value) => set((state) => ({
    inputs: { ...state.inputs, [field]: value }
  })),

  addFile: (file) => set((state) => ({
    files: [...state.files, file]
  })),

  setActiveInputTab: (tab) => set({ activeInputTab: tab }),

  setGuidance: (field, value) => set((state) => ({
    guidance: { ...state.guidance, [field]: value }
  })),

  setActiveOutputTab: (tab) => set((state) => ({
    output: { ...state.output, activeOutputTab: tab }
  })),

  startGeneration: () => set((state) => ({
    output: {
      ...state.output,
      isGenerating: true,
      text: '',
      logs: [],
      progress: 0,
      activeOutputTab: 'log' // Switch to log to show progress
    },
    feedback: { tipo: null, comentario: '', showDialog: false } // Reset feedback
  })),

  addLog: (log: LogEntry) => set((state) => ({
    output: {
      ...state.output,
      logs: [...state.output.logs, log],
      progress: Math.min(state.output.progress + 15, 95)
    }
  })),

  finishGeneration: (decision, prompt) => set((state) => ({
    output: {
      ...state.output,
      isGenerating: false,
      text: decision,
      prompt: prompt,
      progress: 100,
      activeOutputTab: 'decision' // Switch back to see result
    }
  })),

  setBatchMode: (value) => set({ batchMode: value }),
  setSelectedModel: (model) => set({ selectedModel: model }),

  // Feedback actions
  setFeedback: (tipo, comentario = '') => set((state) => ({
    feedback: { ...state.feedback, tipo, comentario }
  })),

  showFeedbackDialog: (show) => set((state) => ({
    feedback: { ...state.feedback, showDialog: show }
  })),
}));