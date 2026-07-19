import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/RelicIcon'
export default function RelicPage({ params }: { params: { id: string } }) {
  const r: any = CANON.find((x: any) => x.slug === params.id || x.id?.toString() === params.id)
  if (!r) return <main className="p-12">Not found: {params.id}</main>
  return (
    <main className="px-4 py-12 text-center">
      <div className="w-20 h-20 mx-auto mb-4"><RelicIcon symbol={r.symbol} /></div>
      <p className="text-amber-400 text-sm tracking-widest">{r.theme}</p>
      <h1 className="text-4xl font-bold mt-2">{r.title}</h1>
      <p className="text-zinc-400 mt-2">{r.scriptureRef}</p>
    </main>
  )
}
