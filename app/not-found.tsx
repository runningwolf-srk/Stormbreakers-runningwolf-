// @ts-nocheck
export default function NotFound() {
  return (
    <main className="px-4 py-28 max-w-2xl mx-auto text-center">
      <div className="text-6xl">⚔️</div>
      <h1 className="text-5xl font-black mt-8 tracking-tighter">THE PATH IS STILL BEING FORGED</h1>
      <p className="text-zinc-300 mt-6">This relic has not been revealed yet.</p>
      <div className="mt-3 text-sm text-zinc-600 leading-relaxed">
        The Word remains.<br/>The journey continues.<br/>The Relic is being prepared.
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <a href="/" className="px-6 py-3 bg-white text-black rounded-full font-black">← Return to Stormbreakers</a>
        <div className="flex gap-2 justify-center">
          <a href="/armory" className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs">⚔️ Armory</a>
          <a href="/chronicles" className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs">📖 Chronicles</a>
          <a href="/word" className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs">✝️ Word</a>
          <a href="/book" className="px-4 py-2 bg-amber-500 text-black rounded-full text-xs font-bold">📚 Books</a>
        </div>
      </div>
      <p className="mt-16 text-xs uppercase tracking-[0.4em] text-zinc-700">RUNNING WOLF STORMBREAKERS • ONE KING</p>
    </main>
  )
}
