import { Matter } from './types';
import {
  FileText,
  Clock,
  Unlock,
  MapPin,
  DollarSign,
  AlertTriangle,
  Scale,
  RotateCcw,
  TrendingUp,
  TrendingDown,
  Link,
  Home,
  Truck,
  Gift,
  Shield,
  BookOpen
} from 'lucide-react';

// Matérias disponíveis para geração de decisões
export const MATTERS: Matter[] = [
  { id: 'progressao', title: 'Progressão de Regime', description: 'Aberto, semiaberto, fechado', icon: 'TrendingUp' },
  { id: 'regressao', title: 'Regressão de Regime', description: 'Por falta grave ou fuga', icon: 'TrendingDown' },
  { id: 'livramento', title: 'Livramento Condicional', description: 'Análise de requisitos', icon: 'Unlock' },
  { id: 'remicao', title: 'Remição de Pena', description: 'Trabalho, estudo ou leitura', icon: 'Clock' },
  { id: 'unificacao', title: 'Unificação de Penas', description: 'Soma ou unificação', icon: 'Link' },
  { id: 'retificacao', title: 'Retificação de GEP', description: 'Correção de cálculo/fração', icon: 'FileText' },
  { id: 'indulto', title: 'Indulto e Comutação', description: 'Decretos presidenciais', icon: 'Gift' },
  { id: 'prescricao', title: 'Prescrição', description: 'Extinção de punibilidade', icon: 'DollarSign' },
  { id: 'falta', title: 'Falta Grave/Média', description: 'Homologação e regressão', icon: 'AlertTriangle' },
  { id: 'domiciliar', title: 'Prisão Domiciliar', description: 'Substituição de regime', icon: 'Home' },
  { id: 'monitoramento', title: 'Monitoramento Eletr.', description: 'Tornozeleira/CEME', icon: 'MapPin' },
  { id: 'transferencia', title: 'Transferência', description: 'Remoção entre unidades', icon: 'Truck' },
  { id: 'agravo', title: 'Agravo em Execução', description: 'Juízo de retratação', icon: 'Scale' },
  { id: 'reconsideracao', title: 'Reconsideração', description: 'Análise de pedido', icon: 'RotateCcw' },
  { id: 'medidaSeguranca', title: 'Medida de Segurança', description: 'Internação e tratamento', icon: 'Shield' },
  { id: 'outros', title: 'Outros', description: 'Matérias diversas', icon: 'BookOpen' },
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
    case 'TrendingUp': return TrendingUp;
    case 'TrendingDown': return TrendingDown;
    case 'Link': return Link;
    case 'Home': return Home;
    case 'Truck': return Truck;
    case 'Gift': return Gift;
    case 'Shield': return Shield;
    case 'BookOpen': return BookOpen;
    default: return FileText;
  }
};