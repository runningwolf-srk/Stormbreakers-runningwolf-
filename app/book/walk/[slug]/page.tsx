// app/book/walk/page.tsx
// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function WalkIndex() {
  return (<main className="px-4 py-12 max-w-5xl mx-auto"><h1 className="text-5xl font-black">BOOK III: THE WALK</h1><p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Live • Truth • Reflection • Prayer • Action</p><div className="mt-10 space-y-3">{CANON.map((r:any)=>(<Link key={r.slug} href={`/book/walk/${r.slug}`}><div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between"><div><p className="text-xs uppercase tracking-widest" style={{color:r.color}}>Day {r.id} — {r.title} • {r.scriptureRef}</p><p className="text-sm text-zinc-300 mt-1">Truth: {r.purpose}</p></div><span className="text-xs text-zinc-600">Walk →</span></div></Link>))}</div></main>)
}
