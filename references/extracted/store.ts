import { create } from 'zustand';
import { AppState, MatterType, LogEntry } from './types';

export const useStore = create<AppState>((set) => ({
  // Initial State
  selectedMatter: null,
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
    prolixity: 3,
    internetLevel: 1,
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

  // Actions
  setMatter: (id: MatterType) => set({ selectedMatter: id }),
  
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
    }
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
}));