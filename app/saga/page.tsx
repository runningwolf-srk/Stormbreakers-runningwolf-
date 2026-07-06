import { RELICS } from "@/data/relics";
import { VERSES } from "@/data/verses";
import Link from "next/link";

export default function SagaPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="text-amber-400 text-sm font-mono hover:text-amber-300">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif text-white mt-6 mb-4">THE SAGA</h1>
          <p className="text-amber-200/60 text-sm font-mono uppercase tracking-[0.3em]">
            8 Relics. 8 Chapters. 1 Testimony.
          </p>
        </div>

        {/* Chapter Timeline */}
        <div className="space-y-24">
          {RELICS.map((relic, index) => {
            const verse = VERSES.find(v => v.relic?.id === relic.id);
            
            return (
              <section key={relic.id} id={`chapter-${relic.id}`} className="relative">
                
                {/* Chapter Number */}
                <div className="absolute -left-4 md:-left-12 top-0 text-6xl md:text-8xl font-serif text-amber-500/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="border-l-2 border-amber-500/20 pl-8 md:pl-12">
                  
                  {/* Chapter Title */}
                  <h2 className="text-3xl md:text-4xl font-serif text-amber-400 mb-6">
                    Chapter {index + 1}: {relic.title}
                  </h2>
                  
                  {/* Relic Image */}
                  <img 
                    src={relic.image} 
                    alt={relic.imageAlt}
                    className="w-full max-w-md mb-8 border border-amber-500/30"
                  />
                  
                  {/* Scripture - Always First */}
                  {verse && (
                    <div className="mb-8 bg-amber-950/20 border-l-4 border-amber-500 p-6">
                      <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest mb-3">Scripture</p>
                      <p className="text-amber-100 text-lg font-serif italic leading-relaxed mb-3">
                        "{verse.text}"
                      </p>
                      <p className="text-amber-400 font-mono text-sm">— {verse.ref}</p>
                      <Link href={`/word#${verse.ref.toLowerCase().replace(' ', '-').replace(':', '-')}`} className="inline-block mt-4 text-amber-400 hover:text-amber-300 text-xs">
                        → Read in The Word
                      </Link>
                    </div>
                  )}
                  
                  {/* Declaration */}
                  <div className="mb-8">
                    <p className="text-amber-200/50 text-xs font-mono uppercase tracking-widest mb-2">Declaration</p>
                    <p className="text-amber-100/90 text-xl font-serif">{relic.declaration}</p>
                  </div>
                  
                  {/* Song Placeholder */}
                  <div className="mb-8 p-6 border border-amber-500/20 bg-black/50">
                    <p className="text-amber-200/50 text-xs font-mono uppercase tracking-widest mb-3">Song</p>
                    <p className="text-amber-300 text-lg">
                      {verse?.song?.title || "Coming Soon"}
                    </p>
                    <audio controls className="w-full mt-4 opacity-50">
                      <source src={`/songs/track-${String(relic.id).padStart(2, '0')}.mp3`} type="audio/mpeg" />
                    </audio>
                  </div>
                  
                  {/* Stormbreakers Reflection - Your Story */}
                  {verse && (
                    <div>
                      <p className="text-amber-200/50 text-xs font-mono uppercase tracking-widest mb-3">Stormbreakers Reflection</p>
                      <p className="text-amber-100/70 italic leading-relaxed">
                        {verse.reflection}
                      </p>
                      <p className="text-amber-500/40 text-xs mt-4">
                        — Jessy Marquez, Runningwolf
                      </p>
                    </div>
                  )}
                  
                </div>
              </section>
            );
          })}
        </div>

        {/* End Note */}
        <div className="text-center mt-24 pt-12 border-t border-amber-500/20">
          <p className="text-amber-200/40 text-sm font-mono uppercase tracking-[0.3em]">
            The journey continues in The Valley
          </p>
          <Link href="/valley" className="inline-block mt-4 text-amber-400 hover:text-amber-300">
            Enter World 2 →
          </Link>
        </div>

      </div>
    </main>
  )
                  }
