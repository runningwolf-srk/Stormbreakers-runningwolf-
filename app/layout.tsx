import "./globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "RUNNINGWOLF • STORMBREAKERS",
  description: "ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <footer className="border-t border-white/10 mt-24 py-6 text-center text-[10px] font-mono tracking-widest text-white/20">
          ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING
        </footer>
      </body>
    </html>
  )
}
