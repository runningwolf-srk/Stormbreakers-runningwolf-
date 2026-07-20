// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function HomePage() {
  return (
    <main className="px-4 py-16 max-w-6xl mx-auto">
      <div className="text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">Running Wolf Stormbreakers</p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4">STORM<br/>BREAKERS</h1>
        <p className="mt-4 text-zinc-400 tracking-widest">16 SONGS • 16 BATTLES • ONE TESTIMONY • ONE KING</p>
        <p className="mt-2 text-amber-400 font-mono text-sm">The voice of the LORD thunders over the waters. — Psalm 29:3</p>
        <div className="flex gap-3 justify-center mt-8">
          <Link href="/armory" className="px-6 py-3 bg-white text-black rounded-full font-bold">⚔️ Hear — Armory</Link>
          <Link href="/chronicles" className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full font-bold">📖 Understand — Chronicles</Link>
          <Link href="/word" className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full font-bold">✝️ Root — Word</Link>
        </div>
      <div className="grid md:grid-cols-3 gap-4 mt-20">
        <Link href="/armory" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"><p className="text-2xl">⚔️</p><h3 className="font-black mt-3">HEAR</h3><p className="text-xs text-zinc-500">Stormbreak • Wolf Fang • Wolf Blade • Thunder Drums</p></Link>
        <Link href="/chronicles" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"><p className="text-2xl">📖</p><h3 className="font-black mt-3">UNDERSTAND</h3><p className="text-xs text-zinc-500">Testimony as novel • 16 chapters</p></Link>
        <Link href="/word" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"><p className="text-2xl">✝️</p><h3 className="font-black mt-3">ROOT</h3><p className="text-xs text-zinc-500">Scripture foundation • BibleGateway linked</p></Link>
      </div>
      <div className="mt-12 text-center"><Link href="/book" className="px-6 py-3 bg-amber-500 text-black rounded-full font-black">📚 Enter The Books — Live the Journey →</Link></div>
    </main>
  )
      }
