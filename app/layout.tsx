import "./globals.css"
export const metadata = { title: "RUNNINGWOLF • STORMBREAKERS", description: "ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING" }
export default function RootLayout({children}:{children:React.ReactNode}){ return (<html lang="en"><body className="bg-black text-white antialiased">{children}</body></html>) }
