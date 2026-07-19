// lib/constants.ts - FINAL 10/10 - SINGLE SOURCE OF TRUTH + LEGAL LOCKED
export const BIBLE = {
  TRANSLATION: "ESV",
  COPYRIGHT: "Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.",
  NOTE: "ESV Text Edition: 2016 - 16 verses used (<500 limit) - Compliant with ESV permissions"
}

export const STYLE = {
  FLOW: "SCRIPTURE → TESTIMONY → RELIC → SONG",
  FOOTER: "THE WORD IS AUTHORITY. MY STORY IS TESTIMONY. JESUS CHRIST IS THE CENTER OF THEM ALL."
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
  symbol: string
  reflection: string
  story: string
  behind: string
  declaration: string
  prayer: string
  lyrics: string
}

export const CANON: CanonRelic[] = [
  { id: 1, relicLabel: "RELIC 01 — THE FIRST SONG", relicShort: "Relic 01", chapterLabel: "Chapter 01 — Worship Begins", chapterCaps: "CHAPTER 01 — WORSHIP BEGINS", title: "The Map", ref: "Psalm 40:3 (ESV)", verse: "He put a new song in my mouth, a song of praise to our God. Many will see and fear, and put their trust in the LORD.", song: "A New Song", theme: "WORSHIP", symbol: "map-scroll", reflection: "Psalm 23 wasn't poetry anymore. It was a map.", story: "When the storm came, the Shepherd's voice became my direction. Worship was not born on a stage. It was born in the valley. God gave me a new song before He changed my circumstances.", behind: "Written in the valley when worship was the only weapon left. This is why Stormbreakers exists.", declaration: "God gives songs before He gives solutions.", prayer: "Father, give me a new song in this battle. Let my worship be my map.", lyrics: "You put a new song in my mouth\nWhen the night was closing in\nPsalm 23 became my map\nShepherd lead me home again" },
  { id: 2, relicLabel: "RELIC 02 — BATTLE CRY", relicShort: "Relic 02", chapterLabel: "Chapter 02 — Courage Rises", chapterCaps: "CHAPTER 02 — COURAGE RISES", title: "The Valley", ref: "Joshua 1:9 (ESV)", verse: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God will be with you wherever you go.", song: "Warrior's Anthem", theme: "WARFARE", symbol: "crossed-swords", reflection: "The moment fear left and the warrior rose.", story: "God does not call the qualified. He qualifies the called. The battle was never about my strength. It was about His presence.", behind: "Born the night fear broke and the warrior rose. The call to stand.", declaration: "I will not bow to fear. I will stand because You stand with me.", prayer: "Make me brave where I have been afraid.", lyrics: "The moment fear left\nThe warrior rose\nYou called me out of hiding\nOut of the shadows" },
  { id: 3, relicLabel: "RELIC 03 — FIRE FORGED", relicShort: "Relic 03", chapterLabel: "Chapter 03 — Refining Fire", chapterCaps: "CHAPTER 03 — REFINING FIRE", title: "The Fire", ref: "Isaiah 43:2 (ESV)", verse: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.", song: "Through The Fire", theme: "REFINING FIRE", symbol: "forged-blade", reflection: "The flames tested my faith, but God was already waiting on the other side.", story: "The fire did not come to destroy me. It revealed what God was building inside me. The flames refined me; they did not define me.", behind: "Forged blade icon — The flames refined me; they did not define me.", declaration: "The flames refined me; they did not define me.", prayer: "Refine me, don't consume me. Let me come out as gold.", lyrics: "Through the fire\nYou were waiting on the other side\nNot burned, not broken\nForged for Your glory" },
  { id: 4, relicLabel: "RELIC 04 — JESUS IS THE HEALER", relicShort: "Relic 04", chapterLabel: "Chapter 04 — The Breaking", chapterCaps: "CHAPTER 04 — THE BREAKING", title: "Jesus Is The Healer", ref: "Jeremiah 30:17 (ESV)", verse: "But I will restore you to health and heal your wounds, declares the LORD.", song: "Healer's Cry", theme: "HEALING", symbol: "healing-cross", reflection: "He heals wounds no human hands can reach.", story: "Some wounds cannot be seen. Some battles happen where nobody knows. But God restores what life tried to steal.", behind: "Written when healing felt impossible and Jesus became the only answer.", declaration: "Jesus heals what people cannot reach.", prayer: "Jesus, heal what I have learned to hide.", lyrics: "You heal wounds no hands can reach\nRestore what life stole from me\nJesus, Healer, breathe again" },
  { id: 5, relicLabel: "RELIC 05 — SCARS THAT PREACH", relicShort: "Relic 05", chapterLabel: "Chapter 05 — Scars That Speak", chapterCaps: "CHAPTER 05 — SCARS THAT SPEAK", title: "The Testimony", ref: "2 Corinthians 12:9 (ESV)", verse: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness.", song: "I'm On Fire", theme: "TESTIMONY", symbol: "warrior-standing", reflection: "The scars I wanted hidden became the testimony God used to speak.", story: "The places I thought disqualified me became the places where God's grace was revealed. My grace is sufficient.", behind: "Artwork: A warrior standing after the fire. The scar is the sermon.", declaration: "My weakness became the place where His strength was revealed.", prayer: "Let my scars preach Your grace.", lyrics: "These scars that I hid\nNow they sing of Your grace\nWhat tried to break me\nBecame my testimony" },
  { id: 6, relicLabel: "RELIC 06 — THE FIRE THAT NEVER GOES OUT", relicShort: "Relic 06", chapterLabel: "Chapter 06 — The Altar", chapterCaps: "CHAPTER 06 — THE ALTAR", title: "The Fire That Never Goes Out", ref: "Leviticus 6:13 (ESV)", verse: "Fire shall be kept burning on the altar continually; it shall not go out.", song: "Eternal Fire", theme: "ALTAR", symbol: "eternal-altar", reflection: "The fire that tested me in the darkest valley never went out.", story: "The flame remains because God is still writing the story. The fire must be kept burning continuously.", behind: "The devotion after deliverance. Not survival fire. Altar fire.", declaration: "The fire that tested me now fuels my worship.", prayer: "Keep the altar burning in me. Let it never go out.", lyrics: "From valley fire to altar flame\nYou never let it go out\nEternal fire, burn in me" },
]
