// lib/constants.ts — FINAL v3 — FIXES BIBLE + id ERROR
import { allRelics as armoryRelics } from '@/data/armory'

// CANON needs both `id` and `slug` because your [id] page uses.id
export const CANON = armoryRelics.map((relic, index) => ({
  id: index + 1, // so you can do.find(x => x.id === Number(params.id))
 ...relic,
  // make sure slug exists
  slug: relic.slug || `relic-${index + 1}`,
}))

// This is what app/layout.tsx and scripture-policy page wants
export const BIBLE = {
  translation: "ESV",
  policy: "All scripture references are from the ESV Bible unless otherwise noted. Used by permission.",
  version: "ESV",
  verses: CANON.map(r => ({ ref: r.scriptureRef, text: r.description })),
}

// This is what components/Nav.tsx wants
export const STYLE = {
  primary: "#000000",
  secondary: "#FFD700",
  background: "#0a0a0a",
  gold: "#FFD700",
  fire: "#FF4500",
}

export interface TrackIdentity {
  id: number
  musicalIdentity: string
  scene: string
  relicSlug?: string
}

export const TRACK_IDENTITIES: TrackIdentity[] = [
  { id: 1, musicalIdentity: "WORSHIP", scene: "Throne Room", relicSlug: "psalm-23" },
  { id: 2, musicalIdentity: "BATTLE ANTHEM", scene: "Battlefield", relicSlug: "thunder-drums" },
  { id: 3, musicalIdentity: "CINEMATIC", scene: "Epic", relicSlug: "running-wolf-blade" },
]

export const SITE_NAME = "Stormbreakers"
export const ARTIST_NAME = "RunningWolf"
export const musicalIdentities = TRACK_IDENTITIES
export const trackIdentities = TRACK_IDENTITIES

export default CANON
