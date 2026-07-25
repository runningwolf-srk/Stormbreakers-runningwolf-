import { ALL_RELICS } from "@/data/armory"

export default function ArmoryPage(){
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-black mb-2">ARMORY</h1>
      <p className="text-white/50 mb-6">{ALL_RELICS.length} RELICS • WITH FILENAMES</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ALL_RELICS.map(r=>(
          <a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-xl overflow-hidden bg-zinc-900">
            <img src={r.image} alt={r.title} className="w-full aspect-square object-cover" />
            <div className="p-2">
              <div className="font-bold text-xs truncate">{r.title}</div>
              <div className="text-[10px] text-white/50 font-mono">{r.image.replace('/relics/','')}</div>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
