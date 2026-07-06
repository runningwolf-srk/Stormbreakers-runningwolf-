export type Relic = {
  id: string;
  slug: string;
  name: string;
  image: string;
  songTitle: string;
  youtubeUrl: string;
};

export const RELICS: Relic[] = [
  {
    id: "storm-crown",
    slug: "storm-crown",
    name: "Storm Crown",
    image: "/relics/storm-crown.jpg",
    songTitle: "Jesus is an healer",
    youtubeUrl: "https://youtu.be/stsryByK5h8",
  },
  {
    id: "eternal-fire",
    slug: "eternal-fire", 
    name: "Eternal Fire",
    image: "/relics/eternal-fire.jpg",
    songTitle: "Lord of Lords",
    youtubeUrl: "https://youtu.be/9vP0NPrEv9s",
  },
  {
    id: "first-flame",
    slug: "first-flame",
    name: "The First Flame", 
    image: "/relics/first-flame.jpg",
    songTitle: "Spiritual Journey",
    youtubeUrl: "https://youtu.be/umDFjJjh0_c",
  },
  {
    id: "wolf-fang",
    slug: "wolf-fang",
    name: "Wolf Fang",
    image: "/relics/wolf-fang.jpg",
    songTitle: "I'm on fire",
    youtubeUrl: "https://youtu.be/8XQUhWB_N5M",
  },
  {
    id: "thunder-drums",
    slug: "thunder-drums",
    name: "Thunder Drums",
    image: "/relics/thunder-drums.jpg", 
    songTitle: "Horn of War",
    youtubeUrl: "https://youtu.be/M4wGCg5oCx0",
  },
  {
    id: "spirit-mantle",
    slug: "spirit-mantle",
    name: "Spirit Mantle",
    image: "/relics/spirit-mantle.jpg",
    songTitle: "Iron Collide", 
    youtubeUrl: "https://youtu.be/fIkUDO2emoc",
  },
  {
    id: "chronicle-stone",
    slug: "chronicle-stone",
    name: "Chronicle Stone",
    image: "/relics/chronicle-stone.jpg",
    songTitle: "Heaven Calling",
    youtubeUrl: "https://youtu.be/oxNauKuxg4Q",
  },
  {
    id: "runningwolfs-blade",
    slug: "runningwolfs-blade", 
    name: "Runningwolf's Blade",
    image: "/relics/runningwolfs-blade.jpg",
    songTitle: "8TH OLD SONG - REPLACE ME", // ← REPLACE THIS
    youtubeUrl: "", // ← REPLACE WITH YOUTUBE LINK
  },
];
