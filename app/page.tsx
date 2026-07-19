// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

const relics = [
  { id: 1, title: "The First Song", verse: "Psalm 40:3", img: "/relics/relic1.jpg" },
  { id: 2, title: "Battle Cry", verse: "Joshua 1:9", img: "/relics/relic2.jpg" },
  { id: 3, title: "Fire Forged", verse: "Isaiah 43:2", img: "/relics/relic3.jpg" },
  { id: 4, title: "Shield of Faith", verse: "Ephesians 6:16", img: "/relics/relic4.jpg" },
  // Add your other 12 relics here...
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 flex flex-col items-center px-4 pt-12 pb-12 relative overflow-hidden">
      {/* Subtle storm background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(239,68,68,0.05),transparent_60%)] pointer-events-none"></div>

      {/* Avatar + Name */}
      <div className="flex flex-col items-center mb-10 relative z-10">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-5">
          <div className="absolute inset-0 rounded-full bg-amber-500/30 blur-2xl animate-pulse"></div>
          <div className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-amber-400/20 to-orange-600/20 blur-xl"></div>
          <Image
            src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
            alt="Jessy Marquez - Running Wolf"
            fill
            className="rounded-full object-cover border-2 border-amber-400/60 relative z-10 shadow-2xl shadow-amber-500/20"
            priority
          />
        </div>

        <h1 className="text-amber-400 text-xl sm:text-2xl font-black tracking-[0.25em] mb-1 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
          JESSY MARQUEZ
        </h1>
        <p className="text-amber-200/50 text-xs uppercase tracking-[0.3em] font-bold">
          RUNNINGWOLF
        </p>
      </div>

      {/* Centered Wrapper for Everything Else */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center relative z-10">

        {/* Title */}
        <h1 className="text-[14vw] sm:text-7xl font-black tracking-tighter leading-none mb-6 bg-gradient-to-b from-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(245,158,11,0.3)] px-4 break-words">
          STORMBREAKERS
        </h1>

        <p className="text-amber-100/80 text-lg sm:text-xl mb-3 font-mono leading-relaxed">
          Begin with a song. Follow the story.<br/>Stand on the Word.
        </p>

        <p className="text-amber-200/60 text-sm sm:text-base mb-10 leading-relaxed max-w-2xl px-2">
          16 relics. One mission. Every song anchored in Scripture, every testimony
          forged in fire, every act of worship for Jesus Christ.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 w-full sm:w-auto">
          <Link
            href="/armory"
            className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-lg rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02]"
          >
            <span>♫</span> Enter The Armory
          </Link>

          <Link
            href="/chronicles"
            className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-amber-400/10 text-amber-400 font-black text-lg rounded-lg border-2 border-amber-400/40 hover:border-amber-400 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>✝</span> Read The Word
          </Link>
        </div>

        {/* Relics Section */}
        <section className="w-full mb-20">
          <h2 className="text-3xl font-black text-amber-100 mb-2 tracking-tight">THE RELICS</h2>
          <p className="text-amber-200/50 text-sm mb-8">16 testimonies forged in fire</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relics.map((relic) => (
              <Link key={relic.id} href={`/relic/${relic.id}`} className="group">
                <div className="relative aspect-square bg-stone-900 rounded-xl border border-amber-400/10 group-hover:border-amber-400/30 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-4 h-full flex flex-col justify-end text-left">
                    <p className="text-amber-400 text-xs font-bold mb-1">{relic.verse}</p>
                    <p className="text-amber-100 text-sm font-bold leading-tight">{relic.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bible Section */}
        <section className="w-full mb-20 p-8 rounded-2xl bg-stone-900/50 border border-amber-400/10">
          <p className="text-amber-400 text-xs tracking-[0.3em] font-black mb-4">THE WORD</p>
          <blockquote className="text-xl sm:text-2xl font-bold text-amber-100 leading-relaxed mb-4">
            “He put a new song in my mouth, a hymn of praise to our God.”
          </blockquote>
          <p className="text-amber-200/60 text-sm">Psalm 40:3 — The anthem of STORMBREAKERS</p>
        </section>

        {/* Story Section */}
        <section className="w-full mb-12">
          <h2 className="text-3xl font-black text-amber-100 mb-4 tracking-tight">THE STORY</h2>
          <p className="text-amber-200/70 text-base leading-relaxed max-w-2xl mx-auto">
            Not a band. Not a brand. A testimony. From the pit to the pulpit,
            from chains to Christ. Every song is a scar that sings.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-amber-400/10 w-full">
          <p className="text-amber-400 text-sm font-black tracking-widest">
            Jesus Christ is the center of them all.
          </p>
          <p className="text-amber-200/30 text-xs mt-2">© {new Date().getFullYear()} Stormbreakers — Running Wolf</p>
        </div>

      </div>
    </main>
  )
          }
