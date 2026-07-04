export type Relic = {
  slug: string
  title: string
  image: string
  audioUrl: string
  ambientUrl?: string
  duration: number
}

export const relics: Relic[] = [
  { 
    slug: "first-flame", 
    title: "THE FIRST FLAME",
    image: "/file_00000000fa471f882fd16e52afa59fd.png", // JESUS IS AN HEALER
    audioUrl: "/audio/first-flame.mp3",
    duration: 180 
  },
  { 
    slug: "horn-of-war", 
    title: "HORN OF WAR",
    image: "/file_00000000fa471f882fd16e52afa59fd.png", // TEMP: Reusing Healer image until you upload Horn image
    audioUrl: "/audio/horn-of-war.mp3",
    duration: 180 
  },
  { 
    slug: "heaven-calling", 
    title: "HEAVEN CALLING",
    image: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    audioUrl: "/audio/heaven-calling.mp3",
    duration: 180 
  },
  { 
    slug: "scars-that-preach", 
    title: "SCARS THAT PREACH",
    image: "/file_0000000065a071f5832301f52d11fb80.png", // BORN THROUGH THE FIRE
    audioUrl: "/audio/scars-that-preach.mp3",
    duration: 180 
  },
  { 
    slug: "spiritual-journey", 
    title: "SPIRITUAL JOURNEY",
    image: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    audioUrl: "/audio/spiritual-journey.mp3",
    duration: 180 
  },
  { 
    slug: "iron-collide", 
    title: "IRON COLLIDE",
    image: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    audioUrl: "/audio/iron-collide.mp3",
    duration: 180 
  },
  { 
    slug: "blood-of-cross", 
    title: "BLOOD OF CROSS",
    image: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    audioUrl: "/audio/blood-of-cross.mp3",
    duration: 180 
  },
  { 
    slug: "lord-of-lords", 
    title: "LORD OF LORDS",
    image: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    audioUrl: "/audio/lord-of-lords.mp3",
    duration: 180 
  },
]
