// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function ChronicleDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return (<main className="px-4 py-24 max-w-2xl mx-auto text-center"><p className="text-6xl">⚔️</p><h1 className="text-4xl font-black mt-6">THE PATH IS STILL BEING FORGED</h1><Link href="/chronicles" className="inline-block mt-8 px-5 py-3 bg-white text-black rounded-full font-bold text-sm">← Back to Chronicles</Link></main>)
  const next = CANON.find((x:any)=>x.id===r.id+1)
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto">
      <Link href="/chronicles" className="text-xs uppercase tracking-widest text-zinc-500">← Back to Chronicles</Link>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">BOOK I — THE CHRONICLES</p>
      <p className="mt-1 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>Chapter {r.id} • {r.title} • {r.relicLabel}</p>
      <h1 className="text-5xl font-black mt-2">{r.title}</h1>
      <p className="mt-2 text-zinc-500">{r.scriptureRef} — {r.scriptureText}</p>
      <p className="mt-3 text-lg italic text-zinc-300">"{r.hook}"</p>
      <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Setting — {r.cinematicScene}</p><p className="mt-2">300w — 3:12am single light... I had no song. I had a sigh.</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Struggle</p><p className="mt-2">400w — valley, doubt, identity, forgotten...</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Encounter — {r.testimonyMoment}</p><p className="mt-2">400w — {r.scriptureRef} — hovering, incubation, breath...</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Transformation</p><p className="mt-2">{r.purpose}</p></div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"><p className="text-xs uppercase tracking-widest text-amber-500">Reflection</p><ul className="mt-3 space-y-2 text-sm list-disc ml-5">{r.reflection.map((q:string,i:number)=><li key={i}>{q}</li>)}</ul></div>
        <blockquote className="border-l-2 pl-4" style={{borderColor:r.color}}><p className="italic">Prayer: Jesus, thank You for {r.title}. {r.purpose} Amen.</p></blockquote>
        {next && <p className="text-sm italic text-zinc-500">Transition → {next.title} — "{next.hook}"</p>}
      </div>
      <div className="mt-12 flex gap-2 flex-wrap">
        <Link href="/armory" className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">⚔️ Hear</Link>
        <Link href={`/word/${r.slug}`} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">✝️ Root</Link>
        <Link href={`/book/walk/${r.slug}`} className="px-4 py-2 bg-amber-500 text-black rounded-full text-sm font-bold">📚 Live</Link>
      </div>
    </main>
  )
}
