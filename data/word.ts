export type Scripture = {
  ref: string
  text: string
  relics: string[] // slugs from data/armory.ts
}

export type Theme = {
  slug: string
  title: string
  scriptures: Scripture[]
}

export const themes: Theme[] = [
  {
    slug: 'healing',
    title: 'Healing',
    scriptures: [
      {
        ref: 'Isaiah 53:5',
        text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
        relics: ['jesus-is-an-healer']
      },
      {
        ref: 'Psalm 103:2-3',
        text: 'Praise the Lord, my soul, and forget not all his benefits— who forgives all your sins and heals all your diseases',
        relics: ['jesus-is-an-healer']
      },
      {
        ref: 'James 5:14-15',
        text: 'Is anyone among you sick? Let them call the elders of the church to pray over them... And the prayer offered in faith will make the sick person well',
        relics: ['jesus-is-an-healer']
      }
    ]
  },
  {
    slug: 'calling',
    title: 'Calling',
    scriptures: [
      {
        ref: 'Jeremiah 1:5',
        text: 'Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.',
        relics: ['running-wolf']
      },
      {
        ref: 'Ephesians 2:10',
        text: 'For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
        relics: ['running-wolf']
      }
    ]
  },
  {
    slug: 'spiritual-warfare',
    title: 'Spiritual Warfare',
    scriptures: [
      {
        ref: 'Ephesians 6:11',
        text: 'Put on the full armor of God, so that you can take your stand against the devil’s schemes.',
        relics: ['armor-of-god']
      },
      {
        ref: '2 Corinthians 10:4',
        text: 'The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds.',
        relics: ['armor-of-god']
      }
    ]
  }
]
