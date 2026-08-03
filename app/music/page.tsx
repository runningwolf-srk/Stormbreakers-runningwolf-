export default function HallPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <div className="text-center">
          <p className="text-[10px] tracking-[0.6em] text-amber-700/60">⚔️ HALL OF RELICS</p>
          <h1 className="text-3xl md:text-4xl font-black mt-4 tracking-tight">Songs become artifacts.</h1>
          <p className="text-zinc-500 text-sm mt-2">The artifact creates curiosity.</p>
          <p className="text-[11px] tracking-[0.4em] text-zinc-600 mt-8">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
        </div>

        <div className="mt-14 grid gap-8">
          {[
            { id: "I", icon: "⚔️", name: "RunningWolf Blade", verse: "Hebrews 4:12" },
            { id: "II", icon: "👑", name: "Lord of Lords", verse: "Revelation 19:16" },
            { id: "III", icon: "✝️", name: "Blood of Cross", verse: "Colossians 1:20" },
          ].map(r => (
            <div key={r.id} className="border border-amber-900/15 bg-gradient-to-b from-zinc-900/40 to-zinc-900/10 p-8 md:p-10 rounded-xl">
              <p className="text-[10px] tracking-[0.4em] text-zinc-600">RELIC {r.id}</p>
              <h3 className="text-xl md:text-2xl font-bold mt-3">{r.icon} {r.name}</h3>
              <p className="text-xs tracking-widest text-amber-600/60 mt-1">{r.verse}</p>
              <div className="mt-8 flex flex-col items-center gap-1 text-[10px] tracking-[0.4em] text-zinc-600">
                <span>Artifact</span><span className="text-zinc-700">↓</span><span>Scripture</span><span className="text-zinc-700">↓</span><span>Story</span><span className="text-zinc-700">↓</span><span>Song</span><span className="text-zinc-700">↓</span><span>Video</span><span className="text-zinc-700">↓</span><span>Reflection</span>
              </div>
            </div>
          ))}
        </div>

        {/* MYSTERY NOT CHECKLIST */}
        <div className="mt-20 border border-dashed border-amber-900/20 rounded-xl p-12 md:p-16 text-center bg-zinc-900/20">
          <p className="text-3xl mb-4">🔒</p>
          <h3 className="text-sm tracking-[0.5em] text-zinc-400 font-bold">SEALED PAGES</h3>
          <p className="text-zinc-500 text-sm mt-4">16 relics remain hidden.</p>
          <p className="text-zinc-600 text-xs mt-1">The next chapters have not yet been revealed.</p>
          <p className="text-[11px] tracking-[0.4em] text-amber-700/40 mt-8">The Chronicle continues.</p>
        </div>

      </div>
    </div>
  );
}
