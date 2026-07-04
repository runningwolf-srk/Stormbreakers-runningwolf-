'use client'
import Link from 'next/link'
import Image from 'next/image'

const relics = [
  { id: 1, name: "The First Flame", image: "/relic-1-healer.png" },
  { id: 2, name: "Wolf's Fang", image: "/relic-2-horn.png" },
  { id: 3, name: "Thunder Drum", image: "/relic-3-heaven.png" },
  { id: 4, name: "Spirit Mantle", image: "/relic-4-scars.png" },
  { id: 5, name: "Storm Crown", image: "/relic-5-journey.png" },
  { id: 6, name: "Running Wolf's Blade", image: "/relic-6-iron.png" },
  { id: 7, name: "Chronicle Stone", image: "/relic-7-blood.png" },
  { id: 8, name: "Eternal Fire", image: "/relic-8-lord.png" },
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">The Relics</h1>
        <p className="text-gray-400 mb-8">Eight weapons. Eight declarations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relics.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/relics/${relic.id}`}
              className="group block border-amber-400/30 rounded-lg overflow-hidden hover:border-amber-400 transition-all"
            >
              <div className="aspect-square relative">
                <Image 
                  src={relic.image} 
                  alt={relic.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-zinc-900">
                <div className="text-amber-400 text-xs">RELIC {relic.id}</div>
                <div className="text-lg font-bold mt-1">{relic.name}</div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-amber-400 hover:underline">← Return to Stormbreakers</Link>
        </div>
      </div>
    </main>
  )
}
