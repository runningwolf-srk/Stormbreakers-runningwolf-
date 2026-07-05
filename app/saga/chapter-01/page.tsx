// app/saga/chapter-01/page.tsx
import Link from 'next/link'
import { getRelicByChapter } from '@/data/relics'

export default function Chapter01() {
  const relic = getRelicByChapter(1)!
  
  return (
    <main className="min-h-screen bg-black text-white p-6 max-w-2xl mx-auto">
      <Link href="/saga" className="text-yellow-500 mb-4 block">← The Saga</Link>
      
      <div className="border border-yellow-600 rounded-lg overflow-hidden">
        <img 
          src={relic.image} 
          alt={relic.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-yellow-500 mb-2">
            Chapter I: The Unnamed
          </h1>
          <p className="text-gray-400 italic mb-6">Where It Begins</p>
          
          <div className="border-l-4 border-yellow-500 pl-4 mb-6">
            <p className="text-lg leading-relaxed">{relic.declaration}</p>
          </div>
          
          <p className="text-right text-yellow-500 mb-8">— {relic.verse.ref}</p>
          
          <Link href={`/relics/${relic.slug}`}>
            <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition">
              LISTEN TO THE RELIC →
            </button>
          </Link>
          
          <p className="text-center text-gray-500 mt-6">Chapter 01 / 08</p>
        </div>
      </div>
    </main>
  )
}
