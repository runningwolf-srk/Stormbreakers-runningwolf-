'use client';

import { armory } from '../../data/armory'; // ✅ CORRECT IMPORT

export default function Word() {
  return (
    <main className="bg-black min-h-screen">
      <h1 className="text-4xl font-bold text-amber-400 text-center py-12">The Word</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
        {armory.map((item) => {
          const videoId = item.youtube.split('/').pop()?.split('?')[0];
          return (
            <div key={item.relic} className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
              <img src={item.image} alt={item.relic} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-amber-400 font-bold text-xl mb-1">{item.relic}</h3>
                <p className="text-zinc-400 text-sm mb-4">{item.song}</p>
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={item.song}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
