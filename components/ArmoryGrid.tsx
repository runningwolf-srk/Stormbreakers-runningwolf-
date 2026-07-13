// components/ArmoryGrid.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Relic } from '@/data/armory'

type Props = {
  relics: Relic[]
}

function getYouTubeId(url?: string): string | null {
  if (!url) return null
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11? match[2] : null
}

export function ArmoryGrid({ relics }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {relics.map((item) => {
        const videoId = getYouTubeId(item.youtube)
        
        return (
          <div 
            key={item.slug}
            className="group bg-stone-900 border border-amber-400/20 rounded-lg overflow-hidden hover:border-amber-400/40 transition-all duration-200"
          >
            <Link href={`/chronicles/${item.slug}`}>
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="p-5">
              <Link href={`/chronicles/${item.slug}`}>
                <span className="inline-block px-2 py-1 text-xs font-bold uppercase bg-amber-400/10 text-amber-400 rounded mb-3">
                  {item.theme}
                </span>
                <h2 className="text-amber-100 font-bold text-xl mb-2 group-hover:text-amber-300 transition">
                  {item.title}
                </h2>
                <p className="text-amber-200/70 text-sm line-clamp-2 mb-3">
                  {item.description}
                </p>
                <div className="text-xs text-amber-300/60 space-y-1 mb-4">
                  {item.lyrics && <p className="font-semibold">Song: {item.lyrics}</p>}
                  {item.scriptureRef && <p>Scripture: {item.scriptureRef}</p>}
                </div>
              </Link>

              {videoId && (
                <div className="relative w-full aspect-video rounded-md overflow-hidden bg-black mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={`${item.title} - Music`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              )}
              
              <Link 
                href={`/chronicles/${item.slug}`}
                className="inline-block text-amber-400 hover:text-amber-300 text-sm font-semibold transition"
              >
                Read More →
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
