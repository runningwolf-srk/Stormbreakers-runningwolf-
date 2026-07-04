export type Relic = {
  slug: string
  title: string
  subtitle: string // ← Add this
  image: string
  verse: { ref: string; text: string } // ← Add this
  declaration: string // ← Add this
  audioUrl: string
  ambientUrl?: string
  duration: number
}

export const relics: Relic[] = [
  // ... other relics
  { 
    slug: "blood-of-cross", 
    title: "BLOOD OF CROSS",
    subtitle: "REDEMPTION SONG",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    verse: { 
      ref: "Ephesians 1:7", 
      text: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace" 
    },
    declaration: "Grace ain't cheap. It cost blood. This track is the line in the sand. You're either covered by it or you're not. No in-between. The Blood of Cross doesn't make you better — it makes you new.",
    audioUrl: "/audio/blood-of-cross.mp3",
    duration: 180 
  },
  // ... rest
]
