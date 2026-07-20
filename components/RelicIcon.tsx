// @ts-nocheck
import { getRelic } from '@/lib/constants'
export default function RelicIcon({ id = 'default', size = 32 }: { id?: string; size?: number }) {
  const relic = getRelic(id)
  return <span style={{ fontSize: size }}>{relic?.symbol || '⚔️'}</span>
}
