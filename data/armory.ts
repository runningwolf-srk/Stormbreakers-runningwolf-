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
  primaryTheme: 'Healing' | 'Calling' | 'Spiritual Warfare' | 'Redemption' | 'Worship' | 'Kingship' | 'Fire'
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
    slug: 'spiritual-journey',
    relic: 'Spiritual Journey',
    song: 'Spiritual Journey',
    scripture: 'Draw near to God, and he will draw near to you',
    reference: 'James 4:8 ESV',
    primaryTheme: 'Worship',
    themes: ['Worship', 'Redemption', 'Presence', 'Journey'],
    declaration: 'This is not religion. This is presence. A journey to His throne through the valley, the fire, and the storm.',
    reflection: 'A WORSHIP ALBUM. A JOURNEY TO HIS PRESENCE. The cross in the portal. Red and blue — wrath and mercy. Silhouette walking into glory. This is what happened after ICU. After the flatline. After He said "not yet." The journey didn’t end. It started.',
    testimony: 'I died. Then I walked. Through the portal. Through the fire. Toward the cross. Spiritual Journey is the sound of every step back to Him. Not to escape — to abide.',
    subtitle: 'A Worship Album — A Journey To His Presence',
    youtube: 'https://youtu.be/umDFjJjh0_c',
    spotify: '',
    appleMusic: '',
    image: '/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'heaven-calling',
    relic: 'Heaven Calling',
    song: 'Heaven Calling',
    scripture: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you',
    reference: 'Jeremiah 29:11 ESV',
    primaryTheme: 'Redemption',
    themes: ['Redemption', 'Purpose', 'Calling', 'Hope'],
    declaration: 'Heaven is calling me home, but sending me back with purpose.',
    reflection: 'This is the sound after ICU. After the valley. After the encounter. Heaven called me — not to take me home yet, but to send me back. This is the journey anthem. The assignment. The "not yet" turned into "go."',
    testimony: 'I died. I heard heaven. Then He said "not yet." Heaven called my name, then sent me running. This anthem is for the ones who came back with orders.',
    subtitle: 'The assignment anthem',
    youtube: 'https://youtu.be/oxNauKuxg4Q',
    spotify: '',
    appleMusic: '',
    image: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'im-on-fire',
    relic: "I'm On Fire",
    song: "I'm On Fire",
    scripture: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me',
    reference: 'Galatians 2:20 ESV',
    primaryTheme: 'Fire',
    themes: ['Fire', 'Spiritual Warfare', 'Testimony', 'Redemption'],
    declaration: 'I walked through the fire and it did not burn me. I came out refined, not consumed.',
    reflection: 'Born Through The Fire. Scars That Preach. This is the furnace testimony. Shadrach, Meshach, Abednego walked with the fourth man in the fire. ICU was my furnace. I saw Him there. Came out smelling like smoke but not burned.',
    testimony: 'Flatlined. Massive heart attack. The fire should have killed me. Instead it baptized me. The scars preach louder than my words. I am on fire — Holy Spirit fire. Not destroyed. Commissioned.',
    subtitle: 'Scars That Preach — Born Through The Fire',
    youtube: 'https://youtu.be/8XQUhWB_N5M',
    spotify: '',
    appleMusic: '',
    image: '/file_0000000065a071f5832301f52d11fb80.png'
  },
  {
    slug: 'horn-of-war',
    relic: 'Horn of War',
    song: 'Horn of War',
    scripture: 'Blow the trumpet in Zion; sound the alarm on my holy hill',
    reference: 'Joel 2:1 ESV',
    primaryTheme: 'Spiritual Warfare',
    themes: ['Spiritual Warfare', 'Battle', 'Calling', 'Victory'],
    declaration: 'When the horn sounds, the battle belongs to the Lord. A legend rises when the saints declare war on hell.',
    reflection: 'This is the sound before the charge. Spartan. Horn. Runes. Army at the gates. Joel 2:1 — sound the alarm. This isn’t music. It’s mobilization. When the horn blows, demons tremble. When the saints roar, heaven moves.',
    testimony: 'ICU was the valley. Running Wolf was the call. War Cry was the sound. Horn of War is the signal. The legend rises — not me. The King in me. Every scar is a battle honor. Every breath is a war drum.',
    subtitle: 'A Battle Cry. A Legend Rises.',
    youtube: 'https://youtu.be/M4wGCg5oCx0',
    spotify: '',
    appleMusic: '',
    image: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'blood-of-cross',
    relic: 'Blood of Cross',
    song: 'Blood of Cross',
    scripture: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed',
    reference: 'Isaiah 53:5 ESV',
    primaryTheme: 'Redemption',
    themes: ['Redemption', 'Healing', 'Sacrifice', 'Worship'],
    declaration: 'By His wounds we are healed. By His blood we are redeemed. The cross is not defeat — it is victory.',
    reflection: 'The blood. The cross. The crown of thorns. Eclipse of wrath and mercy. This is the moment heaven touched earth. ICU showed me the price. The blood didn’t just save me — it marked me. This anthem is the gospel in war paint.',
    testimony: 'Flatlined at 39. The blood spoke a better word than death. "By His wounds we are healed" was written on that cross in red. I walked out of ICU carrying that blood. Not my own. His. It preaches. It heals. It wins.',
    subtitle: 'By His Wounds We Are Healed',
    youtube: 'https://youtu.be/4lcbjsNLlzo',
    spotify: '',
    appleMusic: '',
    image: '/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'iron-collide',
    relic: 'Iron Collide',
    song: 'Iron Collide',
    scripture: 'As iron sharpens iron, so one person sharpens another',
    reference: 'Proverbs 27:17 ESV',
    primaryTheme: 'Spiritual Warfare',
    themes: ['Spiritual Warfare', 'Battle', 'Brotherhood', 'Strength'],
    declaration: 'When iron collides, sparks fly. When saints collide, kingdoms fall. We are sharpened in battle, not in comfort.',
    reflection: 'This is the sound of steel on steel. Spartan. Shield. Sword. Rune circle. Red vs blue war. Proverbs 27:17 — iron sharpens iron. The battle isn’t solo. It’s brotherhood. It’s collision. It’s refinement through conflict. We don’t break — we sharpen.',
    testimony: 'ICU was the anvil. The heart attack was the hammer. Jesus was the fire. I didn’t come out soft. I came out sharpened. Iron Collide is for the saints who know comfort kills but conflict forges. We run together. We fight together. We sharpen together.',
    subtitle: 'An Epic Hard Rock Anthem',
    youtube: 'https://youtu.be/fIkUDO2emoc',
    spotify: '',
    appleMusic: '',
    image: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp'
  },
  {
    slug: 'lion-and-lamb',
    relic: 'Lion and Lamb',
    song: 'Lion and Lamb',
    scripture: 'Behold, the Lion of the tribe of Judah, the Root of David, has conquered... Then I saw a Lamb standing, as though it had been slain',
    reference: 'Revelation 5:5-6 ESV',
    primaryTheme: 'Kingship',
    themes: ['Kingship', 'Redemption', 'Worship', 'Victory'],
    declaration: 'The Lion reigns in power. The Lamb reigns in mercy. One throne. One King. One victory.',
    reflection: 'Crowned lion. The Lamb before Him. Revelation 5 — the paradox of heaven. The Lion conquered. The Lamb was slain. Both are Jesus. ICU showed me both. The roar that woke me. The blood that saved me. He is fierce and He is gentle. King and sacrifice.',
    testimony: 'I saw Him. Not one or the other. Both. The Lion that devours death. The Lamb that takes away sin. When they said I was dead, the Lion roared me back. When they said I was guilty, the Lamb bled for me. This is the throne I serve.',
    subtitle: 'The Lion Reigns. The Lamb Was Slain.',
    youtube: 'https://youtu.be/17bwrxNCCBs',
    spotify: '',
    appleMusic: '',
    image: '/AQMD_81y8KYxQT01wEtDigzM9YS3l862OtPv5NI1QlgdfAnOR1t1VNIvwOAzU5ZjySzHJixWWpJzctzObN4JM2wd.png'
  },
  {
    slug: 'eternal-fire',
    relic: 'Eternal Fire',
    song: 'Eternal Fire',
    scripture: 'For our God is a consuming fire... The fire on the altar must be kept burning; it must not go out',
    reference: 'Hebrews 12:29, Leviticus 6:13 ESV',
    primaryTheme: 'Fire',
    themes: ['Fire', 'Worship', 'Presence', 'Holiness'],
    declaration: 'The fire that refined me in ICU never goes out. It burns on the altar of my life. Consuming. Eternal. Holy.',
    reflection: 'Burning cross. Molten diamond. Embers in the void. This is Leviticus 6:13 — the fire on the altar must not go out. Hebrews 12:29 — our God is a consuming fire. ICU was the altar. The heart attack was the sacrifice. He lit a fire that death couldn’t kill.',
    testimony: 'Flatlined at 39. The fire should have ended me. Instead it started me. Not a spark. An eternal flame. Not mine. His. It burns through the valley. Through the battle. Through the worship. It will never go out. Because He never does.',
    subtitle: 'The Fire That Never Goes Out',
    youtube: 'https://youtu.be/maI6giUcYYk',
    spotify: '',
    appleMusic: '',
    image: '/AQNv1x8JFS1A0AB4rym1t36t9z9Ah7gwaP2Vr3PS3hhoCAOZs5UhX4LeEiGXg2acWrcSt1iyqKQrCPhuA6O9d5My.png'
  },
]
