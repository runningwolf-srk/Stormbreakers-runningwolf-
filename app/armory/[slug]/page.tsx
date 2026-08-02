"use client"
import {useParams} from "next/navigation"
const DATA:any={
"runningwolf-blade":{
num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",status:"FORGED",
verse:"Hebrews 4:12 — For the word of God is alive and active. Sharper than any double-edged sword.",
symbol:"The blade engraved with Hebrews 4:12 — a sword that awakens before it wounds.",
meaning:"Before the warrior can fight, he must hear the Word that awakens him. The foundation is not hype. It is truth.",
testimony:"Forged in the season when everything else was stripped away, leaving only the Word. No image. No hype. No noise. Just Scripture cutting through the dark until a warrior stood up where a wanderer had fallen."
},
"lord-of-lords":{
num:"II",title:"LORD OF LORDS",icon:"👑",status:"FORGED",
verse:"Revelation 19:16 — On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
symbol:"The crown above every crown — not earned, but bowed to.",
meaning:"The warrior discovers the throne was never empty. The battle was never about becoming king — it was about bowing to Him.",
testimony:"After the blade awakened me, I kept asking — now what do I fight for? God answered not with a stage, but with a throne. LORD OF LORDS was written on my knees, not on my feet. Surrender became the weapon."
},
"blood-of-cross":{
num:"III",title:"BLOOD OF CROSS",icon:"✝️",status:"FORGING",
verse:"Colossians 1:20 — Through him to reconcile all things, by making peace through his blood, shed on the cross.",
symbol:"The cross marked by sacrifice — victory purchased by blood not his own.",
meaning:"The warrior finally understands: redemption is not earned — it is received. The cross is not a symbol of defeat. It is the forge where victory was purchased.",
testimony:"The hardest relic to forge. I wanted to make the cross cinematic without making it cheap. Ended up weeping in the studio, lights off, cross sketch on the wall. No warrior stands without blood that isn't his own. This relic is still being forged — because grace is still teaching me how deep it goes."
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
<div className="mt-3 text-[10px] font-mono text-white/20">🔒 SYMBOL YET TO BE FORGED</div>
<a href="/" className="mt-8 inline-block border border-white/10 rounded-full px-6 py-3 text-xs">← RETURN TO FORGE</a>
</div>
</div>
)
return(
<div className="min-h-screen bg-black text-white max-w-4xl mx-auto px-4 sm:px-6 py-12">
<div className="border border-white/10 rounded-[28px] overflow-hidden bg-gradient-to-b from-zinc-900/40 to-black">
<div className="p-8 sm:p-10">
<div className="flex justify-between items-center">
<div className="text-[10px] font-mono text-white/30">RELIC {r.num} • CHAPTER I • {r.status==="FORGING"?"🔥 FORGING":"⚔️ FORGED"}</div>
<div className={`text-[9px] font-mono px-3 py-1 rounded-full ${r.status==="FORGING"?"bg-orange-500/20 text-orange-300":"bg-white/10 text-white/60"}`}>{r.status}</div>
</div>
<h1 className="text-[36px] sm:text-6xl font-black mt-6 leading-[0.9]"><span className="mr-3">{r.icon}</span>{r.title}</h1>
<div className="mt-6 border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-xl p-4"><div className="text-[9px] font-mono text-[#D4AF37]/60 tracking-widest">SYMBOL</div><div className="text-[13px] text-white/70 mt-1 italic">{r.symbol}</div></div>
<div className="mt-4 text-sm text-[#D4AF37]/70 leading-relaxed">{r.verse}</div>
</div>
<div className="px-6 pb-8">
<div className="aspect-video bg-black border border-white/10 rounded-2xl flex items-center justify-center text-white/20 text-xs font-mono text-center px-4">
{r.status==="FORGING"?"🔥 THIS RELIC IS STILL BEING FORGED — VIDEO COMING SOON":"▶ VIDEO FORGING — COMING SOON"}
</div>
</div>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-4">
<div className="border border-white/10 rounded-2xl p-6 bg-black"><div className="text-[10px] font-mono text-white/30 tracking-widest">MEANING</div><div className="mt-3 text-[13px] text-white/70 leading-relaxed">{r.meaning}</div></div>
<div className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-[#D4AF37]/5"><div className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">TESTIMONY — WHY THIS SONG EXISTS</div><div className="mt-3 text-[13px] text-white/60 leading-relaxed">{r.testimony}</div></div>
</div>
<div className="mt-10 text-center"><a href="/" className="bg-white text-black px-10 py-4 rounded-full font-black text-xs tracking-widest inline-block">← RETURN TO FORGE</a></div>
</div>
)
}
