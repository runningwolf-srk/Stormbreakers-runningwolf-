// lib/constants.ts — FULL PERFECT CODE - READY FOR VERCEL
export interface TrackIdentity {
  id: number
  musicalIdentity: string
  scene: string
  relicSlug?: string
  description?: string
}

export const TRACK_IDENTITIES: TrackIdentity[] = [
  { id: 1, musicalIdentity: "WORSHIP", scene: "Throne Room", relicSlug: "psalm-23", description: "Intimacy, reverence, the King enthroned" },
  { id: 2, musicalIdentity: "BATTLE ANTHEM", scene: "Battlefield", relicSlug: "thunder-drums", description: "Warfare, breakthrough, thunder of God" },
  { id: 3, musicalIdentity: "CINEMATIC", scene: "Epic Journey", relicSlug: "running-wolf-blade", description: "Calling, destiny, sent one" },
  { id: 4, musicalIdentity: "REDEMPTION", scene: "Altar", relicSlug: "redeemed", description: "Grace, exchange, blood bought" },
  { id: 5, musicalIdentity: "FIRE", scene: "Refiners Fire", relicSlug: "eternal-fire", description: "Purification, passion, Holy Ghost fire" },
  { id: 6, musicalIdentity: "HEALING", scene: "Healing Room", relicSlug: "im-on-fire", description: "Restoration, scars that preach" },
  { id: 7, musicalIdentity: "ANOINTING", scene: "Upper Room", relicSlug: "spirit-mantle", description: "The anointing you can't take off" },
  { id: 8, musicalIdentity: "IDENTITY", scene: "Commission", relicSlug: "wolf-fang", description: "Sonship, sent, marked" },
  { id: 9, musicalIdentity: "KINGSHIP", scene: "Throne", relicSlug: "royal-relic", description: "Royalty, authority, crown" },
  { id: 10, musicalIdentity: "WILDERNESS", scene: "Desert", relicSlug: "running-wolf", description: "Testing, proving, running" },
]

export const SITE_NAME = "Stormbreakers"
export const ARTIST_NAME = "RunningWolf"
export const ARTIST_TAGLINE = "Stormbreakers - The Sound of the Sent One"

// For any page that imports { musicalIdentities } or { trackIdentities }
export const musicalIdentities = TRACK_IDENTITIES
export const trackIdentities = TRACK_IDENTITIES

export default TRACK_IDENTITIES
