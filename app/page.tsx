// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

const relicsPreview = [
  { num: "I", title: "The First Song", scripture: "Psalm 40:3", moment: "When God gives a new song after the storm." },
  { num: "II", title: "Battle Cry", scripture: "Joshua 1:9", moment: "When fear breaks and courage rises." },
  { num: "III", title: "Fire Forged", scripture: "Isaiah 43:2", moment: "When the fire refines instead of consuming." },
  { num: "IV", title: "Shield of Faith", scripture: "Ephesians 6:16", moment: "When faith becomes your defense." },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-amber-50 flex flex-col items-center px-4 pt-12 pb-12 overflow-x-hidden">
      {/* CINEMATIC GLOW - NOT BLOG */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">

        {/* AVATAR */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6">
          <div className="absolute inset-0 rounded-full bg-amber-500/40 blur-2xl animate-pulse"></div>
          <Image
            src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
            alt="Jessy Marquez - Running Wolf"
            fill
            className="rounded-full object-cover border border-amber-400/50 shadow-[0_0_40px_rgba(245,158,11,0.3)] relative z-10"
            priority
          />
        </div>

        <p className="text-amber-400 font-black tracking-[0.35em] text-sm sm:text-base mb-1">JESSY MARQUEZ</p>
        <p className="text-amber-200/60 tracking-[0.5em] text-xs font-bold mb-2">RUNNING WOLF</p>
        <p className="text-amber-500/50 text- tracking-[0.25em] font-bold uppercase mb-12">Cinematic Worship • Testimonies Forged in Fire</p>

        {/* FIXED TITLE - NO CUT OFF */}
        <div className="w-full overflow-hidden mb-6">
          <h1 className="font-black tracking-tighter leading-[0.9] text-center
            text-[13vw] sm:text-[10vw] md:text-8xl lg:text-[7rem]
            bg-gradient-to-b from-amber-100 via-amber-200 to-amber-500 bg-clip-text text-transparent
            drop-shadow-[0_2px_20px_rgba(245,158,11,0.4)] pb-2"
          >
            STORMBREAKERS
          </h1>
        </div>

        <p className="text-amber-100/90 text-lg sm:text-2xl font-bold leading-tight mb-6 max-w-3xl">
          Begin with a song. Follow the story. Stand on the Word.
        </p>

        <p className="text-amber-400 font-black tracking-[0.3em] text-sm mb-4">16 RELICS. ONE MISSION.</p>
        <p className="text-amber-200/50 text-sm sm:text-base max-w-2xl leading-relaxed mb-10">
          Every song anchored in Scripture, every testimony forged in fire, every act of worship for Jesus Christ.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center mb-20">
          <Link href="/armory" className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-base rounded-xl transition shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            ♫ Enter The Armory
          </Link>
          <Link href="/word" className="w-full sm:w-auto px-10 py-4 bg-stone-900 border border-amber-400/20 hover:border-amber-400/40 text-amber-400 font-black text-base rounded-xl transition">
            ✝ Read The Word
          </Link>
        </div>

        {/* RELICS - CINEMATIC CARDS NOT BLOG LIST */}
        <div className="w-full text-left mb-20">
          <h2 className="text-center text-2xl font-black text-amber-100 tracking-tight mb-2">THE RELICS</h2>
          <p className="text-center text-amber-200/30 text- tracking-[0.3em] font-black mb-8">16 TESTIMONIES FORGED IN FIRE</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relicsPreview.map((r) => (
              <Link key={r.num} href="/armory" className="group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 border border-amber-400/10 group-hover:border-amber-400/30 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all">
                  <p className="text-amber-400/70 text- tracking-[0.2em] font-black mb-3">RELIC {r.num} — {r.title.toUpperCase()}</p>
                  <p className="text-amber-200/60 text-xs mb-2">Scripture: <span className="text-amber-300 font-bold">{r.scripture}</span></p>
                  <p className="text-stone-300 text-sm italic">"{r.moment}"</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* WORD */}
        <div className="w-full p-8 rounded-[2rem] bg-stone-900/50 border border-amber-400/10 backdrop-blur mb-20 text-center">
          <p className="text-amber-400/50 text- tracking-[0.3em] font-black mb-4">THE WORD</p>
          <blockquote className="text-2xl sm:text-3xl font-black text-amber-100 leading-tight mb-3">
            “He put a new song in my mouth, a hymn of praise to our God.”
          </blockquote>
          <p className="text-amber-200/40 text-sm">Psalm 40:3 — The anthem of STORMBREAKERS</p>
        </div>

        {/* STORY + CTA */}
        <div className="w-full mb-10">
          <h2 className="text-3xl font-black text-amber-100 mb-2">THE STORY</h2>
          <p className="text-amber-400 text-xs tracking-[0.3em] font-black mb-4">NOT A BAND. NOT A BRAND. A TESTIMONY.</p>
          <p className="text-amber-100 text-xl font-black italic mb-10">Every song is a scar that sings.</p>

          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-stone-900 border border-amber-400/20 text-center">
            <p className="text-amber-100 font-black mb-2">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
            <p className="text-amber-200/50 mb-8">Enter the Storm. Hear the testimony. Stand on His Word.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/armory" className="px-8 py-3 bg-amber-500 text-stone-950 font-black rounded-xl">Listen to the Anthems</Link>
              <Link href="/chronicles" className="px-8 py-3 bg-stone-900 border border-amber-400/20 text-amber-400 font-black rounded-xl">Read The Chronicles</Link>
            </div>
          </div>
        </div>

        <p className="text-amber-200/20 text-xs mt-10">© 2026 Stormbreakers — Running Wolf</p>
      </div>
    </main>
  )
}
