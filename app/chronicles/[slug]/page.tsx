import { ALL_RELICS } from "@/data/armory"
import { CANON } from "@/data/constants"
import { notFound } from "next/navigation"

export default function ChronicleDetail({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="text-[10px] font-mono text-white/30 tracking-widest">{CANON.TAGLINE}</div>
      <div className="text-[10px] font-mono text-[#D4AF37]/60 mt-2 tracking-widest">📖 CHRONICLE {relic.num} • {relic.status}</div>

      <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tighter leading-none">{relic.title}</h1>
      <p className="mt-3 text-white/50 text-sm">{relic.purpose} — {relic.verse}</p>

      <div className="mt-10 space-y-6">
        <div className="border border-white/10 rounded-2xl p-6 bg-zinc-900/20">
          <div className="text-[10px] font-black tracking-widest">THE BATTLE — What happened?</div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            {relic.slug==="runningwolf-blade" && "The mind was battlefield. Lies louder than truth. Anxiety, fear, thoughts that cut. I needed a weapon not made by man. Hebrews 4:12 came alive — the Word is alive, active, sharper than any sword."}
            {relic.slug==="lord-of-lords" && "I crowned achievement, people, approval. Every crown fell. Revelation 19:16 showed me — there is ONE King, King of kings, and His crown never falls."}
            {relic.slug==="runningwolf" && "I ran weary. Ran from calling. Ran in my own strength. Isaiah 40:31 — those who wait on the Lord shall renew strength. The wolf now runs with the King, and does not grow weary."}
            {!["runningwolf-blade","lord-of-lords","runningwolf"].includes(relic.slug) && "Every relic was born in a real battle. This chronicle will tell the wound, the wilderness, and how the King met me there. Forging soon."}
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 bg-zinc-900/20">
          <div className="text-[10px] font-black tracking-widest">THE BREAKING — What was lost?</div>
          <p className="mt-3 text-sm text-white/50 leading-relaxed">Identity shaken, strength gone, silence in the storm. The breaking was necessary — God breaks to rebuild.</p>
        </div>

        <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-6">
          <div className="text-[10px] font-black tracking-widest text-[#D4AF37]">THE ENCOUNTER — Where God met you</div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">{relic.verse} became more than verse. It became anchor. The King entered the forge with me.</p>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
          <div className="text-[10px] font-black tracking-widest">THE FORGING — Who you became</div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">Not victim — witness. Not forgotten — FORGED. {relic.purpose}</p>
        </div>

        <div className="flex gap-3">
          <a href={`/armory/${relic.slug}`} className="border border-white/10 px-6 py-3 rounded-full text-xs font-bold">⚔️ VIEW RELIC</a>
          <a href={`/word/${relic.slug}`} className="border border-white/10 px-6 py-3 rounded-full text-xs font-bold">✝️ WORD</a>
          <a href={`/books/${relic.slug}`} className="border border-white/10 px-6 py-3 rounded-full text-xs font-bold">📚 BOOK</a>
        </div>
      </div>
    </div>
  )
}
