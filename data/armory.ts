import Link from 'next/link'
import { armory } from '@/data/armory'

export default function ArmoryPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {armory.map((relic) => (
        <div key={relic.slug} className="bg-zinc-900 rounded-lg p-6 border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-2">{relic.relic}</h2>
          <p className="text-amber-400 text-sm mb-4">{relic.subtitle}</p>
          <p className="text-zinc-300 mb-4">{relic.declaration}</p>
          <p className="text-zinc-400 text-sm mb-4">{relic.scripture}</p>
          <p className="text-zinc-500 text-xs mb-4">{relic.reference}</p>
          
          <div className="flex gap-4 mt-4">
            {relic.youtube && (
              <Link href={relic.youtube} target="_blank" className="text-amber-400 hover:text-amber-300 text-sm">
                YouTube
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
    }
