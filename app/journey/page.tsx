// @ts-nocheck
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function JourneyPage() {
  const items = CANON || []

  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold">The Journey</h1>
      <div className="mt-8 space-y-6">
        {items.map((r: any) => (
          <div key={r.slug || r.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p className="text-amber-400 text-xs uppercase tracking-widest">
              {r.relicLabel || r.theme || 'Chronicle'} • Act {r.act || 1}
            </p>
            <h2 className="text-2xl font-bold mt-1">{r.title}</h2>
            <p className="text-zinc-400 mt-2">{r.description || ''}</p>
            
            {/* THIS IS THE FIX - the second .map that was crashing */}
            <div className="mt-4 flex flex-wrap gap-2">
              {(r.verses || r.scriptures || []).map((v: any, i: number) => (
                <span key={i} className="text-xs bg-zinc-800 px-2 py-1 rounded">
                  {typeof v === 'string' ? v : v?.ref || ''}
                </span>
              ))}
            </div>

            <Link href={`/chronicles/${r.slug}`} className="inline-block mt-4 text-amber-400 text-sm">
              Read Chronicle →
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
