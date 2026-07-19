import Link from 'next/link'
import { STYLE } from '@/lib/constants'
export default function HomePage() {
  return (
    <main className="px-6 py-16"><div className="max-w-5xl mx-auto text-center">
      <p className="text-amber-400/50 text-xs font-black tracking-[0.5em]">JESSY MARQUEZ</p>
      <h1 className="text-7xl font-black text-amber-100">RUNNING WOLF</h1><h2 className="text-6xl font-black text-amber-500 tracking-[0.2em]">STORMBREAKERS</h2>
      <p className="text-amber-100/80 italic mt-8 max-w-2xl mx-auto">{STYLE.DESCRIPTION}</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
        <Link href="/armory" className="p-8 bg-stone-900 border border-amber-400/10 rounded-2xl"><p>⚔️</p><h3 className="font-black text-sm mt-4 text-amber-100">ENTER THE ARMORY</h3><p className="text-xs text-amber-400/40 mt-1">Experience the music</p><p className="text-sm text-stone-400 mt-4">16 relics. Artwork, audio, video.</p><p className="text-xs mt-6 font-black text-amber-400/60">HEAR →</p></Link>
        <Link href="/chronicles" className="p-8 bg-stone-900 border border-amber-400/10 rounded-2xl"><p>📖</p><h3 className="font-black text-sm mt-4 text-amber-100">READ THE CHRONICLES</h3><p className="text-xs text-amber-400/40 mt-1">Experience the testimony</p><p className="text-sm text-stone-400 mt-4">16 chapters. Story behind songs.</p><p className="text-xs mt-6 font-black text-amber-400/60">UNDERSTAND →</p></Link>
        <Link href="/word" className="p-8 bg-amber-500/5 border border-amber-400/20 rounded-2xl"><p>✝️</p><h3 className="font-black text-sm mt-4 text-amber-100">STUDY THE WORD</h3><p className="text-xs text-amber-400/40 mt-1">Experience the foundation</p><p className="text-sm text-stone-400 mt-4">16 Scriptures. Biblical connection.</p><p className="text-xs mt-6 font-black text-amber-400/60">ROOT →</p></Link>
      </div>
      <Link href="/journey" className="inline-block mt-10 px-10 py-4 bg-amber-400 text-stone-950 font-black text-xs rounded-full">VIEW JOURNEY MAP — 16 CHAPTERS • 4 ACTS</Link>
    </div></main>
  )
}
