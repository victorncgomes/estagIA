import React from 'react';
import { Gavel, Settings, Library, User, ToggleLeft } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex items-center gap-2">
        <div className="bg-primary p-2 rounded-lg text-white">
          <Gavel size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-primary">
          estag<span className="text-accent">IA</span>
        </h1>
        <span className="ml-2 text-xs font-medium text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full">
          v1.0 MVP
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary px-3 py-2 rounded-md hover:bg-slate-50 transition-colors">
            <ToggleLeft size={18} />
            Modo Batch
        </button>
        
        <div className="h-6 w-px bg-slate-200 mx-1"></div>

        <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary px-3 py-2 rounded-md hover:bg-slate-50 transition-colors">
          <Library size={18} />
          Minutas
        </button>

        <button className="text-slate-600 hover:text-primary p-2 rounded-md hover:bg-slate-50 transition-colors">
          <Settings size={20} />
        </button>

        <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
            <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-slate-800">Dr. Baltazar</p>
                <p className="text-xs text-slate-500">Juiz Titular</p>
            </div>
            <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 text-slate-500">
                <User size={20} />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;