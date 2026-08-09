export default function Chronicle() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.6em] text-amber-700/60">📖 THE CHRONICLE</p>
          <h1 className="text-3xl font-black mt-4">Why was it created?</h1>
          <p className="text-zinc-500 text-xs mt-3">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
        </div>
        <div className="border border-amber-900/20 rounded-xl p-8 bg-zinc-900/20">
          <p className="text-[10px] tracking-[0.4em] text-amber-700/60">CHAPTER I — THE KEEPER&apos;S OATH — DRAFT</p>
          <h2 className="text-2xl font-bold mt-4">Not the King. Not the Savior.</h2>
          <p className="text-zinc-100 text-sm mt-4">Not the hero above the story.</p>
          <p className="text-white font-semibold">The witness inside it.</p>
          <p className="text-zinc-400 text-xs mt-4">The Keeper preserves, records, and points back to the King. The power comes from the King, not the warrior.</p>
          <div className="mt-8 border-t border-amber-900/10 pt-6">
            <p className="text-[9px] tracking-[0.4em] text-zinc-600 text-center mb-3">SIGNATURE OATH</p>
            <p className="text-center text-zinc-200 text-sm italic">Not the hero above the story —<br/>the witness inside it.</p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-1 text-[11px] tracking-widest text-zinc-600">
            <span className="text-amber-500 font-bold">The King</span><span>↓</span><span>The Word</span><span>↓</span><span>The Chronicle</span><span>↓</span><span>The Keeper</span><span>↓</span><span>The Relics</span>
          </div>
          <p className="text-[9px] tracking-[0.35em] text-zinc-700 mt-6 text-center leading-relaxed">The King gives the Word.<br/>The Word writes the Chronicle.<br/>The Chronicle is carried by the Keeper.<br/>The Keeper unveils the Relics.</p>
        </div>
        <div className="mt-10 border border-zinc-800 rounded-xl p-6">
          <p className="text-[10px] tracking-widest text-zinc-500">I. THE BREAKING — YOUR SECTION TO WRITE</p>
          <p className="text-xs text-zinc-600 mt-3 italic">Paste your real story here. 3 sentences is enough.</p>
        </div>
        <div className="text-center mt-12"><a href="/" className="text-[10px] tracking-[0.5em] text-zinc-600 hover:text-zinc-300">← RETURN TO COVER</a></div>
      </div>
    </div>
  );
}
