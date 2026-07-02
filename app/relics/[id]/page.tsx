import { notFound } from 'next/navigation'
import Link from 'next/link'

const relics = [
  {
    id: 1,
    title: "HORN OF WAR",
    artist: "RunningWolf",
    videoId: "M4wGCg5oCx0",
    verse: `"Sound the alarm on my holy hill!"`,
    ref: "Joel 2:1",
    tags: ["WARFARE", "HORN", "ALERT"],
    content: `The watchman doesn't sleep.

While others feast, he fasts. While others play, he prays.
While others sleep, he sounds the alarm.

This is not a season for silence. The horn is to your mouth.
Blow it.

THE BATTLE CRY: Sound the alarm! The day of the Lord is coming!`
  },
  {
    id: 2,
    title: "HEAVEN CALLING",
    artist: "RunningWolf",
    videoId: "oxNauKuxg4Q",
    verse: `"The heavens declare the glory of God; the skies proclaim the work of his hands."`,
    ref: "Psalm 19:1",
    tags: ["CALL", "DESTINY", "VOICE"],
    content: `Before you were born, He called you.

Not a suggestion. A summons.
Not a whisper. A war cry.

Heaven doesn't negotiate with hell about your purpose.
The verdict was spoken before the foundation of the world.

You feel the pull because you were made for the place you're going.
The calling costs everything. But staying costs more.

ANSWER: Here I am, Lord. Send me.`
  },
  {
    id: 3,
    title: "IRON COLLIDE",
    artist: "RunningWolf",
    videoId: "odIsEMUtNJI",
    verse: `"As iron sharpens iron, so one person sharpens another."`,
    ref: "Proverbs 27:17",
    tags: ["BROTHERHOOD", "SHARPENING", "FRICTION"],
    content: `Iron doesn't sharpen iron by accident. It takes heat. Pressure. Friction.

God will put people in your life that scrape against your pride until Christ is formed. They won't be comfortable. They won't always be kind. But they will be used.

We pray for ease and God sends a forge.
We pray for friends and God sends blacksmiths.

The collision hurts. Your edges get ground down. The sparks fly when your independence hits their truth.

Don't run from the friction. Swords aren't made in isolation. They're folded in fire.`
  },
  {
    id: 4,
    title: "SPIRITUAL JOURNEY",
    artist: "RunningWolf",
    videoId: "umDFjJjh0_c",
    verse: `"The path of the righteous is like the morning sun, shining ever brighter till the full light of day."`,
    ref: "Proverbs 4:18",
    tags: ["JOURNEY", "PATH", "LIGHT"],
    content: `The road doesn't get easier. You get stronger.

Every valley taught you how to climb. Every night season taught you how to see.

This isn't wandering. This is warfare with a compass.

The path of the righteous shines brighter. Not because the sun changed. Because your eyes did.

Keep walking. Dawn is coming.`
  },
  {
    id: 5,
    title: "BLOOD OF THE CROSS",
    artist: "RunningWolf",
    videoId: "4lcbjsNLlzo",
    verse: `"But now in Christ Jesus you who once were far away have been brought near by the blood of Christ."`,
    ref: "Ephesians 2:13",
    tags: ["BLOOD", "CROSS", "REDEMPTION"],
    content: `It wasn't nails that held Him there. It was love.

The cross wasn't defeat. It was strategy.
The blood wasn't loss. It was currency.

Every drop bought something back. Your peace. Your healing. Your sonship.

The enemy thought he was winning. He was funding his own eviction.

BY HIS BLOOD: We overcome. We are cleansed. We are brought near.`
  },
  {
    id: 6,
    title: "I'M ON FIRE",
    artist: "Jessy Marquez",
    videoId: "8XQUhWB_N5M",
    verse: `"Then one of the seraphim flew to me with a live coal in his hand, which he had taken with tongs from the altar."`,
    ref: "Isaiah 6:6-7",
    tags: ["FIRE", "ALTAR", "COMMISSION"],
    content: `This is not natural fire. This is altar fire.

It doesn't consume the bush. It commissions the prophet.

Let God touch what you speak with. The burn is the qualification.

WILDFIRE SPREADS.`
  },
  {
    id: 7,
    title: "LORD OF LORDS",
    artist: "RunningWolf",
    videoId: "9vP0NPrEv9s",
    verse: `"They will wage war against the Lamb, but the Lamb will triumph over them because he is Lord of lords and King of kings"`,
    ref: "Revelation 17:14",
    tags: ["KING", "VICTORY", "LAMB"],
    content: `He doesn't fight like men fight.

Men rage. He roars.
Men build armies. He speaks worlds.
Men take crowns. He IS the crown.

The Lamb who was slain is the Lion who reigns. Same Person. Same scars. Same throne.

Every knee will bow. Not because they're forced. Because they're finally home.

Lord of lords. King of kings. Name above all names.

The war is already won. We're just enforcing the victory.`
  }
]

export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = relics.find(r => r.id === parseInt(params.id))
  
  if (!relic) {
    notFound()
  }

  const nextRelic = relics.find(r => r.id === relic.id + 1)
  const prevRelic = relics.find(r => r.id === relic.id - 1)

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        <Link href="/relics" className="text-zinc-400 hover:text-white mb-8 inline-block">
          ← Back to The Armory
        </Link>

        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {relic.tags.map(tag => (
              <span key={tag} className="text-xs border border-zinc-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl font-bold mb-2">{relic.title}</h1>
          <p className="text-zinc-400">by {relic.artist}</p>
        </div>

        <div className="aspect-video mb-12 bg-zinc-900">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${relic.videoId}`}
            title={relic.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mb-12">
          <blockquote className="text-xl italic text-zinc-300 border-l-2 border-amber-500 pl-6 mb-2">
            {relic.verse}
          </blockquote>
          <cite className="text-zinc-500 text-sm">— {relic.ref}</cite>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-16">
          {relic.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-6 leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex justify-between border-t border-zinc-800 pt-8">
          {prevRelic ? (
            <Link href={`/relics/${prevRelic.id}`} className="text-zinc-400 hover:text-white">
              ← {prevRelic.title}
            </Link>
          ) : <div />}
          
          {nextRelic ? (
            <Link href={`/relics/${nextRelic.id}`} className="text-zinc-400 hover:text-white">
              {nextRelic.title} →
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return relics.map((relic) => ({
    id: relic.id.toString(),
  }))
}
