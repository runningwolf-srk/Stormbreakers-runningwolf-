"use client"
import {useState} from "react"
export default function Home(){
const [open,setOpen]=useState(false)
return(
<div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30">
<div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">

{/* COVER — CLOSED BOOK WITH AVATAR */}
{!open && (
<div className="min-h-[85vh] flex flex-col items-center justify-center text-center">
<div className="w-[340px] sm:w-[420px] border border-[#D4AF37]/20 rounded-[16px] bg-gradient-to-b from-zinc-900 via-[#0A0A0A] to-black p-8 shadow-[0_0_100px_rgba(212,175,55,0.12)] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.1),transparent_60%)]"></div>
<div className="relative">
{/* AVATAR — REPLACE /public/avatar.jpg with your RunningWolf portrait */}
<div className="mx-auto w-[160px] h-[160px] rounded-full border border-[#D4AF37]/30 bg-zinc-800 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)]">
<img src="/avatar.jpg" alt="Jessy Marquez RunningWolf" className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}}/>
<div className="w-full h-full flex items-center justify-center text-5xl">🐺</div>
</div>
<div className="mt-6 font-black tracking-[0.2em] text-[13px]">JESSY MARQUEZ</div>
<div className="text-[22px] font-black tracking-tighter">RUNNINGWOLF</div>
<div className="mt-3 text-[9px] font-mono tracking-[0.35em] text-[#D4AF37]/60">ONE CANON • NINETEEN RELICS • ONE KING</div>
<div className="mt-6 text-[12px] leading-relaxed text-white/50 italic font-serif max-w-[300px] mx-auto">“A Stormbreaker is one who stands when the storm comes, not because he has no wounds, but because the King has forged him.”</div>
<div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
<div className="mt-4 text-[9px] font-mono text-white/20">Viking is the binding. Scripture is the pages. The King is the center.</div>
</div>
</div>
<button onClick={()=>setOpen(true)} className="mt-10 bg-[#D4AF37] text-black px-14 py-4 rounded-full font-black text-xs tracking-[0.3em] hover:bg-yellow-200 transition shadow-[0_0_30px_rgba(212,175,55,0.3)]">OPEN THE CHRONICLE →</button>
<div className="mt-4 text-[10px] font-mono text-white/20 italic">These pages were not written only to be read. They were written to be walked.</div>
</div>
)}

{/* OPEN BOOK — LEFT = STORY / RIGHT = DOORS */}
{open && (
<div className="animate-in fade-in duration-700">
<div className="grid md:grid-cols-[340px_1fr] gap-6">
{/* LEFT PAGE — AVATAR + PROGRESS */}
<div className="border border-[#D4AF37]/20 rounded-[20px] bg-gradient-to-b from-zinc-900/40 to-black p-7 h-fit sticky top-6">
<div className="flex items-center gap-4">
<div className="w-[64px] h-[64px] rounded-full border border-[#D4AF37]/30 bg-zinc-800 overflow-hidden">
<img src="/avatar.jpg" alt="RunningWolf" className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}}/>
</div>
<div><div className="font-black text-xs tracking-widest">JESSY MARQUEZ</div><div className="text-[11px] text-white/40 font-mono">RUNNINGWOLF</div></div>
</div>
<div className="mt-6 text-[10px] font-mono text-white/30">THE FORGE</div>
<div className="mt-2 text-[12px] font-black">3 / 19 RELICS FORGED</div>
<div className="mt-3 space-y-2 text-[11px] font-mono">
<div className="text-[#D4AF37]">⚔️ RunningWolf Blade — FORGED</div>
<div className="text-[#D4AF37]">👑 Lord of Lords — FORGED</div>
<div className="text-[#FF6B6B]">✝️ Blood of Cross — FORGED</div>
<div className="text-white/20 mt-3">🔒 16 sealed pages remain</div>
</div>
<div className="mt-6 h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#D4AF37]" style={{width:"16%"}}></div></div>
<div className="mt-2 text-[9px] font-mono text-white/30 text-center">3/19 • 16% OF CANON REVEALED</div>
<div className="mt-6 border-t border-white/5 pt-5">
<div className="text-[9px] font-mono text-white/20">READER'S JOURNEY</div>
<div className="mt-2 text-[11px] text-white/50 leading-relaxed italic font-serif">"These pages were not written only to be read. They were written to be walked. The warrior's story becomes your map."</div>
</div>
<button onClick={()=>setOpen(false)} className="mt-6 w-full border border-white/10 rounded-full py-3 text-[10px] font-mono text-white/30">← CLOSE CHRONICLE</button>
</div>

