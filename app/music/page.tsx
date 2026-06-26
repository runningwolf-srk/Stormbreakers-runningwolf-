import Link from 'next/link';

const relics = [
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    hook: 'When every other voice falls silent, heaven still speaks.',
    bgImage: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e'
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    hook: 'Faith sharpened in the fire of resistance.',
    bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    hook: 'Where the battlefield becomes an altar.',
    bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    hook: 'Mercy written in sacrifice. Hope carried through suffering.',
    bgImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334'
  },
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    hook: 'The call to stand before the battle begins.',
    bgImage: 'https://images.unsplash.com/photo-1519563459339-59bb6d7f5e5e'
  },
  { 
    slug: 'im-on-fire', 
    title: 'I\'m On Fire', 
    hook: 'Holy fire cannot be contained. It must be released.',
    bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23'
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    hook: 'Survival was never the goal. Purpose was.',
    bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
  },
];

export default function HallOfRelics() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
          HALL OF RELICS
        </h1>
        <p className="text-xl text-zinc-400 mb-16 italic">
          A cinematic worship mythology database
        </p>
        
        <div className="grid gap-8">
          {relics.map((relic) => (
            <Link 
              key={relic.slug}
              href={`/music/${relic.slug}`}
              className="group relative block h-48 rounded-lg overflow-hidden border border-zinc-800 hover:border-amber-600 transition-all"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${relic.bgImage})` }}
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all" />
              <div className="relative z-10 h-full flex flex-col justify-center p-8 text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Cinzel, serif' }}>
                  {relic.title}
                </h2>
                <p className="text-zinc-300 italic text-lg">
                  {relic.hook}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            Seven Relics. One Kingdom.
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}
