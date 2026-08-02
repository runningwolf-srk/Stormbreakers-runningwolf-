"use client"

const CANON = {
  TAGLINE: "ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING",
  STATUS: "FORGED 2/19 • 🔥 1 CURRENTLY BEING FORGED • 🔒 16 AWAITING REVELATION",
  CLOSING: "Every relic tells one story. Every story points to one King."
}

const RELICS = [
  {slug:"runningwolf-blade", num:"I", title:"RUNNINGWOLF BLADE", icon:"⚔️", verse:"Hebrews 4:12", theme:"The Word → The Awakening", msg:"The foundation is truth.", status:"FORGED"},
  {slug:"lord-of-lords", num:"II", title:"LORD OF LORDS", icon:"👑", verse:"Revelation 19:16", theme:"The King → The Revelation", msg:"The warrior discovers who sits on the throne.", status:"FORGED"},
  {slug:"blood-of-cross", num:"III", title:"BLOOD OF CROSS", icon:"✝️", verse:"Colossians 1:20", theme:"The Cross → The Redemption", msg:"The victory was purchased through sacrifice.", status:"CURRENTLY BEING FORGED"},
]

const LOCKS = ["IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"]

export default function Home(){
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center">
          <div className="inline-block border border-yellow-500/20 bg-yellow-500/5 rounded-full px-5 py-1.5 text-[10px] font-mono tracking-[0.35em] text-yellow-500/70">
            {CANON.TAGLINE}
          </div>
          <h1 className="text-7xl font-black tracking-tighter mt-8">
            RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span>
          </h1>
          <p className="mt-4 text-white/50 text-sm">
            A cinematic Christian saga — Season 1 is being forged.
          </p>
          <div className="mt-5 inline-block border border-white/10 rounded-2xl px-6 py-3 bg-zinc-900/40">
            <div className="text-2xl font-black">FORGED 2/19 • 11%</div>
            <div className="text-[10px] font-mono text-white/40 mt-1">{CANON.STATUS}</div>
          </div>
        </div>

        <div className="mt-16">
          <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-2xl p-7 text-center">
            <div className="text-[12px] font-black tracking-[0.3em]">CHAPTER I — THE FORGING OF THE WARRIOR</div>
            <div className="mt-2 text-sm text-white/60">The Word awakens. The King is revealed. Redemption is purchased.</div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {RELICS.map(r=>(
              <a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30 hover:border-white/20 text-left block">
                <div className="flex justify-between"><span className="text-2xl">{r.icon}</span><span className="text-[8px] font-mono px-2 py-1 rounded-full bg-white/10">{r.status}</span></div>
                <div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num}</div>
                <div className="font-black text-sm">{r.title}</div>
                <div className="text-[11px] text-white/50 mt-1">{r.theme}</div>
                <div className="mt-3 text-[11px] text-white/30">Meaning: {r.msg}</div>
                <div className="text-[11px] text-white/30">Scripture: {r.verse}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="text-[11px] font-mono tracking-widest text-white/30">🔒 FUTURE RELICS — AWAITING REVELATION</div>
          <div className="mt-4 grid md:grid-cols-4 gap-3">
            {LOCKS.map(n=>(
              <div key={n} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 opacity-40">
                <div className="text-[10px] font-mono">RELIC {n} 🔒</div>
                <div className="text-[11px] font-bold mt-1">RELIC {n}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border border-yellow-500/20 rounded-3xl p-8 bg-zinc-900/20">
          <div className="text-center">
            <div className="text-[11px] font-mono tracking-[0.35em] text-yellow-500/70">⚔️ THE FORGE PATHS</div>
            <div className="text-sm text-white/50 mt-2">Songs are free. Depth is forged. Support helps build the cathedral.</div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
            <div className="border border-white/10 rounded-2xl p-6 bg-black/40">
              <div className="text-xs font-black tracking-widest">🐺 PATH 1 — LISTENER</div>
              <div className="text-[11px] font-mono text-white/30 mt-1">Enter the Forge</div>
            </div>
            <div className="border border-yellow-500/30 bg-yellow-500/5 rounded-2xl p-6">
              <div className="text-xs font-black tracking-widest text-yellow-500">⚔️ PATH 2 — FORGED SUPPORTER</div>
              <div className="text-[11px] font-mono text-yellow-500/60 mt-1">Help Forge the Relics</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-black">
              <div className="text-xs font-black tracking-widest">👑 PATH 3 — STORMBREAKERS ARCHIVE</div>
              <div className="text-[11px] font-mono text-white/30 mt-1">Enter the Complete Forge</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/armory" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest">
            ⚔️ ENTER THE ARMORY →
          </a>
        </div>
      </div>
    </div>
  )
}
EOF
