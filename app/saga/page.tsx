import Link from 'next/link'

const chapters = [
  { 
    id: 1, 
    title: "The Call", 
    subtitle: "HEAVEN SPEAKS A NAME",
    verse: "1 Samuel 3:10",
    excerpt: "Samuel thought it was Eli. You might think it's coincidence. It's not."
  },
  { 
    id: 2, 
    title: "The Valley", 
    subtitle: "SHADOW BECOMES SONG",
    verse: "Psalm 23:4",
    excerpt: "Every warrior walks through shadow. The valley isn't punishment. It's preparation."
  },
  { 
    id: 3, 
    title: "The Forge", 
    subtitle: "IRON SHARPENS IRON",
    verse: "Proverbs 27:17",
    excerpt: "Don't run from the collision. It's how weapons are made."
  },
  { 
    id: 4, 
    title: "The Fire", 
    subtitle: "ALTAR COAL COMMISSION",
    verse: "Isaiah 6:6",
    excerpt: "This is not natural fire. This is altar fire. It commissions the prophet."
  },
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

        <div className="space-y-8">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/saga/${chapter.id}`}
              className="block border border-zinc-800 rounded-lg p-8 hover:border-amber-500 transition-all group"
            >
              <div className="text-amber-500 text-sm tracking-[0.3em] mb-3 font-sans">
                CHAPTER {chapter.id}
              </div>
              <h2 className="text-3xl font-serif text-white mb-2 group-hover:text-amber-500 transition-colors">
                {chapter.title}
              </h2>
              <p className="text-zinc-400 text-sm tracking-wider mb-4">{chapter.subtitle}</p>
              <p className="text-zinc-500 text-sm italic">{chapter.excerpt}</p>
              <div className="text-zinc-600 text-xs mt-4 tracking-widest">{chapter.verse}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
