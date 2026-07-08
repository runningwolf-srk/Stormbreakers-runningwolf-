// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-amber-100">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-amber-400 tracking-widest mb-8">STORMBREAKERS</h1>
        
        <p className="text-2xl text-amber-200/80 mb-4">
          Begin with a song. Follow the story. Stand on the Word.
        </p>
        
        <p className="text-lg text-amber-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          One Mission. Every song anchored in Scripture, every testimony forged in fire, every act of worship for Jesus Christ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/armory" className="bg-amber-600 hover:bg-amber-500 text-black px-8 py-3 rounded font-bold transition">
            Enter The Armory
          </Link>
          <Link href="/chronicles" className="border border-amber-600 hover:bg-amber-600/10 text-amber-400 px-8 py-3 rounded font-bold transition">
            Read The Chronicles
          </Link>
        </div>

        <footer className="mt-32 pt-12 border-t border-amber-600/20 text-center">
          <p className="text-amber-400 font-bold text-lg">
            Jesus Christ is the center of them all.
          </p>
        </footer>
      </div>
    </main>
  )
}
