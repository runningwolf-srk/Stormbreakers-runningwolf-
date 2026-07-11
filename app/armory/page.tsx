import Link from 'next/link'
import Image from 'next/image'
import { armory } from '@/data/armory'
import type { Relic } from '@/data/armory'

export default function ArmoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 text-center">The Armory</h1>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          17 weapons forged in the valley. Each one a testimony. Each one a war cry.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {armory.map((relic: Relic) => (
            <div key={relic.slug} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all">
              {relic.image && (
                <div className="relative w-full h-64 bg-zinc-950">
                  <Image 
                    src={relic.image} 
                    alt={relic.relic}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white mb-1">{relic.relic}</h2>
                  <p className="text-amber-400 text-sm">{relic.subtitle}</p>
                </div>
                
                <p className="text-zinc-300 mb-4 font-medium">{relic.declaration}</p>
                
                <div className="mb-4">
                  <p className="text-zinc-400 text-sm italic mb-1">{relic.scripture}</p>
                  <p className="text-zinc-500 text-xs">{relic.reference}</p>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full">
                    {relic.primaryTheme}
                  </span>
                </div>
                
                <div className="flex gap-4 mt-6">
                  {relic.youtube && (
                    <Link 
                      href={relic.youtube} 
                      target="_blank" 
                      className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                    >
                      YouTube
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
