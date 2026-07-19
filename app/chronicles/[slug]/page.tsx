// @ts-nocheck
import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/RelicIcon'

export function generateStaticParams() {
  return CANON.map((r: any) => ({ slug: r.slug }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const r: any = (CANON as any).find(
    (x: any) => x.slug === params.slug || x.id?.toString() === params.slug
  )

  if (!r) {
    return <div className="p-12 text-center">Not found: {params.slug}</div>
  }

  return (
    <main className="px-4 py-12 text-center">
      <div className="w-20 h-20 mx-auto">
        <RelicIcon symbol={r.symbol || r.slug} />
      </div>
      <p className="text-amber-400 mt-4 uppercase text-sm tracking-widest">
        {r.relicLabel || r.theme || 'Chronicle'} • Act {r.act || 1}
      </p>
      <h1 className="text-4xl font-bold mt-2">{r.title}</h1>
      <p className="text-zinc-400 mt-2">{r.scriptureRef}</p>
      <p className="text-zinc-300 mt-6 max-w-xl mx-auto">{r.description}</p>
      <p className="text-amber-500/60 mt-8 text-sm">{r.lyrics}</p>
    </main>
  )
}
