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
