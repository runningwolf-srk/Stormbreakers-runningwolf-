export type Relic = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  youtubeId: string;
  scripture: string;
  prophecy: string;
};

export const RELICS: Relic[] = [
  {
    id: 'horn-of-war',
    title: 'HORN OF WAR',
    subtitle: 'RELIC 01',
    cover: '/covers/horn-of-war.webp',
    youtubeId: 'dQw4w9WgXcQ',
    scripture: 'Joel 2:1',
    prophecy: 'Blow the trumpet in Zion, sound the alarm on my holy hill.'
  },
  {
    id: 'iron-collide',
    title: 'IRON COLLIDE',
    subtitle: 'RELIC 02',
    cover: '/covers/iron-collide.webp',
    youtubeId: 'dQw4w9WgXcQ',
    scripture: 'Proverbs 27:17',
    prophecy: 'As iron sharpens iron, so one person sharpens another.'
  },
  {
    id: 'iron-collide-worship',
    title: 'IRON COLLIDE [WORSHIP]',
    subtitle: 'RELIC 03',
    cover: '/covers/iron-collide-worship.webp',
    youtubeId: 'dQw4w9WgXcQ',
    scripture: 'Psalm 29:1',
    prophecy: 'Ascribe to the Lord, you heavenly beings, ascribe to the Lord glory and strength.'
  },
  {
    id: 'blood-of-cross',
    title: 'BLOOD OF THE CROSS',
    subtitle: 'RELIC 04',
    cover: '/covers/blood-of-cross.webp',
    youtubeId: 'dQw4w9WgXcQ',
    scripture: 'Colossians 1:20',
    prophecy: 'Through him to reconcile to himself all things, making peace by his blood.'
  },
  {
    id: 'heaven-calling',
    title: 'HEAVEN CALLING',
    subtitle: 'RELIC 05',
    cover: '/covers/heaven-calling.webp',
    youtubeId: 'dQw4w9WgXcQ',
    scripture: 'Philippians 3:14',
    prophecy: 'I press on toward the goal for the prize of the upward call of God in Christ Jesus.'
  },
  {
    id: 'im-on-fire',
    title: "I'M ON FIRE",
    subtitle: 'RELIC 06',
    cover: '/covers/im-on-fire.webp',
    youtubeId: 'dQw4w9WgXcQ',
    scripture: 'Leviticus 6:13',
    prophecy: 'The fire must be kept burning on the altar continuously; it must not go out.'
  },
  {
    id: 'spiritual-journey',
    title: 'SPIRITUAL JOURNEY',
    subtitle: 'RELIC 07',
    cover: '/covers/spiritual-journey.webp',
    youtubeId: 'dQw4w9WgXcQ',
    scripture: '2 Corinthians 5:7',
    prophecy: 'For we live by faith, not by sight.'
  }
];

// ADD THESE 2 FUNCTIONS TO FIX YOUR ERROR
export function getRelicBySlug(slug: string): Relic | undefined {
  return RELICS.find(relic => relic.id === slug);
}

export function getAdjacentRelics(slug: string) {
  const index = RELICS.findIndex(relic => relic.id === slug);
  const prev = index > 0 ? RELICS[index - 1] : null;
  const next = index < RELICS.length - 1 ? RELICS[index + 1] : null;
  return { prev, next };
}

export const relics = RELICS; // alias for old code
