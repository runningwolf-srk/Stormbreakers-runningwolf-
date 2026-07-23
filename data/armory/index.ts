import { callingRelics } from "./calling"
import { warfareRelics } from "./warfare"
import { healingRelics } from "./healing"
import { kingshipRelics } from "./kingship"
import { redemptionRelics } from "./redemption"

export const CANON_ORDER = [
  { num:"I", slug:"first-song", title:"The First Song", scripture:"Genesis 1:2", category:"genesis", status:"unrevealed" as const, hook:"The breath came before the song", practice:"Breathe 4-4-4" },
  { num:"II", slug:"stormbreak", title:"Stormbreak", scripture:"Mark 4:39", category:"awakening", status:"unrevealed" as const, hook:"Storm did not wake Him, your cry did", practice:"Name storm" },
  { num:"III", slug:"awakening", title:"Awakening", scripture:"Ephesians 5:14", category:"awakening", status:"unrevealed" as const, hook:"Wake up sleeper", practice:"Feet on floor" },
  { num:"IV", slug:"ashes-to-altar", title:"Ashes to Altar", scripture:"Isaiah 61:3", category:"healing", status:"unrevealed" as const, hook:"What burned became worship", practice:"Give ash to God" },
  { num:"V", slug:"fire-forged", title:"Fire Forged", scripture:"1 Peter 1:7", category:"healing", status:"unrevealed" as const, hook:"Fire proved what God was building", practice:"Stay 10 min" },
  { num:"VI", slug:"healing-tide", title:"Healing Tide", scripture:"Psalm 103:3", category:"healing", status:"unrevealed" as const, hook:"He heals", practice:"Let tide come" },
  { num:"VII", slug:"wolf-fang", title:"Wolf Fang", scripture:"Hebrews 4:12", category:"calling", status:"forged" as const, hook:"Battle not against people but lies", practice:"Speak truth" },
  { num:"VIII", slug:"identity-restored", title:"Identity Restored", scripture:"2 Cor 5:17", category:"calling", status:"unrevealed" as const, hook:"Not what they called you", practice:"Write new name" },
  { num:"IX", slug:"lions-roar", title:"Lions Roar", scripture:"Amos 3:8", category:"calling", status:"unrevealed" as const, hook:"Lion roared fear left", practice:"Roar back" },
  { num:"X", slug:"running-wolf-blade", title:"Wolf Blade", scripture:"Psalm 29:3-4", category:"calling", status:"in_progress" as const, hook:"God shattered what you could not", practice:"Let Him break it" },
  { num:"XI", slug:"thunder-drums", title:"Thunder Drums", scripture:"James 1:2-4", category:"warfare", status:"unrevealed" as const, hook:"Trial to endurance", practice:"Count joy" },
  { num:"XII", slug:"war-cry", title:"War Cry", scripture:"2 Chron 20:22", category:"warfare", status:"unrevealed" as const, hook:"Won worshipping", practice:"Shout before win" },
  { num:"XIII", slug:"spirit-mantle", title:"Spirit Mantle", scripture:"Matthew 27:51", category:"kingship", status:"unrevealed" as const, hook:"Veil tore you came in", practice:"Enter bold" },
  { num:"XIV", slug:"tower-of-one", title:"Tower of One", scripture:"Psalm 61:3", category:"kingship", status:"unrevealed" as const, hook:"Tower not tent", practice:"Stand tall" },
  { num:"XV", slug:"running-wolf", title:"Running Wolf", scripture:"Isaiah 40:31", category:"kingship", status:"unrevealed" as const, hook:"Run not weary", practice:"Run with pack" },
  { num:"XVI", slug:"legacy", title:"Legacy", scripture:"Psalm 78:4", category:"redemption", status:"unrevealed" as const, hook:"Tell next generation", practice:"Write legacy line" }
]

const EXTRA = [...callingRelics,...warfareRelics,...healingRelics,...kingshipRelics,...redemptionRelics]

export const ALL_RELICS = CANON_ORDER.map(c => {
  const full = EXTRA.find(e => e.slug === c.slug) as any
  return full ? { ...c, ...full, num: c.num, title: c.title, status: full.status || c.status } : c
})
