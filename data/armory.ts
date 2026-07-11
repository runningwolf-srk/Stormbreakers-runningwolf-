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
  primaryTheme: 'Healing' | 'Calling' | 'Spiritual Warfare' | 'Redemption' | 'Worship' | 'Kingship'
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
    themes: ['Identity', 'Calling', 'Warfare'],
    declaration: 'I am called, chosen, and set apart for the storm',
    reflection: 'The name came after ICU. I was dead, then I was running. Not away from the storm — into it. The wolf runs with the pack but hears the Shepherd. This is the sound of a man who died and was sent back with orders.',
    testimony: 'They called the time of death. Then He called my name. Running Wolf isn’t who I was. It’s who He made me when He pulled me out of the valley. Mahalla of the Storm — we run where He sends.',
    subtitle: 'The calling anthem',
    youtube: 'https://youtu.be/GVCZZIcFP0I',
    spotify: '',
    appleMusic: '',
    image: '/745908406_27930426146575546_5158448896416347127_n.webp'
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
  {
    slug: 'lord-of-lords',
    relic: 'Lord of Lords',
    song: 'Lord of Lords',
    scripture: 'On his robe and on his thigh he has a name written, King of kings and Lord of lords',
    reference: 'Revelation 19:16 ESV',
    primaryTheme: 'Kingship',
    themes: ['Kingship', 'Worship', 'Authority', 'Victory'],
    declaration: 'He reigns forever. Every knee will bow. Every tongue confess. He is Lord of Lords.',
    reflection: 'This is the throne room anthem. Not a worship set opener — a declaration of final authority. The ICU gave me a glimpse of the King. The cross behind the throne. The crown of light. This is who saved me.',
    testimony: 'When they said I was dead, I met the King. Not a story. Not a metaphor. The Lord of Lords spoke, and I lived. This song is my witness to His throne.',
    subtitle: 'A spiritual anthem',
    youtube: 'https://youtu.be/9vP0NPrEv9s',
    spotify: '',
    appleMusic: '',
    image: '/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'heaven-calling',
    relic: 'Heaven Calling',
    song: 'Heaven Calling',
    scripture: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you',
    reference: 'Jeremiah 29:11 ESV',
    primaryTheme: 'Redemption',
    themes: ['Redemption', 'Worship', 'Purpose', 'Calling'],
    declaration: 'Heaven is calling me home, but sending me back with purpose.',
    reflection: 'This is the sound after ICU. After the valley. After the encounter. Heaven called me — not to take me home yet, but to send me back. The cross in the clouds. The guitar on the rock. Worship as warfare. This is the journey.',
    testimony: 'I died. I heard heaven. Then He said "not yet." Heaven called my name, then sent me running. This anthem is for the ones who came back with orders.',
    subtitle: 'A worship anthem',
    youtube: 'https://youtu.be/umDFjJjh0_c',
    spotify: '',
    appleMusic: '',
    image: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
]
