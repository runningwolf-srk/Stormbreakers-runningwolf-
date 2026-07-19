// app/chronicles/[id]/page.tsx - FINAL STORY PAGES - No undefined
import Link from 'next/link'

const chapters: any = {
  1: {
    chapterLabel: "CHAPTER 01 — WORSHIP BEGINS",
    title: "The Map",
    scripture: "Psalm 40:3",
    relic: "Relic 01 — The First Song",
    song: "A New Song",
    reflection: "Psalm 23 wasn't poetry anymore. It was a map.",
    story: "When the storm came, the Shepherd's voice became my direction. Worship was not born on a stage. It was born in the valley. God gave me a new song before He changed my circumstances."
  },
  2: {
    chapterLabel: "CHAPTER 02 — COURAGE RISES",
    title: "The Valley",
    scripture: "Joshua 1:9",
    relic: "Relic 02 — Battle Cry",
    song: "Warrior's Anthem",
    reflection: "The moment fear left and the warrior rose.",
    story: "God does not call the qualified. He qualifies the called. The battle was never about my strength. It was about trusting the One who stood with me."
  },
  3: {
    chapterLabel: "CHAPTER 03 — REFINING FIRE",
    title: "The Fire",
    scripture: "Isaiah 43:2",
    relic: "Relic 03 — Fire Forged",
    song: "Through The Fire",
    reflection: "The flames tested my faith, but God was already waiting on the other side.",
    story: "The fire did not come to destroy me. It revealed what God was building inside me. When you walk through fire, you shall not be burned."
  },
  4: {
    chapterLabel: "CHAPTER 04 — THE BREAKING",
    title: "Jesus Is The Healer",
    scripture: "Jeremiah 30:17",
    relic: "Relic 04 — Jesus Is The Healer",
    song: "Healer's Cry",
    reflection: "He heals wounds no human hands can reach.",
    story: "Some wounds cannot be seen. Some battles happen where nobody knows. But God restores what life tried to steal. I will restore health to you and heal your wounds, declares the Lord."
  },
  5: {
    chapterLabel: "CHAPTER 05 — SCARS THAT SPEAK",
    title: "The Testimony",
    scripture: "2 Corinthians 12:9",
    relic: "Relic 05 — Scars That Preach",
    song: "I'm On Fire",
    reflection: "The scars I wanted hidden became the testimony God used to speak.",
    story: "The places I thought disqualified me became the places where God's grace was revealed. My grace is sufficient for you, for my power is made perfect in weakness."
  },
  6: {
    chapterLabel: "CHAPTER 06 — THE ALTAR",
    title: "The Fire That Never Goes Out",
    scripture: "Leviticus 6:13",
    relic: "Relic 06 — Eternal Fire",
    song: "Eternal Fire",
    reflection: "The fire that tested me in the darkest valley never went out.",
    story: "The flame remains because God is still writing the story. The fire must be kept burning on the altar continuously. It must not go out."
  },
}

export default function ChronicleDetail({ params }: { params: { id: string } }) {
  const c = chapters[Number(params.id)] || chapters[1]
  const nextId = Number(params.id) < 6 ? Number(params.id) + 1 : null

  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/chronicles" className="text-amber-400/40 text-xs tracking-widest mb-10 inline-block">← BACK TO CHRONICLES</Link>

        <p className="text-amber-400/60 text-xs tracking-[0.3em] font-black mb-2">{c.chapterLabel}</p>
        <h1 className="text-4xl font-black text-amber-100 mb-1">{c.title}</h1>
        <p className="text-amber-200/30 text-xs mb-8">{c.scripture} • {c.relic}</p>

        <div className="space-y-6">
          <p className="text-amber-100/80 italic">"{c.reflection}"</p>
          <p className="text-stone-300 leading-relaxed">{c.story}</p>

          <div className="p-5 bg-stone-900/60 border border-amber-400/10 rounded-xl text-xs space-y-2">
            <p><span className="text-amber-400/40 tracking-widest font-black">SCRIPTURE: </span><span className="text-amber-300">{c.scripture}</span></p>
            <p><span className="text-amber-400/40 tracking-widest font-black">RELIC: </span><span className="text-amber-300">{c.relic}</span></p>
            <p><span className="text-amber-400/40 tracking-widest font-black">SONG: </span><span className="text-amber-100 italic">{c.song}</span></p>
          </div>

          <p className="text-center text-amber-100/50 text-sm italic pt-6 border-t border-amber-400/10">This is my story — anchored in Scripture.<br/>These are my songs — rooted in the Word.</p>

          <div className="flex justify-between pt-6 text-xs font-black tracking-widest">
            <Link href="/armory" className="text-amber-400">→ ARMORY</Link>
            {nextId && <Link href={`/chronicles/${nextId}`} className="text-amber-400">NEXT CHAPTER →</Link>}
          </div>
        </div>
      </div>
    </main>
  )
}
