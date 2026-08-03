"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const avatarFile = "/763847743_1664822977910376_5098702148838621819_n-1.webp";
  const [lightning, setLightning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setLightning(true);
        setTimeout(() => setLightning(false), 130);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const doors = [
    { icon: "⚔️", title: "Hall of Relics", sub: "Songs", href: "/music", desc: "Where songs are forged for the battle", art: "sword shield forge sparks" },
    { icon: "📖", title: "The Chronicle", sub: "Story & Oath", href: "/chronicle", desc: "Testimony forged in storm", art: "illuminated manuscript quill" },
    { icon: "✝️", title: "The Word", sub: "Scripture", href: "/word", desc: "The King is the center", art: "glowing Bible rays" },
    { icon: "📚", title: "The Library", sub: "Books & Devotionals", href: "/library", desc: "Leather books candles scrolls", art: "leather-bound devotionals" },
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-zinc-100 overflow-hidden">
      {/* LEATHER BOOK COVER + ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: "radial-gradient(ellipse at center, #1a1208 0%, #0a0a0a 70%)"}}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black to-transparent"></div>
        <div className={`absolute inset-0 bg-blue-100/5 transition-opacity duration-100 ${lightning? "opacity-100" : "opacity-0"}`}></div>
      </div>

      {/* LEATHER BOOK HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Leather book cover frame */}
          <div className="relative bg-[#111] border-[12px] border-[#1a1208] shadow-[0_0_80px_rgba(0,0,0,0.9)]">
            <div className="absolute inset-0 border border-amber-900/20 pointer-events-none"></div>
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-amber-800/40"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t border-r border-amber-800/40"></div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b border-l border-amber-800/40"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-amber-800/40"></div>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0">
              {/* Avatar + Bible + Blade */}
              <div className="relative bg-black p-8 md:p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-amber-900/20">
                <div className="absolute top-6 left-6 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>
                <div className="absolute top-6 right-6 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-900/10 blur-xl"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-900/30 via-zinc-700/20 to-amber-900/30"></div>
                  <div className="relative bg-[#0a0a0a] p-3 border border-amber-900/30">
                    <img src={avatarFile} alt="RunningWolf - Guide" className="w-[340px] md:w-[420px] block" />
                    <div className="absolute inset-0 pointer-events-none border border-amber-800/20 m-3"></div>
                    <div className={`absolute inset-0 bg-blue-200/5 mix-blend-screen transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-amber-900/40 px-4 py-1">
                    <p className="text-[9px] tracking-[0.3em] text-amber-600/70 whitespace-nowrap">BLADE RESTING ON OPEN BIBLE • WOLF-FUR CLOAK • LEATHER & IRON</p>
                  </div>
                </div>

                <div className="mt-10 bg-[#0f0f0f] border border-zinc-800 px-8 py-4 text-center max-w-sm">
                  <p className="text-[10px] tracking-[0.4em] text-zinc-600">GUIDE THROUGH THE CHRONICLE</p>
                  <h3 className="text-xl font-black tracking-widest mt-1">RunningWolf</h3>
                  <p className="text-[11px] tracking-widest text-zinc-500 mt-1">Keeper of the Chronicle • Chronicler of Stormbreakers</p>
                  <p className="text-[10px] italic text-zinc-600 mt-2">Not focus of worship — Guide into the world. The King is center.</p>
                </div>
              </div>

              {/* Title + Lore */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-[#0c0c0c]">
                <div className="mb-6">
                  <div className="inline-block border border-amber-900/30 bg-black/50 px-3 py-1 text-[10px] tracking-[0.4em] text-amber-700/70 mb-6">WEATHERED LEATHER • ILLUMINATED MANUSCRIPT</div>
                  <h1 className="font-black leading-[0.85]">
                    <span className="block text-5xl md:text-7xl tracking-tight">STORMBREAKERS</span>
                    <span className="block text-2xl md:text-3xl tracking-[0.35em] text-amber-600/80 mt-3">THE OPEN CHRONICLE</span>
                  </h1>
                  <div className="mt-5 h-px w-24 bg-amber-900/40"></div>
                  <p className="mt-4 text-sm tracking-[0.3em] text-zinc-400">One Canon • Nineteen Relics • One King</p>
                </div>

                <div className="bg-[#111] border-l-2 border-amber-800/50 p-5 mb-6">
                  <p className="font-serif text-[15px] leading-relaxed text-zinc-300 italic">
                    A weathered leather book fills the screen. Lightning briefly illuminates the scene. Opening any door feels like turning a page in an ancient manuscript rather than navigating a website.
                  </p>
                  <p className="text-[10px] tracking-widest text-zinc-600 mt-3">BRAND: Viking is the binding. Scripture is the pages. The King is the center.</p>
                </div>

                <div className="space-y-2 text-[11px] text-zinc-600 tracking-wide">
                  <p>• Identity: Stormbreakers - RunningWolf — Project + Guide, distinct & memorable</p>
                  <p>• Concept: Music • Chronicles • Scripture • Devotionals — All reinforce one another</p>
                  <p>• Spiritual: Repeated emphasis King is center — clear foundation</p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-black border border-zinc-800 p-3">
                    <p className="text-[10px] text-zinc-600">CHAPTER I</p>
                    <p className="text-xs text-amber-600/70 mt-1">Blade • Lord • Cross ✓</p>
                  </div>
                  <div className="bg-black border border-zinc-800 p-3">
                    <p className="text-[10px] text-zinc-600">CHAPTER II</p>
                    <p className="text-xs text-zinc-500 mt-1">Wilderness • Shadow • Oath</p>
                  </div>
                  <div className="bg-black border border-zinc-800 p-3 opacity-50">
                    <p className="text-[10px] text-zinc-600">CHAPTER III</p>
                    <p className="text-xs text-zinc-600 mt-1">🔒 Sealed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR DOORS */}
      <section className="relative z-10 px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[0.5em] text-zinc-600">FOUR CARVED WOODEN DOORS • TURN THE PAGE</p>
            <div className="h-px w-24 bg-amber-900/30 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {doors.map((d) => (
              <Link key={d.title} href={d.href} className="group relative bg-[#0f0f0f] border border-zinc-800 hover:border-amber-800/50 p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
                <div className="text-3xl mb-3">{d.icon}</div>
                <p className="text-[9px] tracking-widest text-zinc-600">{d.art}</p>
                <h4 className="text-base font-black mt-1 tracking-wide">{d.title}</h4>
                <p className="text-[11px] tracking-widest text-amber-700/50">{d.sub}</p>
                <p className="text-[11px] text-zinc-500 mt-2 italic">{d.desc}</p>
                <p className="text-[10px] tracking-[0.3em] text-zinc-700 group-hover:text-zinc-400 mt-4">ENTER →</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center border-t border-amber-900/10 pt-6">
            <p className="font-serif italic text-zinc-600 text-sm">This is a cohesive world — music, story, Scripture, and books around One King.</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700 mt-2">STORMBREAKERS THE OPEN CHRONICLE • ONE CANON • NINETEEN RELICS • ONE KING • GUIDE NOT WORSHIP • 100/100</p>
          </div>
        </div>
      </section>
    </main>
  );
}
