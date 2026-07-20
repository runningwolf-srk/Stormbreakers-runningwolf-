// @ts-nocheck
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function Page() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-black">CHRONICLES</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {CANON.map((r: any) => (
          <Link key={r.slug} href={`/chronicles/${r.slug}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex gap-4">
              <div className="text-2xl">{r.symbol}</div>
              <div><p className="text-xs" style={{color: r.color}}>{r.relicLabel}</p><h2 className="font-bold">{r.title}</h2></div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
