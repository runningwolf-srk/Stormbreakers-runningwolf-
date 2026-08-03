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
        setTimeout(() => setLightning(false), 150);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const doors = [
    {
      icon: "⚔️",
      title: "Hall of Relics",
      subtitle: "Songs",
      href: "/music",
      rune: "ᚺ",
      desc: "Where worship meets war"
    },
    {
      icon: "📖",
      title: "The Chronicle",
      subtitle: "Story",
      href: "/chronicle",
      rune: "ᚲ",
      desc: "Testimony forged in storm"
    },
    {
      icon: "✝️",
      title: "The Word",
      subtitle: "Scripture",
      href: "/word",
      rune: "ᛟ",
      desc: "The King is the center"
    },
    {
      icon: "📚",
      title: "The Library",
      subtitle: "Books & Devotionals",
      href: "/library",
      rune: "ᛚ",
      desc: "Pages bound in leather"
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 overflow-hidden">
      {/* === ILLUMINATED MANUSCRIPT BACKGROUND === */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Parchment + leather texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-black via-zinc-900/50 to-transparent"
          style={{clipPath: "polygon(0 60%, 12% 40%, 22% 55%, 35% 30%, 48% 50%, 62% 20%, 78% 45%, 88% 35%, 100% 60%, 100% 100%, 0 100%)"}}></div>

        {/* Drifting fog */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-[150%] h-32 bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent blur-2xl animate-[drift_25s_linear_infinite]"></div>
          <div className="absolute top-1/2 -right-1/4 w-[150%] h-40 bg-gradient-to-r from-transparent via-zinc-600/5 to-transparent blur-3xl animate-[drift_35s_linear_infinite_reverse]"></div>
        </div>

        {/* Rain */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{backgroundImage: `repeating-linear-gradient(100deg, transparent 0px, transparent 2px, rgba(200,200,200,0.1) 2px, rgba(200,200,200,0.1) 3px)`}}></div>
        </div>

        {/* Lightning flash overlay */}
        <div className={`absolute inset-0 bg-blue-200/10 transition-opacity duration-150 ${lightning? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Ravens - subtle */}
        <div className="absolute top-20 left-[10%] text-zinc-600 animate-[raven_30s_linear_infinite]">𓅃</div>
        <div className="absolute top-32 right-[15%] text-zinc-700 animate-[raven_40s_linear_infinite_5s] text-sm">𓅃</div>

        {/* Viking wood border - left */}
        <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 border-r border-amber-900/30 bg-gradient-to-b from-amber-950/20 via-zinc-900/50 to-amber-950/20">
          <div className="h-full flex flex-col items-center justify-around py-20 text-amber-800/30 text-xs font-mono writing-vertical">
            <span>ᛋᛏᛟᚱᛗᛒᚱᛖᚨᚲᛖᚱᛋ</span>
            <span>•</span>
            <span>ᚱᚢᚾᚾᛁᚾᚷᚹᛟᛚᚠ</span>
          </div>
        {/* Viking wood border - right */}
        <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 border-l border-amber-900/30 bg-gradient-to-b from-amber-950/20 via-zinc-900/50 to-amber-950/20">
          <div className="h-full flex flex-col items-center justify-around py-20 text-amber-800/30 text-xs font-mono">
            <span>ᛟ</span><span>ᛞ</span><span>ᛁ</span><span>ᚾ</span>
          </div>
        </div>
      </div>

      {/* === HERO - ILLUMINATED MANUSCRIPT OPENING === */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-8 md:px-20 py-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* LEFT: AVATAR AS KEEPER */}
          <div className="relative order-1 lg:order-1 flex flex-col items-center">
            {/* Illuminated frame */}
            <div className="relative p-3 bg-gradient-to-br from-amber-900/40 via-zinc-800 to-amber-900/40 rounded-sm shadow-2xl">
              <div className="absolute inset-1 border-amber-700/30 rounded-sm pointer-events-none"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-amber-600/50"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-amber-600/50"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-amber-600/50"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-amber-600/50"></div>

              <div className="relative bg-black p-2">
                <img
                  src={avatarFile}
                  alt="RunningWolf - Keeper of the Chronicle"
                  className="w-[340px] md:w-[420px] h-auto object-cover block"
                />
                {/* Subtle lightning reflection on armor */}
                <div className={`absolute inset-0 bg-blue-400/5 mix-blend-screen transition-opacity ${lightning? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>

            {/* Name plate - like manuscript caption */}
            <div className="mt-6 bg-[#121212] border border-amber-900/40 px-8 py-4 text-center shadow-xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-amber-800/50 px-3 py-0.5 text-[10px] tracking-[0.3em] text-amber-700">KEEPER</div>
              <h2 className="text-2xl font-black tracking-widest text-zinc-100">RunningWolf</h2>
              <p className="text-sm tracking-[0.2em] text-amber-600/80 mt-1">Stormbreakers • Keeper of the Chronicle</p>
              <p className="text-[11px] text-zinc-500 mt-2 italic">wolf cloak • leather armor • open Bible at side</p>
            </div>
          </div>

          {/* RIGHT: BRANDING + OPENING TEXT */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            {/* Branding */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 border border-amber-900/30 bg-black/50 px-4 py-1.5 mb-6">
                <span className="text-amber-700 text-xs tracking-[0.4em]">ᚱ ᚢ ᚾ ᛖ ᛋ</span>
                <span className="text-zinc-500 text-[10px] tracking-widest">EST. GUYMON, OK</span>
              </div>
              <h1 className="font-black leading-[0.85] tracking-tight">
                <span className="block text-6xl md:text-8xl text-zinc-100">STORM</span>
                <span className="block text-6xl md:text-8xl text-zinc-100 -mt-2">BREAKERS</span>
                <span className="block text-4xl md:text-5xl text-amber-600/90 mt-2 tracking-[0.15em]">RUNNINGWOLF</span>
              </h1>
              <p className="mt-4 text-zinc-400 tracking-widest text-sm">
                Viking Christian Music • Chronicles • Scripture
              </p>
            </div>

            {/* Manuscript quote */}
            <div className="relative bg-[#0f0f0f]/80 border-l-2 border-amber-700/50 p-6 mb-10 backdrop-blur">
              <div className="absolute -left-1 top-0 w-0.5 h-full bg-gradient-to-b from-amber-600 to-transparent"></div>
              <p className="font-serif text-lg leading-relaxed text-zinc-300 italic">
                "This is not a discography. It is an illuminated chronicle — where each song is a relic, each page a witness, and the King remains the center."
              </p>
              <p className="mt-3 text-xs tracking-widest text-zinc-500">— OPENING THE MANUSCRIPT</p>
            </div>

            {/* Scripture anchor */}
            <div className="flex items-center gap-4 text-xs text-zinc-500 mb-8">
              <span className="w-8 h-px bg-amber-800/50"></span>
              <span className="tracking-widest">PSALM 23 • THE WORD AT THE BLADE</span>
              <span className="w-8 h-px bg-amber-800/50"></span>
            </div>
          </div>
        </div>
      </section>

      {/* === NAVIGATION - ILLUSTRATED DOORS === */}
      <section className="relative z-10 px-8 md:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-zinc-500 tracking-[0.4em] text-xs mb-2">CHOOSE YOUR DOOR</h3>
            <div className="h-px w-24 bg-amber-900/50 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doors.map((door) => (
              <Link
                key={door.title}
                href={door.href}
                className="group relative bg-[#121212] border border-zinc-800 hover:border-amber-700/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/10"
              >
                {/* Rune watermark */}
                <div className="absolute top-4 right-4 text-5xl text-zinc-800 group-hover:text-amber-900/20 transition-colors">{door.rune}</div>

                {/* Carved wood top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-900/0 via-amber-800/50 to-amber-900/0"></div>

                <div className="relative">
                  <div className="text-4xl mb-4">{door.icon}</div>
                  <h4 className="text-xl font-black tracking-wide text-zinc-100 group-hover:text-amber-100">{door.title}</h4>
                  <p className="text-sm tracking-widest text-amber-600/70 mt-1">{door.subtitle}</p>
                  <p className="text-xs text-zinc-500 mt-3">{door.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-xs tracking-widest text-zinc-600 group-hover:text-zinc-300">
                    <span>ENTER</span><span>→</span>
                  </div>
                </div>

                {/* Iron rivets */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                <div className="absolute top-3 right-12 w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
              </Link>
            ))}
          </div>

          {/* Bottom manuscript footer */}
          <div className="mt-16 text-center border-t border-amber-900/20 pt-8">
            <p className="font-serif italic text-zinc-500">
              "Viking is the binding. Scripture is the pages. The King is the center."
            </p>
            <p className="text-[10px] tracking-[0.3em] text-zinc-600 mt-2">STORMBREAKERS-RUNNINGWOLF • ILLUMINATED CHRONICLE</p>
          </div>
        </div>
      </section>

      {/* === ANIMATIONS === */}
      <style>{`
        @keyframes drift {
          from { transform: translateX(-20%) }
          to { transform: translateX(20%) }
        }
        @keyframes drift_reverse {
          from { transform: translateX(20%) }
          to { transform: translateX(-20%) }
        }
        @keyframes raven {
          0% { transform: translateX(-10vw) translateY(0px) }
          50% { transform: translateX(50vw) translateY(-20px) }
          100% { transform: translateX(110vw) translateY(0px) }
        }
      `}</style>
    </main>
  );
        }
