import { callingRelics } from './calling'
import { warfareRelics } from './warfare'
import { healingRelics } from './healing'
import { kingshipRelics } from './kingship'
import { redemptionRelics } from './redemption'

export const CANON_ORDER = [
  { num:"I", slug:"first-song", title:"The First Song", scripture:"Genesis 1:2", sound:"Breath drone", hook:"The breath came before the song", status:"unrevealed" as const, category:"genesis", practice:"Breathe 4-4-4" },
  { num:"II", slug:"stormbreak", title:"Stormbreak", scripture:"Mark 4:39", sound:"Storm to silence", hook:"Storm did not wake Him, your cry did", status:"unrevealed" as const, category:"awakening", practice:"Name storm" },
  { num:"III", slug:"awakening", title:"Awakening", scripture:"Ephesians 5:14", sound:"Dark to light", hook:"Wake up sleeper", status:"unrevealed" as const, category:"awakening", practice:"Feet on floor" },
  { num:"IV", slug:"ashes-to-altar", title:"Ashes to Altar", scripture:"Isaiah 61:3", sound:"Ashes to altar", hook:"What burned became worship", status:"unrevealed" as const, category:"healing", practice:"Give ash to God" },
  { num:"V", slug:"fire-forged", title:"Fire Forged", scripture:"1 Peter 1:7", sound:"Hammer anvil", hook:"Fire proved what God was building", status:"unrevealed" as const, category:"healing", practice:"Stay 10 min" },
  { num:"VI", slug:"healing-tide", title:"Healing Tide", scripture:"Psalm 103:3", sound:"Tide cleanse", hook:"He heals", status:"unrevealed" as const, category:"healing", practice:"Let tide come" },
  { num:"VII", slug:"wolf-fang", title:"Wolf Fang", scripture:"Hebrews 4:12", sound:"Orchestral metal worship", hook:"Battle not against people but lies", status:"unrevealed" as const, category:"calling", practice:"Speak truth" },
  { num:"VIII", slug:"identity-restored", title:"Identity Restored", scripture:"2 Cor 5:17", sound:"Old to new name", hook:"Not what they called you", status:"unrevealed" as const, category:"calling", practice:"Write new name" },
  { num:"IX", slug:"lions-roar", title:"Lions Roar", scripture:"Amos 3:8", sound:"Lion roar choir", hook:"Lion roared fear left", status:"unrevealed" as const, category:"calling", practice:"Roar back" },
  { num:"X", slug:"running-wolf-blade", title:"Wolf Blade", scripture:"Psalm 29:3-4", sound:"War drums choir", hook:"God shattered what you could not", status:"unrevealed" as const, category:"calling", practice:"Let Him break it" },
  { num:"XI", slug:"thunder-drums", title:"Thunder Drums", scripture:"James 1:2-4", sound:"Industrial trial", hook:"Trial to endurance", status:"unrevealed" as const, category:"warfare", practice:"Count joy" },
  { num:"XII", slug:"war-cry", title:"War Cry", scripture:"2 Chron 20:22", sound:"Battle cry victory", hook:"Won worshipping", status:"unrevealed" as const, category:"warfare", practice:"Shout before win" },
  { num:"XIII", slug:"spirit-mantle", title:"Spirit Mantle", scripture:"Matthew 27:51", sound:"Veil tear", hook:"Veil tore you came in", status:"unrevealed" as const, category:"kingship", practice:"Enter bold" },
  { num:"XIV", slug:"tower-of-one", title:"Tower of One", scripture:"Psalm 61:3", sound:"Tower anthem", hook:"Tower not tent", status:"unrevealed" as const, category:"kingship", practice:"Stand tall" },
  { num:"XV", slug:"running-wolf", title:"Running Wolf", scripture:"Isaiah 40:31", sound:"Pack anthem", hook:"Run not weary", status:"unrevealed" as const, category:"kingship", practice:"Run with pack" },
  { num:"XVI", slug:"legacy", title:"Legacy", scripture:"Psalm 78:4", sound:"Legacy choir", hook:"Tell next generation", status:"unrevealed" as const, category:"redemption", practice:"Write legacy line" },
]

const EXTRA = [...callingRelics,...warfareRelics,...healingRelics,...kingshipRelics,...redemptionRelics]

export const ALL_RELICS = CANON_ORDER.map(c => {
  const full = EXTRA.find(e => e.slug === c.slug) as any
  return full? {...c,...full, num: c.num, status: full.status, title: c.title } : c
})
