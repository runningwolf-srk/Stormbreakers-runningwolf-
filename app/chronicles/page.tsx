// @ts-nocheck
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function ChroniclesPage() {
  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold">Chronicles</h1>
      <div className="space-y-4 mt-8">
        {CANON.map((r: any) => (
          <Link key={r.id} href={`/chronicles/${r.slug}`}>
            <div className="flex gap-4 bg-zinc-900 border p-4 rounded-xl">
              <div>{r.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
