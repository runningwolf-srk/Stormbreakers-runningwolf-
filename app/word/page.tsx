// app/word/page.tsx
import { armory } from '../../data/armory'
import Link from 'next/link'

export default function WordPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE WORD</h1>
          <p className="text-amber-200/70">Every Scripture that anchors the 16 Relics</p>
          <p className="text-amber-200/50 text-sm mt-4 italic">
            This is Scripture. The final authority. The sword of the Spirit.
          </p>
        </header>

        <div className="space-y-8">
          {armory.map((relic, index) => (
            <article key={relic.slug} className="border-l-2 border-amber-600/30 pl-6 py-4">
              <div className="text-xs text-amber-500/50 uppercase tracking-widest mb-2">
                Relic {index + 1} • {relic.relic}
              </div>
              
              <blockquote className="text-xl text-amber-100 leading-relaxed mb-3">
                "{relic.scripture}"
              </blockquote>
              
              <cite className="text-amber-400 text-sm block mb-2">— {relic.reference}</cite>
              
              {relic.supportingScripture && (
                <div className="mt-4 text-amber-100/70 text-sm">
                  <p>"{relic.supportingScripture.verse}"</p>
                  <cite className="text-amber-400/60">— {relic.supportingScripture.reference}</cite>
                </div>
              )}

              <Link 
                href={`/armory#${relic.slug}`}
                className="inline-block mt-4 text-amber-500 hover:text-amber-300 text-sm transition"
              >
                → View Relic
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
