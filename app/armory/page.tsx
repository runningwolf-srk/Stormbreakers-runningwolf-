// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function ArmoryPage() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-6xl font-black">ARMORY</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">Hear the Story • Sound • Artwork • Lyrics • 16 Relics</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {CANON.map((r:any)=>(
          <div key={r.slug} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-zinc-950 flex items-center justify-center">
              {r.artwork? <img src={r.artwork} alt={r.title} className="w-full h-full object-cover"/> : <div className="text-center"><div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center font-black" style={{background:r.color+'15', border:`1px solid ${r.color}30`, color:r.color}}>{r.symbol}</div><p className="text-xs text-zinc-600 mt-2">/artwork/{r.slug}.jpg</p></div>}
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.title} • {r.weapon} • {r.sound}</p>
              <p className="text-sm italic text-zinc-400 mt-2">"{r.hook}"</p>
              {r.audio? <audio controls className="w-full mt-3 h-8"><source src={r.audio}/></audio> : <div className="mt-3 bg-black/50 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-600">Audio: /audio/{r.slug}.mp3</div>}
              <div className="mt-3 bg-black/30 rounded-lg p-3"><p className="text-xs uppercase text-zinc-500">Lyrics</p><p className="text-sm text-zinc-400 mt-1">{r.lyrics || `Add lyrics for ${r.title} in constants`}</p></div>
              <div className="flex gap-2 mt-4"><Link href={`/chronicles/${r.slug}`} className="text-xs px-3 py-2 bg-white text-black rounded-full font-bold">Read Story →</Link><Link href={`/word/${r.slug}`} className="text-xs px-3 py-2 bg-zinc-800 rounded-full">Study Word →</Link></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
