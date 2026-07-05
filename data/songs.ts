export type Song = {
  id: string; slug: string; relicId: string; title: string;
  youtubeId?: string; duration: number;
  scripture: { text: string; ref: string };
  declaration: string; meaning: string; hasAudio: boolean;
};

export const SONGS: Song[] = [
  { id: 'the-first-flame', slug: 'the-first-flame', relicId: 'first-flame', 
    title: 'The First Flame', youtubeId: 'dQw4w9WgXcQ', duration: 240,
    scripture: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    declaration: 'I was broken so you could be whole.', meaning: 'Healing.', hasAudio: true },
];
