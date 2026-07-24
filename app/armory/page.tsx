import Link from "next/link"
import { ALL_RELICS, CANON_PROGRESS } from "@/data/armory"
export default function ArmoryPage(){
  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto border border-zinc-800 rounded-xl p-8 mb-12 space-y-4">
        <p className="text-xs tracking-[0.3em] text-zinc-400 text-center">⚔️ FORGED: {CANON_PROGRESS.forged}/16 • 🔥 IN PROGRESS: {CANON_PROGRESS.inProgress}/16 • 🔒 UNREVEALED: {CANON_PROGRESS.unrevealed}/16</p>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex gap-2"><span className="text-zinc-500 w-28">⚔️ FORGED</span><span className="text-white">██░░░░░░░░░░░░░░</span><span className="text-zinc-400">{CANON_PROGRESS.forged}/16</span></div>
          <div className="flex gap-2"><span className="text-zinc-500 w-28">🔥 FORGING</span><span className="text-white">█░░░░░░░░░░░░░░░</span><span className="text-zinc-400">{CANON_PROGRESS.inProgress}/16</span></div>
        </div>
        <div className="w-full h-1 bg-zinc-900 rounded overflow-hidden"><div className="h-1 bg-white" style={{width:`${(CANON_PROGRESS.forged/16)*100}%`}}/></div>
      </div>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {ALL_RELICS.map(r=>(
          <Link key={r.slug} href={`/armory/${r.slug}`} className="border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition">
            <p className="text-xs tracking-[0.2em] text-zinc-500">{r.num} • {r.category.toUpperCase()} • {r.status.toUpperCase()}</p>
            <h2 className="text-2xl font-black tracking-widest mt-3">{r.title.toUpperCase()}</h2>
            <p className="text-sm text-zinc-400 mt-2 italic">{r.scripture}</p>
            <p className="text-sm text-zinc-300 mt-3 leading-6">{r.hook}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
