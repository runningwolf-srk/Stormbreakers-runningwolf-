// data/armory.ts
export type Relic = {
  slug: string
  relic: string
  song: string
  scripture: string
  reference: string
  youtube?: string
  spotify?: string
  appleMusic?: string
  declaration: string
  reflection: string
  testimony?: string
  subtitle?: string
  primaryTheme: 'Healing' | 'Calling' | 'Spiritual Warfare' | 'Grace' | 'Redemption' | 'Christ the King' | 'Restoration'
  themes: string[]
  image?: string
}

export const armory: Relic[] = [
  {
    slug: "jesus-is-an-healer",
    relic: "Jesus Is An Healer",
    song: "Jesus Is An Healer",
    scripture: "He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.",
    reference: "1 Peter 2:24 ESV",
    primaryTheme: "Healing",
    themes: ["Redemption", "Grace"],
    declaration: "I am healed by His wounds",
    reflection: "", // ← ADD YOUR 300-500 WORD TESTIMONY HERE
    testimony: "", // ← DELETE THIS LINE IF ICU STORY IS FICTION
    subtitle: "The healing anthem",
    youtube: "", // ← ADD YOUTUBE ID: abc123xyz
    image: "/images/relics/healer.jpg"
  },
  {
    slug: "war-cry",
    relic: "War Cry",
    song: "War Cry",
    scripture: "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.",
    reference: "Zephaniah 3:17 ESV",
    primaryTheme: "Spiritual Warfare",
    themes: ["Calling", "Christ the King"],
    declaration: "The Lord fights for me",
    reflection: "", // ← ADD YOUR 300-500 WORD TESTIMONY HERE
    subtitle: "Battle anthem",
    youtube: "", // ← ADD YOUTUBE ID
    image: "/images/relics/war-cry.jpg"
  }
]
