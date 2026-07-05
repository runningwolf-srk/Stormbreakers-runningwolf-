// data/relics.ts — V2.1 STORMBREAKERS SAFE MODE
// Uses /audio/silence.mp3 fallback so nothing crashes
export type Relic = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  audio: string;        
  audioUrl: string;     
  duration: number;     
  hasAudio: boolean;    // ← NEW: Feature flag for UI
  scripture: string;
  ref: string;
  declaration: string;
  chapter?: number;
};

const FALLBACK_AUDIO = "/audio/silence.mp3"; // ← Upload 1sec silence MP3 here

export const RELICS: Relic[] = [
  {
    id: "running-wolfs-blade",
    title: "Running Wolf's Blade",
    subtitle: "The War Cry of the Forsaken",
    image: "/AQNSqpHW8gV1OxAJb-5woTpal2mMV6yPY3VCIyhfmXJ51cTaGP38bt7ry6ooj4APZbACwuHTNzTNILA2GCzab6o8.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 347,
    hasAudio: false, // ← Set to true when real MP3 exists
    scripture: "No weapon formed against you shall prosper...",
    ref: "Isaiah 54:17",
    declaration: "Snow on the shield. Salt on the wood...",
    chapter: 1
  },
  {
    id: "thunder-drum",
    title: "Thunder Drum",
    subtitle: "Voice of the Storm",
    image: "/AQOz4ulRTVBY1w495PKpiAaJkqdN0z3TUXi6XBCq3BTu5pojjvcJeQolJbmduV4EbRJKxE183PEOaupTTShyCiqg.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 298,
    hasAudio: false,
    scripture: "The voice of the Lord is over the waters...",
    ref: "Psalm 29:3",
    declaration: "When God speaks, the ground answers...",
    chapter: 2
  },
  {
    id: "eternal-fire",
    title: "Eternal Fire",
    subtitle: "The Consuming Flame",
    image: "/AQNv1x8JFS1A0AB4rym1t36t9z9Ah7gwaP2Vr3PS3hhoCAOZs5UhX4LeEiGXg2acWrcSt1iyqKQrCPhuA6O9d5My.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 312,
    hasAudio: false,
    scripture: "For our God is a consuming fire.",
    ref: "Hebrews 12:29",
    declaration: "The fire that fell at Pentecost never left...",
    chapter: 3
  },
  {
    id: "chronicle-stone",
    title: "Chronicle Stone",
    subtitle: "Name Written in Heaven",
    image: "/AQOa1IseR647iRUJvkreGVolACSRVJGcffDo1awMvuNQE9UN8C3TxSp54AnzTKDFQtR9Y7eHIN84bsEBxwB7eSPI.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 267,
    hasAudio: false,
    scripture: "I will write on them the name of My God...",
    ref: "Revelation 3:12",
    declaration: "What God writes in stone, hell cannot erase...",
    chapter: 4
  },
  {
    id: "the-first-flame",
    title: "The First Flame",
    subtitle: "Where Healing Began",
    image: "/AQNawBYhZi5D3mTWqF8M9hfxg8zmT6ExMD0oErYvltBSZP7Uel86XPd2kca7gYcPkxv5rsNNaYrM-_4jYBllupX9.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 331,
    hasAudio: false,
    scripture: "But He was pierced for our transgressions...",
    ref: "Isaiah 53:5",
    declaration: "This is where it started. Not in a church...",
    chapter: 5
  },
  {
    id: "wolfs-fang",
    title: "Wolf's Fang",
    subtitle: "Cord of Three Strands",
    image: "/AQNaCDj13mbCjvyJA47tjBiuR6D-WpUweMqib7Hbp4kQlHoSgm3XdKzfnagSdD4b8kNiNWrOpPugyuGGIJZ0Zmp7.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 289,
    hasAudio: false,
    scripture: "Though one may be overpowered, two can defend themselves...",
    ref: "Ecclesiastes 4:12",
    declaration: "Lone wolves die in the dark...",
    chapter: 6
  },
  {
    id: "spirit-mantle",
    title: "Spirit Mantle",
    subtitle: "The Prophet's Cloak",
    image: "/AQMILikpY_4YzpC0ogoZpZ-dl1kxVJiVzqbyR-nBMd64rS--eSuhxWQnpBDaKhlBu2e5g6eNQCVPKEViBhWOME3B.png",
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 305,
    hasAudio: false,
    scripture: "And the Spirit of the Lord will come upon you...",
    ref: "1 Samuel 10:6",
    declaration: "The mantle fell. Elijah went up...",
    chapter: 7
  },
  {
    id: "storm-crown",
    title: "Storm Crown",
    subtitle: "Authority in Chaos",
    image: "/AQMuw...png", // ← REPLACE THIS WITH FULL HASH FROM GITHUB
    audio: FALLBACK_AUDIO,
    audioUrl: FALLBACK_AUDIO,
    duration: 322,
    hasAudio: false,
    scripture: "He stilled the storm to a whisper...",
    ref: "Psalm 107:29",
    declaration: "He doesn't just calm storms. He crowns you in them...",
    chapter: 8
  }
];

export const relics = RELICS;
export const getRelicByChapter = (chapter: number) => RELICS.find(r => r.chapter === chapter);
export const getRelicById = (id: string) => RELICS.find(r => r.id === id);
export const getAllRelics = () => RELICS;
