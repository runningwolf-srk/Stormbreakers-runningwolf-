import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const relics = {
  1: { name: "The First Flame", image: "/relic-1-healer.png", lore: "JESUS IS AN HEALER. Where the call first burned in the darkness. By His wounds we are healed." },
  2: { name: "Wolf's Fang", image: "/relic-2-horn.png", lore: "HORN OF WAR. Cut through lies with truth. A battle cry. A legend rises." },
  3: { name: "Thunder Drum", image: "/relic-3-heaven.png", lore: "HEAVEN CALLING. The heartbeat of heaven. A worship anthem." },
  4: { name: "Spirit Mantle", image: "/relic-4-scars.png", lore: "SCARS THAT PREACH. Born through the fire. Christian Rock testimony." },
  5: { name: "Storm Crown", image: "/relic-5-journey.png", lore: "SPIRITUAL JOURNEY. A journey to His presence. A worship album." },
  6: { name: "Running Wolf's Blade", image: "/relic-6-iron.png", lore: "IRON COLLIDE. An epic hard rock anthem. Swift justice. Clean cuts." },
  7: { name: "Chronicle Stone", image: "/relic-7-blood.png", lore: "BLOOD OF CROSS. By His wounds we are healed. Testimony carved in rock." },
  8: { name: "Eternal Fire", image: "/relic-8-lord.png", lore: "LORD OF LORDS. A spiritual anthem. It never goes out." }
}

export default function RelicPage({ params }: { params: { id: string } }) {
  const relicId = parseInt(params.id)
  const relic = relics[relicId as keyof typeof relics]
  
  if (!relic) notFound()
  
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-amber-400 text-sm mb-2">RELIC {relicId}</div>
        <h1 className="text-4xl font-bold mb-6 text-amber-400">{relic.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image 
              src={relic.image} 
              alt={relic.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-invert text-lg">
            <p>{relic.lore}</p>
            <p className="text-amber-400 mt-8">By His call we rise.</p>
          </div>
        </div>
        
        <div className="mt-12 flex gap-6">
          <Link href="/relics" className="text-amber-400 hover:underline">← All Relics</Link>
          <Link href="/" className="text-gray-400 hover:underline">Home</Link>
        </div>
      </div>
    </main>
  )
}
