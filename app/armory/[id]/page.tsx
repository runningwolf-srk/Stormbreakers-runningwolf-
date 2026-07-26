import { ALL_RELICS, TOTAL } from "@/data/armory"
export default function RelicPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic){
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-mono tracking-widest text-white/30">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mt-6">RELIC NOT YET REVEALED</h1>
        <p className="mt-4 text-white/40 text-sm">This relic awaits the forge.</p>
        <p className="mt-2 text-white/20 font-mono text-[11px]">16 RELICS AWAITING THE FORGE • 19 RELICS IN THE CANON</p>
        <a href="/armory" className="inline-block mt-8 border border-white/20 px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black transition">← RETURN TO ARMORY</a>
      </div>
    )
  }
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <img src={relic.image} alt={relic.title} className="w-full aspect-square object-cover rounded-3xl border border-white/10 bg-zinc-900" />
      <div>
        <div className="text-[10px] font-mono text-white/30 tracking-widest">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
        <div className="text-[10px] font-mono text-white/40 mt-2">{relic.num} / {TOTAL} • {relic.verse}</div>
        <h1 className="text-5xl font-black mt-3 tracking-tighter">{relic.title}</h1>
        <p className="mt-4 text-white/60">{relic.short}</p>
      </div>
    </div>
  )
}
