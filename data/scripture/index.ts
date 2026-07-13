// data/scripture/index.ts
// Central export for all Scripture themes

export interface Scripture {
  slug: string
  reference: string
  theme: string
  text: string
  context: string
  relatedRelics?: string[]
  relatedChapters?: number[]
}

// Import all theme files
import { healingScriptures } from './healing'
import { redemptionScriptures } from './redemption' 
import { kingshipScriptures } from './kingship'
import { callingScriptures } from './calling'
import { fireScriptures } from './fire'

// Combine into one array for The Word page
export const allScriptures: Scripture[] = [
  ...healingScriptures,
  ...redemptionScriptures,
  ...kingshipScriptures,
  ...callingScriptures,
  ...fireScriptures,
]

export default allScriptures
