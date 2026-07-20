// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function ChroniclesIndex() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">CHRONICLES</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">Read the Story • 16 Chapters • Like a Novel</p>
      <p className="text-zinc-600 text-xs mt-1">Purpose: Follow testimony from silence to legacy. Read beginning to end.</p>

      {[1,2,3,4].map(act=>{
        const acts = {1:{name:'AWAKENING', desc:'The encounter. God in the storm.'},2:{name:'TRANSFORMATION', desc:'Rebuilding identity.'},3:{name:'WARFARE', desc:'Walking in authority.'},4:{name:'CALLING', desc:'Carrying Kingdom forward.'}}
        return (
          <div key={act} className="mt-12">
            <h2 className="font-black text-sm uppercase tracking-[0.3em] text-zinc-400">ACT {act} — {acts[act].name}</h2>
            <p className="text-xs text-zinc-600 mt-1">{acts[act].desc}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {CANON.filter((r:any)=>r.act===act).map((r:any)=>(
                <Link key={r.slug} href={`/chronicles/${r.slug}`}>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/30 h-full">
                    <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.symbol} • {r.title} • {r.scriptureRef}</p>
                    <p className="text-white mt-2 font-medium">"{r.hook}"</p>
                    <p className="text-zinc-500 text-xs mt-2 italic">"{r.testimonyMoment}"</p>
                    <p className="text-zinc-600 text-xs mt-3">{r.cinematicScene}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </main>
  )
}
