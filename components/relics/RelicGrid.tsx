import { RelicCard } from './RelicCard'
import { CANON } from '@/lib/constants'
export function RelicGrid() { return (<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{CANON.map(r => <RelicCard key={r.id} relic={r} />)}</div>) }
