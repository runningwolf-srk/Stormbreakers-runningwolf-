export type Relic = {
  id: number;
  world: "armory" | "valley"; // 2 worlds
  title: string;
  songTitle: string;
  image: string; // Your uploaded files
  imageAlt: string;
  verse: { text: string; ref: string };
  declaration: string;
};

export const RELICS: Relic[] = [
  // WORLD 1: THE ARMORY — Fire, Victory, Crown
  {
    id: 1,
    world: "armory",
    title: "The First Flame",
    songTitle: "Jesus Is An Healer",
    image: "/file_00000000fa471f882fd16e52afa59fd.png",
    imageAlt: "Jesus Is An Healer - By His wounds we are healed",
    verse: { text: "By his wounds we are healed.", ref: "Isaiah 53:5" },
    declaration: "I was broken so you could be whole."
  },
  {
    id: 2,
    world: "armory",
    title: "Wolf Fang",
    songTitle: "Scars That Preach",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    imageAlt: "Scars That Preach - Born Through The Fire",
    verse: { text: "I bear on my body the marks of Jesus.", ref: "Galatians 6:17" },
    declaration: "These scars are not wounds. They are medals."
  },
  {
    id: 3,
    world: "armory",
    title: "Thunder Drums",
    songTitle: "Horn of War",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Horn of War - A Battle Cry, A Legend Rises",
    verse: { text: "Blow the trumpet in Zion; sound the alarm.", ref: "Joel 2:1" },
    declaration: "When God calls, we don't whisper. We sound the horn."
  },
  {
    id: 4,
    world: "armory",
    title: "Spirit Mantle",
    songTitle: "Heaven Calling",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Heaven Calling - A Worship Anthem",
    verse: { text: "Come up here, and I will show you what must take place.", ref: "Revelation 4:1" },
    declaration: "The door is open. The invitation stands."
  },
  {
    id: 5,
    world: "armory",
    title: "Runningwolf's Blade",
    songTitle: "Iron Collide",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Iron Collide - An Epic Hard Rock Anthem",
    verse: { text: "As iron sharpens iron, so one person sharpens another.", ref: "Proverbs 27:17" },
    declaration: "We don't fight alone. We sharpen each other for war."
  },
  {
    id: 6,
    world: "armory",
    title: "Eternal Fire",
    songTitle: "Blood of Cross",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Blood of Cross - By His wounds we are healed",
    verse: { text: "In him we have redemption through his blood.", ref: "Ephesians 1:7" },
    declaration: "No blood, no redemption. No cross, no crown."
  },
  {
    id: 7,
    world: "armory",
    title: "Storm Crown",
    songTitle: "Lord of Lords",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Lord of Lords - A Spiritual Anthem",
    verse: { text: "KING OF KINGS AND LORD OF LORDS.", ref: "Revelation 19:16" },
    declaration: "We don't reign — He does. We rule from the eye of HIS storm."
  },
  {
    id: 8,
    world: "armory",
    title: "Chronicle Stone",
    songTitle: "Spiritual Journey",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Spiritual Journey - A Journey to His Presence",
    verse: { text: "Write the vision; make it plain on tablets.", ref: "Habakkuk 2:2" },
    declaration: "God said WRITE. So I write. So you can run with it."
  }
  // WORLD 2: THE VALLEY — 8 more relics come later
];
