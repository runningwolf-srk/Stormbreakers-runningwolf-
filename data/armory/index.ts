import { callingRelics } from './calling'
import { warfareRelics } from './warfare'
import { healingRelics } from './healing'
import { kingshipRelics } from './kingship'
import { redemptionRelics } from './redemption'

export const CANON_ORDER = [
  { num:'I', slug:'first-song', title:'The First Song', scripture:'Genesis 1:2', sound:'Breath → drone', hook:'The breath came before the song', status:'unrevealed' as const, category:'genesis', practice:'Breathe 4-4-4' },
  { num:'II', slug:'stormbreak', title:'Stormbreak', scripture:'Mark 4:39', sound:'Storm → silence', hook:'Storm did not wake Him, your cry did', status:'unrevealed' as const, category:'awakening', practice:'Name storm' },
  { num:'III', slug:'awakening', title:'Awakening', scripture:'Ephesians 5:14', sound:'Dark → light', hook:'Wake up sleeper', status:'unrevealed' as const, category:'awakening', practice:'Feet on floor, I am awake' },
  { num:'IV', slug:'ashes-to-altar', title:'Ashes to Altar', scripture:'Isaiah 61:3', sound:'Ashes → altar', hook:'What burned became worship', status:'unrevealed' as const, category:'healing', practice:'Give ash to God' },
  { num:'V', slug:'fire-forged', title:'Fire Forged', scripture:'1 Peter 1:7', sound:'Hammer + anvil', hook:'Fire proved what God was building', status:'unrevealed' as const, category:'healing', practice:'Stay 10 min more' },
  { num:'VI', slug:'healing-tide', title:'Healing Tide', scripture:'Psalm 103:3', sound:'Tide cleanse', hook:'He heals', status:'unrevealed' as const, category:'healing', practice:'Let tide come' },
  { num:'VII', slug:'wolf-fang', title:'Wolf Fang', scripture:'Hebrews 4:12', sound:'Orchestral metal worship
