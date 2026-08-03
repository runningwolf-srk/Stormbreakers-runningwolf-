export default function HallPage() {
  const relics = [
    { id: "I", icon: "⚔️", name: "RunningWolf Blade", verse: "Hebrews 4:12" },
    { id: "II", icon: "👑", name: "Lord of Lords", verse: "Revelation 19:16" },
    { id: "III", icon: "✝️", name: "Blood of Cross", verse: "Colossians 1:20" },
  ];
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] text-amber-700/60">⚔️ HALL OF RELICS</p>
        <h1 className="text-3xl font-black mt-4">Songs become artifacts.</h1>
        <p className="text-zinc-500 text-sm mt-2">The artifact creates curiosity.</p>
        <p className="text-[10px] tracking-[0.4em] text-zinc-600 mt-8">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {relics.map(r => (
            <div key={r.id} className="border border-amber-900/20 bg-zinc-900/30 p-8 rounded-xl">
              <p className="text-[10px] tracking-widest text-zinc-500">RELIC {r.id}</p>
              <p className="text-2xl mt-2">{r.icon} {r.name}</p>
              <p className="text-xs text-amber-600/60 mt-1">{r.verse}</p>
              <div className="mt-6 text-[10px] tracking-widest text-zinc-600 leading-6">Artifact<br/>↓<br/>Scripture<br/>↓<br/>Story<br/>↓<br/>Song<br/>↓<br/>Video<br/>↓<br/>Reflection</div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <p className="text-[10px] tracking-[0.5em] text-zinc-600 mb-6">SEALED RELICS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 opacity-30">
            {Array.from({length: 16}).map((_, i) => <div key={i} className="border border-dashed border-zinc-800 p-4 rounded text-[10px] tracking-widest">RELIC {["IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"][i]} — SEALED</div>)}
          </div>
          <p className="text-xs text-zinc-600 mt-8 italic">The next page has not yet been written.</p>
        </div>
      </div>
    </div>
  );
}
