import { ALL_RELICS } from "../../../data/armory"
export default function RelicPage({params}:{params:{id:string}}){
 const relic = ALL_RELICS.find(r=>r.slug===params.id)
 if(!relic) return <div className="p-12">NOT FOUND</div>
 return(
  <div className="p-12 max-w-2xl">
   <p className="text-xs text-zinc-500">{relic.num} — {relic.verse}</p>
   <h1 className="text-4xl font-black tracking-widest mt-4">{relic.title}</h1>
   <p className="text-zinc-300 mt-8 leading-relaxed">{relic.chronicle}</p>
  </div>
 )
}
