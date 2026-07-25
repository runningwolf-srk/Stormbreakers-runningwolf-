"use client"
import Link from "next/link"
import { useState } from "react"
import { ALL_RELICS, CANON_PROGRESS } from "@/data/armory"

export default function ArmoryPage(){
  const [filter,setFilter] = useState<"all"|"forged"|"in_progress"|"seed">("all")
  const filtered = ALL_RELICS.filter(r => filter==="all" ? true : r.status===filter)

  return (
    <div className="px-6 py-16">
      <div className="max-w-3xl mx-auto border border-zinc-800 rounded-xl p-8 mb-10 space-y-4">
        <p className="text-xs tracking-[0.3em] text-zinc-400 text-center">⚔️ FORGED: {CANON_PROGRESS.forged}/16 • 🔥 IN PROGRESS: {CANON_PROGRESS.inProgress}/16 • 🔒 UNREVEALED: {CANON_PROGRESS.unrevealed}/16</p>
        <div className="w-full h-1 bg-zinc-900 rounded overflow-hidden"><div className="h-1 bg-white" style={{width:`${(CANON_PROGRESS.forged/16)*100}%`}}/></div>
        <div className="flex justify-center gap-3 pt-2">
          {["all","forged","in_progress","seed"].map(f=>(
            <button key={f} onClick={()=>setFilter(f as any)} className={`text-xs tracking-widest px-3 py-1 rounded border ${filter===f ? "border-white text-white" : "border-zinc-800 text-zinc-500"}`}>{f.toUpperCase()}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 max-w-3xl mx-auto">
        {filtered.map(r=>(
          <Link key={r.slug} href={`/armory/${r.slug}`} className="border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition">
            {r.artwork && <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-900"><img src={r.artwork} alt={r.title} className="w-full h-full object-cover" /></div>}
            <div className="p-8 space-y-3">
              <p className="text-xs tracking-[0.2em] text-zinc-500">{r.num} • {r.category.toUpperCase()} • {r.status.toUpperCase()}</p>
              <h2 className="text-2xl font-black tracking-widest">{r.title.toUpperCase()}</h2>
              <p className="text-sm text-zinc-400 italic">{r.scripture}</p>
              <p className="text-sm text-zinc-300 leading-6">{r.hook}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
