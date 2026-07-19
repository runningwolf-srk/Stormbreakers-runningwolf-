// app/chronicles/page.tsx - FINAL COLLECTION - 10/10
import Link from 'next/link'

const chapters = [
  { id: 1, chapterLabel: "CHAPTER 01 — WORSHIP BEGINS", title: "The Map", scripture: "Psalm 40:3", relic: "The First Song", song: "A New Song", reflection: "Psalm 23 wasn't poetry anymore. It was a map." },
  { id: 2, chapterLabel: "CHAPTER 02 — COURAGE RISES", title: "The Valley", scripture: "Joshua 1:9", relic: "Battle Cry", song: "Warrior's Anthem", reflection: "The moment fear left and the warrior rose." },
  { id: 3, chapterLabel: "CHAPTER 03 — REFINING FIRE", title: "The Fire", scripture: "Isaiah 43:2", relic: "Fire Forged", song: "Through The Fire", reflection: "The flames tested my faith, but God was already waiting on the other side." },
  { id: 4, chapterLabel: "CHAPTER 04 — THE BREAKING", title: "Jesus Is The Healer", scripture: "Jeremiah 30:17", relic: "Jesus Is The Healer", song: "Healer's Cry", reflection: "He heals wounds no human hands can reach." },
  { id: 5, chapterLabel: "CHAPTER 05 — SCARS THAT SPEAK", title: "The Testimony", scripture: "2 Corinthians 12:9", relic: "Scars That Preach", song: "I'm On Fire", reflection: "The scars I wanted hidden became the testimony God used to speak." },
  { id: 6, chapterLabel: "CHAPTER 06 — THE ALTAR", title: "The Fire That Never Goes Out", scripture: "Leviticus 6:13", relic: "Eternal Fire", song: "Eternal Fire", reflection: "The fire that tested me in the darkest valley never went out." },
]

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100 mb-3">THE CHRONICLES</h1>
          <p className="text-amber-400 font-black tracking-[0.3em] text-sm mb-2">The Testimony of RunningWolf</p>
          <p className="text-amber-200/30 text-xs tracking-[0.4em] font-bold mb-6">MUSIC. SCRIPTURE. BOOK TO BOOK.</p>
          <div className="space-y-1">
            <p className="text-amber-100/60 text-sm italic">This is my story — anchored in Scripture.</p>
            <p className="text-amber-100/60 text-sm italic">These are my songs — rooted in the Word.</p>
          </div>
        </div>

        <div className="space-y-6">
          {chapters.map((c) => (
            <Link key={c.id} href={`/chronicles/${c.id}`} className="block p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl hover:border-amber-400/30 transition group">
              <p className="text-amber-400/50 text-xs tracking-[0.25em] font-black mb-1">{c.chapterLabel}</p>
              <h3 className="text-amber-100 font-black text-xl">{c.title}</h3>
              <div className="mt-3 space-y-1 text-xs text-amber-200/40">
                <p>Scripture: {c.scripture}</p>
                <p>Relic: {c.relic}</p>
                <p>Song: {c.song}</p>
              </div>
              <p className="text-stone-300 text-sm italic mt-4">"{c.reflection}"</p>
            </Link>
          ))}
        </div>

        <p className="text-center mt-16 text-amber-400 font-black tracking-[0.3em] text-xs">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
      </div>
    </main>
  )
}
