import Link from 'next/link'
import { CanonRelic } from '@/lib/constants'
import { RelicIcon } from './RelicIcon'

function getActColor(id: number) {
  if (id <= 4) return "text-amber-400/40"
  if (id <= 8) return "text-orange-400/40"
  if (id <= 12) return "text-red-400/40"
  return "text-amber-300/40"
}

export function RelicCard({ relic }: { relic: CanonRelic }) {
  return (
    <div className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition group">
      <div className="flex justify-between items-center"><p className={`text-xs font-black tracking-widest ${getActColor(relic.id)}`}>{relic.act}</p><p className="text-amber-400/30 text-xs font-black">{String(relic.id).padStart(2,'0')} / 16</p></div>
      <div className="flex items-center gap-3 mt-3"><div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400"><RelicIcon symbol={relic.symbol} className="w-5 h-5" /></div><p className="text-amber-400/60 text-xs tracking-[0.3em] font-black">{relic.relicLabel}</p></div>
      <h3 className="text-amber-100 font-black text-lg mt-3">{relic.chapterLabel}</h3>
      <p className="text-amber-100 font-bold text-sm mt-1">{relic.title} — {relic.song}</p>
      <p className="text-amber-100/60 italic text-sm mt-2">"{relic.reflection}"</p>
      <Link href={`/armory/${relic.id}`} className="block w-full mt-4 py-3 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-black text-center">VIEW {relic.relicShort.toUpperCase()}</Link>
    </div>
  )
}
