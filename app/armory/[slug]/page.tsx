"use client"
import { useState } from "react"

const CHAPTERS = [
  { id:"before", label:"Before Christ", desc:"Broken seasons, battles fought in silence. The wound before the weapon." },
  { id:"valley", label:"The Valley", desc:"Refining fire, wilderness. Where God strips what cannot stay." },
  { id:"calling", label:"The Calling", desc:"Heaven calling, purpose revealed. When you hear your name from the King." },
  { id:"forge", label:"The Forge", desc:"Truth becomes weapon. Scripture becomes sword. Character is hammered." },
  { id:"mission", label:"The Mission", desc:"Not victim — witness. Not forgotten — FORGED. Sent to break storms for others." },
]

function ChronicleTabs({ slug }: { slug:string }){
  const [active,setActive]=useState("forge")
  return (
    <div className="border border-white/10 rounded-2xl bg-zinc-900/30 overflow-hidden">
      <div className="flex gap-1 p-2 bg-black/40 border-b border-white/5 overflow-x-auto">
        {CHAPTERS.map(c=>(
          <button key={c.id} onClick={()=>setActive(c.id)} className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest border transition ${active===c.id?"bg-white text-black border-white":"bg-white/5 text-white/40 border-white/10 hover:text-white"}`}>{c.label}</button>
        ))}
      </div>
      <div className="p-5">
        <div className="text-[10px] font-black tracking-widest text-[#D4AF37]">{CHAPTERS.find(c=>c.id===active)?.label} — Walk the Testimony</div>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{CHAPTERS.find(c=>c.id===active)?.desc}</p>
        <a href={`/chronicles/${slug}#${active}`} className="inline-block mt-4 text-[11px] font-mono text-white/30 hover:text-white underline">→ Read full chapter</a>
      </div>
    </div>
  )
}
