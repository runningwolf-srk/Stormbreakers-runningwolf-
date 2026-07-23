import { callingRelics } from "./calling"
import { warfareRelics } from "./warfare"

// Safe fallback for files that may not exist yet
let worshipRelics: any[] = []
let legacyRelics: any[] = []
try { 
  // @ts-ignore
  worshipRelics = require("./worship").worshipRelics || [] 
} catch {}
try { 
  // @ts-ignore
  legacyRelics = require("./legacy").legacyRelics || [] 
} catch {}

export const ALL_RELICS = [
  ...(callingRelics || []),
  ...(warfareRelics || []),
  ...(worshipRelics || []),
  ...(legacyRelics || [])
].filter(Boolean)

export { callingRelics, warfareRelics, worshipRelics, legacyRelics }
