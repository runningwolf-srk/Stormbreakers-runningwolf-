"use client"
import {useState} from "react"
export default function Home(){
const [open,setOpen]=useState(false)
return(
<div className="min-h-screen bg-[#050505] text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">

{/* COVER — BOOK CLOSED */}
{!open && (
<div className="min-h-[85vh] flex flex-col items-center justify-center text-center">
<div className="w-[300px] h-[420px] sm:w-[380px] sm:h-[520px] border border-[#D4AF37]/30 rounded-[12px] bg-gradient-to-br from-zinc-900 via-black to-zinc-900 shadow-[0_0_80px_rgba(212,175,55,0.15)] p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08),transparent_70%)]"></div>
<div className="relative">
<div className="text-[9px] font-mono tracking-[0.4em] text-[#D4AF37]/60">ONE CANON • NINETEEN RELICS • ONE KING</div>
<div className="mt-8 text-[56px] font-black leading-[0.85] tracking-tighter">STORM<br/>BREAK<br/>ERS</div>
<div className="mt-3 font-serif italic text-white/40">THE OPEN CHRONICLE</div>
</div>
<div className="relative">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
<div className="mt-6 text-[10px] font-mono text-white/20 leading-relaxed">Viking is the binding — iron, leather, storms, wolves, craftsmanship.<br/>Scripture is the pages.<br/>The King is the center.</div>
<div className="mt-4 text-[9px] font-mono text-[#D4AF37]/40">3/19 RELICS FORGED • 16% OF THE CANON REVEALED</div>
</div>
</div>
<button onClick={()=>setOpen(true)} className="mt-10 bg-[#D4AF37] text-black px-12 py-4 rounded-full font-black text-xs tracking-[0.3em] hover:bg-yellow-200 transition">OPEN THE CHRONICLE →</button>
<div className="mt-6 text-[10px] font-mono text-white/20">Every relic tells one story. Every story points to one King.</div>
</div>
)}

{/* INSIDE — BOOK OPEN */}
{open && (
<div className="animate-in fade-in duration-700">
<div className="text-center">
<div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[9px] font-mono tracking-[0.35em] text-[#D4AF37]/70">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</div>
<div className="mt-6 max-w-2xl mx-auto border border-[#D4AF37]/20 rounded-2xl p-5 bg-[#D4AF37]/5">
<div className="text-[10px] font-mono text-[#D4AF37]/70">WHAT IS A STORMBREAKER?</div>
<div className="mt-2 text-[14px] text-white/70 italic font-serif">“A Stormbreaker is one who stands when the storm comes, not because he has no wounds, but because the King has forged him.”</div>
</div>
</div>

<div className="mt-10 grid md:grid-cols-4 gap-3">
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>⚔️</div><div className="mt-2 font-black text-xs">ARMORY</div><div className="text-[10px] font-mono italic text-white/30">The place where songs become weapons.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>📖</div><div className="mt-2 font-black text-xs">CHRONICLES</div><div className="text-[10px] font-mono italic text-white/30">The place where scars become testimony.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>✝️</div><div className="mt-2 font-black text-xs">WORD</div><div className="text-[10px] font-mono italic text-white/30">The foundation beneath every relic.</div></div>
<div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div>📚</div><div className="mt-2 font-black text-xs">BOOKS</div><div className="text-[10px] font-mono italic text-white/30">The archive of the complete saga.</div></div>
</div>

{/* PAGE I — WITH SOUND + KEEPER NOTES */}
<div className="mt-12 border border-white/10 rounded-[28px] p-8 sm:p-10 bg-gradient-to-br from-zinc-900/30 to-black">
<div className="text-[10px] font-mono tracking-[0.4em] text-white/30">PAGE I — THE AWAKENING</div>
<h2 className="mt-3 text-3xl font-black">⚔️ RUNNINGWOLF BLADE</h2>
<div className="mt-2 text-[11px] font-mono text-[#D4AF37]/70">The Word awakens the warrior.</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="md:col-span-2">
<div className="text-[9px] font-mono text-white/20">THE PAGE OPENS</div><div className="mt-2 text-sm text-white/60 font-serif">Worn Bible. Forged blade resting across pages. Hebrews 4:12 engraved into steel.</div>
<div className="mt-4 text-[9px] font-mono text-white/20">STORY</div><div className="mt-1 text-sm text-white/50">Before warrior carried weapon, he carried Word.</div>
<div className="mt-4 text-[9px] font-mono text-[#D4AF37]/40">SOUND</div><div className="mt-1 text-xs text-white/50">War drums • Low Viking choir • Heavy guitars • Scripture spoken before drop</div>
<div className="mt-4 border border-[#D4AF37]/10 bg-[#D4AF37]/5 rounded-xl p-4"><div className="text-[9px] font-mono text-[#D4AF37]/50">KEEPER'S NOTES</div><div className="mt-1 text-xs text-white/50 italic">Forged when everything stripped away. No image. No hype. Just Scripture cutting through dark until warrior stood where wanderer fell.</div></div>
</div>
<div className="border border-[#D4AF37]/20 bg-black rounded-2xl p-5">
<div className="text-[9px] font-mono text-white/20">SYMBOL</div><div className="text-sm italic text-white/70 mt-1">Blade engraved Hebrews 4:12</div>
<div className="mt-3 text-[9px] font-mono text-white/20">SCRIPTURE</div><div className="text-xs text-[#D4AF37]/70 mt-1">Hebrews 4:12</div>
<div className="mt-3 text-[9px] font-mono text-white/20">STATUS</div><div className="text-[11px] font-mono text-[#D4AF37] mt-1">⚔️ RELIC I — FORGED</div>
<a href="/armory/runningwolf-blade" className="mt-4 inline-block bg-white text-black px-5 py-2.5 rounded-full font-black text-[10px]">READ PAGE I →</a>
</div>
</div>
</div>

{/* PAGE II */}
<div className="mt-4 border border-white/10 rounded-[28px] p-8 sm:p-10 bg-zinc-900/10">
<div className="text-[10px] font-mono tracking-[0.4em] text-white/30">PAGE II — THE REVELATION</div>
<h2 className="mt-3 text-3xl font-black">👑 LORD OF LORDS</h2>
<div className="mt-2 text-[11px] font-mono text-white/40">The warrior discovers the true King.</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="md:col-span-2">
<div className="text-[9px] font-mono text-white/20">THE PAGE OPENS</div><div className="mt-2 text-sm text-white/60 font-serif">Crown. Throne. Battlefield after storm.</div>
<div className="mt-4 text-[9px] font-mono text-white/20">SOUND</div><div className="mt-1 text-xs text-white/50">Royal choir • Massive orchestral rise • Worship anthem</div>
<div className="mt-4 border border-white/10 bg-white/5 rounded-xl p-4"><div className="text-[9px] font-mono text-white/30">KEEPER'S NOTES</div><div className="mt-1 text-xs text-white/40 italic">Written on knees, not feet. Surrender became weapon. Throne was never empty.</div></div>
</div>
<div className="border border-white/10 bg-black rounded-2xl p-5">
<div className="text-[9px] font-mono text-white/20">SYMBOL</div><div className="text-sm italic text-white/70 mt-1">Crown above every crown</div>
<div className="mt-3 text-[9px] font-mono text-white/20">STATUS</div><div className="text-[11px] font-mono text-[#D4AF37] mt-1">👑 RELIC II — FORGED</div>
<a href="/armory/lord-of-lords" className="mt-4 inline-block border border-white/15 px-5 py-2.5 rounded-full font-black text-[10px]">READ PAGE II →</a>
</div>
</div>
</div>

{/* PAGE III */}
<div className="mt-4 border border-[#8B0000]/20 rounded-[28px] p-8 sm:p-10 bg-gradient-to-br from-[#8B0000]/10 to-black">
<div className="text-[10px] font-mono tracking-[0.4em] text-[#FF6B6B]/50">PAGE III — THE REDEMPTION</div>
<h2 className="mt-3 text-3xl font-black">✝️ BLOOD OF CROSS</h2>
<div className="mt-2 text-[11px] font-mono text-[#FF6B6B]/70">The Cross becomes the turning point.</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="md:col-span-2">
<div className="text-[9px] font-mono text-white/20">THE PAGE OPENS</div><div className="mt-2 text-sm text-white/60 font-serif">Wooden cross. Torn parchment. Light breaking through darkness.</div>
<div className="mt-4 text-[9px] font-mono text-[#FF6B6B]/40">SOUND</div><div className="mt-1 text-xs text-white/50">Dark beginning • Broken piano • Choir explosion at Cross</div>
<div className="mt-4 border border-[#8B0000]/20 bg-[#8B0000]/5 rounded-xl p-4"><div className="text-[9px] font-mono text-[#FF6B6B]/50">KEEPER'S NOTES</div><div className="mt-1 text-xs text-white/50 italic">Lights off, cross sketch on wall. No warrior stands without blood not his own. Grace taught depth while forged. Chapter I ends where warrior must begin — at Cross.</div></div>
</div>
<div className="border border-[#8B0000]/20 bg-black rounded-2xl p-5">
<div className="text-[9px] font-mono text-white/20">SYMBOL</div><div className="text-sm italic text-white/70 mt-1">Cross marked by sacrifice</div>
<div className="mt-3 text-[9px] font-mono text-white/20">STATUS</div><div className="text-[11px] font-mono text-[#FF6B6B] mt-1">✝️ RELIC III — BLOOD OF CROSS — FORGED</div>
<a href="/armory/blood-of-cross" className="mt-4 inline-block bg-white text-black px-5 py-2.5 rounded-full font-black text-[10px]">READ PAGE III →</a>
</div>
</div>
</div>

{/* CHAPTER II */}
<div className="mt-10 border border-white/10 rounded-3xl p-10 bg-black text-center">
<div className="text-[12px] font-black tracking-[0.4em] text-white">CHAPTER II — THE TRIAL OF THE WARRIOR</div>
<div className="mt-5 max-w-xl mx-auto text-[14px] text-white/60 italic font-serif">The warrior has received the Word.<br/>He has bowed before the King.<br/>He has been redeemed by the Cross.<br/><span className="text-white font-bold not-italic mt-3 block">Now he must walk through wilderness, face shadow, keep oath.</span></div>
<div className="mt-6 grid md:grid-cols-3 gap-3 text-left">
<div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-xl p-4"><div className="text-[10px] font-mono">🔒 PAGE IV</div><div className="mt-1 font-black text-xs">THE WILDERNESS</div><div className="text-[10px] text-white/40">Where endurance is forged.</div></div>
<div className="border border-white/5 bg-white/[0.02] rounded-xl p-4"><div className="text-[10px] font-mono">🔒 PAGE V</div><div className="mt-1 font-black text-xs">THE SHADOW</div><div className="text-[10px] text-white/40">Where faith survives darkness.</div></div>
<div className="border border-white/5 bg-white/[0.02] rounded-xl p-4"><div className="text-[10px] font-mono">🔒 PAGE VI</div><div className="mt-1 font-black text-xs">THE OATH</div><div className="text-[10px] text-white/40">Where loyalty is tested.</div></div>
</div>
<div className="mt-6 text-[10px] font-mono text-[#D4AF37]/40">THE NEXT PAGES ARE SEALED — REVEALED IN ITS TIME</div>
</div>

<div className="mt-10 text-center">
<button onClick={()=>setOpen(false)} className="border border-white/10 rounded-full px-8 py-3 text-[10px] font-mono text-white/30">← CLOSE THE CHRONICLE</button>
</div>

</div>
)}

</div>
</div>
)
}
