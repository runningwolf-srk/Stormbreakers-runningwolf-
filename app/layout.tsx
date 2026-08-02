import "./globals.css"; import Header from "@/components/Header"; import Footer from "@/components/Footer"
export const metadata={title:"RUNNINGWOLF • STORMBREAKERS", description:"ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING"}
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en"><body className="bg-black text-white antialiased min-h-screen flex flex-col"><Header/><main className="flex-1">{children}</main><Footer/></body></html> }
