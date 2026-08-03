export default function RelicsPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.5em] text-amber-700/60 mb-4">⚔️ HALL OF RELICS</p>
          <h1 className="text-4xl font-black">Songs become artifacts</h1>
          <p className="text-zinc-500 mt-3 text-sm">The artifact creates curiosity.</p>
          <p className="text-[11px] tracking-[0.4em] text-amber-700/40 mt-6">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: "I", name: "RunningWolf Blade", verse: "Hebrews 4:12" },
            { id: "II", name: "Lord of Lords", verse: "Rev 19:16" },
            { id: "III", name: "Blood of Cross", verse: "Col 1:20" },
          ].map(r => (
            <div key={r.id} className="border border-amber-900/20 bg-zinc-900/40 p-8 rounded-lg text-center">
              <p className="text-[10px] tracking-widest text-zinc-600">RELIC {r.id}</p>
              <h3 className="font-bold mt-2">{r.name}</h3>
              <p className="text-xs text-amber-700/60 mt-1">{r.verse}</p>
              <p className="text-[10px] text-zinc-600 mt-4">Artifact ↓ Scripture ↓ Story ↓ Song ↓ Video ↓ Reflection</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-3 opacity-30">
          {Array.from({length: 16}).map((_, i) => (
            <div key={i} className="border border-dashed border-zinc-800 p-6 rounded text-center text-[10px] tracking-widest">SEALED RELIC {i+4}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
