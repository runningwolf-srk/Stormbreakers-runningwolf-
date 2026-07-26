import { CANON } from "@/data/constants"
export default function NotFound(){
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <div className="text-[10px] font-mono text-white/30 tracking-widest">{CANON.TAGLINE}</div>
      <h1 className="text-5xl font-black mt-6 tracking-tighter">{CANON.NOT_FOUND_TITLE}</h1>
      <p className="mt-3 text-white/40 text-sm">{CANON.NOT_FOUND_SUB}</p>
      <a href="/armory" className="inline-block mt-8 border border-white/20 px-8 py-3 rounded-full text-xs font-bold tracking-widest">← RETURN TO ARMORY</a>
    </div>
  )
}
