// lib/constants.ts - STORMBREAKERS CANON - 10/10 CONSISTENCY
export const STYLE = {
  RELIC_LABEL: "RELIC 01 — THE FIRST SONG",
  RELIC_SHORT: "Relic 01",
  CHAPTER_LABEL: "Chapter 01 — Worship Begins",
  CHAPTER_LABEL_CAPS: "CHAPTER 01 — WORSHIP BEGINS",
  CHAPTER_FULL: "Chapter 01 — Worship Begins: The Map",
  SONG: `"A New Song"`,
  SCRIPTURE_REF: "Psalm 40:3",
  THEME_BADGE: "WORSHIP",
  FLOW: "SCRIPTURE → TESTIMONY → RELIC → SONG"
}

export type CanonRelic = {
  id: number
  relicLabel: string
  relicShort: string
  chapterLabel: string
  chapterCaps: string
  title: string
  ref: string
  verse: string
  song: string
  theme: string
  icon: string
  symbol: string
  reflection: string
  story: string
  behind: string
  declaration: string
  prayer: string
  lyrics: string
}

export const CANON: CanonRelic[] = [
  { id: 1, relicLabel: "RELIC 01 — THE FIRST SONG", relicShort: "Relic 01", chapterLabel: "Chapter 01 — Worship Begins", chapterCaps: "CHAPTER 01 — WORSHIP BEGINS", title: "The Map", ref: "Psalm 40:3", verse: "He put a new song in my mouth, a hymn of praise to our God.", song: "A New Song", theme: "WORSHIP", icon: "🎵", symbol: "map-scroll", reflection: "Psalm 23 wasn't poetry anymore. It was a map.", story: "When the storm came, the Shepherd's voice became my direction. Worship was not born on a stage. It was born in the valley.", behind: "Written in the valley when worship was the only weapon left.", declaration: "God gives songs before He gives solutions.", prayer: "Father, give me a new song in this battle.", lyrics: "You put a new song in my mouth..." },
  { id: 2, relicLabel: "RELIC 02 — BATTLE CRY", relicShort: "Relic 02", chapterLabel: "Chapter 02 — Courage Rises", chapterCaps: "CHAPTER 02 — COURAGE RISES", title: "The Valley", ref: "Joshua 1:9", verse: "Be strong and courageous. Do not be afraid; for the Lord your God will be with you wherever you go.", song: "Warrior's Anthem", theme: "WARFARE", icon: "⚔️", symbol: "crossed-swords", reflection: "The moment fear left and the warrior rose.", story: "God does not call the qualified. He qualifies the called.", behind: "Born the night fear broke.", declaration: "I will not bow to fear.", prayer: "Make me brave where I have been afraid.", lyrics: "The moment fear left, the warrior rose..." },
  { id: 3, relicLabel: "RELIC 03 — FIRE FORGED", relicShort: "Relic 03", chapterLabel: "Chapter 03 — Refining Fire", chapterCaps: "CHAPTER 03 — REFINING FIRE", title: "The Fire", ref: "Isaiah 43:2", verse: "When you walk through fire, you shall not be burned; the flames will not set you ablaze.", song: "Through The Fire", theme: "REFINING FIRE", icon: "🔥", symbol: "forged-blade", reflection: "The flames tested my faith, but God was already waiting on the other side.", story: "The fire did not come to destroy me.", behind: "Symbol: Forged blade.", declaration: "The flames refined me; they did not define me.", prayer: "Refine me, don't consume me.", lyrics: "Through the fire, You were waiting..." },
  { id: 4, relicLabel: "RELIC 04 — JESUS IS THE HEALER", relicShort: "Relic 04", chapterLabel: "Chapter 04 — The Breaking", chapterCaps: "CHAPTER 04 — THE BREAKING", title: "Jesus Is The Healer", ref: "Jeremiah 30:17", verse: "But I will restore you to health and heal your wounds, declares the Lord.", song: "Healer's Cry", theme: "HEALING", icon: "✚", symbol: "healing-cross", reflection: "He heals wounds no human hands can reach.", story: "Some wounds cannot be seen.", behind: "Written when healing felt impossible.", declaration: "Jesus heals what people cannot reach.", prayer: "Jesus, heal what I have learned to hide.", lyrics: "You heal wounds no hands can reach..." },
  { id: 5, relicLabel: "RELIC 05 — SCARS THAT PREACH", relicShort: "Relic 05", chapterLabel: "Chapter 05 — Scars That Speak", chapterCaps: "CHAPTER 05 — SCARS THAT SPEAK", title: "The Testimony", ref: "2 Corinthians 12:9", verse: "My grace is sufficient for you, for my power is made perfect in weakness.", song: "I'm On Fire", theme: "TESTIMONY", icon: "🩸", symbol: "warrior-standing", reflection: "The scars I wanted hidden became the testimony God used to speak.", story: "The places I thought disqualified me became the places where God's grace was revealed.", behind: "Artwork: A warrior standing after the fire.", declaration: "My weakness became the place where His strength was revealed.", prayer: "Let my scars preach Your grace.", lyrics: "These scars that I hid, now they sing..." },
  { id: 6, relicLabel: "RELIC 06 — THE FIRE THAT NEVER GOES OUT", relicShort: "Relic 06", chapterLabel: "Chapter 06 — The Altar", chapterCaps: "CHAPTER 06 — THE ALTAR", title: "The Fire That Never Goes Out", ref: "Leviticus 6:13", verse: "The fire must be kept burning on the altar continuously; it must not go out.", song: "Eternal Fire", theme: "ALTAR", icon: "🕯️", symbol: "eternal-altar", reflection: "The fire that tested me in the darkest valley never went out.", story: "The flame remains because God is still writing the story.", behind: "The devotion after deliverance.", declaration: "The fire that tested me now fuels my worship.", prayer: "Keep the altar burning in me.", lyrics: "From valley fire to altar flame..." },
]
