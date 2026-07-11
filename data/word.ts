export type Scripture = {
  ref: string
  text: string
  relics: string[]
  chapters: string[]
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
    icon: '💧',
    scriptures: [
      {
        ref: 'Psalm 23:4',
        text: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.',
        relics: ['jesus-is-an-healer'],
        chapters: ['the-valley']
      },
      {
        ref: '1 Peter 2:24',
        text: 'He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.',
        relics: ['jesus-is-an-healer'],
        chapters: ['the-valley', 'the-journey']
      },
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
        chapters: ['the-valley', 'the-hope']
      }
    ]
  },
  {
    slug: 'calling',
    title: 'Calling',
    icon: '🔥',
    scriptures: [
      {
        ref: 'Jeremiah 1:5',
        text: 'Before I formed you in the womb I knew you, before you were born I set you apart.',
        relics: ['running-wolf'],
        chapters: ['the-encounter']
      },
      {
        ref: 'Isaiah 6:8',
        text: 'Then I heard the voice of the Lord saying, "Whom shall I send?" And I said, "Here am I. Send me!"',
        relics: ['running-wolf'],
        chapters: ['the-commission']
      },
      {
        ref: 'Romans 8:28',
        text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
        relics: ['running-wolf'],
        chapters: ['the-encounter', 'the-journey']
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
        text: 'Blow the trumpet in Zion; sound the alarm on my holy hill.',
        relics: ['war-cry'],
        chapters: ['the-battle']
      },
      {
        ref: '2 Corinthians 10:4',
        text: 'The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds.',
        relics: ['war-cry'],
        chapters: ['the-battle']
      },
      {
        ref: 'Ephesians 6:11',
        text: 'Put on the full armor of God, so that you can take your stand against the devil’s schemes.',
        relics: ['war-cry'],
        chapters: ['the-armory', 'the-battle']
      }
    ]
  },
  {
    slug: 'kingship',
    title: 'Kingship',
    icon: '👑',
    scriptures: [
      {
        ref: 'Revelation 19:16',
        text: 'On his robe and on his thigh he has a name written, King of kings and Lord of lords.',
        relics: ['lord-of-lords'],
        chapters: ['the-commission', 'the-hope']
      },
      {
        ref: 'Philippians 2:10-11',
        text: 'At the name of Jesus every knee should bow... and every tongue confess that Jesus Christ is Lord.',
        relics: ['lord-of-lords'],
        chapters: ['the-witness']
      },
      {
        ref: 'Psalm 24:10',
        text: 'Who is this King of glory? The Lord of hosts, he is the King of glory!',
        relics: ['lord-of-lords'],
        chapters: ['the-battle']
      }
    ]
  }
]
