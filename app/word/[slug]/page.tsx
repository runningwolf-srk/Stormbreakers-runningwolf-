// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function WordDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  
  if(!r) {
    return (
      <main className="px-4 py-24 max-w-2xl mx-auto text-center">
        <p className="text-6xl">⚔️</p>
        <h1 className="text-4xl font-black mt-6">THE RELIC HAS NOT BEEN REVEALED</h1>
        <p className="text-zinc-400 mt-4">This path is still being forged.</p>
        <Link href="/word" className="inline-block mt-8 px-5 py-3 bg-white text-black rounded-full font-bold text-sm">← Back to Word</Link>
      </main>
    )
  }

  return (
    <main className="px-4 py-12 max-w-3xl mx-auto">
      <Link href="/word" className="text-xs uppercase tracking-widest text-zinc-500">← Back to Word</Link>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">BOOK II — THE WORD</p>
      <h1 className="text-5xl font-black mt-2">{r.scriptureRef}</h1>
      <p className="mt-1 text-xl font-bold" style={{color:r.color}}>{r.title}</p>
      <p className="mt-4 italic text-zinc-300">"{r.scriptureText}"</p>
      <div className="mt-8 bg-amber-950/10 border border-amber-900/20 rounded-2xl p-6">
        <p className="text-xs uppercase tracking-widest text-amber-500">Foundation — What it meant then / What it reveals about God / How it points to Christ</p>
        <p className="mt-3 text-sm text-zinc-300">Write 400w study here for {r.title}...</p>
      </div>
      <div className="mt-6 flex gap-2">
        <Link href={`/chronicles/${r.slug}`} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">📖 Understand</Link>
        <Link href={`/book/walk/${r.slug}`} className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">📚 Live</Link>
      </div>
    </main>
  )
}
