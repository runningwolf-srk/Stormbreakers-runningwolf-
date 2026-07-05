export type Song = {
  id: string;              // "the-first-flame"
  slug: string;            // matches route
  relicId: string;         // "first-flame" ← LINKS TO RELIC
  title: string;           // "The First Flame"
  youtubeId?: string;      // Primary source
  audioUrl?: string;       // MP3 fallback
  ambientUrl?: string;     // Storm/fire bed
  duration: number;
  scripture: { text: string; ref: string };
  declaration: string;     // "battle transmission"
  meaning: string;         // story behind it
  hasAudio: boolean;       // false = SilentRelicView
};
