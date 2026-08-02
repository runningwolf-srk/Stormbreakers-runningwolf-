import {CANON} from "@/data/constants"
import {ALL_RELICS} from "@/data/armory"

export default function Home(){
  const chapter1 = ALL_RELICS.slice(0,3)
  const locked = ALL_RELICS.slice(3)
  return <div className="min-h-screen bg-black">
  <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">

    {/* THE FORGE */}
    <div className="text-center">
      <div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">{CANON.TAGLINE}</div>
      <h1 className="text-7xl font-black tracking-tighter mt-8">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
      <p className="mt-4 text-white/50 text-sm max-w-xl mx-auto">A cinematic Christian saga forged through battle, testimony, and Scripture. People are not just listening to completed songs — they are watching the kingdom story unfold.</p>
      <div className="mt-6 inline-flex flex-col items-center border border-white/10 rounded-2xl p-4 bg-zinc-900/40">
        <div className="text-[10px] font-mono text-white/30">CANON PROGRESS</div>
        <div className="text-2xl font-black mt-1">FORGED 2/19 • 11%</div>
        <div className="text-[10px] font-mono text-white/40 mt-1">{CANON.STATUS}</div>
        <div className="mt-2 h-1.5 w-48 bg-white/10 rounded-full flex overflow-hidden"><div className="bg-white h-full" style={{width:"10.5%"}}/><div className="bg-orange-500 h-full" style={{width:"5.2%"}}/></div>
      </div>
    </div>

    {/* CHAPTER I */}
    <div className="mt-16">
      <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-6 text-center">
        <div className="text-[11px] font-mono tracking-[0.3em] text-[#D4AF37]/70">CHAPTER I — THE FORGING OF THE WARRIOR</div>
        <div className="mt-2 text-sm text-white/60">The Word awakens. The King is revealed. Redemption is purchased.</div>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {chapter1.map(r=>(
          <a key={r.slug} href={`/armory/${r.slug}`} className={`border rounded-2xl p-6 text-left ${r.status==="CURRENTLY BEING FORGED"?"border-orange-500/30 bg-orange-500/5":"border-white/10 bg-zinc-900/30 hover:border-white/20"}`}>
            <div className="flex justify-between"><span className="text-2xl">{r.icon}</span><span className="text-[8px] font-mono px-2 py-1 rounded-full bg-white/10">{r.status}</span></div>
            <div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num} • {r.verse}</div>
            <div className="font-black text-sm mt-1">{r.title}</div>
            <div className="text-[11px] text-white/50 mt-1">{r.icon} {r.theme.includes("Word")?"The Word awakens.":r.theme.includes("King")?"The King is revealed.":"Redemption is purchased."}</div>
          </a>
        ))}
      </div>
    </div>

    {/* FUTURE CHAPTERS */}
    <div className="mt-16">
      <div className="text-[11px] font-mono tracking-widest text-white/30">FUTURE CHAPTERS — AWAITING REVELATION</div>
      <div className="mt-4 grid md:grid-cols-4 gap-3">
        {locked.map(r=><div key={r.slug} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 opacity-40"><div className="text-[10px] font-mono">RELIC {r.num} 🔒</div><div className="text-[11px] font-bold mt-1">{r.title}</div></div>)}
      </div>
    </div>

    {/* OATH — WITH YOUR FIX */}
    <div className="mt-16 max-w-3xl mx-auto border border-white/10 rounded-3xl p-10 bg-zinc-900/20 text-center">
      <div className="text-[10px] font-mono tracking-widest text-white/30">THE STORMBREAKERS OATH</div>
      <div className="mt-8 space-y-3 text-lg">
        <div className="text-white/60">We do not fight people.</div><div className="font-black">We fight darkness.</div>
        <div className="mt-4 text-white/60">We do not carry pride.</div><div className="font-black">We carry truth.</div>
        <div className="mt-4 text-white/60">We do not run from storms.</div><div className="font-black">We run with the King.</div>
        <div className="mt-4 text-white/60">We are not victims.</div><div className="font-black">We are witnesses.</div>
        <div className="mt-4 text-white/60">We are not forgotten.</div><div className="font-black text-[#D4AF37]">We are FORGED.</div>
      </div>
      <div className="mt-8 text-[11px] font-mono text-[#D4AF37]/50 tracking-widest">{CANON.CLOSING}</div>
    </div>

    {/* 4 EXPERIENCES MAP */}
    <div className="mt-16 grid md:grid-cols-4 gap-4 text-left">
      <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">⚔️ THE ARMORY</div><div className="text-[11px] text-white/40 mt-1">Hear the relics — Song, Symbol, Status</div></div>
      <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">📖 THE CHRONICLES</div><div className="text-[11px] text-white/40 mt-1">Story — Before Christ → Valley → Calling → Forge → Mission</div></div>
      <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">✝️ THE WORD</div><div className="text-[11px] text-white/40 mt-1">Scripture — Verse, Meaning, Foundation</div></div>
      <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">📚 THE BOOKS</div><div className="text-[11px] text-white/40 mt-1">Transformation — Devotional, Living the truth</div></div>
    </div>

    <div className="mt-12 text-center"><a href="/armory" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest">⚔️ ENTER THE FORGE →</a></div>
  </div>
  </div>
}
