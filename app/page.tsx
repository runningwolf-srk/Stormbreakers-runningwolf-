"use client"
export default function Home(){
const RELICS=[
{slug:"runningwolf-blade",num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",label:"The Word → The Awakening",symbol:"Blade engraved with Hebrews 4:12",status:"FORGED"},
{slug:"lord-of-lords",num:"II",title:"LORD OF LORDS",icon:"👑",label:"The King → The Revelation",symbol:"Crown above every crown",status:"FORGED"},
{slug:"blood-of-cross",num:"III",title:"BLOOD OF CROSS",icon:"✝️",label:"The Cross → The Redemption",symbol:"Cross marked by sacrifice",status:"FORGED"}
]
const LOCKS=[
{num:"IV"},{num:"V"},{num:"VI"},{num:"VII"},{num:"VIII"},{num:"IX"},{num:"X"},{num:"XI"},{num:"XII"},{num:"XIII"},{num:"XIV"},{num:"XV"},{num:"XVI"},{num:"XVII"},{num:"XVIII"},{num:"XIX"}
]
const forged=3
const total=19
const percent=16
return(
<div className="min-h-screen bg-black text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">
<div className="text-center">
<div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[9px] font-mono tracking-[0.35em] text-[#D4AF37]/70">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
<h1 className="text-[44px] sm:text-7xl font-black tracking-tighter mt-8 leading-[0.85]">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
<p className="mt-4 text-white/50 text-xs">A cinematic Christian saga — CHAPTER I COMPLETE.</p>
<div className="mt-8 mx-auto max-w-xl border border-[#D4AF37]/20 rounded-2xl p-6 bg-gradient-to-b from-[#D4AF37]/10 to-zinc-900/40">
<div className="flex justify-between text-[10px] font-mono"><span className="text-white/50">FORGE PROGRESS</span><span className="text-[#D4AF37]">FORGED {forged}/{total} • {percent}%</span></div>
<div className="mt-3 h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-200" style={{width:`${percent}%`}}></div></div>
<div className="mt-3 flex justify-center gap-1">{Array.from({length:19}).map((_,i)=>(<div key={i} className={`h-1.5 w-full rounded-full ${i<3?"bg-[#D4AF37]":"bg-white/10"}`}></div>))}</div>
<div className="mt-3 text-[10px] font-mono text-[#D4AF37]">⚔️ 3 FORGED • 🔒 16 NOT YET REVEALED — CHAPTER I COMPLETE</div>
</div>
</div>
<div className="mt-16">
<div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-7 text-center"><div className="text-[12px] font-black tracking-[0.35em] text-[#D4AF37]">CHAPTER I — THE FORGING OF THE WARRIOR — COMPLETE</div><div className="mt-2 text-sm text-white/60">The Word awakened. The King was revealed. The Cross redeemed.</div></div>
<div className="mt-6 grid md:grid-cols-3 gap-4">
{RELICS.map(r=>(
<a key={r.slug} href={`/armory/${r.slug}`} className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-[#D4AF37]/40 transition text-left block group">
<div className="flex justify-between"><span className="text-2xl">{r.icon}</span><span className="text-[8px] font-mono px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">FORGED</span></div>
<div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num}</div>
<div className="font-black text-sm group-hover:text-[#D4AF37] transition">{r.title}</div>
<div className="text-[11px] text-[#D4AF37]/60 mt-1">{r.label}</div>
<div className="mt-3 pt-3 border-t border-white/5"><div className="text-[9px] font-mono text-white/20 tracking-widest">SYMBOL</div><div className="text-[11px] text-white/50 mt-1 italic">{r.symbol}</div></div>
</a>
))}
</div>
</div>
<div className="mt-10 border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-zinc-900/40 via-black to-[#D4AF37]/5 text-center">
<div className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">⚔️ CHAPTER I — COMPLETE</div>
<div className="mt-5 text-[14px] leading-relaxed text-white/70">
The warrior has received:<br/>
<span className="text-white font-black">The Word.</span><br/>
<span className="text-white font-black">The Crown.</span><br/>
<span className="text-white font-black">The Cross.</span>
</div>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="text-[11px] font-mono tracking-[0.3em] text-white/30">CHAPTER II — AWAITS REVELATION</div>
<div className="mt-2 text-[12px] text-white/40">THE NEXT RELIC WILL BE REVEALED IN ITS TIME.</div>
</div>
</div>
<div className="mt-12"><div className="text-[11px] font-mono tracking-[0.35em] text-white/30">🔒 FUTURE RELICS — NOT YET REVEALED</div><div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">{LOCKS.map(n=>(<div key={n.num} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 opacity-30"><div className="text-[10px] font-mono">🔒 RELIC {n.num}</div><div className="text-[10px] text-white/20 mt-2 tracking-widest">🔒 SYMBOL NOT YET REVEALED</div><div className="text-[10px] text-white/30 mt-1">NOT YET REVEALED</div></div>))}</div></div>
<div className="mt-14 border border-[#D4AF37]/20 rounded-3xl p-8 bg-zinc-900/20 text-center"><div className="text-[10px] font-mono text-white/30">THE OATH</div><div className="mt-4 text-lg"><span className="text-white/60">We do not fight people.</span> <span className="font-black">We fight darkness.</span></div><div className="mt-3 text-[11px] font-mono text-[#D4AF37]/40">CHAPTER I COMPLETE — Three relics forged. One King revealed.</div></div>
<div className="mt-10 text-center"><a href="/armory" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm">⚔️ ENTER ARMORY →</a></div>
</div>
</div>
)
}
