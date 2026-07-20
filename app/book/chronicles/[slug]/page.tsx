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
      <p className="text-xs uppercase tracking-[0.4em] mt-8" style={{color:r.color}}>Chapter {r.id} • {r.relicLabel} • {r.scriptureRef}</p>
      <h1>{r.title}</h1>
      <p className="lead italic">"{r.hook}" — {r.scriptureText}</p>
      <hr/>
      <h3>Setting</h3><p>{r.cinematicScene} — [300w sensory details]</p>
      <h3>Struggle</h3><p>[400w what broke]</p>
      <h3>Encounter</h3><p>[400w how {r.scriptureRef} met you — {r.testimonyMoment}]</p>
      <h3>Transformation</h3><p>[300w {r.purpose}]</p>
      <h3>Relic — {r.relicLabel}</h3><p>Weapon: {r.weapon} • Sound: {r.sound} • {r.description}</p>
      <h3>Reflection — Participant, not Observer</h3>
      <ul>{r.reflection.map((q:string,i:number)=><li key={i}>{q}</li>)}</ul>
      <p><em>Take 60 seconds. Breathe. Inhale: "Holy Spirit." Exhale: "Breathe again."</em></p>
      <blockquote>Prayer: Jesus, thank You for {r.title}. {r.purpose} Let this remain. Amen.</blockquote>
      {next && <p><em>Transition → Next: {next.title} — "{next.hook}" — Once God breathes, heaven moves. Once heaven moves, storms break.</em></p>}
      <div className="not-prose mt-12 flex gap-2"><Link href={`/book/word/${r.slug}`} className="px-4 py-2 bg-amber-500 text-black rounded-full text-sm font-bold">Root in Word →</Link>{next && <Link href={`/book/chronicles/${next.slug}`} className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">Next Chapter →</Link>}</div>
    </main>
  )
}
