import React from 'react';
import Header from './components/Header';
import ColumnMatters from './components/ColumnMatters';
import ColumnInputs from './components/ColumnInputs';
import ColumnGuidance from './components/ColumnGuidance';
import ColumnOutput from './components/ColumnOutput';

function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 text-slate-900 font-sans">
      <Header />
      
      {/* Main Workspace - 4 Column Grid */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Coluna 1: Matéria (15%) */}
        <div className="w-[15%] min-w-[200px] h-full hidden lg:block">
          <ColumnMatters />
        </div>

        {/* Coluna 2: Insumos (35%) */}
        <div className="w-full lg:w-[35%] h-full flex-1 min-w-[300px]">
          <ColumnInputs />
        </div>

        {/* Coluna 3: Orientações (20%) */}
        <div className="w-[20%] min-w-[250px] h-full hidden xl:block">
          <ColumnGuidance />
        </div>

        {/* Coluna 4: Saída (30%) */}
        <div className="w-full lg:w-[30%] h-full flex-1 min-w-[300px]">
          <ColumnOutput />
        </div>

      </main>
      
      {/* Mobile/Tablet Fallback warning (Simple approach for MVP as per rigorous desktop specs) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-amber-100 text-amber-800 text-xs p-2 text-center border-t border-amber-200">
        Layout otimizado para Desktop. Algumas colunas estão ocultas.
      </div>
    </div>
  );
}

export default App;