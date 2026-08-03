import Link from "next/link";
export default function WordPage() {
  const relics = [
    { num: "I", title: "RunningWolf Blade", verse: "Hebrews 4:12", icon: "⚔️" },
    { num: "II", title: "Lord of Lords", verse: "Revelation 19:16", icon: "👑" },
    { num: "III", title: "Blood of Cross", verse: "Colossians 1:20", icon: "✝️" },
  ];
  const sealed = [{ num: "IV", title: "WILDERNESS" },{ num: "V", title: "SHADOW" },{ num: "VI", title: "OATH" }];
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-600">← BACK TO COVER</Link>
        <div className="mt-10 text-center">
          <p className="text-[11px] tracking-[0.5em] text-amber-700/60">✝️ THE WORD</p>
          <h1 className="text-4xl font-black mt-4">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</h1>
          <p className="italic text-zinc-500 mt-4">Scripture gives foundation — Relics become discoveries, not lists</p>
          <p className="text-[10px] text-zinc-700 mt-3">The King → The Word → The Chronicle → The Keeper → The Relics</p>
          <div className="h-px w-20 bg-amber-900/20 mx-auto mt-6"></div>
        </div>
        <div className="mt-12 bg-[#0a0a0a] border border-amber-900/20 p-8">
          <p className="text-center text-[11px] tracking-[0.4em] text-zinc-600 mb-8">THE RELIC ARCHIVE OPENS — 19 PAGES WAITING TO BE OPENED</p>
          <div className="grid md:grid-cols-3 gap-4">
            {relics.map((r)=><div key={r.num} className="bg-[#111] border border-amber-900/30 p-5"><p className="text-[10px] text-zinc-600">RELIC {r.num}</p><h4 className="font-bold mt-2">{r.title}</h4><p className="text-[11px] text-amber-700/50 mt-1">{r.verse}</p><p className="text-[10px] text-zinc-500 mt-3">Artifact → Scripture → Story → Song → Video → Reflection</p></div>)}
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {sealed.map((r)=><div key={r.num} className="bg-black border border-zinc-800 p-5 opacity-60"><p className="text-[10px] text-zinc-600">RELIC {r.num}</p><div className="flex gap-2 mt-2"><span>🔒</span><h4 className="font-bold text-sm">{r.title}</h4></div><p className="text-[11px] text-zinc-600 mt-3 italic">Sealed until the next page is revealed.</p></div>)}
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-zinc-800 p-4 text-center opacity-40"><p className="text-[10px] text-zinc-600">RELIC VII–XIX</p><p className="text-[11px] text-zinc-700 mt-1">Future revelations — Sealed until the next page is revealed</p></div>
            <div className="bg-[#0f0f0f] border border-amber-900/20 p-4 text-center"><p className="text-[10px] tracking-widest text-amber-700/50">FOUR DOORS PHILOSOPHY</p><p className="text-[11px] text-zinc-500 mt-1">Hear it (Relics) → Understand it (Chronicle) → Root it (Word) → Go deeper (Library)</p></div>
          </div>
        </div>
        <div className="mt-10 text-center"><p className="font-black tracking-[0.4em] text-amber-700/50 text-sm">THE WORD GUIDES THE BLADE</p><p className="text-[11px] text-zinc-700 mt-2">Viking is the binding. Scripture is the pages. The King is the center.</p></div>
      </div>
    </main>
  );
}
