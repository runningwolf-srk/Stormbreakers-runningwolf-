import Link from 'next/link'
import { chapters } from '@/data/saga-chapters'

export default function SagaIndexPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-amber-400 font-serif mb-4">The Stormbreakers Saga</h1>
        <p className="text-gray-400 mb-12 text-lg">The chronicle of fire and oath.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter, idx) => (
            <Link 
              key={chapter.id}
              href={`/saga/chapter/${chapter.slug}`}
              className="group bg-zinc-900 border-2 border-amber-400/20 hover:border-amber-400 rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              {chapter.image && (
                <img src={chapter.image} alt={chapter.title} className="w-full h-48 object-cover opacity-70 group-hover:opacity-100 transition" />
              )}
              <div className="p-6">
                <div className="text-amber-400 text-sm font-mono mb-2">CHAPTER {String(idx).padStart(2, '0')}</div>
                <h2 className="text-2xl font-bold font-serif mb-2">{chapter.title}</h2>
                <p className="text-gray-500 italic">{chapter.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
