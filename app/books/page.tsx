import { CANON } from "@/data/constants"
export default function Books(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-black tracking-tighter">📚 BOOKS — LIVE</h1>
      <p className="text-[11px] font-mono text-white/30 mt-2 tracking-widest">{CANON.TAGLINE}</p>
      <p className="mt-4 text-white/50 text-sm">Every relic expands into devotional, reflection, and application.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-xs font-black">📚 BOOK OF THE BLADE</div><div className="text-[11px] text-white/40 mt-2">Hebrews 4:12 — Truth as weapon</div><div className="mt-3 text-[10px] font-mono text-white/20">COMING</div></div>
        <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-xs font-black">📚 BOOK OF THE CROWN</div><div className="text-[11px] text-white/40 mt-2">Revelation 19:16 — King above kings</div><div className="mt-3 text-[10px] font-mono text-white/20">COMING</div></div>
        <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-xs font-black">📚 BOOK OF THE BLOOD</div><div className="text-[11px] text-white/40 mt-2">Colossians 1:20 — Covenant</div><div className="mt-3 text-[10px] font-mono text-white/20">BURNING IN THE FORGE</div></div>
        <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30"><div className="text-xs font-black">📚 BOOK OF THE STORM</div><div className="text-[11px] text-white/40 mt-2">Isaiah 43:2 + Psalm 29 — Through the storm</div><div className="mt-3 text-[10px] font-mono text-white/20">AWAITING REVELATION</div></div>
      </div>
    </div>
  )
}