{/* RIGHT PAGE — 4 DOORS + RELICS */}
<div>
<div className="grid grid-cols-2 gap-3">
<a href="/armory" className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-gradient-to-br from-[#D4AF37]/10 to-black hover:from-[#D4AF37]/15 transition text-left">
<div className="text-xl">⚔️</div><div className="mt-2 font-black text-xs tracking-widest">ARMORY</div><div className="text-[10px] font-mono italic text-white/30">Songs become relics</div><div className="mt-2 text-[10px] text-white/40">Forged blade • Music carved into steel • Forge glow</div>
</a>
<a href="/chronicles" className="border border-white/10 rounded-2xl p-6 bg-zinc-900/20 hover:bg-zinc-900/30 transition text-left">
<div className="text-xl">📖</div><div className="mt-2 font-black text-xs tracking-widest">CHRONICLES</div><div className="text-[10px] font-mono italic text-white/30">Scars become testimony</div><div className="mt-2 text-[10px] text-white/40">Open ancient book • Handwritten pages</div>
</a>
<a href="/word" className="border border-white/10 rounded-2xl p-6 bg-zinc-900/20 hover:bg-zinc-900/30 transition text-left">
<div className="text-xl">✝️</div><div className="mt-2 font-black text-xs tracking-widest">WORD</div><div className="text-[10px] font-mono italic text-white/30">Foundation beneath every relic</div><div className="mt-2 text-[10px] text-white/40">Open Bible • Light across pages</div>
</a>
<a href="/books" className="border border-white/10 rounded-2xl p-6 bg-zinc-900/20 hover:bg-zinc-900/30 transition text-left">
<div className="text-xl">📚</div><div className="mt-2 font-black text-xs tracking-widest">BOOKS</div><div className="text-[10px] font-mono italic text-white/30">The archive of the complete saga</div><div className="mt-2 text-[10px] text-white/40">Leather-bound volumes • Scrolls</div>
</a>
</div>

{/* PAGES I-III — WITH SOUND */}
<div className="mt-6 space-y-4">
<div className="border border-white/10 rounded-2xl p-6 bg-black">
<div className="flex justify-between"><span className="text-[9px] font-mono text-white/30">PAGE I — THE AWAKENING</span><span className="text-[8px] font-mono px-2 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">FORGED</span></div>
<div className="mt-2 font-black">⚔️ RUNNINGWOLF BLADE — The Word awakens</div>
<div className="mt-2 text-[11px] text-white/40">Worn Bible • Blade across pages • Hebrews 4:12 engraved</div>
<div className="mt-2 text-[10px] font-mono text-[#D4AF37]/40">SOUND: War drums • Viking choir • Heavy guitars • Scripture spoken</div>
<a href="/armory/runningwolf-blade" className="mt-3 inline-block text-[10px] font-mono text-white/50 underline">READ PAGE I →</a>
</div>
<div className="border border-white/10 rounded-2xl p-6 bg-zinc-900/10">
<div className="flex justify-between"><span className="text-[9px] font-mono text-white/30">PAGE II — THE REVELATION</span><span className="text-[8px] font-mono px-2 py-1 rounded-full bg-white/10 text-white/40">FORGED</span></div>
<div className="mt-2 font-black">👑 LORD OF LORDS — The King revealed</div>
<div className="mt-2 text-[11px] text-white/40">Crown • Throne • Battlefield after storm</div>
<div className="mt-2 text-[10px] font-mono text-white/30">SOUND: Royal choir • Orchestral rise • Worship anthem</div>
<a href="/armory/lord-of-lords" className="mt-3 inline-block text-[10px] font-mono text-white/50 underline">READ PAGE II →</a>
</div>
<div className="border border-[#8B0000]/20 rounded-2xl p-6 bg-[#8B0000]/5">
<div className="flex justify-between"><span className="text-[9px] font-mono text-[#FF6B6B]/50">PAGE III — THE REDEMPTION</span><span className="text-[8px] font-mono px-2 py-1 rounded-full bg-[#8B0000]/30 text-[#FF6B6B]">FORGED — CHAPTER I COMPLETE</span></div>
<div className="mt-2 font-black">✝️ BLOOD OF CROSS — Victory purchased</div>
<div className="mt-2 text-[11px] text-white/40">Wooden cross • Torn parchment • Light through darkness</div>
<div className="mt-2 text-[10px] font-mono text-[#FF6B6B]/50">SOUND: Dark beginning • Broken piano • Choir explosion at Cross</div>
<a href="/armory/blood-of-cross" className="mt-3 inline-block text-[10px] font-mono text-[#FF6B6B]/60 underline">READ PAGE III →</a>
</div>
</div>

<div className="mt-6 border border-white/5 rounded-2xl p-6 bg-white/[0.02] text-center">
<div className="text-[11px] font-black tracking-widest">CHAPTER II — THE TRIAL OF THE WARRIOR</div>
<div className="mt-2 text-[11px] text-white/40 italic">The warrior has received the Word. Bowed before the King. Been redeemed by the Cross. Now must walk through wilderness, face shadow, keep oath.</div>
<div className="mt-3 flex flex-wrap justify-center gap-2 text-[9px] font-mono"><span className="border border-[#D4AF37]/20 px-3 py-1 rounded-full text-[#D4AF37]">🏜️ IV Wilderness</span><span className="border border-white/10 px-3 py-1 rounded-full text-white/30">🏮 V Shadow</span><span className="border border-white/10 px-3 py-1 rounded-full text-white/30">🤝 VI Oath</span></div>
</div>

</div>
</div>
</div>
)}

</div>
</div>
)
}
