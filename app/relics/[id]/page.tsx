import Link from 'next/link'

const relics = [
  {
    id: 1,
    name: "The First Flame",
    title: "JESUS IS AN HEALER",
    image: "/729068345_1706992463868756_7233760520950384832_n~2.jpg",
    scripture: "Isaiah 53:5",
    verseText: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    story: "The call didn't come in a church. It came in a cell. A man with track marks on his arms and a verse taped to concrete. No worship band. No fog machine. Just pain and a promise. The First Flame is for the ones healed in the dark.",
    meaning: "Healing is not a reward for the righteous. It's a gift for the broken. This relic stands for everyone who found Jesus before they found sobriety. Before they found church. Before they found themselves.",
    youtubeId: "stsryByK5h8"
  },
  {
    id: 2,
    name: "Horn of War",
    title: "SOUND THE ALARM",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Joel 2:1",
    verseText: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    story: "The watchman couldn't sleep. While the city partied, he saw the smoke. God didn't say 'suggest.' He said 'BLOW.' The Horn of War is not an instrument. It's an interruption.",
    meaning: "This relic is for the ones who can't stay silent. The ones who see the breach in the wall and refuse to whisper. If the alarm offends you, you're not awake yet.",
    youtubeId: "M4wGCg5oCx0"
  },
  {
    id: 3,
    name: "Heaven Calling",
    title: "COME UP HERE",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Revelation 4:1",
    verseText: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, 'Come up here, and I will show you what must take place after this.'",
    story: "He was tired of begging God to come down. The invitation was reversed. 'Come up here.' Not to escape earth, but to gain perspective. From above, the chaos made sense.",
    meaning: "Heaven Calling is the rebuke to ground-level Christianity. Stop asking God to fit in your box. The door is open. The call is up. Your problems look different from the throne room.",
    youtubeId: "oxNauKuxg4Q"
  },
  {
    id: 4,
    name: "Scars That Preach",
    title: "BORN THROUGH THE FIRE",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    scripture: "Galatians 6:17",
    verseText: "From now on, let no one cause me trouble, for I bear on my body the marks of Jesus.",
    story: "He used to hide them. The cigarette burns. The track marks. The tattoo of her name. Then he read Paul. 'I bear the marks.' The scars weren't shame. They were signatures. Proof he survived.",
    meaning: "Your testimony isn't your before-and-after photo. It's your scars. Scars That Preach means you don't have to be healed to be holy. You just have to be honest. The marks prove the miracle.",
    youtubeId: "8XQUhWB_N5M"
  },
  {
    id: 5,
    name: "Spiritual Journey",
    title: "HE RESTORES MY SOUL",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Psalm 23:3",
    verseText: "He restores my soul. He guides me in paths of righteousness for his name's sake.",
    story: "The path wasn't straight. It was a desert. A valley. A fight. But the Shepherd didn't leave him there. 'He restores' means you were broken first. This relic is for the long walk home.",
    meaning: "Restoration is not self-improvement. It's resurrection. He doesn't restore your reputation. He restores your soul. And He does it for His name — not your platform.",
    youtubeId: "umDFjJjh0_c"
  },
  {
    id: 6,
    name: "Iron Collide",
    title: "SHARPENED FOR WAR",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so one person sharpens another.",
    story: "They didn't meet at small group. They met in a fight. Two men, both broken, both called. They didn't agree — they collided. Sparks flew. Egos died. A brotherhood was forged.",
    meaning: "Stop looking for friends who make you feel safe. Find brothers who make you dangerous. Iron Collide is the death of comfort. You don't get sharp without friction.",
    youtubeId: "odIsEMUtNJI"
  },
  {
    id: 7,
    name: "Blood of Cross",
    title: "REDEMPTION SONG",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Ephesians 1:7",
    verseText: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace",
    story: "The debt was real. The shame was real. The blood was real. It wasn't a metaphor. It was a transaction. 'Paid in full' was written across his past in red. The Blood of Cross ended the trial.",
    meaning: "Grace is not a second chance. It's a new creation. This relic draws the line: You're either covered by the blood or you're not. No halfway. No trying harder. Just the cross.",
    youtubeId: "4lcbjsNLlzo"
  },
  {
    id: 8,
    name: "Lord of Lords",
    title: "KING OF KINGS",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    scripture: "Revelation 19:16",
    verseText: "On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
    story: "The end of the book isn't a vote. It's a coronation. He doesn't run for King. He returns as King. The tattoo is already on His thigh. The war is already won.",
    meaning: "Lord of Lords is the final word. Not to religion. Not to government. To Him. Every knee bows. Every tongue confesses. The Stormbreakers don't fight for victory — they enforce it.",
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
        <h1 className="text-4xl font-bold mb-2 text-amber-400">{relic.name}</h1>
        <h2 className="text-2xl font-bold mb-8 text-gray-300">{relic.title}</h2>
        
        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden border border-amber-400/30">
          <img 
            src={relic.image} 
            alt={relic.title}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-lg mb-8 border-l-4 border-amber-400">
          <p className="text-amber-400 font-bold mb-2">{relic.scripture}</p>
          <p className="text-gray-300 italic text-lg">"{relic.verseText}"</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-amber-400">The Story</h3>
          <p className="text-lg text-gray-200 leading-relaxed">{relic.story}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-amber-400">The Meaning</h3>
          <p className="text-lg text-gray-200 leading-relaxed">{relic.meaning}</p>
        </div>

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

        <div className="text-amber-400 text-xl mb-8 text-center">By His call we rise.</div>
        
        <div className="flex gap-6 justify-center">
          <Link href="/relics" className="text-gray-400 hover:text-amber-400">← All Relics</Link>
          <Link href="/" className="text-gray-400 hover:text-amber-400">Home</Link>
        </div>
      </div>
    </main>
  )
}
