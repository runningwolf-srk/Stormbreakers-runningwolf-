import { CANON } from "@/data/constants"
import Oath from "@/components/Oath"

export default function Home(){
  return (
    <div className="min-h-screen bg-[#070707] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1c1c1c_0%,_#000_65%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center">
        <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">
          {CANON.TAGLINE}
        </div>

        <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter mt-10 leading-[0.8]">
          RUNNINGWOLF<br/><span className="bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">STORMBREAKERS</span>
        </h1>

        <p className="max-w-2xl mt-8 text-xl md:text-2xl text-white/70 leading-snug">
          A cinematic Christian saga forged through battle, testimony, and Scripture.
        </p>
        <p className="max-w-xl mt-4 text-sm text-[#D4AF37]/60 italic">
          {CANON.MISSION}
        </p>
        <p className="mt-3 text-xs text-white/30">Every song is a relic forged from Scripture, testimony, and faith.</p>

        <a href="/armory" className="mt-10 bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-[#D4AF37] transition-all">
          ⚔️ ENTER THE FORGE →
        </a>

        <div className="mt-10 text-[11px] font-mono tracking-widest">
          <div className="text-white/50">THE NINETEEN RELICS OF THE CANON</div>
          <div className="text-white/30 mt-1">{CANON.STATUS_LINE}</div>
        </div>

        {/* JOURNEY FLOW — YOUR BIGGEST FIX */}
        <div className="w-full max-w-5xl mt-20 grid md:grid-cols-4 gap-4 text-left">
          <div className="border border-white/10 rounded-2xl p-6 bg-gradient-to-b from-white/[0.04] to-transparent"><div className="text-xl">⚔️</div><div className="font-black text-xs mt-3 tracking-widest">HEAR</div><div className="text-[11px] text-white/40 mt-1">Armory — The song enters the heart.</div></div>
          <div className="border border-white/10 rounded-2xl p-6 bg-gradient-to-b from-white/[0.04] to-transparent"><div className="text-xl">📖</div><div className="font-black text-xs mt-3 tracking-widest">UNDERSTAND</div><div className="text-[11px] text-white/40 mt-1">Chronicles — The story behind it.</div></div>
          <div className="border border-white/10 rounded-2xl p-6 bg-gradient-to-b from-white/[0.04] to-transparent"><div className="text-xl">✝️</div><div className="font-black text-xs mt-3 tracking-widest">ROOT</div><div className="text-[11px] text-white/40 mt-1">Word — The Scripture foundation. One King.</div></div>
          <div className="border border-white/10 rounded-2xl p-6 bg-gradient-to-b from-white/[0.04] to-transparent"><div className="text-xl">📚</div><div className="font-black text-xs mt-3 tracking-widest">LIVE</div><div className="text-[11px] text-white/40 mt-1">Books — The transformation.</div></div>
        </div>

        <div className="w-full max-w-3xl mt-16"><Oath /></div>
      </div>
    </div>
  )
}
