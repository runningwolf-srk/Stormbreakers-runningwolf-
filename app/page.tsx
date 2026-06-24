limport Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* NAV - stays fixed */}
      <nav className="fixed top-0 w-full z-30 bg-black/70 backdrop-blur-md px-4 py-3 border-b border-red-900/20">
        <div className="content-wrap flex justify-between items-center">
          <span className="font-bold text-lg tracking-widest text-red-500">STORMBREAKERS</span>
          <div className="flex gap-6 text-sm">
            <Link href="#warrior" className="hover:text-red-500">WARRIOR</Link>
            <Link href="#calling" className="hover:text-red-500">CALLING</Link>
            <Link href="#storm" className="hover:text-red-500">STORM</Link>
          </div>
        </div>
      </nav>

      {/* CHAPTER 1: THE WARRIOR */}
      <section id="warrior" className="relative h-screen w-full overflow-hidden">
        <Image 
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="RunningWolf - The Stormbreaker"
          fill
          className="object-cover object-top scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-24 md:pb-32 text-center px-4">
          <p className="text-sm md:text-base text-red-400 tracking-[0.3em] mb-4 font-semibold">
            CHAPTER I
          </p>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-4 drop-shadow-2xl">
            JESSY MARQUEZ
          </h1>
          <p className="text-2xl md:text-4xl text-white/90 font-bold mb-2 drop-shadow-2xl">
            RUNNINGWOLF
          </p>
          <p className="text-lg md:text-xl text-red-500 mb-8 drop-shadow-2xl max-w-2xl">
            A Viking forged in worship. A Stormbreaker called to break chains.
          </p>
          <a 
            href="#calling" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all hover:scale-105 shadow-2xl border border-red-400/30"
          >
            HEAR THE CALLING ↓
          </a>
        </div>
      </section>

      {/* CHAPTER 2: THE CALLING */}
      <section id="calling" className="bg-zinc-950 py-24 md:py-32 relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>
        <div className="content-wrap px-4 relative z-10">
          <p className="text-sm text-red-400 tracking-[0.3em] mb-4 text-center font-semibold">
            CHAPTER II
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            HEAVEN IS CALLING
          </h2>
          <p className="text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            From the ruins of the old world, a new sound rises. Not the drums of war, but the thunder of worship. 
            This is the anthem of the Stormbreakers — warriors who bow before they fight.
          </p>
          
          <Image 
            src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
            alt="Heaven Calling - A Worship Anthem"
            width={800}
            height={800}
            className="rounded-lg shadow-2xl shadow-red-900/40 mx-auto mb-16 border border-red-900/30"
          />

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full border border-red-900/30 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/oxNauKuxg4Q" 
                title="Heaven Is Calling - RUNNINGWOLF"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: THE STORM */}
      <section id="storm" className="bg-black py-24 md:py-32 border-t border-red-900/20">
        <div className="content-wrap px-4">
          <p className="text-sm text-red-400 tracking-[0.3em] mb-4 text-center font-semibold">
            CHAPTER III
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            THE STORMBREAKERS
          </h2>
          <p className="text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            One warrior becomes a clan. One song becomes an army. 
            This is more than music — it's the sound of chains breaking.
          </p>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center text-red-500">THE PLAYLIST</h3>
            <iframe 
              className="rounded-lg border border-red-900/30"
              src="https://open.spotify.com/embed/playlist/5BxENwMmi8ygKIZLCCvgmS?utm_source=generator&theme=0" 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="bg-zinc-950 p-8 rounded-lg border border-red-900/20">
              <div className="text-4xl mb-4">⚔️</div>
              <h4 className="text-xl font-bold mb-2 text-red-500">WORSHIP</h4>
              <p className="text-white/60">The weapon before the war</p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-lg border border-red-900/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold mb-2 text-red-500">BROTHERHOOD</h4>
              <p className="text-white/60">No warrior stands alone</p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-lg border border-red-900/20">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2 text-red-500">BREAKTHROUGH</h4>
              <p className="text-white/60">Storms don’t stop us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: JOIN THE CLAN */}
      <section className="bg-gradient-to-t from-red-950/20 to-black py-24 text-center border-t border-red-900/30">
        <div className="content-wrap px-4">
          <p className="text-sm text-red-400 tracking-[0.3em] mb-4 font-semibold">
            CHAPTER IV
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            JOIN THE CLAN
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            The storm is gathering. Get the battle hymns, drops, and dispatches from the front lines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-zinc-900 border border-red-900/40 px-6 py-4 rounded-lg w-full text-white focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg w-full sm:w-auto transition-all hover:scale-105">
              ENLIST
            </button>
          </div>
          <p className="text-xs text-white/40 mt-8">
            Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF
          </p>
        </div>
      </section>
    </main>
  );
}
