"use client"

const RELICS = [
  {slug:"runningwolf-blade", num:"I", title:"RUNNINGWOLF BLADE", icon:"⚔️", label:"The Word → The Awakening", verse:"Hebrews 4:12", meaning:"The foundation is truth.", status:"FORGED"},
  {slug:"lord-of-lords", num:"II", title:"LORD OF LORDS", icon:"👑", label:"The King → The Revelation", verse:"Revelation 19:16", meaning:"The warrior discovers who sits on the throne.", status:"FORGED"},
  {slug:"blood-of-cross", num:"III", title:"BLOOD OF CROSS", icon:"✝️", label:"The Cross → The Redemption", verse:"Colossians 1:20", meaning:"The victory was purchased through sacrifice.", status:"CURRENTLY BEING FORGED"},
]

const LOCKS = ["IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"]

export default function Home(){
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">

        {/* TOP TAGLINE */}
        <div className="text-center">
          <div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">
            ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING
          </div>
          <h1 className="text-7xl font-black tracking-tighter mt-8 leading-[0.85]">RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span></h1>
          <p className="mt-4 text-white/50 text-sm">A cinematic Christian saga — Season 1 is being forged.</p>

          {/* FIX #1 — COMBINED PROGRESS */}
          <div className="mt-6 inline-block border border-white/10 rounded-2xl px-8 py-4 bg-zinc-900/40 text-center">
            <div className="text-2xl font-black tracking-tight">FORGED 2/19 • 11% COMPLETE</div>
            <div className="text-[10px] font-mono text-white/40 mt-1 tracking-widest">⚔️ 2 FORGED • 🔥 1 CURRENTLY BEING FORGED • 🔒 16 AWAITING REVELATION</div>
          </div>
        </div>

        {/* FIX #2 — CHAPTER I CINEMATIC ARC */}
        <div className="mt-16">
          <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-7 text-center">
            <div className="text-[12px] font-black tracking-[0.35em]">CHAPTER I — THE FORGING OF THE WARRIOR</div>
            <div className="mt-3 text-sm text-white/60 tracking-wide">The Word awakens. The King is revealed. The Cross redeems.</div>
            <div className="mt-3 flex justify-center gap-6 text-[10px] font-mono text-white/30">
              <span>⚔️ Word</span><span>👑 King</span><span>✝️ Cross</span>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {RELICS.map(r=>(
              <a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30 hover:border-white/20 text-left block group">
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{r.icon}</span>
                  <span className="text-[8px] font-mono px-2 py-1 rounded-full bg-white/10 tracking-widest">{r.status}</span>
                </div>
                <div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num}</div>
                <div className="font-black text-sm tracking-tight group-hover:text-[#D4AF37] transition">{r.title}</div>
                <div className="text-[11px] text-[#D4AF37]/60 mt-1">{r.label}</div>
                <div className="mt-3 text-[11px] text-white/40">Meaning: {r.meaning}</div>
                <div className="text-[11px] text-white/30">Scripture: {r.verse}</div>
              </a>
            ))}
          </div>
        </div>

        {/* FIX #4 — LOCKED RELICS SIMPLE MYSTERY */}
        <div className="mt-16">
          <div className="text-[11px] font-mono tracking-[0.35em] text-white/30">🔒 FUTURE RELICS — AWAITING REVELATION</div>
          <div className="mt-4 grid md:grid-cols-4 gap-3">
            {LOCKS.map(n=>(
              <div key={n} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 opacity-40">
                <div className="text-[10px] font-mono tracking-widest">🔒 RELIC {n} — AWAITING REVELATION</div>
                <div className="text-[11px] text-white/30 mt-1">This relic has not yet been revealed.</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 EXPERIENCES */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs tracking-widest">⚔️ ARMORY</div><div className="text-[11px] text-white/40 mt-1">Hear the relics.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs tracking-widest">📖 CHRONICLES</div><div className="text-[11px] text-white/40 mt-1">Walk the testimony.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs tracking-widest">✝️ WORD</div><div className="text-[11px] text-white/40 mt-1">Stand on Scripture.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs tracking-widest">📚 BOOKS</div><div className="text-[11px] text-white/40 mt-1">Live the truth.</div></div>
        </div>

        {/* FIX #3 — FORGE PATHS EXPANDED */}
        <div className="mt-16 border border-[#D4AF37]/20 rounded-3xl p-8 bg-zinc-900/20">
          <div className="text-center">
            <div className="text-[11px] font-mono tracking-[0.35em] text-[#D4AF37]/70">⚔️ THE FORGE PATHS</div>
            <div className="text-sm text-white/50 mt-2">Songs are free. Depth is forged. Support helps build the cathedral.</div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
            <div className="border border-white/10 rounded-2xl p-6 bg-black/40">
              <div className="text-xs font-black tracking-widest">🐺 PATH 1 — LISTENER</div>
              <div className="text-[10px] font-mono text-white/30 mt-1">Enter the Forge</div>
              <div className="mt-2 text-[10px] font-mono text-white/20">Free access:</div>
              <div className="mt-2 text-[11px] text-white/50 space-y-1.5">
                <div>• Hear the songs</div><div>• Follow the relic journey</div><div>• Read the Scripture foundations</div>
              </div>
            </div>
            <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-2xl p-6">
              <div className="text-xs font-black tracking-widest text-[#D4AF37]">⚔️ PATH 2 — FORGED SUPPORTER</div>
              <div className="text-[10px] font-mono text-[#D4AF37]/60 mt-1">Help Forge the Relics</div>
              <div className="mt-2 text-[10px] font-mono text-[#D4AF37]/30">Support the creation:</div>
              <div className="mt-2 text-[11px] text-white/60 space-y-1.5">
                <div>• Early releases</div><div>• Behind-the-scenes</div><div>• Artwork reveals</div><div>• Development updates</div>
              </div>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-black">
              <div className="text-xs font-black tracking-widest">👑 PATH 3 — STORMBREAKERS ARCHIVE</div>
              <div className="text-[10px] font-mono text-white/30 mt-1">Enter the Complete Forge</div>
              <div className="mt-2 text-[10px] font-mono text-white/20">Deep experience:</div>
              <div className="mt-2 text-[11px] text-white/50 space-y-1.5">
                <div>• Full collections</div><div>• Instrumentals</div><div>• Devotional content</div><div>• Expanded Chronicles</div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-[10px] font-mono text-white/20">Public Revelation is free. Deep Forge is for those helping build it.</div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto border border-white/10 rounded-3xl p-10 bg-zinc-900/20 text-center">
          <div className="text-[10px] font-mono tracking-widest text-white/30">THE STORMBREAKERS OATH</div>
          <div className="mt-8 space-y-2 text-lg"><div className="text-white/60">We do not fight people.</div><div className="font-black">We fight darkness.</div></div>
          <div className="mt-4 text-[11px] font-mono text-[#D4AF37]/50">Every relic tells one story. Every story points to one King.</div>
        </div>

        <div className="mt-12 text-center">
          <a href="/armory" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-zinc-200 transition">⚔️ ENTER THE ARMORY →</a>
        </div>
      </div>
    </div>
  )
}
