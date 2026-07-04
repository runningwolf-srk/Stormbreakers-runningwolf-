import Link from 'next/link'
import Image from 'next/image'

const tracks = [
  {
    id: 1,
    title: "Jesus Is An Healer",
    image: "/relic-1-healer.png", // You still need to upload this one
    relic: 1,
    youtubeId: "stsryByK5h8"
  },
  {
    id: 2,
    title: "Horn of War",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    relic: 2,
    youtubeId: "M4wGCg5oCx0"
  },
  {
    id: 3,
    title: "Heaven Calling",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    relic: 3,
    youtubeId: "oxNauKuxg4Q"
  },
  {
    id: 4,
    title: "Born Through The Fire",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    relic: 4,
    youtubeId: "8XQUhWB_N5M"
  },
  {
    id: 5,
    title: "Spiritual Journey",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    relic: 5,
    youtubeId: "umDFjJjh0_c"
  },
  {
    id: 6,
    title: "Iron Collide",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    relic: 6,
    youtubeId: "odIsEMUtNJI"
  },
  {
    id: 7,
    title: "Blood of Cross",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    relic: 7,
    youtubeId: "4lcbjsNLlzo"
  },
  {
    id: 8,
    title: "Lord of Lords",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    relic: 8,
    youtubeId: "9vP0NPrEv9s"
  }
]

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">The Sound of War</h1>
        <p className="text-gray-400 mb-8">Eight tracks. Eight declarations.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <div key={track.id} className="border border-amber-400/30 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                {track.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${track.youtubeId}`}
                    title={track.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <Image 
                    src={track.image} 
                    alt={track.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4 bg-zinc-900">
                <div className="text-amber-400 text-xs">TRACK {track.id}</div>
                <div className="text-lg font-bold mt-1">{track.title}</div>
                <Link 
                  href={`/relics/${track.relic}`}
                  className="text-sm text-gray-400 hover:text-amber-400 mt-2 inline-block"
                >
                  View Relic →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-amber-400 hover:underline">← Return to Stormbreakers</Link>
        </div>
      </div>
    </main>
  )
}
