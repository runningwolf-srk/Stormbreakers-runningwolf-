import Link from 'next/link'
import { CANON, STYLE } from '@/lib/constants'
import { BibleFooter } from '@/components/BibleFooter'

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-3xl mx-auto"><div className="text-center mb-12"><h1 className="text-5xl font-black text-amber-100">THE CHRONICLES</h1><p className="text-amber-400/30 text-xs tracking-[0.3em] mt-3">{STYLE.FLOW}</p></div><div className="space-y-4">{CANON.map(c => (<Link key={c.id} href={`/chronicles/${c.id}`} className="block p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl hover:border-amber-400/30 transition"><p className="text-amber-400/50 text-xs font-black tracking-[0.25em]">{c.chapterCaps}</p><h3 className="text-amber-100 font-black text-lg mt-1">{c.title} — {c.ref} — {c.relicShort}</h3><p className="text-stone-300 text-sm italic mt-2">"{c.reflection}"</p></Link>))}</div><BibleFooter /></div>
    </main>
  )
}
