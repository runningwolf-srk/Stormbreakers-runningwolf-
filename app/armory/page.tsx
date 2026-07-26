import { ALL_RELICS } from "@/data/armory"
import { CANON } from "@/data/constants"
export default function Armory(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-black">⚔️ ARMORY — Hear the Relics</h1>
      <p className="text-[11px] font-mono text-white/30 mt-2">{CANON.TAGLINE}</p>
      <p className="text-[11px] font-mono text-white/30">{CANON.STATUS_LINE}</p>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {ALL_RELICS.map(r=>(
          <a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30 hover:border-[#D4AF37]/30">
            <div className="flex justify-between"><span className="text-2xl">{r.symbol}</span><span className="text-[8px] font-mono px-2 py-1 rounded-full bg-white/5">{r.status}</span></div>
            <div className="text-[10px] font-mono text-white/30 mt-4">RELIC {r.num} • {r.verse}</div>
            <div className="font-black text-[13px] mt-1">{r.title}</div>
            <div className="text-[11px] text-white/50 mt-2">{r.purpose}</div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[9px] font-mono text-white/25 space-y-1"><div>◈ Symbol — The visual mark of this relic.</div><div>◈ Scripture — The passage that forged it.</div><div>◈ Song — Experience the relic through worship.</div></div>
          </a>
        ))}
      </div>
    </div>
  )
}
