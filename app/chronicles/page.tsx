// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function Page() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-black">CHRONICLES</h1>
      <p className="text-zinc-400">16 SONGS • 16 BATTLES • ONE TESTIMONY • ONE KING</p>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {CANON.map((r:any)=>(
          <Link key={r.slug} href={`/chronicles/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/30">
              <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.title} • {r.scriptureRef}</p>
              <p className="text-white mt-2 font-medium italic">"{r.hook}"</p>
              <p className="text-zinc-500 text-xs mt-2">{r.testimonyMoment}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
