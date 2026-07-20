// @ts-nocheck
export const WORD_CATEGORIES = [
  { id: 'calling', title: 'CALLING', scripture: 'Jeremiah 1:5', anchor: 'Before I formed you in the womb I knew you.', explanation: 'Calling is revealed, not earned.', moment: 'When God called you before you felt ready.' },
  { id: 'redemption', title: 'REDEMPTION', scripture: '2 Cor 5:17', anchor: 'If anyone is in Christ, he is a new creation.', explanation: 'Every mark becomes testimony.', moment: 'When shame became testimony.' },
  { id: 'healing', title: 'HEALING', scripture: 'Psalm 147:3', anchor: 'He heals the brokenhearted.', explanation: 'Forged when healing felt impossible.', moment: 'The bathroom floor moment.' },
  { id: 'fire', title: 'FIRE', scripture: 'Malachi 3:3', anchor: 'He will sit as a refiner.', explanation: 'Fire reveals what is eternal.', moment: 'When God refined you in the fire.' },
  { id: 'anointing', title: 'ANOINTING', scripture: '1 John 2:27', anchor: 'The anointing remains in you.', explanation: 'Oil that breaks the yoke, pressed in secret.', moment: 'When oil flowed from brokenness.' },
  { id: 'identity', title: 'IDENTITY', scripture: '1 Peter 2:9', anchor: 'You are a chosen generation.', explanation: 'You fight FROM identity, not for it.', moment: 'When you stopped fighting for identity.' },
  { id: 'warfare', title: 'WARFARE', scripture: '2 Cor 10:4', anchor: 'Weapons mighty in God.', explanation: 'Worship IS warfare.', moment: 'When worship became your weapon.' },
  { id: 'worship', title: 'WORSHIP', scripture: 'John 4:24', anchor: 'Worship in Spirit and truth.', explanation: 'Every testimony ends at His feet.', moment: 'When it all pointed to ONE KING.' },
]

