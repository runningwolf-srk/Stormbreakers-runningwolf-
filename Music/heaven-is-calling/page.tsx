import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Heaven Is Calling - Stormbreakers Saga",
  description: "The first hymn of RunningWolf // The sound that made the ruins shake",
};

export default function HeavenCallingPage() {
  return (
    <main className="bg-black text-white">
      {/* NAV BACK TO SAGA */}
      <nav className="fixed top-0 w-full z-30 bg-black/80 backdrop-blur-md px-4 py-3 border-b border-red-900/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link href="/" className="font-bold text-lg tracking-widest text-red-500 hover:text-red-400">
            ← STORMBREAKERS SAGA
          </Link>
          <span className="text-xs text-white/50 tracking-wider">HYMN I</span>
        </div>
      </nav>

      {/* HERO: HEAVEN CALLING COVER */}
      <section className="relative h-screen w-full overflow-hidden pt-16">
        <Image 
          src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
          alt="Heaven Calling - A Worship Anthem"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-24 text-center px-4">
          <p className="text-sm text-red-400 tracking-[0.4em] mb-6 font-semibold">HYMN I</p>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 drop-shadow-2xl">
            HEAVEN IS CALLING
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
            The anthem that woke the Stormbreakers
          </p>
        </div>
      </section>

      {/* STORY: THE RUINS */}
      <section className="bg-zinc-950 py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-red-400 tracking-[0.4em] mb-8 font-semibold text-center">THE STORY</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">THE RUINS</h2>
          <div className="text-lg md:text-xl text-white/80 leading-relaxed space-y-8 font-serif">
            <p>
              The old kingdom fell. The temples crumbled. The songs of the fathers were forgotten in the wind.
            </p>
            <p>
              RunningWolf walked among the ash. He was not a king. He was not a priest. He was a warrior with a broken string and a bent cross around his neck.
            </p>
            <p className="text-2xl text-red-500 font-bold py-6 text-center border-y border-red-900/30">
              "Worship is your weapon.<br/>The storm is your calling."
            </p>
            <p>
              The whisper came not from the sky, but from the ruins themselves. Where others lifted swords to rebuild, he lifted his voice.
            </p>
            <p>
              And the ground began to move. Not the drums of war, but the thunder of worship. This is the sound that made the ruins shake.
            </p>
          </div>
        </div>
      </section>

      {/* THE HYMN */}
      <section className="bg-black py-24 md:py-32 border-t border-red-900/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-12">HEAR THE HYMN</h3>
          <div className="aspect-video w-full max-w-4xl mx-auto border border-red-900/30 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20 mb-12">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/oxNauKuxg4Q" 
              title="Heaven Is Calling - RUNNINGWOLF"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <Link 
            href="/" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105 border border-red-400/30"
          >
            RETURN TO THE SAGA →
          </Link>
        </div>
      </section>
    </main>
  );
}
