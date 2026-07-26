import { ALL_RELICS } from "@/data/armory"
import { CANON } from "@/data/constants"
import ForgeProgress from "@/components/ForgeProgress"
import { notFound } from "next/navigation"
export default function Page({params}:{params:{slug:string}}){
  const r = ALL_RELICS.find(x=>x.slug===params.slug)
  if(!r){
    return <div className="max-w-2xl mx-auto px-6 py-24 text-center"><div className="text-[10px] font-mono text-white/30">{CANON.TAGLINE}</div><h1 className="text-5xl font-black mt-6">{CANON.NOT_FOUND_TITLE}</h1><p className="mt-6 text-white/50 text-sm leading-relaxed">{CANON.NOT_FOUND_SUB}</p><a href="/armory" className="inline-block mt-10 bg-white text-black px-8 py-3 rounded-full text-xs font-black">← RETURN TO THE FORGE</a></div>
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-[10px] font-mono text-white/30">{CANON.TAGLINE}</div>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <img src={r.image} alt={r.title} className="w-full aspect-square object-cover rounded-3xl border border-white/10"/>
        <div><div className="text-3xl">{r.symbol}</div><h1 className="text-5xl font-black mt-3">{r.title}</h1><p className="mt-3 text-white/60 text-sm">{r.purpose} — {r.verse}</p><div className="mt-6"><ForgeProgress/></div><div className="mt-6 grid gap-3"><div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-[10px] font-black">⚔️ MEANING</div><div className="text-sm text-white/60 mt-2">{r.short} Symbol: {r.symbol}</div></div><div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-[10px] font-black">✝️ KEY VERSE</div><div className="text-sm mt-2">{r.verse}</div></div><div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-[10px] font-black">📖 CHRONICLE</div><div className="text-sm text-white/50 mt-2">Before Christ → Valley → Calling → Forge → Mission. <a href={`/chronicles/${r.slug}`} className="underline">Read →</a></div></div><div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-[10px] font-black">🙏 PRAYER</div><div className="text-sm text-white/60 italic mt-2">King Jesus, forge {r.title} in me. One King.</div></div></div></div>
      </div>
      {r.status==="AWAITING REVELATION" && <div className="mt-12 border border-white/10 bg-zinc-900/20 rounded-2xl p-8 text-center"><div className="text-3xl">🔒</div><div className="mt-3 font-black text-sm">THIS RELIC AWAITS REVELATION</div><p className="mt-3 text-sm text-white/50">{CANON.NOT_FOUND_SUB}</p></div>}
    </div>
  )
}
