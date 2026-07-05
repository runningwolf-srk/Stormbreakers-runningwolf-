'use client';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'prophecy', label: 'The Prophecy' },
  { id: 'relics', label: 'Relics' },
  { id: 'sound', label: 'Sound' },
  { id: 'chapters', label: 'Chapters' },
];

export function ArmoryNavigation() {
  const [active, setActive] = useState('prophecy');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = document.querySelectorAll<HTMLElement>('section[id]'); // ← FIXED HERE
      
      for (const section of sections) {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-norse text-xl text-amber-400">THE RUNNING WOLF</span>
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                active === item.id? 'text-amber-400' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
