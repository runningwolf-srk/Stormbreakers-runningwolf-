"use client"
export default function Home(){
const RELICS=[
{slug:"runningwolf-blade",num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",label:"The Word → The Awakening",symbol:"Blade engraved with Hebrews 4:12",status:"FORGED"},
{slug:"lord-of-lords",num:"II",title:"LORD OF LORDS",icon:"👑",label:"The King → The Revelation",symbol:"Crown above every crown",status:"FORGED"},
{slug:"blood-of-cross",num:"III",title:"BLOOD OF CROSS",icon:"✝️",label:"The Cross → The Redemption",symbol:"Cross marked by sacrifice",status:"FORGED"}
]
const SEALED=[
{num:"IV",prophecy:"THE RELIC OF THE WILDERNESS",hint:"Forged where the warrior learns endurance."},
{num:"V",prophecy:"THE RELIC OF THE SHADOW",hint:"Forged where light is tested by night."},
{num:"VI",prophecy:"THE RELIC OF THE OATH",hint:"Forged where loyalty is sealed."},
{num:"VII",hint:"Its name will be revealed when the time comes."},
{num:"VIII",hint:"Its name will be revealed when the time comes."},
{num:"IX",hint:"Its name will be revealed when the time comes."},
{num:"X",hint:"Its name will be revealed when the time comes."},
{num:"XI",hint:"Its name will be revealed when the time comes."},
{num:"XII",hint:"Its name will be revealed when the time comes."},
{num:"XIII",hint:"Its name will be revealed when the time comes."},
{num:"XIV",hint:"Its name will be revealed when the time comes."},
{num:"XV",hint:"Its name will be revealed when the time comes."},
{num:"XVI",hint:"Its name will be revealed when the time comes."},
{num:"XVII",hint:"Its name will be revealed when the time comes."},
{num:"XVIII",hint:"Its name will be revealed when the time comes."},
{num:"XIX",hint:"Its name will be revealed when the time comes."},
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
<div className="flex justify-between text-[10px] font-mono"><span className="text-white/50">FORGE PROGRESS</span><span className="text-[#D4AF37]">FORGED 3/19 • 16%</span></div>
<div className="mt-3 h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-200" style={{width:"16%"}}></div></div>
<div className="mt-3 text-[10px] font-mono text-[#D4AF37]">⚔️ 3 FORGED • 🔒 16 SEALED — CHAPTER I COMPLETE</div>
</div>
</div>

<div className="mt-14 grid md:grid-cols-4 gap-3">
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">⚔️</div><div className="mt-2 font-black text-xs">ARMORY</div><div className="mt-1 text-[11px] text-white/50">Hear the relics. Every song is a chapter forged in battle.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">📖</div><div className="mt-2 font-black text-xs">CHRONICLES</div><div className="mt-1 text-[11px] text-white/50">Discover the battles behind the songs. Testimony becomes weapon.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">✝️</div><div className="mt-2 font-black text-xs">WORD</div><div className="mt-1 text-[11px] text-white/50">Study the Scripture that forged the warrior. Foundation is truth.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="text-lg">📚</div><div className="mt-2 font-black text-xs">BOOKS</div><div className="mt-1 text-[11px] text-white/50">Enter the complete mythology. Lore, devotionals, and the full canon.</div></div>
</div>

<div id="forge" className="mt-12">
<div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-7 text-center"><div className="text-[12px] font-black tracking-[0.35em] text-[#D4AF37]">CHAPTER I — THE FORGING OF THE WARRIOR — COMPLETE</div><div className="mt-2 text-sm text-white/60">The Word awakened. The King was revealed. The Cross redeemed.</div></div>
<div className="mt-6 grid md:grid-cols-3 gap-4">
{RELICS.map(r=>(
<a key={r.slug} href={`/armory/${r.slug}`} className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-zinc-900/40 hover:bg-zinc-900/60 transition text-left block">
<div className="flex justify-between"><span className="text-2xl">{r.icon}</span><span className="text-[8px] font-mono px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">FORGED</span></div>
<div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num}</div>
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
<div className="mt-6 pt-6 border-t border-white/5"><div className="text-[11px] font-mono tracking-[0.3em] text-white/30">CHAPTER II — AWAITS REVELATION</div><div className="mt-2 text-[12px] text-white/40">THE NEXT RELIC WILL BE REVEALED IN ITS TIME.</div></div>
</div>

<div className="mt-12"><div className="text-[11px] font-mono tracking-[0.35em] text-white/30">🔒 THE SEALED RELICS — THEIR NAMES ARE NOT YET SPOKEN</div><div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">{SEALED.map(s=>(<div key={s.num} className="border border-white/5 bg-white/[0.02] rounded-xl p-5 opacity-60 hover:opacity-100 transition"><div className="text-[10px] font-mono">🔒 RELIC {s.num}</div>{s.prophecy && (<div className="mt-3 text-[10px] font-black tracking-widest text-[#D4AF37]/70">{s.prophecy}</div>)}<div className="mt-2 text-[9px] text-white/30 leading-relaxed italic">{s.hint}</div></div>))}</div></div>

<div id="archive" className="mt-14 grid md:grid-cols-3 gap-4">
<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] text-center"><div>🐺</div><div className="mt-2 font-black text-xs">LISTENER — FREE</div><div className="mt-2 text-[11px] text-white/50">Songs • Story • Scripture</div><div className="mt-3 text-[9px] font-mono text-white/20">THE WORD IS FREE</div></div>
<div className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-[#D4AF37]/5 text-center"><div>⚔️</div><div className="mt-2 font-black text-xs text-[#D4AF37]">FORGED SUPPORTER</div><div className="mt-2 text-[11px] text-white/50">Behind scenes • Early access • Artwork</div><div className="mt-3 text-[9px] font-mono text-[#D4AF37]/40">WITNESS THE FORGING</div></div>
<div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] text-center"><div>👑</div><div className="mt-2 font-black text-xs">STORMBREAKERS ARCHIVE</div><div className="mt-2 text-[11px] text-white/50">Instrumentals • Books • Devotionals • Full lore</div><div className="mt-3 text-[9px] font-mono text-white/20">DEPTH IS FORGED</div></div>
</div>

<div className="mt-14 border border-[#D4AF37]/20 rounded-3xl p-8 bg-zinc-900/20 text-center">
<div className="text-[10px] font-mono text-white/30">THE OATH OF THE STORMBREAKERS</div>
<div className="mt-4 text-lg"><span className="text-white/60">We do not fight people.</span> <span className="font-black">We fight darkness.</span></div>
<div className="mt-3 text-[11px] font-mono text-[#D4AF37]/40">Songs are free. Depth is forged.</div>
</div>

<div className="mt-10 flex flex-wrap justify-center gap-3">
<a href="/armory" className="bg-white text-black px-10 py-4 rounded-full font-black text-xs">⚔️ ENTER THE FORGE</a>
<a href="/armory" className="border border-white/15 bg-white/5 px-10 py-4 rounded-full font-black text-xs">📖 READ THE CHRONICLES</a>
</div>

</div>
</div>
)
  }
