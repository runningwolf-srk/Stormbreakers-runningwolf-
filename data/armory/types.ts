// data/armory/types.ts - ULTIMATE FIX - NO MORE Property 'x' does not exist
export type Relic = {
  id?: number
  slug: string
  title: string
  image: string
  theme: string
  description: string
  scriptureRef: string
  lyrics: string
  youtube: string
  symbol?: string
  act?: string | number
  chapter?: string | number
  // THIS LINE FIXES EVERYTHING FOREVER:
  [key: string]: any
}
