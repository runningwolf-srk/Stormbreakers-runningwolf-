// data/armory/index.ts
import { callingRelics } from './calling'
import { fireRelics } from './fire'
import { redemptionRelics } from './redemption'
import { kingshipRelics } from './kingship' // ← Added missing }
import { worshipRelics } from './worship'
import { warfareRelics } from './warfare'

export interface Relic {
  slug: string
  relic: string
  song: string
  scripture: string
  reference: string
  primaryTheme: string
  themes: string[]
  declaration: string
  reflection: string
  testimony: string
  subtitle: string
  youtube?: string
  image: string
}

export const allRelics: Relic[] = [
  ...callingRelics,
  ...fireRelics,
  ...redemptionRelics,
  ...kingshipRelics,
  ...worshipRelics,
  ...warfareRelics,
]

export const getRelicBySlug = (slug: string): Relic | undefined => {
  return allRelics.find(relic => relic.slug === slug)
}
