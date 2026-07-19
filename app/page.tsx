import Link from 'next/link'
import { STYLE } from '@/lib/constants'

export default function HomePage() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* NEW HOOK — Fixes 8.8 Audience Connection */}
        <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-400/20 rounded-full mb-6">
          <p className="text-amber-400 text-xs font-black tracking-[0.3em]">16 SONGS • 16 BATTLES • ONE TESTIMONY • ONE KING</p>
        </div>

        <p className="text-amber-400/50 text-xs font-black tracking-[0.5em]">JESSY MARQUEZ PRESENTS</p>
        <h1 className="text-7xl md:text-8xl font-black text-amber-100 tracking-tighter leading-none mt-2">RUNNING WOLF</h1>
        <h2 className="text-6xl font-black text-amber-500 tracking-[0.2em]">STORMBREAKERS</h2>
        
        <p className="text-amber-100/80 italic mt-6 max-w-2xl mx-auto text-lg">{STYLE.DESCRIPTION}</p>
        <p className="text-stone-400 text-sm mt-4 max-w-2xl mx-auto">For anyone who has walked through fire, fought battles no one saw, and discovered that Jesus Christ is still the center of it all. Storm → Awakening → Fire → Healing → Identity → Warfare → Calling → Legacy</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <Link href="/armory" className="group p-8 bg-stone-900 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition">
            <p className="text-3xl">⚔️</p>
            <h3 className="font-black text-sm mt-4 text-amber-100 tracking-widest">ENTER THE ARMORY</h3>
            <p className="text-xs text-amber-400/40 mt-1 tracking-widest font-black">Experience the music</p>
            <p className="text-sm text-stone-400 mt-4">16 relics. Each a song forged in warfare. Artwork, audio, video. Worship anthem, battle anthem, prayer ballad, cinematic finale.</p>
            <p className="text-xs mt-6 font-black text-amber-400 group-hover:translate-x-1 transition">HEAR →</p>
          </Link>

          <Link href="/chronicles" className="group p-8 bg-stone-900 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition">
            <p className="text-3xl">📖</p>
            <h3 className="font-black text-sm mt-4 text-amber-100 tracking-widest">READ THE CHRONICLES</h3>
            <p className="text-xs text-amber-400/40 mt-1 tracking-widest font-black">Experience the testimony</p>
            <p className="text-sm text-stone-400 mt-4">16 chapters with specific scenes. Not just theme — moment. Valley, fire, scars, altar, roar, tower, legacy.</p>
            <p className="text-xs mt-6 font-black text-amber-400 group-hover:translate-x-1 transition">UNDERSTAND →</p>
          </Link>

          <Link href="/word" className="group p-8 bg-amber-500/5 border border-amber-400/20 rounded-2xl hover:border-amber-400/40 transition">
            <p className="text-3xl">✝️</p>
            <h3 className="font-black text-sm mt-4 text-amber-100 tracking-widest">STUDY THE WORD</h3>
            <p className="text-xs text-amber-400/40 mt-1 tracking-widest font-black">Experience the foundation</p>
            <p className="text-sm text-stone-400 mt-4">16 Scriptures. Every testimony points back to Christ's work, not only personal transformation.</p>
            <p className="text-xs mt-6 font-black text-amber-400 group-hover:translate-x-1 transition">ROOT →</p>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-4 bg-stone-900/40 border border-amber-400/10 rounded-xl"><p className="text-amber-400/60 text-xs font-black">ACT I</p><p className="text-stone-300 text-xs mt-1">Worship Begins • Courage • Fire • Healing</p><p className="text-amber-400/20 text-xs mt-2">Storm → Awakening</p></div>
          <div className="p-4 bg-stone-900/40 border border-amber-400/10 rounded-xl"><p className="text-amber-400/60 text-xs font-black">ACT II</p><p className="text-stone-300 text-xs mt-1">Scars • Altar • Royal Blood • Covenant</p><p className="text-amber-400/20 text-xs mt-2">Identity → Transformation</p></div>
          <div className="p-4 bg-stone-900/40 border border-amber-400/10 rounded-xl"><p className="text-amber-400/60 text-xs font-black">ACT III</p><p className="text-stone-300 text-xs mt-1">Breaker • Lion • Restoration • Oath</p><p className="text-amber-400/20 text-xs mt-2">Battle → Warfare</p></div>
          <div className="p-4 bg-amber-500/10 border border-amber-400/20 rounded-xl"><p className="text-amber-400 text-xs font-black">ACT IV</p><p className="text-stone-300 text-xs mt-1">Stormborn • Unbroken • Tower of One • Legacy</p><p className="text-amber-400/40 text-xs mt-2">Calling → Kingdom</p></div>
        </div>

        <Link href="/journey" className="inline-block mt-10 px-10 py-4 bg-amber-400 text-stone-950 font-black text-xs rounded-full tracking-widest hover:bg-amber-300 transition">VIEW JOURNEY MAP — 16 CHAPTERS • 4 ACTS</Link>
      </div>
    </main>
  )
}
