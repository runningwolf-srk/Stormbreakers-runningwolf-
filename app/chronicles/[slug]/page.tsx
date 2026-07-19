// app/chronicles/[id]/page.tsx - FINAL BOOK PAGE - Full Testimony
import Link from 'next/link'

const chapters: any = {
  1: { title: "The Map", theme: "Worship Begins", scripture: "Psalm 40:3", relic: "Relic 01 — The First Song", song: "A New Song", declaration: "He put a new song in my mouth.", story: "Psalm 23 wasn't poetry anymore. It was a map. When the storm hit, the Shepherd's psalm became my GPS. This is where worship began — not on a stage, but in survival. God gave me a new song before He changed my circumstances." },
  2: { title: "The Valley", theme: "Courage Is Tested", scripture: "Joshua 1:9", relic: "Relic 02 — Battle Cry", song: "Warrior's Anthem", declaration: "Be strong and courageous.", story: "Fear had a grip on me until God broke it. The moment fear left, the warrior rose. God doesn't call the qualified, He qualifies the called. This was the call to stand." },
  3: { title: "The Fire", theme: "Faith Is Refined", scripture: "Isaiah 43:2", relic: "Relic 03 — Fire Forged", song: "Through The Fire", declaration: "When you walk through fire, you shall not be burned.", story: "The flames tested my faith, but God was already waiting on the other side. The fire didn't destroy me. It revealed who He created me to become. Refining fire, not consuming fire." },
  4: { title: "The Breaking", theme: "Healing Begins", scripture: "Jeremiah 30:17", relic: "Relic 04 — Jesus Is The Healer", song: "Healer's Cry", declaration: "I will restore health to you.", story: "He heals wounds no human hands can reach and restores what life tried to steal. The breaking was not the end. It was where healing began." },
  5: { title: "The Scars", theme: "Weakness Becomes Testimony", scripture: "2 Corinthians 12:9", relic: "Relic 05 — Scars That Preach", song: "I'm On Fire", declaration: "My grace is sufficient.", story: "The scars I wanted hidden became the testimony God used to speak. My weakness became the platform for His power." },
  6: { title: "The Altar", theme: "Devotion Remains", scripture: "Leviticus 6:13", relic: "Relic 06 — The Fire That Never Goes Out", song: "Eternal Fire", declaration: "The fire must be kept burning.", story: "The fire that tested me in the darkest valley never went out. It now burns on the altar of my life. Not survival fire. Altar fire. Worship that remains." },
}

export default function ChronicleDetail({ params }: { params: { id: string } }) {
  const c = chapters[Number(params.id)] || chapters[1]
  const nextId = Number(params.id) < 6 ? Number(params.id) + 1 : null

  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/chronicles" className="text-amber-400/40 text-xs tracking-widest mb-10 inline-block hover:text-amber-400">← BACK TO CHRONICLES</Link>

        <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black mb-2">CHAPTER {String(params.id).padStart(2,'0')} — {c.theme.toUpperCase()}</p>
        <h1 className="text-4xl font-black text-amber-100 mb-2">{c.title}</h1>
        <p className="text-amber-200/40 text-xs mb-10">{c.arc || c.theme} • {c.scripture}</p>

        <div className="space-y-8 text-stone-200 leading-relaxed">
          <p className="text-lg italic text-amber-100/80">"{c.story}"</p>

          <div className="p-6 bg-stone-900/60 border border-amber-400/10 rounded-xl space-y-3">
            <p><span className="text-amber-400/40 text-xs tracking-widest font-black">RELATED RELIC: </span><span className="text-amber-300 text-sm">{c.relic}</span></p>
            <p><span className="text-amber-400/40 text-xs tracking-widest font-black">SONG: </span><span className="text-amber-100 text-sm italic">{c.song}</span></p>
            <p><span className="text-amber-400/40 text-xs tracking-widest font-black">SCRIPTURE: </span><span className="text-amber-300 text-sm">{c.scripture}</span></p>
            <p><span className="text-amber-400/40 text-xs tracking-widest font-black">DECLARATION: </span><span className="text-amber-100/80 text-sm italic">"{c.declaration}"</span></p>
          </div>

          <div className="text-center py-8 border-y border-amber-400/10 space-y-1">
            <p className="text-amber-100/60 text-sm italic">This is my story — anchored in Scripture.</p>
            <p className="text-amber-100/60 text-sm italic">These are my songs — rooted in the Word.</p>
          </div>

          <div className="flex justify-between pt-4">
            <Link href="/armory" className="text-amber-400 text-xs font-black tracking-widest">→ GO TO ARMORY</Link>
            {nextId && <Link href={`/chronicles/${nextId}`} className="text-amber-400 text-xs font-black tracking-widest">NEXT CHAPTER →</Link>}
          </div>
        </div>

        <p className="text-center mt-16 text-amber-400 font-black tracking-[0.3em] text-xs">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
      </div>
    </main>
  )
}
