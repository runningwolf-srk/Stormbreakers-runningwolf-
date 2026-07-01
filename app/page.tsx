export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        
        {/* Viking Warrior Image */}
        <img 
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg" 
          className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full object-cover border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10"
          alt="Stormbreaker Warrior" 
        />
        
        <h1 className="text-5xl md:text-7xl font-black text-amber-400 mb-4 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
          STORMBREAKERS
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 mb-2 tracking-wide">
          RunningWolf - Jessy Marquez
        </p>
        
        <div className="w-20 h-px bg-amber-500/50 mx-auto my-8"></div>
        
        <p className="text-zinc-400 mb-12 text-sm md:text-base">
          Cinematic Worship • Spirit Led • 🔥🐺⚔️
        </p>
        
        <div className="flex flex-col gap-4 items-center">
          <a 
            href="/music" 
            className="inline-block bg-amber-500 text-black px-10 py-4 rounded-lg font-black text-lg hover:bg-amber-400 transition-colors duration-200 shadow-lg shadow-amber-500/20 w-64"
          >
            LISTEN NOW
          </a>
          
          <a 
            href="/saga" 
            className="inline-block border border-amber-500/50 text-amber-500 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-500/10 transition-colors duration-200 w-64"
          >
            READ THE SAGA
          </a>
        </div>
        
        <p className="text-zinc-700 mt-16 text-xs">
          By His call we rise.
        </p>
        
      </div>
    </main>
  );
}
