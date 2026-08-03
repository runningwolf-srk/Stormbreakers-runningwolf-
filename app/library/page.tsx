export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.6em] text-amber-700/60">📚 THE LIBRARY</p>
          <h1 className="text-3xl md:text-4xl font-black mt-4">Knowledge gives depth.</h1>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="border border-zinc-800 p-7 rounded-xl bg-zinc-900/20 hover:border-amber-900/20 transition"><p className="font-bold">📖 Chronicle Volumes</p><p className="text-xs text-zinc-500 mt-2">The written saga — full chapters</p></div>
          <div className="border border-zinc-800 p-7 rounded-xl bg-zinc-900/20 hover:border-amber-900/20 transition"><p className="font-bold">🔥 Devotionals</p><p className="text-xs text-zinc-500 mt-2">Lessons from each relic</p></div>
          <div className="border border-zinc-800 p-7 rounded-xl bg-zinc-900/20 hover:border-amber-900/20 transition"><p className="font-bold">✝️ Study Guides</p><p className="text-xs text-zinc-500 mt-2">Scripture deep dives</p></div>
          <div className="border border-zinc-800 p-7 rounded-xl bg-zinc-900/20 hover:border-amber-900/20 transition"><p className="font-bold">🎨 Artwork Archive</p><p className="text-xs text-zinc-500 mt-2">Relic symbols, seals, illustrations</p></div>
          <div className="border border-zinc-800 p-7 rounded-xl bg-zinc-900/20 md:col-span-2 hover:border-amber-900/20 transition"><p className="font-bold">🗺️ Canon Timeline</p><p className="text-xs text-zinc-500 mt-2">Chapter I → Chapter XIX — The Open Chronicle</p></div>
        </div>

        <div className="text-center mt-12"><a href="/" className="text-[10px] tracking-widest text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
}
