// @ts-nocheck
// ONE CANON • FOUR EXPERIENCES — SAFE FALLBACK — NEVER THROWS
export const CANON: any = {
  RELIC_MAP: {
    wolf: { id: 'wolf', symbol: '🐺', name: 'Wolf Blade' },
    stormbreaker: { id: 'stormbreaker', symbol: '⚡', name: 'Stormbreaker' },
    shield: { id: 'shield', symbol: '🛡️', name: 'Shield' },
    sword: { id: 'sword', symbol: '⚔️', name: 'Sword' },
    default: { id: 'default', symbol: '⚔️', name: 'Relic' }
  },
  ARMORY: [
    { id: 'wolf', name: 'Wolf Blade', symbol: '🐺', desc: 'The Songs become Relics' },
    { id: 'stormbreaker', name: 'Stormbreaker', symbol: '⚡', desc: 'Song → Relic' },
  ],
  CHRONICLES: [{ id: 'wolf', title: 'The Wolf' }],
  BIBLE: { FLOW: [] },
  WORD: [],
  BOOKS: [],
  JOURNEY: ['Hear','Understand','Root','Live']
}
export const getRelic = (id: string) => CANON.RELIC_MAP?.[id] || CANON.RELIC_MAP.default
