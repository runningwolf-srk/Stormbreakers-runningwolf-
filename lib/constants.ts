// lib/constants.ts - FINAL v6 - FIXES FLOW + act + symbol + BIBLE
import { allRelics as armoryRelics } from '@/data/armory'

export const CANON = armoryRelics.map((relic, index) => ({
  id: index + 1,
  act: (relic as any).act || Math.ceil((index + 1) / 3),
  chapter: (relic as any).chapter || index + 1,
  symbol: (relic as any).symbol || relic.slug,
  ...relic,
  slug: relic.slug || `relic-${index + 1}`,
}))

export const BIBLE = {
  translation: "ESV",
  version: "ESV",
  policy: "All scripture from ESV.",
  verses: CANON.map(r => ({ ref: r.scriptureRef, text: r.description })),
}

export const STYLE: any = {
  primary: "#000000",
  secondary: "#FFD700",
  background: "#0a0a0a",
  gold: "#FFD700",
  fire: "#FF4500",
  FLOW: "flex flex-col gap-6",
  GRID: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  CARD: "bg-zinc-900 border border-zinc-800 rounded-xl p-6",
  TITLE: "text-4xl font-bold tracking-tight",
  SUBTITLE: "text-amber-400 tracking-widest uppercase text-sm",
}

export const CHRONICLES = CANON

export const SITE_NAME = "Stormbreakers"
export const ARTIST_NAME = "RunningWolf"
export const TRACK_IDENTITIES = CANON
export const musicalIdentities = TRACK_IDENTITIES
export const trackIdentities = TRACK_IDENTITIES
export default CANON
