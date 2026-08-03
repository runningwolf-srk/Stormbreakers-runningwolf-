"use client"
export default function Home(){
const RELICS=[
{slug:"runningwolf-blade",num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",label:"The Word → The Awakening",symbol:"Blade engraved with Hebrews 4:12",status:"⚔️ RELIC I — FORGED"},
{slug:"lord-of-lords",num:"II",title:"LORD OF LORDS",icon:"👑",label:"The King → The Revelation",symbol:"Crown above every crown",status:"👑 RELIC II — FORGED"},
{slug:"blood-of-cross",num:"III",title:"BLOOD OF CROSS",icon:"✝️",label:"The Cross → The Redemption",symbol:"Cross marked by sacrifice",status:"✝️ RELIC III — BLOOD OF CROSS — FORGED"}
]
const SEALED=[
{num:"IV",prophecy:"THE RELIC OF THE WILDERNESS",hint:"Forged where the warrior learns endurance.",sym:"🏜️ Cracked stone beneath rising sun"},
{num:"V",prophecy:"THE RELIC OF THE SHADOW",hint:"Forged where light is tested by night.",sym:"🏮 Lantern burning inside darkness"},
{num:"VI",prophecy:"THE RELIC OF THE OATH",hint:"Forged where loyalty is sealed.",sym:"🤝 Scarred hands clasped over blade"},
{num:"VII",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"VIII",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"IX",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"X",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XI",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XII",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XIII",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XIV",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XV",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XVI",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XVII",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XVIII",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
{num:"XIX",hint:"Its name will be revealed when the time comes.",sym:"🔒 Symbol not yet revealed"},
]
return(
<div className="min-h-screen bg-black text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">
<div className="text-center">
<div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[9px] font-mono tracking-[0.35em] text-[#D4AF37]/70">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
<h1 className="text-[44px] sm:text-7xl font-black tracking-tighter mt-8 leading-[0.85]">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
<div className="mt-6 max-w-2xl mx-auto border border-[#D4AF37]/20 rounded-2xl p-5 bg-[#D4AF37]/5">
<div className="text-[10px] font-mono tracking-widest text-[#D4AF37]/70">WHAT IS A STORMBREAKER?</div>
<div className="mt-2 text-[13px] leading-relaxed text-white/70 italic">“A Stormbreaker is one who stands when the storm comes, not because he has no wounds, but because the King has forged him.”</div>
</div>
<div className="mt-8 mx-auto max-w-xl border border-[#D4AF37]/20 rounded-2xl p-6 bg-gradient-to-b from-[#D4AF37]/10 to-zinc-900/40">
<div className="flex justify-between text-[10px] font-mono"><span className="text-white/50">FORGE PROGRESS</span><span className="text-[#D4AF37]">3/19 RELICS FORGED • 16% OF THE CANON REVEALED</span></div>
<div className="mt-3 h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-200" style={{width:"16%"}}></div></div>
<div className="mt-3 text-[10px] font-mono text-[#D4AF37] text-center">⚔️ 3 FORGED • 🔒 16 SEALED • ✝️ RELIC III — BLOOD OF CROSS — FORGED</div>
<div className="mt-2 text-[9px] font-mono text-white/20 text-center italic">Every relic tells one story. Every story points to one King.</div>
</div>
</div>
<div className="mt-14 grid md:grid-cols-4 gap-3">
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">⚔️</div><div className="mt-2 font-black text-xs tracking-widest">ARMORY</div><div className="mt-1 text-[11px] text-white/50">Hear the relics. Every song is a chapter forged in battle.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">📖</div><div className="mt-2 font-black text-xs tracking-widest">CHRONICLES</div><div className="mt-1 text-[11px] text-white/50">Discover the battles behind the songs. Testimony becomes weapon.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">✝️</div><div className="mt-2 font-black text-xs tracking-widest">WORD</div><div className="mt-1 text-[11px] text-white/50">Study the Scripture that forged the warrior. Foundation is truth.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">📚</div><div className="mt-2 font-black text-xs tracking-widest">BOOKS</div><div className="mt-1 text-[11px] text-white/50">Enter the complete mythology. Lore, devotionals, and the full canon.</div></div>
</div>
<div className="mt-12">
<div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-7 text-center"><div className="text-[12px] font-black tracking-[0.35em] text-[#D4AF37]">CHAPTER I — THE FORGING OF THE WARRIOR — COMPLETE</div><div className="mt-2 text-sm text-white/60">The Word awakened. The King was revealed. The Cross redeemed.</div></div>
<div className="mt-6 grid md:grid-cols-3 gap-4">
{RELICS.map(r=>(
<a key={r.slug} href={`/armory/${r.slug}`} className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-zinc-900/40 hover:bg-zinc-900/60 transition text-left block">
<div className="flex justify-between"><span className="text-2xl">{r.icon}</span><span className="text-[8px] font-mono px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">FORGED</span></div>
<div className="mt-4 text-[10px] font-mono text-white/30">{r.status}</div>
<div className="font-black text-sm">{r.title}</div>
<div className="text-[11px] text-[#D4AF37]/60 mt-1">{r.label}</div>
<div className="mt-3 pt-3 border-t border-white/5"><div className="text-[9px] font-mono text-white/20">SYMBOL</div><div className="text-[11px] text-white/50 mt-1 italic">{r.symbol}</div></div>
</a>
))}
</div>
</div>
<div className="mt-10 border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-zinc-900/40 via-black to-[#D4AF37]/5 text-center">
<div className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">⚔️ CHAPTER I — COMPLETE</div>
<div className="mt-5 text-[14px] text-white/70">The warrior has received:<br/><span className="text-white font-black">The Word. The Crown. The Cross.</span></div>
<div className="mt-10 pt-8 border-t border-white/10">
<div className="text-[12px] font-black tracking-[0.35em] text-white">CHAPTER II — THE TRIAL OF THE WARRIOR</div>
<div className="mt-5 max-w-xl mx-auto text-[13px] leading-relaxed text-white/60 italic">The warrior has received the Word.<br/>He has bowed before the King.<br/>He has been redeemed by the Cross.<br/><span className="text-white font-bold not-italic mt-3 block">Now he must walk through the wilderness, face the shadow, and keep the oath.</span></div>
<div className="mt-6 flex flex-wrap justify-center gap-2 text-[9px] font-mono">
<span className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 rounded-full text-[#D4AF37]">🏜️ IV — WILDERNESS — Endurance</span>
<span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-white/50">🏮 V — SHADOW — Faith in darkness</span>
<span className="border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-white/50">🤝 VI — OATH — Covenant</span>
</div>
<div className="mt-5 text-[10px] font-mono text-[#D4AF37]/50">CHAPTER II — AWAITS REVELATION — THE NEXT RELIC WILL BE REVEALED IN ITS TIME</div>
</div>
</div>
<div className="mt-12"><div className="text-[11px] font-mono tracking-[0.35em] text-white/30">🔒 THE SEALED RELICS — PROPHECIES OF CHAPTER II & BEYOND</div><div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">{SEALED.map(s=>(<div key={s.num} className={`border rounded-xl p-5 ${s.prophecy?"border-[#D4AF37]/20 bg-[#D4AF37]/5":"border-white/5 bg-white/[0.02] opacity-60"}`}><div className="text-[10px] font-mono">🔒 RELIC {s.num}</div>{s.prophecy && (<div className="mt-3 text-[10px] font-black tracking-widest text-[#D4AF37]/70">{s.prophecy}</div>)}<div className="mt-2 text-[9px] text-white/20 tracking-widest">{s.sym}</div><div className="mt-2 text-[9px] text-white/30 leading-relaxed italic">{s.hint}</div></div>))}</div></div>
<div id="archive" className="mt-14 grid md:grid-cols-3 gap-4">
<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] text-center"><div>🐺</div><div className="mt-2 font-black text-xs tracking-widest">THE PATH OF THE WITNESS</div><div className="mt-1 text-[9px] font-mono text-white/30">🐺 LISTENER — FREE</div><div className="mt-2 text-[11px] text-white/50">Songs • Story • Scripture</div><div className="mt-3 text-[9px] font-mono text-white/20">THE WORD IS FREE</div></div>
<div className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-[#D4AF37]/5 text-center"><div>⚔️</div><div className="mt-2 font-black text-xs tracking-widest text-[#D4AF37]">THE PATH OF THE FORGED</div><div className="mt-1 text-[9px] font-mono text-[#D4AF37]/50">⚔️ FORGED SUPPORTER</div><div className="mt-2 text-[11px] text-white/50">Behind scenes • Early access • Artwork</div><div className="mt-3 text-[9px] font-mono text-[#D4AF37]/40">WITNESS THE FORGING</div></div>
<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] text-center"><div>👑</div><div className="mt-2 font-black text-xs tracking-widest">THE PATH OF THE ARCHIVE</div><div className="mt-1 text-[9px] font-mono text-white/30">👑 STORMBREAKERS ARCHIVE</div><div className="mt-2 text-[11px] text-white/50">Instrumentals • Books • Devotionals • Full lore</div><div className="mt-3 text-[9px] font-mono text-white/20">DEPTH IS FORGED</div></div>
</div>
<div className="mt-14 border border-[#D4AF37]/20 rounded-3xl p-8 bg-zinc-900/20 text-center">
<div className="text-[10px] font-mono text-white/30">THE OATH OF THE STORMBREAKERS</div>
<div className="mt-2 text-[10px] font-mono text-white/20 max-w-2xl mx-auto leading-relaxed">We stand when storms rise. We carry wounds without surrender. We walk in truth. We bow before the King. We fight darkness with light. We remember the Cross. We endure until the end.</div>
<div className="mt-4 text-lg"><span className="text-white/60">We do not fight people.</span> <span className="font-black">We fight darkness.</span></div>
<div className="mt-3 text-[11px] font-mono text-[#D4AF37]/40">✝️ RELIC III — BLOOD OF CROSS — FORGED — CHAPTER I COMPLETE</div>
<div className="mt-2 text-[9px] font-mono text-white/20 italic">Every relic tells one story. Every story points to one King.</div>
</div>
</div>
</div>
)
}
