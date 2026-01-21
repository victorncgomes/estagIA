import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { MATTERS, getIcon } from '../constants';
import { useStore } from '../store';
import { MatterType } from '../types';

const ColumnMatters: React.FC = () => {
  const [search, setSearch] = useState('');
  const selectedMatter = useStore((state) => state.selectedMatter);
  const setMatter = useStore((state) => state.setMatter);

  const filteredMatters = MATTERS.filter((m) => 
    m.title.toLowerCase().includes(search.toLowerCase()) || 
    m.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-slate-50 border-r border-slate-200">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 bg-white">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          1. Matéria
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input 
            type="text"
            placeholder="Buscar matéria..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
        {filteredMatters.map((matter) => {
          const Icon = getIcon(matter.icon);
          const isSelected = selectedMatter === matter.id;

          return (
            <div 
              key={matter.id}
              onClick={() => setMatter(matter.id as MatterType)}
              className={`
                group relative p-3 rounded-lg border cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'bg-white border-accent shadow-sm ring-1 ring-accent' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'}
              `}
            >
              <div className="flex items-start gap-3">
                <div className={`
                  p-2 rounded-md transition-colors
                  ${isSelected ? 'bg-accent/10 text-accent' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}
                `}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold truncate ${isSelected ? 'text-accent' : 'text-slate-700'}`}>
                    {matter.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {matter.description}
                  </p>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filteredMatters.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-sm">
                Nenhuma matéria encontrada.
            </div>
        )}
      </div>
    </div>
  );
};

export default ColumnMatters;