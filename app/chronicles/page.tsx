// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function ChroniclesPage() {
  const acts = [
    { id: 1, name: 'AWAKENING', desc: 'Encounter God in the storm.' },
    { id: 2, name: 'TRANSFORMATION', desc: 'Identity rebuilt.' },
    { id: 3, name: 'WARFARE', desc: 'Walking in authority.' },
    { id: 4, name: 'CALLING', desc: 'Carrying Kingdom forward.' }
  ]
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">CHRONICLES</h1>
      <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">Understand • 16 Chapters • Cinematic Testimony</p>
      {acts.map(act=>(
        <div key={act.id} className="mt-12">
          <h2 className="font-black text-sm tracking-[0.3em] text-zinc-400">ACT {act.id} — {act.name}</h2>
          <p className="text-xs text-zinc-600">{act.desc}</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {CANON.filter((r:any)=>r.act===act.id).map((r:any)=>(
              <Link key={r.slug} href={`/chronicles/${r.slug}`}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/30">
                  <p className="text-xs uppercase" style={{color:r.color}}>{r.symbol} {r.title} • {r.scriptureRef}</p>
                  <p className="mt-2">"{r.hook}"</p>
                  <p className="text-xs text-zinc-500 mt-2 italic">"{r.testimonyMoment}"</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
