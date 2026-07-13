import { armory } from '@/data/armory'  // <- now this works
import { RelicCard } from '@/components/relics/RelicCard'

export const dynamic = 'force-dynamic'

export default function ArmoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-amber-100">The Armory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {armory.map((relic) => (
          <RelicCard key={relic.slug} relic={relic} />
        ))}
      </div>
    </div>
  )
}
