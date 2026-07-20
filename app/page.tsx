// @ts-nocheck
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <main className="px-4 py-16 max-w-6xl mx-auto text-center">
      <h1 className="text-7xl font-black tracking-tighter">STORM<br/>BREAKERS</h1>
      <p className="mt-4 text-xs uppercase tracking-[0.4em] text-zinc-500">16 Songs • 16 Battles • One Testimony • One King</p>
      <p className="mt-3 text-[11px] uppercase tracking-widest text-zinc-600">Hear → Understand → Root → Live</p>
      <div className="mt-10 grid md:grid-cols-4 gap-4 text-left">
        <Link href="/armory"><div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-white/20"><p className="text-xs uppercase tracking-widest">⚔️ Hear</p><h2 className="text-2xl font-black mt-1">Armory</h2><p className="text-xs text-zinc-500 mt-1">The Songs become Relics</p></div></Link>
        <Link href="/chronicles"><div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-white/20"><p className="text-xs uppercase tracking-widest">📖 Understand</p><h2 className="text-2xl font-black mt-1">Chronicles</h2><p className="text-xs text-zinc-500 mt-1">The Relics become Testimony</p></div></Link>
        <Link href="/word"><div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-white/20"><p className="text-xs uppercase tracking-widest">✝️ Root</p><h2 className="text-2xl font-black mt-1">The Word</h2><p className="text-xs text-zinc-500 mt-1">Testimony returns to Scripture</p></div></Link>
        <Link href="/book"><div className="bg-white text-black rounded-2xl p-6"><p className="text-xs uppercase tracking-widest opacity-60">📚 Live</p><h2 className="text-2xl font-black mt-1">Books</h2><p className="text-xs opacity-60 mt-1">Scripture becomes Practice</p></div></Link>
      </div>
      <p className="mt-12 text-xs text-zinc-600">Wolf Blade — Orchestral metal worship — Blade forged on night I wanted to quit — Hebrews 4:12 — Learn to fight with truth instead of fear.</p>
    </main>
  )
}
