'use client'
import { useState } from 'react'
import Link from 'next/link'

const chapters = [
  {
    id: 1,
    title: "CHAPTER I: THE HORN OF WAR",
    subtitle: "The Silence Before the Sound",
    image: "/images/horn-of-war-bg.jpg",
    text: `For three hundred winters, the Horn of War hung silent in the Hall of the Stormkeepers.

Forged from the skull of the last dragon, it was said only a king could wake it. Kings had tried. Kings had failed. The horn remained mute.

Until the Night of Red Skies.

No hand touched it. No breath filled it. Yet it sounded once — a note so deep it cracked the frozen rivers.

The old wolves knew what it meant: The Long Peace was over.

In the valley below, raiders lit their torches. In the mountains, exiles sharpened rusted blades.

But in the hall, a young shield-maiden named Astrid asked the question none dared speak:

"Who blew the horn?"

The chieftain Bjorn One-Eye pointed not to the sky, nor to the enemy.

He pointed to the shadows behind the throne.

"Something older than kings," he said. "Something that remembers what we are."`,
    relicLink: 1,
    relicTitle: "Horn of War"
  },
  {
    id: 2,
    title: "CHAPTER II: IRON COLLIDE",
    subtitle: "The Forge of Brothers",
    image: "/images/iron-collide-bg.jpg",
    text: `The law was simple: No man fights alone.

Hakon Iron-Hand enforced it with his fists.

Every dawn, the warband gathered in the training circle. Not to spar. To collide.

"Your enemy will not wait for you to be ready," Hakon would roar. "So we make you ready in pain."

Young Kael was the smallest. The slowest. The first to bleed every morning.

"Why do you keep coming back?" Hakon asked him on the seventh day, as Kael spat blood into the mud.

Kael looked up. "Because the horn blew. And I will not watch my brothers die while I hide."

Hakon grunted. He tossed Kael a new shield. "Then tomorrow, you don't block. You strike first."

That winter, when the raiders came over the pass, it was Kael who stood in the gap.

Iron doesn't sharpen iron by accident. It takes heat. Pressure. Friction.

It takes brothers willing to break you so the enemy can't.`,
    relicLink: 3,
    relicTitle: "Iron Collide"
  },
  {
    id: 3,
    title: "CHAPTER III: CROWN OF THORNS",
    subtitle: "The King With No Kingdom",
    image: "/images/crown-thorns-bg.jpg",
    text: `They found him in the ruins of the old chapel.

Not on a throne. On his knees.

A crown of black thorns pressed into his brow. Blood frozen on his cheeks.

"Are you the Thorn King?" Astrid asked, her axe ready.

The man laughed. It was not a sane sound. "I was. Once."

He told them the story: He had been a prince who sought to end war by becoming the most feared warrior in the north. He conquered. He burned. He crowned himself with thorns to show he feared no pain.

"And then He came," the Thorn King whispered.

"Who?"

"The one who wore thorns before me. But His were not for glory. They were for guilt. Mine. Yours. The world's."

The Thorn King looked at his hands. "I built a kingdom with blood. He bought one with His own."

He stood, unsteadily. "Take my crown. It's heavy. And it saves no one."

Astrid did not take it. She buried it instead.`,
    relicLink: null,
    relicTitle: null
  },
  {
    id: 4,
    title: "CHAPTER IV: BLOOD OF THE CROSS",
    subtitle: "The Covenant in the Cave",
    image: "/images/blood-of-cross-bg.jpg",
    text: `Every Viking knew the blood oath.

A cut across the palm. "My blood for your vengeance." Sealed in fire, broken only by death.

But in the deepest cave beneath the mountain, Bjorn One-Eye led them to a different altar.

No gold. No skulls of enemies. Just a single cross, carved from black stone that was warm to the touch.

"Older than our gods," Bjorn said. "Older than the mountains."

On the stone, letters in a language none of them knew. But Astrid could read them.

"Without the shedding of blood, there is no crossing over."

Kael drew his knife. "Another oath?"

Bjorn shook his head. "No. The end of oaths."

He pressed his palm to the stone. No cut. No blood.

"The covenant is not ours to make," he said. "It's ours to enter."

Above them, the mountain groaned. As if recognizing its Maker.`,
    relicLink: 5,
    relicTitle: "Blood of the Cross"
  },
  {
    id: 5,
    title: "CHAPTER V: HEAVEN CALLING",
    subtitle: "The Voice in the Fire",
    image: "/images/heaven-calling-bg.jpg",
    text: `The warband was dying.

Not from battle. From winter. From hunger. From the silence that follows when hope runs out.

Kael built a fire that night. Not for warmth. For signal. "If the gods are real," he shouted to the sky, "then speak!"

The fire answered.

Not with words. With a name.

"Kael."

He fell back. "Who speaks?"

"Kael."

The third time, the flames parted like a curtain. And beyond it, he saw it: a door standing open in heaven.

No stairs. No path. Just a call.

"You were not made for the valley," the voice said.

"I know," Kael wept. "But I don't know the way up."

The voice was not angry. It was not distant.

"Then stop looking for a way. Look for Me."

The fire collapsed. The vision ended.

But that night, Kael did not sleep in the valley.

He began to climb.`,
    relicLink: 6,
    relicTitle: "Heaven Calling"
  },
  {
    id: 6,
    title: "CHAPTER VI: I'M ON FIRE",
    subtitle: "Wildfire Spreads",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    text: `The first spark landed on Astrid's cloak.

She beat it out. Thought nothing of it.

The second spark caught in Hakon's beard. He cursed and slapped it away.

But the third spark — the third spark landed in the dry grass of the valley.

And the valley was ready.

It did not burn like a campfire. It burned like judgment. Like cleansing. Like a world being remade.

The warband ran. Not from the fire. With it.

"The horn called us to war," Bjorn shouted over the roar. "The fire calls us to cleanse!"

They did not fight that day. They ran through villages, not with swords, but with torches.

Not to destroy. To ignite.

Every hearth they passed, they lit. Every cold heart, they warmed.

By dawn, the valley was not ash.

It was alive.

Wildfire doesn't ask permission. It spreads.

So does revival.`,
    relicLink: 6,
    relicTitle: "I'm On Fire"
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
            The Stormbreakers Saga
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
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">
            {chapter.title.split(': ')[1]}
          </h1>
          <p className="text-zinc-500 text-lg italic">
            {chapter.subtitle}
          </p>
        </div>

        {/* Full-Page Illustration */}
        <div className="w-full aspect-[16/9] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 mb-12 shadow-2xl">
          <img
            src={chapter.image}
            alt={chapter.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story Text - NO VERSES, NO DEVOTIONALS */}
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
