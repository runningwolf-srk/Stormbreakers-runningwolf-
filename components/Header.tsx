export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-black tracking-tighter text-sm">RUNNINGWOLF • STORMBREAKERS</a>
        <div className="flex gap-5 md:gap-8 text-[11px] tracking-widest">
          <a href="/armory" className="hover:text-white text-white/60">⚔️ ARMORY</a>
          <a href="/chronicles" className="hover:text-white text-white/60">📖 CHRONICLES</a>
          <a href="/word" className="hover:text-white text-white/60">✝️ WORD</a>
          <a href="/books" className="hover:text-white text-white/60">📚 BOOKS</a>
        </div>
      </nav>
    </header>
  )
}
