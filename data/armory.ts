// data/armory.ts - COPY/PASTE THIS ENTIRE FILE
export type Relic = {
  relic: string;
  slug: string;
  subtitle: string;
  scripture: string;
  reference: string;
  supportingScripture?: {
    verse: string;
    reference: string;
  };
  meaning: string;
  reflection: string;
  song: string;
  youtube: string;
  image: string;
  tags: string[];
  relatedRelics: string[];
};

export const armory: Relic[] = [
  {
    relic: "Jesus Is An Healer",
    slug: "jesus-is-an-healer",
    subtitle: "Crowned in the Storm",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    reference: "Isaiah 53:5",
    supportingScripture: {
      verse: "He heals the brokenhearted and binds up their wounds.",
      reference: "Psalm 147:3"
    },
    meaning: "The Storm Crown is not earned in calm waters. It is placed on those who have stood in the downpour and not drowned. It marks warriors who carry healing not as a theory, but as a scar.",
    reflection: "I wrote this after a season where the storm didn't let up. I kept asking God to stop the rain. He didn't. Instead He showed me He was in the rain with me. Isaiah 53:5 became my anchor - 'by His wounds we are healed.' Not 'we might be' or 'we could be.' We ARE. The crown comes after the crushing, and the healing flows from His wounds, not our strength.",
    song: "Jesus Is An Healer",
    youtube: "https://youtu.be/stsryByK5h8?is=DDb3dph6s9-Ee9xe",
    image: "/file_00000000fa471f882fd16e52afa59fd.png",
    tags: ["HEALING", "WORSHIP", "ISAIAH 53", "STORM"],
    relatedRelics: ["horn-of-war", "blood-of-cross"]
  },
  {
    relic: "Horn of War",
    slug: "horn-of-war",
    song: "Horn of War",
    subtitle: "The Battle Cry",
    scripture: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    reference: "Joel 2:1",
    meaning: "", // YOU FILL THIS
    reflection: "", // YOU FILL THIS
    youtube: "https://youtu.be/M4wGCg5oCx0?is=tYA8M-DSzY_cvjy1",
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    tags: ["CINEMATIC WORSHIP", "VIKING WAR HYMN", "ORCHESTRAL"],
    relatedRelics: ["jesus-is-an-healer", "lord-of-lords"]
  },
  // Add the other 6 relics - I'll help you write them one by one
];
