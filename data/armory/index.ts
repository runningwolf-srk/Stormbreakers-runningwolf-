export const BRAND = "ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING"
export const TOTAL = 19

export type Relic = {
  slug:string; num:string; title:string; short:string;
  image:string; verse:string; status:"FORGED"|"IN PROGRESS"|"UNREVEALED";
  chronicle: { wound:string; battle:string; encounter:string; transformation:string };
  book: { devotional:string; reflection:string; application:string; declaration:string };
}

export const ALL_RELICS: Relic[] = [
  {
    slug:"runningwolf-blade", num:"01", title:"RUNNINGWOLF BLADE",
    short:"The first edge. Word made weapon.",
    image:"/relics/runningwolf-blade.png", verse:"Hebrews 4:12", status:"FORGED",
    chronicle:{ wound:"Believing lies over truth.", battle:"Mind war with fear.", encounter:"Word cut through the noise.", transformation:"I fight with truth, not fear." },
    book:{ devotional:"God's Word cuts through lies.", reflection:"What lie am I believing?", application:"Speak truth daily.", declaration:"I fight with truth, not fear." }
  },
  {
    slug:"lord-of-lords", num:"02", title:"LORD OF LORDS",
    short:"King of kings. Crown above every crown.",
    image:"/relics/lord-of-lords.webp", verse:"Revelation 19:16", status:"FORGED",
    chronicle:{ wound:"Serving lesser kings.", battle:"Identity in achievement.", encounter:"Saw the King on His throne.", transformation:"I serve ONE King." },
    book:{ devotional:"Jesus is King over all.", reflection:"What am I crowning today?", application:"Bow your day to the King.", declaration:"Jesus is Lord of my life." }
  },
  {
    slug:"blood-of-cross", num:"03", title:"BLOOD OF CROSS",
    short:"Covenant sealed in crimson.",
    image:"/relics/blood-of-cross.webp", verse:"Colossians 1:20", status:"IN PROGRESS",
    chronicle:{ wound:"Guilt that wouldn't leave.", battle:"Trying to earn forgiveness.", encounter:"Blood spoke better word.", transformation:"I am redeemed." },
    book:{ devotional:"Blood still speaks.", reflection:"What guilt am I carrying?", application:"Receive forgiveness.", declaration:"I am bought with blood." }
  },
  //... copy same structure for 04-19 - I'll give you full 19 file if you want, but this pattern is the key
  // For 04-19 use placeholder that you can forge later:
  {
    slug:"iron-collide", num:"04", title:"IRON COLLIDE",
    short:"Iron sharpens iron.",
    image:"/relics/iron-collide.webp", verse:"Proverbs 27:17", status:"UNREVEALED",
    chronicle:{ wound:"Isolation.", battle:"Fighting alone.", encounter:"God sent brotherhood.", transformation:"Sharpened and sent." },
    book:{ devotional:"Brotherhood sharpens.", reflection:"Who sharpens me?", application:"Call your brother today.", declaration:"I am not alone." }
  },
  {
    slug:"heaven-calling", num:"05", title:"HEAVEN CALLING",
    short:"Summons from above. Press toward the mark.",
    image:"/relics/heaven-calling.webp", verse:"Philippians 3:14", status:"UNREVEALED",
    chronicle:{ wound:"Drifting without purpose.", battle:"Living for applause.", encounter:"Heard heaven calling.", transformation:"I press toward the mark." },
    book:{ devotional:"Heaven is calling.", reflection:"What am I pressing for?", application:"Fix eyes on the prize.", declaration:"I press toward the mark." }
  },
  //... continue to 19 - same shape
  { slug:"war-cry", num:"06", title:"WAR CRY", short:"Wake the warriors. Sound the alarm.", image:"/relics/war-cry.webp", verse:"Joel 3:9", status:"UNREVEALED", chronicle:{ wound:"Silence in battle.", battle:"Fear of speaking.", encounter:"God gave a war cry.", transformation:"I will sound the alarm." }, book:{ devotional:"Wake up warrior.", reflection:"Where am I silent?", application:"Speak up today.", declaration:"I have a war cry." } },
  { slug:"redeemed", num:"07", title:"REDEEMED", short:"Bought back. Price paid in full.", image:"/relics/redeemed.webp", verse:"Ephesians 1:7", status:"UNREVEALED", chronicle:{ wound:"Sold to shame.", battle:"Trying to buy back life.", encounter:"Redeemer paid it all.", transformation:"I am His." }, book:{ devotional:"Redeemed by grace.", reflection:"What defines me?", application:"Live as redeemed.", declaration:"I am redeemed." } },
  { slug:"royal-relic", num:"08", title:"ROYAL RELIC", short:"Royal priesthood. Chosen generation.", image:"/relics/royal-relic.webp", verse:"1 Peter 2:9", status:"UNREVEALED", chronicle:{ wound:"Orphan spirit.", battle:"Proving worth.", encounter:"Adopted into royalty.", transformation:"I am royal." }, book:{ devotional:"You are chosen.", reflection:"Do I live royal?", application:"Walk as royalty.", declaration:"I am a royal priesthood." } },
  { slug:"runningwolf", num:"09", title:"RUNNINGWOLF", short:"The man who runs and does not grow weary.", image:"/relics/runningwolf.webp", verse:"Isaiah 40:31", status:"UNREVEALED", chronicle:{ wound:"Weary running.", battle:"Running from calling.", encounter:"Strength renewed.", transformation:"I run and don't faint." }, book:{ devotional:"Strength for runners.", reflection:"Where am I weary?", application:"Wait on the Lord.", declaration:"I run and do not grow weary." } },
  { slug:"psalm-23", num:"10", title:"PSALM 23", short:"The Shepherd leads. I shall not want.", image:"/relics/psalm-23.webp", verse:"Psalm 23:1", status:"UNREVEALED", chronicle:{ wound:"Lost sheep.", battle:"Anxious wandering.", encounter:"Shepherd found me.", transformation:"I shall not want." }, book:{ devotional:"The Shepherd provides.", reflection:"What do I lack?", application:"Follow the Shepherd.", declaration:"The Lord is my Shepherd." } },
  { slug:"lion-and-lamb", num:"11", title:"LION AND LAMB", short:"Majesty and meekness dwell together.", image:"/relics/lion-and-lamb.png", verse:"Isaiah 11:6", status:"UNREVEALED", chronicle:{ wound:"Power vs gentleness.", battle:"Loud or silent.", encounter:"Lion and Lamb in one.", transformation:"Bold and humble." }, book:{ devotional:"Lion and Lamb.", reflection:"Am I balanced?", application:"Roar and rest.", declaration:"I carry both." } },
  { slug:"spiritual-mantle", num:"12", title:"SPIRITUAL MANTLE", short:"The covering. The anointing.", image:"/relics/spiritual-mantle.png", verse:"Isaiah 61:1", status:"UNREVEALED", chronicle:{ wound:"Naked and afraid.", battle:"Striving for anointing.", encounter:"Mantle fell.", transformation:"Anointed to heal." }, book:{ devotional:"Anointed.", reflection:"What is my mantle?", application:"Wear it.", declaration:"Spirit of Lord is upon me." } },
  { slug:"storm-crown", num:"13", title:"STORM CROWN", short:"God thundereth marvellously with His voice.", image:"/relics/storm-crown.png", verse:"Psalm 29:3", status:"UNREVEALED", chronicle:{ wound:"Storm crushed me.", battle:"Fearing thunder.", encounter:"Heard God in storm.", transformation:"Crowned in storm." }, book:{ devotional:"Voice in storm.", reflection:"Where is God in my storm?", application:"Listen.", declaration:"God thunders for me." } },
  { slug:"god-kept-me-alive", num:"14", title:"GOD KEPT ME ALIVE", short:"I shall not die, but live and declare His works.", image:"/relics/god-kept-me-alive.png", verse:"Psalm 118:17", status:"UNREVEALED", chronicle:{ wound:"Death near.", battle:"Will to live.", encounter:"God kept me.", transformation:"Alive to declare." }, book:{ devotional:"Kept alive.", reflection:"Why am I still here?", application:"Declare His works.", declaration:"I shall not die but live." } },
  { slug:"through-the-storm-i-rise", num:"15", title:"THROUGH THE STORM I RISE", short:"When waters rise, faith lifts higher.", image:"/relics/through-the-storm-i-rise.png", verse:"Isaiah 43:2", status:"UNREVEALED", chronicle:{ wound:"Drowned in waters.", battle:"Waters over head.", encounter:"He was with me.", transformation:"I rise." }, book:{ devotional:"Through, not under.", reflection:"What water am I in?", application:"Trust His presence.", declaration:"I rise through the storm." } },
  { slug:"the-fire", num:"16", title:"THE FIRE", short:"Refiner's fire. Purified as gold.", image:"/relics/the-fire.png", verse:"Malachi 3:2", status:"UNREVEALED", chronicle:{ wound:"Impure.", battle:"Fire hurt.", encounter:"Refiner stayed.", transformation:"Gold." }, book:{ devotional:"Refined.", reflection:"What is being burned?", application:"Stay in fire.", declaration:"I am refined." } },
  { slug:"jesus-is-a-healer", num:"17", title:"JESUS IS A HEALER", short:"Jehovah Rapha. By His stripes.", image:"/relics/jesus-is-a-healer.png", verse:"Exodus 15:26", status:"UNREVEALED", chronicle:{ wound:"Sick body.", battle:"Doubting healing.", encounter:"Jesus healed.", transformation:"Healed to heal." }, book:{ devotional:"He heals.", reflection:"Where need healing?", application:"Receive.", declaration:"Jesus is my healer." } },
  { slug:"chronicle-stone", num:"18", title:"CHRONICLE STONE", short:"Stones of remembrance. What God has done.", image:"/relics/chronicle-stone.png", verse:"Joshua 4:7", status:"UNREVEALED", chronicle:{ wound:"Forgetting.", battle:"Memories fade.", encounter:"Stone of remembrance.", transformation:"I remember." }, book:{ devotional:"Remember.", reflection:"What has God done?", application:"Write it.", declaration:"I will not forget." } },
  { slug:"horn-of-war", num:"19", title:"HORN OF WAR", short:"Shofar blast. Walls fall.", image:"/relics/horn-of-war.webp", verse:"Joshua 6:20", status:"UNREVEALED", chronicle:{ wound:"Walls too high.", battle:"Circling same wall.", encounter:"Trumpet blast.", transformation:"Walls fell." }, book:{ devotional:"Shout.", reflection:"What wall stands?", application:"Obey and shout.", declaration:"Walls fall before me." } },
]
