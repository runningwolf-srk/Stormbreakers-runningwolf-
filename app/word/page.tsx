// app/word/page.tsx
import { armory } from '../../data/armory'
import Link from 'next/link'

export const metadata = {
  title: 'The Word | Stormbreakers',
  description: 'Scripture by theme. Every song anchored in The Word.',
}

const THEME_DATA = {
  'Healing': {
    icon: '❤️',
    description: "God's power to restore body, mind, and soul.",
  },
  'Calling': {
    icon: '📣',
    description: "God's invitation and purpose for His people.",
  },
  'Spiritual Warfare': {
    icon: '⚔️',
    description: "Standing firm in Christ against the enemy.",
  },
  'Grace': {
    icon: '✝️',
    description: "God's unmerited favor that saves and sustains us.",
  },
  'Redemption': {
    icon: '🩸',
    description: "Christ's work to buy us back from sin and death.",
  },
  'Christ the King': {
    icon: '🦁',
    description: "Jesus reigning as Lord over all creation.",
  }
}

export default function WordPage() {
  const themes = Object.keys(THEME_DATA) as Array<keyof typeof THEME_DATA>

  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE WORD</h1>
          <p className="text-amber-200/70">Every song anchored in Scripture. Browse by theme.</p>
        </header>

        {themes.map((theme) => {
          const relicsInTheme = armory.filter(r => r.themes.includes(theme))
          if (relicsInTheme.length === 0) return null

          return (
            <section key={theme} className="mb-16">
              <div className="border-l-4 border-amber-600 pl-6 mb-6">
                <h2 className="text-3xl font-bold text-amber-400 mb-2">
                  {THEME_DATA[theme].icon} {theme}
                </h2>
                <p className="text-amber-200/70 text-lg italic">
                  {THEME_DATA[theme].description}
                </p>
              </div>

              <div className="space-y-4">
                {relicsInTheme.map((relic) => (
                  <Link
                    key={relic.slug}
                    href={`/armory#${relic.slug}`}
                    className="block border border-amber-600/20 rounded-lg p-4 hover:bg-amber-600/5 transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl text-amber-300 font-bold mb-1">{relic.song}</h3>
                        <blockquote className="text-amber-100/80 italic text-sm mb-2">
                          "{relic.scripture}"
                        </blockquote>
                        <cite className="text-amber-400 text-xs">— {relic.reference}</cite>
                      </div>
                      <span className="text-amber-600 text-sm">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <footer className="mt-20 pt-12 border-t border-amber-600/20 text-center">
          <p className="text-amber-400 font-bold text-lg">
            The Word of God is our unshakable foundation.
          </p>
        </footer>
      </div>
    </main>
  )
}
