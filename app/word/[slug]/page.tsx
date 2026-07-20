// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function WordDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <main className="p-10">Not found</main>
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto"><Link href="/word" className="text-xs uppercase tracking-widest text-zinc-500">← The Word</Link><p className="mt-8 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>{r.scriptureRef}</p><h1 className="text-4xl font-black mt-2">{r.title}: Foundation</h1><div className="mt-8 bg-amber-950/20 border border-amber-900/30 rounded-2xl p-6"><p className="text-xl text-amber-100 italic">"{r.scriptureText}"</p><a href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(r.scriptureRef)}&version=ESV`} target="_blank" className="inline-block mt-4 text-xs px-3 py-2 bg-zinc-800 rounded-full border border-zinc-700">Read full chapter on BibleGateway (licensed) →</a></div><div className="mt-8 space-y-6 leading-relaxed text-zinc-300"><div><p className="text-xs uppercase text-zinc-500">Biblical Context</p><p className="mt-2">[2-3 sentences original meaning of {r.scriptureRef}]</p></div><div><p className="text-xs uppercase text-zinc-500">Testimony Connection</p><p className="mt-2">"{r.testimonyMoment}" — {r.purpose}. Proves Scripture, not replaces.</p></div><div><p className="text-xs uppercase text-zinc-500">Reflection</p><ul className="list-disc ml-5 mt-2 space-y-1 text-sm">{r.reflection.map((q:string,i:number)=><li key={i}>{q}</li>)}</ul></div><blockquote className="border-l-2 pl-4 border-amber-500/30"><p className="italic">Prayer: Father, "{r.scriptureText}" — make it alive. The Word is authority. My story is testimony. Jesus is center. Amen.</p></blockquote></div></main>
  )
}
