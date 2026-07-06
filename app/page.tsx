  'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      
      <div className="z-10 text-center px-4">
        <h1 className="font-cinzel text-6xl md:text-8xl tracking-widest mb-4">
          STORMBREAKERS
        </h1>
        <p className="font-mono text-lg md:text-xl text-amber-400 mb-16">
          Eight Relics. Eight Declarations. One Call.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/armory" className="door-btn">
            ⚔️ Enter the Armory
          </Link>
          <Link href="/sound" className="door-btn">
            🎧 Hear the Sound
          </Link>
          <Link href="/saga" className="door-btn">
            📜 Read the Saga
          </Link>
        </div>
      </div>

      <Link 
        href="/about" 
        className="absolute bottom-8 text-gray-500 hover:text-white text-sm z-10"
      >
        About RunningWolf
      </Link>
    </main>
  );
}
