import { armory } from '../../data/armory'
import Link from 'next/link'

export const metadata = {
  title: 'The Armory | Stormbreakers',
  description: 'Our worship declares. Every song is a weapon. Every weapon is forged in The Word.',
}

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE ARMORY</h1>
          <p className="text-xl text-amber-200 mb-2">Our worship declares.</p>
          <p className="text-amber-200/70 italic">
            Every song is a weapon. Every weapon is forged in The Word.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {armory.map((relic) => (
            <div
              key={relic.slug}
              id={relic.slug}
              className="border border-amber-400/20 p-6 hover:border-amber-400/60 hover:bg-amber-400/5 transition flex flex-col"
            >
              {/* 1. Song Title */}
              <h2 className="text-2xl font-bold text-amber-200 mb-2">{relic.song}</h2>
              
              {/* 2. Key Scripture */}
              <p className="text-amber-400 text-sm mb-4 font-semibold">{relic.scripture}</p>

              {/* 3. Declaration - one sentence */}
              {relic.declaration && (
                <p className="text-amber-100 italic mb-6 border-l-2 border-amber-400/30 pl-3">
                  "{relic.declaration}"
                </p>
              )}
              
              {/* 4. Status / Content - this is the only part that changes */}
              <div className="flex-1 flex flex-col">
                {relic.reflection? (
                  <div className="flex-1">
                    <p className="text-amber-100/80 mb-4">{relic.reflection}</p>
                    
                    {relic.testimony && (
                      <div className="mb-4">
                        <h3 className="text-amber-400 font-semibold text-sm mb-1">Testimony</h3>
                        <p className="text-amber-200/70 text-sm italic">{relic.testimony}</p>
                      </div>
                    )}

                    <div className="flex gap-4 mt-6">
                      {relic.youtube && (
                        <Link href={relic.youtube} target="_blank" className="text-amber-400 hover:text-amber-300 text-sm">
                          YouTube
                        </Link>
                      )}
                      {relic.spotify && (
                        <Link href={relic.spotify} target="_blank" className="text-amber-400 hover:text-amber-300 text-sm">
                          Spotify
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <p className="text-amber-200/60 italic">This relic is being forged.</p>
                  </div>
                )}
              </div>

              {/* 5. Closing line - always present */}
              <div className="border-t border-amber-400/20 pt-4 mt-6">
                <p className="text-sm text-amber-400/80 font-semibold">
                  Forged in Scripture. Revealed in worship.
                </p>
                {!relic.reflection && (
                  <p className="text-xs mt-1 text-amber-200/40">Coming soon.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
