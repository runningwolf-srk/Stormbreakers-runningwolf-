// app/chronicles/[id]/page.tsx - FINAL INDIVIDUAL
import Link from 'next/link'

const chapters: any = {
  1: { label: "CHAPTER 01 — WORSHIP BEGINS", title: "The Map", ref: "Psalm 40:3", relic: "Relic 01 — The First Song", song: "A New Song", reflection: "Psalm 23 wasn't poetry anymore. It was a map.", story: "When the storm came, the Shepherd's voice became my direction. Worship was not born on a stage. It was born in the valley. God gave me a new song before He changed my circumstances." },
  2: { label: "CHAPTER 02 — COURAGE RISES", title: "The Valley", ref: "Joshua 1:9", relic: "Relic 02 — Battle Cry", song: "Warrior's Anthem", reflection: "The moment fear left and the warrior rose.", story: "God does not call the qualified. He qualifies the called. The battle was never about my strength. It was about trusting the One who stood with me." },
  3: { label: "CHAPTER 03 — REFINING FIRE", title: "The Fire", ref: "Isaiah 43:2", relic: "Relic 03 — Fire Forged", song: "Through The Fire", reflection: "The flames tested my faith, but God was already waiting on the other side.", story: "The fire did not come to destroy me. It revealed what God was building inside me." },
  4: { label: "CHAPTER 04 — THE BREAKING", title: "Jesus Is The Healer", ref: "Jeremiah 30:17", relic: "Relic 04 — Jesus Is The Healer", song: "Healer's Cry", reflection: "He heals wounds no human hands can reach.", story: "Some wounds cannot be seen. Some battles happen where nobody knows. But God restores what life tried to steal." },
  5: { label: "CHAPTER 05 — SCARS THAT SPEAK", title: "The Testimony", ref: "2 Corinthians 12:9", relic: "Relic 05 — Scars That Preach", song: "I'm On Fire", reflection: "The scars I wanted hidden became the testimony God used to speak.", story: "The places I thought disqualified me became the places where God's grace was revealed." },
  6: { label: "CHAPTER 06 — THE ALTAR", title: "The Fire That Never Goes Out", ref: "Leviticus 6:13", relic: "Relic 06 — Eternal Fire", song: "Eternal Fire", reflection: "The fire that tested me in the darkest valley never went out.", story: "The flame remains because God is still writing the story. The fire must be kept burning." },
}

export default function ChronicleDetail({ params }: { params: { id: string } }) {
  const c = chapters[Number(params.id)] || chapters[1]
  const nextId = Number(params.id) < 6 ? Number(params.id) + 1 : null
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/chronicles" className="text-amber-400/40 text-xs tracking-widest mb-10 inline-block">← BACK TO CHRONICLES</Link>
        <p className="text-amber-400/60 text-xs tracking-[0.3em] font-black mb-2">{c.label}</p>
        <h1 className="text-4xl font-black text-amber-100 mb-1">{c.title}</h1>
        <p className="text-amber-200/30 text-xs mb-8">{c.ref} • {c.relic}</p>
        <p className="text-amber-100/80 italic text-lg">"{c.reflection}"</p>
        <p className="text-stone-300 leading-relaxed mt-6">{c.story}</p>
        <div className="mt-8 p-5 bg-stone-900/60 border border-amber-400/10 rounded-xl text-xs space-y-2">
          <p><span className="text-amber-400/40 tracking-widest font-black">SCRIPTURE: </span>{c.ref}</p>
          <p><span className="text-amber-400/40 tracking-widest font-black">RELIC: </span>{c.relic}</p>
          <p><span className="text-amber-400/40 tracking-widest font-black">SONG: </span>{c.song}</p>
        </div>
        <p className="text-center text-amber-100/50 text-sm italic mt-10 pt-6 border-t border-amber-400/10">This is my story — anchored in Scripture.<br/>These are my songs — rooted in the Word.</p>
        <div className="flex justify-between pt-6 text-xs font-black tracking-widest">
          <Link href="/armory" className="text-amber-400">→ ARMORY</Link>
          {nextId && <Link href={`/chronicles/${nextId}`} className="text-amber-400">NEXT CHAPTER →</Link>}
        </div>
      </div>
    </main>
  )
}
