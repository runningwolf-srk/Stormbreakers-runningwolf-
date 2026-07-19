import { allRelics as armoryRelics } from '@/data/armory'

export const CANON = armoryRelics.map((relic, index) => ({
  id: index + 1,
  ...relic,
  slug: relic.slug || `relic-${index + 1}`,
  symbol: relic.symbol || relic.slug || `relic-${index + 1}`,
}))

export const BIBLE = {
  translation: "ESV",
  version: "ESV",
  policy: "All scripture from ESV. Permission granted.",
  verses: CANON.map(r => ({ ref: r.scriptureRef, text: r.description })),
}

export const STYLE = {
  primary: "#000000",
  secondary: "#FFD700",
  background: "#0a0a0a",
  gold: "#FFD700",
  fire: "#FF4500",
}

export const SITE_NAME = "Stormbreakers"
export const ARTIST_NAME = "RunningWolf"
export const TRACK_IDENTITIES = CANON.map(r => ({ id: r.id, musicalIdentity: r.theme, scene: r.title, relicSlug: r.slug }))
export const musicalIdentities = TRACK_IDENTITIES
export const trackIdentities = TRACK_IDENTITIES
export default CANON
