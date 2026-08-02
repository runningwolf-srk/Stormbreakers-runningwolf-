import {CANON} from "@/data/constants"
export default function Home(){ return <div className="min-h-screen bg-black"><div className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
<div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full inline-block px-5 py-1.5 text-[10px] font-mono tracking-widest text-[#D4AF37]/70">{CANON.TAGLINE}</div>
<h1 className="text-7xl font-black tracking-tighter mt-10">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
<p className="mt-6 text-white/60">{CANON.SEASON1}</p>
<div className="mt-6 border border-white/10 rounded-2xl p-4 inline-block text-[11px] font-mono">{CANON.STATUS} — 11% FORGED</div>
<div className="mt-10 grid md:grid-cols-3 gap-4 text-left">
<div className="border border-white/10 rounded-2xl p-6"><div className="font-black text-xs">⚔️ RELIC I — RUNNINGWOLF BLADE</div><div className="text-[11px] text-white/40 mt-1">The Word → The Awakening — Hebrews 4:12</div></div>
<div className="border border-white/10 rounded-2xl p-6"><div className="font-black text-xs">👑 RELIC II — LORD OF LORDS</div><div className="text-[11px] text-white/40 mt-1">The King → The Revelation — Revelation 19:16</div></div>
<div className="border border-orange-500/20 bg-orange-500/5 rounded-2xl p-6"><div className="font-black text-xs">✝️ RELIC III — BLOOD OF CROSS</div><div className="text-[11px] text-orange-300/60 mt-1">The Cross → The Redemption — Colossians 1:20 — CURRENTLY BEING FORGED</div></div>
</div>
<a href="/armory" className="mt-10 inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest">⚔️ ENTER THE ARMORY →</a>
<div className="mt-16 border border-white/10 rounded-3xl p-8"><div className="text-[10px] font-mono text-white/30">STORMBREAKERS OATH</div><div className="mt-4 space-y-1">{CANON.OATH.map(l=><div key={l}>{l}</div>)}</div><div className="mt-6 text-[11px] font-mono text-[#D4AF37]/60">{CANON.CLOSING}</div></div>
</div></div> }
