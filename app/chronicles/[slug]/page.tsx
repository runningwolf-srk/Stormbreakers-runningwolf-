// @ts-nocheck
import { CANON } from '@/lib/constants'
export function generateStaticParams() { return (CANON || []).map((r: any) => ({ slug: r.slug })) }
export default function Page({ params }: { params: { slug: string } }) {
  const r: any = (CANON || []).find((x: any) => x.slug === params.slug)
  if (!r) return <div className="p-12">Not found</div>
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto text-center">
      <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl mb-6" style={{background: r.color+'20', border: `2px solid ${r.color}`}}>{r.symbol}</div>
      <p className="uppercase tracking-[0.3em] text-xs" style={{color: r.color}}>{r.relicLabel} • Act {r.act} • {r.weapon}</p>
      <h1 className="text-5xl font-black mt-3">{r.title}</h1>
      <p className="text-amber-400 mt-2 font-mono text-sm">{r.scriptureRef}</p>
      <p className="text-zinc-300 mt-8 text-lg leading-relaxed">{r.description}</p>
      <div className="mt-8 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl text-left">
        <p className="text-xs uppercase text-zinc-500 tracking-widest">Testimony Moment</p><p className="mt-2 text-zinc-200">{r.testimonyMoment}</p>
        <p className="text-xs uppercase text-zinc-500 tracking-widest mt-6">Cinematic Scene</p><p className="mt-2 text-zinc-400">{r.cinematicScene}</p>
        <p className="text-xs uppercase text-zinc-500 tracking-widest mt-6">Sound Identity</p><p className="mt-2 text-zinc-400">{r.sound}</p>
      </div>
      <p className="mt-12 text-zinc-500 text-sm">Hear → Understand → Root</p>
    </main>
  )
}
