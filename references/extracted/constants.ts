import { Matter } from './types';
import { 
  FileText, 
  Clock, 
  Unlock, 
  MapPin, 
  DollarSign, 
  AlertTriangle, 
  Scale, 
  RotateCcw 
} from 'lucide-react';

export const MATTERS: Matter[] = [
  { id: 'gep', title: 'Retificação de GEP', description: 'Correção de cálculo/fração', icon: 'FileText' },
  { id: 'remicao', title: 'Remição de Pena', description: 'Trabalho, estudo ou leitura', icon: 'Clock' },
  { id: 'livramento', title: 'Livramento Condicional', description: 'Análise de requisitos', icon: 'Unlock' },
  { id: 'monitoramento', title: 'Monitoramento Eletr.', description: 'Tornozeleira/CEME', icon: 'MapPin' },
  { id: 'multa', title: 'Extinção de Punibilidade', description: 'Multa/Hipossuficiência', icon: 'DollarSign' },
  { id: 'falta', title: 'Falta Grave/Média', description: 'Homologação e regressão', icon: 'AlertTriangle' },
  { id: 'agravo', title: 'Agravo em Execução', description: 'Juízo de retratação', icon: 'Scale' },
  { id: 'reconsideracao', title: 'Reconsideração', description: 'Análise de pedido', icon: 'RotateCcw' },
];

export const PROFILES = [
  { id: 'baltazar', name: 'Estilo Baltazar (Padrão)' },
  { id: 'didatico', name: 'Estilo Didático' },
  { id: 'breve', name: 'Estilo Breve' },
];

// Helper to map string icon name to component
export const getIcon = (name: string) => {
  switch (name) {
    case 'FileText': return FileText;
    case 'Clock': return Clock;
    case 'Unlock': return Unlock;
    case 'MapPin': return MapPin;
    case 'DollarSign': return DollarSign;
    case 'AlertTriangle': return AlertTriangle;
    case 'Scale': return Scale;
    case 'RotateCcw': return RotateCcw;
    default: return FileText;
  }
};