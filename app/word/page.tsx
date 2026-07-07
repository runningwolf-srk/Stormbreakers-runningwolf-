// app/word/page.tsx
import { armory } from '../../data/armory'
import Link from 'next/link'

type ThemeGroup = {
  theme: string
  icon: string
  verses: typeof armory
}

const themeGroups: ThemeGroup[] = [
  {
    theme: "Healing",
    icon: "❤️",
    verses: armory.filter(r => ['jesus-is-an-healer'].includes(r.slug))
  },
  {
    theme: "Calling", 
    icon: "📣",
    verses: armory.filter(r => ['heaven-calling'].includes(r.slug))
  },
  {
    theme: "Spiritual Warfare",
    icon: "⚔️", 
    verses: armory.filter(r => ['horn-of-war', 'iron-collide'].includes(r.slug))
  },
  {
    theme: "Grace",
    icon: "✝️",
    verses: armory.filter(r => ['scars-that-preach'].includes(r.slug))
  },
  {
    theme: "Redemption",
    icon: "🩸",
    verses: armory.filter(r => ['blood-of-the-cross'].includes(r.slug))
  },
  {
    theme: "Christ the King",
    icon: "🦁",
    verses: armory.filter(r => ['lion-and-lamb', 'lord-of-lords'].includes(r.slug))
  },
  {
    theme: "Restoration",
    icon: "🌱",
    verses: armory.filter(r => ['spiritual-journey'].includes(r.slug))
  }
]

export default function WordPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE WORD</h1>
          <p className="text-amber-200/70 mb-6">The Scriptures that form the foundation of every Stormbreakers relic</p>
          
          <div className="bg-amber-600/10 border border-amber-600/30 p-6 rounded text-left max-w-2xl mx-auto">
            <p className="text-amber-100/90 italic leading-relaxed">
              Every relic begins here. Before there was a song, there was the Word. 
              These Scriptures are the foundation beneath every declaration, 
              every testimony, and every act of worship found in Stormbreakers.
            </p>
            <p className="text-amber-400 text-sm mt-4 font-bold">
              This is Scripture. The final authority. The sword of the Spirit.
            </p>
          </div>
        </header>

        <div className="space-y-12">
          {themeGroups.map((group) => (
            <section key={group.theme}>
              <h2 className="text-2xl font-bold text-amber-400 mb-6 border-b border-amber-600/30 pb-3">
                {group.icon} {group.theme}
              </h2>
              
              <div className="space-y-8">
                {group.verses.map((relic) => (
                  <article key={relic.slug} className="border-l-2 border-amber-600/30 pl-6 py-2">
                    <blockquote className="text-xl text-amber-100 leading-relaxed mb-3">
                      "{relic.scripture}"
                    </blockquote>
                    <cite className="text-amber-400 text-sm block mb-2">— {relic.reference}</cite>
                    
                    {relic.supportingScripture && (
                      <div className="mt-3 text-amber-100/70 text-sm">
                        <p>"{relic.supportingScripture.verse}"</p>
                        <cite className="text-amber-400/60">— {relic.supportingScripture.reference}</cite>
                      </div>
                    )}

                    <Link 
                      href={`/armory#${relic.slug}`}
                      className="inline-block mt-3 text-amber-500 hover:text-amber-300 text-sm transition"
                    >
                      → {relic.relic}
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CLOSING REMINDER */}
        <footer className="mt-20 pt-12 border-t border-amber-600/20 text-center">
          <div className="space-y-2 text-amber-200/70">
            <p className="font-bold text-amber-400">The Word is the foundation.</p>
            <p>The Chronicles are the testimony.</p>
            <p>The Armory is the worship.</p>
            <p className="text-amber-400 font-bold mt-4 text-lg">Jesus Christ is the center of them all.</p>
          </div>
        </footer>
      </div>
    </main>
  )
          }
