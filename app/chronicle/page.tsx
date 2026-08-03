export default function Chronicle() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.6em] text-amber-700/60">📖 THE CHRONICLE</p>
          <h1 className="text-3xl md:text-4xl font-black mt-4">Stories reveal meaning</h1>
          <p className="text-zinc-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">This is where the battles, scars, victories, failures, and testimonies behind each relic are preserved.<br/><span className="text-zinc-200 font-semibold">Not another music page. This is the story behind the artifact.</span></p>
        </div>

        <div className="border border-amber-900/20 rounded-xl p-8 md:p-10 bg-zinc-900/20">
          <p className="text-[10px] tracking-[0.4em] text-amber-700/60">CHAPTER I — FOUNDATION</p>
          <h2 className="text-2xl font-bold mt-4">The Keeper&apos;s Oath</h2>
          <div className="mt-6 space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>RunningWolf is not the center.<br/>He is the guide who carries the pages.</p>
            <p className="text-lg font-semibold text-white">Not the hero above the story —<br/>the witness inside it.</p>
            <p className="text-amber-200/80 font-semibold">The power comes from the King, not the warrior.</p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-1 text-[11px] tracking-widest text-zinc-600">
            <span className="text-amber-500 font-bold">The King</span><span>↓</span><span>The Word</span><span>↓</span><span>The Chronicle</span><span>↓</span><span>The Keeper</span><span>↓</span><span>The Relics</span>
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20"><p className="text-[10px] text-zinc-500 tracking-widest">RELIC I — ⚔️ RunningWolf Blade — Hebrews 4:12</p><p className="font-bold mt-2 text-sm">The story behind the blade.</p><p className="text-xs text-zinc-500 mt-1">How the Word became sharper than steel.</p></div>
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20"><p className="text-[10px] text-zinc-500 tracking-widest">RELIC II — 👑 Lord of Lords — Revelation 19:16</p><p className="font-bold mt-2 text-sm">When the Keeper kneels, the King stands.</p></div>
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20"><p className="text-[10px] text-zinc-500 tracking-widest">RELIC III — ✝️ Blood of Cross — Colossians 1:20</p><p className="font-bold mt-2 text-sm">Peace was not won by the blade.</p><p className="text-xs text-zinc-500 mt-1">It was bought by blood.</p></div>
        </div>

        <div className="text-center mt-14 pt-10 border-t border-amber-900/10">
          <p className="text-[11px] tracking-[0.4em] text-zinc-500">19 Pages Waiting to Be Opened</p>
          <p className="text-[10px] tracking-[0.3em] text-amber-700/40 mt-3">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
          <div className="mt-8"><a href="/" className="text-[10px] tracking-[0.5em] text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
        </div>
      </div>
    </div>
  );
}
