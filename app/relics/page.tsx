import Link from 'next/link'

const relics = [
  {
    id: 1,
    title: "HORN OF WAR",
    subtitle: "A BATTLE CRY. A LEGEND RISES.",
    image: "/images/horn-of-war.jpg"
  },
  {
    id: 2,
    title: "HEAVEN CALLING", 
    subtitle: "THE ASCENT BEGINS.",
    image: "/images/heaven-calling.jpg"
  },
  {
    id: 3,
    title: "IRON COLLIDE",
    subtitle: "KINGDOMS CLASH.",
    image: "/images/iron-collide.jpg"
  },
  {
    id: 4,
    title: "SPIRITUAL JOURNEY",
    subtitle: "THE PATH HOME.",
    image: "/images/spiritual-journey.jpg"
  },
  {
    id: 5,
    title: "BLOOD OF CROSS",
    subtitle: "THE COVENANT SEALED.",
    image: "/images/blood-of-cross.jpg"
  },
  {
    id: 6,
    title: "I'M ON FIRE",
    subtitle: "WILDFIRE SPREADS.",
    image: "/images/im-on-fire.jpg"
  }
]

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        <div className="flex justify-between text-sm text-zinc-500 mb-16 tracking-widest font-sans">
          <Link href="/" className="hover:text-amber-500">← STORMBREAKERS</Link>
          <span>RELICS</span>
          <div className="w-16"></div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-amber-500 mb-4">
            RELICS
          </h1>
          <p className="text-zinc-500 tracking-widest">
            Cinematic Worship • Viking Spirit • Holy Fire
          </p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-8"></div>
        </div>

        <div className="space-y-8">
          {relics.map((relic) => (
            <Link
              key={relic.id}
              href={`/relics/${relic.id}`}
              className="block border border-zinc-800 rounded-lg overflow-hidden hover:border-amber-500 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-red-900 via-zinc-900 to-black">
                {/* Replace with <img src={relic.image} /> when you upload images */}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-serif text-white mb-2">
                  {relic.title}
                </h2>
                <p className="text-zinc-400 text-sm tracking-wider">
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
