export type Song = {
  id: string; 
  slug: string; 
  relicId: string; 
  title: string;
  youtubeId?: string; 
  duration: number;
  scripture: { text: string; ref: string };
  declaration: string; 
  meaning: string; 
  hasAudio: boolean;
  // B + 2 fields
  audioUrl?: string;
};

export const SONGS: Song[] = [
  { 
    id: 'the-first-flame', 
    slug: 'the-first-flame', 
    relicId: 'first-flame', 
    title: 'The First Flame', 
    youtubeId: 'dQw4w9WgXcQ', 
    duration: 240,
    scripture: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    declaration: 'I was broken so you could be whole.', 
    meaning: 'Healing flows from His wounds.', 
    hasAudio: true,
    audioUrl: '/audio/main/first-flame.mp3'
  },
  // COPY/PASTE THIS BLOCK 15 MORE TIMES
  // MAKE SURE relicId MATCHES THE relic.id FROM relics.ts
];
