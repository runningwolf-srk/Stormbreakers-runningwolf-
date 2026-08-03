import Link from "next/link";
export default function Page() {
  const relics = [
    { id: "CZ6tylWuerQ", n: "I", icon: "⚔️", t: "RunningWolf Blade", v: "Hebrews 4:12" },
    { id: "9vP0NPrEv9s", n: "II", icon: "👑", t: "Lord of Lords", v: "Revelation 19:16" },
    { id: "4lcbjsNLlzo", n: "III", icon: "✝️", t: "Blood of Cross", v: "Colossians 1:20" },
  ];
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-500 hover:text-zinc-300">← Cover</Link>
        <p className="mt-8 text-[11px] tracking-[0.5em] text-amber-700/60">⚔️ HALL OF RELICS</p>
        <h1 className="text-3xl font-black mt-2">Songs are the artifacts</h1>
        <p className="text-[11px] text-zinc-500 mt-2">Each song becomes a relic — a page from the archive.</p>
        <p className="text-[10px] text-zinc-600 mt-1">Artifact → Scripture → Story → Song → Video → Reflection</p>

        <div className="mt-10 space-y-10">
          {relics.map((r) => (
            <div key={r.n} className="bg-[#0a0a0a] border border-amber-900/20">
              <div className="p-5 border-b border-zinc-800/50">
                <p className="text-[10px] tracking-widest text-zinc-600">RELIC {r.n}</p>
                <h3 className="font-bold text-xl mt-1">{r.icon} {r.t}</h3>
                <p className="text-[11px] text-amber-700/60 mt-1">{r.v}</p>
              </div>
              <div className="relative aspect-video bg-black">
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${r.id}`} title={r.t} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3">
          {[{ n: "IV", t: "Wilderness" }, { n: "V", t: "Shadow" }, { n: "VI", t: "Oath" }].map((s) => (
            <div key={s.n} className="bg-black border border-zinc-800 p-4 flex justify-between items-center opacity-40">
              <span className="text-[11px]">RELIC {s.n} — 🔒 {s.t}</span>
              <span className="text-[10px] italic text-zinc-600">Sealed until the next page is revealed.</span>
            </div>
          ))}
          <div className="bg-black border border-zinc-900 p-4 text-center opacity-20">
            <p className="text-[10px]">RELIC VII — XIX — 🔒 Sealed</p>
          </div>
        </div>

        <p className="text-center text-[10px] tracking-[0.4em] text-amber-700/50 mt-8">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
      </div>
    </main>
  );
}
