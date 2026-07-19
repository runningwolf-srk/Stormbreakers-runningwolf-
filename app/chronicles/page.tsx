// app/chronicles/page.tsx - Chapter-based Main View
import Link from 'next/link'

const chapters = [
  { 
    id: 1, 
    title: "The Map", 
    theme: "Worship", 
    scripture: "Psalm 40:3 / Psalm 23", 
    excerpt: "When Psalm 23 stopped being poetry and became a map through the valley.",
    relic: "The First Song"
  },
  { 
    id: 2, 
    title: "The Valley", 
    theme: "Courage", 
    scripture: "Joshua 1:9", 
    excerpt: "The moment fear left and the warrior rose. God doesn't call the qualified, He qualifies the called.",
    relic: "Battle Cry"
  },
  { 
    id: 3, 
    title: "The Fire", 
    theme: "Refining", 
    scripture: "Isaiah 43:2", 
    excerpt: "The flames tested my faith, but God was already waiting on the other side.",
    relic: "Fire Forged"
  },
  { 
    id: 4, 
    title: "The Scars", 
    theme: "Testimony", 
    scripture: "2 Corinthians 12:9", 
    excerpt: "The scars I wanted hidden became the testimony God used to speak.",
    relic: "Scars That Preach"
  },
  { 
    id: 5, 
    title: "The Altar", 
    theme: "Devotion", 
    scripture: "Leviticus 6:13", 
    excerpt: "The fire that tested me in the darkest valley never went out. It burns on the altar of my life.",
    relic: "The Fire That Never Goes Out"
  },
]

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100 mb-4">THE CHRONICLES</h1>
          <p className="text-amber-200/60 text-sm max-w-xl mx-auto">Testimony behind the songs. Each chapter is a scar that sings.</p>
        </div>

        <div className="space-y-4">
          {chapters.map((c) => (
            <Link key={c.id} href={`/chronicles/${c.id}`} className="block p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl hover:border-amber-400/30 transition group">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">CHAPTER {String(c.id).padStart(2,'0')} — {c.theme.toUpperCase()}</p>
                  <h3 className="text-amber-100 font-black text-xl mt-1">{c.title}</h3>
                </div>
                <span className="text-amber-200/20 text-xs border border-amber-400/10 px-2 py-1 rounded">→ RELIC: {c.relic}</span>
              </div>
              <p className="text-amber-200/30 text-xs mb-3">{c.scripture}</p>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">{c.excerpt}</p>
              <p className="text-amber-400 text-xs font-black tracking-widest group-hover:translate-x-1 transition">Read Full Chronicle →</p>
            </Link>
          ))}
        </div>

        <p className="text-center mt-16 text-amber-400 font-black tracking-[0.3em] text-xs">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
      </div>
    </main>
  )
}
