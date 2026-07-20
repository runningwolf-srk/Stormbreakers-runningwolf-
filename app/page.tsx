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
        <div className="flex gap-3 justify-center mt-8 flex-wrap">
          <Link href="/armory" className="px-6 py-3 bg-white text-black rounded-full font-bold">⚔️ Hear — Armory</Link>
          <Link href="/chronicles" className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full font-bold">📖 Understand — Chronicles</Link>
          <Link href="/word" className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full font-bold">✝️ Root — Word</Link>
          <Link href="/book" className="px-6 py-3 bg-amber-500 text-black rounded-full font-black">📚 Live — Books</Link>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-zinc-600">Hear → Understand → Root → Live = Worship → Story → Foundation → Application</div>
    </main>
  )
}
