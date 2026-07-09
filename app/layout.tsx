import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stormbreakers',
  description: 'Cinematic Christian worship. Every song anchored in Scripture.',
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
