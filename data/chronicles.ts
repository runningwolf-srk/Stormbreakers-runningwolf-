// data/chronicles.ts
// Chronicles = your testimony chapters. Each chapter links to Scriptures + Relics.

export interface Chronicle {
  id: number
  title: string
  slug: string
  subtitle: string
  summary: string
  content: string        // <- add this line for the full chapter text
  percentComplete: number
  relicSlug: string
  relatedScriptures: string[] 
  relatedRelics: string[]
}

export const chronicles: Chronicle[] = [
  {
    id: 1,
    title: "Chapter 1: The Shepherd King",
    slug: "chapter-1",
    subtitle: "When the valley becomes a throne room",
    summary: "Psalm 23 wasn't poetry anymore. It was a map.",
    content: `
This is not Scripture. This is my story.

Psalm 23 wasn't poetry anymore. It was a map.

I was in the valley. Bills stacked. Fear loud. Future unclear. 
But the Shepherd didn’t leave. He led me beside still waters when my mind was anything but still.

The rod and staff — correction and direction. Both love. Both necessary.

He prepared a table before me in the presence of my enemies: debt, doubt, depression. 
I sat down. I ate. 

Goodness and mercy didn’t follow at a distance. They chased me down.

That’s when I understood: David wasn’t writing a psalm. He was writing a field manual for surviving the night.
    `, // <- add your full chapter text here
    percentComplete: 100,
    relicSlug: "shepherd-king",
    relatedScriptures: ["psalm-23"],
    relatedRelics: ["shepherd-king", "royal-relic"],
  },
  {
    id: 2,
    title: "Chapter 2: The Fire That Never Goes Out",
    slug: "chapter-2",
    subtitle: "Leviticus 6:13 in the 21st century",
    summary: "This is not Scripture. This is my story.",
    content: `
This is not Scripture. This is my story.

Leviticus 6:13 says "The fire shall ever be burning upon the altar; it shall never go out."

I used to think that was about temple duty. Until my altar was my car. My kitchen floor. 
My 2am prayers when everything else was dark.

The fire is worship. The fire is prayer. The fire is obedience when you don’t feel it.

Keep the fire burning. Not the hype. The altar.
    `,
    percentComplete: 50,
    relicSlug: "eternal-fire",
    relatedScriptures: ["leviticus-6-13"],
    relatedRelics: ["eternal-fire", "spirit-mantle"],
  },
  {
    id: 3,
    title: "Chapter 3: Thunder Drums",
    slug: "chapter-3", 
    subtitle: "Worship as warfare",
    summary: "Warfare worship broke chains I couldn't see.",
    content: `
This is not Scripture. This is my story.

2 Corinthians 10:4 — "For the weapons of our warfare are not carnal, but mighty through God..."

I learned drums before I learned deliverance. 

But one night, worship stopped being a song and became a weapon. 
Chains I couldn't see started breaking. Atmospheres shifted. 

Thunder Drums isn't a band name. It's what happens when heaven invades through sound.
    `,
    percentComplete: 25,
    relicSlug: "thunder-drums",
    relatedScriptures: ["2-corinthians-10-4"],
    relatedRelics: ["thunder-drums"],
  },
  {
    id: 4,
    title: "Chapter 4: REDEEMED",
    slug: "chapter-4",
    subtitle: "The cross is not theory",
    summary: "Chains fell. The cross was not theory.",
    content: `
This is not Scripture. This is my story.

Galatians 5:1 — "Stand fast therefore in the liberty wherewith Christ hath made us free..."

REDEEMED was a word before it was my reality. 

Shame had a voice. Addiction had a grip. Religion had rules. 

Then the cross. Not as doctrine. As deliverance.

The chains in the artwork are real. They were mine. 
Now they’re broken. 

That’s why I raise my hands. Not because I’m good. Because He is.
    `,
    percentComplete: 25,
    relicSlug: "redeemed",
    relatedScriptures: ["galatians-5-1"],
    relatedRelics: ["redeemed"],
  },
]

export const chapters = chronicles
export default chronicles
