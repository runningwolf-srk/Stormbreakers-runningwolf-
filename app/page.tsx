import { CANON_PROGRESS } from "../data/armory"
import Link from "next/link"
export default function Home(){
 return(
  <div className="p-12">
   <h1 className="text-5xl font-black tracking-widest">STORMBREAKERS</h1>
   <p className="text-zinc-500 mt-4">{CANON_PROGRESS.unlocked}/{CANON_PROGRESS.total} RELICS UNLOCKED</p>
   <div className="mt-10 flex gap-4">
    <Link href="/armory" className="border border-white px-6 py-3 text-xs tracking-widest">ENTER ARMORY</Link>
    <Link href="/books" className="bg-white text-black px-6 py-3 text-xs tracking-widest">BOOKS - LIVE</Link>
   </div>
  </div>
 )
}
