// @ts-nocheck
export default function NotFound() {
  return (
    <main className="px-4 py-28 max-w-2xl mx-auto text-center">
      <div className="text-6xl">⚔️</div>
      <h1 className="text-5xl font-black mt-8 tracking-tighter">THE RELIC HAS NOT BEEN REVEALED</h1>
      <div className="mt-6 text-zinc-300 leading-relaxed">
        <p>This path is still being forged.</p>
        <p className="mt-2 text-zinc-500 text-sm">The song is not written.<br/>The chapter is not opened.<br/>The King is still building.</p>
      </div>
      <div className="mt-10">
        <a href="/" className="inline-block px-8 py-4 bg-white text-black rounded-full font-black">Return to the journey →</a>
        <div className="mt-6 flex gap-2 justify-center flex-wrap text-xs uppercase tracking-widest">
          <a href="/armory" className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">⚔️ Hear — Armory</a>
          <a href="/chronicles" className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">📖 Understand — Chronicles</a>
          <a href="/word" className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">✝️ Root — Word</a>
          <a href="/book" className="px-4 py-2 bg-amber-500 text-black rounded-full font-bold">📚 Live — Books</a>
        </div>
      </div>
      <p className="mt-16 text-xs uppercase tracking-[0.4em] text-zinc-700">ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
    </main>
  )
}
