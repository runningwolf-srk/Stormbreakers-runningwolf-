// data/songs.ts
export type Song = {
  id: string;
  slug: string;
  relicId: string;
  title: string;
  youtubeId?: string;
  audioUrl?: string;
  ambientUrl?: string;
  duration: number;
  scripture: { text: string; ref: string };
  declaration: string;
  meaning: string;
  hasAudio: boolean;
};

export const SONGS: Song[] = [
  {
    id: 'the-first-flame',
    slug: 'the-first-flame',
    relicId: 'first-flame',
    title: 'The First Flame',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE WITH YOUR YT ID
    duration: 240,
    scripture: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    declaration: 'I was broken so you could be whole.',
    meaning: 'The moment healing entered the world through wounds.',
    hasAudio: true,
  },
  {
    id: 'cord-of-three',
    slug: 'cord-of-three',
    relicId: 'wolfs-fang',
    title: 'Cord of Three',
    youtubeId: '',
    duration: 210,
    scripture: { text: 'A cord of three strands is not quickly broken', ref: 'Ecclesiastes 4:12' },
    declaration: 'We hunt together. We bleed together. We rise together.',
    meaning: 'Brotherhood as warfare. Covenant as weapon.',
    hasAudio: false,
  },
  // ADD 6 MORE SONGS HERE — MATCH THE 8+8 MAPPING
];
