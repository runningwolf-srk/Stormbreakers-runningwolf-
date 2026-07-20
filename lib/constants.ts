// ONE CANON • FOUR EXPERIENCES — SAFE BUILD 8a54588
// @ts-nocheck

export const CANON: any = {
  // ARMORY — Songs → Relics
  RELIC_MAP: {
    wolf: { id: 'wolf', symbol: '🐺', name: 'Running Wolf', song: 'Wolf Blade' },
    stormbreaker: { id: 'stormbreaker', symbol: '⚡', name: 'Stormbreaker', song: 'Stormbreakers' },
    shield: { id: 'shield', symbol: '🛡️', name: 'Shield', song: 'Shield of Faith' },
    sword: { id: 'sword', symbol: '⚔️', name: 'Sword', song: 'Word Alive' },
    default: { id: 'default', symbol: '⚔️', name: 'Relic', song: '' }
  },
  ARMORY: [
    { id: 'wolf', name: 'Wolf Blade', symbol: '🐺' },
    { id: 'stormbreaker', name: 'Stormbreaker', symbol: '⚡' },
    { id: 'shield', name: 'Shield', symbol: '🛡️' },
    { id: 'sword', name: 'Sword', symbol: '⚔️' },
  ],

  // CHRONICLES — Relics → Testimony
  CHRONICLES: [
    { id: 'wolf', title: 'The Wolf', relic: 'wolf' },
  ],

  // THE WORD — Testimony → Scripture
  BIBLE: { FLOW: [] },
  WORD: [
    { id: 'romans-8-28', book: 'Romans', chapter: 8, verse: 28, text: 'All things work together for good' },
  ],

  // BOOKS — Scripture → Practice
  BOOKS: [
    { id: 'practice-1', title: 'Hear', subtitle: 'Armory — Songs become Relics' },
    { id: 'practice-2', title: 'Understand', subtitle: 'Chronicles — Relics become Testimony' },
    { id: 'practice-3', title: 'Root', subtitle: 'The Word — Testimony returns to Scripture' },
    { id: 'practice-4', title: 'Live', subtitle: 'Books — Scripture becomes Practice' },
  ],
}

// Safe getters — never throws
export const getRelic = (id: string) => CANON.RELIC_MAP[id] || CANON.RELIC_MAP.default
export const getAllRelics = () => CANON.ARMORY || []
