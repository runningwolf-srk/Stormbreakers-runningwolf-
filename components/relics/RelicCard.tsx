import Link from 'next/link'
import { CanonRelic } from '@/lib/constants'
import { RelicIcon } from './RelicIcon'
export function RelicCard({ relic }: { relic: CanonRelic }) {
  return (<div className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30"><div className="flex justify-between"><p className="text-amber-400/30 text-xs font-black">{relic.act}</p><p className="text-amber-400/30 text-xs">{String(relic.id).padStart(2,'0')}/16</p></div><div className="flex gap-3 mt-3 items-center"><div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400"><RelicIcon symbol={relic.symbol} className="w-5 h-5" /></div><p className="text-amber-400/60 text-xs font-black">{relic.relicLabel}</p></div><h3 className="text-amber-100 font-black mt-3">{relic.title}</h3><p className="text-amber-100/60 italic text-sm mt-2">"{relic.reflection}"</p><Link href={`/armory/${relic.id}`} className="block mt-4 py-3 bg-amber-500/10 border border-amber-400/20 rounded-full text-center text-amber-400 text-xs font-black">VIEW {relic.relicShort.toUpperCase()}</Link></div>)
}
