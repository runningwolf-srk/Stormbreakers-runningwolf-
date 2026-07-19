// @ts-nocheck
import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/RelicIcon'

export default function ChroniclePage({ params }: { params: { slug: string } }) {
  const r: any = CANON.find((x: any) => x.slug === params.slug || x.id?.toString() === params.slug)
  if (!r) return <main className="p-12 text-center">Not found</main>

  return (
    <main className="px-4 py-12">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <div className="w-20 h-20 mx-auto">
          <RelicIcon symbol={r.symbol || r.slug} />
        </div>
        <p className="text-amber-400 tracking-widest uppercase text-sm">
          {(r as any).relicLabel || r.theme} • Act {(r as any).act || 1}
        </p>
        <h1 className="text-4xl font-bold">{r.title}</h1>
        <p className="text-zinc-300">{r.description}</p>
      </div>
    </main>
  )
}
