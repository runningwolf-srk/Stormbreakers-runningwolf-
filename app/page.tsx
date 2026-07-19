// app/page.tsx - Most Focused Version - Build Safe
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-amber-50 flex flex-col items-center px-5 pt-16 pb-16 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 rounded-full bg-amber-500/30 blur-xl"></div>
          <Image src="/729068345_1706992463868756_7233760520950384832_n~2.jpg" alt="Jessy Marquez" fill className="rounded-full object-cover border border-amber-400/50 relative z-10" priority />
        </div>

        <p className="text-amber-400 font-black tracking-[0.4em] text-xs mb-2">JESSY MARQUEZ</p>
        <p className="text-amber-200/40 tracking-[0.5em] text- font-bold mb-12">RUNNING WOLF</p>

        <h1 className="w-full font-black tracking-tighter leading-none mb-8 text-5xl sm:text-8xl bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-transparent">
          STORMBREAKERS
        </h1>

        <div className="space-y-1 mb-8">
          <p className="text-amber-100 text-xl sm:text-2xl font-bold">Begin with a song.</p>
          <p className="text-amber-100 text-xl sm:text-2xl font-bold">Follow the story.</p>
          <p className="text-amber-100 text-xl sm:text-2xl font-bold">Stand on the Word.</p>
        </div>

        <p className="text-amber-200/60 text-sm max-w-xl leading-relaxed mb-16">
          Sixteen songs forged in warfare. Sixteen testimonies anchored in Scripture.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 text-left">
          <div className="p-6 rounded-xl bg-stone-900/60 border border-amber-400/10">
            <p className="text-amber-400 font-black text-sm mb-2">THE ARMORY</p>
            <p className="text-amber-200/50 text-sm leading-relaxed">Worship songs and declarations.</p>
          </div>
          <div className="p-6 rounded-xl bg-stone-900/60 border border-amber-400/10">
            <p className="text-amber-400 font-black text-sm mb-2">THE CHRONICLES</p>
            <p className="text-amber-200/50 text-sm leading-relaxed">Testimony behind the songs.</p>
          </div>
          <div className="p-6 rounded-xl bg-stone-900/60 border border-amber-400/10">
            <p className="text-amber-400 font-black text-sm mb-2">THE WORD</p>
            <p className="text-amber-200/50 text-sm leading-relaxed">Biblical foundation.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-xl mb-20">
          <Link href="/armory" className="px-8 py-3.5 bg-amber-500 text-stone-950 font-black rounded-xl text-center">Enter The Armory</Link>
          <Link href="/chronicles" className="px-8 py-3.5 bg-stone-900 border border-amber-400/20 text-amber-400 font-black rounded-xl text-center">Read The Chronicles</Link>
          <Link href="/word" className="px-8 py-3.5 bg-transparent border border-amber-400/10 text-amber-200/50 font-black rounded-xl text-center">Study The Word</Link>
        </div>

        <p className="text-amber-100 font-black text-sm tracking-widest">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
        <p className="text-amber-200/20 text-xs mt-12">© 2026 Stormbreakers — Running Wolf</p>
      </div>
    </main>
  )
}
