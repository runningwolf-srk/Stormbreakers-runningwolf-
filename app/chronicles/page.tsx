// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function ChroniclesPage() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-black tracking-tight">CHRONICLES</h1>
      <p className="text-zinc-400 mt-2">Not just theme — moment. 16 SONGS • 16 BATTLES • ONE TESTIMONY • ONE KING</p>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {(CANON || []).map((r: any) => (
          <Link key={r.slug} href={`/chronicles/${r.slug}`}>
            <div className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/50 transition">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0" style={{background: r.color+'20', border: `1px solid ${r.color}40`}}>{r.symbol}</div>
              <div><p className="text-xs uppercase tracking-widest" style={{color: r.color}}>{r.relicLabel} • Act {r.act}</p><h2 className="text-xl font-bold">{r.title}</h2><p className="text-zinc-500 text-xs mt-1">{r.scriptureRef} • {r.weapon}</p></div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
