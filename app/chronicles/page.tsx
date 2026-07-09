import { chapters } from '../../data/chronicles'
import Link from 'next/link'

export const metadata = {
  title: 'The Chronicles | Stormbreakers',
  description: 'This is not Scripture. This is my story. Every chapter points back to The Word that saved me.',
}

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE CHRONICLES</h1>
          <p className="text-amber-400 font-bold text-lg mb-2">Our testimony responds.</p>
          <p className="text-amber-200/70 italic">
            This is not Scripture. This is my story. Every chapter points back to The Word that saved me.
          </p>
        </header>

        <div className="space-y-4">
          {chapters.map((chapter, i) => (
            <Link
              key={chapter.slug}
              href={`/chronicles/${chapter.slug}`}
              className="block p-6 border border-amber-400/20 hover:border-amber-400/60 hover:bg-amber-400/5 transition"
            >
              <span className="text-amber-400/60 text-sm">Chapter {i + 1}</span>
              <h2 className="text-2xl font-bold text-amber-200">{chapter.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
