// data/armory/index.ts
// Central export for all Relic themes

export interface Relic {
  slug: string
  title: string
  image: string
  theme: string
  description: string
  scriptureRef?: string
  lyrics?: string
}

// Import all theme files
import { kingshipRelics } from './kingship'
import { redemptionRelics } from './redemption'
import { healingRelics } from './healing'
import { fireRelics } from './fire'
import { callingRelics } from './calling'

// Combine into one array for The Word page + Armory page
export const allRelics: Relic[] = [
  ...kingshipRelics,
  ...redemptionRelics,
  ...healingRelics,
  ...fireRelics,
  ...callingRelics,
]

export default allRelics
