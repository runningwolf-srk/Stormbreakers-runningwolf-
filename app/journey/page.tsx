// @ts-nocheck
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function JournalPage() {
  const items = CANON || []
  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold">Journal</h1>
      <div className="space-y-4 mt-8">
        {items.map((r: any) => (
          <Link key={r.id || r.slug} href={`/journal/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <p className="text-amber-400 text-xs uppercase">{r.relicLabel || r.theme} • Act {r.act || 1}</p>
              <h2 className="text-xl font-bold">{r.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
