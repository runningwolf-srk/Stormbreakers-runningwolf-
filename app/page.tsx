export default function CoverPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20">
        <p className="text-[11px] tracking-[0.6em] text-zinc-600 mb-8">RUNNINGWOLF</p>
        <h1 className="text-[10px] tracking-[0.5em] text-amber-700/50 mb-3">KEEPER OF THE CHRONICLE</h1>
        <p className="text-[10px] tracking-[0.3em] text-zinc-600 mb-10">Guide • Witness • Storyteller • Keeper of Pages</p>
        <p className="text-zinc-400 text-sm max-w-md">Not the hero above the story.<br/>The power comes from the King, not the warrior.</p>

        <div className="mt-16 mb-12">
          <h2 className="text-3xl font-black tracking-tight">STORMBREAKERS</h2>
          <p className="text-[10px] tracking-[0.5em] text-amber-700/60 mt-2">THE OPEN CHRONICLE</p>
          <p className="text-xs text-zinc-500 mt-6 leading-relaxed">Viking is the binding.<br/>Scripture is the pages.<br/>The King is the center.<br/><br/><span className="text-amber-700/50">The Word guides the blade.</span></p>
        </div>

        <div className="flex flex-col items-center gap-1 text-[11px] tracking-widest my-8 text-zinc-600">
          <span className="text-amber-500 font-bold">The King</span><span>↓</span><span>The Word</span><span>↓</span><span className="text-amber-700/70">The Chronicle</span><span>↓</span><span>The Keeper</span><span>↓</span><span>Relics</span>
        </div>
      </div>

      <div className="border-t border-amber-900/10 px-6 py-12 max-w-5xl mx-auto w-full">
        <p className="text-center text-[10px] tracking-[0.5em] text-zinc-600 mb-8">CHOOSE A DOOR</p>
        <div className="grid md:grid-cols-4 gap-4">
          <a href="/music" className="border border-zinc-800 hover:border-amber-900/40 p-6 rounded-lg text-center transition"><p className="text-2xl">⚔️</p><p className="text-xs tracking-widest mt-3 font-bold">HALL OF RELICS</p><p className="text-[10px] text-zinc-500 mt-1">Songs become artifacts</p></a>
          <a href="/chronicle" className="border border-zinc-800 hover:border-amber-900/40 p-6 rounded-lg text-center transition"><p className="text-2xl">📖</p><p className="text-xs tracking-widest mt-3 font-bold">THE CHRONICLE</p><p className="text-[10px] text-zinc-500 mt-1">Stories reveal meaning</p></a>
          <a href="/word" className="border border-zinc-800 hover:border-amber-900/40 p-6 rounded-lg text-center transition"><p className="text-2xl">✝️</p><p className="text-xs tracking-widest mt-3 font-bold">THE WORD</p><p className="text-[10px] text-zinc-500 mt-1">Scripture gives foundation</p></a>
          <a href="/library" className="border border-zinc-800 hover:border-amber-900/40 p-6 rounded-lg text-center transition"><p className="text-2xl">📚</p><p className="text-xs tracking-widest mt-3 font-bold">THE LIBRARY</p><p className="text-[10px] text-zinc-500 mt-1">Knowledge gives depth</p></a>
        </div>
      </div>
    </div>
  );
}
