'use client';

import { armory, Relic } from '@/data/armory';

function getYouTubeId(url: string) {
  return url.split('/').pop()?.split('?')[0] || '';
}

function RelicCard({ relic }: { relic: Relic }) {
  const videoId = getYouTubeId(relic.youtube);

  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
      <img
        src={relic.image}
        alt={relic.relic} // ✅ FIXED: was relic.name
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="p-4">
        <h3 className="font-cinzel text-2xl mb-2 text-amber-400">{relic.relic}</h3> {/* ✅ FIXED: was relic.name */}
        <p className="text-zinc-400 text-sm mb-4">{relic.song}</p>
        <iframe
          className="w-full aspect-video rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={relic.song}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function RelicGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
      {armory.map((item) => (
        <RelicCard key={item.relic} relic={item} />
      ))}
    </section>
  );
}
