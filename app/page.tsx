export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Hero - The Gate of The Armory */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        
        {/* Background Fire Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-black to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Avatar - The Stormbreaker */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-2xl animate-pulse"></div>
            <img 
              src="/729068345_1706992463868756_7233760520950384832_n~2.jpg" 
              alt="Jessy Marquez - Runningwolf, The Stormbreaker"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-amber-500/50 object-cover shadow-[0_0_60px_rgba(245,158,11,0.3)]"
            />
          </div>
          
          {/* Name - Given */}
          <h1 className="text-4xl md:text-6xl font-serif text-amber-400 mb-3 tracking-wide">
            Jessy Marquez
          </h1>
          
          {/* Name - War */}
          <h2 className="text-lg md:text-xl font-mono text-amber-200/60 uppercase tracking-[0.4em] mb-8">
            Runningwolf
          </h2>
          
          {/* The Line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-8"></div>
          
          {/* The Commission */}
          <p className="text-amber-100/90 text-base md:text-lg max-w-xl leading-relaxed mb-3 font-serif">
            Cinematic worship and epic spiritual war, forged in fire.
          </p>
          
          <p className="text-amber-300/80 text-base md:text-lg max-w-xl leading-relaxed mb-12">
            <span className="text-amber-400 font-bold">The Armory</span> is for the addicted, the broken, the chosen.
          </p>
          
          {/* The Verse */}
          <div className="mb-12 max-w-lg">
            <p className="text-amber-200/70 text-sm md:text-base italic font-serif">
              "Write the vision; make it plain on tablets, that he may run who reads it."
            </p>
            <p className="text-amber-500/60 text-xs font-mono mt-2 tracking-widest">
              HABAKKUK 2:2
            </p>
          </div>
          
          {/* CTAs - The Doors */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a 
              href="/armory" 
              className="flex-1 px-8 py-4 bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] uppercase tracking-widest text-sm"
            >
              ⚔ Enter The Armory
            </a>
            
            <a 
              href="/saga" 
              className="flex-1 px-8 py-4 border border-amber-500/50 text-amber-400 font-bold hover:bg-amber-500/10 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              View The Saga
            </a>
          </div>
          
          {/* The Count */}
          <div className="mt-16 flex items-center gap-6 text-amber-200/30 text-xs font-mono uppercase tracking-[0.3em]">
            <span>8 Relics</span>
            <span className="w-1 h-1 bg-amber-500/50 rounded-full"></span>
            <span>1 Witness</span>
            <span className="w-1 h-1 bg-amber-500/50 rounded-full"></span>
            <span>1 King</span>
          </div>
          
        </div>
      </section>
      
    </main>
  )
            }
