import Link from 'next/link'
import { CANON, STYLE } from '@/lib/constants'

export default function WordPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12"><h1 className="text-5xl font-black text-amber-100">THE WORD</h1><p className="text-amber-400/60 text-xs tracking-[0.4em] font-black mt-3">THE FOUNDATION</p><p className="text-amber-400/30 text-xs tracking-[0.3em] mt-3">{STYLE.FLOW}</p><div className="max-w-2xl mx-auto mt-8 p-6 rounded-xl bg-stone-900/60 border border-amber-400/10"><p className="text-amber-100 text-sm">Every theme in Stormbreakers begins with Scripture. The songs and testimonies point back to God's Word, not replace it.</p></div></div>
        <div className="space-y-8">{CANON.map(w => (<div key={w.id} className="rounded-2xl bg-stone-900/40 border border-amber-400/10 overflow-hidden"><div className="p-6 bg-amber-500/[0.04] border-b border-amber-400/10"><p className="text-amber-400 text-xs font-black tracking-[0.3em]">{w.theme}</p><h3 className="text-2xl font-black text-amber-100 mt-1">{w.ref}</h3><div className="mt-5 p-5 bg-stone-950/60 border border-amber-400/20 rounded-xl"><p className="text-amber-100 text-lg italic">"{w.verse}"</p><p className="text-amber-400/60 text-xs font-black mt-3">— {w.ref}</p></div></div><div className="p-6"><p className="text-amber-400/40 text-xs font-black">TESTIMONY RESPONSE</p><p className="text-stone-300 text-sm italic mt-2">"{w.reflection}"</p><div className="flex gap-2 mt-4"><Link href={`/chronicles/${w.id}`} className="px-3 py-1 bg-stone-800 border border-amber-400/10 rounded-full text-xs text-amber-200/60">{w.chapterLabel}</Link><Link href={`/armory/${w.id}`} className="px-3 py-1 bg-amber-500/10 border border-amber-400/20 rounded-full text-xs text-amber-300">{w.relicLabel}</Link></div></div></div>))}</div>
      </div>
    </main>
  )
}
