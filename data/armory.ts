export type Relic = {
  slug: string
  relic: string
  song: string
  scripture: string
  reference: string
  youtube?: string
  spotify?: string
  appleMusic?: string
  declaration: string
  reflection: string
  testimony?: string
  subtitle?: string
  primaryTheme: 'Healing' | 'Calling' | 'Spiritual Warfare' | 'Redemption' | 'Worship'
  themes: string[]
  image?: string
}

export const armory: Relic[] = [
  {
    slug: 'jesus-is-an-healer',
    relic: 'Jesus Is An Healer',
    song: 'Jesus Is An Healer',
    scripture: 'He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.',
    reference: '1 Peter 2:24 ESV',
    primaryTheme: 'Healing',
    themes: ['Redemption', 'Grace', 'Healing'],
    declaration: 'I am healed by His wounds',
    reflection: 'Born in the valley. ICU at 39. Machines breathing for me. Psalm 23 became a map, not poetry. He healed me when doctors said it was over. This song is my testimony that He still heals today.',
    testimony: 'Massive heart attack. Flatlined. The doctors gave up. Jesus didn’t. I woke up to machines, tubes, and His presence. "By His wounds we are healed" isn’t theology — it’s my biography.',
    subtitle: 'The healing anthem',
    youtube: 'https://youtu.be/stsryByK5h8',
    spotify: '',
    appleMusic: '',
    image: '/file_000000000fa471f882fd16e52afa59fd.png'
  },
  {
    slug: 'running-wolf',
    relic: 'Running Wolf',
    song: 'Running Wolf',
    scripture: 'Before I formed you in the womb I knew you, before you were born I set you apart',
    reference: 'Jeremiah 1:5 ESV',
    primaryTheme: 'Calling',
    themes: ['Identity', 'Calling'],
    declaration: 'I am called, chosen, and set apart',
    reflection: '',
    testimony: '',
    subtitle: 'The calling anthem',
    youtube: '',
    image: ''
  },
  {
    slug: 'war-cry',
    relic: 'War Cry',
    song: 'War Cry',
    scripture: 'Blow the trumpet in Zion; sound the alarm on my holy hill',
    reference: 'Joel 2:1 ESV',
    primaryTheme: 'Spiritual Warfare',
    themes: ['Spiritual Warfare', 'Calling', 'Battle'],
    declaration: 'We raise a war cry in the valley. The enemy trembles when the saints declare.',
    reflection: 'This song is the sound of heaven invading earth. Forged in the valley, tested in battle, declared for war.',
    testimony: '',
    subtitle: 'The battle anthem',
    youtube: 'https://youtu.be/hdB50mxVNtA',
    spotify: '',
    appleMusic: '',
    image: '/742511209_1767694164584264_3575760936981026908_n.webp'
  },
]
