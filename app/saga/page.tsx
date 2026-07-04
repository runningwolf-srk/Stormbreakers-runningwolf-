'use client'
import Link from 'next/link'

const relics = [
  { id: 1, name: "The First Flame" },
  { id: 2, name: "Wolf's Fang" },
  { id: 3, name: "Thunder Drum" },
  { id: 4, name: "Spirit Mantle" },
  { id: 5, name: "Storm Crown" },
  { id: 6, name: "Running Wolf's Blade" },
  { id: 7, name: "Chronicle Stone" },
  { id: 8, name: "Eternal Fire" },
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-amber-400">The Relics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relics.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/relics/${relic.id}`}
              className="block p-6 border border-amber-400/30 rounded-lg hover:bg-amber-400/10"
            >
              <div className="text-amber-400 text-sm">RELIC {relic.id}</div>
              <div className="text-xl font-bold mt-1">{relic.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
