import Link from "next/link";
export default function Page() {
  const vids = [
    { id: "CZ6tylWuerQ", n: "I", icon: "⚔️", t: "RunningWolf Blade", v: "Hebrews 4:12" },
    { id: "9vP0NPrEv9s", n: "II", icon: "👑", t: "Lord of Lords", v: "Revelation 19:16" },
    { id: "4lcbjsNLlzo", n: "III", icon: "✝️", t: "Blood of Cross", v: "Colossians 1:20" },
  ];
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-500 hover:text-zinc-300">← Cover</Link>
        <p className="mt-8 text-[11px] tracking-[0.5em] text-amber-700/60">⚔️ HALL OF RELICS</p>
        <h1 className="text-3xl font-black mt-2">Songs become artifacts</h1>
        <p className="text-[11px] text-zinc-600 mt-2">Artifact → Scripture → Story → Song → Video → Reflection</p>
        <div className="mt-10 space-y-10">
          {vids.map((r) => (
            <div key={r.n} className="bg-[#0a0a0a] border border-amber-900/20">
              <div className="p-6 flex justify-between">
                <div><p className="text-[10px] text-zinc-600">RELIC {r.n}</p><h3 className="font-bold text-xl mt-2">{r.icon} {r.t}</h3><p className="text-[11px] text-amber-700/60 mt-1">{r.v}</p></div>
                <div className="text-[10px] text-zinc-600 text-right leading-5">Artifact<br/>↓<br/>Scripture<br/>↓<br/>Story<br/>↓<br/>Song<br/>↓<br/>Video<br/>↓<br/>Reflection</div>
              </div>
              <div className="relative aspect-video bg-black">
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${r.id}`} title={r.t} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-3 opacity-30">
          {["IV WILDERNESS","V SHADOW","VI OATH"].map(t=><div key={t} className="bg-black border border-zinc-800 p-4 text-center"><p className="text-[10px]">RELIC {t}</p><p className="text-[11px] italic mt-2">Sealed until the next page is revealed.</p></div>)}
        </div>
        <p className="text-center text-[10px] text-zinc-700 mt-8">19 relics — 3 revealed — 16 sealed — Mystery preserved</p>
      </div>
    </main>
  );
}
