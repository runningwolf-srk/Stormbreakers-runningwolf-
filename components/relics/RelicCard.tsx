// components/relics/RelicCard.tsx
"use client"

import { useState } from 'react'
import { Relic } from '../../data/armory'

type RelicCardProps = {
  relic: Relic
}

export function RelicCard({ relic }: RelicCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getYouTubeId = (url?: string) => {
    if (!url) return null
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/\s]{11})/)
    return match? match[1] : null
  }

  const youtubeId = getYouTubeId(relic.youtube)

  return (
    <article id={relic.slug} className="border border-amber-600/30 rounded-lg overflow-hidden bg-black/50 scroll-mt-20 mb-12">
      {/* THUMBNAIL HEADER */}
      <div className="relative h-48 bg-gradient-to-br from-amber-900/20 to-black">
        {relic.image? (
          <img
            src={relic.image}
            alt={relic.relic}
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-amber-600/30 text-6xl font-bold">
            ⚔️
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {relic.themes.map((theme) => (
              <span key={theme} className="text-xs bg-amber-600/30 backdrop-blur text-amber-200 px-2 py-1 rounded">
                {theme}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-amber-400">{relic.song}</h3>
          <p className="text-amber-200/60 text-sm uppercase tracking-widest">{relic.relic}</p>
        </div>
      </div>

      <div className="p-6">
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
          <div className="space-y-6">
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

            {relic.reflection && relic.reflection.trim()!== "" && (
              <div>
                <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-2">Reflection</h4>
                <p className="text-amber-100/90 leading-relaxed whitespace-pre-line">
                  {relic.reflection}
                </p>
              </div>
            )}

            {relic.testimony && relic.testimony.trim()!== "" && (
              <p className="text-amber-400/70 text-sm italic border-t border-amber-600/20 pt-4">
                {relic.testimony}
              </p>
            )}

            {!youtubeId && (!relic.reflection || relic.reflection.trim() === "") && (
              <p className="text-amber-100/50 text-sm italic">
                Music and testimony for {relic.song} coming soon.
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
