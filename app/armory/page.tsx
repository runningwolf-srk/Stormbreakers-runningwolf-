import { ALL_RELICS } from "../../data/armory"
import Link from "next/link"
export default function Armory(){
 return(
  <div className="p-8 grid gap-4">
   {ALL_RELICS.map(r=><Link key={r.slug} href={`/armory/${r.slug}`} className="border border-zinc-800 p-6 rounded-xl">
    <p className="text-xs text-zinc-500">{r.num}</p><h2 className="text-xl font-bold tracking-widest mt-2">{r.title}</h2>
   </Link>)}
  </div>
 )
}
