// @ts-nocheck
import { CANON } from '@/lib/constants'
export default function Page() {
  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold">JOURNEY</h1>
      <div className="mt-6 space-y-2">
        {CANON.map((r: any) => <div key={r.slug} className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl">{r.symbol} {r.title}</div>)}
      </div>
    </main>
  )
}
