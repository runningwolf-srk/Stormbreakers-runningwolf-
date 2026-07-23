import { callingRelics } from "./calling"
import { warfareRelics } from "./warfare"

export const ALL_RELICS = [
  ...(callingRelics || []),
  ...(warfareRelics || [])
].filter(Boolean)

// Permanent ledger — no relic ever overwrites forged
export const FORGED = ["wolf-fang","wolf-blade"]
export const ACTIVE_FORGE = "thunder-drums"
export const SEEDS_ASSIGNED = {
  psalm23: "VI - psalm-23-rebuild - Worship - NOT X",
  emberPrayer: "XIII - ember-prayer - Worship - NOT VII"
}

export const worshipRelics: any[] = []
export const legacyRelics: any[] = []
export { callingRelics, warfareRelics }
