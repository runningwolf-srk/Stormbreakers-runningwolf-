import Link from 'next/link'

const tracks = [
  {
    id: 1,
    title: "The First Flame",
    subtitle: "JESUS IS AN HEALER",
    image: "/729068345_1706992463868756_7233760520950384832_n~2.jpg",
    youtubeId: "stsryByK5h8",
    verse: "Isaiah 53:5",
    verseText: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    blog: "This is where it started. Not in a church. In the dark. When the pain was real and the call was louder. The First Flame is for the ones who got healed in a back alley, not an altar call. By His wounds — not our works."
  },
  {
    id: 2,
    title: "Horn of War",
    subtitle: "SOUND THE ALARM",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "M4wGCg5oCx0",
    verse: "Joel 2:1",
    verseText: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    blog: "This ain't worship music for coffee shops. This is the sound that wakes the camp. The Horn of War is for the watchmen. If you're comfortable, this track ain't for you. If you're called, turn it up."
  },
  {
    id: 3,
    title: "Heaven Calling",
    subtitle: "COME UP HERE",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "oxNauKuxg4Q",
    verse: "Revelation 4:1",
    verseText: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, 'Come up here, and I will show you what must take place after this.'",
    blog: "Some people want a word. We want a door. Heaven Calling is the invitation to leave the ground floor. Stop asking God to come to your level. Come up here. See what He sees."
  },
  {
    id: 4,
    title: "Scars That Preach",
    subtitle: "BORN THROUGH THE FIRE",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    youtubeId: "8XQUhWB_N5M",
    verse: "Galatians 6:17",
    verseText: "From now on, let no one cause me trouble, for I bear on my body the marks of Jesus.",
    blog: "Your testimony ain't your Instagram. It's your scars. This track is for the ones who bled and didn't quit. The fire didn't take you — it forged you. Your scars preach louder than your sermons ever will."
  },
  {
    id: 5,
    title: "Spiritual Journey",
    subtitle: "HE RESTORES MY SOUL",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "umDFjJjh0_c",
    verse: "Psalm 23:3",
    verseText: "He restores my soul. He guides me in paths of righteousness for his name's sake.",
    blog: "This ain't self-help. This is soul-help. The journey isn’t about finding yourself. It’s about losing the fake you so the real one can rise. He restores. He guides. For His name — not yours."
  },
  {
    id: 6,
    title: "Iron Collide",
    subtitle: "SHARPENED FOR WAR",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "odIsEMUtNJI",
    verse: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so one person sharpens another.",
    blog: "Stop looking for friends who agree with you. Find brothers who sharpen you. Iron Collide is for the collisions that make you dangerous. Sparks fly when you’re forged. If no one’s challenging you, you’re getting dull."
  },
  {
    id: 7,
    title: "Blood of Cross",
    subtitle: "REDEMPTION SONG",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "4lcbjsNLlzo",
    verse: "Ephesians 1:7",
    verseText: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace",
    blog: "Grace ain’t cheap. It cost blood. This track is the line in the sand. You’re either covered by it or you’re not. No in-between. The Blood of Cross doesn’t make you better — it makes you new."
  },
  {
    id: 8,
    title: "Lord of Lords",
    subtitle: "KING OF KINGS",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "9vP0NPrEv9s",
    verse: "Revelation 19:16",
    verseText: "On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
    blog: "This is the end of the album and the start of the war. Every knee will bow. Not to religion. Not to politics. To the King. Lord of Lords isn’t a suggestion. It’s a fact. The throne is not empty."
  }
]

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">The Sound of War</h1>
        <p className="text-gray-400 mb-12">Eight tracks. Eight declarations. This is what the call sounds like.</p>
        
        <div className="space-y-16">
          {tracks.map((track) => (
            <article key={track.id} className="border-b border-amber-400/20 pb-12">
              <h2 className="text-3xl font-bold mb-2">{track.title}</h2>
              <h3 className="text-xl text-amber-400 mb-6">{track.subtitle}</h3>
              
              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
              </div>

              <div className="bg-zinc-900/50 p-4 rounded-lg mb-6 border-l-4 border-amber-400">
                <p className="text-amber-400 font-bold mb-1">{track.verse}</p>
                <p className="text-gray-300 italic">"{track.verseText}"</p>
              </div>

              <p className="text-lg text-gray-200 mb-6 leading-relaxed">{track.blog}</p>

              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${track.youtubeId}`}
                  title={track.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-gray-400 hover:text-amber-400">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
