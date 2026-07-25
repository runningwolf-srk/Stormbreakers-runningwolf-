import { ALL_RELICS } from "@/data/armory"
export default function Progress(){
  const forged = 2
  const progress = 1
  const unrevealed = ALL_RELICS.length - forged - progress
  return (
    <div className="max-w-7xl mx-auto px-6 py-4 flex gap-6 text-[11px] font-mono">
      <span>⚔️ FORGED: {forged}</span>
      <span>🔥 IN PROGRESS: {progress}</span>
      <span className="text-white/40">🔒 UNREVEALED: {unrevealed}</span>
      <span className="ml-auto text-white/30">NINETEEN RELICS TOTAL</span>
    </div>
  )
}
