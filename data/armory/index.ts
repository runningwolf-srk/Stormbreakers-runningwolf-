import { callingRelics } from "./calling"
import { warfareRelics } from "./warfare"
import { worshipRelics } from "./worship"
import { legacyRelics } from "./legacy"

export const CANON_ORDER = [
  "first-song", "stormbreak", "awakening", "ashes-to-altar", "fire-forged",
  "psalm-23-rebuild", "wolf-fang", "identity-restored", "lions-roar",
  "wolf-blade", "thunder-drums", "war-cry", "ember-prayer",
  "tower-of-one", "running-wolf", "legacy"
]

export const CANON_LEDGER: Record<string, {num:string, status:string}> = {
  "wolf-fang": { num: "VII", status: "forged" },
  "wolf-blade": { num: "X", status: "forged" },
  "thunder-drums": { num: "XI", status: "in_progress" },
  "psalm-23-rebuild": { num: "VI", status: "seed" },
  "ember-prayer": { num: "XIII", status: "seed" },
}

export const ALL_RELICS = [...callingRelics, ...warfareRelics].filter(Boolean)
  .map(r => ({ ...r, num: CANON_LEDGER[r.slug]?.num || r.num, status: CANON_LEDGER[r.slug]?.status || r.status }))

export const CANON_PROGRESS = { forged: 2, inProgress: 1, unrevealed: 13, total: 16 }

export { callingRelics, warfareRelics, worshipRelics, legacyRelics }
