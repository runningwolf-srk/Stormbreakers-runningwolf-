import { ALL_RELICS } from "@/data/armory"
import { notFound } from "next/navigation"

export default function ChroniclePage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic) return notFound()
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="text-[10px] font-mono text-white/30 tracking-widest">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
      <div className="text-[10px] font-mono text-white/40 mt-2">{relic.num} / 19 • {relic.verse}</div>
      <h1 className="text-4xl font-black mt-3 tracking-tighter">{relic.title} — CHRONICLE</h1>
      <p className="mt-4 text-white/60 text-sm">{relic.short}</p>
      <div className="mt-8 border border-white/10 rounded-2xl p-6 bg-zinc-900/30">
        <p className="text-white/30 text-xs font-mono">THE WOUND → THE BATTLE → THE ENCOUNTER → THE TRANSFORMATION — Full testimony unlocking soon.</p>
      </div>
      <a href="/armory" className="inline-block mt-8 text-xs text-white/40 hover:text-white">← ARMORY</a>
    </div>
  )
}
