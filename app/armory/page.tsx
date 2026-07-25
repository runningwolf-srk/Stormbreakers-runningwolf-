import { ALL_RELICS } from "@/data/armory"

export default function ArmoryPage(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-black tracking-tighter">ARMORY</h1>
      <p className="text-white/40 font-mono text-xs mt-2 mb-8">NINETEEN RELICS • ASSET LIBRARY • public/relics/</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ALL_RELICS.map(r=>(
          <a key={r.slug} href={`/armory/${r.slug}`} className="group border border-white/10 rounded-2xl overflow-hidden bg-zinc-900 hover:border-white/30 transition">
            <div className="aspect-square bg-zinc-800"><img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></div>
            <div className="p-3">
              <div className="font-black text-[11px] truncate">{r.title}</div>
              <div className="text-[10px] font-mono text-yellow-400/80 truncate mt-1 bg-yellow-400/10 px-1.5 py-0.5 rounded">{r.num} • {r.filename}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
