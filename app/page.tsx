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
        setTimeout(() => setLightning(false), 120);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const doors = [
    {
      icon: "⚔️",
      title: "Hall of Relics",
      subtitle: "Songs",
      href: "/music",
      art: "sword shield forge sparks",
      color: "from-zinc-800 to-zinc-900",
      accent: "border-red-900/40 hover:border-red-700/60",
      desc: "Where worship meets war"
    },
    {
      icon: "📖",
      title: "The Chronicle",
      subtitle: "Story",
      href: "/chronicle",
      art: "illuminated manuscript feather quill",
      color: "from-amber-950/40 to-zinc-900",
      accent: "border-amber-900/40 hover:border-amber-700/60",
      desc: "Testimony forged in storm"
    },
    {
      icon: "✝️",
      title: "The Word",
      subtitle: "Scripture",
      href: "/word",
      art: "glowing Bible rays light",
      color: "from-blue-950/30 to-zinc-900",
      accent: "border-blue-900/40 hover:border-blue-700/60",
      desc: "The King is the center"
    },
    {
      icon: "📚",
      title: "The Library",
      subtitle: "Books & Devotionals",
      href: "/library",
      art: "leather books candles scrolls",
      color: "from-stone-800/50 to-zinc-900",
      accent: "border-stone-700/40 hover:border-stone-500/60",
      desc: "Pages bound in leather"
    },
  ];

  const timeline = [
    { chapter: "Chapter I", status: "complete", relics: ["Blade", "Lord of Lords", "Blood of Cross"], icon: "✓" },
    { chapter: "Chapter II", status: "current", relics: ["Wilderness", "Shadow", "Oath"], icon: "◐" },
    { chapter: "Chapter III", status: "sealed", relics: ["Sealed", "Sealed", "Sealed"], icon: "🔒" },
  ];

  return (
    <main className="relative min-h-screen bg-[#080808] text-zinc-100 overflow-hidden">
      {/* === ATMOSPHERE LAYERS === */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-[45vh] bg-gradient-to-t from-black via-zinc-950 to-transparent opacity-80"></div>
        {/* Fog */}
        <div className="absolute top-1/3 left-0 w-full h-24 bg-gradient-to-r from-transparent via-zinc-600/5 to-transparent blur-2xl"></div>
        {/* Embers */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-600 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-0.5 h-0.5 bg-amber-400 rounded-full animate-pulse delay-500"></div>
        </div>
        {/* Rain subtle */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "repeating-linear-gradient(95deg, transparent 0px, transparent 3px, white 3px, white 4px)"}}></div>
        {/* Lightning */}
        <div className={`absolute inset-0 bg-blue-100/5 transition-opacity duration-100 ${lightning? "opacity-100" : "opacity-0"}`}></div>
        {/* Ravens subtle */}
        <div className="absolute top-20 left-[8%] text-zinc-700 text-xs opacity-40">raven</div>
        <div className="absolute top-28 right-[12%] text-zinc-700 text-[10px] opacity-30">wolf</div>
        {/* Carved beam top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-950 via-zinc-800 to-amber-950 border-b border-amber-900/20"></div>
        {/* Iron rivets corners */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-zinc-700 rounded-full border border-zinc-600"></div>
      </div>

      {/* === HERO - CINEMATIC CENTERPIECE === */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">

          {/* CENTERPIECE AVATAR */}
          <div className="relative flex flex-col items-center">
            {/* Nordic frame with knotwork */}
            <div className="relative">
              {/* Outer carved wood */}
              <div className="absolute -inset-3 bg-gradient-to-br from-amber-950 via-[#1a1a1a] to-amber-950 rounded-sm"></div>
              <div className="absolute -inset-3 border border-amber-900/30 rounded-sm"></div>
              {/* Knotwork corners */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-amber-700/60"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-amber-700/60"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-amber-700/60"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-amber-700/60"></div>

              {/* Torchlight glow */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-40 bg-amber-600/10 blur-2xl rounded-full"></div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-20 h-40 bg-blue-600/10 blur-2xl rounded-full"></div>

              {/* Avatar image */}
              <div className="relative bg-black p-2 shadow-2xl">
                <img src={avatarFile} alt="RunningWolf Keeper" className="w-[380px] md:w-[460px] h-auto block" />
                {/* Storm reflection */}
                <div className={`absolute inset-0 bg-blue-300/5 mix-blend-screen pointer-events-none transition-opacity ${lightning? "opacity-100" : "opacity-0"}`}></div>
                {/* Sword on Bible hint - overlay text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                  <p className="text-[10px] tracking-widest text-amber-600/80 text-center">WOLF-FUR CLOAK • LEATHER & IRON ARMOR • BLADE ON OPEN BIBLE • STORM & LIGHTNING</p>
                </div>
              </div>
            </div>

            {/* Name plate - FIXED TITLE */}
            <div className="mt-8 bg-[#111] border border-amber-900/50 px-10 py-5 text-center shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-amber-800/60 px-4 py-1 text-[10px] tracking-[0.4em] text-amber-500">
                CHRONICLER OF STORMBREAKERS
              </div>
              <h2 className="text-3xl font-black tracking-widest text-zinc-100 mt-2">RunningWolf</h2>
              <p className="text-xs tracking-[0.3em] text-zinc-500 mt-1">Keeper of the Chronicle • Rugged but approachable</p>
              <p className="text-[10px] tracking-widest text-amber-700/60 mt-2">GUIDE THROUGH THE CHRONICLE, NOT FOCUS OF WORSHIP</p>
            </div>
          </div>

          {/* BRANDING + LORE */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="font-black leading-[0.85] tracking-tight">
                <span className="block text-6xl md:text-7xl text-zinc-100">STORM</span>
                <span className="block text-6xl md:text-7xl text-zinc-100 -mt-1">BREAKERS</span>
                <span className="block text-3xl md:text-4xl text-amber-600 tracking-[0.2em] mt-2">RUNNINGWOLF</span>
              </h1>
              <p className="mt-3 text-zinc-500 tracking-widest text-xs">Viking Christian Music • Chronicles • Scripture</p>
            </div>

            <div className="bg-[#0f0f0f] border-l-2 border-amber-700/60 p-5 mb-6 text-left">
              <p className="font-serif text-base leading-relaxed text-zinc-300 italic">
                One Canon. Nineteen Relics. One King. Songs, chronicles, Scripture, and books all reinforce one another — visitors enter a world, not just a discography.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 border border-zinc-800 bg-black/60 px-4 py-2 text-[10px] tracking-widest text-zinc-500 mb-8">
              <span className="w-2 h-2 bg-amber-700 rounded-full animate-pulse"></span>
              <span>BRAND: Viking is the binding. Scripture is the pages. The King is the center.</span>
            </div>

            {/* PROGRESS TIMELINE */}
            <div className="bg-[#0a0a0a] border border-zinc-800/80 p-6 text-left">
              <h4 className="text-[11px] tracking-[0.4em] text-zinc-500 mb-4 text-center">THE UNFOLDING SAGA</h4>
              <div className="space-y-4">
                {timeline.map((ch) => (
                  <div key={ch.chapter} className={`flex gap-4 ${ch.status==="sealed"? "opacity-40" : ""}`}>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${ch.status==="complete"? "bg-amber-900/30 border-amber-700 text-amber-400" : ch.status==="current"? "bg-blue-900/20 border-blue-700 text-blue-400" : "border-zinc-700 text-zinc-600"}`}>{ch.icon}</div>
                      {ch.chapter!=="Chapter III" && <div className="w-px h-8 bg-zinc-800 mt-2"></div>}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold tracking-widest text-zinc-300">{ch.chapter} {ch.status==="complete"? "✓" : ""}</p>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        {ch.relics.map((r) => (
                          <span key={r} className="text-[11px] px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-500">{ch.status==="sealed"? "🔒 Sealed" : r}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-zinc-600 mt-4 text-center italic">Visitors witness an unfolding saga • Reason to return</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOORS WITH VISUAL IDENTITY */}
      <section className="relative z-10 px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-zinc-600 tracking-[0.5em] text-[11px] mb-3">FOUR DOORS • ONE CANON</h3>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-900/40 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {doors.map((door) => (
              <Link key={door.title} href={door.href} className={`group relative bg-gradient-to-br ${door.color} border ${door.accent} p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-800/30 to-transparent"></div>
                <div className="relative">
                  <div className="text-3xl mb-3">{door.icon}</div>
                  <div className="text-[10px] tracking-widest text-zinc-600 mb-1">{door.art}</div>
                  <h4 className="text-lg font-black tracking-wide text-zinc-100">{door.title}</h4>
                  <p className="text-xs tracking-widest text-amber-600/60 mt-1">{door.subtitle}</p>
                  <p className="text-[11px] text-zinc-500 mt-2">{door.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[10px] tracking-[0.3em] text-zinc-600 group-hover:text-zinc-300">
                    <span>ENTER</span><span>→</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-zinc-700 rounded-full"></div>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center border-t border-amber-900/20 pt-6">
            <p className="font-serif italic text-zinc-500 text-sm">Viking is the binding. Scripture is the pages. The King is the center.</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700 mt-2">ONE CANON • NINETEEN RELICS • ONE KING • ILLUMINATED CHRONICLE • 100/100</p>
          </div>
        </div>
      </section>
    </main>
  );
                                        }
