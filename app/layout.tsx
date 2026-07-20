// @ts-nocheck
// Add to Header / Layout - Top banner everywhere
const NAV = [
  { href: '/armory', label: '⚔️ Armory', sub: 'Hear' },
  { href: '/chronicles', label: '📖 Chronicles', sub: 'Understand' },
  { href: '/word', label: '✝️ Word', sub: 'Root' },
  { href: '/book', label: '📚 Books', sub: 'Live' },
]

export function TopNav() {
  return (
    <nav className="flex gap-2 text-xs uppercase tracking-widest justify-center py-4 border-b border-zinc-900">
      {NAV.map(n=>(
        <a key={n.href} href={n.href} className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white/20">
          {n.label} <span className="opacity-50">— {n.sub}</span>
        </a>
      ))}
    </nav>
  )
}
