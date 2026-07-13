// app/armory/page.tsx
export const dynamic = 'force-dynamic'

import { allRelics } from '@/data/armory'
import { RelicCard } from '@/components/relics/RelicCard'

export default function ArmoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">The Armory</h1>

      {!armory || armory.length === 0? (
        <p className="text-center text-red-500">No relics found. Check data/armory/index.ts</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {armory.map((relic) => (
            <RelicCard key={relic.slug} relic={relic} />
          ))}
        </div>
      )}
    </main>
  )
}
