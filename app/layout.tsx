// app/layout.tsx
import './globals.css'
import { NavBar } from '../components/NavBar'

export const metadata = {
  title: 'Stormbreakers',
  description: 'Every song anchored in Scripture. Every testimony forged in fire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
