export type Scripture = {
  ref: string
  text: string
  relics: string[] // slugs from data/armory.ts
  chapters: string[] // slugs from data/chronicles.ts
}

export type Theme = {
  slug: string
  title: string
  icon: string
  scriptures: Scripture[]
}

export const themes: Theme[] = [
  {
    slug: 'healing',
    title: 'Healing',
    icon: '❤️',
    scriptures: [
      {
        ref: 'Isaiah 53:5',
        text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
        relics: ['jesus-is-an-healer'],
        chapters: ['the-valley']
      },
      {
        ref: 'Psalm 147:3',
        text: 'He heals the brokenhearted and binds up their wounds.',
        relics: ['jesus-is-an-healer'],
        chapters: ['the-valley']
      },
      {
        ref: 'Jeremiah 17:14',
        text: 'Heal me, O Lord, and I will be healed; save me and I will be saved, for you are the one I praise.',
        relics: [],
        chapters: ['the-valley', 'the-journey']
      }
    ]
  },
  {
    slug: 'calling',
    title: 'Calling',
    icon: '📣',
    scriptures: [
      {
        ref: 'Romans 11:29',
        text: 'For the gifts and the calling of God are irrevocable.',
        relics: ['running-wolf'],
        chapters: ['the-encounter']
      },
      {
        ref: 'Jeremiah 1:5',
        text: 'Before I formed you in the womb I knew you, before you were born I set you apart.',
        relics: ['running-wolf'],
        chapters: ['the-encounter']
      }
    ]
  },
  {
    slug: 'spiritual-warfare',
    title: 'Spiritual Warfare',
    icon: '⚔️',
    scriptures: [
      {
        ref: 'Joel 2:1',
        text: 'Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble.',
        relics: [],
        chapters: ['the-armory', 'the-battle']
      },
      {
        ref: 'Ephesians 6:11',
        text: 'Put on the full armor of God, so that you can take your stand against the devil’s schemes.',
        relics: [],
        chapters: ['the-armory']
      }
    ]
  }
]
