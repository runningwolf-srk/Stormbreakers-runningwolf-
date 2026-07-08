// components/NavBar.tsx
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/armory', label: 'The Armory' },
    { href: '/chronicles', label: 'Chronicles' },
    { href: '/word', label: 'The Word' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-amber-600/20">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-amber-400 font-bold text-xl tracking-widest">
            STORMBREAKERS
          </Link>
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition ${
                  pathname === link.href
                    ? 'text-amber-400 font-bold'
                    : 'text-amber-200/70 hover:text-amber-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
