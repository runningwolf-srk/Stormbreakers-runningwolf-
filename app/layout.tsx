import CanonFooter from "./components/CanonFooter"

export default function RootLayout({children}){
  return (
    <html>
      <body className="bg-black text-white">
        <header className="py-6 px-8 border-b border-zinc-900 flex justify-between">
          <span className="tracking-widest font-bold">RUNNING WOLF • STORMBREAKERS</span>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <a href="/armory">Armory</a>
            <a href="/chronicles">Chronicles</a>
            <a href="/word">Word</a>
            <a href="/books">Books</a>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <CanonFooter />
      </body>
    </html>
  )
}
