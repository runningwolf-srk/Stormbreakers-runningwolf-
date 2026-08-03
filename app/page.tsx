export default function Cover() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-16">
        <p className="text-[11px] tracking-[0.6em] text-zinc-600">RUNNINGWOLF</p>
        <p className="text-[10px] tracking-[0.5em] text-amber-700/50 mt-2">KEEPER OF THE CHRONICLE</p>
        <p className="text-[9px] tracking-[0.35em] text-zinc-700 mt-3">Guide • Witness • Storyteller • Keeper of Pages</p>
        <p className="text-zinc-400 text-sm mt-8 max-w-md">Not the hero above the story.<br/>The power comes from the King, not the warrior.</p>
        <div className="mt-14">
          <h1 className="text-4xl font-black tracking-tight">STORMBREAKERS</h1>
          <p className="text-[10px] tracking-[0.5em] text-amber-700/60 mt-2">THE OPEN CHRONICLE</p>
          <p className="text-xs text-zinc-500 mt-6 leading-relaxed">Viking is the binding.<br/>Scripture is the pages.<br/>The King is the center.<br/><span className="text-amber-700/50 tracking-widest text-[10px] mt-4 block">The Word guides the blade.</span></p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-1 text-[11px] tracking-widest text-zinc-600">
          <span className="text-amber-500 font-bold">The King</span><span>↓</span><span>The Word</span><span>↓</span><span>The Chronicle</span><span>↓</span><span>The Keeper</span><span>↓</span><span>The Relics</span>
        </div>
      </div>
      <div className="w-full border-t border-amber-900/10 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[10px] tracking-[0.6em] text-zinc-600 mb-6">CHOOSE A DOOR</p>
          <div className="grid md:grid-cols-4 gap-4">
            <a href="/music" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20 hover:border-amber-900/30 transition"><p>⚔️</p><p className="text-xs font-bold mt-3">HALL OF RELICS</p><p className="text-[9px] text-zinc-500 mt-1">What was created?</p></a>
            <a href="/chronicle" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20 hover:border-amber-900/30 transition"><p>📖</p><p className="text-xs font-bold mt-3">THE CHRONICLE</p><p className="text-[9px] text-zinc-500 mt-1">Why was it created?</p></a>
            <a href="/word" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20 hover:border-amber-900/30 transition"><p>✝️</p><p className="text-xs font-bold mt-3">THE WORD</p><p className="text-[9px] text-zinc-500 mt-1">What is its foundation?</p></a>
            <a href="/library" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20 hover:border-amber-900/30 transition"><p>📚</p><p className="text-xs font-bold mt-3">THE LIBRARY</p><p className="text-[9px] text-zinc-500 mt-1">How do I go deeper?</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
