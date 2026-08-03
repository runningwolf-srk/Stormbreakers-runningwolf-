"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const avatarFile = "/763847743_1664822977910376_5098702148838621819_n-1.webp";
  const [lightning, setLightning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLightning(true);
        setTimeout(() => setLightning(false), 120);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#040404] text-zinc-100 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060606]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black to-transparent"></div>
        <div className={`absolute inset-0 bg-blue-100/5 transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
      </div>

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 py-10">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-amber-900/10 blur-xl"></div>
              <div className="relative border border-amber-900/30 bg-black p-2">
                <img src={avatarFile} alt="RunningWolf Keeper" className="w-[360px] md:w-[420px] block" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-zinc-800 px-3 py-1">
                <p className="text-[8px] tracking-[0.3em] text-zinc-600 whitespace-nowrap">GUIDE • WITNESS • STORYTELLER • KEEPER OF PAGES</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-[10px] tracking-[0.4em] text-zinc-600">RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
              <p className="text-[11px] italic text-zinc-600 mt-2 max-w-[340px]">Not the hero above the story. The power comes from the King, not the warrior.</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-black leading-[0.9]">
              <span className="block text-6xl md:text-7xl tracking-tight">STORMBREAKERS</span>
              <span className="block text-2xl tracking-[0.4em] text-amber-600/70 mt-3">THE OPEN CHRONICLE</span>
            </h1>

            <div className="mt-8 border-l-2 border-amber-900/40 pl-6">
              <p className="text-lg text-zinc-200">Viking is the binding. Scripture is the pages. The King is the center.</p>
              <p className="text-sm text-amber-600/60 mt-3 tracking-wide">The Word guides the blade.</p>
            </div>

            <p className="mt-6 text-xs tracking-[0.3em] text-zinc-500">One Canon • Nineteen Relics • One King</p>
            <p className="mt-2 text-[11px] italic text-zinc-700">A book still being written — curiosity, return visits, anticipation, room for growth.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/music" className="bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p>⚔️</p><h4 className="font-bold mt-2">Hall of Relics</h4><p className="text-[11px] text-zinc-600 mt-1">Music is the artifact</p>
            </Link>
            <Link href="/chronicle" className="bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p>📖</p><h4 className="font-bold mt-2">The Chronicle</h4><p className="text-[11px] text-zinc-600 mt-1">Story gives meaning</p>
            </Link>
            <Link href="/word" className="bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p>✝️</p><h4 className="font-bold mt-2">The Word</h4><p className="text-[11px] text-zinc-600 mt-1">Scripture gives foundation</p>
            </Link>
            <Link href="/library" className="bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p>📚</p><h4 className="font-bold mt-2">The Library</h4><p className="text-[11px] text-zinc-600 mt-1">Books give depth</p>
            </Link>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-black border border-amber-900/20 p-4">
                <p className="text-[10px] tracking-widest text-amber-700/60">CHAPTER I — FOUNDATION ✓</p>
                <div className="mt-2 space-y-1 text-[11px] text-zinc-400"><p>✓ Blade</p><p>✓ Lord of Lords</p><p>✓ Blood of Cross</p></div>
              </div>
              <div className="bg-black border border-zinc-800 p-4 opacity-80">
                <p className="text-[10px] tracking-widest text-zinc-600">CHAPTER II — TESTING</p>
                <div className="mt-2 space-y-1 text-[11px] text-zinc-600"><p>🔒 Wilderness</p><p>🔒 Shadow</p><p>🔒 Oath</p></div>
              </div>
              <div className="bg-black border border-zinc-900 p-4 opacity-40">
                <p className="text-[10px] tracking-widest text-zinc-700">CHAPTER III — SEALED</p>
                <p className="text-[11px] text-zinc-700 mt-2">Sealed until revealed</p>
              </div>
            </div>

            <div className="mt-6 bg-[#0a0a0a] border border-zinc-800 p-4 text-center">
              <p className="text-[10px] tracking-[0.3em] text-zinc-600">RELIC ENGINE — Image → Scripture → Story → Song → Video → Reflection</p>
            </div>
          </div>

          {/* IN-UNIVERSE SEAL - NO SCORE */}
          <div className="mt-12 text-center border-t border-amber-900/10 pt-8">
            <p className="font-black tracking-[0.4em] text-amber-700/60 text-sm">THE CHRONICLE IS OPEN</p>
            <p className="tracking-[0.3em] text-zinc-600 text-xs mt-2">THE FORGE CONTINUES • THE STORY IS STILL BEING WRITTEN</p>
            <p className="italic text-zinc-600 text-sm mt-4">Viking is the binding. Scripture is the pages. The King is the center.</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-800 mt-3">ONE CANON • NINETEEN RELICS • ONE KING • KEEPER OF PAGES</p>
          </div>
        </div>
      </section>
    </main>
  );
}
