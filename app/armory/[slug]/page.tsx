"use client"
import { useState } from "react"
const CHAPTERS = [
  {id:"before",label:"Before Christ",text:"Broken seasons. The wound before the weapon."},
  {id:"valley",label:"Valley",text:"Refining fire. Where God strips what cannot stay."},
  {id:"calling",label:"Calling",text:"Heaven calling. When you hear your name from the King."},
  {id:"forge",label:"Forge",text:"Truth becomes weapon. Scripture becomes sword."},
  {id:"mission",label:"Mission",text:"Not victim — witness. Not forgotten — FORGED."},
]
export function ChronicleTabs({slug}:{slug:string}){
  const [a,setA]=useState("forge")
  return (
    <div className="border border-white/10 rounded-2xl bg-zinc-900/30 overflow-hidden">
      <div className="flex gap-1 p-2 bg-black/40 border-b border-white/5">
        {CHAPTERS.map(c=><button key={c.id} onClick={()=>setA(c.id)} className={`px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest border ${a===c.id?"bg-white text-black":"bg-white/5 text-white/40 border-white/10"}`}>{c.label}</button>)}
      </div>
      <div className="p-5"><div className="text-[10px] font-black text-[#D4AF37]">{CHAPTERS.find(c=>c.id===a)?.label}</div><p className="mt-2 text-sm text-white/60">{CHAPTERS.find(c=>c.id===a)?.text}</p><a href={`/chronicles/${slug}#${a}`} className="inline-block mt-4 text-[11px] underline text-white/30">→ Read full chapter</a></div>
    </div>
  )
}
