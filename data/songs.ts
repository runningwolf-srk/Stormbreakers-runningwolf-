export interface Song {
  id: string;
  slug: string;
  relicId: string;
  relicImage?: string; // ← Override image per song
  title: string;
  youtubeId: string;
  duration: number; // in seconds
  scripture: { text: string; ref: string };
  declaration: string;
  meaning: string;
  hasAudio: boolean;
}

export const SONGS: Song[] = [
  { 
    id: 'the-first-flame', 
    slug: 'the-first-flame', 
    relicId: 'first-flame', 
    title: 'The First Flame', 
    youtubeId: '4IXJjvo7Ojo',
    duration: 58,
    scripture: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    declaration: 'I was broken so you could be whole.', 
    meaning: 'Healing flows from His wounds.', 
    hasAudio: false,
  },
  { 
    id: 'eternal-fire', 
    slug: 'eternal-fire', 
    relicId: 'pillar-fire', 
    title: 'Eternal Fire', 
    youtubeId: 'maI6giUcYYk',
    duration: 240,
    scripture: { text: 'By night in a pillar of fire', ref: 'Exodus 13:21' },
    declaration: 'I lead you through the darkness.', 
    meaning: 'His presence never leaves.', 
    hasAudio: false,
  },
  { 
    id: 'runningwolfs-blade', 
    slug: 'runningwolfs-blade', 
    relicId: 'amulet-wolf', 
    relicImage: '/runningwolfs-blade.png', // ← Shows Blade in Stone
    title: 'Runningwolfs Blade', 
    youtubeId: 'CZ6tylWuerQ',
    duration: 180,
    scripture: { text: 'Iron sharpens iron', ref: 'Proverbs 27:17' },
    declaration: 'The blade hidden in stone.', 
    meaning: 'Strength sealed until the time comes.', 
    hasAudio: false,
  },
  { 
    id: 'wolf-fang', 
    slug: 'wolf-fang', 
    relicId: 'amulet-wolf', 
    relicImage: '/wolf-fang.png', // ← Shows Fang Pendant
    title: 'Wolf Fang', 
    youtubeId: 'dHz0D3QblpQ',
    duration: 185,
    scripture: { text: 'Be sober, be vigilant', ref: '1 Peter 5:8' },
    declaration: 'The hunter has teeth.', 
    meaning: 'Fangs for the spiritual war.', 
    hasAudio: false,
  },
  { 
    id: 'storm-crown', 
    slug: 'storm-crown', 
    relicId: 'crown-storm', 
    title: 'Storm Crown', 
    youtubeId: 'MWHp_CRrKC8',
    duration: 200,
    scripture: { text: 'The Lord reigns, let the earth be glad', ref: 'Psalm 97:1' },
    declaration: 'The King rides the storm.', 
    meaning: 'Authority above the chaos.', 
    hasAudio: false,
  },
  { 
    id: 'chronicle-stone', 
    slug: 'chronicle-stone', 
    relicId: 'stone-tablet', 
    title: 'Chronicle Stone', 
    youtubeId: 'YQZS2X1GZHE',
    duration: 210,
    scripture: { text: 'Write the vision; make it plain', ref: 'Habakkuk 2:2' },
    declaration: 'The Word stands forever.', 
    meaning: 'Testimony carved in stone.', 
    hasAudio: false,
  },
  { 
    id: 'spirit-mantle', 
    slug: 'spirit-mantle', 
    relicId: 'mantle-fire', 
    title: 'Spirit Mantle', 
    youtubeId: 'LSmQtFkHGjE',
    duration: 195,
    scripture: { text: 'Elijah took his mantle and struck the water', ref: '2 Kings 2:8' },
    declaration: 'The double portion falls.', 
    meaning: 'Power transferred. Legacy received.', 
    hasAudio: false,
  },
  { 
    id: 'thunder-drums', 
    slug: 'thunder-drums', 
    relicId: 'anvil-storm', 
    title: 'Thunder Drums', 
    youtubeId: 'BCKoGjYJZdg',
    duration: 220,
    scripture: { text: 'He is like a refiner\'s fire', ref: 'Malachi 3:2' },
    declaration: 'Strike until I shine.', 
    meaning: 'Forged in fire. Shaped by the hammer.', 
    hasAudio: false,
  },
  { 
    id: 'cross-fire-song', 
    slug: 'cross-fire-song', 
    relicId: 'flaming-cross', 
    title: 'Cross of Fire', 
    youtubeId: '', // ← DROP THE LINK HERE
    duration: 0,
    scripture: { text: 'TBD', ref: 'TBD' },
    declaration: 'TBD', 
    meaning: 'TBD', 
    hasAudio: false,
  },
];
