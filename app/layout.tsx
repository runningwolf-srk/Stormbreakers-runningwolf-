import "./globals.css"
export const metadata = {
  title: "RUNNINGWOLF • STORMBREAKERS | ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING",
  description: "A cinematic Christian saga — Every relic tells one story. Every story points to one King.",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
