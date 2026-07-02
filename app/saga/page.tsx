import Link from 'next/link'

const chapters = [
  { id: 1, title: "The Call", verse: "1 Samuel 3:10" },
  { id: 2, title: "The Valley", verse: "Psalm 23:4" },
  { id: 3, title: "The Forge", verse: "Proverbs 27:17" },
  { id: 4, title: "The Fire", verse: "Isaiah 6:6" },
]

export default function SagaPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex justify-between text-sm text-zinc-500 mb-16 tracking-widest font-sans">
          <Link href="/" className="hover:text-amber-500">← STORMBREAKERS</Link>
          <span>SAGA</span>
          <div className="w-16"></div>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-amber-500 mb-4">THE SAGA</h1>
          <p className="text-zinc-500 tracking-widest">A Warrior's Journey Through Scripture</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-8"></div>
        </div>

        <div className="space-y-6">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/saga/${chapter.id}`}
              className="block border border-zinc-800 rounded-lg p-8 hover:border-amber-500 transition-all"
            >
              <div className="text-amber-500 text-sm tracking-widest mb-2">CHAPTER {chapter.id}</div>
              <h2 className="text-3xl font-serif text-white mb-2">{chapter.title}</h2>
              <p className="text-zinc-500">{chapter.verse}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
