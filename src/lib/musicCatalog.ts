export type SRKEvent = 
  | { type: 'TRACK_SELECT', trackId: string, ts: number }
  | { type: 'PLAY', trackId: string, ts: number }
  | { type: 'PAUSE', trackId: string, ts: number }

type Listener = (e: SRKEvent) => void
const listeners = new Set<Listener>()
const history: SRKEvent[] = []

export function emit(e: Omit<SRKEvent, 'ts'>) {
  const event = { ...e, ts: Date.now() } as SRKEvent
  history.push(event)
  localStorage.setItem('srk_wall', JSON.stringify(history.slice(-200)))
  listeners.forEach(l => l(event))
}

export function subscribe(fn: Listener) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function getHistory(): SRKEvent[] {
  if (history.length === 0) {
    try {
      const saved = localStorage.getItem('srk_wall')
      if (saved) history.push(...JSON.parse(saved))
    } catch {}
  }
  return [...history].reverse()
}
