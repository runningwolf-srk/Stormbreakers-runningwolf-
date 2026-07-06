import { RELICS } from '@/data/relics';
import Link from 'next/link';

export default function Armory() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="text-amber-400 mb-8 block">← Back to Home</Link>
      <h1 className="font-cinzel text-5xl mb-12 text-center">THE ARMORY</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {RELICS.map(relic => (
          <div key={relic.id} className="border border-amber-600/30 p-4">
            <p className="text-xs text-red-400 mb-2">URL: {relic.image}</p>
            <img 
              src={relic.image} 
              alt={relic.title} 
              className="w-full h-64 object-cover mb-4 bg-gray-900"
            />
            <h2 className="font-cinzel text-xl mb-2">{relic.title}</h2>
            <p className="text-sm text-gray-400 italic">"{relic.verse.text}"</p>
            <p className="text-xs text-amber-600">{relic.verse.ref}</p>
            <p className="text-sm text-gray-300 mt-2">{relic.declaration}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
