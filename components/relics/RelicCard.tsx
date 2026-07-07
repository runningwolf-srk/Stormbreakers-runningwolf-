// components/relics/RelicCard.tsx
import Link from 'next/link'
import { armory } from '../../data/armory'
import type { Relic } from '../../data/armory'

type RelicCardProps = { // <-- Fixed typo: Props not Piops
  relic: Relic
}

export default function RelicCard({ relic }: RelicCardProps) {
  const relicIndex = armory.findIndex(r => r.slug === relic.slug) + 1
  const totalRelics = armory.length
  const nextIndex = relicIndex % totalRelics
  const nextRelic = armory[nextIndex]

  return (
    <article
      id={relic.slug}
      className="bg-black border border-amber-600/30 rounded-lg overflow-hidden scroll-mt-24 mx-2 md:mx-0"
    >
      <div className="px-6 pt-4 flex justify-between text-xs text-amber-500/50 uppercase tracking-widest">
        <span>Relic {relicIndex} of {totalRelics}</span>
        {relic.readingTime && <span>{relic.readingTime}</span>}
      </div>

      {relic.image && (
        <img
          src={relic.image}
          alt={relic.relic}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6 space-y-6">
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
                    src={`https://www.youtube.com/embed/${relic.youtube.split('/').pop()?.split('?')[0]}?rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3`}
                    title={relic.song}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </details>
            </div>
          )}
        </div>

        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Scripture</p>
          <blockquote className="scripture-quote border-l-2 border-amber-600/50 pl-4 italic">
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

        {relic.relatedScriptures && relic.relatedScriptures.length > 0 && (
          <div>
            <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-3">Related Scriptures</p>
            <div className="space-y-3">
              {relic.relatedScriptures.map((s, i) => (
                <div key={i} className="text-amber-100/70 text-sm border-l border-amber-600/30 pl-3">
                  <p>"{s.verse}"</p>
                  <cite className="text-amber-400/60">— {s.reference}</cite>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-amber-600/20 to-amber-600/5 border-l-4 border-amber-500 p-5 my-6 rounded-r">
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Declaration</p>
          <p className="text-2xl font-bold text-amber-300 leading-tight">{relic.declaration}</p>
        </div>

        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Reflection</p>
          <p className="reflection-text">{relic.reflection}</p>
        </div>

        <div className="pt-4 border-t border-amber-600/20 flex flex-wrap gap-4">
          <Link
            href={`/chronicles/${relic.slug}`}
            className="inline-block text-amber-500 hover:text-amber-300 text-sm font-bold transition"
          >
            📖 Read the chapter →
          </Link>
          <Link
            href={`/armory#${nextRelic.slug}`}
            className="inline-block text-amber-500/70 hover:text-amber-300 text-sm transition"
          >
            Next: {nextRelic.song} →
          </Link>
        </div>
      </div>
    </article>
  )
}
