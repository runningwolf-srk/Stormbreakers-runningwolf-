import Link from 'next/link'
import { notFound } from 'next/navigation'

// STORMBREAKERS RELICS DATA
// This is the single source of truth. Add your real lore here later.
const relicsData = {
  '1': { 
    name: "The First Flame", 
    story: "The spark that started the storm. Before the wolf ran, before the crown was forged, there was only fire. This flame was struck in the secret place when worship became war.",
    verse: "Isaiah 6:6-7"
  },
  '2': { 
    name: "Wolf's Fang", 
    story: "Tooth of the alpha that guides. A reminder that the shepherd became a warrior. The fang cuts through deception and leads the pack through the dark.",
    verse: "John 10:11"
  },
  '3': { 
    name: "Thunder Drum", 
    story: "Beats with the heart of battle. Every strike is a declaration. When this drum sounds, strongholds shake and the King advances.",
    verse: "Joshua 6:20"
  },
  '4': { 
    name: "Spirit Mantle", 
    story: "Worn by those who walk between realms. Heavy with glory, light with grace. It marks you as sent, not just saved.",
    verse: "2 Kings 2:13-14"
  },
  '5': { 
    name: "Storm Crown", 
    story: "Only the worthy can bear its weight. Not worn for status, but for sacrifice. The crown is won in the secret place before it's seen in battle.",
    verse: "Revelation 4:10"
  },
  '6': { 
    name: "Running Wolf's Blade", 
    story: "Cuts through lies and fear. Forged in fasting, sharpened in worship. This blade doesn't miss because it's guided by the Spirit.",
    verse: "Hebrews 4:12"
  },
  '7': { 
    name: "Chronicle Stone", 
    story: "Holds the memory of all battles. Every scar, every victory, every time God showed up. We raise this stone so we never forget.",
    verse: "Joshua 4:6-7"
  },
  '8': { 
    name: "Eternal Fire", 
    story: "The flame that never dies. It burned on the altar before we were born and will burn after we’re gone. We just carry it for a moment.",
    verse: "Leviticus 6:13"
  }
}

type RelicKey = keyof typeof relicsData

export default function RelicPage({ params }: { params: { id: string } }) {
  const relicId = params.id as RelicKey
  const relic = relicsData[relicId]

  // If someone tries /relics/9 or /relics/abc, show 404
  if (!relic) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/relics" className="text-amber-400 hover:underline">
            ← All Relics
          </Link>
        </div>

        <div className="text-amber-400 text-sm font-mono mb-2">
          RELIC {relicId}
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-white">
          {relic.name}
        </h1>
        
        <div className="prose prose-invert prose-lg prose-p:text-gray-300">
          <p className="text-xl leading-relaxed">
            {relic.story}
          </p>
        </div>

        <div className="mt-8 p-4 border-l-4 border-amber-400 bg-amber-400/10">
          <p className="text-amber-400 font-mono text-sm">
            {relic.verse}
          </p>
        </div>

        <div className="mt-12 flex gap-4">
          <Link 
            href="/relics" 
            className="px-6 py-3 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400/10 transition-all"
          >
            ← Back to Relics
          </Link>
          <Link 
            href="/" 
            className="px-6 py-3 bg-amber-400 text-black font-bold rounded-lg hover:bg-amber-300 transition-all"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  )
}

// This tells Next.js which IDs exist at build time
export async function generateStaticParams() {
  return Object.keys(relicsData).map((id) => ({
    id: id,
  }))
    }
