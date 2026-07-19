// app/journey/page.tsx
import Link from 'next/link'
import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/relics/RelicIcon'
const ACTS = [
  { act: "ACT I — THE AWAKENING", ids: [1,2,3,4] },
  { act: "ACT II — THE TRANSFORMATION", ids: [5,6,7,8] },
  { act: "ACT III — THE WARFARE", ids: [9,10,11,12] },
  { act: "ACT IV — THE CALLING", ids: [13,14,15,16] },
]
export default function JourneyPage() {
  return (
    <main className="px-4 py-16"><div className="max-w-3xl mx-auto">
      <div className="text-center mb-16"><h1 className="text-5xl font-black text-amber-100">THE JOURNEY</h1><p className="text-amber-400/60 text-xs font-black mt-3 tracking-[0.4em]">16 CHAPTERS • 4 ACTS</p></div>
      <div className="relative"><div className="absolute left-6 top-0 bottom-0 w-px bg-amber-400/10"></div>
        {ACTS.map(a => (<div key={a.act} className="mb-12"><p className="ml-16 text-amber-400 font-black text-sm tracking-widest">{a.act}</p><div className="space-y-4 mt-4">{a.ids.map(id => { const r = CANON.find(x => x.id === id)!; return (<Link key={id} href={`/armory/${id}`} className="ml-16 block"><div className="p-5 bg-stone-900/40 border border-amber-400/10 rounded-xl flex gap-3 items-center"><div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/10 flex items-center justify-center text-amber-400"><RelicIcon symbol={r.symbol} className="w-5 h-5" /></div><div><p className="text-amber-400/50 text-xs font-black">{r.relicLabel}</p><p className="text-amber-100 font-black">{r.chapterLabel}</p><p className="text-stone-400 text-xs italic">"{r.reflection}"</p></div></div></Link>)})}</div></div>))}
      </div>
    </div></main>
  )
}
