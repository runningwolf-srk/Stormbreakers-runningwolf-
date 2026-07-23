export interface Relic {
  slug: string
  title: string
  num: string
  category: string
  status: "forged" | "in_progress" | "seed" | "unrevealed"
  scripture: string
  sound: string
  soundNotes?: string
  hook: string
  lyrics: string
  chronicle: string
  wordStudy: string
  walk: string
  practice: string
  image: string
  artwork?: string
  audio?: string
  youtube?: string
}
