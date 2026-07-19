  import Link from 'next/link'
import { CANON } from '@/lib/constants'

export default function ChronicleDetail({ params }: { params: { id: string } }) {
  const c = CANON.find(x => x.id === Number(params.id)) || CANON[0]
  const nextId = c.id < 6 ? c.id + 1 : null
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/chronicles" className="text-amber-400/40 text-xs mb-10 inline-block">← BACK TO CHRONICLES</Link>
        <p className="text-amber-400/60 text-xs font-black tracking-[0.3em]">{c.chapterCaps}</p>
        <h1 className="text-4xl font-black text-amber-100 mt-2">{c.title}</h1>
        <p className="text-amber-200/30 text-xs mt-2">{c.ref} • {c.relicLabel} • {c.song}</p>
        <p className="text-amber-100/80 italic text-lg mt-6">"{c.reflection}"</p>
        <p className="text-stone-300 leading-relaxed mt-6">{c.story}</p>
        <p className="text-stone-400 text-sm leading-relaxed mt-4">{c.behind}</p>
        <div className="mt-8 p-5 bg-amber-500/5 border-l-2 border-amber-400/30 rounded-r-lg"><p className="text-amber-400/50 text-xs font-black">DECLARATION</p><p className="text-amber-100/80 italic mt-1">{c.declaration}</p></div>
        <div className="flex justify-between mt-10 text-xs font-black tracking-widest"><Link href="/armory" className="text-amber-400">→ ARMORY</Link>{nextId && <Link href={`/chronicles/${nextId}`} className="text-amber-400">NEXT →</Link>}</div>
      </div>
    </main>
  )
}
