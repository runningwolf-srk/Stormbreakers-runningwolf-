// app/armory/page.tsx
import Image from 'next/image'
import { armory } from '@/data/armory'

// Define type to match your data - themes: string[] not readonly
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

export default function ArmoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">The Armory</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {armory.map((relic) => (
          <div key={relic.slug} className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
            {relic.image && (
              <div className="relative w-full h-64">
                <Image
                  src={relic.image}
                  alt={relic.relic}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{relic.relic}</h2>
              <p className="text-yellow-500 mb-4">{relic.subtitle}</p>
              <p className="text-sm mb-4 italic">{relic.declaration}</p>

              {/* YouTube Embed - Plays on your site */}
              {relic.youtube && (
                <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden">
                  <iframe
                    src={relic.youtube.replace('youtu.be/', 'youtube.com/embed/')}
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
    </main>
  )
}
