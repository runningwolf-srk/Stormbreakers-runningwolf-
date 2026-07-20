// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function ChroniclesIndex() {
  const acts = [1,2,3,4]
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">CHRONICLES</h1><p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Understand • 16 Chapters • Testimony</p>
      {acts.map(act=>(
        <div key={act} className="mt-10">
          <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-600">ACT {act} — {act===1?'AWAKENING':act===2?'TRANSFORMATION':act===3?'WARFARE':'CALLING'}</h2>
          <div className="mt-4 space-y-3">
            {CANON.filter((r:any)=>r.act===act).map((r:any)=>(
              <Link key={r.slug} href={`/chronicles/${r.slug}`}><div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between"><div><p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.symbol} {r.title} • {r.scriptureRef}</p><p className="text-sm italic text-zinc-400">"{r.hook}"</p><p className="text-xs text-zinc-500 mt-1">"{r.testimonyMoment}"</p></div><span className="text-xs text-zinc-600">→</span></div></Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
