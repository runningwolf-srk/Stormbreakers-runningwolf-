'use client';

import { RELICS } from '@/data/armory'; // ✅ FIXED IMPORT
import Link from 'next/link';

export default function Word() {
  return (
    <main className="min-h-screen bg-black text-amber-400 p-8">
      <Link href="/" className="text-amber-400 hover:text-amber-200 mb-8 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="font-cinzel text-5xl mb-12 text-center">The Word</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {RELICS.map((relic) => (
          <div
            key={relic.id}
            className="border border-amber-600/30 rounded-lg p-6 bg-zinc-900/50"
          >
            <h2 className="font-cinzel text-3xl mb-4">{relic.name}</h2>
            <p className="text-amber-200/90 text-lg mb-4">
              Anthem: {relic.songTitle}
            </p>
            <a
              href={relic.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-200 underline"
            >
              Hear the Word →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
