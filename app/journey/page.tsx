// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function JourneyPage() {
  const acts = [
    { num: 1, name: 'AWAKENING — The encounter', color: '#38BDF8' },
    { num: 2, name: 'TRANSFORMATION — Rebuilding identity', color: '#10B981' },
    { num: 3, name: 'WARFARE — Walking in authority', color: '#EF4444' },
    { num: 4, name: 'CALLING — Carrying Kingdom', color: '#F59E0B' },
  ]
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-black">THE JOURNEY</h1>
      <p className="text-zinc-400 mt-2">Storm → Awakening → Fire → Healing → Identity → Warfare → Calling → Legacy</p>
      <p className="text-zinc-500 mt-1 text-sm">Hear → Understand → Root</p>
      {acts.map(a => (
        <div key={a.num} className="mt-12">
          <h2 className="text-2xl font-bold flex items-center gap-3"><span className="w-2 h-8 rounded" style={{background: a.color}}></span>ACT {a.num} — {a.name}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {(CANON || []).filter((r: any) => r.act === a.num).map((r: any) => (
              <Link key={r.slug} href={`/chronicles/${r.slug}`}><div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-white/20"><span className="text-lg">{r.symbol}</span><span className="ml-2 font-bold">{r.title}</span><p className="text-xs text-zinc-500 mt-1 line-clamp-2">{r.testimonyMoment}</p></div></Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
