export type Verse = { text: string; ref: string };

export type Relic = {
  id: string; 
  slug: string; 
  title: string; 
  image: string;
  verse: Verse; 
  meaning: string; 
  hasAudio: boolean;
  ambientUrl?: string;  // ← ADD THIS
  audioUrl?: string;    // ← ADD THIS
};

export const RELICS: Relic[] = [
  { 
    id: 'first-flame', 
    slug: 'first-flame', 
    title: 'First Flame', 
    image: '/relics/first-flame.jpg',
    verse: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    meaning: 'The origin.', 
    hasAudio: true,
    audioUrl: '/audio/main/first-flame.mp3',     // ← ADD IF YOU HAVE AUDIO
    ambientUrl: '/audio/ambient/first-flame.mp3' // ← ADD IF YOU HAVE AMBIENT
  },
];
