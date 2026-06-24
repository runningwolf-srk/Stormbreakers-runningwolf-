import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stormbreakers - RunningWolf',
  description: 'Worship is your weapon. The storm is your calling.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
