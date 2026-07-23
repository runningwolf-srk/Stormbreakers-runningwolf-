import { callingRelics } from "./calling"
import { warfareRelics } from "./warfare"
import { worshipRelics } from "./worship"
import { legacyRelics } from "./legacy"

export const ALL_RELICS = [
  ...(callingRelics || []),
  ...(warfareRelics || []),
  ...(worshipRelics || []),
  ...(legacyRelics || [])
].filter(Boolean)

// Also export for chronicles page if needed
export { callingRelics, warfareRelics, worshipRelics, legacyRelics }
