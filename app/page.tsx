"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const avatarFile = "/763847743_1664822977910376_5098702148838621819_n-1.webp";
  const [lightning, setLightning] = useState(false);
  useEffect(() => {
    const i = setInterval(() => { if(Math.random()>0.75){ setLightning(true); setTimeout(()=>setLightning(false),100); } },7000);
    return ()=>clearInterval(i);
  }, []);
  return (
    <main className="relative min-h-screen bg-[#040404] text-zinc-100 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060606]" />
        <div className={`absolute inset-0 bg-blue-100/5 transition-opacity duration-100 ${lightning?"opacity-100":"opacity-0"}`} />
      </div>

      <section className="relative z-10 min-h-[82vh] flex flex-col items-center justify-center px-6 text-center">
        {/* VISUAL DIRECTION: giant leather book closed on stone table, STORMBREAKERS THE OPEN CHRONICLE, wax seal XIX, storm clouds, lightning, faint runes, Bible beside blade, Keeper nearby */}
        <div className="border border-amber-900/20 bg-black p-2 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <img src={avatarFile} alt="RunningWolf Keeper" className="w-[300px] md:w-[340px] block object-cover" />
        </div>

        <p className="mt-8 text-[11px] tracking-[0.5em] text-zinc-500">RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <p className="text-[11px] italic text-zinc-600 mt-1">Guide • Witness • Storyteller • Keeper of Pages</p>

        <h1 className="mt-8 font-black leading-[0.9]">
          <span className="block text-5xl md:text-6xl tracking-tight">STORMBREAKERS</span>
          <span className="block text-[13px] tracking-[0.55em] text-amber-600/60 mt-4">THE OPEN CHRONICLE</span>
        </h1>

        <div className="mt-6 space-y-1">
          <p className="text-[13px] text-zinc-300">Viking is the binding.</p>
          <p className="text-[13px] text-zinc-300">Scripture is the pages.</p>
          <p className="text-[13px] text-zinc-200">The King is the center.</p>
          <p className="text-[11px] tracking-widest text-amber-700/60 mt-3">The Word guides the blade.</p>
        </div>

        <p className="mt-6 text-[9px] tracking-[0.2em] text-zinc-700 leading-relaxed">
          The King<br/>↓<br/>The Word<br/>↓<br/>The Chronicle<br/>↓<br/>The Keeper<br/>↓<br/>The Relics
        </p>
      </section>

      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] tracking-[0.5em] text-zinc-600 mb-6">CHOOSE A DOOR</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/music" className="bg-[#0a0a0a] border border-amber-900/30 p-6 text-center hover:border-amber-700/50 transition-all">
              <p>⚔️</p><p className="font-bold text-[11px] mt-2 tracking-widest">HALL OF RELICS</p><p className="text-[10px] text-zinc-600 mt-1">Music is the artifact</p>
            </Link>
            <Link href="/chronicle" className="bg-[#0a0a0a] border border-zinc-800 p-6 text-center hover:border-zinc-700"><p>📖</p><p className="font-bold text-[11px] mt-2 tracking-widest">THE CHRONICLE</p><p className="text-[10px] text-zinc-600 mt-1">Stories give meaning</p></Link>
            <Link href="/word" className="bg-[#0a0a0a] border border-zinc-800 p-6 text-center hover:border-zinc-700"><p>✝️</p><p className="font-bold text-[11px] mt-2 tracking-widest">THE WORD</p><p className="text-[10px] text-zinc-600 mt-1">Scripture gives foundation</p></Link>
            <Link href="/library" className="bg-[#0a0a0a] border border-zinc-800 p-6 text-center hover:border-zinc-700"><p>📚</p><p className="font-bold text-[11px] mt-2 tracking-widest">THE LIBRARY</p><p className="text-[10px] text-zinc-600 mt-1">Books give depth</p></Link>
          </div>

          <div className="mt-16 text-center border-t border-amber-900/10 pt-8">
            <p className="text-[10px] tracking-[0.3em] text-zinc-600">Cover → Choose Door → Hear Relic → Understand Chronicle → Root in Word → Go Deeper Library</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700 mt-6">Chapter I — Foundation Complete</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700">Chapter II — Testing Awaits</p>
            <p className="italic text-[11px] text-zinc-600 mt-3">The next page has not yet been written.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
