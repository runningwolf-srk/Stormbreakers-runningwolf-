'use client'
import Link from 'next/link'

// STORMBREAKERS RELICS - FIXED VERSION
// No more broken imports. No more wrong clicks.

const relics = [
  { id: 1, name: "The First Flame", desc: "The spark that started the storm" },
  { id: 2, name: "Wolf's Fang", desc: "Tooth of the alpha that guides" },
  { id: 3, name: "Thunder Drum", desc: "Beats with the heart of battle" },
  { id: 4, name: "Spirit Mantle", desc: "Worn by those who walk between" },
  { id: 5, name: "Storm Crown", desc: "Only the worthy can bear its weight" },
  { id: 6, name: "Running Wolf's Blade", desc: "Cuts through lies and fear" },
  { id: 7, name: "Chronicle Stone", desc: "Holds the memory of all battles" },
  { id: 8, name: "Eternal Fire", desc: "The flame that never dies" },
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">The Relics</h1>
        <p className="text-gray-400 mb-8">Eight sacred items. Eight powers. Choose wisely.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relics.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/relics/${relic.id}`}
              className="block p-6 border border-amber-400/30 rounded-lg hover:bg-amber-400/10 hover:border-amber-400 transition-all"
            >
              <div className="text-amber-400 text-sm font-mono">RELIC {relic.id}</div>
              <div className="text-xl font-bold mt-1">{relic.name}</div>
              <div className="text-gray-400 mt-2">{relic.desc}</div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-amber-400 hover:underline">
            ← Return to Stormbreakers
          </Link>
        </div>
      </div>
    </main>
  )
}
