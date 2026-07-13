// components/relicCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Relic } from '@/data/armory'

type Props = {
  relic: Relic
}

function getYouTubeId(url?: string): string | null {
  if (!url) return null
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11? match[2] : null
}

export function RelicCard({ relic }: Props) {
  const videoId = getYouTubeId(relic.youtube)

  return (
    <article id={relic.slug} className="bg-stone-900 border border-amber-600/30 rounded-lg overflow-hidden hover:border-amber-400/50 transition-all">
      <div className="relative w-full h-56">
        <Image
          src={relic.image}
          alt={relic.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <span className="inline-block px-2 py-1 text-xs font-bold uppercase bg-amber-400/10 text-amber-400 rounded mb-3">
          {relic.theme}
        </span>
        
        <h3 className="text-2xl font-bold text-amber-100 mb-2">
          {relic.title}
        </h3>
        
        <p className="text-amber-200/70 text-sm mb-3">
          {relic.description}
        </p>

        <div className="text-xs text-amber-300/60 space-y-1 mb-4">
          {relic.lyrics && (
            <p className="font-semibold">Song: {relic.lyrics}</p>
          )}
          {relic.scriptureRef && (
            <p>Scripture: {relic.scriptureRef}</p>
          )}
        </div>

        {videoId && (
          <div className="relative w-full aspect-video rounded-md overflow-hidden bg-black mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title={`${relic.title} - ${relic.lyrics || 'Music'}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        )}
        
        <Link 
          href={`/chronicles/${relic.slug}`}
          className="inline-block text-amber-400 hover:text-amber-300 text-sm font-semibold transition"
        >
          View Chronicle →
        </Link>
      </div>
    </article>
  )
}
