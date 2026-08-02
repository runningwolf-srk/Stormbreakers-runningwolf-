import {CANON} from "@/data/constants"; import Oath from "@/components/Oath"; import ForgeProgress from "@/components/ForgeProgress"
export default function Home(){
  return <div className="min-h-screen bg-black relative"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1c1c1c_0%,_#000_65%)]"/><div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center">
    <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">{CANON.TAGLINE}</div>
    <h1 className="text-7xl md:text-8xl font-black tracking-tighter mt-10 leading-[0.85]">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
    <p className="max-w-2xl mt-8 text-xl text-white/70">A cinematic Christian saga forged through battle, testimony, and Scripture.</p>
    <p className="max-w-xl mt-4 text-sm text-[#D4AF37]/60 italic">{CANON.MISSION}</p>
    <a href="/armory" className="mt-10 bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest">⚔️ ENTER THE FORGE →</a>
    <div className="mt-8 w-full max-w-sm"><ForgeProgress/></div>
    <div className="w-full max-w-5xl mt-16 grid md:grid-cols-4 gap-4 text-left">
      <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]"><div className="font-black text-xs">⚔️ ARMORY — Hear the Relics</div><div className="text-[11px] text-white/40 mt-1">Hear — The song enters the heart.</div></div>
      <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]"><div className="font-black text-xs">📖 CHRONICLES — Walk the Testimony</div><div className="text-[11px] text-white/40 mt-1">Understand — The story behind it.</div></div>
      <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]"><div className="font-black text-xs">✝️ WORD — Stand on Scripture</div><div className="text-[11px] text-white/40 mt-1">Root — The Scripture foundation. One King.</div></div>
      <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]"><div className="font-black text-xs">📚 BOOKS — Live the Truth</div><div className="text-[11px] text-white/40 mt-1">Live — The transformation.</div></div>
    </div>
    <div className="w-full max-w-3xl mt-16"><Oath/></div>
    <div className="mt-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-6 py-2 text-[11px] font-mono tracking-widest text-[#D4AF37]/70">{CANON.CLOSING}</div>
  </div></div>
}
