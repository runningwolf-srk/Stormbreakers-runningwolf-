// app/armory/page.tsx
export const dynamic = 'force-dynamic'

import Image from 'next/image'
import { armory } from '@/data/armory'

type Relic = {
  slug: string;
  relic: string;
  song: string;
  scripture: string;
  reference: string;
  primaryTheme: string;
  themes: string[];
  declaration: string;
  reflection: string;
  testimony: string;
  subtitle: string;
  youtube: string;
  image: string;
}

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

export default function ArmoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">The Armory</h1>

      {!armory || armory.length === 0? (
        <p className="text-center text-red-500">No relics found. Check data/armory/index.ts</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {armory.map((relic: Relic) => (
            <div key={relic.slug} className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
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
          ))}
        </div>
      )}
    </main>
  )
}
