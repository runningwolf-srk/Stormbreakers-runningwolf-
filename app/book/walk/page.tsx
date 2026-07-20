// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function WalkIndex() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-black">BOOK 3: THE WALK</h1>
      <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">
        Live • 16 Days • Truth • Reflection • Prayer • Action
      </p>
      <p className="text-zinc-600 text-xs mt-2">
        Purpose: Application. What do I do now? Breath before breakthrough.
      </p>

      <div className="mt-10 space-y-3">
        {CANON.map((r:any)=>(
          <Link key={r.slug} href={`/book/walk/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between hover:border-amber-500/30">
              <div>
                <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>
                  Day {r.id} — {r.title} • {r.scriptureRef}
                </p>
                <p className="text-sm text-zinc-300 mt-1 font-medium">Truth: {r.purpose}</p>
                <p className="text-xs text-zinc-500 mt-1">"{r.hook}"</p>
              </div>
              <p className="text-xs text-zinc-600 self-center">Walk →</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
