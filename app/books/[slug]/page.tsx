import { ALL_RELICS } from "@/data/armory"
import { notFound } from "next/navigation"

export default function BookPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic) return notFound()
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="text-[10px] font-mono text-white/30 tracking-widest">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
      <h1 className="text-4xl font-black mt-3 tracking-tighter">{relic.title} — BOOK</h1>
      <p className="mt-2 text-white/40 font-mono text-[11px]">{relic.verse}</p>
      <p className="mt-4 text-white/60 text-sm">Every relic expands into devotional, reflection, and application.</p>
      <div className="mt-6 grid gap-4">
        <div className="border border-white/10 rounded-xl p-5 bg-zinc-900/30"><div className="text-xs font-bold">DEVOTIONAL</div><div className="text-sm text-white/60 mt-2">{relic.short}</div></div>
        <div className="border border-white/10 rounded-xl p-5 bg-zinc-900/30"><div className="text-xs font-bold">REFLECTION</div><div className="text-sm text-white/60 mt-2">What does {relic.title} mean for you today?</div></div>
        <div className="border border-white/10 rounded-xl p-5 bg-zinc-900/30"><div className="text-xs font-bold">DECLARATION</div><div className="text-sm text-white/60 mt-2">I am FORGED.</div></div>
      </div>
    </div>
  )
}
