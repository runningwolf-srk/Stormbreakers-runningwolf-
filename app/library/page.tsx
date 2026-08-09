export default function Library() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.6em] text-amber-700/60">📚 THE LIBRARY</p>
        <h1 className="text-3xl font-black mt-4">How do I go deeper?</h1>
        <p className="text-zinc-500 text-sm mt-4">Study • Lore • Artwork • Timeline • Expanded learning</p>
        <div className="mt-12 grid gap-4 text-left">
          <div className="border border-zinc-800 p-6 rounded-xl opacity-60"><p className="text-xs font-bold">🔥 THE FORGE — COMING AFTER CHAPTER I</p><p className="text-[10px] text-zinc-500 mt-2">Where ideas become artifacts. Concept → Prayer → Scripture → Creation → Relic</p></div>
          <div className="border border-zinc-800 p-6 rounded-xl"><p className="text-xs font-bold">Timeline of Relics</p><p className="text-[10px] text-zinc-500 mt-1">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p></div>
        </div>
        <div className="mt-12"><a href="/" className="text-[10px] tracking-[0.5em] text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
}
