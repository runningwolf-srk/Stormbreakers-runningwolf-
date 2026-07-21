import { callingRelics } from './calling'
import { fireRelics } from './fire'
import { healingRelics } from './healing'
import { kingshipRelics } from './kingship'
import { redemptionRelics } from './redemption'
import { warfareRelics } from './warfare'
import { worshipRelics } from './worship'

export const ALL_RELICS = [
  ...callingRelics,
  ...warfareRelics,
  ...fireRelics,
  ...worshipRelics,
  ...healingRelics,
  ...kingshipRelics,
  ...redemptionRelics,
].sort((a,b) => (a.num||'').localeCompare(b.num||''))

export const CANON_META = {
  identity: "ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING",
  mission: [
    "⚔️ The Songs are Relics.",
    "📖 The Chronicles are Testimony.",
    "✝️ The Word is Authority.",
    "📚 The Books are Transformation.",
  ],
  flow: "Hear → Understand → Root → Live = Worship → Story → Foundation → Application"
}
