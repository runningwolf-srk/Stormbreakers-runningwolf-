// app/word/page.tsx
import { armory } from '../../data/armory'
import Link from 'next/link'

type ThemeGroup = {
  theme: string
  icon: string
  verses: typeof armory
  additionalScriptures?: { verse: string; reference: string }[]
}

const themeGroups: ThemeGroup[] = [
  {
    theme: "Healing",
    icon: "❤️",
    verses: armory.filter(r => ['jesus-is-an-healer'].includes(r.slug)),
    additionalScriptures: [
      { verse: "He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.", reference: "1 Peter 2:24" },
      { verse: "Heal me, O Lord, and I shall be healed; save me, and I shall be saved, for you are my praise.", reference: "Jeremiah 17:14" }
    ]
  },
  {
    theme: "Calling",
    icon: "📣",
    verses: armory.filter(r => ['heaven-calling'].includes(r.slug)),
    additionalScriptures: [
      { verse: "For the gifts and the calling of God are irrevocable.", reference: "Romans 11:29" }
    ]
  },
  {
    theme: "Spiritual Warfare",
    icon: "⚔️",
    verses: armory.filter(r => ['horn-of-war', 'iron-collide'].includes(r.slug)),
    additionalScriptures: [
      { verse: "Blow the trumpet in Zion; sound the alarm on my holy hill.", reference: "Joel 2:1" },
      { verse: "As iron sharpens iron, so one person sharpens another.", reference: "Proverbs 27:17" }
    ]
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
              Every relic begins with God's Word. Before there was a song, there was Scripture.
              Every declaration, testimony, and act of worship within Stormbreakers is built upon it.
            </p>
            <p className="text-amber-400 text-sm mt-4 font-bold">
              This is Scripture. The final authority. The sword of the Spirit.
            </p>
          </div>
        </header>

        <div className="space-y-4">
          {themeGroups.map((group) => {
            if (group.verses.length === 0 &&!group.additionalScriptures?.length) return null

            return (
              <details key={group.theme} className="group border border-amber-600/20 rounded-lg overflow-hidden">
                <summary className="bg-black/50 hover:bg-amber-600/10 px-6 py-4 cursor-pointer list-none flex justify-between items-center transition">
                  <h2 className="text-xl font-bold text-amber-400">
                    {group.icon} {group.theme}
                  </h2>
                  <span className="text-amber-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>

                <div className="p-6 space-y-8 bg-black/30">
                  {group.additionalScriptures && (
                    <div className="mb-6">
                      <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-3">Scriptures</p>
                      {group.additionalScriptures.map((s, i) => (
                        <div key={i} className="text-amber-100/80 text-sm border-l border-amber-600/30 pl-3 mb-3">
                          <p>"{s.verse}"</p>
                          <cite className="text-amber-400/60">— {s.reference}</cite>
                        </div>
                      ))}
                    </div>
                  )}

                  {group.verses.length > 0 && (
                    <div>
                      <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-3">Relics</p>
                      {group.verses.map((relic) => (
                        <article key={relic.slug} className="border-l-2 border-amber-600/30 pl-6 py-2 mb-6">
                          <blockquote className="text-lg text-amber-100 leading-relaxed mb-3">
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
                  )}
                </div>
              </details>
            )
          })}
        </div>

        <footer className="mt-20 pt-12 border-t border-amber-600/20 text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-amber-100/90 italic text-lg leading-relaxed mb-6">
              Every song begins with Scripture. Every testimony points back to Scripture.
              Every relic exists to glorify Jesus Christ.
            </p>
            <blockquote className="text-amber-400 text-xl mb-2">
              "For no one can lay any foundation other than the one already laid, which is Jesus Christ."
            </blockquote>
            <cite className="text-amber-400/70 text-sm">— 1 Corinthians 3:11</cite>
          </div>

          <div className="pt-8 space-y-2 text-amber-200/70">
            <p className="font-bold text-amber-400">The Word is the foundation.</p>
            <p>The Chronicles are the testimony.</p>
            <p>The Armory is the worship.</p>
            <p className="text-amber-400 font-bold mt-4 text-xl">Jesus Christ is the center of them all.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
