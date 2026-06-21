// src/lib/srk.ts
type SRKEvent = { type: string; payload?: any }
type Listener = (e: SRKEvent) => void

const listeners = new Set<Listener>()

export function emit(type: string, payload?: any) {
  const e = { type, payload }
  listeners.forEach(fn => fn(e))
}

export function on(fn: Listener) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
