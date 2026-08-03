export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] text-amber-700/60 text-center">📚 THE LIBRARY</p>
        <h1 className="text-3xl font-black text-center mt-4">Knowledge gives depth.</h1>
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          <div className="border border-zinc-800 p-6 rounded-lg"><p>📖 Chronicle Volumes</p><p className="text-xs text-zinc-500 mt-1">The written saga</p></div>
          <div className="border border-zinc-800 p-6 rounded-lg"><p>🔥 Devotionals</p><p className="text-xs text-zinc-500 mt-1">Lessons from each relic</p></div>
          <div className="border border-zinc-800 p-6 rounded-lg"><p>✝️ Study Guides</p><p className="text-xs text-zinc-500 mt-1">Scripture deep dives</p></div>
          <div className="border border-zinc-800 p-6 rounded-lg"><p>🎨 Artwork Archive</p><p className="text-xs text-zinc-500 mt-1">Relic symbols, seals, illustrations</p></div>
          <div className="border border-zinc-800 p-6 rounded-lg md:col-span-2"><p>🗺️ Canon Timeline</p><p className="text-xs text-zinc-500 mt-1">Chapter I → Chapter XIX</p></div>
        </div>
      </div>
    </div>
  );
}
