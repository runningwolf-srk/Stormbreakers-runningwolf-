export default function Cover() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-16">

        {/* 🐺 AVATAR RESTORED */}
        <div className="relative">
          <img
            src="/runningwolf-avatar.png"
            alt="RunningWolf - Keeper of the Chronicle"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-amber-900/20 object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-700/20 rounded-full border border-amber-900/30 flex items-center justify-center">
            <span className="text-[10px]">⚔️</span>
          </div>
        </div>

        <p className="text-[11px] tracking-[0.6em] text-zinc-500 mt-6">RUNNINGWOLF</p>
        <p className="text-[10px] tracking-[0.5em] text-amber-700/50 mt-2">KEEPER OF THE CHRONICLE</p>
        <p className="text-[9px] tracking-[0.35em] text-zinc-700 mt-3">Guide • Witness • Storyteller • Keeper of Pages</p>

        <div className="mt-8 max-w-md">
          <p className="text-zinc-400 text-sm leading-relaxed">Not the King. Not the Savior. Not the hero above the story.</p>
          <p className="text-white font-semibold text-sm mt-1">The witness inside it.</p>
        </div>

        <div className="mt-10">
          <h1 className="text-5xl font-black tracking-tight">STORMBREAKERS</h1>
          <p className="text-[10px] tracking-[0.5em] text-amber-700/60 mt-2">THE OPEN CHRONICLE</p>
          <p className="text-xs text-zinc-500 mt-6 leading-relaxed">Viking is the binding.<br/>Scripture is the pages.<br/>The King is the center.</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 text-[11px] tracking-widest text-zinc-600">
          <span className="text-amber-500 font-bold">The King</span><span>↓</span><span>The Word</span><span>↓</span><span>The Chronicle</span><span>↓</span><span>The Keeper</span><span>↓</span><span>The Relics</span>
        </div>

        <p className="text-[9px] tracking-[0.4em] text-amber-700/30 mt-8">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>

        {/* 🎵 QUICK LISTEN */}
        <div className="mt-10 flex gap-3">
          <a href="/music" className="px-5 py-2.5 bg-amber-700/10 border border-amber-900/20 rounded-full text-[10px] tracking-widest text-amber-500/80 hover:bg-amber-700/20">🎵 HEAR THE RELICS</a>
        </div>
      </div>

      <div className="w-full border-t border-amber-900/10 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[10px] tracking-[0.6em] text-zinc-600 mb-6">CHOOSE A DOOR</p>
          <div className="grid md:grid-cols-4 gap-4">
            <a href="/music" className="border border-amber-900/20 p-6 rounded-xl text-center bg-zinc-900/20 hover:border-amber-700/30 transition"><p className="text-2xl">⚔️</p><p className="text-xs font-bold mt-3 tracking-widest">HALL OF RELICS</p><p className="text-[9px] text-zinc-500 mt-1">3 Revealed • Hear the songs</p></a>
            <a href="/chronicle" className="border border-amber-900/20 p-6 rounded-xl text-center bg-zinc-900/20"><p className="text-2xl">📖</p><p className="text-xs font-bold mt-3 tracking-widest">THE CHRONICLE</p><p className="text-[9px] text-amber-700/50 mt-1">In progress • Real testimony</p></a>
            <a href="/word" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20"><p className="text-2xl">✝️</p><p className="text-xs font-bold mt-3 tracking-widest">THE WORD</p><p className="text-[9px] text-zinc-500 mt-1">Foundation</p></a>
            <a href="/library" className="border border-zinc-800 p-6 rounded-xl text-center bg-zinc-900/20"><p className="text-2xl">📚</p><p className="text-xs font-bold mt-3 tracking-widest">THE LIBRARY</p><p className="text-[9px] text-zinc-500 mt-1">Deeper</p></a>
          </div>
          <p className="text-center text-[8px] tracking-[0.3em] text-zinc-700 mt-8">Welcome to Stormbreakers — The Open Chronicle. The Chronicle is being written from real testimony.</p>
        </div>
      </div>
    </div>
  );
}
