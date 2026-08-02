"use client"

const RELICS = [
  {
    slug: "runningwolf-blade",
    num: "I",
    title: "RUNNINGWOLF BLADE",
    icon: "⚔️",
    label: "The Word → The Awakening",
    verse: "Hebrews 4:12",
    meaning: "The foundation is truth. Before the warrior can fight, he must hear the Word.",
    status: "FORGED",
    color: "FORGED"
  },
  {
    slug: "lord-of-lords",
    num: "II",
    title: "LORD OF LORDS",
    icon: "👑",
    label: "The King → The Revelation",
    verse: "Revelation 19:16",
    meaning: "The warrior discovers who sits on the throne.",
    status: "FORGED",
    color: "FORGED"
  },
  {
    slug: "blood-of-cross",
    num: "III",
    title: "BLOOD OF CROSS",
    icon: "✝️",
    label: "The Cross → The Redemption",
    verse: "Colossians 1:20",
    meaning: "The victory was purchased through sacrifice.",
    status: "CURRENTLY BEING FORGED",
    color: "FORGING"
  },
]

const LOCKS = ["IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-24">

        {/* CANON */}
        <div className="text-center">
          <div className="inline-block border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-5 py-1.5 text-[9px] sm:text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">
            ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING
          </div>
          <h1 className="text-[44px] sm:text-7xl font-black tracking-tighter mt-8 leading-[0.85]">
            RUNNINGWOLF<br/><span className="text-white/20">STORMBREAKERS</span>
          </h1>
          <p className="mt-4 text-white/50 text-xs sm:text-sm">A cinematic Christian saga — Season 1 is being forged.</p>

          <div className="mt-6 inline-block border border-white/10 rounded-2xl px-6 sm:px-8 py-4 bg-zinc-900/40 text-center">
            <div className="text-xl sm:text-2xl font-black">FORGED 2/19 • 11% COMPLETE</div>
            <div className="text-[9px] sm:text-[10px] font-mono text-white/40 mt-1 tracking-widest">⚔️ 2 FORGED • 🔥 1 CURRENTLY BEING FORGED • 🔒 16 AWAITING REVELATION</div>
          </div>
        </div>

        {/* CHAPTER I */}
        <div className="mt-16">
          <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-2xl p-6 sm:p-7 text-center">
            <div className="text-[11px] sm:text-[12px] font-black tracking-[0.35em]">CHAPTER I — THE FORGING OF THE WARRIOR</div>
            <div className="mt-3 text-xs sm:text-sm text-white/60">The Word awakens. The King is revealed. The Cross redeems.</div>
            <div className="mt-3 flex justify-center gap-6 text-[9px] sm:text-[10px] font-mono text-white/30"><span>⚔️ Word</span><span>👑 King</span><span>✝️ Cross</span></div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELICS.map(r => (
              <a key={r.slug} href={`/armory/${r.slug}`} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30 hover:border-white/20 hover:bg-zinc-900/50 transition text-left block group">
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{r.icon}</span>
                  <span className={`text-[8px] font-mono px-2.5 py-1 rounded-full tracking-widest ${r.color === 'FORGED'? 'bg-white/10 text-white/70' : 'bg-orange-500/20 text-orange-300'}`}>{r.status}</span>
                </div>
                <div className="mt-4 text-[10px] font-mono text-white/30">RELIC {r.num}</div>
                <div className="font-black text-sm tracking-tight group-hover:text-[#D4AF37] transition">{r.title}</div>
                <div className="text-[11px] text-[#D4AF37]/60 mt-1">{r.label}</div>
                <div className="mt-3 text-[11px] text-white/40 leading-relaxed">Meaning: {r.meaning}</div>
                <div className="text-[11px] text-white/30">Scripture: {r.verse}</div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[9px] font-mono text-white/20 group-hover:text-white/40">▶ CLICK TO ENTER RELIC →</div>
              </a>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mt-14 border border-white/10 rounded-2xl p-6 sm:p-8 bg-zinc-900/20">
          <div className="text-[10px] font-mono tracking-[0.35em] text-white/30">⚔️ FORGE TIMELINE</div>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">2026 — CHAPTER I</div>
              <div className="mt-3 space-y-2 text-xs">
                <div>⚔️ Relic I — RUNNINGWOLF BLADE — <span className="text-[#D4AF37]">FORGED</span></div>
                <div>👑 Relic II — LORD OF LORDS — <span className="text-[#D4AF37]">FORGED</span></div>
                <div>✝️ Relic III — BLOOD OF CROSS — <span className="text-orange-400">FORGING</span></div>
              </div>
            </div>
            <div className="opacity-40">
              <div className="text-[10px] font-mono text-white/30 tracking-widest">FUTURE</div>
              <div className="mt-3 space-y-2 text-xs text-white/40">
                <div>🔒 Relic IV — The next chapter has not been forged</div>
                <div>🔒 Relic V-XIX — Awaiting revelation</div>
              </div>
            </div>
          </div>
        </div>

        {/* FORGE RANK */}
        <div className="mt-8 border border-[#D4AF37]/20 rounded-2xl p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
          <div className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37]/70">👑 FORGE RANK — REWARD SYSTEM</div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="border border-white/10 rounded-xl p-4 bg-black/40"><div className="text-lg">🔥</div><div className="text-[10px] font-mono mt-1 text-white/50">3 RELICS</div><div className="text-xs font-black mt-1">INITIATE</div></div>
            <div className="border border-[#D4AF37]/20 rounded-xl p-4 bg-[#D4AF37]/5"><div className="text-lg">⚔️</div><div className="text-[10px] font-mono mt-1 text-[#D4AF37]/60">7 RELICS</div><div className="text-xs font-black mt-1 text-[#D4AF37]">WARRIOR</div></div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/40"><div className="text-lg">👑</div><div className="text-[10px] font-mono mt-1 text-white/50">19 RELICS</div><div className="text-xs font-black mt-1">STORMBREAKER</div></div>
          </div>
        </div>

        {/* LOCKED */}
        <div className="mt-12">
          <div className="text-[11px] font-mono tracking-[0.35em] text-white/30">🔒 FUTURE RELICS — AWAITING REVELATION</div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {LOCKS.map(n => (
              <div key={n} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 opacity-30">
                <div className="text-[10px] font-mono tracking-widest">🔒 RELIC {n}</div>
                <div className="text-[10px] text-white/30 mt-1.5 leading-snug">THE NEXT CHAPTER HAS NOT BEEN FORGED</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 EXPERIENCES */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs">⚔️ ARMORY</div><div className="text-[11px] text-white/40 mt-1">Hear the relics.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs">📖 CHRONICLES</div><div className="text-[11px] text-white/40 mt-1">Walk the testimony.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs">✝️ WORD</div><div className="text-[11px] text-white/40 mt-1">Stand on Scripture.</div></div>
          <div className="border border-white/10 rounded-2xl p-5 bg-zinc-900/20"><div className="font-black text-xs">📚 BOOKS</div><div className="text-[11px] text-white/40 mt-1">Live the truth.</div></div>
        </div>

        {/* FORGE PATHS */}
        <div className="mt-14 border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8 bg-zinc-900/20">
          <div className="text-center">
            <div className="text-[11px] font-mono tracking-[0.35em] text-[#D4AF37]/70">⚔️ THE FORGE PATHS</div>
            <div className="text-sm text-white/50 mt-2">Songs are free. Depth is forged. Support helps build the cathedral.</div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="border border-white/10 rounded-2xl p-6 bg-black/40"><div className="text-xs font-black">🐺 PATH 1 — LISTENER</div><div className="text-[10px] font-mono text-white/30 mt-1">Enter the Forge • Free</div><div className="mt-3 text-[11px] text-white/50 space-y-1"><div>• Hear the songs</div><div>• Follow relic journey</div><div>• Scripture foundations</div></div></div>
            <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-2xl p-6"><div className="text-xs font-black text-[#D4AF37]">⚔️ PATH 2 — FORGED SUPPORTER</div><div className="text-[10px] font-mono text-[#D4AF37]/60 mt-1">Help Forge the Relics</div><div className="mt-3 text-[11px] text-white/60 space-y-1"><div>• Early releases</div><div>• Behind-the-scenes</div><div>• Artwork reveals</div><div>• Development updates</div></div></div>
            <div className="border border-white/10 rounded-2xl p-6 bg-black"><div className="text-xs font-black">👑 PATH 3 — ARCHIVE</div><div className="text-[10px] font-mono text-white/30 mt-1">Complete Forge</div><div className="mt-3 text-[11px] text-white/50 space-y-1"><div>• Full collections</div><div>• Instrumentals</div><div>• Devotional content</div><div>• Expanded Chronicles</div></div></div>
          </div>
        </div>

        <div className="mt-14 max-w-3xl mx-auto border border-white/10 rounded-3xl p-8 sm:p-10 bg-zinc-900/20 text-center">
          <div className="text-[10px] font-mono tracking-widest text-white/30">THE STORMBREAKERS OATH</div>
          <div className="mt-6 space-y-1 text-base sm:text-lg"><div className="text-white/60">We do not fight people.</div><div className="font-black">We fight darkness.</div></div>
          <div className="mt-4 text-[11px] font-mono text-[#D4AF37]/50">Every relic tells one story. Every story points to one King.</div>
        </div>

        <div className="mt-10 text-center">
          <a href="/armory" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-zinc-200 transition">⚔️ ENTER THE ARMORY →</a>
        </div>

      </div>
    </div>
  )
                                                                                                                                                                                                                                                                                                                                                           }
