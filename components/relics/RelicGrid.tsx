// components/relics/RelicGrid.tsx
import RelicCard from './RelicCard'
import type { Relic } from '../../data/armory'

type Props = {
  relics: Relic[]
}

export default function RelicGrid({ relics }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {relics.map((relic) => (
        <RelicCard key={relic.slug} relic={relic} />
      ))}
    </div>
  )
}
