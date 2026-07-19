// data/armory/index.ts
export type { Relic } from './types'

import { kingshipRelics } from './kingship'
import { redemptionRelics } from './redemption'
import { healingRelics } from './healing'
import { fireRelics } from './fire'
import { callingRelics } from './calling'
import { warfareRelics } from './warfare'
import { worshipRelics } from './worship'

export const allRelics = [
  ...kingshipRelics,
  ...redemptionRelics,
  ...healingRelics,
  ...fireRelics,
  ...callingRelics,
  ...warfareRelics,
  ...worshipRelics,
]

export const armory = allRelics
export default allRelics
