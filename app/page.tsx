export default function Cover() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-16">
        <p className="text-[11px] tracking-[0.6em] text-zinc-600">RUNNINGWOLF</p>
        <p className="text-[10px] tracking-[0.5em] text-amber-700/50 mt-2">KEEPER OF THE CHRONICLE</p>
        <p className="text-[9px] tracking-[0.35em] text-zinc-700 mt-3">Guide • Witness • Storyteller • Keeper of Pages</p>
        <div className="mt-8 max-w-md">
          <p className="text-zinc-400 text-sm leading-relaxed">Not the King. Not the Savior. Not the hero above the story.</p>
          <p className="text-white font-semibold text-sm mt-1">The witness inside it.</p>
          <p className="text-zinc-500 text-xs mt-3">The power comes from the King, not the warrior.</p>
        </div>
        <div className="mt-14">
          <h1 className="text-5xl font-black tracking-tight">STORMBREAKERS</h1>
          <p className="text-[10px] tracking-[0.5em] text-amber-700/60 mt-2">THE OPEN CHRONICLE</p>
          <p className="text-xs text-zinc-500 mt-6 leading-relaxed">Viking is the binding.<br/>Scripture is the pages.<br/>The King is the center.<br/><span className="text-amber-700/50 tracking-widest text-[10px] mt-4 block">The Word guides the blade.</span></p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-1 text-[11px] tracking-widest text-zinc-600">
          <span className="text-amber-500 font-bold">The King</span><span>↓</span><span>The Word</span><span>↓</span><span>The Chronicle</span><span>↓</span><span>The Keeper</span><span>↓</span><span>The Relics</span>
        </div>
        <p className="text-[9px] tracking-[0.35em] text-zinc-700 mt-6 max-w-sm leading-relaxed text-center">The King gives the Word.<br/>The Word writes the Chronicle.<br/>The Chronicle is carried by the Keeper.<br/>The Keeper unveils the Relics.</p>
        <p className="text-[9px] tracking-[0.4em] text-amber-700/30 mt-8">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
      </div>
      <div className="w-full border-t border-amber-900/10 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[10px] tracking-[0.6em] text-zinc-600 mb-6">CHOOSE A DOOR</p>
          <div className="grid md:grid-cols-4 gap-4">
            <a href="/music" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20"><p className="text-2xl">⚔️</p><p className="text-xs font-bold mt-3 tracking-widest">HALL OF RELICS</p><p className="text-[9px] text-zinc-500 mt-1">3 Revealed • 16 Sealed</p></a>
            <a href="/chronicle" className="border border-amber-900/20 p-6 rounded-xl text-center bg-zinc-900/20"><p className="text-2xl">📖</p><p className="text-xs font-bold mt-3 tracking-widest">THE CHRONICLE</p><p className="text-[9px] text-amber-700/50 mt-1">Framework locked • Chapter I in progress</p></a>
            <a href="/word" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20"><p className="text-2xl">✝️</p><p className="text-xs font-bold mt-3 tracking-widest">THE WORD</p><p className="text-[9px] text-zinc-500 mt-1">Foundation</p></a>
            <a href="/library" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20"><p className="text-2xl">📚</p><p className="text-xs font-bold mt-3 tracking-widest">THE LIBRARY</p><p className="text-[9px] text-zinc-500 mt-1">Deeper</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
