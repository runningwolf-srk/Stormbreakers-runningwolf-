import "./globals.css"
import Link from "next/link"
export default function RootLayout({children}:{children:React.ReactNode}){
 return(
  <html lang="en"><body className="bg-black text-white min-h-screen">
   <nav className="flex gap-6 p-6 border-b border-zinc-800 text-xs tracking-widest">
    <Link href="/">STORMBREAKERS</Link><Link href="/armory">ARMORY</Link><Link href="/books">BOOKS</Link><Link href="/chronicles">CHRONICLES</Link><Link href="/word">WORD</Link>
   </nav>
   {children}
  </body></html>
 )
}
