import { ALL_RELICS } from "@/data/armory"
export default function ForgeProgress(){
  const forged = ALL_RELICS.filter(r=>r.status==="FORGED").length
  const burning = ALL_RELICS.filter(r=>r.status==="CURRENTLY BEING FORGED").length
  const awaiting = 19 - forged - burning
  return (
    <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/50">
      <div className="flex justify-between text-[10px] font-mono"><span>FORGED {forged}/19</span><span>{Math.round(forged/19*100)}%</span></div>
      <div className="mt-2 h-2 bg-white/10 rounded-full flex overflow-hidden">
        <div className="bg-white h-full" style={{width: `${forged/19*100}%`}} />
        <div className="bg-orange-500 h-full" style={{width: `${burning/19*100}%`}} />
      </div>
      <div className="mt-2 text-[10px] font-mono text-white/40">⚔️ {forged} FORGED • 🔥 {burning} BEING FORGED • 🔒 {awaiting} AWAITING</div>
    </div>
  )
}
