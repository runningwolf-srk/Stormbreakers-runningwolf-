// @ts-nocheck
import './globals.css'

export const metadata = {
  title: 'RUNNING WOLF STORMBREAKERS',
  description: '16 Songs • 16 Battles • One Testimony • One King',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <header className="border-b border-zinc-900 px-4 py-4 flex justify-between items-center">
          <a href="/" className="font-black tracking-tighter">RUNNING WOLF STORMBREAKERS</a>
          <nav className="flex gap-3 text-xs uppercase tracking-widest">
            <a href="/armory">⚔️ Hear</a>
            <a href="/chronicles">📖 Understand</a>
            <a href="/word">✝️ Root</a>
            <a href="/book">📚 Live</a>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-zinc-900 px-4 py-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-600">16 SONGS • 16 BATTLES • ONE TESTIMONY • ONE KING</p>
          <p className="text-xs text-zinc-700 mt-2">© Running Wolf Stormbreakers — ONE KING</p>
          <p className="text-xs text-zinc-600 mt-2">Hear → Understand → Root → Live = Worship → Story → Foundation → Application</p>
        </footer>
      </body>
    </html>
  )
}
