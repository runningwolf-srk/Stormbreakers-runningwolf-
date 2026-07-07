// app/armory/page.tsx
import { armory } from '@/data/armory'
import RelicCard from '@/components/RelicCard'

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE ARMORY</h1>
          <p className="text-amber-200/70">16 RELICS • 16 SONGS • ONE KING</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {armory.map((relic) => (
            <RelicCard key={relic.slug} relic={relic} />
          ))}
        </div>
      </div>
    </main>
  )
}
