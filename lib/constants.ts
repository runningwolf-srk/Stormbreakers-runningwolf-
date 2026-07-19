import { allRelics as armoryRelics } from '@/data/armory'

export const CANON: any = armoryRelics.map((relic: any, index: number) => ({
  id: index + 1,
  act: relic.act || Math.ceil((index + 1) / 3),
  symbol: relic.symbol || relic.slug,
  ...relic,
  slug: relic.slug || `relic-${index + 1}`,
}))

export const CHRONICLES: any = CANON
export const BIBLE: any = { translation:"ESV", version:"ESV", policy:"ESV", verses:[] }
export const STYLE: any = {
  primary:"#000", secondary:"#FFD700", background:"#0a0a0a", gold:"#FFD700", fire:"#FF4500",
  FLOW:"flex flex-col gap-6", GRID:"grid grid-cols-1 md:grid-cols-3 gap-6", CARD:"bg-zinc-900 border border-zinc-800 rounded-xl p-6",
  TITLE:"text-4xl font-bold", SUBTITLE:"text-amber-400 uppercase text-sm tracking-widest"
}
export const SITE_NAME="Stormbreakers"
export const ARTIST_NAME="RunningWolf"
export const TRACK_IDENTITIES=CANON
export const musicalIdentities=CANON
export const trackIdentities=CANON
export default CANON
