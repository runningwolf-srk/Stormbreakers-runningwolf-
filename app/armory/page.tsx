import { ALL_RELICS, BRAND } from "@/data/armory"
import ProgressBar from "@/components/ProgressBar"

export default function ArmoryPage(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-black tracking-tighter">ARMORY</h1>
      <p className="text-white/40 font-mono text-[11px] mt-2 tracking-widest">{BRAND}</p>
      <div className="mt-6"><ProgressBar /></div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ALL_RELICS.map(r=>(
          <a key={r.slug} href={`/armory/${r.slug}`} className="flex gap-4 border border-white/10 rounded-2xl p-4 bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/20 transition">
            <img src={r.image} alt={r.title} className="w-20 h-20 rounded-xl object-cover bg-zinc-800" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono bg-white/10 px-2 py-0.5 rounded-full">{r.num}</span>
                <span className={`text-[8px] font-mono px-2 py-0.5 rounded-full ${r.status==="FORGED"?"bg-white text-black":r.status==="IN PROGRESS"?"bg-orange-500/20 text-orange-300":"bg-white/10 text-white/40"}`}>{r.status}</span>
              </div>
              <div className="font-black text-xs mt-1.5 truncate">{r.title}</div>
              <div className="text-[11px] text-white/50 mt-1 line-clamp-2">{r.short}</div>
              <div className="text-[10px] text-white/25 font-mono mt-2">{r.verse}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
