'use client';

import { RELICS } from '@/data/relics';
import Link from 'next/link';

export default function Armory() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="text-amber-400 mb-8 block hover:text-amber-300 font-mono">
        ← Back to Home
      </Link>
      
      <h1 className="font-cinzel text-5xl mb-12 text-center">THE ARMORY</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {RELICS.map(relic => (
          <div 
            key={relic.id} 
            className="border border-amber-600/30 p-4 hover:border-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20"
          >
            <img 
              src={relic.image} 
              alt={relic.imageAlt || relic.title} 
              className="w-full h-64 object-cover mb-4 bg-gray-900 border border-gray-800"
              onError={(e) => { 
                e.currentTarget.src = '/runningwolf-avatar.jpg'; 
              }}
            />
            
            <h2 className="font-cinzel text-xl mb-2 text-amber-400">
              {relic.title}
            </h2>
            
            <p className="text-sm text-gray-400 italic mb-1 font-mono">
              "{relic.verse.text}"
            </p>
            
            <p className="text-xs text-amber-600 mb-3 font-mono">
              {relic.verse.ref}
            </p>
            
            <p className="text-sm text-gray-300 font-mono">
              {relic.declaration}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
