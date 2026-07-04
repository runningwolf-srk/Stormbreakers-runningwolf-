import Link from 'next/link'
import { notFound } from 'next/navigation'

const relics = {
  1: { name: "The First Flame", lore: "Where the call first burned in the darkness. The spark that became a storm." },
  2: { name: "Wolf's Fang", lore: "Cut through lies with truth. The bite that breaks chains." },
  3: { name: "Thunder Drum", lore: "The heartbeat of heaven. Every beat shakes foundations." },
  4: { name: "Spirit Mantle", lore: "Authority worn, not claimed. The covering of the King." },
  5: { name: "Storm Crown", lore: "Rulership through surrender. He reigns, we rise." },
  6: { name: "Running Wolf's Blade", lore: "Swift justice. Clean cuts. No wasted movement." },
  7: { name: "Chronicle Stone", lore: "Testimony carved in rock. What God did, He will do again." },
  8: { name: "Eternal Fire", lore: "It never goes out. The end that has no end." }
}

export default function RelicPage({ params }: { params: { id: string } }) {
  const relicId = parseInt(params.id)
  const relic = relics[relicId as keyof typeof relics]
  
  if (!relic) notFound()
  
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-amber-400 text-sm mb-2">RELIC {relicId}</div>
        <h1 className="text-4xl font-bold mb-6 text-amber-400">{relic.name}</h1>
        
        <div className="prose prose-invert text-lg">
          <p>{relic.lore}</p>
          <p className="text-amber-400 mt-8">By His call we rise.</p>
        </div>
        
        <div className="mt-12 flex gap-6">
          <Link href="/relics" className="text-amber-400 hover:underline">← All Relics</Link>
          <Link href="/" className="text-gray-400 hover:underline">Home</Link>
        </div>
      </div>
    </main>
  )
}
