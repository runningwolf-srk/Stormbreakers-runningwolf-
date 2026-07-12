// data/scripture/redemption.ts
import { Scripture } from './index'

export const redemptionScriptures: Scripture[] = [
  {
    slug: "galatians-2-20",
    reference: "Galatians 2:20",
    theme: "Redemption",
    text: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.",
    context: "Paul's declaration of new identity in Christ.",
    connectedRelics: ["redeemed"],
    connectedChapters: [1]
  },
  {
    slug: "psalm-23-1",
    reference: "Psalm 23:1",
    theme: "Redemption",
    text: "The Lord is my shepherd; I shall not want.",
    context: "David's song of trust in God's provision and protection.",
    connectedRelics: ["psalm-23"],
    connectedChapters: [1]
  },
  {
    slug: "romans-8-1",
    reference: "Romans 8:1",
    theme: "Redemption",
    text: "There is therefore now no condemnation for those who are in Christ Jesus.",
    context: "The verdict of grace for the redeemed.",
    connectedRelics: ["redeemed"],
    connectedChapters: [1, 2]
  }
];
