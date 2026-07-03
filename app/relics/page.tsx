import Link from 'next/link'

const relics = [
  { id: 1, title: "HORN OF WAR", subtitle: "A BATTLE CRY. A LEGEND RISES." },
  { id: 2, title: "HEAVEN CALLING", subtitle: "THE ASCENT BEGINS." },
  { id: 3, title: "IRON COLLIDE", subtitle: "KINGDOMS CLASH." },
  { id: 4, title: "SPIRITUAL JOURNEY", subtitle: "THE PATH HOME." },
  { id: 5, title: "BLOOD OF THE CROSS", subtitle: "THE COVENANT SEALED." },
  { id: 6, title: "I'M ON FIRE", subtitle: "WILDFIRE SPREADS." },
  { id: 7, title: "LORD OF LORDS", subtitle: "THE KING RETURNS." },
  { id: 8, title: "RESURRECTION POWER", subtitle: "DEATH DEFEATED." },
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-amber-500 hover:text-amber-400 text-sm">
            ← STORMBREAKERS
          </Link>
        </div>
        
        <div className="mb-12 text-center">
          <h1 className="text-amber-500 text-6xl font-bold mb-4">RELICS</h1>
          <p className="text-zinc-400 text-sm">Cinematic Worship • Viking Spirit • Holy Fire</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-6"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {relics.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/relics/${relic.id}`}
              className="block bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-500 transition-all duration-300 hover:bg-zinc-900 group"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-amber-500 transition-colors">
                  {relic.title}
                </h2>
                <p className="text-zinc-400 text-sm">
                  {relic.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
