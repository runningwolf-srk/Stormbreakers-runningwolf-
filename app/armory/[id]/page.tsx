// app/armory/[id]/page.tsx - FULL RELIC PAGE - 10/10
import Link from 'next/link'

const relics: any = {
  1: { label: "RELIC 01 — THE FIRST SONG", chapterLabel: "CHAPTER 01 — WORSHIP BEGINS", title: "The Map", song: "A New Song", theme: "Worship", ref: "Psalm 40:3", declaration: "He put a new song in my mouth.", reflection: "Psalm 23 wasn't poetry anymore. It was a map.", prayer: "God, give me a new song before You change my circumstances.", story: "When the storm came, the Shepherd's voice became my direction. Worship was not born on a stage. It was born in the valley. Psalm 23 transformed from poetry to a survival map.", behind: "Written in the valley when worship was the only weapon left." },
  2: { label: "RELIC 02 — BATTLE CRY", chapterLabel: "CHAPTER 02 — COURAGE RISES", title: "The Valley", song: "Warrior's Anthem", theme: "Spiritual Warfare", ref: "Joshua 1:9", declaration: "Be strong and courageous.", reflection: "The moment fear left and the warrior rose.", prayer: "I will not bow to fear. I will stand because You stand with me.", story: "God doesn't call the qualified, He qualifies the called.", behind: "Born the night fear broke and courage rose." },
  3: { label: "RELIC 03 — FIRE FORGED", chapterLabel: "CHAPTER 03 — REFINING FIRE", title: "The Fire", song: "Through The Fire", theme: "Refining Fire", ref: "Isaiah 43:2", declaration: "When you walk through fire, you shall not be burned.", reflection: "The flames tested my faith, but God was already waiting on the other side.", prayer: "Refine me, don't consume me.", story: "The fire didn't come to destroy me. It revealed what God was building inside me.", behind: "Forged in the fire that should have ended the story." },
  4: { label: "RELIC 04 — JESUS IS THE HEALER", chapterLabel: "CHAPTER 04 — THE BREAKING", title: "Jesus Is The Healer", song: "Healer's Cry", theme: "Healing", ref: "Jeremiah 30:17", declaration: "I will restore health to you.", reflection: "He heals wounds no human hands can reach.", prayer: "Jesus, heal what I cannot hide.", story: "Some wounds cannot be seen. Some battles happen where nobody knows. But God restores what life tried to steal.", behind: "Written when healing felt impossible." },
  5: { label: "RELIC 05 — SCARS THAT PREACH", chapterLabel: "CHAPTER 05 — SCARS THAT SPEAK", title: "The Testimony", song: "I'm On Fire", theme: "Testimony", ref: "2 Corinthians 12:9", declaration: "My weakness became the place where His strength was revealed.", reflection: "The scars I wanted hidden became the testimony God used to speak.", prayer: "Let my scars preach Your grace.", story: "The places I thought disqualified me became the places where God's grace was revealed. My grace is sufficient, for My power is made perfect in weakness.", behind: "Example: Artwork — A warrior standing after the fire. The scar is the sermon." },
  6: { label: "RELIC 06 — THE FIRE THAT NEVER GOES OUT", chapterLabel: "CHAPTER 06 — THE ALTAR", title: "The Fire That Never Goes Out", song: "Eternal Fire", theme: "Altar", ref: "Leviticus 6:13", declaration: "The fire must be kept burning.", reflection: "The fire that tested me in the darkest valley never went out.", prayer: "Keep the altar burning.", story: "The flame remains because God is still writing the story. The fire must be kept burning continuously.", behind: "The devotion after deliverance." },
}

export default function RelicPage({ params }: { params: { id: string } }) {
  const r = relics[Number(params.id)] || relics[1]

  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/armory" className="text-amber-400/40 text-xs tracking-widest mb-8 inline-block">← BACK TO ARMORY</Link>

        <div className="text-center mb-8">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">{r.label}</p>
          <p className="text-amber-400/30 text-xs mt-1">{String(r.id).padStart(2,'0')} / 16 • {r.chapterLabel}</p>
          <h1 className="text-4xl font-black text-amber-100 mt-3">{r.title}</h1>
          <p className="text-amber-200/40 text-xs mt-2">{r.theme} • {r.ref}</p>
        </div>

        {/* 1. CINEMATIC ARTWORK */}
        <div className="w-full h-72 bg-stone-800 rounded-2xl border border-amber-400/10 overflow-hidden flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900 mb-6">
          <p className="text-amber-200/10 text-xs tracking-[0.4em]">CINEMATIC ARTWORK: {r.title.toUpperCase()}</p>
        </div>

        {/* 2. SONG PLAYER */}
        <div className="p-5 bg-stone-900/60 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/40 text-xs tracking-[0.3em] font-black">SONG PLAYER</p>
          <p className="text-amber-100 font-black mt-1">{r.song}</p>
          <audio controls className="w-full mt-3 h-10">
            <source src={`/audio/${String(r.id).padStart(2,'0')}-preview.mp3`} type="audio/mpeg" />
          </audio>
        </div>

        {/* 3. SCRIPTURE CARD */}
        <div className="p-6 bg-amber-500/5 border border-amber-400/20 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">SCRIPTURE CARD</p>
          <p className="text-amber-300 font-bold mt-2">{r.ref}</p>
          <p className="text-amber-100 italic mt-2">"{r.declaration}"</p>
          <p className="text-amber-200/30 text-xs mt-3">{r.ref}</p>
        </div>

        {/* 4. TESTIMONY SECTION */}
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">TESTIMONY / REFLECTION</p>
          <p className="text-amber-100/80 italic mt-3">"{r.reflection}"</p>
          <p className="text-stone-300 text-sm leading-relaxed mt-4">{r.story}</p>
        </div>

        {/* 5. BEHIND-THE-SONG STORY */}
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">BEHIND THE SONG</p>
          <p className="text-stone-300 text-sm leading-relaxed mt-3">{r.behind}</p>
        </div>

        {/* 6. PRAYER / DECLARATION */}
        <div className="p-6 bg-stone-900 border border-amber-400/20 rounded-xl mb-8">
          <p className="text-amber-400 text-xs tracking-[0.3em] font-black">PRAYER / DECLARATION</p>
          <p className="text-amber-100 italic mt-3">"{r.prayer}"</p>
        </div>

        <p className="text-center text-amber-100/50 text-xs italic">This is my story — anchored in Scripture.<br/>These are my songs — rooted in the Word.</p>

        <div className="flex justify-between mt-8 text-xs font-black tracking-widest">
          <Link href={`/chronicles/${r.id}`} className="text-amber-400">→ READ CHRONICLE: {r.chapterLabel}</Link>
          <Link href="/word" className="text-amber-400/60">STUDY WORD →</Link>
        </div>
      </div>
    </main>
  )
}
