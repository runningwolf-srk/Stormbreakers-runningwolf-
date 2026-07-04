'use client'
import Link from 'next/link'
import Image from 'next/image'
import { relics } from '@/data/relics'

export default function RelicsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">The Relics</h1>
        <p className="text-gray-400 mb-8">Eight weapons. Eight declarations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relics.map((relic) => (
            <Link 
              key={relic.slug} 
              href={`/relics/${relic.slug}`}
              className="group block border-amber-400/30 rounded-lg overflow-hidden hover:border-amber-400 transition-all"
            >
              <div className="aspect-square relative">
                <Image 
                  src={relic.image} 
                  alt={relic.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-zinc-900">
                <div className="text-amber-400 text-xs">RELIC</div>
                <div className="text-lg font-bold mt-1">{relic.title}</div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-amber-400 hover:underline">← Return to Stormbreakers</Link>
        </div>
      </div>
    </main>
  )
}
