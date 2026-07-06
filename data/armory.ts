// data/armory.ts
export type Relic = {
  relic: string; // "Horn of War"
  slug: string; // "horn-of-war" for URL
  song: string; // "Horn of war"
  subtitle: string; // "The Battle Cry"
  verse: string; // Full Bible verse text
  reference: string; // "Joel 2:1"
  tags: string[]; // ["CINEMATIC WORSHIP", "VIKING WAR HYMN"]
  image: string; // Hero image
  youtube: string; // YouTube link
  meditationTitle: string; // "THE SILENCE"
  blog: string; // Full short story/blog - can use markdown
};

export const armory: Relic[] = [
  {
    relic: "Horn of War",
    slug: "horn-of-war",
    song: "Horn of war",
    subtitle: "The Battle Cry",
    verse: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    reference: "Joel 2:1",
    tags: ["CINEMATIC WORSHIP", "VIKING WAR HYMN", "ORCHESTRAL"],
    meditationTitle: "THE SILENCE",
    blog: `Before the horn, there is silence. Not peace — silence. The moment before war breaks.

God uses silence to prepare warriors. In the quiet, He sharpens the blade. In the stillness, He forges the heart.

When the Horn of War sounds, it isn't just noise. It's a call to stand. A call to remember who you are and whose you are. The trumpet in Zion was never meant for comfort — it was meant for courage.

This is your battle cry. Not against flesh and blood, but against every lie that says you're forgotten, forsaken, finished.

Blow the horn. The King is coming.`,
    image: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    youtube: "https://youtu.be/M4wGCg5oCx0?is=tYA8M-DSzY_cvjy1"
  },
  {
    relic: "Storm Crown",
    slug: "storm-crown",
    song: "Jesus is an healer",
    subtitle: "Crowned in the Storm",
    verse: "He calms the storm, so that its waves are still.",
    reference: "Psalm 107:29",
    tags: ["HEALING", "WORSHIP", "STORM"],
    meditationTitle: "THE HEALING RAIN",
    blog: `The storm doesn't disqualify you from the crown — it proves you're worthy of it.

Jesus doesn't just walk on water. He speaks to it. "Peace, be still." And the chaos obeys.

This relic is for the ones who've been in the downpour. Who've felt the lightning. Who've wondered if the ship would make it. The Storm Crown isn't given in the calm. It's placed on your head while the winds still howl — because He trusts you to reign even in the rain.

You are not drowning. You are being crowned.`,
    image: "/file_00000000fa471f882fd16e52afa59fd.png",
    youtube: "https://youtu.be/stsryByK5h8?is=DDb3dph6s9-Ee9xe"
  },
  // Add the other 6 relics here with same structure
];
