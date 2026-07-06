export default function SagaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* The Open Book Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        
        {/* Background: Open Scroll/Book Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-black to-black"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url(/textures/parchment.jpg)', // optional
          backgroundSize: 'cover'
        }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Book Title */}
          <div className="text-center mb-16">
            <p className="text-amber-500/60 text-xs font-mono uppercase tracking-[0.4em] mb-4">
              The Chronicles of
            </p>
            <h1 className="text-6xl md:text-8xl font-serif text-amber-400 mb-6">
              RUNNINGWOLF
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6"></div>
            <p className="text-amber-200/70 text-lg italic font-serif">
              "Write the vision; make it plain on tablets"
            </p>
            <p className="text-amber-500/50 text-sm font-mono mt-2">Habakkuk 2:2</p>
          </div>

          {/* Book Structure: Part 1 & Part 2 */}
          
          {/* PART 1: THE VALLEY */}
          <div className="mb-20">
            <div className="border-l-4 border-slate-500/50 pl-8 mb-12">
              <p className="text-slate-400/60 text-xs font-mono uppercase tracking-widest mb-2">Part I</p>
              <h2 className="text-4xl font-serif text-slate-300 mb-4">THE VALLEY</h2>
              <p className="text-slate-200/60 italic">
                "Yea, though I walk through the valley of the shadow of death..." — Psalm 23:4
              </p>
            </div>
            
            <div className="space-y-8 text-amber-100/80 leading-relaxed font-serif text-lg">
              <p>
                I was born in the ash. Addiction was my inheritance. Chains were my jewelry. 
                The valley was not a place I visited — it was home.
              </p>
              <p>
                <span className="text-amber-400">Chapter 1: The Chains</span> — [Your story of addiction begins here...]
              </p>
              <p>
                <span className="text-amber-400">Chapter 2: The Pit</span> — [Rock bottom moment...]
              </p>
              <p className="text-amber-500/60 text-sm">
                → 8 chapters. 8 songs. 8 scars. <Link href="/valley" className="text-amber-400 hover:text-amber-300">Enter The Valley</Link>
              </p>
            </div>
          </div>

          {/* DIVIDER: THE ENCOUNTER */}
          <div className="my-20 text-center">
            <div className="inline-block p-8 border-2 border-amber-500/50 bg-amber-950/20">
              <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest mb-3">The Turning Point</p>
              <h3 className="text-3xl font-serif text-amber-300 mb-4">THE ENCOUNTER</h3>
              <p className="text-amber-100/80 italic max-w-md">
                "And then He spoke. One word. One flame. Everything changed."
              </p>
            </div>
          </div>

          {/* PART 2: THE ARMORY */}
          <div>
            <div className="border-l-4 border-amber-500/50 pl-8 mb-12">
              <p className="text-amber-500/60 text-xs font-mono uppercase tracking-widest mb-2">Part II</p>
              <h2 className="text-4xl font-serif text-amber-400 mb-4">THE ARMORY</h2>
              <p className="text-amber-200/60 italic">
                "He trains my hands for war, so that my arms can bend a bow of bronze." — Psalm 18:34
              </p>
            </div>
            
            <div className="space-y-8 text-amber-100/80 leading-relaxed font-serif text-lg">
              <p>
                He didn't just pull me out of the pit. He armed me for war. 
                He took my scars and forged them into weapons.
              </p>
              <p>
                <span className="text-amber-400">Chapter 9: The First Flame</span> — [Isaiah 53:5 — "By His wounds we are healed"...]
              </p>
              <p>
                <span className="text-amber-400">Chapter 10: Wolf Fang</span> — [Galatians 6:17 — "I bear the marks"...]
              </p>
              <p className="text-amber-500/60 text-sm">
                → 8 chapters. 8 songs. 8 relics. <Link href="/armory" className="text-amber-400 hover:text-amber-300">Enter The Armory</Link>
              </p>
            </div>
          </div>

          {/* CLOSING: THE SCRIBE */}
          <div className="mt-20 pt-12 border-t border-amber-500/20 text-center">
            <p className="text-amber-200/50 text-sm font-mono uppercase tracking-[0.3em] mb-4">
              Written by the hand of
            </p>
            <p className="text-2xl font-serif text-amber-400 mb-2">Jessy Marquez</p>
            <p className="text-amber-500/80 text-lg font-bold tracking-[0.4em]">RUNNINGWOLF</p>
            <p className="text-amber-200/40 text-xs mt-4">The Stormbreaker</p>
          </div>

        </div>
      </section>

      {/* Link to The Word */}
      <section className="py-12 bg-gradient-to-t from-amber-950/20 to-black text-center">
        <p className="text-amber-200/60 text-sm mb-4">Every chapter begins with Scripture</p>
        <Link 
          href="/word" 
          className="inline-block px-8 py-3 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-all font-mono uppercase tracking-widest text-sm"
        >
          📖 Read The Word
        </Link>
      </section>

    </main>
  )
}
