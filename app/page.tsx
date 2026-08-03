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
        setTimeout(() => setLightning(false), 140);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const doors = [
    { icon: "SWORD", title: "Hall of Relics", sub: "Songs become discoveries", href: "/music", desc: "Where songs are forged for the battle" },
    { icon: "BOOK", title: "The Chronicle", sub: "Stories give meaning", href: "/chronicle", desc: "Open illuminated manuscript" },
    { icon: "CROSS", title: "The Word", sub: "Scripture gives foundation", href: "/word", desc: "Glowing Bible rays of light" },
    { icon: "LIBRARY", title: "The Library", sub: "Books give depth", href: "/library", desc: "Leather books candles scrolls" },
  ];

  return (
    <main className="relative min-h-screen bg-[#040404] text-zinc-100 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#080808]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black to-transparent"></div>
        <div className={`absolute inset-0 bg-blue-100/5 transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
      </div>

      <header className="relative z-20 border-b border-amber-900/20 bg-black/80">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-900 to-zinc-900 border border-amber-800/50 flex items-center justify-center font-black text-amber-500">SR</div>
            <div>
              <p className="font-black tracking-[0.2em] text-sm">STORMBREAKERS</p>
              <p className="text-[10px] tracking-[0.4em] text-zinc-600">THE OPEN CHRONICLE - ONE CANON - XIX RELICS - ONE KING</p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0e0c0a] border-[14px] border-[#1e1810] shadow-[0_0_100px_rgba(0,0,0,0.9)]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative bg-[#080706] p-10 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-amber-900/20">
                <p className="text-[10px] tracking-[0.5em] text-amber-700/50 mb-6">MAIN AVATAR ARTWORK - KEEPER</p>
                <div className="relative">
                  <div className="relative border-2 border-amber-900/40 bg-black p-2">
                    <img src={avatarFile} alt="RunningWolf" className="w-[380px] md:w-[440px] block" />
                    <div className={`absolute inset-0 bg-blue-200/5 pointer-events-none transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black border border-amber-900/40 px-4 py-1">
                    <p className="text-[9px] tracking-[0.3em] text-amber-600/70 whitespace-nowrap">BLADE BESIDE BIBLE RESPECTFULLY - WORD GUIDES BLADE</p>
                  </div>
                </div>

                <div className="mt-14 bg-[#111] border border-zinc-800 px-6 py-4 text-center w-full max-w-sm">
                  <p className="text-[9px] tracking-[0.4em] text-zinc-600">IDENTITY & CHARACTER - 10/10</p>
                  <h3 className="font-black text-lg tracking-widest mt-2">RunningWolf</h3>
                  <p className="text-[11px] tracking-widest text-amber-700/70 mt-1">Keeper of the Chronicle</p>
                  <p className="italic text-xs text-zinc-500 mt-3">Not focus of worship - Guide into the world. The King is center.</p>
                  <div className="mt-3 pt-3 border-t border-zinc-800/50 text-[10px] text-zinc-600">
                    Wolf-fur cloak - Leather and iron armor - Blade beside open Bible - Storm/lightning - Rugged but approachable
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-[#0d0b09]">
                <div className="mb-8">
                  <h1 className="font-black leading-[0.85]">
                    <span className="block text-5xl md:text-6xl">STORMBREAKERS</span>
                    <span className="block text-xl md:text-2xl tracking-[0.4em] text-amber-600/80 mt-2">THE OPEN CHRONICLE</span>
                  </h1>
                  <p className="mt-4 text-xs tracking-[0.35em] text-zinc-500">One Canon - Nineteen Relics - One King</p>
                  <div className="mt-4 h-px w-20 bg-amber-900/40"></div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="bg-black border border-zinc-800 p-4">
                    <p className="text-[10px] tracking-widest text-zinc-500 mb-2">VISUAL SYSTEM - 100/100</p>
                    <div className="space-y-1.5 text-[11px] text-zinc-600">
                      <p>✓ Avatar - Wolf-fur, leather/iron, Bible beside blade</p>
                      <p>✓ Logo - SR seal + XIX Relics</p>
                      <p>✓ Relic icons - Sword/Shield/Forge/Scroll/Rays/Books</p>
                      <p>✓ Doors - Carved wood + Norse knotwork decorative</p>
                      <p>✓ Seals - Wax I II III</p>
                      <p>✓ Manuscript - Parchment leather Cinzel Crimson</p>
                    </div>
                  </div>

                  <div className="bg-[#0f0f0f] border-l-2 border-amber-800/60 p-4">
                    <p className="italic text-sm text-zinc-300">Chapter I - Foundation: Blade=Word, Lord=Surrender, Blood=Redemption. Chapter II - Testing: Wilderness Shadow Oath</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-black border border-amber-900/30 p-3 text-center">
                      <div className="w-8 h-8 mx-auto bg-amber-900/20 border border-amber-800/30 rounded-full flex items-center justify-center text-amber-600">I</div>
                      <p className="text-[10px] mt-2 tracking-widest">FOUNDATION</p>
                    </div>
                    <div className="bg-black border border-blue-900/20 p-3 text-center">
                      <div className="w-8 h-8 mx-auto bg-blue-900/20 border border-blue-800/30 rounded-full flex items-center justify-center text-blue-500">II</div>
                      <p className="text-[10px] mt-2 tracking-widest">TESTING</p>
                    </div>
                    <div className="bg-black border border-zinc-800 p-3 text-center opacity-60">
                      <div className="w-8 h-8 mx-auto bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-500">III</div>
                      <p className="text-[10px] mt-2 tracking-widest">SEALED</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0e0c0a] border-8 border-[#1a1208] p-6">
            <div className="text-center mb-6">
              <p className="text-[11px] tracking-[0.5em] text-zinc-600">FOUR CARVED DOORS - TURN THE PAGE</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {doors.map((door) => (
                <Link key={door.title} href={door.href} className="group relative bg-[#080706] border-2 border-[#1e1810] hover:border-amber-900/50 p-5 transition-all hover:-translate-y-1">
                  <div className="text-[10px] tracking-widest text-zinc-700">{door.icon}</div>
                  <h4 className="font-bold text-sm mt-2 tracking-wide">{door.title}</h4>
                  <p className="text-[11px] tracking-widest text-amber-700/50">{door.sub}</p>
                  <p className="italic text-[11px] text-zinc-500 mt-2">{door.desc}</p>
                  <div className="mt-3 text-[9px] tracking-[0.3em] text-zinc-700 group-hover:text-zinc-400">ENTER ARCHIVE →</div>
                </Link>
              ))}
            </div>

            <div className="mt-8 bg-black border border-zinc-800 p-5">
              <p className="text-[10px] tracking-[0.4em] text-zinc-500">RELIC PAGE BLUEPRINT</p>
              <div className="mt-3 grid md:grid-cols-6 gap-2 text-[10px] text-zinc-600">
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Artifact Image</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Scripture</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Story</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Song</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Video</div>
                <div className="bg-[#111] border border-zinc-800 p-2 text-center">Reflection</div>
              </div>
              <p className="italic text-[11px] text-zinc-700 mt-3 text-center">Like a page in a sacred archive</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="italic text-zinc-500 text-sm">Viking is the binding. Scripture is the pages. The King is the center. The Word guides the blade.</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700 mt-2">ONE CANON XIX RELICS ONE KING - GUIDE NOT WORSHIP - 100/100</p>
          </div>
        </div>
      </section>
    </main>
  );
          }