export const allRelics = [
  {
    id: 1, slug: 'first-song', title: 'The First Song', theme: 'Awakening', relicLabel: 'The First Sound', act: 1,
    symbol: '🌬️', color: '#38BDF8', weapon: 'Breath of the Beginning',
    scriptureRef: 'Genesis 1:2 — The Spirit was hovering',
    sound: 'Cinematic piano + breath + distant pad',
    description: 'Not written — breathed. At 3:12am when God broke 20 years of silence.',
    testimonyMoment: 'I had no song. I had a sigh. God turned the sigh into sound.',
    cinematicScene: 'A single light in a dark valley. First breath after being underwater.'
  },
  {
    id: 2, slug: 'stormbreak', title: 'Stormbreak', theme: 'Awakening', relicLabel: 'Stormbreaker', act: 1,
    symbol: '⛈️', color: '#6366F1', weapon: 'Hammer of the Storm',
    scriptureRef: 'Psalm 29:3 — The God of glory thunders',
    sound: 'Trailer drums + choir + rain',
    description: 'The night the storm did not pass over — it broke inside me.',
    testimonyMoment: 'When God did not calm the storm, He became the storm.',
    cinematicScene: 'Wolf standing on a cliff as lightning splits the sky behind him.'
  },
  {
    id: 3, slug: 'awakening', title: 'Awakening', theme: 'Awakening', relicLabel: 'Awakened Eyes', act: 1,
    symbol: '👁️', color: '#F59E0B', weapon: 'Eyes of Fire',
    scriptureRef: 'Ephesians 1:18 — Eyes of your heart enlightened',
    sound: 'Soft strings + awakening vocal',
    description: 'The moment I realized I was not forgotten, I was hidden.',
    testimonyMoment: 'God was not late. He was preparing.',
    cinematicScene: 'Dawn breaking through a forest after a long night.'
  },
  {
    id: 4, slug: 'ashes-to-altar', title: 'Ashes to Altar', theme: 'Transformation', relicLabel: 'Ashen Crown', act: 1,
    symbol: '👑', color: '#57534E', weapon: 'Crown of Ash',
    scriptureRef: 'Isaiah 61:3 — Beauty for ashes',
    sound: 'Minor piano + hopeful lift',
    description: 'What I thought was the end was an altar.',
    testimonyMoment: 'My ashes still smelled like smoke when God called them beautiful.',
    cinematicScene: 'A crown made of ash placed on a stone altar, turning to gold.'
  },
  {
    id: 5, slug: 'fire-forged', title: 'Fire Forged', theme: 'Fire', relicLabel: 'Fire Forged', act: 2,
    symbol: '🔥', color: '#EF4444', weapon: 'Forge Hammer',
    scriptureRef: '1 Peter 1:7 — Faith refined by fire',
    sound: 'Industrial percussion + anthem rock',
    description: 'Forged when quitting would have been easier than staying.',
    testimonyMoment: 'The fire did not consume me. It named me.',
    cinematicScene: 'Blade glowing orange in a blacksmith forge, sparks flying.'
  },
  {
    id: 6, slug: 'healing-tide', title: 'Healing Tide', theme: 'Healing', relicLabel: 'Healing Mantle', act: 2,
    symbol: '🌊', color: '#06B6D4', weapon: 'Mantle of Healing',
    scriptureRef: 'Psalm 147:3 — He heals the brokenhearted',
    sound: 'Ambient worship + waves + female vocal',
    description: 'Written in the room where healing felt impossible. Not about healing — from healing.',
    testimonyMoment: 'The doctor said one thing. The Word said another. I chose the Word.',
    cinematicScene: 'Wounds being washed by tide at sunrise, light entering water.'
  },
  {
    id: 7, slug: 'wolf-fang', title: 'Wolf Fang', theme: 'Identity', relicLabel: 'Wolf Fang', act: 2,
    symbol: '🐺', color: '#E5E7EB', weapon: 'Fang Dagger — restored instinct',
    scriptureRef: 'Joel 2:25 — I will restore the years',
    sound: 'Tribal drums + throat + cello',
    description: 'Identity restored. The wolf was not wild — it was wounded.',
    testimonyMoment: 'When God gave me back what the locusts ate.',
    cinematicScene: 'A white wolf howling, not in aggression, but in worship.'
  },
  {
    id: 8, slug: 'identity-restored', title: 'Identity Restored', theme: 'Identity', relicLabel: 'Seal of Sonship', act: 2,
    symbol: '📜', color: '#FACC15', weapon: 'Seal Ring',
    scriptureRef: '1 Peter 2:9 — Chosen generation',
    sound: 'Orchestral worship + declaration',
    description: 'I stopped fighting for identity and started fighting FROM it.',
    testimonyMoment: 'I am not what I did. I am who He says I am.',
    cinematicScene: 'A beggar’s robe exchanged for a royal robe in the throne room.'
  },
  {
    id: 9, slug: 'lions-roar', title: "Lion's Roar", theme: 'Warfare', relicLabel: "Lion's Roar", act: 3,
    symbol: '🦁', color: '#D97706', weapon: 'Roar — sound weapon',
    scriptureRef: 'Revelation 5:5 — The Lion of Judah has triumphed',
    sound: 'War anthem + lion roar sample + choir',
    description: 'Worship became warfare. One roar from Judah silenced 1000 lies.',
    testimonyMoment: 'I did not fight with my hands. I fought with my mouth — worship.',
    cinematicScene: 'A lion roaring over a battlefield, enemies fleeing not from volume, but authority.'
  },
  {
    id: 10, slug: 'wolf-blade', title: 'Wolf Blade', theme: 'Warfare', relicLabel: 'Wolf Blade', act: 3,
    symbol: '⚔️', color: '#F59E0B', weapon: 'Wolf Blade — double-edged, fire-tempered',
    scriptureRef: 'Hebrews 4:12 — Sharper than any two-edged sword',
    sound: 'Orchestral metal worship — cello ostinato + war drums',
    description: 'Song of endurance. Written when endurance was not a choice.',
    testimonyMoment: 'The blade was forged on the night I wanted to quit.',
    cinematicScene: 'Blade cooling in snow after fire, steam rising at dawn.'
  },
  {
    id: 11, slug: 'thunder-drums', title: 'Thunder Drums', theme: 'Warfare', relicLabel: 'Thunder Drums', act: 3,
    symbol: '🥁', color: '#7C3AED', weapon: 'War Drums — atmosphere shifter',
    scriptureRef: 'Psalm 29:3 — The voice of the Lord is over the waters',
    sound: 'Taiko drums + cinematic trailer + chant',
    description: 'When praise became percussion. Every hit broke a chain.',
    testimonyMoment: 'We did not drum to make noise. We drummed to shift the atmosphere.',
    cinematicScene: 'War drums on a mountain, clouds forming with each beat.'
  },
  {
    id: 12, slug: 'war-cry', title: 'War Cry', theme: 'Warfare', relicLabel: 'War Cry', act: 3,
    symbol: '📯', color: '#DC2626', weapon: 'Shofar — call to battle',
    scriptureRef: '2 Cor 10:4 — Weapons mighty in God',
    sound: 'Shofar + battle cry + electric guitar',
    description: 'The sound before the breakthrough.',
    testimonyMoment: 'We shouted before the wall fell.',
    cinematicScene: 'An army worshiping before the battle, not after.'
  },
  {
    id: 13, slug: 'spirit-mantle', title: 'Spirit Mantle', theme: 'Anointing', relicLabel: 'Spirit Mantle', act: 4,
    symbol: '🧥', color: '#10B981', weapon: 'Mantle — oil that remains',
    scriptureRef: '1 John 2:27 — The anointing remains',
    sound: 'Ambient pad + whisper choir + oil pour',
    description: 'Anointing pressed in the secret place, not the stage.',
    testimonyMoment: 'Oil flows from crushing, not striving.',
    cinematicScene: 'A mantle passing from an old warrior to a young one, oil dripping.'
  },
  {
    id: 14, slug: 'tower-of-one', title: 'Tower of One', theme: 'Calling', relicLabel: 'Tower of One', act: 4,
    symbol: '🗼', color: '#0EA5E9', weapon: 'Watchtower — intercession',
    scriptureRef: 'Psalm 61:2 — Lead me to the rock that is higher',
    sound: 'Solo piano -> full orchestra + vocal solo',
    description: 'Calling to stand alone when the crowd walks away.',
    testimonyMoment: 'God called me to the tower when everyone else left the field.',
    cinematicScene: 'A lone tower with a single light on, in a dark valley, unmoving.'
  },
  {
    id: 15, slug: 'running-wolf', title: 'Running Wolf', theme: 'Calling', relicLabel: 'Running Wolf', act: 4,
    symbol: '🐾', color: '#A3A3A3', weapon: 'Feet of the Wolf — carrier',
    scriptureRef: 'Isaiah 52:7 — How beautiful are the feet',
    sound: 'Running percussion + anthem + open sky',
    description: 'Not running from, running for. The commission.',
    testimonyMoment: 'He did not heal me to sit. He healed me to run.',
    cinematicScene: 'Wolf running across plains carrying fire in its mouth, not consuming it.'
  },
  {
    id: 16, slug: 'legacy', title: 'Legacy', theme: 'Calling', relicLabel: 'Legacy Seal', act: 4,
    symbol: '🏹', color: '#FEF3C7', weapon: 'Arrow of Legacy',
    scriptureRef: 'Psalm 127:4 — Like arrows in the hand of a warrior',
    sound: 'Legacy choir + future hope + strings',
    description: 'This was never about me. It was always about those who will run after.',
    testimonyMoment: 'My story ends where theirs begins.',
    cinematicScene: 'An old wolf watching young wolves run ahead, fire now in their mouths.'
  }
]

export const CANON = allRelics
