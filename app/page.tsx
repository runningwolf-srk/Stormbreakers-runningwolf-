// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

const relicsPreview = [
  { 
    num: "I", 
    title: "The First Song", 
    scripture: "Psalm 40:3", 
    moment: "When God gives a new song after the storm." 
  },
  { 
    num: "II", 
    title: "Battle Cry", 
    scripture: "Joshua 1:9", 
    moment: "When fear breaks and courage rises." 
  },
  { 
    num: "III", 
    title: "Fire Forged", 
    scripture: "Isaiah 43:2", 
    moment: "When the fire refines instead of consuming." 
  },
  { 
    num: "IV", 
    title: "Shield of Faith", 
    scripture: "Ephesians 6:16", 
    moment: "When faith becomes your defense." 
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 flex flex-col items-center px-4 pt-12 pb-12 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(239,68,68,0.06),transparent_70%)] pointer-events-none"></div>

      {/* HERO - Improvement #1 */}
      <div className="flex flex-col items-center mb-10 relative z-10 text-center">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-6">
          <div className="absolute inset-0 rounded-full bg-amber-500/30 blur-2xl animate-pulse"></div>
          <Image
            src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
            alt="Jessy Marquez - Running Wolf"
            fill
            className="rounded-full object-cover border-2 border-amber-400/60 relative z-10 shadow-2xl"
            priority
          />
        </div>

        <h1 className="text-amber-400 text-xl sm:text-2xl font-black tracking-[0.3em] mb-1">
          JESSY MARQUEZ
        </h1>
        <p className="text-amber-200/80 text-sm uppercase tracking-[0.4em] font-bold mb-3">
          RUNNING WOLF
        </p>
        <p className="text-amber-400/50 text- tracking-[0.2em] font-bold uppercase">
          Cinematic Worship • Testimonies Forged in Fire
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center text-center relative z-10">

        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none mb-6 bg-gradient-to-b from-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(245,158,11,0.3)]">
          STORMBREAKERS
        </h1>

        <p className="text-amber-100/90 text-xl sm:text-2xl mb-4 font-bold tracking-tight">
          Begin with a song. Follow the story. Stand on the Word.
        </p>

        <p className="text-amber-200/60 text-base mb-3">
          <span className="text-amber-400 font-black tracking-widest">16 RELICS. ONE MISSION.</span>
        </p>

        <p className="text-amber-200/60 text-sm sm:text-base mb-10 leading-relaxed max-w-2xl">
          Every song anchored in Scripture, every testimony forged in fire, every act of worship for Jesus Christ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24 w-full sm:w-auto">
          <Link href="/armory" className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-lg rounded-lg transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
            ♫ Enter The Armory
          </Link>
          <Link href="/chronicles" className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-amber-400/10 text-amber-400 font-black text-lg rounded-lg border-2 border-amber-400/40 hover:border-amber-400 transition flex items-center justify-center gap-2">
            ✝ Read The Word
          </Link>
        </div>

        {/* RELICS - Improvement #2: More Mystery */}
        <section className="w-full mb-24">
          <h2 className="text-3xl font-black text-amber-100 mb-2 tracking-tight">THE RELICS</h2>
          <p className="text-amber-200/40 text-xs tracking-[0.3em] font-black mb-10">16 TESTIMONIES FORGED IN FIRE</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {relicsPreview.map((relic) => (
              <Link key={relic.num} href={`/armory`} className="group">
                <div className="p-6 bg-stone-900/60 border border-amber-400/10 rounded-xl hover:border-amber-400/30 hover:bg-stone-900 transition-all duration-300 h-full">
                  <p className="text-amber-400/60 text- tracking-[0.3em] font-black mb-2">RELIC {relic.num} — {relic.title.toUpperCase()}</p>
                  <p className="text-amber-200/50 text-xs mb-1">Scripture: <span className="text-amber-300 font-bold">{relic.scripture}</span></p>
                  <p className="text-amber-100/70 text-sm italic mt-3">The moment: {relic.moment}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/armory" className="inline-block mt-8 text-amber-400 text-sm font-black tracking-widest hover:text-amber-300 transition">
            VIEW ALL 16 RELICS →
          </Link>
        </section>

        {/* THE WORD */}
        <section className="w-full mb-24 p-8 rounded-2xl bg-stone-900/50 border border-amber-400/10">
          <p className="text-amber-400/60 text- tracking-[0.3em] font-black mb-4">THE WORD</p>
          <blockquote className="text-2xl sm:text-3xl font-black text-amber-100 leading-tight mb-4">
            “He put a new song in my mouth, a hymn of praise to our God.”
          </blockquote>
          <p className="text-amber-200/50 text-sm">Psalm 40:3 — The anthem of STORMBREAKERS</p>
        </section>

        {/* THE STORY - Improvement #3: Call to Action */}
        <section className="w-full mb-12">
          <h2 className="text-3xl font-black text-amber-100 mb-4 tracking-tight">THE STORY</h2>
          <p className="text-amber-400 font-black text-sm tracking-[0.2em] mb-4">NOT A BAND. NOT A BRAND. A TESTIMONY.</p>
          <p className="text-amber-200/70 text-lg leading-relaxed max-w-2xl mx-auto mb-2">
            From the pit to the pulpit, from chains to Christ.
          </p>
          <p className="text-amber-100 text-xl font-black italic mb-10">
            Every song is a scar that sings.
          </p>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-400/20">
            <p className="text-amber-100 font-black text-lg mb-2 tracking-wide">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
            <p className="text-amber-200/60 text-base mb-8">Enter the Storm. Hear the testimony. Stand on His Word.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/armory" className="px-8 py-3 bg-amber-500 text-stone-950 font-black rounded-lg hover:bg-amber-400 transition">
                Listen to the Anthems
              </Link>
              <Link href="/chronicles" className="px-8 py-3 bg-stone-900 border border-amber-400/20 text-amber-400 font-black rounded-lg hover:border-amber-400/40 transition">
                Read The Chronicles
              </Link>
              <Link href="/word" className="px-8 py-3 bg-transparent border border-amber-400/20 text-amber-200/70 font-black rounded-lg hover:text-amber-100 transition">
                Study The Word
              </Link>
            </div>
          </div>
        </section>

        <p className="text-amber-200/20 text-xs mt-8">© 2026 Stormbreakers — Running Wolf</p>

      </div>
    </main>
  )
}
