// components/RelicCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Relic } from '@/data/armory'

export default function RelicCard({ relic }: { relic: Relic }) {
  return (
    <article className="relic-card border border-amber-600/30 bg-black/60 backdrop-blur-sm">
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={relic.image} 
          alt={relic.relic} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-amber-400 tracking-wider">{relic.relic.toUpperCase()}</h2>
          <p className="text-sm text-amber-200/80">{relic.subtitle}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-amber-600/20 pb-4">
          <div>
            <p className="text-xs text-amber-500/70 uppercase tracking-widest">Song</p>
            <p className="text-lg text-amber-100">🎵 {relic.song}</p>
          </div>
          {relic.youtube && (
            <a 
              href={relic.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-500 text-black px-4 py-2 rounded font-bold text-sm transition"
            >
              ▶️ Enter Sound
            </a>
          )}
        </div>

        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Scripture</p>
          <blockquote className="border-l-2 border-amber-600 pl-4 italic text-amber-100/90">
            "{relic.scripture}"
          </blockquote>
          <cite className="text-amber-400/80 text-sm block mt-2">— {relic.reference}</cite>
          {relic.supportingScripture && (
            <div className="mt-4 text-sm">
              <p className="text-amber-100/70">"{relic.supportingScripture.verse}"</p>
              <cite className="text-amber-400/60">— {relic.supportingScripture.reference}</cite>
            </div>
          )}
        </div>

        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Declaration</p>
          <p className="text-lg font-bold text-amber-300">{relic.declaration}</p>
        </div>

        <div>
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Reflection</p>
          <p className="text-amber-100/80 text-sm whitespace-pre-line">{relic.reflection}</p>
        </div>

        <Link 
          href={`/chronicles/${relic.slug}`}
          className="block w-full text-center border border-amber-600/50 hover:bg-amber-600/10 text-amber-300 py-3 rounded transition"
        >
          📖 Read The Full Chapter
        </Link>
      </div>
    </article>
  )
}
