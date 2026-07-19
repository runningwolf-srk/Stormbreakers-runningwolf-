// @ts-nocheck
import { CANON } from '@/lib/constants'

export default function JourneyPage() {
  const list = CANON || []
  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold">The Journey</h1>
      <div className="mt-8 space-y-4">
        {list.map((r: any) => (
          <div key={r.slug} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <p className="text-amber-400 text-xs uppercase">{r.relicLabel || r.theme}</p>
            <h2 className="text-xl font-bold">{r.title}</h2>
            <p className="text-zinc-400 text-sm">{r.description || ''}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
