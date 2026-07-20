// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function Armory() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-6xl font-black">ARMORY</h1><p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Hear the Story • 16 Relics</p>
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {CANON.map((r:any)=>(
          <div key={r.slug} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.symbol} — {r.title} • {r.weapon} • {r.sound}</p>
            <p className="text-sm italic text-zinc-400 mt-1">"{r.hook}"</p>
            <div className="flex gap-2 mt-4">
              <Link href={`/chronicles/${r.slug}`} className="text-xs px-3 py-2 bg-black border border-zinc-800 rounded-full">Read Story →</Link>
              <Link href={`/word/${r.slug}`} className="text-xs px-3 py-2 bg-black border border-zinc-800 rounded-full">Study Word →</Link>
              <Link href={`/book/walk/${r.slug}`} className="text-xs px-3 py-2 bg-white text-black rounded-full font-bold">Live →</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
