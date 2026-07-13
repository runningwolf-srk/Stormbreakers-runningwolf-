// data/chronicles.ts
// Chronicles = your testimony chapters. Each chapter links to Scriptures + Relics.

export interface Chronicle {
  id: number
  title: string
  slug: string
  summary: string
  percentComplete: number
  relatedScriptures: string[] // slugs from data/scripture.ts
  relatedRelics: string[]     // slugs from data/armory/*.ts
}

export const chronicles: Chronicle[] = [
  {
    id: 1,
    title: "Chapter 1: The Shepherd King",
    slug: "chapter-1",
    summary: "Psalm 23 wasn't poetry anymore. It was a map.",
    percentComplete: 100,
    relatedScriptures: ["psalm-23"],
    relatedRelics: ["shepherd-king", "royal-relic"],
  },
  {
    id: 2,
    title: "Chapter 2: The Fire That Never Goes Out",
    slug: "chapter-2",
    summary: "This is not Scripture. This is my story.",
    percentComplete: 50,
    relatedScriptures: ["leviticus-6-13"],
    relatedRelics: ["eternal-fire", "spirit-mantle"],
  },
  {
    id: 3,
    title: "Chapter 3: Thunder Drums",
    slug: "chapter-3", 
    summary: "Warfare worship broke chains I couldn't see.",
    percentComplete: 25,
    relatedScriptures: ["2-corinthians-10-4"],
    relatedRelics: ["thunder-drums"],
  },
  {
    id: 4,
    title: "Chapter 4: REDEEMED",
    slug: "chapter-4",
    summary: "Chains fell. The cross was not theory.",
    percentComplete: 25,
    relatedScriptures: ["galatians-5-1"],
    relatedRelics: ["redeemed"],
  },
]

export default chronicles
