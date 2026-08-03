import Link from "next/link";
export default function Page() {
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[11px] tracking-widest text-zinc-500 hover:text-zinc-300">← Cover</Link>
        <p className="mt-8 text-[11px] tracking-[0.5em] text-amber-700/60">📚 THE LIBRARY</p>
        <h1 className="text-3xl font-black mt-2">Knowledge gives depth</h1>
        <div className="mt-10 space-y-3">
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="font-bold text-sm">📖 Chronicle Volumes</p><p className="text-[11px] text-zinc-600 mt-1">The written saga</p></div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="font-bold text-sm">🔥 Devotionals</p><p className="text-[11px] text-zinc-600 mt-1">Lessons from each relic</p></div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="font-bold text-sm">✝️ Study Guides</p><p className="text-[11px] text-zinc-600 mt-1">Scripture deep dives</p></div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="font-bold text-sm">🎨 Artwork Archive</p><p className="text-[11px] text-zinc-600 mt-1">Relic symbols, seals, illustrations</p></div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="font-bold text-sm">🗺️ Canon Timeline</p><p className="text-[11px] text-zinc-600 mt-1">Chapter I → Chapter XIX</p></div>
        </div>
      </div>
    </main>
  );
}
