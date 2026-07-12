// data/armory/index.ts
import { healingRelics } from './healing'
import { callingRelics } from './calling'
import { warfareRelics } from './warfare'
import { fireRelics } from './fire'
import { kingshipRelics } from './kingship'
import { worshipRelics } from './worship'
import { redemptionRelics } from './redemption'

export type Relic = {
  slug: string
  relic: string
  song: string
  scripture: string
  reference: string
  youtube?: string
  declaration: string
  reflection: string
  testimony?: string
  subtitle?: string
  primaryTheme: "Healing" | "Calling" | "Spiritual Warfare" | "Redemption" | "Worship" | "Kingship" | "Fire"
  themes: string[]
  image?: string
}

// THIS LINE IS CRITICAL - it exports 'armory'
export const armory: Relic[] = [
  ...healingRelics,
  ...callingRelics,
  ...warfareRelics,
  ...fireRelics,
  ...kingshipRelics,
  ...worshipRelics,
  ...redemptionRelics,
];
