import { ALL_RELICS } from "@/data/armory"

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center text-center">
      <img src="/images/avatar.png" alt="RUNNINGWOLF" className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white/10 object-cover" />
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-8 leading-none">RUNNINGWOLF</h1>
      <p className="text-white/40 font-mono text-[11px] mt-4 tracking-widest">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</p>
      <div className="flex gap-4 mt-10">
        <a href="/armory" className="bg-white text-black px-10 py-4 rounded-full font-black text-sm">ENTER ARMORY →</a>
        <a href="/books" className="border border-white/20 px-10 py-4 rounded-full font-bold text-sm">BOOKS</a>
      </div>
      <p className="text-white/30 text-xs mt-8">{ALL_RELICS.length} RELICS UNLOCKED</p>
    </div>
  )
}
