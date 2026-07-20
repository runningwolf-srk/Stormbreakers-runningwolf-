// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function BookWordIndex() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto"><h1 className="text-5xl font-black">BOOK 2: THE WORD</h1><p className="text-zinc-500 text-sm mt-2">Bible study mode — 16 studies — points to Jesus</p><div className="mt-8 space-y-3">{CANON.map((r:any)=><Link key={r.slug} href={`/book/word/${r.slug}`}><div className="bg-amber-950/10 border border-amber-900/20 rounded-xl p-4 flex justify-between"><div><p className="text-xs uppercase" style={{color:r.color}}>{r.title} • {r.scriptureRef}</p><p className="text-sm italic text-zinc-400">"{r.scriptureText}"</p></div><p className="text-xs text-zinc-600">Study →</p></div></Link>)}</div></main>
  )
}
