export default function NotFound() {
  return (
    <main className="px-4 py-24 max-w-2xl mx-auto text-center">
      <p className="text-6xl">⚔️</p>
      <h1 className="text-5xl font-black mt-6 tracking-tighter">THE PATH IS STILL BEING FORGED</h1>
      <p className="mt-4 text-zinc-400">This relic has not been revealed yet.</p>
      <div className="mt-2 text-sm text-zinc-600 leading-relaxed">The Relic is being prepared.<br/>The Word remains.<br/>The journey continues.</div>
      <div className="mt-10 grid grid-cols-2 gap-3 text-sm">
        <a href="/armory" className="bg-white text-black rounded-full py-3 font-bold">⚔️ Armory — Hear</a>
        <a href="/chronicles" className="bg-zinc-900 border border-zinc-800 rounded-full py-3 font-bold">📖 Chronicles — Understand</a>
        <a href="/word" className="bg-zinc-900 border border-zinc-800 rounded-full py-3 font-bold">✝️ Word — Root</a>
        <a href="/book" className="bg-amber-500 text-black rounded-full py-3 font-black">📚 Books — Live</a>
      </div>
      <p className="mt-12 text-xs uppercase tracking-[0.4em] text-zinc-600">RUNNING WOLF STORMBREAKERS • ONE KING</p>
    </main>
  )
}
