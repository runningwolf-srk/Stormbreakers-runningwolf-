'use client'

import { useState } from 'react'
import Link from 'next/link'
import { relics } from '@/app/music/relics'

const sagaChapters = [
  {
    id: 'prologue',
    title: 'Prologue: The Silence',
    content: `Before the horn, there is silence. Not peace - silence. The moment before war breaks.

God uses silence to prepare warriors. He did it with David in the fields. He did it with Moses in the wilderness. He did it with Jesus for 30 years.

In the beginning, the Stormbreakers were scattered. Each carried a relic, unaware of the others. The Horn lay buried beneath the altar of a ruined church, caked in ash from a fire that burned three days. The Sword rusted in shadow, thrust into stone by a coward who couldn't bear its weight. The Banner was torn by wind and hung from the bones of forgotten watchmen.

They didn't know each other. They didn't know themselves.

But the Watchman on the wall heard a whisper in the night watch: "Gather them."

This is the saga of that gathering.
The chronicle of fire and oath.
The rise of those called by His name.

The silence is breaking.`,
    scripture: 'Be still, and know that I am God. - Psalm 46:10',
    relicSlug: null
  },
  {
    id: 'horn-of-war',
    title: 'Chapter I: The Horn of War',
    content: `The Battle Cry

The first relic awakened was the Horn.

RunningWolf found it after 40 days of fasting. He wasn't looking for a weapon. He was looking for God. He dug through the rubble of his own life and hit something metal. When he pulled it free, his hands shook. Not from weakness - from recognition.

When he lifted it to his lips, the skies cracked. Not thunder - but a tear. A summons ripped through the heavens.

The horn does not call men to battle. It calls warriors to remembrance.

Who they are.
Whose they are.
Why they were forged in the fire of affliction.

For years he'd been silent, thinking God had gone quiet. But God wasn't silent. RunningWolf was just listening to the wrong frequency.

Sound the alarm. The day of the Lord is coming. And the remnant will know it by the sound of the horn.

The war for souls has begun.`,
    scripture: 'Joel 2:1',
    relicSlug: 'horn-of-war'
  },
  {
    id: 'im-on-fire',
    title: "Chapter II: I'm On Fire",
    content: `The Holy Coal

Isaiah saw the Lord high and lifted up. The temple filled with smoke. Seraphim crying "Holy, Holy, Holy." And Isaiah said, "Woe is me! I am ruined!"

Then one of them flew to the altar. In his hand - a burning coal. Not to destroy. To purify.

The coal touched Isaiah's lips. His guilt was taken away. His sin atoned for. Then the voice: "Whom shall I send?"

This is not natural fire. This is altar fire. The kind that burns away guilt but leaves the warrior standing. The kind that doesn't consume you - it commissions you.

The Stormbreakers do not carry torches.
They ARE the torch.

Set ablaze by heaven. Sent into darkness. Every step leaves scorch marks on hell's territory.

You have been touched. Now burn.`,
    scripture: 'Isaiah 6:6-7',
    relicSlug: 'im-on-fire'
  },
  {
    id: 'blood-of-cross',
    title: 'Chapter III: Blood of Cross',
    content: `The Reconciliation

Peace was made through blood. Not negotiation. Not compromise. Not a treaty signed at a table.

Blood.

The cross was not defeat - it was the greatest act of war in history. The enemy thought he won. He drove the nails. He gambled for the robe. He posted guards at the tomb.

Then Sunday came.

The grave became a womb. Death gave birth to resurrection. The keys of hell and death were ripped from the enemy's hand.

Every Stormbreaker must pass through the blood. It is the only gate to the armory. Without the cross, the horn is just noise. With the cross, the horn is a war cry that makes demons tremble.

You were bought with a price. You are not your own.

The blood speaks a better word than accusation. It says "Forgiven. Redeemed. Mine."

Now go.`,
    scripture: 'Colossians 1:20',
    relicSlug: 'blood-of-cross'
  },
  {
    id: 'iron-collide',
    title: 'Chapter IV: Iron Collide',
    content: `The Sharpening

A warrior alone is a warrior vulnerable. David had Jonathan. Paul had Barnabas. Jesus had twelve.

Iron sharpens iron.

The Stormbreakers were not meant to stand in isolation. The enemy loves isolation. He killed millions in the garden with one question: "Did God really say?" Eve was alone when she answered.

Brotherhood is forged in fire and friction. We clash. We collide. We wound each other to heal each other. A true brother will tell you the truth even when it hurts. Because wounds from a friend can be trusted.

When iron hits iron, sparks fly. And sparks start wildfires.

The early church turned the world upside down not because they had better arguments. They had better love. They broke bread together. They sold possessions. They had all things in common.

Find your brothers. Link shields. Stand together.

One can put a thousand to flight. Two can put ten thousand.

Collide on purpose.`,
    scripture: 'Proverbs 27:17',
    relicSlug: 'iron-collide'
  },
  {
    id: 'spiritual-journey',
    title: 'Chapter V: Spiritual Journey',
    content: `The Valley

Every warrior walks through shadow. The question is not "if" but "with whom."

Psalm 23 isn't a funeral poem. It's a warfare psalm. "You prepare a table before me in the presence of my enemies." That's gangster. God sets up a feast while your enemies watch and can't touch you.

The Shepherd does not remove the valley. He walks through it with you. His rod and staff - weapons of a warrior-shepherd. The rod to fight off wolves. The staff to pull you back from cliffs.

David wrote this after he was anointed king but before he wore the crown. Years in caves. Running from Saul. Betrayed. Hungry. Tired.

But he learned: The valley is where oil is pressed. The valley is where giants fall. The valley is where you discover God is enough.

Fear no evil. You are not alone. The valley has an exit. And your Shepherd knows the way.

Keep walking.`,
    scripture: 'Psalm 23:4',
    relicSlug: 'spiritual-journey'
  },
  {
    id: 'heaven-calling',
    title: 'Chapter VI: Heaven Calling',
    content: `The Open Door

John was exiled on Patmos. Old. Alone. Punished for preaching. The church he planted was under persecution. From earth, it looked like defeat.

Then he heard it. A voice like a trumpet: "Come up here."

John saw a door standing open in heaven. Not cracked. Not ajar. Standing open.

The call is not down to earth. The call is up to the throne room.

Stormbreakers fight FROM victory, not FOR victory. We ascend before we advance. We see from heaven's perspective before we engage hell's problems.

From up there, your problems look small. Your enemies look defeated. Your future looks secure.

Because it is.

Heaven is calling. The door is open. The invitation hasn't expired.

Will you come up? Will you see what John saw? Will you hear what John heard?

Your circumstances may be Patmos. But your position is seated in heavenly places.

Come up here.`,
    scripture: 'Revelation 4:1',
    relicSlug: 'heaven-calling'
  },
  {
    id: 'lord-of-lords',
    title: 'Chapter VII: Lord of lords',
    content: `The Coronation

He came once as servant. Born in a feeding trough. No room in the inn. No crown but thorns. No throne but a cross.

He returns as Sovereign.

On His robe and thigh: King of kings. Lord of lords.

The same hands that were pierced now hold the scepter. The same brow that wore thorns now wears many crowns. The same back that was whipped now carries the government on His shoulders.

Every knee will bow. Some by choice now. All by force later. Every tongue will confess. Some in worship now. All in terror later.

The war ends when He speaks. One word and armies fall. One word and the sky rolls back like a scroll. One word and death dies.

The Stormbreakers do not fight for victory. They enforce it.

Because the King has already won. The tomb is empty. The throne is occupied. The enemy is defeated.

We don't fight FOR victory. We fight FROM it.

The Lion of Judah is coming. And He is not coming to take sides. He is coming to take over.

Maranatha. Come, Lord Jesus.`,
    scripture: 'Revelation 19:16',
    relicSlug: 'lord-of-lords'
  },
  {
    id: 'epilogue',
    title: 'Epilogue: By His Call We Rise',
    content: `This saga is not finished.

Every time a warrior chooses worship over warfare, the horn sounds.
Every time a broken man picks up his cross instead of a bottle, the blood speaks.
Every time the remnant says "Here I am, send me" instead of "Here I am, serve me" —

The Stormbreakers rise.

You read this book. But you're not just reading. You're being recruited.

The relics are real. The war is real. The King is real.

And He's asking you a question: What relic do you carry?

Maybe it's the Horn - you're called to sound alarms and wake the sleeping.
Maybe it's the Coal - you've been burned but now you burn for Him.
Maybe it's the Cross - your testimony is soaked in blood and redemption.
Maybe it's Iron - you're called to sharpen brothers.
Maybe it's the Valley - you guide others through darkness.
Maybe it's the Door - you live between heaven and earth.
Maybe it's the Crown - you carry kingdom authority.

Or maybe... you're still in the silence. Waiting. Preparing.

That's okay. God did His best work in silence. The womb is silent. The grave was silent for three days.

But the silence is breaking.

This book will grow. More relics. More chapters. More warriors awakened.

Because the story isn't over until the King returns.

And He's coming.

By His call we rise.`,
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
        <div className="bg-gradient-to-br from-amber-50/10 to-amber-50/5 border-2 border-amber-500/30 rounded-lg shadow-2xl shadow-amber-500/10 p-6 md:p-12 min-h-[700px] relative">
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
