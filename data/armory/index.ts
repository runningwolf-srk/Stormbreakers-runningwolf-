export const BRAND = "ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING"
export const TOTAL = 19

export type Relic = {
  slug:string; num:string; title:string; short:string;
  image:string; verse:string; status:"FORGED"|"IN PROGRESS"|"UNREVEALED"
}

export const ALL_RELICS: Relic[] = [
  { slug:"runningwolf-blade", num:"01", title:"RUNNINGWOLF BLADE", short:"The first edge. Word made weapon.", image:"/relics/runningwolf-blade.png", verse:"Hebrews 4:12", status:"FORGED" },
  { slug:"lord-of-lords", num:"02", title:"LORD OF LORDS", short:"King of kings. Crown above every crown.", image:"/relics/lord-of-lords.webp", verse:"Revelation 19:16", status:"FORGED" },
  { slug:"blood-of-cross", num:"03", title:"BLOOD OF CROSS", short:"Covenant sealed in crimson.", image:"/relics/blood-of-cross.webp", verse:"Colossians 1:20", status:"IN PROGRESS" },
  { slug:"iron-collide", num:"04", title:"IRON COLLIDE", short:"Iron sharpens iron.", image:"/relics/iron-collide.webp", verse:"Proverbs 27:17", status:"UNREVEALED" },
  { slug:"heaven-calling", num:"05", title:"HEAVEN CALLING", short:"Summons from above.", image:"/relics/heaven-calling.webp", verse:"Philippians 3:14", status:"UNREVEALED" },
  { slug:"war-cry", num:"06", title:"WAR CRY", short:"Wake the warriors.", image:"/relics/war-cry.webp", verse:"Joel 3:9", status:"UNREVEALED" },
  { slug:"redeemed", num:"07", title:"REDEEMED", short:"Bought back. Price paid.", image:"/relics/redeemed.webp", verse:"Ephesians 1:7", status:"UNREVEALED" },
  { slug:"royal-relic", num:"08", title:"ROYAL RELIC", short:"Royal priesthood.", image:"/relics/royal-relic.webp", verse:"1 Peter 2:9", status:"UNREVEALED" },
  { slug:"runningwolf", num:"09", title:"RUNNINGWOLF", short:"The man who runs and does not grow weary.", image:"/relics/runningwolf.webp", verse:"Isaiah 40:31", status:"UNREVEALED" },
  { slug:"psalm-23", num:"10", title:"PSALM 23", short:"The Shepherd leads.", image:"/relics/psalm-23.webp", verse:"Psalm 23:1", status:"UNREVEALED" },
  { slug:"lion-and-lamb", num:"11", title:"LION AND LAMB", short:"Majesty and meekness together.", image:"/relics/lion-and-lamb.png", verse:"Isaiah 11:6", status:"UNREVEALED" },
  { slug:"spiritual-mantle", num:"12", title:"SPIRITUAL MANTLE", short:"Spirit upon me.", image:"/relics/spiritual-mantle.png", verse:"Isaiah 61:1", status:"UNREVEALED" },
  { slug:"storm-crown", num:"13", title:"STORM CROWN", short:"God thundereth marvellously.", image:"/relics/storm-crown.png", verse:"Psalm 29:3", status:"UNREVEALED" },
  { slug:"god-kept-me-alive", num:"14", title:"GOD KEPT ME ALIVE", short:"I shall not die but live.", image:"/relics/god-kept-me-alive.png", verse:"Psalm 118:17", status:"UNREVEALED" },
  { slug:"through-the-storm-i-rise", num:"15", title:"THROUGH THE STORM I RISE", short:"When waters rise, faith lifts.", image:"/relics/through-the-storm-i-rise.png", verse:"Isaiah 43:2", status:"UNREVEALED" },
  { slug:"the-fire", num:"16", title:"THE FIRE", short:"Refiner's fire.", image:"/relics/the-fire.png", verse:"Malachi 3:2", status:"UNREVEALED" },
  { slug:"jesus-is-a-healer", num:"17", title:"JESUS IS A HEALER", short:"Jehovah Rapha.", image:"/relics/jesus-is-a-healer.png", verse:"Exodus 15:26", status:"UNREVEALED" },
  { slug:"chronicle-stone", num:"18", title:"CHRONICLE STONE", short:"Stones of remembrance.", image:"/relics/chronicle-stone.png", verse:"Joshua 4:7", status:"UNREVEALED" },
  { slug:"horn-of-war", num:"19", title:"HORN OF WAR", short:"Shofar blast. Walls fall.", image:"/relics/horn-of-war.webp", verse:"Joshua 6:20", status:"UNREVEALED" },
]
