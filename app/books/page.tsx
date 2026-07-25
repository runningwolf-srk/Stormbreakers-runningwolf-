import { ALL_RELICS } from "../../data/armory"
import Link from "next/link"
export default function Books(){
 return(
  <div className="p-12">
   <h1 className="text-3xl font-black tracking-widest">📚 BOOKS - LIVE</h1>
   <div className="mt-8 grid gap-4">
    {ALL_RELICS.map(r=><Link key={r.slug} href={`/armory/${r.slug}`} className="border border-zinc-800 p-6 rounded-xl block">
     <h3 className="font-bold">{r.title}</h3><p className="text-xs text-zinc-500 mt-2">{r.verse}</p>
    </Link>)}
   </div>
  </div>
 )
}
