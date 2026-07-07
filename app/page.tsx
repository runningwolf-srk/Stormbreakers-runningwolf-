// app/page.tsx
import Link from 'next/link'
import { armory } from '../data/armory'

export default function HomePage() {
  const featuredRelic = armory[0]
  const relicCount = armory.length

  return (
    <main className="min-h-screen bg-black text-amber-100">
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
              alt="Jessy Marquez - RunningWolf"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-amber-500/50 mb-4 object-cover shadow-lg shadow-amber-500/20"
            />
            <h2 className="text-amber-400 text-xl font-bold tracking-widest">
              JESSY MARQUEZ
            </h2>
            <p className="text-amber-500/70 text-sm uppercase tracking-widest">
              RUNNINGWOLF
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 tracking-widest mb-6">
            STORMBREAKERS
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/80 mb-4">
            Begin with a song. Follow the story. Stand on the Word.
          </p>
          <p className="text-amber-100/60 max-w-2xl mx-auto mb-12">
            {relicCount > 0
             ? `${relicCount} ${relicCount === 1? 'Relic' : 'Relics'} • One Mission. Every song anchored in Scripture, every testimony forged in fire, every act of worship for Jesus Christ.`
              : `One Mission. Every song anchored in Scripture, every testimony forged in fire, every act of worship for Jesus Christ.`
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/armory"
              className="bg-amber-600 hover:bg-amber-500 text-black px-8 py-3 rounded font-bold text-lg transition"
            >
              🎵 Enter The Armory
            </Link>
            <Link
              href="/word"
              className="border border-amber-600 hover:bg-amber-600/20 text-amber-400 px-8 py-3 rounded font-bold text-lg transition"
            >
              ✝️ Read The Word
            </Link>
          </div>
        </div>
      </section>

      {featuredRelic && (
        <section className="py-16 px-4 bg-gradient-to-b from-black to-amber-950/20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-4 text-center">
              Featured Relic
            </p>
            <div className="bg-black/50 border border-amber-600/30 rounded-lg overflow-hidden">
              {featuredRelic.image && (
                <img
                  src={featuredRelic.image}
                  alt={featuredRelic.relic}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6 text-center">
                <h3 className="text-3xl font-bold text-amber-400 mb-3">{featuredRelic.song}</h3>
                <blockquote className="text-amber-100/80 italic mb-4">
                  "{featuredRelic.scripture}"
                </blockquote>
                <cite className="text-amber-400 text-sm">— {featuredRelic.reference}</cite>
                <div className="mt-6">
                  <Link
                    href={`/armory#${featuredRelic.slug}`}
                    className="text-amber-500 hover:text-amber-300 font-bold"
                  >
                    Experience This Relic →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">The Armory</h3>
            <p className="text-amber-100/70">Experience the songs. Declarations. Worship.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">The Chronicles</h3>
            <p className="text-amber-100/70">Read the testimony. Stories forged in fire.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">✝️</div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">The Word</h3>
            <p className="text-amber-100/70">Stand on Scripture. The foundation of every relic.</p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-amber-600/20 text-center">
        <p className="text-amber-400 font-bold text-lg">
          Jesus Christ is the center of them all.
        </p>
      </footer>
    </main>
  )
}
