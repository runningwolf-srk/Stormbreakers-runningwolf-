export default function Hall() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] tracking-[0.6em] text-amber-700/60 text-center">⚔️ HALL OF RELICS</p>
        <h1 className="text-3xl font-black text-center mt-4">What was created?</h1>
        <p className="text-center text-zinc-500 text-xs mt-3">The creation sparks curiosity.</p>
        <p className="text-center text-[10px] tracking-[0.3em] text-amber-700/30 mt-6">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="border border-amber-900/20 p-6 rounded-xl bg-zinc-900/20"><p className="text-[9px] text-amber-700/50 tracking-widest">RELIC I — REVEALED</p><h3 className="font-bold mt-3">⚔️ RunningWolf Blade</h3><p className="text-[10px] text-zinc-500 mt-1">Hebrews 4:12</p><p className="text-xs text-zinc-400 mt-3">For the word of God is alive and active. Sharper than any double-edged sword.</p></div>
          <div className="border border-amber-900/20 p-6 rounded-xl bg-zinc-900/20"><p className="text-[9px] text-amber-700/50 tracking-widest">RELIC II — REVEALED</p><h3 className="font-bold mt-3">👑 Lord of Lords</h3><p className="text-[10px] text-zinc-500 mt-1">Revelation 19:16</p><p className="text-xs text-zinc-400 mt-3">KING OF KINGS AND LORD OF LORDS.</p></div>
          <div className="border border-amber-900/20 p-6 rounded-xl bg-zinc-900/20"><p className="text-[9px] text-amber-700/50 tracking-widest">RELIC III — REVEALED</p><h3 className="font-bold mt-3">✝️ Blood of Cross</h3><p className="text-[10px] text-zinc-500 mt-1">Colossians 1:20</p><p className="text-xs text-zinc-400 mt-3">Peace was not won by the blade. It was bought by blood.</p></div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-8 opacity-40">
          {Array.from({ length: 16 }).map((_, i) => (<div key={i} className="border border-zinc-800 p-4 rounded-xl text-center"><p className="text-[8px] text-zinc-600 tracking-widest">RELIC {String(i + 4).padStart(2, '0')} — SEALED</p><p className="text-[16px] mt-2">🔒</p><p className="text-[8px] text-zinc-700 mt-2">The Chronicle Continues</p></div>))}
        </div>
        <div className="text-center mt-16"><a href="/" className="text-[10px] tracking-[0.5em] text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
}
