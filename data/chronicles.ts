// data/chronicles.ts
// Chronicles = your testimony chapters. Each chapter links to Scriptures + Relics.

export interface Chronicle {
  id: number
  title: string
  slug: string
  subtitle: string       // <- add this line
  summary: string
  percentComplete: number
  relicSlug: string        // for Chronicles page
  relatedScriptures: string[] 
  relatedRelics: string[]     // for The Word page
}

export const chronicles: Chronicle[] = [
  {
    id: 1,
    title: "Chapter 1: The Shepherd King",
    slug: "chapter-1",
    subtitle: "When the valley becomes a throne room", // <- add this
    summary: "Psalm 23 wasn't poetry anymore. It was a map.",
    percentComplete: 100,
    relicSlug: "shepherd-king",
    relatedScriptures: ["psalm-23"],
    relatedRelics: ["shepherd-king", "royal-relic"],
  },
  {
    id: 2,
    title: "Chapter 2: The Fire That Never Goes Out",
    slug: "chapter-2",
    subtitle: "Leviticus 6:13 in the 21st century", // <- add this
    summary: "This is not Scripture. This is my story.",
    percentComplete: 50,
    relicSlug: "eternal-fire",
    relatedScriptures: ["leviticus-6-13"],
    relatedRelics: ["eternal-fire", "spirit-mantle"],
  },
  {
    id: 3,
    title: "Chapter 3: Thunder Drums",
    slug: "chapter-3", 
    subtitle: "Worship as warfare", // <- add this
    summary: "Warfare worship broke chains I couldn't see.",
    percentComplete: 25,
    relicSlug: "thunder-drums",
    relatedScriptures: ["2-corinthians-10-4"],
    relatedRelics: ["thunder-drums"],
  },
  {
    id: 4,
    title: "Chapter 4: REDEEMED",
    slug: "chapter-4",
    subtitle: "The cross is not theory", // <- add this
    summary: "Chains fell. The cross was not theory.",
    percentComplete: 25,
    relicSlug: "redeemed",
    relatedScriptures: ["galatians-5-1"],
    relatedRelics: ["redeemed"],
  },
]

export const chapters = chronicles
export default chronicles
