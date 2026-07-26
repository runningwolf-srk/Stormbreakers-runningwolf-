import { ALL_RELICS, BRAND } from "@/data/armory"

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-20 flex flex-col items-center text-center">
      <img src="/images/avatar.png" alt="RUNNINGWOLF" className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white/10 object-cover" />
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-8 leading-none">RUNNINGWOLF</h1>
      <p className="text-white/50 text-sm tracking-[0.2em] mt-3">STORMBREAKERS</p>
      <p className="text-white/30 font-mono text-[11px] mt-3 tracking-widest">{BRAND}</p>

      <div className="flex gap-4 mt-10">
        <a href="/armory" className="bg-white text-black px-10 py-4 rounded-full font-black text-sm">ENTER ARMORY →</a>
        <a href="/books" className="border border-white/20 px-10 py-4 rounded-full font-bold text-sm">BOOKS</a>
      </div>

      <p className="text-white/20 text-[11px] font-mono mt-8 tracking-widest">{ALL_RELICS.length} / 19 FORGED • 2 FORGED • 1 IN PROGRESS</p>
    </div>
  )
}
