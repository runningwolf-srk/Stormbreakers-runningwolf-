export type Relic = {
  id: string; slug: string; title: string; image: string;
  verse: { text: string; ref: string };
  meaning: string; hasAudio: boolean;
};

export const RELICS: Relic[] = [
  { id: 'first-flame', slug: 'first-flame', title: 'First Flame', 
    image: '/relics/first-flame.jpg',
    verse: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    meaning: 'The origin.', hasAudio: false },
];
