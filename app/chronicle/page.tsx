import Link from "next/link";
export default function Page() {
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-500 hover:text-zinc-300">← Cover</Link>
        <p className="mt-8 text-[11px] tracking-[0.5em] text-amber-700/60">📖 THE CHRONICLE</p>
        <h1 className="text-3xl font-black mt-2">Stories reveal meaning</h1>
        <p className="text-[12px] text-zinc-500 mt-3 leading-relaxed">This is where RunningWolf's testimony, battles, failures, victories, and the story behind each song live. Not a repeat of the music page.</p>

        <div className="mt-10 space-y-6">
          <div className="bg-[#0a0a0a] border border-amber-900/20 p-6">
            <p className="text-[10px] tracking-widest text-zinc-600">CHAPTER I — FOUNDATION</p>
            <h3 className="font-bold mt-2">The Keeper's Oath</h3>
            <p className="text-[12px] text-zinc-400 mt-3 leading-relaxed">RunningWolf is not the center. He is the guide who carries the pages. Not the hero above the story — the witness inside it. The power comes from the King, not the warrior.</p>
            <p className="text-[10px] text-zinc-600 mt-3">The King ↓ The Word ↓ The Chronicle ↓ The Keeper ↓ The Relics</p>
          </div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6">
            <p className="text-[10px] text-zinc-600">RELIC I — ⚔️ RunningWolf Blade — Hebrews 4:12</p>
            <p className="text-[12px] text-zinc-400 mt-3">Story behind the blade. How the Word became sharper than steel.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6">
            <p className="text-[10px] text-zinc-600">RELIC II — 👑 Lord of Lords — Revelation 19:16</p>
            <p className="text-[12px] text-zinc-400 mt-3">When the Keeper kneels, the King stands.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6">
            <p className="text-[10px] text-zinc-600">RELIC III — ✝️ Blood of Cross — Colossians 1:20</p>
            <p className="text-[12px] text-zinc-400 mt-3">Peace was not won by the blade. It was bought by blood.</p>
          </div>
          <div className="border border-amber-900/10 p-6 text-center">
            <p className="text-[10px] tracking-[0.4em] text-zinc-700">19 Pages waiting to be discovered</p>
            <p className="text-[10px] tracking-widest text-amber-700/50 mt-2">The Chronicle Continues</p>
          </div>
        </div>
      </div>
    </main>
  );
}
