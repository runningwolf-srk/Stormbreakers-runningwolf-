// data/chronicles/index.ts
export type Chapter = {
  chapter: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
}

export const chronicles: Chapter[] = [
  {
    chapter: 1,
    title: "The Valley",
    slug: "chapter-1",
    excerpt: "Psalm 23 wasn't poetry anymore. It was a map.",
    content: `
This is not Scripture. This is my story.

Psalm 23 wasn't poetry anymore. It was a map.

When I flatlined at 39...
[put your full Chapter 1 content here]
`
  },
  {
    chapter: 2,
    title: "The Breaking",
    slug: "chapter-2",
    excerpt: "God breaks what He’s building.",
    content: `
This is not Scripture. This is my story.

[Chapter 2 content here]
`
  },
  {
    chapter: 3,
    title: "The Armor",
    slug: "chapter-3", 
    excerpt: "Spirit Mantle was forged in warfare.",
    content: `
This is not Scripture. This is my story.

[Chapter 3 content here]
`
  }
  // Add chapters 4-7 as you write them
];
