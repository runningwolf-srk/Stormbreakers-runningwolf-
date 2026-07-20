// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function BookWordDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <div>Not found</div>
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto prose prose-invert"><Link href="/book/word" className="no-underline text-xs uppercase tracking-widest text-zinc-500">← Book 2</Link><h1 className="mt-8">{r.title}: Word Study</h1><p className="lead">{r.scriptureRef} — "{r.scriptureText}"</p><div className="bg-amber-950/20 border border-amber-900/20 rounded-xl p-4 not-prose"><a href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(r.scriptureRef)}&version=ESV`} target="_blank" className="text-xs">Read full chapter on BibleGateway →</a></div><h3>Context</h3><p>[2-3 sentences original meaning]</p><h3>Connection</h3><p>"{r.testimonyMoment}" — {r.purpose}. Testimony does not replace Scripture. Scripture explains testimony.</p><h3>Reflection</h3><ol>{r.reflection.map((q:string,i:number)=><li key={i}>{q}</li>)}</ol><blockquote>Prayer: Father, "{r.scriptureText}" — make alive. Word is authority. Story is testimony. Jesus is center. Amen.</blockquote></main>
  )
}
