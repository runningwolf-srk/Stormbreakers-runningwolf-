export default function Word() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.6em] text-amber-700/60">✝️ THE WORD</p>
        <h1 className="text-3xl md:text-4xl font-black mt-4">Scripture gives foundation.</h1>
        <p className="text-zinc-500 text-sm mt-3">Relics become discoveries, not lists.<br/>Each relic is built on a passage, not around it.</p>
        <div className="mt-12 border border-amber-900/15 rounded-xl p-6 bg-zinc-900/20 max-w-sm mx-auto">
          <p className="text-[9px] tracking-[0.4em] text-zinc-500 mb-3">SCRIPTURE FORMAT</p>
          <div className="flex flex-col items-center gap-1 text-[11px] tracking-widest text-zinc-500">
            <span>Meaning</span><span className="text-zinc-700">↓</span><span>Context</span><span className="text-zinc-700">↓</span><span>Story</span><span className="text-zinc-700">↓</span><span>Song Connection</span><span className="text-zinc-700">↓</span><span>Reflection</span>
          </div>
        <div className="text-center mt-12"><a href="/" className="text-[10px] tracking-[0.5em] text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
      }
