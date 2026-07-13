// app/word/page.tsx
import { armory } from '@/data/armory'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function TheWordPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-5xl font-black mb-4 text-amber-100">The Word</h1>
        <p className="text-amber-200/80 mb-12 text-xl">
          Every relic carries a word. Every word carries power.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {armory.map((relic) => (
            <Link
              key={relic.slug}
              href={`/chronicles/${relic.slug}`}
              className="group block bg-amber-400/5 border border-amber-400/20 rounded-lg overflow-hidden hover:bg-amber-400/10 hover:border-amber-400/40 transition-all duration-200"
            >
              <div className="relative w-full h-48">
                <Image
                  src={relic.image}
                  alt={relic.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-1 text-xs font-bold uppercase bg-amber-400/10 text-amber-400 rounded mb-3">
                  {relic.theme}
                </span>
                <h2 className="text-amber-100 font-bold text-xl mb-2 group-hover:text-amber-300 transition">
                  {relic.title}
                </h2>
                <p className="text-amber-200/70 text-sm line-clamp-2 mb-3">
                  {relic.description}
                </p>
                <div className="text-xs text-amber-300/60 space-y-1">
                  {relic.lyrics && <p>Song: {relic.lyrics}</p>}
                  {relic.scriptureRef && <p>Scripture: {relic.scriptureRef}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
