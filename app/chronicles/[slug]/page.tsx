// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function ChronicleDetail({ params }: { params: { slug: string } }) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <main className="p-10">Not found</main>
  return (
    <main className="px-4 py-12 max-w-3xl mx-auto">
      <Link href="/chronicles" className="text-xs uppercase tracking-widest text-zinc-500">← Back to Chronicles</Link>
      <p className="mt-8 text-xs uppercase tracking-[0.4em]" style={{color:r.color}}>Chapter {r.id} • ACT {r.act} • {r.relicLabel}</p>
      <h1 className="text-5xl font-black mt-2">{r.title}</h1>
      <p className="text-zinc-400 mt-3 italic text-lg">"{r.hook}"</p>

      <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Setting</p><p className="mt-1">{r.cinematicScene}</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Testimony Moment</p><p className="mt-1 text-white font-medium italic">"{r.testimonyMoment}"</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Struggle & Journey</p><p className="mt-1">{r.description}</p><p className="mt-2 text-zinc-400">{r.purpose}</p></div>
        <div><p className="text-xs uppercase tracking-widest text-zinc-500">Sound Identity</p><p className="mt-1" style={{color:r.color}}>{r.sound} • {r.weapon}</p></div>
      </div>

      <div className="mt-12 flex gap-2">
        <Link href={`/armory`} className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold">Hear Song →</Link>
        <Link href={`/word/${r.slug}`} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Study Word →</Link>
      </div>
    </main>
  )
}
