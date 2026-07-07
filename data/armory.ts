// data/armory.ts
export type Relic = {
  slug: string
  relic: string
  song: string
  subtitle?: string // ADD THIS LINE
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
    subtitle: "The healing power of Christ for every wound", // OPTIONAL: Add to each relic
    image: "/relics/jesus-is-an-healer.jpg",
    youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    scripture: "But he was pierced for our transgressions...",
    reference: "Isaiah 53:5",
    supportingScripture: {
      verse: "He heals the brokenhearted and binds up their wounds.",
      reference: "Psalm 147:3"
    },
    declaration: "By His wounds, I am healed.",
    reflection: "Your reflection text here..."
  },
  // Add subtitle to other 8 relics or leave it out - it's optional
]
