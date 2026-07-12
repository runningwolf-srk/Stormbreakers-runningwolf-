// data/armory/index.ts
import { fireRelics } from './fire'

// Export the type so RelicCard.tsx can import it
export type Relic = {
  slug: string;
  relic: string;
  song: string;
  scripture: string;
  reference: string;
  primaryTheme: string;
  themes: string[];
  declaration: string;
  reflection: string;
  testimony: string;
  subtitle: string;
  youtube: string;
  image: string;
}

// Only import files that exist. Comment out the rest for now.
export const armory: Relic[] = [
 ...fireRelics,
  //...callingRelics,
  //...healingRelics,
];
