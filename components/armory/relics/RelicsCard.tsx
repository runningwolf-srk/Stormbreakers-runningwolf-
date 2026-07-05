// components/relics/RelicGrid.tsx
'use client';
import { RELICS } from '@/data/relics';
import { RelicCard } from './RelicCard';

export function RelicGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {RELICS.map((relic) => (
        <RelicCard key={relic.id} relic={relic} onClick={() => console.log(relic.slug)} />
      ))}
    </div>
  );
}
