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
        <div className="mb-4">
          <Link href="/" className="text-zinc-400 hover:text-white text-sm">← Back to Home</Link>
        </div>
        
        <div className="mb-12 text-center">
          <p className="text-zinc-400 text-sm tracking-widest mb-2">RELICS</p>
          <h1 className="text-amber-500 text-5xl font-bold mb-4">STORMBREAKERS</h1>
          <p className="text-zinc-500 text-sm">Cinematic Worship • Viking Spirit • Holy Fire</p>
        </div>
        
        <div className="grid gap-8">
          {relics.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/relics/${relic.id}`}
              className="block border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-500 transition-colors group"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                  {relic.title}
                </h2>
                <p className="text-zinc-400">
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
