import { ALL_RELICS, BRAND, TOTAL } from "@/data/armory"
import { notFound } from "next/navigation"

export default function RelicPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)

  if(!relic){
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-mono tracking-widest text-white/30">
          {BRAND}
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mt-6">RELIC NOT YET REVEALED</h1>
        <p className="mt-4 text-white/40 text-sm">This relic has not yet been forged. Return to the Armory to see the canon.</p>
        <p className="mt-2 text-white/20 font-mono text-[11px]">Awaiting the forge • {TOTAL} in the canon</p>
        <a href="/armory" className="inline-block mt-8 border border-white/20 px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black transition">
          ← RETURN TO ARMORY
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <img src={relic.image} alt={relic.title} className="w-full aspect-square object-cover rounded-3xl border border-white/10" />
      <div>
        <div className="text-[10px] font-mono text-white/30 tracking-widest">{BRAND}</div>
        <div className="text-[10px] font-mono text-white/40 mt-2">{relic.num} / {TOTAL} • {relic.verse}</div>
        <h1 className="text-5xl font-black mt-3 tracking-tighter">{relic.title}</h1>
        <p className="mt-4 text-white/60">{relic.short}</p>
        <div className={`inline-block mt-4 text-[9px] font-mono px-3 py-1 rounded-full ${relic.status==="FORGED"?"bg-white text-black":relic.status==="IN PROGRESS"?"bg-orange-500/20 text-orange-300":"bg-white/10 text-white/40"}`}>{relic.status}</div>
      </div>
    </div>
  )
}
