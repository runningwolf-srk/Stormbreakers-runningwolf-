"use client"
import { usePathname } from "next/navigation"
export default function Header(){
  const path = usePathname()
  const isHome = path === "/"
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className={`font-black text-xs tracking-widest ${isHome?"opacity-0 pointer-events-none":""}`}>RUNNINGWOLF • STORMBREAKERS</a>
        <div className="flex gap-6 text-[11px] tracking-widest">
          <a href="/armory" className="text-white/70 hover:text-white">⚔️ ARMORY</a>
          <a href="/chronicles" className="text-white/70 hover:text-white">📖 CHRONICLES</a>
          <a href="/word" className="text-white/70 hover:text-white">✝️ WORD</a>
          <a href="/books" className="text-white/70 hover:text-white">📚 BOOKS</a>
        </div>
      </nav>
    </header>
  )
}
