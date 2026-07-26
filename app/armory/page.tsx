import { ALL_RELICS } from "@/data/armory"
import { CANON } from "@/data/constants"

export default function Armory(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-black tracking-tighter">⚔️ ARMORY — HEAR</h1>
      <p className="text-[#D4AF37]/60 font-mono text-[11px] mt-2 tracking-widest">{CANON.TAGLINE}</p>
      <p className="text-white/30 text-[11px] mt-1 font-mono">{CANON.STATUS_LINE}</p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ALL_RELICS.map(r=>(
          <a key={r.slug} href={`/armory/${r.slug}`} className="group border border-white/10 rounded-[1.5rem] p-6 bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#0a0a0a_100%)] hover:border-[#D4AF37]/30 transition-all">
            <div className="flex justify-between">
              <span className="text-2xl">{r.symbol}</span>
              <span className={`text-[8px] font-mono px-2.5 py-1 rounded-full ${r.status==="FORGED"?"bg-white text-black":r.status==="BURNING IN THE FORGE"?"bg-orange-500/20 text-orange-300 border border-orange-500/20":"bg-white/5 text-white/30"}`}>{r.status}</span>
            </div>
            <div className="text-[10px] font-mono text-white/30 mt-4 tracking-widest">RELIC {r.num} • {r.verse}</div>
            <div className="font-black text-[13px] mt-1 tracking-wide group-hover:text-[#D4AF37] transition-colors">{r.title}</div>
            <div className="text-[11px] text-white/50 mt-2 leading-snug">{r.purpose}</div>
            <div className="mt-4 flex gap-2 text-[9px] font-mono text-white/20"><span>◈ Symbol</span><span>◈ Scripture</span><span>◈ Song</span></div>
          </a>
        ))}
      </div>
    </div>
  )
}
