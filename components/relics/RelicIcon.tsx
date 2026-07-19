export function RelicIcon({ symbol, className = "w-8 h-8" }: { symbol: string, className?: string }) {
  const map: any = {
    "map-scroll": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M6 3h9l3 3v15H6z"/><path d="M9 7h6M9 11h6"/></svg>),
    "crossed-swords": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M14.5 17.5L3 6V3h3l11.5 11.5-3 3z"/><path d="M9.5 17.5L21 6V3h-3L6.5 14.5l3 3z"/></svg>),
    "forged-blade": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M12 2v20"/></svg>),
    "healing-cross": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M12 8v8M8 12h8"/><circle cx="12" cy="12" r="9" opacity="0.5"/></svg>),
    "warrior-standing": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><circle cx="12" cy="5" r="3"/><path d="M12 8v8M8 16l4 4 4-4"/></svg>),
    "eternal-altar": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M4 20h16M6 16l2-8h8l2 8"/></svg>),
    "crown": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M3 16l3-10 4 4 4-4 3 10H3z"/></svg>),
    "scroll": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M6 3h9a3 3 0 013 3v15H6z"/></svg>),
    "hammer": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M14 3l7 7-4 4-7-7z"/><path d="M3 21l4-4"/></svg>),
    "lion": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><circle cx="12" cy="12" r="8"/></svg>),
    "wheat": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M12 2v20"/></svg>),
    "altar-2": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M4 20h16M8 12h8"/></svg>),
    "storm": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
    "anchor": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><circle cx="12" cy="5" r="3"/><path d="M12 8v12"/></svg>),
    "kingdom-crown": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M2 20h20M5 16l2-6 3 3 3-5 3 5 3-3 2 6H5z"/></svg>),
    "torch": (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M12 2c0 2-2 3-2 5a2 2 0 004 0c0-2-2-3-2-5z"/><path d="M10 7v6l2 9 2-9V7"/></svg>),
  }
  return map[symbol] || map["map-scroll"]
}
