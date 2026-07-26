export const BRAND = "ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING"
export const TOTAL = 19

export type Relic = {
  slug:string; num:string; title:string;
  purpose:string; // NEW: PURPOSE line
  short:string; image:string; verse:string;
  status:"FORGED"|"BURNING IN THE FORGE"|"AWAITING REVELATION";
  symbol:string;
}

export const ALL_RELICS: Relic[] = [
  { slug:"runningwolf-blade", num:"I", title:"RUNNINGWOLF BLADE", purpose:"The Word becomes the weapon.", short:"The first edge. Word made weapon.", image:"/relics/runningwolf-blade.png", verse:"Hebrews 4:12", status:"FORGED", symbol:"⚔️" },
  { slug:"lord-of-lords", num:"II", title:"LORD OF LORDS", purpose:"Jesus crowned King above every king.", short:"King of kings. Crown above every crown.", image:"/relics/lord-of-lords.webp", verse:"Revelation 19:16", status:"FORGED", symbol:"👑" },
  { slug:"blood-of-cross", num:"III", title:"BLOOD OF CROSS", purpose:"Redemption through sacrifice.", short:"Covenant sealed in crimson.", image:"/relics/blood-of-cross.webp", verse:"Colossians 1:20", status:"BURNING IN THE FORGE", symbol:"✝️" },
  { slug:"iron-collide", num:"IV", title:"IRON COLLIDE", purpose:"Brothers forge brothers.", short:"Iron sharpens iron.", image:"/relics/iron-collide.webp", verse:"Proverbs 27:17", status:"AWAITING REVELATION", symbol:"🛡️" },
  { slug:"heaven-calling", num:"V", title:"HEAVEN CALLING", purpose:"Summons from above.", short:"Press toward the mark.", image:"/relics/heaven-calling.webp", verse:"Philippians 3:14", status:"AWAITING REVELATION", symbol:"📯" },
  { slug:"war-cry", num:"VI", title:"WAR CRY", purpose:"Wake the warriors.", short:"Sound the alarm.", image:"/relics/war-cry.webp", verse:"Joel 3:9", status:"AWAITING REVELATION", symbol:"📣" },
  { slug:"redeemed", num:"VII", title:"REDEEMED", purpose:"Bought back by blood.", short:"Bought back. Price paid in full.", image:"/relics/redeemed.webp", verse:"Ephesians 1:7", status:"AWAITING REVELATION", symbol:"🩸" },
  { slug:"royal-relic", num:"VIII", title:"ROYAL RELIC", purpose:"Chosen generation.", short:"Royal priesthood.", image:"/relics/royal-relic.webp", verse:"1 Peter 2:9", status:"AWAITING REVELATION", symbol:"💎" },
  { slug:"runningwolf", num:"IX", title:"RUNNINGWOLF", purpose:"The one who runs with endurance and does not grow weary.", short:"The one who runs with endurance and does not grow weary.", image:"/relics/runningwolf.webp", verse:"Isaiah 40:31", status:"AWAITING REVELATION", symbol:"🐺" },
  { slug:"psalm-23", num:"X", title:"PSALM 23", purpose:"The Shepherd leads.", short:"I shall not want.", image:"/relics/psalm-23.webp", verse:"Psalm 23:1", status:"AWAITING REVELATION", symbol:"🐑" },
  { slug:"lion-and-lamb", num:"XI", title:"LION AND LAMB", purpose:"Majesty and meekness in one King.", short:"Majesty and meekness dwell together.", image:"/relics/lion-and-lamb.png", verse:"Isaiah 11:6", status:"AWAITING REVELATION", symbol:"🦁" },
  { slug:"spiritual-mantle", num:"XII", title:"SPIRITUAL MANTLE", purpose:"The anointing.", short:"The covering.", image:"/relics/spiritual-mantle.png", verse:"Isaiah 61:1", status:"AWAITING REVELATION", symbol:"🧥" },
  { slug:"storm-crown", num:"XIII", title:"STORM CROWN", purpose:"God thunders marvellously.", short:"Voice in the storm.", image:"/relics/storm-crown.png", verse:"Psalm 29:3", status:"AWAITING REVELATION", symbol:"⛈️" },
  { slug:"god-kept-me-alive", num:"XIV", title:"GOD KEPT ME ALIVE", purpose:"I shall live and declare His works.", short:"Kept alive to testify.", image:"/relics/god-kept-me-alive.png", verse:"Psalm 118:17", status:"AWAITING REVELATION", symbol:"✊" },
  { slug:"through-the-storm-i-rise", num:"XV", title:"THROUGH THE STORM I RISE", purpose:"When waters rise, faith lifts higher.", short:"Faith lifts higher.", image:"/relics/through-the-storm-i-rise.png", verse:"Isaiah 43:2", status:"AWAITING REVELATION", symbol:"🌊" },
  { slug:"the-fire", num:"XVI", title:"THE FIRE", purpose:"Refiner's fire.", short:"Purified as gold.", image:"/relics/the-fire.png", verse:"Malachi 3:2", status:"AWAITING REVELATION", symbol:"🔥" },
  { slug:"jesus-is-a-healer", num:"XVII", title:"JESUS IS A HEALER", purpose:"Jehovah Rapha.", short:"By His stripes we are healed.", image:"/relics/jesus-is-a-healer.png", verse:"Exodus 15:26", status:"AWAITING REVELATION", symbol:"🩹" },
  { slug:"chronicle-stone", num:"XVIII", title:"CHRONICLE STONE", purpose:"Stones of remembrance.", short:"What God has done.", image:"/relics/chronicle-stone.png", verse:"Joshua 4:7", status:"AWAITING REVELATION", symbol:"🪨" },
  { slug:"horn-of-war", num:"XIX", title:"HORN OF WAR", purpose:"Obedience before breakthrough.", short:"Shofar blast. Walls fall.", image:"/relics/horn-of-war.webp", verse:"Joshua 6:20", status:"AWAITING REVELATION", symbol:"📯" },
]
