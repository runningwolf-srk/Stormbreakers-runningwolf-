'use client'
import Link from 'next/link';
import EmberBackground from '@/components/EmberBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <EmberBackground />
      
      <div className="z-10 text-center px-4">
        <h1 className="font-cinzel text-5xl sm:text-7xl mb-4 text-amber-400">
          STORMBREAKER
        </h1>
        <p className="font-mono text-sm sm:text-lg mb-12 text-gray-300">
          Eight Relics. Eight Declarations. One Call.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link href="/armory" className="door-btn border border-amber-600/50 px-8 py-4 hover:bg-amber-600/10 transition-all">
            ⚔️ Enter the Armory
          </Link>
          <Link href="/sound" className="door-btn border border-amber-600/50 px-8 py-4 hover:bg-amber-600/10 transition-all">
            🎧 Hear the Sound
          </Link>
          <Link href="/saga" className="door-btn border border-amber-600/50 px-8 py-4 hover:bg-amber-600/10 transition-all">
            📜 Read the Saga
          </Link>
        </div>
      </div>

      <Link 
        href="/about" 
        className="absolute bottom-8 text-gray-500 hover:text-amber-400 font-mono text-sm"
      >
        About the Stormbreaker
      </Link>
    </main>
  )
}
