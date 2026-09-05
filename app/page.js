export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800">
      
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900 px-6 h-16 flex items-center justify-between">
        <div className="font-bold tracking-tight text-lg text-white">realma</div>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <button className="hover:text-white transition-colors">Esplora</button>
          <button className="hover:text-white transition-colors">Libreria</button>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 cursor-pointer"></div>
        </nav>
      </header>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        
        {/* Grid: 2 colonne su mobile, 3 su desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card Verticale (9:16) */}
          <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-all duration-300 flex flex-col">
            <div className="aspect-[9/16] w-full overflow-hidden bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                   alt="Visual" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-zinc-200">Visual Concept</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Creator</p>
              </div>
            </div>
          </div>

          {/* Card Orizzontale (16:9) */}
          <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-all duration-300 flex flex-col">
            <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop" 
                   alt="Visual" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-zinc-200">Design System</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Creator</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
