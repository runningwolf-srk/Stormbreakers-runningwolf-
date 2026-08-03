"use client"
export default function Home(){
return(
<div className="min-h-screen bg-[#050505] text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">

{/* HEADER — ONE CANON */}
<div className="text-center">
<div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[9px] font-mono tracking-[0.35em] text-[#D4AF37]/70">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
<h1 className="text-[44px] sm:text-[72px] font-black tracking-tighter mt-8 leading-[0.85]">STORMBREAKERS:<br/><span className="text-white/20 font-serif italic font-normal tracking-normal">THE OPEN CHRONICLE</span></h1>
<div className="mt-4 text-[11px] font-mono tracking-[0.3em] text-white/30">RUNNINGWOLF</div>
<div className="mt-8 max-w-2xl mx-auto border border-[#D4AF37]/20 rounded-2xl p-6 bg-[#D4AF37]/5">
<div className="text-[10px] font-mono tracking-widest text-[#D4AF37]/70">WHAT IS A STORMBREAKER?</div>
<div className="mt-2 text-[14px] leading-relaxed text-white/70 italic font-serif">“A Stormbreaker is one who stands when the storm comes, not because he has no wounds, but because the King has forged him.”</div>
</div>
<div className="mt-8 mx-auto max-w-xl border border-[#D4AF37]/20 rounded-2xl p-6 bg-gradient-to-b from-[#D4AF37]/10 to-zinc-900/20">
<div className="flex justify-between text-[10px] font-mono"><span className="text-white/50">FORGE PROGRESS</span><span className="text-[#D4AF37]">3/19 RELICS FORGED • 16% OF THE CANON REVEALED</span></div>
<div className="mt-3 h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-100" style={{width:"16%"}}></div></div>
<div className="mt-3 text-[10px] font-mono text-[#D4AF37] text-center">⚔️ 3 FORGED • 🔒 16 SEALED • ✝️ RELIC III — BLOOD OF CROSS — FORGED</div>
</div>
</div>

{/* FOUR ENTRANCES — PLACES */}
<div className="mt-14 grid md:grid-cols-4 gap-3">
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>⚔️</div><div className="mt-2 font-black text-xs tracking-widest">ARMORY</div><div className="text-[10px] font-mono text-white/30 italic">The place where songs become weapons.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>📖</div><div className="mt-2 font-black text-xs tracking-widest">CHRONICLES</div><div className="text-[10px] font-mono text-white/30 italic">The place where scars become testimony.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>✝️</div><div className="mt-2 font-black text-xs tracking-widest">WORD</div><div className="text-[10px] font-mono text-white/30 italic">The foundation beneath every relic.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>📚</div><div className="mt-2 font-black text-xs tracking-widest">BOOKS</div><div className="text-[10px] font-mono text-white/30 italic">The archive of the complete saga.</div></div>
</div>

{/* CHAPTER I — THE OPEN BOOK */}
<div className="mt-16 border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-7 text-center">
<div className="text-[12px] font-black tracking-[0.35em] text-[#D4AF37]">CHAPTER I — THE FORGING OF THE WARRIOR — COMPLETE</div>
<div className="mt-2 text-sm text-white/60 font-serif italic">Every page was sealed until it was lived.</div>
</div>

{/* PAGE I */}
<div className="mt-6 border border-white/10 rounded-[28px] p-8 sm:p-10 bg-gradient-to-br from-zinc-900/30 via-black to-[#D4AF37]/5">
<div className="text-[10px] font-mono tracking-[0.4em] text-white/30">PAGE I — THE AWAKENING</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-black">⚔️ RUNNINGWOLF BLADE</h2>
<div className="mt-2 text-[11px] text-[#D4AF37]/70 font-mono">The Word awakens the warrior.</div>
<div className="mt-6 grid md:grid-cols-2 gap-8">
<div>
<div className="text-[9px] font-mono text-white/20 tracking-widest">THE PAGE OPENS</div>
<div className="mt-3 text-sm text-white/60 leading-relaxed font-serif">A worn Bible. A forged blade resting across the pages. Hebrews 4:12 engraved into steel.</div>
<div className="mt-5 text-[9px] font-mono text-white/20 tracking-widest">STORY</div>
<div className="mt-2 text-sm text-white/50 leading-relaxed">Before the warrior carried a weapon, he carried the Word.</div>
</div>
<div className="border border-[#D4AF37]/20 bg-black rounded-2xl p-5">
<div className="text-[9px] font-mono text-[#D4AF37]/50">SYMBOL</div><div className="text-sm text-white/70 mt-1 italic">Blade engraved with Hebrews 4:12</div>
<div className="mt-4 text-[9px] font-mono text-white/20">SCRIPTURE</div><div className="text-xs text-[#D4AF37]/70 mt-1">Hebrews 4:12 — Sharper than any double-edged sword.</div>
<div className="mt-4 text-[9px] font-mono text-white/20">RELIC STATUS</div><div className="text-[11px] font-mono text-[#D4AF37] mt-1">⚔️ RELIC I — FORGED</div>
<a href="/armory/runningwolf-blade" className="mt-5 inline-block bg-white text-black px-6 py-3 rounded-full font-black text-[10px] tracking-widest">READ PAGE I →</a>
</div>
</div>
</div>

{/* PAGE II */}
<div className="mt-4 border border-white/10 rounded-[28px] p-8 sm:p-10 bg-zinc-900/10">
<div className="text-[10px] font-mono tracking-[0.4em] text-white/30">PAGE II — THE REVELATION</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-black">👑 LORD OF LORDS</h2>
<div className="mt-2 text-[11px] text-[#D4AF37]/70 font-mono">The warrior discovers the true King.</div>
<div className="mt-6 grid md:grid-cols-2 gap-8">
<div>
<div className="text-[9px] font-mono text-white/20 tracking-widest">THE PAGE OPENS</div>
<div className="mt-3 text-sm text-white/60 leading-relaxed font-serif">A crown. A throne. A battlefield after the storm. Open Scripture beside it.</div>
<div className="mt-5 text-[9px] font-mono text-white/20 tracking-widest">STORY</div>
<div className="mt-2 text-sm text-white/50 leading-relaxed">The warrior was never meant to sit on the throne. He was meant to bow before it.</div>
</div>
<div className="border border-white/10 bg-black rounded-2xl p-5">
<div className="text-[9px] font-mono text-white/20">SYMBOL</div><div className="text-sm text-white/70 mt-1 italic">Crown above every crown</div>
<div className="mt-4 text-[9px] font-mono text-white/20">SCRIPTURE</div><div className="text-xs text-white/50 mt-1">Revelation 19:16 — KING OF KINGS AND LORD OF LORDS.</div>
<div className="mt-4 text-[9px] font-mono text-white/20">RELIC STATUS</div><div className="text-[11px] font-mono text-[#D4AF37] mt-1">👑 RELIC II — FORGED</div>
<a href="/armory/lord-of-lords" className="mt-5 inline-block border border-white/15 bg-white/5 px-6 py-3 rounded-full font-black text-[10px] tracking-widest">READ PAGE II →</a>
</div>
</div>
</div>

{/* PAGE III */}
<div className="mt-4 border border-[#8B0000]/20 rounded-[28px] p-8 sm:p-10 bg-gradient-to-br from-[#8B0000]/10 via-black to-black">
<div className="text-[10px] font-mono tracking-[0.4em] text-[#FF6B6B]/50">PAGE III — THE REDEMPTION</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-black">✝️ BLOOD OF CROSS</h2>
<div className="mt-2 text-[11px] text-[#FF6B6B]/70 font-mono">The Cross becomes the turning point.</div>
<div className="mt-6 grid md:grid-cols-2 gap-8">
<div>
<div className="text-[9px] font-mono text-white/20 tracking-widest">THE PAGE OPENS</div>
<div className="mt-3 text-sm text-white/60 leading-relaxed font-serif">A wooden cross. Torn parchment. Light breaking through darkness.</div>
<div className="mt-5 text-[9px] font-mono text-white/20 tracking-widest">STORY</div>
<div className="mt-2 text-sm text-white/50 leading-relaxed">The warrior learns victory was purchased before the battle began.</div>
</div>
<div className="border border-[#8B0000]/20 bg-black rounded-2xl p-5">
<div className="text-[9px] font-mono text-white/20">SYMBOL</div><div className="text-sm text-white/70 mt-1 italic">Cross marked by sacrifice</div>
<div className="mt-4 text-[9px] font-mono text-white/20">SCRIPTURE</div><div className="text-xs text-white/50 mt-1">Colossians 1:20 — Peace through his blood, shed on the cross.</div>
<div className="mt-4 text-[9px] font-mono text-white/20">RELIC STATUS</div><div className="text-[11px] font-mono text-[#FF6B6B] mt-1">✝️ RELIC III — BLOOD OF CROSS — FORGED — CHAPTER I COMPLETE</div>
<a href="/armory/blood-of-cross" className="mt-5 inline-block bg-white text-black px-6 py-3 rounded-full font-black text-[10px] tracking-widest">READ PAGE III →</a>
</div>
</div>
</div>

{/* CHAPTER II */}
<div className="mt-10 border border-white/10 rounded-3xl p-10 bg-black text-center">
<div className="text-[12px] font-black tracking-[0.4em] text-white">CHAPTER II — THE TRIAL OF THE WARRIOR</div>
<div className="mt-6 max-w-xl mx-auto text-[14px] leading-relaxed text-white/60 italic font-serif">
The warrior has received the Word.<br/>
He has bowed before the King.<br/>
He has been redeemed by the Cross.<br/>
<span className="text-white font-bold not-italic mt-4 block">Now he must walk through the wilderness, face the shadow, and keep the oath.</span>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-3 text-left">
<div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-xl p-5"><div className="text-[10px] font-mono">🔒 PAGE IV</div><div className="mt-2 font-black text-xs">THE WILDERNESS</div><div className="mt-1 text-[10px] text-white/40">The chapter where endurance is forged.</div><div className="mt-2 text-[9px] text-white/20">🏜️ Cracked stone beneath rising sun</div></div>
<div className="border border-white/5 bg-white/[0.02] rounded-xl p-5"><div className="text-[10px] font-mono">🔒 PAGE V</div><div className="mt-2 font-black text-xs">THE SHADOW</div><div className="mt-1 text-[10px] text-white/40">The chapter where faith survives the darkness.</div><div className="mt-2 text-[9px] text-white/20">🏮 Lantern burning inside darkness</div></div>
<div className="border border-white/5 bg-white/[0.02] rounded-xl p-5"><div className="text-[10px] font-mono">🔒 PAGE VI</div><div className="mt-2 font-black text-xs">THE OATH</div><div className="mt-1 text-[10px] text-white/40">The chapter where loyalty is tested.</div><div className="mt-2 text-[9px] text-white/20">🤝 Scarred hands clasped over blade</div></div>
</div>
<div className="mt-6 text-[10px] font-mono text-[#D4AF37]/40">THE NEXT PAGES ARE SEALED — THE NEXT RELIC WILL BE REVEALED IN ITS TIME</div>
</div>

{/* OATH */}
<div className="mt-14 border border-[#D4AF37]/20 rounded-3xl p-10 bg-zinc-900/20 text-center">
<div className="text-[10px] font-mono text-white/30 tracking-widest">THE OATH OF THE OPEN CHRONICLE</div>
<div className="mt-3 text-[10px] font-mono text-white/20 max-w-2xl mx-auto leading-relaxed">We stand when storms rise. We carry wounds without surrender. We walk in truth. We bow before the King. We fight darkness with light. We remember the Cross. We endure until the end.</div>
<div className="mt-6 text-xl"><span className="text-white/60">We do not fight people.</span> <span className="font-black">We fight darkness.</span></div>
<div className="mt-4 text-[10px] font-mono text-white/20 italic">Viking is the binding — iron, leather, storms, wolves, craftsmanship. Scripture is the pages. The King is the center.</div>
<div className="mt-4 text-[11px] font-mono text-[#D4AF37]/50">Every relic tells one story. Every story points to one King. — Songs are free. Depth is forged.</div>
</div>

</div>
</div>
)
}
