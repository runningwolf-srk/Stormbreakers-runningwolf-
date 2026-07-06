'use client';

import { Relic } from '../../data/armory'; // ✅ FIXED - was '@/data/relics'
import { RuneBorder } from '@/components/shared/RuneBorder';

export function RelicCard({ relic, onClick }: { relic: Relic; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border border-amber-600/30 rounded-lg p-6 bg-zinc-900/50 hover:bg-zinc-900 hover:border-amber-500 transition-all"
    >
      <RuneBorder>
        <img
          src={relic.image}
          alt={relic.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </RuneBorder>
      <h3 className="font-cinzel text-2xl mb-2">{relic.name}</h3>
      <p className="text-amber-200/80 mb-4">{relic.songTitle}</p>
      <a
        href={relic.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-block bg-amber-600 text-black px-4 py-2 rounded hover:bg-amber-500 transition-colors"
      >
        Listen
      </a>
    </div>
  );
}
