// data/scripture/index.ts
export type Scripture = {
  reference: string;
  theme: string;
  text: string;
  context?: string;
  slug: string;
  connectedRelics?: string[]; // ← add
  connectedChapters?: number[]; // ← add
}

export * from './healing'
export * from './redemption'
export * from './kingship'
export * from './warfare'
export * from './calling'
export * from './fire'
export * from './worship'

export const allScriptures: Scripture[] = [
  // spread all your theme arrays here
];
