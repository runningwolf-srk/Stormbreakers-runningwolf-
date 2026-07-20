// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function ChroniclesPage() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">CHRONICLES</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">
        Understand • 16 Chapters • Cinematic Testimony
      </p>

      <div className="mt-12">
        <h2 className="font-black text-sm uppercase tracking-[0.3em] text-zinc-400">ACT 1 — AWAKENING</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {CANON.filter((r:any)=>r.act===1).map((r:any)=>(
            <Link key={r.slug} href={`/chronicles/${r.slug}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <p className="text-xs uppercase" style={{color:r.color}}>{r.title}</p>
                <p className="mt-2">"{r.hook}"</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-black text-sm uppercase tracking-[0.3em] text-zinc-400">ACT 2 — TRANSFORMATION</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {CANON.filter((r:any)=>r.act===2).map((r:any)=>(
            <Link key={r.slug} href={`/chronicles/${r.slug}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <p className="text-xs uppercase" style={{color:r.color}}>{r.title}</p>
                <p className="mt-2">"{r.hook}"</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-black text-sm uppercase tracking-[0.3em] text-zinc-400">ACT 3 — WARFARE</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {CANON.filter((r:any)=>r.act===3).map((r:any)=>(
            <Link key={r.slug} href={`/chronicles/${r.slug}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <p className="text-xs uppercase" style={{color:r.color}}>{r.title}</p>
                <p className="mt-2">"{r.hook}"</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-black text-sm uppercase tracking-[0.3em] text-zinc-400">ACT 4 — CALLING</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {CANON.filter((r:any)=>r.act===4).map((r:any)=>(
            <Link key={r.slug} href={`/chronicles/${r.slug}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <p className="text-xs uppercase" style={{color:r.color}}>{r.title}</p>
                <p className="mt-2">"{r.hook}"</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  )
}
