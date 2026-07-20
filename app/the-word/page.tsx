// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function WordIndex() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">THE WORD</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">Root • Scripture is Authority • Testimony Points to Christ</p>

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {CANON.map((r:any)=>(
          <Link key={r.slug} href={`/the-word/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/30">
              <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.scriptureRef} • {r.title}</p>
              <p className="mt-2 text-sm italic text-zinc-300">"{r.scriptureText}"</p>
              <p className="mt-2 text-xs text-zinc-500">{r.purpose}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
