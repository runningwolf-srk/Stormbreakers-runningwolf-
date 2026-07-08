// components/RelicCard.tsx
"use client"

import { useState } from 'react'
import { Relic } from '../data/armory'

export function RelicCard({ relic }: { relic: Relic }) {
  const [isOpen, setIsOpen] = useState(false)

  const getYouTubeId = (url?: string) => {
    if (!url) return null
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/\s]{11})/)
    return match? match[1] : null
  }

  const youtubeId = getYouTubeId(relic.youtube)

  return (
    <article id={relic.slug} className="border border-amber-600/30 rounded-lg overflow-hidden bg-black/50 scroll-mt-20">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-400 mb-2">{relic.song}</h3>
        <p className="text-amber-200/60 text-sm mb-3 uppercase tracking-widest">{relic.relic}</p>

        <blockquote className="text-amber-100/80 italic mb-3 border-l-2 border-amber-600/50 pl-4">
          "{relic.scripture}"
        </blockquote>
        <cite className="text-amber-400 text-sm block mb-4">— {relic.reference}</cite>

        <p className="text-amber-500 font-bold mb-4">{relic.declaration}</p>

        {!isOpen? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-amber-600 hover:bg-amber-500 text-black px-6 py-2 rounded font-bold transition"
          >
            ▶️ Enter Sound
          </button>
        ) : (
          <div className="space-y-4">
            {youtubeId && (
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  className="w-full h-full rounded"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <p className="text-amber-100/90 leading-relaxed whitespace-pre-line">
              {relic.reflection}
            </p>
            {relic.testimony && (
              <p className="text-amber-400/70 text-sm mt-4 italic">
                {relic.testimony}
              </p>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="text-amber-500 hover:text-amber-300 text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </article>
  )
}
