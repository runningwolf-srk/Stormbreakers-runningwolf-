import Link from 'next/link'

const chapters = [
  { id: 1, title: "THE HORN", subtitle: "The call goes out" },
  { id: 2, title: "THE SCARS", subtitle: "Born through the fire" },
  { id: 3, title: "THE IRON", subtitle: "When kingdoms collide" },
  { id: 4, title: "THE CALLING", subtitle: "Heaven is not silent" },
  { id: 5, title: "THE PATH", subtitle: "A journey to His presence" },
  { id: 6, title: "THE BLOOD", subtitle: "The war was won" },
  { id: 7, title: "THE FIRE", subtitle: "You become the wildfire" }
]

export default function SagaPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-2xl mx-auto px-6 py-20">
        
        {/* Nav */}
        <div className="flex justify-between text-sm text-zinc-500 mb-24 tracking-widest font-sans">
          <Link href="/relics" className="hover:text-amber-500">← Relics</Link>
          <span>THE STORMBREAKERS SAGA</span>
          <Link href="/music" className="hover:text-amber-500">Armory →</Link>
        </div>

        {/* Book Cover */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-serif text-amber-500 mb-4">SAGA</h1>
          <p className="text-zinc-500">A book of war and worship</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mt-8"></div>
        </div>

        {/* Table of Contents */}
        <div className="space-y-1">
          <p className="text-zinc-600 text-sm mb-8 tracking-[0.3em] font-sans">CONTENTS</p>
          
          {chapters.map((chapter) => (
            <Link 
              key={chapter.id}
              href={`/saga/${chapter.id}`}
              className="block border-b border-zinc-800 py-6 hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-zinc-500 text-sm font-sans mb-1">
                    Chapter {chapter.id}
                  </p>
                  <h2 className="text-2xl font-serif text-white group-hover:text-amber-500 transition-colors">
                    {chapter.title}
                  </h2>
                  <p className="text-zinc-500 text-sm mt-1 font-sans">
                    {chapter.subtitle}
                  </p>
                </div>
                <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
