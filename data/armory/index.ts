// data/armory/index.ts
import { fireRelics } from './fire'

// Add this type export - this fixes the build
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

export const armory: Relic[] = [
 ...fireRelics,
];
