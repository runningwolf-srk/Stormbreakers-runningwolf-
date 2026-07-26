import { BRAND } from "@/data/armory"
import Oath from "@/components/Oath"

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center">
      <img src="/images/avatar.png" alt="RUNNINGWOLF" className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white/10 object-cover" />
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-8 leading-none">RUNNINGWOLF</h1>
      <p className="text-white/60 text-sm tracking-[0.25em] mt-3">STORMBREAKERS</p>
      <p className="text-white/30 font-mono text-[11px] mt-3 tracking-widest">{BRAND}</p>

      <div className="flex flex-col md:flex-row gap-4 mt-10 w-full md:w-auto">
        <a href="/armory" className="bg-white text-black px-10 py-4 rounded-full font-black text-sm text-center">ENTER ARMORY →</a>
        <a href="/books" className="border border-white/20 px-10 py-4 rounded-full font-bold text-sm text-center">BOOKS</a>
      </div>

      <div className="mt-10 text-[11px] font-mono tracking-widest leading-relaxed">
        <div className="text-white/60">THE NINETEEN RELICS OF THE CANON</div>
        <div className="text-white/30 mt-1">2 FORGED • 1 IN PROGRESS • 16 AWAITING THE FORGE</div>
      </div>

      <div className="w-full max-w-3xl mt-16">
        <Oath />
      </div>
    </div>
  )
}
