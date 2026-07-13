import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 flex flex-col items-center px-4 pt-12 pb-12">
      
      {/* Avatar + Name - now visible at top */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse"></div>
          <Image
            src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
            alt="Jessy Marquez - Running Wolf"
            fill
            className="rounded-full object-cover border-2 border-amber-400/50 relative z-10"
            priority
          />
        </div>
        
        <h1 className="text-amber-400 text-2xl font-bold tracking-[0.2em] mb-1">
          JESSY MARQUEZ
        </h1>
        <p className="text-amber-200/60 text-sm uppercase tracking-widest mb-8">
          RUNNINGWOLF
        </p>
      </div>

      {/* STORMBREAKERS - now sits below, not centered */}
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-black text-amber-100 mb-6 tracking-tight">
          STORMBREAKERS
        </h1>
        
        <p className="text-amber-100/80 text-xl mb-2 font-mono">
          Begin with a song. Follow the story. Stand on the Word.
        </p>
        
        ...rest of your page...
      </div>
    </main>
  )
}
