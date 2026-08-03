export default function WordPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.6em] text-amber-700/60">✝️ THE WORD</p>
        <h1 className="text-3xl md:text-4xl font-black mt-4">Scripture gives foundation.</h1>
        <p className="text-zinc-500 text-sm mt-3 leading-relaxed">Relics become discoveries, not lists.<br/>Each relic is built on a passage, not around it.</p>

        <div className="mt-12 border border-amber-900/15 rounded-xl p-8 bg-zinc-900/20">
          <p className="text-[9px] tracking-[0.4em] text-zinc-500 mb-4">SCRIPTURE FORMAT</p>
          <div className="flex flex-col items-center gap-1 text-[11px] tracking-widest text-zinc-500">
            <span>Meaning</span><span className="text-zinc-700">↓</span><span>Context</span><span className="text-zinc-700">↓</span><span>Story</span><span className="text-zinc-700">↓</span><span>Song Connection</span><span className="text-zinc-700">↓</span><span>Reflection</span>
          </div>
        </div>

        <div className="mt-12 text-left grid gap-3">
          <div className="border border-zinc-800 p-5 rounded-lg"><p className="text-xs font-bold">Hebrews 4:12</p><p className="text-[11px] text-zinc-500 mt-1">For the word of God is alive and active. Sharper than any double-edged sword...</p></div>
          <div className="border border-zinc-800 p-5 rounded-lg"><p className="text-xs font-bold">Revelation 19:16</p><p className="text-[11px] text-zinc-500 mt-1">On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.</p></div>
          <div className="border border-zinc-800 p-5 rounded-lg"><p className="text-xs font-bold">Colossians 1:20</p><p className="text-[11px] text-zinc-500 mt-1">...and through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood...</p></div>
        </div>

        <div className="mt-12"><a href="/" className="text-[10px] tracking-widest text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
}
