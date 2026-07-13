// components/relics/RelicCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Relic } from '@/data/armory'

type Props = {
  relic: Relic
}

export function RelicCard({ relic }: Props) {
  return (
    <div className="bg-stone-900 border border-amber-600/30 rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={relic.image}
          alt={relic.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <span className="inline-block px-2 py-1 text-xs font-bold uppercase bg-amber-400/10 text-amber-400 rounded mb-3">
          {relic.theme}
        </span>
        
        <h3 className="text-2xl font-bold text-amber-100 mb-2">
          {relic.title}
        </h3>
        
        <p className="text-amber-200/70 text-sm mb-4">
          {relic.description}
        </p>

        {relic.lyrics && (
          <p className="text-amber-300/60 text-sm mb-2">
            <span className="font-semibold">Song:</span> {relic.lyrics}
          </p>
        )}
        
        {relic.scriptureRef && (
          <p className="text-amber-300/60 text-sm mb-4">
            <span className="font-semibold">Scripture:</span> {relic.scriptureRef}
          </p>
        )}
        
        <Link 
          href={`/chronicles/${relic.slug}`}
          className="inline-block text-amber-400 hover:text-amber-300 text-sm font-semibold transition"
        >
          View Chronicle →
        </Link>
      </div>
    </div>
  )
}
