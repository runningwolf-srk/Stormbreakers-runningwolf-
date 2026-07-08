// components/relics/RelicGrid.tsx
import { RelicCard } from './RelicCard'
import type { Relic } from '../../data/armory'

type Props = {
  relics: Relic[]
}

export function RelicGrid({ relics }: Props) {
  return (
    <div className="space-y-12">
      {relics.map((relic) => (
        <RelicCard key={relic.slug} relic={relic} />
      ))}
    </div>
  )
}
