"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header(){
  const path = usePathname()
  if(path==="/") return null
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-black text-xs tracking-widest">RUNNINGWOLF • STORMBREAKERS</Link>
        <div className="flex gap-5 text-[11px] tracking-widest">
          <Link href="/armory" className="text-white/70 hover:text-white">⚔️ ARMORY</Link>
          <Link href="/chronicles" className="text-white/70 hover:text-white">📖 CHRONICLES</Link>
          <Link href="/word" className="text-white/70 hover:text-white">✝️ WORD</Link>
          <Link href="/books" className="text-white/70 hover:text-white">📚 BOOKS</Link>
        </div>
      </nav>
    </header>
  )
}
