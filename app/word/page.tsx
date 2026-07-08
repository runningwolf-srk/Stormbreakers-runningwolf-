// app/word/page.tsx
import { armory } from '../../data/armory'
import { RelicCard } from '../../components/relics/RelicCard'

export const metadata = {
  title: 'The Word | Stormbreakers',
  description: 'Every song anchored in Scripture. Browse by theme.',
}

const THEME_DESCRIPTIONS = {
  'Healing': "God's power to restore body, mind, and soul.",
  'Calling': "God's invitation and purpose for His people.",
  'Spiritual Warfare': "Standing firm in Christ against the enemy.",
  'Grace': "God's unmerited favor that saves and sustains us.",
  'Redemption': "Christ's work to buy us back from sin and death.",
  'Christ the King': "Jesus reigning as Lord over all creation."
}

export default function WordPage() {
  const themes = ['Healing', 'Calling', 'Spiritual Warfare', 'Grace', 'Redemption', 'Christ the King'] as const

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
            <section key={theme} id={theme.toLowerCase().replace(' ', '-')} className="mb-20 scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-2">{theme}</h2>
                <p className="text-amber-200/70 text-lg italic">
                  {THEME_DESCRIPTIONS[theme]}
                </p>
              </div>
              <div className="space-y-12">
                {relicsInTheme.map((relic) => (
                  <RelicCard key={relic.slug} relic={relic} />
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
