// components/armory/ArmoryNavigation.tsx
'use client';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Prophecy', href: '#prophecy' },
  { name: 'Relics', href: '#relics' },
  { name: 'Sound', href: '#sound' },
  { name: 'Saga', href: '#saga' },
];

export function ArmoryNavigation() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPos && 
            section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-norse tracking-widest">STORMBREAKERS</h1>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  active === item.href.slice(1) ? 'text-amber-400' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
