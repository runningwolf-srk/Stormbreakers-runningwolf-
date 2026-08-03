import Link from "next/link";
export default function WordPage() {
  const studies = [
    { relic: "I", title: "RunningWolf Blade", verse: "Hebrews 4:12", text: "For the word of God is alive and active. Sharper than any double-edged sword..." },
    { relic: "II", title: "Lord of Lords", verse: "Revelation 19:16", text: "On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS." },
    { relic: "III", title: "Blood of Cross", verse: "Colossians 1:20", text: "And through him to reconcile to himself all things... by making peace through his blood, shed on the cross." },
  ];
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[11px] text-zinc-600">← COVER</Link>
        <div className="mt-8">
          <p className="text-[11px] tracking-[0.5em] text-amber-700/60">✝️ THE WORD</p>
          <h1 className="text-3xl font-black mt-2">Scripture gives foundation</h1>
          <p className="text-[12px] italic text-zinc-500 mt-2">Relics become discoveries, not lists — Each relic is built on a passage, not around it.</p>
        </div>
        <div className="mt-10 space-y-6">
          {studies.map(s=>(
            <div key={s.relic} className="bg-[#0a0a0a] border border-amber-900/20 p-6">
              <p className="text-[10px] text-zinc-600">RELIC {s.relic} — {s.title}</p>
              <p className="text-amber-600/70 text-sm font-bold mt-2">{s.verse}</p>
              <p className="text-zinc-300 text-[13px] mt-3 leading-relaxed italic">“{s.text}”</p>
              <p className="text-[10px] text-zinc-600 mt-4">Study format: Artifact → Scripture → Story → Song → Video → Reflection</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
