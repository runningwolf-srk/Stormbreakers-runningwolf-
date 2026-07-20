// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function BooksFinalLayer() {
  return (
    <main className="px-4 py-16 max-w-6xl mx-auto">
      <h1 className="text-6xl font-black">BOOKS</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">Live the Transformation — Reflection • Prayer • Application</p>

      <div className="mt-12 grid gap-6">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">BOOK I</p>
          <h2 className="text-3xl font-black mt-1">THE CHRONICLES</h2>
          <p className="text-zinc-400 text-sm mt-1">The Story — 16 chapters</p>
          <p className="text-xs text-zinc-600 mt-4 italic">"I had no song. I had a sigh." — walk through the valley before breakthrough.</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {CANON.map((r:any)=><Link key={r.slug} href={`/book/chronicles/${r.slug}`} className="text-xs px-3 py-2 bg-black border border-zinc-800 rounded-full">{r.id}. {r.title}</Link>)}
          </div>
          <Link href="/book/chronicles" className="inline-block mt-6 px-5 py-3 bg-white text-black rounded-full font-bold text-sm">Read Chronicles →</Link>
        </div>

        <div className="bg-amber-950/10 border border-amber-900/20 rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500/70">BOOK II</p>
          <h2 className="text-3xl font-black mt-1">THE WORD</h2>
          <p className="text-zinc-400 text-sm mt-1">The Foundation — 16 studies — Scripture above testimony</p>
          <p className="text-xs text-zinc-600 mt-4 italic">Genesis 1:2 — What does hovering mean? Why presence before command? How points to Christ?</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {CANON.map((r:any)=><Link key={r.slug} href={`/book/word/${r.slug}`} className="text-xs px-3 py-2 bg-black border border-amber-900/20 rounded-full">{r.scriptureRef}</Link>)}
          </div>
          <Link href="/book/word" className="inline-block mt-6 px-5 py-3 bg-amber-500 text-black rounded-full font-bold text-sm">Study Word →</Link>
        </div>

        <div className="bg-white text-black rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] opacity-60">BOOK III — FINAL LAYER</p>
          <h2 className="text-3xl font-black mt-1">THE WALK</h2>
          <p className="text-sm mt-1 opacity-70">The Application — 16 practices — What do I do now?</p>
          <div className="mt-5 grid md:grid-cols-2 gap-2 text-sm">
            <div>• Breath Before Breakthrough — 5 min silence</div>
            <div>• Storm Before Calling — Worship before victory</div>
            <div>• Identity Before Warfare — Live FROM sonship</div>
            <div>• Legacy Beyond Yourself — Scars become arrows</div>
          </div>
          <Link href="/book/walk" className="inline-block mt-6 px-5 py-3 bg-black text-white rounded-full font-bold text-sm">Live The Walk →</Link>
        </div>

      </div>

      <div className="mt-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-600">The songs are relics. The Chronicles are testimony. The Word is authority. The Books are transformation.</p>
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-800 mt-2">ONE CANON • FOUR EXPERIENCES • ONE KING</p>
      </div>
    </main>
  )
}
