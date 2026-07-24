import Link from "next/link"
import { ALL_RELICS } from "@/data/armory"
export default function ChroniclesPage(){
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-3xl font-black tracking-widest text-center">📖 CHRONICLES</h1>
      <p className="text-center text-zinc-400 text-sm">Understand — Testimony behind each relic</p>
      {ALL_RELICS.map(r=>(
        <Link key={r.slug} href={`/armory/${r.slug}`} className="block border border-zinc-800 rounded-xl p-8 hover:border-zinc-600">
          <p className="text-xs text-zinc-500">{r.num} • {r.title.toUpperCase()}</p>
          <p className="text-zinc-300 mt-4 leading-7 whitespace-pre-wrap">{r.chronicle}</p>
        </Link>
      ))}
    </div>
  )
}
