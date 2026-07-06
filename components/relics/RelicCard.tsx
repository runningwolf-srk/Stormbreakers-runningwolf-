'use client';

import { Relic } from '../../data/armory';
import { useState } from 'react';

export function RelicCard({ relic }: { relic: Relic }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const getVideoId = (url: string) => {
    return url.split('/').pop()?.split('?')[0] || '';
  };

  return (
    <div className="group border border-amber-600/20 rounded-lg p-6 bg-gradient-to-b from-zinc-900/80 to-black hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20">
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={relic.image}
          alt={relic.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <h3 className="font-cinzel text-2xl mb-2 text-amber-400">{relic.name}</h3>
      <p className="text-amber-200/70 mb-4 italic">{relic.songTitle}</p>
      
      {!isPlaying? (
        <button
          onClick={() => setIsPlaying(true)}
          className="w-full bg-amber-600 text-black font-bold px-4 py-3 rounded hover:bg-amber-500 transition-colors"
        >
          ⚔️ UNSHEATHE ANTHEM
        </button>
      ) : (
        <div className="aspect-video w-full rounded overflow-hidden border border-amber-600/30">
          <iframe
            src={`https://www.youtube.com/embed/${getVideoId(relic.youtubeUrl)}?autoplay=1`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
