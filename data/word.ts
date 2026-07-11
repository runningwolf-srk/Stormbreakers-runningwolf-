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
        relics: ['jesus-is-an-healer', 'blood-of-cross'],
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
        ref: 'Isaiah 49:2',
        text: 'He made my mouth like a sharp sword; in the shadow of his hand he hid me; he made me a polished arrow.',
        relics: ['running-wolf-blade'],
        chapters: ['the-commission', 'the-battle']
      },
      {
        ref: 'Hebrews 4:12',
        text: 'For the word of God is living and active, sharper than any two-edged sword.',
        relics: ['running-wolf-blade'],
        chapters: ['the-battle']
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
        relics: ['war-cry', 'horn-of-war'],
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
      },
      {
        ref: 'Numbers 10:9',
        text: 'When you go into battle in your own land against an enemy who is oppressing you, sound a blast on the trumpets.',
        relics: ['horn-of-war'],
        chapters: ['the-battle']
      },
      {
        ref: 'Proverbs 27:17',
        text: 'As iron sharpens iron, so one person sharpens another.',
        relics: ['iron-collide'],
        chapters: ['the-commission', 'the-battle']
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
        ref: 'Revelation 5:5-6',
        text: 'Behold, the Lion of the tribe of Judah, the Root of David, has conquered... Then I saw a Lamb standing, as though it had been slain.',
        relics: ['lion-and-lamb'],
        chapters: ['the-commission', 'the-witness']
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
  },
  {
    slug: 'worship',
    title: 'Worship',
    icon: '🙌',
    scriptures: [
      {
        ref: 'James 4:8',
        text: 'Draw near to God, and he will draw near to you.',
        relics: ['spiritual-journey'],
        chapters: ['the-journey']
      },
      {
        ref: 'Psalm 95:6',
        text: 'Oh come, let us worship and bow down; let us kneel before the Lord, our Maker!',
        relics: ['spiritual-journey'],
        chapters: ['the-journey', 'the-hope']
      },
      {
        ref: 'John 4:24',
        text: 'God is spirit, and those who worship him must worship in spirit and truth.',
        relics: ['spiritual-journey'],
        chapters: ['the-journey']
      }
    ]
  },
  {
    slug: 'redemption',
    title: 'Redemption',
    icon: '✨',
    scriptures: [
      {
        ref: 'Jeremiah 29:11',
        text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
        relics: ['heaven-calling'],
        chapters: ['the-journey', 'the-hope']
      },
      {
        ref: 'Ephesians 1:7',
        text: 'In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace.',
        relics: ['blood-of-cross'],
        chapters: ['the-journey']
      },
      {
        ref: 'Colossians 1:13-14',
        text: 'For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves, in whom we have redemption.',
        relics: ['blood-of-cross'],
        chapters: ['the-encounter', 'the-journey']
      },
      {
        ref: 'Isaiah 53:5',
        text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
        relics: ['blood-of-cross', 'jesus-is-an-healer'],
        chapters: ['the-valley', 'the-witness']
      }
    ]
  },
  {
    slug: 'fire',
    title: 'Fire',
    icon: '🔥',
    scriptures: [
      {
        ref: 'Galatians 2:20',
        text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.',
        relics: ['im-on-fire'],
        chapters: ['the-battle', 'the-witness']
      },
      {
        ref: 'Isaiah 43:2',
        text: 'When you walk through the fire, you will not be burned; the flames will not set you ablaze.',
        relics: ['im-on-fire'],
        chapters: ['the-valley', 'the-battle']
      },
      {
        ref: 'Daniel 3:25',
        text: 'Look! I see four men walking around in the fire, unbound and unharmed, and the fourth looks like a son of the gods.',
        relics: ['im-on-fire'],
        chapters: ['the-battle']
      },
      {
        ref: 'Hebrews 12:29',
        text: 'For our God is a consuming fire.',
        relics: ['eternal-fire'],
        chapters: ['the-battle', 'the-witness']
      },
      {
        ref: 'Leviticus 6:13',
        text: 'The fire on the altar must be kept burning; it must not go out.',
        relics: ['eternal-fire'],
        chapters: ['the-commission', 'the-witness']
      }
    ]
  }
]
