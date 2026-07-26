import { ALL_RELICS } from "@/data/armory"
import { CANON } from "@/data/constants"
import { notFound } from "next/navigation"
import ForgeProgress from "@/components/ForgeProgress"

export default function RelicPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic){
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="text-[10px] font-mono text-white/30 tracking-widest">{CANON.TAGLINE}</div>
        <h1 className="text-5xl font-black mt-6 tracking-tighter">{CANON.NOT_FOUND_TITLE}</h1>
        <p className="mt-3 text-white/40 text-sm">{CANON.NOT_FOUND_SUB}</p>
        <p className="mt-2 text-[11px] font-mono text-white/20">{CANON.STATUS_LINE}</p>
        <a href="/armory" className="inline-block mt-8 border border-white/20 px-8 py-3 rounded-full text-xs font-bold">← RETURN TO ARMORY</a>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-[10px] font-mono text-white/30 tracking-widest">{CANON.TAGLINE}</div>

      {/* HERO ARTWORK — DISTINCT VISUAL IDENTITY */}
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-to-b from-[#D4AF37]/10 via-orange-500/5 to-transparent blur-3xl rounded-[3rem] group-hover:from-[#D4AF37]/20 transition-all" />
          {/* subtle motion — floating embers */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
            <div className="absolute top-10 left-10 w-1 h-1 bg-orange-400/40 rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-1 h-1 bg-[#D4AF37]/30 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-20 left-1/3 w-0.5 h-0.5 bg-white/20 rounded-full animate-ping" />
          </div>
          <img src={relic.image} alt={relic.title} className="relative w-full aspect-square object-cover rounded-[2.5rem] border border-white/10 bg-zinc-900" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-black/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest">RELIC {relic.num}</span>
            <span className={`px-3 py-1 rounded-full text-[9px] font-mono border ${relic.status==="FORGED"?"bg-white text-black":relic.status==="CURRENTLY BEING FORGED"?"bg-orange-500/20 text-orange-300 border-orange-500/30":"bg-white/10 text-white/40"}`}>{relic.status}</span>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono text-white/40">{relic.symbol} {relic.verse}</div>
        </div>

        <div>
          <div className="text-4xl">{relic.symbol}</div>
          <h1 className="text-5xl md:text-6xl font-black mt-3 tracking-tighter leading-[0.9]">{relic.title}</h1>
          <p className="mt-4 text-white/60 leading-relaxed">{relic.purpose}</p>
          <p className="mt-2 text-sm text-[#D4AF37]/60">{relic.short}</p>

          <div className="mt-6"><ForgeProgress /></div>

          {relic.status==="FORGED" && <button className="w-full mt-6 bg-white text-black py-4 rounded-full font-black text-sm tracking-widest">▶ LISTEN • LYRICS • WORSHIP</button>}
        </div>
      </div>

      {/* FULL TEMPLATE — 8 SECTIONS */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">
        <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest text-[#D4AF37]">✝️ KEY SCRIPTURE</div><div className="mt-3 font-bold">{relic.verse}</div><div className="text-sm text-white/60 mt-2">{relic.short} — {relic.purpose}</div></div>
        <div className="border border-white/10 bg-zinc-900/30 rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest">⚔️ MEANING OF THE RELIC</div><div className="mt-3 text-sm text-white/60 leading-relaxed">The {relic.title} is not decoration. It is weapon, testimony, and reminder. Symbol: {relic.symbol}. Purpose: {relic.purpose}. Enemy defeated: deception, fear, shame. King exalted: Jesus.</div></div>
        <div className="border border-white/10 bg-zinc-900/30 rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest">📖 DEVOTIONAL</div><div className="mt-3 text-sm text-white/60 leading-relaxed">God forges relics in fire. This one was forged when truth met battle. What if your wound is becoming your weapon? {relic.verse} is the foundation — not motivation, but revelation.</div></div>
        <div className="border border-white/10 bg-zinc-900/30 rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest">📜 CHRONICLE — TESTIMONY</div><div className="mt-3 text-sm text-white/50 leading-relaxed">Before Christ: broken seasons. The Valley: fire and refining. The Calling: heard heaven. The Forge: truth cutting. The Mission: witness, not victim. <a href={`/chronicles/${relic.slug}`} className="underline text-white/70">Read full →</a></div></div>
        <div className="border border-white/10 bg-zinc-900/30 rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest">🎵 SONG / LYRICS</div><div className="mt-3 text-sm text-white/30 italic">{relic.status==="FORGED"?"Lyrics and player here — connect to your audio file / YouTube":"Lyrics unlocking when relic is forged."}</div></div>
        <div className="border border-white/10 bg-zinc-900/30 rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest">🙏 PRAYER</div><div className="mt-3 text-sm text-white/60 italic leading-relaxed">"King Jesus, forge {relic.title} in me. I do not fight people, I fight darkness. I do not carry pride, I carry truth. I do not run from storms, I run with You. I am not forgotten. I am FORGED. Amen."</div></div>
        <div className="border border-white/10 bg-zinc-900/30 rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest">🪞 REFLECTION QUESTIONS</div><div className="mt-3 text-sm text-white/50 leading-relaxed">1. What lie is {relic.title} confronting?<br/>2. Where does {relic.verse} need to become weapon?<br/>3. Who needs to hear this testimony?</div></div>
        <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-7"><div className="text-[10px] font-black tracking-widest">🏃 APPLICATION CHALLENGE</div><div className="mt-3 text-sm text-white/60 leading-relaxed">7 days: Speak {relic.verse} aloud daily. Journal one victory. Share one testimony. Live as FORGED.</div><a href={`/books/${relic.slug}`} className="inline-block mt-4 text-[11px] font-mono text-white/40 hover:text-white underline">→ OPEN BOOK OF {relic.title}</a></div>
      </div>
    </div>
  )
}
