import { callingRelics } from "./calling"
import { warfareRelics } from "./warfare"
import { worshipRelics } from "./worship"
import { legacyRelics } from "./legacy"

export const ALL_RELICS = [...callingRelics, ...warfareRelics, ...worshipRelics, ...legacyRelics].filter(Boolean)

export const CANON_PROGRESS = {
  forged: 2,
  inProgress: 1,
  unrevealed: 13,
  total: 16
}

export { callingRelics, warfareRelics, worshipRelics, legacyRelics }
