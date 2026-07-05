'use client';
import { Relic } from '@/data/relics';
import { RuneBorder } from '@/components/shared/RuneBorder';

export function RelicCard({ relic, onClick }: { relic: Relic; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-900 hover:scale-105 transition-transform">
      <img src={relic.image} alt={relic.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
      <RuneBorder />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-norse text-amber-400 mb-1">{relic.title}</h3>
        <p className="text-xs text-stone-400 uppercase">{relic.verse.ref}</p>
      </div>
    </button>
  );
}
