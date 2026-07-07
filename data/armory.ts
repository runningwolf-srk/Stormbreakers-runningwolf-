// data/armory.ts
export type Relic = {
  slug: string
  relic: string
  song: string
  image?: string
  youtube?: string
  scripture: string
  reference: string
  supportingScripture?: {
    verse: string
    reference: string
  }
  declaration: string
  reflection: string
}

export const armory: Relic[] = [
  {
    slug: "jesus-is-an-healer",
    relic: "Jesus Is An Healer",
    song: "Jesus Is An Healer",
    image: "/relics/jesus-is-an-healer.jpg", // Update with your path
    youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    reference: "Isaiah 53:5",
    supportingScripture: {
      verse: "He heals the brokenhearted and binds up their wounds.",
      reference: "Psalm 147:3"
    },
    declaration: "By His wounds, I am healed.",
    reflection: "Your reflection text here..."
  },
  // Add 8 more relics...
]
