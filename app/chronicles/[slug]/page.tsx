// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function ChronicleDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <main className="p-10">Not found</main>
  const next = CANON.find((x:any)=>x.id===r.id+1)
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto">
      <Link href="/chronicles" className="text-xs uppercase tracking-widest text-zinc-500">← Chronicles</Link>
      <p className="mt-8 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>Chapter {r.id} • {r.relicLabel} • Act {r.act}</p>
      <h1 className="text-5xl font-black mt-2">{r.title}</h1>
      <p className="mt-2 text-zinc-500">{r.scriptureRef} — {r.scriptureText}</p>
      <p className="mt-3 text-lg italic text-zinc-300">"{r.hook}"</p>
      <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Setting — {r.cinematicScene}</p><p className="mt-2">[300w] Where you were when {r.title} forged. Sensory details. 3:12am moment.</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Struggle</p><p className="mt-2">[400w] What broke. Lie believed.</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Encounter — {r.testimonyMoment}</p><p className="mt-2">[400w] How God met you with {r.scriptureRef}. Moment, not theory.</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Transformation</p><p className="mt-2">[300w] {r.purpose}. How {r.weapon} became weapon.</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Relic — {r.relicLabel} • {r.weapon} • {r.sound}</p><p className="mt-2">{r.description}</p></div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><p className="text-xs uppercase tracking-widest text-amber-500">Reflection — Reader Invitation</p><ul className="mt-3 space-y-2 text-sm list-disc ml-5">{r.reflection.map((q:string,i:number)=><li key={i}>{q}</li>)}</ul><p className="text-xs italic text-zinc-500 mt-3">Take 60 seconds. Breathe. Observer → Participant.</p></div>
        <blockquote className="border-l-2 pl-4" style={{borderColor:r.color}}><p className="italic">Prayer: Jesus, thank You for {r.title}. {r.purpose} Let this remain. Amen.</p></blockquote>
        {next && <p className="text-sm italic text-zinc-500">Transition → Next: {next.title} — "{next.hook}"</p>}
      </div>
      <div className="mt-12 flex gap-2 flex-wrap"><Link href="/armory" className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">Hear →</Link><Link href={`/word/${r.slug}`} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Root →</Link><Link href={`/book/chronicles/${r.slug}`} className="px-4 py-2 bg-amber-500 text-black rounded-full text-sm font-bold">Book Mode →</Link></div>
    </main>
  )
}
