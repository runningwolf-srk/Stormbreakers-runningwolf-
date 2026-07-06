'use client';

import { armory } from '../../data/armory'; // ✅ lowercase 'armory', not RELICS
import RelicCard from '@/components/relics/RelicCard';

export default function Word() {
  return (
    <main className="bg-black min-h-screen">
      <h1 className="text-4xl font-bold text-amber-400 text-center py-12">The Armory</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
        {armory.map((item) => ( // ✅ using 'armory'
          <RelicCard key={item.relic} relic={item} />
        ))}
      </section>
    </main>
  );
}
