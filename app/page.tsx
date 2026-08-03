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

      <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="border border-amber-900/20 bg-black p-2">
          <img src={avatarFile} alt="RunningWolf" className="w-[340px] md:w-[380px] object-cover block" />
        </div>
        <p className="mt-8 text-[11px] tracking-[0.5em] text-zinc-600">RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <p className="text-[11px] italic text-zinc-700 mt-1">Guide • Witness • Storyteller • Keeper of Pages</p>
        <h1 className="mt-8 font-black leading-[0.9]"><span className="block text-5xl md:text-6xl">STORMBREAKERS</span><span className="block text-[13px] tracking-[0.5em] text-amber-600/60 mt-4">THE OPEN CHRONICLE</span></h1>
        <p className="mt-6 text-[13px] italic text-zinc-300">Viking is the binding. Scripture is the pages. The King is the center.</p>
        <p className="mt-2 text-[11px] tracking-widest text-amber-700/50">The Word guides the blade.</p>
        <p className="mt-4 text-[10px] tracking-widest text-zinc-700">The King → The Word → The Chronicle → The Keeper → The Relics</p>
      </section>

      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/music" className="bg-[#0a0a0a] border border-amber-900/30 py-8 text-center hover:border-amber-700/50"><p>⚔️</p><p className="font-bold text-[11px] mt-2 tracking-widest">HALL OF RELICS</p></Link>
            <Link href="/chronicle" className="bg-[#0a0a0a] border border-zinc-800 py-8 text-center hover:border-zinc-700"><p>📖</p><p className="font-bold text-[11px] mt-2 tracking-widest">THE CHRONICLE</p></Link>
            <Link href="/word" className="bg-[#0a0a0a] border border-zinc-800 py-8 text-center hover:border-zinc-700"><p>✝️</p><p className="font-bold text-[11px] mt-2 tracking-widest">THE WORD</p></Link>
            <Link href="/library" className="bg-[#0a0a0a] border border-zinc-800 py-8 text-center hover:border-zinc-700"><p>📚</p><p className="font-bold text-[11px] mt-2 tracking-widest">THE LIBRARY</p></Link>
          </div>

          <div className="mt-20 text-center border-t border-amber-900/10 pt-8">
            <p className="text-[10px] tracking-[0.3em] text-zinc-600">Cover → Choose Door → Hear Relic → Understand Chronicle → Root in Word → Go Deeper Library</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700 mt-6">Chapter I — Foundation Complete • Chapter II — Testing Awaits</p>
            <p className="italic text-[11px] text-zinc-700 mt-2">The next page has not yet been written.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
