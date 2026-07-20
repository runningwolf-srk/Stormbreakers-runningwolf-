// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function WordDetail({ params }: { params: { slug: string } }) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <main className="p-10">Not found</main>
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto">
      <Link href="/word" className="text-xs uppercase tracking-widest text-zinc-500">← Back to Word</Link>
      <p className="mt-8 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>{r.scriptureRef}</p>
      <h1 className="text-4xl font-black mt-2">{r.title}: Biblical Foundation</h1>

      <div className="mt-8 bg-amber-950/20 border border-amber-900/30 rounded-2xl p-6">
        <p className="text-xs uppercase tracking-widest text-amber-500">Scripture (brief quote — within translation permissions)</p>
        <p className="text-xl text-amber-100 mt-3 italic">"{r.scriptureText}"</p>
        <p className="text-xs text-zinc-500 mt-2">{r.scriptureRef}</p>
        <a href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(r.scriptureRef)}&version=ESV`} target="_blank" className="inline-block mt-4 text-xs px-3 py-2 bg-zinc-800 rounded-full border border-zinc-700">Read full chapter on BibleGateway (licensed) →</a>
      </div>

      <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Biblical Context</p><p className="mt-2">This verse originally meant [add 2-3 sentence context for {r.scriptureRef}]. The principle is {r.hook.toLowerCase()}</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">How Testimony Points Back to Christ</p><p className="mt-2">My story: "{r.testimonyMoment}" — This does not replace {r.scriptureRef}. It proves it. {r.purpose}</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Foundation Statement</p><p className="mt-2 text-white font-medium">The Word is authority. My story is testimony. Jesus Christ is the center of them all.</p></div>
      </div>

      <div className="mt-12 flex gap-2">
        <Link href={`/chronicles/${r.slug}`} className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">Read Story →</Link>
        <Link href={`/armory`} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Hear Song →</Link>
      </div>
    </main>
  )
}
