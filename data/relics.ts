export type Relic = {
  slug: string;
  name: string;
  image: string; // path to your uploaded relic image
  youtubeUrl: string;
  songTitle?: string; // add later if you want
};

export const RELICS: Relic[] = [
  {
    slug: "first-flame",
    name: "The First Flame",
    image: "/relics/first-flame.jpg", // replace with your actual image path
    youtubeUrl: "https://youtube.com/shorts/4IXJjvo7Ojo",
  },
  {
    slug: "eternal-fire", 
    name: "Eternal Fire",
    image: "/relics/eternal-fire.jpg",
    youtubeUrl: "https://youtu.be/maI6giUcYYk",
  },
  {
    slug: "runningwolfs-blade",
    name: "Runningwolf's Blade", 
    image: "/relics/runningwolfs-blade.jpg",
    youtubeUrl: "https://youtu.be/CZ6tylWuerQ",
  },
  {
    slug: "storm-crown",
    name: "Storm Crown",
    image: "/relics/storm-crown.jpg", 
    youtubeUrl: "https://youtu.be/MWHp_CRrKC8",
  },
  {
    slug: "chronicle-stone",
    name: "Chronicle Stone",
    image: "/relics/chronicle-stone.jpg",
    youtubeUrl: "https://youtu.be/YQZS2X1GZHE",
  },
  {
    slug: "spirit-mantle",
    name: "Spirit Mantle", 
    image: "/relics/spirit-mantle.jpg",
    youtubeUrl: "https://youtu.be/LSmQtFkHGjE",
  },
  {
    slug: "thunder-drums",
    name: "Thunder Drums",
    image: "/relics/thunder-drums.jpg",
    youtubeUrl: "https://youtu.be/BCKoGjYJZdg",
    songTitle: "Mahonnath Deva",
  },
  {
    slug: "wolf-fang",
    name: "Wolf Fang",
    image: "/relics/wolf-fang.jpg",
    youtubeUrl: "https://youtu.be/dHz0D3QblpQ",
  },
];
