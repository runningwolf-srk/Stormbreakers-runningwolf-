import { VERSES, THEMES } from "@/data/verses";
import Link from "next/link";

export default function WordPage() {
  const featuredVerse = VERSES.find(v => v.ref === "Habakkuk 2:2"); // Your commission
  
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-400 mb-4">THE WORD</h1>
          <p className="text-amber-200/60 text-sm font-mono uppercase tracking-[0.3em]">
            Scripture is the foundation. Stormbreakers points to it.
          </p>
        </div>

        {/* Featured Verse */}
        {featuredVerse && (
          <section className="mb-20 border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-black p-8 md:p-12">
            <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest mb-4">Featured Verse</p>
            <blockquote className="text-2xl md:text-3xl font-serif text-amber-100 leading-relaxed mb-6">
              "{featuredVerse.text}"
            </blockquote>
            <p className="text-amber-400 font-mono text-lg mb-8">— {featuredVerse.ref}</p>
            
            <div className="border-t border-amber-500/20 pt-6">
              <p className="text-amber-200/50 text-xs font-mono uppercase tracking-widest mb-2">Stormbreakers Reflection</p>
              <p className="text-amber-100/80 italic">{featuredVerse.reflection}</p>
              
              {featuredVerse.relic && (
                <Link href={`/armory#relic-${featuredVerse.relic.id}`} className="inline-block mt-4 text-amber-400 hover:text-amber-300 text-sm">
                  → View Relic: {featuredVerse.relic.title}
                </Link>
              )}
            </div>
          </section>
        )}

        {/* Browse by Theme */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-amber-400 mb-8 text-center">Browse by Theme</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {THEMES.map(theme => (
              <a 
                key={theme}
                href={`#theme-${theme.toLowerCase()}`}
                className="px-4 py-2 border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 transition-all text-sm font-mono uppercase tracking-wider"
              >
                {theme}
              </a>
            ))}
          </div>
        </section>

        {/* Browse by Song */}
        <section>
          <h2 className="text-2xl font-serif text-amber-400 mb-12 text-center">Browse by Song</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {VERSES.filter(v => v.song).map(verse => (
              <div key={verse.id} className="border border-amber-500/20 p-6 hover:border-amber-500/40 transition-all">
                
                {/* Scripture - Clearly Labeled */}
                <div className="mb-6">
                  <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest mb-3">Scripture</p>
                  <p className="text-amber-100 text-lg font-serif leading-relaxed mb-2">"{verse.text}"</p>
                  <p className="text-amber-400 font-mono">{verse.ref}</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-6"></div>

                {/* Stormbreakers Reflection - Clearly Labeled */}
                <div>
                  <p className="text-amber-200/50 text-xs font-mono uppercase tracking-widest mb-3">Stormbreakers Reflection</p>
                  <p className="text-amber-100/70 italic text-sm leading-relaxed mb-4">{verse.reflection}</p>
                  
                  <div className="flex gap-4 text-xs">
                    {verse.song && (
                      <Link href={`/saga/${verse.song.slug}`} className="text-amber-400 hover:text-amber-300">
                        → Song: {verse.song.title}
                      </Link>
                    )}
                    {verse.relic && (
                      <Link href={`/armory#relic-${verse.relic.id}`} className="text-amber-400 hover:text-amber-300">
                        → Relic: {verse.relic.title}
                      </Link>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
                  }
