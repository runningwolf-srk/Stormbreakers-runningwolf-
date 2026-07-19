import Link from 'next/link'
import { STYLE } from '@/lib/constants'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full text-center">
        <p className="text-amber-400/50 tracking-[0.5em] text-xs font-black mb-4">JESSY MARQUEZ</p>
        <h1 className="text-6xl font-black tracking-tighter text-amber-100">RUNNING WOLF</h1>
        <h2 className="text-5xl font-black tracking-[0.2em] text-amber-500 mt-2">STORMBREAKERS</h2>
        <div className="mt-10 space-y-1">
          <p className="text-amber-100 text-lg tracking-widest font-bold">Begin with a song.</p>
          <p className="text-amber-100 text-lg tracking-widest font-bold">Follow the story.</p>
          <p className="text-amber-100 text-lg tracking-widest font-bold">Stand on the Word.</p>
        </div>
        <p className="text-amber-200/40 text-sm mt-6">Sixteen songs forged in warfare. Sixteen testimonies anchored in Scripture.</p>
        <p className="text-amber-400/30 text-xs tracking-[0.3em] mt-3">{STYLE.FLOW}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <div className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl"><p className="text-2xl mb-2">⚔️</p><p className="text-amber-400 font-black text-sm">THE ARMORY</p></div>
          <div className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl"><p className="text-2xl mb-2">📖</p><p className="text-amber-400 font-black text-sm">THE CHRONICLES</p></div>
          <div className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl"><p className="text-2xl mb-2">✝️</p><p className="text-amber-400 font-black text-sm">THE WORD</p></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <Link href="/armory" className="px-8 py-3 bg-amber-400 text-stone-950 font-black text-xs rounded-full">Enter The Armory</Link>
          <Link href="/chronicles" className="px-8 py-3 bg-stone-900 border border-amber-400/20 text-amber-300 font-black text-xs rounded-full">Read The Chronicles</Link>
          <Link href="/word" className="px-8 py-3 bg-stone-900 border border-amber-400/20 text-amber-300 font-black text-xs rounded-full">Study The Word</Link>
        </div>
        <p className="text-amber-400 font-black tracking-[0.3em] text-xs mt-16">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
      </div>
    </main>
  )
}
