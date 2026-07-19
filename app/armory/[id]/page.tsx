// app/armory/[id]/page.tsx - 10/10 COMPLETE RELIC EXPERIENCE
import Link from 'next/link'

const relics: any = {
  1: {
    label: "RELIC 01 — THE FIRST SONG", chapterLabel: "CHAPTER 01 — WORSHIP BEGINS", title: "The Map", song: "A New Song", theme: "Worship", ref: "Psalm 40:3", verse: "He put a new song in my mouth, a hymn of praise to our God.", symbol: "🎵", artwork: "/images/relics/01-the-map.jpg", reflection: "Psalm 23 wasn't poetry anymore. It was a map.", story: "When the storm came, the Shepherd's voice became my direction. Worship was not born on a stage. It was born in the valley. God gave me a new song before He changed my circumstances.", behind: "Written in the valley when worship was the only weapon left. This is why Stormbreakers exists.", declaration: "God gives songs before He gives solutions.", prayer: "Father, give me a new song in this battle. Let my worship be my map.", lyrics: "You put a new song in my mouth / When the night was closing in / Psalm 23 became my map / Shepherd lead me home again..."
  },
  2: {
    label: "RELIC 02 — BATTLE CRY", chapterLabel: "CHAPTER 02 — COURAGE RISES", title: "The Valley", song: "Warrior's Anthem", theme: "Spiritual Warfare", ref: "Joshua 1:9", verse: "Be strong and courageous. Do not be afraid; for the Lord your God will be with you wherever you go.", symbol: "⚔️", artwork: "/images/relics/02-valley.jpg", reflection: "The moment fear left and the warrior rose.", story: "God does not call the qualified. He qualifies the called. The battle was never about my strength.", behind: "Born the night fear broke and the warrior rose. The call to stand.", declaration: "I will not bow to fear. I will stand because You stand with me.", prayer: "Make me brave where I have been afraid.", lyrics: "The moment fear left / The warrior rose / You called me out of hiding / Out of the shadows..."
  },
  3: {
    label: "RELIC 03 — FIRE FORGED", chapterLabel: "CHAPTER 03 — REFINING FIRE", title: "The Fire", song: "Through The Fire", theme: "Refining Fire", ref: "Isaiah 43:2", verse: "When you walk through fire, you shall not be burned; the flames will not set you ablaze.", symbol: "🔥", artwork: "/images/relics/03-fire.jpg", reflection: "The flames tested my faith, but God was already waiting on the other side.", story: "The fire did not come to destroy me. It revealed what God was building inside me.", behind: "Symbol: Forged blade. The flames refined me; they did not define me.", declaration: "The flames refined me; they did not define me.", prayer: "Refine me, don't consume me. Let me come out as gold.", lyrics: "Through the fire / You were waiting on the other side / Not burned, not broken / Forged for Your glory..."
  },
  4: {
    label: "RELIC 04 — JESUS IS THE HEALER", chapterLabel: "CHAPTER 04 — THE BREAKING", title: "Jesus Is The Healer", song: "Healer's Cry", theme: "Healing", ref: "Jeremiah 30:17", verse: "I will restore health to you and heal your wounds, declares the Lord.", symbol: "✚", artwork: "/images/relics/04-healer.jpg", reflection: "He heals wounds no human hands can reach.", story: "Some wounds cannot be seen. Some battles happen where nobody knows. But God restores what life tried to steal.", behind: "Written when healing felt impossible and Jesus became the only answer.", declaration: "Jesus heals what people cannot reach.", prayer: "Jesus, heal what I have learned to hide.", lyrics: "You heal wounds no hands can reach / Restore what life stole from me / Jesus, Healer, breathe again..."
  },
  5: {
    label: "RELIC 05 — SCARS THAT PREACH", chapterLabel: "CHAPTER 05 — SCARS THAT SPEAK", title: "The Testimony", song: "I'm On Fire", theme: "Testimony", ref: "2 Corinthians 12:9", verse: "My grace is sufficient for you, for my power is made perfect in weakness.", symbol: "🩸", artwork: "/images/relics/05-scars.jpg", reflection: "The scars I wanted hidden became the testimony God used to speak.", story: "The places I thought disqualified me became the places where God's grace was revealed.", behind: "Artwork: A warrior standing after the fire. The scar is the sermon.", declaration: "My weakness became the place where His strength was revealed.", prayer: "Let my scars preach Your grace.", lyrics: "These scars that I hid / Now they sing of Your grace / What tried to break me / Became my testimony..."
  },
  6: {
    label: "RELIC 06 — THE FIRE THAT NEVER GOES OUT", chapterLabel: "CHAPTER 06 — THE ALTAR", title: "The Fire That Never Goes Out", song: "Eternal Fire", theme: "Altar", ref: "Leviticus 6:13", verse: "The fire must be kept burning on the altar continuously; it must not go out.", symbol: "🕯️", artwork: "/images/relics/06-altar.jpg", reflection: "The fire that tested me in the darkest valley never went out.", story: "The flame remains because God is still writing the story. The fire must be kept burning continuously.", behind: "The devotion after deliverance. Not survival fire. Altar fire.", declaration: "The fire that tested me now fuels my worship.", prayer: "Keep the altar burning in me. Let it never go out.", lyrics: "From valley fire to altar flame / You never let it go out / Eternal fire, burn in me..."
  },
}

