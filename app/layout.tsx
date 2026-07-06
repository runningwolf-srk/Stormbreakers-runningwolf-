import './globals.css'
import { Cinzel, Source_Code_Pro } from 'next/font/google'

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel' 
})
const mono = Source_Code_Pro({ 
  subsets: ['latin'], 
  variable: '--font-mono' 
})

export const metadata = {
  title: 'Stormbreakers | RunningWolf',
  description: 'Eight Relics. Eight Declarations. One Call.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${mono.variable}`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
