import { ALL_RELICS, CANON_PROGRESS } from "../data/armory"
import Link from "next/link"
export default function Home(){
 return(
  <div className="p-8 md:p-16 max-w-6xl mx-auto">
   <div className="flex flex-col md:flex-row gap-12 items-start">
    <img src="/avatar.jpg" alt="Running Wolf" className="w-[320px] h-[320px] object-cover rounded-[32px] border border-zinc-800 shadow-2xl" />
    <div>
     <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">STORM<br/>BREAKERS</h1>
     <p className="text-zinc-400 mt-6 max-w-md">Running Wolf — {CANON_PROGRESS.total} relics forged. Armor live.</p>
     <div className="mt-8 flex gap-4">
      <Link href="/armory" className="bg-white text-black px-8 py-3 text-xs tracking-[0.3em] font-bold">ENTER ARMORY — {CANON_PROGRESS.total}</Link>
     </div>
     <div className="mt-8 grid grid-cols-5 gap-2 max-w-[240px]">
      {ALL_RELICS.map(r=><img key={r.slug} src={r.image} className="w-10 h-10 rounded-lg object-cover border border-white/10" />)}
     </div>
    </div>
   </div>
  </div>
 )
}
