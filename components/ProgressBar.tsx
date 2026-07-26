import { ALL_RELICS, TOTAL } from "@/data/armory"
export default function ProgressBar(){
  const forged = ALL_RELICS.filter(r=>r.status==="FORGED").length
  const progress = ALL_RELICS.filter(r=>r.status==="IN PROGRESS").length
  const awaiting = TOTAL - forged - progress
  return (
    <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/50">
      <div className="flex gap-6 text-[11px] font-mono">
        <span>⚔️ {forged} / {TOTAL} FORGED</span>
        <span>🔥 {progress} / {TOTAL} IN PROGRESS</span>
        <span className="text-white/40">🔒 {awaiting} / {TOTAL} AWAITING THE FORGE</span>
      </div>
      <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden flex">
        <div className="bg-white h-full" style={{width:`${forged/TOTAL*100}%`}} />
        <div className="bg-orange-500 h-full" style={{width:`${progress/TOTAL*100}%`}} />
      </div>
    </div>
  )
}
