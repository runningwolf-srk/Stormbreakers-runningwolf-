// components/relics/RelicIcon.tsx - Icons, no more filenames
export function RelicIcon({ symbol, className = "w-8 h-8" }: { symbol: string, className?: string }) {
  const icons: any = {
    "map-scroll": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M6 3h9l3 3v15H6z"/><path d="M9 7h6M9 11h6M9 15h3"/></svg>),
    "crossed-swords": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M14.5 17.5L3 6V3h3l11.5 11.5-3 3z"/><path d="M9.5 17.5L21 6V3h-3L6.5 14.5l3 3z"/></svg>),
    "forged-blade": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M12 2v20"/><path d="M8 6c0-2 2-4 4-4s4 2 4 4-2 4-4-2-4-4z"/></svg>),
    "healing-cross": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M12 8v8M8 12h8"/><circle cx="12" cy="12" r="9" opacity="0.5"/></svg>),
    "warrior-standing": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><circle cx="12" cy="5" r="3"/><path d="M12 8v8M8 16l4 4 4-4"/></svg>),
    "eternal-altar": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M4 20h16M6 16l2-8h8l2 8"/><path d="M12 8c0-2 2-3 2-5 -1 1 -3 1 -3 3"/></svg>),
  }
  return icons[symbol] || icons["map-scroll"]
}
