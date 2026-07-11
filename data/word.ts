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
    slug: `healing`,
    title: `Healing`,
    icon: `💧`,
    scriptures: [
      {
        ref: `Psalm 23:4`,
        text: `Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.`,
        relics: [`jesus-is-an-healer`],
        chapters: [`the-valley`]
      },
      {
        ref: `1 Peter 2:24`,
        text: `He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.`,
        relics: [`jesus-is-an-healer`],
        chapters: [`the-valley`, `the-journey`]
      },
      {
        ref: `Isaiah 53:5`,
        text: `But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.`,
        relics: [`jesus-is-an-healer`, `blood-of-cross`],
        chapters: [`the-valley`]
      },
      {
        ref: `Psalm 147:3`,
        text: `He heals the brokenhearted and binds up their wounds.`,
        relics: [`jesus-is-an-healer`],
        chapters: [`the-valley`, `the-hope`]
      }
    ]
  },
  {
    slug: `calling`,
    title: `Calling`,
    icon: `🔥`,
    scriptures: [
      {
        ref: `Jeremiah 1:5`,
        text: `Before I formed you in the womb I knew you, before you were born I set you apart.`,
        relics: [`running-wolf`],
        chapters: [`the-encounter`]
      },
      {
        ref: `Isaiah 49:2`,
        text: `He made my mouth like a sharp sword; in the shadow of his hand he hid me; he made me a polished arrow.`,
        relics: [`running-wolf-blade`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Hebrews 4:12`,
        text: `For the word of God is living and active, sharper than any two-edged sword.`,
        relics: [`running-wolf-blade`],
        chapters: [`the-battle`]
      },
      {
        ref: `Ezekiel 3:9`,
        text: `Like the hardest stone, harder than flint, I have made your forehead; do not be afraid of them or terrified by them.`,
        relics: [`wolf-fang`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Amos 3:8`,
        text: `The lion has roared; who will not fear? The Lord God has spoken; who can but prophesy?`,
        relics: [`wolf-fang`],
        chapters: [`the-commission`]
      },
      {
        ref: `Isaiah 6:8`,
        text: `Then I heard the voice of the Lord saying, "Whom shall I send?" And I said, "Here am I. Send me!"`,
        relics: [`running-wolf`],
        chapters: [`the-commission`]
      },
      {
        ref: `Romans 8:28`,
        text: `And we know that in all things God works for the good of those who love him, who have been called according to his purpose.`,
        relics: [`running-wolf`],
        chapters: [`the-encounter`, `the-journey`]
      }
    ]
  },
  {
    slug: `spiritual-warfare`,
    title: `Spiritual Warfare`,
    icon: `⚔️`,
    scriptures: [
      {
        ref: `1 Samuel 7:10`,
        text: `Then the Lord thundered with a mighty sound that day against the Philistines and threw them into confusion.`,
        relics: [`thunder-drums`],
        chapters: [`the-battle`]
      },
      {
        ref: `Joel 2:1`,
        text: `Blow the trumpet in Zion; sound the alarm on my holy hill.`,
        relics: [`war-cry`, `horn-of-war`],
        chapters: [`the-battle`]
      },
      {
        ref: `2 Corinthians 10:4`,
        text: `The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds.`,
        relics: [`war-cry`],
        chapters: [`the-battle`]
      },
      {
        ref: `Ephesians 6:11`,
        text: `Put on the full armor of God, so that you can take your stand against the devil's schemes.`,
        relics: [`war-cry`],
        chapters: [`the-armory`, `the-battle`]
      },
      {
        ref: `Numbers 10:9`,
        text: `When you go into battle in your own land against an enemy who is oppressing you, sound a blast on the trumpets.`,
        relics: [`horn-of-war`],
        chapters: [`the-battle`]
      },
      {
        ref: `Proverbs 27:17`,
        text: `As iron sharpens iron, so one person sharpens another.`,
        relics: [`iron-collide`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Ezekiel 3:9`,
        text: `Like the hardest stone, harder than flint, I have made your forehead.`,
        relics: [`wolf-fang`],
        chapters: [`the-commission`, `the-battle`]
      },
      {
        ref: `Amos 3:8`,
        text: `The lion has roared; who will not fear?
