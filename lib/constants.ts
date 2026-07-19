// lib/constants.ts - FINAL FULL CODE - FIXES BOTH ERRORS
import { allRelics } from '@/data/armory'

// This is what app/armory/[id]/page.tsx wants
export const CANON = allRelics

// This is what components/Nav.tsx wants
export const STYLE = {
  primary: "#000000",
  secondary: "#FFD700",
  background: "#0a0a0a",
  gold: "#FFD700",
  fire: "#FF4500",
}

// Your track identities (from before, now valid)
export interface TrackIdentity {
  id: number
  musicalIdentity: string
  scene: string
  relicSlug?: string
  description?: string
}

export const TRACK_IDENTITIES: TrackIdentity[] = [
  { id: 1, musicalIdentity: "WORSHIP", scene: "Throne Room", relicSlug: "psalm-23" },
  { id: 2, musicalIdentity: "BATTLE ANTHEM", scene: "Battlefield", relicSlug: "thunder-drums" },
  { id: 3, musicalIdentity: "CINEMATIC", scene: "Epic Journey", relicSlug: "running-wolf-blade" },
  { id: 4, musicalIdentity: "REDEMPTION", scene: "Altar", relicSlug: "redeemed" },
  { id: 5, musicalIdentity: "FIRE", scene: "Refiners Fire", relicSlug: "eternal-fire" },
  { id: 6, musicalIdentity: "HEALING", scene: "Healing Room", relicSlug: "im-on-fire" },
  { id: 7, musicalIdentity: "ANOINTING", scene: "Upper Room", relicSlug: "spirit-mantle" },
  { id: 8, musicalIdentity: "IDENTITY", scene: "Commission", relicSlug: "wolf-fang" },
  { id: 9, musicalIdentity: "KINGSHIP", scene: "Throne", relicSlug: "royal-relic" },
  { id: 10, musicalIdentity: "CALLING", scene: "Road", relicSlug: "running-wolf" },
]

export const SITE_NAME = "Stormbreakers"
export const ARTIST_NAME = "RunningWolf"

// Aliases so any old import name still works
export const musicalIdentities = TRACK_IDENTITIES
export const trackIdentities = TRACK_IDENTITIES
export const CONSTANTS = { CANON, STYLE, TRACK_IDENTITIES }

export default CANON
