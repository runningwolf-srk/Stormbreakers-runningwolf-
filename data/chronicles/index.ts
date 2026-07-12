export type Chapter = {
  chapter: number;
  title: string;
  slug: string;
  content: string;
}

export const chronicles: Chapter[] = [
  {
    chapter: 1,
    title: "The Valley",
    slug: "chapter-1",
    content: "..."
  },
  // ...chapters 2-7
];
