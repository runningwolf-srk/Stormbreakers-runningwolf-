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
      <p className="mt-3 text-lg italic text-zinc-300">"{r.hook}"</p>
      <p className="mt-2 text-sm text-zinc-500">{r.scriptureRef} — {r.scriptureText}</p>
      <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Setting — {r.cinematicScene}</p><p className="mt-2">[300 words: describe where you were when {r.title} was forged. Sensory details.]</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Struggle</p><p className="mt-2">[400 words: what broke, what lie you believed before {r.title}]</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Encounter — {r.testimonyMoment}</p><p className="mt-2">[400 words: how God met you with {r.scriptureRef}]</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Relic — {r.weapon} • {r.sound}</p><p className="mt-2">{r.description} — {r.purpose}</p></div>
        <blockquote className="border-l-2 pl-4" style={{borderColor:r.color}}><p className="italic">Prayer: Jesus, thank You for {r.title}. {r.purpose} Let this relic remain. Amen.</p></blockquote>
        {next && <p className="text-sm italic text-zinc-500">Transition → Next: {next.title} — "{next.hook}"</p>}
      </div>
      <div className="mt-12 flex gap-2"><Link href="/armory" className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">Hear Song →</Link><Link href={`/word/${r.slug}`} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Study Word →</Link><Link href="/book/chronicles" className="px-4 py-2 bg-amber-500 text-black rounded-full text-sm font-bold">Book Mode →</Link></div>
    </main>
  )
}
