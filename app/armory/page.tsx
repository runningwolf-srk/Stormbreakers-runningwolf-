import Link from "next/link"
import { ALL_RELICS, CANON_PROGRESS } from "@/data/armory"

export default function ArmoryPage() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto border border-zinc-800 rounded-xl p-8 mb-12 text-center">
        <p className="text-xs tracking-[0.3em] text-zinc-400">
          ⚔️ FORGED: {CANON_PROGRESS.forged}/16 • 🔥 IN PROGRESS: {CANON_PROGRESS.inProgress}/16 • 🔒 UNREVEALED: {CANON_PROGRESS.unrevealed}/16
        </p>
        <div className="w-full h-1 bg-zinc-900 mt-4 rounded overflow-hidden">
          <div className="h-1 bg-white rounded" style={{ width: `${(CANON_PROGRESS.forged / 16) * 100}%` }} />
        </div>
      </div>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {ALL_RELICS.map((relic) => (
          <Link key={relic.slug} href={`/armory/${relic.slug}`} className="border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition">
            <p className="text-xs tracking-[0.2em] text-zinc-500">{relic.num} • {relic.category.toUpperCase()} • {relic.status.toUpperCase()}</p>
            <h2 className="text-2xl font-black tracking-widest mt-2">{relic.title.toUpperCase()}</h2>
            <p className="text-sm text-zinc-400 mt-2 italic">{relic.scripture}</p>
            <p className="text-sm text-zinc-300 mt-3">{relic.hook}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
