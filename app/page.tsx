// app/page.tsx
import Image from 'next/image'  // <- ADD THIS LINE AT THE TOP
import Link from 'next/link'    // you probably already have this

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50...">
      
      {/* Avatar + Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-24 h-24 mb-4">
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-lg"></div>
          <Image
            src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
            alt="Jessy Marquez - Running Wolf"
            fill
            className="rounded-full object-cover border-2 border-amber-400/40 relative z-10"
            priority
          />
        </div>
        
        <h1 className="text-amber-400 text-xl font-bold tracking-[0.3em]">
          JESSY MARQUEZ
        </h1>
        <p className="text-amber-200/50 text-xs uppercase tracking-widest mt-1">
          RUNNINGWOLF
        </p>
      </div>

      {/* Your existing STORMBREAKERS section */}
      ...
    </main>
  )
}
