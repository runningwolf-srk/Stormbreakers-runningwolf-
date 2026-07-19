import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/RelicIcon'

export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = CANON.find((x) => x.slug === params.id || x.id.toString() === params.id)

  if (!relic) {
    return <main className="px-4 py-12 text-center">Relic not found: {params.id}</main>
  }

  return (
    <main className="px-4 py-12">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4">
          <RelicIcon symbol={relic.symbol} />
        </div>
        <p className="text-amber-400 text-sm tracking-widest">{relic.theme}</p>
        <h1 className="text-4xl font-bold mt-2">{relic.title}</h1>
        <p className="text-zinc-400 mt-2">{relic.scriptureRef}</p>
        <p className="mt-6 max-w-xl mx-auto">{relic.description}</p>
      </div>
    </main>
  )
}
