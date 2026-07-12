'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Relic } from '../../data/armory' // ←../../ because file is in components/relics/

export function RelicCard({ relic }: { relic: Relic }) {
  const [isOpen, setIsOpen] = useState(false)

  function getYouTubeEmbed(url: string) {
    if (!url) return '';
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('/embed/')) return url;
    return url;
  }

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
      {relic.image && (
        <div className="relative w-full h-64 bg-black">
          <Image
            src={relic.image}
            alt={relic.relic}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{relic.relic}</h2>
        <p className="text-yellow-500 mb-4">{relic.subtitle}</p>
        <p className="text-sm mb-4 italic text-gray-300">{relic.declaration}</p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-400 hover:text-blue-300 mb-4"
        >
          {isOpen? 'Hide Details' : 'Read More'}
        </button>

        {isOpen && (
          <div className="mb-4 text-gray-300 space-y-2">
            <p><strong>Scripture:</strong> {relic.scripture}</p>
            <p className="text-sm text-gray-400">{relic.reference}</p>
            <p className="text-sm"><strong>Reflection:</strong> {relic.reflection}</p>
          </div>
        )}

        {relic.youtube && (
          <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden">
            <iframe
              src={getYouTubeEmbed(relic.youtube)}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={relic.relic}
            />
          </div>
        )}
      </div>
    </div>
  )
}
