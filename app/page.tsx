"use client";
import Link from "next/link";

export default function HomePage() {
  // YOUR FORGED AVATAR - DO NOT RENAME FILE
  const avatarFile = "/763847743_1664822977910376_5098702148838621819_n-1.webp";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO - STORMBREAKERS RUNNINGWOLF */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-20">
        {/* Storm background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* AVATAR */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-zinc-600 to-red-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src={avatarFile}
              alt="Stormbreakers RunningWolf - Viking Christian Thundergod"
              className="relative w-full max-w-[500px] mx-auto rounded-2xl border-2 border-zinc-800 shadow-2xl"
            />
            {/* Wolf badge glow */}
            <div className="absolute bottom-4 left-4 bg-black/80 border border-blue-500/50 px-4 py-2 rounded-full">
              <span className="text-blue-400 font-bold">⚡ THUNDERGOD ⚡</span>
            </div>
          </div>

          {/* TEXT */}
          <div className="text-left">
            <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tight">
              STORM<br/>
              <span className="text-blue-500">BREAKERS</span><br/>
              <span className="text-zinc-500 text-4xl">RUNNINGWOLF</span>
            </h1>

            <p className="text-xl text-zinc-300 mb-2 font-bold">
              Viking is the binding. Scripture is the pages.
            </p>
            <p className="text-2xl text-red-500 mb-8 font-black">
              The King is the center.
            </p>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg mb-8">
              <p className="text-zinc-300 italic">
                "A Stormbreaker stands when the storm comes, not because he has no wounds, but because the King has forged him."
              </p>
              <p className="text-zinc-500 mt-3 text-sm">— Psalm 23 Keeper • Viking Christian • Guymon, OK</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/music" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded font-black text-lg transition">
                Hall of Relics →
              </Link>
              <Link href="/about" className="border border-zinc-700 hover:border-blue-500 px-8 py-4 rounded font-bold transition">
                The Chronicle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PSALM 23 BANNER */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-6 text-center">
        <p className="text-zinc-400 tracking-widest text-sm">
          THE LORD IS MY SHEPHERD • I SHALL NOT WANT • HE LEADETH ME BESIDE THE STILL WATERS • THOUGH I WALK THROUGH THE VALLEY
        </p>
      </section>
    </main>
  );
}
