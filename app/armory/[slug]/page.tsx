"use client"
import {useParams} from "next/navigation"

const RELICS:any = {
  "runningwolf-blade":{
    num:"I", title:"RUNNINGWOLF BLADE", icon:"⚔️", color:"#D4AF37",
    verse:"Hebrews 4:12 — For the word of God is alive and active. Sharper than any double-edged sword.",
    theme:"The Word → The Awakening",
    meaning:"The foundation is truth. Before the warrior can fight, he must hear the Word that awakens him.",
    testimony:"This relic was forged in the season God stripped everything back to Scripture. No hype. No image. Just the Word cutting through noise. RUNNINGWOLF BLADE is the moment the blade chooses the warrior.",
    behind:"Written at 2am after 21 days of fasting from socials. One riff, one verse, one prayer: 'Let Your Word do what I cannot.'",
    yt:"dQw4w9WgXcQ"
  },
  "lord-of-lords":{
    num:"II", title:"LORD OF LORDS", icon:"👑", color:"#D4AF37",
    verse:"Revelation 19:16 — On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.",
    theme:"The King → The Revelation",
    meaning:"The warrior discovers who sits on the throne. The battle was never about becoming king — it was about bowing to Him.",
    testimony:"After RUNNINGWOLF BLADE, I kept asking — now what? God answered with a throne, not a stage. LORD OF LORDS is surrender, not striving.",
    behind:"Choir recorded in a stone chapel. Wanted it to feel like heaven's war room, not a concert.",
    yt:""
  },
  "blood-of-cross":{
    num:"III", title:"BLOOD OF CROSS", icon:"✝️", color:"#ff3b30",
    verse:"Colossians 1:20 — Through him to reconcile to himself all things, by making peace through his blood, shed on the cross.",
    theme:"The Cross → The Redemption",
    meaning:"The victory was purchased through sacrifice. The warrior finally understands: redemption is not earned — it is received.",
    testimony:"Hardest relic to write. Wanted to make the cross cinematic without making it cheap. Ended up weeping in studio. No warrior stands without blood that isn't his own.",
    behind:"Currently being forged. First demo 11pm, lights off, cross sketch on wall.",
    yt:""
  }
}

export default function RelicPage(){
  const {slug} = useParams()
  const r = RELICS[slug as string]
  if(!r) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10 text-center">
      <div>
        <div className="text-5xl">🔒</div>
        <div className="mt-6 text-xl font-black tracking-widest">RELIC {String(slug).toUpperCase()} — AWAITING REVELATION</div>
        <div className="mt-3 text-sm text-white/40 max-w-md">THE NEXT CHAPTER HAS NOT BEEN FORGED. This relic has not yet been revealed.</div>
        <a href="/" className="mt-8 inline-block border border-white/10 rounded-full px-6 py-3 text-xs font-mono">← RETURN TO FORGE</a>
      </div>
    </div>
  )
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* BANNER */}
        <div className="border border-white/10 rounded-[24px] overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
          <div className="p-6 sm:p-10">
            <div className="flex justify-between items-start">
              <div className="text-[10px] font-mono tracking-[0.35em] text-white/30">RELIC {r.num} • CHAPTER I — THE FORGING OF THE WARRIOR</div>
              <div className="text-[9px] font-mono px-2 py-1 rounded-full bg-white/10">{r.title === "BLOOD OF CROSS"? "🔥 CURRENTLY BEING FORGED" : "⚔️ FORGED"}</div>
            </div>
            <h1 className="mt-6 text-[36px] sm:text-6xl font-black tracking-tighter leading-[0.9]"><span className="text-3xl mr-3">{r.icon}</span>{r.title}</h1>
            <div className="mt-3 text-sm text-[#D4AF37]/70">{r.theme}</div>
          </div>

          {/* VIDEO */}
          <div className="px-3 sm:px-6 pb-6">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-white/10">
              {r.yt? <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${r.yt}`} allowFullScreen/> : <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/50"><div className="text-3xl">✝️</div><div className="mt-3 text-xs font-mono text-white/20">FORGING — VIDEO REVEAL SOON</div></div>}
            </div>
          </div>
        </div>

        {/* 3 COLUMNS — STRONG VISUALS */}
        <div className="mt-6 grid md:grid-cols-3 gap-3 sm:gap-4">
          <div className="border border-white/10 rounded-2xl p-5 sm:p-6 bg-zinc-900/20">
            <div className="text-[9px] font-mono tracking-widest text-white/30">📖 SCRIPTURE FOUNDATION</div>
            <div className="mt-3 text-[13px] leading-relaxed text-white/80">{r.verse}</div>
          </div>
          <div className="border border-[#D4AF37]/20 rounded-2xl p-5 sm:p-6 bg-[#D4AF37]/5">
            <div className="text-[9px] font-mono tracking-widest text-[#D4AF37]/60">⚔️ MEANING</div>
            <div className="mt-3 text-[13px] leading-relaxed text-white/70">{r.meaning}</div>
          </div>
          <div className="border border-white/10 rounded-2xl p-5 sm:p-6 bg-zinc-900/20">
            <div className="text-[9px] font-mono tracking-widest text-white/30">🔥 FORGE RANK</div>
            <div className="mt-3 text-xs">Unlocks at <span className="text-[#D4AF37]">Initiate</span> • This relic counts toward your Warrior path.</div>
            <div className="mt-3 text-[10px] font-mono text-white/20">Follow 3 relics → INITIATE</div>
          </div>
        </div>

        {/* TESTIMONY — EMOTIONAL CONNECTION */}
        <div className="mt-6 grid md:grid-cols-2 gap-3 sm:gap-4">
          <div className="border border-white/10 rounded-2xl p-6 bg-black">
            <div className="text-[10px] font-mono tracking-widest text-white/30">📖 WHY THIS SONG EXISTS — TESTIMONY</div>
            <div className="mt-4 text-[13px] leading-relaxed text-white/60">{r.testimony}</div>
          </div>
          <div className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30">
            <div className="text-[10px] font-mono tracking-widest text-white/30">🎬 BEHIND-THE-SCENES — THE BATTLE BEHIND IT</div>
            <div className="mt-4 text-[13px] leading-relaxed text-white/50">{r.behind}</div>
            <div className="mt-4 text-[10px] font-mono text-white/20">Supporters receive extended cut + artwork + devotional.</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/armory" className="border border-white/10 rounded-full px-8 py-4 text-center text-xs font-mono hover:bg-white/5">← BACK TO ARMORY</a>
          <a href="/" className="bg-white text-black rounded-full px-8 py-4 text-center text-xs font-black tracking-widest">⚔️ ENTER NEXT RELIC →</a>
        </div>
      </div>
    </div>
  )
}
