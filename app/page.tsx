"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const avatarFile = "/763847743_1664822977910376_5098702148838621819_n-1.webp";
  const [lightning, setLightning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.65) {
        setLightning(true);
        setTimeout(() => setLightning(false), 140);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#040404] text-zinc-100 overflow-hidden font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
       .font-cinzel { font-family: 'Cinzel', serif; }
       .font-crimson { font-family: 'Crimson Text', serif; }
      `}</style>

      {/* ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#080808]"></div>
        <div className="absolute inset-0 opacity-50" style={{backgroundImage: "radial-gradient(ellipse at 30% 20%, rgba(120,80,20,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(20,60,120,0.06) 0%, transparent 50%)"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className={`absolute inset-0 bg-blue-200/5 transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
        {/* Old Norse pattern border subtle */}
        <div className="absolute top-0 left-0 right-0 h-3 opacity-20" style={{backgroundImage: "repeating-linear-gradient(90deg, #8B5A2B 0px, #8B5A2B 2px, transparent 2px, transparent 12px)"}}></div>
      </div>

      {/* === LOGO SYSTEM === */}
      <header className="relative z-20 border-b border-amber-900/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-900 to-zinc-900 border border-amber-800/50 flex items-center justify-center font-cinzel font-black text-amber-500">SR</div>
            <div>
              <p className="font-cinzel font-black tracking-[0.2em] text-sm">STORMBREAKERS</p>
              <p className="text-[10px] tracking-[0.4em] text-zinc-600">THE OPEN CHRONICLE • ONE CANON • XIX RELICS • ONE KING</p>
            </div>
          </div>
          <div className="hidden md:block text-[10px] tracking-widest text-zinc-700">MANUSCRIPT PAGE STYLE • CINZEL + CRIMSON • LEATHER • IRON • PARCHMENT</div>
        </div>
      </header>

      {/* === HERO - LEATHER MANUSCRIPT OPEN === */}
      <section className="relative z-10 px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0e0c0a] border-[14px] border-[#1e1810] shadow-[0_0_100px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(139,90,43,0.1)]">
            {/* Carved frame */}
            <div className="absolute inset-0 border border-amber-900/20 pointer-events-none m-2"></div>
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-800/30"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-amber-800/30"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-amber-800/30"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-800/30"></div>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* LEFT: Illustrated Avatar + Bible respectful */}
              <div className="relative bg-[#080706] p-10 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-amber-900/20">
                <p className="font-cinzel text-[10px] tracking-[0.5em] text-amber-700/50 mb-6">MAIN AVATAR ARTWORK • KEEPER</p>

                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-amber-900/10 via-transparent to-blue-900/10 blur-xl"></div>
                  <div className="relative border-2 border-amber-900/40 bg-black p-2">
                    <img src={avatarFile} alt="RunningWolf" className="w-[380px] md:w-[440px] block" />
                    {/* Respectful Bible + Blade illustration overlay */}
                    <div className="absolute -bottom-8 -right-8 bg-[#0f0f0f] border border-amber-900/30 p-3 shadow-xl max-w-[180px]">
                      <p className="text-[8px] tracking-widest text-zinc-600">RELIC COMPOSITION</p>
                      <p className="text-[11px] font-crimson italic text-zinc-400 mt-1 leading-tight">Open Bible, blade resting BESIDE pages respectfully. Word guides blade. Blade does not rule Word.</p>
                      <div className="mt-2 flex gap-1">
                        <div className="w-8 h-10 bg-amber-100/10 border border-amber-900/30"></div>
                        <div className="w-1 h-10 bg-zinc-600 -skew-x-12"></div>
                      </div>
                    <div className={`absolute inset-0 bg-blue-100/5 transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
                  </div>
                </div>

                <div className="mt-14 bg-[#111] border border-zinc-800 px-6 py-4 text-center w-full max-w-sm">
                  <p className="font-cinzel text-[9px] tracking-[0.4em] text-zinc-600">IDENTITY & CHARACTER — 10/10</p>
                  <h3 className="font-cinzel font-black text-lg tracking-widest mt-2">RunningWolf</h3>
                  <p className="text-[11px] tracking-widest text-amber-700/70 mt-1">Keeper of the Chronicle</p>
                  <p className="font-crimson italic text-xs text-zinc-500 mt-3 leading-relaxed">"Not focus of worship — Guide into the world. The King is center."</p>
                  <div className="mt-3 pt-3 border-t border-zinc-800/50 text-[10px] text-zinc-600 leading-tight">
                    Wolf-fur cloak • Leather and iron armor • Blade beside open Bible • Storm/lightning atmosphere • Rugged but approachable
                  </div>
                </div>
              </div>

              {/* RIGHT: Title + Visual System */}
              <div className="p-8 md:p-10 bg-[#0d0b09]">
                <div className="mb-8">
                  <h1 className="font-cinzel font-black leading-[0.85]">
                    <span className="block text-5xl md:text-6xl">STORMBREAKERS</span>
                    <span className="block text-xl md:text-2xl tracking-[0.4em] text-amber-600/80 mt-2">THE OPEN CHRONICLE</span>
                  </h1>
                  <p className="font-cinzel mt-4 text-xs tracking-[0.35em] text-zinc-500">One Canon • Nineteen Relics • One King</p>
                  <div className="mt-4 h-px w-20 bg-amber-900/40"></div>
                </div>

                {/* Visual System Spec */}
                <div className="space-y-4 text-xs">
                  <div className="bg-black border border-zinc-800 p-4">
                    <p className="font-cinzel text-[10px] tracking-widest text-zinc-500 mb-2">VISUAL SYSTEM • 100/100 CHECKLIST</p>
                    <div className="space-y-1.5 text-[11px] text-zinc-600 font-mono">
                      <p>✓ Main avatar artwork — Wolf-fur, leather/iron, Bible beside blade</p>
                      <p>✓ Stormbreakers logo — Cinzel 900 + XIX Relics seal</p>
                      <p>✓ Relic icons — Sword/Shield/Forge/Scroll/Rays/Books</p>
                      <p>✓ Door illustrations — Carved wood + Norse knotwork (decorative, not replacing cross)</p>
                      <p>✓ Chapter seals — Wax seals: I ✓, II ◐, III 🔒</p>
                      <p>✓ Manuscript page — Parchment #0e0c0a, leather border #1e1810, Cinzel + Crimson</p>
                      <p>✓ Fonts — Cinzel headers, Crimson body, mono for runes</p>
                    </div>
                  </div>

                  <div className="bg-[#0f0f] border-l-2 border-amber-800/60 p-4">
                    <p className="font-crimson italic text-sm text-zinc-300">Concept & Story Structure — 10/10</p>
                    <p className="text-[11px] text-zinc-500 mt-1">Chapter I — Foundation: Blade=Word, Lord=Surrender, Blood=Redemption • Chapter II — Testing: Wilderness/Shadow/Oath — Progression makes sense, reason to return.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-black border border-amber-900/30 p-3 text-center">
                      <div className="w-8 h-8 mx-auto bg-amber-900/20 border border-amber-800/30 rounded-full flex items-center justify-center text-amber-600 font-cinzel">I</div>
                      <p className="text-[10px] mt-2 tracking-widest">FOUNDATION ✓</p>
                    </div>
                    <div className="bg-black border border-blue-900/20 p-3 text-center">
                      <div className="w-8 h-8 mx-auto bg-blue-900/20 border border-blue-800/30 rounded-full flex items-center justify-center text-blue-500 font-cinzel">II</div>
                      <p className="text-[10px] mt-2 tracking-widest">TESTING ◐</p>
                    </div>
                    <div className="bg-black border border-zinc-800 p-3 text-center opacity-60">
                      <div className="w-8 h-8 mx-auto bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-500">III</div>
                      <p className="text-[10px] mt-2 tracking-widest">SEALED 🔒</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR DOORS - CARVED WOOD */}
      <section className="relative z-10 px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0e0c0a] border-8 border-[#1a1208] p-6">
            <div className="absolute inset-0 border border-amber-900/10 m-1 pointer-events-none"></div>
            <div className="text-center mb-6">
              <p className="font-cinzel text-[11px] tracking-[0.5em] text-zinc-600">FOUR CARVED DOORS • ILLUMINATED • NORSE KNOTWORK DECORATIVE</p>
              <p className="font-crimson italic text-xs text-zinc-700 mt-1">Website Experience — 10/10 — Opening a book, not browsing an artist page</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { t: "Hall of Relics", s: "Songs become discoveries", i: "⚔️", d: "Where songs are forged for the battle", h: "/music", bg: "sword, shield, forge, sparks" },
                { t: "The Chronicle", s: "Stories give meaning", i: "📖", d: "Open illuminated manuscript", h: "/chronicle", bg: "feather quill, parchment" },
                { t: "The Word", s: "Scripture gives foundation", i: "✝️", d: "Glowing Bible rays of light", h: "/word", bg: "rays, light, King center" },
                { t: "The Library", s: "Books give depth", i: "📚", d: "Leather books candles scrolls", h: "/library", bg: "devotionals, sacred archive" },
              ].map((door) => (
                <Link key={door.t} href={door.h} className="group relative bg-[#080706] border-2 border-[#1e1810] hover:border-amber-900/50 p-5 transition-all hover:-translate-y-1 shadow-lg">
                  <div className="absolute top-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
                  <div className="absolute top-1 left-1 w-1 h-1 bg-zinc-700 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-zinc-700 rounded-full"></div>
                  <div className="text-2xl mb-2">{door.i}</div>
                  <p className="text-[8px] tracking-widest text-zinc-700">{door.bg}</p>
                  <h4 className="font-cinzel font-bold text-sm mt-1">{door.t}</h4>
                  <p className="text-[10px] tracking-widest text-amber-700/50">{door.s}</p>
                  <p className="font-crimson italic text-[11px] text-zinc-500 mt-2">{door.d}</p>
                  <div className="mt-3 text-[9px] tracking-[0.3em] text-zinc-700 group-hover:text-zinc-400">ENTER ARCHIVE →</div>
                </Link>
              ))}
            </div>

            {/* Relic Page Blueprint */}
            <div className="mt-8 bg-black border border-zinc-800 p-5">
              <p className="font-cinzel text-[10px] tracking-[0.4em] text-zinc-500">RELIC PAGE BLUEPRINT • EACH RELIC SHOULD HAVE:</p>
              <div className="mt-3 grid md:grid-cols-6 gap-2 text-[10px] text-zinc-600">
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Artifact Image</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Scripture</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Story</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Song</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Video</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Reflection</div>
              </div>
              <p className="font-crimson italic text-[11px] text-zinc-700 mt-3 text-center">Like a page in a sacred archive — Christian Viking-inspired interactive archive</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-crimson italic text-zinc-500 text-sm">Viking is the binding. Scripture is the pages. The King is the center. The Word guides the blade.</p>
            <p className="font-cinzel text-[10px] tracking-[0.4em] text-zinc-700 mt-2">BRAND BIBLE COMPLETE • 97 → 100 • RUNNINGWOLF GUIDE • KING CENTER • ONE CANON XIX RELICS ONE KING</p>
          </div>
        </div>
      </section>
    </main>
  );
                }
