"use client"
import { ALL_RELICS } from "@/data/armory"
import { useState } from "react"

function RelicCard({ r }: { r: any }){
  const [src, setSrc] = useState(r.image)
  const [failed, setFailed] = useState(false)

  return (
    <a href={`/armory/${r.slug}`} className={`group border ${r.accent} rounded-xl overflow-hidden bg-gradient-to-br ${r.color} p-3 hover:scale-105 transition block`}>
      {!failed? (
        <img
          src={src}
          alt={r.title}
          className="w-full aspect-square object-cover rounded-lg mb-2"
          onError={()=>{
            // try other extension
            if(src.endsWith('.png')){
              setSrc(src.replace('.png','.webp'))
            } else if(src.endsWith('.webp')){
              setSrc(src.replace('.webp','.png'))
            } else {
              setFailed(true)
            }
          }}
        />
      ) : (
        <div className="w-full aspect-square bg-white/10 rounded-lg mb-2 flex items-center justify-center text-3xl">{r.icon}</div>
      )}
      <div className="text-xs font-bold truncate">{r.title}</div>
      <div className="text-[10px] text-white/50">{r.num} • {src.split('/').pop()}</div>
    </a>
  )
}

export default function Home(){
  return (
  <main className="min-h-screen bg-black text-white p-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <img src="/images/avatar.png" className="w-24 h-24 rounded-full border-2 border-white/20 object-cover" onError={(e)=> (e.currentTarget.style.display='none')}/>
        <div>
          <h1 className="text-5xl font-black tracking-tighter">RUNNINGWOLF</h1>
          <p className="text-white/60">{ALL_RELICS.length} RELICS • CHECK FILENAMES BELOW</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ALL_RELICS.map(r=> <RelicCard key={r.slug} r={r} />)}
      </div>

      <div className="mt-12 p-4 bg-white/5 rounded-xl text-xs font-mono">
        <div className="text-white/50 mb-2">DEBUG - If image is blank, rename file to match this:</div>
        {ALL_RELICS.map(r=> <div key={r.slug} className="flex justify-between"><span>{r.title}</span><span className="text-white/30">{r.image}</span></div>)}
      </div>
    </div>
  </main>
  )
}
