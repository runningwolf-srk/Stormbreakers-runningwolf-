'use client'
import { useState } from 'react'
import Link from 'next/link'

const pages = [
  {
    image: "/saga-page-1.jpg",
    title: "Chapter 1: The Call",
    text: "It didn't come in a sanctuary. It came in the silence. A whisper in the ruin that said: 'Rise.'"
  },
  {
    image: "/saga-page-2.jpg", 
    title: "Chapter 2: The Fire",
    text: "The fire didn't destroy him. It revealed him. What was burned away was never his. What remained was called."
  },
  {
    image: "/saga-page-3.jpg",
    title: "Chapter 3: The Scars",
    text: "He stopped hiding the marks. They weren't shame. They were scripture written on skin. Scars that preach."
  },
  {
    image: "/saga-page-4.jpg",
    title: "Chapter 4: The Gathering",
    text: "One by one they came. Not the qualified. The called. From prisons. From streets. From graves. Stormbreakers."
  },
  {
    image: "/saga-page-5.jpg",
    title: "Chapter 5: The War",
    text: "They don't fight for territory. They fight for souls. The horn has sounded. By His call we rise."
  }
]

export default function SagaPage() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1)
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-amber-400 text-center">The Chronicle Stone</h1>
        
        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-amber-400/30">
          <div className="relative w-full aspect-[3/4]">
            <img 
              src={pages[currentPage].image} 
              alt={pages[currentPage].title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">{pages[currentPage].title}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">{pages[currentPage].text}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 0}
            className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-lg"
          >
            ← Prev
          </button>
          
          <span className="text-gray-400">
            Page {currentPage + 1} of {pages.length}
          </span>
          
          <button 
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="bg-amber-500 hover:bg-amber-600 disabled:opacity-30 disabled:cursor-not-allowed text-black font-bold py-2 px-6 rounded-lg"
          >
            Next →
          </button>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-gray-400 hover:text-amber-400">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
