"use client"
import {useParams} from "next/navigation"
const DATA:any={
"runningwolf-blade":{
num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",status:"FORGED",
youtube:"CZ6tylWuerQ",
verse:"Hebrews 4:12 — For the word of God is alive and active. Sharper than any double-edged sword.",
symbol:"The blade engraved with Hebrews 4:12 — a sword that awakens before it wounds.",
meaning:"Before the warrior can fight, he must hear the Word that awakens him. The foundation is not hype. It is truth.",
testimony:"Forged in the season when everything else was stripped away, leaving only the Word. No image. No hype. No noise. Just Scripture cutting through the dark until a warrior stood up where a wanderer had fallen."
},
"lord-of-lords":{
num:"II",title:"LORD OF LORDS",icon:"👑",status:"FORGED",
youtube:"9vP0NPrEv9s",
verse:"Revelation 19:16 — On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
symbol:"The crown above every crown — not earned, but bowed to.",
meaning:"The warrior discovers the throne was never empty. The battle was never about becoming king — it was about bowing to Him.",
testimony:"After the blade awakened me, I kept asking — now what do I fight for? God answered not with a stage, but with a throne. LORD OF LORDS was written on my knees, not on my feet. Surrender became the weapon."
},
"blood-of-cross":{
num:"III",title:"BLOOD OF CROSS",icon:"✝️",status:"FORGED",
youtube:"4lcbjsNLlzo",
verse:"Colossians 1:20 — Through him to reconcile all things, by making peace through his blood, shed on the cross.",
symbol:"The cross marked by sacrifice — victory purchased by blood not his own.",
meaning:"The warrior finally understands: redemption is not earned — it is received. The cross is not a symbol of defeat. It is the forge where victory was purchased.",
testimony:"Forged in the studio, lights off, cross sketch on the wall. No warrior stands without blood that isn't his own. Grace taught me its depth while this song was being forged. Chapter I ends where every warrior must begin — at the Cross."
}
}
export default function P(){
const {slug}=useParams()
const r=DATA[slug as string]
if(!r) return(
<div className="min-h-screen bg-black text-white flex items-center justify-center p-10 text-center">
<div>
<div className="text-5xl">🔒</div>
<div className="mt-6 font-black tracking-widest">RELIC {String(slug).toUpperCase()}</div>
<div className="mt-2 text-white/40 text-sm">THE NEXT CHAPTER HAS NOT BEEN FORGED</div>
<div className="mt-3 text-[10px] font-mono text-white/20">🔒 Symbol not yet revealed — SEALED RELIC — PROPHECY AWAITS</div>
<a href="/" className="mt-8 inline-block border border-white/10 rounded-full px-6 py-3 text-xs">← RETURN TO FORGE</a>
</div>
</div>
)
return(
<div className="min-h-screen bg-black text-white max-w-4xl mx-auto px-4 sm:px-6 py-12">
<div className="border border-white/10 rounded-[28px] overflow-hidden bg-gradient-to-b from-zinc-900/40 to-black">
<div className="p-8 sm:p-10">
<div className="flex justify-between items-center">
<div className="text-[10px] font-mono text-white/30">RELIC {r.num} • CHAPTER I — THE FORGING OF THE WARRIOR • ⚔️ {r.status}</div>
<div className="text-[9px] font-mono px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">FORGED</div>
</div>
<h1 className="text-[36px] sm:text-6xl font-black mt-6 leading-[0.9]"><span className="mr-3">{r.icon}</span>{r.title}</h1>
<div className="mt-6 border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-xl p-4"><div className="text-[9px] font-mono text-[#D4AF37]/60 tracking-widest">SYMBOL</div><div className="text-[13px] text-white/70 mt-1 italic">{r.symbol}</div></div>
<div className="mt-4 text-sm text-[#D4AF37]/70 leading-relaxed">{r.verse}</div>
</div>
<div className="px-6 pb-8">
<div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
<iframe className="w-full h-full" src={`https://www.youtube.com/embed/${r.youtube}`} title={r.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-4">
<div className="border border-white/10 rounded-2xl p-6 bg-black"><div className="text-[10px] font-mono text-white/30 tracking-widest">MEANING</div><div className="mt-3 text-[13px] text-white/70 leading-relaxed">{r.meaning}</div></div>
<div className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-[#D4AF37]/5"><div className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">TESTIMONY</div><div className="mt-3 text-[13px] text-white/60 leading-relaxed">{r.testimony}</div></div>
</div>
<div className="mt-10 border border-white/5 rounded-2xl p-6 bg-white/[0.02] text-center">
<div className="text-[9px] font-mono text-white/20">RELIC CARD — TEMPLATE 100/100</div>
<div className="mt-2 text-[10px] font-mono text-white/30">SYMBOL → SCRIPTURE → MEANING → TESTIMONY → SONG → VIDEO</div>
<div className="mt-2 text-[9px] font-mono text-[#D4AF37]/30">Every relic tells one story. Every story points to one King.</div>
</div>
<div className="mt-10 text-center"><a href="/" className="bg-white text-black px-10 py-4 rounded-full font-black text-xs tracking-widest inline-block">← RETURN TO FORGE — ✝️ RELIC III — BLOOD OF CROSS — FORGED</a></div>
</div>
)
}
