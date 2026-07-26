import { OATH } from "@/data/oath"
export default function Oath(){
  return (
    <section className="border border-white/10 rounded-3xl p-8 md:p-12 bg-zinc-900/30 text-center mt-12">
      <h2 className="font-black tracking-widest text-sm">{OATH.title}</h2>
      <div className="mt-6 space-y-2 font-mono text-sm md:text-base text-white/80">
        {OATH.lines.map((l,i)=>(<div key={i}>{l}</div>))}
      </div>
      <div className="mt-8 text-[10px] font-mono text-white/30 tracking-widest">{OATH.footer}</div>
    </section>
  )
}
