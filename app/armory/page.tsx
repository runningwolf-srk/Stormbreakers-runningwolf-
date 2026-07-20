// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function ArmoryPage() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-5xl font-black">ARMORY</h1>
      <p className="text-zinc-400 mt-2">16 Relics • 16 Weapons • One King — Running Wolf Universe</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {CANON.map((r:any)=>(
          <Link key={r.slug} href={`/chronicles/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 h-full hover:border-amber-500/30 transition group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black" style={{background: r.color+'15', border:`1px solid ${r.color}30`, color:r.color}}>{r.symbol}</div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">{r.relicLabel}</p>
              </div>
              <h3 className="font-black mt-3">{r.title}</h3>
              <p className="text-[11px] uppercase mt-1" style={{color:r.color}}>{r.scriptureRef}</p>
              <p className="text-zinc-500 text-[11px] mt-1 italic">"{r.scriptureText}"</p>
              <p className="text-zinc-300 text-xs mt-3 italic">"{r.purpose}"</p>
              <p className="text-zinc-600 text-[10px] mt-3 uppercase">{r.weapon} • {r.sound}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
