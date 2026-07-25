import { ALL_RELICS } from "@/data/armory"
import { notFound } from "next/navigation"

const TOTAL = 19

export default function RelicPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic){
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-black">UNREVEALED RELIC</h1>
        <p className="mt-4 text-white/50 font-mono text-sm">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</p>
        <p className="mt-6 text-white/30">This relic has not yet been forged. The canon is {TOTAL} relics.</p>
        <a href="/armory" className="inline-block mt-8 border border-white/20 px-6 py-3 rounded-full text-xs">← RETURN TO ARMORY</a>
      </div>
    )
  }
  if(!relic) return notFound()
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <img src={relic.image} alt={relic.title} className="w-full aspect-square object-cover rounded-3xl border border-white/10" />
      <div>
        <div className="text-[10px] font-mono text-white/40">{relic.num} / {TOTAL} • {relic.verse}</div>
        <h1 className="text-5xl font-black mt-2">{relic.title}</h1>
        <p className="mt-4 text-white/60">{relic.chronicle}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-[11px] font-mono">
          <div className="bg-white/5 p-3 rounded-xl">⚔️ SONG: {relic.title}</div>
          <div className="bg-white/5 p-3 rounded-xl">📖 WORD: {relic.verse}</div>
          <div className="bg-white/5 p-3 rounded-xl">📜 CHRONICLE: {relic.num}</div>
          <div className="bg-white/5 p-3 rounded-xl">🔥 POWER: {relic.power}</div>
        </div>
      </div>
    </div>
  )
}
