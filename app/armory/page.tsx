import { ALL_RELICS } from "@/data/armory"
import Progress from "@/components/Progress"

export default function ArmoryPage({ searchParams }: { searchParams:{ dev?:string } }){
  const isDev = searchParams.dev === "1"
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-black">ARMORY</h1>
      <p className="text-white/40 font-mono text-xs mt-1">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</p>
      <div className="mt-6"><Progress /></div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ALL_RELICS.map(r=>{
          const status = r.num==="01" || r.num==="02"? "FORGED" : r.num==="03"? "IN PROGRESS" : "UNREVEALED"
          return (
            <a key={r.slug} href={`/armory/${r.slug}`} className="group border border-white/10 rounded-2xl overflow-hidden bg-zinc-900 hover:border-white/30 transition">
              <div className="aspect-square bg-zinc-800 relative">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 text-[8px] font-mono bg-black/60 px-2 py-1 rounded-full">{status}</div>
              </div>
              <div className="p-3">
                <div className="font-black text-[11px] truncate">{r.title}</div>
                <div className="text-[10px] text-white/40 font-mono mt-1">{r.verse}</div>
                {isDev && <div className="text-[8px] font-mono text-yellow-300/60 truncate mt-1">{r.filename}</div>}
              </div>
            </a>
          )
        })}
      </div>
      {!isDev && <p className="text-[10px] text-white/20 font-mono mt-6">Add?dev=1 to URL to see internal filenames (dev tool)</p>}
    </div>
  )
}
