import Link from 'next/link'

const relics = [
  {
    id: 1,
    name: "The First Flame",
    title: "JESUS IS AN HEALER",
    image: "/729068345_1706992463868756_7233760520950384832_n~2.jpg",
    scripture: "Isaiah 53:5",
    text: "Where the call first burned in the darkness. By His wounds we are healed.",
    youtubeId: "stsryByK5h8"
  },
  {
    id: 2,
    name: "Horn of War",
    title: "HORN OF WAR",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Joel 2:1",
    text: "Blow the trumpet in Zion. Sound the alarm on My holy hill.",
    youtubeId: "M4wGCg5oCx0"
  },
  {
    id: 3,
    name: "Heaven Calling",
    title: "HEAVEN CALLING",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Revelation 4:1",
    text: "Come up here, and I will show you what must take place.",
    youtubeId: "oxNauKuxg4Q"
  },
  {
    id: 4,
    name: "Scars That Preach",
    title: "BORN THROUGH THE FIRE",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    scripture: "Galatians 6:17",
    text: "I bear on my body the marks of Jesus.",
    youtubeId: "8XQUhWB_N5M"
  },
  {
    id: 5,
    name: "Spiritual Journey",
    title: "SPIRITUAL JOURNEY",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Psalm 23:3",
    text: "He restores my soul. He guides me in paths of righteousness.",
    youtubeId: "umDFjJjh0_c"
  },
  {
    id: 6,
    name: "Iron Collide",
    title: "IRON COLLIDE",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Proverbs 27:17",
    text: "As iron sharpens iron, so one person sharpens another.",
    youtubeId: "odIsEMUtNJI"
  },
  {
    id: 7,
    name: "Blood of Cross",
    title: "BLOOD OF CROSS",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Ephesians 1:7",
    text: "In Him we have redemption through His blood.",
    youtubeId: "4lcbjsNLlzo"
  },
  {
    id: 8,
    name: "Lord of Lords",
    title: "LORD OF LORDS",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Revelation 19:16",
    text: "King of kings and Lord of lords.",
    youtubeId: "9vP0NPrEv9s"
  }
]

export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = relics.find(r => r.id === parseInt(params.id))
  
  if (!relic) {
    return <div className="min-h-screen bg-black text-white p-6">Relic not found</div>
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-amber-400">{relic.name}</h1>
        
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden border border-amber-400/30">
          <img 
            src={relic.image} 
            alt={relic.title}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">{relic.title}</h2>
        <p className="text-lg mb-4">{relic.text}</p>
        <p className="text-amber-400 mb-6">— {relic.scripture}</p>

        {relic.youtubeId && (
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${relic.youtubeId}`}
              title={relic.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="text-amber-400 text-xl mb-8">By His call we rise.</div>
        
        <div className="flex gap-6">
          <Link href="/relics" className="text-gray-400 hover:text-amber-400">← All Relics</Link>
          <Link href="/" className="text-gray-400 hover:text-amber-400">Home</Link>
        </div>
      </div>
    </main>
  )
}
