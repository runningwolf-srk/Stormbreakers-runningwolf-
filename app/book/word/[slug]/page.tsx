// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function BookChronicleDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <div>Not found</div>
  const next = CANON.find((x:any)=>x.id===r.id+1)
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto prose prose-invert prose-zinc">
      <Link href="/book/chronicles" className="no-underline text-xs uppercase tracking-widest text-zinc-500">← Book 1</Link>
      <p className="text-xs uppercase tracking-[0.4em] mt-8" style={{color:r.color}}>Chapter {r.id} • {r.relicLabel}</p>
      <h1>{r.title}</h1>
      <p className="lead italic">"{r.hook}" — {r.scriptureRef}: {r.scriptureText}</p>
      <hr/>
      <h3>I. Setting — {r.cinematicScene}</h3>
      <p>[Write 300 words here. Describe sensory details of where {r.title} was forged. This is where your line "{r.testimonyMoment}" was born. Paint the scene so AI artist can visualize it.]</p>
      <h3>II. Struggle</h3><p>[400 words: What broke. What lie. Why you almost quit.]</p>
      <h3>III. Encounter</h3><p>[400 words: How {r.scriptureRef} became alive. How God met you. Not theory — moment.]</p>
      <h3>IV. Transformation</h3><p>[300 words: What changed. Purpose: {r.purpose}. How {r.weapon} became weapon.]</p>
      <h3>V. Relic — {r.relicLabel}</h3><p>Weapon: {r.weapon} • Sound: {r.sound}<br/>{r.description}</p>
      <blockquote>Prayer: Father, thank You for {r.title}. {r.purpose} Let this remain. In Jesus' name, amen.</blockquote>
      {next && <p><em>Transition → Next: {next.title} — "{next.hook}"</em></p>}
      <div className="not-prose mt-12 flex gap-2"><Link href={`/book/word/${r.slug}`} className="px-4 py-2 bg-amber-500 text-black rounded-full text-sm font-bold">Study Word for this chapter →</Link>{next && <Link href={`/book/chronicles/${next.slug}`} className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">Next Chapter →</Link>}</div>
    </main>
  )
}
