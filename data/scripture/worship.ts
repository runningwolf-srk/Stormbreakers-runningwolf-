// data/scripture/worship.ts
import { Scripture } from './index'

export const worshipScriptures: Scripture[] = [
  {
    slug: "psalm-95-6",
    reference: "Psalm 95:6",
    theme: "Worship",
    text: "Come, let us bow down in worship, let us kneel before the Lord our Maker.",
    context: "A call to humble worship before God.",
    relatedRelics: ["shepherd-king"],
    relatedChapters: [1]
  },
  {
    slug: "john-4-24",
    reference: "John 4:24", 
    theme: "Worship",
    text: "God is spirit, and his worshipers must worship in the Spirit and in truth.",
    context: "Jesus defining true worship to the Samaritan woman.",
    relatedRelics: ["redeemed"],
    relatedChapters: [2]
  },
  {
    slug: "romans-12-1",
    reference: "Romans 12:1",
    theme: "Worship",
    text: "Offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.",
    context: "Paul defines worship as whole-life surrender.",
    relatedRelics: ["redeemed"],
    relatedChapters: [1, 4]
  }
];
