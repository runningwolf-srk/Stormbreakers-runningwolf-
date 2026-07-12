export type Relic = {
  slug: string
  relic: string
  song: string
  scripture: string
  reference: string
  youtube?: string
  declaration: string
  reflection: string
  testimony?: string
  subtitle?: string
  primaryTheme: "Healing" | "Calling" | "Spiritual Warfare" | "Redemption" | "Worship" | "Kingship" | "Fire"
  themes: string[]
  image?: string
}
