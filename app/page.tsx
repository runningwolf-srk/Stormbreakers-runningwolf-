import { CANON } from "@/data/constants"
import Oath from "@/components/Oath"

export default function Home(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#000_60%)]">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 flex flex-col items-center text-center">
        {/* HERO */}
        <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-mono tracking-[0.3em] text-white/40">
          {CANON.TAGLINE}
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mt-8 leading-[0.85]">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>

        <p className="max-w-2xl mt-8 text-lg md:text-xl text-white/60 leading-relaxed font-light">
          A cinematic Christian saga forged through battle, testimony, and Scripture.<br/>
          <span className="text-white/90 font-bold">19 relics. 4 experiences. 1 King.</span>
        </p>

        <p className="max-w-xl mt-4 text-sm text-white/40">
          RUNNINGWOLF is a cinematic Christian project where every song is a relic forged from Scripture, testimony, and faith.
        </p>

        <a href="/armory" className="mt-10 bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-zinc-200 transition">
          ⚔️ ENTER THE FORGE →
        </a>

        <div className="mt-8 text-[11px] font-mono tracking-widest">
          <div className="text-white/60">{CANON.PROGRESS}</div>
          <div className="text-white/30 mt-1">{CANON.FORGED} FORGED • {CANON.IN_PROGRESS} BURNING • {CANON.AWAITING} AWAITING REVELATION</div>
          <div className="mt-3 w-64 h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden flex"><div className="h-full bg-white" style={{width:`${(CANON.FORGED/CANON.TOTAL)*100}%`}} /><div className="h-full bg-orange-500" style={{width:`${(CANON.IN_PROGRESS/CANON.TOTAL)*100}%`}} /></div>
        </div>

        <div className="w-full max-w-3xl mt-20"><Oath /></div>

        <div className="mt-20 grid md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
          <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]"><div className="text-lg">⚔️</div><div className="font-black text-xs mt-2 tracking-widest">ARMORY</div><div className="text-[11px] text-white/40 mt-1">Hear — Songs as relics</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]"><div className="text-lg">📖</div><div className="font-black text-xs mt-2 tracking-widest">CHRONICLES</div><div className="text-[11px] text-white/40 mt-1">Understand — Testimony</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]"><div className="text-lg">✝️</div><div className="font-black text-xs mt-2 tracking-widest">WORD</div><div className="text-[11px] text-white/40 mt-1">Root — Scripture</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-white/[0.02]"><div className="text-lg">📚</div><div className="font-black text-xs mt-2 tracking-widest">BOOKS</div><div className="text-[11px] text-white/40 mt-1">Live — Transformation</div></div>
        </div>
      </div>
    </div>
  )
}
