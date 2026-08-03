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
    <main className="relative min-h-screen bg-[#050505] text-zinc-100 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#070707]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black to-transparent"></div>
        <div className={`absolute inset-0 bg-blue-100/5 transition-opacity duration-100 ${lightning? "opacity-100" : "opacity-0"}`}></div>
      </div>

      {/* COVER PAGE - RESTRAINT */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Narrator */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-amber-900/10 blur-xl"></div>
              <div className="relative border border-amber-900/30 bg-black p-2">
                <img src={avatarFile} alt="RunningWolf Keeper" className="w-[360px] md:w-[420px] block" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black border border-zinc-800 px-4 py-1">
                <p className="text-[9px] tracking-[0.3em] text-zinc-600 whitespace-nowrap">STANDING BESIDE BOOK • HAND NEAR PAGE • BLADE BESIDE BIBLE • LOOKING TOWARD CHRONICLE</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-[10px] tracking-[0.4em] text-zinc-600">RUNNINGWOLF</p>
              <p className="text-sm font-bold tracking-widest mt-1">Keeper of the Chronicle</p>
              <p className="text-[11px] tracking-widest text-zinc-700">Chronicler of Stormbreakers • Stormbearer</p>
              <p className="italic text-[11px] text-zinc-600 mt-3 max-w-[320px]">Guide through the Chronicle, not focus of worship. The King is the center. The power comes from the King, not the warrior.</p>
            </div>
          </div>

          {/* Logo + One Sentence */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-zinc-900 border border-amber-900/30 flex items-center justify-center font-black text-amber-700">SR</div>
              <p className="text-[10px] tracking-[0.4em] text-zinc-600">THE OPEN CHRONICLE</p>
            </div>

            <h1 className="font-black leading-[0.9]">
              <span className="block text-6xl md:text-7xl tracking-tight">STORMBREAKERS</span>
              <span className="block text-2xl tracking-[0.4em] text-amber-600/70 mt-3">THE OPEN CHRONICLE</span>
            </h1>

            <div className="mt-8 border-l-2 border-amber-900/40 pl-6 py-2">
              <p className="text-lg leading-relaxed text-zinc-300">Viking is the binding. Scripture is the pages. The King is the center.</p>
              <p className="text-sm text-amber-600/60 mt-3 tracking-wide">The Word guides the blade.</p>
              <p className="text-[11px] text-zinc-600 mt-2">Weapon submits to Word — visually and spiritually grounded.</p>
            </div>

            <div className="mt-8">
              <p className="text-xs tracking-[0.3em] text-zinc-500">One Canon • Nineteen Relics • One King</p>
              <p className="text-[10px] text-zinc-700 mt-2 italic">Homepage is cover page — not every relic list. Let people discover page by page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE TURN - FOUR DOORS */}
      <section className="relative z-10 px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[0.5em] text-zinc-600">PAGE TURN • FOUR DOORS</p>
            <div className="h-px w-20 bg-amber-900/20 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/music" className="group bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p className="text-lg">⚔️</p>
              <h4 className="font-bold mt-2">Hall of Relics</h4>
              <p className="text-[11px] text-zinc-600 mt-1">Music • Songs • Videos • Relic releases</p>
              <p className="text-[10px] text-zinc-700 mt-3 italic">Songs become discoveries</p>
            </Link>
            <Link href="/chronicle" className="group bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p className="text-lg">📖</p>
              <h4 className="font-bold mt-2">The Chronicle</h4>
              <p className="text-[11px] text-zinc-600 mt-1">Testimony • Stories • Behind each song</p>
              <p className="text-[10px] text-zinc-700 mt-3 italic">Stories give meaning</p>
            </Link>
            <Link href="/word" className="group bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p className="text-lg">✝️</p>
              <h4 className="font-bold mt-2">The Word</h4>
              <p className="text-[11px] text-zinc-600 mt-1">Scripture • Devotionals • Foundation</p>
              <p className="text-[10px] text-zinc-700 mt-3 italic">Scripture gives foundation</p>
            </Link>
            <Link href="/library" className="group bg-[#0c0c0c] border border-zinc-800 hover:border-amber-900/40 p-6 transition-all hover:-translate-y-0.5">
              <p className="text-lg">📚</p>
              <h4 className="font-bold mt-2">The Library</h4>
              <p className="text-[11px] text-zinc-600 mt-1">Books • Lore • Collections</p>
              <p className="text-[10px] text-zinc-700 mt-3 italic">Books give depth</p>
            </Link>
          </div>

          {/* NEXT PAGES TEASER - Restraint */}
          <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto opacity-60">
            <div className="bg-black border border-zinc-900 p-4 text-center">
              <p className="text-[10px] tracking-widest text-zinc-600">CHAPTER I — FOUNDATION</p>
              <p className="text-[11px] text-zinc-500 mt-1">Blade = Word • Lord = Surrender • Blood = Redemption</p>
            </div>
            <div className="bg-black border border-zinc-900 p-4 text-center">
              <p className="text-[10px] tracking-widest text-zinc-600">CHAPTER II — TESTING</p>
              <p className="text-[11px] text-zinc-500 mt-1">Wilderness • Shadow • Oath</p>
            </div>
            <div className="bg-black border border-zinc-900 p-4 text-center">
              <p className="text-[10px] tracking-widest text-zinc-600">RELIC BLUEPRINT</p>
              <p className="text-[11px] text-zinc-500 mt-1">Image → Scripture → Story → Song → Video → Reflection</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="italic text-sm text-zinc-500">STORMBREAKERS — The Open Chronicle — Viking is the binding. Scripture is the pages. The King is the center.</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700 mt-2">CONCEPT 10/10 • BRAND 10/10 • STORY 10/10 • SPIRITUAL 10/10 • VISUAL 10/10 • STRUCTURE 9.5 → 10 WITH RESTRAINT • 99 → 100</p>
          </div>
        </div>
      </section>
    </main>
  );
}
