// data/relics.ts — V1.1 HOTFIX — EXPORTS + TYPES CORRECTED
export type Relic = {
  id: string;
  title: string;
  image: string;
  audio: string;
  ambientUrl?: string; // ← ADDED: Fixes AudioEngine error
  scripture: string;
  ref: string;
  declaration: string;
  chapter?: number; // ← ADDED: For saga mapping
};

export const RELICS: Relic[] = [
  {
    id: "running-wolfs-blade",
    title: "Running Wolf's Blade",
    image: "/AQNSqpHW8gV1OxAJb-5woTpal2mMV6yPY3VCIyhfmXJ51cTaGP38bt7ry6ooj4APZbACwuHTNzTNILA2GCzab6o8.png",
    audio: "/audio/running-wolfs-blade.mp3",
    ambientUrl: "/audio/ambient-wind.mp3", // ← ADD THIS FILE LATER OR REMOVE LINE
    scripture: "No weapon formed against you shall prosper, and every tongue which rises against you in judgment You shall condemn.",
    ref: "Isaiah 54:17",
    declaration: "Snow on the shield. Salt on the wood. We came from the fjord but You called us good. I was ash in the tundra, bone in the storm. Then Your breath hit the valley and my dead heart was warm. Jesus, lead us on.",
    chapter: 1
  },
  {
    id: "thunder-drum",
    title: "Thunder Drum",
    image: "/AQOz4ulRTVBY1w495PKpiAaJkqdN0z3TUXi6XBCq3BTu5pojjvcJeQolJbmduV4EbRJKxE183PEOaupTTShyCiqg.png",
    audio: "/audio/thunder-drum.mp3",
    scripture: "The voice of the Lord is over the waters; the God of glory thunders.",
    ref: "Psalm 29:3",
    declaration: "When God speaks, the ground answers. This is the sound of war.",
    chapter: 2
  },
  {
    id: "eternal-fire",
    title: "Eternal Fire",
    image: "/AQNv1x8JFS1A0AB4rym1t36t9z9Ah7gwaP2Vr3PS3hhoCAOZs5UhX4LeEiGXg2acWrcSt1iyqKQrCPhuA6O9d5My.png",
    audio: "/audio/eternal-fire.mp3",
    scripture: "For our God is a consuming fire.",
    ref: "Hebrews 12:29",
    declaration: "The fire that fell at Pentecost never left. It lives in you. Burn forever.",
    chapter: 3
  },
  {
    id: "chronicle-stone",
    title: "Chronicle Stone",
    image: "/AQOa1IseR647iRUJvkreGVolACSRVJGcffDo1awMvuNQE9UN8C3TxSp54AnzTKDFQtR9Y7eHIN84bsEBxwB7eSPI.png",
    audio: "/audio/chronicle-stone.mp3",
    scripture: "I will write on them the name of My God and the name of the city of My God.",
    ref: "Revelation 3:12",
    declaration: "What God writes in stone, hell cannot erase. Your name is carved in heaven.",
    chapter: 4
  },
  {
    id: "the-first-flame",
    title: "The First Flame",
    image: "/AQNawBYhZi5D3mTWqF8M9hfxg8zmT6ExMD0oErYvltBSZP7Uel86XPd2kca7gYcPkxv5rsNNaYrM-_4jYBllupX9.png",
    audio: "/audio/the-first-flame.mp3",
    scripture: "But He was pierced for our transgressions, He was crushed for our iniquities; the punishment that brought us peace was on Him, and by His wounds we are healed.",
    ref: "Isaiah 53:5",
    declaration: "This is where it started. Not in a church. In the dark. Bleeding. Alone. And He found me.",
    chapter: 5
  },
  {
    id: "wolfs-fang",
    title: "Wolf's Fang",
    image: "/AQNaCDj13mbCjvyJA47tjBiuR6D-WpUweMqib7Hbp4kQlHoSgm3XdKzfnagSdD4b8kNiNWrOpPugyuGGIJZ0Zmp7.png",
    audio: "/audio/wolfs-fang.mp3",
    scripture: "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.",
    ref: "Ecclesiastes 4:12",
    declaration: "Lone wolves die in the dark. The pack hunts in light. I was born for brotherhood.",
    chapter: 6
  },
  {
    id: "spirit-mantle",
    title: "Spirit Mantle",
    image: "/AQMILikpY_4YzpC0ogoZpZ-dl1kxVJiVzqbyR-nBMd64rS--eSuhxWQnpBDaKhlBu2e5g6eNQCVPKEViBhWOME3B.png",
    audio: "/audio/spirit-mantle.mp3",
    scripture: "And the Spirit of the Lord will come upon you, and you will prophesy with them.",
    ref: "1 Samuel 10:6",
    declaration: "The mantle fell. Elijah went up. Elisha picked it up. The call is yours now.",
    chapter: 7
  },
  {
    id: "storm-crown",
    title: "Storm Crown",
    image: "/AQMuw...png", // ← REPLACE WITH YOUR FULL HASH FILENAME
    audio: "/audio/storm-crown.mp3",
    scripture: "He stilled the storm to a whisper; the waves of the sea were hushed.",
    ref: "Psalm 107:29",
    declaration: "He doesn't just calm storms. He crowns you in them. Authority in chaos. You don't wait for peace to reign. You reign, and peace comes.",
    chapter: 8
  }
];

// FIX #1: Export both names so nothing breaks
export const relics = RELICS;

// FIX #2: Add the missing function for /saga/chapter-01
export const getRelicByChapter = (chapter: number) => RELICS.find(r => r.chapter === chapter);
export const getRelicById = (id: string) => RELICS.find(r => r.id === id);
export const getAllRelics = () => RELICS;
