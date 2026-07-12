// data/armory/index.ts
import { fireRelics } from './fire'

// Only import files that actually exist in /data/armory/
// Comment these out until you create the files:
// import { callingRelics } from './calling'
// import { healingRelics } from './healing'
// import { worshipRelics } from './worship'

export const armory = [
 ...fireRelics,
  //...callingRelics,
  //...healingRelics,
  //...worshipRelics,
];
