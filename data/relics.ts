export type Relic = {
  id: number;
  world: "armory" | "valley";
  title: string; // Relic/Chapter Name
  songTitle: string; // Song Name  
  image: string;
  imageAlt: string;
  audioUrl: string; // YouTube link
  verse: { text: string; ref: string };
  declaration: string;
};

export const RELICS: Relic[] = [
  // ===== WORLD 1: THE ARMORY — THE OLD 8 SONGS — VICTORY =====
  {
    id: 1,
    world: "armory",
    title: "The First Flame",
    songTitle: "Jesus Is An Healer",
    image: "/file_00000000fa471f882fd16e52afa59fd.png",
    imageAlt: "Jesus Is An Healer",
    audioUrl: "https://youtu.be/stsryByK5h8",
    verse: { 
      text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.", 
      ref: "Isaiah 53:5" 
    },
    declaration: "I was broken so you could be whole."
  },
  {
    id: 2,
    world: "armory",
    title: "Wolf Fang",
    songTitle: "Scars That Preach",
    image: "/file_0000000065a071f5832301f52d11fb80.png",
    imageAlt: "Scars That Preach",
    audioUrl: "https://youtu.be/dHz0D3QblpQ",
    verse: { 
      text: "From now on, let no one cause me trouble, for I bear on my body the marks of Jesus.", 
      ref: "Galatians 6:17" 
    },
    declaration: "These scars are not wounds. They are medals."
  },
  {
    id: 3,
    world: "armory",
    title: "Thunder Drums",
    songTitle: "Horn of War",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Horn of War",
    audioUrl: "https://youtu.be/M4wGCg5oCx0",
    verse: { 
      text: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.", 
      ref: "Joel 2:1" 
    },
    declaration: "When God calls, we don't whisper. We sound the horn."
  },
  {
    id: 4,
    world: "armory",
    title: "Spirit Mantle",
    songTitle: "Heaven Calling",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Heaven Calling",
    audioUrl: "https://youtu.be/oxNauKuxg4Q",
    verse: { 
      text: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, 'Come up here, and I will show you what must take place after this.'", 
      ref: "Revelation 4:1" 
    },
    declaration: "The door is open. The invitation stands."
  },
  {
    id: 5,
    world: "armory",
    title: "Runningwolf's Blade",
    songTitle: "Iron Collide",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Iron Collide",
    audioUrl: "https://youtu.be/fIkUDO2emoc",
    verse: { 
      text: "As iron sharpens iron, so one person sharpens another.", 
      ref: "Proverbs 27:17" 
    },
    declaration: "We don't fight alone. We sharpen each other for war."
  },
  {
    id: 6,
    world: "armory",
    title: "Eternal Fire",
    songTitle: "Blood of Cross",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Blood of Cross",
    audioUrl: "https://youtu.be/maI6giUcYYk",
    verse: { 
      text: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace", 
      ref: "Ephesians 1:7" 
    },
    declaration: "No blood, no redemption. No cross, no crown."
  },
  {
    id: 7,
    world: "armory",
    title: "Storm Crown",
    songTitle: "Lord of Lords",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Lord of Lords",
    audioUrl: "https://youtu.be/9vP0NPrEv9s",
    verse: { 
      text: "On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.", 
      ref: "Revelation 19:16" 
    },
    declaration: "We don't reign — He does. We rule from the eye of HIS storm."
  },
  {
    id: 8,
    world: "armory",
    title: "Chronicle Stone",
    songTitle: "Spiritual Journey",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    imageAlt: "Spiritual Journey",
    audioUrl: "https://youtu.be/umDFjJjh0_c",
    verse: { 
      text: "Then the Lord replied: 'Write down the revelation and make it plain on tablets so that a herald may run with it.'", 
      ref: "Habakkuk 2:2" 
    },
    declaration: "God said WRITE. So I write. So you can run with it."
  },

  // ===== WORLD 2: THE VALLEY — THE NEW 8 SONGS — WARFARE =====
  {
    id: 9,
    world: "valley",
    title: "Ash Crown",
    songTitle: "I'm on fire",
    image: "/placeholder-valley-1.jpg",
    imageAlt: "I'm on fire",
    audioUrl: "https://youtu.be/8XQUhWB_N5M",
    verse: { 
      text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.", 
      ref: "Psalm 23:4" 
    },
    declaration: "I walked through hell with gasoline dreams."
  },
  {
    id: 10,
    world: "valley",
    title: "Broken Chain",
    songTitle: "TBD Valley Song 2",
    image: "/placeholder-valley-2.jpg",
    imageAlt: "TBD Valley Song 2",
    audioUrl: "", // Add YouTube link when ready
    verse: { 
      text: "He brought them out of darkness, the utter darkness, and broke away their chains.", 
      ref: "Psalm 107:14" 
    },
    declaration: "The chains didn't break me. God broke the chains."
  },
  {
    id: 11,
    world: "valley",
    title: "Pit Stone",
    songTitle: "TBD Valley Song 3",
    image: "/placeholder-valley-3.jpg",
    imageAlt: "TBD Valley Song 3",
    audioUrl: "",
    verse: { 
      text: "He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand.", 
      ref: "Psalm 40:2" 
    },
    declaration: "Rock bottom became the foundation He built on."
  },
  {
    id: 12,
    world: "valley",
    title: "Needle & Thread",
    songTitle: "TBD Valley Song 4",
    image: "/placeholder-valley-4.jpg",
    imageAlt: "TBD Valley Song 4",
    audioUrl: "",
    verse: { 
      text: "Come to me, all you who are weary and burdened, and I will give you rest.", 
      ref: "Matthew 11:28" 
    },
    declaration: "I traded needles for the nail-scarred hands."
  },
  {
    id: 13,
    world: "valley",
    title: "Empty Bottle",
    songTitle: "TBD Valley Song 5",
    image: "/placeholder-valley-5.jpg",
    imageAlt: "TBD Valley Song 5",
    audioUrl: "",
    verse: { 
      text: "Do not get drunk on wine, which leads to debauchery. Instead, be filled with the Spirit.", 
      ref: "Ephesians 5:18" 
    },
    declaration: "I was empty. He filled me with fire."
  },
  {
    id: 14,
    world: "valley",
    title: "Concrete Pillow",
    songTitle: "TBD Valley Song 6",
    image: "/placeholder-valley-6.jpg",
    imageAlt: "TBD Valley Song 6",
    audioUrl: "",
    verse: { 
      text: "I will refresh the weary and satisfy the faint.", 
      ref: "Jeremiah 31:25" 
    },
    declaration: "I slept on concrete. Now I rest in His promises."
  },
  {
    id: 15,
    world: "valley",
    title: "Back Alley Cross",
    songTitle: "TBD Valley Song 7",
    image: "/placeholder-valley-7.jpg",
    imageAlt: "TBD Valley Song 7",
    audioUrl: "",
    verse: { 
      text: "But God chose the foolish things of the world to shame the wise.", 
      ref: "1 Corinthians 1:27" 
    },
    declaration: "He found me in the alley. He made me an apostle."
  },
  {
    id: 16,
    world: "valley",
    title: "Final Dose",
    songTitle: "TBD Valley Song 8",
    image: "/placeholder-valley-8.jpg",
    imageAlt: "TBD Valley Song 8",
    audioUrl: "",
    verse: { 
      text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", 
      ref: "2 Corinthians 5:17" 
    },
    declaration: "That was my last dose. His blood was my first."
  }
];
