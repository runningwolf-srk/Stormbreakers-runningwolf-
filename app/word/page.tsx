// app/word/page.tsx - THE WORD - 10/10 - Scripture First, Chapter Second
import Link from 'next/link'

const wordEntries = [
  {
    id: 1,
    ref: "Psalm 40:3",
    verse: "He put a new song in my mouth, a hymn of praise to our God. Many will see and fear the Lord and put their trust in him.",
    theme: "WORSHIP",
    chapterLabel: "CHAPTER 01 — WORSHIP BEGINS",
    chapterTitle: "The Map",
    relic: "RELIC 01 — THE FIRST SONG",
    song: "A New Song",
    testimony: "Psalm 23 wasn't poetry anymore. It was a map.",
    story: "When the storm came, the Shepherd's voice became my direction. Worship was not born on a stage. It was born in the valley."
  },
  {
    id: 2,
    ref: "Joshua 1:9",
    verse: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    theme: "SPIRITUAL WARFARE",
    chapterLabel: "CHAPTER 02 — COURAGE RISES",
    chapterTitle: "The Valley",
    relic: "RELIC 02 — BATTLE CRY",
    song: "Warrior's Anthem",
    testimony: "The moment fear left and the warrior rose.",
    story: "God does not call the qualified. He qualifies the called."
  },
  {
    id: 3,
    ref: "Isaiah 43:2",
    verse: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned.",
    theme: "REFINING FIRE",
    chapterLabel: "CHAPTER 03 — REFINING FIRE",
    chapterTitle: "The Fire",
    relic: "RELIC 03 — FIRE FORGED",
    song: "Through The Fire",
    testimony: "The flames tested my faith, but God was already waiting on the other side.",
    story: "The fire did not come to destroy me. It revealed what God was building inside me."
  },
  {
    id: 4,
    ref: "Jeremiah 30:17",
    verse: "But I will restore you to health and heal your wounds, declares the Lord.",
    theme: "HEALING",
    chapterLabel: "CHAPTER 04 — THE BREAKING",
    chapterTitle: "Jesus Is The Healer",
    relic: "RELIC 04 — JESUS IS THE HEALER",
    song: "Healer's Cry",
    testimony: "He heals wounds no human hands can reach.",
    story: "Some wounds cannot be seen. Some battles happen where nobody knows."
  },
  {
    id: 5,
    ref: "2 Corinthians 12:9",
    verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
    theme: "TESTIMONY",
    chapterLabel: "CHAPTER 05 — SCARS THAT SPEAK",
    chapterTitle: "The Testimony",
    relic: "RELIC 05 — SCARS THAT PREACH",
    song: "I'm On Fire",
    testimony: "The scars I wanted hidden became the testimony God used to speak.",
    story: "The places I thought disqualified me became the places where God's grace was revealed."
  },
  {
    id: 6,
    ref: "Leviticus 6:13",
    verse: "The fire must be kept burning on the altar continuously; it must not go out.",
    theme: "ALTAR",
    chapterLabel: "CHAPTER 06 — THE ALTAR",
    chapterTitle: "The Fire That Never Goes Out",
    relic: "RELIC 06 — ETERNAL FIRE",
    song: "Eternal Fire",
    testimony: "The fire that tested me in the darkest valley never went out.",
    story: "The flame remains because God is still writing the story."
  },
]

export default function WordPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER - Mission */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100">THE WORD</h1>
          <p className="text-amber-400/60 text-xs tracking-[0.4em] font-black mt-3">THE FOUNDATION</p>
          
          <div className="max-w-2xl mx-auto mt-8 p-6 rounded-xl bg-stone-900/60 border border-amber-400/10">
            <p className="text-amber-100 text-sm leading-relaxed font-medium">
              Every theme in Stormbreakers begins with Scripture. The songs and testimonies are meant to point back to God's Word, not replace it.
            </p>
            <p className="text-amber-200/40 text-xs italic mt-4 leading-relaxed">
              This is my story — anchored in Scripture.<br/>
              These are my songs — rooted in the Word.
            </p>
          </div>

          <p className="text-amber-200/20 text-xs mt-6 tracking-[0.2em]">SCRIPTURE → TESTIMONY → RELIC → SONG</p>
        </div>

        {/* ENTRIES - Scripture First */}
        <div className="space-y-8">
          {wordEntries.map((w) => (
            <div key={w.id} className="rounded-2xl bg-stone-900/40 border border-amber-400/10 overflow-hidden">
              
              {/* TOP BAR - Scripture is Primary */}
              <div className="p-6 bg-amber-500/[0.04] border-b border-amber-400/10">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-amber-400 text-xs tracking-[0.3em] font-black">{w.theme}</p>
                    <h3 className="text-2xl font-black text-amber-100 mt-1">{w.ref}</h3>
                  </div>
                  <span className="text-amber-400/30 text-xs font-black border border-amber-400/10 px-3 py-1 rounded-full">{String(w.id).padStart(2,'0')} / 16</span>
                </div>

                {/* SCRIPTURE - Largest Visual Emphasis */}
                <div className="mt-5 p-5 bg-stone-950/60 border border-amber-400/20 rounded-xl">
                  <p className="text-amber-100 text-lg leading-relaxed font-medium italic">"{w.verse}"</p>
                  <p className="text-amber-400/60 text-xs font-black tracking-widest mt-3">— {w.ref}</p>
                </div>
              </div>

              {/* BOTTOM - Testimony is Secondary */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-amber-400/40 text-xs tracking-[0.25em] font-black">TESTIMONY RESPONSE</p>
                  <p className="text-stone-300 text-sm italic mt-2">"{w.testimony}"</p>
                  <p className="text-stone-400 text-xs leading-relaxed mt-2">{w.story}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-amber-400/10">
                  <Link href={`/chronicles/${w.id}`} className="px-3 py-1.5 bg-stone-800 border border-amber-400/10 rounded-full text-amber-200/60 text-xs hover:border-amber-400/30 transition">
                    {w.chapterLabel}: {w.chapterTitle}
                  </Link>
                  <Link href={`/armory/${w.id}`} className="px-3 py-1.5 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-300 text-xs hover:bg-amber-500/20 transition">
                    {w.relic} • {w.song}
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t border-amber-400/10">
          <p className="text-amber-400 font-black tracking-[0.3em] text-sm">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
          <p className="text-amber-200/20 text-xs mt-3 tracking-[0.3em]">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
        </div>

      </div>
    </main>
  )
}
