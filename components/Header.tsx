export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-black tracking-tighter">RUNNINGWOLF</a>
        <div className="flex gap-6 text-[11px] tracking-widest text-white/60">
          <a href="/armory" className="hover:text-white">ARMORY</a>
          <a href="/books" className="hover:text-white">BOOKS</a>
          <a href="/chronicles" className="hover:text-white">CHRONICLES</a>
          <a href="/word" className="hover:text-white">WORD</a>
        </div>
      </nav>
    </header>
  )
}
