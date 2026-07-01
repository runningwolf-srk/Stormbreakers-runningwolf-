'use client'
import { useState } from 'react'
// ... rest of imports

export default function RelicPage({ params }: { params: { id: string } }) {
  const [revealed, setRevealed] = useState(false)
  // ... rest of code

  return (
    <main className="min-h-screen bg-black text-zinc-200">
      {/* ... video + verse stays same ... */}

      {/* INTERACTIVE: Click to Unlock Meaning */}
      {!revealed ? (
        <div className="text-center py-20">
          <button 
            onClick={() => setRevealed(true)}
            className="border-2 border-amber-500 text-amber-500 px-12 py-4 text-xl font-serif hover:bg-amber-500/10 transition-colors"
          >
            SOUND THE HORN TO REVEAL THE MEANING
          </button>
        </div>
      ) : (
        <div className="prose prose-invert max-w-none">
          <h2 className="text-amber-500 font-serif text-2xl mb-8">The Devotional</h2>
          {/* ... devotional content ... */}
        </div>
      )}
    </main>
  )
}
