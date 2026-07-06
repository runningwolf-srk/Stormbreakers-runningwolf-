'use client';

import { RELICS } from '../../data/armory';
import { RelicCard } from './RelicCard';

export function RelicGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {RELICS.map((relic) => (
        <RelicCard 
          key={relic.id} 
          relic={relic} 
        />
      ))}
    </div>
  );
}
