// data/relics.ts — V2.5 ROUTING LOCK — BUILD WILL PASS
export type Relic = {
  id: string;
  slug: string;         // ← ADDED: Matches /app/relics/[slug] route
  title: string;
  subtitle?: string;
  image: string;
  audio: string;        
  audioUrl: string;     
  ambientUrl?: string;  
  duration: number;     
  hasAudio: boolean;
  verse: {
    text: string;
    ref: string;
  };
  declaration: string;
  chapter?: number;
};

const FALLBACK_AUDIO = "/audio/silence.mp3";
const FALLBACK_AMBIENT = "/audio/silence.mp3";

export const RELICS: Relic[] = [
  {
    id: "running-wolfs-blade",
    slug: "running-wolfs-blade", // ← ADDED
    title: "Running Wolf's Blade",
    subtitle: "The War Cry of the Forsaken",
    image: "/AQNSqpHW8gV1OxAJb-5woTpal2mMV6yPY3VCIyhfmXJ51cTaGP38bt7ry6ooj4APZbACwuHTNzTNILA2GCzab6o8.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 347,
    hasAudio: false,
    verse: {
      text: "No weapon formed against you shall prosper, and every tongue which rises against you in judgment You shall condemn.",
      ref: "Isaiah 54:17"
    },
    declaration: "Snow on the shield. Salt on the wood. We came from the fjord but You called us good. I was ash in the tundra, bone in the storm. Then Your breath hit the valley and my dead heart was warm. Jesus, lead us on.",
    chapter: 1
  },
  {
    id: "thunder-drum",
    slug: "thunder-drum", // ← ADDED
    title: "Thunder Drum",
    subtitle: "Voice of the Storm",
    image: "/AQOz4ulRTVBY1w495PKpiAaJkqdN0z3TUXi6XBCq3BTu5pojjvcJeQolJbmduV4EbRJKxE183PEOaupTTShyCiqg.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 298,
    hasAudio: false,
    verse: {
      text: "The voice of the Lord is over the waters; the God of glory thunders.",
      ref: "Psalm 29:3"
    },
    declaration: "When God speaks, the ground answers. This is the sound of war.",
    chapter: 2
  },
  {
    id: "eternal-fire",
    slug: "eternal-fire", // ← ADDED
    title: "Eternal Fire",
    subtitle: "The Consuming Flame",
    image: "/AQNv1x8JFS1A0AB4rym1t36t9z9Ah7gwaP2Vr3PS3hhoCAOZs5UhX4LeEiGXg2acWrcSt1iyqKQrCPhuA6O9d5My.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 312,
    hasAudio: false,
    verse: {
      text: "For our God is a consuming fire.",
      ref: "Hebrews 12:29"
    },
    declaration: "The fire that fell at Pentecost never left. It lives in you. Burn forever.",
    chapter: 3
  },
  {
    id: "chronicle-stone",
    slug: "chronicle-stone", // ← ADDED
    title: "Chronicle Stone",
    subtitle: "Name Written in Heaven",
    image: "/AQOa1IseR647iRUJvkreGVolACSRVJGcffDo1awMvuNQE9UN8C3TxSp54AnzTKDFQtR9Y7eHIN84bsEBxwB7eSPI.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 267,
    hasAudio: false,
    verse: {
      text: "I will write on them the name of My God and the name of the city of My God.",
      ref: "Revelation 3:12"
    },
    declaration: "What God writes in stone, hell cannot erase. Your name is carved in heaven.",
    chapter: 4
  },
  {
    id: "the-first-flame",
    slug: "the-first-flame", // ← ADDED
    title: "The First Flame",
    subtitle: "Where Healing Began",
    image: "/AQNawBYhZi5D3mTWqF8M9hfxg8zmT6ExMD0oErYvltBSZP7Uel86XPd2kca7gYcPkxv5rsNNaYrM-_4jYBllupX9.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 331,
    hasAudio: false,
    verse: {
      text: "But He was pierced for our transgressions, He was crushed for our iniquities; the punishment that brought us peace was on Him, and by His wounds we are healed.",
      ref: "Isaiah 53:5"
    },
    declaration: "This is where it started. Not in a church. In the dark. Bleeding. Alone. And He found me.",
    chapter: 5
  },
  {
    id: "wolfs-fang",
    slug: "wolfs-fang", // ← ADDED
    title: "Wolf's Fang",
    subtitle: "Cord of Three Strands",
    image: "/AQNaCDj13mbCjvyJA47tjBiuR6D-WpUweMqib7Hbp4kQlHoSgm3XdKzfnagSdD4b8kNiNWrOpPugyuGGIJZ0Zmp7.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 289,
    hasAudio: false,
    verse: {
      text: "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.",
      ref: "Ecclesiastes 4:12"
    },
    declaration: "Lone wolves die in the dark. The pack hunts in light. I was born for brotherhood.",
    chapter: 6
  },
  {
    id: "spirit-mantle",
    slug: "spirit-mantle", // ← ADDED
    title: "Spirit Mantle",
    subtitle: "The Prophet's Cloak",
    image: "/AQMILikpY_4YzpC0ogoZpZ-dl1kxVJiVzqbyR-nBMd64rS--eSuhxWQnpBDaKhlBu2e5g6eNQCVPKEViBhWOME3B.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 305,
    hasAudio: false,
    verse: {
      text: "And the Spirit of the Lord will come upon you, and you will prophesy with them.",
      ref: "1 Samuel 10:6"
    },
    declaration: "The mantle fell. Elijah went up. Elisha picked it up. The call is yours now.",
    chapter: 7
  },
  {
    id: "storm-crown",
    slug: "storm-crown", // ← ADDED
    title: "Storm Crown",
    subtitle: "Authority in Chaos",
    image: "/AQMuw...png", // ← STILL NEEDS FULL HASH FROM GITHUB
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    ambientUrl: FALLBACK_AMBIENT,
    duration: 322,
    hasAudio: false,
    verse: {
      text: "He stilled the storm to a whisper; the waves of the sea were hushed.",
      ref: "Psalm 107:29"
    },
    declaration: "He doesn't just calm storms. He crowns you in them. Authority in chaos. You don't wait for peace to reign. You reign, and peace comes.",
    chapter: 8
  }
];

export const relics = RELICS;
export const getRelicByChapter = (chapter: number) => RELICS.find(r => r.chapter === chapter);
export const getRelicById = (id: string) => RELICS.find(r => r.id === id);
export const getRelicBySlug = (slug: string) => RELICS.find(r => r.slug === slug); // ← ADDED HELPER
export const getAllRelics = () => RELICS;
