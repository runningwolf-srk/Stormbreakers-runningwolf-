import Link from "next/link";
export default function HallOfRelicsPage() {
  const videos = [
    { id: "CZ6tylWuerQ", relic: "RELIC I", title: "RunningWolf Blade", verse: "Hebrews 4:12", icon: "⚔️" },
    { id: "9vP0NPrEv9s", relic: "RELIC II", title: "Lord of Lords", verse: "Revelation 19:16", icon: "👑" },
    { id: "4lcbjsNLlzo", relic: "RELIC III", title: "Blood of Cross", verse: "Colossians 1:20", icon: "✝️" },
  ];
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-600">← BACK TO COVER</Link>
        <div className="mt-10 text-center">
          <p className="text-[11px] tracking-[0.5em] text-amber-700/60">⚔️ HALL OF RELICS</p>
          <h1 className="text-4xl font-black mt-4">MUSIC IS THE ARTIFACT</h1>
          <p className="italic text-zinc-500 mt-4">THE RELIC ARCHIVE OPENS — 19 PAGES WAITING TO BE OPENED</p>
          <p className="text-[10px] text-zinc-700 mt-3">The King → The Word → The Chronicle → The Keeper → The Relics</p>
          <div className="h-px w-20 bg-amber-900/20 mx-auto mt-6"></div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.relic} className="bg-[#0a0a0a] border border-amber-900/30 p-3">
              <div className="flex justify-between px-2 py-2"><p className="text-[10px] text-zinc-600">{v.relic}</p><p>{v.icon}</p></div>
              <div className="relative w-full aspect-video bg-black">
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${v.id}`} title={v.title} frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="p-3">
                <h4 className="font-bold">{v.title}</h4>
                <p className="text-[11px] text-amber-700/50 mt-1">{v.verse}</p>
                <p className="text-[10px] text-zinc-500 mt-2">Artifact → Scripture → Story → Song → Video → Reflection</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4 opacity-40">
          {[
            { n: "IV", t: "WILDERNESS" },
            { n: "V", t: "SHADOW" },
            { n: "VI", t: "OATH" },
          ].map((r) => (
            <div key={r.n} className="bg-black border border-zinc-800 p-4 text-center">
              <p className="text-[10px] text-zinc-600">RELIC {r.n}</p>
              <p className="font-bold text-sm mt-1">🔒 {r.t}</p>
              <p className="text-[11px] text-zinc-600 mt-2 italic">Sealed until the next page is revealed.</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><p className="font-black tracking-[0.4em] text-amber-700/50 text-sm">THE WORD GUIDES THE BLADE</p></div>
      </div>
    </main>
  );
}
