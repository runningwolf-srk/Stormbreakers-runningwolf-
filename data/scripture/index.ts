// data/scripture/index.ts
// Central export for all Scripture themes

export interface Scripture {
  slug: string
  reference: string
  theme: string
  text: string
  context: string
  relatedRelics?: string[] // <- add this line
  relatedChapters?: number[] // <- add this line
}

// Import all theme files
import { healingScriptures } from './healing'
import { redemptionScriptures } from './redemption' 
import { kingshipScriptures } from './kingship'
import { callingScriptures } from './calling'
import { fireScriptures } from './fire'
// import { worshipScriptures } from './worship' // add when ready
// import { warfareScriptures } from './warfare' // add when ready

// Combine into one array for The Word page
export const allScriptures: Scripture[] = [
 ...healingScriptures,
 ...redemptionScriptures,
 ...kingshipScriptures,
 ...callingScriptures,
 ...fireScriptures,
]

export default allScriptures
