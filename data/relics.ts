export interface Relic {
  id: string;
  slug: string;
  title: string;
  image: string;
  imageAlt?: string; // ← Secondary image for multi-form relics
  verse: { text: string; ref: string };
  declaration: string;
  meaning: string;
  hasAudio: boolean;
  chapter: number;
}

export const RELICS: Relic[] = [
  { 
    id: 'first-flame', 
    slug: 'first-flame', 
    title: 'The First Flame', 
    image: '/first-flame.jpg',
    verse: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    declaration: 'I was broken so you could be whole.', 
    meaning: 'Healing flows from His wounds.', 
    hasAudio: false,
    chapter: 1
  },
  { 
    id: 'pillar-fire', 
    slug: 'pillar-fire', 
    title: 'Pillar of Fire', 
    image: '/pillar-fire.png',
    verse: { text: 'By night in a pillar of fire', ref: 'Exodus 13:21' },
    declaration: 'I lead you through the darkness.', 
    meaning: 'His presence never leaves.', 
    hasAudio: false,
    chapter: 2
  },
  { 
    id: 'amulet-wolf', 
    slug: 'amulet-wolf', 
    title: 'Wolf Amulet', 
    image: '/runningwolfs-blade.png', // ← Primary: Blade in Stone
    imageAlt: '/wolf-fang.png', // ← Secondary: The Fang
    verse: { text: 'Iron sharpens iron', ref: 'Proverbs 27:17' },
    declaration: 'The blade hidden in stone. The fang for the hunt.', 
    meaning: 'Runningwolf. Two forms: sealed sword + hunter\'s tooth.', 
    hasAudio: false,
    chapter: 4
  },
  { 
    id: 'crown-storm', 
    slug: 'crown-storm', 
    title: 'Crown of the Storm', 
    image: '/crown-storm.png',
    verse: { text: 'The Lord reigns, let the earth be glad', ref: 'Psalm 97:1' },
    declaration: 'The King rides the storm.', 
    meaning: 'Authority above the chaos.', 
    hasAudio: false,
    chapter: 3
  },
  { 
    id: 'stone-tablet', 
    slug: 'stone-tablet', 
    title: 'The Tablet', 
    image: '/stone-tablet.png',
    verse: { text: 'Write the vision; make it plain', ref: 'Habakkuk 2:2' },
    declaration: 'The Word stands forever.', 
    meaning: 'Testimony carved in stone.', 
    hasAudio: false,
    chapter: 5
  },
  { 
    id: 'mantle-fire', 
    slug: 'mantle-fire', 
    title: 'The Mantle', 
    image: '/mantle-fire.png',
    verse: { text: 'Elijah took his mantle and struck the water', ref: '2 Kings 2:8' },
    declaration: 'The double portion falls.', 
    meaning: 'Power transferred. Legacy received.', 
    hasAudio: false,
    chapter: 6
  },
  { 
    id: 'anvil-storm', 
    slug: 'anvil-storm', 
    title: 'The Anvil', 
    image: '/anvil-storm.png',
    verse: { text: 'He is like a refiner\'s fire', ref: 'Malachi 3:2' },
    declaration: 'Strike until I shine.', 
    meaning: 'Forged in fire. Shaped by the hammer.', 
    hasAudio: false,
    chapter: 7
  },
  { 
    id: 'flaming-cross', 
    slug: 'flaming-cross', 
    title: 'Cross of Fire', 
    image: '/flaming-cross.png',
    verse: { text: 'TBD', ref: 'TBD' },
    declaration: 'TBD', 
    meaning: 'TBD', 
    hasAudio: false,
    chapter: 8
  },
];
