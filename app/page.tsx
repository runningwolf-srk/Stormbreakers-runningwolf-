// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* HERO */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-6">
          Stormbreakers
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
          Begin with a song.<br/>
          Follow the story.<br/>
          Stand on the Word.
        </h1>
        <p className="mt-8 text-xl text-zinc-400 max-w-2xl">
          Sixteen songs forged in warfare. Sixteen testimonies anchored in Scripture.
        </p>
      </section>

      {/* SIGNATURE STATEMENT - ONCE */}
      <section className="py-16 border-y border-zinc-800 bg-zinc-900/50">
        <p className="text-center text-2xl md:text-3xl font-bold tracking-widest text-amber-400">
          THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.
        </p>
      </section>

      {/* THREE PATHS */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-amber-600/50 transition">
          <h3 className="text-2xl font-bold mb-3">The Armory</h3>
          <p className="text-zinc-400 mb-6">
            Worship songs and declarations. Each Relic carries a theme, Scripture, and battle declaration.
          </p>
          <Link 
            href="/armory" 
            className="inline-block px-6 py-3 bg-amber-600 text-black font-bold rounded-lg hover:bg-amber-500 transition"
          >
            Enter the Armory — Explore the songs
          </Link>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-amber-600/50 transition">
          <h3 className="text-2xl font-bold mb-3">The Chronicles</h3>
          <p className="text-zinc-400 mb-6">
            The testimony behind those songs. Not polished stories, but battle reports from the valley.
          </p>
          <Link 
            href="/chronicles" 
            className="inline-block px-6 py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition"
          >
            Read the Chronicles — Discover the testimony
          </Link>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-amber-600/50 transition">
          <h3 className="text-2xl font-bold mb-3">The Word</h3>
          <p className="text-zinc-400 mb-6">
            The biblical foundation. Every song and story connects back to Scripture.
          </p>
          <Link 
            href="/the-word" 
            className="inline-block px-6 py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition"
          >
            Study the Word — Explore the Scripture
          </Link>
        </div>
      </section>

      {/* FOOTER - Removed duplicate tagline */}
      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-800">
        <p>© {new Date().getFullYear()} Stormbreakers. Forged in fire. Anchored in the Word.</p>
      </footer>
    </main>
  )
}
