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
  subtitle?: string  // ← ADD THIS LINE
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
    reference: "1 Peter 2:24",
    youtube: "",
    declaration: "I am healed by His wounds",
    reflection: "Add your testimony for this song here.",
    testimony: "2023 — ICU. Flatlined. Jesus.",
    subtitle: "The healing anthem"  // ← ADD THIS TO EACH RELIC
  }
]
