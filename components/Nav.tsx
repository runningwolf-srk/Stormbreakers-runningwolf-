'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { STYLE } from '@/lib/constants'
export function Nav() {
  const path = usePathname()
  const isActive = (p: string) => path.startsWith(p)
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-stone-950/80 border-b border-amber-400/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-amber-100 font-black">RUNNING WOLF <span className="text-amber-500/50 text-xs">STORMBREAKERS</span></Link>
        <div className="hidden md:flex gap-2">
          <Link href="/armory" className={`px-4 py-2 rounded-full text-xs font-black ${isActive('/armory')? 'bg-amber-400 text-stone-950' : 'bg-stone-900 text-amber-300/60 border border-amber-400/10'}`}>⚔️ ENTER THE ARMORY</Link>
          <Link href="/chronicles" className={`px-4 py-2 rounded-full text-xs font-black ${isActive('/chronicles')? 'bg-amber-400 text-stone-950' : 'bg-stone-900 text-amber-300/60 border border-amber-400/10'}`}>📖 READ THE CHRONICLES</Link>
          <Link href="/word" className={`px-4 py-2 rounded-full text-xs font-black ${isActive('/word')? 'bg-amber-400 text-stone-950' : 'bg-stone-900 text-amber-300/60 border border-amber-400/10'}`}>✝️ STUDY THE WORD</Link>
        </div>
        <div className="flex md:hidden gap-1"><Link href="/armory" className="p-2 bg-stone-900 rounded-full text-xs">⚔️</Link><Link href="/chronicles" className="p-2 bg-stone-900 rounded-full text-xs">📖</Link><Link href="/journey" className="p-2 bg-amber-500/20 rounded-full text-xs">🗺️</Link><Link href="/word" className="p-2 bg-stone-900 rounded-full text-xs">✝️</Link></div>
      </div>
      <div className="text-center py-1 bg-amber-500/[0.02] border-t border-amber-400/5"><p className="text-amber-400/30 text-xs tracking-[0.3em] font-black">{STYLE.FLOW} • Hear → Understand → Root</p></div>
    </nav>
  )
}
