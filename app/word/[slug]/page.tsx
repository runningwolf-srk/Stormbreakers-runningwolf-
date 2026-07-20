// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function WordDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <main className="p-10">Not found</main>
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto">
      <Link href="/word" className="text-xs uppercase tracking-widest text-zinc-500">← The Word</Link>
      <p className="mt-8 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>{r.scriptureRef}</p>
      <h1 className="text-4xl font-black mt-2">{r.title}: Foundation</h1>
      <div className="mt-8 bg-amber-950/20 border border-amber-900/30 rounded-2xl p-6">
        <p className="text-xs uppercase text-amber-500">Scripture — Brief Quote</p>
        <p className="text-xl text-amber-100 mt-3 italic">"{r.scriptureText}"</p>
        <p className="text-xs text-zinc-500 mt-2">{r.scriptureRef}</p>
        <a href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(r.scriptureRef)}&version=ESV`} target="_blank" className="inline-block mt-4 text-xs px-3 py-2 bg-zinc-800 rounded-full border border-zinc-700">Read full chapter on BibleGateway (licensed) →</a>
      </div>
      <div className="mt-8 space-y-6 leading-relaxed text-zinc-300">
        <div><p className="text-xs uppercase text-zinc-500">Biblical Context</p><p className="mt-2">[2-3 sentences: Who wrote {r.scriptureRef}, to whom, why? Original meaning of {r.hook.toLowerCase()}]</p></div>
        <div><p className="text-xs uppercase text-zinc-500">Testimony Connection</p><p className="mt-2">My story: "{r.testimonyMoment}" — {r.purpose}. This does not replace Scripture. It proves it.</p></div>
        <div><p className="text-xs uppercase text-zinc-500">Reflection Questions</p><ul className="list-disc ml-5 mt-2 space-y-1 text-sm"><li>Where are you believing a lie about {r.title.toLowerCase()}?</li><li>How does {r.scriptureRef} speak to your current battle?</li><li>What would change if you carried {r.relicLabel} as weapon?</li></ul></div>
        <blockquote className="border-l-2 pl-4 border-amber-500/30"><p className="italic">Prayer: Father, Your Word says "{r.scriptureText}" — teach me to live it. Point me back to Jesus, not just my story. Amen.</p></blockquote>
        <p className="text-xs uppercase text-zinc-500">Foundation: The Word is authority. My story is testimony. Jesus Christ is center.</p>
      </div>
      <div className="mt-12 flex gap-2"><Link href={`/chronicles/${r.slug}`} className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">Read Story →</Link><Link href={`/book/word/${r.slug}`} className="px-4 py-2 bg-amber-500 text-black rounded-full text-sm font-bold">Book Study Mode →</Link></div>
    </main>
  )
}
