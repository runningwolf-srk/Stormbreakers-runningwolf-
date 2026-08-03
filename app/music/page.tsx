export default function Hall() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.6em] text-amber-700/60">⚔️ HALL OF RELICS — THE ARTIFACT</p>
        <h1 className="text-3xl md:text-4xl font-black mt-4">Songs become artifacts.</h1>
        <p className="text-zinc-500 text-sm mt-2">The creation sparks curiosity.</p>
        <p className="text-[10px] tracking-[0.4em] text-zinc-600 mt-8">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>

        <div className="mt-10 border border-amber-900/15 rounded-xl p-5 bg-zinc-900/20 max-w-lg mx-auto">
          <p className="text-[9px] tracking-[0.4em] text-zinc-500 mb-2">CREATION JOURNEY — How a song is forged</p>
          <p className="text-[10px] tracking-widest text-zinc-500">Artifact → Scripture → Story → Song → Video → Reflection</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 text-left">
          <div className="border border-amber-900/20 bg-zinc-900/30 p-7 rounded-xl"><p className="text-[9px] text-zinc-600">RELIC I</p><p className="font-bold mt-2">⚔️ RunningWolf Blade</p><p className="text-xs text-amber-700/60">Hebrews 4:12</p></div>
          <div className="border border-amber-900/20 bg-zinc-900/30 p-7 rounded-xl"><p className="text-[9px] text-zinc-600">RELIC II</p><p className="font-bold mt-2">👑 Lord of Lords</p><p className="text-xs text-amber-700/60">Revelation 19:16</p></div>
          <div className="border border-amber-900/20 bg-zinc-900/30 p-7 rounded-xl"><p className="text-[9px] text-zinc-600">RELIC III</p><p className="font-bold mt-2">✝️ Blood of Cross</p><p className="text-xs text-amber-700/60">Colossians 1:20</p></div>
        </div>

        <div className="mt-16 border border-dashed border-amber-900/20 rounded-xl p-12 bg-zinc-900/10">
          <p className="text-2xl">🔒</p>
          <p className="text-[11px] tracking-[0.5em] text-zinc-500 mt-4 font-bold">SEALED PAGES</p>
          <p className="text-sm text-zinc-500 mt-3">16 relics remain sealed.</p>
          <p className="text-xs text-zinc-600 mt-1">The next chapters have not yet been revealed.</p>
          <p className="text-[10px] tracking-[0.4em] text-amber-700/30 mt-8">The Chronicle continues.</p>
        </div>

        <div className="mt-12"><a href="/" className="text-[10px] tracking-[0.5em] text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
}
