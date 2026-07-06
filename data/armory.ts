'use client';

import { RELICS } from '@/data/armory'; // ✅ FIXED IMPORT
import Link from 'next/link';

export default function Armory() {
  return (
    <main className="min-h-screen bg-black text-amber-400 p-8">
      <Link href="/" className="text-amber-400 hover:text-amber-200 mb-8 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="font-cinzel text-5xl mb-12 text-center">The Armory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {RELICS.map((relic) => (
          <div
            key={relic.id}
            className="border border-amber-600/30 rounded-lg p-6 bg-zinc-900/50 hover:bg-zinc-900 transition-all"
          >
            <img
              src={relic.image}
              alt={relic.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="font-cinzel text-2xl mb-2">{relic.name}</h2>
            <p className="text-amber-200/80 mb-4">{relic.songTitle}</p>
            <a
              href={relic.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 text-black px-4 py-2 rounded hover:bg-amber-500 transition-colors"
            >
              Listen on YouTube
            </a>
          </div>
        ))}
      </div>
    </main>
  );
                   }
