import Link from 'next/link'

const relics = [
  { id: 1, title: "HORN OF WAR", tags: ["WARFARE", "HORN", "ALERT"] },
  { id: 2, title: "HEAVEN CALLING", tags: ["CALL", "DESTINY", "VOICE"] },
  { id: 3, title: "IRON COLLIDE", tags: ["BROTHERHOOD", "SHARPENING", "FRICTION"] },
  { id: 4, title: "SPIRITUAL JOURNEY", tags: ["JOURNEY", "PATH", "LIGHT"] },
  { id: 5, title: "BLOOD OF THE CROSS", tags: ["BLOOD", "CROSS", "REDEMPTION"] },
  { id: 6, title: "I'M ON FIRE", tags: ["FIRE", "ALTAR", "COMMISSION"] },
  { id: 7, title: "LORD OF LORDS", tags: ["KING", "VICTORY", "LAMB"] },
  { id: 8, title: "RESURRECTION POWER", tags: ["RESURRECTION", "POWER", "VICTORY"] },
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-bold mb-4">THE ARMORY</h1>
        <p className="text-zinc-400 mb-12">Eight relics have awakened</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relics.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/relics/${relic.id}`}
              className="border border-zinc-800 p-6 hover:border-amber-500 transition-colors group"
            >
              <div className="flex gap-2 mb-3">
                {relic.tags.map(tag => (
                  <span key={tag} className="text-xs border border-zinc-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold group-hover:text-amber-500 transition-colors">
                {relic.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
