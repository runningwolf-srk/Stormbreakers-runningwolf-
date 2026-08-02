"use client"
const RELICS=[
{slug:"runningwolf-blade",num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",label:"The Word → The Awakening",verse:"Hebrews 4:12",meaning:"The foundation is truth.",status:"FORGED"},
{slug:"lord-of-lords",num:"II",title:"LORD OF LORDS",icon:"👑",label:"The King → The Revelation",verse:"Revelation 19:16",meaning:"The warrior discovers who sits on the throne.",status:"FORGED"},
{slug:"blood-of-cross",num:"III",title:"BLOOD OF CROSS",icon:"✝️",label:"The Cross → The Redemption",verse:"Colossians 1:20",meaning:"Victory purchased through sacrifice.",status:"FORGING"}
]
const LOCKS=["IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"]
export default function Home(){
return(
<div className="min-h-screen bg-black text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">
<div className="text-center">
<div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
<h1 className="text-[44px] sm:text-7xl font-black tracking-tighter mt-8 leading-[0.85]">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
<p className="mt-4 text-white/50 text-sm">A cinematic Christian saga — Season 1 is being forged.</p>
<div className="mt-6 inline-block border border-white/10 rounded-2xl px-6 sm:px-8 py-4 bg-zinc-900/40"><div className="text-2xl font-black">FORGED 2/19 • 11% COMPLETE</div><div className="text-[10px] font-mono text-white/40 mt-1">⚔️ 2 FORGED • 🔥 1 CURRENTLY BEING FORGED • 🔒 16 AWAITING REVELATION</div></div>
</div>
<div className="mt-16">
<div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-6 sm:p-7 text-center"><div className="text-[12px] font-black tracking-[0.35em]">CHAPTER I — THE FORGING OF THE WARRIOR</div><div className="mt-3 text-sm text-white/60">The Word awakens. The King is revealed. The Cross redeems.</div></div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">{RELICS.map(r=>(<a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30 text-left block"><div className="flex justify-between"><span className="text-2xl">{r.icon}</span><span className="text-[8px] font-mono px-2.5 py-1 rounded-full bg-white/10">{r.status}</span></div><div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num}</div><div className="font-black text-sm">{r.title}</div><div className="text-[11px] text-[#D4AF37]/60 mt-1">{r.label}</div></a>))}</div>
</div>
<div className="mt-14 border border-white/10 rounded-2xl p-6 bg-zinc-900/20"><div className="text-[10px] font-mono tracking-[0.35em] text-white/30">⚔️ FORGE TIMELINE</div><div className="mt-6 grid sm:grid-cols-2 gap-6"><div><div className="text-[10px] font-mono text-[#D4AF37]/60">2026 — CHAPTER I</div><div className="mt-3 space-y-2 text-xs"><div>⚔️ Relic I — BLADE — FORGED</div><div>👑 Relic II — LORD OF LORDS — FORGED</div><div>✝️ Relic III — BLOOD OF CROSS — FORGING</div></div></div><div className="opacity-40"><div className="text-[10px] font-mono">FUTURE</div><div className="mt-3 space-y-2 text-xs"><div>🔒 Relic IV — Not yet forged</div><div>🔒 V-XIX — Awaiting revelation</div></div></div>
<div className="mt-8 border border-[#D4AF37]/20 rounded-2xl p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"><div className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">👑 FORGE RANK</div><div className="mt-5 grid grid-cols-3 gap-3 text-center"><div className="border border-white/10 rounded-xl p-4 bg-black/40"><div>🔥</div><div className="text-[10px] font-mono mt-1">3 RELICS</div><div className="text-xs font-black">INITIATE</div></div><div className="border border-[#D4AF37]/20 rounded-xl p-4 bg-[#D4AF37]/5"><div>⚔️</div><div className="text-[10px] font-mono mt-1 text-[#D4AF37]/60">7 RELICS</div><div className="text-xs font-black text-[#D4AF37]">WARRIOR</div></div><div className="border border-white/10 rounded-xl p-4 bg-black/40"><div>👑</div><div className="text-[10px] font-mono mt-1">19 RELICS</div><div className="text-xs font-black">STORMBREAKER</div></div></div></div>
<div className="mt-12"><div className="text-[11px] font-mono tracking-[0.35em] text-white/30">🔒 FUTURE RELICS</div><div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">{LOCKS.map(n=>(<div key={n} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 opacity-30"><div className="text-[10px] font-mono">🔒 RELIC {n}</div><div className="text-[10px] text-white/30 mt-1">THE NEXT CHAPTER HAS NOT BEEN FORGED</div></div>))}</div></div>
<div className="mt-10 text-center"><a href="/armory" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm">⚔️ ENTER ARMORY →</a></div>
</div>
</div>
)
  }
