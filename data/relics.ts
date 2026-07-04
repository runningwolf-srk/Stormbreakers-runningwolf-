export type Relic = {
  slug: string
  title: string
  audioUrl: string
  ambientUrl?: string
  duration: number
  scripture: { ref: string; text: string }
  reflectionBlocks: string[]
}

export const relics: Relic[] = [
  {
    slug: "the-first-flame",
    title: "THE FIRST FLAME",
    audioUrl: "/audio/relics/first-flame.mp3",
    duration: 180,
    scripture: {
      ref: "Isaiah 53:5",
      text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed."
    },
    reflectionBlocks: ["This is where it started.", "Not in a church.", "In the dark."]
  },
  {
    slug: "horn-of-war",
    title: "HORN OF WAR",
    audioUrl: "/audio/relics/horn-of-war.mp3",
    ambientUrl: "/audio/relics/storm-swell.mp3",
    duration: 240,
    scripture: {
      ref: "Joel 2:1",
      text: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming."
    },
    reflectionBlocks: [
      "This ain't worship music for coffee shops.",
      "This is the sound that wakes the camp.",
      "The Horn of War is for the watchmen.",
      "If you're comfortable, this track ain't for you.",
      "If you're called, turn it up."
    ]
  },
  {
    slug: "iron-collide",
    title: "IRON COLLIDE",
    audioUrl: "/audio/relics/iron-collide.mp3",
    ambientUrl: "/audio/relics/storm-swell.mp3",
    duration: 252,
    scripture: {
      ref: "Proverbs 27:17",
      text: "As iron sharpens iron, so one person sharpens another."
    },
    reflectionBlocks: [
      "Two blades meet.",
      "Sparks are not violence.",
      "They are refinement.",
      "Strike until the edge sings."
    ]
  }
]
