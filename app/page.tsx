import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Crown */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto border-2 border-amber-500 rotate-45 flex items-center justify-center">
            <div className="w-8 h-8 bg-amber-500 -rotate-45"></div>
          </div>
        </div>

        {/* Title */}
        <p className="text-amber-500/60 text-xs font-mono uppercase tracking-[0.4em] mb-4">
          The Chronicles of
        </p>
        <h1 className="text-6xl md:text-8xl font-serif text-amber-400 mb-4">
          RUNNINGWOLF
        </h1>
        <p className="text-amber-500/80 text-xl font-bold tracking-[0.4em] mb-8">
          THE STORMBREAKER
        </p>

        {/* Verse */}
        <p className="text-amber-100/80 text-lg italic font-serif mb-2 max-w-xl mx-auto">
          "Write the vision; make it plain on tablets, that he may run who reads it."
        </p>
        <p className="text-amber-500/50 text-sm mb-12">HABAKKUK 2:2</p>

        {/* 4 Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          
          {/* UNIVERSE 1: THE ARMORY */}
          <Link 
            href="/armory"
            className="group border-2 border-amber-500/50 bg-amber-950/20 p-8 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300"
          >
            <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest mb-2">Universe I</p>
            <h3 className="text-2xl font-serif text-amber-400 group-hover:text-amber-300 mb-2">
              THE ARMORY
            </h3>
            <p className="text-amber-200/60 text-sm">8 Relics of Victory</p>
          </Link>

          {/* UNIVERSE 2: THE VALLEY */}
          <Link 
            href="/valley"
            className="group border-2 border-slate-500/50 bg-slate-950/20 p-8 hover:bg-slate-500/10 hover:border-slate-400 transition-all duration-300"
          >
            <p className="text-slate-500/60 text-xs font-mono uppercase tracking-widest mb-2">Universe II</p>
            <h3 className="text-2xl font-serif text-slate-300 group-hover:text-slate-200 mb-2">
              THE VALLEY
            </h3>
            <p className="text-slate-200/60 text-sm">8 Relics of Warfare</p>
          </Link>

          {/* THE SAGA: OPEN BOOK */}
          <Link 
            href="/saga"
            className="group border-2 border-amber-600/50 bg-black p-8 hover:bg-amber-950/30 hover:border-amber-500 transition-all duration-300"
          >
            <p className="text-amber-600/60 text-xs font-mono uppercase tracking-widest mb-2">The Story</p>
            <h3 className="text-2xl font-serif text-amber-500 group-hover:text-amber-400 mb-2">
              THE SAGA
            </h3>
            <p className="text-amber-200/60 text-sm">The Open Book of Runningwolf</p>
          </Link>

          {/* THE BIBLE: THE WORD */}
          <Link 
            href="/word"
            className="group border-2 border-amber-400/50 bg-amber-500/5 p-8 hover:bg-amber-500/10 hover:border-amber-300 transition-all duration-300"
          >
            <p className="text-amber-400/60 text-xs font-mono uppercase tracking-widest mb-2">The Foundation</p>
            <h3 className="text-2xl font-serif text-amber-300 group-hover:text-amber-200 mb-2">
              THE BIBLE
            </h3>
            <p className="text-amber-200/60 text-sm">Scripture & Verse Engine</p>
          </Link>

        </div>

        {/* Footer */}
        <div className="mt-16 text-amber-500/30 text-xs font-mono">
          16 RELICS • 1 WITNESS • 1 KING
        </div>

      </div>
    </main>
  )
}
