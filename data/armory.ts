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
  themes: string[] // ← NEW: for filtering in The Word
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
    youtube: "https://youtu.be/REPLACE_WITH_REAL_ID",
    declaration: "I am healed by His wounds",
    reflection: "2023. ICU. Machines beeping. Doctors said 'prepare.' I couldn't breathe. But I could whisper: 'Jesus.' Flatlined for 8 seconds. He brought me back. Not just breathing—healed. Every scar is a testimony. Every breath is worship. This song was born in that hospital room. By His wounds, I am healed.",
    testimony: "2023 — ICU. Flatlined. Jesus.",
    subtitle: "The healing anthem",
    themes: ["Healing", "Redemption", "Grace"],
    image: "/images/relics/healer.jpg"
  },
  {
    slug: "war-cry",
    relic: "War Cry",
    song: "War Cry",
    scripture: "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.",
    reference: "Zephaniah 3:17",
    youtube: "",
    declaration: "The Lord fights for me",
    reflection: "The enemy came at midnight. Fear, addiction, shame. Three years I warred in silence. Then Zephaniah 3:17 hit me: 'The Lord your God is in your midst, a mighty one who will save.' I stopped fighting FOR victory. I started fighting FROM victory. This war cry isn't rage—it's worship. It's the sound of a son who knows his Father fights.",
    subtitle: "Battle anthem",
    themes: ["Spiritual Warfare", "Calling", "Christ the King"]
  }
]
