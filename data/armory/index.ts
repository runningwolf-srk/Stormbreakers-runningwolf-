// data/armory/index.ts
export interface Relic {
  slug: string
  title: string
  image: string
  theme: string
  description: string
  scriptureRef?: string
  lyrics?: string
  youtube?: string
}

import { kingshipRelics } from './kingship'
import { redemptionRelics } from './redemption'
import { healingRelics } from './healing'
import { fireRelics } from './fire'
import { callingRelics } from './calling'
import { warfareRelics } from './warfare' // <- ADD THIS

export const allRelics: Relic[] = [
...kingshipRelics,
...redemptionRelics,
...healingRelics,
...fireRelics,
...callingRelics,
...warfareRelics, // <- ADD THIS
]

export const armory = allRelics
export default allRelics
