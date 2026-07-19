// app/word/page.tsx - FINAL SYNCED - Timeline Matched 01-06
import Link from 'next/link'

const wordEntries = [
  {
    id: 1,
    chapterLabel: "CHAPTER 01 — WORSHIP BEGINS",
    title: "The Map",
    ref: "Psalm 40:3",
    theme: "Worship",
    text: "He put a new song in my mouth, a hymn of praise to our God.",
    relic: "Relic 01 — The First Song",
    song: "A New Song",
    reflection: "Psalm 23 wasn't poetry anymore. It was a map."
  },
  {
    id: 2,
    chapterLabel: "CHAPTER 02 — COURAGE RISES",
    title: "The Valley",
    ref: "Joshua 1:9",
    theme: "Spiritual Warfare",
    text: "Be strong and courageous. Do not be afraid; for the Lord your God will be with you wherever you go.",
    relic: "Relic 02 — Battle Cry",
    song: "Warrior's Anthem",
    reflection: "The moment fear left and the warrior rose."
  },
  {
    id: 3,
    chapterLabel: "CHAPTER 03 — REFINING FIRE",
    title: "The Fire",
    ref: "Isaiah 43:2",
    theme: "Refining Fire",
    text: "When you walk through fire, you shall not be burned; the flames will not set you ablaze.",
    relic: "Relic 03 — Fire Forged",
    song: "Through The Fire",
    reflection: "The flames tested my faith, but God was already waiting on the other side."
  },
  {
    id: 4,
    chapterLabel: "CHAPTER 04 — THE BREAKING",
    title: "Jesus Is The Healer",
    ref: "Jeremiah 30:17",
    theme: "Healing",
    text: "I will restore health to you and heal your wounds, declares the Lord.",
    relic: "Relic 04 — Jesus Is The Healer",
    song: "Healer's Cry",
    reflection: "He heals wounds no human hands can reach."
  },
  {
    id: 5,
    chapterLabel: "CHAPTER 05 — SCARS THAT SPEAK",
    title: "The Testimony",
    ref: "2 Corinthians 12:9",
    theme: "Testimony",
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    relic: "Relic 05 — Scars That Preach",
    song: "I'm On Fire",
    reflection: "The scars I wanted hidden became the testimony God used to speak."
  },
  {
    id: 6,
    chapterLabel: "CHAPTER 06 — THE ALTAR",
    title: "The Fire That Never Goes Out",
    ref: "Leviticus 6:13",
    theme: "Altar",
    text: "The fire must be kept burning on the altar continuously; it must not go out.",
    relic: "Relic 06 — Eternal Fire",
    song: "Eternal Fire",
    reflection: "The fire that tested me in the darkest valley never went out."
  },
]

export default function WordPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100 mb-6">THE WORD</h1>
          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-stone-900/60 border border-amber-400/10 mb-6">
            <p className="text-amber-100/80 text-sm leading-relaxed">
              Every theme in Stormbreakers begins with Scripture. The songs and testimonies are meant to point back to God's Word, not replace it.
            </p>
          </div>
          <div className="max-w-xl mx-auto space-y-1">
            <p className="text-amber-100/50 text-xs italic">This is my story — anchored in Scripture.</p>
            <p className="text-amber-100/50 text-xs italic">These are my songs — rooted in the Word.</p>
          </div>
        </div>

        <div className="space-y-6">
          {wordEntries.map((w) => (
            <div key={w.id} className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl">
              <p className="text-amber-400/50 text-xs tracking-[0.25em] font-black mb-1">{w.chapterLabel}</p>
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-amber-100 font-black text-lg">{w.title} — {w.ref}</h3>
                <span className="text-amber-400/50 text- tracking-widest font-black border border-amber-400/10 px-2 py-1 rounded">{w.theme.toUpperCase()}</span>
              </div>
              
              <p className="text-amber-100/70 italic text-sm mb-4">"{w.text}"</p>
              <p className="text-stone-400 text-xs italic mb-4">"{w.reflection}"</p>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-300">{w.relic}</span>
                <span className="px-3 py-1 bg-stone-800 border border-amber-400/10 rounded-full text-amber-200/50">Song: {w.song}</span>
                <Link href={`/chronicles/${w.id}`} className="px-3 py-1 bg-stone-800 border border-amber-400/10 rounded-full text-amber-200/60 hover:border-amber-400/30">→ {w.chapterLabel}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t border-amber-400/10">
          <p className="text-amber-400 font-black tracking-[0.3em] text-sm">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
          <p className="text-amber-200/20 text-xs mt-3">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
        </div>
      </div>
    </main>
  )
}
