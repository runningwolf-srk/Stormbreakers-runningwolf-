export type Relic = {
  slug: string
  title: string
  relic: string
  song: string
  image: string
  theme: string
  primaryTheme: "Healing" | "Calling" | "Kingship" | "Redemption" | "Warfare" | "Worship" | "Fire"
  themes: string[]
  description: string
  declaration: string
  reflection: string
  testimony?: string
  subtitle?: string
  scripture: string
  scriptureRef: string
  reference: string
  lyrics: string
  songTitle: string
  youtube?: string
  spotify?: string
  appleMusic?: string
}
