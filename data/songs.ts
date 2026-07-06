export interface Song {
  id: string;
  slug: string;
  relicId?: string; // ← Optional now for Phase 2
  relicImage?: string;
  coverImage?: string; // ← NEW: For album art
  coverImageOld?: string; // ← NEW: For legacy art
  title: string;
  youtubeId: string;
  duration: number;
  scripture: { text: string; ref: string };
  declaration: string;
  meaning: string;
  hasAudio: boolean;
  album?: string; // ← THIS WAS MISSING — CAUSING YOUR ERROR
}

export const SONGS: Song[] = [
  // === PHASE 1: THE ARMORY — 9 SONGS ===
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
    album: 'The Armory'
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
    album: 'The Armory'
  },
  { 
    id: 'runningwolfs-blade', 
    slug: 'runningwolfs-blade', 
    relicId: 'amulet-wolf', 
    relicImage: '/runningwolfs-blade.png',
    title: 'Runningwolfs Blade', 
    youtubeId: 'CZ6tylWuerQ',
    duration: 180,
    scripture: { text: 'Iron sharpens iron', ref: 'Proverbs 27:17' },
    declaration: 'The blade hidden in stone.', 
    meaning: 'Strength sealed until the time comes.', 
    hasAudio: false,
    album: 'The Armory'
  },
  { 
    id: 'wolf-fang', 
    slug: 'wolf-fang', 
    relicId: 'amulet-wolf', 
    relicImage: '/wolf-fang.png',
    title: 'Wolf Fang', 
    youtubeId: 'dHz0D3QblpQ',
    duration: 185,
    scripture: { text: 'Be sober, be vigilant', ref: '1 Peter 5:8' },
    declaration: 'The hunter has teeth.', 
    meaning: 'Fangs for the spiritual war.', 
    hasAudio: false,
    album: 'The Armory'
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
    album: 'The Armory'
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
    album: 'The Armory'
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
    album: 'The Armory'
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
    album: 'The Armory'
  },
  { 
    id: 'cross-fire-song', 
    slug: 'cross-fire-song', 
    relicId: 'flaming-cross', 
    title: 'Cross of Fire', 
    youtubeId: '', // ← STILL NEED LINK
    duration: 0,
    scripture: { text: 'Take up your cross and follow me', ref: 'Matthew 16:24' },
    declaration: 'The cross I bear burns but does not consume.', 
    meaning: 'Sacrifice. Burden. Victory through surrender.', 
    hasAudio: false,
    album: 'The Armory'
  },

  // === PHASE 2: THE STORMBREAKER — 8 SONGS ===
  { 
    id: 'horn-of-war', 
    slug: 'horn-of-war', 
    coverImage: '/horn-of-war-old.webp',
    title: 'Horn of War', 
    youtubeId: '',
    duration: 0,
    scripture: { text: 'Blow the trumpet in Zion', ref: 'Joel 2:1' },
    declaration: 'A battle cry. A legend rises.', 
    meaning: 'The war begins with a sound.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
  { 
    id: 'spiritual-journey', 
    slug: 'spiritual-journey', 
    coverImage: '/spiritual-journey-old.webp',
    title: 'Spiritual Journey', 
    youtubeId: '',
    duration: 0,
    scripture: { text: 'You will seek me and find me', ref: 'Jeremiah 29:13' },
    declaration: 'A journey to His presence.', 
    meaning: 'The path through fire and water.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
  { 
    id: 'iron-collide', 
    slug: 'iron-collide', 
    coverImage: '/iron-collide-old.webp',
    title: 'Iron Collide', 
    youtubeId: '',
    duration: 0,
    scripture: { text: 'The weapons of our warfare', ref: '2 Corinthians 10:4' },
    declaration: 'An epic hard rock anthem.', 
    meaning: 'Steel on steel. Faith on fire.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
  { 
    id: 'heaven-calling', 
    slug: 'heaven-calling', 
    coverImage: '/heaven-calling-old.webp',
    title: 'Heaven Calling', 
    youtubeId: '',
    duration: 0,
    scripture: { text: 'Come up here', ref: 'Revelation 4:1' },
    declaration: 'A worship anthem.', 
    meaning: 'The throne calls. We answer.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
  { 
    id: 'blood-of-cross', 
    slug: 'blood-of-cross', 
    coverImage: '/blood-of-cross-old.webp',
    title: 'Blood of Cross', 
    youtubeId: '',
    duration: 0,
    scripture: { text: 'By His wounds we are healed', ref: 'Isaiah 53:5' },
    declaration: 'By His wounds we are healed.', 
    meaning: 'The price. The power. The blood.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
  { 
    id: 'lord-of-lords', 
    slug: 'lord-of-lords', 
    coverImage: '/lord-of-lords-old.webp',
    title: 'Lord of Lords', 
    youtubeId: '',
    duration: 0,
    scripture: { text: 'King of kings and Lord of lords', ref: 'Revelation 19:16' },
    declaration: 'A spiritual anthem.', 
    meaning: 'He reigns on the throne. Forever.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
  { 
    id: 'scars-that-preach', 
    slug: 'scars-that-preach', 
    coverImage: '/scars-that-preach-old.png',
    title: 'Scars That Preach', 
    youtubeId: '',
    duration: 0,
    scripture: { text: 'I bear on my body the marks of Jesus', ref: 'Galatians 6:17' },
    declaration: 'Born through the fire.', 
    meaning: 'Christian Rock. Testimony in scars.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
  { 
    id: 'jesus-is-an-healer', 
    slug: 'jesus-is-an-healer', 
    coverImage: '/jesus-is-an-healer.png',
    title: 'Jesus Is An Healer', 
    youtubeId: 'stsryByK5h8',
    duration: 240,
    scripture: { text: 'By His wounds we are healed', ref: 'Isaiah 53:5' },
    declaration: 'Heals the broken. Raises the fallen. Conquers the darkness.', 
    meaning: 'Viking-era worship. Christ among warriors. Faith stronger than steel.', 
    hasAudio: false,
    album: 'The Stormbreaker'
  },
];
