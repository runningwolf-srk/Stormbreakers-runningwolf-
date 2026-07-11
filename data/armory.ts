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
    slug: 'running-wolf-blade',
    relic: 'Running Wolf Blade',
    song: 'Running Wolf Blade',
    scripture: 'He made my mouth like a sharp sword; in the shadow of his hand he hid me; he made me a polished arrow',
    reference: 'Isaiah 49:2 ESV',
    primaryTheme: 'Calling',
    themes: ['Calling', 'Spiritual Warfare', 'Authority', 'Commission'],
    declaration: 'I am not just sent — I am sharpened. A sword in His hand. A name on His blade.',
    reflection: 'Wolf forged in gold. Snow falling. Runes carved. The blade runs through him. Isaiah 49:2 — made my mouth like a sharp sword. Hebrews 4:12 — living and active, sharper than any two-edged sword. This is the next revelation: Running Wolf wasn’t just the call. It’s the weapon.',
    testimony: 'He didn’t just wake me up in ICU. He forged me there. Anvil. Hammer. Fire. Then He hid me in His hand until the appointed time. Now the blade is drawn. The wolf runs with a sword. The name is His.',
    subtitle: 'The Sword of the Sent One',
    youtube: 'https://youtu.be/CZ6tylWuerQ',
    spotify: '',
    appleMusic: '',
    image: '/AQNSqpHW8gV1OxAJb-5woTpal2mMV6yPY3VCIyhfmXJ51cTaGP38bt7ry6ooj4APZbACwuHTNzTNlLA2GCzab6o8.png'
  },
  {
    slug: 'war-cry',
    relic: 'War Cry',
    song: 'War Cry',
    scripture: 'Blow the trumpet in Zion; sound the alarm on my holy hill',
    reference: 'Joel 2:1 ESV',
    primaryTheme: 'Spiritual Warfare',
    themes: ['Spiritual Warfare', 'Calling', 'Battle'],
    declaration: 'We
