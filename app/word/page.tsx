import { ALL_RELICS } from "../../data/armory"
export default function Word(){
 return(
  <div className="p-12 max-w-2xl">
   <h1 className="text-3xl font-black tracking-widest">⚔️ WORD</h1>
   <div className="mt-8 space-y-8">
    {ALL_RELICS.map(r=><div key={r.slug} className="border-b border-zinc-800 pb-6">
     <p className="text-xs text-zinc-500">{r.verse}</p><h3 className="font-bold mt-2">{r.title}</h3><p className="text-zinc-300 mt-2">{r.chronicle}</p>
    </div>)}
   </div>
  </div>
 )
}
