import Link from 'next/link'
import { STYLE } from '@/lib/constants'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <p className="text-amber-400/50 tracking-[0.5em] text-xs font-black mb-4">JESSY MARQUEZ</p>
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-amber-100">RUNNING WOLF</h1>
        <h2 className="text-5xl font-black tracking-[0.2em] text-amber-500 mt-2">STORMBREAKERS</h2>
        <div className="mt-10 space-y-1"><p className="text-amber-100 text-xl tracking-widest font-bold">Begin with a song.</p><p className="text-amber-100 text-xl tracking-widest font-bold">Follow the story.</p><p className="text-amber-100 text-xl tracking-widest font-bold">Stand on the Word.</p></div>
        <p className="text-amber-400/30 text-xs tracking-[0.3em] mt-6">{STYLE.FLOW}</p>
        <p className="text-amber-200/40 text-sm italic mt-4 max-w-xl mx-auto">{STYLE.DESCRIPTION}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 text-left">
          <Link href="/armory" className="p-4 bg-stone-900/60 border border-amber-400/10 rounded-xl hover:border-amber-400/20 transition"><p className="text-amber-400 font-black text-xs">⚔️ THE ARMORY</p><p className="text-amber-200/30 text-xs mt-1">Experience the 16 songs</p></Link>
          <Link href="/chronicles" className="p-4 bg-stone-900/60 border border-amber-400/10 rounded-xl hover:border-amber-400/20 transition"><p className="text-amber-400 font-black text-xs">📖 CHRONICLES</p><p className="text-amber-200/30 text-xs mt-1">Understand the story</p></Link>
          <Link href="/journey" className="p-4 bg-amber-500/10 border border-amber-400/20 rounded-xl hover:bg-amber-500/20 transition ring-1 ring-amber-400/20"><p className="text-amber-400 font-black text-xs">🗺️ JOURNEY MAP</p><p className="text-amber-200/40 text-xs mt-1">16 Chapters • 4 Acts</p></Link>
          <Link href="/word" className="p-4 bg-stone-900/60 border border-amber-400/10 rounded-xl hover:border-amber-400/20 transition"><p className="text-amber-400 font-black text-xs">✝️ THE WORD</p><p className="text-amber-200/30 text-xs mt-1">Return to foundation</p></Link>
        </div>
        <Link href="/journey" className="inline-block mt-10 px-10 py-4 bg-amber-400 text-stone-950 font-black tracking-[0.2em] text-xs rounded-full hover:bg-amber-300 transition">VIEW THE FULL JOURNEY →</Link>
      </div>
    </main>
  )
}
