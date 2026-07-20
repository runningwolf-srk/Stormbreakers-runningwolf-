// @ts-nocheck
import { CANON } from '@/lib/constants'
export function generateStaticParams() { return CANON.map((r: any) => ({ slug: r.slug })) }
export default function Page({ params }: any) {
  const r = CANON.find((x: any) => x.slug === params.slug)
  if (!r) return <div className="p-12">Not found {params.slug}</div>
  return (
    <main className="p-8 max-w-2xl mx-auto text-center">
      <div className="text-5xl">{r.symbol}</div>
      <h1 className="text-4xl font-black mt-4">{r.title}</h1>
      <p className="mt-4 text-zinc-300">{r.description}</p>
      <p className="mt-4 text-amber-400 text-sm">{r.scriptureRef}</p>
      <p className="mt-6 text-zinc-400">{r.testimonyMoment}</p>
    </main>
  )
}
