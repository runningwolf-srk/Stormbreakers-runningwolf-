// app/chronicles/page.tsx - Card Layout Only
import Link from 'next/link'

const chapters = [
  { id: 1, title: "The Map", theme: "Worship", scripture: "Psalm 23", excerpt: "When Psalm 23 stopped being poetry and became a map through the valley." },
  { id: 2, title: "The Valley", theme: "Courage", scripture: "Joshua 1:9", excerpt: "The moment fear left and the warrior rose." },
  { id: 3, title: "The Fire", theme: "Refining", scripture: "Isaiah 43:2", excerpt: "The fire didn't destroy me. It revealed who God created me to become." },
]

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-center text-amber-100 mb-2">THE CHRONICLES</h1>
        <p className="text-center text-amber-200/40 text-sm mb-12">Testimony behind the songs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((c) => (
            <Link key={c.id} href={`/chronicles/${c.id}`} className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl hover:border-amber-400/30 transition group">
              <p className="text-amber-400/50 text- tracking-widest font-black mb-2">CHAPTER {String(c.id).padStart(2,'0')} — {c.theme.toUpperCase()}</p>
              <h3 className="text-amber-100 font-black text-lg mb-2">{c.title}</h3>
              <p className="text-amber-200/40 text-xs mb-3">{c.scripture}</p>
              <p className="text-stone-300 text-sm mb-4">{c.excerpt}</p>
              <p className="text-amber-400 text-xs font-black tracking-widest group-hover:translate-x-1 transition">Read More →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
