// @ts-nocheck
import { CANON } from '@/lib/constants'
export default function ArmoryPage() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-5xl font-black">ARMORY</h1>
      <p className="text-zinc-400">Relics • Weapons • Artifacts • Songs forged through battles</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">{(CANON || []).map((r: any) => (
        <div key={r.slug} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center">
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl" style={{background: r.color+'15', border: `1px solid ${r.color}`}}>{r.symbol}</div>
          <p className="text-[10px] uppercase tracking-widest mt-3" style={{color: r.color}}>{r.relicLabel}</p>
          <h3 className="font-bold mt-1">{r.title}</h3>
          <p className="text-[11px] text-zinc-500 mt-1">{r.weapon}</p>
          <p className="text-[11px] text-zinc-600 mt-2">{r.sound}</p>
        </div>
      ))}</div>
    </main>
  )
}
