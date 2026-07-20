// @ts-nocheck
import './globals.css'
export const metadata = { title: 'RUNNING WOLF STORMBREAKERS — 16 Songs • 16 Battles • One King', description: 'Hear → Understand → Root → Live = Worship → Story → Foundation → Application' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <header className="border-b border-zinc-900 px-4 py-4 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur z-50">
          <a href="/" className="font-black tracking-tighter text-sm">RUNNING WOLF STORMBREAKERS</a>
          <nav className="flex gap-2 text-[10px] uppercase tracking-widest">
            <a href="/armory" className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800">⚔️ Armory<br/><span className="opacity-50">Hear the Story</span></a>
            <a href="/chronicles" className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800">📖 Chronicles<br/><span className="opacity-50">Understand</span></a>
            <a href="/word" className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800">✝️ The Word<br/><span className="opacity-50">Root in Scripture</span></a>
            <a href="/book" className="px-3 py-2 rounded-full bg-white text-black font-bold">📚 Books<br/><span className="opacity-60">Live</span></a>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-zinc-900 px-4 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">RUNNING WOLF STORMBREAKERS</p>
          <p className="text-xs text-zinc-600 mt-2">⚔️ The Songs are Relics. 📖 The Chronicles are Testimony. ✝️ The Word is Authority. 📚 The Books are Transformation.</p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 mt-3">ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
          <p className="text-[10px] text-zinc-800 mt-2">Hear → Understand → Root → Live = Worship → Story → Foundation → Application</p>
        </footer>
      </body>
    </html>
  )
}
