import Link from "next/link";
export default function Page() {
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-500">← Cover</Link>
        <p className="mt-8 text-[11px] tracking-[0.5em] text-amber-700/60">✝️ THE WORD</p>
        <h1 className="text-3xl font-black mt-2">Scripture gives foundation</h1>
        <p className="text-[13px] italic text-zinc-400 mt-3">Relics become discoveries, not lists.</p>
        <p className="text-[13px] italic text-zinc-400">Each relic is built on a passage, not around it.</p>

        <div className="mt-10 space-y-6">
          <div className="bg-[#0a0a0a] border border-amber-900/20 p-6"><p className="text-[10px] text-zinc-600">RELIC I</p><p className="font-bold mt-1">Hebrews 4:12</p><p className="text-[13px] text-zinc-300 mt-3 italic">For the word of God is alive and active. Sharper than any double-edged sword...</p><div className="mt-4 text-[10px] text-zinc-600 space-y-1"><p>Meaning • Context • Story • Song connection • Reflection</p></div></div>
          <div className="bg-[#0a0a0a] border border-amber-900/20 p-6"><p className="text-[10px] text-zinc-600">RELIC II</p><p className="font-bold mt-1">Revelation 19:16</p><p className="text-[13px] text-zinc-300 mt-3 italic">KING OF KINGS AND LORD OF LORDS.</p></div>
          <div className="bg-[#0a0a0a] border border-amber-900/20 p-6"><p className="text-[10px] text-zinc-600">RELIC III</p><p className="font-bold mt-1">Colossians 1:20</p><p className="text-[13px] text-zinc-300 mt-3 italic">Making peace through his blood, shed on the cross.</p></div>
        </div>
      </div>
    </main>
  );
}
