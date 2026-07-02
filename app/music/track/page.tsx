import Link from 'next/link'
import { notFound } from 'next/navigation'

// Same tracks data with slugs + saga text
const tracks = [
  {
    slug: "horn-of-war",
    title: "HORN OF WAR",
    subtitle: "A BATTLE CRY. A LEGEND RISES.",
    img: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    saga: "The horn sounds across the mountains, calling warriors to rise. Forged in fire, this anthem marks the beginning of the end for darkness."
  },
  {
    slug: "heaven-calling",
    title: "HEAVEN CALLING", 
    subtitle: "A WORSHIP ANTHEM",
    img: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    saga: "A call from beyond the veil. This is worship that shakes the heavens and pulls you into His presence."
  },
  // Add the other 5 tracks here with slug + saga
]

type Props = {
  searchParams: { slug?: string }
}

export async function generateMetadata({ searchParams }: Props) {
  const track = tracks.find(t => t.slug === searchParams.slug)
  if (!track) return { title: 'Track Not Found' }
  
  return {
    title: `${track.title} | The Armory`,
    description: track.subtitle
  }
}

export default function TrackPage({ searchParams }: Props) {
  const track = tracks.find(t => t.slug === searchParams.slug)
  
  if (!track) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        <Link href="/music" className="text-zinc-500 hover:text-amber-500 text-sm mb-8 inline-block">
          ← Back to The Armory
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <img 
            src={track.img} 
            alt={track.title}
            className="w-full rounded-lg border border-zinc-800"
          />
          
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-amber-500 mb-4 font-serif">
              {track.title}
            </h1>
            <p className="text-lg text-zinc-400 uppercase tracking-wider mb-8">
              {track.subtitle}
            </p>
            
            <div className="prose prose-invert prose-zinc">
              <h2 className="text-xl text-white font-bold mb-4">THE SAGA</h2>
              <p className="text-zinc-300 leading-relaxed">
                {track.saga}
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
