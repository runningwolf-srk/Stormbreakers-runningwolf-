// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function WordPage() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">THE WORD</h1>
      <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">Root • Scripture is Authority</p>
      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {CANON.map((r:any)=>(
          <Link key={r.slug} href={`/word/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <p className="text-xs uppercase" style={{color:r.color}}>{r.scriptureRef} — {r.title}</p>
              <p className="mt-2 italic text-sm">"{r.scriptureText}"</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
