export type Relic = {
  id: string
  slug: string
  title: string
  scripture: { ref: string; text: string }
  audioUrl: string
  ambientUrl?: string
  moodTheme: {
    base: string
    accent: string[]
    effect: 'collision' | 'tension' | 'ascension' | 'throne'
  }
  reflectionBlocks: string[]
  duration: number // seconds
}

export const relics: Relic[] = [
  {
    id: "iron-collide",
    slug: "iron-collide", 
    title: "IRON COLLIDE",
    scripture: {
      ref: "Proverbs 27:17",
      text: "As iron sharpens iron, so one person sharpens another."
    },
    audioUrl: "/audio/relics/iron-collide.mp3",
    ambientUrl: "/audio/ambient/storm-swell.mp3",
    moodTheme: {
      base: "#0A0A0B", // black steel
      accent: ["#3B82F6", "#EF4444"], // electric blue + ember red
      effect: "collision"
    },
    reflectionBlocks: [
      "Stop looking for friends who agree with you.",
      "Find brothers who sharpen you.", 
      "Iron Collide is for the collisions that make you dangerous.",
      "Sparks fly when you're forged.",
      "If no one's challenging you, you're getting dull."
    ],
    duration: 252 // 4:12
  }
]
