// components/relics/RelicCard.tsx
import Link from 'next/link'
import { armory } from '../../data/armory'
import type { Relic } from '../../data/armory'

type RelicCardProps = {
  relic: Relic
}

export default function RelicCard({ relic }: RelicCardProps) {
  const relicIndex = armory.findIndex(r => r.slug === relic.slug) + 1
  const totalRelics = armory.length

  return (
    <article 
      id={relic.slug}
      className="bg-black border border-amber-600/30 rounded-lg overflow-hidden scroll-mt-24"
    >
      {/* PROGRESS INDICATOR */}
      <div className="px-6 pt-4 text-xs text-amber-500/50 uppercase tracking-widest">
        Relic {relicIndex} of {totalRelics}
      </div>

      {/* 1. 🎨 IMAGE */}
      {relic.image && (
        <img 
          src={relic.image} 
          alt={relic.relic}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6 space-y-6">
        {/* 2. 🎵 SONG + YOUTUBE EMBED */}
        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-1">Song</p>
          <h2 className="text-3xl font-bold text-amber-400 mb-4">{relic.song}</h2>
          
          {relic.youtube && (
            <div className="my-6">
              <details className="group">
                <summary className="bg-amber-600 hover:bg-amber-500 text-black px-4 py-2 rounded font-bold text-sm transition cursor-pointer list-none text-center inline-block">
                  ▶️ Enter Sound
                </summary>
                <div className="mt-4 aspect-video w-full bg-black rounded overflow-hidden border border-amber-600/30">
                  <iframe
                    className="w-full h-full"
                    src={relic.youtube.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') + '?rel=0&modestbranding=1'}
                    title={relic.song}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </details>
            </div>
          )}
        </div>

        {/* 3. 📜 SCRIPTURE */}
        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Scripture</p>
          <blockquote className="text-lg text-amber-100 leading-relaxed border-l-2 border-amber-600/50 pl-4 italic">
            "{relic.scripture}"
          </blockquote>
          <cite className="text-amber-400 text-sm block mt-2">— {relic.reference}</cite>
          
          {relic.supportingScripture && (
            <div className="mt-4 text-amber-100/70 text-sm">
              <p>"{relic.supportingScripture.verse}"</p>
              <cite className="text-amber-400/60">— {relic.supportingScripture.reference}</cite>
            </div>
          )}
        </div>

        {/* 4. 📜 DECLARATION - VISUAL SEPARATION */}
        <div className="bg-gradient-to-r from-amber-600/20 to-amber-600/5 border-l-4 border-amber-500 p-5 my-6 rounded-r">
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Declaration</p>
          <p className="text-2xl font-bold text-amber-300 leading-tight">{relic.declaration}</p>
        </div>

        {/* 5. 💬 REFLECTION */}
        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Reflection</p>
          <p className="text-amber-100/90 leading-relaxed">{relic.reflection}</p>
        </div>

        {/* 6. 📖 NEXT STEP */}
        <div className="pt-4 border-t border-amber-600/20">
          <Link 
            href={`/chronicles/${relic.slug}`}
            className="inline-block text-amber-500 hover:text-amber-300 text-sm font-bold transition"
          >
            📖 Read the chapter →
          </Link>
        </div>
      </div>
    </article>
  )
}
