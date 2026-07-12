export type Scripture = {
  reference: string;
  theme: string;
  text: string;
  context?: string;
  slug: string;
  connectedRelics?: string[];
  connectedChapters?: number[];
}

export * from './healing'
export * from './redemption'
export * from './kingship'
export * from './warfare'
export * from './calling'
// export * from './fire'    // ← comment out until file exists
// export * from './worship' // ← comment out until file exists

import { healingScriptures } from './healing'
import { redemptionScriptures } from './redemption'
import { kingshipScriptures } from './kingship'
import { warfareScriptures } from './warfare'
import { callingScriptures } from './calling'
// import { fireScriptures } from './fire'       // ← comment out
// import { worshipScriptures } from './worship' // ← comment out

export const allScriptures: Scripture[] = [
  ...healingScriptures,
  ...redemptionScriptures,
  ...kingshipScriptures,
  ...warfareScriptures,
  ...callingScriptures,
  // ...fireScriptures,    // ← comment out
  // ...worshipScriptures, // ← comment out
];
