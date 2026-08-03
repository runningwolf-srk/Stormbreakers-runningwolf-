"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const avatar = "/763847743_1664822977910376_5098702148838621819_n-1.webp";
  const [lightning, setLightning] = useState(false);
  useEffect(() => {
    const id = setInterval(() => { if (Math.random() > 0.75) { setLightning(true); setTimeout(() => setLightning(false), 100); } }, 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <main className="relative min-h-screen bg-[#040404] text-zinc-100 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none"><div className="absolute inset-0 bg-[#060606]" /><div className={`absolute inset-0 bg-blue-100/5 ${lightning? "opacity-100":"opacity-0"}`} /></div>

      <section className="relative z-10 min-h-[86vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="border border-amber-900/20 bg-black p-2"><img src={avatar} alt="Keeper" className="w-[300px] md:w-[320px] block object-cover" /></div>
        <div className="mt-8">
          <p className="text-[11px] tracking-[0.5em] text-zinc-300 font-bold">RUNNINGWOLF</p>
          <p className="text-[11px] tracking-[0.4em] text-zinc-500 mt-1">KEEPER OF THE CHRONICLE</p>
          <p className="text-[11px] italic text-zinc-600 mt-2">Guide • Witness • Storyteller • Keeper of Pages</p>
          <h1 className="mt-8 font-black"><span className="block text-5xl tracking-tight">STORMBREAKERS</span><span className="block text-[12px] tracking-[0.6em] text-amber-600/60 mt-3">THE OPEN CHRONICLE</span></h1>
          <div className="mt-6 text-[13px] italic text-zinc-300 space-y-1"><p>Viking is the binding.</p><p>Scripture is the pages.</p><p className="text-zinc-100">The King is the center.</p><p className="text-amber-700/60 not-italic tracking-widest text-[11px] mt-4">The Word guides the blade.</p></div>
          <div className="mt-8 text-[10px] tracking-[0.25em] text-zinc-600 leading-5"><p>The King</p><p className="text-zinc-800">↓</p><p>The Word</p><p className="text-zinc-800">↓</p><p>The Chronicle</p><p className="text-zinc-800">↓</p><p>The Keeper</p><p className="text-zinc-800">↓</p><p>The Relics</p></div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] tracking-[0.5em] text-zinc-600 mb-6">CHOOSE A DOOR</p>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/music" className="bg-[#0a0a0a] border border-amber-900/30 p-6 hover:border-amber-700/50"><p className="text-sm">⚔️ HALL OF RELICS</p><p className="text-[11px] text-zinc-500 mt-1">Songs become artifacts</p></Link>
            <Link href="/chronicle" className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="text-sm">📖 THE CHRONICLE</p><p className="text-[11px] text-zinc-500 mt-1">Stories reveal meaning</p></Link>
            <Link href="/word" className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="text-sm">✝️ THE WORD</p><p className="text-[11px] text-zinc-500 mt-1">Scripture gives foundation</p></Link>
            <Link href="/library" className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="text-sm">📚 THE LIBRARY</p><p className="text-[11px] text-zinc-500 mt-1">Knowledge gives depth</p></Link>
          </div>
          <div className="mt-16 text-center border-t border-amber-900/10 pt-8"><p className="text-[10px] tracking-[0.3em] text-zinc-600">Cover → Choose Door → Hear Relic → Understand Chronicle → Root in Word → Go Deeper Library</p></div>
        </div>
      </section>
    </main>
  );
}
