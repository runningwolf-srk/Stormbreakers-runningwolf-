// @ts-nocheck
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function JournalPage() {
  const items = CANON || []

  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold">Journal</h1>
      <p className="text-zinc-400 mt-2">The chronicles of Running Wolf</p>
      
      <div className="space-y-4 mt-8">
        {items.map((r: any) => (
          <Link key={r.slug || r.id} href={`/chronicles/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-amber-500/50 transition">
              <p className="text-amber-400 text-xs uppercase tracking-widest">
                {r.relicLabel || r.theme || 'Chronicle'} • Act {r.act || 1}
              </p>
              <h2 className="text-xl font-bold mt-1">{r.title || r.slug}</h2>
              <p className="text-zinc-500 text-sm mt-1">{r.scriptureRef || ''}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
