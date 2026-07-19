// @ts-nocheck
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold">Chronicles</h1>
      <div className="space-y-4 mt-8">
        {CANON.map((r: any) => (
          <Link key={r.id} href={`/chronicles/${r.slug}`}>
            <div className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <span className="text-amber-400 text-xs">{r.symbol?.slice(0,2)}</span>
              </div>
              <div>
                <p className="text-amber-400 text-xs uppercase">{r.relicLabel || r.theme}</p>
                <h2 className="text-xl font-bold">{r.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
