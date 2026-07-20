// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function BookChroniclesIndex() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto"><h1 className="text-5xl font-black">BOOK 1: CHRONICLES</h1><p className="text-zinc-500 text-sm mt-2">Novel reading mode — 16 chapters — read beginning to end</p><div className="mt-8 space-y-3">{CANON.map((r:any)=><Link key={r.slug} href={`/book/chronicles/${r.slug}`}><div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between hover:border-white/20"><div><p className="text-xs uppercase" style={{color:r.color}}>Chapter {r.id} • {r.title}</p><p className="text-sm text-zinc-400">"{r.hook}"</p></div><p className="text-xs text-zinc-600">Read →</p></div></Link>)}</div></main>
  )
}
