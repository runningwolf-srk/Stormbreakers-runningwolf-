export * from './redemption'
export * from './kingship'
export * from './warfare'
export * from './fire'
export * from './calling'

import { redemptionRelics } from './redemption'
import { kingshipRelics } from './kingship'
import { warfareRelics } from './warfare'
import { fireRelics } from './fire'
import { callingRelics } from './calling'

export const allRelics = [
  ...redemptionRelics,
  ...kingshipRelics,
  ...warfareRelics,
  ...fireRelics,
  ...callingRelics,
];

export const armory = allRelics; // ← The Word imports this
export { Relic } from './types'; // if you have a types file
