import Link from "next/link";

export default function WordPage() {
  const relics = [
    { num: "I", title: "RunningWolf Blade", verse: "Hebrews 4:12", status: "revealed", icon: "⚔️" },
    { num: "II", title: "Lord of Lords", verse: "Revelation 19:16", status: "revealed", icon: "👑" },
    { num: "III", title: "Blood of Cross", verse: "Colossians 1:20", status: "revealed", icon: "✝️" },
    { num: "IV", title: "Wilderness", verse: "Awaiting revelation", status: "sealed", icon: "🔒" },
    { num: "V", title: "Shadow", verse: "Awaiting revelation", status: "sealed", icon: "🔒" },
    { num: "VI", title: "Oath", verse: "Awaiting revelation", status: "sealed", icon: "🔒" },
  ];

  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-600 hover:text-zinc-300">← BACK TO COVER</Link>

        <div className="mt-10 text-center">
          <p className="text-[11px] tracking-[0.5em] text-amber-700/60">✝️ THE WORD</p>
          <h1 className="text-4xl font-black mt-4 tracking-tight">ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING</h1>
          <p className="italic text-zinc-500 mt-4">Scripture gives foundation — Relics become discoveries, not lists</p>
          <div className="h-px w-20 bg-amber-900/20 mx-auto mt-6"></div>
        </div>

        <div className="mt-12 bg-[#0a0a0a] border border-amber-900/20 p-8">
          <p className="text-center text-[11px] tracking-[0.4em] text-zinc-600 mb-8">THE RELIC ARCHIVE OPENS</p>

          <div className="grid md:grid-cols-3 gap-4">
            {relics.map((r) => (
              <div key={r.num} className={`border p-5 ${r.status==="revealed"? "bg-[#111] border-amber-900/30" : "bg-black border-zinc-800 opacity-50"}`}>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] tracking-widest text-zinc-600">RELIC {r.num}</p>
                  <p>{r.icon}</p>
                </div>
                <h4 className="font-bold mt-2">{r.title}</h4>
                <p className="text-[11px] text-amber-700/50 mt-1">{r.verse}</p>
                {r.status==="revealed" && <p className="text-[10px] text-zinc-600 mt-3">Image → Scripture → Story → Song → Video → Reflection</p>}
                {r.status==="sealed" && <p className="text-[10px] text-zinc-700 mt-3">🔒 Awaiting revelation — Earned when entering deeper pages</p>}
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-zinc-800 p-4 text-center opacity-40">
              <p className="text-[10px] text-zinc-600">RELIC VII–XIX</p>
              <p className="text-[11px] text-zinc-700 mt-1">Future revelations — Turning pages, not looking at a list</p>
            </div>
            <div className="bg-[#0f0f0f] border border-amber-900/20 p-4 text-center">
              <p className="text-[10px] tracking-widest text-amber-700/50">FLOW</p>
              <p className="text-[11px] text-zinc-500 mt-1">Homepage curiosity → Doors exploration → Word foundation → Relics discovery → King remains center, Keeper guide</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-black tracking-[0.4em] text-amber-700/50 text-sm">THE WORD GUIDES THE BLADE</p>
          <p className="text-[11px] text-zinc-700 mt-2">Viking is the binding. Scripture is the pages. The King is the center.</p>
        </div>
      </div>
    </main>
  );
}
