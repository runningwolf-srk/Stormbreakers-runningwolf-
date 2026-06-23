import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "RunningWolf - Jessy Marquez",
  description: "Epic hard rock / worship anthems"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">RUNNINGWOLF</Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/music">Music</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          © 2026 Jessy Marquez / RunningWolf · All rights reserved
        </footer>
      </body>
    </html>
  )
}
