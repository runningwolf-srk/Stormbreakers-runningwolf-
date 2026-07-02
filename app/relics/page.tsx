import Link from 'next/link'

const relics = [
  { id: 1, title: "HORN OF WAR", subtitle: "A BATTLE CRY. A LEGEND RISES.", tags: ["WARFARE", "HORN", "ALERT"] },
  { id: 2, title: "HEAVEN CALLING", subtitle: "THE ASCENT BEGINS.", tags: ["CALL", "DESTINY", "VOICE"] },
  { id: 3, title: "IRON COLLIDE", subtitle: "KINGDOMS CLASH.", tags: ["BROTHERHOOD", "SHARPENING", "FRICTION"] },
  { id: 4, title: "SPIRITUAL JOURNEY", subtitle: "THE PATH HOME.", tags: ["JOURNEY", "PATH", "LIGHT"] },
  { id: 5, title: "BLOOD OF THE CROSS", subtitle: "THE COVENANT SEALED.", tags: ["BLOOD", "CROSS", "REDEMPTION"] },
  { id: 6, title: "I'M ON FIRE", subtitle: "WILDFIRE SPREADS.", tags: ["FIRE", "ALTAR", "COMMISSION"] },
  { id: 7, title: "LORD OF LORDS", subtitle: "THE KING RETURNS.", tags: ["KING", "VICTORY", "LAMB"] },
  { id: 8, title: "RESURRECTION POWER", subtitle: "DEATH DEFEATED.", tags: ["RESURRECTION", "POWER", "VICTORY"] },
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-amber-500 text-sm tracking-widest mb-2">STORMBREAKERS</p>
          <p className="text-zinc-400 text-sm tracking-widest mb-6">RELICS</p>
          <p className="text-zinc-500 text-sm">Cinematic Worship • Viking Spirit • Holy Fire</p>
        </div>
        
        <div className="space-y-12">
          {relics.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/relics/${relic.id}`}
              className="block border-b border-zinc-800 pb-12 hover:border-amber-500 transition-colors group"
            >
              <div className="flex gap-2 mb-4 flex-wrap">
                {relic.tags.map(tag => (
                  <span key={tag} className="text-xs border border-zinc-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                {relic.title}
              </h2>
              <p className="text-zinc-400 text-lg">
                {relic.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
