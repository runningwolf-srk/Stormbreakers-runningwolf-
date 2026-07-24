import { callingRelics } from "./calling"
import { warfareRelics } from "./warfare"
import { worshipRelics } from "./worship"
import { legacyRelics } from "./legacy"
export const ALL_RELICS_ORDERED = [...callingRelics, ...warfareRelics, ...worshipRelics, ...legacyRelics].filter(Boolean)
  .sort((a,b)=> a.slug.localeCompare(b.slug)) // will be replaced by canon order below
// Canon order: VII, X, XI
export const CANON_ORDER = ["wolf-fang","wolf-blade","thunder-drums"]
export const ALL_RELICS = CANON_ORDER.map(slug => [...callingRelics, ...warfareRelics].find(r=>r.slug===slug)!).filter(Boolean)
export const CANON_PROGRESS = { forged: 2, inProgress: 1, unrevealed: 13, total: 16 }
export { callingRelics, warfareRelics, worshipRelics, legacyRelics }
