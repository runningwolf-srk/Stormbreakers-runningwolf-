// data/relics.ts
export type Relic = {
  slug: string
  title: string
  subtitle: string
  image: string
  verse: { ref: string; text: string }
  declaration: string
  audioUrl: string
  duration: number
  chapter: number
}

export const relics: Relic[] = [
  {
    slug: "first-flame",
    title: "The First Flame",
    subtitle: "JESUS IS AN HEALER",
    image: "/relics/first-flame.png",
    verse: { 
      ref: "Isaiah 53:5", 
      text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." 
    },
    declaration: "This is where it started. Not in a church. In the dark. When the pain was real and the call was louder. The First Flame is for the ones who got healed in a back alley, not an altar call. By His wounds — not our works.",
    audioUrl: "/audio/first-flame.mp3",
    duration: 180,
    chapter: 1
  },
  {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "SOUND THE ALARM",
    image: "/relics/horn-of-war.png",
    verse: { 
      ref: "Joel 2:1", 
      text: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming." 
    },
    declaration: "This is not a song. This is a summons. The Horn of War doesn't entertain. It awakens. When you hear it, you know: it's time to move.",
    audioUrl: "/audio/horn-of-war.mp3",
    duration: 210,
    chapter: 2
  },
  {
    slug: "heaven-calling",
    title: "Heaven Calling",
    subtitle: "COME UP HERE",
    image: "/relics/heaven-calling.png",
    verse: { 
      ref: "Revelation 4:1", 
      text: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, 'Come up here, and I will show you what must take place after this.'" 
    },
    declaration: "Some people want a word. We want a door. Heaven Calling is the invitation to leave the ground and see from above. You can't fix what you won't rise above.",
    audioUrl: "/audio/heaven-calling.mp3",
    duration: 195,
    chapter: 3
  },
  {
    slug: "scars-that-preach",
    title: "Scars That Preach",
    subtitle: "TESTIMONY IN FLESH",
    image: "/relics/scars-that-preach.png",
    verse: { 
      ref: "Galatians 6:17", 
      text: "From now on, let no one cause me trouble, for I bear on my body the marks of Jesus." 
    },
    declaration: "Your scars aren't shame. They're sermons. The enemy marked you for death. God marked you for delivery. Let them preach.",
    audioUrl: "/audio/scars-that-preach.mp3",
    duration: 205,
    chapter: 4
  },
  {
    slug: "spiritual-journey",
    title: "Spiritual Journey",
    subtitle: "THE ROAD TO THE CROSS",
    image: "/relics/spiritual-journey.png",
    verse: { 
      ref: "Luke 9:23", 
      text: "Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me." 
    },
    declaration: "Salvation is a moment. Discipleship is a march. The Spiritual Journey isn't a map. It's a cross you carry.",
    audioUrl: "/audio/spiritual-journey.mp3",
    duration: 220,
    chapter: 5
  },
  {
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "BROTHERHOOD FORGED",
    image: "/relics/iron-collide.png",
    verse: { 
      ref: "Proverbs 27:17", 
      text: "As iron sharpens iron, so one person sharpens another." 
    },
    declaration: "Lone wolves die. Packs survive. Iron Collide is the sound of brothers sharpening brothers. No sparks, no edge.",
    audioUrl: "/audio/iron-collide.mp3",
    duration: 188,
    chapter: 6
  },
  {
    slug: "blood-of-cross",
    title: "Blood of Cross",
    subtitle: "REDEMPTION SONG",
    image: "/relics/blood-of-cross.png",
    verse: { 
      ref: "Ephesians 1:7", 
      text: "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace." 
    },
    declaration: "Grace ain't cheap. It cost blood. The Blood of Cross isn't a symbol. It's the receipt. Paid in full.",
    audioUrl: "/audio/blood-of-cross.mp3",
    duration: 200,
    chapter: 7
  },
  {
    slug: "lord-of-lords",
    title: "Lord of Lords",
    subtitle: "CROWN HIM",
    image: "/relics/lord-of-lords.png",
    verse: { 
      ref: "Revelation 19:16", 
      text: "On his robe and on his thigh he has this name written: king of kings and lord of lords." 
    },
    declaration: "Every knee will bow. Every tongue confess. Lord of Lords isn't a suggestion. It's a coronation. Crown Him now, or face Him later.",
    audioUrl: "/audio/lord-of-lords.mp3",
    duration: 230,
    chapter: 8
  }
]

export const getRelicBySlug = (slug: string) => relics.find(r => r.slug === slug)
export const getRelicByChapter = (chapter: number) => relics.find(r => r.chapter === chapter)
