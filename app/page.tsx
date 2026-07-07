// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-amber-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-amber-400 tracking-widest mb-6">STORMBREAKERS</h1>
      <p className="max-w-2xl text-lg text-amber-200/80 mb-8">
        A cinematic Christian worship universe where every song, Scripture, and story points to Jesus Christ.
      </p>
      <div className="text-xl text-amber-300 tracking-widest mb-12">
        16 RELICS • 16 SONGS • ONE KING
      </div>
      
      <nav className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link href="/armory" className="bg-amber-600 hover:bg-amber-500 text-black px-8 py-4 rounded font-bold text-lg transition">
          🎵 Songs
        </Link>
        <Link href="/chronicles" className="border border-amber-600 hover:bg-amber-600/10 text-amber-300 px-8 py-4 rounded font-bold text-lg transition">
          📖 Story
        </Link>
        <Link href="/word" className="border border-amber-600 hover:bg-amber-600/10 text-amber-300 px-8 py-4 rounded font-bold text-lg transition">
          ✝️ Scripture
        </Link>
      </nav>

      <footer>
        <Link href="/valley" className="text-amber-500/60 hover:text-amber-400 transition">
          ⚔️ The Valley — Coming Soon
        </Link>
      </footer>
    </main>
  )
}
