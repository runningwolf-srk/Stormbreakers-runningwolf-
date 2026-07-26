import { ALL_RELICS, TOTAL, BRAND } from "@/data/armory"
import { notFound } from "next/navigation"

export default function RelicPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic){
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-black">UNREVEALED RELIC</h1>
        <p className="mt-4 text-white/40 font-mono text-xs">{BRAND}</p>
        <p className="mt-6 text-white/30">This relic has not yet been forged. Canon is {TOTAL} relics.</p>
        <a href="/armory" className="inline-block mt-8 border border-white/20 px-6 py-3 rounded-full text-xs">← ARMORY</a>
      </div>
    )
  }
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <img src={relic.image} alt={relic.title} className="w-full aspect-square object-cover rounded-3xl border border-white/10" />
      <div>
        <div className="text-[10px] font-mono text-white/40">{relic.num} / {TOTAL} • {relic.verse}</div>
        <h1 className="text-5xl font-black mt-2">{relic.title}</h1>
        <p className="mt-4 text-white/60">{relic.short}</p>
      </div>
    </div>
  )
}
