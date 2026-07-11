import { healingRelics } from './healing'
import { callingRelics } from './calling'
import { warfareRelics } from './warfare'
import { redemptionRelics } from './redemption'
import { worshipRelics } from './worship'
import { kingshipRelics } from './kingship'
import { fireRelics } from './fire'

export const armory = [
  ...healingRelics,
  ...callingRelics,
  ...warfareRelics,
  ...redemptionRelics,
  ...worshipRelics,
  ...kingshipRelics,
  ...fireRelics
]

export type { Relic } from './types'
