export default function Library() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.6em] text-amber-700/60">📚 THE LIBRARY</p>
        <h1 className="text-3xl md:text-4xl font-black mt-4">Knowledge gives depth.</h1>
        <div className="mt-12 grid md:grid-cols-2 gap-4 text-left">
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20"><p className="font-bold text-sm">📖 Chronicle Volumes</p><p className="text-xs text-zinc-500 mt-1">The written saga</p></div>
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20"><p className="font-bold text-sm">🔥 Devotionals</p><p className="text-xs text-zinc-500 mt-1">Lessons from each relic</p></div>
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20"><p className="font-bold text-sm">✝️ Study Guides</p><p className="text-xs text-zinc-500 mt-1">Scripture deep dives</p></div>
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20"><p className="font-bold text-sm">🎨 Artwork Archive</p><p className="text-xs text-zinc-500 mt-1">Relic symbols, seals, illustrations</p></div>
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/20 md:col-span-2"><p className="font-bold text-sm">🗺️ Canon Timeline</p><p className="text-xs text-zinc-500 mt-1">Chapter I → Chapter XIX</p><p className="text-[10px] tracking-widest text-amber-700/40 mt-2">The Open Chronicle continues.</p></div>
        </div>
        <div className="mt-12"><a href="/" className="text-[10px] tracking-[0.5em] text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
}
