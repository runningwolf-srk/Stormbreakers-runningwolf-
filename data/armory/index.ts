export type Relic = { slug: string; num: string; title: string; chronicle: string; verse: string }

export const ALL_RELICS: Relic[] = [
  { slug: "helm-salvation", num: "01", title: "HELM OF SALVATION", chronicle: "The mind covered by Christ. The enemy cannot sow doubt where salvation is sealed.", verse: "Eph 6:17" },
  { slug: "breastplate-righteousness", num: "02", title: "BREASTPLATE OF RIGHTEOUSNESS", chronicle: "Guard your heart. Righteousness not earned but imputed.", verse: "Eph 6:14" },
  { slug: "sword-word", num: "03", title: "SWORD OF THE WORD", chronicle: "The only offensive weapon. The Word cuts, heals, and divides.", verse: "Heb 4:12" },
  { slug: "shield-faith", num: "04", title: "SHIELD OF FAITH", chronicle: "Quenches every fiery dart. Faith is not feeling, it's holding.", verse: "Eph 6:16" },
]

export const CANON_ORDER = ALL_RELICS.map(r => r.slug)
export const CANON_PROGRESS = { total: ALL_RELICS.length, unlocked: ALL_RELICS.length }
