// app/word/page.tsx
import Link from 'next/link'

type RelicLink = { id: number; slug: string; title: string; theme: string }
type ChapterLink = { id: number; slug: string; number: number; title: string; progress: number }
type Verse = { ref: string; text: string }

type Theme = {
  name: string
  color: string
  verses: Verse[]
  connectedRelics: RelicLink[]
  connectedChapters: ChapterLink[]
}

const themes: Theme[] = [
  {
    name: "Healing",
    color: "from-emerald-500/20 to-teal-500/20",
    verses: [
      { ref: "Jeremiah 30:17", text: "I will restore health to you and heal your wounds." },
      { ref: "Psalm 147:3", text: "He heals the brokenhearted and binds up their wounds." },
    ],
    connectedRelics: [{ id: 4, slug: "healer", title: "Jesus Is The Healer", theme: "Healing" }],
    connectedChapters: [{ id: 3, slug: "chapter-3-the-breaking", number: 3, title: "The Breaking", progress: 100 }],
  },
  {
    name: "Calling",
    color: "from-amber-500/20 to-orange-500/20",
    verses: [
      { ref: "Isaiah 6:8", text: "Here I am. Send me." },
      { ref: "Ephesians 2:10", text: "We are His workmanship, created for good works." },
    ],
    connectedRelics: [{ id: 1, slug: "first-song", title: "The First Song", theme: "Worship" }],
    connectedChapters: [{ id: 1, slug: "running-wolf", number: 1, title: "The Map", progress: 100 }],
  },
  {
    name: "Spiritual Warfare",
    color: "from-red-500/20 to-orange-500/20",
    verses: [
      { ref: "Ephesians 6:12", text: "We wrestle not against flesh and blood." },
    ],
    connectedRelics: [{ id: 2, slug: "battle-cry", title: "Battle Cry", theme: "Spiritual Warfare" }],
    connectedChapters: [{ id: 2, slug: "chapter-2-the-valley", number: 2, title: "The Valley", progress: 80 }],
  },
]

export default function WordPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-amber-100 mb-4">THE WORD</h1>
          <p className="text-amber-200/60 max-w-2xl mx-auto mb-8">
            Every relic is anchored in Scripture. Every song is rooted in the Word.
          </p>
          
          {/* SINGLE WORD SECTION - NO DUPLICATE */}
          <div className="p-8 rounded-2xl bg-stone-900/50 border border-amber-400/10">
            <blockquote className="text-2xl sm:text-3xl font-black text-amber-100 leading-tight mb-4">
              &ldquo;He put a new song in my mouth, a hymn of praise to our God.&rdquo;
            </blockquote>
            <p className="text-amber-200/50 text-sm mb-6">Psalm 40:3 — The anthem of STORMBREAKERS</p>
            <p className="text-amber-200/30 text-xs uppercase tracking-widest font-bold border-t border-amber-400/10 pt-4">
              The Word is authority. My story is testimony.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {themes.map((theme) => (
            <section key={theme.name} className={`p-8 rounded-2xl bg-gradient-to-br ${theme.color} border border-amber-400/10 bg-stone-900/50`}>
              <h2 className="text-3xl font-black text-amber-100 mb-6 tracking-tight">{theme.name}</h2>
              
              <div className="grid gap-4 mb-10">
                {theme.verses.map((verse) => (
                  <div key={verse.ref} className="p-4 bg-stone-950/50 rounded-xl border border-amber-400/5">
                    <p className="text-amber-100 italic mb-2">&quot;{verse.text}&quot;</p>
                    <p className="text-amber-400 text-sm font-black">{verse.ref}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-amber-400/10">
                <div>
                  <h3 className="text-amber-400 text-xs tracking-[0.3em] font-black mb-4">CONNECTED RELICS</h3>
                  <div className="space-y-2">
                    {theme.connectedRelics.map((relic) => (
                      <Link key={relic.id} href={`/armory/${relic.slug}`} className="block p-3 bg-stone-950 border border-amber-400/10 rounded-lg hover:border-amber-400/30 transition">
                        <p className="text-amber-100 text-sm font-bold">{relic.title}</p>
                        <p className="text-amber-200/50 text-xs">{relic.theme}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-amber-400 text-xs tracking-[0.3em] font-black mb-4">CONNECTED CHAPTERS</h3>
                  <div className="space-y-2">
                    {theme.connectedChapters.map((ch) => (
                      <Link key={ch.id} href={`/chronicles/${ch.slug}`} className="block p-3 bg-stone-950 border border-amber-400/10 rounded-lg hover:border-amber-400/30 transition">
                        <p className="text-amber-100 text-sm font-bold">Chapter {ch.number}: {ch.title}</p>
                        <div className="w-full bg-stone-800 h-1 rounded-full mt-2 overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: `${ch.progress}%` }}></div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  )
          }
