// data/armory/redemption.ts
import { Relic } from './index'

export const redemptionRelics: Relic[] = [
  {
    slug: "redeemed",
    title: "REDEEMED",  // <- changed from 'relic' to 'title'
    image: "/745084838_1001219686021311_1916319848324847956_n.webp",
    theme: "Redemption", // <- changed from 'primaryTheme' to 'theme'
    description: "I am not who I was. I am redeemed. Chains broken. Shame gone.", // <- added this, required
    scriptureRef: "Galatians 2:20", // <- changed from 'reference' to 'scriptureRef'
    lyrics: "Redeemed" // <- moved 'song' to 'lyrics' since that's in the interface
  },
  {
    slug: "psalm-23",
    title: "Psalm 23", // <- changed from 'relic' to 'title'
    image: "/746041529_1537131647892441_8063471234567890123_n.webp",
    theme: "Shepherd", // <- changed from 'primaryTheme' to 'theme'
    description: "I shall not want. I fear no evil. The Shepherd King walks with me.", // <- added this, required
    scriptureRef: "Psalm 23:1",
    lyrics: "Psalm 23"
  }
];
