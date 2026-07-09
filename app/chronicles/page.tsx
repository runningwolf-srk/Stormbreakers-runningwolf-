import { chapters } from '../../data/chronicles'
import Link from 'next/link'

export const metadata = {
  title: 'The Chronicles | Stormbreakers',
  description: 'The Testimony of RunningWolf. Written in Ash and Fire.',
}

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE CHRONICLES</h1>
          <p className="text-xl text-amber-200 mb-2">The Testimony of RunningWolf</p>
          <p className="text-amber-200/60 italic mb-6">Written in Ash and Fire</p>
          <p className="text-amber-200/70 italic border-t border-amber-400/20 pt-6">
            This is not Scripture. This is my story. Every chapter points back to The Word that saved me.
          </p>
        </header>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-amber-400 mb-6">Table of Contents</h2>
          {chapters.map((chapter, i) => (
            <Link
              key={chapter.slug}
              href={`/chronicles/${chapter.slug}`}
              className="block p-6 border border-amber-400/20 hover:border-amber-400/60 hover:bg-amber-400/5 transition"
            >
              <span className="text-amber-400/60 text-sm">Chapter {i + 1}</span>
              <h3 className="text-2xl font-bold text-amber-200">{chapter.title}</h3>
              <p className="text-amber-200/60 text-sm mt-1">{chapter.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
