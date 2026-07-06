import Link from "next/link";
import { RELICS } from "@/data/relics";

export default function BiblePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <Link href="/" className="text-amber-400 text-sm font-mono hover:text-amber-300">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif text-amber-400 mt-6 mb-4">THE BIBLE</h1>
          <p className="text-amber-200/60 text-sm font-mono uppercase tracking-[0.3em]">
            16 Verses. 1 Foundation.
          </p>
        </div>

        <div className="space-y-8">
          {RELICS.map((relic) => (
            <div 
              key={relic.id} 
              id={relic.verse.ref.toLowerCase().replace(/ /g, '-').replace(':', '-')}
              className="border-l-4 border-amber-500/50 pl-6 py-4 bg-amber-950/10"
            >
              <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest mb-2">
                {relic.world.toUpperCase()} • {relic.songTitle}
              </p>
              <p className="text-amber-100 text-xl font-serif italic leading-relaxed mb-3">
                "{relic.verse.text}"
              </p>
              <p className="text-amber-400 font-mono text-sm">— {relic.verse.ref}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
