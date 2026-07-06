export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 text-center">
        <h1 className="text-6xl font-bold tracking-wider mb-6">STORMBREAKERS</h1>
        
        <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-4">
          A cinematic Christian worship universe where every song, Scripture, and story points to Jesus Christ.
        </p>
        
        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-zinc-400 max-w-xl mx-auto">
          "Write the vision; make it plain on tablets, so he may run who reads it."
          <cite className="block mt-2 not-italic text-sm">— Habakkuk 2:2</cite>
        </blockquote>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-1 px-6 max-w-6xl mx-auto">
        <a href="/armory" className="group bg-zinc-900 p-12 border border-zinc-800 hover:border-amber-500 transition">
          <div className="text-4xl mb-4">🛡️</div>
          <h2 className="text-3xl font-bold mb-2">THE ARMORY</h2>
          <p className="text-zinc-400">8 Relics of Victory</p>
        </a>

        <a href="/valley" className="group bg-zinc-900 p-12 border border-zinc-800 hover:border-amber-500 transition">
          <div className="text-4xl mb-4">⚔️</div>
          <h2 className="text-3xl font-bold mb-2">THE VALLEY</h2>
          <p className="text-zinc-400">8 Relics of Warfare</p>
        </a>

        <a href="/chronicles" className="group bg-zinc-900 p-12 border border-zinc-800 hover:border-amber-500 transition">
          <div className="text-4xl mb-4">📖</div>
          <h2 className="text-3xl font-bold mb-2">THE CHRONICLES</h2>
          <p className="text-zinc-400">The Testimony of RunningWolf</p>
        </a>

        <a href="/word" className="group bg-zinc-900 p-12 border border-zinc-800 hover:border-amber-500 transition">
          <div className="text-4xl mb-4">✝️</div>
          <h2 className="text-3xl font-bold mb-2">THE WORD</h2>
          <p className="text-zinc-400">Scripture that anchors every relic</p>
        </a>
      </section>
    </main>
  )
}
