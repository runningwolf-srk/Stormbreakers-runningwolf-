"use client"
export default function Home(){
const RELICS=[
{slug:"runningwolf-blade",num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",label:"The Word → The Awakening"},
{slug:"lord-of-lords",num:"II",title:"LORD OF LORDS",icon:"👑",label:"The King → The Revelation"},
{slug:"blood-of-cross",num:"III",title:"BLOOD OF CROSS",icon:"✝️",label:"The Cross → The Redemption"}
]
const LOCKS=["IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"]
return(
<div className="min-h-screen bg-black text-white p-10">
<div className="text-center">
<div className="text-[10px] font-mono text-yellow-500/70">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
<h1 className="text-5xl font-black mt-6">RUNNINGWOLF<br/>STORMBREAKERS</h1>
<div className="mt-6 inline-block border border-white/10 rounded-2xl px-6 py-3">FORGED 2/19 • 11% COMPLETE</div>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-4">
{RELICS.map(r=>(<a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30 block"><div className="text-2xl">{r.icon}</div><div className="mt-3 text-xs font-mono text-white/30">RELIC {r.num}</div><div className="font-black">{r.title}</div><div className="text-xs text-yellow-500/60">{r.label}</div></a>))}
</div>
<div className="mt-12 grid grid-cols-4 gap-3">
{LOCKS.map(n=>(<div key={n} className="border border-white/5 rounded-xl p-4 opacity-30 text-xs">🔒 RELIC {n}<div className="text-[10px] mt-1">NOT YET FORGED</div></div>))}
</div>
<div className="mt-12 text-center"><a href="/armory" className="bg-white text-black px-10 py-4 rounded-full font-black text-sm inline-block">⚔️ ENTER ARMORY →</a></div>
</div>
)
}
