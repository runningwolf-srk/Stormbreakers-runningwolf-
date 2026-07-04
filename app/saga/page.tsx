'use client'
import { useState } from 'react'
import Link from 'next/link'

const book = [
  {
    chapter: "Prologue: The Silence",
    image: "/saga-01-awakening.jpg",
    text: "Before the fire, there was silence. Not peace — absence. The kind that comes after promises break and pulpits go quiet. He was not in the sanctuary. He was in the rubble. And there, a voice: 'The ones you’re looking for… are broken. Like you. Go find them.'"
  },
  {
    chapter: "Chapter 1: The First Flame",
    image: "/saga-02-flame.jpg",
    text: "The healing didn’t happen on stage. It happened in a jail cell. No music. No lights. Just a man with needle scars and a Bible verse taped to the wall: Isaiah 53:5. By His wounds we are healed. The first flame lit. Not in a crowd — in a cell. The call had begun."
  },
  {
    chapter: "Chapter 2: The Horn",
    image: "/saga-03-horn.jpg",
    text: "He tried to stay quiet. God said no. 'Blow the trumpet in Zion. Sound the alarm.' Joel 2:1 wasn’t a suggestion. The Horn of War is not for the comfortable. It’s for the watchmen who can’t sleep while the city burns. He blew it. And others heard."
  },
  {
    chapter: "Chapter 3: The Door",
    image: "/saga-04-door.jpg",
    text: "Revelation 4:1. 'Come up here.' He was tired of asking God to come down to his level. The door stood open. Heaven was calling, not to escape earth — but to see it from above. He stepped through. The view changed everything."
  },
  {
    chapter: "Chapter 4: The Marks",
    image: "/saga-05-scars.jpg",
    text: "Galatians 6:17. 'I bear on my body the marks of Jesus.' He stopped covering the scars. Addiction. Abuse. Abandonment. The fire wrote scripture on his skin. Scars that preach louder than sermons. The broken became the billboard."
  },
  {
    chapter: "Chapter 5: The Collision",
    image: "/saga-06-iron.jpg",
    text: "Proverbs 27:17. Iron sharpens iron. He found them one by one. Not friends — brothers. They didn’t agree. They collided. Sparks flew. And in the collision, weapons were forged. Stormbreakers aren’t made in safety. They’re made in fire."
  },
  {
    chapter: "Chapter 6: The Blood",
    image: "/saga-07-blood.jpg",
    text: "Ephesians 1:7. 'In Him we have redemption through His blood.' No excuses. No apologies. The cross wasn’t a metaphor. It was a transaction. Paid in full. The Blood of Cross ended the debt. And started the war."
  },
  {
    chapter: "Epilogue: The King",
    image: "/saga-08-king.jpg",
    text: "Revelation 19:16. KING OF KINGS AND LORD OF LORDS. The album ends. The story doesn’t. Every knee will bow. The question isn’t if — it’s when. The Stormbreakers don’t fight for victory. They fight from it. By His call we rise."
  }
]

export default function SagaPage() {
  const [page, setPage] = useState(0)

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-2 text-amber-400 text-center">The Chronicle Stone</h1>
        <p className="text-gray-400 mb-8 text-center">The full story of the Stormbreakers</p>
        
        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-amber-400/30 shadow-lg shadow-amber-400/10">
          <div className="relative w-full aspect-[3/4]">
            <img 
              src={book[page].image} 
              alt={book[page].chapter}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">{book[page].chapter}</h2>
            <p className="text-lg text-gray-200 leading-relaxed font-serif">{book[page].text}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button 
            onClick={() => setPage(p => Math.max(0, p - 1))} 
            disabled={page === 0}
            className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            ← Prev Page
          </button>
          
          <span className="text-gray-400 font-mono">
            {page + 1} / {book.length}
          </span>
          
          <button 
            onClick={() => setPage(p => Math.min(book.length - 1, p + 1))}
            disabled={page === book.length - 1}
            className="bg-amber-500 hover:bg-amber-600 disabled:opacity-30 text-black font-bold py-2 px-6 rounded-lg transition"
          >
            Next Page →
          </button>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-gray-400 hover:text-amber-400">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
