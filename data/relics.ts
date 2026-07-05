export type Verse = { text: string; ref: string };
export type Relic = {
  id: string; slug: string; title: string; image: string;
  verse: Verse; meaning: string; hasAudio: boolean;
};

export const RELICS: Relic[] = [
  { id: 'first-flame', slug: 'first-flame', title: 'First Flame', image: '/relics/first-flame.jpg',
    verse: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    meaning: 'The origin. Where healing began.', hasAudio: false },
  { id: 'storm-crown', slug: 'storm-crown', title: 'Storm Crown', image: '/relics/storm-crown.png',
    verse: { text: 'He stilled the storm to a whisper', ref: 'Psalm 107:29' },
    meaning: 'Authority in chaos.', hasAudio: false },
];
