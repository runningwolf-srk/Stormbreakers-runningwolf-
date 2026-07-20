// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function BooksPage() {
  return (
    <main className="px-4 py-16 max-w-6xl mx-auto">
      <h1 className="text-6xl font-black">BOOKS</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">Live the Transformation</p>
      <p className="text-zinc-700 text-xs mt-1">Hear → Understand → Root → Live</p>
      <div className="mt-12 grid gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">BOOK I</p>
          <h2 className="text-3xl font-black">THE CHRONICLES</h2>
          <p className="text-sm text-zinc-400">The Story — 16 Chapters — Understand</p>
          <div className="flex flex-wrap gap-2 mt-5">{CANON.map((r:any)=><Link key={r.slug} href={`/chronicles/${r.slug}`} className="text-xs px-3 py-2 bg-black border border-zinc-800 rounded-full">{r.id}. {r.title}</Link>)}</div>
        </div>
        <div className="bg-amber-950/10 border border-amber-900/20 rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500">BOOK II</p>
          <h2 className="text-3xl font-black">THE WORD</h2>
          <p className="text-sm text-zinc-400">The Foundation — 16 Studies — Root</p>
          <div className="flex flex-wrap gap-2 mt-5">{CANON.map((r:any)=><Link key={r.slug} href={`/word/${r.slug}`} className="text-xs px-3 py-2 bg-black border border-amber-900/20 rounded-full">{r.scriptureRef}</Link>)}</div>
        </div>
        <div className="bg-white text-black rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] opacity-60">BOOK III — FINAL LAYER</p>
          <h2 className="text-3xl font-black">THE WALK</h2>
          <p className="text-sm opacity-70">The Application — 16 Practices — Live</p>
          <p className="text-xs mt-3 opacity-60">Wolf Blade Example: Learn to fight with truth instead of fear.</p>
          <Link href="/book/walk" className="inline-block mt-6 px-5 py-3 bg-black text-white rounded-full font-bold text-sm">Live The Walk →</Link>
        </div>
      </div>
    </main>
  )
}
