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
    scripture: 'He himself bore our sins in his body on the tree',
    reference: '1 Peter 2:24 ESV',
    primaryTheme: 'Healing',
    themes: ['Redemption', 'Grace'],
    declaration: 'I am healed by His wounds',
    reflection: '',
    testimony: '',
    subtitle: 'The healing anthem',
    youtube: '',
    image: '/images/relics/healer.jpg'
  },
  {
    slug: 'running-wolf',
    relic: 'Running Wolf',
    song: 'Running Wolf',
    scripture: 'Before I formed you in the womb I knew you',
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
