// components/word/WordCard.tsx
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

export function WordCard({ relic }: Props) {
  const videoId = getYouTubeId(relic.youtube)

  return (
    <div className="group bg-stone-900 border border-amber-400/20 rounded-lg overflow-hidden hover:border-amber-400/40 transition-all duration-200">
      <Link href={`/chronicles/${relic.slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={relic.image}
            alt={relic.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <Link href={`/chronicles/${relic.slug}`}>
          <span className="inline-block px-2 py-1 text-xs font-bold uppercase bg-amber-400/10 text-amber-400 rounded mb-3">
            {relic.theme}
          </span>
          <h2 className="text-amber-100 font-bold text-xl mb-2 group-hover:text-amber-300 transition">
            {relic.title}
          </h2>
          <p className="text-amber-200/70 text-sm line-clamp-2 mb-3">
            {relic.description}
          </p>
          <div className="text-xs text-amber-300/60 space-y-1 mb-4">
            {relic.lyrics && <p className="font-semibold">Song: {relic.lyrics}</p>}
            {relic.scriptureRef && <p>Scripture: {relic.scriptureRef}</p>}
          </div>
        </Link>

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
          Read More →
        </Link>
      </div>
    </div>
  )
}
