import { ALL_RELICS } from "@/data/armory"
import { CANON } from "@/data/constants"
import { notFound } from "next/navigation"

export default function RelicPage({ params }: { params:{ slug:string } }){
  const relic = ALL_RELICS.find(r=>r.slug===params.slug)
  if(!relic) return notFound()

  const isForged = relic.status==="FORGED"
  const isBurning = relic.status==="BURNING IN THE FORGE"

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-[10px] font-mono text-white/30 tracking-widest">{CANON.TAGLINE}</div>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        {/* LEFT — ARTIFACT VISUAL */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-2xl rounded-[2rem]" />
          <img src={relic.image} alt={relic.title} className="relative w-full aspect-square object-cover rounded-[2rem] border border-white/10 bg-zinc-900" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-black/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono">RELIC {relic.num}</span>
            <span className={`px-3 py-1 rounded-full text-[9px] font-mono border ${isForged?"bg-white text-black":isBurning?"bg-orange-500/20 text-orange-300 border-orange-500/30":"bg-white/10 text-white/40"}`}>{relic.status}</span>
          </div>
        </div>

        {/* RIGHT — FULL EXPERIENCE */}
        <div>
          <div className="flex items-center gap-3"><span className="text-3xl">{relic.symbol}</span><span className="text-[10px] font-mono text-white/40 tracking-widest">{relic.verse}</span></div>
          <h1 className="text-5xl md:text-6xl font-black mt-3 tracking-tighter leading-[0.9]">{relic.title}</h1>
          <p className="mt-4 text-white/60 text-sm leading-relaxed">{relic.purpose}</p>

          <div className="mt-8 space-y-4">
            <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-5">
              <div className="text-[10px] font-black tracking-widest text-[#D4AF37]">⚔️ THE RELIC — Symbol: {relic.symbol}</div>
              <div className="text-sm text-white/70 mt-2">Scripture: {relic.verse} — {relic.short}<br/>Meaning: {relic.purpose}</div>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30">
              <div className="text-[10px] font-black tracking-widest">📖 CHRONICLE — The story behind why this relic was forged</div>
              <div className="text-sm text-white/50 mt-2">
                {relic.slug==="runningwolf-blade" && "Before the blade was forged: broken seasons, mind wars, lies louder than truth. Then Hebrews 4:12 cut through. The Word became weapon."}
                {relic.slug==="lord-of-lords" && "Serving lesser kings left me empty. Revelation 19:16 — saw the King. One throne remains."}
                {relic.slug==="runningwolf" && "The wolf ran weary, running from calling. Isaiah 40:31 renewed strength. He runs and does not grow weary — with the King."}
                {!["runningwolf-blade","lord-of-lords","runningwolf"].includes(relic.slug) && "Testimony of battle, wound, redemption, and transformation — forging soon."}
              </div>
              <a href={`/chronicles/${relic.slug}`} className="inline-block mt-3 text-[10px] font-mono text-white/40 hover:text-white underline">READ FULL CHRONICLE →</a>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30">
              <div className="text-[10px] font-black tracking-widest">✝️ REFLECTION — What truth is God placing in your heart?</div>
              <div className="text-sm text-white/50 mt-2">How does {relic.title} speak to your battle today? What does {relic.verse} demand you believe?</div>
            </div>

            <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/30">
              <div className="text-[10px] font-black tracking-widest">🙏 PRAYER</div>
              <div className="text-sm text-white/50 mt-2 italic">"King Jesus, forge {relic.title} in me. I do not fight people, I fight darkness. I run with You. Amen."</div>
            </div>

            {isForged && <a href="#" className="inline-block w-full text-center bg-white text-black py-4 rounded-full font-black text-sm tracking-widest">▶ LISTEN TO RELIC — {relic.title}</a>}
            {isBurning && <div className="w-full text-center border border-orange-500/30 bg-orange-500/10 py-4 rounded-full font-black text-sm tracking-widest text-orange-300">🔥 BURNING IN THE FORGE — COMING SOON</div>}
            {!isForged &&!isBurning && <div className="w-full text-center border border-white/10 py-4 rounded-full font-mono text-xs text-white/20">🔒 AWAITING REVELATION</div>}
          </div>
        </div>
      </div>
    </div>
  )
                }
