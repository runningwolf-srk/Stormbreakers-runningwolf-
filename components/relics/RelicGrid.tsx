// components/relics/RelicGrid.tsx - FIXED IMPORT - This now works
import { RelicCard } from './RelicCard'
import type { Relic } from './RelicCard'

type Props = {
  relics: Relic[]
}

export function RelicGrid({ relics }: Props) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {relics.map(r => <RelicCard key={r.id} relic={r} />)}
    </div>
  )
}
