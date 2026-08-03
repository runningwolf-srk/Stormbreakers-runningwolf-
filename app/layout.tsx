import "./globals.css"
export const metadata = {
  title: "STORMBREAKERS: THE OPEN CHRONICLE | ONE CANON • NINETEEN RELICS • ONE KING",
  description: "Viking is the binding. Scripture is the pages. The King is the center. Every relic tells one story. Every story points to one King.",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-black text-white antialiased">{children}</body></html>)
}
