// @ts-nocheck
import { CANON } from '@/lib/constants'

export default function RelicIcon({ id, size = 24 }: { id?: string; size?: number }) {
  const relic = (CANON as any).RELIC_MAP?.[id] || { symbol: '⚔️' }
  return <span style={{ fontSize: size }}>{relic.symbol || '⚔️'}</span>
}
