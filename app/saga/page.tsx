'use client'
import { useState } from 'react'
import Link from 'next/link'

const chapters = [
  {
    id: 1,
    title: "PROLOGUE: THE SILENT PLAINS",
    image: "/729068345_1706992463868756_7233760520950384832_n~2.jpg",
    text: `The wind never stopped in Guymon.

It scraped across the plains like a blade on stone, carrying dust and silence in equal measure.

A boy named RunningWolf stood on that flat earth, eyes on the horizon. No mountains. No trees. Nothing to break the sky.

The elders said the land was cursed. Too much blood. Too many broken promises.

But RunningWolf heard something else in the wind.

A horn.

Distant. Waiting.

He didn't know its name yet. He only knew that silence was not peace.

It was the space before war.`,
    relicLink: 1,
    relicTitle: "Horn of War"
  },
  {
    id: 2,
    title: "CHAPTER I: THE HORN AWAKENS",
    image: "/images/horn-of-war-bg.jpg",
    text: `The horn was carved from the bone of a beast that no longer walked the earth.

It hung in the great hall of the Stormkeepers, silent for three generations.

"Why do we keep it?" the young wolves asked.

The old chieftain, Bjorn One-Eye, would only say: "Because it remembers."

RunningWolf was not born a Stormkeeper. He was a wanderer. An exile.

But the night the sky turned red, the horn blew itself.

No hand touched it. No breath filled it.

It sounded once.

And every wolf in the valley stopped breathing.

War had come. Not from the north. Not from raiders.

From within.`,
    relicLink: 1,
    relicTitle: "Horn of War"
  },
  {
    id: 3,
    title: "CHAPTER II: THE FORGE OF BROTHERS",
    image: "/images/iron-collide-bg.jpg",
    text: `"You fight like a man with no brothers," growled Hakon Iron-Hand.

RunningWolf blocked the axe with his shield. Wood splintered. "I have no brothers."

"Then you will die alone."

The training yard was mud and blood. No glory. Only friction.

Hakon swung again. "Iron sharpens iron, pup. But only if you stay in the fire."

That night, RunningWolf found Hakon by the forge, mending his own armor.

"You let me win," RunningWolf said.

Hakon didn't look up. "No. I let you survive."

He tossed a leather bracer across the fire. "Put that on. Tomorrow we bleed together."`,
    relicLink: 3,
    relicTitle: "Iron Collide"
  },
  {
    id: 4,
    title: "CHAPTER III: THE THORN KING",
    image: "/images/crown-thorns-bg.jpg",
    text: `They called him the Thorn King.

He ruled from a throne of rusted swords, a crown of black thorns pressed into his skull.

"Another one?" he rasped as they dragged RunningWolf forward. "The plains send me wolves now?"

"I'm not here to kneel," RunningWolf said.

The Thorn King laughed. Blood ran from his temples. "All kneel. To fear. To gold. To death."

He leaned forward. "What makes you different?"

RunningWolf met his eyes. "I already died."

The hall went silent.

The Thorn King stood. "Then you have nothing left to lose."

"No," RunningWolf said. "I have everything left to give."`,
    relicLink: null,
    relicTitle: null
  },
  {
    id: 5,
    title: "CHAPTER IV: THE CRIMSON COVENANT",
    image: "/images/blood-of-cross-bg.jpg",
    text: `Viking blood oaths were sealed with a cut across the palm.

"My blood for your vengeance," they would swear.

But in the cave beneath the mountain, RunningWolf found a different altar.

No gold. No skulls.

Just a cross.

Carved from black stone, older than the mountains.

And beneath it, words in a language he didn't know, but his heart understood:

"Without the shedding of blood, there is no crossing over."

He drew his knife.

Not for vengeance.

For surrender.

The covenant was not his to make.

It was his to enter.`,
    relicLink: 5,
    relicTitle: "Blood of the Cross"
  },
  {
    id: 6,
    title: "CHAPTER V: THE VOICE IN THE FIRE",
    image: "/images/heaven-calling-bg.jpg",
    text: `The fire did not burn him.

It called him.

"RunningWolf."

He turned. No one there. Just flames licking the night sky.

"RunningWolf."

The third time, he answered. "I'm here."

The fire parted. Not like a door. Like a veil.

And beyond it, a figure. Not of this world.

"You were not made for the valley," the voice said.

"I know," RunningWolf whispered.

"Then why do you still live there?"

The fire collapsed inward. The vision ended.

But the calling remained.

Ascend.`,
    relicLink: 6,
    relicTitle: "Heaven Calling"
  },
  {
    id: 7,
    title: "EPILOGUE: WE RISE",
    image: "/729068345_1706992463868756_7233760520950384832_n~2.jpg",
    text: `This is not the end.

This is the beginning of the hunt.

The Stormbreakers do not gather to remember.

We gather to advance.

One horn. One fire. One King.

By His call we rise.

🔥🐺⚔️

TO BE CONTINUED...`,
    relicLink: null,
    relicTitle: null
  }
]

export default function SagaPage() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const chapter = chapters[currentChapter]

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
      <div className="bg-black/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-bold text-lg font-serif">
            Stormbreakers - RunningWolf
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-zinc-400 hover:text-amber-500">Home</Link>
            <Link href="/relics" className="text-zinc-400 hover:text-amber-500">Relics</Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Chapter Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm tracking-[0.4em] mb-4">
            {chapter.title.split(':')[0]}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">
            {chapter.title.split(': ')[1] || chapter.title}
          </h1>
        </div>

        {/* Full-Page Illustration */}
        <div className="w-full aspect-[16/9] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 mb-12 shadow-2xl">
          <img 
            src={chapter.image} 
            alt={chapter.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story Text */}
        <div className="max-w-2xl mx-auto">
          {chapter.text.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-zinc-300 leading-loose mb-8 text-lg font-serif first-letter:text-5xl first-letter:text-amber-500 first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Listen to Relic Button */}
        {chapter.relicLink && (
          <div className="text-center mt-16">
            <Link
              href={`/relics/${chapter.relicLink}`}
              className="inline-block bg-amber-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors"
            >
              LISTEN TO THE RELIC → {chapter.relicTitle}
            </Link>
          </div>
        )}

        {/* Divider */}
        <div className="w-32 h-px bg-zinc-800 mx-auto my-16"></div>

        {/* Page Navigation */}
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <button
            onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
            disabled={currentChapter === 0}
            className="text-zinc-500 hover:text-amber-500 disabled:opacity-20 disabled:cursor-not-allowed font-serif"
          >
            ← PREVIOUS CHAPTER
          </button>

          <span className="text-zinc-600 text-sm font-mono">
            {String(currentChapter + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
          </span>

          <button
            onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
            disabled={currentChapter === chapters.length - 1}
            className="text-zinc-500 hover:text-amber-500 disabled:opacity-20 disabled:cursor-not-allowed font-serif"
          >
            NEXT CHAPTER →
          </button>
        </div>
      </div>
    </main>
  )
}
