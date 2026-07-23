import { callingRelics } from './calling'
import { warfareRelics } from './warfare'
import { healingRelics } from './healing'
import { kingshipRelics } from './kingship'
import { redemptionRelics } from './redemption'

export const CANON_ORDER = [
  { num:'I', slug:'first-song', title:'The First Song', scripture:'Genesis 1:2', sound:'Breath → whisper → drone', hook:'The breath came before the song', status:'unrevealed', category:'genesis', practice:'Breathe 4-4-4 and listen' },
  { num:'II', slug:'stormbreak', title:'Stormbreak', scripture:'Mark 4:39', sound:'Storm → silence', hook:'The storm did not wake Him, your cry did', status:'unrevealed', category:'awakening', practice:'Name the storm out loud' },
  { num:'III', slug:'awakening', title:'Awakening', scripture:'Ephesians 5:14', sound:'Dark → light break', hook:'Wake up sleeper', status:'unrevealed', category:'awakening', practice:'Open eyes, feet on floor, say I am awake' },
  { num:'IV', slug:'ashes-to-altar', title:'Ashes to Altar', scripture:'Isaiah 61:3', sound:'Ashes → altar fire', hook:'What burned became worship', status:'unrevealed', category:'healing', practice:'Give one ash to God today' },
  { num:'V', slug:'fire-forged', title:'Fire Forged', scripture:'1 Peter 1:7', sound:'Hammer + anvil metal', hook:'The fire did not prove I was abandoned. It proved what God was building', status:'unrevealed', category:'healing', practice:'Stay in fire 10 more minutes' },
  { num:'VI', slug:'healing-tide', title:'Healing Tide', scripture:'Psalm 103:3', sound:'Tide in → cleanse', hook:'He heals all your diseases', status:'unrevealed', category:'healing', practice:'Let tide come' },
  { num:'VII', slug:'wolf-fang', title:'Wolf Fang', scripture:'Hebrews 4:12', sound:'Orchestral metal worship', hook:'The night the battle was not against people, but against lies', status:'forged', category:'calling', practice:'Speak truth aloud' },
  { num:'VIII', slug:'identity-restored', title:'Identity Restored', scripture:'2 Cor 5:17', sound:'Old name → new name', hook:'You are not what they called you', status:'unrevealed', category:'calling', practice:'Write new name' },
  { num:'IX', slug:'lions-roar', title:"Lion's Roar", scripture:'Amos 3:8', sound:'Lion roar → choir', hook:'The Lion roared and fear left', status:'unrevealed', category:'calling', practice:'Roar back' },
  { num:'X', slug:'running-wolf-blade', title:'Wolf Blade', scripture:'Psalm 29:3-4', sound:'War drums / choir — 90 BPM — Dm — Psalm 29 thunder', hook:'The night God shattered what you could not', status:'forged', category:'calling', practice:'Let Him break it' },
  { num:'XI', slug:'thunder-drums', title:'Thunder Drums', scripture:'James 1:2-4', sound:'Industrial metal — trial beat', hook:'The fire did not prove abandonment — it proved building', status:'unrevealed', category:'warfare', practice:'Count trial as joy — 1 action' },
  { num:'XII', slug:'war-cry', title:'War Cry', scripture:'2 Chronicles 20:22', sound:'Battle cry → victory', hook:'You won worshipping', status:'unrevealed', category:'warfare', practice:'Shout before win' },
  { num:'XIII', slug:'spirit-mantle', title:'Spirit Mantle', scripture:'Matthew 27:51', sound:'Veil tear → explosion', hook:'The veil tore, you came in', status:'unrevealed', category:'kingship', practice:'Enter bold' },
  { num:'XIV', slug:'tower-of-one', title:'Tower of One', scripture:'Psalm 61:3', sound:'Tower anthem', hook:'You are tower, not tent', status:'unrevealed', category:'kingship', practice:'Stand tall' },
  { num:'XV', slug:'running-wolf', title:'Running Wolf', scripture:'Isaiah 40:31', sound:'Pack running anthem', hook:'They run and not grow weary', status:'unrevealed', category:'kingship', practice:'Run with pack' },
  { num:'XVI', slug:'legacy', title:'Legacy', scripture:'Psalm 78:4', sound:'Legacy choir — generations', hook:'Tell the next generation', status:'unrevealed', category:'redemption', practice:'Write one legacy line' },
]

const EXTRA = [...callingRelics,...warfareRelics,...healingRelics,...kingshipRelics,...redemptionRelics]

export const ALL_RELICS = CANON_ORDER.map(c => {
  const full = EXTRA.find(e => e.slug === c.slug) as any
  return full? {...c,...full, num: c.num, status: full.status === 'forged'? 'forged' : c.status, lyrics: full.lyrics, story: full.story, scriptureText: full.scriptureText, walk: full.walk, title: full.title || c.title } : c
})

export type Relic = typeof ALL_RELICS[0]
