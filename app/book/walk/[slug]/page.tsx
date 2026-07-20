// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function WalkDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  
  if(!r) return (
    <main className="px-4 py-24 max-w-2xl mx-auto text-center">
      <p className="text-6xl">⚔️</p>
      <h1 className="text-4xl font-black mt-6">THE PATH IS STILL BEING FORGED</h1>
      <p className="text-zinc-400 mt-4">This walk has not been revealed yet.</p>
      <Link href="/book/walk" className="inline-block mt-8 px-5 py-3 bg-white text-black rounded-full font-bold text-sm">← Return to The Walk</Link>
    </main>
  )

  const next = CANON.find((x:any)=>x.id===r.id+1)

  return (
    <main className="px-4 py-12 max-w-2xl mx-auto">
      <Link href="/book/walk" className="text-xs uppercase tracking-widest text-zinc-500">← Book 3: The Walk</Link>
      
      <p className="mt-8 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>
        Day {r.id} — {r.title} — {r.scriptureRef}
      </p>
      <h1 className="text-4xl font-black mt-2">{r.title}</h1>
      <p className="text-zinc-500 text-sm mt-1 italic">"{r.hook}"</p>

      <div className="mt-8 space-y-6">

        {/* TRUTH */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Truth</p>
          <p className="text-lg text-white mt-2 font-medium">{r.purpose}</p>
          <p className="text-sm italic text-zinc-400 mt-2">"{r.scriptureText}" — {r.scriptureRef}</p>
          <a href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(r.scriptureRef)}&version=ESV`} target="_blank" className="inline-block mt-3 text-xs px-3 py-2 bg-black border border-zinc-800 rounded-full">Read full chapter →</a>
        </div>

        {/* REFLECTION */}
        <div className="bg-amber-950/10 border border-amber-900/20 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-amber-500">Reflection</p>
          <ul className="mt-3 space-y-2 text-sm list-disc ml-5 text-zinc-300">
            {r.reflection.map((q:string,i:number)=><li key={i}>{q}</li>)}
          </ul>
        </div>

        {/* PRAYER */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Prayer</p>
          <p className="text-sm italic mt-3 text-zinc-300">
            Lord, {r.purpose.toLowerCase()} Teach me to trust Your movement before I see Your outcome. In Jesus' name, amen.
          </p>
        </div>

        {/* ACTION */}
        <div className="bg-white text-black rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest">Action — Today</p>
          <p className="text-sm font-bold mt-3">{r.action}</p>
          <p className="text-xs mt-3 opacity-60">5 minutes. No phone. Just obedience. This turns inspiration into transformation.</p>
        </div>

        <p className="text-xs text-zinc-600 text-center">The Word is authority. Story is testimony. Jesus is center. Obedience is response.</p>
      </div>

      <div className="mt-12 flex gap-2 flex-wrap">
        {next && <Link href={`/book/walk/${next.slug}`} className="px-5 py-3 bg-white text-black rounded-full text-sm font-bold">Next Day → Day {next.id}: {next.title}</Link>}
        <Link href={`/book/chronicles/${r.slug}`} className="px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Read Story →</Link>
        <Link href={`/book/word/${r.slug}`} className="px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Root in Word →</Link>
      </div>
    </main>
  )
}
