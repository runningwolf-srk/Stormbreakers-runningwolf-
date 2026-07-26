const fs = require('fs')
const path = require('path')

const relicData = [
  { slug:"runningwolf-blade", title:"RUNNINGWOLF BLADE", verse:"Hebrews 4:12", status:"FORGED", short:"The first edge. Word made weapon." },
  { slug:"lord-of-lords", title:"LORD OF LORDS", verse:"Revelation 19:16", status:"FORGED", short:"King of kings." },
  { slug:"blood-of-cross", title:"BLOOD OF CROSS", verse:"Colossians 1:20", status:"IN PROGRESS", short:"Covenant sealed in crimson." },
  { slug:"iron-collide", title:"IRON COLLIDE", verse:"Proverbs 27:17", status:"UNREVEALED", short:"Iron sharpens iron." },
  { slug:"heaven-calling", title:"HEAVEN CALLING", verse:"Philippians 3:14", status:"UNREVEALED", short:"Summons from above." },
  { slug:"war-cry", title:"WAR CRY", verse:"Joel 3:9", status:"UNREVEALED", short:"Wake the warriors." },
  { slug:"redeemed", title:"REDEEMED", verse:"Ephesians 1:7", status:"UNREVEALED", short:"Bought back." },
  { slug:"royal-relic", title:"ROYAL RELIC", verse:"1 Peter 2:9", status:"UNREVEALED", short:"Royal priesthood." },
  { slug:"runningwolf", title:"RUNNINGWOLF", verse:"Isaiah 40:31", status:"UNREVEALED", short:"The man who runs." },
  { slug:"psalm-23", title:"PSALM 23", verse:"Psalm 23:1", status:"UNREVEALED", short:"The Shepherd leads." },
  { slug:"lion-and-lamb", title:"LION AND LAMB", verse:"Isaiah 11:6", status:"UNREVEALED", short:"Majesty and meekness." },
  { slug:"spiritual-mantle", title:"SPIRITUAL MANTLE", verse:"Isaiah 61:1", status:"UNREVEALED", short:"Spirit upon me." },
  { slug:"storm-crown", title:"STORM CROWN", verse:"Psalm 29:3", status:"UNREVEALED", short:"God thundereth." },
  { slug:"god-kept-me-alive", title:"GOD KEPT ME ALIVE", verse:"Psalm 118:17", status:"UNREVEALED", short:"I shall not die but live." },
  { slug:"through-the-storm-i-rise", title:"THROUGH THE STORM I RISE", verse:"Isaiah 43:2", status:"UNREVEALED", short:"Through waters I rise." },
  { slug:"the-fire", title:"THE FIRE", verse:"Malachi 3:2", status:"UNREVEALED", short:"Refiner's fire." },
  { slug:"jesus-is-a-healer", title:"JESUS IS A HEALER", verse:"Exodus 15:26", status:"UNREVEALED", short:"Jehovah Rapha." },
  { slug:"chronicle-stone", title:"CHRONICLE STONE", verse:"Joshua 4:7", status:"UNREVEALED", short:"Stones of remembrance." },
  { slug:"horn-of-war", title:"HORN OF WAR", verse:"Joshua 6:20", status:"UNREVEALED", short:"Shofar blast." },
]

const dir = path.join(process.cwd(), 'public', 'relics')
const files = fs.readdirSync(dir)

let output = `export const BRAND = "ONE CANON • FOUR EXPERIENCES • NINETEEN RELICS • ONE KING"\nexport const TOTAL = 19\n\n`
output += `export type Relic = { slug:string; num:string; title:string; short:string; filename:string; image:string; verse:string; status:"FORGED"|"IN PROGRESS"|"UNREVEALED" }\n\n`
output += `export const ALL_RELICS: Relic[] = [\n`

relicData.forEach((r, i) => {
  // find file that contains part of slug OR just use whatever file is at same index
  const match = files.find(f => f.toLowerCase().includes(r.slug.split('-')[0])) || files[i] || `${r.slug}.png`
  const num = String(i+1).padStart(2,'0')
  output += ` { slug:"${r.slug}", num:"${num}", title:"${r.title}", short:"${r.short}", filename:"${match}", image:"/relics/${match}", verse:"${r.verse}", status:"${r.status}" },\n`
})

output += `]\n`

fs.writeFileSync('data/armory/index.ts', output)
console.log('✅ Generated data/armory/index.ts with YOUR real filenames:')
console.log(files)
