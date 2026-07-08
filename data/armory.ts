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
  primaryTheme: 'Healing' | 'Calling' | 'Spiritual Warfare' | 'Grace' | 'Redemption' | 'Christ the King' // ← NEW
  themes: string[] // ← Secondary tags only
  supportingScripture?: {
    verse: string
    reference: string
  }
  image?: string
}

export const armory: Relic[] = [
  {
    slug: "jesus-is-an-healer",
    relic: "Jesus Is An Healer",
    song: "Jesus Is An Healer",
    scripture: "He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.",
    reference: "1 Peter 2:24 ESV",
    primaryTheme: "Healing", // ← ONLY shows under Healing
    themes: ["Redemption", "Grace"], // ← Secondary tags for search/filter later
    declaration: "I am healed by His wounds",
    reflection: "Your authentic testimony here...", // ← Real or delete
    testimony: "2023 — ICU. Flatlined. Jesus.", // ← Confirm Real or Fiction
    subtitle: "The healing anthem",
    image: "/images/relics/healer.jpg"
  },
  {
    slug: "war-cry",
    relic: "War Cry",
    song: "War Cry",
    scripture: "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.",
    reference: "Zephaniah 3:17 ESV",
    primaryTheme: "Spiritual Warfare", // ← ONLY shows under Spiritual Warfare
    themes: ["Calling", "Christ the King"], // ← Secondary
    declaration: "The Lord fights for me",
    reflection: "Your authentic testimony here...",
    subtitle: "Battle anthem"
  }
]
