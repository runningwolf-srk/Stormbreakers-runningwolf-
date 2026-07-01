'use client'
import { useState } from 'react'
import Link from 'next/link'

const chapters = [
  {
    id: 0,
    title: "PROLOGUE: THE CALL OF THE WOLF",
    subtitle: "How the Stormbreaker Was Named",
    image: "/729068345_1706992463868756_7233760520950384832_n~2.jpg",
    text: `The wind never stopped in Guymon, Oklahoma.

Dust. Silence. Flat earth to the horizon.

A man named Jessy Marquez stood there, wondering if God had forgotten his name.

He was not a pastor. Not a prophet. Not a king.

He was a warrior without a war.

Then the call came.

"RunningWolf."

He didn't choose the name. The name chose him.

A wolf doesn't hunt for sport. It hunts because the pack is hungry. Because winter is coming. Because someone has to run ahead and howl when danger is near.

Stormbreakers was born that night. Not as a band. As a warband.

Cinematic worship. Viking spirit. Holy fire.

This is not his story.

This is the story that came through him.

The songs. The relics. The saga.`,
    relicLink: null,
    relicTitle: null,
    isOrigin: true
  },
  {
    id: 1,
    title: "CHAPTER I: HORN OF WAR",
    subtitle: "The Sound That Ended Peace",
    image: "/images/horn-of-war-bg.jpg",
    text: `For three hundred winters, the Horn of War hung silent in the Hall of the Stormkeepers.

Forged from the skull of the last dragon, it was said only a king could wake it. Kings had tried. Kings had failed.

Until the Night of Red Skies.

No hand touched it. No breath filled it. Yet it sounded once — a note so deep it cracked the frozen rivers and woke the dead in their barrows.

The old wolves knew what it meant: The Long Peace was over.

Chieftain Bjorn One-Eye gathered the warband. "The horn does not blow for raiders," he said. "It blows for reckoning."

A young shield-maiden, Astrid, stepped forward. "Who blew it?"

Bjorn pointed to the shadows behind the throne. "Something older than kings. Something that remembers what we were before we learned to fear."

That night, they marched. Not toward the enemy. Toward the sound.

Because when heaven blows a horn, you don't ask why. You answer.`,
    relicLink: 1,
    relicTitle: "Horn of War"
  },
  {
    id: 2,
    title: "CHAPTER II: IRON COLLIDE",
    subtitle: "The Forge of Brothers",
    image: "/images/iron-collide-bg.jpg",
    text: `The law of the Stormkeepers was brutal and simple: No man fights alone.

Hakon Iron-Hand enforced it with broken bones and harder truths.

Every dawn in the training circle. No glory. Only collision.

"Your enemy will not wait for you to be ready," Hakon roared at the recruits. "So we make you ready in pain."

Young Kael was the smallest. First to bleed. Last to quit.

On the seventh day, as Kael lay in the mud with a cracked rib, Hakon stood over him. "Why do you keep coming back, pup?"

Kael spat blood. "Because the horn blew. And I will not watch my brothers die while I hide in the valley."

Hakon grunted. He hauled Kael up by the collar. "Then tomorrow, you don't block. You strike first."

When the raiders came over the White Pass that winter, it was Kael who held the line while the others regrouped.

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
    text: `They found him in the ruins of the old chapel at Ravenscar.

Not on a throne. On his knees in the snow.

A crown of black thorns pressed into his skull. Blood frozen on his cheeks like war paint.

"Are you the Thorn King?" Astrid asked, her axe half-raised.

The man laughed. The sound was broken. "I was. Once."

He had been Prince Valdr, heir to the Nine Fjords. He sought to end war by becoming war itself. He conquered. He burned. He crowned himself with thorns to show the gods he feared no pain.

"And then He came," Valdr whispered.

"Who?"

"The one who wore thorns before me. But His were not for glory. They were for guilt. Mine. Yours. The world's."

Valdr touched the frozen blood on his face. "I built a kingdom with iron and fire. He bought one with His own blood."

He stood, unsteadily. "Take my crown. It's heavy. And it saves no one."

Astrid did not take it. She drew her knife and cut the thorns from his head, one by one.

"We don't need another king," she said. "We need a brother."`,
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

It bound clans. Started wars. Ended them.

But in the deepest cave beneath Mount Skuld, Bjorn One-Eye led the warband to a different altar.

No gold. No skulls. No weapons.

Just a single cross, carved from black stone that was warm to the touch despite the ice.

"Older than our gods," Bjorn said. "Older than the mountains themselves."

Carved into the stone were letters in a language none of them knew. But Astrid traced them with her finger and understood.

"Without the shedding of blood, there is no crossing over."

Kael drew his knife. Old instinct. "Another oath?"

Bjorn shook his head. "No, boy. The end of oaths."

He pressed his palm flat against the stone. No cut. No blood. Just contact.

"The covenant is not ours to make," Bjorn said, his voice shaking. "It's ours to enter. His blood was already shed. For us. For our fathers. For the ones we killed."

Above them, the mountain groaned. Not in anger. In recognition.

The war was over before it began.`,
    relicLink: 5,
    relicTitle: "Blood of the Cross"
  },
  {
    id: 5,
    title: "CHAPTER V: HEAVEN CALLING",
    subtitle: "The Voice in the Fire",
    image: "/images/heaven-calling-bg.jpg",
    text: `The warband was dying.

Not from battle. From the third winter. From hunger that gnawed bones. From the silence that follows when hope runs out and even the wolves stop howling.

Kael built a fire that night. Not for warmth — they had no wood to spare. For defiance.

"If the gods are real," he shouted to the indifferent stars, "then speak! We are done with silence!"

The fire answered.

Not with words. With a name.

"Kael."

He scrambled back from the flames. "Who speaks?"

"Kael."

The third time, the flames did not flicker. They parted. Like a curtain. Like a veil.

And beyond it, Kael saw it: a door standing open in heaven. No stairs leading up. No path. Just invitation.

"You were not made for the valley," the voice said. It was not thunder. It was not whisper. It was home.

"I know," Kael wept, falling to his knees. "But I don't know the way up. We've been in this valley for generations."

The voice was not angry. It was not distant. It was closer than his own breath.

"Then stop looking for a way. Look for Me. I AM the way."

The fire collapsed into embers. The vision ended.

But that night, Kael did not sleep in the valley with the others.

He took one step up the mountain. Then another.

He began to climb.`,
    relicLink: 6,
    relicTitle: "Heaven Calling"
  },
  {
    id: 6,
    title: "CHAPTER VI: I'M ON FIRE",
    subtitle: "Wildfire Spreads",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    text: `It started with a spark.

Literally.

The first spark landed on Astrid's fur cloak as she stood watch. She beat it out. Thought nothing of it. Sparks happen.

The second spark caught in Hakon Iron-Hand's beard. He cursed the gods and slapped it away. "The wind is playing tricks."

But the third spark — the third spark landed in the dry grass of the Valley of Bones.

And the valley was ready.

It did not burn like a campfire. It did not burn like a forge.

It burned like judgment. Like cleansing. Like a world being baptized in flame.

The warband ran. Not from the fire. With it. Beside it. Ahead of it.

"The horn called us to war!" Bjorn One-Eye bellowed over the roar that drowned thunder. "The fire calls us to cleanse!"

They did not fight that day. They ran through abandoned villages, not with swords, but with torches torn from the wildfire itself.

Not to destroy. To ignite.

Every cold hearth they passed, they lit. Every dark home, they woke. Every heart that had forgotten heat, they warmed.

By dawn, the valley was not ash and death.

It was alive. Smoking, yes. Scarred, yes. But alive.

Astrid stood on the ridge, face black with soot, watching the sunrise through the haze.

"Wildfire doesn't ask permission," she said to Kael.

He nodded. "It spreads."

"So does revival."

Below them, the first green shoots were already pushing through the black earth.`,
    relicLink: 6,
    relicTitle: "I'm On Fire"
  },
  {
    id: 7,
    title: "CHAPTER VII: SPIRITUAL JOURNEY",
    subtitle: "God Kept Me Alive",
    image: "/images/spiritual-journey-bg.jpg",
    text: `Valdr the Thorn King walked alone.

He had no warband. No title. No crown — Astrid had buried it at Ravenscar.

All he had was a scar where each thorn had been. Thirty-nine scars. One for each year he spent at war with God.

He walked east. Away from the fjords. Away from the songs of victory. Toward the wastes where exiles went to die.

On the fortieth day, he found a well. Or what was left of one. Stones. Dust. No water.

He sat. Prepared to die.

"Is this it?" he asked the sky. "Is this the end of the story?"

The sky did not answer. But the ground did.

A single drop of water fell from the stone lip of the well. Then another. Then a trickle.

Valdr put his hands under it. The water was warm.

He drank. And as he drank, he remembered.

Every battle he should have died in. The axe that missed by inches. The arrow that turned in the wind. The plague that took his brothers but passed over him.

"I don't understand," he whispered.

The voice came from the water itself. "You were not kept alive for your sake."

"Then why?"

"So you could tell them. The ones still in the valley. The ones who think silence is all there is."

Valdr stood. He was still an exile. Still scarred. Still without a kingdom.

But he was alive.

And now he had a message.

He turned west. Back toward the fjords. Back toward the war.

God kept me alive.

So I could go back and tell you: The horn is blowing. The fire is spreading.

And you are not forgotten.`,
    relicLink: null,
    relicTitle: "Spiritual Journey"
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
          {chapter.isOrigin && (
            <p className="text-amber-500 text-sm tracking-[0.4em] mb-4">
              THE ORIGIN
            </p>
          )}
          {!chapter.isOrigin && (
            <p className="text-amber-500 text-sm tracking-[0.4em] mb-4">
              {chapter.title.split(':')[0]}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">
            {chapter.title.split(': ')[1] || chapter.title}
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
            {String(currentChapter).padStart(2, '0')} / {String(chapters.length - 1).padStart(2, '0')}
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
