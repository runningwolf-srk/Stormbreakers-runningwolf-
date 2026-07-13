import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 flex flex-col items-center px-4 pt-12 pb-12">
      
      {/* Avatar + Name - stays at top */}
      <div className="flex flex-col items-center mb-12">
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
        <p className="text-amber-200/60 text-sm uppercase tracking-widest">
          RUNNINGWOLF
        </p>
      </div>

      {/* EVERYTHING ELSE GOES IN THIS CENTERED WRAPPER */}
      <div className="w-full max-w-4xl text-center flex flex-col items-center">
        
        {/* STORMBREAKERS Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-amber-100 mb-6 tracking-tight leading-none px-4 break-words">
          STORMBREAKERS
        </h1>
        
        <p className="text-amber-100/80 text-xl mb-2 font-mono">
          Begin with a song. Follow the story. Stand on the Word.
        </p>
        
        <p className="text-amber-200/70 text-base mb-12 leading-relaxed max-w-2xl">
          16 relics. One mission. Every song anchored in Scripture, every testimony 
          forged in fire, every act of worship for Jesus Christ.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            href="/armory"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg rounded transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>♫</span> Enter The Armory
          </Link>
          
          <Link 
            href="/chronicles"
            className="px-8 py-4 bg-transparent hover:bg-amber-400/10 text-amber-400 font-bold text-lg rounded border-2 border-amber-400/50 hover:border-amber-400 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>✝</span> Read The Word
          </Link>
        </div>

        {/* Your Relics section, Bible section, Story section all go here */}
        {/* Make sure each section has w-full and mx-auto */}
        
        <section className="w-full mb-16">
          {/* Relics grid code here */}
        </section>

        <section className="w-full mb-16">
          {/* Bible/Verse section here */}
        </section>

        <section className="w-full mb-16">
          {/* Story section here */}
        </section>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-amber-400/10 w-full">
          <p className="text-amber-400 text-sm font-semibold">
            Jesus Christ is the center of them all.
          </p>
        </div>

      </div>
    </main>
  )
}
