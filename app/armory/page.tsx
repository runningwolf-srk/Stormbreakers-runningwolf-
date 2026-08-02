export default function Armory(){
const relics=[
{slug:"runningwolf-blade",num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",desc:"The Word → Awakening",status:"FORGED"},
{slug:"lord-of-lords",num:"II",title:"LORD OF LORDS",icon:"👑",desc:"The King → Revelation",status:"FORGED"},
{slug:"blood-of-cross",num:"III",title:"BLOOD OF CROSS",icon:"✝️",desc:"The Cross → Redemption",status:"FORGED"},
]
return(
<div className="min-h-screen bg-black text-white max-w-6xl mx-auto px-6 py-12">
<div className="text-center"><h1 className="text-5xl font-black tracking-tighter">THE ARMORY</h1><p className="mt-3 text-white/50 text-sm">FORGED 3/19 • 16% • CHAPTER I COMPLETE — ✝️ RELIC III — BLOOD OF CROSS — FORGED</p></div>
<div className="mt-10 grid md:grid-cols-3 gap-4">
{relics.map(r=>(
<a key={r.slug} href={`/armory/${r.slug}`} className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-zinc-900/30 hover:bg-zinc-900/50 transition">
<div className="text-2xl">{r.icon}</div><div className="mt-3 text-[10px] font-mono text-white/30">{r.num} • {r.status}</div><div className="font-black mt-1">{r.title}</div><div className="text-xs text-white/50 mt-1">{r.desc}</div>
</a>
))}
</div>
<div className="mt-10 text-center"><a href="/" className="border border-white/10 rounded-full px-8 py-3 text-xs font-mono">← RETURN TO FORGE</a></div>
</div>
)
}
