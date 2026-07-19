// app/chronicles/page.tsx - The Testimony of RunningWolf - Final Branded
import Link from 'next/link'

const chapters = [
  { id: 1, title: "The Map", theme: "Worship", scripture: "Psalm 40:3", excerpt: "When Psalm 23 stopped being poetry and became a map through the valley.", relic: "Relic 01 — The First Song" },
  { id: 2, title: "The Valley", theme: "Courage", scripture: "Joshua 1:9", excerpt: "The moment fear left and the warrior rose. God doesn't call the qualified, He qualifies the called.", relic: "Relic 02 — Battle Cry" },
  { id: 3, title: "The Fire", theme: "Refining Fire", scripture: "Isaiah 43:2", excerpt: "The flames tested my faith, but God was already waiting on the other side.", relic: "Relic 03 — Fire Forged" },
  { id: 4, title: "The Breaking", theme: "Healing", scripture: "Jeremiah 30:17", excerpt: "He heals wounds no human hands can reach and restores what life tried to steal.", relic: "Relic 04 — Jesus Is The Healer" },
  { id: 5, title: "The Scars", theme: "Testimony", scripture: "2 Corinthians 12:9", excerpt: "The scars I wanted hidden became the testimony God used to speak.", relic: "Relic 05 — Scars That Preach" },
  { id: 6, title: "The Altar", theme: "Devotion", scripture: "Leviticus 6:13", excerpt: "The fire that tested me in the darkest valley never went out. It burns on the altar of my life.", relic: "Relic 06 — The Fire That Never Goes Out" },
]

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* SINGLE DOORWAY INTRO - No duplicate */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-amber-100 mb-4">THE CHRONICLES</h1>
          <p className="text-amber-400 font-black tracking-[0.3em] text-sm mb-3">The Testimony of RunningWolf</p>
          <p className="text-amber-200/40 text-xs tracking-[0.4em] font-bold mb-8">MUSIC. SCRIPTURE. BOOK TO BOOK.</p>
          
          <div className="max-w-xl mx-auto space-y-2">
            <p className="text-amber-100/70 text-sm italic">This is my story — anchored in Scripture.</p>
            <p className="text-amber-100/70 text-sm italic">These are my songs — rooted in the Word.</p>
          </div>
        </div>

        <div className="space-y-4">
          {chapters.map((c) => (
            <Link key={c.id} href={`/chronicles/${c.id}`} className="block p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl hover:border-amber-400/30 transition group">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">CHAPTER {String(c.id).padStart(2,'0')} — {c.theme.toUpperCase()}</p>
                  <h3 className="text-amber-100 font-black text-xl mt-1">{c.title}</h3>
                  <p className="text-amber-200/30 text-xs mt-1">{c.scripture} • {c.relic}</p>
                </div>
                <span className="text-amber-400/30 group-hover:text-amber-400 transition">→</span>
              </div>
              <p className="text-stone-300 text-sm mt-4 leading-relaxed">{c.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20 pt-8 border-t border-amber-400/10">
          <p className="text-amber-400 font-black tracking-[0.3em] text-xs">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
          <p className="text-amber-200/20 text-xs mt-3">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
        </div>
      </div>
    </main>
  )
}
