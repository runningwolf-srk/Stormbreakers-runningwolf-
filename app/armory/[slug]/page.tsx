"use client"
import {useParams} from "next/navigation"
const DATA:any={
  "runningwolf-blade":{num:"I",title:"RUNNINGWOLF BLADE",icon:"⚔️",verse:"Hebrews 4:12 — The Word is alive and active. Sharper than any double-edged sword.",meaning:"The foundation is truth.",testimony:"Forged in the season God stripped everything to Scripture. The blade chooses the warrior.",yt:""},
  "lord-of-lords":{num:"II",title:"LORD OF LORDS",icon:"👑",verse:"Revelation 19:16 — KING OF KINGS AND LORD OF LORDS",meaning:"The warrior discovers who sits on the throne.",testimony:"After the Word awakens, the King is revealed. Not striving — surrender.",yt:""},
  "blood-of-cross":{num:"III",title:"BLOOD OF CROSS",icon:"✝️",verse:"Colossians 1:20 — Making peace through His blood, shed on the cross.",meaning:"Victory purchased through sacrifice.",testimony:"Hardest relic to write. Redemption is not earned — it is received.",yt:""}
}
export default function RelicPage(){
  const {slug}=useParams()
  const r=DATA[slug as string]
  if(!r) return(<div className="min-h-screen bg-black text-white flex items-center justify-center p-10 text-center"><div><div className="text-5xl">🔒</div><div className="mt-6 font-black">RELIC {String(slug).toUpperCase()} — AWAITING REVELATION</div><div className="mt-2 text-white/40">THE NEXT CHAPTER HAS NOT BEEN FORGED</div><a href="/" className="mt-6 inline-block border border-white/10 rounded-full px-6 py-3 text-xs">← RETURN</a></div></div>)
  return(
    <div className="min-h-screen bg-black text-white max-w-4xl mx-auto px-6 py-14">
      <div className="border border-white/10 rounded-[24px] overflow-hidden bg-zinc-900/20">
        <div className="p-8"><div className="text-[10px] font-mono text-white/30">RELIC {r.num} • CHAPTER I</div><h1 className="text-5xl font-black mt-4">{r.icon} {r.title}</h1><div className="mt-3 text-[#D4AF37]/60 text-sm">{r.verse}</div></div>
        <div className="px-6 pb-6"><div className="aspect-video bg-black border border-white/10 rounded-2xl flex items-center justify-center text-white/20 text-xs font-mono">{r.yt? <iframe className="w-full h-full rounded-2xl" src={`https://www.youtube.com/embed/${r.yt}`} allowFullScreen/> : "🔥 VIDEO FORGING — COMING SOON"}</div></div>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="border border-white/10 rounded-2xl p-6 bg-black"><div className="text-[10px] font-mono text-white/30">MEANING</div><div className="mt-3 text-sm text-white/70">{r.meaning}</div></div>
        <div className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-[#D4AF37]/5"><div className="text-[10px] font-mono text-[#D4AF37]/60">TESTIMONY</div><div className="mt-3 text-sm text-white/60">{r.testimony}</div></div>
      </div>
      <div className="mt-8 text-center"><a href="/" className="bg-white text-black px-8 py-4 rounded-full font-black text-xs tracking-widest inline-block">← RETURN TO FORGE</a></div>
    </div>
  )
}
