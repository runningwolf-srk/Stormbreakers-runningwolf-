// data/armory.ts
export type Relic = { // <-- MUST HAVE "export" HERE
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
  relatedScriptures?: {
    verse: string
    reference: string
  }[]
  declaration: string
  reflection: string
  readingTime?: string
}

export const armory: Relic[] = [ // <-- AND "export" HERE
  //... your relics
]
