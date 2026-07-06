export type Verse = { text: string; ref: string };

export type Relic = {
  id: string; 
  slug: string; 
  title: string; 
  image: string;
  verse: Verse; 
  meaning: string; 
  hasAudio: boolean;
  audioUrl?: string;    
  ambientUrl?: string;  
  chapter?: number;
};

export const RELICS: Relic[] = [
  { 
    id: 'first-flame', 
    slug: 'first-flame', 
    title: 'First Flame', 
    image: '/first-flame.jpg',
    verse: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    meaning: 'The origin of the call.', 
    hasAudio: false,
    chapter: 1
  },
  { 
    id: 'crown-storm', 
    slug: 'crown-storm', 
    title: 'Crown of the Storm', 
    image: '/crown-storm.png',
    verse: { text: 'The Lord reigns, let the earth be glad', ref: 'Psalm 97:1' },
    meaning: 'Authority in the tempest.', 
    hasAudio: false,
    chapter: 1
  },
  { 
    id: 'anvil-storm', 
    slug: 'anvil-storm', 
    title: 'The Anvil', 
    image: '/anvil-storm.png',
    verse: { text: 'He is like a refiner\'s fire', ref: 'Malachi 3:2' },
    meaning: 'Where weapons are forged.', 
    hasAudio: false,
    chapter: 2
  },
  { 
    id: 'flaming-cross', 
    slug: 'flaming-cross', 
    title: 'Cross of Fire', 
    image: '/flaming-cross.png',
    verse: { text: 'I have been crucified with Christ', ref: 'Galatians 2:20' },
    meaning: 'Death and resurrection.', 
    hasAudio: false,
    chapter: 2
  },
  { 
    id: 'stone-tablet', 
    slug: 'stone-tablet', 
    title: 'The Tablet', 
    image: '/stone-tablet.png',
    verse: { text: 'Write the vision; make it plain', ref: 'Habakkuk 2:2' },
    meaning: 'The Word made stone.', 
    hasAudio: false,
    chapter: 3
  },
  { 
    id: 'pillar-fire', 
    slug: 'pillar-fire', 
    title: 'Pillar of Fire', 
    image: '/pillar-fire.png',
    verse: { text: 'By night in a pillar of fire', ref: 'Exodus 13:21' },
    meaning: 'Guidance in darkness.', 
    hasAudio: false,
    chapter: 3
  },
  { 
    id: 'amulet-wolf', 
    slug: 'amulet-wolf', 
    title: 'Wolf Amulet', 
    image: '/amulet-wolf.png',
    verse: { text: 'The Lord is my shepherd', ref: 'Psalm 23:1' },
    meaning: 'Identity and protection.', 
    hasAudio: false,
    chapter: 4
  },
  { 
    id: 'mantle-fire', 
    slug: 'mantle-fire', 
    title: 'The Mantle', 
    image: '/mantle-fire.png',
    verse: { text: 'Elijah took his mantle', ref: '2 Kings 2:8' },
    meaning: 'The transfer of power.', 
    hasAudio: false,
    chapter: 4
  },
];
