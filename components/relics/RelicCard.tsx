import Link from 'next/link'
import { CanonRelic } from '@/lib/constants'
import { RelicIcon } from './RelicIcon'

export function RelicCard({ relic }: { relic: CanonRelic }) {
  return (
    <div className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition group">
      <div className="flex justify-between items-center">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400"><RelicIcon symbol={relic.symbol} className="w-6 h-6" /></div>
        <p className="text-amber-400/30 text-xs font-black">{String(relic.id).padStart(2,'0')} / 16</p>
      </div>
      <p className="text-amber-400/60 text-xs tracking-[0.3em] font-black mt-4">{relic.relicLabel}</p>
      <p className="text-amber-400/50 text-xs tracking-widest font-black mt-1">{relic.chapterCaps}</p>
      <h3 className="text-amber-100 font-black text-xl mt-1">{relic.title}</h3>
      <div className="mt-4 w-full h-48 bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl border border-amber-400/10 flex flex-col items-center justify-center gap-3"><RelicIcon symbol={relic.symbol} className="w-12 h-12 text-amber-400/20" /><p className="text-amber-400/30 text-xs tracking-[0.3em] font-black">{relic.title.toUpperCase()}</p></div>
      <p className="text-amber-100 font-bold mt-4">{relic.song} • <span className="text-amber-400/60 text-xs">{relic.theme}</span></p>
      <p className="text-amber-100/60 italic text-sm mt-2">"{relic.reflection}"</p>
      <Link href={`/armory/${relic.id}`} className="block w-full mt-4 py-3 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-black text-center">VIEW {relic.relicShort.toUpperCase()}</Link>
    </div>
  )
}
