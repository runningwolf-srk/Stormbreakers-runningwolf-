import { ALL_RELICS, TOTAL } from "@/data/armory"
import { CANON } from "@/data/constants"

export default function RelicPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic){
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-mono tracking-widest text-white/30">{CANON.TAGLINE}</div>
        <h1 className="text-5xl font-black mt-6 tracking-tighter">PATH AWAITS THE FORGE</h1>
        <p className="mt-4 text-white/40 text-sm">16 RELICS AWAITING THE FORGE • 19 RELICS IN THE CANON</p>
        <a href="/armory" className="inline-block mt-8 border border-white/20 px-8 py-3 rounded-full text-xs font-bold">← RETURN TO ARMORY</a>
      </div>
    )
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-[10px] font-mono text-white/30 tracking-widest">{CANON.TAGLINE}</div>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <img src={relic.image} alt={relic.title} className="w-full aspect-square object-cover rounded-[2rem] border border-white/10 bg-zinc-900" />
        <div>
          <div className="text-[10px] font-mono tracking-widest text-white/40">⚔️ RELIC {relic.num} / {TOTAL} • {relic.status}</div>
          <h1 className="text-5xl md:text-6xl font-black mt-3 tracking-tighter leading-none">{relic.title}</h1>
          {/* YOUR IMPROVEMENT FOR RUNNINGWOLF */}
          <p className="mt-4 text-white/70 text-[15px] leading-relaxed">
            {relic.slug==="runningwolf"? "The one who runs with endurance and does not grow weary. — Isaiah 40:31" : relic.short}
          </p>
          <div className="mt-3 inline-block bg-white/10 px-3 py-1 rounded-full text-[11px] font-mono">📖 {relic.verse}</div>

          <div className="mt-8 space-y-4">
            <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/40"><div className="text-[10px] font-black tracking-widest">THE ORIGIN</div><div className="text-sm text-white/60 mt-2">The {relic.title} was forged when truth met battle.</div></div>
            <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/40"><div className="text-[10px] font-black tracking-widest">THE BATTLE</div><div className="text-sm text-white/60 mt-2">Enemy: fear, lies, storm.</div></div>
            <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/40"><div className="text-[10px] font-black tracking-widest">THE LESSON</div><div className="text-sm text-white/60 mt-2">Rooted in {relic.verse}</div></div>
            <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/40"><div className="text-[10px] font-black tracking-widest">THE PRAYER</div><div className="text-sm text-white/60 mt-2 italic">"Lord, forge this truth in me."</div></div>
          </div>

          {relic.status==="FORGED" && <a href="#" className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full font-black text-xs">▶ LISTEN TO RELIC</a>}
        </div>
      </div>
    </div>
  )
}
