// data/relics.ts
export type Verse = {
  text: string;
  ref: string;
};

export type Relic = {
  id: string;
  slug: string;
  title: string;
  image: string;
  verse: Verse;
  meaning: string;
  hasAudio: boolean;
};

export const RELICS: Relic[] = [
  {
    id: 'first-flame',
    slug: 'first-flame',
    title: 'First Flame',
    image: '/relics/first-flame.jpg',
    verse: { text: 'But he was pierced for our transgressions', ref: 'Isaiah 53:5' },
    meaning: 'The origin. Where healing began. The spark that refused to die.',
    hasAudio: false,
  },
  {
    id: 'wolfs-fang',
    slug: 'wolfs-fang',
    title: "Wolf's Fang",
    image: '/relics/wolfs-fang.jpg',
    verse: { text: 'A cord of three strands is not quickly broken', ref: 'Ecclesiastes 4:12' },
    meaning: 'Brotherhood. The pack hunts as one. Loyalty carved in bone.',
    hasAudio: false,
  },
  {
    id: 'thunder-drum',
    slug: 'thunder-drum',
    title: 'Thunder Drum',
    image: '/relics/thunder-drum.jpg',
    verse: { text: 'The voice of the Lord is over the waters', ref: 'Psalm 29:3' },
    meaning: "God's voice. The battle cry that shakes mountains.",
    hasAudio: false,
  },
  {
    id: 'spirit-mantle',
    slug: 'spirit-mantle',
    title: 'Spirit Mantle',
    image: '/relics/spirit-mantle.jpg',
    verse: { text: 'The Spirit of the Lord will come powerfully upon you', ref: '1 Samuel 10:6' },
    meaning: "The prophet's cloak. The call answered. Authority worn.",
    hasAudio: false,
  },
  {
    id: 'storm-crown',
    slug: 'storm-crown',
    title: 'Storm Crown',
    image: '/relics/storm-crown.png', // REPLACE WITH REAL HASH FILENAME
    verse: { text: 'He stilled the storm to a whisper', ref: 'Psalm 107:29' },
    meaning: 'Authority in chaos. The king who reigns over wind and wave.',
    hasAudio: false,
  },
  {
    id: 'running-wolfs-blade',
    slug: 'running-wolfs-blade',
    title: "Running Wolf's Blade",
    image: '/relics/running-wolfs-blade.jpg',
    verse: { text: 'No weapon formed against you shall prosper', ref: 'Isaiah 54:17' },
    meaning: 'Vengeance. The blade that cuts for the forsaken.',
    hasAudio: false,
  },
  {
    id: 'chronicle-stone',
    slug: 'chronicle-stone',
    title: 'Chronicle Stone',
    image: '/relics/chronicle-stone.jpg',
    verse: { text: 'I will write on them the name of my God', ref: 'Revelation 3:12' },
    meaning: 'Identity carved in stone. Permanent. Claimed.',
    hasAudio: false,
  },
  {
    id: 'eternal-fire',
    slug: 'eternal-fire',
    title: 'Eternal Fire',
    image: '/relics/eternal-fire.jpg',
    verse: { text: 'For our God is a consuming fire', ref: 'Hebrews 12:29' },
    meaning: 'Pentecost. The fire that never leaves. Burns in the bones.',
    hasAudio: false,
  },
];
