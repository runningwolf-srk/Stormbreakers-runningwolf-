'use client';

import { Relic } from '../../data/armory';
import { useState } from 'react';

export function RelicCard({ relic }: { relic: Relic }) {
  const [showVideo, setShowVideo] = useState(false);
  
  // Convert youtu.be/ID or youtube.com/watch?v=ID to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0] || '';
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="border border-amber-600/30 rounded-lg p-6 bg-zinc-900/50 hover:border-amber-500 transition-all">
      <img
        src={relic.image}
        alt={relic.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="font-cinzel text-2xl mb-2">{relic.name}</h3>
      <p className="text-amber-200/80 mb-4">{relic.songTitle}</p>
      
      {!showVideo? (
        <button
          onClick={() => setShowVideo(true)}
          className="inline-block bg-amber-600 text-black px-4 py-2 rounded hover:bg-amber-500 transition-colors"
        >
          Play Anthem
        </button>
      ) : (
        <div className="aspect-video w-full">
          <iframe
            src={getEmbedUrl(relic.youtubeUrl)}
            className="w-full h-full rounded"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
