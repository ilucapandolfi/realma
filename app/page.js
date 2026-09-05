'use client';
import { useEffect, useState } from 'react';
import Medusa from "@medusa-js/medusa-js";

const medusa = new Medusa({ baseUrl: "http://<IP_O_DOMINIO_DEL_SERVER>:9000", maxRetries: 3 });

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    medusa.products.list()
      .then(({ products }) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel recupero prodotti da Medusa:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800">
      
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900 px-6 h-16 flex items-center justify-between">
        <div className="font-bold tracking-tight text-lg text-white">realma</div>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="http://<IP_O_DOMINIO_DEL_SERVER>:7000/app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
            Medusa Admin
          </a>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 cursor-pointer"></div>
        </nav>
      </header>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        
        {loading ? (
          <div className="text-center text-zinc-500 py-20 text-sm">Caricamento contenuti da Medusa...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-zinc-500 py-20 text-sm">
            Nessun contenuto trovato. Accedi a <a href="http://<IP_O_DOMINIO_DEL_SERVER>:7000/app" className="text-zinc-300 underline">Medusa Admin</a> per aggiungere il primo prodotto/media.
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => {
              // Sfruttiamo i metadati o le tag di Medusa per decidere se la card è 16:9 o 9:16
              const isVertical = product.tags?.some(t => t.value === '9:16');
              
              return (
                <div key={product.id} className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-all duration-300 flex flex-col">
                  <div className={`w-full overflow-hidden bg-zinc-900 ${isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'}`}>
                    <img src={product.thumbnail || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"} 
                         alt={product.title} 
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-zinc-200">{product.title}</h3>
                      <p className="text-xs text-zinc-500 mt-0.5">{product.subtitle || "Realma Creator"}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
