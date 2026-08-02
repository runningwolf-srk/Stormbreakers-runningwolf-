import {ALL_RELICS} from "@/data/armory"
import {CANON} from "@/data/constants"

export default function Home(){
  const c1 = ALL_RELICS.slice(0,3)
  const future = ALL_RELICS.slice(3)
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">

        {/* TOP — ONLY PROGRESS LINE #1 */}
        <div className="text-center">
          <div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">{CANON.TAGLINE}</div>
          <h1 className="text-7xl font-black tracking-tighter mt-8">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
          <p className="mt-4 text-white/50 text-sm">A cinematic Christian saga — Season 1 is now forging.</p>
          <div className="mt-5 inline-block border border-white/10 rounded-2xl px-6 py-3 bg-zinc-900/40">
            <div className="text-2xl font-black">FORGED 2/19 • 11%</div>
            <div className="text-[10px] font-mono text-white/40 mt-1">{CANON.STATUS}</div>
          </div>
        </div>

        {/* CHAPTER I — ONLY PROGRESS LINE #2 */}
        <div className="mt-16">
          <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-7 text-center">
            <div className="text-[12px] font-black tracking-[0.3em]">CHAPTER I — THE FORGING OF THE WARRIOR</div>
            <div className="mt-2 text-sm text-white/60">The Word awakens. The King is revealed. Redemption is purchased.</div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {c1.map(r=>(
              <a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30 hover:border-white/20 text-left block">
                <div className="flex justify-between"><span className="text-2xl">{r.icon}</span><span className="text-[8px] font-mono px-2 py-1 rounded-full bg-white/10">{r.status}</span></div>
                <div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num}</div>
                <div className="font-black text-sm">{r.title}</div>
                <div className="text-[11px] text-white/50 mt-1">
                  {r.num==="I"&&"⚔️ The Word → The Awakening"}
                  {r.num==="II"&&"👑 The King → The Revelation"}
                  {r.num==="III"&&"✝️ The Cross → The Redemption"}
                </div>
                <div className="mt-3 text-[11px] text-white/30">Meaning: {r.msg}</div>
                <div className="text-[11px] text-white/30">Scripture: {r.verse}</div>
              </a>
            ))}
          </div>
        </div>

        {/* FUTURE RELICS — FIX #2 */}
        <div className="mt-16">
          <div className="text-[11px] font-mono tracking-widest text-white/30">🔒 FUTURE RELICS — AWAITING REVELATION</div>
          <div className="mt-4 grid md:grid-cols-4 gap-3">
            {future.map(r=><div key={r.slug} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 opacity-40"><div className="text-[10px] font-mono">RELIC {r.num} 🔒</div><div className="text-[11px] font-bold mt-1">{r.title}</div></div>)}
          </div>
        </div>

        {/* 4 EXPERIENCES — KEEP */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">⚔️ ARMORY</div><div className="text-[11px] text-white/40 mt-1">Hear the relics.</div></div>
          <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">📖 CHRONICLES</div><div className="text-[11px] text-white/40 mt-1">Walk the testimony.</div></div>
          <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">✝️ WORD</div><div className="text-[11px] text-white/40 mt-1">Stand on Scripture.</div></div>
          <div className="border border-white/10 rounded-2xl p-5"><div className="font-black text-xs">📚 BOOKS</div><div className="text-[11px] text-white/40 mt-1">Live the truth.</div></div>
        </div>

        {/* 3-TIER FORGE ACCESS SYSTEM — NEW */}
        <div className="mt-16 border border-[#D4AF37]/20 rounded-3xl p-8 bg-zinc-900/20">
          <div className="text-center"><div className="text-[11px] font-mono tracking-widest text-[#D4AF37]/70">⚔️ THE FORGE ACCESS SYSTEM</div><div className="text-sm text-white/50 mt-2">Songs are free. Depth is forged. Supporters help build the cathedral.</div></div>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
            <div className="border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-black">🐺 PATH 1 — LISTENER (Free)</div>
              <div className="text-[11px] text-white/50 mt-2">Enter the Forge • Stream on YouTube • Hear the relics • Follow canon • Basic Scripture</div>
              <div className="mt-4 text-[10px] font-mono text-white/30">⚔️ Hear</div>
            </div>
            <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-2xl p-6">
              <div className="text-xs font-black text-[#D4AF37]">⚔️ PATH 2 — FORGED SUPPORTER</div>
              <div className="text-[11px] text-white/60 mt-2">Help Forge the Relics • Early access • Behind-the-scenes • Artwork reveals • Extended Chronicles • Name in supporters (optional)</div>
              <div className="mt-4 text-[10px] font-mono text-[#D4AF37]/60">📖 Unlock the Chronicle</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-black">
              <div className="text-xs font-black">👑 PATH 3 — INNER CIRCLE / ARCHIVE</div>
              <div className="text-[11px] text-white/50 mt-2">Experience the Full Forge • Full digital collection • Instrumentals • Full devotionals/books • Exclusive lore</div>
              <div className="mt-4 text-[10px] font-mono text-white/30">📚 Enter the Complete Forge</div>
            </div>
          </div>
          <div className="mt-6 text-center text-[10px] font-mono text-white/20">Core message is never paywalled. Paid layers = deeper forge, not locked gate.</div>
        </div>

        {/* OATH */}
        <div className="mt-16 max-w-3xl mx-auto border border-white/10 rounded-3xl p-10 bg-zinc-900/20 text-center">
          <div className="text-[10px] font-mono tracking-widest text-white/30">THE STORMBREAKERS OATH</div>
          <div className="mt-8 space-y-2 text-lg"><div className="text-white/60">We do not fight people.</div><div className="font-black">We fight darkness.</div></div>
          <div className="mt-4 text-[11px] font-mono text-[#D4AF37]/50">{CANON.CLOSING}</div>
        </div>

        <div className="mt-12 text-center"><a href="/armory" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest">⚔️ ENTER THE ARMORY →</a></div>
      </div>
    </div>
  )
}