export default function RelicPage({ params }: { params: { id: string } }) {
  const r = relics[Number(params.id)] || relics[1]
  const paddedId = String(r.id).padStart(2, '0')

  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/armory" className="text-amber-400/40 text-xs tracking-widest mb-8 inline-block hover:text-amber-400">← BACK TO ARMORY</Link>

        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-2xl mb-4">{r.symbol}</div>
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">{r.label}</p>
          <p className="text-amber-400/30 text-xs mt-1">{paddedId} / 16 • {r.chapterLabel}</p>
          <h1 className="text-4xl font-black text-amber-100 mt-3">{r.title}</h1>
          <p className="text-amber-200/40 text-xs mt-2">{r.theme} • {r.ref}</p>
        </div>

        {/* 1. ARTWORK */}
        <div className="w-full h-80 bg-stone-800 rounded-2xl border border-amber-400/10 overflow-hidden relative mb-6 bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
          <p className="text-amber-200/10 text-xs tracking-[0.4em]">CINEMATIC ARTWORK: {r.title.toUpperCase()}</p>
        </div>

        {/* 2. SONG PLAYER */}
        <div className="p-5 bg-stone-900/60 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/40 text-xs tracking-[0.3em] font-black">🎵 SONG PLAYER</p>
          <p className="text-amber-100 font-black mt-1 text-lg">{r.song}</p>
          <audio controls className="w-full mt-3 h-10 rounded">
            <source src={`/audio/${paddedId}-preview.mp3`} type="audio/mpeg" />
          </audio>
          <div className="mt-3 w-full aspect-video bg-stone-900 rounded-lg border border-amber-400/10 flex items-center justify-center">
            <p className="text-amber-200/10 text-xs">VIDEO: {r.song.toUpperCase()}</p>
          </div>
        </div>

        {/* 3. SCRIPTURE CARD */}
        <div className="p-6 bg-amber-500/5 border border-amber-400/20 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">✝️ SCRIPTURE CARD</p>
          <p className="text-amber-300 font-bold mt-2">{r.ref}</p>
          <p className="text-amber-100 italic mt-2 text-lg">"{r.verse}"</p>
        </div>

        {/* 4. TESTIMONY */}
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">📖 TESTIMONY / CHRONICLE</p>
          <p className="text-amber-100/80 italic mt-3">"{r.reflection}"</p>
          <p className="text-stone-300 text-sm leading-relaxed mt-4">{r.story}</p>
          <Link href={`/chronicles/${r.id}`} className="inline-block mt-4 text-amber-400 text-xs font-black tracking-widest">→ READ FULL CHAPTER: {r.chapterLabel}</Link>
        </div>

        {/* 5. LYRICS */}
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">📝 LYRICS</p>
          <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-line mt-3 italic">{r.lyrics}</p>
        </div>

        {/* 6. BEHIND THE SONG */}
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">⚔️ BEHIND THE SONG</p>
          <p className="text-stone-300 text-sm leading-relaxed mt-3">{r.behind}</p>
        </div>

        {/* 7. PRAYER + DECLARATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-stone-900 border border-amber-400/20 rounded-xl">
            <p className="text-amber-400 text-xs tracking-[0.3em] font-black">DECLARATION</p>
            <p className="text-amber-100 font-bold mt-3">"{r.declaration}"</p>
          </div>
          <div className="p-5 bg-amber-500/5 border border-amber-400/20 rounded-xl">
            <p className="text-amber-400 text-xs tracking-[0.3em] font-black">PRAYER</p>
            <p className="text-amber-100/80 italic mt-3 text-sm">"{r.prayer}"</p>
          </div>
        </div>

        <p className="text-center text-amber-100/50 text-xs italic">This is my story — anchored in Scripture.<br/>These are my songs — rooted in the Word.</p>
        <p className="text-center mt-8 text-amber-400 font-black tracking-[0.3em] text-xs">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
      </div>
    </main>
  )
}
