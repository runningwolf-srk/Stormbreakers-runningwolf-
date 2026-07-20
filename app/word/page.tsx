// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function WordIndex() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">THE WORD</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">Root • Scripture is Authority • Testimony Points to Christ</p>
      <p className="text-zinc-600 text-xs mt-1">Purpose: Bible foundation. Brief quotes + commentary + link to full licensed text. ESV/NIV compliant.</p>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {CANON.map((r:any)=>(
          <Link key={r.slug} href={`/word/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/30">
              <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.title} • {r.scriptureRef}</p>
              <p className="text-sm text-zinc-300 mt-2 italic">"{r.scriptureText}"</p>
              <p className="text-xs text-zinc-500 mt-3">{r.purpose}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
