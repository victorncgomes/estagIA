import React, { useState, useEffect } from 'react';
import { Settings, Library, User, ToggleLeft, Database, Check, ChevronDown, Scale, BookOpen, Gavel, ScrollText, GraduationCap, BarChart3 } from 'lucide-react';
import { getProvidersStatus, getAvailableProviders } from '../services/ai';
import { useStore } from '../store';
import MinutasModal from './modals/MinutasModal';
import JurisprudenciaModal from './modals/JurisprudenciaModal';
import BancoConhecimentoModal from './modals/BancoConhecimentoModal';
import CostDashboard from './admin/CostDashboard';
import { getTotalJurisprudencias } from '../services/jurisprudencia';
import { getIndexStats, type IndexStats } from '../services/knowledge/indexService';
import { getTemplateStats } from '../services/templateService';

const Header: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showMinutas, setShowMinutas] = useState(false);
  const [showMinutasModal, setShowMinutasModal] = useState(false);
  const [showJurisprudenciaModal, setShowJurisprudenciaModal] = useState(false);
  const [showBancoModal, setShowBancoModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCostDashboard, setShowCostDashboard] = useState(false);
  const [stats, setStats] = useState<IndexStats | null>(null);

  const jurisprudenciaCount = getTotalJurisprudencias();
  const templateStats = getTemplateStats();

  const providersStatus = getProvidersStatus();
  const availableProviders = getAvailableProviders();
  const { batchMode, setBatchMode } = useStore();

  // Carregar estatísticas ao montar o componente
  useEffect(() => {
    getIndexStats().then(setStats);
  }, []);

  const enabledCount = availableProviders.length;

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex items-center gap-3">
        <img
          src="/positive.svg"
          alt="estagIA"
          className="h-8"
        />
        <span className="text-xs font-medium text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full">
          v0.2.22
        </span>

        {/* Status APIs */}
        <div className={`text-xs px-2 py-0.5 rounded-full font-medium ${enabledCount > 0
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-amber-100 text-amber-700'
          }`}>
          {enabledCount > 0 ? `${enabledCount} IAs` : 'Sem APIs'}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Modo Batch Toggle */}
        <button
          onClick={() => setBatchMode(!batchMode)}
          className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md transition-colors ${batchMode
            ? 'bg-accent/10 text-accent'
            : 'text-slate-600 hover:text-primary hover:bg-slate-50'
            }`}
        >
          <ToggleLeft size={18} className={batchMode ? 'text-accent' : ''} />
          Modo Batch
          {batchMode && <Check size={14} className="text-accent" />}
        </button>

        <div className="h-6 w-px bg-slate-200 mx-1"></div>

        {/* Base de Conhecimento - Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setShowMinutas(!showMinutas)}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
          >
            <Database size={18} />
            Base de Conhecimento
            <ChevronDown size={14} />
          </button>

          {showMinutas && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50">
              <button
                onClick={() => { setShowMinutasModal(true); setShowMinutas(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Library size={16} className="text-primary" />
                <span className="flex-1 text-left">Modelos de Decisão</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">{templateStats.total}</span>
              </button>
              <button
                onClick={() => { setShowBancoModal(true); setShowMinutas(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <ScrollText size={16} className="text-emerald-600" />
                <span className="flex-1 text-left">Legislação</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">{stats?.legislacao.total || 0}</span>
              </button>
              <button
                onClick={() => { setShowBancoModal(true); setShowMinutas(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <GraduationCap size={16} className="text-violet-600" />
                <span className="flex-1 text-left">Doutrina</span>
                <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-bold">{stats?.doutrina.total || 0}</span>
              </button>
              <button
                onClick={() => { setShowJurisprudenciaModal(true); setShowMinutas(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Gavel size={16} className="text-amber-600" />
                <span className="flex-1 text-left">Jurisprudência</span>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">{jurisprudenciaCount}</span>
              </button>
            </div>
          )}
        </div>

        {/* Admin Dashboard Button */}
        <button
          onClick={() => setShowCostDashboard(true)}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-600 px-3 py-2 rounded-md hover:bg-purple-50 transition-colors"
          title="Dashboard Admin"
        >
          <BarChart3 size={18} />
          <span className="hidden lg:inline">Admin</span>
        </button>

        {/* Settings - Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-slate-600 hover:text-primary p-2 rounded-md hover:bg-slate-50 transition-colors"
          >
            <Settings size={20} />
          </button>

          {showSettings && (
            <div className="absolute top-full right-0 mt-1 w-72 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
              <div className="px-3 py-2 text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                Configurações de IA
              </div>

              <div className="p-3 space-y-2">
                {Object.entries(providersStatus).map(([provider, status]) => (
                  <div key={provider} className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${status.enabled ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                      <span className="text-sm font-medium capitalize">{provider}</span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {status.enabled ? status.model : 'Não configurado'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 px-3 py-2 mt-1">
                <p className="text-xs text-slate-400">
                  Configure as chaves no arquivo .env
                </p>
              </div>
            </div>
          )}
        </div>

        {/* User Profile - Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200 hover:bg-slate-50 rounded-md pr-2 py-1 transition-colors"
          >
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-slate-800">Dr. Baltazar</p>
              <p className="text-xs text-slate-500">Juiz Titular</p>
            </div>
            <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 text-slate-500">
              <User size={20} />
            </div>
          </button>

          {showProfile && (
            <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="font-semibold text-slate-800">Dr. Baltazar</p>
                <p className="text-sm text-slate-500">Juiz Titular</p>
                <p className="text-xs text-slate-400 mt-1">1ª Vara de Execução Penal - TJRN</p>
              </div>

              <div className="p-2">
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md">
                  Editar Perfil
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md">
                  Meus Estilos
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md">
                  Preferências
                </button>
              </div>

              <div className="border-t border-slate-100 p-2">
                <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
                  Sair
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showSettings || showProfile || showMinutas) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowSettings(false);
            setShowProfile(false);
            setShowMinutas(false);
          }}
        />
      )}

      {/* Modal de Minutas */}
      <MinutasModal
        isOpen={showMinutasModal}
        onClose={() => setShowMinutasModal(false)}
      />

      {/* Modal de Jurisprudência */}
      <JurisprudenciaModal
        isOpen={showJurisprudenciaModal}
        onClose={() => setShowJurisprudenciaModal(false)}
      />

      {/* Modal Banco de Conhecimento (Legislação e Doutrina) */}
      <BancoConhecimentoModal
        isOpen={showBancoModal}
        onClose={() => setShowBancoModal(false)}
      />

      {/* Dashboard de Custos Admin */}
      {showCostDashboard && (
        <CostDashboard onClose={() => setShowCostDashboard(false)} />
      )}
    </header>
  );
};

export default Header;