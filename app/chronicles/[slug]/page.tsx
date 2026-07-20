// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'

export function generateStaticParams() {
  return (CANON || []).map((r: any) => ({ slug: r.slug }))
}

export default function Page({ params }: any) {
  const r = (CANON || []).find((x: any) => x.slug === params.slug)
  if (!r) return <div className="p-12 text-white">Not found: {params.slug}</div>
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto text-center">
      <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-xl font-black mb-6" style={{background: r.color+'20', border: `2px solid ${r.color}`, color: r.color}}>{r.symbol}</div>
      <p className="uppercase tracking-[0.3em] text-xs" style={{color: r.color}}>{r.relicLabel} • ACT {r.act} • {r.weapon}</p>
      <h1 className="text-5xl font-black mt-3">{r.title}</h1>
      <p className="text-amber-400 mt-3 font-mono text-sm">{r.scriptureRef} — {r.sound}</p>
      <p className="text-zinc-300 mt-8 text-lg leading-relaxed">{r.description}</p>
      <div className="mt-10 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl text-left space-y-6">
        <div><p className="text-xs uppercase text-zinc-500 tracking-widest">Testimony Moment</p><p className="mt-2 text-zinc-200">{r.testimonyMoment}</p></div>
        <div><p className="text-xs uppercase text-zinc-500 tracking-widest">Cinematic Scene</p><p className="mt-2 text-zinc-400">{r.cinematicScene}</p></div>
        <div><p className="text-xs uppercase text-zinc-500 tracking-widest">Sound Identity</p><p className="mt-2 text-zinc-400">{r.sound}</p></div>
      </div>
    </main>
  )
}
