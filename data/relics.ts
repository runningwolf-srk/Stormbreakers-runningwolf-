export type Verse = { text: string; ref: string };

export type Relic = {
  id: string; 
  slug: string; 
  title: string; 
  image: string;
  verse: Verse; 
  meaning: string; 
  hasAudio: boolean;
  // B + 2 fields — add now so we don't refactor later
  audioUrl?: string;    
  ambientUrl?: string;  
  chapter?: number;
};

export const RELICS: Relic[] = [
  { 
    id: 'first-flame', 
    slug: 'first-flame', 
    title: 'First Flame', 
    image: '/relics/first-flame.jpg',
    verse: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    meaning: 'The origin of the call.', 
    hasAudio: true,
    audioUrl: '/audio/main/first-flame.mp3',
    ambientUrl: '/audio/ambient/first-flame.mp3',
    chapter: 1
  },
  { 
    id: 'second-relic', 
    slug: 'second-relic', 
    title: 'Second Relic Name', 
    image: '/relics/second-relic.jpg',
    verse: { text: 'Your verse here', ref: 'Book 1:1' },
    meaning: 'Your meaning here.', 
    hasAudio: true,
    audioUrl: '/audio/main/second-relic.mp3',
    ambientUrl: '/audio/ambient/second-relic.mp3',
    chapter: 1
  },
  // COPY/PASTE THIS BLOCK 14 MORE TIMES
  // CHANGE id, slug, title, image, verse, audioUrl, ambientUrl
  // KEEP THE STRUCTURE IDENTICAL
];
