import "./globals.css"
import Link from "next/link"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="font-black tracking-[0.25em] text-sm">
              RUNNING WOLF • STORMBREAKERS
            </Link>
            <nav className="flex gap-8">
              <Link href="/armory" className="text-xs tracking-[0.2em] text-zinc-400 hover:text-white transition">ARMORY</Link>
              <Link href="/chronicles" className="text-xs tracking-[0.2em] text-zinc-400 hover:text-white transition">CHRONICLES</Link>
              <Link href="/word" className="text-xs tracking-[0.2em] text-zinc-400 hover:text-white transition">WORD</Link>
              <Link href="/books" className="text-xs tracking-[0.2em] text-zinc-400 hover:text-white transition">BOOKS</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto">{children}</main>
        <footer className="mt-24 border-t border-zinc-900 py-12 text-center">
          <p className="text-xs tracking-[0.35em] text-zinc-500">ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
          <p className="text-xs tracking-[0.2em] text-zinc-600 mt-3">Hear → Understand → Root → Live</p>
        </footer>
      </body>
    </html>
  )
}
