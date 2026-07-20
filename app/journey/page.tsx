// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function Page() {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-black">THE JOURNEY</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <Link href="/armory" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/50"><p className="text-2xl">⚔️</p><h3 className="font-black mt-2">HEAR</h3><p className="text-xs text-zinc-500">Enter The Armory</p><p className="text-xs text-zinc-400 mt-1">Songs • Artwork • Audio</p></Link>
        <Link href="/chronicles" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/50"><p className="text-2xl">📖</p><h3 className="font-black mt-2">UNDERSTAND</h3><p className="text-xs text-zinc-500">Read The Chronicles</p><p className="text-xs text-zinc-400 mt-1">Stories • Battles • Testimonies</p></Link>
        <Link href="/word" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50"><p className="text-2xl">✝️</p><h3 className="font-black mt-2">ROOT</h3><p className="text-xs text-zinc-500">Study The Word</p><p className="text-xs text-zinc-400 mt-1">Scripture • Foundation</p></Link>
      </div>
      {/* Acts below same as before */}
      {[1,2,3,4].map(act=>(
        <div key={act} className="mt-12"><h2 className="font-bold text-xl">ACT {act}</h2><div className="grid md:grid-cols-2 gap-3 mt-3">{CANON.filter((r:any)=>r.act===act).map((r:any)=><Link key={r.slug} href={`/chronicles/${r.slug}`}><div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-sm">{r.symbol} {r.title} — <span className="text-zinc-500">{r.hook}</span></div></Link>)}</div></div>
      ))}
    </main>
  )
}
