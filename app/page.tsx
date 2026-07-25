import { ALL_RELICS } from "@/data/armory"

export default function Home(){
  const featured = ALL_RELICS.slice(0,4) // only first 4 on main

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <img src="/images/avatar.png" className="w-28 h-28 rounded-full border-2 border-white/20 object-cover" />
          <div>
            <h1 className="text-6xl font-black tracking-tighter">RUNNINGWOLF</h1>
            <p className="text-white/60 mt-2">{ALL_RELICS.length} RELICS UNLOCKED • STORMBREAKER</p>
            <div className="flex gap-3 mt-4">
              <a href="/armory" className="bg-white text-black px-6 py-3 rounded-full font-black text-sm">ENTER ARMORY →</a>
              <a href="/books" className="border border-white/20 px-6 py-3 rounded-full font-bold text-sm">BOOKS</a>
            </div>
          </div>
        </div>

        {/* ONLY 4 FEATURED ON MAIN */}
        <h2 className="text-white/40 text-xs tracking-widest mb-4">FEATURED RELICS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map(r=>(
            <a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-xl p-3 bg-zinc-900/50">
              <img src={r.image} alt={r.title} className="w-full aspect-square object-cover rounded-lg mb-2" />
              <div className="font-bold text-xs">{r.title}</div>
              <div className="text-[10px] text-white/40 font-mono">{r.image.replace('/relics/','')}</div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/armory" className="text-white/60 text-sm underline">View all {ALL_RELICS.length} relics in Armory →</a>
        </div>

      </div>
    </main>
  )
}
