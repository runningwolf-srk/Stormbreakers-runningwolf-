"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const avatarFile = "/763847743_1664822977910376_5098702148838621819_n-1.webp";
  const [lightning, setLightning] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.75) {
        setLightning(true);
        setTimeout(() => setLightning(false), 100);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#040404] text-zinc-100 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060606]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black to-transparent"></div>
        <div className={`absolute inset-0 bg-blue-100/5 transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
      </div>

      <section className="relative z-10 min-h-[85vh] flex items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <div className="relative border border-amber-900/20 bg-black p-2">
              <img src={avatarFile} alt="RunningWolf Keeper" className="w-[380px] md:w-[440px] block" />
            </div>
            <p className="mt-6 text-[10px] tracking-[0.4em] text-zinc-600">RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
            <p className="text-[11px] italic text-zinc-700 mt-1">Guide • Witness • Storyteller • Keeper of Pages</p>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="font-black leading-[0.9]">
              <span className="block text-6xl md:text-7xl tracking-tight">STORMBREAKERS</span>
              <span className="block text-xl tracking-[0.4em] text-amber-600/70 mt-3">THE OPEN CHRONICLE</span>
            </h1>
            <div className="mt-8 border-l-2 border-amber-900/30 pl-6">
              <p className="text-lg text-zinc-200">Viking is the binding. Scripture is the pages. The King is the center.</p>
              <p className="text-sm text-amber-600/60 mt-2">The Word guides the blade.</p>
            </div>
            <p className="mt-6 text-[11px] tracking-[0.4em] text-zinc-500">One Canon • Nineteen Relics • One King</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-[11px] tracking-[0.5em] text-zinc-600">CHOOSE A DOOR</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/music" className="bg-[#0a0a0a] border border-zinc-800 hover:border-amber-900/30 p-6 text-center"><p>⚔️</p><h4 className="font-bold mt-2 text-sm">Hall of Relics</h4><p className="text-[10px] text-zinc-600 mt-1">Music is the artifact</p></Link>
            <Link href="/chronicle" className="bg-[#0a0a0a] border border-zinc-800 hover:border-amber-900/30 p-6 text-center"><p>📖</p><h4 className="font-bold mt-2 text-sm">The Chronicle</h4><p className="text-[10px] text-zinc-600 mt-1">Story gives meaning</p></Link>
            <Link href="/word" className="bg-[#0a0a0a] border border-amber-900/40 hover:border-amber-700/50 p-6 text-center shadow-lg"><p>✝️</p><h4 className="font-bold mt-2 text-sm">The Word</h4><p className="text-[10px] text-amber-700/60 mt-1">Scripture gives foundation</p><p className="text-[9px] text-zinc-700 mt-2">ENTER → RELIC ARCHIVE INSIDE</p></Link>
            <Link href="/library" className="bg-[#0a0a0a] border border-zinc-800 hover:border-amber-900/30 p-6 text-center"><p>📚</p><h4 className="font-bold mt-2 text-sm">The Library</h4><p className="text-[10px] text-zinc-600 mt-1">Books give depth</p></Link>
          </div>

          <div className="mt-16 text-center border-t border-amber-900/10 pt-8">
            <p className="font-black tracking-[0.5em] text-amber-700/50 text-sm">THE CHRONICLE IS OPEN</p>
            <p className="text-[11px] text-zinc-600 mt-4">Chapter I — Foundation Complete • Chapter II — Testing Awaits</p>
            <p className="italic text-zinc-700 text-xs mt-2">The next page has not yet been written.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
