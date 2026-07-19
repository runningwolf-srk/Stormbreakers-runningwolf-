import type { Metadata } from 'next'
import './globals.css'
import { BIBLE, STYLE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Running Wolf - Stormbreakers',
  description: STYLE.DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-amber-50 min-h-screen">
        {children}
        <footer className="border-t border-amber-400/10 py-10 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-amber-400 font-black tracking-[0.3em] text-xs">{STYLE.FOOTER}</p>
            <p className="text-amber-200/20 text-xs mt-6 leading-relaxed max-w-2xl mx-auto">{BIBLE.COPYRIGHT} • <a href="/scripture-policy" className="text-amber-400/40 hover:text-amber-400 underline">Scripture Policy</a> • {BIBLE.NOTE}</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
