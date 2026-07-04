'use client'
import { useState } from 'react'
import Link from 'next/link'

const chapters = [
  {
    title: "Prologue: The Silence",
    image: "/saga-01-silence.jpg", // Upload this to /public
    text: `Before the horn, there is silence. Not peace - silence. The moment before war breaks.

God uses silence to prepare warriors. He did it with David in the fields. He did it with Moses in the wilderness. He did it with Jesus for 30 years.

In the beginning, the Stormbreakers were scattered. Each carried a relic, unaware of the others. The Horn lay buried beneath the altar of a ruined church, caked in ash from a fire that burned three days. The Sword rusted in shadow, thrust into stone by a coward who couldn't bear its weight. The Banner was torn by wind and hung from the bones of forgotten watchmen.

They didn't know each other. They didn't know themselves.

But the Watchman on the wall heard a whisper in the night watch: "Gather them."

This is the saga of that gathering. The chronicle of fire and oath. The rise of those called by His name.

The silence is breaking.`,
    verse: "Be still, and know that I am God. - Psalm 46:10",
    relicId: null
  },
  {
    title: "Chapter I: The First Flame",
    image: "/saga-02-flame.jpg",
    text: `It didn't start in a sanctuary. It started in a cell.

A man with track marks and a death sentence had Isaiah 53:5 taped to concrete. No worship band. No altar call. Just pain and a promise.

"But he was pierced for our transgressions... by his wounds we are healed."

The healing came before the sobriety. Before the church. Before the clean record. The First Flame lit in the dark.

That’s where Stormbreakers are born — not in the light, but in the place where light breaks in.`,
    verse: "Isaiah 53:5",
    relicId: 1
  },
  {
    title: "Chapter II: The Horn",
    image: "/saga-03-horn.jpg", 
    text: `The Watchman tried to stay quiet. God said no.

"Blow the trumpet in Zion; sound the alarm on my holy hill." Joel 2:1 isn't a suggestion. It's a command.

The Horn of War was buried under a burned church. Ash three days deep. The man who dug it up had been mute for 7 years after his daughter died. When his lips touched the horn, his voice returned.

First word he spoke: "WAKE UP."

The alarm is not for the enemy. It's for the sleeping army.`,
    verse: "Joel 2:1",
    relicId: 2
  },
  {
    title: "Chapter III: The Scars",
    image: "/saga-04-scars.jpg",
    text: `He hid them for years. The cigarette burns from his father. The knife marks from the streets. The tattoo of her name he got in prison.

Then he read Galatians 6:17: "I bear on my body the marks of Jesus."

The scars weren't shame. They were scripture. The fire didn't take him — it authored him.

Scars That Preach means you don't need to be healed to be holy. You need to be honest. Your wounds are your witness.`,
    verse: "Galatians 6:17",
    relicId: 4
  },
  {
    title: "Chapter IV: The Collision", 
    image: "/saga-05-iron.jpg",
    text: `They didn't meet at small group. They met in a fight.

One was a former gang member. One was a pastor's kid who left the faith. Both broken. Both called.

Proverbs 27:17: "As iron sharpens iron, so one person sharpens another."

They didn't agree. They collided. Sparks flew. Pride died. A brotherhood was forged in the friction.

Iron Collide is the death of comfortable Christianity. You don't get sharp in safety. You get sharp in the strike.`,
    verse: "Proverbs 27:17",
    relicId: 6
  },
  {
    title: "Chapter V: The Blood",
    image: "/saga-06-blood.jpg",
    text: `The debt was real. The addiction. The abortion. The years stolen. The people hurt.

Ephesians 1:7: "In him we have redemption through his blood, the forgiveness of sins."

It wasn't a metaphor. It was a transaction. "Paid in full" stamped across his record in red.

The Blood of Cross ended the trial. Not with a better defense. With a substitute.

Grace isn't a second chance. It's a new creation.`,
    verse: "Ephesians 1:7", 
    relicId: 7
  },
  {
    title: "Chapter VI: Heaven Calling",
    image: "/saga-07-heaven.jpg",
    text: `The Open Door

John saw a door standing open in heaven. And a voice like a trumpet said: "Come up here."

The call is not down to earth. The call is up to the throne room.

Stormbreakers fight FROM victory, not FOR victory. We ascend before we advance.

Heaven is calling. The door is open.

Will you come up?`,
    verse: "Revelation 4:1",
    relicId: 3
  },
  {
    title: "Chapter VII: The War",
    image: "/saga-08-war.jpg",
    text: `They don't fight for territory. They fight for souls.

The enemy doesn't fear your theology. He fears your testimony. He doesn't flee from your politics. He flees from your scars.

The war isn't coming. It's here. But so is the victory.

The Horn has sounded. The Sword is drawn. The Banner is lifted.

This is not the end. This is the advance.`,
    verse: "2 Corinthians 10:4",
    relicId: null
  },
  {
    title: "Epilogue: The King",
    image: "/saga-09-king.jpg",
    text: `Revelation 19:16. On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.

The end of the book isn't a vote. It's a coronation. He doesn't run for King. He returns as King.

The throne is not empty. The war is already won.

The Stormbreakers don't fight for victory — they enforce it.

The silence broke. The horn blew. The fire fell. The King is coming.

By His call we rise.`,
    verse: "Revelation 19:16",
    relicId: 8
  }
]

export default function SagaPage() {
  const [page, setPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const nextPage = () => {
    if (page < chapters.length - 1) {
      setIsFlipping(true)
      setTimeout(() => {
        setPage(page + 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (page > 0) {
      setIsFlipping(true)
      setTimeout(() => {
        setPage(page - 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-2 text-amber-400 text-center font-serif">The Chronicle Stone</h1>
        <p className="text-gray-500 mb-8 text-center">The Saga of the Stormbreakers</p>
        
        <div className={`bg-[#1a1a1a] rounded-lg border-2 border-amber-400/40 shadow-2xl shadow-amber-400/20 transition-opacity duration-300 ${isFlipping ? 'opacity-0' : 'opacity-100'}`}>
          
          {chapters[page].image && (
            <div className="relative w-full aspect-video border-b border-amber-400/20">
              <img 
                src={chapters[page].image} 
                alt={chapters[page].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            </div>
          )}
          
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2 text-amber-400 font-serif">{chapters[page].title}</h2>
            <div className="w-16 h-0.5 bg-amber-400/50 mb-6"></div>
            
            <div className="text-lg text-gray-200 leading-relaxed font-serif whitespace-pre-line mb-6">
              {chapters[page].text}
            </div>
            
            {chapters[page].verse && (
              <p className="text-amber-400 italic text-right font-serif">— {chapters[page].verse}</p>
            )}

            {chapters[page].relicId && (
              <Link 
                href={`/relics/${chapters[page].relicId}`}
                className="mt-6 inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded-lg transition"
              >
                EXPERIENCE THE RELIC →
              </Link>
            )}
          </div>

          <div className="px-8 pb-4 text-center text-gray-600 text-sm">
            Page {page + 1} of {chapters.length}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <button 
            onClick={prevPage} 
            disabled={page === 0}
            className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition"
          >
            ← Prev
          </button>
          
          <Link 
            href="/relics"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-lg transition text-center"
          >
            THE ARMORY
          </Link>
          
          <button 
            onClick={nextPage}
            disabled={page === chapters.length - 1}
            className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition"
          >
            Next →
          </button>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-gray-500 hover:text-amber-400 text-sm">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
