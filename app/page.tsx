// app/page.tsx - 100% Perfect Pre-Music Version
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
    <main className="min-h-screen bg-[#0a0a0a] text-amber-50 flex flex-col items-center px-5 pt-12 pb-12 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">

        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-5">
          <div className="absolute inset-0 rounded-full bg-amber-500/30 blur-xl"></div>
          <Image src="/729068345_1706992463868756_7233760520950384832_n~2.jpg" alt="Jessy Marquez - Running Wolf" fill className="rounded-full object-cover border border-amber-400/50 relative z-10" priority />
        </div>

        <p className="text-amber-400 font-black tracking-[0.35em] text-sm mb-1">JESSY MARQUEZ</p>
        <p className="text-amber-200/50 tracking-[0.5em] text-xs font-bold mb-3">RUNNING WOLF</p>
        <p className="text-amber-500/40 text-[10px] tracking-[0.25em] font-bold uppercase mb-10">WORSHIP ANTHEMS • TESTIMONY • BOOK TO BOOK</p>

        {/* 100% FIX - NEVER CUTS OFF */}
        <h1 className="w-full text-center font-black tracking-tighter leading-none mb-6
          text-4xl sm:text-7xl md:text-8xl
          bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-transparent">
          STORMBREAKERS
        </h1>

        <p className="text-amber-100/90 text-lg sm:text-xl font-bold mb-6 max-w-2xl leading-snug">
          Begin with a song. Follow the story. Stand on the Word.
        </p>

        <p className="text-amber-400 font-black tracking-[0.3em] text-xs mb-3">16 RELICS. ONE MISSION.</p>
        <p className="text-amber-200/50 text-sm max-w-2xl leading-relaxed mb-10">
          Every song anchored in Scripture, every testimony forged in fire, every act of worship for Jesus Christ.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none justify-center mb-16">
          <Link href="/armory" className="px-8 py-3.5 bg-amber-500 text-stone-950 font-black rounded-xl hover:bg-amber-400 transition">♫ Enter The Armory</Link>
          <Link href="/word" className="px-8 py-3.5 bg-stone-900 border border-amber-400/20 text-amber-400 font-black rounded-xl">✝ Read The Word</Link>
        </div>

        <div className="w-full text-left mb-16">
          <h2 className="text-center text-xl font-black text-amber-100 mb-1">THE RELICS</h2>
          <p className="text-center text-amber-200/30 text-[10px] tracking-[0.3em] font-black mb-6">16 TESTIMONIES FORGED IN FIRE</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relicsPreview.map((r) => (
              <Link key={r.num} href="/armory" className="group">
                <div className="p-5 rounded-xl bg-stone-900/60 border border-amber-400/10 group-hover:border-amber-400/20 transition">
                  <p className="text-amber-400/60 text-[10px] tracking-widest font-black mb-2">RELIC {r.num} — {r.title.toUpperCase()}</p>
                  <p className="text-amber-200/50 text-xs">Scripture: {r.scripture}</p>
                  <p className="text-stone-300 text-sm italic mt-2">"{r.moment}"</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full p-6 rounded-xl bg-stone-900/50 border border-amber-400/10 mb-16 text-center">
          <blockquote className="text-xl sm:text-2xl font-black text-amber-100 mb-2">“He put a new song in my mouth, a hymn of praise to our God.”</blockquote>
          <p className="text-amber-200/40 text-xs">Psalm 40:3 — The anthem of STORMBREAKERS</p>
          <p className="text-amber-200/20 text-[10px] tracking-widest font-bold mt-4 pt-4 border-t border-amber-400/10">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
        </div>

        <div className="w-full text-center">
          <p className="text-amber-400 text-[10px] tracking-[0.3em] font-black mb-2">NOT A BAND. NOT A BRAND. A TESTIMONY.</p>
          <p className="text-amber-100 font-black italic mb-8">Every song is a scar that sings.</p>
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-stone-900 border border-amber-400/15">
            <p className="text-amber-100 font-black text-sm mb-1">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
            <p className="text-amber-200/40 text-xs mb-6">Music. Story. Scripture.</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link href="/armory" className="px-6 py-2.5 bg-amber-500 text-stone-950 font-black rounded-lg text-sm">Listen to the Anthems</Link>
              <Link href="/chronicles" className="px-6 py-2.5 bg-stone-900 border border-amber-400/20 text-amber-400 font-black rounded-lg text-sm">Read The Chronicles</Link>
            </div>
          </div>
        </div>

        <p className="text-amber-200/20 text-[10px] mt-12">© 2026 Stormbreakers — Running Wolf</p>
      </div>
    </main>
  )
}
