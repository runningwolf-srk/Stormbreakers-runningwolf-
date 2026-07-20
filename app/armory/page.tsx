// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function ArmoryPage() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-6xl font-black tracking-tighter">ARMORY</h1>
      <p className="text-zinc-500 tracking-widest mt-2 uppercase text-sm">Hear the Story • 16 Relics • Sound • Artwork • Lyrics</p>
      <p className="text-zinc-600 text-xs mt-1">Purpose: Worship through music. No long story. Just hear.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {CANON.map((r:any)=>(
          <div key={r.slug} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-white/20 transition group">
            {/* Artwork */}
            <div className="aspect-video bg-zinc-950 flex items-center justify-center relative overflow-hidden">
              {r.artwork? <img src={r.artwork} alt={r.title} className="w-full h-full object-cover"/> :
                <div className="text-center"><div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center font-black" style={{background:r.color+'15', border:`1px solid ${r.color}30`, color:r.color}}>{r.symbol}</div><p className="text-xs text-zinc-600 mt-3 uppercase tracking-widest">Artwork: {r.title}.jpg</p></div>
              }
              <div className="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{color:r.color}}>{r.relicLabel} • {r.weapon}</div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-black text-lg">{r.title}</h3>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{color:r.color}}>{r.sound}</p>
                </div>
                <p className="text-xs text-zinc-600">{r.symbol}</p>
              </div>

              {/* Audio */}
              <div className="mt-4">
                {r.audio? <audio controls className="w-full h-8"><source src={r.audio} /></audio> : <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-600">Audio: {r.title}.mp3 — add file to /public/audio/</div>}
                {r.youtube? <div className="mt-3 aspect-video"><iframe className="w-full h-full rounded-lg" src={r.youtube} /></div> : <p className="text-xs text-zinc-700 mt-2">YouTube: paste link in constants → becomes embed</p>}
              </div>

              {/* Lyrics Preview */}
              <div className="mt-4 bg-black/30 rounded-lg p-3">
                <p className="text-xs uppercase tracking-widest text-zinc-500">Lyrics</p>
                <p className="text-sm text-zinc-400 mt-1 italic">{r.lyrics || `Lyrics for ${r.title} — add in lib/constants.ts`}</p>
              </div>

              <div className="flex gap-2 mt-4">
                <Link href={`/chronicles/${r.slug}`} className="text-xs px-3 py-2 bg-white text-black rounded-full font-bold">Read Story →</Link>
                <Link href={`/word/${r.slug}`} className="text-xs px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-full">Study Scripture →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
