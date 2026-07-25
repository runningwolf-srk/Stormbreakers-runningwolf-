import { ALL_RELICS } from "@/data/armory"
export default function Home(){
  return (
  <main className="min-h-screen bg-black text-white p-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <img src="/images/avatar.png" className="w-24 h-24 rounded-full border-2 border-white/20 object-cover"/>
        <div>
          <h1 className="text-5xl font-black tracking-tighter">RUNNINGWOLF</h1>
          <p className="text-white/60">{ALL_RELICS.length} RELICS UNLOCKED • 100% CANON</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ALL_RELICS.map(r=>(
          <a key={r.slug} href={`/armory/${r.slug}`} className={`group border ${r.accent} rounded-xl overflow-hidden bg-gradient-to-br ${r.color} p-3 hover:scale-105 transition`}>
            <img src={r.image} alt={r.title} className="w-full aspect-square object-cover rounded-lg mb-2"/>
            <div className="text-xs font-bold truncate">{r.title}</div>
            <div className="text-[10px] text-white/50">{r.num}</div>
          </a>
        ))}
      </div>
    </div>
  </main>
  )
}
