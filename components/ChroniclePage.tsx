// components/ChroniclePage.tsx
import Image from 'next/image'
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

export function ChroniclePage({ relic }: Props) {
  const videoId = getYouTubeId(relic.youtube)

  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-stone-900 border border-amber-600/30 rounded-lg overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src={relic.image}
              alt={relic.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-8">
            <span className="inline-block px-3 py-1 text-sm font-bold uppercase bg-amber-400/10 text-amber-400 rounded mb-4">
              {relic.theme}
            </span>
            
            <h1 className="text-5xl font-black text-amber-100 mb-4">
              {relic.title}
            </h1>
            
            <p className="text-amber-200/80 text-lg mb-6 leading-relaxed">
              {relic.description}
            </p>

            {relic.lyrics && (
              <div className="mb-6 border-l-2 border-amber-600/50 pl-4">
                <p className="text-amber-400 text-sm uppercase tracking-widest mb-1">Song</p>
                <h3 className="text-amber-100 text-xl italic">
                  {relic.lyrics}
                </h3>
              </div>
            )}

            {relic.scriptureRef && (
              <div className="mb-6 border-l-2 border-amber-600/50 pl-4">
                <p className="text-amber-400 text-sm uppercase tracking-widest mb-1">Scripture</p>
                <p className="text-amber-100/80 text-lg italic">
                  {relic.scriptureRef}
                </p>
              </div>
            )}

            {videoId && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black mt-8">
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
          </div>
        </div>
      </div>
    </div>
  )
      }
