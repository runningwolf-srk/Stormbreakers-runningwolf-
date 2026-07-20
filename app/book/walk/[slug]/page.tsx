// app/book/walk/[slug]/page.tsx
// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function WalkDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return (<main className="px-4 py-24 text-center"><p className="text-6xl">⚔️</p><h1 className="text-4xl font-black mt-6">THE PATH IS STILL BEING FORGED</h1><Link href="/book/walk" className="inline-block mt-8 px-5 py-3 bg-white text-black rounded-full font-bold text-sm">← Return to The Walk</Link></main>)
  return (<main className="px-4 py-12 max-w-2xl mx-auto"><Link href="/book/walk" className="text-xs uppercase tracking-widest text-zinc-500">← Book III: The Walk</Link><p className="mt-8 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>Day {r.id} — {r.title} — {r.scriptureRef}</p><h1 className="text-4xl font-black mt-2">{r.title}</h1><div className="mt-8 space-y-6"><div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"><p className="text-xs uppercase tracking-widest text-zinc-500">Truth</p><p className="text-lg mt-2">{r.purpose}</p><p className="text-sm italic text-zinc-400 mt-2">"{r.scriptureText}"</p></div><div className="bg-white text-black rounded-2xl p-6"><p className="text-xs uppercase tracking-widest">Action — Today</p><p className="text-sm font-bold mt-3">{r.action}</p></div></div></main>)
}
