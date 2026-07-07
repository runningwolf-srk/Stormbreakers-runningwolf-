// data/armory.ts
export type Relic = {
  slug: string
  relic: string
  song: string
  subtitle?: string
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
    subtitle: "The healing power of Christ for every wound",
    image: "/relics/PASTE_YOUR_FULL_FILENAME_HERE.jpg", // <-- REPLACE THIS LINE
    youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    reference: "Isaiah 53:5",
    supportingScripture: {
      verse: "He heals the brokenhearted and binds up their wounds.",
      reference: "Psalm 147:3"
    },
    declaration: "By His wounds, I am healed.",
    reflection: "Replace this with your real testimony..."
  },
  {
    slug: "heaven-calling",
    relic: "Heaven Calling",
    song: "Heaven Calling",
    subtitle: "Answering the voice of God",
    image: "/relics/PASTE_YOUR_FULL_FILENAME_HERE.jpg", // <-- REPLACE THIS LINE
    youtube: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    scripture: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    reference: "1 Samuel 3:10",
    declaration: "Speak, Lord, for your servant is listening.",
    reflection: "Replace this with your real testimony..."
  },
  // Add 7 more relics below using the same pattern
]
