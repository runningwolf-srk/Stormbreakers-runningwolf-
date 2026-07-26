import { ALL_RELICS } from "@/data/armory"
import { CANON } from "@/data/constants"

export default function ForgeProgress(){
  const forged = ALL_RELICS.filter(r=>r.status==="FORGED").length
  const burning = ALL_RELICS.filter(r=>r.status==="BURNING IN THE FORGE").length
  const awaiting = ALL_RELICS.filter(r=>r.status==="AWAITING REVELATION").length
  return (
    <div className="border border-white/10 rounded-[1.5rem] p-6 bg-[#0a0a0a]">
      <div className="flex justify-between items-center">
        <div className="font-black text-xs tracking-widest">THE FORGE STATUS</div>
        <div className="text-[10px] font-mono text-white/30">{forged}/19</div>
      </div>
      <div className="mt-4 h-2 w-full bg-white/10 rounded-full flex overflow-hidden">
        <div className="bg-white h-full" style={{width:`${forged/19*100}%`}} />
        <div className="bg-orange-500 h-full" style={{width:`${burning/19*100}%`}} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-[10px] font-mono">
        <div className="border border-white/10 rounded-xl p-3"><div className="text-white">⚔️ {forged} FORGED</div><div className="text-white/30 mt-1">Completed relics</div></div>
        <div className="border border-orange-500/20 bg-orange-500/5 rounded-xl p-3"><div className="text-orange-300">🔥 {burning} BURNING</div><div className="text-white/30 mt-1">In the fire</div></div>
        <div className="border border-white/5 rounded-xl p-3"><div className="text-white/40">🔒 {awaiting} AWAITING</div><div className="text-white/20 mt-1">Revelation</div></div>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-[9px] font-mono text-white/30">
        <div>✍️ Written: 3</div><div>🎙 Recorded: 2</div><div>🎨 Artwork: 3</div><div>📖 Devotional: 2</div>
      </div>
    </div>
  )
}
