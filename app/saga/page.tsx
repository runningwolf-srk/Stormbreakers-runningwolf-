'use client'

import { useState } from 'react'
import Link from 'next/link'
import { relics } from '@/app/music/relics'

const sagaChapters = [
  {
    id: 'prologue',
    title: 'Prologue: The Silence',
    content: `Before the horn, there is silence. Not peace - silence. The moment before war breaks.

God uses silence to prepare warriors.

In the beginning, the Stormbreakers were scattered. Each carried a relic, unaware of the others. The Horn lay buried. The Sword rusted in shadow. The Banner torn by wind.

But the Watchman heard a whisper: "Gather them."

This is the saga of that gathering.`,
    scripture: 'Be still, and know that I am God. - Psalm 46:10',
    relicSlug: null
  },
  {
    id: 'horn-of-war',
    title: 'Chapter I: The Horn of War',
    content: `The Battle Cry

The first relic awakened was the Horn. Found in the ruins of the old watchtower, caked in ash and blood.

When RunningWolf lifted it, the skies cracked. Not thunder - but a tear. A summons.

The horn does not call men to battle. It calls warriors to remembrance.

Who they are. Whose they are. Why they were forged.`,
    scripture: 'Joel 2:1',
    relicSlug: 'horn-of-war'
  },
  {
    id: 'im-on-fire',
    title: "Chapter II: I'm On Fire",
    content: `The Holy Coal

A seraph flew to the altar with a burning coal. It touched the lips of the unworthy and made them clean.

This is not natural fire. This is altar fire. 
The kind that burns away guilt but leaves the warrior standing.

The Stormbreakers do not carry torches.
They ARE the torch.`,
    scripture: 'Isaiah 6:6-7',
    relicSlug: 'im-on-fire'
  },
  {
    id: 'blood-of-cross',
    title: 'Chapter III: Blood of Cross',
    content: `The Reconciliation

Peace was made through blood. Not negotiation. Not compromise. Blood.

The cross was not defeat - it was the greatest act of war. The enemy thought he won, but the grave became a womb.

Every Stormbreaker must pass through the blood. It is the only gate to the armory.`,
    scripture: 'Colossians 1:20',
    relicSlug: 'blood-of-cross'
  },
  {
    id: 'iron-collide',
    title: 'Chapter IV: Iron Collide',
    content: `The Sharpening

A warrior alone is a warrior vulnerable. Iron sharpens iron.

The Stormbreakers were not meant to stand in isolation. They clash. They collide. They wound each other to heal each other.

Brotherhood is forged in fire and friction.

When we collide, sparks fly. And sparks start wildfires.`,
    scripture: 'Proverbs 27:17',
    relicSlug: 'iron-collide'
  },
  {
    id: 'spiritual-journey',
    title: 'Chapter V: Spiritual Journey',
    content: `The Valley

Every warrior walks through shadow. The question is not "if" but "with whom."

The Shepherd does not remove the valley. He walks through it with you. His rod and staff - weapons of a warrior-shepherd.

The journey is not to avoid darkness, but to carry light through it.

Fear no evil. You are not alone.`,
    scripture: 'Psalm 23:4',
    relicSlug: 'spiritual-journey'
  },
  {
    id: 'heaven-calling',
    title: 'Chapter VI: Heaven Calling',
    content: `The Open Door

John saw a door standing open in heaven. And a voice like a trumpet said: "Come up here."

The call is not down to earth. The call is up to the throne room.

Stormbreakers fight FROM victory, not FOR victory. We ascend before we advance.

Heaven is calling. The door is open.

Will you come up?`,
    scripture: 'Revelation 4:1',
    relicSlug: 'heaven-calling'
  },
  {
    id: 'lord-of-lords',
    title: 'Chapter VII: Lord of lords',
    content: `The Coronation

He came once as servant. He returns as Sovereign.

On His robe and thigh: King of kings. Lord of lords.

The same hands that were pierced now hold the scepter. The same brow that wore thorns now wears many crowns.

The Stormbreakers do not fight for victory. They enforce it.

Because the King has already won.`,
    scripture: 'Revelation 19:16',
    relicSlug: 'lord-of-lords'
  },
  {
    id: 'epilogue',
    title: 'Epilogue: By His Call We Rise',
    content: `This saga is not finished.

Every time a warrior chooses worship over warfare,
Every time a broken man picks up his cross,
Every time the remnant says "Here I am, send me" —

The Stormbreakers rise.

This book will grow. More relics. More chapters.
More warriors awakened.

You are part of this saga now.

What relic do you carry?`,
    scripture: 'Isaiah 6:8',
    relicSlug: null
  }
]

export default function SagaBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = sagaChapters.length
  const chapter = sagaChapters[currentPage]
  const relic = relics.find(r => r.slug === chapter.relicSlug)

  const nextPage = () => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1)

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full">
        <div className="bg-gradient-to-br from-amber-50/10 to-amber-50/5 border-2 border-amber-500/30 rounded-lg shadow-2xl shadow-amber-500/10 p-6 md:p-12 min-h-[650px] relative">
          <h1 className="text-2xl md:text-4xl font-serif text-amber-500 mb-6 text-center">{chapter.title}</h1>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mb-8"></div>
          <div className="text-base md:text-lg leading-relaxed text-zinc-300 whitespace-pre-line mb-8 font-serif">{chapter.content}</div>
          <p className="text-amber-500/80 italic text-center mb-8">{chapter.scripture}</p>
          {relic && (
            <div className="text-center mb-8">
              <Link href={`/music/track?slug=${relic.slug}`}>
                <button className="border border-amber-500 text-amber-500 px-6 py-2 hover:bg-amber-500/10 transition-colors font-bold rounded">
                  EXPERIENCE THE RELIC →
                </button>
              </Link>
            </div>
          )}
          <div className="absolute bottom-4 left-0 right-0 text-center text-zinc-600 text-sm">Page {currentPage + 1} of {totalPages}</div>
        </div>
        <div className="flex justify-between items-center mt-8 gap-4">
          <button onClick={prevPage} disabled={currentPage === 0} className="px-4 md:px-6 py-3 border border-amber-500/50 text-amber-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-500/10 rounded">← Prev</button>
          <Link href="/music"><button className="px-4 md:px-6 py-3 bg-amber-500 text-black font-bold hover:bg-amber-400 rounded">THE ARMORY</button></Link>
          <button onClick={nextPage} disabled={currentPage === totalPages - 1} className="px-4 md:px-6 py-3 border border-amber-500/50 text-amber-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-500/10 rounded">Next →</button>
        </div>
      </div>
    </main>
  )
}
