import Link from 'next/link'

const RELICS = [
  {
    slug: 'horn-of-war',
    num: '01',
    title: 'HORN OF WAR',
    subtitle: 'Victory Has a Sound',
    cover: '/REPLACE_WITH_YOUR_HORN_OF_WAR_UUID.webp',
  },
  {
    slug: 'iron-collide',
    num: '02',
    title: 'IRON COLLIDE',
    subtitle: 'When Warriors Pray Together',
    cover: '/REPLACE_WITH_YOUR_IRON_COLLIDE_UUID.webp',
  },
  {
    slug: 'crown-of-thorns',
    num: '03',
    title: 'CROWN OF THORNS',
    subtitle: 'Beauty in the Bleeding',
    cover: '/REPLACE_WITH_YOUR_CROWN_OF_THORNS_UUID.webp',
  },
  {
    slug: 'lion-and-lamb',
    num: '04',
    title: 'LION & LAMB',
    subtitle: 'Meekness and Majesty',
    cover: '/REPLACE_WITH_YOUR_LION_AND_LAMB_UUID.webp',
  },
  {
    slug: 'blood-of-the-cross',
    num: '05',
    title: 'BLOOD OF THE CROSS',
    subtitle: 'The Altar Still Speaks',
    cover: '/REPLACE_WITH_YOUR_BLOOD_OF_THE_CROSS_UUID.webp',
  },
  {
    slug: 'heaven-calling',
    num: '06',
    title: 'HEAVEN IS CALLING',
    subtitle: 'The Voice That Finds Us',
    cover: '/REPLACE_WITH_YOUR_HEAVEN_CALLING_UUID.webp',
  },
  {
    slug: 'scars-that-preach',
    num: '07',
    title: 'SCARS THAT PREACH',
    subtitle: 'Wounds Become Weapons',
    cover: '/REPLACE_WITH_YOUR_SCARS_THAT_PREACH_UUID.webp',
  },
]

export default function HallOfRelics() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-4">HALL OF RELICS</h1>
          <p className="text-xl text-zinc-400">Seven songs. Seven weapons. One King.</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RELICS.map((relic) => (
            <Link 
              key={relic.slug} 
              href={`/music/${relic.slug}`}
              className="group block bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={relic.cover} 
                  alt={relic.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 text-yellow-400 font-black text-lg">
                  RELIC {relic.num}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-black mb-2 group-hover:text-yellow-400 transition-colors">
                  {relic.title}
                </h2>
                <p className="text-zinc-400">{relic.subtitle}</p>
                <div className="mt-4 text-yellow-400 font-bold flex items-center gap-2">
                  ENTER <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
