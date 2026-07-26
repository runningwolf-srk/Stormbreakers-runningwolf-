import { ALL_RELICS, BRAND } from "@/data/armory"
export default function WordPage(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-black tracking-tighter">WORD</h1>
      <p className="text-white/40 font-mono text-[11px] mt-2 tracking-widest">{BRAND}</p>
      <p className="text-white/30 text-xs mt-2">Hear → Understand → Root → Live</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {ALL_RELICS.map(r=>(
          <a key={r.slug} href={`/word/${r.slug}`} className="flex justify-between items-center border border-white/10 rounded-xl p-5 bg-zinc-900/30 hover:bg-zinc-900 transition">
            <div className="pr-4">
              <div className="font-bold text-xs tracking-wide">{r.title}</div>
              <div className="text-[11px] text-white/40 mt-1.5">{r.short}</div>
            </div>
            <div className="text-[10px] font-mono bg-white/10 px-2 py-1 rounded-full shrink-0">{r.verse}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
