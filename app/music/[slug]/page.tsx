// app/music//page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type StoryItem = {
  title: string;
  text: string;
};

type SongData = {
  slug: string;
  title: string;
  subtitle: string;
  scripture: string;
  scriptureRef: string;
  youtubeId?: string; // PRIMARY MEDIA SOURCE
  youtubeIdBonus?: string;
  genre: string;
  story: StoryItem[]; // MUST BE 3 ITEMS
  meaning: string;
  sagaNext?: string;
  sagaPrev?: string;
  trackNumber: string; // Format: "01 / 07"
};

// CANON LOCKED: 7 RELICS ONLY - YOUTUBE FIRST
const songs: Record<string, SongData> = {
  "horn-of-war": {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    scripture: "As iron sharpens iron, so one person sharpens another.",
    scriptureRef: "Proverbs 27:17",
    youtubeId: "odIsEMUtNJI",
    youtubeIdBonus: "fIkUDO2emoc",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral",
    story: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender."
      },
      {
        title: "THE HORN",
        text: "The call goes out, awakening courage. Not to signal fear, but to summon the faithful. One note breaks the spell."
      },
      {
        title: "THE CHOICE",
        text: "Every person must decide whether to stand or retreat. The battlefield is already inside you. The horn just reveals it."
      }
    ],
    meaning: "The horn does not promise an easy battle. It calls the faithful to stand.",
    sagaNext: "iron-collide",
    sagaPrev: undefined,
    trackNumber: "01 / 07"
  },
  "iron-collide": {
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    scripture: "As iron sharpens iron, so one person sharpens another.",
    scriptureRef: "Proverbs 27:17",
    youtubeId: "M4wGCg5oCx0",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral",
    story: [
      {
        title: "THE ANVIL",
        text: "You thought the trial was punishment. It was preparation. Sparks fly when purpose meets pressure."
      },
      {
        title: "THE HAMMER",
        text: "God doesn't remove the blow. He directs it. Every strike shapes you into a weapon for His glory."
      },
      {
        title: "THE BLADE",
        text: "Dull swords get people killed. Let the brotherhood sharpen you. Let the Word hone your edge."
      }
    ],
    meaning: "We are forged in community, not in isolation. The collision is the calling.",
    sagaNext: "blood-of-the-cross",
    sagaPrev: "horn-of-war",
    trackNumber: "02 / 07"
  },
  "blood-of-the-cross": {
    slug: "blood-of-the-cross",
    title: "Blood of the Cross",
    subtitle: "The Sacrifice",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities.",
    scriptureRef: "Isaiah 53:5",
    youtubeId: "4lcbjsNLlzo",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE WEIGHT",
        text: "Every sin carried. Every shame lifted. The cross was not symbolic. It was execution."
      },
      {
        title: "THE EXCHANGE",
        text: "His blood for your freedom. His wounds for your healing. The price was paid in full."
      },
      {
        title: "THE VICTORY",
        text: "Death thought it won. The grave thought it held Him. Three days later, the stone rolled away."
      }
    ],
    meaning: "The cross is not the end of the story. It's where your story begins.",
    sagaNext: "white-horse",
    sagaPrev: "iron-collide",
    trackNumber: "03 / 07"
  },
  "white-horse": {
    slug: "white-horse",
    title: "White Horse",
    subtitle: "The Return",
    scripture: "I saw heaven standing open and there before me was a white horse.",
    scriptureRef: "Revelation 19:11",
    youtubeId: "8XQUhWB_N5M",
    genre: "Cinematic Worship • Orchestral • Epic",
    story: [
      {
        title: "THE RIDER",
        text: "Faithful and True. His eyes are like blazing fire. He judges with justice and makes war."
      },
      {
        title: "THE ARMIES",
        text: "Heaven follows. Clothed in fine linen, white and clean. Not to watch, but to conquer."
      },
      {
        title: "THE SWORD",
        text: "From His mouth comes a sharp sword. Not steel, but truth. Every lie will fall."
      }
    ],
    meaning: "He's not coming back as a lamb. He's coming back as a King.",
    sagaNext: "crown-of-thorns",
    sagaPrev: "blood-of-the-cross",
    trackNumber: "04 / 07"
  },
  "crown-of-thorns": {
    slug: "crown-of-thorns",
    title: "Crown of Thorns",
    subtitle: "The King of Pain",
    scripture: "They twisted together a crown of thorns and set it on his head.",
    scriptureRef: "Matthew 27:29",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE MOCKERY",
        text: "They gave Him a crown to humiliate Him. Heaven saw a coronation."
      },
      {
        title: "THE BLOOD",
        text: "Every thorn drew blood. Every drop paid for rebellion you couldn't cover."
      },
      {
        title: "THE EXCHANGE",
        text: "He wore the crown of curse so you could wear the crown of life."
      }
    ],
    meaning: "Your King bled first. Your victory was bought with thorns.",
    sagaNext: "lion-and-lamb",
    sagaPrev: "white-horse",
    trackNumber: "05 / 07"
  },
  "lion-and-lamb": {
    slug: "lion-and-lamb",
    title: "Lion and Lamb",
    subtitle: "The Paradox",
    scripture: "See, the Lion of the tribe of Judah has triumphed.",
    scriptureRef: "Revelation 5:5",
    youtubeId: "oxNauKuxg4Q",
    genre: "Cinematic Worship • Orchestral • Choral",
    story: [
      {
        title: "THE LAMB",
        text: "He didn't come to dominate. He came to be slaughtered. Weakness was the weapon."
      },
      {
        title: "THE LION",
        text: "The same one who was slain now roars. The grave couldn't hold Him. Death couldn't keep Him."
      },
      {
        title: "THE THRONE",
        text: "He rules not by force, but by sacrifice. The scars are His credentials."
      }
    ],
    meaning: "He conquered by surrendering. He rules by serving. That's Kingdom logic.",
    sagaNext: "seven-seals",
    sagaPrev: "crown-of-thorns",
    trackNumber: "06 / 07"
  },
  "seven-seals": {
    slug: "seven-seals",
    title: "Seven Seals",
    subtitle: "The End and Beginning",
